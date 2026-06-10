"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";

// ─── Module catalogue (static — links to ziprohtraining.co.uk for enrolment) ──
type Module = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  level: "Foundation" | "Intermediate" | "Advanced";
  icon: string;
  color: string;
  mandatory: boolean;
  certificate: boolean;
  courseUrl: string;
};

const MODULES: Module[] = [
  {
    id: "lrn-001", title: "Safeguarding Adults — Foundation",
    description: "Types of abuse, reporting duties under the Care Act 2014, and the Making Safeguarding Personal approach.",
    category: "Safeguarding", duration: 45, level: "Foundation", icon: "🛡️", color: "#22c55e",
    mandatory: true, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-002", title: "Medication Administration",
    description: "The five rights of medication, MAR chart completion, self-administration, and managing errors.",
    category: "Medication", duration: 60, level: "Foundation", icon: "💊", color: "#2E6FFF",
    mandatory: true, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-003", title: "Infection Prevention & Control",
    description: "Hand hygiene, PPE selection, outbreak management, and UKHSA guidance for care settings.",
    category: "IPC", duration: 40, level: "Foundation", icon: "🦠", color: "#22c55e",
    mandatory: true, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-004", title: "Fire Safety Awareness",
    description: "Fire prevention, evacuation procedures, PEEP completion, and fire drill responsibilities.",
    category: "Health & Safety", duration: 30, level: "Foundation", icon: "🔥", color: "#ef4444",
    mandatory: true, certificate: false, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-005", title: "Mental Capacity Act & DoLS",
    description: "The five principles of the MCA, capacity assessments, best interests decisions, and Deprivation of Liberty Safeguards.",
    category: "Legislation", duration: 75, level: "Intermediate", icon: "⚖️", color: "#8b5cf6",
    mandatory: true, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-006", title: "Moving & Handling",
    description: "Safe moving and handling techniques, hoist operation, and TILE risk assessment framework.",
    category: "Health & Safety", duration: 50, level: "Foundation", icon: "🏋️", color: "#f59e0b",
    mandatory: true, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-007", title: "Dementia Care Excellence",
    description: "Person-centred approaches to dementia care, communication strategies, and therapeutic activities.",
    category: "Clinical", duration: 90, level: "Advanced", icon: "🧠", color: "#ec4899",
    mandatory: false, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-008", title: "End of Life Care",
    description: "Advance care planning, DNACPR, symptom management, and supporting families through bereavement.",
    category: "Clinical", duration: 80, level: "Advanced", icon: "🕊️", color: "#6b7280",
    mandatory: false, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-009", title: "Leadership in Care",
    description: "For managers: supervision, appraisal, team culture, and governance responsibilities.",
    category: "Management", duration: 120, level: "Advanced", icon: "🏢", color: "#8b5cf6",
    mandatory: false, certificate: true, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-010", title: "Dignity in Care",
    description: "The 10 dignity standards, promoting privacy and choice, and challenging poor practice.",
    category: "Person-Centred", duration: 35, level: "Foundation", icon: "💙", color: "#ec4899",
    mandatory: false, certificate: false, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-011", title: "GDPR & Confidentiality in Care",
    description: "Lawful bases for processing care data, subject access requests, and information governance.",
    category: "Legal", duration: 45, level: "Intermediate", icon: "🔒", color: "#374151",
    mandatory: false, certificate: false, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
  {
    id: "lrn-012", title: "Nutrition & Hydration",
    description: "MUST screening, recognising malnutrition, mealtime support, and texture-modified diets (IDDSI).",
    category: "Clinical", duration: 55, level: "Intermediate", icon: "🍽️", color: "#22c55e",
    mandatory: false, certificate: false, courseUrl: "https://ziprohtraining.co.uk/courses/",
  },
];

const CATEGORIES = ["All", "Safeguarding", "Medication", "IPC", "Health & Safety", "Clinical", "Legislation", "Management", "Legal", "Person-Centred"];

// ─── Supabase row type ────────────────────────────────────────────────────────
type CompletionRow = {
  id: string;
  module_id: string | null;
  training_name: string;
  provider: string;
  completed_at: string;
  certificate_ref: string | null;
  notes: string | null;
  created_at: string;
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LearningPage() {
  const [loading, setLoading]         = useState(true);
  const [completions, setCompletions] = useState<CompletionRow[]>([]);
  const [view, setView]               = useState<"catalogue" | "log">("catalogue");
  const [catFilter, setCatFilter]     = useState("All");
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  // Log completion modal state
  const [showLog, setShowLog]         = useState(false);
  const [logModuleId, setLogModuleId] = useState<string | null>(null); // prefilled from module
  const [logName, setLogName]         = useState("");
  const [logProvider, setLogProvider] = useState("Ziproh Training");
  const [logDate, setLogDate]         = useState(new Date().toISOString().slice(0, 10));
  const [logCertRef, setLogCertRef]   = useState("");
  const [logNotes, setLogNotes]       = useState("");
  const [saving, setSaving]           = useState(false);
  const [saveError, setSaveError]     = useState("");
  const [certLoading, setCertLoading] = useState(false);

  // Load completions
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }
      const { data } = await supabase
        .from("training_completions")
        .select("*")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false });
      if (data) setCompletions(data as CompletionRow[]);
      setLoading(false);
    })();
  }, []);

  const completedIds = new Set(completions.filter((c) => c.module_id).map((c) => c.module_id as string));
  const mandatoryModules = MODULES.filter((m) => m.mandatory);
  const mandatoryDone    = mandatoryModules.filter((m) => completedIds.has(m.id)).length;

  // Open log modal, optionally prefilled for a module
  function openLogModal(module?: Module) {
    if (module) {
      setLogModuleId(module.id);
      setLogName(module.title);
      setLogProvider("Ziproh Training");
    } else {
      setLogModuleId(null);
      setLogName("");
      setLogProvider("");
    }
    setLogDate(new Date().toISOString().slice(0, 10));
    setLogCertRef("");
    setLogNotes("");
    setSaveError("");
    setShowLog(true);
  }

  async function saveCompletion() {
    if (!logName.trim() || !logProvider.trim() || !logDate) return;
    setSaving(true);
    setSaveError("");

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSaving(false); return; }

    const { data, error } = await supabase
      .from("training_completions")
      .insert({
        user_id: user.id,
        module_id: logModuleId || null,
        training_name: logName.trim(),
        provider: logProvider.trim(),
        completed_at: logDate,
        certificate_ref: logCertRef.trim() || null,
        notes: logNotes.trim() || null,
      })
      .select()
      .single();

    if (error) {
      setSaveError("Could not save. Please try again.");
      setSaving(false);
      return;
    }
    if (data) setCompletions((prev) => [data as CompletionRow, ...prev]);
    setShowLog(false);
    setSaving(false);

    // If we were on the module detail, go back to show ✓ Done badge
    // (activeModule state is still set — re-render picks up new completedIds)
  }

  async function downloadCertificate(moduleId: string, title: string) {
    setCertLoading(true);
    try {
      const res = await fetch(`/api/certificate/${moduleId}`);
      if (!res.ok) throw new Error("Failed to generate certificate");
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = `ziproh-certificate-${title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("Could not generate certificate. Please try again.");
    } finally {
      setCertLoading(false);
    }
  }

  async function deleteCompletion(id: string) {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("training_completions").delete().eq("id", id).eq("user_id", user.id);
    setCompletions((prev) => prev.filter((c) => c.id !== id));
  }

  const filtered = MODULES.filter((m) => {
    if (catFilter !== "All" && m.category !== catFilter) return false;
    return true;
  });

  // ── Log modal ────────────────────────────────────────────────────────────────
  const LogModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="font-bold text-gray-900 text-lg mb-1">Log Training Completion</h2>
        <p className="text-xs text-gray-500 mb-5">This will be recorded in your CPD training log.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Training Name *</label>
            <input value={logName} onChange={(e) => setLogName(e.target.value)}
              placeholder="e.g. Safeguarding Adults — Foundation"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Training Provider *</label>
            <input value={logProvider} onChange={(e) => setLogProvider(e.target.value)}
              placeholder="e.g. Ziproh Training, Skills for Care"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Completion Date *</label>
              <input type="date" value={logDate} onChange={(e) => setLogDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Certificate Ref</label>
              <input value={logCertRef} onChange={(e) => setLogCertRef(e.target.value)}
                placeholder="Optional"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
            <textarea value={logNotes} onChange={(e) => setLogNotes(e.target.value)}
              placeholder="Any additional notes…"
              rows={2}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 resize-none" />
          </div>
        </div>

        {saveError && <p className="text-xs text-red-600 mt-3 bg-red-50 px-3 py-2 rounded-lg">{saveError}</p>}

        <div className="flex gap-3 mt-5">
          <button onClick={() => setShowLog(false)} className="btn-secondary flex-1 text-sm">Cancel</button>
          <button
            onClick={saveCompletion}
            disabled={!logName.trim() || !logProvider.trim() || !logDate || saving}
            className="btn-primary flex-1 text-sm"
            style={{ opacity: !logName.trim() || !logProvider.trim() || !logDate || saving ? 0.6 : 1 }}>
            {saving ? "Saving…" : "Save Completion ✓"}
          </button>
        </div>
      </div>
    </div>
  );

  // ── Module detail view ───────────────────────────────────────────────────────
  if (activeModule) {
    const isDone = completedIds.has(activeModule.id);
    const moduleCompletions = completions.filter((c) => c.module_id === activeModule.id);

    return (
      <DashboardLayout>
        {showLog && <LogModal />}
        <div className="max-w-3xl">
          <button onClick={() => setActiveModule(null)} className="text-sm text-gray-400 hover:text-gray-600 mb-4">
            ← Learning Centre
          </button>

          <div className="card p-6 mb-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: activeModule.color + "20" }}>
                {activeModule.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {activeModule.mandatory && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Mandatory</span>
                  )}
                  {isDone && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-600">✓ Completed</span>
                  )}
                  <span className="text-xs text-gray-400">{activeModule.level} · {activeModule.category}</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-1">{activeModule.title}</h1>
                <p className="text-sm text-gray-500 leading-relaxed">{activeModule.description}</p>
              </div>
            </div>

            <div className="flex gap-4 text-xs text-gray-400">
              <span>⏱ ~{activeModule.duration} mins</span>
              {activeModule.certificate && <span>🎓 Certificate on completion</span>}
            </div>
          </div>

          {/* Enrol or log */}
          <div className="card p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Take this course</h3>
            <p className="text-xs text-gray-500 mb-4">
              This module is available on the Ziproh Training website. Once you have completed it, come back here to log your completion for your CPD record.
            </p>
            <div className="flex gap-3">
              <a href={activeModule.courseUrl} target="_blank" rel="noopener noreferrer"
                className="btn-primary flex-1 text-sm text-center no-underline">
                Enrol on Training Site →
              </a>
              <button onClick={() => openLogModal(activeModule)} className="btn-secondary flex-1 text-sm">
                ✓ Log as Completed
              </button>
            </div>
          </div>

          {/* Download certificate — only when completed and module awards a cert */}
          {isDone && activeModule.certificate && (
            <div className="card p-5 mb-4" style={{ background: "linear-gradient(135deg, #2E6FFF08, #22c55e08)", border: "1px solid #22c55e30" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-lg flex-shrink-0">🎓</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Your Certificate is Ready</p>
                  <p className="text-xs text-gray-500">Download your personalised certificate of completion for your CPD portfolio.</p>
                </div>
                <button
                  onClick={() => downloadCertificate(activeModule.id, activeModule.title)}
                  disabled={certLoading}
                  className="btn-primary text-sm flex items-center gap-2 flex-shrink-0"
                  style={{ opacity: certLoading ? 0.7 : 1 }}>
                  {certLoading ? "Generating…" : "⬇ Download Certificate"}
                </button>
              </div>
            </div>
          )}

          {/* Completion history for this module */}
          {moduleCompletions.length > 0 && (
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Completion History</h3>
              <div className="space-y-2">
                {moduleCompletions.map((c) => (
                  <div key={c.id} className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                    <span className="text-green-600 text-sm">✓</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-green-900">{c.provider}</p>
                      <p className="text-xs text-green-700">
                        Completed {new Date(c.completed_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                        {c.certificate_ref && ` · Cert: ${c.certificate_ref}`}
                      </p>
                    </div>
                    <button onClick={() => deleteCompletion(c.id)}
                      className="text-xs text-red-400 hover:text-red-600">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    );
  }

  // ── List view ────────────────────────────────────────────────────────────────
  return (
    <DashboardLayout>
      {showLog && <LogModal />}
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Learning Centre</h1>
            <p className="text-sm text-gray-500 mt-0.5">Training catalogue and CPD record for care professionals</p>
          </div>
          <button onClick={() => openLogModal()} className="btn-primary flex items-center gap-2 text-sm">
            <span>＋</span> Log Training
          </button>
        </div>

        {/* Progress banner */}
        <div className="card p-5 mb-6" style={{ background: "linear-gradient(135deg, #2E6FFF08, #8b5cf608)", border: "1px solid #2E6FFF20" }}>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold" style={{ color: "#2E6FFF" }}>
                {loading ? "—" : completions.length}
              </div>
              <div className="text-xs text-gray-500">Total completions logged</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {loading ? "—" : mandatoryDone}
              </div>
              <div className="text-xs text-gray-500">
                of {mandatoryModules.length} mandatory completed
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {loading ? "—" : completions.filter((c) => new Date(c.completed_at).getFullYear() === new Date().getFullYear()).length}
              </div>
              <div className="text-xs text-gray-500">Completions this year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600">
                {loading ? "—" : mandatoryModules.length - mandatoryDone}
              </div>
              <div className="text-xs text-gray-500 text-amber-700">Mandatory outstanding</div>
            </div>
          </div>
          {!loading && mandatoryDone < mandatoryModules.length && (
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 mt-4 inline-block">
              ⚠️ {mandatoryModules.length - mandatoryDone} mandatory module(s) not yet logged as complete
            </p>
          )}
        </div>

        {/* View toggle */}
        <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-xl w-fit">
          {(["catalogue", "log"] as const).map((v) => (
            <button key={v} onClick={() => setView(v)}
              className="px-5 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: view === v ? "white" : "transparent",
                color: view === v ? "#2E6FFF" : "#6b7280",
                boxShadow: view === v ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}>
              {v === "catalogue" ? "Course Catalogue" : `My Training Log (${completions.length})`}
            </button>
          ))}
        </div>

        {/* ── Course catalogue ── */}
        {view === "catalogue" && (
          <>
            <div className="flex gap-3 mb-5 items-center">
              <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <span className="text-xs text-gray-400">{filtered.length} modules</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {filtered.map((module) => {
                const isDone = completedIds.has(module.id);
                return (
                  <div key={module.id}
                    className="card p-5 cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5"
                    onClick={() => setActiveModule(module)}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ backgroundColor: module.color + "20" }}>
                        {module.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {module.mandatory && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Required</span>
                        )}
                        {isDone && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-600">✓ Done</span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">{module.title}</h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">{module.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{module.duration} mins</span>
                      {module.certificate && <span>🎓 Cert</span>}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: module.color + "15", color: module.color }}>
                        {module.level}
                      </span>
                      <span className="ml-auto text-xs font-semibold" style={{ color: "#2E6FFF" }}>
                        {isDone ? "✓ Logged" : "View →"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── Training log ── */}
        {view === "log" && (
          <>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => <div key={i} className="h-16 rounded-xl bg-gray-100 animate-pulse" />)}
              </div>
            ) : completions.length === 0 ? (
              <div className="card text-center py-14">
                <div className="text-4xl mb-3">🎓</div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">No training logged yet</h2>
                <p className="text-sm text-gray-500 mb-5 max-w-sm mx-auto">
                  Log your completed training to build a CPD record. This can be used as evidence during CQC inspections.
                </p>
                <button onClick={() => openLogModal()} className="btn-primary text-sm">
                  ＋ Log Your First Training
                </button>
              </div>
            ) : (
              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {["Training", "Provider", "Completed", "Certificate Ref", ""].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {completions.map((c) => {
                      const mod = MODULES.find((m) => m.id === c.module_id);
                      return (
                        <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {mod && <span>{mod.icon}</span>}
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{c.training_name}</div>
                                {mod?.mandatory && (
                                  <span className="text-xs text-red-500">Mandatory</span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{c.provider}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {new Date(c.completed_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-400">{c.certificate_ref || "—"}</td>
                          <td className="px-4 py-3">
                            <button onClick={() => deleteCompletion(c.id)}
                              className="text-xs text-red-400 hover:text-red-600 transition-colors">
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
