/**
 * pdf-generator.ts
 * ─────────────────
 * Generates encrypted, branded compliance policy PDFs using pdfkit.
 *
 * Security:
 *  - RC4 encryption via ownerPassword (no user password — opens freely)
 *  - Permissions: print allowed, copy/edit/annotate/assemble denied
 *  - Trial PDFs: diagonal watermark + content truncated to first 2 sections
 *
 * Logo: fetched from orgLogoUrl and embedded on cover page
 * Adoption: reviewer name/role/date printed on cover adoption panel
 */

// pdfkit is a CommonJS module
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PDFDocument = require("pdfkit") as typeof import("pdfkit");

import type { DocumentContent, PolicySection } from "./documents";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AdoptionInfo {
  reviewerName: string;
  reviewerRole: string;
  adoptedAt: string;   // ISO date YYYY-MM-DD
}

export interface PdfGeneratorOptions {
  policyId:      string;
  title:         string;
  version:       string;
  lastUpdated:   string;
  keyQuestion:   string;
  category:      string;
  regulators:    string[];
  orgName:       string;
  orgLogoBuffer?: Buffer | null;
  adoption?:     AdoptionInfo | null;
  ownerPassword: string;
  isTrial:       boolean;
  content:       DocumentContent;
}

// ─── Colours ──────────────────────────────────────────────────────────────────

const C = {
  brand:    "#2E6FFF",
  dark:     "#0A1629",
  mid:      "#374151",
  muted:    "#6B7280",
  light:    "#EFF4FF",
  white:    "#FFFFFF",
  warn:     "#FEF3C7",
  warnBdr:  "#F59E0B",
  good:     "#D1FAE5",
  goodBdr:  "#10B981",
  legal:    "#DBEAFE",
  legalBdr: "#2E6FFF",
  rule:     "#E5E7EB",
  trial:    "#DC2626",
  adopted:  "#064E3B",
  adoptedBg:"#D1FAE5",
};

// KQ colours
const KQ_COLOUR: Record<string, string> = {
  Safe:       "#22c55e",
  Effective:  "#2E6FFF",
  Caring:     "#ec4899",
  Responsive: "#f59e0b",
  "Well-Led":  "#8b5cf6",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function colourFill(doc: PDFKit.PDFDocument, hex: string) {
  doc.fillColor(hex as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
}

function colourStroke(doc: PDFKit.PDFDocument, hex: string) {
  doc.strokeColor(hex as Parameters<PDFKit.PDFDocument["strokeColor"]>[0]);
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch {
    return iso;
  }
}

// ─── Page geometry ─────────────────────────────────────────────────────────────

const PAGE_W   = 595.28;  // A4 width (pt)
const PAGE_H   = 841.89;  // A4 height (pt)
const MARGIN   = 56;
const CONTENT_W = PAGE_W - MARGIN * 2;

// ─── Fixed-position writing ───────────────────────────────────────────────────
//
// pdfkit auto-adds a page whenever text is written below the bottom margin.
// Headers/footers/watermarks are drawn at absolute positions (often inside the
// margin area), so we must temporarily disable the bottom margin and restore
// the cursor afterwards — otherwise the pageAdded handler that draws the footer
// triggers a new page, which fires pageAdded again → infinite recursion
// → "Maximum call stack size exceeded" → 500 "PDF download failed".

function withFixedPosition(doc: PDFKit.PDFDocument, fn: () => void) {
  const savedX = doc.x;
  const savedY = doc.y;
  const savedBottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;
  try {
    fn();
  } finally {
    doc.page.margins.bottom = savedBottom;
    doc.x = savedX;
    doc.y = savedY;
  }
}

// ─── Running header / footer ──────────────────────────────────────────────────

function addRunningHeader(
  doc: PDFKit.PDFDocument,
  orgName: string,
  policyRef: string,
  isTrial: boolean,
) {
  const y = 18;
  doc.save();
  withFixedPosition(doc, () => {
    // Left: org name
    doc.fontSize(7.5).font("Helvetica-Bold");
    colourFill(doc, C.brand);
    doc.text(orgName.toUpperCase(), MARGIN, y, { lineBreak: false });

    // Right: policy ref
    doc.fontSize(7.5).font("Helvetica");
    colourFill(doc, C.muted);
    doc.text(
      isTrial ? "TRIAL PREVIEW — NOT FOR DISTRIBUTION" : `Ref: ${policyRef.toUpperCase()}`,
      MARGIN,
      y,
      { width: CONTENT_W, align: "right", lineBreak: false },
    );

    // Rule under header
    const ruleY = y + 13;
    colourStroke(doc, isTrial ? C.trial : C.brand);
    doc.moveTo(MARGIN, ruleY).lineTo(PAGE_W - MARGIN, ruleY).lineWidth(0.75).stroke();
  });
  doc.restore();
}

function addRunningFooter(
  doc: PDFKit.PDFDocument,
  orgName: string,
  policyId: string,
  pageNum: number,
) {
  const y = PAGE_H - 28;
  doc.save();
  withFixedPosition(doc, () => {
    // Rule above footer
    colourStroke(doc, C.rule);
    doc.moveTo(MARGIN, y - 4).lineTo(PAGE_W - MARGIN, y - 4).lineWidth(0.5).stroke();

    doc.fontSize(7).font("Helvetica");
    colourFill(doc, C.muted);

    // Left: confidentiality notice
    doc.text(
      `CONFIDENTIAL — Adopted by ${orgName}. Unauthorised reproduction prohibited.`,
      MARGIN, y,
      { lineBreak: false },
    );

    // Right: page number
    doc.text(
      `Page ${pageNum}`,
      MARGIN, y,
      { width: CONTENT_W, align: "right", lineBreak: false },
    );
  });
  doc.restore();
}

// ─── Trial watermark ──────────────────────────────────────────────────────────

function addTrialWatermark(doc: PDFKit.PDFDocument) {
  doc.save();
  withFixedPosition(doc, () => {
    doc.translate(PAGE_W / 2, PAGE_H / 2);
    doc.rotate(-45);
    doc.opacity(0.1);
    doc.fontSize(64).font("Helvetica-Bold");
    doc.fillColor(C.trial as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
    doc.text("TRIAL PREVIEW", -200, -36, { width: 400, align: "center", lineBreak: false });
    doc.fontSize(28).font("Helvetica");
    doc.text("NOT FOR DISTRIBUTION", -200, 42, { width: 400, align: "center", lineBreak: false });
  });
  doc.restore();
}

// ─── Cover page ───────────────────────────────────────────────────────────────

async function drawCoverPage(
  doc: PDFKit.PDFDocument,
  opts: PdfGeneratorOptions,
) {
  const kqColour = KQ_COLOUR[opts.keyQuestion] ?? C.brand;
  const [r, g, b] = hexToRgb(kqColour);

  // ── Full-bleed brand header ──
  const headerH = 240;
  doc.rect(0, 0, PAGE_W, headerH).fill([r, g, b] as [number, number, number]);

  // Decorative accent strip
  const [r2, g2, b2] = hexToRgb(C.brand);
  doc.rect(0, headerH - 6, PAGE_W, 6).fill([r2, g2, b2] as [number, number, number]);

  // Logo (top-left inside header) — presented on a white rounded card so any
  // logo (dark, light, or transparent background) sits cleanly on the brand band
  let logoBottom = 36;
  if (opts.orgLogoBuffer) {
    try {
      const cardX = MARGIN;
      const cardY = 26;
      const cardW = 150;
      const cardH = 62;
      doc.roundedRect(cardX, cardY, cardW, cardH, 8)
        .fill(C.white as Parameters<PDFKit.PDFDocument["fill"]>[0]);
      doc.image(opts.orgLogoBuffer, cardX + 12, cardY + 9, {
        fit: [cardW - 24, cardH - 18],
        align: "center",
        valign: "center",
      });
      logoBottom = cardY + cardH + 8;   // content starts below the card
    } catch {
      // logo load failed — skip silently
    }
  }

  // "ZIPROH COMPLIANCE" watermark text if no logo
  if (!opts.orgLogoBuffer) {
    doc.fontSize(9).font("Helvetica-Bold");
    doc.fillColor("rgba(255,255,255,0.5)" as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
    doc.text("ZIPROH COMPLIANCE", MARGIN, 32, { lineBreak: false });
    logoBottom = 52;
  }

  // Key question badge
  doc.fontSize(10).font("Helvetica-Bold");
  doc.fillColor("rgba(255,255,255,0.75)" as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
  doc.text(`${opts.keyQuestion} · ${opts.category}`, MARGIN, logoBottom + 14, { lineBreak: false });

  // Policy title — shrink slightly for long titles so the header band never overflows
  const titleSize = opts.title.length > 45 ? 21 : 26;
  doc.fontSize(titleSize).font("Helvetica-Bold");
  doc.fillColor("white" as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
  const titleY = logoBottom + 34;
  doc.text(opts.title, MARGIN, titleY, { width: CONTENT_W - 20, lineBreak: true });

  const afterTitle = doc.y;

  // Version + date bar
  doc.fontSize(10).font("Helvetica");
  doc.fillColor("rgba(255,255,255,0.8)" as Parameters<PDFKit.PDFDocument["fillColor"]>[0]);
  const metaY = Math.min(afterTitle + 10, headerH - 42);
  doc.text(
    `Version ${opts.version}   ·   Updated ${opts.lastUpdated}   ·   ${opts.regulators.join(", ")}`,
    MARGIN,
    metaY,
    { width: CONTENT_W, lineBreak: false },
  );

  // ── Org adoption badge (just below header) ──
  const bodyTopY = headerH + 20;

  if (opts.isTrial) {
    // Trial notice box
    doc.rect(MARGIN, bodyTopY, CONTENT_W, 52).fill(C.warn as Parameters<PDFKit.PDFDocument["fill"]>[0]);
    colourFill(doc, C.warnBdr);
    doc.rect(MARGIN, bodyTopY, 4, 52).fill();
    colourFill(doc, "#92400E");
    doc.fontSize(9).font("Helvetica-Bold");
    doc.text("TRIAL PREVIEW — For evaluation purposes only", MARGIN + 14, bodyTopY + 8, { lineBreak: false });
    colourFill(doc, "#92400E");
    doc.fontSize(8.5).font("Helvetica");
    doc.text(
      "This document is provided for trial use only and must not be distributed, implemented, or relied upon. Subscribe to access the full, encrypted, adopted policy.",
      MARGIN + 14, bodyTopY + 22, { width: CONTENT_W - 20 },
    );
    doc.moveDown(0.5);
  } else if (opts.adoption) {
    // Adoption panel — green
    const panelH = 90;
    doc.rect(MARGIN, bodyTopY, CONTENT_W, panelH).fill(C.adoptedBg as Parameters<PDFKit.PDFDocument["fill"]>[0]);
    colourFill(doc, C.adopted);
    doc.rect(MARGIN, bodyTopY, 4, panelH).fill();

    doc.fontSize(7.5).font("Helvetica-Bold");
    colourFill(doc, C.adopted);
    doc.text("FORMALLY ADOPTED BY", MARGIN + 14, bodyTopY + 10, { lineBreak: false });

    doc.fontSize(14).font("Helvetica-Bold");
    colourFill(doc, C.dark);
    doc.text(opts.orgName, MARGIN + 14, bodyTopY + 22, { width: CONTENT_W - 28, lineBreak: false });

    doc.fontSize(9).font("Helvetica");
    colourFill(doc, C.mid);
    const adoptedFormatted = formatDate(opts.adoption.adoptedAt);
    doc.text(
      `Reviewed by: ${opts.adoption.reviewerName}, ${opts.adoption.reviewerRole}`,
      MARGIN + 14, bodyTopY + 44, { lineBreak: false },
    );
    doc.text(
      `Adopted on: ${adoptedFormatted}`,
      MARGIN + 14, bodyTopY + 58, { lineBreak: false },
    );
    doc.moveDown(0.5);
  } else {
    // No adoption — org name badge
    doc.rect(MARGIN, bodyTopY, CONTENT_W, 44).fill(C.light as Parameters<PDFKit.PDFDocument["fill"]>[0]);
    colourFill(doc, C.brand);
    doc.rect(MARGIN, bodyTopY, 4, 44).fill();
    doc.fontSize(8).font("Helvetica-Bold");
    colourFill(doc, C.brand);
    doc.text("PREPARED FOR", MARGIN + 14, bodyTopY + 8, { lineBreak: false });
    doc.fontSize(13).font("Helvetica-Bold");
    colourFill(doc, C.dark);
    doc.text(opts.orgName, MARGIN + 14, bodyTopY + 20, { lineBreak: false });
  }

  // ── Copyright / legal disclaimer (fixed position — may extend into margin) ──
  withFixedPosition(doc, () => {
    const disclaimerY = PAGE_H - 120;
    colourStroke(doc, C.rule);
    doc.moveTo(MARGIN, disclaimerY).lineTo(PAGE_W - MARGIN, disclaimerY).lineWidth(0.5).stroke();

    doc.fontSize(7.5).font("Helvetica");
    colourFill(doc, C.muted);
    doc.text(
      `© ${new Date().getFullYear()} Ziproh Training Ltd. All rights reserved. This policy document is licensed to ${opts.orgName} for internal use only. Reproduction, distribution, modification, or transfer to any third party is strictly prohibited. This document is protected under copyright law and may only be used by authorised personnel of ${opts.orgName}. Ziproh Training Ltd reserves the right to update policy content at any time; subscribers are notified of all changes via the Ziproh platform.`,
      MARGIN,
      disclaimerY + 8,
      { width: CONTENT_W, lineBreak: true },
    );

    // Policy reference row at bottom
    doc.fontSize(8).font("Helvetica-Bold");
    colourFill(doc, C.muted);
    doc.text(
      `Policy Reference: ${opts.policyId.toUpperCase()}`,
      MARGIN, PAGE_H - 38,
      { lineBreak: false },
    );
    doc.font("Helvetica");
    doc.text(
      `Generated: ${new Date().toLocaleDateString("en-GB")}`,
      MARGIN, PAGE_H - 38,
      { width: CONTENT_W, align: "right", lineBreak: false },
    );
  });

  if (opts.isTrial) addTrialWatermark(doc);
}

// ─── Text helpers ─────────────────────────────────────────────────────────────

const BODY_SIZE   = 9.5;
const LABEL_SIZE  = 7.5;
const SECTION_H   = 13;
const SUBSEC_H    = 10.5;

function sectionHeading(doc: PDFKit.PDFDocument, text: string) {
  doc.moveDown(0.4);
  if (doc.y > PAGE_H - 100) doc.addPage();
  colourFill(doc, C.brand);
  doc.fontSize(SECTION_H).font("Helvetica-Bold");
  doc.text(text, MARGIN, doc.y, { width: CONTENT_W });
  // Rule under heading
  const ry = doc.y + 2;
  colourStroke(doc, C.light);
  doc.moveTo(MARGIN, ry).lineTo(PAGE_W - MARGIN, ry).lineWidth(1).stroke();
  doc.moveDown(0.45);
  colourFill(doc, C.mid);
}

function subHeading(doc: PDFKit.PDFDocument, text: string) {
  doc.moveDown(0.3);
  colourFill(doc, C.dark);
  doc.fontSize(SUBSEC_H).font("Helvetica-Bold");
  doc.text(text, MARGIN, doc.y, { width: CONTENT_W });
  doc.moveDown(0.2);
  colourFill(doc, C.mid);
}

function bodyText(doc: PDFKit.PDFDocument, text: string) {
  colourFill(doc, C.mid);
  doc.fontSize(BODY_SIZE).font("Helvetica");
  doc.text(text, MARGIN, doc.y, { width: CONTENT_W, lineBreak: true });
  doc.moveDown(0.3);
}

function bulletList(doc: PDFKit.PDFDocument, items: string[]) {
  colourFill(doc, C.mid);
  doc.fontSize(BODY_SIZE).font("Helvetica");
  for (const item of items) {
    const x = MARGIN + 14;
    const w = CONTENT_W - 14;
    const y = doc.y;
    // Bullet dot
    colourFill(doc, C.brand);
    doc.circle(MARGIN + 5, y + 5.5, 2).fill();
    colourFill(doc, C.mid);
    doc.text(item, x, y, { width: w, lineBreak: true });
    doc.moveDown(0.15);
  }
  doc.moveDown(0.2);
}

function numberedList(doc: PDFKit.PDFDocument, items: string[]) {
  colourFill(doc, C.mid);
  doc.fontSize(BODY_SIZE).font("Helvetica");
  items.forEach((item, i) => {
    const x  = MARGIN + 20;
    const w  = CONTENT_W - 20;
    const y  = doc.y;
    colourFill(doc, C.brand);
    doc.fontSize(BODY_SIZE).font("Helvetica-Bold");
    doc.text(`${i + 1}.`, MARGIN, y, { width: 18, lineBreak: false });
    colourFill(doc, C.mid);
    doc.fontSize(BODY_SIZE).font("Helvetica");
    doc.text(item, x, y, { width: w, lineBreak: true });
    doc.moveDown(0.2);
  });
  doc.moveDown(0.2);
}

function calloutBox(
  doc: PDFKit.PDFDocument,
  label: string,
  text: string,
  bgHex: string,
  borderHex: string,
  labelHex: string,
) {
  doc.moveDown(0.3);
  // Measure height needed
  const innerW = CONTENT_W - 30;
  const textH  = doc.heightOfString(text, { width: innerW });
  const boxH   = textH + 32;

  if (doc.y + boxH > PAGE_H - 80) doc.addPage();

  const bx = MARGIN;
  const by = doc.y;

  doc.rect(bx, by, CONTENT_W, boxH).fill(bgHex as Parameters<PDFKit.PDFDocument["fill"]>[0]);
  doc.rect(bx, by, 3.5, boxH).fill(borderHex as Parameters<PDFKit.PDFDocument["fill"]>[0]);

  doc.fontSize(LABEL_SIZE).font("Helvetica-Bold");
  colourFill(doc, labelHex);
  doc.text(label, bx + 12, by + 8, { lineBreak: false });

  doc.fontSize(BODY_SIZE).font("Helvetica");
  colourFill(doc, C.dark);
  doc.text(text, bx + 12, by + 20, { width: innerW, lineBreak: true });

  doc.y = by + boxH + 4;
  doc.moveDown(0.3);
}

// ─── Policy section renderer ──────────────────────────────────────────────────

function renderSection(doc: PDFKit.PDFDocument, sec: PolicySection, num?: number) {
  const title = sec.title ?? sec.heading ?? "";
  if (title) {
    const label = num !== undefined ? `${num}. ${title}` : title;
    sectionHeading(doc, label);
  }

  if (sec.body)        bodyText(doc, sec.body);
  if (sec.steps?.length)       numberedList(doc, sec.steps);
  if (sec.procedure?.length)   numberedList(doc, sec.procedure);
  if (sec.bulletPoints?.length) bulletList(doc, sec.bulletPoints);
  if (sec.warningBox)  calloutBox(doc, "IMPORTANT", sec.warningBox, C.warn, C.warnBdr, "#92400E");
  if (sec.practiceBox) calloutBox(doc, "BEST PRACTICE", sec.practiceBox, C.good, C.goodBdr, "#065F46");
  if (sec.legalBox)    calloutBox(doc, "LEGAL REQUIREMENT", sec.legalBox, C.legal, C.legalBdr, "#1D4ED8");

  if (sec.subSections?.length) {
    for (const ss of sec.subSections) {
      if (ss.title ?? ss.heading) subHeading(doc, (ss.title ?? ss.heading)!);
      if (ss.body)       bodyText(doc, ss.body);
      if (ss.steps?.length)        numberedList(doc, ss.steps);
      if (ss.procedure?.length)    numberedList(doc, ss.procedure);
      if (ss.bulletPoints?.length) bulletList(doc, ss.bulletPoints);
      if (ss.warningBox)  calloutBox(doc, "IMPORTANT", ss.warningBox, C.warn, C.warnBdr, "#92400E");
      if (ss.practiceBox) calloutBox(doc, "BEST PRACTICE", ss.practiceBox, C.good, C.goodBdr, "#065F46");
      if (ss.legalBox)    calloutBox(doc, "LEGAL REQUIREMENT", ss.legalBox, C.legal, C.legalBdr, "#1D4ED8");
    }
  }
}

// ─── Content pages renderer ───────────────────────────────────────────────────

function drawContentPages(
  doc: PDFKit.PDFDocument,
  opts: PdfGeneratorOptions,
  pageCounter: { n: number },
) {
  const c = opts.content;
  const bodySections: PolicySection[] =
    (c.procedure?.length ? c.procedure : null) ?? c.sections ?? [];

  // Trial: only show first 2 sections and truncated intro
  const sections = opts.isTrial ? bodySections.slice(0, 2) : bodySections;

  // ── Policy Statement ──
  if (c.statement) {
    sectionHeading(doc, "Policy Statement");
    calloutBox(doc, "POLICY STATEMENT", c.statement, C.light, C.brand, C.brand);
  }

  // ── Purpose & Scope ──
  if (c.purpose || c.scope) {
    sectionHeading(doc, "Purpose & Scope");
    if (c.purpose) bodyText(doc, c.purpose);
    if (c.scope) {
      subHeading(doc, "Scope");
      bodyText(doc, c.scope);
    }
  }

  // ── Definitions ──
  if (c.definitions?.length && !opts.isTrial) {
    sectionHeading(doc, "Definitions");
    for (const d of c.definitions) {
      subHeading(doc, d.term);
      bodyText(doc, d.definition);
    }
  }

  // ── Roles & Responsibilities ──
  if (c.responsibilities?.length) {
    sectionHeading(doc, "Roles & Responsibilities");
    for (const r of c.responsibilities) {
      subHeading(doc, r.role);
      bulletList(doc, r.duties);
    }
  }

  // ── Key Points ──
  if (c.keyPoints?.length) {
    sectionHeading(doc, "Key Points");
    bulletList(doc, c.keyPoints);
  }

  // ── Policy / Procedure sections ──
  sections.forEach((sec, i) => renderSection(doc, sec, i + 1));

  if (opts.isTrial && bodySections.length > 2) {
    // Truncation notice
    doc.moveDown(1);
    if (doc.y > PAGE_H - 80) doc.addPage();
    const boxY = doc.y;
    doc.rect(MARGIN, boxY, CONTENT_W, 56)
      .fill(C.warn as Parameters<PDFKit.PDFDocument["fill"]>[0]);
    doc.rect(MARGIN, boxY, 4, 56)
      .fill(C.warnBdr as Parameters<PDFKit.PDFDocument["fill"]>[0]);
    doc.fontSize(10).font("Helvetica-Bold");
    colourFill(doc, "#92400E");
    doc.text(
      `${bodySections.length - 2} more sections available — subscribe to Ziproh to access the full policy`,
      MARGIN + 14, boxY + 8,
      { width: CONTENT_W - 28 },
    );
    doc.y = boxY + 60;
  }

  if (!opts.isTrial) {
    // ── Relevant Legislation ──
    if (c.legislation?.length) {
      sectionHeading(doc, "Relevant Legislation & Guidance");
      bulletList(doc, c.legislation);
    }

    // ── Training ──
    if (c.training) {
      sectionHeading(doc, "Training Requirements");
      bodyText(doc, c.training);
    }

    // ── Monitoring ──
    if (c.monitoring) {
      sectionHeading(doc, "Quality Assurance & Monitoring");
      bodyText(doc, c.monitoring);
    }

    // ── Related Documents ──
    if (c.relatedDocuments?.length) {
      sectionHeading(doc, "Related Documents");
      bulletList(doc, c.relatedDocuments);
    }

    // ── Version History ──
    if (c.versionHistory?.length) {
      sectionHeading(doc, "Version History");
      for (const v of c.versionHistory) {
        doc.fontSize(9).font("Helvetica-Bold");
        colourFill(doc, C.dark);
        doc.text(`v${v.version}  ·  ${formatDate(v.date)}`, MARGIN, doc.y, { width: CONTENT_W });
        doc.moveDown(0.1);
        doc.fontSize(BODY_SIZE).font("Helvetica");
        colourFill(doc, C.mid);
        doc.text(v.changes ?? v.amendment ?? "", MARGIN + 14, doc.y, { width: CONTENT_W - 14 });
        doc.moveDown(0.2);
      }
    }
  }

  void pageCounter; // used via pdfkit page events
}

// ─── Main generator ───────────────────────────────────────────────────────────

export async function generatePolicyPdf(opts: PdfGeneratorOptions): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];

    // ── Create document with encryption ──
    const pdfOptions: Record<string, unknown> = {
      size: "A4",
      margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
      info: {
        Title:   opts.title,
        Author:  opts.orgName,
        Subject: `${opts.keyQuestion} — Compliance Policy`,
        Creator: "Ziproh Compliance Platform",
        Producer: "Ziproh Training Ltd",
      },
      // Encryption: owner password locks permissions; empty user password = opens freely
      ownerPassword: opts.ownerPassword,
      userPassword:  "",
      permissions: {
        printing:           "highResolution",  // allow printing
        modifying:          false,              // no editing
        copying:            false,              // no copy/paste
        annotating:         false,              // no annotations
        fillingForms:       false,
        contentAccessibility: true,             // screen readers
        documentAssembly:   false,
      },
    };

    const doc = new PDFDocument(pdfOptions);

    doc.on("data",  (chunk: Buffer) => chunks.push(chunk));
    doc.on("end",   () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // ── Page counter + per-page decorations ──
    const pageCounter = { n: 0 };
    let isFirstPage = true;

    doc.on("pageAdded", () => {
      pageCounter.n++;
      if (!isFirstPage) {
        // Running header on content pages
        addRunningHeader(doc, opts.orgName, opts.policyId, opts.isTrial);
        addRunningFooter(doc, opts.orgName, opts.policyId, pageCounter.n);
        if (opts.isTrial) addTrialWatermark(doc);
      }
    });

    // ── Cover page (page 1) ──
    pageCounter.n = 1;
    drawCoverPage(doc, opts).then(() => {
      isFirstPage = false;

      // ── Content pages ──
      doc.addPage();

      // Set initial Y below running header
      doc.y = MARGIN + 28;

      drawContentPages(doc, opts, pageCounter);

      doc.end();
    }).catch(reject);
  });
}
