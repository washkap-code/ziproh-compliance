import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function makeClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
}

// GET /api/annotations/[policyId] — fetch org annotation for this policy
export async function GET(_req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ annotation: null });

  const { data: profile } = await sb.from("profiles").select("org_name").eq("id", user.id).single();
  if (!profile) return NextResponse.json({ annotation: null });

  const { data } = await sb.from("policy_annotations")
    .select("*")
    .eq("org_id", profile.org_name)
    .eq("policy_id", policyId)
    .single();

  return NextResponse.json({ annotation: data ?? null });
}

// POST /api/annotations/[policyId] — upsert annotation
export async function POST(req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan, first_name, last_name").eq("id", user.id).single();
  if (!profile) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  if (profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise plan required" }, { status: 403 });

  const { content } = await req.json();
  if (!content?.trim()) return NextResponse.json({ error: "Content is required" }, { status: 400 });

  const { data, error } = await sb.from("policy_annotations").upsert({
    org_id: profile.org_name,
    policy_id: policyId,
    content: content.trim(),
    created_by: `${profile.first_name} ${profile.last_name}`.trim(),
    updated_at: new Date().toISOString(),
  }, { onConflict: "org_id,policy_id" }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ annotation: data });
}

// DELETE /api/annotations/[policyId] — remove annotation
export async function DELETE(_req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile || profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise required" }, { status: 403 });

  const { error } = await sb.from("policy_annotations")
    .delete()
    .eq("org_id", profile.org_name)
    .eq("policy_id", policyId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
