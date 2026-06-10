"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";
import {
  DOCUMENTS,
  DOCUMENT_CONTENT,
  FLAGSHIP_IDS,
  getDocumentById,
  type DocumentContent,
  type PolicySection,
} from "@/lib/documents";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

// ─── Colour map ────────────────────────────────────────────────────────────────
const KQ_COLOR: Record<string, string> = {
  Safe: "#22c55e",
  Effective: "#2E6FFF",
  Caring: "#ec4899",
  Responsive: "#f59e0b",
  "Well-Led": "#8b5cf6",
};

// ─── Default fallback content ──────────────────────────────────────────────────
const DEFAULT_CONTENT: DocumentContent = {
  purpose:
    "This policy sets out [ORGANISATION_NAME]'s commitment and approach to maintaining compliance in accordance with regulatory requirements and best practice guidance.",
  scope:
    "This policy applies to all staff employed by or working on behalf of [ORGANISATION_NAME], including permanent, temporary, bank and agency staff, volunteers, and students on placement.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Overall responsibility for implementing and reviewing this policy",
        "Ensure all staff are trained and that the policy is followed at all times",
        "Review and update the policy at least annually",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Read, understand and comply with this policy",
        "Report any concerns or breaches to the Registered Manager immediately",
        "Complete required training within specified timescales",
      ],
    },
  ],
  keyPoints: [
    "All actions must be taken in the best interests of service users",
    "Records must be maintained accurately and contemporaneously",
    "Any concerns must be reported using [ORGANISATION_NAME]'s incident reporting procedure",
    "Training must be completed as required and kept up to date",
    "This policy must be reviewed annually or following any significant change",
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
    "Care Act 2014",
    "Mental Capacity Act 2005 and Liberty Protection Safeguards",
    "Equality Act 2010",
    "Data Protection Act 2018 / UK GDPR",
    "Health and Safety at Work etc. Act 1974",
  ],
  sections: [],
};

// ─── Helpers ───────────────────────────────────────────────────────────────────
function sub(text: string, org: string) {
  return text.replace(/\[ORGANISATION_NAME\]/g, org);
}

function subSec(s: PolicySection, org: string): PolicySection {
  return {
    ...s,
    body:        s.body        ? sub(s.body, org)        : undefined,
    warningBox:  s.warningBox  ? sub(s.warningBox, org)  : undefined,
    practiceBox: s.practiceBox ? sub(s.practiceBox, org) : undefined,
    legalBox:    s.legalBox    ? sub(s.legalBox, org)    : undefined,
    subSections: s.subSections?.map((ss) => ({
      ...ss,
      body:        ss.body        ? sub(ss.body, org)        : undefined,
      warningBox:  ss.warningBox  ? sub(ss.warningBox, org)  : undefined,
      practiceBox: ss.practiceBox ? sub(ss.practiceBox, org) : undefined,
      legalBox:    ss.legalBox    ? sub(ss.legalBox, org)    : undefined,
    })),
  };
}

function applyOrgName(content: DocumentContent, org: string): DocumentContent {
  return {
    ...content,
    statement:        content.statement        ? sub(content.statement, org)        : undefined,
    purpose:          content.purpose          ? sub(content.purpose, org)          : undefined,
    scope:            content.scope            ? sub(content.scope, org)            : undefined,
    responsibilities: content.responsibilities?.map((r) => ({
      role:   r.role,
      duties: r.duties.map((d) => sub(d, org)),
    })),
    keyPoints:   content.keyPoints?.map((kp) => sub(kp, org)),
    legislation: content.legislation,
    training:    content.training   ? sub(content.training, org)   : undefined,
    monitoring:  content.monitoring ? sub(content.monitoring, org) : undefined,
    sections:    content.sections?.map((s) => subSec(s, org)),
    procedure:   content.procedure?.map((s) => subSec(s, org)),
  };
}

function getRelatedPolicies(docId: string, keyQuestion: string, relatedDocIds?: string[]) {
  // Prefer explicit related list from policy content; fall back to same-key-question
  if (relatedDocIds && relatedDocIds.length > 0) {
    return relatedDocIds
      .map((id) => DOCUMENTS.find((d) => d.id === id))
      .filter(Boolean) as typeof DOCUMENTS;
  }
  return DOCUMENTS.filter((d) => d.keyQuestion === keyQuestion && d.id !== docId).slice(0, 5);
}

/** Parse a relatedDocuments string like "saf-001 — Safeguarding Adults at Risk Policy"
 *  and return the extracted policy ID, or null if it can't be parsed. */
function parseRelatedDocId(rd: string): string | null {
  const match = rd.match(/^([a-z]+-\d+)/i);
  return match ? match[1].toLowerCase() : null;
}

// ─── Body text renderer — preserves \n line breaks ────────────────────────────
function BodyText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p className={`text-sm text-gray-600 leading-relaxed whitespace-pre-line ${className}`}>
      {text}
    </p>
  );
}

// ─── Callout boxes ─────────────────────────────────────────────────────────────
function WarningBox({ text }: { text: string }) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4">
      <div className="text-xs font-bold tracking-widest text-amber-600 mb-1.5">⚠ IMPORTANT</div>
      <p className="text-sm text-amber-900 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

function PracticeBox({ text }: { text: string }) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4">
      <div className="text-xs font-bold tracking-widest text-emerald-600 mb-1.5">✓ BEST PRACTICE</div>
      <p className="text-sm text-emerald-900 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

function LegalBox({ text }: { text: string }) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-blue-400 bg-blue-50 p-4">
      <div className="text-xs font-bold tracking-widest text-blue-600 mb-1.5">⚖ LEGAL REQUIREMENT</div>
      <p className="text-sm text-blue-900 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

// ─── Single policy section renderer ───────────────────────────────────────────
function SectionBlock({
  sec,
  index,
  color,
}: {
  sec: PolicySection;
  index: number;
  color: string;
}) {
  const sectionId = `section-${index}`;
  const heading = sec.title ?? sec.heading ?? "";
  // Procedure steps: new-format uses sec.procedure[], legacy uses sec.steps[]
  const procedureSteps = sec.procedure ?? sec.steps ?? [];
  return (
    <div id={sectionId} className="pt-6 border-t border-gray-50 scroll-mt-24">
      <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {index}
        </span>
        {heading}
      </h2>

      {sec.body && (
        <BodyText text={sec.body} className="mb-3" />
      )}

      {/* Numbered/procedure steps — supports both sec.procedure[] and legacy sec.steps[] */}
      {procedureSteps.length > 0 && (
        <ol className="space-y-2.5 my-3">
          {procedureSteps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ backgroundColor: `${color}15`, color }}
              >
                {i + 1}
              </span>
              <span className="whitespace-pre-line">{step}</span>
            </li>
          ))}
        </ol>
      )}

      {/* Bullet points */}
      {sec.bulletPoints && sec.bulletPoints.length > 0 && (
        <ul className="space-y-1.5 my-3">
          {sec.bulletPoints.map((bp, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              {bp}
            </li>
          ))}
        </ul>
      )}

      {/* Callout boxes */}
      {sec.warningBox  && <WarningBox  text={sec.warningBox}  />}
      {sec.practiceBox && <PracticeBox text={sec.practiceBox} />}
      {sec.legalBox    && <LegalBox    text={sec.legalBox}    />}

      {/* Sub-sections */}
      {sec.subSections && sec.subSections.length > 0 && (
        <div className="mt-4 space-y-5">
          {sec.subSections.map((ss, si) => {
            const ssHeading = ss.title ?? ss.heading ?? "";
            const ssSteps = ss.steps ?? [];
            return (
              <div key={si} className="pl-4 border-l-2 border-gray-100">
                {ssHeading && (
                  <h3 className="text-base font-semibold text-gray-800 mb-2">{ssHeading}</h3>
                )}
                {ss.body && (
                  <BodyText text={ss.body} className="mb-2" />
                )}
                {ssSteps.length > 0 && (
                  <ol className="space-y-2 my-2">
                    {ssSteps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                          style={{ backgroundColor: `${color}15`, color }}
                        >
                          {i + 1}
                        </span>
                        <span className="whitespace-pre-line">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {ss.bulletPoints && ss.bulletPoints.length > 0 && (
                  <ul className="space-y-1.5 my-2">
                    {ss.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                        {bp}
                      </li>
                    ))}
                  </ul>
                )}
                {ss.warningBox  && <WarningBox  text={ss.warningBox}  />}
                {ss.practiceBox && <PracticeBox text={ss.practiceBox} />}
                {ss.legalBox    && <LegalBox    text={ss.legalBox}    />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function DocumentPage() {
  const params  = useParams<{ id: string }>();
  const id      = params?.id ?? "";

  const [orgName,    setOrgName]    = useState("Your Organisation");
  const [orgLoaded,  setOrgLoaded]  = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [tocOpen,    setTocOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Acknowledgement state
  const [userId,        setUserId]        = useState<string | null>(null);
  const [acknowledgedAt, setAcknowledgedAt] = useState<string | null>(null);
  const [ackLoading,    setAckLoading]    = useState(false);
  const ackRef = useRef<HTMLDivElement>(null);

  // Reading list modal state
  type ReadingList = { id: string; name: string; document_ids: string[] };
  const [rlOpen,       setRlOpen]       = useState(false);
  const [readingLists, setReadingLists] = useState<ReadingList[]>([]);
  const [rlLoading,    setRlLoading]    = useState(false);
  const [rlSaving,     setRlSaving]     = useState<string | null>(null); // list id being saved

  // Policy adoption state
  type Adoption = { reviewerName: string; reviewerRole: string; adoptedAt: string } | null;
  const [adoption,          setAdoption]          = useState<Adoption>(null);
  const [adoptionLoaded,    setAdoptionLoaded]    = useState(false);
  const [adoptOpen,         setAdoptOpen]         = useState(false);
  const [adoptName,         setAdoptName]         = useState("");
  const [adoptRole,         setAdoptRole]         = useState("");
  const [adoptDate,         setAdoptDate]         = useState(new Date().toISOString().split("T")[0]);
  const [adoptSaving,       setAdoptSaving]       = useState(false);
  const [adoptError,        setAdoptError]        = useState<string | null>(null);

  async function openReadingListModal() {
    if (!userId) return;
    setRlOpen(true);
    setRlLoading(true);
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data } = await sb
      .from("reading_lists")
      .select("id, name, document_ids")
      .eq("org_id", userId)
      .order("created_at", { ascending: false });
    setReadingLists((data as ReadingList[]) ?? []);
    setRlLoading(false);
  }

  async function toggleReadingList(list: ReadingList) {
    setRlSaving(list.id);
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const alreadyIn = list.document_ids.includes(id);
    const updatedIds = alreadyIn
      ? list.document_ids.filter((d) => d !== id)
      : [...list.document_ids, id];
    const { error } = await sb
      .from("reading_lists")
      .update({ document_ids: updatedIds })
      .eq("id", list.id);
    if (!error) {
      setReadingLists((prev) =>
        prev.map((l) => l.id === list.id ? { ...l, document_ids: updatedIds } : l)
      );
    }
    setRlSaving(null);
  }

  function scrollToAck() {
    ackRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  async function handleMarkAsRead() {
    await handleAcknowledge();
    scrollToAck();
  }

  // Load org name + acknowledgement status from Supabase
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setOrgLoaded(true); return; }
      setUserId(user.id);

      const [profileRes, ackRes, adoptRes] = await Promise.all([
        supabase.from("profiles").select("org_name").eq("id", user.id).single(),
        supabase.from("read_records")
          .select("read_at")
          .eq("user_id", user.id)
          .eq("document_id", id)
          .maybeSingle(),
        supabase.from("policy_adoptions")
          .select("reviewer_name, reviewer_role, adopted_at")
          .eq("org_id", user.id)
          .eq("document_id", id)
          .maybeSingle(),
      ]);

      if (profileRes.data?.org_name) setOrgName(profileRes.data.org_name);
      if (ackRes.data?.read_at) setAcknowledgedAt(ackRes.data.read_at);
      if (adoptRes.data) {
        setAdoption({
          reviewerName: adoptRes.data.reviewer_name,
          reviewerRole: adoptRes.data.reviewer_role,
          adoptedAt:    adoptRes.data.adopted_at,
        });
        setAdoptName(adoptRes.data.reviewer_name);
        setAdoptRole(adoptRes.data.reviewer_role);
      }
      setAdoptionLoaded(true);
      setOrgLoaded(true);
    });
  }, [id]);

  async function handleAcknowledge() {
    if (!userId || acknowledgedAt) return;
    setAckLoading(true);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const now = new Date().toISOString();
    const { error } = await supabase.from("read_records").upsert({
      user_id: userId,
      document_id: id,
      read_at: now,
    });
    if (!error) setAcknowledgedAt(now);
    setAckLoading(false);
  }

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("[id^='section-']");
      let current = 0;
      sections.forEach((el, i) => {
        if (el.getBoundingClientRect().top < 200) current = i + 1;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const doc = getDocumentById(id);
  if (!doc) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Policy not found</h1>
          <p className="text-gray-500 mb-6">The policy ID <code className="bg-gray-100 px-1 rounded">{id}</code> does not exist in the library.</p>
          <Link href="/compliance" className="text-blue-600 hover:underline">← Back to Compliance Centre</Link>
        </div>
      </DashboardLayout>
    );
  }

  const rawContent = DOCUMENT_CONTENT[id] ?? DEFAULT_CONTENT;
  const content    = orgLoaded ? applyOrgName(rawContent, orgName) : rawContent;
  const color      = KQ_COLOR[doc.keyQuestion] || "#2E6FFF";

  // Parse related doc IDs from content (e.g. "saf-001 — Safeguarding...") for smart sidebar
  const relatedDocIds = content.relatedDocuments
    ?.map(parseRelatedDocId)
    .filter((id): id is string => id !== null) ?? [];
  const related = getRelatedPolicies(id, doc.keyQuestion, relatedDocIds);

  // Decide which body sections to render — procedure[] wins over legacy sections[]
  const bodySections: PolicySection[] =
    content.procedure && content.procedure.length > 0
      ? content.procedure
      : (content.sections ?? []);

  const hasRichContent = (content.procedure?.length ?? 0) > 0;

  const formattedDate = new Date(doc.lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  // Save policy adoption record
  async function saveAdoption() {
    if (!adoptName.trim() || !adoptRole.trim() || !adoptDate) {
      setAdoptError("Please fill in all fields.");
      return;
    }
    setAdoptSaving(true);
    setAdoptError(null);
    try {
      const res = await fetch("/api/policies/adopt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId:   id,
          reviewerName: adoptName.trim(),
          reviewerRole: adoptRole.trim(),
          adoptedAt:    adoptDate,
        }),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j.error ?? "Failed to save adoption");
      }
      setAdoption({ reviewerName: adoptName.trim(), reviewerRole: adoptRole.trim(), adoptedAt: adoptDate });
      setAdoptOpen(false);
      // Immediately trigger PDF download after adoption
      await handleDownloadPDF();
    } catch (e) {
      setAdoptError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setAdoptSaving(false);
    }
  }

  // Download proper PDF via API route
  const handleDownloadPDF = async () => {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      const url  = `/api/policy-pdf/${id}`;
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("PDF generation failed");
      const blob     = await resp.blob();
      const objUrl   = URL.createObjectURL(blob);
      const link     = document.createElement("a");
      link.href      = objUrl;
      link.download  = `${id}-${doc.title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.pdf`;
      link.click();
      URL.revokeObjectURL(objUrl);
    } catch (e) {
      alert("PDF download failed — please try again.");
    } finally {
      setPdfLoading(false);
    }
  };

  // Build TOC entries
  const tocEntries = [
    ...(content.statement ? ["Policy Statement"] : []),
    ...(content.purpose || content.scope ? ["Purpose & Scope"] : []),
    ...(content.definitions?.length ? ["Definitions"] : []),
    ...(content.responsibilities?.length ? ["Roles & Responsibilities"] : []),
    ...(content.keyPoints?.length ? ["Key Points"] : []),
    ...(content.legislation?.length ? ["Relevant Legislation"] : []),
    ...bodySections.map((s) => s.title ?? s.heading ?? ""),
    ...(content.training ? ["Training Requirements"] : []),
    ...(content.monitoring ? ["Quality Assurance"] : []),
    ...(content.relatedDocuments?.length ? ["Related Documents"] : []),
    ...(content.versionHistory?.length ? ["Version History"] : []),
  ];

  return (
    <DashboardLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
        <Link href="/dashboard"  className="hover:text-gray-600 transition-colors">Dashboard</Link>
        <span>›</span>
        <Link href="/compliance" className="hover:text-gray-600 transition-colors">Compliance Centre</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium truncate max-w-xs">{doc.title}</span>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* ══ LEFT COLUMN — main document ══════════════════════════════════ */}
        <div className="lg:col-span-3 space-y-5">

          {/* ── Document header card ── */}
          <div className="card">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {doc.keyQuestion}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {doc.subcategory}
                  </span>
                  {doc.status === "updated" && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                      🔄 Recently Updated
                    </span>
                  )}
                  {hasRichContent && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                      ✦ Full Policy
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2 flex-wrap mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">{doc.title}</h1>
                  {FLAGSHIP_IDS.has(id) && (
                    <span className="self-start mt-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "#2E6FFF15", color: "#2E6FFF", border: "1px solid #2E6FFF30" }}>
                      ⭐ Comprehensive Policy
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{doc.summary}</p>

                {/* Org branding */}
                <div
                  className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ backgroundColor: `${color}10`, color, border: `1px solid ${color}25` }}
                >
                  🏢 Adapted for:&nbsp;<span className="font-bold">{orgLoaded ? orgName : "Loading…"}</span>
                </div>
              </div>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-4 border-t border-gray-50">
              <span>📋 Ref: {doc.id.toUpperCase()}</span>
              <span>🔢 Version {doc.version}</span>
              <span>📅 Updated {formattedDate}</span>
              <span>⏱ ~{doc.readTime} min read</span>
              <span>🌍 {doc.regulators.join(", ")}</span>
              {content.nextReviewDate && (
                <span>🗓 Next review: {content.nextReviewDate}</span>
              )}
            </div>
          </div>

          {/* ── Changelog banner (updated policies only) ── */}
          {doc.status === "updated" && doc.changelog && doc.changelog.length > 0 && (
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-base">
                  🔄
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-blue-800 mb-2">
                    What&rsquo;s changed in v{doc.version}
                    <span className="ml-2 text-xs font-normal text-blue-500">Updated {formattedDate}</span>
                  </p>
                  <ul className="space-y-1">
                    {doc.changelog.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-blue-700">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ── Adoption status badge ── */}
          {adoptionLoaded && adoption && (() => {
            const needsReAdopt = doc.status === "updated";
            return (
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${needsReAdopt ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`}>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold ${needsReAdopt ? "bg-amber-500" : "bg-emerald-500"}`}>
                  {needsReAdopt ? "⚠" : "✓"}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${needsReAdopt ? "text-amber-800" : "text-emerald-800"}`}>
                    {needsReAdopt
                      ? `Policy updated since adoption by ${orgName} — re-review required`
                      : `Policy adopted by ${orgName}`}
                  </p>
                  <p className={`text-xs ${needsReAdopt ? "text-amber-600" : "text-emerald-600"}`}>
                    Reviewed by {adoption.reviewerName}, {adoption.reviewerRole} &nbsp;·&nbsp; Adopted{" "}
                    {new Date(adoption.adoptedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
                <button
                  onClick={() => { setAdoptDate(new Date().toISOString().split("T")[0]); setAdoptOpen(true); }}
                  className={`text-xs underline whitespace-nowrap ${needsReAdopt ? "text-amber-600 hover:text-amber-800" : "text-emerald-600 hover:text-emerald-800"}`}
                >
                  {needsReAdopt ? "Re-Adopt" : "Edit"}
                </button>
              </div>
            );
          })()}

          {/* ── Action bar ── */}
          <div className="card" style={{ padding: "0.875rem 1.25rem" }}>
            <div className="flex flex-wrap items-center gap-3">
              {/* Download button — shows "Adopt & Download" if not yet adopted */}
              {adoption ? (
                doc.status === "updated" ? (
                  // Policy updated after adoption — prompt re-adoption
                  <button
                    onClick={() => { setAdoptDate(new Date().toISOString().split("T")[0]); setAdoptOpen(true); }}
                    disabled={!orgLoaded}
                    className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-xl text-white transition-all disabled:opacity-50 bg-amber-500 hover:bg-amber-600"
                  >
                    🔄 Re-Adopt &amp; Download
                  </button>
                ) : (
                  <button
                    onClick={handleDownloadPDF}
                    disabled={pdfLoading || !orgLoaded}
                    className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-xl text-white transition-all disabled:opacity-50"
                    style={{ backgroundColor: color }}
                  >
                    {pdfLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating PDF…
                      </>
                    ) : (
                      <>🔒 Download Secure PDF</>
                    )}
                  </button>
                )
              ) : (
                <button
                  onClick={() => setAdoptOpen(true)}
                  disabled={!orgLoaded || !adoptionLoaded}
                  className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-xl text-white transition-all disabled:opacity-50"
                  style={{ backgroundColor: color }}
                >
                  {!adoptionLoaded ? (
                    <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Loading…</>
                  ) : (
                    <>📋 Adopt &amp; Download PDF</>
                  )}
                </button>
              )}

              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="inline-flex items-center gap-2 btn-secondary text-sm py-2.5"
              >
                📑 {tocOpen ? "Hide" : "Show"} Contents
              </button>

              <button
                onClick={handleMarkAsRead}
                disabled={ackLoading || !!acknowledgedAt || !userId}
                className="btn-secondary text-sm py-2.5 disabled:opacity-50"
              >
                {acknowledgedAt ? "✓ Acknowledged" : ackLoading ? "Saving…" : "✓ Mark as Read"}
              </button>
              <button
                onClick={userId ? openReadingListModal : undefined}
                disabled={!userId}
                className="btn-secondary text-sm py-2.5 disabled:opacity-50"
              >
                📚 Reading List
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
              <span className={`w-2 h-2 rounded-full inline-block ${adoption && doc.status === "updated" ? "bg-amber-400" : adoption ? "bg-green-400" : "bg-gray-300"}`} />
              {adoption && doc.status === "updated"
                ? "Policy updated — re-adopt to keep your compliance record current"
                : adoption
                ? "Adopted & secured — PDF is encrypted for your organisation"
                : "Adopt this policy to generate your secured, branded PDF"}
            </div>
          </div>

          {/* ── Table of Contents (collapsible) ── */}
          {tocOpen && (
            <div className="card">
              <h2 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                <span style={{ color }}>📑</span> Table of Contents
              </h2>
              <ol className="space-y-1">
                {tocEntries.map((entry, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(`section-${i + 1}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                        setTocOpen(false);
                      }}
                      className="text-left text-sm py-1.5 px-2 w-full rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 group"
                    >
                      <span
                        className="text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{entry}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* ══ DOCUMENT BODY ════════════════════════════════════════════════ */}
          <div className="card space-y-0">

            {/* Document control metadata (new-format policies) */}
            {(content.policyId || content.version || content.effectiveDate || content.approvedBy) && (
              <div className="mb-6 pb-6 border-b border-gray-50">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {content.policyId && (
                    <div className="rounded-xl p-3 bg-gray-50">
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Policy ID</div>
                      <div className="text-sm font-bold text-gray-800">{content.policyId}</div>
                    </div>
                  )}
                  {content.version && (
                    <div className="rounded-xl p-3 bg-gray-50">
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Version</div>
                      <div className="text-sm font-bold text-gray-800">{content.version}</div>
                    </div>
                  )}
                  {content.effectiveDate && (
                    <div className="rounded-xl p-3 bg-gray-50">
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Effective</div>
                      <div className="text-sm font-bold text-gray-800">
                        {new Date(content.effectiveDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                  )}
                  {(content.reviewDate || content.nextReviewDate) && (
                    <div className="rounded-xl p-3 bg-gray-50">
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Review Due</div>
                      <div className="text-sm font-bold text-gray-800">
                        {new Date(content.reviewDate ?? content.nextReviewDate!).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                  )}
                  {content.approvedBy && (
                    <div className="rounded-xl p-3 bg-gray-50 col-span-2 sm:col-span-4">
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Approved By</div>
                      <div className="text-sm font-semibold text-gray-800">{content.approvedBy}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 1 — Statement of Intent */}
            {content.statement && (
              <div id="section-1" className="scroll-mt-24 mb-6 pb-6 border-b border-gray-50">
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${color}15`, color }}
                  >1</span>
                  Statement of Intent
                </h2>
                <div
                  className="rounded-xl p-5 italic text-sm text-gray-700 leading-relaxed border-l-4"
                  style={{ backgroundColor: `${color}08`, borderColor: color }}
                >
                  {content.statement}
                </div>
              </div>
            )}

            {/* Purpose & Scope — only shown if content has purpose or scope */}
            {(content.purpose || content.scope) && (
              <div
                id={content.statement ? "section-2" : "section-1"}
                className="mb-6 pb-6 border-b border-gray-50 scroll-mt-24"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${color}15`, color }}
                  >{content.statement ? 2 : 1}</span>
                  Purpose &amp; Scope
                </h2>
                {content.purpose && <BodyText text={content.purpose} className="mb-4" />}
                {content.scope && (
                  <>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Scope</h3>
                    <BodyText text={content.scope} />
                  </>
                )}
              </div>
            )}

            {/* Definitions */}
            {content.definitions && content.definitions.length > 0 && (() => {
              const sIdx = (content.statement ? 2 : 1) + 1;
              return (
                <div id={`section-${sIdx}`} className="mb-6 pb-6 border-b border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}15`, color }}
                    >{sIdx}</span>
                    Definitions
                  </h2>
                  <div className="space-y-4">
                    {content.definitions.map((d, i) => (
                      <div key={i} className="rounded-xl p-4 bg-gray-50">
                        <div className="font-semibold text-gray-900 text-sm mb-1">{d.term}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Responsibilities */}
            {content.responsibilities && content.responsibilities.length > 0 && (() => {
              let s = content.statement ? 2 : 1;
              if (content.purpose || content.scope) s += 1;
              if (content.definitions?.length) s += 1;
              const respIdx = s + 1;
              return (
                <div id={`section-${respIdx}`} className="mb-6 pb-6 border-b border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}15`, color }}
                    >{respIdx}</span>
                    Roles &amp; Responsibilities
                  </h2>
                  <div className="space-y-3">
                    {content.responsibilities.map((r) => (
                      <div key={r.role} className="rounded-xl p-4" style={{ backgroundColor: "#f8faff" }}>
                        <div className="font-semibold text-gray-900 text-sm mb-2">{r.role}</div>
                        <ul className="space-y-1.5">
                          {r.duties.map((duty, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2.5">
                              <span
                                className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Key Points */}
            {content.keyPoints && content.keyPoints.length > 0 && (() => {
              let s = content.statement ? 2 : 1;
              if (content.purpose || content.scope) s += 1;
              if (content.definitions?.length) s += 1;
              if (content.responsibilities?.length) s += 1;
              const kpIdx = s + 1;
              return (
                <div id={`section-${kpIdx}`} className="mb-6 pb-6 border-b border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}15`, color }}
                    >{kpIdx}</span>
                    Key Points
                  </h2>
                  <ul className="space-y-2.5">
                    {content.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span style={{ color }} className="mt-0.5 flex-shrink-0 font-bold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Legislation */}
            {content.legislation && content.legislation.length > 0 && (() => {
              let s = content.statement ? 2 : 1;
              if (content.purpose || content.scope) s += 1;
              if (content.definitions?.length) s += 1;
              if (content.responsibilities?.length) s += 1;
              if (content.keyPoints?.length) s += 1;
              const legIdx = s + 1;
              return (
                <div id={`section-${legIdx}`} className="mb-6 pb-6 border-b border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}15`, color }}
                    >{legIdx}</span>
                    Relevant Legislation &amp; Standards
                  </h2>
                  <ul className="space-y-2">
                    {content.legislation.map((law, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-300 flex-shrink-0 mt-0.5">§</span>
                        {law}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Body sections (procedure or legacy sections) */}
            {bodySections.map((sec, i) => {
              // offset index to follow fixed intro sections
              let offset = content.statement ? 2 : 1;
              offset += 1; // purpose
              if (content.definitions?.length) offset += 1;
              offset += 3; // responsibilities, keyPoints, legislation
              return (
                <SectionBlock
                  key={i}
                  sec={sec}
                  index={offset + i + 1}
                  color={color}
                />
              );
            })}

            {/* Training */}
            {content.training && (() => {
              const idx = bodySections.length + (content.statement ? 2 : 1) + 1 + (content.definitions?.length ? 1 : 0) + 3 + 1;
              return (
                <div id={`section-${idx}`} className="pt-6 border-t border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: `${color}15`, color }}>{idx}</span>
                    Training Requirements
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{content.training}</p>
                </div>
              );
            })()}

            {/* Monitoring */}
            {content.monitoring && (() => {
              const base = bodySections.length + (content.statement ? 2 : 1) + 1 + (content.definitions?.length ? 1 : 0) + 3 + 1;
              const idx = content.training ? base + 1 : base;
              return (
                <div id={`section-${idx}`} className="pt-6 border-t border-gray-50 scroll-mt-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: `${color}15`, color }}>{idx}</span>
                    Quality Assurance &amp; Monitoring
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{content.monitoring}</p>
                </div>
              );
            })()}

            {/* Related Documents */}
            {content.relatedDocuments && content.relatedDocuments.length > 0 && (
              <div className="pt-6 border-t border-gray-50">
                <h2 className="text-base font-bold text-gray-900 mb-3">Related Documents</h2>
                <ul className="space-y-1.5">
                  {content.relatedDocuments.map((rd, i) => {
                    const relId = parseRelatedDocId(rd);
                    const label = rd.replace(/^[a-z]+-\d+\s*[—–-]\s*/i, "");
                    return (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-gray-300 flex-shrink-0 mt-0.5">📄</span>
                        {relId ? (
                          <Link
                            href={`/compliance/${relId}`}
                            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                          >
                            {label}
                          </Link>
                        ) : (
                          <span className="text-gray-600">{rd}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Version History */}
            {content.versionHistory && content.versionHistory.length > 0 && (
              <div className="pt-6 border-t border-gray-50">
                <h2 className="text-base font-bold text-gray-900 mb-3">Version History</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: `${color}10` }}>
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-600">Version</th>
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-600">Date</th>
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-600">Amendment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {content.versionHistory.map((v, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-2.5 font-semibold text-gray-900">{v.version}</td>
                          <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">{v.date}</td>
                          <td className="px-4 py-2.5 text-gray-600">{v.amendment ?? v.changes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Acknowledgement */}
            <div ref={ackRef} className="pt-6 border-t border-gray-50 scroll-mt-24">
              {acknowledgedAt ? (
                <div
                  className="rounded-xl p-5 flex items-start gap-4"
                  style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 text-lg">
                    ✓
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-green-900 mb-0.5">Policy Acknowledged</h2>
                    <p className="text-sm text-green-700">
                      You confirmed reading this policy on{" "}
                      <span className="font-semibold">
                        {new Date(acknowledgedAt).toLocaleDateString("en-GB", {
                          day: "numeric", month: "long", year: "numeric",
                        })}
                      </span>{" "}
                      at{" "}
                      <span className="font-semibold">
                        {new Date(acknowledgedAt).toLocaleTimeString("en-GB", {
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </span>.
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      This acknowledgement is recorded in your compliance record.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: `${color}08`, border: `1px solid ${color}20` }}
                >
                  <h2 className="text-base font-bold text-gray-900 mb-1">Staff Acknowledgement</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    By clicking below, you confirm that you have read, understood and will comply with this policy.
                    This is recorded against your compliance record.
                  </p>
                  {userId ? (
                    <button
                      onClick={handleAcknowledge}
                      disabled={ackLoading}
                      className="btn-primary text-sm py-2.5 px-6 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {ackLoading ? "Recording…" : "✓ I have read and understood this policy"}
                    </button>
                  ) : (
                    <Link href="/login" className="btn-primary text-sm py-2.5 px-6 inline-block">
                      Log in to acknowledge this policy
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {doc.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════ */}
        <div className="space-y-4">

          {/* Document info */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">Document Info</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: "Ref",       value: doc.id.toUpperCase() },
                { label: "Version",   value: `v${doc.version}` },
                { label: "Updated",   value: new Date(doc.lastUpdated).toLocaleDateString("en-GB") },
                { label: "Read Time", value: `~${doc.readTime} mins` },
                { label: "Category",  value: doc.subcategory },
                { label: "Status",    value: doc.status === "updated" ? "Recently Updated" : "Current" },
                ...(content.reviewedBy  ? [{ label: "Reviewed By", value: content.reviewedBy }] : []),
                ...(content.nextReviewDate ? [{ label: "Next Review", value: content.nextReviewDate }] : []),
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-2">
                  <span className="text-gray-400 flex-shrink-0 text-xs">{item.label}</span>
                  <span className="font-medium text-gray-700 text-right text-xs">{item.value}</span>
                </div>
              ))}
            </div>
            {/* Acknowledgement status chip */}
            <div className="mt-4 pt-3" style={{ borderTop: "1px solid #f3f4f6" }}>
              {acknowledgedAt ? (
                <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                  <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">✓</span>
                  Acknowledged {new Date(acknowledgedAt).toLocaleDateString("en-GB")}
                </div>
              ) : userId ? (
                <div className="flex items-center gap-2 text-xs text-amber-600">
                  <span className="w-4 h-4 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">○</span>
                  Not yet acknowledged
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">—</span>
                  Log in to acknowledge
                </div>
              )}
            </div>
          </div>

          {/* Download */}
          <div className="card text-center" style={{ background: `linear-gradient(135deg, ${color}10, ${color}05)`, border: `1px solid ${color}20` }}>
            <div className="text-2xl mb-2">📥</div>
            <p className="text-xs font-semibold text-gray-700 mb-1">{doc.title}</p>
            <p className="text-xs text-gray-400 mb-4">Branded for {orgLoaded ? orgName : "your organisation"}</p>
            <button
              onClick={handleDownloadPDF}
              disabled={pdfLoading || !orgLoaded}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-50"
              style={{ backgroundColor: color }}
            >
              {pdfLoading ? "Generating…" : "Download PDF"}
            </button>
          </div>

          {/* Service types */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Service Types</h3>
            <div className="flex flex-wrap gap-1.5">
              {doc.serviceTypes.map((st) => (
                <span key={st} className="text-xs px-2 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Regulators */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Regulators</h3>
            <div className="flex flex-wrap gap-2">
              {doc.regulators.map((reg) => (
                <span key={reg} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                  ✓ {reg}
                </span>
              ))}
            </div>
          </div>

          {/* Related policies */}
          {related.length > 0 && (
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Policies</h3>
              <div className="space-y-2">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/compliance/${rel.id}`}
                    className="flex items-start gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors group py-1"
                  >
                    <span className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5">📄</span>
                    <span>{rel.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regulatory Resources */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">🔗 Regulatory Resources</h3>
            <div className="space-y-2">
              {[
                { label: "CQC — Care Quality Commission", href: "https://www.cqc.org.uk", desc: "Inspection guidance & standards" },
                { label: "NHS England", href: "https://www.england.nhs.uk", desc: "NHS policy & improvement" },
                { label: "Skills for Care", href: "https://www.skillsforcare.org.uk", desc: "Workforce standards & resources" },
                { label: "HSE — Health & Safety Executive", href: "https://www.hse.gov.uk", desc: "Health & safety at work" },
                { label: "NICE Guidelines", href: "https://www.nice.org.uk/guidance", desc: "Clinical & care guidance" },
                { label: "Social Care Wales / CIW", href: "https://www.careinspectorate.wales", desc: "Wales regulator" },
                { label: "Care Inspectorate Scotland", href: "https://www.careinspectorate.com", desc: "Scotland regulator" },
                { label: "RQIA Northern Ireland", href: "https://www.rqia.org.uk", desc: "Northern Ireland regulator" },
              ].map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group py-1"
                >
                  <span className="text-blue-400 flex-shrink-0 mt-0.5 text-xs">↗</span>
                  <span>
                    <span className="text-xs font-medium text-blue-600 group-hover:underline block leading-tight">{r.label}</span>
                    <span className="text-xs text-gray-400">{r.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Ziproh AI */}
          <div
            className="card p-4 text-center"
            style={{
              background: "linear-gradient(135deg, #2E6FFF10, #8b5cf610)",
              border: "1px solid #2E6FFF20",
            }}
          >
            <div className="text-2xl mb-1">🤖</div>
            <p className="text-xs font-medium text-gray-700 mb-2">Questions about this policy?</p>
            <Link
              href="/ai-assistant"
              className="block text-xs font-semibold py-2 px-4 rounded-lg text-white"
              style={{ backgroundColor: "#2E6FFF" }}
            >
              Ask Ziproh AI →
            </Link>
          </div>

          <Link
            href="/compliance"
            className="block w-full text-center py-2.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            ← Back to Compliance Centre
          </Link>
        </div>
      </div>

      {/* ══ READING LIST MODAL ══════════════════════════════════════════════════ */}
      {rlOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setRlOpen(false)}
          />
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">📚 Add to Reading List</h2>
              <button
                onClick={() => setRlOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Select a reading list to add <span className="font-semibold text-gray-700">{doc.title}</span>.
            </p>

            {rlLoading ? (
              <div className="flex items-center justify-center py-8 text-gray-400 text-sm gap-2">
                <span className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                Loading lists…
              </div>
            ) : readingLists.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-sm text-gray-500 mb-4">You don&apos;t have any reading lists yet.</p>
                <Link
                  href="/reading-lists"
                  onClick={() => setRlOpen(false)}
                  className="inline-block text-sm font-semibold px-4 py-2 rounded-xl text-white"
                  style={{ backgroundColor: "#2E6FFF" }}
                >
                  Create a Reading List →
                </Link>
              </div>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {readingLists.map((list) => {
                  const isIn = list.document_ids.includes(id);
                  const isSaving = rlSaving === list.id;
                  return (
                    <button
                      key={list.id}
                      onClick={() => toggleReadingList(list)}
                      disabled={isSaving}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-left transition-all disabled:opacity-50"
                      style={{
                        border: isIn ? "1px solid #2E6FFF40" : "1px solid #e2e8f0",
                        backgroundColor: isIn ? "#2E6FFF08" : "white",
                      }}
                    >
                      <span className="text-sm font-medium text-gray-800 truncate">{list.name}</span>
                      <span
                        className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded-lg"
                        style={
                          isIn
                            ? { backgroundColor: "#2E6FFF15", color: "#2E6FFF" }
                            : { backgroundColor: "#f3f4f6", color: "#6b7280" }
                        }
                      >
                        {isSaving ? "…" : isIn ? "✓ Added" : "+ Add"}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <Link
                href="/reading-lists"
                onClick={() => setRlOpen(false)}
                className="text-xs text-blue-500 hover:underline"
              >
                Manage reading lists →
              </Link>
              <button
                onClick={() => setRlOpen(false)}
                className="text-xs font-medium px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ POLICY ADOPTION MODAL ════════════════════════════════════════════════ */}
      {adoptOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setAdoptOpen(false); setAdoptError(null); }} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{adoption ? "Re-Adopt Policy" : "Adopt Policy"}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{doc?.title}</p>
              </div>
              <button
                onClick={() => { setAdoptOpen(false); setAdoptError(null); }}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >×</button>
            </div>

            {/* Info box */}
            <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700">
              By adopting this policy, {orgName} formally claims it as your own policy document.
              The reviewer&rsquo;s details and adoption date will appear on the PDF cover page.
            </div>

            {/* Form */}
            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                  Reviewer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={adoptName}
                  onChange={(e) => setAdoptName(e.target.value)}
                  placeholder="e.g. Jane Smith"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                  Reviewer Role / Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={adoptRole}
                  onChange={(e) => setAdoptRole(e.target.value)}
                  placeholder="e.g. Registered Manager"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                  Adoption Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={adoptDate}
                  onChange={(e) => setAdoptDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Security notice */}
            <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2 text-xs text-gray-500">
              <span className="text-gray-400 mt-0.5">🔒</span>
              <span>Your PDF will be encrypted. No one can copy, edit, or modify it without an admin-issued unlock password.</span>
            </div>

            {adoptError && (
              <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600">
                {adoptError}
              </div>
            )}

            {/* Actions */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => { setAdoptOpen(false); setAdoptError(null); }}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveAdoption}
                disabled={adoptSaving || !adoptName.trim() || !adoptRole.trim() || !adoptDate}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-50"
                style={{ backgroundColor: color }}
              >
                {adoptSaving ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adopting…
                  </span>
                ) : (
                  "✓ Adopt & Download PDF"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
