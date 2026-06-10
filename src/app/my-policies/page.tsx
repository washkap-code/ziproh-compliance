"use client";

/**
 * /my-policies
 *
 * Adopted Policies Portfolio — shows the organisation's full adoption status:
 *  • Needs Re-Review  — policies marked "updated" that the org has already adopted
 *  • Adopted          — fully current adopted policies
 *  • Not Yet Adopted  — policies available to adopt
 *
 * Each adopted card shows reviewer name/role, adoption date, and a direct PDF download.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { DOCUMENTS, type Document } from "@/lib/documents";
import { createBrowserClient } from "@supabase/ssr";

// ─── Types ─────────────────────────────────────────────────────────────────────

type AdoptionRecord = {
  documentId:   string;
  reviewerName: string;
  reviewerRole: string;
  adoptedAt:    string;
};

type PolicyWithAdoption = Document & {
  adoption: AdoptionRecord | null;
};

// ─── KQ colour map ─────────────────────────────────────────────────────────────

const KQ_COLOR: Record<string, string> = {
  Safe:        "#22c55e",
  Effective:   "#2E6FFF",
  Caring:      "#ec4899",
  Responsive:  "#f59e0b",
  "Well-Led":  "#8b5cf6",
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return iso;
  }
}

// ─── Policy card ───────────────────────────────────────────────────────────────

function PolicyCard({
  doc,
  adoption,
  needsReview,
  pdfLoading,
  onDownload,
}: {
  doc:         Document;
  adoption:    AdoptionRecord | null;
  needsReview: boolean;
  pdfLoading:  string | null;
  onDownload:  (id: string) => void;
}) {
  const color = KQ_COLOR[doc.keyQuestion] ?? "#2E6FFF";
  const isLoading = pdfLoading === doc.id;

  return (
    <div
      className={`relative rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        needsReview
          ? "border-amber-300 ring-1 ring-amber-200"
          : adoption
          ? "border-emerald-200"
          : "border-gray-200"
      }`}
    >
      {/* Status ribbon */}
      {needsReview && (
        <div className="absolute top-3 right-3 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-700">
          NEEDS RE-REVIEW
        </div>
      )}
      {adoption && !needsReview && (
        <div className="absolute top-3 right-3 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-emerald-700">
          ✓ ADOPTED
        </div>
      )}

      {/* KQ badge */}
      <div
        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
        style={{ backgroundColor: `${color}18`, color }}
      >
        <span>{doc.keyQuestion}</span>
        <span className="opacity-60">·</span>
        <span className="font-normal opacity-80">{doc.subcategory}</span>
      </div>

      {/* Title */}
      <h3 className="mb-1 text-sm font-bold text-gray-900 leading-snug pr-24">
        {doc.title}
      </h3>
      <p className="mb-3 text-[11px] text-gray-400 font-mono">
        {doc.id.toUpperCase()} · v{doc.version}
      </p>

      {/* Adoption details */}
      {adoption ? (
        <div className={`rounded-xl p-3 mb-4 text-xs ${needsReview ? "bg-amber-50" : "bg-emerald-50"}`}>
          {needsReview && (
            <p className="text-amber-700 font-semibold mb-1.5">
              ⚠ This policy has been updated since you adopted it. Please review and re-adopt.
            </p>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
            <span><span className="font-medium text-gray-700">Reviewer:</span> {adoption.reviewerName}</span>
            <span><span className="font-medium text-gray-700">Role:</span> {adoption.reviewerRole}</span>
            <span><span className="font-medium text-gray-700">Adopted:</span> {formatDate(adoption.adoptedAt)}</span>
          </div>
        </div>
      ) : (
        <p className="mb-4 text-xs text-gray-400 italic">Not yet adopted by your organisation.</p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        {adoption ? (
          <>
            <button
              onClick={() => onDownload(doc.id)}
              disabled={isLoading}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-opacity disabled:opacity-60"
              style={{ backgroundColor: needsReview ? "#F59E0B" : color }}
            >
              {isLoading ? (
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75"/>
                  </svg>
                  Generating…
                </span>
              ) : (
                <>🔒 {needsReview ? "Re-Adopt & Download" : "Download PDF"}</>
              )}
            </button>
            <Link
              href={`/compliance/${doc.id}`}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {needsReview ? "Review Policy →" : "View Policy"}
            </Link>
          </>
        ) : (
          <Link
            href={`/compliance/${doc.id}`}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-opacity"
            style={{ backgroundColor: color }}
          >
            📋 Adopt Now
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function MyPoliciesPage() {
  const [adoptions,      setAdoptions]      = useState<AdoptionRecord[]>([]);
  const [loading,        setLoading]        = useState(true);
  const [pdfLoading,     setPdfLoading]     = useState<string | null>(null);
  const [zipLoading,     setZipLoading]     = useState(false);
  const [activeTab,      setActiveTab]      = useState<"adopted" | "all">("adopted");
  const [kqFilter,       setKqFilter]       = useState<string>("All");

  useEffect(() => {
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    sb.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setLoading(false); return; }
      const { data } = await sb
        .from("policy_adoptions")
        .select("document_id, reviewer_name, reviewer_role, adopted_at")
        .eq("org_id", user.id);

      setAdoptions(
        (data ?? []).map((r) => ({
          documentId:   r.document_id,
          reviewerName: r.reviewer_name,
          reviewerRole: r.reviewer_role,
          adoptedAt:    r.adopted_at,
        }))
      );
      setLoading(false);
    });
  }, []);

  // Cross-reference adoptions with DOCUMENTS
  const adoptionMap = new Map(adoptions.map((a) => [a.documentId, a]));

  const allPolicies: PolicyWithAdoption[] = DOCUMENTS.map((doc) => ({
    ...doc,
    adoption: adoptionMap.get(doc.id) ?? null,
  }));

  // Categorise
  const needsReview  = allPolicies.filter((p) => p.adoption && p.status === "updated");
  const adopted      = allPolicies.filter((p) => p.adoption && p.status !== "updated");
  const notAdopted   = allPolicies.filter((p) => !p.adoption);

  // Stats
  const totalAdopted     = adoptions.length;
  const totalPolicies    = DOCUMENTS.length;
  const coveragePct      = totalPolicies > 0 ? Math.round((totalAdopted / totalPolicies) * 100) : 0;
  const needsReviewCount = needsReview.length;

  // KQ filter options
  const kqOptions = ["All", "Safe", "Effective", "Caring", "Responsive", "Well-Led"];

  // Which policies to show based on tab + filter
  let displayPolicies: PolicyWithAdoption[] = [];
  if (activeTab === "adopted") {
    displayPolicies = [...needsReview, ...adopted];
  } else {
    displayPolicies = allPolicies;
  }
  if (kqFilter !== "All") {
    displayPolicies = displayPolicies.filter((p) => p.keyQuestion === kqFilter);
  }

  async function handleExportAll() {
    if (zipLoading) return;
    setZipLoading(true);
    try {
      const resp = await fetch("/api/policies/export-zip");
      if (!resp.ok) {
        const json = await resp.json().catch(() => ({}));
        throw new Error(json.error ?? "Export failed");
      }
      const blob = await resp.blob();
      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href  = url;
      link.download = "policy-portfolio.zip";
      link.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert(e instanceof Error ? e.message : "Export failed — please try again.");
    } finally {
      setZipLoading(false);
    }
  }

  async function handleDownload(docId: string) {
    if (pdfLoading) return;
    setPdfLoading(docId);
    try {
      const resp = await fetch(`/api/policy-pdf/${docId}`);
      if (!resp.ok) throw new Error("PDF generation failed");
      const blob   = await resp.blob();
      const doc    = DOCUMENTS.find((d) => d.id === docId);
      const name   = doc?.title.replace(/[^a-z0-9]/gi, "-").toLowerCase() ?? docId;
      const url    = URL.createObjectURL(blob);
      const link   = document.createElement("a");
      link.href    = url;
      link.download = `${docId}-${name}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("PDF download failed — please try again.");
    } finally {
      setPdfLoading(null);
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* ── Page header ── */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Adopted Policies</h1>
            <p className="mt-1 text-sm text-gray-500">
              Your organisation&apos;s formal policy portfolio — adopted, reviewed, and ready for inspection.
            </p>
          </div>
          <button
            onClick={handleExportAll}
            disabled={zipLoading || loading || adoptions.length === 0}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#2E6FFF" }}
            title={adoptions.length === 0 ? "Adopt policies first to export your portfolio" : "Download every adopted policy as a ZIP of branded PDFs"}
          >
            {zipLoading ? (
              <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Preparing ZIP…</>
            ) : (
              <>📦 Download All (ZIP)</>
            )}
          </button>
        </div>

        {/* ── Stats bar ── */}
        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard
              label="Policies Adopted"
              value={String(totalAdopted)}
              sub={`of ${totalPolicies} available`}
              color="#2E6FFF"
            />
            <StatCard
              label="Coverage"
              value={`${coveragePct}%`}
              sub="of policy library"
              color="#22c55e"
            />
            <StatCard
              label="Needs Re-Review"
              value={String(needsReviewCount)}
              sub={needsReviewCount > 0 ? "updated since adoption" : "all current"}
              color={needsReviewCount > 0 ? "#F59E0B" : "#22c55e"}
              urgent={needsReviewCount > 0}
            />
            <StatCard
              label="Not Yet Adopted"
              value={String(notAdopted.length)}
              sub="available to adopt"
              color="#8b5cf6"
            />
          </div>
        )}

        {/* ── Re-review alert banner ── */}
        {!loading && needsReviewCount > 0 && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold text-amber-800 text-sm">
                {needsReviewCount} adopted {needsReviewCount === 1 ? "policy has" : "policies have"} been updated
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Review the changes, re-adopt, and download a fresh signed copy to keep your compliance records current.
              </p>
            </div>
          </div>
        )}

        {/* ── Tabs + filter ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
            {(["adopted", "all"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "adopted"
                  ? `My Adopted (${totalAdopted})`
                  : `All Policies (${totalPolicies})`}
              </button>
            ))}
          </div>

          {/* KQ filter pills */}
          <div className="flex flex-wrap gap-1.5">
            {kqOptions.map((kq) => (
              <button
                key={kq}
                onClick={() => setKqFilter(kq)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  kqFilter === kq
                    ? "text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                style={
                  kqFilter === kq
                    ? { backgroundColor: kq === "All" ? "#374151" : (KQ_COLOR[kq] ?? "#2E6FFF") }
                    : undefined
                }
              >
                {kq}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content ── */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <svg className="mx-auto w-8 h-8 text-blue-500 animate-spin mb-3" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75"/>
              </svg>
              <p className="text-sm text-gray-500">Loading your policy portfolio…</p>
            </div>
          </div>
        ) : displayPolicies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 p-16 text-center">
            <p className="text-4xl mb-4">📋</p>
            {activeTab === "adopted" ? (
              <>
                <p className="text-lg font-semibold text-gray-700 mb-2">No adopted policies yet</p>
                <p className="text-sm text-gray-500 mb-6">
                  Adopting a policy formally records that your organisation has reviewed and implemented it.
                </p>
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Browse Policy Library →
                </Link>
              </>
            ) : (
              <p className="text-sm text-gray-500">No policies match this filter.</p>
            )}
          </div>
        ) : (
          <>
            {/* Needs re-review section header */}
            {activeTab === "adopted" && needsReview.length > 0 && kqFilter === "All" && (
              <div>
                <h2 className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  Needs Re-Review ({needsReview.filter((p) => kqFilter === "All" || p.keyQuestion === kqFilter).length})
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                  {needsReview
                    .filter((p) => kqFilter === "All" || p.keyQuestion === kqFilter)
                    .map((p) => (
                      <PolicyCard
                        key={p.id}
                        doc={p}
                        adoption={p.adoption}
                        needsReview
                        pdfLoading={pdfLoading}
                        onDownload={handleDownload}
                      />
                    ))}
                </div>

                {adopted.filter((p) => kqFilter === "All" || p.keyQuestion === kqFilter).length > 0 && (
                  <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Adopted &amp; Current ({adopted.filter((p) => kqFilter === "All" || p.keyQuestion === kqFilter).length})
                  </h2>
                )}
              </div>
            )}

            {/* Main grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayPolicies
                .filter((p) => !(activeTab === "adopted" && p.status === "updated" && kqFilter === "All"))
                .map((p) => (
                  <PolicyCard
                    key={p.id}
                    doc={p}
                    adoption={p.adoption}
                    needsReview={p.status === "updated" && !!p.adoption}
                    pdfLoading={pdfLoading}
                    onDownload={handleDownload}
                  />
                ))}
            </div>
          </>
        )}

        {/* ── Footer hint ── */}
        {!loading && totalAdopted < totalPolicies && activeTab === "adopted" && (
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">
                {notAdopted.length} {notAdopted.length === 1 ? "policy" : "policies"} not yet adopted
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Formally adopt more policies to build a complete compliance portfolio ready for CQC inspection.
              </p>
            </div>
            <button
              onClick={() => setActiveTab("all")}
              className="flex-shrink-0 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-sm transition-all"
            >
              See all policies →
            </button>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

// ─── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  color,
  urgent = false,
}: {
  label:   string;
  value:   string;
  sub:     string;
  color:   string;
  urgent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 bg-white shadow-sm ${urgent ? "border-amber-300 ring-1 ring-amber-100" : "border-gray-200"}`}
    >
      <p className="text-xs text-gray-500 font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
    </div>
  );
}
