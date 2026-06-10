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
    supabase.from("profiles").select("full_name, org_name").eq("id", user.id).single(),
    supabase
      .from("training_completions")
      .select("completed_at, certificate_ref")
      .eq("user_id", user.id)
      .eq("module_id", moduleId)
      .order("completed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const learnerName  = profileRes.data?.full_name  || user.email?.split("@")[0] || "Learner";
  const orgName      = profileRes.data?.org_name   || "Care Organisation";
  const completedAt  = completionRes.data?.completed_at
    ? new Date(completionRes.data.completed_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const certRef      = completionRes.data?.certificate_ref
    || `ZT-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const cpdHours     = (mod.duration / 60).toFixed(2).replace(/\.?0+$/, "") + " CPD Hours";

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

    // Header
    const headerY = 55;
    doc.fontSize(9).font("Helvetica-Bold").fillColor(C.gold);
    doc.text("CERTIFICATE OF COMPLETION", cx, headerY, {
      width: cw, align: "center", lineBreak: false, characterSpacing: 3,
    });
    doc.moveTo(cx + cw * 0.2, headerY + 16).lineTo(cx + cw * 0.8, headerY + 16)
      .lineWidth(1).strokeColor(C.gold).stroke();

    // "This is to certify that"
    doc.fontSize(11.5).font("Helvetica").fillColor(C.mid);
    doc.text("This is to certify that", cx, headerY + 34, { width: cw, align: "center", lineBreak: false });

    // Learner name
    const nameY = headerY + 64;
    doc.fontSize(34).font("Helvetica-Bold").fillColor(C.dark);
    doc.text(learnerName, cx, nameY, { width: cw, align: "center", lineBreak: false });

    // Name underline
    const nameW = doc.widthOfString(learnerName, { fontSize: 34 });
    const nameLineX = cx + (cw - nameW) / 2;
    doc.moveTo(nameLineX, nameY + 42).lineTo(nameLineX + nameW, nameY + 42)
      .lineWidth(1.5).strokeColor(C.brand).stroke();

    // Org
    doc.fontSize(11).font("Helvetica").fillColor(C.mid);
    doc.text(`on behalf of  ${orgName}`, cx, nameY + 52, { width: cw, align: "center", lineBreak: false });

    // "has successfully completed"
    doc.fontSize(11.5).font("Helvetica").fillColor(C.mid);
    doc.text("has successfully completed", cx, nameY + 78, { width: cw, align: "center", lineBreak: false });

    // Course name
    const courseY = nameY + 108;
    doc.fontSize(19).font("Helvetica-Bold").fillColor(C.brand);
    doc.text(mod.title, cx, courseY, { width: cw, align: "center", lineBreak: true });

    // Pill details
    const pillsY = courseY + 66;
    function pill(label: string, value: string, px: number) {
      const pw = 145, ph = 36, pr = 8;
      doc.roundedRect(px, pillsY, pw, ph, pr).fill(C.goldLt);
      doc.roundedRect(px, pillsY, 4, ph, pr).fill(C.gold);
      doc.fontSize(7).font("Helvetica-Bold").fillColor(C.gold);
      doc.text(label.toUpperCase(), px + 12, pillsY + 6, { lineBreak: false });
      doc.fontSize(10).font("Helvetica-Bold").fillColor(C.dark);
      doc.text(value, px + 12, pillsY + 17, { lineBreak: false });
    }
    const totalPillW = 3 * 145 + 2 * 14;
    const pillStartX = cx + (cw - totalPillW) / 2;
    pill("Date Completed", completedAt,                       pillStartX);
    pill("Duration",       `${mod.duration} minutes`,        pillStartX + 159);
    pill("CPD",            cpdHours,                          pillStartX + 318);

    // Footer
    const footerY = PAGE_H - 54;
    doc.moveTo(cx, footerY - 10).lineTo(cx + cw, footerY - 10)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.fontSize(7.5).font("Helvetica").fillColor(C.muted);
    doc.text(`Certificate ID: ${certRef}`, cx, footerY, { lineBreak: false });
    doc.text("Issued by Ziproh Training Ltd  ·  Verified at app.ziprohtraining.co.uk", cx, footerY, {
      width: cw, align: "right", lineBreak: false,
    });

    // Seal
    const sealX = cx + cw - 58;
    const sealY = pillsY - 4;
    doc.circle(sealX, sealY, 38).lineWidth(2).strokeColor(C.gold).stroke();
    doc.circle(sealX, sealY, 32).lineWidth(0.75).strokeColor(C.gold).stroke();
    doc.circle(sealX, sealY, 30).fill(C.brand);
    doc.fontSize(26).font("Helvetica-Bold").fillColor("white");
    doc.text("Z", sealX - 9, sealY - 14, { lineBreak: false });
    doc.fontSize(5.5).font("Helvetica-Bold").fillColor("rgba(255,255,255,0.8)");
    doc.text("VERIFIED", sealX - 14, sealY + 13, { lineBreak: false, characterSpacing: 1 });

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
