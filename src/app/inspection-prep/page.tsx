"use client";

import { useEffect, useState, useMemo } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS, FLAGSHIP_IDS } from "@/lib/documents";

// ─── CQC Key Question config ──────────────────────────────────────────────────

const KQ_CONFIG: Record<string, {
  color: string; icon: string; description: string;
  kloeSummary: string; inspectorFocus: string[];
}> = {
  Safe: {
    color: "#22c55e", icon: "🛡️",
    description: "Protecting people from abuse, neglect and avoidable harm",
    kloeSummary: "Safeguarding · Medicines · Infection control · Safe environments · Staffing",
    inspectorFocus: [
      "Safeguarding training records and referral logs",
      "Medicines management audits and completed MAR charts",
      "Infection prevention and control audit records",
      "Accident, incident and near-miss reports with analysis",
      "Safe staffing levels, rotas and deployment records",
      "DOLS/LPS authorisations for all relevant residents",
      "Moving and handling risk assessments and training",
    ],
  },
  Effective: {
    color: "#2E6FFF", icon: "✅",
    description: "Achieving good outcomes for people's health and wellbeing",
    kloeSummary: "Care planning · Consent · Mental capacity · Nutrition · Clinical outcomes",
    inspectorFocus: [
      "Personalised care plans reviewed within 3 months",
      "Mental capacity assessments and best interest decisions",
      "Nutrition and hydration monitoring charts",
      "Pressure area care records and skin assessments",
      "Evidence of care outcomes monitoring and improvement",
      "Staff competency assessments for clinical procedures",
      "Oral health assessments and dental referrals",
    ],
  },
  Caring: {
    color: "#ec4899", icon: "💙",
    description: "Treating people with compassion, kindness and respect",
    kloeSummary: "Dignity · Privacy · Compassion · Independence · Emotional support",
    inspectorFocus: [
      "Evidence of person-centred care in daily practice",
      "Privacy and dignity observations and resident feedback",
      "Communication and information-sharing records",
      "Advocacy arrangements and IMCA/IMHA referral records",
      "End-of-life care documentation and advance care plans",
      "Evidence of resident involvement in care decisions",
      "Family and carer engagement records",
    ],
  },
  Responsive: {
    color: "#f59e0b", icon: "🔄",
    description: "Meeting people's needs and responding to their preferences",
    kloeSummary: "Complaints · Assessments · Personalised care · Flexible services · Discharge",
    inspectorFocus: [
      "Complaints log with outcomes and learning evidence",
      "Evidence of service user involvement in care planning",
      "Flexible and personalised service delivery examples",
      "Hospital admission and discharge liaison records",
      "Equality, diversity and inclusion evidence",
      "Activities programme and social engagement records",
      "Feedback surveys and compliments log",
    ],
  },
  "Well-Led": {
    color: "#8b5cf6", icon: "🏛️",
    description: "Effective leadership, governance and a learning culture",
    kloeSummary: "Governance · Leadership · Learning culture · Staff wellbeing · CQC registration",
    inspectorFocus: [
      "Quality assurance audit schedule and improvement plans",
      "Registered manager registration certificate",
      "Statement of Purpose and CQC registration displayed",
      "Staff supervision records and annual appraisal evidence",
      "Whistleblowing policy and any records of concerns raised",
      "Business continuity plan, tested and current",
      "Staff wellbeing, absence records and return-to-work interviews",
    ],
  },
};

// ─── Pre-inspection operational checklist ────────────────────────────────────

type CheckItem = { id: string; category: string; text: string };

const CHECKLIST: CheckItem[] = [
  { id: "c01", category: "Registration", text: "CQC registration certificate is displayed prominently" },
  { id: "c02", category: "Registration", text: "Statement of Purpose is current (reviewed within 12 months)" },
  { id: "c03", category: "Registration", text: "Registered Manager has current CQC registration" },
  { id: "c04", category: "Staffing", text: "Staff rotas for the last 3 months are available" },
  { id: "c05", category: "Staffing", text: "DBS checks are current for all staff" },
  { id: "c06", category: "Staffing", text: "Training matrix is complete and up to date" },
  { id: "c07", category: "Staffing", text: "Staff supervision records cover all active staff" },
  { id: "c08", category: "Medicines", text: "MAR charts are complete for the last 28 days" },
  { id: "c09", category: "Medicines", text: "Controlled drugs register is accurate and double-signed" },
  { id: "c10", category: "Medicines", text: "Medicine storage temperatures are documented" },
  { id: "c11", category: "Safeguarding", text: "Safeguarding referrals log is available with outcomes" },
  { id: "c12", category: "Safeguarding", text: "DOLS/LPS authorisations are in place and documented" },
  { id: "c13", category: "Safeguarding", text: "Safeguarding training is current for all staff" },
  { id: "c14", category: "Care Records", text: "All care plans reviewed and signed within 3 months" },
  { id: "c15", category: "Care Records", text: "Risk assessments are current and signed off" },
  { id: "c16", category: "Care Records", text: "Mental capacity assessments completed where required" },
  { id: "c17", category: "Governance", text: "Complaints log with actions and outcomes is available" },
  { id: "c18", category: "Governance", text: "Accident/incident analysis for last 12 months" },
  { id: "c19", category: "Governance", text: "Infection control audit completed this quarter" },
  { id: "c20", category: "Governance", text: "Quality improvement plan with measurable actions" },
  { id: "c21", category: "Environment", text: "Fire safety checks and evacuation records are current" },
  { id: "c22", category: "Environment", text: "Building maintenance log is up to date" },
  { id: "c23", category: "Environment", text: "Equipment maintenance and service records are available" },
];

const CHECKLIST_CATEGORIES = [...new Set(CHECKLIST.map((c) => c.category))];

// ─── Readiness band ───────────────────────────────────────────────────────────

function readinessBand(pct: number): { label: string; color: string; bg: string } {
  if (pct >= 90) return { label: "Inspection Ready", color: "#16a34a", bg: "#f0fdf4" };
  if (pct >= 75) return { label: "Nearly Ready", color: "#2E6FFF", bg: "#eff6ff" };
  if (pct >= 50) return { label: "In Progress", color: "#d97706", bg: "#fffbeb" };
  return { label: "Action Needed", color: "#dc2626", bg: "#fef2f2" };
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function InspectionPrepPage() {
  const [readIds, setReadIds]   = useState<Set<string>>(new Set());
  const [loading, setLoading]   = useState(true);
  const [orgName, setOrgName]   = useState("");
  const [activeKQ, setActiveKQ] = useState<string>("Safe");
  const [checked, setChecked]   = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const saved = localStorage.getItem("inspection-checklist");
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [showChecklist, setShowChecklist] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }
      const [profileRes, recordsRes] = await Promise.all([
        supabase.from("profiles").select("org_name").eq("id", user.id).single(),
        supabase.from("read_records").select("document_id").eq("user_id", user.id),
      ]);
      if (profileRes.data?.org_name) setOrgName(profileRes.data.org_name);
      if (recordsRes.data) setReadIds(new Set(recordsRes.data.map((r: { document_id: string }) => r.document_id)));
      setLoading(false);
    })();
  }, []);

  function toggleCheck(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("inspection-checklist", JSON.stringify([...next])); } catch {}
      return next;
    });
  }

  // ── Stats ──────────────────────────────────────────────────────────────────

  const kqStats = useMemo(() => {
    return Object.keys(KQ_CONFIG).map((kq) => {
      const all = DOCUMENTS.filter((d) => d.keyQuestion === kq);
      const flagship = all.filter((d) => FLAGSHIP_IDS.has(d.id));
      const allRead = all.filter((d) => readIds.has(d.id)).length;
      const flagshipRead = flagship.filter((d) => readIds.has(d.id)).length;
      const pct = all.length > 0 ? Math.round((allRead / all.length) * 100) : 0;
      const flagshipPct = flagship.length > 0 ? Math.round((flagshipRead / flagship.length) * 100) : 0;
      return { kq, all, flagship, allRead, flagshipRead, pct, flagshipPct };
    });
  }, [readIds]);

  const overallPct = useMemo(() => {
    const total = DOCUMENTS.length;
    const read  = DOCUMENTS.filter((d) => readIds.has(d.id)).length;
    return total > 0 ? Math.round((read / total) * 100) : 0;
  }, [readIds]);

  const checklistPct = useMemo(() =>
    CHECKLIST.length > 0 ? Math.round((checked.size / CHECKLIST.length) * 100) : 0,
  [checked]);

  const combinedScore = Math.round((overallPct * 0.6) + (checklistPct * 0.4));
  const band = readinessBand(combinedScore);

  const activeStats  = kqStats.find((s) => s.kq === activeKQ)!;
  const activeConfig = KQ_CONFIG[activeKQ];

  // Critical policies for active KQ — flagship first, then any others
  const criticalPolicies = activeStats
    ? [
        ...activeStats.flagship,
        ...activeStats.all.filter((d) => !FLAGSHIP_IDS.has(d.id)).slice(0, 4),
      ].slice(0, 8)
    : [];

  return (
    <DashboardLayout>
      <div className="max-w-5xl">

        {/* ── Header ── */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CQC Inspection Preparation</h1>
            <p className="text-sm text-gray-500 mt-1">
              {orgName ? `${orgName} · ` : ""}Track readiness across all 5 key questions
            </p>
          </div>
          <button
            onClick={() => setShowChecklist(!showChecklist)}
            className="btn-primary text-sm py-2 flex items-center gap-2"
          >
            ☑️ Pre-Inspection Checklist
            <span className="text-xs opacity-75">{checklistPct}% done</span>
          </button>
        </div>

        {/* ── Overall readiness score ── */}
        <div className="card mb-6 p-6" style={{ border: `2px solid ${band.color}20` }}>
          <div className="flex flex-wrap items-center gap-6">
            {/* Score ring */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3.2" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke={band.color} strokeWidth="3.2"
                  strokeDasharray={`${combinedScore} ${100 - combinedScore}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: band.color }}>{combinedScore}</span>
                <span className="text-xs text-gray-400">/ 100</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-2"
                style={{ backgroundColor: band.bg, color: band.color }}>
                {combinedScore >= 75 ? "✓" : "●"} {band.label}
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Combined score based on 60% policy acknowledgement ({overallPct}%) and 40% operational checklist ({checklistPct}%)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {kqStats.map((s) => (
                  <button
                    key={s.kq}
                    onClick={() => setActiveKQ(s.kq)}
                    className="text-left rounded-xl p-3 transition-all"
                    style={{
                      backgroundColor: activeKQ === s.kq ? `${KQ_CONFIG[s.kq].color}12` : "#f9fafb",
                      border: activeKQ === s.kq ? `1.5px solid ${KQ_CONFIG[s.kq].color}40` : "1.5px solid transparent",
                    }}
                  >
                    <div className="text-xs font-semibold text-gray-700 mb-1">{s.kq}</div>
                    <div className="text-lg font-bold" style={{ color: KQ_CONFIG[s.kq].color }}>{s.pct}%</div>
                    <div className="mt-1.5 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${s.pct}%`, backgroundColor: KQ_CONFIG[s.kq].color }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Pre-inspection checklist (collapsible) ── */}
        {showChecklist && (
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-bold text-gray-900">Pre-Inspection Operational Checklist</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Non-policy documentation and operational items inspectors will check
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: band.color }}>{checked.size}/{CHECKLIST.length}</div>
                <div className="text-xs text-gray-400">completed</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
              <div className="h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistPct}%`, backgroundColor: band.color }} />
            </div>

            {CHECKLIST_CATEGORIES.map((cat) => {
              const items = CHECKLIST.filter((c) => c.category === cat);
              const catDone = items.filter((c) => checked.has(c.id)).length;
              return (
                <div key={cat} className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide">{cat}</h3>
                    <span className="text-xs text-gray-400">{catDone}/{items.length}</span>
                  </div>
                  <div className="space-y-1.5">
                    {items.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors hover:bg-gray-50"
                        style={{ backgroundColor: checked.has(item.id) ? "#f0fdf4" : undefined }}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            checked={checked.has(item.id)}
                            onChange={() => toggleCheck(item.id)}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
                            style={{
                              backgroundColor: checked.has(item.id) ? "#22c55e" : "white",
                              borderColor: checked.has(item.id) ? "#22c55e" : "#d1d5db",
                            }}>
                            {checked.has(item.id) && <span className="text-white text-xs">✓</span>}
                          </div>
                        </div>
                        <span className="text-sm text-gray-700" style={{ textDecoration: checked.has(item.id) ? "line-through" : "none", color: checked.has(item.id) ? "#6b7280" : undefined }}>
                          {item.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between items-center">
              <p className="text-xs text-gray-400">Checklist saved automatically to this device</p>
              {checked.size > 0 && (
                <button
                  onClick={() => { setChecked(new Set()); localStorage.removeItem("inspection-checklist"); }}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  Reset checklist
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── KQ tabs ── */}
        <div className="flex gap-1 mb-5 flex-wrap">
          {Object.keys(KQ_CONFIG).map((kq) => {
            const s = kqStats.find((x) => x.kq === kq)!;
            return (
              <button
                key={kq}
                onClick={() => setActiveKQ(kq)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
                style={{
                  backgroundColor: activeKQ === kq ? KQ_CONFIG[kq].color : "#f3f4f6",
                  color: activeKQ === kq ? "white" : "#6b7280",
                }}
              >
                <span>{KQ_CONFIG[kq].icon}</span>
                <span>{kq}</span>
                <span className="text-xs opacity-75">{s.pct}%</span>
              </button>
            );
          })}
        </div>

        {/* ── Active KQ detail panel ── */}
        {activeStats && activeConfig && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Left: KQ overview + inspector focus */}
            <div className="lg:col-span-1 space-y-4">

              {/* KQ summary card */}
              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${activeConfig.color}15` }}>
                    {activeConfig.icon}
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">{activeKQ}</h2>
                    <p className="text-xs text-gray-500">{activeConfig.description}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-3">{activeConfig.kloeSummary}</p>

                {/* Policy stats */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500 font-medium">All policies read</span>
                      <span className="font-bold" style={{ color: activeConfig.color }}>
                        {activeStats.allRead}/{activeStats.all.length}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${activeStats.pct}%`, backgroundColor: activeConfig.color }} />
                    </div>
                  </div>

                  {activeStats.flagship.length > 0 && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500 font-medium">⭐ Comprehensive policies</span>
                        <span className="font-bold" style={{ color: activeConfig.color }}>
                          {activeStats.flagshipRead}/{activeStats.flagship.length}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${activeStats.flagshipPct}%`, backgroundColor: activeConfig.color }} />
                      </div>
                    </div>
                  )}
                </div>

                {activeStats.pct < 80 && (
                  <div className="mt-3 text-xs rounded-xl p-2.5"
                    style={{ backgroundColor: "#fffbeb", color: "#92400e" }}>
                    ⚠ {activeStats.all.length - activeStats.allRead} unread {activeKQ.toLowerCase()} policies before an inspection
                  </div>
                )}
              </div>

              {/* Inspector focus areas */}
              <div className="card p-5">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                  What Inspectors Look For
                </h3>
                <ul className="space-y-2">
                  {activeConfig.inspectorFocus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex-shrink-0 mt-0.5 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-white"
                        style={{ backgroundColor: activeConfig.color, fontSize: "9px" }}>
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/compliance?kq=${activeKQ}`}
                className="block text-center py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: activeConfig.color, color: "white" }}>
                View All {activeKQ} Policies →
              </Link>
            </div>

            {/* Right: Critical policies list */}
            <div className="lg:col-span-2">
              <div className="card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">
                    Policies to Evidence — {activeKQ}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {loading ? "Loading…" : `${activeStats.allRead} of ${activeStats.all.length} acknowledged`}
                  </span>
                </div>

                {criticalPolicies.length === 0 ? (
                  <p className="text-sm text-gray-400 py-6 text-center">No policies found for this key question.</p>
                ) : (
                  <div className="space-y-2">
                    {criticalPolicies.map((doc) => {
                      const isRead = readIds.has(doc.id);
                      const isFlagship = FLAGSHIP_IDS.has(doc.id);
                      return (
                        <Link key={doc.id} href={`/compliance/${doc.id}`}>
                          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50 group"
                            style={{
                              border: isRead
                                ? "1px solid #bbf7d080"
                                : "1px solid #f3f4f6",
                              backgroundColor: isRead ? "#f0fdf480" : undefined,
                            }}>

                            {/* Read indicator */}
                            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                backgroundColor: isRead ? "#22c55e" : "#f3f4f6",
                              }}>
                              <span className="text-xs" style={{ color: isRead ? "white" : "#9ca3af" }}>
                                {isRead ? "✓" : "○"}
                              </span>
                            </div>

                            {/* Title */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-semibold text-gray-900 group-hover:text-[#2E6FFF] transition-colors">
                                  {doc.title}
                                </span>
                                {isFlagship && (
                                  <span className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                                    style={{ backgroundColor: "#2E6FFF15", color: "#2E6FFF" }}>
                                    ⭐ Comprehensive
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{doc.summary}</p>
                            </div>

                            {/* Status + arrow */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {isRead ? (
                                <span className="text-xs font-semibold text-green-600 hidden sm:block">Acknowledged</span>
                              ) : (
                                <span className="text-xs font-medium text-amber-600 hidden sm:block">Unread</span>
                              )}
                              <span className="text-gray-300 group-hover:text-[#2E6FFF] transition-colors">→</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* Show if there are more */}
                {activeStats.all.length > criticalPolicies.length && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                    <Link href={`/compliance?kq=${activeKQ}`}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: activeConfig.color }}>
                      + {activeStats.all.length - criticalPolicies.length} more {activeKQ} policies →
                    </Link>
                  </div>
                )}
              </div>

              {/* Inspection tips card */}
              <div className="mt-4 rounded-2xl p-4 flex gap-3"
                style={{ backgroundColor: `${activeConfig.color}08`, border: `1px solid ${activeConfig.color}25` }}>
                <span className="text-xl flex-shrink-0">💡</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Inspection tip — {activeKQ}</p>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    {activeKQ === "Safe" && "Inspectors will cross-reference your safeguarding training matrix against referral records. Ensure staff can describe your safeguarding procedures verbally — not just sign a policy."}
                    {activeKQ === "Effective" && "Care plans must show evidence of review and that the person or their representative was involved. Generic care plans with no personalisation are a key trigger for concerns."}
                    {activeKQ === "Caring" && "Inspectors observe staff interactions and ask residents directly about dignity and respect. The most powerful evidence is from the people you support, not your documentation."}
                    {activeKQ === "Responsive" && "A complaints log showing only 'resolved' outcomes raises questions. Inspectors want to see learning from complaints and evidence of change in practice."}
                    {activeKQ === "Well-Led" && "Inspectors may interview the Registered Manager in depth. Be able to describe your quality assurance cycle, how you identify and act on risks, and how staff raise concerns safely."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}
