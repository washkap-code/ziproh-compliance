/**
 * /api/policies/adopt
 *
 * POST — Save or update a policy adoption record for the authenticated org.
 *        An adoption records the reviewer name, role, and date when the org
 *        formally adopted a Ziproh policy as their own.
 *
 * GET  — Check adoption status for a single policy.
 *        ?documentId=xxx
 */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

function makeSupabase(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { /* read-only */ },
      },
    }
  );
}

// ─── POST /api/policies/adopt ─────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const supabase = makeSupabase(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  let body: { documentId?: string; reviewerName?: string; reviewerRole?: string; adoptedAt?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { documentId, reviewerName, reviewerRole, adoptedAt } = body;

  if (!documentId || !reviewerName || !reviewerRole || !adoptedAt) {
    return NextResponse.json(
      { error: "documentId, reviewerName, reviewerRole, and adoptedAt are required" },
      { status: 400 }
    );
  }

  // Upsert — update if already exists
  const { data, error } = await supabase
    .from("policy_adoptions")
    .upsert(
      {
        org_id:        user.id,
        document_id:   documentId,
        reviewer_name: reviewerName,
        reviewer_role: reviewerRole,
        adopted_at:    adoptedAt,
      },
      { onConflict: "org_id,document_id" }
    )
    .select()
    .single();

  if (error) {
    console.error("[adopt] upsert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ adoption: data }, { status: 200 });
}

// ─── GET /api/policies/adopt?documentId=xxx ───────────────────────────────────

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const supabase = makeSupabase(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const documentId = req.nextUrl.searchParams.get("documentId");
  if (!documentId) {
    return NextResponse.json({ error: "documentId is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("policy_adoptions")
    .select("reviewer_name, reviewer_role, adopted_at, created_at")
    .eq("org_id", user.id)
    .eq("document_id", documentId)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ adoption: data ?? null });
}
