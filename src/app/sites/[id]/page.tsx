"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import DashboardLayout from "@/components/DashboardLayout";

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type StaffMember = { id: string; first_name: string; last_name: string; email: string };
type Audit = { id: string; kq: string; score: number; created_at: string };
type SiteDetail = {
  site: { id: string; name: string; address?: string; service_type?: string; regulator?: string };
  staff: StaffMember[];
  audits: Audit[];
  complianceScore: number;
};

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626";
  const r = 36, circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
      <svg width={96} height={96} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={48} cy={48} r={r} fill="none" stroke="#f1f5f9" strokeWidth={8} />
        <circle cx={48} cy={48} r={r} fill="none" stroke={color} strokeWidth={8}
          strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round" />
      </svg>
      <div className="absolute text-center">
        <div className="text-xl font-bold" style={{ color }}>{score}%</div>
        <div className="text-xs text-gray-400">compliance</div>
      </div>
    </div>
  );
}

export default function SiteDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<SiteDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", address: "", service_type: "", regulator: "" });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch(`/api/sites/${params.id}`);
    if (!res.ok) { router.push("/sites"); return; }
    const json = await res.json();
    setData(json);
    setEditForm({
      name: json.site.name,
      address: json.site.address ?? "",
      service_type: json.site.service_type ?? "",
      regulator: json.site.regulator ?? "CQC",
    });
  }, [params.id, router]);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { router.push("/login"); return; }
      const { data: profile } = await sb.from("profiles").select("plan").eq("id", user.id).single();
      if (profile?.plan !== "enterprise") { router.push("/upgrade"); return; }
      await load();
      setLoading(false);
    })();
  }, [router, load]);

  async function handleSave() {
    setSaving(true);
    const res = await fetch(`/api/sites/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    if (res.ok) { await load(); setEditing(false); }
    setSaving(false);
  }

  if (loading || !data) return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: "#7c3aed", borderTopColor: "transparent" }} />
      </div>
    </DashboardLayout>
  );

  const { site, staff, audits, complianceScore } = data;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/sites" className="hover:text-gray-600">Group Overview</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">{site.name}</span>
        </div>

        {/* Site header */}
        <div className="bg-white rounded-2xl border p-6 mb-6" style={{ borderColor: "#e2e8f0" }}>
          {editing ? (
            <div className="space-y-3">
              <input value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Site name" className="w-full border rounded-xl px-3 py-2 text-sm" style={{ borderColor: "#d1d5db" }} />
              <input value={editForm.address} onChange={e => setEditForm(f => ({ ...f, address: e.target.value }))}
                placeholder="Address" className="w-full border rounded-xl px-3 py-2 text-sm" style={{ borderColor: "#d1d5db" }} />
              <div className="grid grid-cols-2 gap-3">
                <input value={editForm.service_type} onChange={e => setEditForm(f => ({ ...f, service_type: e.target.value }))}
                  placeholder="Service type" className="border rounded-xl px-3 py-2 text-sm" style={{ borderColor: "#d1d5db" }} />
                <select value={editForm.regulator} onChange={e => setEditForm(f => ({ ...f, regulator: e.target.value }))}
                  className="border rounded-xl px-3 py-2 text-sm" style={{ borderColor: "#d1d5db" }}>
                  {["CQC", "Care Inspectorate (Scotland)", "CIW (Wales)", "RQIA (Northern Ireland)"].map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="flex gap-2">
                <button onClick={handleSave} disabled={saving} className="text-sm font-semibold text-white px-4 py-2 rounded-xl" style={{ backgroundColor: "#7c3aed" }}>
                  {saving ? "Saving…" : "Save"}
                </button>
                <button onClick={() => setEditing(false)} className="text-sm text-gray-500 px-4 py-2 rounded-xl hover:bg-gray-100">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#7c3aed" }}>Enterprise</span>
                  <span className="text-xs text-gray-400">{site.regulator ?? "CQC"}</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{site.name}</h1>
                {site.address && <p className="text-sm text-gray-500 mt-1">{site.address}</p>}
                {site.service_type && <p className="text-sm text-gray-400">{site.service_type}</p>}
              </div>
              <div className="flex items-center gap-4">
                <ScoreRing score={complianceScore} />
                <button onClick={() => setEditing(true)} className="text-xs text-gray-400 hover:text-gray-600">Edit</button>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Staff at this site */}
          <div className="bg-white rounded-2xl border" style={{ borderColor: "#e2e8f0" }}>
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "#f1f5f9" }}>
              <h2 className="font-semibold text-gray-800">Staff ({staff.length})</h2>
              <Link href="/staff" className="text-xs text-blue-600 hover:underline">Manage staff →</Link>
            </div>
            {staff.length === 0 ? (
              <div className="p-6 text-center text-sm text-gray-400">
                No staff assigned to this site yet.<br />
                <Link href="/staff" className="text-blue-600 hover:underline">Assign staff from the Staff page</Link>
              </div>
            ) : (
              <ul className="divide-y" style={{ borderColor: "#f1f5f9" }}>
                {staff.map(s => (
                  <li key={s.id} className="px-5 py-3 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: "#7c3aed" }}>
                      {s.first_name?.[0]}{s.last_name?.[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{s.first_name} {s.last_name}</p>
                      <p className="text-xs text-gray-400">{s.email}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Recent audits */}
          <div className="bg-white rounded-2xl border" style={{ borderColor: "#e2e8f0" }}>
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "#f1f5f9" }}>
              <h2 className="font-semibold text-gray-800">Recent Audits</h2>
              <Link href="/audit" className="text-xs text-blue-600 hover:underline">New audit →</Link>
            </div>
            {audits.length === 0 ? (
              <div className="p-6 text-center text-sm text-gray-400">
                No audits yet for this site.<br />
                <Link href="/audit/new" className="text-blue-600 hover:underline">Run an audit</Link>
              </div>
            ) : (
              <ul className="divide-y" style={{ borderColor: "#f1f5f9" }}>
                {audits.slice(0, 6).map(a => {
                  const pct = Math.round(a.score);
                  const col = pct >= 80 ? "#16a34a" : pct >= 50 ? "#d97706" : "#dc2626";
                  return (
                    <li key={a.id} className="px-5 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{a.kq}</p>
                        <p className="text-xs text-gray-400">{new Date(a.created_at).toLocaleDateString("en-GB")}</p>
                      </div>
                      <span className="text-sm font-bold" style={{ color: col }}>{pct}%</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
