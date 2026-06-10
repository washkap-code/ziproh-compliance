import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, role } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: "email and firstName are required" }, { status: 400 });
    }

    // ── 1. Authenticate the calling user via SSR client ──────────────────────
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll() { /* read-only in route handlers */ },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── 2. Insert staff_members row (idempotent via upsert) ───────────────────
    const { error: insertErr } = await supabase
      .from("staff_members")
      .insert({
        org_id: user.id,
        email: email.trim().toLowerCase(),
        first_name: firstName,
        last_name: lastName ?? null,
        role: role ?? "staff",
        status: "invited",
      });

    if (insertErr) {
      // 23505 = unique violation — already invited
      if (insertErr.code === "23505") {
        return NextResponse.json(
          { error: "This email is already in your staff list." },
          { status: 409 }
        );
      }
      return NextResponse.json({ error: insertErr.message }, { status: 500 });
    }

    // ── 3. Try to send a real Supabase invite email (requires service role key) ─
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceKey) {
      const admin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        serviceKey,
        { auth: { autoRefreshToken: false, persistSession: false } }
      );

      const origin = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ziprohtraining.co.uk";

      await admin.auth.admin.inviteUserByEmail(email.trim().toLowerCase(), {
        redirectTo: `${origin}/auth/callback?next=/dashboard`,
        data: {
          first_name: firstName,
          last_name: lastName ?? "",
          // Don't set org_name / plan — those belong to the org owner
          // The handle_new_user trigger will auto-link this staff member
        },
      });
    }
    // If no service key, the manager sees a copy-paste link instead (fallback handled client-side)

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[staff/invite]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
