"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

type Module = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number; // minutes
  lessons: number;
  level: "Foundation" | "Intermediate" | "Advanced";
  icon: string;
  color: string;
  completed: boolean;
  progress: number; // 0-100
  mandatory: boolean;
  certificate: boolean;
};

const MODULES: Module[] = [
  // Mandatory
  {
    id: "lrn-001",
    title: "Safeguarding Adults — Foundation",
    description: "Understanding types of abuse, your reporting duties under the Care Act 2014, and Making Safeguarding Personal.",
    category: "Safeguarding",
    duration: 45,
    lessons: 5,
    level: "Foundation",
    icon: "🛡️",
    color: "#22c55e",
    completed: true,
    progress: 100,
    mandatory: true,
    certificate: true,
  },
  {
    id: "lrn-002",
    title: "Medication Administration",
    description: "The five rights of medication administration, MAR chart completion, and managing medication errors.",
    category: "Medication",
    duration: 60,
    lessons: 6,
    level: "Foundation",
    icon: "💊",
    color: "#2E6FFF",
    completed: true,
    progress: 100,
    mandatory: true,
    certificate: true,
  },
  {
    id: "lrn-003",
    title: "Infection Prevention & Control",
    description: "Hand hygiene, PPE selection, outbreak management, and UKHSA guidance for care settings.",
    category: "IPC",
    duration: 40,
    lessons: 4,
    level: "Foundation",
    icon: "🦠",
    color: "#22c55e",
    completed: false,
    progress: 60,
    mandatory: true,
    certificate: true,
  },
  {
    id: "lrn-004",
    title: "Fire Safety Awareness",
    description: "Fire prevention, evacuation procedures, PEEP completion, and fire drill responsibilities.",
    category: "Health & Safety",
    duration: 30,
    lessons: 3,
    level: "Foundation",
    icon: "🔥",
    color: "#ef4444",
    completed: false,
    progress: 0,
    mandatory: true,
    certificate: false,
  },
  {
    id: "lrn-005",
    title: "Mental Capacity Act & DoLS",
    description: "The five principles of the MCA, capacity assessments, best interests decisions and Deprivation of Liberty Safeguards.",
    category: "Legislation",
    duration: 75,
    lessons: 7,
    level: "Intermediate",
    icon: "⚖️",
    color: "#8b5cf6",
    completed: false,
    progress: 30,
    mandatory: true,
    certificate: true,
  },
  {
    id: "lrn-006",
    title: "Moving & Handling",
    description: "Safe moving and handling techniques, hoist operation, TILE risk assessment framework.",
    category: "Health & Safety",
    duration: 50,
    lessons: 5,
    level: "Foundation",
    icon: "🏋️",
    color: "#f59e0b",
    completed: false,
    progress: 0,
    mandatory: true,
    certificate: true,
  },
  // Optional
  {
    id: "lrn-007",
    title: "Dementia Care Excellence",
    description: "Advanced person-centred approaches to dementia care, communication strategies and therapeutic activities.",
    category: "Clinical",
    duration: 90,
    lessons: 8,
    level: "Advanced",
    icon: "🧠",
    color: "#ec4899",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: true,
  },
  {
    id: "lrn-008",
    title: "End of Life Care",
    description: "Advance care planning, DNACPR, symptom management, and supporting families through bereavement.",
    category: "Clinical",
    duration: 80,
    lessons: 7,
    level: "Advanced",
    icon: "🕊️",
    color: "#6b7280",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: true,
  },
  {
    id: "lrn-009",
    title: "Leadership in Care",
    description: "For managers and team leaders: supervision, appraisal, team culture and governance responsibilities.",
    category: "Management",
    duration: 120,
    lessons: 10,
    level: "Advanced",
    icon: "🏢",
    color: "#8b5cf6",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: true,
  },
  {
    id: "lrn-010",
    title: "Dignity in Care",
    description: "The 10 dignity standards, promoting privacy and choice, and challenging poor practice.",
    category: "Person-Centred",
    duration: 35,
    lessons: 4,
    level: "Foundation",
    icon: "💙",
    color: "#ec4899",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: false,
  },
  {
    id: "lrn-011",
    title: "GDPR & Confidentiality in Care",
    description: "Lawful bases for processing care data, subject access requests, and information governance.",
    category: "Legal",
    duration: 45,
    lessons: 5,
    level: "Intermediate",
    icon: "🔒",
    color: "#374151",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: false,
  },
  {
    id: "lrn-012",
    title: "Nutrition & Hydration",
    description: "MUST screening, recognising malnutrition, mealtime support and texture-modified diets (IDDSI).",
    category: "Clinical",
    duration: 55,
    lessons: 5,
    level: "Intermediate",
    icon: "🍽️",
    color: "#22c55e",
    completed: false,
    progress: 0,
    mandatory: false,
    certificate: false,
  },
];

const CATEGORIES = ["All", "Safeguarding", "Medication", "IPC", "Health & Safety", "Clinical", "Legislation", "Management", "Legal", "Person-Centred"];
const LEVELS = ["All Levels", "Foundation", "Intermediate", "Advanced"];

export default function LearningPage() {
  const [catFilter, setCatFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [view, setView] = useState<"all" | "mandatory" | "optional">("all");
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const mandatory = MODULES.filter((m) => m.mandatory);
  const mandatoryDone = mandatory.filter((m) => m.completed).length;
  const totalDone = MODULES.filter((m) => m.completed).length;
  const overallProgress = Math.round((MODULES.reduce((a, m) => a + m.progress, 0) / (MODULES.length * 100)) * 100);

  const filtered = MODULES.filter((m) => {
    if (view === "mandatory" && !m.mandatory) return false;
    if (view === "optional" && m.mandatory) return false;
    if (catFilter !== "All" && m.category !== catFilter) return false;
    if (levelFilter !== "All Levels" && m.level !== levelFilter) return false;
    return true;
  });

  if (activeModule) {
    const lessons = Array.from({ length: activeModule.lessons }, (_, i) => ({
      num: i + 1,
      title: ["Introduction & Overview", "Key Concepts", "Practical Application", "Case Studies", "Legislation & Standards", "Assessment Preparation", "Knowledge Check", "Summary & Next Steps", "Further Resources", "Final Assessment"][i] ?? `Lesson ${i + 1}`,
      done: i < Math.floor((activeModule.progress / 100) * activeModule.lessons),
    }));

    return (
      <DashboardLayout>
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
                  <span className="text-xs text-gray-400">{activeModule.level} · {activeModule.category}</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-1">{activeModule.title}</h1>
                <p className="text-sm text-gray-500">{activeModule.description}</p>
              </div>
            </div>

            <div className="flex gap-4 text-xs text-gray-400 mb-4">
              <span>📚 {activeModule.lessons} lessons</span>
              <span>⏱ ~{activeModule.duration} mins</span>
              {activeModule.certificate && <span>🎓 Certificate on completion</span>}
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Progress</span><span>{activeModule.progress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all"
                  style={{ width: `${activeModule.progress}%`, backgroundColor: activeModule.color }} />
              </div>
            </div>
          </div>

          <div className="card p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div key={lesson.num}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${lesson.done ? "border-green-100 bg-green-50" : "border-gray-100 hover:border-blue-200 hover:bg-blue-50"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${lesson.done ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {lesson.done ? "✓" : lesson.num}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${lesson.done ? "text-green-800" : "text-gray-700"}`}>
                      Lesson {lesson.num}: {lesson.title}
                    </p>
                  </div>
                  {!lesson.done && <span className="text-xs text-blue-500 font-medium">{lesson.num === Math.floor((activeModule.progress / 100) * activeModule.lessons) + 1 ? "Continue →" : lesson.num > Math.floor((activeModule.progress / 100) * activeModule.lessons) + 1 ? "Locked" : ""}</span>}
                </div>
              ))}
            </div>
          </div>

          <button className="btn-primary w-full py-3 text-base">
            {activeModule.progress === 0 ? "Start Module →" : activeModule.progress === 100 ? "Review Module ✓" : "Continue Learning →"}
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Learning Centre</h1>
            <p className="text-sm text-gray-500 mt-0.5">Structured training modules for care professionals</p>
          </div>
        </div>

        {/* Progress banner */}
        <div className="card p-5 mb-6" style={{ background: "linear-gradient(135deg, #2E6FFF08, #8b5cf608)", border: "1px solid #2E6FFF20" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-bold text-gray-900">Your Learning Progress</h2>
              <p className="text-sm text-gray-500">
                {mandatoryDone}/{mandatory.length} mandatory · {totalDone}/{MODULES.length} total completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold" style={{ color: "#2E6FFF" }}>{overallProgress}%</div>
              <div className="text-xs text-gray-400">Overall progress</div>
            </div>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden border border-gray-100">
            <div className="h-full rounded-full transition-all"
              style={{ width: `${overallProgress}%`, background: "linear-gradient(90deg, #2E6FFF, #8b5cf6)" }} />
          </div>
          {mandatoryDone < mandatory.length && (
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 mt-3 inline-block">
              ⚠️ {mandatory.length - mandatoryDone} mandatory module(s) not yet completed
            </p>
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl w-fit">
          {(["all", "mandatory", "optional"] as const).map((v) => (
            <button key={v} onClick={() => setView(v)}
              className="px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all"
              style={{
                backgroundColor: view === v ? "white" : "transparent",
                color: view === v ? "#2E6FFF" : "#6b7280",
                boxShadow: view === v ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}>
              {v === "all" ? "All Modules" : v === "mandatory" ? `Mandatory (${mandatory.length})` : "Optional"}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mb-5 flex-wrap">
          <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
            {LEVELS.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((module) => (
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
                  {module.completed && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-600">✓ Done</span>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">{module.title}</h3>
              <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">{module.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span>{module.lessons} lessons</span>
                <span>{module.duration} mins</span>
                {module.certificate && <span>🎓 Cert</span>}
              </div>

              {module.progress > 0 && !module.completed && (
                <div className="mb-3">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{ width: `${module.progress}%`, backgroundColor: module.color }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{module.progress}% complete</p>
                </div>
              )}

              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: module.color + "15", color: module.color }}>
                  {module.level}
                </span>
                <span className="ml-auto text-xs font-semibold" style={{ color: "#2E6FFF" }}>
                  {module.completed ? "Review" : module.progress > 0 ? "Continue →" : "Start →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
