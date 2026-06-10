/**
 * POST /api/admin/pdf-password
 *
 * Admin-only route to set or clear the per-org PDF unlock (owner) password.
 * This password allows the org to unlock their PDF for editing/copying if needed.
 *
 * Body: { orgId: string; password: string | null }
 *   - orgId: the user.id / profile.id of the target organisation
 *   - password: the new owner password string, or null to revert to platform default
 */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const ADMIN_EMAILS = ["waskap@icloud.com", "melary@ziproh.com"];

export async function POST(req: NextRequest) {
  // ── Auth + admin check ────────────────────────────────────────────────────
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  let body: { orgId?: string; password?: string | null };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { orgId, password } = body;
  if (!orgId) {
    return NextResponse.json({ error: "orgId is required" }, { status: 400 });
  }

  // ── Update profile ────────────────────────────────────────────────────────
  const { error } = await supabase
    .from("profiles")
    .update({ pdf_unlock_password: password ?? null })
    .eq("id", orgId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: password
      ? `PDF unlock password set for org ${orgId}`
      : `PDF unlock password cleared — org will use platform default`,
  });
}

// ── GET /api/admin/pdf-password?email=xxx — look up org by email ──────────────

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "email param required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, org_name, email, pdf_unlock_password")
    .eq("email", email)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data)  return NextResponse.json({ error: "Organisation not found" }, { status: 404 });

  return NextResponse.json({
    orgId:       data.id,
    orgName:     data.org_name,
    email:       data.email,
    hasPassword: !!data.pdf_unlock_password,
    // Don't return the actual password value in GET response
  });
}
