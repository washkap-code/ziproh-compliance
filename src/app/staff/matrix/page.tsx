"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS } from "@/lib/documents";

// ─── Types ─────────────────────────────────────────────────────────────────────
type ActiveStaff = {
  userId: string;
  name: string;
  email: string;
  role: string;
  initials: string;
  colour: string;
};

type CategoryKey = "Safe" | "Effective" | "Caring" | "Responsive" | "Well-Led";

const CATEGORY_MAP: Record<CategoryKey, { prefix: string; colour: string; bg: string }> = {
  "Safe":       { prefix: "saf-", colour: "#ef4444", bg: "#fef2f2" },
  "Effective":  { prefix: "eff-", colour: "#3b82f6", bg: "#eff6ff" },
  "Caring":     { prefix: "car-", colour: "#ec4899", bg: "#fdf2f8" },
  "Responsive": { prefix: "res-", colour: "#8b5cf6", bg: "#f5f3ff" },
  "Well-Led":   { prefix: "wl-",  colour: "#22c55e", bg: "#f0fdf4" },
};

const COLOURS = ["#2E6FFF", "#8b5cf6", "#22c55e", "#ec4899", "#f59e0b", "#06b6d4", "#f97316"];

function categoryOfDoc(id: string): CategoryKey | null {
  for (const [cat, { prefix }] of Object.entries(CATEGORY_MAP)) {
    if (id.startsWith(prefix)) return cat as CategoryKey;
  }
  return null;
}

function compliancePct(readCount: number, total: number) {
  return total === 0 ? 0 : Math.round((readCount / total) * 100);
}

function pctColour(pct: number) {
  if (pct >= 80) return "#22c55e";
  if (pct >= 50) return "#f59e0b";
  return "#ef4444";
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ComplianceMatrixPage() {
  const [loading, setLoading]           = useState(true);
  const [staff, setStaff]               = useState<ActiveStaff[]>([]);
  const [readMap, setReadMap]           = useState<Record<string, Set<string>>>({}); // userId → Set<docId>
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "All">("All");
  const [search, setSearch]             = useState("");

  useEffect(() => {
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { setLoading(false); return; }

      const [staffRes, readsRes] = await Promise.all([
        sb.from("staff_members")
          .select("user_id, email, first_name, last_name, role, status")
          .eq("org_id", user.id)
          .eq("status", "active")
          .not("user_id", "is", null),
        sb.from("read_records")
          .select("user_id, document_id")
          .not("user_id", "is", null),
      ]);

      const members: ActiveStaff[] = (staffRes.data ?? []).map((r, i) => {
        const name = [r.first_name, r.last_name].filter(Boolean).join(" ") || r.email;
        const initials = name.split(" ").map((n: string) => n[0] ?? "").join("").toUpperCase().slice(0, 2);
        return {
          userId: r.user_id as string,
          name,
          email: r.email,
          role: r.role,
          initials,
          colour: COLOURS[i % COLOURS.length],
        };
      });

      const activeUserIds = new Set(members.map(m => m.userId));
      const rm: Record<string, Set<string>> = {};
      for (const row of readsRes.data ?? []) {
        if (!activeUserIds.has(row.user_id)) continue;
        if (!rm[row.user_id]) rm[row.user_id] = new Set();
        rm[row.user_id].add(row.document_id);
      }

      setStaff(members);
      setReadMap(rm);
      setLoading(false);
    })();
  }, []);

  // Visible policies based on category filter
  const visibleDocs = useMemo(() => {
    const docs = activeCategory === "All"
      ? DOCUMENTS
      : DOCUMENTS.filter(d => categoryOfDoc(d.id) === activeCategory);
    return docs;
  }, [activeCategory]);

  // Filtered staff based on search
  const visibleStaff = useMemo(() =>
    staff.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
    ),
    [staff, search]
  );

  // CSV export
  function exportCSV() {
    const headers = ["Staff Member", "Email", "Role", "% Complete", ...visibleDocs.map(d => d.title)];
    const rows = visibleStaff.map(s => {
      const reads = readMap[s.userId] ?? new Set();
      const pct = compliancePct(reads.size, DOCUMENTS.length);
      return [
        s.name, s.email, s.role, `${pct}%`,
        ...visibleDocs.map(d => reads.has(d.id) ? "Yes" : "No"),
      ];
    });
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = "staff-compliance-matrix.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Summary stats
  const totalPolicies = DOCUMENTS.length;
  const avgCompliance = staff.length === 0 ? 0 :
    Math.round(staff.reduce((sum, s) => sum + compliancePct((readMap[s.userId]?.size ?? 0), totalPolicies), 0) / staff.length);
  const fullyCompliant = staff.filter(s => (readMap[s.userId]?.size ?? 0) >= totalPolicies).length;

  return (
    <DashboardLayout>
      <div className="max-w-full px-4 lg:px-8 py-8">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <Link href="/staff" className="hover:text-[#2E6FFF] transition-colors">My Staff</Link>
              <span>→</span>
              <span className="text-gray-600 font-medium">Compliance Matrix</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Staff Compliance Matrix</h1>
            <p className="text-sm text-gray-500 mt-1">
              Which staff have read and acknowledged which policies.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportCSV}
              disabled={staff.length === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all hover:bg-gray-50 disabled:opacity-40"
              style={{ borderColor: "#e2e8f0", color: "#374151" }}
            >
              ⬇ Export CSV
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Active staff tracked",    value: staff.length.toString(),   colour: "#2E6FFF" },
            { label: "Policies in library",      value: totalPolicies.toString(),  colour: "#8b5cf6" },
            { label: "Average compliance",       value: `${avgCompliance}%`,       colour: pctColour(avgCompliance) },
            { label: "Fully compliant staff",    value: fullyCompliant.toString(), colour: "#22c55e" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl p-4 border" style={{ borderColor: "#e2e8f0" }}>
              <div className="text-2xl font-bold mb-0.5" style={{ color: s.colour }}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-4 items-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search staff…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-3 py-2 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-48"
            style={{ borderColor: "#e2e8f0" }}
          />

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Safe", "Effective", "Caring", "Responsive", "Well-Led"] as const).map(cat => {
              const meta = cat === "All" ? null : CATEGORY_MAP[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: isActive ? (meta?.colour ?? "#2E6FFF") : (meta?.bg ?? "#f3f4f6"),
                    color: isActive ? "white" : (meta?.colour ?? "#374151"),
                    border: `1px solid ${isActive ? "transparent" : (meta?.colour ?? "#d1d5db")}`,
                  }}
                >
                  {cat} {cat !== "All" && `(${DOCUMENTS.filter(d => categoryOfDoc(d.id) === cat).length})`}
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24 text-gray-400 text-sm">Loading…</div>
        ) : staff.length === 0 ? (
          <div className="bg-white rounded-2xl border p-12 text-center" style={{ borderColor: "#e2e8f0" }}>
            <div className="text-4xl mb-3">👥</div>
            <div className="font-semibold text-gray-900 mb-1">No active staff yet</div>
            <p className="text-sm text-gray-500 mb-4">
              Staff appear here once they accept their invite and log in.
            </p>
            <Link href="/staff" className="text-sm font-semibold text-[#2E6FFF] hover:underline">
              Go to My Staff →
            </Link>
          </div>
        ) : (
          /* Matrix table — horizontally scrollable */
          <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: `${Math.max(700, 180 + visibleDocs.length * 44)}px` }}>
                <thead>
                  {/* Category header row */}
                  <tr>
                    <th
                      className="sticky left-0 z-20 bg-white border-b border-r px-4 py-3 text-left"
                      style={{ borderColor: "#e2e8f0", minWidth: "180px" }}
                    >
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Staff Member</span>
                    </th>
                    <th
                      className="border-b border-r px-3 py-3 text-center bg-gray-50"
                      style={{ borderColor: "#e2e8f0", minWidth: "72px" }}
                    >
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Score</span>
                    </th>
                    {visibleDocs.map(doc => {
                      const cat = categoryOfDoc(doc.id);
                      const meta = cat ? CATEGORY_MAP[cat] : null;
                      return (
                        <th
                          key={doc.id}
                          className="border-b px-1 py-2 text-center"
                          style={{ borderColor: "#e2e8f0", backgroundColor: meta?.bg ?? "#f9fafb", minWidth: "40px", maxWidth: "44px" }}
                          title={doc.title}
                        >
                          <div
                            className="text-xs font-mono font-bold mx-auto truncate"
                            style={{ color: meta?.colour ?? "#374151", writingMode: "vertical-lr", transform: "rotate(180deg)", height: "80px", lineHeight: "1" }}
                          >
                            {doc.id}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {visibleStaff.map((member, rowIdx) => {
                    const reads = readMap[member.userId] ?? new Set();
                    const score = compliancePct(reads.size, totalPolicies);
                    return (
                      <tr
                        key={member.userId}
                        className="hover:bg-blue-50/30 transition-colors"
                        style={{ backgroundColor: rowIdx % 2 === 0 ? "white" : "#fafafa" }}
                      >
                        {/* Sticky staff name column */}
                        <td
                          className="sticky left-0 z-10 border-b border-r px-4 py-3"
                          style={{
                            borderColor: "#f3f4f6",
                            backgroundColor: rowIdx % 2 === 0 ? "white" : "#fafafa",
                            minWidth: "180px",
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                              style={{ backgroundColor: member.colour }}
                            >
                              {member.initials}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-gray-900 truncate">{member.name}</div>
                              <div className="text-xs text-gray-400 truncate">{member.role}</div>
                            </div>
                          </div>
                        </td>

                        {/* Score cell */}
                        <td
                          className="border-b border-r px-3 py-3 text-center bg-gray-50"
                          style={{ borderColor: "#f3f4f6" }}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-sm font-bold" style={{ color: pctColour(score) }}>
                              {score}%
                            </span>
                            <div className="w-10 h-1.5 rounded-full overflow-hidden bg-gray-200">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{ width: `${score}%`, backgroundColor: pctColour(score) }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Policy cells */}
                        {visibleDocs.map(doc => {
                          const read = reads.has(doc.id);
                          const cat = categoryOfDoc(doc.id);
                          const meta = cat ? CATEGORY_MAP[cat] : null;
                          return (
                            <td
                              key={doc.id}
                              className="border-b px-1 py-3 text-center"
                              style={{ borderColor: "#f3f4f6" }}
                              title={`${member.name} — ${doc.title}: ${read ? "Read ✓" : "Not read"}`}
                            >
                              {read ? (
                                <span
                                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold mx-auto"
                                  style={{ backgroundColor: meta?.colour ?? "#22c55e" }}
                                >
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-block w-5 h-5 rounded-full bg-gray-100 mx-auto" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-t text-xs text-gray-400"
              style={{ borderColor: "#e2e8f0" }}>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-xs" style={{ backgroundColor: "#22c55e" }}>✓</span>
                Policy acknowledged
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-4 rounded-full bg-gray-100"></span>
                Not yet read
              </div>
              {(Object.entries(CATEGORY_MAP) as [CategoryKey, typeof CATEGORY_MAP[CategoryKey]][]).map(([cat, meta]) => (
                <div key={cat} className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: meta.colour }} />
                  {cat}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
