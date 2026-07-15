// ============================================================
// Ziproh Policy Tailoring Engine
// Adapts every policy to the client's care setting — terminology,
// regulator, named roles, setting-specific requirements — captured
// in their Care Setting Profile.
// Works across the full content model (legacy + new-format policies)
// via a deep-walking transformer.
// ============================================================

import type { Document, DocumentContent } from "./documents";

// ---------- Types ----------

export type MedicationLevel = "none" | "prompt" | "administer" | "full";

export type CareProfile = {
  orgName: string;
  serviceType: string;
  regulator: string;
  serviceUserGroups: string[];
  nursingCare: boolean;
  complexCare: boolean;
  medicationLevel: MedicationLevel;
  registeredManager?: string | null;
  safeguardingLead?: string | null;
  localAuthority?: string | null;
};

export type TailoredResult = {
  content: DocumentContent;
  /** Human-readable list of adaptations applied */
  applied: string[];
};

// ---------- Canonical option lists ----------

export const SERVICE_TYPES = [
  "Residential Care Home",
  "Nursing Home",
  "Domiciliary Care",
  "Supported Living",
  "Day Services",
  "Learning Disabilities",
  "Mental Health Services",
  "Children's Services",
  "Hospital",
  "GP Practice",
  "Dental Practice",
  "Hospice",
  "Other",
] as const;

export const SERVICE_USER_GROUPS = [
  "Older adults",
  "People living with dementia",
  "Adults with learning disabilities",
  "Autistic people",
  "People with mental health needs",
  "People with physical disabilities",
  "People with sensory impairments",
  "Children and young people",
  "People at end of life",
] as const;

export const MEDICATION_LEVELS: { value: MedicationLevel; label: string; description: string }[] = [
  { value: "none", label: "No medication support", description: "We do not handle medication at all" },
  { value: "prompt", label: "Prompting / reminding only", description: "Staff prompt people to take their own medication" },
  { value: "administer", label: "Administering medication", description: "Staff administer medication from original packaging or MDS" },
  { value: "full", label: "Full management incl. controlled drugs", description: "Ordering, storage, administration, controlled drugs and disposal" },
];

// ---------- Per-setting terminology ----------

type SettingConfig = {
  label: string;
  person: string;
  people: string;
  setting: string;
  premises: boolean;
  scopeNote: string;
};

const SETTINGS: Record<string, SettingConfig> = {
  "Residential Care Home": {
    label: "Residential Care Home",
    person: "resident", people: "residents", setting: "the home", premises: true,
    scopeNote: "Care is delivered within the home's premises, including communal areas, residents' private rooms and grounds.",
  },
  "Nursing Home": {
    label: "Nursing Home",
    person: "resident", people: "residents", setting: "the home", premises: true,
    scopeNote: "Care, including nursing care delivered by registered nurses, is provided within the home's premises at all times of day and night.",
  },
  "Domiciliary Care": {
    label: "Domiciliary Care Provider",
    person: "service user", people: "service users", setting: "the agency", premises: false,
    scopeNote: "Care is delivered in service users' own homes; staff frequently work alone and must apply this policy in environments the agency does not control.",
  },
  "Supported Living": {
    label: "Supported Living Service",
    person: "person we support", people: "people we support", setting: "the service", premises: false,
    scopeNote: "Support is delivered in people's own tenancies; the people we support hold their own tenancy rights and this policy must be applied in a way that respects their home.",
  },
  "Day Services": {
    label: "Day Service",
    person: "service user", people: "service users", setting: "the service", premises: true,
    scopeNote: "Support is delivered during service operating hours; arrangements for arrival, departure and handover to family carers or other services are within scope.",
  },
  "Learning Disabilities": {
    label: "Learning Disability Service",
    person: "person we support", people: "people we support", setting: "the service", premises: false,
    scopeNote: "Support must be provided in line with the principles of Right Support, Right Care, Right Culture, promoting choice, independence and inclusion.",
  },
  "Mental Health Services": {
    label: "Mental Health Service",
    person: "service user", people: "service users", setting: "the service", premises: false,
    scopeNote: "Support must have regard to the Mental Health Act 1983 Code of Practice and recovery-focused, least-restrictive principles.",
  },
  "Children's Services": {
    label: "Children's Service",
    person: "child or young person", people: "children and young people", setting: "the service", premises: true,
    scopeNote: "All activity under this policy must be applied with primacy given to the welfare and safeguarding of children and young people.",
  },
  Hospital: {
    label: "Hospital",
    person: "patient", people: "patients", setting: "the hospital", premises: true,
    scopeNote: "This policy applies across all wards, departments and clinical areas, and to all clinical and non-clinical staff.",
  },
  "GP Practice": {
    label: "GP Practice",
    person: "patient", people: "patients", setting: "the practice", premises: true,
    scopeNote: "This policy applies to all clinical sessions, home visits conducted by practice staff, and remote consultations.",
  },
  "Dental Practice": {
    label: "Dental Practice",
    person: "patient", people: "patients", setting: "the practice", premises: true,
    scopeNote: "This policy applies to all surgeries, decontamination areas and patient-facing areas of the practice.",
  },
  Hospice: {
    label: "Hospice",
    person: "patient", people: "patients", setting: "the hospice", premises: true,
    scopeNote: "This policy applies to inpatient, day therapy and community/hospice-at-home services.",
  },
  Other: {
    label: "Care Service",
    person: "service user", people: "service users", setting: "the service", premises: true,
    scopeNote: "",
  },
};

const LEGACY_SERVICE_TYPE_MAP: Record<string, string> = {
  "Care & Nursing Home": "Nursing Home",
  "Residential Care Home": "Residential Care Home",
  "Domiciliary Care Provider": "Domiciliary Care",
  "General Practice (GP)": "GP Practice",
  "Healthcare Clinic": "GP Practice",
  "Community Care Organisation": "Domiciliary Care",
};

export function canonicalServiceType(value: string | null | undefined): string {
  if (!value) return "Other";
  if (SETTINGS[value]) return value;
  return LEGACY_SERVICE_TYPE_MAP[value] ?? "Other";
}

export function settingConfig(profile: CareProfile): SettingConfig {
  return SETTINGS[canonicalServiceType(profile.serviceType)];
}

// ---------- Regulator configuration ----------

type RegulatorConfig = {
  short: string;
  full: string;
  nation: string;
  primaryRegs: string;
  notificationBody: string;
};

const REGULATORS: Record<string, RegulatorConfig> = {
  "CQC (England)": {
    short: "CQC", full: "Care Quality Commission", nation: "England",
    primaryRegs: "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
    notificationBody: "CQC",
  },
  "CIW (Wales)": {
    short: "CIW", full: "Care Inspectorate Wales", nation: "Wales",
    primaryRegs: "Regulation and Inspection of Social Care (Wales) Act 2016 and the Regulated Services (Service Providers and Responsible Individuals) (Wales) Regulations 2017",
    notificationBody: "CIW",
  },
  "Care Inspectorate (Scotland)": {
    short: "Care Inspectorate", full: "Care Inspectorate", nation: "Scotland",
    primaryRegs: "Public Services Reform (Scotland) Act 2010 and the Health and Social Care Standards",
    notificationBody: "the Care Inspectorate",
  },
  "RQIA (Northern Ireland)": {
    short: "RQIA", full: "Regulation and Quality Improvement Authority", nation: "Northern Ireland",
    primaryRegs: "Health and Personal Social Services (Quality, Improvement and Regulation) (Northern Ireland) Order 2003",
    notificationBody: "RQIA",
  },
};

export function regulatorConfig(profile: CareProfile): RegulatorConfig {
  return REGULATORS[profile.regulator] ?? REGULATORS["CQC (England)"];
}

// ---------- Text transformation ----------

function matchCase(replacement: string, matched: string): string {
  if (matched[0] === matched[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function tailorText(text: string, profile: CareProfile): string {
  const s = settingConfig(profile);
  const r = regulatorConfig(profile);
  let out = text;

  if (s.people !== "service users") {
    out = out.replace(/service users(['’]s?)?/g, (_m, poss) => `${s.people}${poss ?? ""}`);
    out = out.replace(/Service users(['’]s?)?/g, (m, poss) => matchCase(s.people, m) + (poss ?? ""));
    out = out.replace(/service user(['’]s?)?/g, (_m, poss) => `${s.person}${poss ?? ""}`);
    out = out.replace(/Service user(['’]s?)?/g, (m, poss) => matchCase(s.person, m) + (poss ?? ""));
  }

  if (s.setting !== "the service") {
    out = out.replace(/\bthe service\b(?! user)/g, s.setting);
    out = out.replace(/\bThe service\b(?! user)/g, matchCase(s.setting, "The"));
  }

  if (profile.orgName) {
    out = out.replace(/\bthe organisation['’]s\b/g, `${profile.orgName}'s`);
    out = out.replace(/\bThe organisation['’]s\b/g, `${profile.orgName}'s`);
    out = out.replace(/\bthe organisation\b/g, profile.orgName);
    out = out.replace(/\bThe organisation\b/g, profile.orgName);
    // legacy {{ORG_NAME}}-style placeholders used by some new-format policies
    out = out.replace(/\[Organisation Name\]/g, profile.orgName);
    out = out.replace(/\{\{ORG_NAME\}\}/g, profile.orgName);
  }

  if (r.short !== "CQC") {
    out = out.replace(/CQC Regulation \d+ notifications?/g, `statutory notifications to ${r.notificationBody}`);
    out = out.replace(/\bCQC['’]s\b/g, `${r.short}'s`);
    out = out.replace(/\bCQC\b/g, r.short);
  }

  if (profile.localAuthority) {
    out = out.replace(/\bthe Local Authority\b/g, `${profile.localAuthority} (the Local Authority)`);
  }

  return out;
}

function tailorLegislation(legislation: string[], profile: CareProfile): string[] {
  const r = regulatorConfig(profile);
  if (r.short === "CQC") return legislation;
  return legislation.map((law) =>
    law.startsWith("Health and Social Care Act 2008") ? r.primaryRegs : law
  );
}

// ---------- Deep transformer ----------

/** Keys whose string values must never be text-tailored */
const SKIP_KEYS = new Set([
  "policyId", "version", "effectiveDate", "reviewDate", "nextReviewDate",
  "approvedBy", "reviewedBy", "relatedDocuments", "legislation", "term", "type",
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepTailor(value: any, profile: CareProfile, parentKey?: string): any {
  if (typeof value === "string") {
    if (parentKey && SKIP_KEYS.has(parentKey)) return value;
    return tailorText(value, profile);
  }
  if (Array.isArray(value)) {
    if (parentKey && SKIP_KEYS.has(parentKey)) return value;
    return value.map((v) => deepTailor(v, profile, parentKey === "legislation" ? "legislation" : undefined));
  }
  if (value && typeof value === "object") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const out: any = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = SKIP_KEYS.has(k) ? v : deepTailor(v, profile, k);
    }
    return out;
  }
  return value;
}

function sectionApplies(heading: string | undefined, profile: CareProfile): boolean {
  if (!heading) return true;
  const h = heading.toLowerCase();
  if (!profile.nursingCare && /\b(nursing|registered nurse)\b/.test(h)) return false;
  return true;
}

// ---------- Main entry point ----------

export function tailorContent(
  content: DocumentContent,
  profile: CareProfile,
  doc?: Document
): TailoredResult {
  const s = settingConfig(profile);
  const r = regulatorConfig(profile);
  const applied: string[] = [];

  if (s.people !== "service users") {
    applied.push(`Terminology adapted — "service users" becomes "${s.people}"`);
  }
  if (s.setting !== "the service") {
    applied.push(`References to "the service" become "${s.setting}"`);
  }
  applied.push(`Written for a ${s.label.toLowerCase()} regulated by ${r.full} (${r.nation})`);

  // Deep-walk everything first
  const t: DocumentContent = deepTailor(content, profile);

  // Legislation swap (deep walk skipped it)
  if (t.legislation) t.legislation = tailorLegislation(t.legislation, profile);

  // Scope: prepend org statement + delivery-context note
  const orgStatement = `This policy applies to ${profile.orgName || "the organisation"}, a ${s.label.toLowerCase()} regulated by the ${r.full}.`;
  t.scope = [orgStatement, t.scope, s.scopeNote].filter(Boolean).join(" ");
  if (s.scopeNote) applied.push("Scope extended with delivery-context requirements for your setting");

  // Named post-holders
  if (t.responsibilities) {
    t.responsibilities = t.responsibilities.map((resp) => {
      let role = resp.role;
      if (/registered manager/i.test(role) && profile.registeredManager) {
        role = `${role} — ${profile.registeredManager}`;
      }
      if (/safeguarding lead/i.test(role) && profile.safeguardingLead) {
        role = `${role} — ${profile.safeguardingLead}`;
      }
      return { ...resp, role };
    });
  }
  if (profile.registeredManager) applied.push(`Registered Manager named as ${profile.registeredManager}`);
  if (profile.safeguardingLead) applied.push(`Safeguarding Lead named as ${profile.safeguardingLead}`);

  // Section relevance filtering (nursing content hidden for non-nursing services)
  const filterSections = <T extends { heading?: string; title?: string }>(arr?: T[]) => {
    if (!arr) return arr;
    const kept = arr.filter((sec) => sectionApplies(sec.heading ?? sec.title, profile));
    if (kept.length < arr.length) {
      applied.push(`${arr.length - kept.length} section(s) not applicable to your setting removed`);
    }
    return kept;
  };
  t.sections = filterSections(t.sections);
  t.procedure = filterSections(t.procedure);

  // Auto-generated Local Arrangements section
  const localLines: string[] = [];
  if (profile.orgName) localLines.push(`Provider: ${profile.orgName}.`);
  localLines.push(`Service type: ${s.label}.`);
  localLines.push(`Regulator: ${r.full} (${r.nation}).`);
  if (profile.registeredManager) localLines.push(`Registered Manager: ${profile.registeredManager}.`);
  if (profile.safeguardingLead) localLines.push(`Safeguarding Lead: ${profile.safeguardingLead}.`);
  if (profile.localAuthority) localLines.push(`Local Authority: ${profile.localAuthority}.`);
  if (profile.serviceUserGroups.length > 0) {
    localLines.push(`This policy is applied in the context of supporting ${profile.serviceUserGroups.map((g) => g.toLowerCase()).join(", ")}.`);
  }
  if (profile.medicationLevel !== "full" && doc && /medication|medicines|drugs/i.test(doc.title)) {
    const levelText: Record<MedicationLevel, string> = {
      none: "This service does not provide medication support; this policy applies only should that position change.",
      prompt: "This service prompts and reminds people to take their own medication only; sections on administration apply only where commissioned arrangements change.",
      administer: "This service administers medication but does not hold stocks of controlled drugs on the premises.",
      full: "",
    };
    if (levelText[profile.medicationLevel]) {
      localLines.push(levelText[profile.medicationLevel]);
      applied.push("Medication responsibilities aligned to your declared level of medication support");
    }
  }
  const localSection = { heading: "Local Arrangements", body: localLines.join(" ") };
  if (t.procedure && t.procedure.length > 0) t.procedure = [...t.procedure, localSection];
  else t.sections = [...(t.sections ?? []), localSection];
  applied.push("Local Arrangements section generated from your Care Setting Profile");

  // Complex care overlay
  if (profile.complexCare) {
    const overlay = {
      heading: "Complex Care Requirements",
      body:
        `Because ${profile.orgName || "this service"} supports ${s.people} with complex clinical needs, this policy must be applied alongside individual clinical care plans and delegated healthcare task agreements. ` +
        `Staff undertaking clinical tasks (for example tracheostomy care, enteral feeding, ventilation support, catheter or stoma care) must hold current, task-specific competency sign-off from a registered healthcare professional before performing them unsupervised. ` +
        `Any deterioration, equipment failure or missed clinical intervention connected to the subject of this policy must be escalated immediately in line with the escalation plan, and reviewed through clinical governance. ` +
        `Competency records, training dates and clinical incidents relating to this policy are audited monthly by the Registered Manager${profile.registeredManager ? ` (${profile.registeredManager})` : ""}.`,
    };
    if (t.procedure && t.procedure.length > 0) t.procedure = [...t.procedure, overlay];
    else t.sections = [...(t.sections ?? []), overlay];
    applied.push("Complex care overlay applied — clinical competency, delegation and escalation requirements added");
  }

  if (t.appendices && t.appendices.length > 0) {
    applied.push(`${t.appendices.length} appendix template${t.appendices.length > 1 ? "s" : ""} adapted to your setting`);
  }

  return { content: t, applied };
}

// ---------- Profile helpers ----------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function profileFromRow(row: any): CareProfile {
  return {
    orgName: row?.org_name ?? "",
    serviceType: canonicalServiceType(row?.service_type),
    regulator: row?.regulator ?? "CQC (England)",
    serviceUserGroups: row?.service_user_groups ?? [],
    nursingCare: row?.nursing_care ?? false,
    complexCare: row?.complex_care ?? false,
    medicationLevel: (row?.medication_level as MedicationLevel) ?? "administer",
    registeredManager: row?.registered_manager ?? null,
    safeguardingLead: row?.safeguarding_lead ?? null,
    localAuthority: row?.local_authority ?? null,
  };
}

const DOC_TAG_MAP: Record<string, string[]> = {
  "Residential Care Home": ["Care & Nursing Home", "Residential"],
  "Nursing Home": ["Care & Nursing Home", "Nursing Home", "Residential"],
  "Domiciliary Care": ["Domiciliary Care"],
  "Supported Living": ["Supported Living"],
  "Day Services": ["Supported Living", "Residential"],
  "Learning Disabilities": ["Supported Living", "Residential"],
  "Mental Health Services": ["Supported Living", "Residential"],
  "Children's Services": ["Residential"],
  Hospital: ["Care & Nursing Home", "Nursing Home"],
  "GP Practice": [],
  "Dental Practice": [],
  Hospice: ["Hospice", "Nursing Home"],
  Other: [],
};

export function docRelevantTo(doc: Document, profile: CareProfile): boolean {
  if (doc.serviceTypes.includes("All")) return true;
  const tags = DOC_TAG_MAP[canonicalServiceType(profile.serviceType)] ?? [];
  return doc.serviceTypes.some((st) => tags.includes(st));
}
