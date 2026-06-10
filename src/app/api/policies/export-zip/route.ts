/**
 * GET /api/policies/export-zip
 *
 * Generates every formally adopted policy as a branded, encrypted PDF and
 * streams them back as a single ZIP — "inspection day" bulk download.
 *
 * Rules:
 *  - Auth required
 *  - Only adopted policies are included (the org's formal portfolio)
 *  - Trial users receive watermarked previews, same as single downloads
 *  - Capped at 70 documents as a safety guard
 */

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import JSZip from "jszip";
import { DOCUMENT_CONTENT, getDocumentById } from "@/lib/documents";
import { generatePolicyPdf } from "@/lib/pdf-generator";
import { applyOrgName } from "@/lib/policy-pdf-helpers";
import type { AdoptionInfo } from "@/lib/pdf-generator";

export const maxDuration = 120; // bulk generation can take a while

export async function GET() {
  // ── Auth ──────────────────────────────────────────────────────────────────
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
    return NextResponse.json({ error: "Unauthorised — please sign in" }, { status: 401 });
  }

  // ── Profile + adoptions ───────────────────────────────────────────────────
  const [profileRes, adoptionsRes] = await Promise.all([
    supabase
      .from("profiles")
      .select("org_name, subscription_status, logo_url, pdf_unlock_password")
      .eq("id", user.id)
      .single(),
    supabase
      .from("policy_adoptions")
      .select("document_id, reviewer_name, reviewer_role, adopted_at")
      .eq("org_id", user.id),
  ]);

  const profile  = profileRes.data;
  const orgName  = profile?.org_name ?? "Your Organisation";
  const isTrial  =
    (profile?.subscription_status ?? "trialing") === "trialing" ||
    profile?.subscription_status == null;

  const adoptions = adoptionsRes.data ?? [];
  if (adoptions.length === 0) {
    return NextResponse.json(
      { error: "No adopted policies yet — adopt policies first, then export your portfolio." },
      { status: 404 }
    );
  }

  const ownerPassword =
    profile?.pdf_unlock_password ||
    process.env.PDF_OWNER_PASSWORD ||
    "Ziproh@Secure2026!";

  // ── Org logo (fetched once, reused on every cover) ───────────────────────
  let orgLogoBuffer: Buffer | null = null;
  if (profile?.logo_url) {
    try {
      const res = await fetch(profile.logo_url, { signal: AbortSignal.timeout(4000) });
      if (res.ok) orgLogoBuffer = Buffer.from(await res.arrayBuffer());
    } catch { /* continue without logo */ }
  }

  // ── Generate PDFs into the ZIP ────────────────────────────────────────────
  const zip = new JSZip();
  const errors: string[] = [];
  const docsToExport = adoptions.slice(0, 70);

  for (const adoption of docsToExport) {
    const doc = getDocumentById(adoption.document_id);
    const rawContent = DOCUMENT_CONTENT[adoption.document_id];
    if (!doc || !rawContent) {
      errors.push(adoption.document_id);
      continue;
    }

    const adoptionInfo: AdoptionInfo = {
      reviewerName: adoption.reviewer_name,
      reviewerRole: adoption.reviewer_role,
      adoptedAt:    adoption.adopted_at,
    };

    const formattedDate = new Date(doc.lastUpdated).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });

    try {
      const buffer = await generatePolicyPdf({
        policyId:    doc.id,
        title:       doc.title,
        version:     doc.version,
        lastUpdated: formattedDate,
        keyQuestion: doc.keyQuestion,
        category:    doc.subcategory ?? doc.category,
        regulators:  doc.regulators,
        orgName,
        orgLogoBuffer,
        adoption:    adoptionInfo,
        ownerPassword,
        isTrial,
        content:     applyOrgName(rawContent, orgName),
      });

      const safeTitle = doc.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
      const prefix    = isTrial ? "TRIAL-PREVIEW-" : "";
      zip.file(`${prefix}${doc.id}-${safeTitle}.pdf`, buffer);
    } catch (err) {
      console.error(`[export-zip] failed for ${doc.id}:`, err);
      errors.push(adoption.document_id);
    }
  }

  const generatedCount = docsToExport.length - errors.length;
  if (generatedCount === 0) {
    return NextResponse.json({ error: "PDF generation failed for all policies" }, { status: 500 });
  }

  // Manifest so inspectors can see what's included
  const manifestLines = [
    `${orgName} — Policy Portfolio Export`,
    `Generated: ${new Date().toLocaleString("en-GB")}`,
    `Policies included: ${generatedCount}`,
    isTrial ? "NOTE: Trial account — documents are watermarked previews." : "",
    errors.length ? `Skipped (generation error): ${errors.join(", ")}` : "",
  ].filter(Boolean);
  zip.file("MANIFEST.txt", manifestLines.join("\n"));

  const zipBuffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  const safeOrg = orgName.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  return new NextResponse(new Uint8Array(zipBuffer), {
    status: 200,
    headers: {
      "Content-Type":        "application/zip",
      "Content-Disposition": `attachment; filename="${safeOrg}-policy-portfolio.zip"`,
      "Content-Length":      String(zipBuffer.byteLength),
      "Cache-Control":       "no-store",
    },
  });
}
