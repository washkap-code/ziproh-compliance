/**
 * GET /api/policy-pdf/[id]
 *
 * Generates and streams an encrypted, branded A4 PDF for the given policy.
 *
 * Security layers:
 *  1. Auth required — 401 if not signed in
 *  2. Trial users get a watermarked, truncated preview; active users get the full document
 *  3. PDF encrypted with ownerPassword (per-org override or platform default)
 *     — userPassword is empty (opens freely) but copy/edit/annotate are locked
 *
 * Query params:
 *  None — all data fetched from Supabase by the authenticated user's session
 */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { DOCUMENT_CONTENT, getDocumentById } from "@/lib/documents";
import { generatePolicyPdf } from "@/lib/pdf-generator";
import { applyOrgName } from "@/lib/policy-pdf-helpers";
import type { AdoptionInfo } from "@/lib/pdf-generator";

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> | { id: string } }
) {
  const params = await Promise.resolve(context.params);
  const { id } = params;

  // ── 1. Auth ──────────────────────────────────────────────────────────────────
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() { /* read-only in route handler */ },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised — please sign in" }, { status: 401 });
  }

  // ── 2. Policy lookup ──────────────────────────────────────────────────────────
  const doc = getDocumentById(id);
  if (!doc) {
    return NextResponse.json({ error: "Policy not found" }, { status: 404 });
  }

  const rawContent = DOCUMENT_CONTENT[id];
  if (!rawContent) {
    return NextResponse.json({ error: "Policy content not found" }, { status: 404 });
  }

  // ── 3. Fetch profile + adoption in parallel ───────────────────────────────────
  const [profileRes, adoptionRes] = await Promise.all([
    supabase
      .from("profiles")
      .select("org_name, subscription_status, logo_url, pdf_unlock_password")
      .eq("id", user.id)
      .single(),
    supabase
      .from("policy_adoptions")
      .select("reviewer_name, reviewer_role, adopted_at")
      .eq("org_id", user.id)
      .eq("document_id", id)
      .maybeSingle(),
  ]);

  const profile          = profileRes.data;
  const orgName          = profile?.org_name ?? "Your Organisation";
  const subscriptionStatus = profile?.subscription_status ?? "trialing";
  const isTrial          = subscriptionStatus === "trialing" || subscriptionStatus === null;
  const logoUrl          = profile?.logo_url ?? null;

  // ── 4. PDF owner password (per-org override or platform default) ──────────────
  const ownerPassword =
    profile?.pdf_unlock_password ||
    process.env.PDF_OWNER_PASSWORD ||
    "Ziproh@Secure2026!";

  // ── 5. Fetch org logo ─────────────────────────────────────────────────────────
  let orgLogoBuffer: Buffer | null = null;
  if (logoUrl) {
    try {
      const res = await fetch(logoUrl, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        const ab = await res.arrayBuffer();
        orgLogoBuffer = Buffer.from(ab);
      }
    } catch {
      // Logo fetch failed — continue without it
    }
  }

  // ── 6. Adoption info ──────────────────────────────────────────────────────────
  let adoption: AdoptionInfo | null = null;
  if (adoptionRes.data) {
    adoption = {
      reviewerName: adoptionRes.data.reviewer_name,
      reviewerRole: adoptionRes.data.reviewer_role,
      adoptedAt:    adoptionRes.data.adopted_at,
    };
  }

  // ── 7. Generate PDF ───────────────────────────────────────────────────────────
  const content = applyOrgName(rawContent, orgName);

  const formattedDate = new Date(doc.lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  try {
    const buffer = await generatePolicyPdf({
      policyId:      doc.id,
      title:         doc.title,
      version:       doc.version,
      lastUpdated:   formattedDate,
      keyQuestion:   doc.keyQuestion,
      category:      doc.subcategory ?? doc.category,
      regulators:    doc.regulators,
      orgName,
      orgLogoBuffer,
      adoption,
      ownerPassword,
      isTrial,
      content,
    });

    const safeTitle = doc.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
    const filename  = isTrial
      ? `TRIAL-PREVIEW-${doc.id}-${safeTitle}.pdf`
      : `${doc.id}-${safeTitle}.pdf`;

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type":        "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length":      String(buffer.byteLength),
        "Cache-Control":       "no-store, no-cache, private",
        "X-Trial-Preview":     isTrial ? "true" : "false",
      },
    });
  } catch (err) {
    console.error("[policy-pdf] generation error:", err);
    return NextResponse.json(
      { error: "PDF generation failed", detail: String(err) },
      { status: 500 }
    );
  }
}
