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

// GET /api/sites — list all sites for the authenticated user's org
export async function GET() {
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  if (profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise plan required" }, { status: 403 });

  const { data: sites, error } = await sb
    .from("sites")
    .select("*")
    .eq("org_id", profile.org_name)
    .eq("active", true)
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ sites: sites ?? [] });
}

// POST /api/sites — create a new site
export async function POST(req: Request) {
  const sb = await makeClient();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await sb.from("profiles").select("org_name, plan").eq("id", user.id).single();
  if (!profile) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  if (profile.plan !== "enterprise") return NextResponse.json({ error: "Enterprise plan required" }, { status: 403 });

  const body = await req.json();
  const { name, address, service_type, regulator } = body;
  if (!name?.trim()) return NextResponse.json({ error: "Site name is required" }, { status: 400 });

  const { data: site, error } = await sb.from("sites").insert({
    org_id: profile.org_name,
    name: name.trim(),
    address: address?.trim() ?? null,
    service_type: service_type?.trim() ?? null,
    regulator: regulator ?? "CQC",
  }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ site });
}
