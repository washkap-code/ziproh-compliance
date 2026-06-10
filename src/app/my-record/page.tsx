"use client";
import { useEffect, useRef, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS, FLAGSHIP_IDS } from "@/lib/documents";

const KQ_ORDER = ["Safe", "Effective", "Caring", "Responsive", "Well-Led"] as const;
type KQ = (typeof KQ_ORDER)[number];

const KQ_COLOR: Record<KQ, string> = {
  Safe: "#22c55e",
  Effective: "#2E6FFF",
  Caring: "#ec4899",
  Responsive: "#f59e0b",
  "Well-Led": "#8b5cf6",
};

const KQ_BG: Record<KQ, string> = {
  Safe: "#f0fdf4",
  Effective: "#eff6ff",
  Caring: "#fdf2f8",
  Responsive: "#fffbeb",
  "Well-Led": "#f5f3ff",
};

function supabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

type ReadRecord = { document_id: string; read_at: string };

export default function MyRecordPage() {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState("");
  const [readRecords, setReadRecords] = useState<ReadRecord[]>([]);
  const [view, setView] = useState<"summary" | "full">("summary");
  const [expandedKQ, setExpandedKQ] = useState<KQ | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sb = supabaseClient();
    (async () => {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { setLoading(false); return; }

      const [profileRes, recordsRes] = await Promise.all([
        sb.from("profiles").select("first_name, last_name, org_name, service_type").eq("id", user.id).single(),
        sb.from("read_records").select("document_id, read_at").eq("user_id", user.id).order("read_at", { ascending: false }),
      ]);

      if (profileRes.data) {
        setFirstName(profileRes.data.first_name ?? "");
        setLastName(profileRes.data.last_name ?? "");
        setOrgName(profileRes.data.org_name ?? "");
        setRole(profileRes.data.service_type ?? "Care Professional");
      }
      if (recordsRes.data) setReadRecords(recordsRes.data as ReadRecord[]);
      setLoading(false);
    })();
  }, []);

  const readMap = new Map(readRecords.map((r) => [r.document_id, r.read_at]));
  const totalDocs = DOCUMENTS.length;
  const totalRead = readMap.size;
  const overallPct = totalDocs > 0 ? Math.round((totalRead / totalDocs) * 100) : 0;

  const flagshipTotal = FLAGSHIP_IDS.size;
  const flagshipRead = DOCUMENTS.filter((d) => FLAGSHIP_IDS.has(d.id) && readMap.has(d.id)).length;

  const kqStats = KQ_ORDER.map((q) => {
    const docs = DOCUMENTS.filter((d) => d.keyQuestion === q);
    const acknowledged = docs.filter((d) => readMap.has(d.id));
    const pending = docs.filter((d) => !readMap.has(d.id));
    const pct = docs.length > 0 ? Math.round((acknowledged.length / docs.length) * 100) : 0;
    return { q, docs, acknowledged, pending, pct };
  });

  // Most recently acknowledged (all time) sorted by date desc
  const recentlyRead = readRecords
    .map((r) => {
      const doc = DOCUMENTS.find((d) => d.id === r.document_id);
      return doc ? { ...doc, readAt: r.read_at } : null;
    })
    .filter(Boolean) as (typeof DOCUMENTS[0] & { readAt: string })[];

  const now = new Date();
  const generatedAt = now.toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  }) + " at " + now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  function handlePrint() {
    window.print();
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64 text-gray-400">Loading your compliance record…</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Print-only stylesheet */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #print-area, #print-area * { visibility: visible !important; }
          #print-area { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="max-w-4xl">

        {/* Header */}
        <div className="flex items-start justify-between mb-6 no-print">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Compliance Record</h1>
            <p className="text-sm text-gray-500 mt-1">
              Personal policy acknowledgement history — {totalRead} of {totalDocs} policies acknowledged
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
              {(["summary", "full"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="px-4 py-1.5 rounded-lg text-sm font-semibold capitalize transition-all"
                  style={{
                    backgroundColor: view === v ? "white" : "transparent",
                    color: view === v ? "#2E6FFF" : "#6b7280",
                    boxShadow: view === v ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {v === "summary" ? "Summary" : "Full History"}
                </button>
              ))}
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ backgroundColor: "#2E6FFF" }}
            >
              🖨️ Print Certificate
            </button>
          </div>
        </div>

        {/* ── PRINTABLE AREA ─────────────────────────────────────────── */}
        <div id="print-area" ref={printRef}>

          {/* Certificate header — only shown in print */}
          <div className="hidden print:block mb-8 pb-6" style={{ borderBottom: "3px solid #2E6FFF" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold" style={{ color: "#2E6FFF" }}>Ziproh Compliance</div>
                <div className="text-sm text-gray-500 mt-1">Compliance Record & Policy Acknowledgement Certificate</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{overallPct}%</div>
                <div className="text-xs text-gray-500">Overall Completion</div>
              </div>
            </div>
          </div>

          {/* Identity card */}
          <div className="card p-6 mb-6" style={{ background: "linear-gradient(135deg, #f8faff 0%, #eff6ff 100%)", border: "1.5px solid #bfdbfe" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "#2E6FFF" }}>
                  {firstName ? firstName[0].toUpperCase() : "U"}
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{firstName} {lastName}</div>
                  <div className="text-sm text-gray-500">{role || "Care Professional"}</div>
                  {orgName && <div className="text-sm font-semibold text-blue-700 mt-0.5">{orgName}</div>}
                </div>
              </div>
              <div className="text-right no-print">
                <div className="text-4xl font-bold" style={{ color: "#2E6FFF" }}>{overallPct}%</div>
                <div className="text-xs text-gray-500 mt-0.5">Overall Completion</div>
              </div>
            </div>
            <div className="mt-4 h-3 bg-white rounded-full overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${overallPct}%`, backgroundColor: overallPct >= 80 ? "#22c55e" : overallPct >= 50 ? "#f59e0b" : "#2E6FFF" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-1.5">
              <span>{totalRead} policies acknowledged</span>
              <span>{totalDocs - totalRead} outstanding</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: "#22c55e" }}>{totalRead}</div>
              <div className="text-xs font-semibold text-gray-700">Policies Acknowledged</div>
              <div className="text-xs text-gray-400 mt-0.5">of {totalDocs} total</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: "#8b5cf6" }}>{flagshipRead}/{flagshipTotal}</div>
              <div className="text-xs font-semibold text-gray-700">Comprehensive Policies</div>
              <div className="text-xs text-gray-400 mt-0.5">In-depth flagship policies</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: "#2E6FFF" }}>
                {readRecords.length > 0
                  ? new Date(readRecords[readRecords.length - 1].read_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
                  : "—"}
              </div>
              <div className="text-xs font-semibold text-gray-700">First Acknowledged</div>
              <div className="text-xs text-gray-400 mt-0.5">
                {readRecords.length > 0
                  ? new Date(readRecords[0].read_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + " most recent"
                  : "No records yet"}
              </div>
            </div>
          </div>

          {/* CQC Key Question breakdown */}
          <div className="card mb-6">
            <h2 className="font-bold text-gray-900 text-sm mb-4">CQC Key Question Breakdown</h2>
            <div className="space-y-4">
              {kqStats.map(({ q, acknowledged, pending, pct }) => (
                <div key={q}>
                  <div
                    className="flex items-center justify-between cursor-pointer group no-print"
                    onClick={() => setExpandedKQ(expandedKQ === q ? null : q)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: KQ_COLOR[q] }} />
                      <span className="text-sm font-semibold text-gray-800">{q}</span>
                      <span className="text-xs text-gray-400">{acknowledged.length}/{acknowledged.length + pending.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold" style={{ color: KQ_COLOR[q] }}>{pct}%</span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                        {expandedKQ === q ? "▴" : "▾"}
                      </span>
                    </div>
                  </div>

                  {/* Print version always shows KQ label without toggle */}
                  <div className="hidden print:flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-800">{q}</span>
                      <span className="text-xs text-gray-400">{acknowledged.length}/{acknowledged.length + pending.length}</span>
                    </div>
                    <span className="text-sm font-bold">{pct}%</span>
                  </div>

                  <div className="mt-2">
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#f3f4f6" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: KQ_COLOR[q] }}
                      />
                    </div>
                  </div>

                  {/* Expanded detail — acknowledged policies */}
                  {(expandedKQ === q) && (
                    <div className="mt-3 space-y-1 no-print">
                      {acknowledged.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                            Acknowledged ({acknowledged.length})
                          </p>
                          {acknowledged
                            .sort((a, b) => {
                              const aDate = readMap.get(a.id) ?? "";
                              const bDate = readMap.get(b.id) ?? "";
                              return bDate.localeCompare(aDate);
                            })
                            .map((doc) => {
                              const readAt = readMap.get(doc.id);
                              return (
                                <Link key={doc.id} href={`/compliance/${doc.id}`}>
                                  <div
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: KQ_BG[q] }}
                                  >
                                    <span className="text-xs text-green-600 font-bold flex-shrink-0">✓</span>
                                    <div className="flex-1 min-w-0">
                                      <span className="text-xs font-medium text-gray-800 truncate block">{doc.title}</span>
                                    </div>
                                    <span className="text-xs text-gray-400 flex-shrink-0">
                                      {readAt ? new Date(readAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""}
                                    </span>
                                    {FLAGSHIP_IDS.has(doc.id) && (
                                      <span className="text-xs flex-shrink-0" title="Comprehensive Policy">⭐</span>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                        </div>
                      )}
                      {pending.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                            Outstanding ({pending.length})
                          </p>
                          {pending.map((doc) => (
                            <Link key={doc.id} href={`/compliance/${doc.id}`}>
                              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <span className="text-xs text-gray-300 font-bold flex-shrink-0">○</span>
                                <span className="text-xs text-gray-500 flex-1 truncate">{doc.title}</span>
                                <span className="text-xs text-blue-500 font-semibold flex-shrink-0">Read →</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Full history / recent activity */}
          {view === "summary" ? (
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-sm">Recently Acknowledged</h2>
                <button
                  onClick={() => setView("full")}
                  className="text-xs font-semibold no-print"
                  style={{ color: "#2E6FFF" }}
                >
                  View full history →
                </button>
              </div>
              {recentlyRead.length === 0 ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-3">📋</div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">No policies acknowledged yet</p>
                  <p className="text-xs text-gray-400 mb-4">Open any policy and click Acknowledge to start building your record.</p>
                  <Link href="/compliance" className="btn-primary text-xs">Browse Policies →</Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {recentlyRead.slice(0, 10).map((doc) => (
                    <Link key={doc.id} href={`/compliance/${doc.id}`}>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div
                          className="w-2 h-8 rounded-full flex-shrink-0"
                          style={{ backgroundColor: KQ_COLOR[doc.keyQuestion as KQ] ?? "#ccc" }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">{doc.title}</p>
                          <p className="text-xs text-gray-400">{doc.keyQuestion} · {doc.subcategory}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs font-semibold text-green-600">✓ Acknowledged</p>
                          <p className="text-xs text-gray-400">
                            {new Date(doc.readAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {recentlyRead.length > 10 && (
                    <p className="text-xs text-center text-gray-400 pt-2">
                      + {recentlyRead.length - 10} more — <button onClick={() => setView("full")} className="text-blue-500 underline">view all</button>
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-sm">
                  Full Acknowledgement History ({recentlyRead.length} records)
                </h2>
                <button
                  onClick={() => setView("summary")}
                  className="text-xs font-semibold no-print"
                  style={{ color: "#2E6FFF" }}
                >
                  ← Summary
                </button>
              </div>
              {recentlyRead.length === 0 ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-3">📋</div>
                  <p className="text-sm font-semibold text-gray-700">No acknowledgements yet</p>
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <table className="w-full">
                    <thead>
                      <tr style={{ backgroundColor: "#f8faff" }}>
                        {["Policy Title", "Category", "Key Question", "Acknowledged On"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentlyRead.map((doc) => (
                        <tr key={doc.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3">
                            <Link href={`/compliance/${doc.id}`}>
                              <span className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                                {doc.title}
                              </span>
                            </Link>
                            {FLAGSHIP_IDS.has(doc.id) && (
                              <span className="ml-1.5 text-xs" title="Comprehensive Policy">⭐</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500">{doc.subcategory}</td>
                          <td className="px-4 py-3">
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: KQ_BG[doc.keyQuestion as KQ] ?? "#f3f4f6",
                                color: KQ_COLOR[doc.keyQuestion as KQ] ?? "#6b7280",
                              }}
                            >
                              {doc.keyQuestion}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500">
                            {new Date(doc.readAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Print footer */}
          <div className="hidden print:block mt-8 pt-4 text-xs text-gray-400" style={{ borderTop: "1px solid #e2e8f0" }}>
            <div className="flex justify-between">
              <span>Generated by Ziproh Compliance Platform — ziprohtraining.co.uk</span>
              <span>Generated on {generatedAt}</span>
            </div>
            <p className="mt-1">This record confirms the policies acknowledged by {firstName} {lastName} at {orgName}. For CQC inspection or internal audit use.</p>
          </div>

        </div>
        {/* end print-area */}

        {/* Prompt to complete outstanding */}
        {totalDocs - totalRead > 0 && (
          <div className="mt-5 rounded-2xl p-5 flex items-center gap-4 no-print"
            style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe" }}>
            <span className="text-2xl flex-shrink-0">📋</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-900">
                {totalDocs - totalRead} {totalDocs - totalRead === 1 ? "policy" : "policies"} still to acknowledge
              </p>
              <p className="text-xs text-blue-600 mt-0.5">
                Keep your compliance record up to date — click on any outstanding policy above to read and acknowledge it.
              </p>
            </div>
            <Link
              href="/compliance"
              className="text-sm font-semibold px-4 py-2 rounded-xl text-white flex-shrink-0"
              style={{ backgroundColor: "#2E6FFF" }}
            >
              Continue →
            </Link>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}
