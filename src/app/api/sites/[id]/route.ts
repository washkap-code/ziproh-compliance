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

// GET /api/sites/[id] — get site details + staff count + compliance score
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: siteId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile || profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise required" }, { status: 403 });

  const { data: site } = await sb.from("sites").select("*").eq("id", siteId).eq("org_id", profile.org_name).single();
  if (!site) return NextResponse.json({ error: "Site not found" }, { status: 404 });

  const { data: staff } = await sb.from("profiles").select("id, first_name, last_name, email").eq("org_name", profile.org_name).eq("site_id", siteId);

  // Compliance score: avg read-rate across staff at this site
  let complianceScore = 0;
  if (staff && staff.length > 0) {
    const staffIds = staff.map(s => s.id);
    const { data: readRecords } = await sb.from("read_records").select("user_id, document_id").in("user_id", staffIds);
    const TOTAL_POLICIES = 89;
    const perStaff = staffIds.map(id => {
      const reads = (readRecords ?? []).filter(r => r.user_id === id).length;
      return Math.min(reads / TOTAL_POLICIES, 1) * 100;
    });
    complianceScore = Math.round(perStaff.reduce((a, b) => a + b, 0) / perStaff.length);
  }

  return NextResponse.json({ site, staff: staff ?? [], audits: [], complianceScore });
}

// PATCH /api/sites/[id] — update site
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: siteId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile || profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise required" }, { status: 403 });

  const body = await req.json();
  const { data: site, error } = await sb.from("sites").update(body).eq("id", siteId).eq("org_id", profile.org_name).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ site });
}

// DELETE /api/sites/[id] — soft delete (set active = false)
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: siteId } = await params;
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile || profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise required" }, { status: 403 });

  const { error } = await sb.from("sites").update({ active: false }).eq("id", siteId).eq("org_id", profile.org_name);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
