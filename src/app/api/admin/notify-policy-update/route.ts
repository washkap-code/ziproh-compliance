/**
 * POST /api/admin/notify-policy-update
 *
 * Admin-only. Emails every platform user that a policy has been updated,
 * via Resend. Body: { documentId: string, changeSummary?: string }
 *
 * Requires env: RESEND_API_KEY, SUPABASE_SERVICE_ROLE_KEY
 */

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { getDocumentById } from "@/lib/documents";
import { sendPolicyUpdateEmails } from "@/lib/email";

export const maxDuration = 60;

export async function POST(req: Request) {
  let body: { documentId?: string; changeSummary?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const documentId = body.documentId?.trim();
  if (!documentId) {
    return NextResponse.json({ error: "documentId is required" }, { status: 400 });
  }

  const doc = getDocumentById(documentId);
  if (!doc) {
    return NextResponse.json({ error: `Unknown policy: ${documentId}` }, { status: 404 });
  }

  // ── Auth: must be a signed-in admin ───────────────────────────────────────
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { /* read-only */ },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const { data: me } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!me?.is_admin) {
    return NextResponse.json({ error: "Admin access required" }, { status: 403 });
  }

  // ── Service-role client to read all recipient emails ─────────────────────
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return NextResponse.json(
      { error: "SUPABASE_SERVICE_ROLE_KEY is not configured on the server" },
      { status: 500 }
    );
  }

  const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey);
  const { data: profiles, error: profErr } = await admin
    .from("profiles")
    .select("email, first_name")
    .not("email", "is", null);

  if (profErr) {
    return NextResponse.json({ error: profErr.message }, { status: 500 });
  }

  const recipients = (profiles ?? [])
    .filter((p) => !!p.email)
    .map((p) => ({
      to: p.email as string,
      firstName: p.first_name ?? null,
      policyTitle: doc.title,
      policyId: doc.id,
      changeSummary: body.changeSummary ?? null,
    }));

  if (recipients.length === 0) {
    return NextResponse.json({ error: "No recipients found" }, { status: 404 });
  }

  try {
    const { sent, failed } = await sendPolicyUpdateEmails(recipients);
    return NextResponse.json({ ok: true, sent, failed, policy: doc.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Email sending failed" },
      { status: 500 }
    );
  }
}
