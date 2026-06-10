/**
 * /api/certificate/[moduleId]
 *
 * GET — Generate and return a PDF training certificate for the authenticated user.
 *       Looks up the most recent completion record for the module, pulls the
 *       user's profile (name, organisation), and renders a branded A4 landscape
 *       certificate using pdfkit.
 */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { readFile } from "fs/promises";
import path from "path";
import QRCode from "qrcode";

// ─── Module catalogue (mirrors learning/page.tsx) ─────────────────────────────
const MODULES: Record<string, { title: string; category: string; duration: number; level: string; icon: string }> = {
  "lrn-001": { title: "Safeguarding Adults — Foundation",       category: "Safeguarding",     duration: 45,  level: "Foundation",   icon: "🛡️"  },
  "lrn-002": { title: "Medication Administration",              category: "Medication",        duration: 60,  level: "Foundation",   icon: "💊"  },
  "lrn-003": { title: "Infection Prevention & Control",         category: "IPC",               duration: 40,  level: "Foundation",   icon: "🦠"  },
  "lrn-005": { title: "Mental Capacity Act & DoLS",             category: "Legislation",       duration: 75,  level: "Intermediate", icon: "⚖️"  },
  "lrn-006": { title: "Moving & Handling",                      category: "Health & Safety",   duration: 50,  level: "Foundation",   icon: "🏋️"  },
  "lrn-007": { title: "Dementia Care Excellence",               category: "Clinical",          duration: 90,  level: "Advanced",     icon: "🧠"  },
  "lrn-008": { title: "End of Life Care",                       category: "Clinical",          duration: 80,  level: "Advanced",     icon: "🕊️"  },
  "lrn-009": { title: "Leadership in Care",                     category: "Management",        duration: 120, level: "Advanced",     icon: "🏢"  },
};

// ─── Route ────────────────────────────────────────────────────────────────────
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ moduleId: string }> }
) {
  const { moduleId } = await params;

  // ── Auth ──────────────────────────────────────────────────────────────────
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
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  // ── Module lookup ─────────────────────────────────────────────────────────
  const mod = MODULES[moduleId];
  if (!mod) {
    return NextResponse.json({ error: "Module not found" }, { status: 404 });
  }

  // ── Profile + completion record ───────────────────────────────────────────
  const [profileRes, completionRes] = await Promise.all([
    // NB: profiles has first_name/last_name (no full_name column)
    supabase.from("profiles").select("first_name, last_name, org_name").eq("id", user.id).single(),
    supabase
      .from("training_completions")
      .select("completed_at, certificate_ref")
      .eq("user_id", user.id)
      .eq("module_id", moduleId)
      .order("completed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const learnerName  =
    [profileRes.data?.first_name, profileRes.data?.last_name].filter(Boolean).join(" ")
    || user.email?.split("@")[0]
    || "Learner";
  const orgName      = profileRes.data?.org_name   || "Care Organisation";

  // Completion date + 12-month expiry (training must be renewed annually)
  const completedDate = completionRes.data?.completed_at
    ? new Date(completionRes.data.completed_at)
    : new Date();
  const expiryDate = new Date(completedDate);
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const completedAt = fmt(completedDate);
  const validUntil  = fmt(expiryDate);

  const certRef      = completionRes.data?.certificate_ref
    || `ZT-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const cpdHours     = (mod.duration / 60).toFixed(2).replace(/\.?0+$/, "") + " CPD Hours";

  // ── Brand assets ──────────────────────────────────────────────────────────
  // Ziproh wordmark (top of certificate) + icon (verification seal)
  let logoBuffer: Buffer | null = null;
  let iconBuffer: Buffer | null = null;
  try { logoBuffer = await readFile(path.join(process.cwd(), "public", "ziproh-logo.png")); } catch { /* skip */ }
  try { iconBuffer = await readFile(path.join(process.cwd(), "public", "ziproh-icon.png")); } catch { /* skip */ }

  // ── QR verification code ──────────────────────────────────────────────────
  // Points to the public certificate registry so anyone can confirm authenticity
  const siteUrl   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://app.ziprohtraining.co.uk";
  const verifyUrl = `${siteUrl}/verify/${encodeURIComponent(certRef)}`;
  let qrBuffer: Buffer | null = null;
  try {
    qrBuffer = await QRCode.toBuffer(verifyUrl, {
      width: 256,
      margin: 1,
      color: { dark: "#0A1629", light: "#FFFFFF" },
      errorCorrectionLevel: "M",
    });
  } catch { /* QR generation failed — certificate still renders without it */ }

  // ── PDF generation ────────────────────────────────────────────────────────
  // pdfkit is a CommonJS module; we import it dynamically to avoid ESM issues.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const PDFDocument = require("pdfkit") as new (opts: object) => PDFKit.PDFDocument;

  const PAGE_W = 841.89;
  const PAGE_H = 595.28;

  const C = {
    brand:   "#2E6FFF",
    dark:    "#0A1629",
    gold:    "#C8922A",
    goldLt:  "#F5E6C8",
    mid:     "#374151",
    muted:   "#9CA3AF",
    white:   "#FFFFFF",
    bgLight: "#F8FAFF",
    rule:    "#E5E7EB",
  };

  const doc = new PDFDocument({
    size: "A4",
    layout: "landscape",
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    info: {
      Title:   `Certificate of Completion — ${mod.title}`,
      Author:  "Ziproh Training Ltd",
      Subject: "CPD Certificate",
      Creator: "Ziproh Compliance Platform",
    },
  });

  const chunks: Buffer[] = [];
  doc.on("data", (chunk: Buffer) => chunks.push(chunk));

  await new Promise<void>((resolve, reject) => {
    doc.on("end",   resolve);
    doc.on("error", reject);

    // ── Background ──
    doc.rect(0, 0, PAGE_W, PAGE_H).fill(C.bgLight);

    // ── Left brand panel ──
    const panelW = 210;
    doc.rect(0, 0, panelW, PAGE_H).fill(C.brand);
    doc.rect(panelW - 6, 0, 6, PAGE_H).fill(C.gold);

    // Watermark wordmark
    doc.save();
    doc.translate(panelW / 2, PAGE_H / 2);
    doc.rotate(-90);
    doc.fontSize(42).font("Helvetica-Bold");
    doc.fillColor("rgba(255,255,255,0.12)");
    doc.text("ZiPROH", -90, -20, { width: 180, align: "center", lineBreak: false });
    doc.restore();

    // Footer label
    doc.save();
    doc.fontSize(8.5).font("Helvetica-Bold").fillColor("rgba(255,255,255,0.7)");
    doc.text("ZIPROH TRAINING LTD", 0, PAGE_H - 38, { width: panelW, align: "center", lineBreak: false });
    doc.fontSize(7).font("Helvetica").fillColor("rgba(255,255,255,0.5)");
    doc.text("the better way to care", 0, PAGE_H - 24, { width: panelW, align: "center", lineBreak: false });
    doc.restore();

    // Category badge
    doc.save();
    const badgeY = 80;
    const badgeW = 130;
    const badgeX = (panelW - badgeW) / 2;
    doc.roundedRect(badgeX, badgeY, badgeW, 34, 8).fill("rgba(255,255,255,0.15)");
    doc.fontSize(9).font("Helvetica-Bold").fillColor("white");
    doc.text(mod.category.toUpperCase(), badgeX, badgeY + 6, { width: badgeW, align: "center", lineBreak: false });
    doc.fontSize(7.5).font("Helvetica").fillColor("rgba(255,255,255,0.75)");
    doc.text(`${mod.level} Level`, badgeX, badgeY + 19, { width: badgeW, align: "center", lineBreak: false });
    doc.restore();

    // ── Content area ──
    const cx = panelW + 40;
    const cw = PAGE_W - panelW - 80;

    // Border
    doc.rect(panelW + 14, 14, PAGE_W - panelW - 28, PAGE_H - 28)
      .lineWidth(1.5).strokeColor(C.gold).stroke();
    doc.rect(panelW + 20, 20, PAGE_W - panelW - 40, PAGE_H - 40)
      .lineWidth(0.5).strokeColor(C.brand + "60").stroke();

    // Corner ornaments
    function corner(x: number, y: number, rx: number, ry: number) {
      doc.fillColor(C.gold).circle(x, y, 3.5).fill();
      doc.fillColor(C.brand + "60").circle(x + rx, y + ry, 2).fill();
    }
    corner(panelW + 14, 14, 8, 8);
    corner(PAGE_W - 14, 14, -8, 8);
    corner(panelW + 14, PAGE_H - 14, 8, -8);
    corner(PAGE_W - 14, PAGE_H - 14, -8, -8);

    // ── Ziproh wordmark (top, centred) ──
    let headerY = 60;
    if (logoBuffer) {
      const logoW = 132;                       // wordmark aspect ≈ 2.9:1 → ~45pt tall
      const logoH = 46;
      doc.image(logoBuffer, cx + (cw - logoW) / 2, 38, {
        fit: [logoW, logoH], align: "center", valign: "center",
      });
      headerY = 38 + logoH + 18;               // header starts below the wordmark
    }

    // Header
    doc.fontSize(9).font("Helvetica-Bold").fillColor(C.gold);
    doc.text("CERTIFICATE OF COMPLETION", cx, headerY, {
      width: cw, align: "center", lineBreak: false, characterSpacing: 3,
    });
    doc.moveTo(cx + cw * 0.2, headerY + 16).lineTo(cx + cw * 0.8, headerY + 16)
      .lineWidth(1).strokeColor(C.gold).stroke();

    // "This is to certify that"
    doc.fontSize(11.5).font("Helvetica").fillColor(C.mid);
    doc.text("This is to certify that", cx, headerY + 32, { width: cw, align: "center", lineBreak: false });

    // Learner name
    const nameY = headerY + 60;
    doc.fontSize(32).font("Helvetica-Bold").fillColor(C.dark);
    doc.text(learnerName, cx, nameY, { width: cw, align: "center", lineBreak: false });

    // Name underline (font size 32 is active — widthOfString uses the current font)
    const nameW = doc.widthOfString(learnerName);
    const nameLineX = cx + (cw - nameW) / 2;
    doc.moveTo(nameLineX, nameY + 40).lineTo(nameLineX + nameW, nameY + 40)
      .lineWidth(1.5).strokeColor(C.brand).stroke();

    // Org
    doc.fontSize(11).font("Helvetica").fillColor(C.mid);
    doc.text(`on behalf of  ${orgName}`, cx, nameY + 50, { width: cw, align: "center", lineBreak: false });

    // "has successfully completed"
    doc.fontSize(11.5).font("Helvetica").fillColor(C.mid);
    doc.text("has successfully completed", cx, nameY + 74, { width: cw, align: "center", lineBreak: false });

    // Course name
    const courseY = nameY + 100;
    doc.fontSize(19).font("Helvetica-Bold").fillColor(C.brand);
    doc.text(mod.title, cx, courseY, { width: cw, align: "center", lineBreak: true });

    // Pill details — 4 pills incl. 12-month expiry
    const pillsY = courseY + 58;
    const PILL_W = 128, PILL_GAP = 13;
    function pill(label: string, value: string, px: number, accent = "#C8922A") {
      const ph = 36, pr = 8;
      doc.roundedRect(px, pillsY, PILL_W, ph, pr).fill(C.goldLt);
      doc.roundedRect(px, pillsY, 4, ph, pr).fill(accent);
      doc.fontSize(6.5).font("Helvetica-Bold").fillColor(accent);
      doc.text(label.toUpperCase(), px + 11, pillsY + 6, { lineBreak: false });
      doc.fontSize(9.5).font("Helvetica-Bold").fillColor(C.dark);
      doc.text(value, px + 11, pillsY + 17, { lineBreak: false });
    }
    const totalPillW = 4 * PILL_W + 3 * PILL_GAP;
    const pillStartX = cx + (cw - totalPillW) / 2;
    pill("Date Completed", completedAt,                pillStartX);
    pill("Duration",       `${mod.duration} minutes`,  pillStartX + (PILL_W + PILL_GAP));
    pill("CPD",            cpdHours,                   pillStartX + (PILL_W + PILL_GAP) * 2);
    pill("Valid Until",    validUntil,                 pillStartX + (PILL_W + PILL_GAP) * 3, "#DC2626");

    // ── Verification row (between pills and footer) ──
    const verifyRowY = pillsY + 64;

    // Left: how to verify
    doc.fontSize(7.5).font("Helvetica-Bold").fillColor(C.gold);
    doc.text("VERIFY THIS CERTIFICATE", cx, verifyRowY, { lineBreak: false, characterSpacing: 1.5 });
    doc.fontSize(8.5).font("Helvetica").fillColor(C.mid);
    doc.text(
      "Scan the QR code or visit the address below to confirm this certificate is genuine:",
      cx, verifyRowY + 14, { width: cw - 220 },
    );
    doc.fontSize(8.5).font("Helvetica-Bold").fillColor(C.brand);
    doc.text(verifyUrl.replace(/^https?:\/\//, ""), cx, verifyRowY + 38, { width: cw - 220, lineBreak: false });

    // Renewal notice
    doc.fontSize(7.5).font("Helvetica-Oblique").fillColor(C.muted);
    doc.text(
      `This certificate is valid for 12 months from the date of completion and expires on ${validUntil}. Training must be renewed annually.`,
      cx, verifyRowY + 56, { width: cw - 220 },
    );

    // Right: verification seal (Ziproh icon in gold rings)
    const sealX = cx + cw - 160;
    const sealY = verifyRowY + 28;
    doc.circle(sealX, sealY, 36).lineWidth(2).strokeColor(C.gold).stroke();
    doc.circle(sealX, sealY, 30.5).lineWidth(0.75).strokeColor(C.gold).stroke();
    if (iconBuffer) {
      doc.save();
      doc.circle(sealX, sealY, 28).clip();
      doc.image(iconBuffer, sealX - 28, sealY - 28, { width: 56, height: 56 });
      doc.restore();
    } else {
      doc.circle(sealX, sealY, 28).fill(C.brand);
      doc.fontSize(24).font("Helvetica-Bold").fillColor("white");
      doc.text("Z", sealX - 8, sealY - 12, { lineBreak: false });
    }
    doc.fontSize(6).font("Helvetica-Bold").fillColor(C.gold);
    doc.text("VERIFIED", sealX - 36, sealY + 42, { width: 72, align: "center", lineBreak: false, characterSpacing: 1.5 });

    // Far right: QR code
    if (qrBuffer) {
      const qrSize = 74;
      const qrX = cx + cw - qrSize - 8;
      const qrY = verifyRowY - 6;
      doc.roundedRect(qrX - 5, qrY - 5, qrSize + 10, qrSize + 10, 6)
        .lineWidth(0.75).strokeColor(C.rule).stroke();
      doc.image(qrBuffer, qrX, qrY, { width: qrSize, height: qrSize });
      doc.fontSize(6).font("Helvetica-Bold").fillColor(C.muted);
      doc.text("SCAN TO VERIFY", qrX - 5, qrY + qrSize + 9, { width: qrSize + 10, align: "center", lineBreak: false, characterSpacing: 1 });
    }

    // Footer
    const footerY = PAGE_H - 54;
    doc.moveTo(cx, footerY - 10).lineTo(cx + cw, footerY - 10)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.fontSize(7.5).font("Helvetica").fillColor(C.muted);
    doc.text(`Certificate ID: ${certRef}`, cx, footerY, { lineBreak: false });
    doc.text("Issued by Ziproh Training Ltd  ·  Verified at app.ziprohtraining.co.uk", cx, footerY, {
      width: cw, align: "right", lineBreak: false,
    });

    doc.end();
  });

  const pdfBuffer = Buffer.concat(chunks);
  const safeName  = mod.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type":        "application/pdf",
      "Content-Disposition": `attachment; filename="ziproh-certificate-${safeName}.pdf"`,
      "Content-Length":      String(pdfBuffer.length),
      "Cache-Control":       "no-store",
    },
  });
}
