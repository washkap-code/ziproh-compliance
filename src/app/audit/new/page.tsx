"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

type Answer = "yes" | "no" | "partial" | "na" | null;

type Question = {
  id: string;
  section: string;
  text: string;
  guidance: string;
};

const MEDICATION_AUDIT: Question[] = [
  { id: "m1", section: "Storage", text: "Medication is stored securely and at the correct temperature", guidance: "Check locked storage, fridge temp logs (2-8°C), and CD cabinet security." },
  { id: "m2", section: "Storage", text: "Controlled drugs are stored separately and records are up to date", guidance: "CD register should be completed at each administration with no gaps." },
  { id: "m3", section: "Storage", text: "Medication expiry dates are checked and out-of-date stock is removed", guidance: "Check all in-date; disposal records completed for any expired stock." },
  { id: "m4", section: "Administration", text: "MAR charts are completed accurately and contemporaneously", guidance: "No blank spaces without valid code. Signatures match staff list." },
  { id: "m5", section: "Administration", text: "Staff administering medication hold current competency sign-off", guidance: "Check training records match staff on current rota." },
  { id: "m6", section: "Administration", text: "PRN medication protocols are in place and followed", guidance: "Each PRN med has a written protocol; outcomes are recorded after administration." },
  { id: "m7", section: "Ordering & Supply", text: "Medication ordering process follows the policy with no gaps in supply", guidance: "Review last 3 months of ordering records for any missed doses due to supply issues." },
  { id: "m8", section: "Ordering & Supply", text: "Prescriptions are current and match the MAR chart entries", guidance: "GP authorised changes should be reflected within 24 hours on MAR." },
  { id: "m9", section: "Disposal", text: "Medication disposal is documented and carried out by authorised staff", guidance: "Witness signatures required; DOOP service or pharmacy returns evidenced." },
  { id: "m10", section: "Self-Administration", text: "Risk assessments are completed for all self-administering service users", guidance: "Annual review minimum or following any change in condition." },
];

const IPC_AUDIT: Question[] = [
  { id: "i1", section: "Hand Hygiene", text: "Hand hygiene resources (soap, sanitiser, paper towels) are available at all sinks and entry points", guidance: "Walk audit of all clinical areas and entry points." },
  { id: "i2", section: "Hand Hygiene", text: "Staff demonstrate correct 6-step hand hygiene technique", guidance: "Observed or last competency assessment within 12 months." },
  { id: "i3", section: "PPE", text: "Appropriate PPE is available and in date (gloves, aprons, masks)", guidance: "Check stock levels; confirm disposal route for clinical waste." },
  { id: "i4", section: "PPE", text: "Staff are observed wearing correct PPE for care activities", guidance: "Spot check at least 3 care tasks." },
  { id: "i5", section: "Environment", text: "High-touch surfaces are cleaned with correct product and frequency", guidance: "Check cleaning schedules; evidence of enhanced cleaning where applicable." },
  { id: "i6", section: "Environment", text: "Clinical waste is segregated and disposed of correctly", guidance: "Yellow bag provision; collection frequency documented." },
  { id: "i7", section: "Outbreaks", text: "Outbreak protocol is accessible and staff know the escalation process", guidance: "Can key staff locate the outbreak plan and identify who to contact?" },
  { id: "i8", section: "Laundry", text: "Laundry processes prevent cross-contamination", guidance: "Separate dirty and clean linen routes; thermal disinfection evidence." },
];

const GOVERNANCE_AUDIT: Question[] = [
  { id: "g1", section: "Quality Monitoring", text: "Regular quality audits are conducted and findings acted upon", guidance: "Audit schedule in place; action plans with named owners and timescales." },
  { id: "g2", section: "Quality Monitoring", text: "Learning from incidents is shared with the team", guidance: "Evidence of team meetings, safety bulletins or newsletters." },
  { id: "g3", section: "Staffing", text: "Staffing levels meet the needs of service users on all shifts", guidance: "Review dependency assessments and rota for last 4 weeks." },
  { id: "g4", section: "Staffing", text: "All staff have a current DBS check and right to work evidence on file", guidance: "Spot-check 5 staff files." },
  { id: "g5", section: "Training", text: "Mandatory training compliance exceeds 80% for all core topics", guidance: "Pull training matrix; check fire, safeguarding, moving & handling, MCA." },
  { id: "g6", section: "Records", text: "Care records are accurate, contemporaneous and stored securely", guidance: "Sample 3 service user files for completeness and currency." },
  { id: "g7", section: "Complaints", text: "Complaints are logged, responded to within timescale and learning embedded", guidance: "Check complaints register; response letters within 28 days." },
  { id: "g8", section: "Notifications", text: "Statutory notifications to CQC are submitted within required timescales", guidance: "CQC Provider Portal — verify all reportable events notified." },
];

const TEMPLATE_MAP: Record<string, { title: string; questions: Question[] }> = {
  "tmpl-safe": { title: "Safe — Medication & IPC Audit", questions: [...MEDICATION_AUDIT, ...IPC_AUDIT] },
  "tmpl-wellled": { title: "Well-Led — Governance Audit", questions: GOVERNANCE_AUDIT },
  "tmpl-mock-cqc": { title: "Mock CQC Inspection", questions: [...MEDICATION_AUDIT, ...IPC_AUDIT, ...GOVERNANCE_AUDIT] },
};

const DEFAULT_AUDIT = { title: "Medication Management Audit", questions: MEDICATION_AUDIT };

function groupBySection(questions: Question[]) {
  return questions.reduce<Record<string, Question[]>>((acc, q) => {
    if (!acc[q.section]) acc[q.section] = [];
    acc[q.section].push(q);
    return acc;
  }, {});
}

function AuditForm() {
  const params = useSearchParams();
  const templateId = params.get("template") ?? "";
  const template = TEMPLATE_MAP[templateId] ?? DEFAULT_AUDIT;

  const [title, setTitle] = useState(template.title);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.values(answers).filter((a) => a !== null).length;
  const total = template.questions.length;
  const progress = Math.round((answered / total) * 100);

  const scored = Object.entries(answers).filter(([, a]) => a !== null && a !== "na");
  const yesCount = scored.filter(([, a]) => a === "yes").length;
  const partialCount = scored.filter(([, a]) => a === "partial").length;
  const score = scored.length > 0
    ? Math.round(((yesCount + partialCount * 0.5) / scored.length) * 100)
    : 0;

  const grouped = groupBySection(template.questions);

  function setAnswer(id: string, val: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  }

  function answerButton(id: string, val: Answer, label: string, colour: string, bg: string) {
    const active = answers[id] === val;
    return (
      <button
        onClick={() => setAnswer(id, active ? null : val)}
        className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border"
        style={{
          backgroundColor: active ? bg : "white",
          color: active ? colour : "#6b7280",
          borderColor: active ? colour : "#e5e7eb",
        }}
      >
        {label}
      </button>
    );
  }

  if (submitted) {
    const scoreCol = score >= 90 ? "#22c55e" : score >= 75 ? "#2E6FFF" : score >= 60 ? "#f59e0b" : "#ef4444";
    const label = score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 60 ? "Requires Improvement" : "Inadequate";
    const noAnswers = Object.entries(answers).filter(([, a]) => a === "no");

    return (
      <DashboardLayout>
        <div className="max-w-3xl">
          <div className="card p-8 text-center mb-6">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
            <p className="text-gray-500 mb-6">Audit completed · {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            <div className="text-6xl font-bold mb-2" style={{ color: scoreCol }}>{score}%</div>
            <div className="text-lg font-semibold mb-4" style={{ color: scoreCol }}>{label}</div>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <span>✅ {yesCount} Yes</span>
              <span>⚠️ {partialCount} Partial</span>
              <span>❌ {Object.values(answers).filter((a) => a === "no").length} No</span>
              <span>➖ {Object.values(answers).filter((a) => a === "na").length} N/A</span>
            </div>
          </div>

          {noAnswers.length > 0 && (
            <div className="card p-6 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">⚠️ Action Required ({noAnswers.length} items)</h3>
              <div className="space-y-2">
                {noAnswers.map(([id]) => {
                  const q = template.questions.find((q) => q.id === id);
                  return q ? (
                    <div key={id} className="flex gap-3 items-start bg-red-50 rounded-lg p-3">
                      <span className="text-red-500 mt-0.5">❌</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{q.text}</p>
                        {notes[id] && <p className="text-xs text-gray-500 mt-0.5">{notes[id]}</p>}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Link href="/audit" className="btn-secondary flex-1 text-center">← Back to Audits</Link>
            <button
              onClick={() => window.print()}
              className="btn-primary flex-1"
            >
              Print / Download Report
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/audit" className="text-gray-400 hover:text-gray-600">← Audits</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-gray-600">New Audit</span>
        </div>

        <div className="card p-5 mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Audit Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        </div>

        {/* Progress */}
        <div className="card p-4 mb-5 flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>{answered} of {total} answered</span>
              <span>{progress}% complete</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all"
                style={{ width: `${progress}%`, backgroundColor: "#2E6FFF" }} />
            </div>
          </div>
          {answered === total && (
            <div className="text-sm font-semibold" style={{ color: "#2E6FFF" }}>Score: {score}%</div>
          )}
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([section, questions]) => (
            <div key={section}>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#2E6FFF" }}></span>
                {section}
              </h3>
              <div className="space-y-3">
                {questions.map((q, idx) => (
                  <div key={q.id} className={`card p-4 ${answers[q.id] === "no" ? "border-l-4 border-red-400" : answers[q.id] === "yes" ? "border-l-4 border-green-400" : "border-l-4 border-transparent"}`}>
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-gray-400 mt-0.5 w-5 flex-shrink-0">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{q.text}</p>
                        <p className="text-xs text-gray-400 mb-3">{q.guidance}</p>
                        <div className="flex gap-2 flex-wrap">
                          {answerButton(q.id, "yes", "✓ Yes", "#16a34a", "#dcfce7")}
                          {answerButton(q.id, "partial", "~ Partial", "#d97706", "#fef3c7")}
                          {answerButton(q.id, "no", "✗ No", "#dc2626", "#fee2e2")}
                          {answerButton(q.id, "na", "N/A", "#6b7280", "#f3f4f6")}
                        </div>
                        {(answers[q.id] === "no" || answers[q.id] === "partial") && (
                          <textarea
                            placeholder="Add notes or action required..."
                            value={notes[q.id] ?? ""}
                            onChange={(e) => setNotes((prev) => ({ ...prev, [q.id]: e.target.value }))}
                            className="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 resize-none"
                            rows={2}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 py-4 mt-6 flex gap-3">
          <Link href="/audit" className="btn-secondary flex-1 text-center">Cancel</Link>
          <button
            onClick={() => setSubmitted(true)}
            disabled={answered < total * 0.5}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{
              backgroundColor: answered >= total * 0.5 ? "#2E6FFF" : "#cbd5e1",
              cursor: answered >= total * 0.5 ? "pointer" : "not-allowed",
            }}
          >
            Complete Audit ({answered}/{total} answered)
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function NewAuditPage() {
  return (
    <Suspense fallback={<DashboardLayout><div className="p-8 text-gray-500">Loading audit...</div></DashboardLayout>}>
      <AuditForm />
    </Suspense>
  );
}
