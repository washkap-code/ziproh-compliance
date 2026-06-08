"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

type AuditRecord = {
  id: string;
  title: string;
  type: string;
  keyQuestion: string;
  status: "draft" | "in_progress" | "completed";
  score: number | null;
  date: string;
  conductedBy: string;
};

const SAMPLE_AUDITS: AuditRecord[] = [
  {
    id: "aud-001",
    title: "Quarterly Medication Audit",
    type: "Internal",
    keyQuestion: "Safe",
    status: "completed",
    score: 87,
    date: "2026-05-28",
    conductedBy: "Sarah Johnson",
  },
  {
    id: "aud-002",
    title: "Infection Prevention & Control Audit",
    type: "Internal",
    keyQuestion: "Safe",
    status: "completed",
    score: 92,
    date: "2026-05-15",
    conductedBy: "Mark Williams",
  },
  {
    id: "aud-003",
    title: "Care Planning Audit Q2",
    type: "Internal",
    keyQuestion: "Effective",
    status: "in_progress",
    score: null,
    date: "2026-06-01",
    conductedBy: "Washington Admin",
  },
  {
    id: "aud-004",
    title: "Governance & Quality Review",
    type: "Self-Assessment",
    keyQuestion: "Well-Led",
    status: "draft",
    score: null,
    date: "2026-06-05",
    conductedBy: "Washington Admin",
  },
];

const AUDIT_TEMPLATES = [
  {
    id: "tmpl-safe",
    title: "Safe — Full Audit",
    description: "Covers medication, IPC, safeguarding, risk assessment and fire safety",
    keyQuestion: "Safe",
    questions: 32,
    color: "#22c55e",
    icon: "🛡️",
  },
  {
    id: "tmpl-effective",
    title: "Effective — Full Audit",
    description: "Covers care planning, nutrition, mental capacity and clinical governance",
    keyQuestion: "Effective",
    questions: 28,
    color: "#2E6FFF",
    icon: "✅",
  },
  {
    id: "tmpl-caring",
    title: "Caring — Full Audit",
    description: "Covers dignity, person-centred care, communication and wellbeing",
    keyQuestion: "Caring",
    questions: 18,
    color: "#ec4899",
    icon: "💙",
  },
  {
    id: "tmpl-responsive",
    title: "Responsive — Full Audit",
    description: "Covers complaints handling, service user involvement and flexibility",
    keyQuestion: "Responsive",
    questions: 15,
    color: "#f59e0b",
    icon: "🔔",
  },
  {
    id: "tmpl-wellled",
    title: "Well-Led — Full Audit",
    description: "Covers governance, HR, record keeping, GDPR and workforce development",
    keyQuestion: "Well-Led",
    questions: 24,
    color: "#8b5cf6",
    icon: "🏢",
  },
  {
    id: "tmpl-mock-cqc",
    title: "Mock CQC Inspection",
    description: "Comprehensive audit across all 5 key questions — ideal for inspection preparation",
    keyQuestion: "All",
    questions: 95,
    color: "#374151",
    icon: "🏛️",
  },
];

function scoreColour(score: number) {
  if (score >= 90) return "#22c55e";
  if (score >= 75) return "#2E6FFF";
  if (score >= 60) return "#f59e0b";
  return "#ef4444";
}

function scoreLabel(score: number) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Requires Improvement";
  return "Inadequate";
}

export default function AuditPage() {
  const [tab, setTab] = useState<"overview" | "templates">("overview");
  const [filter, setFilter] = useState("All");

  const KQ_FILTERS = ["All", "Safe", "Effective", "Caring", "Responsive", "Well-Led"];

  const filtered = filter === "All"
    ? SAMPLE_AUDITS
    : SAMPLE_AUDITS.filter((a) => a.keyQuestion === filter);

  const completed = SAMPLE_AUDITS.filter((a) => a.status === "completed");
  const avgScore = completed.length > 0
    ? Math.round(completed.reduce((s, a) => s + (a.score ?? 0), 0) / completed.length)
    : 0;

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Audit Centre</h1>
            <p className="text-sm text-gray-500 mt-0.5">Conduct internal audits and track your compliance performance</p>
          </div>
          <Link
            href="/audit/new"
            className="btn-primary flex items-center gap-2"
          >
            <span>＋</span> New Audit
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Audits", value: SAMPLE_AUDITS.length.toString(), icon: "📊" },
            { label: "Completed", value: completed.length.toString(), icon: "✅" },
            { label: "In Progress", value: SAMPLE_AUDITS.filter((a) => a.status === "in_progress").length.toString(), icon: "🔄" },
            { label: "Avg Score", value: avgScore ? `${avgScore}%` : "—", icon: "⭐" },
          ].map((s) => (
            <div key={s.label} className="card p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{s.icon}</span>
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-xl w-fit">
          {(["overview", "templates"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize"
              style={{
                backgroundColor: tab === t ? "white" : "transparent",
                color: tab === t ? "#2E6FFF" : "#6b7280",
                boxShadow: tab === t ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {t === "overview" ? "My Audits" : "Audit Templates"}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            {/* Filters */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {KQ_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                  style={{
                    backgroundColor: filter === f ? "#2E6FFF" : "white",
                    color: filter === f ? "white" : "#374151",
                    borderColor: filter === f ? "#2E6FFF" : "#e5e7eb",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Audit list */}
            <div className="space-y-3">
              {filtered.map((audit) => (
                <div key={audit.id} className="card p-5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{audit.title}</h3>
                      <span className="badge text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: audit.status === "completed" ? "#dcfce7" : audit.status === "in_progress" ? "#dbeafe" : "#f3f4f6",
                          color: audit.status === "completed" ? "#166534" : audit.status === "in_progress" ? "#1e40af" : "#374151",
                        }}>
                        {audit.status === "in_progress" ? "In Progress" : audit.status.charAt(0).toUpperCase() + audit.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{audit.type}</span>
                      <span>·</span>
                      <span>{audit.keyQuestion}</span>
                      <span>·</span>
                      <span>{new Date(audit.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span>·</span>
                      <span>By {audit.conductedBy}</span>
                    </div>
                  </div>

                  {audit.score !== null && (
                    <div className="text-center px-4">
                      <div className="text-2xl font-bold" style={{ color: scoreColour(audit.score) }}>
                        {audit.score}%
                      </div>
                      <div className="text-xs" style={{ color: scoreColour(audit.score) }}>
                        {scoreLabel(audit.score)}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {audit.status === "draft" || audit.status === "in_progress" ? (
                      <Link
                        href={`/audit/${audit.id}`}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                        style={{ backgroundColor: "#2E6FFF" }}
                      >
                        Continue
                      </Link>
                    ) : (
                      <Link
                        href={`/audit/${audit.id}`}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50"
                      >
                        View Report
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "templates" && (
          <div className="grid grid-cols-3 gap-4">
            {AUDIT_TEMPLATES.map((tmpl) => (
              <div key={tmpl.id} className="card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: tmpl.color + "20" }}>
                    {tmpl.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">{tmpl.title}</h3>
                    <span className="text-xs text-gray-400">{tmpl.questions} questions</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{tmpl.description}</p>
                <Link
                  href={`/audit/new?template=${tmpl.id}`}
                  className="w-full flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  Start Audit →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
