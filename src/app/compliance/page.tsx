"use client";
import { useState, useMemo, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import InstallAppBanner from "@/components/InstallAppBanner";
import Link from "next/link";
import { DOCUMENTS, CATEGORIES, FLAGSHIP_IDS } from "@/lib/documents";
import { createBrowserClient } from "@supabase/ssr";

const KEY_QUESTIONS = ["All", "Safe", "Effective", "Caring", "Responsive", "Well-Led"];

export default function ComplianceCentrePage() {
  const [search,     setSearch]     = useState("");
  const [activeKQ,   setActiveKQ]   = useState("All");
  const [activeSub,  setActiveSub]  = useState("All");
  const [view,       setView]       = useState<"grid" | "list">("list");
  const [flagship,   setFlagship]   = useState(false);
  const [unread,     setUnread]     = useState(false);
  const [readIds,    setReadIds]    = useState<Set<string>>(new Set());

  // Read URL params on mount (avoids useSearchParams Suspense requirement)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const kq = params.get("kq");
    if (kq && KEY_QUESTIONS.includes(kq)) setActiveKQ(kq);
    if (params.get("filter") === "flagship") setFlagship(true);
    if (params.get("filter") === "attention") setUnread(true);
  }, []);

  // Load acknowledged policy IDs for the current user
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      const { data } = await supabase
        .from("read_records")
        .select("document_id")
        .eq("user_id", user.id);
      if (data) setReadIds(new Set(data.map((r: { document_id: string }) => r.document_id)));
    });
  }, []);

  const categoryData = Object.values(CATEGORIES);

  const subcategories = useMemo(() => {
    if (activeKQ === "All") {
      return ["All", ...Array.from(new Set(DOCUMENTS.map((d) => d.subcategory))).sort()];
    }
    const filtered = DOCUMENTS.filter((d) => d.keyQuestion === activeKQ);
    return ["All", ...Array.from(new Set(filtered.map((d) => d.subcategory))).sort()];
  }, [activeKQ]);

  const filtered = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const matchKQ       = activeKQ === "All" || doc.keyQuestion === activeKQ;
      const matchSub      = activeSub === "All" || doc.subcategory === activeSub;
      const matchFlagship = !flagship || FLAGSHIP_IDS.has(doc.id);
      const matchUnread   = !unread || (!readIds.has(doc.id) && doc.status === "updated");
      const matchSearch   =
        !search ||
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        doc.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchKQ && matchSub && matchFlagship && matchUnread && matchSearch;
    });
  }, [search, activeKQ, activeSub, flagship, unread, readIds]);

  const kqColor: Record<string, string> = {
    Safe: "#22c55e", Effective: "#2E6FFF", Caring: "#ec4899",
    Responsive: "#f59e0b", "Well-Led": "#8b5cf6",
    "Governance & Quality": "#0f766e", "Information & Records": "#0369a1",
    "Workforce & HR": "#b45309", "Care Operations": "#be185d",
  };

  const statusLabel: Record<string, { label: string; cls: string }> = {
    current: { label: "Current", cls: "badge-green" },
    updated: { label: "New Update", cls: "badge-blue" },
    review: { label: "Review Due", cls: "badge-amber" },
  };

  return (
    <DashboardLayout>
      {/* Install app banner — shown once, dismissible */}
      <InstallAppBanner />

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compliance Centre</h1>
          <p className="text-gray-500 mt-1 text-sm">
            {DOCUMENTS.length} policies & procedures • All aligned to your regulator (CQC)
            {readIds.size > 0 && (
              <span className="ml-2 inline-flex items-center gap-1 text-green-700 font-semibold">
                • ✓ {readIds.size} acknowledged
              </span>
            )}
          </p>
        </div>
        <Link href="/reading-lists" className="btn-primary text-sm py-2">
          📋 Reading Lists
        </Link>
      </div>

      {/* Summary cards by key question */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {Object.entries(CATEGORIES).map(([key, cat]) => {
          const count = DOCUMENTS.filter((d) => d.keyQuestion === cat.label).length;
          const updatedCount = DOCUMENTS.filter((d) => d.keyQuestion === cat.label && d.status === "updated").length;
          return (
            <button
              key={key}
              onClick={() => { setActiveKQ(cat.label); setActiveSub("All"); }}
              className="card text-left transition-all hover:shadow-md"
              style={{ border: activeKQ === cat.label ? `2px solid ${cat.color}` : "1px solid #e2e8f0" }}
            >
              <div className="text-xl mb-2">{cat.icon}</div>
              <div className="text-xs font-bold text-gray-900 mb-1">{cat.label}</div>
              <div className="text-2xl font-bold" style={{ color: cat.color }}>{count}</div>
              <div className="text-xs text-gray-400">policies</div>
              {updatedCount > 0 && (
                <div className="mt-2 badge badge-blue text-xs">{updatedCount} updated</div>
              )}
            </button>
          );
        })}
      </div>

      {/* Search & filters */}
      <div className="card mb-5">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search policies, procedures, tags…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none"
              style={{ border: "1.5px solid #e2e8f0" }}
              onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>

          {/* KQ filter */}
          <div className="flex items-center gap-1 flex-wrap">
            {KEY_QUESTIONS.map((kq) => (
              <button
                key={kq}
                onClick={() => { setActiveKQ(kq); setActiveSub("All"); }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  backgroundColor: activeKQ === kq ? (kqColor[kq] || "#2E6FFF") : "#f3f4f6",
                  color: activeKQ === kq ? "white" : "#6b7280",
                }}
              >
                {kq}
              </button>
            ))}
            <button
              onClick={() => setFlagship(!flagship)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                backgroundColor: flagship ? "#2E6FFF15" : "#f3f4f6",
                color: flagship ? "#2E6FFF" : "#6b7280",
                border: flagship ? "1px solid #2E6FFF40" : "1px solid transparent",
              }}
            >
              ⭐ Comprehensive
            </button>
            <button
              onClick={() => setUnread(!unread)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                backgroundColor: unread ? "#fef3c715" : "#f3f4f6",
                color: unread ? "#b45309" : "#6b7280",
                border: unread ? "1px solid #fbbf2440" : "1px solid transparent",
              }}
            >
              ⚠️ Needs attention
            </button>
          </div>

          {/* View toggle */}
          <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            {(["list", "grid"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="px-3 py-2 text-sm"
                style={{
                  backgroundColor: view === v ? "#2E6FFF" : "white",
                  color: view === v ? "white" : "#6b7280",
                }}
              >
                {v === "list" ? "☰" : "⊞"}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory filter */}
        {activeKQ !== "All" && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3" style={{ borderTop: "1px solid #f3f4f6" }}>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(sub)}
                className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: activeSub === sub ? "#e8f0ff" : "#f9fafb",
                  color: activeSub === sub ? "#2E6FFF" : "#6b7280",
                  border: activeSub === sub ? "1px solid #2E6FFF" : "1px solid #e5e7eb",
                }}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results count + active filter chips */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {DOCUMENTS.length} documents
          {readIds.size > 0 && (
            <span className="ml-2 text-green-600 font-semibold">• {readIds.size} acknowledged</span>
          )}
        </p>
        {/* Clear-all chip when any non-default filter is active */}
        {(activeKQ !== "All" || activeSub !== "All" || flagship || unread || search) && (
          <button
            onClick={() => { setActiveKQ("All"); setActiveSub("All"); setFlagship(false); setUnread(false); setSearch(""); }}
            className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
          >
            ✕ Clear all filters
          </button>
        )}
      </div>

      {/* Document list */}
      {view === "list" ? (
        <div className="space-y-2">
          {filtered.map((doc) => (
            <Link key={doc.id} href={`/compliance/${doc.id}`}>
              <div className="card hover:shadow-md transition-all cursor-pointer group"
                style={{ padding: "1rem 1.25rem" }}>
                <div className="flex items-center gap-4">
                  {/* Color indicator */}
                  <div className="w-1 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: kqColor[doc.keyQuestion] || "#2E6FFF" }}></div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#f0f4ff" }}>
                    <span className="text-sm">📄</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2E6FFF] transition-colors">
                        {doc.title}
                      </h3>
                      {FLAGSHIP_IDS.has(doc.id) && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: "#2E6FFF15", color: "#2E6FFF", border: "1px solid #2E6FFF30" }}>
                          ⭐ Comprehensive
                        </span>
                      )}
                      {doc.status !== "current" && (
                        <span className={`badge ${statusLabel[doc.status].cls} text-xs`}>
                          {statusLabel[doc.status].label}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                      <span className="text-xs text-gray-400">{doc.subcategory}</span>
                      <span className="text-xs text-gray-400">v{doc.version}</span>
                      <span className="text-xs text-gray-400">Updated {doc.lastUpdated}</span>
                      <span className="text-xs text-gray-400">~{doc.readTime} min read</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-1">{doc.summary}</p>
                  </div>

                  {/* KQ badge + read indicator + arrow */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {readIds.has(doc.id) && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>
                        ✓ Read
                      </span>
                    )}
                    <span className="badge text-xs px-2 py-1"
                      style={{
                        backgroundColor: `${kqColor[doc.keyQuestion]}20`,
                        color: kqColor[doc.keyQuestion],
                      }}>
                      {doc.keyQuestion}
                    </span>
                    <span className="text-gray-300 group-hover:text-[#2E6FFF] transition-colors">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc) => (
            <Link key={doc.id} href={`/compliance/${doc.id}`}>
              <div className="card hover:shadow-md transition-all cursor-pointer group h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${kqColor[doc.keyQuestion]}20` }}>
                    <span className="text-lg">📄</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {FLAGSHIP_IDS.has(doc.id) && (
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#2E6FFF15", color: "#2E6FFF", border: "1px solid #2E6FFF30" }}>
                        ⭐ Comprehensive
                      </span>
                    )}
                    {doc.status !== "current" && (
                      <span className={`badge ${statusLabel[doc.status].cls} text-xs`}>
                        {statusLabel[doc.status].label}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#2E6FFF] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{doc.summary}</p>
                <div className="flex items-center justify-between mt-auto gap-2 flex-wrap">
                  <span className="badge text-xs"
                    style={{
                      backgroundColor: `${kqColor[doc.keyQuestion]}20`,
                      color: kqColor[doc.keyQuestion],
                    }}>
                    {doc.keyQuestion}
                  </span>
                  {readIds.has(doc.id) ? (
                    <span className="text-xs font-semibold"
                      style={{ color: "#16a34a" }}>
                      ✓ Read
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">{doc.subcategory}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="font-semibold text-gray-900 mb-1">No documents found</h3>
          <p className="text-gray-500 text-sm">
            {unread
              ? "No policies need attention right now — you're up to date!"
              : flagship
              ? "No comprehensive policies match your current filters."
              : "Try adjusting your search or filters."}
          </p>
          <button
            onClick={() => { setSearch(""); setActiveKQ("All"); setActiveSub("All"); setFlagship(false); setUnread(false); }}
            className="btn-primary mt-4 text-sm"
          >
            Clear all filters
          </button>
        </div>
      )}
    </DashboardLayout>
  );
}
