"use client";
import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import {
  SERVICE_TYPES,
  SERVICE_USER_GROUPS,
  MEDICATION_LEVELS,
  canonicalServiceType,
  type MedicationLevel,
} from "@/lib/tailoring";

const REGULATORS = ["CQC (England)", "CIW (Wales)", "Care Inspectorate (Scotland)", "RQIA (Northern Ireland)"];

type Props = {
  /** Called after a successful save */
  onSaved?: () => void;
  /** Compact styling for the onboarding wizard */
  compact?: boolean;
};

export default function CareProfileForm({ onSaved, compact }: Props) {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    org_name: "",
    service_type: "",
    regulator: "",
    nursing_care: false,
    complex_care: false,
    medication_level: "administer" as MedicationLevel,
    service_user_groups: [] as string[],
    registered_manager: "",
    safeguarding_lead: "",
    local_authority: "",
  });

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key"
    );
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setLoading(false); return; }
      setUserId(user.id);
      const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (data) {
        setForm({
          org_name: data.org_name ?? "",
          service_type: canonicalServiceType(data.service_type),
          regulator: data.regulator ?? "",
          nursing_care: data.nursing_care ?? false,
          complex_care: data.complex_care ?? false,
          medication_level: data.medication_level ?? "administer",
          service_user_groups: data.service_user_groups ?? [],
          registered_manager: data.registered_manager ?? "",
          safeguarding_lead: data.safeguarding_lead ?? "",
          local_authority: data.local_authority ?? "",
        });
      }
      setLoading(false);
    });
  }, []);

  function toggleGroup(g: string) {
    setForm((f) => ({
      ...f,
      service_user_groups: f.service_user_groups.includes(g)
        ? f.service_user_groups.filter((x) => x !== g)
        : [...f.service_user_groups, g],
    }));
  }

  async function save() {
    if (!userId) return;
    setSaving(true);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key"
    );
    await supabase.from("profiles").update({ ...form, care_profile_completed: true }).eq("id", userId);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    onSaved?.();
  }

  if (loading) return <div className="text-sm text-gray-400 py-8 text-center">Loading your profile…</div>;

  const inputStyle = { border: "1.5px solid #e2e8f0" };
  const label = "block text-xs font-semibold text-gray-700 mb-1.5 text-left";

  return (
    <div className={`text-left space-y-4 ${compact ? "" : "max-w-2xl"}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Organisation name</label>
          <input value={form.org_name} onChange={(e) => setForm((f) => ({ ...f, org_name: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle} />
        </div>
        <div>
          <label className={label}>Service type</label>
          <select value={form.service_type} onChange={(e) => setForm((f) => ({ ...f, service_type: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle}>
            <option value="">Select…</option>
            {SERVICE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Regulator</label>
          <select value={form.regulator} onChange={(e) => setForm((f) => ({ ...f, regulator: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle}>
            <option value="">Select…</option>
            {REGULATORS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Local authority (optional)</label>
          <input value={form.local_authority} placeholder="e.g. Birmingham City Council"
            onChange={(e) => setForm((f) => ({ ...f, local_authority: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle} />
        </div>
        <div>
          <label className={label}>Registered Manager (optional)</label>
          <input value={form.registered_manager} placeholder="Full name"
            onChange={(e) => setForm((f) => ({ ...f, registered_manager: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle} />
        </div>
        <div>
          <label className={label}>Safeguarding Lead (optional)</label>
          <input value={form.safeguarding_lead} placeholder="Full name"
            onChange={(e) => setForm((f) => ({ ...f, safeguarding_lead: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle} />
        </div>
      </div>

      <div>
        <label className={label}>Who do you support? (select all that apply)</label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_USER_GROUPS.map((g) => {
            const active = form.service_user_groups.includes(g);
            return (
              <button key={g} type="button" onClick={() => toggleGroup(g)}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors"
                style={active
                  ? { backgroundColor: "#2E6FFF", color: "#fff" }
                  : { backgroundColor: "#f1f5f9", color: "#475569" }}>
                {active ? "✓ " : ""}{g}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Do you provide nursing care?</label>
          <div className="flex gap-2">
            {[{ v: true, l: "Yes — registered nurses on team" }, { v: false, l: "No" }].map((o) => (
              <button key={String(o.v)} type="button" onClick={() => setForm((f) => ({ ...f, nursing_care: o.v }))}
                className="text-xs px-3 py-2 rounded-lg font-medium flex-1"
                style={form.nursing_care === o.v
                  ? { backgroundColor: "#2E6FFF", color: "#fff" }
                  : { backgroundColor: "#f1f5f9", color: "#475569" }}>
                {o.l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className={label}>Level of medication support</label>
          <select value={form.medication_level}
            onChange={(e) => setForm((f) => ({ ...f, medication_level: e.target.value as MedicationLevel }))}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white" style={inputStyle}>
            {MEDICATION_LEVELS.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
          <p className="text-xs text-gray-400 mt-1">
            {MEDICATION_LEVELS.find((m) => m.value === form.medication_level)?.description}
          </p>
        </div>
      </div>

      <div>
        <label className={label}>Do you deliver complex care?</label>
        <div className="flex gap-2 max-w-md">
          {[{ v: true, l: "Yes — clinical/complex needs" }, { v: false, l: "No" }].map((o) => (
            <button key={String(o.v)} type="button" onClick={() => setForm((f) => ({ ...f, complex_care: o.v }))}
              className="text-xs px-3 py-2 rounded-lg font-medium flex-1"
              style={form.complex_care === o.v
                ? { backgroundColor: "#2E6FFF", color: "#fff" }
                : { backgroundColor: "#f1f5f9", color: "#475569" }}>
              {o.l}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-1">
          e.g. tracheostomy, PEG feeding, ventilation — adds clinical competency and escalation requirements to every policy
        </p>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button onClick={save} disabled={saving || !form.service_type || !form.regulator}
          className="btn-primary text-sm py-2.5 px-6">
          {saving ? "Saving…" : "Save Care Setting Profile"}
        </button>
        {saved && <span className="text-sm text-green-600 font-medium">✓ Saved — your policies are now tailored</span>}
      </div>
    </div>
  );
}
