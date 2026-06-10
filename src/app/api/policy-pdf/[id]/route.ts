/**
 * GET /api/policy-pdf/[id]?org=OrgName
 *
 * Streams a branded, professional A4 PDF for the requested policy.
 * Uses @react-pdf/renderer (server-side only — listed in serverExternalPackages).
 *
 * Returns: application/pdf  |  Content-Disposition: attachment
 */

import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { DOCUMENT_CONTENT, getDocumentById } from "@/lib/documents";
import { PolicyPDFDocument } from "@/components/PolicyPDFDocument";
import type { DocumentContent } from "@/lib/documents";

// ─── Org-name substitution (same logic as the viewer page) ────────────────────
function sub(text: string, org: string) {
  return text.replace(/\[ORGANISATION_NAME\]/g, org);
}

function applyOrgName(content: DocumentContent, org: string): DocumentContent {
  type Sec = import("@/lib/documents").PolicySection;
  function subSec(s: Sec): Sec {
    return {
      ...s,
      body:        s.body        ? sub(s.body, org)        : undefined,
      warningBox:  s.warningBox  ? sub(s.warningBox, org)  : undefined,
      practiceBox: s.practiceBox ? sub(s.practiceBox, org) : undefined,
      legalBox:    s.legalBox    ? sub(s.legalBox, org)    : undefined,
      subSections: s.subSections?.map(subSec),
    };
  }
  return {
    ...content,
    statement:        content.statement        ? sub(content.statement, org)        : undefined,
    purpose:          content.purpose          ? sub(content.purpose, org)          : undefined,
    scope:            content.scope            ? sub(content.scope, org)            : undefined,
    responsibilities: content.responsibilities?.map((r) => ({
      role:   r.role,
      duties: r.duties.map((d) => sub(d, org)),
    })),
    keyPoints:        content.keyPoints?.map((kp) => sub(kp, org)),
    legislation:      content.legislation,
    training:         content.training         ? sub(content.training, org)         : undefined,
    monitoring:       content.monitoring       ? sub(content.monitoring, org)       : undefined,
    sections:         content.sections?.map(subSec),
    procedure:        content.procedure?.map(subSec),
  };
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> | { id: string } }
) {
  // Next.js 15+ makes params a Promise; handle both patterns
  const params = await Promise.resolve(context.params);
  const { id } = params;

  const org = request.nextUrl.searchParams.get("org") ?? "Your Organisation";

  const doc = getDocumentById(id);
  if (!doc) {
    return NextResponse.json({ error: "Policy not found" }, { status: 404 });
  }

  const rawContent = DOCUMENT_CONTENT[id];
  if (!rawContent) {
    return NextResponse.json({ error: "Policy content not found" }, { status: 404 });
  }

  const content = applyOrgName(rawContent, org);

  const formattedDate = new Date(doc.lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  try {
    const element = React.createElement(PolicyPDFDocument, {
      policyId:    doc.id,
      title:       doc.title,
      version:     doc.version,
      lastUpdated: formattedDate,
      keyQuestion: doc.keyQuestion,
      orgName:     org,
      content,
    });

    const buffer   = await renderToBuffer(element);
    const safeTitle = doc.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
    const filename  = `${doc.id}-${safeTitle}.pdf`;

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":        "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length":      String(buffer.byteLength),
        "Cache-Control":       "no-store",
      },
    });
  } catch (err) {
    console.error("[policy-pdf] render error:", err);
    return NextResponse.json(
      { error: "PDF generation failed", detail: String(err) },
      { status: 500 }
    );
  }
}
