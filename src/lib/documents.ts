// Ziproh Compliance Centre — Document Library
// Categories aligned to CQC's 5 Key Questions and UK care regulatory frameworks

import { SAFE_CONTENT } from "./policy-content-safe";
import { EFFECTIVE_CONTENT } from "./policy-content-effective";
import { CARING_CONTENT } from "./policy-content-caring";
import { RESPONSIVE_CONTENT } from "./policy-content-responsive";
import { WELLLED_CONTENT } from "./policy-content-wellled";
import { SAF001_COMPREHENSIVE } from "./policy-flagship-saf001";
import { WL004_CONTENT, SAF006_CONTENT, WL002_CONTENT, WL003_CONTENT, SAF015_CONTENT } from "./policy-medium-depth";
import { EFF005_CONTENT, SAF009_CONTENT, WL009_CONTENT, SAF012_CONTENT, CAR002_CONTENT } from "./policy-medium-depth-2";
import { SAF002_CONTENT, SAF008_CONTENT, WL006_CONTENT, SAF007_CONTENT, EFF003_CONTENT } from "./policy-medium-depth-3";
import { SAF004_CONTENT, SAF010_CONTENT, SAF014_CONTENT, EFF011_CONTENT, WL017_CONTENT } from "./policy-medium-depth-4";
import { SAF013_CONTENT, SAF011_CONTENT, WL008_CONTENT, WL013_CONTENT, EFF007_CONTENT } from "./policy-medium-depth-5";
import { EFF010_CONTENT, SAF016_CONTENT, WL010_CONTENT, EFF012_CONTENT, WL014_CONTENT } from "./policy-medium-depth-6";
import { EFF013_CONTENT, WL007_CONTENT, CAR003_CONTENT, EFF008_CONTENT, WL018_CONTENT } from "./policy-medium-depth-7";
import { SAF017_CONTENT, SAF018_CONTENT, WL011_CONTENT, WL012_CONTENT, CAR008_CONTENT } from "./policy-medium-depth-8";
import { EFF006_CONTENT, EFF009_CONTENT, CAR006_CONTENT, CAR007_CONTENT, WL016_CONTENT } from "./policy-medium-depth-9";
import { CAR004_CONTENT, CAR005_CONTENT, RES002_CONTENT, RES003_CONTENT, RES004_CONTENT, RES005_CONTENT, WL015_CONTENT } from "./policy-medium-depth-10";
import { SAF019_CONTENT, SAF020_CONTENT, SAF013_ENHANCED, SAF016_ENHANCED } from "./policy-medication-specialist";
import { EFF002_COMPREHENSIVE } from "./policy-flagship-eff002";
import { SAF003_COMPREHENSIVE } from "./policy-flagship-saf003";
import { EFF001_COMPREHENSIVE } from "./policy-flagship-eff001";
import { EFF004_COMPREHENSIVE } from "./policy-flagship-eff004";
import { RES001_COMPREHENSIVE } from "./policy-flagship-res001";
import { SAF005_COMPREHENSIVE } from "./policy-flagship-saf005";
import { WL005_COMPREHENSIVE } from "./policy-flagship-wl005";
import { WL001_COMPREHENSIVE } from "./policy-flagship-wl001";
import { CAR001_COMPREHENSIVE } from "./policy-flagship-car001";
import { GOV001_CONTENT, GOV002_CONTENT, GOV003_CONTENT, GOV004_CONTENT, GOV005_CONTENT, GOV006_CONTENT, GOV007_CONTENT } from "./policy-new-gov";
import { IGR001_CONTENT, IGR002_CONTENT, IGR003_CONTENT, IGR004_CONTENT, IGR005_CONTENT } from "./policy-new-igr";
import { HR001_CONTENT, HR002_CONTENT, HR003_CONTENT, HR004_CONTENT, HR005_CONTENT, HR006_CONTENT, HR007_CONTENT } from "./policy-new-hr";
import { COP001_CONTENT, COP002_CONTENT, COP003_CONTENT, COP004_CONTENT, COP005_CONTENT, COP006_CONTENT } from "./policy-new-cop";
import { EXPANSION_2026_DOCS, EXPANSION_2026_CONTENT } from "./policy-expansion-2026";
import { EXPANSION_2026B_DOCS, EXPANSION_2026B_CONTENT } from "./policy-expansion-2026b";
import { EXPANSION_2026C_DOCS, EXPANSION_2026C_CONTENT } from "./policy-expansion-2026c";
import { EXPANSION_2026D_DOCS, EXPANSION_2026D_CONTENT } from "./policy-expansion-2026d";
import { EXPANSION_2026E_DOCS, EXPANSION_2026E_CONTENT } from "./policy-expansion-2026e";
import { EXPANSION_2026F_DOCS, EXPANSION_2026F_CONTENT } from "./policy-expansion-2026f";

export type Document = {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  keyQuestion: "Safe" | "Effective" | "Caring" | "Responsive" | "Well-Led" | "Governance & Quality" | "Information & Records" | "Workforce & HR" | "Care Operations";
  serviceTypes: string[];
  regulators: string[];
  version: string;
  lastUpdated: string;
  status: "current" | "updated" | "review";
  readTime: number;
  tags: string[];
  summary: string;
  changelog?: string[];   // What changed in the latest version — shown as a banner on updated policies
};

// Rich policy section — supports warning/practice/legal callout boxes and sub-sections
export type PolicySection = {
  title?: string;                            // new-format section heading (alias for heading)
  heading?: string;                          // legacy heading field
  body?: string;                             // main body text (supports \n for paragraphs)
  steps?: string[];                          // numbered procedural steps (legacy)
  procedure?: string[];                      // numbered procedure steps (new-format alias)
  bulletPoints?: string[];                   // additional bullet list
  subSections?: {
    heading?: string;
    title?: string;
    body?: string;
    steps?: string[];
    procedure?: string[];
    bulletPoints?: string[];
    warningBox?: string;
    practiceBox?: string;
    legalBox?: string;
  }[];
  warningBox?: string;    // red/amber — highlighted warning or important note
  practiceBox?: string;   // green — best practice guidance
  legalBox?: string;      // blue — specific legislation callout
};

export type DocumentContent = {
  // ── Document control metadata (new-format policies) ─────────────────
  title?: string;              // Policy title (from the policy itself)
  policyId?: string;           // e.g. "SAF-001"
  version?: string;            // e.g. "3.2"
  effectiveDate?: string;      // ISO date string
  reviewDate?: string;         // Date of last review / effective date
  nextReviewDate?: string;     // Next scheduled review
  approvedBy?: string;         // Approving role
  reviewedBy?: string;         // Author / reviewer role

  // ── Formal policy statement ──────────────────────────────────────────
  statement?: string;

  // ── Core sections (required in old format, optional in new format) ───
  purpose?: string;
  scope?: string;
  responsibilities?: { role: string; duties: string[] }[];
  keyPoints?: string[];
  legislation?: string[];

  // ── Body sections ─────────────────────────────────────────────────────
  sections?: PolicySection[];
  procedure?: PolicySection[];   // detailed procedural sections

  // ── Rich extended fields ──────────────────────────────────────────────
  definitions?: { term: string; definition: string }[];
  training?: string;
  monitoring?: string;
  relatedDocuments?: string[];
  appendices?: {
    title: string;
    description?: string;   // legacy
    content?: string;       // new-format
    type?: "letter" | "form" | "checklist" | "template" | "flowchart";  // expansion-set
    body?: string;                                                       // expansion-set template body
  }[];
  versionHistory?: {
    version: string;
    date: string;
    amendment?: string;     // legacy
    changes?: string;       // new-format
  }[];
};

export const CATEGORIES = {
  safe: {
    label: "Safe",
    color: "#22c55e",
    icon: "🛡️",
    subcategories: [
      "Safeguarding",
      "Infection Prevention & Control",
      "Medication Management",
      "Risk Assessment",
      "Lone Working",
      "Fire Safety",
      "Health & Safety",
      "Moving & Handling",
    ],
  },
  effective: {
    label: "Effective",
    color: "#2E6FFF",
    icon: "✅",
    subcategories: [
      "Care Planning",
      "Nutrition & Hydration",
      "Mental Capacity",
      "Clinical Governance",
      "End of Life Care",
      "Dementia Care",
      "Pressure Ulcer Prevention",
      "Falls Prevention",
    ],
  },
  caring: {
    label: "Caring",
    color: "#ec4899",
    icon: "💙",
    subcategories: [
      "Person-Centred Care",
      "Dignity & Respect",
      "Communication",
      "Equality & Diversity",
      "Mental Wellbeing",
    ],
  },
  responsive: {
    label: "Responsive",
    color: "#f59e0b",
    icon: "🔔",
    subcategories: [
      "Complaints Handling",
      "Service User Involvement",
      "Discharge Planning",
      "Community Engagement",
    ],
  },
  wellled: {
    label: "Well-Led",
    color: "#8b5cf6",
    icon: "🏢",
    subcategories: [
      "Governance & Quality",
      "Human Resources",
      "Workforce Development",
      "Record Keeping",
      "Data Protection & GDPR",
      "Business Continuity",
      "Supervision & Appraisal",
      "Whistleblowing",
    ],
  },
  gov: {
    label: "Governance & Quality",
    color: "#0f766e",
    icon: "⚖️",
    subcategories: [
      "CQC Compliance",
      "Quality Assurance",
      "Audit & Improvement",
      "Document Control",
      "Business Continuity",
    ],
  },
  igr: {
    label: "Information & Records",
    color: "#0369a1",
    icon: "🗂️",
    subcategories: [
      "Records Management",
      "Confidentiality",
      "Data Protection",
      "Information Governance",
    ],
  },
  hr: {
    label: "Workforce & HR",
    color: "#b45309",
    icon: "👥",
    subcategories: [
      "Recruitment & Induction",
      "Training & Development",
      "Staff Conduct",
      "Disciplinary & Grievance",
      "Rostering & Deployment",
    ],
  },
  cop: {
    label: "Care Operations",
    color: "#be185d",
    icon: "🏥",
    subcategories: [
      "Consent & Capacity",
      "Service User Information",
      "Domiciliary Care",
      "Clinical Procedures",
      "Risk Management",
    ],
  },
};

export const DOCUMENTS: Document[] = [
  // ─── SAFE ───────────────────────────────────────────────────────────
  {
    id: "saf-001",
    title: "Safeguarding Adults at Risk Policy",
    category: "Safe", subcategory: "Safeguarding", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.2", lastUpdated: "2026-06-01", status: "updated", readTime: 15,
    tags: ["safeguarding", "adults", "abuse", "prevention"],
    summary: "Sets out responsibilities for protecting adults at risk from abuse, neglect and exploitation. Aligned to the Care Act 2014 and local authority safeguarding procedures.",
    changelog: [
      "Updated to reflect 2024 DHSC safeguarding review recommendations.",
      "New guidance added on online/digital abuse and financial exploitation via social media.",
      "Concern documentation timescale tightened: staff must log in digital record within 2 hours (previously 24 hours).",
      "Appendix B (Local Authority safeguarding contacts) refreshed for 2026.",
    ],
  },
  {
    id: "saf-002",
    title: "Safeguarding Children Policy",
    category: "Safe", subcategory: "Safeguarding", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.1", lastUpdated: "2026-04-15", status: "current", readTime: 12,
    tags: ["safeguarding", "children", "child protection"],
    summary: "Policy for protecting children who may come into contact with the service, including reporting procedures and multi-agency working.",
  },
  {
    id: "saf-003",
    title: "Medication Management Policy",
    category: "Safe", subcategory: "Medication Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "5.0", lastUpdated: "2026-05-20", status: "updated", readTime: 20,
    tags: ["medication", "MAR", "controlled drugs", "administration"],
    summary: "Comprehensive policy covering the ordering, receipt, storage, administration, recording, and disposal of medication.",
    changelog: [
      "Major revision (v5.0): policy restructured into six clear sections — Ordering, Receipt, Storage, Administration, Recording, Disposal.",
      "New section on 'When to Refuse Administration' including capacity, consent and covert medication considerations.",
      "Controlled drugs audit requirements updated to reflect 2025 amendments to the Misuse of Drugs Regulations.",
      "Electronic MAR (eMAR) guidance added for services using digital medication records.",
    ],
  },
  {
    id: "saf-004",
    title: "Medication Administration Procedure",
    category: "Safe", subcategory: "Medication Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.4", lastUpdated: "2026-05-20", status: "updated", readTime: 18,
    tags: ["medication", "administration", "procedure", "MAR chart"],
    summary: "Step-by-step procedure for the safe administration of medication to service users, including self-administration protocols.",
    changelog: [
      "Step 4 (pre-administration checks) expanded with a new 'Five Rights Plus Two' checklist (Right person, drug, dose, route, time + Right reason, documentation).",
      "Self-administration section rewritten with tiered assessment levels (Level 1–3).",
      "Allergy and adverse reaction response steps updated to align with new anaphylaxis guidance from NHS England.",
      "Companion procedure to updated Medication Management Policy v5.0.",
    ],
  },
  {
    id: "saf-005",
    title: "Infection Prevention & Control Policy",
    category: "Safe", subcategory: "Infection Prevention & Control", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "6.1", lastUpdated: "2026-05-28", status: "updated", readTime: 14,
    tags: ["IPC", "infection", "hygiene", "PPE", "MRSA"],
    summary: "Policy to prevent and control the spread of infections within the service, including hand hygiene, PPE use, and outbreak management.",
    changelog: [
      "Outbreak management section revised following UKHSA 2025 care home outbreak guidance update.",
      "PPE selection table updated — surgical mask now mandatory (not recommended) for all personal care activities.",
      "New subsection on respiratory hygiene and 'Catch it, Bin it, Kill it' staff communications.",
      "Appendix C (Notifiable diseases list) updated with additions from the Health Protection (Notification) Regulations 2024.",
    ],
  },
  {
    id: "saf-006",
    title: "Risk Assessment Policy",
    category: "Safe", subcategory: "Risk Assessment", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.8", lastUpdated: "2026-03-10", status: "current", readTime: 10,
    tags: ["risk", "assessment", "hazard", "control"],
    summary: "Framework for identifying, assessing and managing risks to service users, staff and visitors within the care environment.",
  },
  {
    id: "saf-007",
    title: "Lone Working Policy",
    category: "Safe", subcategory: "Lone Working", keyQuestion: "Safe",
    serviceTypes: ["Domiciliary Care", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.2", lastUpdated: "2026-02-14", status: "current", readTime: 8,
    tags: ["lone working", "safety", "domiciliary", "communication"],
    summary: "Policy and procedures to protect staff who work alone in the community or in service users' homes.",
  },
  {
    id: "saf-008",
    title: "Fire Safety Policy",
    category: "Safe", subcategory: "Fire Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-01-20", status: "current", readTime: 12,
    tags: ["fire", "evacuation", "fire drill", "PEEP"],
    summary: "Comprehensive fire safety policy including evacuation procedures, fire drills, personal emergency evacuation plans (PEEPs) and fire risk assessment requirements.",
  },
  {
    id: "saf-009",
    title: "Falls Prevention Policy",
    category: "Safe", subcategory: "Risk Assessment", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.6", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["falls", "prevention", "risk", "assessment"],
    summary: "Policy to reduce the risk of falls for service users, including assessment tools, intervention strategies and post-fall procedures.",
  },
  {
    id: "saf-010",
    title: "Moving & Handling Policy",
    category: "Safe", subcategory: "Moving & Handling", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.1", lastUpdated: "2026-03-25", status: "current", readTime: 16,
    tags: ["moving", "handling", "hoist", "manual handling", "TILE"],
    summary: "Policy covering the safe moving and handling of service users, including equipment use, risk assessment and staff training requirements.",
  },
  {
    id: "saf-011",
    title: "Violence & Aggression Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.5", lastUpdated: "2026-02-01", status: "current", readTime: 10,
    tags: ["violence", "aggression", "de-escalation", "restraint"],
    summary: "Policy for managing challenging behaviour, preventing violence and aggression, and supporting staff following incidents.",
  },
  {
    id: "saf-012",
    title: "Restraint & Restrictive Practice Policy",
    category: "Safe", subcategory: "Safeguarding", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.2", lastUpdated: "2026-03-18", status: "current", readTime: 14,
    tags: ["restraint", "restrictive practice", "PBS", "MCA", "DoLS"],
    summary: "Policy governing the lawful and proportionate use of restraint and restrictive practices, with a focus on least restrictive alternatives.",
  },
  {
    id: "saf-013",
    title: "Controlled Drugs Policy",
    category: "Safe", subcategory: "Medication Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Nursing Home"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.0", lastUpdated: "2026-04-28", status: "current", readTime: 16,
    tags: ["controlled drugs", "CD", "schedule 2", "storage", "register"],
    summary: "Policy for the management of controlled drugs in line with the Misuse of Drugs Act 1971 and associated regulations.",
  },
  {
    id: "saf-014",
    title: "Pressure Ulcer Prevention & Management Policy",
    category: "Safe", subcategory: "Risk Assessment", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.2", lastUpdated: "2026-04-05", status: "current", readTime: 15,
    tags: ["pressure ulcer", "Waterlow", "repositioning", "skin care"],
    summary: "Policy to prevent and manage pressure ulcers, including risk assessment using validated tools, repositioning schedules and wound care.",
  },
  {
    id: "saf-015",
    title: "Accident & Incident Reporting Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.3", lastUpdated: "2026-03-08", status: "current", readTime: 9,
    tags: ["accident", "incident", "RIDDOR", "Datix", "reporting"],
    summary: "Policy for reporting, recording and investigating accidents and incidents, including statutory reporting requirements under RIDDOR.",
  },
  {
    id: "saf-016",
    title: "Medicines Covert Administration Policy",
    category: "Safe", subcategory: "Medication Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Supported Living"],
    regulators: ["CQC", "CI"],
    version: "2.1", lastUpdated: "2026-01-15", status: "current", readTime: 11,
    tags: ["covert medication", "disguised medication", "MCA", "best interests"],
    summary: "Policy governing the ethical and lawful covert administration of medication where a person lacks capacity to consent.",
  },
  {
    id: "saf-017",
    title: "Skin Integrity & Wound Care Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-04-22", status: "current", readTime: 13,
    tags: ["wound care", "skin integrity", "dressings", "tissue viability"],
    summary: "Policy for the assessment and management of wounds and skin integrity issues, including referral pathways to tissue viability nurses.",
  },
  {
    id: "saf-018",
    title: "Environmental Safety & Maintenance Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.9", lastUpdated: "2026-02-28", status: "current", readTime: 10,
    tags: ["environment", "maintenance", "COSHH", "Legionella", "safety checks"],
    summary: "Policy for maintaining a safe physical environment, including maintenance schedules, COSHH management and Legionella risk control.",
  },
  {
    id: "saf-019",
    title: "PRN (As Required) Medication Policy",
    category: "Safe", subcategory: "Medicines Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Supported Living", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-06-17", status: "current", readTime: 16,
    tags: ["PRN", "as required", "medication", "pain assessment", "controlled drugs", "rescue medication", "anticipatory"],
    summary: "Policy for the safe management of PRN (as required) medicines including assessment before administration, recording, reviewing patterns, CD PRN, and anticipatory end of life medications.",
  },
  {
    id: "saf-020",
    title: "Medication Error Reporting & Management Procedure",
    category: "Safe", subcategory: "Medicines Management", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Supported Living", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-06-17", status: "current", readTime: 18,
    tags: ["medication error", "near miss", "duty of candour", "CQC notification", "RIDDOR", "root cause analysis", "MHRA", "controlled drugs"],
    summary: "Procedure for responding to, reporting, investigating and learning from medication errors and near misses, including Duty of Candour, CQC notification and MHRA Yellow Card requirements.",
  },

  // ─── EFFECTIVE ──────────────────────────────────────────────────────
  {
    id: "eff-001",
    title: "Care Planning Policy",
    category: "Effective", subcategory: "Care Planning", keyQuestion: "Effective",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "5.2", lastUpdated: "2026-05-15", status: "current", readTime: 18,
    tags: ["care plan", "assessment", "person-centred", "review"],
    summary: "Policy for the development, implementation, review and updating of personalised care plans for all service users.",
  },
  {
    id: "eff-002",
    title: "Mental Capacity Act Policy",
    category: "Effective", subcategory: "Mental Capacity", keyQuestion: "Effective",
    serviceTypes: ["All"], regulators: ["CQC", "CI"],
    version: "4.0", lastUpdated: "2026-04-10", status: "current", readTime: 20,
    tags: ["MCA", "mental capacity", "best interests", "DoLS", "LPS"],
    summary: "Policy on assessing mental capacity and making best interests decisions in line with the Mental Capacity Act 2005 and Liberty Protection Safeguards.",
  },
  {
    id: "eff-003",
    title: "Nutrition & Hydration Policy",
    category: "Effective", subcategory: "Nutrition & Hydration", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.3", lastUpdated: "2026-03-01", status: "current", readTime: 14,
    tags: ["nutrition", "hydration", "MUST", "malnutrition", "diet"],
    summary: "Policy to ensure service users receive adequate nutrition and hydration, including MUST screening, dietary assessment and mealtime support.",
  },
  {
    id: "eff-004",
    title: "End of Life Care Policy",
    category: "Effective", subcategory: "End of Life Care", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care", "Hospice"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.5", lastUpdated: "2026-05-05", status: "current", readTime: 22,
    tags: ["end of life", "palliative", "DNACPR", "advance care plan", "death"],
    summary: "Policy for delivering compassionate, person-centred end of life care, including advance care planning, DNACPR decisions and bereavement support.",
  },
  {
    id: "eff-005",
    title: "Dementia Care Policy",
    category: "Effective", subcategory: "Dementia Care", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.8", lastUpdated: "2026-04-20", status: "current", readTime: 18,
    tags: ["dementia", "cognitive", "person-centred", "environment"],
    summary: "Policy for providing high-quality, person-centred care to those living with dementia, including assessment, activity and environmental guidance.",
  },
  {
    id: "eff-006",
    title: "Pressure Ulcer Prevention Policy",
    category: "Effective", subcategory: "Pressure Ulcer Prevention", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.2", lastUpdated: "2026-04-05", status: "current", readTime: 15,
    tags: ["pressure ulcer", "Waterlow", "repositioning", "skin care"],
    summary: "Policy to prevent and manage pressure ulcers, including risk assessment using Waterlow or Braden scales, repositioning schedules and wound care.",
  },
  {
    id: "eff-007",
    title: "Discharge & Transfer of Care Policy",
    category: "Effective", subcategory: "Care Planning", keyQuestion: "Effective",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.1", lastUpdated: "2026-03-20", status: "current", readTime: 12,
    tags: ["discharge", "transfer", "handover", "hospital", "transition"],
    summary: "Policy for the safe and co-ordinated discharge and transfer of service users, including handover documentation and continuity of care.",
  },
  {
    id: "eff-008",
    title: "Continence Management Policy",
    category: "Effective", subcategory: "Care Planning", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.7", lastUpdated: "2026-02-05", status: "current", readTime: 13,
    tags: ["continence", "continence assessment", "catheter", "dignity"],
    summary: "Policy for the assessment, management and promotion of continence, with a focus on maintaining dignity and independence.",
  },
  {
    id: "eff-009",
    title: "Oral Health & Dental Care Policy",
    category: "Effective", subcategory: "Care Planning", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI"],
    version: "2.3", lastUpdated: "2026-01-25", status: "current", readTime: 8,
    tags: ["oral health", "dental", "dentures", "mouth care"],
    summary: "Policy to ensure good oral health for service users, including daily mouth care, dental referrals and oral health assessments.",
  },
  {
    id: "eff-010",
    title: "Dysphagia & Swallowing Difficulties Policy",
    category: "Effective", subcategory: "Nutrition & Hydration", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-03-12", status: "current", readTime: 14,
    tags: ["dysphagia", "IDDSI", "texture modified", "speech and language therapy"],
    summary: "Policy for the assessment and management of dysphagia, including IDDSI texture descriptors, SALT referrals and choking risk management.",
  },
  {
    id: "eff-011",
    title: "Physical Health Monitoring Policy",
    category: "Effective", subcategory: "Clinical Governance", keyQuestion: "Effective",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.5", lastUpdated: "2026-04-14", status: "current", readTime: 11,
    tags: ["vital signs", "NEWS2", "physical health", "monitoring", "deterioration"],
    summary: "Policy for monitoring and recording physical health parameters including the use of National Early Warning Score 2 (NEWS2) to identify deterioration.",
  },
  {
    id: "eff-012",
    title: "Positive Behaviour Support Policy",
    category: "Effective", subcategory: "Dementia Care", keyQuestion: "Effective",
    serviceTypes: ["Supported Living", "Residential"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.6", lastUpdated: "2026-02-18", status: "current", readTime: 16,
    tags: ["PBS", "behaviours of concern", "autism", "learning disability"],
    summary: "Policy for developing and implementing Positive Behaviour Support plans to understand and respond to behaviours that may challenge the service.",
  },
  {
    id: "eff-013",
    title: "Mental Health & Wellbeing Policy",
    category: "Effective", subcategory: "Clinical Governance", keyQuestion: "Effective",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.2", lastUpdated: "2026-03-30", status: "current", readTime: 14,
    tags: ["mental health", "wellbeing", "depression", "anxiety", "IAPT"],
    summary: "Policy for promoting mental health and wellbeing, identifying mental health needs and facilitating access to appropriate support and treatment.",
  },

  // ─── CARING ─────────────────────────────────────────────────────────
  {
    id: "car-001",
    title: "Dignity & Respect Policy",
    category: "Caring", subcategory: "Dignity & Respect", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-02-28", status: "current", readTime: 10,
    tags: ["dignity", "respect", "privacy", "person-centred"],
    summary: "Policy to ensure all service users are treated with dignity, respect and compassion at all times, protecting their privacy and promoting independence.",
  },
  {
    id: "car-002",
    title: "Equality, Diversity & Inclusion Policy",
    category: "Caring", subcategory: "Equality & Diversity", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.1", lastUpdated: "2026-03-15", status: "current", readTime: 12,
    tags: ["equality", "diversity", "inclusion", "protected characteristics", "Equality Act"],
    summary: "Policy to promote equality and diversity in service provision and employment, in line with the Equality Act 2010.",
  },
  {
    id: "car-003",
    title: "Communication Policy",
    category: "Caring", subcategory: "Communication", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.5", lastUpdated: "2026-01-30", status: "current", readTime: 9,
    tags: ["communication", "language", "accessible", "interpreter"],
    summary: "Policy to ensure effective communication with service users, families and other professionals, including accessible formats and interpreter services.",
  },
  {
    id: "car-004",
    title: "Relationships & Sexuality Policy",
    category: "Caring", subcategory: "Person-Centred Care", keyQuestion: "Caring",
    serviceTypes: ["Care & Nursing Home", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.4", lastUpdated: "2026-02-10", status: "current", readTime: 11,
    tags: ["relationships", "sexuality", "consent", "intimacy", "person-centred"],
    summary: "Policy recognising the rights of service users to form relationships and express their sexuality, with appropriate safeguards and MCA considerations.",
  },
  {
    id: "car-005",
    title: "Spiritual & Religious Care Policy",
    category: "Caring", subcategory: "Person-Centred Care", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-01-08", status: "current", readTime: 7,
    tags: ["spiritual", "religious", "faith", "culture", "person-centred"],
    summary: "Policy to respect and support the spiritual and religious needs and preferences of all service users, regardless of faith or belief.",
  },
  {
    id: "car-006",
    title: "Activities & Social Engagement Policy",
    category: "Caring", subcategory: "Mental Wellbeing", keyQuestion: "Caring",
    serviceTypes: ["Care & Nursing Home", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.8", lastUpdated: "2026-03-05", status: "current", readTime: 9,
    tags: ["activities", "social", "engagement", "wellbeing", "occupation"],
    summary: "Policy for providing meaningful activities and social engagement to promote mental and physical wellbeing for all service users.",
  },
  {
    id: "car-007",
    title: "Family & Carer Involvement Policy",
    category: "Caring", subcategory: "Person-Centred Care", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.2", lastUpdated: "2026-02-22", status: "current", readTime: 8,
    tags: ["family", "carer", "involvement", "visiting", "next of kin"],
    summary: "Policy for engaging with families and carers as partners in care, including visiting arrangements, information sharing and involvement in care planning.",
  },
  {
    id: "car-008",
    title: "Advocacy Policy",
    category: "Caring", subcategory: "Person-Centred Care", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.1", lastUpdated: "2026-01-18", status: "current", readTime: 8,
    tags: ["advocacy", "IMCA", "IMHA", "voice", "rights"],
    summary: "Policy to ensure service users can access advocacy support, including Independent Mental Capacity Advocacy (IMCA) and Independent Mental Health Advocacy (IMHA).",
  },

  // ─── RESPONSIVE ─────────────────────────────────────────────────────
  {
    id: "res-001",
    title: "Complaints Handling Policy",
    category: "Responsive", subcategory: "Complaints Handling", keyQuestion: "Responsive",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.7", lastUpdated: "2026-04-12", status: "current", readTime: 11,
    tags: ["complaints", "feedback", "Ombudsman", "resolution"],
    summary: "Policy for receiving, recording, investigating and resolving complaints from service users, families and other stakeholders.",
  },
  {
    id: "res-002",
    title: "Service User Involvement Policy",
    category: "Responsive", subcategory: "Service User Involvement", keyQuestion: "Responsive",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.9", lastUpdated: "2026-02-20", status: "current", readTime: 8,
    tags: ["involvement", "participation", "co-production", "feedback"],
    summary: "Policy to ensure service users are meaningfully involved in decisions about their care and the running of the service.",
  },
  {
    id: "res-003",
    title: "Compliments & Feedback Policy",
    category: "Responsive", subcategory: "Service User Involvement", keyQuestion: "Responsive",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-01-12", status: "current", readTime: 6,
    tags: ["compliments", "feedback", "survey", "satisfaction"],
    summary: "Policy for capturing and acting on compliments, suggestions and feedback from service users, families and staff.",
  },
  {
    id: "res-004",
    title: "Flexible Service Delivery Policy",
    category: "Responsive", subcategory: "Service User Involvement", keyQuestion: "Responsive",
    serviceTypes: ["Domiciliary Care", "Supported Living"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.3", lastUpdated: "2026-02-01", status: "current", readTime: 7,
    tags: ["flexible", "service", "individual needs", "responsive"],
    summary: "Policy to ensure care delivery is flexible and responsive to individual preferences, changing needs and life choices.",
  },
  {
    id: "res-005",
    title: "Hospital Admission & Discharge Liaison Policy",
    category: "Responsive", subcategory: "Discharge Planning", keyQuestion: "Responsive",
    serviceTypes: ["Care & Nursing Home", "Domiciliary Care"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-03-28", status: "current", readTime: 10,
    tags: ["hospital", "admission", "discharge", "liaison", "escalation"],
    summary: "Policy for managing hospital admissions and co-ordinating timely, safe discharge, including the Hospital Liaison role and information handover.",
  },

  // ─── WELL-LED ────────────────────────────────────────────────────────
  {
    id: "wl-001",
    title: "Governance Framework",
    category: "Well-Led", subcategory: "Governance & Quality", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "5.0", lastUpdated: "2026-05-30", status: "updated", readTime: 25,
    tags: ["governance", "quality", "CQC", "board", "accountability"],
    summary: "Overarching governance framework setting out the structures, processes and responsibilities for quality assurance and regulatory compliance.",
    changelog: [
      "Major revision (v5.0): aligned to CQC's updated Single Assessment Framework quality statements effective January 2025.",
      "New section on 'Learning Culture' — providers must now document how learning from incidents feeds into quality improvement cycles.",
      "Governance meeting schedule and quorum requirements formalised in Appendix A.",
      "Data quality and data assurance roles clarified following NHS Data Security Standard update.",
    ],
  },
  {
    id: "wl-002",
    title: "Recruitment & Selection Policy",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.3", lastUpdated: "2026-04-18", status: "current", readTime: 16,
    tags: ["recruitment", "DBS", "references", "safer recruitment"],
    summary: "Policy for the safe and fair recruitment of staff, including DBS checking, reference requirements and interview procedures.",
  },
  {
    id: "wl-003",
    title: "Supervision & Appraisal Policy",
    category: "Well-Led", subcategory: "Supervision & Appraisal", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.1", lastUpdated: "2026-03-20", status: "current", readTime: 13,
    tags: ["supervision", "appraisal", "PDR", "1:1", "performance"],
    summary: "Policy for regular staff supervision and annual appraisal, supporting professional development and performance management.",
  },
  {
    id: "wl-004",
    title: "Whistleblowing (Raising Concerns) Policy",
    category: "Well-Led", subcategory: "Whistleblowing", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.4", lastUpdated: "2026-03-05", status: "current", readTime: 9,
    tags: ["whistleblowing", "raising concerns", "protected disclosure", "Freedom to Speak Up"],
    summary: "Policy enabling staff to raise concerns about poor practice or wrongdoing without fear of detriment, in line with the Public Interest Disclosure Act.",
  },
  {
    id: "wl-005",
    title: "Data Protection & GDPR Policy",
    category: "Well-Led", subcategory: "Data Protection & GDPR", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.6", lastUpdated: "2026-05-10", status: "current", readTime: 17,
    tags: ["GDPR", "data protection", "information governance", "ICO", "privacy"],
    summary: "Policy for the lawful processing of personal and special category data in line with UK GDPR and the Data Protection Act 2018.",
  },
  {
    id: "wl-006",
    title: "Record Keeping & Confidentiality Policy",
    category: "Well-Led", subcategory: "Record Keeping", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.9", lastUpdated: "2026-04-25", status: "current", readTime: 13,
    tags: ["records", "confidentiality", "retention", "documentation"],
    summary: "Policy for accurate, contemporaneous and secure record keeping, including retention schedules and data subject access rights.",
  },
  {
    id: "wl-007",
    title: "Business Continuity Policy",
    category: "Well-Led", subcategory: "Business Continuity", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.7", lastUpdated: "2026-02-10", status: "current", readTime: 14,
    tags: ["business continuity", "contingency", "disaster recovery", "emergency"],
    summary: "Policy and plan for maintaining essential care services during unexpected events including staff shortages, IT failure and extreme weather.",
  },
  {
    id: "wl-008",
    title: "Staffing & Deployment Policy",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.5", lastUpdated: "2026-04-08", status: "current", readTime: 12,
    tags: ["staffing", "rota", "dependency", "workforce planning"],
    summary: "Policy for ensuring safe staffing levels and appropriate deployment based on service user dependency and acuity.",
  },
  {
    id: "wl-009",
    title: "Induction & Mandatory Training Policy",
    category: "Well-Led", subcategory: "Workforce Development", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.8", lastUpdated: "2026-05-02", status: "current", readTime: 14,
    tags: ["induction", "training", "mandatory", "Care Certificate", "Skills for Care"],
    summary: "Policy setting out induction requirements for new staff, including completion of the Care Certificate, and mandatory training obligations for all staff.",
  },
  {
    id: "wl-010",
    title: "Disciplinary & Capability Policy",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.2", lastUpdated: "2026-03-10", status: "current", readTime: 16,
    tags: ["disciplinary", "capability", "performance", "HR", "employment law"],
    summary: "Policy and procedure for managing disciplinary matters and capability concerns in line with employment law and Acas guidance.",
  },
  {
    id: "wl-011",
    title: "Grievance Policy",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.8", lastUpdated: "2026-02-25", status: "current", readTime: 12,
    tags: ["grievance", "HR", "employment", "Acas", "conflict"],
    summary: "Policy for managing staff grievances fairly and promptly, in line with Acas guidance and employment legislation.",
  },
  {
    id: "wl-012",
    title: "Absence Management Policy",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.0", lastUpdated: "2026-03-18", status: "current", readTime: 13,
    tags: ["absence", "sickness", "Bradford factor", "return to work", "fit note"],
    summary: "Policy for managing staff absence including sickness absence monitoring, return to work interviews and long-term sickness support.",
  },
  {
    id: "wl-013",
    title: "Quality Improvement Policy",
    category: "Well-Led", subcategory: "Governance & Quality", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.6", lastUpdated: "2026-04-30", status: "current", readTime: 15,
    tags: ["quality improvement", "QI", "PDSA", "audit", "continuous improvement"],
    summary: "Policy for embedding a culture of continuous quality improvement, including audit cycles, learning from incidents and quality monitoring.",
  },
  {
    id: "wl-014",
    title: "Information Governance Policy",
    category: "Well-Led", subcategory: "Data Protection & GDPR", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "4.1", lastUpdated: "2026-05-08", status: "current", readTime: 16,
    tags: ["information governance", "IG", "Caldicott", "cyber security", "NHS"],
    summary: "Policy for managing information assets securely and in compliance with Caldicott Principles, UK GDPR and NHS Digital standards.",
  },
  {
    id: "wl-015",
    title: "Equality & Human Rights Policy (Employment)",
    category: "Well-Led", subcategory: "Human Resources", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.3", lastUpdated: "2026-04-03", status: "current", readTime: 11,
    tags: ["equality", "human rights", "employment", "Equality Act", "discrimination"],
    summary: "Policy to ensure fair employment practices in line with the Equality Act 2010, promoting a workplace free from discrimination and harassment.",
  },
  {
    id: "wl-016",
    title: "Learning & Development Strategy",
    category: "Well-Led", subcategory: "Workforce Development", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.5", lastUpdated: "2026-03-22", status: "current", readTime: 12,
    tags: ["learning", "development", "CPD", "training needs analysis", "workforce"],
    summary: "Strategy for the ongoing professional development of all staff, including training needs analysis, CPD support and career pathways.",
  },
  {
    id: "wl-017",
    title: "CQC Registration & Regulatory Compliance Policy",
    category: "Well-Led", subcategory: "Governance & Quality", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC"],
    version: "4.0", lastUpdated: "2026-05-20", status: "updated", readTime: 18,
    tags: ["CQC", "registration", "notifications", "compliance", "Regulation 17"],
    summary: "Policy for maintaining CQC registration, meeting statutory notification requirements and preparing for inspections under the current regulatory framework.",
    changelog: [
      "Updated to reflect CQC's new provider portal submission requirements (effective April 2025).",
      "Statutory notification trigger list expanded — now includes unexpected deaths during restraint and allegations against staff.",
      "New inspection preparation checklist added as Appendix D, mapped to the Single Assessment Framework evidence categories.",
      "Section 6 (Regulation 17 — Good Governance) rewritten to reference new CQC evidence scoring methodology.",
    ],
  },
  {
    id: "wl-018",
    title: "Registered Manager Accountability Policy",
    category: "Well-Led", subcategory: "Governance & Quality", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.1", lastUpdated: "2026-04-16", status: "current", readTime: 10,
    tags: ["registered manager", "accountability", "CQC", "Regulation 7", "fit and proper"],
    summary: "Policy setting out the accountability, responsibilities and fitness requirements for the Registered Manager under the Health and Social Care Act 2008.",
  },

  // ─── GOVERNANCE & QUALITY ─────────────────────────────────────────────────
  {
    id: "gov-001",
    title: "Duty of Candour Policy and Procedure",
    category: "Governance & Quality", subcategory: "CQC Compliance", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.3", lastUpdated: "2026-04-01", status: "current", readTime: 14,
    tags: ["duty of candour", "Regulation 20", "transparency", "notifiable safety incidents", "apology"],
    summary: "Comprehensive policy implementing CQC Regulation 20 — Duty of Candour. Covers notifiable safety incidents, verbal and written notification, apology requirements, and the Duty of Candour Register.",
  },
  {
    id: "gov-002",
    title: "Quality Assurance and Governance Framework",
    category: "Governance & Quality", subcategory: "Quality Assurance", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.1", lastUpdated: "2026-04-01", status: "current", readTime: 16,
    tags: ["quality assurance", "governance", "KPIs", "PDSA", "risk management", "quality dashboard"],
    summary: "Overarching governance framework covering the 6 pillars of quality, Quality Dashboard KPIs, governance meeting structure, risk management matrix, and the PDSA improvement cycle.",
  },
  {
    id: "gov-003",
    title: "Internal Audit Policy and Audit Schedule",
    category: "Governance & Quality", subcategory: "Audit & Improvement", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-04-01", status: "current", readTime: 12,
    tags: ["audit", "internal audit", "audit schedule", "compliance", "quality improvement"],
    summary: "Annual internal audit schedule covering 12 domains including care plans, MAR, IPC, safeguarding, and MCA/DoLS. Sets out the 5-stage audit process and re-audit triggers for non-compliance.",
  },
  {
    id: "gov-004",
    title: "Document Control and Policy Review Policy",
    category: "Governance & Quality", subcategory: "Document Control", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.9", lastUpdated: "2026-04-01", status: "current", readTime: 10,
    tags: ["document control", "policy review", "version control", "policy management"],
    summary: "Sets out the version numbering convention, 12-month review cycle, 6-step review process, and staff acknowledgement requirements for all organisational policies and procedures.",
  },
  {
    id: "gov-005",
    title: "CQC Notifications Policy and Procedure",
    category: "Governance & Quality", subcategory: "CQC Compliance", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC"],
    version: "2.1", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["CQC notifications", "notifiable events", "Regulation 18", "serious injury", "death"],
    summary: "Full list of notifiable events and deadlines (death same day, serious injury 3 working days, etc.), 7-step notification procedure, and Notifications Log requirements.",
  },
  {
    id: "gov-006",
    title: "Statement of Purpose Policy",
    category: "Governance & Quality", subcategory: "CQC Compliance", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-04-01", status: "current", readTime: 9,
    tags: ["statement of purpose", "Schedule 3", "registration", "CQC", "service description"],
    summary: "Covers mandatory Schedule 3 content, the 5-step change procedure, and the 28-day CQC notification requirement for any material changes to the Statement of Purpose.",
  },
  {
    id: "gov-007",
    title: "Business Continuity and Emergency Planning Policy",
    category: "Governance & Quality", subcategory: "Business Continuity", keyQuestion: "Governance & Quality",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.2", lastUpdated: "2026-04-01", status: "current", readTime: 13,
    tags: ["business continuity", "emergency planning", "BCP", "resilience", "staffing contingency"],
    summary: "Covers 9 risk scenarios, Emergency Response Procedures, staffing contingency cascade, and the annual desktop exercise requirement for business continuity planning.",
  },

  // ─── INFORMATION & RECORDS ────────────────────────────────────────────────
  {
    id: "igr-001",
    title: "Records Management Policy",
    category: "Information & Records", subcategory: "Records Management", keyQuestion: "Information & Records",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.4", lastUpdated: "2026-04-01", status: "current", readTime: 12,
    tags: ["records management", "Caldicott", "record keeping", "retention schedule", "access control"],
    summary: "Covers the Caldicott principles, contemporaneous record-keeping standards, correction procedure, access controls, and the full retention schedule (adult 8 years, children until 25, employment 6 years).",
  },
  {
    id: "igr-002",
    title: "Confidentiality Policy",
    category: "Information & Records", subcategory: "Confidentiality", keyQuestion: "Information & Records",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.6", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["confidentiality", "GDPR", "Caldicott", "information sharing", "social media"],
    summary: "Covers common law duty of confidence, UK GDPR, 5 lawful bases for sharing, the 7 Caldicott Principles, and the social media prohibition for care staff.",
  },
  {
    id: "igr-003",
    title: "Data Breach and Incident Response Procedure",
    category: "Information & Records", subcategory: "Data Protection", keyQuestion: "Information & Records",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.8", lastUpdated: "2026-04-01", status: "current", readTime: 10,
    tags: ["data breach", "ICO", "incident response", "GDPR", "72 hours", "data protection"],
    summary: "7-step breach response procedure (contain, report, assess, notify ICO within 72 hours, notify individuals, investigate, record), ICO notification requirements, and Data Breach Register.",
  },
  {
    id: "igr-004",
    title: "Subject Access Request Procedure",
    category: "Information & Records", subcategory: "Data Protection", keyQuestion: "Information & Records",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.7", lastUpdated: "2026-04-01", status: "current", readTime: 9,
    tags: ["SAR", "subject access request", "GDPR", "Article 15", "data rights"],
    summary: "Article 15 right of access, 1-calendar-month deadline, identity verification, 7-step response procedure, exemptions, and SAR Log requirements.",
  },
  {
    id: "igr-005",
    title: "Retention and Disposal Schedule",
    category: "Information & Records", subcategory: "Records Management", keyQuestion: "Information & Records",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.6", lastUpdated: "2026-04-01", status: "current", readTime: 9,
    tags: ["retention", "disposal", "records", "GDPR", "data minimisation", "DBS"],
    summary: "Full retention schedule for 20+ record types, legal hold procedure, secure disposal procedure (cross-cut shredder / approved contractor), and Disposal Log requirements.",
  },

  // ─── WORKFORCE & HR ───────────────────────────────────────────────────────
  {
    id: "hr-001",
    title: "Induction and Onboarding Policy",
    category: "Workforce & HR", subcategory: "Recruitment & Induction", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.1", lastUpdated: "2026-04-01", status: "current", readTime: 13,
    tags: ["induction", "onboarding", "DBS", "Care Certificate", "pre-employment checks"],
    summary: "Covers pre-employment checks (DBS, RTW, 2 references, OHQ), 3-stage induction programme, Care Certificate Standards 1-15, and the shortened induction for agency workers.",
  },
  {
    id: "hr-002",
    title: "Statutory and Mandatory Training Policy",
    category: "Workforce & HR", subcategory: "Training & Development", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.3", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["mandatory training", "statutory training", "training matrix", "CPD", "non-compliance"],
    summary: "16-subject mandatory training matrix with frequencies, 4-stage escalation for non-compliance, delivery methods, and Training Matrix maintenance requirements.",
  },
  {
    id: "hr-003",
    title: "Staff Conduct and Code of Conduct Policy",
    category: "Workforce & HR", subcategory: "Staff Conduct", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-04-01", status: "current", readTime: 10,
    tags: ["code of conduct", "staff conduct", "professional boundaries", "gifts", "social media"],
    summary: "10 standards of conduct, professional boundaries (no gifts over £10, no personal relationships), outside-work conduct standards, and gross misconduct examples including DBS referral triggers.",
  },
  {
    id: "hr-004",
    title: "Disciplinary Policy and Procedure",
    category: "Workforce & HR", subcategory: "Disciplinary & Grievance", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "3.2", lastUpdated: "2026-04-01", status: "current", readTime: 14,
    tags: ["disciplinary", "ACAS", "misconduct", "gross misconduct", "DBS referral", "suspension"],
    summary: "ACAS Code of Practice aligned. Covers informal resolution, 5-stage formal procedure, sanction timescales, and the mandatory DBS referral duty on dismissal for harm-related conduct.",
  },
  {
    id: "hr-005",
    title: "Grievance Policy and Procedure",
    category: "Workforce & HR", subcategory: "Disciplinary & Grievance", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.5", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["grievance", "ACAS", "complaint", "non-retaliation", "appeal"],
    summary: "Informal resolution first, 5-step formal procedure with defined timescales (acknowledgement 3 days, hearing 10 days, decision 5 days, appeal 10 days), and non-retaliation guarantee.",
  },
  {
    id: "hr-006",
    title: "Staff Rota and Rostering Policy",
    category: "Workforce & HR", subcategory: "Rostering & Deployment", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-04-01", status: "current", readTime: 10,
    tags: ["rota", "rostering", "Working Time Regulations", "staffing", "agency staff"],
    summary: "Working Time Regulations compliance (48-hour max, 11-hour rest), 5 rostering principles, 5-step staffing shortfall escalation, and agency staff quality requirements.",
  },
  {
    id: "hr-007",
    title: "Whistleblowing and Speaking Up Policy",
    category: "Workforce & HR", subcategory: "Staff Conduct", keyQuestion: "Workforce & HR",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.1", lastUpdated: "2026-04-01", status: "current", readTime: 11,
    tags: ["whistleblowing", "speaking up", "FTSU", "Protect", "CQC", "public interest disclosure"],
    summary: "Enhanced whistleblowing policy with Freedom to Speak Up (FTSU) lead role, escalation routes, and contacts including Protect (020 3117 2520) and CQC (03000 616161).",
  },

  // ─── CARE OPERATIONS ─────────────────────────────────────────────────────
  {
    id: "cop-001",
    title: "Consent to Care and Treatment Policy",
    category: "Care Operations", subcategory: "Consent & Capacity", keyQuestion: "Care Operations",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.5", lastUpdated: "2026-04-01", status: "current", readTime: 13,
    tags: ["consent", "Regulation 11", "Mental Capacity Act", "informed consent", "refusal"],
    summary: "Comprehensive consent framework under CQC Regulation 11 and the Mental Capacity Act 2005. Covers valid consent, capacity assessment, best-interests decisions, ADRTs, and consent documentation.",
  },
  {
    id: "cop-002",
    title: "Deprivation of Liberty Safeguards Policy",
    category: "Care Operations", subcategory: "Consent & Capacity", keyQuestion: "Care Operations",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.1", lastUpdated: "2026-04-01", status: "current", readTime: 14,
    tags: ["DoLS", "LPS", "deprivation of liberty", "Cheshire West", "acid test", "MCA"],
    summary: "DoLS and LPS framework based on the Cheshire West acid test. Covers identification, Standard and Urgent applications, least restrictive practice, RPR appointment, and the DoLS Register.",
  },
  {
    id: "cop-003",
    title: "Service User Guide Policy",
    category: "Care Operations", subcategory: "Service User Information", keyQuestion: "Care Operations",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.8", lastUpdated: "2026-04-01", status: "current", readTime: 8,
    tags: ["service user guide", "welcome pack", "accessible information", "complaints", "advocacy"],
    summary: "Policy and content framework for the Service User Guide — the key document informing service users, families and representatives about the service, rights, complaints procedure, and key contacts.",
  },
  {
    id: "cop-004",
    title: "No Reply and Missed Call Policy",
    category: "Care Operations", subcategory: "Domiciliary Care", keyQuestion: "Care Operations",
    serviceTypes: ["Domiciliary Care", "Community"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.0", lastUpdated: "2026-04-01", status: "current", readTime: 10,
    tags: ["no reply", "missed call", "domiciliary care", "welfare check", "police", "ECM"],
    summary: "7-step no reply procedure for domiciliary care including back-blow escalation, emergency contacts, police welfare check, and documentation requirements. Covers electronic call monitoring.",
  },
  {
    id: "cop-005",
    title: "Delegated Healthcare Tasks Policy",
    category: "Care Operations", subcategory: "Clinical Procedures", keyQuestion: "Care Operations",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.9", lastUpdated: "2026-04-01", status: "current", readTime: 12,
    tags: ["delegation", "clinical tasks", "insulin", "catheter", "PEG", "competency", "NMC"],
    summary: "Framework for delegated healthcare tasks under NMC guidance. Lists delegatable tasks (insulin, catheter, PEG, stoma, wound care), training and competency requirements, and error reporting.",
  },
  {
    id: "cop-006",
    title: "Choking Risk Management Procedure",
    category: "Care Operations", subcategory: "Risk Management", keyQuestion: "Care Operations",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "2.1", lastUpdated: "2026-04-01", status: "current", readTime: 12,
    tags: ["choking", "dysphagia", "IDDSI", "Heimlich", "aspiration", "food texture", "mealtime"],
    summary: "Comprehensive choking prevention and emergency response procedure including IDDSI food texture framework (Levels 0-7), mealtime supervision, Resuscitation Council UK Heimlich technique, and post-incident review.",
  },

  // ── 2026 Expansion Set (30 policies) ──
  ...EXPANSION_2026_DOCS,

  // ── 2026 Expansion Set B (Group 4: Health, Safety & Premises) ──
  ...EXPANSION_2026B_DOCS,
  // ── 2026 Expansion Set C (Group 5: Workforce & HR) ──
  ...EXPANSION_2026C_DOCS,
  // ── 2026 Expansion Set D (Group 6: Care Home, Catering & Domestic) ──
  ...EXPANSION_2026D_DOCS,
  // ── 2026 Expansion Set E (Group 7: Domiciliary Care & Supported Living) ──
  ...EXPANSION_2026E_DOCS,
  // ── 2026 Expansion Set F (Group 8: Primary Care, Clinics & Specialist Health) ──
  ...EXPANSION_2026F_DOCS,
];

// ─── Document content (rich policy body) ──────────────────────────────────
// Base content for saf-001, saf-003, wl-001 (kept inline for backwards compatibility)
const BASE_CONTENT: Record<string, DocumentContent> = {
  "saf-001": {
    purpose: "This policy sets out Ziproh Compliance's commitment to protecting adults at risk from abuse, neglect and exploitation. It ensures all staff understand their individual and collective responsibilities in preventing and responding to safeguarding concerns.",
    scope: "This policy applies to all staff employed by or contracted to the organisation, including bank staff, volunteers, students and agency workers. It covers all service users, including those who access day services, residential care, domiciliary care and supported living.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure the organisation has robust safeguarding procedures in place",
          "Act as or designate a Safeguarding Lead",
          "Ensure all safeguarding concerns are referred to the Local Authority",
          "Maintain records of all safeguarding referrals and outcomes",
          "Complete Regulation 18 notifications to CQC where required",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report any suspected or actual abuse immediately to the manager on duty",
          "Not investigate allegations themselves or promise confidentiality",
          "Preserve any evidence relating to an allegation",
          "Cooperate fully with any safeguarding investigation",
          "Complete required safeguarding training",
        ],
      },
    ],
    keyPoints: [
      "Any member of staff who suspects or witnesses abuse must report it immediately — there is no threshold below which a concern should be ignored",
      "The six types of abuse recognised under the Care Act 2014 are: physical, sexual, psychological/emotional, financial/material, neglect, discriminatory, organisational, domestic abuse, modern slavery and self-neglect",
      "Safeguarding is everyone's business — staff should not assume someone else will report a concern",
      "Confidentiality cannot be promised to a person who discloses abuse; information must be shared on a need-to-know basis to protect the person",
      "The Making Safeguarding Personal (MSP) approach requires the person at risk to be central to all safeguarding activity",
    ],
    legislation: [
      "Care Act 2014 (Sections 42–46)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Mental Capacity Act 2005",
      "Human Rights Act 1998",
      "Data Protection Act 2018 / UK GDPR",
      "Modern Slavery Act 2015",
    ],
    sections: [
      {
        heading: "Types of Abuse",
        body: "The Care Act 2014 identifies ten types of abuse: physical abuse, domestic violence or abuse, sexual abuse, psychological or emotional abuse, financial or material abuse, modern slavery, discriminatory abuse, organisational or institutional abuse, neglect and acts of omission, and self-neglect. Staff must be able to recognise the signs and indicators of each type.",
      },
      {
        heading: "Reporting a Safeguarding Concern",
        body: "If a member of staff witnesses or suspects abuse, or a service user discloses abuse, they must: (1) ensure the immediate safety of the person; (2) contact the duty manager immediately; (3) not investigate, confront the alleged abuser, or promise confidentiality; (4) document what was witnessed or disclosed using the person's own words where possible; (5) complete an incident report. The manager will then decide whether a referral to the Local Authority Safeguarding Adults Team is required.",
      },
      {
        heading: "Multi-Agency Working",
        body: "Safeguarding is a multi-agency responsibility. The organisation will work in partnership with the Local Authority, CQC, Police, NHS and other relevant agencies as part of the Safeguarding Adults Board (SAB) framework. Staff will cooperate fully with Safeguarding Adults Reviews (SARs) and Domestic Homicide Reviews (DHRs) where required.",
      },
    ],
  },

  "saf-003": {
    purpose: "This policy ensures the safe management of medicines throughout the organisation, protecting service users from harm caused by medication errors, misuse or poor practice.",
    scope: "Applies to all staff involved in any aspect of medication management, including ordering, receiving, storing, administering, recording and disposing of medicines.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff administering medication hold a current competency sign-off",
          "Oversee quarterly medication audits",
          "Ensure medication errors are investigated and learning shared",
          "Maintain appropriate controlled drug registers",
        ],
      },
      {
        role: "Senior Care Staff / Team Leaders",
        duties: [
          "Conduct monthly MAR chart checks",
          "Ensure stock reconciliation is completed for all controlled drugs",
          "Report medication errors or near misses immediately",
          "Support new staff competency assessments",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Administer medication only when signed off as competent",
          "Complete MAR charts accurately and contemporaneously",
          "Report any medication concerns to a senior immediately",
          "Never administer medication without checking the five rights: right person, right medicine, right dose, right route, right time",
        ],
      },
    ],
    keyPoints: [
      "No medication should be administered without a valid, current prescription or GP-authorised direction",
      "MAR charts must be signed at the time of administration — never in advance or retrospectively",
      "Medication errors must be reported immediately to the manager and GP, and documented on an incident form",
      "Controlled drugs require two signatures for each administration and a running balance in the CD register",
      "Self-administration requires a risk assessment reviewed at least six-monthly or following any change in condition",
    ],
    legislation: [
      "Medicines Act 1968",
      "Misuse of Drugs Act 1971 and Regulations 2001",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Medicines Optimisation Guideline NG5 (2015)",
      "RCN Principles of Safe Medication Management",
    ],
    sections: [
      {
        heading: "Medication Storage",
        body: "All medication must be stored in a locked, purpose-built medicine cabinet. Refrigerated medicines must be stored at 2–8°C with daily temperature logs maintained. Controlled drugs must be stored in a locked, fixed metal cabinet within the medicine room. Keys must not be left unattended.",
      },
      {
        heading: "Medication Administration",
        body: "Staff must follow the five rights of medication administration: right person (check identity and photo on MAR), right medicine (check label against MAR), right dose (check dose on MAR matches prescription), right route (oral, topical, etc.), right time (within 30 minutes either side of prescribed time). Any omission must be coded on the MAR with the reason.",
      },
      {
        heading: "Disposal",
        body: "Unused, discontinued or expired medication must not be flushed down the sink or disposed of in general waste. It must be returned to the pharmacy using the dedicated pharmaceutical waste service (DOOP bags or sharps containers as appropriate). All disposals must be documented with date, name of medication, quantity, reason and witness signature.",
      },
    ],
  },

  "wl-001": {
    purpose: "This Governance Framework sets out how the organisation exercises accountability, manages risk, ensures quality and maintains regulatory compliance. It provides the structural foundation for all governance activity within the service.",
    scope: "Applies to the Board of Directors, Registered Manager, all staff and contracted parties. Covers all regulated activities delivered by the organisation.",
    responsibilities: [
      {
        role: "Board / Provider",
        duties: [
          "Set the strategic direction and values of the organisation",
          "Hold the Registered Manager to account for operational quality",
          "Review performance reports at least quarterly",
          "Ensure sufficient resources are allocated to maintain quality",
        ],
      },
      {
        role: "Registered Manager",
        duties: [
          "Implement and maintain all governance systems",
          "Report to the Board on quality and compliance matters",
          "Lead the organisation's quality improvement programme",
          "Ensure all regulatory notifications are submitted on time",
        ],
      },
    ],
    keyPoints: [
      "The organisation operates a quality assurance framework based on Plan-Do-Study-Act (PDSA) cycles",
      "Key performance indicators are reviewed at monthly governance meetings",
      "All audit findings, incidents and complaints feed into the quality improvement plan",
      "An annual Quality Account is produced and shared with service users and stakeholders",
      "The Registered Manager must notify CQC of notifiable events within the required statutory timescales",
    ],
    legislation: [
      "Health and Social Care Act 2008",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 17",
      "Care Act 2014",
      "The Duty of Candour — Regulation 20",
    ],
    sections: [
      {
        heading: "Quality Assurance System",
        body: "The organisation operates a rolling programme of internal audits covering all five CQC key questions. Audit results are graded (Green/Amber/Red) and action plans are produced for any amber or red findings. Progress is reviewed monthly by the Registered Manager and quarterly by the Board.",
      },
      {
        heading: "Duty of Candour",
        body: "The organisation is committed to openness and transparency. In line with Regulation 20, when a notifiable safety incident occurs, the organisation will: inform the person affected (and their family/representative) as soon as practicable; apologise; investigate and share findings; take action to prevent recurrence.",
      },
    ],
  },
};

/** IDs of policies with full flagship content (12–18 pages, rich procedural detail). */
export const FLAGSHIP_IDS = new Set([
  "saf-001", "eff-002", "saf-003", "eff-001", "eff-004",
  "res-001", "saf-005", "wl-005", "wl-001", "car-001",
]);

// Merge all content sources — specific imports override BASE_CONTENT
// Flagship policies (deepest detail) are merged last so they win over category defaults
export const DOCUMENT_CONTENT: Record<string, DocumentContent> = {
  ...BASE_CONTENT,
  ...SAFE_CONTENT,
  ...EFFECTIVE_CONTENT,
  ...CARING_CONTENT,
  ...RESPONSIVE_CONTENT,
  ...WELLLED_CONTENT,
  // ── Flagship expanded policies ──────────────────────────────────────────────
  "saf-001": SAF001_COMPREHENSIVE,   // Safeguarding Adults at Risk
  "eff-002": EFF002_COMPREHENSIVE,   // Mental Capacity Act 2005
  "saf-003": SAF003_COMPREHENSIVE,   // Medication Management
  "eff-001": EFF001_COMPREHENSIVE,   // Care Planning
  "eff-004": EFF004_COMPREHENSIVE,   // End of Life Care
  "res-001": RES001_COMPREHENSIVE,   // Complaints Handling
  "saf-005": SAF005_COMPREHENSIVE,   // Infection Prevention & Control
  "wl-005": WL005_COMPREHENSIVE,     // Data Protection & GDPR
  "wl-001": WL001_COMPREHENSIVE,     // Governance Framework
  "car-001": CAR001_COMPREHENSIVE,   // Dignity & Respect
  // ── Medium-depth priority policies ─────────────────────────────────────────
  "wl-004": WL004_CONTENT,           // Whistleblowing (Raising Concerns)
  "saf-006": SAF006_CONTENT,         // Risk Assessment
  "wl-002": WL002_CONTENT,           // Recruitment & Selection
  "wl-003": WL003_CONTENT,           // Supervision & Appraisal
  "saf-015": SAF015_CONTENT,         // Accident & Incident Reporting
  // ── Medium-depth batch 2 ───────────────────────────────────────────────────
  "eff-005": EFF005_CONTENT,         // Dementia Care
  "saf-009": SAF009_CONTENT,         // Falls Prevention
  "wl-009": WL009_CONTENT,           // Induction & Mandatory Training
  "saf-012": SAF012_CONTENT,         // Restraint & Restrictive Practice
  "car-002": CAR002_CONTENT,         // Equality, Diversity & Inclusion
  "saf-002": SAF002_CONTENT,         // Safeguarding Children
  "saf-008": SAF008_CONTENT,         // Fire Safety
  "wl-006": WL006_CONTENT,           // Record Keeping & Confidentiality
  "saf-007": SAF007_CONTENT,         // Lone Working
  "eff-003": EFF003_CONTENT,         // Nutrition & Hydration
  "saf-004": SAF004_CONTENT,         // Medication Administration Procedure
  "saf-010": SAF010_CONTENT,         // Moving & Handling
  "saf-014": SAF014_CONTENT,         // Pressure Ulcer Prevention & Management
  "eff-011": EFF011_CONTENT,         // Physical Health Monitoring (NEWS2)
  "wl-017": WL017_CONTENT,           // CQC Registration & Regulatory Compliance
  "saf-013": SAF013_ENHANCED,         // Controlled Drugs (enhanced)
  "saf-011": SAF011_CONTENT,         // Violence & Aggression
  "wl-008": WL008_CONTENT,           // Staffing & Deployment
  "wl-013": WL013_CONTENT,           // Quality Improvement
  "eff-007": EFF007_CONTENT,         // Discharge & Transfer of Care
  "eff-010": EFF010_CONTENT,         // Dysphagia & Swallowing Difficulties
  "saf-016": SAF016_ENHANCED,        // Medicines Covert Administration (enhanced)
  "wl-010": WL010_CONTENT,           // Disciplinary & Capability
  "eff-012": EFF012_CONTENT,         // Positive Behaviour Support
  "wl-014": WL014_CONTENT,           // Information Governance
  "eff-013": EFF013_CONTENT,         // Mental Health & Wellbeing
  "wl-007": WL007_CONTENT,           // Business Continuity
  "car-003": CAR003_CONTENT,         // Communication
  "eff-008": EFF008_CONTENT,         // Continence Management
  "wl-018": WL018_CONTENT,           // Registered Manager Accountability
  "saf-017": SAF017_CONTENT,         // Skin Integrity & Wound Care
  "saf-018": SAF018_CONTENT,         // Environmental Safety & Maintenance
  "saf-019": SAF019_CONTENT,         // PRN (As Required) Medication Policy
  "saf-020": SAF020_CONTENT,         // Medication Error Reporting & Management
  "wl-011": WL011_CONTENT,           // Grievance Policy
  "wl-012": WL012_CONTENT,           // Absence Management
  "car-008": CAR008_CONTENT,         // Advocacy
  "eff-006": EFF006_CONTENT,         // Pressure Ulcer Prevention
  "eff-009": EFF009_CONTENT,         // Oral Health & Dental Care
  "car-006": CAR006_CONTENT,         // Activities & Social Engagement
  "car-007": CAR007_CONTENT,         // Family & Carer Involvement
  "wl-016": WL016_CONTENT,           // Learning & Development Strategy
  "car-004": CAR004_CONTENT,         // Relationships & Sexuality
  "car-005": CAR005_CONTENT,         // Spiritual & Religious Care
  "res-002": RES002_CONTENT,         // Service User Involvement
  "res-003": RES003_CONTENT,         // Compliments & Feedback
  "res-004": RES004_CONTENT,         // Flexible Service Delivery
  "res-005": RES005_CONTENT,         // Hospital Admission & Discharge Liaison
  "wl-015": WL015_CONTENT,           // Equality & Human Rights (Employment)
  // ── New priority policies — Governance & Quality ───────────────────────────
  "gov-001": GOV001_CONTENT,
  "gov-002": GOV002_CONTENT,
  "gov-003": GOV003_CONTENT,
  "gov-004": GOV004_CONTENT,
  "gov-005": GOV005_CONTENT,
  "gov-006": GOV006_CONTENT,
  "gov-007": GOV007_CONTENT,
  // ── New priority policies — Information & Records ──────────────────────────
  "igr-001": IGR001_CONTENT,
  "igr-002": IGR002_CONTENT,
  "igr-003": IGR003_CONTENT,
  "igr-004": IGR004_CONTENT,
  "igr-005": IGR005_CONTENT,
  // ── New priority policies — Workforce & HR ─────────────────────────────────
  "hr-001": HR001_CONTENT,
  "hr-002": HR002_CONTENT,
  "hr-003": HR003_CONTENT,
  "hr-004": HR004_CONTENT,
  "hr-005": HR005_CONTENT,
  "hr-006": HR006_CONTENT,
  "hr-007": HR007_CONTENT,
  // ── New priority policies — Care Operations ────────────────────────────────
  "cop-001": COP001_CONTENT,
  "cop-002": COP002_CONTENT,
  "cop-003": COP003_CONTENT,
  "cop-004": COP004_CONTENT,
  "cop-005": COP005_CONTENT,
  "cop-006": COP006_CONTENT,

  // 2026 Expansion Set
  ...EXPANSION_2026_CONTENT,
  ...EXPANSION_2026B_CONTENT,
  ...EXPANSION_2026C_CONTENT,
  ...EXPANSION_2026D_CONTENT,
  ...EXPANSION_2026E_CONTENT,
  ...EXPANSION_2026F_CONTENT,
};

export function getDocumentsByCategory(keyQuestion?: string): Document[] {
  if (!keyQuestion) return DOCUMENTS;
  return DOCUMENTS.filter((d) => d.keyQuestion === keyQuestion);
}

export function searchDocuments(query: string): Document[] {
  const q = query.toLowerCase();
  return DOCUMENTS.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.tags.some((t) => t.includes(q)) ||
      d.subcategory.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q)
  );
}

export function getDocumentById(id: string): Document | undefined {
  return DOCUMENTS.find((d) => d.id === id);
}

export function getDocumentContent(id: string): DocumentContent | undefined {
  return DOCUMENT_CONTENT[id];
}
