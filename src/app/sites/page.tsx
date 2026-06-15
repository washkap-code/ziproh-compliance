"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import DashboardLayout from "@/components/DashboardLayout";

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Site = {
  id: string;
  name: string;
  address?: string;
  service_type?: string;
  regulator?: string;
  active: boolean;
  created_at: string;
  staffCount?: number;
  complianceScore?: number;
};

const SERVICE_TYPES = [
  "Care Home (Residential)", "Care Home (Nursing)", "Domiciliary Care",
  "Supported Living", "Extra Care", "Day Services", "Mental Health",
  "Learning Disabilities", "GP Practice", "Other",
];
const REGULATORS = ["CQC", "Care Inspectorate (Scotland)", "CIW (Wales)", "RQIA (Northern Ireland)"];

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 80 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626";
  const bg    = score >= 80 ? "#f0fdf4" : score >= 50 ? "#fffbeb" : "#fef2f2";
  return (
    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ color, backgroundColor: bg }}>
      {score}%
    </span>
  );
}

export default function SitesPage() {
  const router = useRouter();
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", service_type: "", regulator: "CQC" });
  const [error, setError] = useState("");

  const loadSites = useCallback(async () => {
    const res = await fetch("/api/sites");
    if (!res.ok) return;
    const json = await res.json();

    // Enrich with staff counts and compliance scores
    const enriched: Site[] = await Promise.all(
      (json.sites ?? []).map(async (s: Site) => {
        try {
          const detail = await fetch(`/api/sites/${s.id}`).then(r => r.json());
          return { ...s, staffCount: detail.staff?.length ?? 0, complianceScore: detail.complianceScore ?? 0 };
        } catch {
          return { ...s, staffCount: 0, complianceScore: 0 };
        }
      })
    );
    setSites(enriched);
  }, []);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { router.push("/login"); return; }
      const { data: profile } = await sb.from("profiles").select("plan").eq("id", user.id).single();
      setPlan(profile?.plan ?? null);
      if (profile?.plan !== "enterprise") { router.push("/upgrade"); return; }
      await loadSites();
      setLoading(false);
    })();
  }, [router, loadSites]);

  async function handleCreate() {
    if (!form.name.trim()) { setError("Site name is required."); return; }
    setSaving(true); setError("");
    const res = await fetch("/api/sites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) { const j = await res.json(); setError(j.error ?? "Failed to create site."); setSaving(false); return; }
    setShowModal(false);
    setForm({ name: "", address: "", service_type: "", regulator: "CQC" });
    await loadSites();
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this site? Staff assigned to it will be unaffected.")) return;
    await fetch(`/api/sites/${id}`, { method: "DELETE" });
    setSites(s => s.filter(x => x.id !== id));
  }

  const totalStaff = sites.reduce((a, s) => a + (s.staffCount ?? 0), 0);
  const avgCompliance = sites.length ? Math.round(sites.reduce((a, s) => a + (s.complianceScore ?? 0), 0) / sites.length) : 0;

  if (loading) return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: "#7c3aed", borderTopColor: "transparent" }} />
      </div>
    </DashboardLayout>
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#7c3aed" }}>Enterprise</span>
              <span className="text-xs text-gray-400">Group Overview</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Group Management</h1>
            <p className="text-sm text-gray-500 mt-1">Manage all your care locations from one place.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#7c3aed" }}
          >
            + Add Site
          </button>
        </div>

        {/* Group stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Sites", value: sites.length, icon: "🏢" },
            { label: "Total Staff", value: totalStaff, icon: "👥" },
            { label: "Avg Compliance", value: `${avgCompliance}%`, icon: "✅" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border p-5" style={{ borderColor: "#e2e8f0" }}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Sites grid */}
        {sites.length === 0 ? (
          <div className="bg-white rounded-2xl border p-12 text-center" style={{ borderColor: "#e2e8f0" }}>
            <div className="text-4xl mb-3">🏢</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">No sites yet</h3>
            <p className="text-sm text-gray-500 mb-6">Add your first care location to start managing your group.</p>
            <button onClick={() => setShowModal(true)} className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl" style={{ backgroundColor: "#7c3aed" }}>
              + Add First Site
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {sites.map(site => (
              <div key={site.id} className="bg-white rounded-2xl border hover:shadow-md transition-shadow" style={{ borderColor: "#e2e8f0" }}>
                <Link href={`/sites/${site.id}`} className="block p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base">{site.name}</h3>
                      {site.address && <p className="text-xs text-gray-400 mt-0.5">{site.address}</p>}
                    </div>
                    <ScoreBadge score={site.complianceScore ?? 0} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    {site.service_type && <span>📋 {site.service_type}</span>}
                    <span>🏛 {site.regulator ?? "CQC"}</span>
                    <span>👥 {site.staffCount ?? 0} staff</span>
                  </div>
                  {/* Compliance bar */}
                  <div className="mt-3">
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <div
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: `${site.complianceScore ?? 0}%`,
                          backgroundColor: (site.complianceScore ?? 0) >= 80 ? "#16a34a" : (site.complianceScore ?? 0) >= 50 ? "#d97706" : "#dc2626",
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Policy compliance</p>
                  </div>
                </Link>
                <div className="px-5 pb-4 flex justify-end">
                  <button
                    onClick={() => handleDelete(site.id)}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Site Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b" style={{ borderColor: "#e2e8f0" }}>
              <h2 className="font-bold text-gray-900 text-lg">Add New Site</h2>
              <p className="text-sm text-gray-500 mt-0.5">Add a care location to your group.</p>
            </div>
            <div className="p-6 space-y-4">
              {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Site Name *</label>
                <input
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Meadow View Care Home"
                  className="w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "#d1d5db", focusRingColor: "#7c3aed" } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                <input
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  placeholder="e.g. 12 High Street, Bristol, BS1 4AA"
                  className="w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none"
                  style={{ borderColor: "#d1d5db" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Service Type</label>
                <select
                  value={form.service_type}
                  onChange={e => setForm(f => ({ ...f, service_type: e.target.value }))}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none"
                  style={{ borderColor: "#d1d5db" }}
                >
                  <option value="">Select type…</option>
                  {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Regulator</label>
                <select
                  value={form.regulator}
                  onChange={e => setForm(f => ({ ...f, regulator: e.target.value }))}
                  className="w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none"
                  style={{ borderColor: "#d1d5db" }}
                >
                  {REGULATORS.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-3 justify-end">
              <button onClick={() => { setShowModal(false); setError(""); }} className="text-sm text-gray-500 px-4 py-2 rounded-xl hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={saving}
                className="text-sm font-semibold text-white px-5 py-2 rounded-xl disabled:opacity-50"
                style={{ backgroundColor: "#7c3aed" }}
              >
                {saving ? "Adding…" : "Add Site"}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
