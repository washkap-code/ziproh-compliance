"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";

type Answer = "yes" | "no" | "partial" | "na";

type Question = {
  id: string;
  section: string;
  text: string;
  guidance: string;
};

type Findings = {
  template_id: string;
  questions: Question[];
  answers: Record<string, Answer>;
  notes: Record<string, string>;
};

type AuditRecord = {
  id: string;
  title: string;
  audit_type: string;
  status: string;
  score: number | null;
  conducted_at: string | null;
  created_at: string;
  findings: Findings | null;
};

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

function answerIcon(a: Answer) {
  if (a === "yes")     return { icon: "✓", bg: "#dcfce7", color: "#16a34a" };
  if (a === "partial") return { icon: "~", bg: "#fef3c7", color: "#d97706" };
  if (a === "no")      return { icon: "✗", bg: "#fee2e2", color: "#dc2626" };
  return                      { icon: "—", bg: "#f3f4f6", color: "#6b7280" };
}

function groupBySection(questions: Question[]) {
  return questions.reduce<Record<string, Question[]>>((acc, q) => {
    if (!acc[q.section]) acc[q.section] = [];
    acc[q.section].push(q);
    return acc;
  }, {});
}

export default function AuditReportPage() {
  const { id } = useParams<{ id: string }>();
  const [audit,   setAudit]   = useState<AuditRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data, error } = await sb
        .from("audits")
        .select("id, title, audit_type, status, score, conducted_at, created_at, findings")
        .eq("id", id)
        .single();

      if (error) setError(error.message);
      else setAudit(data as AuditRecord);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return (
    <DashboardLayout>
      <div className="p-8 text-gray-400 text-sm">Loading report…</div>
    </DashboardLayout>
  );

  if (error || !audit) return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <div className="card p-8 text-center">
          <div className="text-4xl mb-3">⚠️</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Audit not found</h2>
          <p className="text-sm text-gray-500 mb-4">{error ?? "This audit may have been deleted or doesn't exist."}</p>
          <Link href="/audit" className="btn-secondary">← Back to Audits</Link>
        </div>
      </div>
    </DashboardLayout>
  );

  const findings  = audit.findings;
  const score     = audit.score ?? 0;
  const scoreCol  = scoreColour(score);
  const scoreTag  = scoreLabel(score);
  const dateStr   = new Date(audit.conducted_at ?? audit.created_at)
    .toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  // Derive counts from findings if available
  const answers      = findings?.answers ?? {};
  const notes        = findings?.notes ?? {};
  const questions    = findings?.questions ?? [];
  const yesCount     = Object.values(answers).filter((a) => a === "yes").length;
  const partialCount = Object.values(answers).filter((a) => a === "partial").length;
  const noCount      = Object.values(answers).filter((a) => a === "no").length;
  const naCount      = Object.values(answers).filter((a) => a === "na").length;
  const noItems      = questions.filter((q) => answers[q.id] === "no");
  const partialItems = questions.filter((q) => answers[q.id] === "partial");
  const grouped      = groupBySection(questions);

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/audit" className="hover:text-gray-600">Audit Centre</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">{audit.title}</span>
        </div>

        {/* Report header */}
        <div className="card p-8 mb-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{audit.title}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{audit.audit_type}</span>
                <span>·</span>
                <span>Completed {dateStr}</span>
              </div>
            </div>
            {audit.score !== null && (
              <div className="text-right flex-shrink-0">
                <div className="text-5xl font-bold" style={{ color: scoreCol }}>{audit.score}%</div>
                <div className="text-sm font-semibold mt-0.5" style={{ color: scoreCol }}>{scoreTag}</div>
              </div>
            )}
          </div>

          {/* Summary bar */}
          {questions.length > 0 && (
            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { label: "Yes",     value: yesCount,     bg: "#dcfce7", color: "#16a34a" },
                  { label: "Partial", value: partialCount, bg: "#fef3c7", color: "#d97706" },
                  { label: "No",      value: noCount,      bg: "#fee2e2", color: "#dc2626" },
                  { label: "N/A",     value: naCount,      bg: "#f3f4f6", color: "#6b7280" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3" style={{ backgroundColor: s.bg }}>
                    <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-xs font-medium mt-0.5" style={{ color: s.color }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action items */}
        {(noItems.length > 0 || partialItems.length > 0) && (
          <div className="card p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-4">
              ⚠️ Action Required ({noItems.length + partialItems.length} items)
            </h2>
            <div className="space-y-2">
              {[...noItems, ...partialItems].map((q) => {
                const a = answers[q.id];
                const { icon, bg, color } = answerIcon(a);
                return (
                  <div key={q.id} className="flex gap-3 items-start rounded-xl p-3" style={{ backgroundColor: bg }}>
                    <span className="font-bold text-sm flex-shrink-0 mt-0.5" style={{ color }}>{icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{q.text}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{q.section}</p>
                      {notes[q.id] && (
                        <p className="text-xs mt-1 italic text-gray-600">Note: {notes[q.id]}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Full question breakdown */}
        {questions.length > 0 && (
          <div className="card p-6 mb-6">
            <h2 className="font-bold text-gray-900 mb-4">Full Question Breakdown</h2>
            <div className="space-y-6">
              {Object.entries(grouped).map(([section, qs]) => (
                <div key={section}>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{section}</h3>
                  <div className="space-y-2">
                    {qs.map((q) => {
                      const a = answers[q.id] as Answer | undefined;
                      const { icon, bg, color } = a ? answerIcon(a) : { icon: "?", bg: "#f9fafb", color: "#9ca3af" };
                      return (
                        <div key={q.id} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: bg }}>
                          <span className="font-bold text-sm flex-shrink-0 w-5 text-center" style={{ color }}>{icon}</span>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{q.text}</p>
                            {notes[q.id] && (
                              <p className="text-xs text-gray-500 mt-0.5 italic">Note: {notes[q.id]}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/audit" className="btn-secondary">← Back to Audits</Link>
          <button
            onClick={() => window.print()}
            className="btn-primary"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
