// Ziproh Compliance Centre — Document Library
// Categories aligned to CQC's 5 Key Questions and UK care regulatory frameworks

export type Document = {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  keyQuestion: "Safe" | "Effective" | "Caring" | "Responsive" | "Well-Led";
  serviceTypes: string[];
  regulators: string[];
  version: string;
  lastUpdated: string;
  status: "current" | "updated" | "review";
  readTime: number;
  tags: string[];
  summary: string;
};

export type DocumentContent = {
  purpose: string;
  scope: string;
  responsibilities: { role: string; duties: string[] }[];
  keyPoints: string[];
  legislation: string[];
  sections: { heading: string; body: string }[];
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
  },
  {
    id: "saf-005",
    title: "Infection Prevention & Control Policy",
    category: "Safe", subcategory: "Infection Prevention & Control", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "6.1", lastUpdated: "2026-05-28", status: "updated", readTime: 14,
    tags: ["IPC", "infection", "hygiene", "PPE", "MRSA"],
    summary: "Policy to prevent and control the spread of infections within the service, including hand hygiene, PPE use, and outbreak management.",
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
];

// ─── Document content (rich policy body) ──────────────────────────────────
export const DOCUMENT_CONTENT: Record<string, DocumentContent> = {
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
