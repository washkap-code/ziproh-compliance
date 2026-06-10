"use client";

/**
 * /compliance-report — Compliance Evidence Report
 *
 * Generates a printable compliance status report for board meetings,
 * CQC inspections, and internal governance. Uses browser print-to-PDF.
 *
 * Data sources:
 *  - profiles       (org name, manager name, service type)
 *  - read_records   (policy acknowledgements with dates)
 *  - policy_reviews (formal annual review records)
 */

import { useEffect, useState, useMemo, useRef } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS, FLAGSHIP_IDS } from "@/lib/documents";

// ─── Types ────────────────────────────────────────────────────────────────────

type ReadRecord   = { document_id: string; read_at: string };
type ReviewRecord = {
  document_id: string; reviewed_at: string;
  reviewer_name: string; status: string; notes: string | null;
};
type Profile      = {
  first_name: string; last_name: string; org_name: string;
  service_type: string; regulator: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const KQ_COLOR: Record<string, string> = {
  Safe: "#22c55e", Effective: "#2E6FFF", Caring: "#ec4899",
  Responsive: "#f59e0b", "Well-Led": "#8b5cf6",
};
const KEY_QUESTIONS = ["Safe", "Effective", "Caring", "Responsive", "Well-Led"] as const;

function fmt(d: string | Date): string {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
function fmtShort(d: string | Date): string {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function reviewDue(lastUpdated: string, latestReview: ReviewRecord | null): Date {
  const base = latestReview ? new Date(latestReview.reviewed_at) : new Date(lastUpdated);
  const d = new Date(base);
  d.setMonth(d.getMonth() + 12);
  return d;
}

function reviewStatus(due: Date): "overdue" | "due_soon" | "current" {
  const days = Math.ceil((due.getTime() - Date.now()) / 86400000);
  if (days < 0) return "overdue";
  if (days <= 90) return "due_soon";
  return "current";
}

// ─── Report date ──────────────────────────────────────────────────────────────

const TODAY = new Date();
const REPORT_DATE = fmt(TODAY);

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ComplianceReportPage() {
  const [profile,   setProfile]   = useState<Profile | null>(null);
  const [reads,     setReads]     = useState<ReadRecord[]>([]);
  const [reviews,   setReviews]   = useState<ReviewRecord[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [section,   setSection]   = useState<"overview" | "acknowledgements" | "reviews" | "all">("all");
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }
      const [p, r, rv] = await Promise.all([
        supabase.from("profiles").select("first_name,last_name,org_name,service_type,regulator").eq("id", user.id).single(),
        supabase.from("read_records").select("document_id,read_at").eq("user_id", user.id).order("read_at", { ascending: false }),
        supabase.from("policy_reviews").select("document_id,reviewed_at,reviewer_name,status,notes").eq("user_id", user.id).order("reviewed_at", { ascending: false }),
      ]);
      if (p.data)  setProfile(p.data as Profile);
      if (r.data)  setReads(r.data as ReadRecord[]);
      if (rv.data) setReviews(rv.data as ReviewRecord[]);
      setLoading(false);
    })();
  }, []);

  // ── Derived data ────────────────────────────────────────────────────────────

  const readMap = useMemo(() => {
    const m = new Map<string, ReadRecord>();
    reads.forEach((r) => { if (!m.has(r.document_id)) m.set(r.document_id, r); });
    return m;
  }, [reads]);

  const reviewMap = useMemo(() => {
    const m = new Map<string, ReviewRecord>();
    reviews.forEach((r) => { if (!m.has(r.document_id)) m.set(r.document_id, r); });
    return m;
  }, [reviews]);

  const kqStats = useMemo(() => KEY_QUESTIONS.map((kq) => {
    const docs   = DOCUMENTS.filter((d) => d.keyQuestion === kq);
    const acked  = docs.filter((d) => readMap.has(d.id)).length;
    const pct    = docs.length > 0 ? Math.round((acked / docs.length) * 100) : 0;
    return { kq, total: docs.length, acked, pct };
  }), [readMap]);

  const overallPct = useMemo(() => {
    const acked = DOCUMENTS.filter((d) => readMap.has(d.id)).length;
    return DOCUMENTS.length > 0 ? Math.round((acked / DOCUMENTS.length) * 100) : 0;
  }, [readMap]);

  const reviewedCount = useMemo(() =>
    DOCUMENTS.filter((d) => reviewMap.has(d.id)).length, [reviewMap]);

  const reviewedPct = Math.round((reviewedCount / DOCUMENTS.length) * 100);

  const overduePolicies = useMemo(() =>
    DOCUMENTS.filter((d) => {
      const due = reviewDue(d.lastUpdated, reviewMap.get(d.id) ?? null);
      return reviewStatus(due) === "overdue";
    }).length, [reviewMap]);

  const acknowledgedDocs = useMemo(() =>
    DOCUMENTS.filter((d) => readMap.has(d.id))
      .sort((a, b) => {
        const aDate = new Date(readMap.get(a.id)!.read_at);
        const bDate = new Date(readMap.get(b.id)!.read_at);
        return bDate.getTime() - aDate.getTime();
      }), [readMap]);

  const reviewedDocs = useMemo(() =>
    DOCUMENTS.filter((d) => reviewMap.has(d.id))
      .sort((a, b) => {
        const aDate = new Date(reviewMap.get(a.id)!.reviewed_at);
        const bDate = new Date(reviewMap.get(b.id)!.reviewed_at);
        return bDate.getTime() - aDate.getTime();
      }), [reviewMap]);

  const orgName     = profile?.org_name     || "Your Organisation";
  const managerName = profile ? `${profile.first_name} ${profile.last_name}`.trim() : "Registered Manager";
  const serviceType = profile?.service_type || "Regulated Care Service";

  function handlePrint() { window.print(); }

  return (
    <DashboardLayout>
      {/* ── Screen-only controls ── */}
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compliance Evidence Report</h1>
          <p className="text-sm text-gray-500 mt-1">
            Print or save as PDF for inspections, board meetings, and governance records
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {/* Section selector */}
          <select
            value={section}
            onChange={(e) => setSection(e.target.value as typeof section)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none bg-white text-gray-700"
          >
            <option value="all">Full report</option>
            <option value="overview">Overview only</option>
            <option value="acknowledgements">Acknowledgements only</option>
            <option value="reviews">Formal reviews only</option>
          </select>
          <button
            onClick={handlePrint}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>

      {/* Print tip */}
      <div className="no-print mb-5 rounded-xl p-3 flex gap-2 items-start text-sm"
        style={{ backgroundColor: "#f0f9ff", border: "1px solid #bae6fd" }}>
        <span>💡</span>
        <span className="text-blue-800">
          To save as PDF: click <strong>Print / Save PDF</strong> → in the print dialog, choose <strong>Save as PDF</strong> as the destination.
          For best results, enable <strong>Background graphics</strong> in More settings.
        </span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <div className="w-10 h-10 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"
              style={{ borderWidth: "3px" }} />
            <p className="text-sm text-gray-500">Loading compliance data…</p>
          </div>
        </div>
      ) : (
        <div ref={reportRef} className="report-container">

          {/* ══ REPORT HEADER ══════════════════════════════════════════════════ */}
          <div className="report-header">
            <div className="report-header-top">
              <div className="report-logo-band">
                <span className="report-brand">ZIPROH COMPLIANCE CENTRE</span>
                <span className="report-brand-sub">CQC England</span>
              </div>
              <div className="report-header-meta">
                <div className="report-meta-row"><span>Report Type</span><strong>Compliance Evidence Report</strong></div>
                <div className="report-meta-row"><span>Organisation</span><strong>{orgName}</strong></div>
                <div className="report-meta-row"><span>Service Type</span><strong>{serviceType}</strong></div>
                <div className="report-meta-row"><span>Prepared By</span><strong>{managerName}</strong></div>
                <div className="report-meta-row"><span>Date Generated</span><strong>{REPORT_DATE}</strong></div>
              </div>
            </div>
            <div className="report-title-block">
              <h1 className="report-title">Compliance Evidence Report</h1>
              <p className="report-subtitle">{orgName} · {REPORT_DATE}</p>
            </div>
          </div>

          {/* ══ OVERVIEW ═══════════════════════════════════════════════════════ */}
          {(section === "all" || section === "overview") && (
            <section className="report-section">
              <h2 className="report-section-title">1. Compliance Overview</h2>

              {/* Score cards */}
              <div className="report-score-grid">
                <div className="report-score-card" data-color="#2E6FFF">
                  <div className="report-score-label">Policy Acknowledgements</div>
                  <div className="report-score-value" style={{ color: "#2E6FFF" }}>{overallPct}%</div>
                  <div className="report-score-sub">{readMap.size} of {DOCUMENTS.length} policies</div>
                  <div className="report-progress-bar">
                    <div className="report-progress-fill" style={{ width: `${overallPct}%`, backgroundColor: "#2E6FFF" }} />
                  </div>
                </div>
                <div className="report-score-card">
                  <div className="report-score-label">Formal Policy Reviews</div>
                  <div className="report-score-value" style={{ color: reviewedPct >= 80 ? "#16a34a" : reviewedPct >= 50 ? "#d97706" : "#dc2626" }}>
                    {reviewedPct}%
                  </div>
                  <div className="report-score-sub">{reviewedCount} of {DOCUMENTS.length} reviewed</div>
                  <div className="report-progress-bar">
                    <div className="report-progress-fill" style={{
                      width: `${reviewedPct}%`,
                      backgroundColor: reviewedPct >= 80 ? "#22c55e" : reviewedPct >= 50 ? "#f59e0b" : "#ef4444"
                    }} />
                  </div>
                </div>
                <div className="report-score-card">
                  <div className="report-score-label">Overdue Reviews</div>
                  <div className="report-score-value" style={{ color: overduePolicies === 0 ? "#16a34a" : "#dc2626" }}>
                    {overduePolicies}
                  </div>
                  <div className="report-score-sub">
                    {overduePolicies === 0 ? "No policies overdue" : `${overduePolicies} policies past annual review date`}
                  </div>
                </div>
                <div className="report-score-card">
                  <div className="report-score-label">Comprehensive Policies</div>
                  <div className="report-score-value" style={{ color: "#8b5cf6" }}>
                    {DOCUMENTS.filter((d) => FLAGSHIP_IDS.has(d.id) && readMap.has(d.id)).length}/{FLAGSHIP_IDS.size}
                  </div>
                  <div className="report-score-sub">In-depth flagship policies acknowledged</div>
                </div>
              </div>

              {/* CQC Key Question breakdown */}
              <h3 className="report-subsection-title">CQC Key Question Breakdown</h3>
              <table className="report-table">
                <thead>
                  <tr>
                    <th>CQC Key Question</th>
                    <th>Total Policies</th>
                    <th>Acknowledged</th>
                    <th>Completion</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {kqStats.map((s) => (
                    <tr key={s.kq}>
                      <td>
                        <span className="report-kq-badge" style={{ color: KQ_COLOR[s.kq] }}>
                          ● {s.kq}
                        </span>
                      </td>
                      <td className="text-center">{s.total}</td>
                      <td className="text-center">{s.acked}</td>
                      <td>
                        <div className="report-inline-bar">
                          <div className="report-progress-bar" style={{ flex: 1 }}>
                            <div className="report-progress-fill"
                              style={{ width: `${s.pct}%`, backgroundColor: KQ_COLOR[s.kq] }} />
                          </div>
                          <span className="report-pct-label" style={{ color: KQ_COLOR[s.kq] }}>{s.pct}%</span>
                        </div>
                      </td>
                      <td>
                        <span className="report-status-badge" style={{
                          backgroundColor: s.pct >= 80 ? "#f0fdf4" : s.pct >= 50 ? "#fffbeb" : "#fef2f2",
                          color: s.pct >= 80 ? "#16a34a" : s.pct >= 50 ? "#d97706" : "#dc2626",
                        }}>
                          {s.pct >= 80 ? "✓ Good" : s.pct >= 50 ? "In Progress" : "Action Needed"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Declaration */}
              <div className="report-declaration">
                <p className="report-declaration-title">Statement of Compliance</p>
                <p className="report-declaration-body">
                  This report has been generated from the Ziproh Compliance Centre on {REPORT_DATE}.
                  It provides an accurate summary of policy acknowledgements and formal review records
                  for <strong>{orgName}</strong> at the date of generation. Policy acknowledgements
                  confirm that the named manager has read and understood each policy. Formal review
                  records confirm that a competent manager has reviewed each policy for accuracy,
                  legal currency, and operational relevance.
                </p>
                <div className="report-sig-block">
                  <div className="report-sig-line">
                    <div className="report-sig-line-graphic" />
                    <div className="report-sig-name">Registered Manager: {managerName}</div>
                    <div className="report-sig-date">Date: ____________________</div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ══ POLICY ACKNOWLEDGEMENTS ════════════════════════════════════════ */}
          {(section === "all" || section === "acknowledgements") && (
            <section className="report-section report-page-break">
              <h2 className="report-section-title">
                2. Policy Acknowledgement Record
                <span className="report-section-count">{readMap.size} acknowledged</span>
              </h2>
              <p className="report-section-intro">
                The following policies have been read and acknowledged by {managerName}. Acknowledgement
                confirms the policy has been read, understood, and will be applied in practice.
              </p>

              {acknowledgedDocs.length > 0 ? (
                <table className="report-table">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>Policy Title</th>
                      <th>Key Question</th>
                      <th>Version</th>
                      <th>Acknowledged</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acknowledgedDocs.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <span className="font-medium text-gray-900">{doc.title}</span>
                          {FLAGSHIP_IDS.has(doc.id) && (
                            <span className="report-flagship-tag">Comprehensive</span>
                          )}
                        </td>
                        <td>
                          <span className="report-kq-badge" style={{ color: KQ_COLOR[doc.keyQuestion] }}>
                            {doc.keyQuestion}
                          </span>
                        </td>
                        <td className="text-gray-500">v{doc.version}</td>
                        <td className="text-gray-700 font-medium">
                          {fmtShort(readMap.get(doc.id)!.read_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="report-empty-state">
                  No policies have been acknowledged yet. Visit the Compliance Centre to start acknowledging policies.
                </div>
              )}

              {/* Unacknowledged list */}
              {DOCUMENTS.length - readMap.size > 0 && (
                <>
                  <h3 className="report-subsection-title" style={{ marginTop: "24px" }}>
                    Policies Not Yet Acknowledged ({DOCUMENTS.length - readMap.size})
                  </h3>
                  <table className="report-table">
                    <thead>
                      <tr>
                        <th style={{ width: "50%" }}>Policy Title</th>
                        <th>Key Question</th>
                        <th>Category</th>
                        <th>Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DOCUMENTS.filter((d) => !readMap.has(d.id))
                        .sort((a, b) => a.keyQuestion.localeCompare(b.keyQuestion))
                        .map((doc) => (
                          <tr key={doc.id} style={{ backgroundColor: "#fffbeb" }}>
                            <td className="text-gray-700">{doc.title}</td>
                            <td>
                              <span className="report-kq-badge" style={{ color: KQ_COLOR[doc.keyQuestion] }}>
                                {doc.keyQuestion}
                              </span>
                            </td>
                            <td className="text-gray-500 text-xs">{doc.subcategory}</td>
                            <td className="text-gray-500">{fmtShort(doc.lastUpdated)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </>
              )}
            </section>
          )}

          {/* ══ FORMAL POLICY REVIEWS ══════════════════════════════════════════ */}
          {(section === "all" || section === "reviews") && (
            <section className="report-section report-page-break">
              <h2 className="report-section-title">
                3. Formal Policy Review Record
                <span className="report-section-count">{reviewedCount} reviewed</span>
              </h2>
              <p className="report-section-intro">
                Formal policy reviews confirm that a competent manager has reviewed each policy for
                accuracy, legal currency, and operational relevance. CQC expects all policies to be
                formally reviewed at least annually.
              </p>

              {reviewedDocs.length > 0 ? (
                <table className="report-table">
                  <thead>
                    <tr>
                      <th style={{ width: "38%" }}>Policy Title</th>
                      <th>Key Question</th>
                      <th>Reviewed</th>
                      <th>Reviewer</th>
                      <th>Outcome</th>
                      <th>Next Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewedDocs.map((doc) => {
                      const rv = reviewMap.get(doc.id)!;
                      const due = reviewDue(doc.lastUpdated, rv);
                      const st  = reviewStatus(due);
                      return (
                        <tr key={doc.id}>
                          <td className="font-medium text-gray-900 text-xs">{doc.title}</td>
                          <td>
                            <span className="report-kq-badge" style={{ color: KQ_COLOR[doc.keyQuestion], fontSize: "10px" }}>
                              {doc.keyQuestion}
                            </span>
                          </td>
                          <td className="text-gray-700 text-xs">{fmtShort(rv.reviewed_at)}</td>
                          <td className="text-gray-600 text-xs">{rv.reviewer_name}</td>
                          <td>
                            <span className="report-status-badge" style={{
                              backgroundColor: rv.status === "approved" ? "#f0fdf4" : rv.status === "minor_updates" ? "#fffbeb" : "#fef2f2",
                              color: rv.status === "approved" ? "#16a34a" : rv.status === "minor_updates" ? "#d97706" : "#dc2626",
                              fontSize: "9px",
                            }}>
                              {rv.status === "approved" ? "✓ Approved" :
                               rv.status === "minor_updates" ? "Minor updates" : "Needs revision"}
                            </span>
                          </td>
                          <td className="text-xs" style={{ color: st === "overdue" ? "#dc2626" : st === "due_soon" ? "#d97706" : "#6b7280" }}>
                            {fmtShort(due)}
                            {st === "overdue" && " ⚠"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="report-empty-state">
                  No formal reviews have been recorded yet. Visit the Policy Reviews page to record formal reviews.
                </div>
              )}
            </section>
          )}

          {/* ══ REPORT FOOTER ══════════════════════════════════════════════════ */}
          <div className="report-footer">
            <div className="report-footer-left">
              <strong>Ziproh Compliance Centre</strong> · {orgName} · Generated {REPORT_DATE}
            </div>
            <div className="report-footer-right">
              Confidential — For internal governance and inspection purposes only
            </div>
          </div>

        </div>
      )}

      {/* ── Print + report styles ── */}
      <style>{`
        /* ── Report container ── */
        .report-container {
          background: white;
          max-width: 860px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1f2937;
          font-size: 13px;
          line-height: 1.5;
        }

        /* ── Header ── */
        .report-header {
          background: #2E6FFF;
          color: white;
          padding: 0;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          margin-bottom: 0;
        }
        .report-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px 28px 0;
        }
        .report-logo-band { display: flex; flex-direction: column; gap: 2px; }
        .report-brand { font-size: 10px; font-weight: 700; letter-spacing: 2px; opacity: 0.85; }
        .report-brand-sub { font-size: 9px; opacity: 0.6; letter-spacing: 1px; }
        .report-header-meta { display: flex; flex-direction: column; gap: 3px; text-align: right; }
        .report-meta-row { display: flex; gap: 10px; justify-content: flex-end; font-size: 10px; opacity: 0.85; }
        .report-meta-row strong { opacity: 1; }
        .report-title-block { padding: 20px 28px 24px; }
        .report-title { font-size: 26px; font-weight: 700; margin: 0 0 4px; }
        .report-subtitle { font-size: 13px; opacity: 0.8; margin: 0; }

        /* ── Sections ── */
        .report-section {
          padding: 28px;
          border-left: 1px solid #e5e7eb;
          border-right: 1px solid #e5e7eb;
        }
        .report-section:last-of-type { border-radius: 0 0 12px 12px; border-bottom: 1px solid #e5e7eb; }
        .report-section-title {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 16px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .report-section-count {
          font-size: 11px;
          font-weight: 500;
          color: #6b7280;
          background: #f3f4f6;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .report-section-intro {
          font-size: 12px;
          color: #6b7280;
          margin: 0 0 16px;
          line-height: 1.6;
        }
        .report-subsection-title {
          font-size: 12px;
          font-weight: 700;
          color: #374151;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 10px;
        }
        .report-page-break { border-top: 1px solid #e5e7eb; }

        /* ── Score cards ── */
        .report-score-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        .report-score-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 14px;
        }
        .report-score-label { font-size: 10px; color: #6b7280; font-weight: 600; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
        .report-score-value { font-size: 28px; font-weight: 700; line-height: 1.1; margin-bottom: 3px; }
        .report-score-sub { font-size: 10px; color: #9ca3af; margin-bottom: 8px; }

        /* ── Progress bars ── */
        .report-progress-bar { height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; }
        .report-progress-fill { height: 100%; border-radius: 3px; }
        .report-inline-bar { display: flex; align-items: center; gap: 6px; }
        .report-pct-label { font-size: 11px; font-weight: 700; min-width: 32px; text-align: right; }

        /* ── Tables ── */
        .report-table { width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 8px; }
        .report-table th {
          text-align: left;
          padding: 8px 10px;
          background: #f3f4f6;
          font-size: 10px;
          font-weight: 700;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          border-bottom: 1px solid #e5e7eb;
        }
        .report-table td {
          padding: 8px 10px;
          border-bottom: 1px solid #f3f4f6;
          vertical-align: top;
        }
        .report-table tbody tr:last-child td { border-bottom: none; }
        .report-table tbody tr:hover td { background: #f9fafb; }
        .text-center { text-align: center; }

        /* ── Badges ── */
        .report-kq-badge { font-weight: 600; font-size: 11px; }
        .report-flagship-tag {
          display: inline-block;
          margin-left: 6px;
          font-size: 9px;
          font-weight: 600;
          background: #eff6ff;
          color: #2E6FFF;
          padding: 1px 5px;
          border-radius: 3px;
        }
        .report-status-badge {
          display: inline-block;
          padding: 2px 7px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
        }

        /* ── Declaration ── */
        .report-declaration {
          margin-top: 24px;
          background: #f8faff;
          border: 1px solid #bfdbfe;
          border-left: 4px solid #2E6FFF;
          border-radius: 8px;
          padding: 16px;
        }
        .report-declaration-title { font-weight: 700; color: #1e40af; margin-bottom: 8px; font-size: 12px; }
        .report-declaration-body { font-size: 11px; color: #374151; line-height: 1.7; margin-bottom: 16px; }
        .report-sig-block { border-top: 1px solid #e5e7eb; padding-top: 14px; }
        .report-sig-line { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .report-sig-line-graphic { width: 160px; height: 1px; background: #9ca3af; }
        .report-sig-name { font-size: 11px; color: #374151; font-weight: 600; }
        .report-sig-date { font-size: 11px; color: #9ca3af; }

        /* ── Empty state ── */
        .report-empty-state {
          text-align: center;
          padding: 32px;
          color: #9ca3af;
          font-size: 12px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px dashed #e5e7eb;
        }

        /* ── Footer ── */
        .report-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 28px;
          background: #f3f4f6;
          border-radius: 0 0 12px 12px;
          border: 1px solid #e5e7eb;
          border-top: none;
          font-size: 10px;
          color: #9ca3af;
        }
        .report-footer-left { font-size: 10px; color: #6b7280; }
        .report-footer-right { font-size: 10px; color: #9ca3af; font-style: italic; }

        /* ── Print styles ── */
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .report-container {
            max-width: 100%;
            box-shadow: none;
          }
          .report-header { border-radius: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .report-score-card { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .report-progress-fill { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .report-page-break { page-break-before: always; }
          .report-table th { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .report-footer { border-radius: 0; }
        }
      `}</style>
    </DashboardLayout>
  );
}
