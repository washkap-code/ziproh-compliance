"use client";

/**
 * /policy-reviews — Formal Policy Review Tracker
 *
 * Care managers must formally review every policy at least annually.
 * CQC inspectors check that policies are current and have been reviewed.
 * This page tracks formal reviews separately from personal reading acknowledgements.
 */

import { useEffect, useState, useMemo } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS } from "@/lib/documents";

// ─── Types ────────────────────────────────────────────────────────────────────

type ReviewRecord = {
  id: string;
  document_id: string;
  reviewed_at: string;
  reviewer_name: string;
  status: "approved" | "minor_updates" | "requires_revision";
  notes: string | null;
  next_review_date: string | null;
};

type ReviewStatus = "overdue" | "due_soon" | "up_to_date";

type PolicyWithReview = (typeof DOCUMENTS)[0] & {
  latestReview: ReviewRecord | null;
  reviewStatus: ReviewStatus;
  reviewDueDate: Date;
  daysUntilDue: number;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const REVIEW_CYCLE_MONTHS = 12;
const DUE_SOON_DAYS = 90;

function calcReviewDueDate(lastUpdated: string, latestReview: ReviewRecord | null): Date {
  const base = latestReview
    ? new Date(latestReview.reviewed_at)
    : new Date(lastUpdated);
  const due = new Date(base);
  due.setMonth(due.getMonth() + REVIEW_CYCLE_MONTHS);
  return due;
}

function calcStatus(dueDate: Date): ReviewStatus {
  const now = new Date();
  const msUntilDue = dueDate.getTime() - now.getTime();
  const daysUntilDue = Math.ceil(msUntilDue / (1000 * 60 * 60 * 24));
  if (daysUntilDue < 0) return "overdue";
  if (daysUntilDue <= DUE_SOON_DAYS) return "due_soon";
  return "up_to_date";
}

function formatDate(d: string | Date): string {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const STATUS_CONFIG = {
  overdue:    { label: "Overdue",     color: "#dc2626", bg: "#fef2f2", border: "#fca5a5", icon: "🔴" },
  due_soon:   { label: "Due Soon",    color: "#d97706", bg: "#fffbeb", border: "#fcd34d", icon: "🟡" },
  up_to_date: { label: "Up to Date",  color: "#16a34a", bg: "#f0fdf4", border: "#86efac", icon: "🟢" },
};

const REVIEW_STATUS_OPTIONS = [
  { value: "approved",          label: "✓ Approved — No changes needed" },
  { value: "minor_updates",     label: "✏ Minor updates noted for next revision" },
  { value: "requires_revision", label: "⚠ Requires revision before next use" },
] as const;

const KQ_COLOR: Record<string, string> = {
  Safe: "#22c55e", Effective: "#2E6FFF", Caring: "#ec4899",
  Responsive: "#f59e0b", "Well-Led": "#8b5cf6",
};

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PolicyReviewsPage() {
  const [reviews,      setReviews]      = useState<ReviewRecord[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [profile,      setProfile]      = useState<{ first_name: string; last_name: string; org_name: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | ReviewStatus>("all");
  const [activeKQ,     setActiveKQ]     = useState("All");
  const [search,       setSearch]       = useState("");
  const [sortBy,       setSortBy]       = useState<"due" | "title" | "kq">("due");

  // Modal state
  const [reviewingDoc, setReviewingDoc] = useState<PolicyWithReview | null>(null);
  const [formStatus,   setFormStatus]   = useState<"approved" | "minor_updates" | "requires_revision">("approved");
  const [formNotes,    setFormNotes]    = useState("");
  const [formDate,     setFormDate]     = useState(() => new Date().toISOString().slice(0, 10));
  const [saving,       setSaving]       = useState(false);
  const [savedId,      setSavedId]      = useState<string | null>(null);   // recently saved doc id

  // ── Load data ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const [profileRes, reviewsRes] = await Promise.all([
        supabase.from("profiles").select("first_name, last_name, org_name").eq("id", user.id).single(),
        supabase.from("policy_reviews").select("*").eq("user_id", user.id).order("reviewed_at", { ascending: false }),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (reviewsRes.data) setReviews(reviewsRes.data as ReviewRecord[]);
      setLoading(false);
    })();
  }, []);

  // ── Build enriched policy list ─────────────────────────────────────────────
  const enriched = useMemo<PolicyWithReview[]>(() => {
    const reviewMap = new Map<string, ReviewRecord>();
    reviews.forEach((r) => {
      const existing = reviewMap.get(r.document_id);
      if (!existing || new Date(r.reviewed_at) > new Date(existing.reviewed_at)) {
        reviewMap.set(r.document_id, r);
      }
    });

    return DOCUMENTS.map((doc) => {
      const latestReview = reviewMap.get(doc.id) ?? null;
      const reviewDueDate = calcReviewDueDate(doc.lastUpdated, latestReview);
      const daysUntilDue = Math.ceil((reviewDueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      const reviewStatus = calcStatus(reviewDueDate);
      return { ...doc, latestReview, reviewStatus, reviewDueDate, daysUntilDue };
    });
  }, [reviews]);

  // ── Filtered + sorted list ────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = enriched;
    if (activeFilter !== "all") list = list.filter((p) => p.reviewStatus === activeFilter);
    if (activeKQ !== "All") list = list.filter((p) => p.keyQuestion === activeKQ);
    if (search) list = list.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === "due")   list = [...list].sort((a, b) => a.daysUntilDue - b.daysUntilDue);
    if (sortBy === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "kq")    list = [...list].sort((a, b) => a.keyQuestion.localeCompare(b.keyQuestion));
    return list;
  }, [enriched, activeFilter, activeKQ, search, sortBy]);

  // ── Summary stats ────────────────────────────────────────────────────────
  const stats = useMemo(() => ({
    total:     enriched.length,
    overdue:   enriched.filter((p) => p.reviewStatus === "overdue").length,
    due_soon:  enriched.filter((p) => p.reviewStatus === "due_soon").length,
    up_to_date: enriched.filter((p) => p.reviewStatus === "up_to_date").length,
    reviewed:  enriched.filter((p) => p.latestReview !== null).length,
  }), [enriched]);

  const reviewedPct = Math.round((stats.reviewed / stats.total) * 100);

  // ── Save review ───────────────────────────────────────────────────────────
  async function saveReview() {
    if (!reviewingDoc || !profile) return;
    setSaving(true);

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSaving(false); return; }

    const reviewerName = `${profile.first_name} ${profile.last_name}`.trim() || "Manager";
    const nextDate = new Date(formDate);
    nextDate.setMonth(nextDate.getMonth() + REVIEW_CYCLE_MONTHS);

    const { data, error } = await supabase.from("policy_reviews").insert({
      user_id:           user.id,
      document_id:       reviewingDoc.id,
      reviewed_at:       new Date(formDate).toISOString(),
      reviewer_name:     reviewerName,
      status:            formStatus,
      notes:             formNotes.trim() || null,
      next_review_date:  nextDate.toISOString().slice(0, 10),
    }).select().single();

    if (!error && data) {
      setReviews((prev) => [data as ReviewRecord, ...prev]);
      setSavedId(reviewingDoc.id);
      setTimeout(() => setSavedId(null), 3000);
    }

    setSaving(false);
    setReviewingDoc(null);
    setFormNotes("");
    setFormStatus("approved");
    setFormDate(new Date().toISOString().slice(0, 10));
  }

  const KQ_OPTIONS = ["All", "Safe", "Effective", "Caring", "Responsive", "Well-Led"];

  return (
    <DashboardLayout>
      <div className="max-w-5xl">

        {/* ── Header ── */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Policy Review Tracker</h1>
            <p className="text-sm text-gray-500 mt-1">
              Formal annual reviews — separate from personal reading acknowledgements
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">Formally reviewed</div>
            <div className="text-2xl font-bold" style={{ color: reviewedPct >= 80 ? "#16a34a" : reviewedPct >= 50 ? "#d97706" : "#dc2626" }}>
              {stats.reviewed}/{stats.total}
            </div>
          </div>
        </div>

        {/* ── Summary cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {(["all", "overdue", "due_soon", "up_to_date"] as const).map((f) => {
            const count = f === "all" ? stats.total : stats[f];
            const cfg = f === "all"
              ? { label: "All Policies", color: "#2E6FFF", bg: "#eff6ff", icon: "📋" }
              : { ...STATUS_CONFIG[f], icon: STATUS_CONFIG[f].icon };
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="card text-left transition-all hover:shadow-md"
                style={{
                  border: activeFilter === f ? `2px solid ${cfg.color}` : "1px solid #e5e7eb",
                  backgroundColor: activeFilter === f ? (f === "all" ? "#eff6ff" : STATUS_CONFIG[f as ReviewStatus]?.bg) : "white",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{cfg.icon}</span>
                  <span className="text-2xl font-bold" style={{ color: cfg.color }}>{count}</span>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  {f === "all" ? "All Policies" : STATUS_CONFIG[f as ReviewStatus].label}
                </div>
                {f !== "all" && (
                  <div className="text-xs text-gray-400 mt-0.5">
                    {f === "overdue" ? "Needs immediate attention" :
                     f === "due_soon" ? "Within 90 days" : "Reviewed within 12 months"}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Review progress bar ── */}
        <div className="card mb-5 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Annual Review Compliance</span>
            <span className="text-sm font-bold" style={{ color: reviewedPct >= 80 ? "#16a34a" : "#d97706" }}>
              {reviewedPct}%
            </span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${reviewedPct}%`,
                backgroundColor: reviewedPct >= 80 ? "#22c55e" : reviewedPct >= 50 ? "#f59e0b" : "#ef4444",
              }} />
          </div>
          {stats.overdue > 0 && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              ⚠ {stats.overdue} {stats.overdue === 1 ? "policy is" : "policies are"} overdue for review — address before your next inspection
            </p>
          )}
          {stats.overdue === 0 && stats.due_soon > 0 && (
            <p className="text-xs text-amber-600 mt-2 font-medium">
              {stats.due_soon} {stats.due_soon === 1 ? "policy is" : "policies are"} due for review within 90 days
            </p>
          )}
          {stats.overdue === 0 && stats.due_soon === 0 && !loading && (
            <p className="text-xs text-green-600 mt-2 font-medium">
              ✓ All reviewed policies are up to date
            </p>
          )}
        </div>

        {/* ── Filters ── */}
        <div className="card mb-5 p-4">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-48">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search policies…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none"
                style={{ border: "1.5px solid #e2e8f0" }}
              />
            </div>

            {/* KQ filter */}
            <div className="flex flex-wrap gap-1">
              {KQ_OPTIONS.map((kq) => (
                <button
                  key={kq}
                  onClick={() => setActiveKQ(kq)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: activeKQ === kq ? (KQ_COLOR[kq] || "#2E6FFF") : "#f3f4f6",
                    color: activeKQ === kq ? "white" : "#6b7280",
                  }}
                >
                  {kq}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "due" | "title" | "kq")}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white text-gray-600"
            >
              <option value="due">Sort: Due soonest</option>
              <option value="title">Sort: A–Z</option>
              <option value="kq">Sort: Key question</option>
            </select>
          </div>
        </div>

        {/* ── Results count ── */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {DOCUMENTS.length} policies
          </p>
          {(activeFilter !== "all" || activeKQ !== "All" || search) && (
            <button onClick={() => { setActiveFilter("all"); setActiveKQ("All"); setSearch(""); }}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors">
              ✕ Clear filters
            </button>
          )}
        </div>

        {/* ── Policy list ── */}
        <div className="space-y-2 mb-6">
          {filtered.map((doc) => {
            const cfg = STATUS_CONFIG[doc.reviewStatus];
            const isJustSaved = savedId === doc.id;
            return (
              <div
                key={doc.id}
                className="card transition-all"
                style={{
                  padding: "1rem 1.25rem",
                  border: isJustSaved ? "1.5px solid #22c55e" : `1px solid ${doc.reviewStatus !== "up_to_date" ? cfg.border : "#e5e7eb"}`,
                  backgroundColor: isJustSaved ? "#f0fdf4" : doc.reviewStatus === "overdue" ? "#fef2f280" : "white",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Status pill */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: cfg.bg, color: cfg.color }}>
                      {cfg.icon} {cfg.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <Link href={`/compliance/${doc.id}`}
                        className="text-sm font-semibold text-gray-900 hover:text-[#2E6FFF] transition-colors">
                        {doc.title}
                      </Link>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: `${KQ_COLOR[doc.keyQuestion]}15`, color: KQ_COLOR[doc.keyQuestion] }}>
                        {doc.keyQuestion}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1 text-xs text-gray-400">
                      <span>Last updated: {formatDate(doc.lastUpdated)}</span>
                      {doc.latestReview ? (
                        <>
                          <span className="text-green-600 font-medium">
                            ✓ Reviewed: {formatDate(doc.latestReview.reviewed_at)} by {doc.latestReview.reviewer_name}
                          </span>
                          {doc.latestReview.status === "requires_revision" && (
                            <span className="text-red-500 font-medium">⚠ Revision required</span>
                          )}
                        </>
                      ) : (
                        <span className="text-amber-600 font-medium">Never formally reviewed</span>
                      )}
                      <span style={{ color: cfg.color, fontWeight: 500 }}>
                        Review due: {formatDate(doc.reviewDueDate)}
                        {doc.daysUntilDue < 0
                          ? ` (${Math.abs(doc.daysUntilDue)} days overdue)`
                          : doc.daysUntilDue <= DUE_SOON_DAYS
                          ? ` (${doc.daysUntilDue} days)`
                          : ""}
                      </span>
                    </div>

                    {doc.latestReview?.notes && (
                      <p className="text-xs text-gray-500 mt-1 italic">Note: {doc.latestReview.notes}</p>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => {
                      setReviewingDoc(doc);
                      setFormStatus("approved");
                      setFormNotes("");
                      setFormDate(new Date().toISOString().slice(0, 10));
                    }}
                    className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
                    style={{
                      backgroundColor: doc.reviewStatus === "overdue" ? "#dc2626" : doc.reviewStatus === "due_soon" ? "#f59e0b" : "#f0fdf4",
                      color: doc.reviewStatus === "up_to_date" ? "#16a34a" : "white",
                    }}
                  >
                    {doc.latestReview ? "Re-review" : "Record Review"}
                  </button>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-gray-700">No policies match your current filters</p>
              <button onClick={() => { setActiveFilter("all"); setActiveKQ("All"); setSearch(""); }}
                className="btn-primary mt-4 text-sm">Clear filters</button>
            </div>
          )}
        </div>

        {/* ── CQC note ── */}
        <div className="rounded-2xl p-4 flex gap-3"
          style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe" }}>
          <span className="text-xl flex-shrink-0">ℹ️</span>
          <div>
            <p className="text-sm font-semibold text-blue-900">About formal policy reviews</p>
            <p className="text-sm text-blue-800 mt-0.5 leading-relaxed">
              CQC inspectors expect all policies to be formally reviewed at least annually by a
              competent manager — separate from staff reading acknowledgements. A formal review
              confirms the policy is still accurate, legally current, and fit for purpose. Record
              each review here to maintain an auditable evidence trail.
            </p>
          </div>
        </div>

      </div>

      {/* ── Review modal ── */}
      {reviewingDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setReviewingDoc(null); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold text-gray-900">Record Formal Review</h2>
                  <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{reviewingDoc.title}</p>
                </div>
                <button onClick={() => setReviewingDoc(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl leading-none flex-shrink-0">✕</button>
              </div>
            </div>

            <div className="p-6 space-y-4">

              {/* Review date */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Review Date</label>
                <input
                  type="date"
                  value={formDate}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                />
              </div>

              {/* Reviewer */}
              {profile && (
                <div className="text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
                  Reviewer: <span className="font-semibold text-gray-700">
                    {profile.first_name} {profile.last_name}
                  </span>
                  {profile.org_name && <span> · {profile.org_name}</span>}
                </div>
              )}

              {/* Review outcome */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Review Outcome</label>
                <div className="space-y-2">
                  {REVIEW_STATUS_OPTIONS.map((opt) => (
                    <label key={opt.value}
                      className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors"
                      style={{
                        border: formStatus === opt.value ? "2px solid #2E6FFF" : "1px solid #e5e7eb",
                        backgroundColor: formStatus === opt.value ? "#eff6ff" : "white",
                      }}>
                      <input
                        type="radio"
                        name="review-status"
                        value={opt.value}
                        checked={formStatus === opt.value}
                        onChange={() => setFormStatus(opt.value)}
                        className="sr-only"
                      />
                      <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: formStatus === opt.value ? "#2E6FFF" : "#d1d5db" }}>
                        {formStatus === opt.value && (
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2E6FFF" }} />
                        )}
                      </div>
                      <span className="text-sm text-gray-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Review Notes <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Any observations, updates required, or context for the next reviewer…"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-400 resize-none"
                />
              </div>

              {/* Next review info */}
              <div className="text-xs text-gray-400 bg-gray-50 rounded-xl p-3">
                Next review will be due:{" "}
                <span className="font-semibold text-gray-600">
                  {(() => {
                    const d = new Date(formDate);
                    d.setMonth(d.getMonth() + REVIEW_CYCLE_MONTHS);
                    return formatDate(d);
                  })()}
                </span>
                {" "}(12 months from review date)
              </div>
            </div>

            <div className="p-6 pt-0 flex gap-3">
              <button onClick={() => setReviewingDoc(null)} className="btn-secondary flex-1">
                Cancel
              </button>
              <button
                onClick={saveReview}
                disabled={saving}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
                style={{ opacity: saving ? 0.7 : 1 }}
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving…
                  </>
                ) : (
                  "✓ Record Formal Review"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
