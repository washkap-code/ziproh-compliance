"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";

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

const EFFECTIVE_AUDIT: Question[] = [
  { id: "e1", section: "Care Planning", text: "Care plans are person-centred, up to date and reflect current assessed needs", guidance: "Sample 3 care plans. Check review date, named nurse/key worker signature, and alignment with risk assessments." },
  { id: "e2", section: "Care Planning", text: "Care plans include goals and outcomes that are reviewed at least 3-monthly", guidance: "Goals should be SMART; outcome progress recorded at each review." },
  { id: "e3", section: "Care Planning", text: "Health action plans are in place for service users with a LD or autism diagnosis", guidance: "Required under the NHS mandate; should align with annual health checks." },
  { id: "e4", section: "Mental Capacity & Consent", text: "Mental capacity assessments are decision-specific and documented", guidance: "Capacity cannot be assumed absent; check assessments are time- and decision-specific per MCA s2." },
  { id: "e5", section: "Mental Capacity & Consent", text: "Best interest decisions are recorded with the involvement of relevant parties", guidance: "Check best interest meetings include service user, family (where appropriate), and relevant professionals." },
  { id: "e6", section: "Mental Capacity & Consent", text: "DoLS authorisations are in place where required and renewal timescales are tracked", guidance: "Unauthorised deprivation of liberty is unlawful post Cheshire West. Check dashboard for expiries." },
  { id: "e7", section: "Nutrition & Hydration", text: "Nutritional screening (e.g. MUST) is completed on admission and at regular intervals", guidance: "MUST score on file; care plan updated accordingly." },
  { id: "e8", section: "Nutrition & Hydration", text: "Food and fluid intake charts are completed for at-risk individuals", guidance: "Check that charts are completed contemporaneously; alerts escalated to GP when intake below threshold." },
  { id: "e9", section: "Nutrition & Hydration", text: "Mealtime experience supports dignity and appropriate assistance is provided", guidance: "Observe a mealtime or review records; seated upright, adequate time, assistance documented." },
  { id: "e10", section: "Clinical Effectiveness", text: "Pressure area care documentation and repositioning records are up to date", guidance: "Waterlow or Braden scores on file; turning charts completed with no unexplained gaps." },
  { id: "e11", section: "Clinical Effectiveness", text: "Falls risk assessments are reviewed following any fall and after 3 months", guidance: "Post-fall review within 24 hours; environment and equipment checks evidenced." },
  { id: "e12", section: "Clinical Effectiveness", text: "Wound care plans are in place with referrals to tissue viability where indicated", guidance: "SKIN bundle or equivalent; TISSUE referral pathway followed for Grade 3+." },
  { id: "e13", section: "Working with Others", text: "Staff work effectively with GPs, community nurses and other professionals", guidance: "Evidence of referrals, discharge summaries, and multidisciplinary team meeting attendance." },
  { id: "e14", section: "Working with Others", text: "Hospital passports or equivalent communication tools are available for all relevant service users", guidance: "Check that passports are accessible, updated, and travel with the service user to appointments." },
];

const CARING_AUDIT: Question[] = [
  { id: "c1", section: "Dignity & Respect", text: "Staff knock and wait before entering private rooms", guidance: "Observed or evidenced in spot checks and supervision notes." },
  { id: "c2", section: "Dignity & Respect", text: "Service users are addressed by their preferred name and pronouns", guidance: "Check care plans include communication preferences and preferred names." },
  { id: "c3", section: "Dignity & Respect", text: "Personal care is delivered privately and at the service user's preferred time", guidance: "Routine care schedules are person-led, not task-led; evidence of flexible approach." },
  { id: "c4", section: "Dignity & Respect", text: "Clothing and personal appearance reflect individual preference and identity", guidance: "Service users choose what to wear; cultural and religious preferences observed." },
  { id: "c5", section: "Compassionate Care", text: "End-of-life care plans (ADRT, ReSPECT, DNACPR) are in place and accessible", guidance: "Check all relevant service users have an up-to-date advance care plan; DNACPR in prominent place." },
  { id: "c6", section: "Compassionate Care", text: "Staff demonstrate empathy and understanding in observed interactions", guidance: "Observed care interactions; or recent feedback from service users and families." },
  { id: "c7", section: "Compassionate Care", text: "Emotional and psychological needs are assessed and met", guidance: "Wellbeing sections of care plans; activity participation; referrals to psychology or counselling where needed." },
  { id: "c8", section: "Involvement", text: "Service users are involved in planning their own care", guidance: "Evidence of service user signatures, preferences recorded, and involvement in reviews." },
  { id: "c9", section: "Involvement", text: "Family and friends are welcomed and kept informed (with consent)", guidance: "Visiting policy in place; communication logs with families; consent recorded." },
  { id: "c10", section: "Involvement", text: "Service user views and feedback are actively sought and acted upon", guidance: "Service user meetings, satisfaction surveys, or 'You said, we did' board." },
  { id: "c11", section: "Wellbeing & Social Needs", text: "Activity and occupation opportunities reflect individual interests and abilities", guidance: "Activity planner on display; attendance and preferences documented; specialist activities for those with dementia or LD." },
  { id: "c12", section: "Wellbeing & Social Needs", text: "Loneliness and social isolation are identified and mitigated", guidance: "Wellbeing flags in care plans; buddy system or volunteer programme in place." },
  { id: "c13", section: "Wellbeing & Social Needs", text: "Spiritual and cultural needs are respected and provided for", guidance: "Religious observance, dietary requirements, and cultural practices documented and delivered." },
];

const RESPONSIVE_AUDIT: Question[] = [
  { id: "r1", section: "Personalisation", text: "Service users have a named key worker or care coordinator", guidance: "Named key worker documented; service users can identify who this is." },
  { id: "r2", section: "Personalisation", text: "Service delivery is flexible to meet changing and individual needs", guidance: "Evidence of care plan amendments following service user requests; staff empowered to be flexible." },
  { id: "r3", section: "Personalisation", text: "Accessible information is provided in formats that meet individual needs", guidance: "Easy read, large print, translated materials, or BSL available as appropriate." },
  { id: "r4", section: "Complaints", text: "A complaints policy is in place, displayed, and explained to service users and families", guidance: "Policy is accessible; service users can articulate how to complain." },
  { id: "r5", section: "Complaints", text: "All formal complaints are logged and acknowledged within 3 working days", guidance: "Complaints register reviewed; acknowledgement letters on file within timescale." },
  { id: "r6", section: "Complaints", text: "Complaints are investigated and responded to within 28 days with learning embedded", guidance: "Response letters evidenced; learning from complaints shared in team meetings." },
  { id: "r7", section: "Concerns & Compliments", text: "Informal concerns are captured and resolved promptly", guidance: "Compliments and concerns log; evidence of same-day or next-day resolution attempts." },
  { id: "r8", section: "Concerns & Compliments", text: "Compliments are shared with staff and used positively", guidance: "Compliments board or newsletter; staff recognition process." },
  { id: "r9", section: "Equity & Access", text: "The service meets the Accessible Information Standard (AIS) for NHS/social care", guidance: "Service user communication needs flagged at assessment; AIS flags on records." },
  { id: "r10", section: "Equity & Access", text: "Reasonable adjustments are made to remove barriers for service users with a disability or protected characteristic", guidance: "Evidence of reasonable adjustments under Equality Act 2010; no blanket exclusion policies." },
  { id: "r11", section: "Discharge & Transitions", text: "Transitions between services are planned in advance and managed proactively", guidance: "Handover documentation; communication with receiving provider; service user briefed and supported." },
  { id: "r12", section: "Discharge & Transitions", text: "Discharges from hospital are coordinated to ensure continuity of care", guidance: "Hospital discharge protocol; key worker involved; medications and care plan updated on return." },
];

const TEMPLATE_MAP: Record<string, { title: string; auditType: string; questions: Question[] }> = {
  "tmpl-safe":      { title: "Safe — Medication & IPC Audit",                 auditType: "Safe",             questions: [...MEDICATION_AUDIT, ...IPC_AUDIT] },
  "tmpl-effective": { title: "Effective — Care Planning & Outcomes Audit",     auditType: "Effective",        questions: EFFECTIVE_AUDIT },
  "tmpl-caring":    { title: "Caring — Dignity & Person-Centred Care Audit",   auditType: "Caring",           questions: CARING_AUDIT },
  "tmpl-responsive":{ title: "Responsive — Complaints & Personalisation Audit",auditType: "Responsive",       questions: RESPONSIVE_AUDIT },
  "tmpl-wellled":   { title: "Well-Led — Governance Audit",                    auditType: "Well-Led",         questions: GOVERNANCE_AUDIT },
  "tmpl-mock-cqc":  { title: "Mock CQC Inspection",                            auditType: "All Key Questions", questions: [...MEDICATION_AUDIT, ...IPC_AUDIT, ...EFFECTIVE_AUDIT, ...CARING_AUDIT, ...RESPONSIVE_AUDIT, ...GOVERNANCE_AUDIT] },
};

const DEFAULT_AUDIT = { title: "Medication Management Audit", auditType: "Internal", questions: MEDICATION_AUDIT };

function groupBySection(questions: Question[]) {
  return questions.reduce<Record<string, Question[]>>((acc, q) => {
    if (!acc[q.section]) acc[q.section] = [];
    acc[q.section].push(q);
    return acc;
  }, {});
}

function AuditForm() {
  const params       = useSearchParams();
  const router       = useRouter();
  const templateId   = params.get("template") ?? "";
  const template     = TEMPLATE_MAP[templateId] ?? DEFAULT_AUDIT;

  const [title,     setTitle]     = useState(template.title);
  const [answers,   setAnswers]   = useState<Record<string, Answer>>({});
  const [notes,     setNotes]     = useState<Record<string, string>>({});
  const [saving,    setSaving]    = useState(false);
  const [savedId,   setSavedId]   = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const answered = Object.values(answers).filter((a) => a !== null).length;
  const total    = template.questions.length;
  const progress = Math.round((answered / total) * 100);

  const scored       = Object.entries(answers).filter(([, a]) => a !== null && a !== "na");
  const yesCount     = scored.filter(([, a]) => a === "yes").length;
  const partialCount = scored.filter(([, a]) => a === "partial").length;
  const score        = scored.length > 0
    ? Math.round(((yesCount + partialCount * 0.5) / scored.length) * 100)
    : 0;

  const grouped    = groupBySection(template.questions);
  const noAnswers  = Object.entries(answers).filter(([, a]) => a === "no");
  const scoreCol   = score >= 90 ? "#22c55e" : score >= 75 ? "#2E6FFF" : score >= 60 ? "#f59e0b" : "#ef4444";
  const scoreLabel = score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 60 ? "Requires Improvement" : "Inadequate";

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
          backgroundColor: active ? bg    : "white",
          color:           active ? colour : "#6b7280",
          borderColor:     active ? colour : "#e5e7eb",
        }}
      >
        {label}
      </button>
    );
  }

  async function handleSubmit() {
    setSaving(true);
    setSaveError(null);
    try {
      const sb = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { data: { user } } = await sb.auth.getUser();
      if (!user) throw new Error("Not signed in");

      const findings = {
        template_id: templateId || "custom",
        questions:   template.questions,
        answers,
        notes,
      };

      const { data, error } = await sb
        .from("audits")
        .insert({
          org_id:       user.id,
          title,
          audit_type:   template.auditType,
          status:       "completed",
          score,
          conducted_by: user.id,
          conducted_at: new Date().toISOString(),
          findings,
        })
        .select("id")
        .single();

      if (error) throw error;
      setSavedId(data.id);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  // ── Results screen (shown after save) ─────────────────────────────
  if (savedId) {
    return (
      <DashboardLayout>
        <div className="max-w-3xl">
          <div className="card p-8 text-center mb-6">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
            <p className="text-gray-500 mb-6">
              Audit completed · {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <div className="text-6xl font-bold mb-2" style={{ color: scoreCol }}>{score}%</div>
            <div className="text-lg font-semibold mb-4" style={{ color: scoreCol }}>{scoreLabel}</div>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <span>✅ {yesCount} Yes</span>
              <span>⚠️ {partialCount} Partial</span>
              <span>❌ {noAnswers.length} No</span>
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
            <Link href={`/audit/${savedId}`} className="btn-primary flex-1 text-center">
              View Full Report →
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // ── Audit form ─────────────────────────────────────────────────────
  return (
    <DashboardLayout>
      <div className="max-w-3xl">
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
                          {answerButton(q.id, "yes",     "✓ Yes",     "#16a34a", "#dcfce7")}
                          {answerButton(q.id, "partial", "~ Partial", "#d97706", "#fef3c7")}
                          {answerButton(q.id, "no",      "✗ No",      "#dc2626", "#fee2e2")}
                          {answerButton(q.id, "na",      "N/A",       "#6b7280", "#f3f4f6")}
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

        {saveError && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            ⚠️ Could not save audit: {saveError}
          </div>
        )}

        <div className="sticky bottom-0 bg-white border-t border-gray-100 py-4 mt-6 flex gap-3">
          <Link href="/audit" className="btn-secondary flex-1 text-center">Cancel</Link>
          <button
            onClick={handleSubmit}
            disabled={answered < total * 0.5 || saving}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{
              backgroundColor: answered >= total * 0.5 && !saving ? "#2E6FFF" : "#cbd5e1",
              cursor: answered >= total * 0.5 && !saving ? "pointer" : "not-allowed",
            }}
          >
            {saving ? "Saving…" : `Complete Audit (${answered}/${total} answered)`}
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
