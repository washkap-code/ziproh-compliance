// Ziproh Compliance — 2026 Expansion Set B (Group 4: Health, Safety & Premises)
// All content original. Written tailoring-ready (generic base terms adapt per care setting).

import type { Document, DocumentContent } from "./documents";

export const EXPANSION_2026B_DOCS: Document[] = [
  {
    id: "saf-029",
    title: "Health & Safety Policy (Organisational)",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 16,
    tags: ["health and safety", "policy statement", "risk assessment", "HSE", "duties"],
    summary: "The top-level health and safety framework: the legally required policy statement, organisation of responsibilities, arrangements for every major risk area, competent-person arrangements, consultation and review.",
  },
  {
    id: "saf-030",
    title: "COSHH Policy (Control of Hazardous Substances)",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 14,
    tags: ["COSHH", "hazardous substances", "chemicals", "safety data sheets", "assessments"],
    summary: "Controlling hazardous substances from cleaning chemicals to clinical products: the substance inventory, COSHH assessments, storage and segregation, safe use and spill response, and health surveillance triggers.",
  },
  {
    id: "saf-031",
    title: "Legionella & Water Safety Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Residential", "Nursing Home", "Supported Living", "Hospice"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 14,
    tags: ["legionella", "water safety", "temperature monitoring", "flushing", "risk assessment"],
    summary: "Managing legionella and water system risks: the water safety risk assessment, monthly temperature monitoring, flushing of little-used outlets, shower head descaling, scalding prevention balance, and the written scheme of control.",
  },
  {
    id: "saf-032",
    title: "Electrical Safety Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 12,
    tags: ["electrical safety", "PAT", "EICR", "fixed wiring", "portable appliances"],
    summary: "Electrical safety across fixed installations and portable appliances: EICR cycles, in-service inspection and testing, visual checks staff actually do, personal electrical items brought in by residents and families, and fault reporting.",
  },
  {
    id: "saf-033",
    title: "Gas Safety Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Residential", "Nursing Home", "Supported Living", "Hospice"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 11,
    tags: ["gas safety", "Gas Safe", "CP12", "carbon monoxide", "boilers"],
    summary: "Annual gas safety checks by Gas Safe engineers, landlord certificate duties, carbon monoxide detection, gas emergency response, and the arrangements for gas appliances in people's own homes in community settings.",
  },
  {
    id: "saf-034",
    title: "Equipment Safety & Lifting Operations Policy (PUWER/LOLER)",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 14,
    tags: ["equipment", "LOLER", "PUWER", "hoists", "thorough examination", "maintenance"],
    summary: "Work equipment and lifting equipment safety: the equipment register, six-monthly thorough examination of hoists and slings, pre-use checks staff really do, servicing versus examination, defect quarantine, and equipment owned by others in community settings.",
  },
  {
    id: "saf-035",
    title: "Medical Devices Management Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 13,
    tags: ["medical devices", "MHRA", "safety alerts", "calibration", "adverse incidents"],
    summary: "Managing medical devices from profiling beds and pressure mattresses to thermometers and glucometers: the device inventory, calibration and servicing, MHRA safety alert handling, adverse incident reporting, decontamination and end-of-life.",
  },
  {
    id: "saf-036",
    title: "Waste Management Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 12,
    tags: ["waste", "duty of care", "segregation", "waste transfer notes", "offensive waste"],
    summary: "The waste duty of care end to end: segregation streams and colour coding, safe internal storage, licensed carriers and transfer documentation, confidential waste, recycling, and what changes in domiciliary and supported living settings.",
  },
  {
    id: "saf-037",
    title: "Clinical Waste & Sharps Safety Policy",
    category: "Safe", subcategory: "Infection Control", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 13,
    tags: ["clinical waste", "sharps", "needlestick", "colour coding", "consignment notes"],
    summary: "Clinical waste and sharps from generation to disposal: the colour-coded stream system, sharps container discipline, safer sharps devices, the immediate needlestick response, medicines waste, and consignment note records.",
  },
  {
    id: "saf-038",
    title: "Laundry & Linen Management Policy",
    category: "Safe", subcategory: "Infection Control", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Residential", "Nursing Home", "Supported Living", "Hospice"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 11,
    tags: ["laundry", "linen", "infection control", "thermal disinfection", "segregation"],
    summary: "Safe laundry from bedside to airing cupboard: segregation of used, foul and infectious linen, water-soluble bag discipline, thermal and chemical disinfection parameters, personal clothing care, uniforms, and machine maintenance.",
  },
  {
    id: "saf-039",
    title: "Cleaning & Decontamination Policy",
    category: "Safe", subcategory: "Infection Control", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 14,
    tags: ["cleaning", "decontamination", "colour coding", "spillage", "deep clean", "audit"],
    summary: "Environmental cleanliness as an infection control system: schedules by risk, colour-coded equipment, the three decontamination levels, body fluid spill response, outbreak enhanced cleaning, and audits that check outcomes rather than signatures.",
  },
  {
    id: "saf-040",
    title: "Pest Control Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["Care & Nursing Home", "Residential", "Nursing Home", "Supported Living", "Hospice"],
    regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 10,
    tags: ["pest control", "infestation", "proofing", "food safety", "contractor"],
    summary: "Keeping pests out and dealing with them fast when they get in: proofing and housekeeping prevention, monitoring, the contractor arrangement, the response to sightings, and the dignity and food-safety dimensions of infestation.",
  },
  {
    id: "saf-041",
    title: "Contractor Management Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 12,
    tags: ["contractors", "permits to work", "vetting", "induction", "safeguarding", "asbestos"],
    summary: "Contractors on care premises: selection and vetting, site induction, permits for high-risk work, supervision and safeguarding around people we support, sharing what contractors must know (asbestos, fragile residents), and monitoring the work.",
  },
  {
    id: "saf-042",
    title: "Smoking & Vaping Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 11,
    tags: ["smoking", "vaping", "smoke-free", "fire risk", "emollients", "oxygen", "risk assessment"],
    summary: "Balancing smoke-free law, fire safety and people's right to smoke: designated arrangements, individual smoking risk assessments, the oxygen and emollient fire interactions, vaping rules, staff obligations and cessation support.",
  },
  {
    id: "saf-043",
    title: "First Aid Policy",
    category: "Safe", subcategory: "Health & Safety", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-15", status: "updated", readTime: 11,
    tags: ["first aid", "first aiders", "needs assessment", "kits", "AED", "emergency response"],
    summary: "First aid provision built on a needs assessment: enough trained first aiders on every shift, kits stocked and where the work happens, AED arrangements, the response and recording chain, and first aid in lone working and community settings.",
  },
];

export const EXPANSION_2026B_CONTENT: Record<string, DocumentContent> = {
  "saf-029": {
    purpose: "This policy is the organisation's top-level health and safety framework, fulfilling the legal duty to have a written health and safety policy: the statement of intent signed by the most senior person, the organisation of who does what, and the arrangements for managing every significant risk the service faces. Every specific safety policy in the library — fire, COSHH, moving and handling, water, electrical, equipment — hangs from this one.",
    scope: "Applies to all premises, activities, staff, service users, visitors and contractors. Covers the employer's duties to employees and to persons not in its employment affected by its undertaking — which, in a care service, means the people supported most of all.",
    responsibilities: [
      { role: "Provider / Most Senior Person", duties: [
        "Sign and own the health and safety policy statement, reviewed annually",
        "Ensure adequate resources — time, money, training, equipment — for safety to be real rather than written",
        "Appoint competent health and safety assistance (internal or external) and record the arrangement",
        "Receive safety performance reports at governance meetings: incidents, RIDDOR, risk assessment currency, audit results" ] },
      { role: "Registered Manager", duties: [
        "Implement this policy day to day: maintain the risk assessment programme, the safety arrangements register and the training matrix",
        "Investigate accidents and incidents, meet RIDDOR duties, and act on findings",
        "Consult staff on matters affecting their health and safety",
        "Coordinate contractor safety and premises compliance (fire, gas, electrical, water, lifts, equipment)" ] },
      { role: "All Staff", duties: [
        "Take reasonable care of their own safety and that of others affected by their acts and omissions",
        "Use equipment, PPE and safe systems of work as trained and instructed",
        "Report hazards, defects, accidents and near misses promptly",
        "Never undertake tasks they are not trained and competent to perform" ] },
    ],
    keyPoints: [
      "The written policy has three legally expected parts: the statement of general policy (signed, dated, displayed), the organisation (who is responsible for what, by name or role), and the arrangements (how each significant risk is managed)",
      "Risk assessment is the engine: every significant hazard has a suitable and sufficient assessment, recorded, communicated to those affected, and reviewed on schedule and after any relevant incident",
      "In care settings the assessments must cover both workforce risks (moving and handling, violence, lone working, stress, sharps) and service user risks (falls, choking, bed rails, scalding, absconding) — the same rigour for both",
      "Competent assistance is appointed: someone with the training, knowledge and experience to advise — in-house or consultant — and staff know who it is",
      "Consultation is a duty, not a courtesy: staff are consulted on changes affecting their safety, through meetings, representatives or direct discussion, and it is recorded",
      "The employer's liability insurance certificate is current and displayed",
      "Safety performance is governed like care quality: incident trends, assessment currency, training compliance and audit results flow to governance with actions",
      "The annual review re-signs the statement, refreshes the arrangements register, and asks the honest question: did our arrangements match our practice this year?",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974 — Sections 2, 3 and 7",
      "Management of Health and Safety at Work Regulations 1999",
      "Workplace (Health, Safety and Welfare) Regulations 1992",
      "RIDDOR 2013",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "Employers' Liability (Compulsory Insurance) Act 1969",
    ],
    sections: [
      { heading: "The Policy Statement", body: "The statement of general policy (Appendix A) declares the organisation's commitment: to provide safe premises, equipment and systems of work; to assess and control risks to staff, service users, visitors and contractors; to provide the information, instruction, training and supervision safety requires; to consult staff; to investigate and learn from incidents; and to review performance annually. It is signed and dated by the most senior accountable person, displayed where staff and visitors can read it, and re-signed at every annual review or change of that person. An unsigned or out-of-date statement is the first thing an inspector or HSE visitor notices." },
      { heading: "Organisation — Who Does What", body: "The organisation section names responsibility at every level: the provider holds ultimate accountability and resources; the Registered Manager implements and coordinates; nominated leads hold specific domains where appointed (fire lead, IPC lead, moving and handling lead, COSHH lead, water safety responsible person); the competent person provides advice (named, with contact details and the basis of their competence); and every employee holds the individual duties of the Act. Deputisation is defined so responsibility never evaporates on leave. The current allocation is maintained in the arrangements register (Appendix B) and reissued when roles change." },
      { heading: "Arrangements — How Each Risk Is Managed", body: "The arrangements register lists every significant risk area and, for each: the governing policy or procedure, the responsible role, the assessment(s) covering it, the checks and their frequencies, and the records held. Core entries for a care service include: fire safety; moving and handling; medication handling; violence and aggression; lone working; COSHH; water safety and legionella; electrical and gas safety; equipment and lifting equipment (LOLER); slips, trips and falls (premises); bed rails and bed safety; scalding and hot surfaces; infection prevention; sharps and clinical waste; food safety; contractors and construction work; work at height; display screen equipment; stress and wellbeing; driving for work; and first aid provision. The register is the index an inspector can follow from any risk to its evidence in under a minute." },
      { heading: "Risk Assessment Programme", body: "Assessments follow the five-step discipline: identify hazards; identify who may be harmed and how (staff, service users, visitors, contractors — including those with particular vulnerabilities); evaluate the risks and decide on controls using the hierarchy (eliminate, substitute, engineer, administrate, PPE last); record significant findings and implement; review on schedule (at least annually for high-risk areas), after incidents, and on change. Generic assessments are localised — a template not adapted to this building and these people assesses nothing. Individual service user risk assessments (falls, choking, bed rails, absconding) sit in care plans and cross-reference here. Staff who carry out assessments are trained to do so, and assessments are communicated to the people they protect — a filed assessment nobody has read controls nothing." },
      { heading: "Accidents, Investigation and RIDDOR", body: "All accidents, incidents and near misses are reported and recorded per the Accident & Incident Reporting Policy, investigated proportionately per the Incident Investigation procedure, and checked against RIDDOR: deaths, specified injuries, over-seven-day incapacitation of workers, occupational diseases, and dangerous occurrences are reported to HSE within the statutory timescales, by the manager, with the report reference retained. Service user accidents arising from work activity (equipment failures, premises defects) can be RIDDOR-reportable too — the decision guide in the accident policy covers the distinction. Investigation findings feed the risk assessment review and the improvement plan, closing the loop between what happened and what changes." },
      { heading: "Training, Consultation and Review", body: "Safety training follows the matrix: induction covers this policy, fire response, incident reporting, safe moving and handling basics and the hazards of the person's role; role-specific and refresher training follows the matrix's cycles; and training records evidence it all. Consultation happens through team meetings with safety as a standing item, direct consultation on changes (new equipment, new procedures, premises works), and an open reporting culture the manager protects. The annual review examines: incident and RIDDOR data, assessment currency, training compliance, audit and inspection findings, contractor performance, and whether arrangements matched reality — concluding with the re-signed statement and a refreshed register reported to governance." },
    ],
    appendices: [
      { title: "Health & Safety Policy Statement (sign and display)", type: "template", body:
"HEALTH AND SAFETY POLICY STATEMENT\n\n[Organisation name] is committed to ensuring, so far as is reasonably practicable, the health, safety and welfare of everyone affected by our work: the people we support, our staff, visitors and contractors.\n\nWe will:\n- Provide and maintain safe premises, equipment and systems of work\n- Assess the risks of our activities and put effective controls in place\n- Provide the information, instruction, training and supervision needed for safety\n- Consult our staff on matters affecting their health and safety\n- Provide and maintain appropriate personal protective equipment at no cost to staff\n- Record, investigate and learn from accidents, incidents and near misses, and meet all statutory reporting duties\n- Provide adequate first aid and emergency arrangements\n- Engage competent health and safety advice\n- Review this policy and our performance at least annually\n\nEvery member of staff has a legal duty to take reasonable care of themselves and others, to cooperate with these arrangements, and to report hazards and concerns — and will be supported in doing so.\n\nOverall responsibility for health and safety rests with the undersigned. Day-to-day implementation is delegated to the Registered Manager.\n\nSigned: ______________  Name: ______________  Position: ______________  Date: ______  Review due: ______" },
      { title: "Safety Arrangements Register", type: "template", body:
"One row per risk area. Owner: Registered Manager. Reviewed annually and on change.\n\nColumns: Risk area | Governing policy/procedure | Responsible role (named) | Risk assessment ref + last review | Routine checks (what/frequency/by whom) | Records location | Status\n\nCore rows: Fire safety | Moving & handling | Medication | Violence & aggression | Lone working | COSHH | Water safety/legionella | Electrical (EICR/PAT) | Gas (CP12) | Equipment & LOLER | Premises (slips/trips) | Bed rails & bed safety | Scalding & hot surfaces | IPC | Sharps & clinical waste | Food safety | Contractors | Work at height | DSE | Stress & wellbeing | Driving for work | First aid\n\nCompetent person (H&S assistance): name/organisation ______ basis of competence ______ contact ______\nEmployers' liability insurance: insurer ______ policy ______ expiry ______ certificate displayed [ ]" },
      { title: "Five-Step Risk Assessment Form", type: "form", body:
"Assessment ref: ______   Activity/area: ______   Date: ______   Assessor: ______\n\n1. HAZARDS (what could cause harm): ______\n2. WHO might be harmed and how (staff/service users/visitors/contractors — note particular vulnerabilities): ______\n3. CONTROLS — current: ______\n   Risk with current controls: Likelihood (1-5) × Severity (1-5) = ______\n   Further controls needed (hierarchy: eliminate > substitute > engineering > administrative > PPE):\n   Action | Owner | Due | Done\n   ______ | ______ | ______ | ______\n   Residual risk after actions: ______\n4. RECORDED and communicated to (how — briefing/handover/training, date): ______\n5. REVIEW: date due ______ | triggers: incident involving this activity / change of equipment, premises, people / new information\n\nSigned: ______   Manager approval: ______" },
    ],
  },

  "saf-030": {
    purpose: "This policy controls exposure to substances hazardous to health — cleaning chemicals, disinfectants, clinical products, thickening powders, medicines as substances, dusts and biological agents — so that nobody is harmed by what the service uses, stores or produces. In care settings COSHH failures hurt twice: staff exposed through daily use, and service users — particularly people living with dementia or cognitive impairment — harmed by ingesting or contacting substances left within reach.",
    scope: "Applies to all substances hazardous to health used, stored, generated or encountered across the service: cleaning and laundry chemicals, disinfectants, clinical and personal care products with hazard classifications, thickening powders, oxygen (jointly with the Oxygen Policy), biological agents (jointly with IPC), and dusts or fumes from maintenance activities. Applies to all staff and to contractors bringing substances on site.",
    responsibilities: [
      { role: "Registered Manager (or nominated COSHH lead)", duties: [
        "Maintain the substance inventory: nothing hazardous is used until it is listed, assessed and its controls in place",
        "Hold current safety data sheets for every listed substance, accessible to staff",
        "Complete and review COSHH assessments, and ensure the controls they specify are real",
        "Control purchasing: new substances enter by the approval route, not by whoever does the shopping",
        "Ensure spill kits, first aid measures and emergency information match the substances actually held" ] },
      { role: "All Staff", duties: [
        "Use substances only as assessed and trained: right product, right dilution, right PPE, right ventilation",
        "Never decant into unmarked containers — and never, ever, into drink bottles or food containers",
        "Store substances locked away immediately after use — an unattended trolley with chemicals in a corridor is an incident waiting for a resident",
        "Report spills, exposures, ill effects and missing data sheets immediately" ] },
    ],
    keyPoints: [
      "The inventory is the boundary: if a substance is not on the inventory with an assessment, it is not used — including products staff bring from home and 'samples' from reps",
      "Assessments follow exposure, not just labels: how the substance is actually used (spraying creates mist; mixing creates reactions; long tasks extend exposure) determines the controls",
      "Never mix cleaning chemicals — bleach with acids or ammonia products generates toxic gases; the rule is absolute and trained",
      "Substitution is the first control: where a less hazardous product does the job, it replaces the more hazardous one — the annual review asks this of every red-flagged substance",
      "Storage protects the vulnerable: locked storage, originals containers only, segregation of incompatibles, nothing left in bathrooms, bedrooms or trolleys unattended — service users with cognitive impairment will drink what looks drinkable",
      "Thickening powders are a named risk: airway obstruction deaths have occurred from ingestion of dry thickener — stored locked, never left at bedsides or dining tables unattended",
      "Health surveillance triggers are known: skin problems from wet work and gloves (dermatitis is the care sector's classic), respiratory symptoms from sprays — reported, recorded, GP/occupational health involved",
      "Spill response is kitted and trained: absorbents, PPE, ventilation steps and disposal per the substances actually held",
    ],
    legislation: [
      "Control of Substances Hazardous to Health Regulations 2002 (COSHH)",
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "CLP Regulation (classification, labelling and packaging)",
      "RIDDOR 2013 (reportable exposures and diseases)",
    ],
    sections: [
      { heading: "The Substance Inventory and Approval Route", body: "The inventory (Appendix A) lists every hazardous substance the service holds: product name, supplier, hazard classification (from the label and safety data sheet), where used and stored, quantity range, assessment reference and review date. New substances enter only by the approval route: the requester provides the safety data sheet; the COSHH lead checks whether an already-approved product does the job (substitution the other way — don't add hazards for marketing preferences); if approved, the assessment is completed before first use and affected staff briefed. The inventory is reconciled against actual stock quarterly — cupboards accumulate strays, and strays are unassessed hazards. Contractors bringing substances provide their data sheets and assessments before starting work." },
      { heading: "COSHH Assessment", body: "Each substance (or task using a group of substances) has an assessment (Appendix B) covering: what the substance is and its hazards (from the data sheet, translated into plain language); how it is used here — task, method, frequency, duration, who does it; exposure routes (skin, eyes, inhalation, ingestion) as this use creates them; who could be exposed — users, colleagues nearby, and service users (with the cognitive-impairment ingestion risk explicitly considered); controls — substitution considered, dilution systems, ventilation, safe procedures, PPE specified precisely (glove type matters: thin vinyl fails against many chemicals), storage and disposal; emergency measures — spills, skin and eye contact, ingestion, inhalation (aligned with the data sheet's first aid section); and health surveillance triggers. Assessments are reviewed on the cycle, after incidents, and when products or methods change." },
      { heading: "Safe Use Day to Day", body: "The working rules staff are trained on: read the label and know the assessment before first use; dilute exactly as specified (stronger is not cleaner — it is more hazardous and often less effective); use in ventilated spaces, especially sprays and disinfectants; wear the specified PPE and replace damaged gloves immediately; never mix products, and never use two products on the same surface in sequence without rinsing (residue reactions); keep lids on, label everything, and use original containers — decanting only into properly labelled containers designed for it; clean up drips and overspray as part of the task; wash hands after removing gloves (gloves are not hand hygiene); and secure everything back in locked storage before leaving the area, every time, however brief the interruption — the phone call that pulls a cleaner away from an open trolley is exactly how ingestion incidents happen." },
      { heading: "Storage, Segregation and Disposal", body: "Storage standards: dedicated locked stores or cupboards, out of service user access; original containers with legible labels; incompatibles segregated per the data sheets (oxidisers from flammables, acids from alkalis and from bleach); quantities kept to working levels — bulk invites decanting and hoarding; flammables in appropriate storage away from ignition sources; thickening powders locked in care areas, never left out; and clinical substances per their own governance (medicines under the Medication policies). Disposal follows the data sheet and waste arrangements: never down drains unless the sheet permits, empty containers rinsed or disposed per instructions, and unwanted substances removed by appropriate routes rather than gifted to the back of a cupboard." },
      { heading: "Exposure, Spills and Health", body: "Exposure response is on the assessment and the spill card (Appendix C): skin and eye contact — immediate prolonged water rinsing per the data sheet, first aider involved, clinical advice by severity; ingestion — never induce vomiting unless the sheet directs, immediate clinical contact (999 for service users with any airway or consciousness concern); inhalation — fresh air, observation, escalation on symptoms; and every exposure recorded as an incident with the assessment reviewed. Spills: contain, ventilate, PPE on, absorb and dispose per the kit and card — and near-miss spills count. Health surveillance: staff doing wet work and frequent glove use are asked about skin condition in supervision (early dermatitis is reversible; ignored dermatitis ends careers); respiratory symptoms linked to products trigger assessment review and occupational health referral; and RIDDOR-reportable diseases and exposures are reported by the manager." },
    ],
    appendices: [
      { title: "Hazardous Substance Inventory", type: "template", body:
"Reconciled against actual stock quarterly. Owner: COSHH lead.\n\nColumns:\n- Product name (as labelled)\n- Supplier\n- Hazard classification (pictograms/signal word from label)\n- Safety data sheet held (date/version)\n- Used for / by whom\n- Storage location (locked)\n- Typical quantity held\n- COSHH assessment ref + review due\n- Substitution reviewed (date — could a safer product do this job?)\n- Status (approved / phasing out / withdrawn)\n\nApproval route for new substances: data sheet obtained → duplicate-product check → assessment completed → staff briefed → THEN first use. No exceptions, including staff-purchased products and rep samples." },
      { title: "COSHH Assessment Form", type: "form", body:
"Assessment ref: ______   Substance/task: ______   Date: ______   Assessor: ______\nData sheet version/date: ______\n\nHAZARDS (plain language — what harm can this cause): ______\nHOW USED HERE (task, method — spray/wipe/soak, frequency, duration): ______\nEXPOSURE ROUTES this use creates: [ ] Skin  [ ] Eyes  [ ] Inhalation  [ ] Ingestion\nWHO could be exposed: [ ] User  [ ] Nearby staff  [ ] SERVICE USERS (ingestion/contact risk — controls below must address)\n\nCONTROLS:\nSubstitution considered (safer alternative?): ______\nDilution/dosing system: ______   Ventilation: ______\nSafe procedure summary: ______\nPPE (be specific — glove type/material, eye protection): ______\nStorage (locked location, segregation): ______   Disposal: ______\n\nEMERGENCIES (from data sheet): skin ______ eyes ______ ingestion ______ inhalation ______ spill ______\nHealth surveillance triggers (skin/respiratory symptoms → report + review): ______\n\nResidual risk: [ ] Low  [ ] Medium — extra controls: ______  [ ] High — do not use; substitute\nBriefed to (staff group, date): ______   Review due: ______   Signed: ______" },
      { title: "Chemical Spill & Exposure Response Card (display in storage areas)", type: "template", body:
"SPILL\n1. Keep people away — especially service users. Ventilate (windows/doors).\n2. PPE ON (gloves + eye protection minimum; check the product's assessment).\n3. Contain and absorb (spill kit: ______ location). Never wash large spills to drains.\n4. Bag waste per assessment; clean area; restock kit.\n5. Report as incident — near misses too.\n\nNEVER MIX CHEMICALS. Bleach + acid/ammonia products = toxic gas. One product, rinse, then another if needed.\n\nEXPOSURE\nSKIN/EYES: rinse with water immediately and thoroughly (eyes: 10+ minutes, lids open). First aider. Clinical advice per severity.\nINGESTION (incl. service user): do NOT induce vomiting. Take the product/data sheet. Clinical contact NOW — 999 if any airway, swallowing or consciousness concern.\nINHALATION: fresh air, sit them down, observe. Escalate on breathlessness/dizziness.\n\nEVERY exposure = incident report + assessment review.\nTHICKENING POWDER is a COSHH item: locked away, never left at bedsides or tables.\nData sheets live: ______   COSHH lead: ______" },
    ],
  },

  "saf-031": {
    purpose: "This policy manages the twin risks in the service's water systems: legionella bacteria — which multiply in warm, stagnant water and kill through inhaled aerosols, with older and immunocompromised people at highest risk — and scalding, which kills and maims the same population at the tap. The two risks pull temperatures in opposite directions; this policy holds both lines through a written scheme of control, disciplined monitoring, and engineering safeguards.",
    scope: "Applies to all water systems in premises the service controls: hot and cold water systems, storage tanks and calorifiers, showers and spray outlets, little-used outlets, and any spa, hydrotherapy or water features. In community settings (supported living, domiciliary) it applies to premises the service controls, with advisory duties toward tenancies and people's own homes noted in the community section.",
    responsibilities: [
      { role: "Provider / Duty Holder", duties: [
        "Appoint the responsible person for water safety (named, trained) and ensure a current legionella risk assessment by a competent assessor",
        "Resource the written scheme of control: monitoring, servicing, remedial works",
        "Ensure contractors used for assessment, monitoring and treatment are competent (industry-recognised)" ] },
      { role: "Responsible Person (often the Registered Manager or maintenance lead)", duties: [
        "Operate the written scheme: temperature monitoring, flushing, descaling, tank inspections — on schedule, recorded",
        "Act on out-of-range results the same day and record the actions",
        "Maintain the outlet register including sentinel points and little-used outlets",
        "Coordinate the scalding-prevention controls: TMV servicing, bathing temperature checks" ] },
      { role: "All Staff", duties: [
        "Report unused rooms and outlets (they need flushing), temperature concerns, and any water quality changes (discolouration, odour)",
        "Check bathing and showering water temperature per the care plan before every use — thermometer where specified, and always by the person's tolerance",
        "Run showers to temperature before positioning the person in the spray" ] },
    ],
    keyPoints: [
      "The written scheme of control is the operating document: risk assessment findings translated into named tasks, frequencies, limits and actions — held on site and followed",
      "Temperature is the main control: hot water stored at 60°C or above, distributed to reach outlets at 50°C within a minute (55°C in healthcare settings where specified); cold water below 20°C — monitored monthly at sentinel outlets and recorded",
      "Scalding protection runs alongside: thermostatic mixing valves (TMVs) on outlets accessible to service users limit delivery to safe bathing temperatures (typically 44°C bath fill), and TMVs are serviced and fail-safed annually — a failed TMV is an emergency repair, not a maintenance note",
      "Stagnation is the enemy: little-used outlets flushed weekly (recorded), unused rooms' outlets included, dead legs identified in the risk assessment and removed where practicable",
      "Shower heads and hoses are descaled and disinfected quarterly (recorded) — they are the classic aerosol source",
      "Tanks and calorifiers are inspected and cleaned per the scheme; lids fit, insect screens intact",
      "Out-of-range results have same-day actions: re-test, flush, adjust, escalate to the water safety contractor — and persistent failures escalate to remedial works, not repeated recording",
      "Suspected or confirmed legionella cases are emergencies: clinical care first, then immediate contractor involvement, sampling, possible outlet restrictions, and notification duties (HSE/public health/regulator as applicable)",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974",
      "COSHH Regulations 2002 (legionella as a biological agent)",
      "HSE Approved Code of Practice L8 and HSG274 (legionella control)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "RIDDOR 2013 (legionellosis reporting where work-related)",
    ],
    sections: [
      { heading: "Risk Assessment and the Written Scheme", body: "A competent assessor completes the legionella risk assessment, reviewed at least every two years and after system changes, incidents or control failures. The assessment maps the systems (schematic), identifies risk points (storage, dead legs, little-used outlets, spray-producing outlets, temperature-vulnerable runs) and the people at risk (elevated in care settings by age and health), and specifies the control scheme. The written scheme of control (Appendix A summarises it) turns findings into operations: what is checked, where, how often, by whom, acceptable limits, and the action when limits are breached. The responsible person holds it, works it, and evidences it — the monitoring log is the scheme's heartbeat." },
      { heading: "Routine Monitoring and Tasks", body: "The standing programme: monthly temperature monitoring at sentinel outlets (nearest and furthest from the calorifier on each loop) — hot reaching 50°C within a minute, cold below 20°C after two minutes, recorded with actual numbers, never ticks; calorifier flow (60°C+) and return (50°C+) monthly; weekly flushing of little-used outlets for several minutes (register-driven — vacant rooms, staff showers, visitor WCs), recorded; quarterly shower head and hose descale and disinfection; tank inspections (condition, lids, screens, cleanliness) annually with cleaning and disinfection as condition requires; TMV servicing annually including fail-safe checks; and annual review of the whole scheme against results. Records go on the water safety log (Appendix B), and gaps in the log are treated as control failures, because they are." },
      { heading: "Scalding Prevention — the Other Line", body: "The same vulnerable population that legionella threatens is also burned by hot water: full-thickness scalds occur in seconds at 60°C. Controls: TMVs on baths, showers and accessible basins used by service users, set to safe delivery temperatures (bath fill typically 44°C max), serviced annually, and repaired as emergencies when failed; bathing procedure — water run and mixed before the person enters, temperature checked with a thermometer where the care plan requires and always against the person's response; hot surfaces (pipework, radiators) assessed and guarded where contact risk exists (falls against radiators cause contact burns); and individual risk assessments for people who bathe independently, balancing autonomy with protection through the rights-based approach. Any scald is an incident with the parallel duties run (safeguarding consideration, notification by severity)." },
      { heading: "Failures, Positives and Cases", body: "Out-of-range temperatures: same-day re-test and system checks (stuck valves, failed insulation, calorifier settings), flushing, contractor escalation if unresolved within the scheme's window, and interim measures where risk is elevated (point-of-use filters on affected outlets per contractor advice). Positive legionella samples (where sampling is in the scheme or follows an event): immediate contractor-led response per the scheme — disinfection, re-sampling, possible outlet restrictions — with records of every step. A suspected or confirmed case of legionnaires' disease in a service user or staff member: clinical care first; then immediately — the responsible person informs the provider, the water safety contractor attends, public health authorities are engaged and lead the environmental investigation, HSE reporting is assessed (RIDDOR where work-related), the care regulator is notified per notification thresholds, and the service cooperates fully while keeping people safe with interim water restrictions as advised. The honesty rule applies: a case is never explained away as 'probably caught elsewhere' before the investigation says so." },
      { heading: "Community Settings", body: "Where the service supports people in their own homes or tenancies: the service controls what it controls — its own premises follow this policy in full; for tenancies, water safety duties sit with landlords, and the service's role is vigilance and escalation (reporting temperature problems, discoloured water, failed heating to the landlord and following up); staff flush outlets as part of care where properties stand empty between visits or people are hospitalised (agreed in the care plan); bathing temperature checks apply wherever staff support bathing, whoever owns the boiler; and lime-scaled shower heads in supported tenancies are raised with the landlord — and cleaned by arrangement where the tenancy agreement permits. The principle travels even where the duty doesn't: the people supported are the at-risk population, wherever they live." },
    ],
    appendices: [
      { title: "Written Scheme of Control (summary sheet)", type: "template", body:
"Premises: ______   Responsible person: ______   Deputy: ______\nRisk assessment by: ______ (competent assessor)  Date: ______  Review due: ______\nWater safety contractor: ______ (contact): ______\n\nTASK SCHEDULE:\nTask | Where | Frequency | Limit/standard | Action on failure | Records\nSentinel temps (hot) | outlets: ______ | Monthly | 50°C within 1 min | same-day re-test → contractor | log\nSentinel temps (cold) | outlets: ______ | Monthly | <20°C after 2 min | same-day investigate | log\nCalorifier flow/return | ______ | Monthly | 60°C / 50°C+ | adjust → contractor | log\nLittle-used outlet flush | per register | Weekly | several minutes each | register review | log\nShower heads descale/disinfect | all | Quarterly | — | replace worn | log\nTank inspection | ______ | Annual | clean, lids, screens | clean/disinfect | report\nTMV service + fail-safe | all accessible outlets | Annual | fail-safe works; bath ≤44°C | EMERGENCY repair | report\nScheme review | whole system | Annual | — | update scheme | minutes\n\nOutlet register attached: all outlets, sentinel points marked, little-used outlets flagged." },
      { title: "Water Safety Monitoring Log", type: "form", body:
"Month: ______   Completed by: ______\n\nSENTINEL TEMPERATURES (record actual °C, never ticks):\nOutlet | Hot °C (time to temp) | Cold °C | In range? | Action if not (same day)\n______ | ______ | ______ | [ ] | ______\n\nCalorifier: flow ______ °C  return ______ °C   In range? [ ]\n\nWEEKLY FLUSHING (little-used outlets):\nOutlet | Wk1 | Wk2 | Wk3 | Wk4 (initials per flush)\n______ | __ | __ | __ | __\n\nQuarterly (when due): shower heads descaled/disinfected [ ] date ______\nTMV service due: ______   Tank inspection due: ______\nBATHING TEMPERATURE spot checks (per care plans): compliant? [ ] issues: ______\n\nOut-of-range events this month + actions + resolution: ______\nContractor involvement: ______\nSigned (responsible person): ______   Manager review: ______" },
    ],
  },

  "saf-032": {
    purpose: "This policy keeps the service electrically safe across both halves of the risk: the fixed installation — wiring, consumer units, sockets — and the portable equipment population, from hoists and profiling beds to kettles, phone chargers and the lamps families bring in. Electrical failure causes fires, burns and shocks; in a care setting it also silently disables the equipment people's safety depends on.",
    scope: "Applies to all electrical systems and equipment in premises the service controls, to service equipment used in community settings, and to personal electrical items brought in by service users, families and staff. Covers inspection and testing regimes, day-to-day visual checks, fault response, and purchasing standards.",
    responsibilities: [
      { role: "Registered Manager / Maintenance Lead", duties: [
        "Ensure the fixed installation has a current Electrical Installation Condition Report (EICR) by a qualified electrician, with C1/C2 findings remedied promptly and records held",
        "Operate the in-service inspection and testing programme (combined visual inspection and PAT) per the risk-based schedule, with the equipment register current",
        "Control the entry of personal electrical items through the checking route",
        "Ensure electrical work is done only by competent persons — no DIY electrics by anyone" ] },
      { role: "All Staff", duties: [
        "Do the user checks: look at leads, plugs and casings before use — damaged equipment is taken out of use immediately, labelled, and reported",
        "Never overload sockets or daisy-chain extension leads; never run leads under carpets or through doorways",
        "Keep liquids away from electrical equipment, and never handle plugs or equipment with wet hands",
        "Report tripping circuits, hot plugs and sockets, flickering, burning smells and tingles immediately — these are the warnings before the fire or the shock" ] },
    ],
    keyPoints: [
      "Two regimes, both evidenced: the fixed installation via periodic EICR (typically five-yearly for care premises, or as the previous report specifies) with remedials actioned; portable equipment via risk-based in-service inspection and testing — not a blanket annual ritual, but frequencies set by equipment type, use and environment",
      "User checks catch most danger: the pre-use glance at lead, plug and casing finds damage long before the annual test would — trained, expected, and acted on",
      "Damaged equipment leaves service immediately: unplugged, labelled 'DO NOT USE', removed or reported — never left plugged in awaiting the electrician",
      "Personal items are welcomed through a route: service users' and families' electrical items (lamps, radios, chargers, fans) are checked and added to the register before use — kindly, quickly, and without exception, because the unchecked heater in a bedroom is a classic care home fire cause",
      "Extension leads are controlled: fused, switched, surge-protected where appropriate, never daisy-chained, never overloaded, and treated as temporary — repeated need for extensions is a socket-installation conversation",
      "Care equipment overlaps with medical device rules: hoists, beds and clinical devices follow their servicing regimes (LOLER, manufacturer schedules) in addition to electrical safety — the registers cross-reference",
      "RCD protection is verified: residual current protection appropriate to the installation, tested per the electrician's guidance",
      "Purchasing standard: equipment bought to recognised standards from reputable suppliers — counterfeit chargers and cheap imports are disproportionate fire causes",
    ],
    legislation: [
      "Electricity at Work Regulations 1989",
      "Health and Safety at Work etc. Act 1974",
      "Provision and Use of Work Equipment Regulations 1998 (PUWER)",
      "Regulatory Reform (Fire Safety) Order 2005",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
    ],
    sections: [
      { heading: "The Fixed Installation", body: "The installation is inspected and tested by a qualified electrician producing an EICR: on the cycle the previous report recommends (commonly five years for this class of premises, sooner where conditions warrant), after significant alterations, and after events (flooding, fire, persistent tripping). Findings are actioned by classification: C1 (danger present) — immediate action, area made safe before the electrician leaves; C2 (potentially dangerous) — remedied urgently with dates evidenced; C3 (improvement recommended) — considered at the next works planning; FI (further investigation) — completed, not filed. The report, remedial invoices and completion confirmations live together in the premises file. Between reports, the installation is watched through fault reporting: recurring trips, warm sockets and flickering are investigated by an electrician, not reset-and-forgotten." },
      { heading: "Portable Equipment — the In-Service Regime", body: "Every portable electrical item the service owns is on the equipment register (Appendix A) with its risk-based regime: equipment class, environment and use set the frequencies for formal visual inspection and combined inspection-and-test (PAT). Indicative frequencies the competent person tailors: frequently-moved care equipment and kitchen/laundry equipment — formal checks more often; static IT and low-risk items — longer cycles; anything in service user bedrooms — mid-cycle attention because of the environment. Testing is done by a competent person (trained in-house or contractor), results recorded against the register (pass labels help but the register is the record), and failures follow the removal route. New equipment enters the register on purchase; disposed equipment exits with a date — a register that only grows is a register nobody reconciles." },
      { heading: "Personal and Resident Equipment", body: "People's own items make rooms home, and they arrive with families all year round. The route: items are notified to staff on arrival (admission checklists ask; welcome information tells families); a trained staff member or the maintenance lead does the visual check (lead, plug, casing, suitability — heaters and blankets get extra scrutiny and may be declined on documented risk grounds with alternatives offered, e.g. the service providing safe heating); items pass onto the register with the resident's room noted, joining the in-service cycle; and unsuitable or damaged items are declined kindly, with reasons, alternatives, and the family's options explained. Staff personal items (chargers, fans, radios in staff areas) follow the same route. Electric blankets, if permitted at all, carry individual risk assessment, annual testing and care plan controls; portable heaters in bedrooms are generally declined in favour of fixing the heating complaint that motivated them." },
      { heading: "Faults, Incidents and Emergencies", body: "Fault response: isolate (switch off, unplug where safe), label 'DO NOT USE', remove from the area or secure against use, report to the maintenance lead, and log. Warning signs are escalated the same day: burning smells, buzzing, discoloured or warm sockets and plugs, repeated tripping (which is protection operating — the question is why), tingling from any equipment (an emergency: isolate and electrician now). Electric shock to any person: make safe without becoming a casualty (switch off before touching), first aid and clinical assessment (shocks can injure invisibly — cardiac assessment per clinical advice), incident report, RIDDOR assessment for staff injuries, equipment/circuit quarantined for investigation. Electrical fires: fire procedure governs — raise the alarm, evacuate per plan; only tackle if trained, safe and with the correct extinguisher (never water on electrical fires); isolate supply where safely possible. All events feed the register and regime review — a failure pattern in one equipment class changes that class's frequencies." },
    ],
    appendices: [
      { title: "Electrical Equipment Register & Regime", type: "template", body:
"Owner: maintenance lead. Reconciled annually (walk-through vs register).\n\nColumns:\n- Item + asset/serial no.\n- Location (room)\n- Owner: [ ] Service  [ ] Service user (name)  [ ] Staff\n- Class/type (care equipment / kitchen / laundry / IT / heating / other)\n- User-check expectation (pre-use)\n- Formal visual inspection frequency + last/next\n- Combined inspection & test (PAT) frequency + last/next + result\n- Cross-ref (LOLER/servicing regime for care equipment)\n- Status (in service / removed — date & reason / disposed — date)\n\nFIXED INSTALLATION: EICR by ______ date ______ next due ______\nC1/C2 remedials completed (evidence refs): ______  FI items closed: ______\nRCD test arrangements: ______" },
      { title: "Personal Electrical Item Check Form", type: "form", body:
"Item: ______   Belonging to (resident/family/staff): ______   Room: ______   Date: ______\n\nVISUAL CHECK (trained checker):\n[ ] Lead intact — no cuts, kinks, taped repairs\n[ ] Plug intact — casing sound, no scorching, correctly fused (where checkable)\n[ ] Casing sound — no cracks, no rattles, vents clear\n[ ] Suitable for intended use/location (heaters/electric blankets → extra assessment below)\n[ ] Reputable manufacture (counterfeit/no-marking chargers declined)\n\nHIGH-RISK ITEMS:\nPortable heater: generally declined — heating issue reported instead? [ ] Alternative arranged: ______\nElectric blanket: individual risk assessment ref ______ annual test arranged [ ]\n\nOUTCOME: [ ] Accepted — added to register (next formal check due: ______)\n[ ] Declined — reason given kindly: ______  Alternative offered: ______\n\nChecker: ______   Register updated: [ ]" },
      { title: "Electrical Warning Signs Card (staff)", type: "template", body:
"STOP AND REPORT TODAY:\n- Burning smell, buzzing, crackling from sockets or equipment\n- Plugs/sockets warm or discoloured\n- Repeated circuit tripping (protection is talking — find out why)\n- Flickering lights on one circuit\n- Any tingle from any equipment → ISOLATE NOW, electrician, do not use\n\nBEFORE YOU PLUG IN / USE (the 5-second user check):\nLead ok? Plug ok? Casing ok? Dry hands? Socket not overloaded?\n\nDAMAGED = OUT OF SERVICE: unplug, label 'DO NOT USE', remove/report. Never leave it plugged in 'for now'.\n\nNEVER: daisy-chain extensions | leads under carpets/through doors | liquids near equipment | DIY repairs (competent persons only) | water on electrical fire\n\nSHOCK TO A PERSON: switch off FIRST, then help. First aid + clinical check always (shock injuries hide). Incident report. Quarantine the equipment.\nMaintenance lead: ______   Electrician: ______" },
    ],
  },

  "saf-033": {
    purpose: "This policy keeps gas systems and appliances safe: annual checks by registered engineers, working carbon monoxide detection, staff who know the smell-of-gas drill cold, and clear arrangements for the community settings where the boiler belongs to a landlord but the person at risk is ours. Gas goes wrong rarely — and catastrophically: fire, explosion, and carbon monoxide, which kills without smell or warning and presents in ways easily mistaken for frailty or flu.",
    scope: "Applies to all gas installations and appliances in premises the service controls — boilers, water heaters, cookers, fires and their flues and pipework — and to the service's vigilance duties in community settings where others hold the landlord duties. LPG arrangements, where present, carry the supplier's additional requirements.",
    responsibilities: [
      { role: "Provider / Registered Manager", duties: [
        "Ensure annual gas safety checks of every appliance and flue by a Gas Safe registered engineer, with records (CP12-style certificates) held and remedials completed",
        "Ensure servicing per manufacturer schedules alongside the safety checks",
        "Provide and maintain carbon monoxide alarms in every room with a gas appliance (and per current regulations), tested on the schedule",
        "Hold the gas emergency arrangements: shut-off locations, emergency numbers, staff drill" ] },
      { role: "All Staff", duties: [
        "Know the gas emergency response (Appendix B) and the shut-off valve locations",
        "Report gas smells immediately and act — never wait to be sure",
        "Report appliance warning signs: yellow/floppy flames, soot marks, pilot lights that keep going out, excessive condensation",
        "Recognise possible carbon monoxide symptoms in service users and colleagues: headaches, dizziness, nausea, drowsiness, confusion — especially when symptoms improve away from the building" ] },
    ],
    keyPoints: [
      "Annual checks are non-negotiable: every gas appliance and flue checked by a Gas Safe registered engineer every 12 months, certificate retained (two years minimum; longer per records schedule), remedials done — the engineer's registration is verified, not assumed",
      "Servicing and safety checks are different things: the safety check confirms safe operation; servicing maintains it per the manufacturer — both are scheduled",
      "Carbon monoxide detection is layered: alarms in every room with a fixed combustion appliance, tested weekly-to-monthly per type, batteries/units replaced per manufacturer, and locations mapped",
      "CO poisoning masquerades as frailty: headaches, confusion, drowsiness and nausea in a care population get a CO question when they cluster by room or improve when the person is elsewhere — and any CO alarm activation is treated as real",
      "The smell-of-gas drill is rehearsed: no switches, no flames, ventilate, evacuate the area, shut off if trained and safe, call the gas emergency line — every member of staff, day and night",
      "Only Gas Safe registered engineers touch gas: no handyman work on gas, ever — and engineers' ID is checked on arrival",
      "Community settings split the duty: landlords hold the gas safety duties in tenancies; the service holds vigilance — checking certificates exist for supported tenancies, reporting concerns, escalating landlord inaction, and applying the same emergency drill in any home staff work in",
      "Appliance warning signs are report-now items: lazy yellow flames, sooting, condensation, pilot outage — the appliance is rested until checked where signs suggest combustion problems",
    ],
    legislation: [
      "Gas Safety (Installation and Use) Regulations 1998",
      "Health and Safety at Work etc. Act 1974",
      "Smoke and Carbon Monoxide Alarm Regulations (as applicable to premises type)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "RIDDOR 2013 (gas incidents reportable including via engineers)",
    ],
    sections: [
      { heading: "The Compliance Programme", body: "The gas register (Appendix A) lists every appliance and flue with its history: annual safety check dates and certificates, servicing per manufacturer schedule, remedial works and completion evidence, and the next-due dates the manager tracks with a 60-day horizon. Engineers are verified against the Gas Safe register (registration number and the categories of work they are registered for) before engagement and on arrival. Certificates identify defects by classification; anything classified immediately dangerous or at risk is dealt with before the engineer leaves (appliance disconnected/off) and remedied before return to service. The programme extends to gas pipework integrity (tightness testing as the engineer advises) and to LPG storage and supply arrangements where present, per supplier requirements." },
      { heading: "Carbon Monoxide Defence", body: "Detection: CO alarms (to the recognised standard) in every room containing a fixed combustion appliance and wherever regulations or the risk assessment require, mapped on the premises plan, tested on the schedule (recorded), and replaced per manufacturer lifetimes. Recognition: staff training covers the symptom pattern — headache, dizziness, nausea, drowsiness, confusion, breathlessness — and the tells that distinguish CO from illness: symptoms shared by people in the same area, improving away from the building, worsening when heating runs. In a population where confusion and drowsiness are common, the discipline is the question: when symptoms cluster or map to rooms, CO is excluded rather than assumed absent. Response to alarm or suspicion: treat as real every time — ventilate, move people out of the affected area, gas emergency line, appliances off, medical assessment for the symptomatic (tell clinicians CO is suspected — it changes the tests), and no re-occupation until cleared." },
      { heading: "Emergencies", body: "The smell-of-gas response (card at Appendix B, drilled at induction and refreshers): do not operate electrical switches (on or off), no naked flames, no smoking; open doors and windows; move people away from the affected area — using the evacuation approach proportionate to the strength of smell and advice; shut off the supply at the emergency control valve if trained and safe (locations posted and known); call the National Gas Emergency line; and call 999 where fire, explosion risk or casualties are involved. The manager coordinates: engineer attendance, regulator notification where service disruption or harm thresholds are met, and — where heating or hot water is lost — the business continuity arrangements that keep people warm and washed while repairs happen (temporary heating that meets the electrical policy's rules, not improvised devices). Gas incidents including appliance-related CO events are reportable through RIDDOR routes (often via the engineer's own duty) — the manager confirms rather than assumes the report was made." },
      { heading: "Community and Tenancy Settings", body: "In supported living and domiciliary work, the appliance owner holds the legal duties — but the person at risk is the one we support: the service confirms, for supported tenancies, that landlord gas safety records exist and are current (asking the landlord/housing provider annually, recording the answer, escalating gaps through the tenancy management route and, where risk is real and unaddressed, through environmental health); staff apply the same emergency drill in any property; concerns observed during visits — gas smells, sooted appliances, missing or dead CO alarms, symptoms fitting the CO pattern — are reported the same day to the manager, who escalates to the landlord and advises the person/family (supporting a person with capacity who declines action is a recorded risk conversation, revisited, not abandoned); and where the service itself provides appliances in a person's home, it holds the full owner's duties for them. The care plan notes each property's shut-off location where staff might need it." },
    ],
    appendices: [
      { title: "Gas Appliance Register & Compliance Log", type: "template", body:
"Premises: ______   Manager tracks next-due dates (60-day horizon).\n\nColumns:\n- Appliance (type, make/model, location) + flue\n- Owner: [ ] Service  [ ] Landlord (community setting — see tenancy log)\n- Annual safety check: last date | engineer (Gas Safe no. verified) | certificate ref | defects & classification | remedials completed (evidence)\n- Servicing (manufacturer schedule): last | next\n- CO alarm covering this appliance: location | test schedule | last test | replace-by date\n- Emergency control valve location: ______\n\nTENANCY LOG (supported living/domiciliary):\nProperty | Landlord | Gas safety record confirmed current (date/evidence) | Concerns raised (date/outcome) | Shut-off location noted in care plan [ ]" },
      { title: "Gas Emergency & CO Response Card (display + induction drill)", type: "template", body:
"SMELL GAS?\n✗ NO switches (on OR off) ✗ No flames ✗ No smoking ✗ No doorbells\n✓ OPEN doors and windows\n✓ MOVE people away from the area (evacuate per plan if strong/spreading)\n✓ SHUT OFF at emergency control valve if trained & safe — locations: ______\n✓ CALL National Gas Emergency: 0800 111 999 (free, 24h)\n✓ 999 if fire/explosion risk or casualties\n✓ Inform manager/on-call: ______\nNo re-entry/re-use until the engineer clears it.\n\nCO ALARM SOUNDING or CO SUSPECTED (headache, dizziness, nausea, drowsiness, confusion — clustering by room or improving outdoors):\n1. Treat as REAL. Ventilate. Move people out of the area.\n2. Appliances OFF. Gas emergency line as above.\n3. Symptomatic people → medical assessment — SAY 'possible carbon monoxide' (it changes the tests). 999 for collapse/severe symptoms.\n4. No re-occupation until cleared. Incident report + manager duties (RIDDOR check, notifications).\n\nAPPLIANCE WARNING SIGNS → report today, rest the appliance if combustion signs:\nlazy yellow flame | soot/staining | heavy condensation | pilot keeps dying" },
    ],
  },
  "saf-034": {
    purpose: "This policy keeps work equipment — and above all the equipment that lifts people — safe to use: selected for the task, maintained, examined by competent persons on the statutory cycle, checked before every use, and taken out of service the moment a defect appears. Hoist and sling failures cause deaths in care settings; this policy exists so ours never joins that list.",
    scope: "Covers all work equipment provided by the organisation (hoists, standing aids, slings, bath lifts, profiling beds used as lifting equipment, wheelchairs, kitchen and laundry machinery, maintenance tools) and sets out the service's role for equipment owned by others — community equipment stores, landlords, families — that staff use in people's own homes.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Maintain the equipment register (Appendix A) covering every item: identity, location, servicing schedule, thorough examination due dates and reports",
        "Contract competent persons for six-monthly thorough examination of all equipment that lifts people, and act on every report before the deadline it sets",
        "Ensure equipment is selected for the task and the person — weight limits, sling compatibility, environment — before first use",
        "Quarantine defective equipment immediately: labelled, removed from use, and not returned until repaired and re-checked",
        "Ensure staff are trained on the specific models in use, not generic equipment, before using them unsupervised" ] },
      { role: "All Staff", duties: [
        "Complete the pre-use check (Appendix B) every time before using lifting equipment — no exceptions for equipment used an hour ago",
        "Use equipment only as trained, within its safe working load, with the compatible sling in the right size and loop configuration from the person's moving and handling plan",
        "Stop and report the moment something is wrong: fraying, stitching damage, error tones, unusual movement, missing labels — the item comes out of use, not into 'careful use'",
        "Never improvise: no unapproved attachments, no mixing sling and hoist brands outside the compatibility statement, no exceeding load limits 'just this once'" ] },
    ],
    keyPoints: [
      "Two different clocks run at once and both matter: servicing keeps equipment working (per manufacturer schedule); thorough examination is the statutory safety check by a competent person — six-monthly for equipment lifting people (hoists, slings, bath lifts) and after events that could affect safety",
      "Slings are lifting equipment in their own right: each sling is individually identified on the register, examined six-monthly, checked before every use, and retired when the label is illegible or the fabric or stitching is suspect",
      "Pre-use checks are the last line of defence: frame, boom, spreader bar, battery, emergency lower, brakes, sling fabric, stitching, clips and loops — thirty seconds that catch what six-monthly examination cannot",
      "Defect means out of service now: a labelled quarantine, an incident report, and a replacement plan — a service short of hoists borrows or hires safely rather than nursing a defective one along",
      "Compatibility is evidence-based: sling-to-hoist combinations follow the manufacturers' compatibility statements and the person's assessment; the mixing of brands without documented compatibility is prohibited",
      "Thorough examination reports are acted on, not filed: defect timescales in the report are tracked to completion, and items failed by the examiner do not return to use until the remedial evidence exists",
      "Equipment owned by others still gets our vigilance: in community settings staff pre-use check every hoist and sling they use, report defects to the owner and the manager the same day, and do not use equipment that fails the check — the person's plan holds the alternative",
      "Training is model-specific and recorded: staff sign off on the actual makes and models in the service, refreshed when equipment changes and when competence is in doubt",
    ],
    legislation: [
      "Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)",
      "Provision and Use of Work Equipment Regulations 1998 (PUWER)",
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "RIDDOR 2013 (lifting equipment failures and injuries)",
    ],
    sections: [
      { heading: "Selection and Acquisition", body: "Equipment enters service through a gate, not a delivery door: the need is defined (task, person, environment, loads), options are assessed against it, and the chosen item is commissioned — assembled per manufacturer, examined or certified as new, added to the register with its servicing and examination schedule, and covered by staff training before first use with a person. Second-hand, hired and loaned equipment passes the same gate: current thorough examination evidence travels with it or it does not come in. For person-specific provision (slings above all), sizing and configuration come from the moving and handling assessment, and the sling's identity is recorded in the person's plan so the right sling meets the right person every time." },
      { heading: "Maintenance, Examination and Records", body: "The register drives three cycles. Servicing follows the manufacturer's schedule and keeps function. Thorough examination follows LOLER: six-monthly for equipment and accessories lifting people, twelve-monthly for other lifting equipment, and additionally after damage, major repair or events that could affect integrity. In-house checks fill the gaps: weekly visual checks of hoists and slings in heavy use, battery condition, and the pre-use check every time. Records are kept per item: examination reports (retained per the records schedule and at minimum until superseded by two subsequent reports), service records, defect and repair history, and the training matrix showing who may use what. The manager reviews the register monthly against due dates with a 60-day forward view." },
      { heading: "Defects, Failures and Incidents", body: "A defect follows one path: stop use, isolate and label the item (quarantine tag — Appendix C), report to the manager, record the incident, arrange repair by a competent person, and return to use only with evidence — which for lifting equipment after significant repair means examination before use. Failures that caused or could have caused injury go through the incident procedure with duty-of-candour and regulator notifications assessed; certain lifting equipment failures are RIDDOR-reportable as dangerous occurrences even without injury, and the manager checks rather than assumes. Where a failure suggests a batch or design problem, the manager reports to the manufacturer and checks for safety alerts covering the model (see Medical Devices policy for alert handling)." },
      { heading: "Community Settings", body: "In domiciliary care and supported living the equipment is usually provided by the community equipment service, the NHS, a landlord or the family — but staff safety duties and the person's safety do not change. The service confirms at care-planning stage who owns and maintains each item and that examination evidence exists for lifting equipment; the care plan records the owner and the fault-reporting route. Staff pre-use check every time, report defects same-day to both the owner and the manager, and never use failed equipment — the plan's contingency (second carer, alternative technique within the assessment, or visit rescheduling with welfare checks) applies until repair. Where owners fail to act on a reported defect, the manager escalates in writing and treats continued inaction as a safeguarding-relevant risk to be raised through commissioning or the local authority." },
    ],
    appendices: [
      { title: "Equipment & Lifting Equipment Register", type: "template", body:
"Item | ID/serial | Location | Owner (service/other) | SWL | Commissioned date\nServicing: schedule | last | next\nThorough examination (lifting equipment): interval (6m people-lifting / 12m other) | last report ref | defects & deadline | next due\nWeekly visual check log (heavy-use hoists/slings): date | initials | outcome\nTraining: models covered | staff signed off (see matrix)\nStatus: [ ] In service  [ ] Quarantined (tag ref, date)  [ ] Retired (date, disposal route)" },
      { title: "Hoist & Sling Pre-Use Check Card", type: "checklist", body:
"EVERY use. 30 seconds. Any NO = do not use, tag it, report it.\nHOIST: frame/boom cracks or distortion? castors & brakes work? battery charged? raise/lower smooth? emergency stop & emergency lower work? spreader bar/clip attachment secure? SWL label legible?\nSLING: correct sling for THIS person (ID matches plan)? size & loop config per plan? label legible (SWL, size)? fabric — no fraying, cuts, thinning? stitching intact — no broken threads at seams/loops? clips/loops undamaged? clean & dry?\nPERSON & SPACE: weight within SWL? area clear? second staff member present where the plan requires?\nAfter use: sling stored clean/dry per plan; hoist on charge if needed." },
      { title: "Equipment Quarantine Tag & Defect Report", type: "form", body:
"QUARANTINE TAG (attach to item):\nDO NOT USE — DEFECTIVE\nItem/ID: ______  Date/time: ______  Tagged by: ______\nDefect: ______\n\nDEFECT REPORT (to manager same shift):\nItem, ID, location | Defect found (how discovered: pre-use check / in use / weekly check) | Anyone at risk or harmed? (→ incident procedure, RIDDOR check for lifting failures) | Immediate substitution arrangements | Repairer contacted (date) | Repair/exam evidence before return to use | Manager sign-off & register updated" },
    ],
  },
  "saf-035": {
    purpose: "This policy manages every medical device the service uses — profiling beds, pressure-relieving mattresses, hoists' clinical cousins, thermometers, blood pressure monitors, pulse oximeters, glucometers, nebulisers, suction units, oxygen concentrators — so each is suitable, clean, calibrated, working, and used by trained staff; and so safety alerts and adverse incidents are handled as the early-warning system they are.",
    scope: "Applies to all medical devices owned, hired or loaned to the service, and to staff use of devices owned by service users or supplied by the NHS in any setting. Covers acquisition, inventory, maintenance and calibration, cleaning and decontamination, training, safety alerts, adverse incident reporting and disposal.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Maintain the medical device inventory (Appendix A) with servicing, calibration and replacement dates for every device",
        "Register to receive MHRA safety alerts (via the Central Alerting System or MHRA notifications) and operate the alert log (Appendix B): every alert assessed against the inventory, actions completed and evidenced",
        "Ensure devices are serviced and calibrated per manufacturer schedules by competent providers, and that single-use and lifetime limits are respected",
        "Report adverse incidents involving devices to the MHRA and the regulator as required, alongside the internal incident procedure",
        "Ensure decontamination before service, repair or disposal, with the declaration the repairer needs" ] },
      { role: "All Staff", duties: [
        "Use devices only with training on the model in question, following the person's care plan and the manufacturer's instructions",
        "Check devices before use: visibly clean, undamaged, in date for service/calibration (label), battery/power adequate, alarms functional where fitted",
        "Clean devices between uses per the device's decontamination instructions and the IPC policy",
        "Remove faulty devices from use immediately, label, and report — and report every device-involved incident, including near-misses, the same day",
        "Never modify devices, silence alarms as a workaround, or use single-use items twice" ] },
    ],
    keyPoints: [
      "The inventory is the control: a device the register does not know about is a device with no servicing, no calibration, no alert-matching and no training trail — everything in use is on the register, including hired, loaned and trial items",
      "Calibration is clinical safety: thermometers, BP monitors, glucometers, oximeters and scales feed clinical decisions; out-of-calibration readings mislead — devices carry a next-due label and out-of-date devices come out of use",
      "MHRA alerts are actioned, not read: each alert is checked against the inventory the week it arrives, applicable actions completed within the alert's deadline, and the outcome recorded even when the answer is 'none of our models affected'",
      "Adverse incidents feed the national system: device-involved deaths, injuries and near-misses are reported to the MHRA (in addition to internal, safeguarding, RIDDOR and regulator routes) — under-reporting hides dangerous devices from everyone",
      "Bed rails are medical devices with their own risk profile: assessment, correct fitting to the specific bed and mattress combination, gap checks, and review sit in the dedicated Bed Rails policy — this policy holds their inventory, maintenance and alerts",
      "Decontamination brackets every transition: between users, before service or repair (with a contamination-status declaration), and before disposal — a device leaves the building clean or with its status declared",
      "Single-use means once: items marked with the single-use symbol are never reprocessed; single-patient-use items stay with that person and are replaced per instructions",
      "User-owned devices get a defined role: staff may support use of a person's own device where the care plan says so, after a suitability check — condition, instructions available, servicing status known — with concerns escalated rather than improvised around",
    ],
    legislation: [
      "Medical Devices Regulations 2002 (as amended, UK)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12, 15 and 17",
      "Provision and Use of Work Equipment Regulations 1998",
      "Electricity at Work Regulations 1989 (powered devices)",
      "RIDDOR 2013 (where device incidents meet thresholds)",
      "MHRA guidance: Managing Medical Devices",
    ],
    sections: [
      { heading: "Acquisition, Inventory and Lifecycle", body: "Devices enter through assessment of need and suitability — intended purpose matches the clinical task, the population, the environment and the cleaning regime the service can actually deliver. On arrival: commissioning check, register entry (identity, serial, location or person, servicing and calibration schedule, expected lifetime), instructions filed and accessible, and training arranged before first clinical use. Through life: the register tracks servicing, calibration, repairs, alert actions and condition reviews. At end of life: decontaminate, deregister, and dispose via the waste policy's routes (WEEE for electricals, clinical waste rules for contaminated items) — with data-bearing devices (some monitors store readings) cleared per the data policies." },
      { heading: "Maintenance, Calibration and Daily Checks", body: "Three layers keep devices dependable. Planned: servicing and calibration by competent providers on manufacturer schedules, evidenced by reports and calibration certificates, with next-due labels on the device. Periodic: the manager's monthly register review against due dates, plus battery replacement programmes and mattress audits (pressure-relieving mattresses checked for cell function, cover integrity and pump alarms on a set cycle). Point of use: the staff pre-use check — clean, intact, in date, powered, alarming where it should. Devices failing any layer are removed, labelled and reported; loan-stock replacements protect care continuity while repairs happen." },
      { heading: "Safety Alerts and Adverse Incidents", body: "The manager (with a named deputy for absence) receives MHRA and CAS alerts and runs each through the log within the week: does any alert cover a make/model/lot on the inventory or in use by a person we support? If yes — actions per the alert (quarantine, check, modify use, replace), completed inside its deadline, evidenced, and shared with staff who use the device. If no — recorded as checked and not applicable. Going the other way, the service reports device-involved adverse incidents to the MHRA: deaths and serious injuries always; malfunctions and near-misses that could have caused harm too. The internal incident review asks the device questions — right device, working, calibrated, used as trained, alarm settings appropriate — and feeds lessons into training and purchasing." },
      { heading: "Training and Competence", body: "Every device class in the inventory maps to a training requirement, and the matrix shows who is signed off on what — induction covers the devices the role touches; new devices trigger training before deployment; and competence is checked, not assumed, after incidents, after long absence, and when practice drifts (alarms silenced, cuffs mis-sized, probes uncovered). Training covers the device in its care context: not just button-pressing but when readings should prompt escalation (linking to the Deterioration policy), what alarm settings mean for this person, and the cleaning standard between uses. Agency and bank staff use devices only after orientation to the models in the service." },
    ],
    appendices: [
      { title: "Medical Device Inventory & Maintenance Log", type: "template", body:
"Device | Make/model | Serial/asset no. | Location or person | Owner (service/NHS/person/hire)\nServicing: schedule | provider | last | next (label on device [ ])\nCalibration (if applicable): last cert ref | next due (label [ ])\nBattery/consumables programme: ______\nExpected lifetime / replace by: ______\nHistory: repairs, alert actions, incidents (refs)\nDecontamination status: between-users method | last deep clean\nTraining requirement: course/sign-off ref (see matrix)\nStatus: [ ] In service [ ] Quarantined [ ] Retired (decontaminated [ ], data cleared [ ], disposal route)" },
      { title: "MHRA/CAS Safety Alert Action Log", type: "template", body:
"Alert ref & title | Date received | Reviewed by/date (within 7 days [ ])\nApplicability: models/lots on inventory checked [ ] — Affected items: ______ / None [ ]\nActions required by alert & deadline: ______\nActions taken (quarantine/check/modify/replace) with evidence & dates: ______\nStaff informed (who/how/date): ______\nClosed by manager (signature/date): ______\nRetention: log kept per records schedule; available at inspection." },
      { title: "Device Adverse Incident Report Prompt", type: "checklist", body:
"Use alongside the incident form when ANY device is involved in an incident or near-miss.\n[ ] Person safe — clinical needs met first; device removed from use & quarantined UNALTERED (settings, consumables, packaging kept — do not clean or reset until decided; it is evidence)\n[ ] Photograph device, settings, labels, lot/serial\n[ ] Internal incident report completed; manager informed\n[ ] MHRA report needed? (death/serious injury: YES; malfunction or near-miss with harm potential: YES) — submitted via MHRA reporting route, ref: ______\n[ ] Manufacturer informed (they may request the device — record what leaves the building)\n[ ] RIDDOR / regulator notification / safeguarding / duty of candour each assessed\n[ ] Register & alert log updated; similar devices in service checked\n[ ] Learning: training, purchasing, care plan changes — recorded in governance review" },
    ],
  },
  "saf-036": {
    purpose: "This policy discharges the waste duty of care: everything the service throws away is classified correctly, segregated at the point it becomes waste, stored without risk, handed only to authorised carriers, and documented so the trail survives an inspection or an environment agency query. Done well, waste management is invisible; done badly, it is an infection risk, a dignity issue, a fire load and a prosecution.",
    scope: "Covers all waste streams the service produces: domestic and recycling, offensive/hygiene waste, clinical and medicines waste (detail in the Clinical Waste & Sharps policy), confidential paper, food waste, WEEE and bulky items. Applies to all premises and to waste handled by staff in people's own homes.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Hold the waste inventory: which streams the service produces, in what volumes, and the disposal route and contractor for each",
        "Verify carriers' registration and disposal sites' permits before contracting, and keep waste transfer/consignment documentation per statutory retention periods",
        "Provide the right containers in the right places, and keep the segregation guide (Appendix A) displayed where waste decisions happen",
        "Ensure external storage is secure, animal-proof, and separated from routes people use; and that internal storage never accumulates in corridors or fire escapes",
        "Audit segregation quarterly and act on misclassification — clinical waste in domestic bags and domestic waste in clinical bags both cost the service" ] },
      { role: "All Staff", duties: [
        "Segregate at source using the colour system — the decision happens at the bedside or kitchen, not at the bin store",
        "Never overfill bags or containers (two-thirds and tie), never decant or compress by hand, and never carry waste bags against the body",
        "Wear PPE appropriate to the stream and wash hands after every handling",
        "Route confidential paper to the confidential stream — nothing with a name on it goes in an open bin",
        "Report overflowing stores, damaged containers, spills and missed collections the same day" ] },
    ],
    keyPoints: [
      "Classification drives everything: waste is assessed by what it actually is and where it came from — offensive/hygiene waste (non-infectious continence products, PPE from people without infection) is not clinical waste, and the distinction is a large cost and compliance difference made correctly at the point of disposal",
      "The duty of care follows the waste after it leaves: carriers are checked against the public register, transfer notes (or annual season tickets) describe the waste accurately with the right codes, and documentation is retained — two years for transfer notes, three for hazardous consignment notes",
      "Segregation is a bedside decision: colour-coded containers sit where the waste arises, the guide is on the wall, and the default for genuinely unsure items is the more cautious stream with a question to the senior, not a guess",
      "Storage protects people: internal holding is short, closed and away from food, care areas and escape routes; external stores are locked, hard-standing, pest-resistant, and sized so collections keep pace with production — including holiday schedules",
      "Dignity travels with the waste: continence waste is bagged and removed promptly, never visible or odorous in living areas, and never discussed in front of others",
      "Confidential waste has a chain of custody: consoles or locked holding, a shredding contractor with certificates of destruction, and no records in skips — the data policies' retention decisions feed this stream",
      "Community settings adapt, not exempt: small volumes of offensive waste in a person's home can usually go double-bagged into their domestic waste per local authority arrangements; clinical waste needs a collection arranged — the care plan records the route for each person, and staff never transport clinical waste in cars unless the service is registered to do so",
      "Waste is a fire and pest risk: accumulations are removed, bins kept away from buildings per fire guidance, and the pest control policy links here — food waste discipline is pest prevention",
    ],
    legislation: [
      "Environmental Protection Act 1990 — section 34 duty of care",
      "Waste (England and Wales) Regulations 2011",
      "Hazardous Waste Regulations 2005",
      "Controlled Waste Regulations 2012",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "Health Technical Memorandum 07-01: Safe and sustainable management of healthcare waste",
    ],
    sections: [
      { heading: "Streams and Segregation", body: "The service operates a defined set of streams, each with its container and colour (Appendix A): domestic (black), recycling (clear or per local scheme), offensive/hygiene (yellow-and-black 'tiger' bags), infectious clinical waste and sharps (per the Clinical Waste & Sharps policy), medicines waste (returned or consigned per the medication policies), confidential paper (console/locked), food waste (per local arrangements), and WEEE/bulky (arranged collections). The stream decision is made where the waste arises by the person disposing of it; containers are provided at that point, because segregation fails wherever staff must walk to do it right. Quarterly audits sample bags visually (unopened) at the store and check container placement, signage, fill levels and documentation." },
      { heading: "Storage and Internal Movement", body: "Waste moves along defined routes at defined times — ideally not through food preparation or dining areas, and never left staged in corridors, stairwells or fire exits. Internal holding areas are cleanable, ventilated and closed. The external store is locked and secure against children, vandals and animals; bags go in containers, not on the ground; and the store sits on an impermeable surface away from windows, air intakes and the building line (fire load separation). Collection frequency matches production with headroom; the manager escalates missed collections the same day because an overfull store degrades every discipline upstream of it." },
      { heading: "Carriers, Documentation and the Paper Trail", body: "Before any contractor takes waste: registration checked on the public register of carriers, and for consigned streams the destination site's permit confirmed. Every movement is documented — waste transfer notes for non-hazardous streams (annual notes acceptable for regular identical collections), consignment notes for hazardous streams — with accurate descriptions and codes; the manager signs only what is true. Retention: transfer notes two years, consignment notes three years, certificates of destruction for confidential waste per the records schedule. The documentation lives where an inspector can find it, and the quarterly audit checks it exists for every stream leaving the premises." },
      { heading: "Spills, Incidents and Community Working", body: "Waste spills follow the stream's rules: domestic — clear and clean; offensive or clinical — PPE, absorb/contain, disinfect per the IPC policy, and re-bag into the correct stream; sharps found loose — never by hand, see the sharps policy. Incidents involving waste (injuries, exposures, fly-tipping of service waste, carrier failures) go through the incident procedure and, where thresholds are met, to RIDDOR or the environmental regulator. In domiciliary and supported living, staff manage waste inside the person's home per the care plan: offensive waste double-bagged into domestic collections where local rules allow, clinical waste through arranged healthcare collections, sharps in the person's own container — and problems (hoarded waste, pest signs, collection failures) reported as wellbeing concerns, not just logistics." },
    ],
    appendices: [
      { title: "Waste Segregation Guide (display at point of disposal)", type: "template", body:
"BLACK — Domestic: general non-recyclable, non-offensive waste. NO continence products, NO medicines, NO records.\nCLEAR/local scheme — Recycling: clean packaging per local list. Nothing soiled.\nTIGER (yellow/black) — Offensive/hygiene: continence pads & PPE from people WITHOUT known/suspected infection. Two-thirds full, tie, no free liquid.\nORANGE/YELLOW — Infectious clinical: see Clinical Waste & Sharps policy.\nSHARPS — container at point of use only. Never any bag.\nMEDICINES — return/consign per medication policy. Never domestic or clinical bags. CDs per CD procedure.\nCONFIDENTIAL — console/locked bin: anything with a name or identifier on it.\nFOOD — per local arrangements; lidded, emptied daily (pest prevention).\nUNSURE? Choose the more cautious stream and ask the senior — do not guess into black." },
      { title: "Waste Management Compliance Log", type: "template", body:
"STREAM ROSTER: stream | container/colour | points provided | contractor | collection frequency\nCARRIER CHECKS: contractor | carrier registration no. | checked on public register (date) | destination permit confirmed (consigned streams)\nDOCUMENTATION: transfer notes (2-yr retention) [ ] | consignment notes (3-yr) [ ] | confidential destruction certificates [ ] — filed at: ______\nQUARTERLY AUDIT: segregation sample findings | store condition (locked/pest-free/not overfull) | corridor/escape-route check clear | misclassification actions | auditor/date\nINCIDENTS: missed collections, spills, exposures — refs & outcomes\nCOMMUNITY: per-person waste routes recorded in care plans [ ]" },
    ],
  },
  "saf-037": {
    purpose: "This policy controls the service's highest-consequence waste: infectious clinical waste and sharps. It exists so that contaminated items never meet unprotected hands, sharps never wait loose to be found, containers never overfill, and a needlestick — should one happen — meets a rehearsed response in the first minutes that determine whether an exposure becomes an infection.",
    scope: "Applies to all clinical waste generation, handling, storage and disposal, and all sharps use and disposal, in every setting the service works — including people's own homes. Read with the Waste Management, Infection Prevention & Control and Medication policies; the fuller post-exposure clinical pathway sits in the Needlestick & Inoculation Injury policy.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Ensure the clinical waste stream is correctly classified, containered, stored and consigned, with three-year retention of consignment notes",
        "Provide sharps containers sized and sited for actual use — at the point of care, never remote from it",
        "Substitute safer sharps devices wherever reasonably practicable, and record the assessment where conventional sharps remain",
        "Ensure the post-exposure response (Appendix B) is trained at induction, displayed, and rehearsed — including the out-of-hours route to risk assessment and prophylaxis",
        "Investigate every sharps and exposure incident for the system cause: device, container placement, workload, technique, lighting" ] },
      { role: "All Staff", duties: [
        "Segregate clinical waste at the point of generation into the correct colour stream — never into domestic or tiger bags",
        "Assemble, label and date sharps containers correctly; fill only to the line; lock and consign when due",
        "Never recap, bend or break needles; carry sharps in a receiver, not hands; dispose immediately at the point of use",
        "Know the first-five-minutes exposure response by heart: bleed, wash, cover, report, assess — urgently",
        "Report every exposure and every near-miss (loose sharp found, overfull container, bag leak) the same day" ] },
    ],
    keyPoints: [
      "Colour is classification: orange for infectious waste suitable for alternative treatment, yellow for waste requiring incineration (including medicinally-contaminated items), purple-lidded sharps for medicinally-contaminated sharps, orange/yellow-lidded per contents — the service maps its actual streams in Appendix A and staff follow the map, not habit",
      "Sharps discipline is point-of-use discipline: the container comes to the procedure, the sharp goes straight in as one motion, and nothing sharp is ever left on a tray, a bed, or a pocket 'for a second'",
      "Containers have rules of their own: correctly assembled (lid clicked home), labelled with location and date opened, filled to the fill line only, temporarily closed between uses, permanently locked at the line or at three months, and stored off the floor away from public reach",
      "No recapping, ever: the single highest-yield behavioural rule in sharps safety — used needles go into the container as they are",
      "Safer sharps first: needle-free and safety-engineered devices are the default where they exist for the task; where conventional sharps remain, the documented assessment says why",
      "The first minutes after a needlestick are clinical time: encourage bleeding (do not suck), wash with soap and running water, cover, and get to risk assessment (occupational health/ED) urgently — source assessment and any post-exposure prophylaxis are time-critical decisions that belong to clinicians, not to the staff member's optimism",
      "Loose sharps are recovered by procedure, not bravery: visual search, pick up with forceps/dustpan — never fingers, straight to a container, incident report, and a search for how it escaped the system",
      "Home settings keep the same standards with adapted logistics: the person's own sharps container, stored safely away from children and confusion risk, collected via the arranged healthcare route — staff never transport sharps or clinical waste in vehicles unless the service is explicitly set up and permitted to do so",
    ],
    legislation: [
      "Health and Safety (Sharp Instruments in Healthcare) Regulations 2013",
      "Environmental Protection Act 1990 and Hazardous Waste Regulations 2005",
      "Health Technical Memorandum 07-01",
      "COSHH Regulations 2002 (biological agents)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "RIDDOR 2013 (reportable exposures)",
    ],
    sections: [
      { heading: "Classification and the Stream Map", body: "The service assesses which clinical streams it actually produces and maps each to a container and route (Appendix A): infectious soft waste (dressings, heavily contaminated PPE, items from people with known/suspected infection), sharps in their variants (medicinally contaminated or not — lid colour differs), medicines waste (never into clinical bags; per medication policy routes, with controlled drugs denatured per the CD procedure), and anatomical or highly infectious categories in the rare cases they arise (specific containers and advice from the contractor). Offensive waste is deliberately kept out of the clinical stream — the assessment of infection status at the point of care decides tiger versus orange, and seniors support that judgement rather than defaulting everything to clinical." },
      { heading: "Sharps in Use", body: "Sharps safety is designed before it is trained: safer devices purchased where available; sharps-requiring tasks planned with the container in reach; trays/receivers used for any carry; adequate lighting and space; no rushed sharps tasks — interruptions during injections are treated like interruptions during medication rounds. In use: hands never cross a used sharp, needles are not recapped or removed from syringes (devices go in whole), and disposal is immediate and personal — the user of the sharp disposes of the sharp. Containers: assembled per manufacturer, dated and located, at height and position that people we support (especially children and people with cognitive impairment) cannot reach, filled to the line, locked and consigned on schedule. Community staff carry the person's plan for where sharps work happens in the home and where the container lives." },
      { heading: "Exposure Response", body: "The response card (Appendix B) is displayed and trained: immediate first aid (bleed gently, wash under running water with soap, no sucking or scrubbing, waterproof cover; splashes to eyes/mouth — irrigate copiously); then urgent risk assessment the same shift via occupational health in hours or the emergency department out of hours, because source testing and post-exposure prophylaxis for blood-borne viruses are time-sensitive. The manager supports: source identification and consent conversations where the source person is known, incident recording, RIDDOR assessment (certain exposures are reportable), and follow-up serology per clinical advice. The debrief asks system questions — device, placement, task design, workload — and fixes what it finds; the fuller pathway, counselling and follow-up schedule sit in the Needlestick & Inoculation Injury policy." },
      { heading: "Storage, Consignment and Audit", body: "Clinical waste holds in rigid, lidded, labelled UN-approved containers or designated locked areas — separate from other streams, cleaned on a schedule, and never accessible to residents, children or animals. Consignment notes describe the waste accurately (codes, quantities) and are retained three years; pre-acceptance audit requirements from the disposal contractor are met and refreshed as required. The quarterly waste audit gives clinical streams extra attention: fill discipline, lock-outs, dating, storage security, note completeness — and sharps containers get a standing item in environmental walk-rounds (placement, fill level, tamper signs). Exposure and near-miss trends go to the governance review with the incident data, because a cluster of near-misses is the system asking for redesign." },
    ],
    appendices: [
      { title: "Clinical Waste Stream Map & Container Guide", type: "template", body:
"Service streams in use (mark & localise):\n[ ] ORANGE bag — infectious soft waste (alternative treatment route). Points: ______\n[ ] YELLOW bag — incineration-only (incl. medicinally contaminated non-sharps). Points: ______\n[ ] SHARPS, orange/yellow lid — sharps NOT medicinally contaminated. Points: ______\n[ ] SHARPS, purple lid — medicinally contaminated sharps (cytotoxic/cytostatic where applicable). Points: ______\n[ ] Medicines waste — per medication policy: route ______ | CDs denatured per CD procedure [ ]\n[ ] Other (anatomical/high-risk — contractor advice): ______\nContainer rules: assembled & clicked [ ] dated & located [ ] fill line respected [ ] temporary closure between uses [ ] locked at line or 3 months [ ] off floor, out of reach [ ]\nContractor: ______ | consignment notes filed (3 yrs): ______\nCommunity: per-person container & collection route in care plan [ ]" },
      { title: "Sharps/Splash Exposure — First Response Card (display + induction)", type: "template", body:
"NEEDLESTICK / BITE / CUT with contaminated item:\n1. BLEED it gently — do NOT suck or scrub\n2. WASH under running water with soap\n3. COVER with waterproof dressing\nSPLASH to eyes/nose/mouth: IRRIGATE copiously (remove contact lenses)\n4. TELL the senior/manager NOW — do not finish the shift first\n5. URGENT risk assessment: occupational health (in hours): ______ / Emergency Department (out of hours) — SAME DAY. Source assessment & any prophylaxis are TIME-CRITICAL.\n6. Incident report today. Manager: source consent conversation, RIDDOR check, follow-up plan per clinical advice.\nNEAR-MISSES (loose sharp found, overfull container) are reportable too — they are the warning we get before the injury.\nLoose sharp recovery: forceps/dustpan — NEVER fingers → container → report → find out how it escaped." },
    ],
  },
  "saf-038": {
    purpose: "This policy makes laundry an infection control process rather than a domestic chore: used, foul and infectious linen segregated at the bedside, processed at parameters that actually disinfect, and returned clean, dry and stored off the floor — while people's own clothing is treated with the care that dignity requires, because losing or ruining someone's clothes is a harm too.",
    scope: "Covers all linen and clothing processed by or for the service: bed linen, towels, personal clothing, staff uniforms, and items sent to external laundries. Applies to on-site laundries and to laundry done by staff in people's own homes. Read with the Infection Prevention & Control and Cleaning & Decontamination policies.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Provide a laundry flow that separates dirty from clean — physically or by time — with equipment capable of thermal or verified chemical disinfection",
        "Ensure segregation materials are available at the point of care: colour-coded bags and water-soluble bags for foul/infectious linen",
        "Maintain laundry equipment: servicing, temperature verification (Appendix B log), filters and venting (fire risk), and sluice cycle function",
        "Set the external laundry contract (where used) to healthcare standards and audit returns",
        "Protect personal clothing: labelling with consent, correct-programme washing, and a lost-property procedure that takes losses seriously" ] },
      { role: "All Staff", duties: [
        "Segregate at the bedside: used linen into the standard stream; foul/infectious linen straight into a water-soluble bag then the outer bag — never carried loose, never sorted by hand afterwards",
        "Hold linen away from the body; never place used linen on floors, furniture or clean surfaces; no shaking (aerosolises contamination)",
        "Wear PPE for foul/infectious linen handling and wash hands after any linen handling",
        "Run the machine programmes as set — no shortening disinfection cycles to save time",
        "Return and store clean linen covered/enclosed, off the floor, and handle it with clean hands" ] },
    ],
    keyPoints: [
      "Three streams, decided at the bedside: used (dry, not visibly soiled), foul/soiled (body fluids), and infectious (from people with known/suspected infection) — the latter two go into water-soluble bags at the point of removal so no one handles them again before the machine",
      "Disinfection is parameters, not appearance: thermal disinfection at 65°C held for at least 10 minutes or 71°C for at least 3 minutes (within the load), or a verified chemical disinfection process for heat-sensitive items — 'it looks clean' is not a standard",
      "Water-soluble bags are the hand-protection technology: foul linen is never re-sorted, rinsed by hand, or sluiced manually — the bag goes in whole and the machine's sluice cycle does the dirty work",
      "Clean and dirty never meet: one-way flow in the laundry (dirty in one side, clean out the other) or strict time separation with cleaning between; trolleys and bags for clean linen never used for used linen",
      "Dryness matters: damp linen grows organisms — full drying before storage, and storage enclosed, off the floor, in a clean area, first-in-first-out",
      "Personal clothing is personal: labelled with consent and discretion, washed per garment needs (with thermal disinfection balanced against fabric survival — and the person's preference in the conversation), returned to the right person, and losses investigated and made right",
      "Uniforms carry the workplace home unless managed: where staff launder their own, the standard is a separate wash at the hottest fabric-appropriate temperature, washed after every shift, and transported to/from work covered",
      "Machines are equipment too: lint filters cleared (fire), venting maintained, temperatures verified on a schedule, sluice cycles tested, and breakdowns escalated with a contingency (contract laundry) so linen never backlogs into a hygiene problem",
    ],
    legislation: [
      "Health and Social Care Act 2008 — Code of Practice on the prevention and control of infections (criterion on linen)",
      "Health Technical Memorandum 01-04: Decontamination of linen for health and social care",
      "COSHH Regulations 2002 (laundry chemicals)",
      "Health and Safety at Work etc. Act 1974",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
    ],
    sections: [
      { heading: "Segregation and Handling", body: "The decision is made where the linen comes off the bed or the person: used linen into the standard laundry stream; anything soiled with body fluids, and anything from a person with known or suspected infection (including during outbreaks), into a water-soluble bag sealed at the bedside, then into the outer colour-coded bag (Appendix A shows the service's colours). Handling rules protect the handler and the environment: no shaking, no holding against the body, no floor staging, gloves and apron for foul/infectious handling, hand hygiene after all handling. Bags are tied, not overfilled, and moved along the dirty route promptly — used linen does not queue in corridors or bathrooms. Sharps checks matter here too: pockets and folds have injured laundry staff in every kind of service; items from rooms where sharps are used get a visual check discipline at removal." },
      { heading: "Processing", body: "On-site processing runs to parameters: sluice/pre-wash for foul loads (water-soluble bags in whole), then thermal disinfection — 65°C for 10+ minutes or 71°C for 3+ minutes within the load, allowing mixing time — or a verified chemical disinfection programme for heat-intolerant fabrics. Temperatures are verified on a schedule (Appendix B), because dial settings and drum reality diverge as machines age. Loads are not crammed (disinfection needs circulation), programmes are not shortened, and detergents/disinfectants are used per COSHH assessments. External laundries process to healthcare linen standards under a contract that says so; returns are audited for condition and packaging. Domestic-style laundering in supported living and domiciliary settings follows the same logic scaled down: the person's own machine, hottest fabric-appropriate wash, separate processing of foul items, staff PPE and hand hygiene, and the care plan recording who does laundry and how infectious episodes change it." },
      { heading: "Clean Linen and Storage", body: "Clean linen is handled with clean hands, transported covered or in dedicated clean containers (never the used-linen trolley), and stored enclosed, dry, off the floor, away from used-linen routes — with stock rotated first-in-first-out and par levels set so shortages never tempt corner-cutting. Beds are made with clean technique: linen for one person's bed is not staged on another's furniture, and unused linen taken into an isolation room during an outbreak is treated as used. Airing cupboards and linen stores are cleaned on the environmental schedule and kept free of everything that is not clean linen." },
      { heading: "Personal Clothing, Uniforms and Equipment Care", body: "Personal clothing is inventoried on admission (updated as wardrobes change), labelled with the person's consent and in a discreet way, washed on programmes matched to garments — involving the person and family in choices where delicate items cannot survive disinfection-grade processing — and returned promptly to the right wardrobe. Losses and damage are logged, investigated, apologised for and made right; a pattern of losses is a quality indicator the governance review sees. Uniform rules: changed daily and when contaminated, laundered separately at the hottest appropriate temperature (staff home-laundering guidance issued in writing), and covered in transit. The laundry itself is maintained: machine servicing, daily lint filter clearing (a real fire cause), venting checks, sluice cycle verification, COSHH storage for chemicals, and a written contingency for machine failure so the service never chooses between hygiene and supply." },
    ],
    appendices: [
      { title: "Linen Segregation Guide (display in care areas & laundry)", type: "template", body:
"AT THE BEDSIDE — decide as it comes off:\nUSED (dry, not soiled) → [colour: ______] bag → standard wash\nFOUL/SOILED (body fluids) → WATER-SOLUBLE bag, sealed at bedside → outer [colour: ______] bag → sluice + disinfection wash. NEVER hand-rinse or re-sort.\nINFECTIOUS (known/suspected infection, outbreaks) → WATER-SOLUBLE bag → outer [colour: ______] bag → disinfection wash\nRULES: no shaking | hold away from body | never on floors or clean surfaces | tie at 2/3 | PPE for foul/infectious | hand hygiene after ALL handling | pocket/sharps awareness\nDISINFECTION PARAMETERS: 65°C ≥10 min OR 71°C ≥3 min (in-load), or verified chemical programme for heat-sensitive items.\nCLEAN LINEN: clean hands | covered transport | enclosed storage off floor | FIFO" },
      { title: "Laundry Verification & Maintenance Log", type: "template", body:
"TEMPERATURE VERIFICATION (schedule: ______): date | machine | programme | temp achieved (in-load method) | hold time | pass/fail | action if fail (machine out of use for disinfection loads until fixed)\nMACHINE CARE: lint filter cleared daily (initials) | venting checked | sluice cycle test | service dates | breakdown & contingency used (contract laundry: ______)\nCHEMICALS: COSHH assessments current [ ] | storage locked [ ] | dosing per product [ ]\nEXTERNAL LAUNDRY (if used): contract specifies healthcare processing [ ] | returns audit (condition/packaging): date/findings\nPERSONAL CLOTHING: inventory on admission [ ] | labelling consent recorded [ ] | lost property log ref: ______ | losses reviewed in governance [ ]" },
    ],
  },
  "saf-039": {
    purpose: "This policy turns cleaning from a rota into an infection control system: every area cleaned at a frequency its risk justifies, with the right method and product, by people who know why the method matters, using equipment that cannot carry contamination from a toilet to a kitchen — and with audits that look at surfaces, not just signatures.",
    scope: "Covers routine environmental cleaning, periodic deep cleaning, decontamination of care equipment between uses, body fluid spillages, terminal cleaning after infection, and enhanced cleaning during outbreaks — in all premises and, in adapted form, in people's own homes. Read with the IPC, COSHH, Waste and Laundry policies.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Maintain the cleaning specification: what is cleaned, how often, with what, by whom — covering every room type and every item of shared care equipment",
        "Provide colour-coded equipment and the products the specification names, with COSHH assessments current for each",
        "Ensure spill kits are stocked and sited where spills happen, and that staff can use them without hunting for instructions",
        "Run the audit programme: scheduled and unannounced checks of outcomes, with actions tracked to completion",
        "Trigger enhanced and terminal cleaning when infection status demands it, coordinating with the IPC lead" ] },
      { role: "Cleaning & Care Staff", duties: [
        "Follow the specification: right product, right dilution, right contact time — disinfectants that are wiped off before their contact time have not disinfected",
        "Keep the colour code absolute: equipment for sanitary areas never touches food areas, whatever the time pressure",
        "Clean shared care equipment between every use (commodes, hoists, slings loops, monitoring devices) per the equipment's decontamination method",
        "Deal with body fluid spillages immediately using the spill procedure — a cordon and a kit, not a mop from the corridor cupboard",
        "Report barriers honestly: broken equipment, missing products, rooms that cannot be cleaned as specified" ] },
    ],
    keyPoints: [
      "Frequency follows risk: sanitary areas, frequently touched surfaces (handles, rails, call bells, light switches) and shared equipment carry the infection risk and get the frequency — the specification maps every area to a schedule rather than trusting 'daily clean' to mean anything",
      "Colour coding is a contamination firewall: one colour for bathrooms/sanitary, one for general areas, one for kitchens/food areas, one for isolation/infectious rooms — cloths, mops, buckets and gloves all follow it, and mixed-colour storage is an audit fail",
      "Decontamination has three levels and each item has its assigned one: cleaning (detergent — most environments), disinfection (after contamination and for isolation/outbreak contexts, at the product's stated dilution and contact time), sterilisation (bought in sterile or via SSD — the service does not improvise it)",
      "Spillages of blood and body fluids get the spill procedure: cordon, PPE, absorb, disinfect with a chlorine-releasing agent at the spill concentration, waste into the clinical stream — kits sited where spills happen, checked and restocked after every use",
      "Care equipment is the missed surface: commode frames, hoist handsets, sling clips, BP cuffs, thermometers and wheelchairs move between people all day — between-use decontamination is a care task, not a cleaner's task, and the method card travels with the item class",
      "Outbreaks change the game plan, not the principles: enhanced frequency on touch points, disinfectant-grade products throughout affected areas, isolation-room discipline (dedicated equipment, clean last, PPE per IPC policy), and terminal cleaning — including curtains, laundry-grade items and equipment — before a room returns to normal use",
      "Audits look at outcomes: visual inspection against the specification, spot checks of dilutions and contact-time practice, equipment condition, storage discipline — with findings owned, actioned and re-checked, and trends reported into governance",
      "In people's own homes the service cleans what care creates: equipment the service brings is decontaminated to service standards; the person's home standards are theirs — concerns about environments that endanger health are raised as wellbeing conversations and escalated where risk is real",
    ],
    legislation: [
      "Health and Social Care Act 2008 — Code of Practice on the prevention and control of infections",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "COSHH Regulations 2002 (cleaning chemicals)",
      "Health and Safety at Work etc. Act 1974",
      "National cleanliness standards for healthcare environments (as applicable)",
    ],
    sections: [
      { heading: "The Cleaning Specification", body: "The specification is the contract between the service and cleanliness: room type by room type, it lists the elements to be cleaned (floors, touch points, sanitary ware, furniture, curtains, vents), the frequency for each (daily elements, weekly elements, periodic deep-clean elements), the method and product (detergent or disinfectant, dilution, contact time), and who does it (housekeeping, care staff, contractor). Frequencies flex upward for dependency and risk — a unit supporting people with continence needs or during norovirus season is not cleaned like an office. The specification lives where cleaning staff work, induction teaches it, and changes go through the manager so the audit always checks against the current version." },
      { heading: "Equipment, Products and Storage", body: "Colour-coded equipment is provided in sufficient quantity that following the code is never inconvenient, stored clean and dry (mop heads laundered or replaced on schedule — a dirty mop redistributes contamination), and condemned when worn. Products are the specification's named ones: detergents for routine cleaning, chlorine-releasing or equivalent disinfectants for contamination and outbreak contexts, applied at stated dilutions with dosing aids — 'a splash' is neither safe nor effective. COSHH governs the chemistry: assessments per product, safe storage locked away from people who could drink them, never decanting into unmarked or drinks containers, and never mixing products (bleach plus acid or ammonia products generates toxic gas). Cleaning trolleys are locked or attended in areas where people at risk could access chemicals." },
      { heading: "Spillages and Infection-Driven Cleaning", body: "The body fluid spill procedure (card in every kit): secure the area; PPE per the kit; absorb liquid (granules or towels); apply the disinfectant at spill strength for the stated contact time; clean; dispose of all materials into the clinical waste stream; hand hygiene; restock the kit and report. Blood and high-risk fluids get the chlorine-based response; urine on the same product can release fumes — the kit card states the sequence (absorb first). During outbreaks the IPC lead and manager switch affected areas to enhanced cleaning (increased touch-point frequency, disinfectant-grade throughout, dedicated equipment for isolation rooms cleaned last) and stand it down formally, with terminal cleaning of affected rooms — surfaces, soft furnishings per laundry/steam methods, curtains changed, equipment decontaminated — before normal use resumes." },
      { heading: "Care Equipment Decontamination and Audit", body: "Every class of shared care equipment carries a decontamination method and moment: commodes after each use (full disinfection of frame and seat), hoists and slings per the equipment policy and laundering rules, monitoring devices wiped with the compatible agent between people (manufacturer compatibility respected — alcohol crazes some screens and probes), mattresses checked and cleaned on the mattress audit cycle, wheelchairs on schedule and after soiling. The method cards are at the point of use; 'clean' equipment is tagged or stored so staff can tell at a glance. The audit programme covers routine cleaning outcomes (scheduled and unannounced walk-rounds against the specification), practice checks (dilution, contact time, colour-code compliance, spill kit readiness), equipment condition, and infection-linked triggers (post-outbreak reviews). Findings are specific, owned and time-bound; repeat failures escalate through supervision and the governance review, because a cleaning system that cannot close its own findings is decorative." },
    ],
    appendices: [
      { title: "Colour Code & Decontamination Quick Guide (display in sluice/cleaning stores)", type: "template", body:
"COLOUR CODE (cloths, mops, buckets, gloves):\nRED — bathrooms, washrooms, toilets, sanitary areas\nBLUE — general areas: bedrooms, lounges, corridors, offices\nGREEN — kitchen and food/beverage areas\nYELLOW — isolation/infectious rooms (dedicated kit, cleaned last)\nNever cross colours. Mixed storage = audit fail.\n\nDECONTAMINATION LEVELS:\nCLEAN (detergent) — routine environments & equipment\nDISINFECT (stated dilution + FULL contact time) — after contamination; isolation/outbreak; sanitary fittings; shared care equipment between users\nSTERILE — purchased sterile/SSD only\n\nGOLDEN RULES: right dilution (use dosing aids) | full contact time before wiping | never mix chemicals | mop heads laundered/changed on schedule | clean-to-dirty work order | equipment method cards at point of use" },
      { title: "Body Fluid Spillage Response Card (in every spill kit)", type: "template", body:
"1. SECURE the area — cordon/warn; keep people clear\n2. PPE on (kit contents: gloves, apron, mask/eye protection for splash risk)\n3. ABSORB liquid first — granules/disposable towels\n4. DISINFECT: chlorine-releasing agent at SPILL strength (follow kit instructions) — apply, leave for the stated contact time\n   (URINE: absorb FIRST, then disinfect surface — do not pour chlorine agent directly onto urine)\n5. CLEAN area with detergent; dry\n6. ALL materials → clinical waste stream (orange/yellow per stream map)\n7. HAND HYGIENE. Remove cordon.\n8. RESTOCK kit today. Report spillage + any exposure (see Sharps/Exposure card if skin/eyes/mouth involved).\nKit locations: ______  |  Restock owner: ______" },
      { title: "Cleaning Specification & Audit Template", type: "template", body:
"SPECIFICATION (per room type): area | elements (floors/touch points/sanitary/furniture/curtains/vents) | frequency (D/W/periodic) | method & product (dilution, contact time) | responsible (housekeeping/care/contractor)\nTouch-point list: door handles, rails, call bells, light switches, taps, flush plates, remote controls, keypads — frequency: ______\nDEEP CLEAN planner: room | last | next | includes (carpets, curtains, high-level, mattress check)\nAUDIT: date | areas sampled | outcome vs specification | practice checks (dilution/contact time/colour code/spill kit) | equipment condition | findings & owners & deadlines | re-check date | reported to governance [ ]\nOUTBREAK ADDENDUM: enhanced schedule started (date/areas) | dedicated isolation kit [ ] | terminal cleans completed (rooms/dates) | stood down by IPC lead (date)" },
    ],
  },
  "saf-040": {
    purpose: "This policy keeps the service's premises free of pests — and deals with them quickly, discreetly and effectively when prevention fails. Pests in a care setting are an infection risk, a food safety breach, a dignity injury and a reputational event all at once; the policy treats prevention as the daily work and infestation as an incident.",
    scope: "Covers all premises including kitchens, food storage, waste areas, laundries, lofts and grounds; the pest control contractor arrangement; staff monitoring and reporting; and the response when pests appear in a person's own home in community settings.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Hold a pest control arrangement appropriate to the premises: a contract with routine inspection visits for services with kitchens, or a rapid-response arrangement where risk justifies less",
        "Act on every proofing and housekeeping recommendation the contractor makes — the report that is filed unactioned is the infestation's invitation",
        "Keep the sighting log open to all staff and review it monthly for patterns",
        "Coordinate infestation response: treatment, food safety measures, affected-area cleaning, and communication that protects dignity",
        "Ensure pesticides and traps are used only by competent persons and never where people at risk could contact them" ] },
      { role: "All Staff", duties: [
        "Report every sighting and every sign — droppings, gnaw marks, smear marks, damaged packaging, moth cases, flies clustering — the same day via the sighting log",
        "Keep the housekeeping side of prevention: food stored sealed and off the floor, spills cleared, waste lidded and removed, delivery packaging checked and cleared promptly",
        "Never place traps or use spray products themselves in care areas — report and let the arrangement work",
        "Treat infestation with discretion: no discussion in front of visitors or people we support beyond what care requires" ] },
    ],
    keyPoints: [
      "Prevention is three disciplines: proofing (sealed entry points, screens, brush strips, intact drain covers), housekeeping (sealed food storage, clean-as-you-go, prompt waste removal per the waste policy) and monitoring (staff eyes plus contractor inspections) — infestations happen where one of the three lapsed",
      "The contractor arrangement matches the risk: premises with commercial kitchens carry routine inspection visits with written reports; every service holds a rapid-response route with a target attendance time",
      "Sightings are same-day reports: one mouse seen is a population inferred — the log captures what, where, when, and evidence (photo of droppings/damage helps the technician), and the manager decides the response the same day",
      "Food safety escalates with pests in food areas: affected food disposed of, surfaces and equipment cleaned and disinfected before reuse, and the food safety records noting the event and response — environmental health involvement is cooperated with fully where it occurs",
      "Toxins and traps are controlled: only the contractor (or trained competent person) places them, positioned and documented so people we support, children, pets and wildlife cannot reach them — bait maps are kept and checked",
      "Dignity survives the infestation: treatment of a person's room happens with their involvement and privacy protected; infestation is never allowed to become a story told about a person",
      "In people's own homes, pests are a wellbeing and tenancy issue: staff report concerns to the manager, who raises them with the person, family and landlord as appropriate — persistent infestations affecting health become safeguarding-relevant environmental concerns pursued through the local authority",
      "Records prove management: the contract, visit reports, recommendations and their completion, sighting log, treatment records and bait maps live together and go to inspection",
    ],
    legislation: [
      "Prevention of Damage by Pests Act 1949",
      "Food Safety Act 1990 and Food Hygiene Regulations (food premises)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12 and 15",
      "Control of Pesticides Regulations 1986 / COSHH 2002 (treatment products)",
      "Environmental Protection Act 1990 (waste-related prevention)",
    ],
    sections: [
      { heading: "Prevention by Design and Habit", body: "Proofing is surveyed and maintained: external doors close and seal (brush strips where gaps exist), opening windows in food and care areas are screened where flying-insect risk justifies it, pipe and cable penetrations are sealed, air bricks are intact and meshed, drain covers fit, and vegetation and stored items are kept clear of external walls — the contractor's proofing recommendations enter the maintenance plan with deadlines. Housekeeping starves what proofing cannot exclude: food in sealed containers off the floor, stock rotated so nothing sits forgotten, spills cleared as they happen, food waste in lidded bins emptied daily, external waste stores managed per the waste policy (secure, lidded, hard-standing), delivery cardboard cleared the day it arrives (cockroach transport of choice), and laundry and loft spaces visited and inspected rather than left to their own ecology." },
      { heading: "Monitoring and the Sighting Log", body: "Every member of staff is a monitor: induction covers the signs — droppings, gnawing, smear marks along skirtings, nests, damaged packaging, larvae and moth cases in dry goods, fly clusters — and where the sighting log lives. Entries are same-day and specific (what, exactly where, evidence retained or photographed). The contractor's routine visits inspect vulnerable zones (kitchens, stores, waste areas, boiler rooms, lofts), maintain and check monitoring points, and report in writing: findings, treatments, recommendations. The manager reviews the log and reports monthly, looking for patterns single sightings hide — the same corridor twice, seasonal timing, a waste-store correlation — and feeds actions into maintenance and housekeeping." },
      { heading: "Response to Infestation", body: "Confirmed activity triggers a same-day response: contractor called with the evidence; affected food-contact areas taken out of use until treated and disinfected; exposed food disposed of (recorded for food safety); treatment carried out per the contractor's method statement with bait/trap positions mapped and inaccessible to people at risk; and follow-up visits until the technician confirms clearance. Cleaning after treatment follows the Cleaning & Decontamination policy — droppings and nest material are cleared with PPE and disinfection, never dry-swept (aerosolised droppings carry disease). Rooms of people we support are treated with the person informed and involved, belongings handled respectfully, and alternative accommodation within the service arranged where treatment requires vacancy. The incident record covers cause analysis: how did they get in, what fed them, which discipline lapsed — and the proofing or housekeeping fix that answers it." },
      { heading: "Records and Community Settings", body: "The pest file holds: the contract and the technician's competence evidence, routine visit reports, the sighting log, treatment records with product data and bait maps, recommendation tracking (raised → actioned → verified), and food-area event records. Inspectors and environmental health officers see a managed system, not a shrug. In domiciliary and supported living settings the service does not control the premises but does protect the person: staff report signs of infestation to the manager; the manager raises it with the person and family, supports a landlord report where there is a tenancy (housing providers hold treatment duties), involves environmental health where landlords fail to act, and treats refusal or self-neglect dimensions through the wellbeing and safeguarding routes. Staff safety in infested properties (fleas, needles-and-pests combinations) is risk-assessed with PPE and visit adjustments until resolution." },
    ],
    appendices: [
      { title: "Pest Sighting Log & Same-Day Response Card", type: "template", body:
"SIGHTING LOG: date/time | reporter | what seen (pest/signs: droppings, gnawing, smears, moth cases, flies) | exact location | photo/evidence kept [ ] | manager informed (time)\nSAME-DAY RESPONSE (manager): contractor contacted (time, target attendance) | food areas affected? → food disposed & recorded, surfaces out of use until disinfected [ ] | area cordon/clean per spill-and-clean rules (no dry sweeping droppings) [ ] | people/relatives informed as dignity requires [ ]\nTREATMENT: technician report ref | products used | bait/trap map updated [ ] | positions inaccessible to people at risk [ ] | follow-up visits booked | clearance confirmed (date)\nCAUSE & FIX: entry route | food source | discipline lapsed (proofing/housekeeping/monitoring) | corrective action & owner & deadline" },
      { title: "Pest Prevention Checklist (monthly walk-round)", type: "checklist", body:
"PROOFING: external doors seal (brush strips intact) [ ] windows in food/care areas screened where required [ ] pipe/cable penetrations sealed [ ] air bricks meshed [ ] drain covers intact [ ] vegetation/stored items clear of walls [ ]\nHOUSEKEEPING: dry goods sealed, off floor, in date, FIFO [ ] spills cleared, clean-as-you-go evident [ ] food waste lidded, emptied daily [ ] external waste store secure/lidded/clean [ ] delivery cardboard cleared [ ]\nVULNERABLE ZONES visited: kitchen & stores [ ] waste areas [ ] laundry [ ] boiler room [ ] loft/voids [ ]\nMONITORING: sighting log reviewed (patterns?) [ ] contractor recommendations all actioned or scheduled [ ] bait map current & positions safe [ ]\nSign-off: name/date | issues → maintenance plan refs" },
    ],
  },
  "saf-041": {
    purpose: "This policy manages the people who work on our premises but not for our organisation: tradespeople, engineers, installers, grounds staff and specialist consultants. Contractors bring skills the service needs and risks the service must control — to themselves, to buildings, and above all to the people who live in or use them. The policy makes every contractor visit vetted, inducted, permitted where the work is dangerous, and supervised in proportion to risk.",
    scope: "Applies to all external workers engaged by the service or attending on behalf of landlords, suppliers and utilities: planned maintenance, reactive repairs, statutory inspections, construction projects, IT and equipment installers. Covers selection, safeguarding controls, site induction, permits to work, supervision, and monitoring.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Approve contractors before engagement: competence evidence, insurance, and trade registrations where the law requires them (Gas Safe, electrical certification bodies)",
        "Decide the safeguarding controls per visit: DBS-checked contractors or accompanied working — unsupervised access to people we support is never given to unvetted workers",
        "Ensure every contractor receives the site induction before starting: fire, emergencies, asbestos information, no-go areas, conduct around people we support",
        "Operate the permit-to-work system for high-risk activities: hot work, work at height, electrical isolation, confined spaces, work affecting fire systems",
        "Monitor work quality and safety, and hold a review record that feeds re-engagement decisions" ] },
      { role: "All Staff", duties: [
        "Check in every contractor: identity confirmed, sign-in completed, induction status verified, staff member responsible identified",
        "Never leave unvetted contractors alone with people we support, and challenge courteously anyone unbadged or unexpected",
        "Report concerns about contractor conduct or unsafe work immediately — stopping unsafe work is everyone's authority",
        "Keep care routines and people's privacy protected around works: doors, screens, timing, and communication about noise and disruption" ] },
    ],
    keyPoints: [
      "Vetting happens before the van arrives: competence (qualifications, trade registrations, references for significant works), public liability insurance at an adequate level, method statements and risk assessments for non-trivial work — held on the approved contractor list and refreshed on a cycle",
      "Safeguarding is the care-sector difference: contractors are either DBS-checked for regular unsupervised attendance or accompanied/supervised so that unsupervised contact with people we support does not occur — and all contractors get the conduct briefing: no personal care, no photographs, no lone socialising, report anything a person discloses",
      "Induction is per-site and recorded: fire procedures and their role in them, emergency contacts, the asbestos register shown and signed for BEFORE any work that disturbs fabric, fragile-person considerations (doors, wandering risk, noise distress), welfare facilities, smoking rules, and the sign-in/out discipline",
      "Permits control the work that kills: hot work (naked flame, grinding, soldering — with fire watch and 60-minute post-work checks), work at height, electrical work beyond minor tasks, work on gas, water systems (legionella interaction), fire alarm and sprinkler impairments (with regulator/insurer notification where required), and confined spaces — no permit, no work",
      "Fire system impairments are planned events: isolations of detection or suppression are time-bounded on the permit, compensatory measures set (fire watch, staff notification), and restoration verified and recorded before the contractor leaves",
      "Supervision is proportionate: statutory inspection visits need check-in and awareness; fabric works near people need allocated staff oversight; major projects need segregation (hoarding, separate access, dust and noise management) planned with the contractor before mobilisation",
      "Landlord and utility contractors follow the same site rules: the service cannot vet them but can and does induct, accompany, and control their access — tenancy settings coordinate through the landlord while protecting the person's home and privacy",
      "The paper trail closes the loop: sign-in records, induction signatures, permits with their closures, work completion evidence (certificates for statutory work feed the premises registers), and a post-work review that informs whether the contractor works here again",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974 — sections 3 and 4 duties to non-employees",
      "Construction (Design and Management) Regulations 2015 (construction work, client duties)",
      "Control of Asbestos Regulations 2012 (duty to manage and to inform)",
      "Regulatory Reform (Fire Safety) Order 2005",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 12, 13 and 15",
    ],
    sections: [
      { heading: "Selection and the Approved List", body: "The approved contractor list is the gate: entry requires evidence of competence for the trade (registrations checked at source for gas and electrical work — see those policies), public liability insurance sighted with expiry tracked, health and safety arrangements proportionate to the work (method statements and risk assessments for anything beyond trivial), and references or track record for significant projects. The list records what each contractor is approved FOR — approval to service boilers is not approval to reroof. Emergency call-outs from unlisted contractors are permitted with compensating controls: identity and registration verified on arrival, full accompaniment throughout, and post-visit vetting before any re-engagement. For construction-scale projects the service takes its CDM client duties seriously: appointing duty holders, ensuring plans exist, and not treating 'the builder handles safety' as a discharge of anything." },
      { heading: "Arrival, Induction and Safeguarding", body: "Every visit runs the same arrival drill: identity checked against the expected attendance (unexpected contractors are verified with the office before entry), sign-in with time and vehicle, induction delivered or confirmed current (the induction record has a validity period; repeat contractors re-induct on expiry or change), and the responsible staff member named. The induction covers fire and evacuation (including their role: contractors evacuate and report to the assembly point — they are on the roll call via the sign-in sheet), emergency contacts, welfare, no-go areas, asbestos register review and signature before fabric-disturbing work, and the conduct code: respectful behaviour, privacy of people and their information, no photography beyond documented work evidence, no gifts or personal arrangements, and immediate reporting to staff of anything a person discloses or anything concerning they observe. Safeguarding controls are set per visit: DBS evidence for regular unsupervised patterns, otherwise accompaniment — and staff allocation for that accompaniment is planned, not improvised." },
      { heading: "Permits to Work", body: "The permit system (Appendix B) applies to defined high-risk activities. A permit is issued per task, per day, by the manager or trained deputy after reviewing the contractor's method statement: it states the work, location, time window, precautions confirmed in place, isolations made, PPE, and emergency arrangements. Hot work adds fire-specific controls: combustibles cleared or protected, extinguisher at the workface, fire watch during and for the stated period after work, and detection isolation minimised in scope and time. Fire system impairments trigger the compensatory measures the fire policy requires and notification duties where they exist. Electrical and gas isolations follow those policies' lock-off rules. The permit closes with joint verification: work complete or made safe, area inspected (hot work: final check after the watch period), systems restored and confirmed functional, and the closure signed. Open permits at day's end are a management escalation, not a loose end." },
      { heading: "During and After the Work", body: "Works are managed around care: timing negotiated to protect rest, meals and activities where possible; noise, dust and access interruptions communicated to people and families in advance; corridors and escape routes never obstructed (fire policy discipline); tools and materials secured whenever unattended — a stepladder in a corridor and a solvent tin in an unlocked room are both incidents waiting; and utilities interruptions planned with continuity measures (water, heating, call systems). Staff monitor as they move: unsafe practice is stopped and reported without ceremony. On completion: work inspected against the specification, certificates and reports collected into the relevant registers (gas, electrical, water, lifts, fire systems), waste removed per the waste policy (contractor removals documented — fly-tipped service waste traces back), sign-out completed, and the review record scored: quality, safety behaviour, conduct around people, documentation. Poor reviews are raised with the contractor and repeated failures remove approval — the list is a living judgement, not a filing habit." },
    ],
    appendices: [
      { title: "Contractor Arrival, Induction & Sign-In Record", type: "form", body:
"Date | Company | Name(s) | ID checked [ ] | Expected/verified with office [ ]\nWork & location: ______ | Approved-list entry covers this work [ ] / Emergency engagement (controls: accompany + verify) [ ]\nINDUCTION (valid until: ____): fire & evacuation role [ ] emergency contacts [ ] welfare [ ] no-go areas [ ] smoking rules [ ] asbestos register reviewed & signed (fabric-disturbing work) [ ] conduct code: privacy, no photos beyond work evidence, no personal arrangements, report disclosures [ ]\nSAFEGUARDING: DBS evidence sighted [ ] OR accompanied by: ______\nPermit required? (hot work / height / electrical / gas / water systems / fire impairment / confined space) → Permit ref: ______\nSign-in time: ____ Sign-out: ____ | Responsible staff: ______\nPOST-WORK: area inspected [ ] certificates to registers [ ] waste removed [ ] review score & notes: ______" },
      { title: "Permit to Work (high-risk activities)", type: "form", body:
"Permit no: ____  Task: ______  Location: ______  Date & valid hours: ______\nType: [ ] Hot work [ ] Work at height [ ] Electrical [ ] Gas [ ] Water system [ ] Fire system impairment [ ] Confined space [ ] Other: ____\nMethod statement & risk assessment reviewed [ ] Contractor competence confirmed [ ]\nPRECAUTIONS CONFIRMED (per type): isolations & lock-off (detail): ______ | combustibles cleared/protected [ ] | extinguisher at workface [ ] | fire watch during + ____ min after [ ] | detection isolation scope & times: ______ (compensatory measures: ______, notifications: ______) | fall protection: ______ | area segregation from people we support: ______ | PPE: ______ | emergency arrangements: ______\nIssued by: ______ (manager/trained deputy)  Accepted by (contractor): ______\nCLOSURE: work complete/made safe [ ] area inspected (hot work: after watch period) [ ] systems restored & verified functional [ ] permit closed: sign/time ______\nOpen at end of day? → escalate to manager NOW." },
    ],
  },
  "saf-042": {
    purpose: "This policy holds three duties in balance: the law that makes enclosed workplaces smoke-free, the fire risk that smoking carries into buildings full of people who cannot evacuate quickly, and the right of adults to smoke if they choose. It protects everyone from second-hand smoke, manages individual smoking safely rather than banning it out of existence, and treats every smoker as a candidate for cessation support rather than a problem.",
    scope: "Covers smoking and vaping by people we support, staff, visitors and contractors, in all premises and vehicles, and staff working in the homes of people who smoke. Read with the Fire Safety, Risk Assessment and Mental Capacity policies.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Maintain the smoke-free arrangements: signage, designated outdoor smoking area(s) where provided, and the vehicle prohibition",
        "Ensure every person who smokes has an individual smoking risk assessment (Appendix A), reviewed on change and after any smoking-related incident",
        "Control the fire interactions: oxygen therapy, emollient products, air-flow mattresses — each escalates the risk assessment",
        "Provide cessation support routes and record offers made",
        "Apply the staff rules consistently: no smoking or vaping on duty in view of people we support, in service vehicles, or in people's homes" ] },
      { role: "All Staff", duties: [
        "Follow the individual smoking plans: supervision levels, storage of materials, safe smoking area accompaniment where assessed",
        "Never provide lighters/matches contrary to a person's plan, and store smoking materials as each plan directs",
        "Report burns, scorch marks, dropped-cigarette signs and near-misses immediately — scorched clothing is the warning before the fatality",
        "Know the oxygen and emollient rules: no smoking within the stated distance of oxygen; emollient-treated dressings and clothing are a fire accelerant near any flame",
        "Support rather than police: prompts, encouragement, and cessation conversations belong to care; confiscation belongs to a capacity-assessed, best-interests decision only" ] },
    ],
    keyPoints: [
      "The building is smoke-free by law: smoking indoors is prohibited for everyone — people we support, staff, visitors, contractors — with signage displayed; the narrow residential exemptions (designated bedrooms in some care settings) are used only where the service has formally adopted them with fire-safety controls, and this service's position is recorded in the local arrangements",
      "Individual risk assessment is where safety lives: each person who smokes is assessed for capacity to smoke safely, dexterity and dropping risk, cognition (leaving lit cigarettes, hiding smoking), clothing and emollient use, oxygen therapy, and supervision needs — producing a plan from independent outdoor smoking through supervised smoking to (rarely, and via best-interests process) managed access to materials",
      "Oxygen and smoking are a lethal pairing: no smoking in rooms where oxygen is in use or stored, distances per the oxygen policy, no smoking materials carried by people during oxygen therapy — and home-oxygen users who smoke get the specific joint risk assessment with the supplying team",
      "Emollients are the quiet accelerant: paraffin-based and even paraffin-free emollients soak into clothing, bedding and dressings and ignite readily — smokers using emollients get washing cycles, clothing checks and heightened supervision written into the plan",
      "Vaping is safer but not unregulated: e-cigarettes are not covered by smoke-free law but the service sets its rules — vaping in designated areas rather than shared indoor spaces (vapour, courtesy and fire-alarm interactions), charging only with correct chargers and never overnight unattended (battery fires are real), and no vaping by staff on duty in view of people we support",
      "Adults with capacity may choose to smoke: the service's job is safe arrangements, not prohibition — refusal to accept supervision a risk assessment requires is escalated through capacity assessment and best-interests or positive-risk processes, documented, and never met with covert confiscation",
      "Fire equipment follows the smokers: designated areas carry appropriate extinguishing arrangements and deep, self-closing bins (never planters or open buckets); smoking materials storage per plans; and fire drills include the smoking-area scenarios",
      "Staff and visitors carry duties too: staff never smoke or vape on duty where people we support can see them, never in vehicles used for the service, and never in people's homes; visitors are directed to the designated area; contractors follow site rules via induction",
    ],
    legislation: [
      "Health Act 2006 and Smoke-free (Premises and Enforcement) Regulations",
      "Regulatory Reform (Fire Safety) Order 2005",
      "Mental Capacity Act 2005 (choices and best-interests decisions)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulations 9, 10, 12",
      "MHRA/NHS guidance on e-cigarettes and fire services' emollient and oxygen safety guidance",
    ],
    sections: [
      { heading: "Premises Arrangements", body: "The service's local arrangements record: the smoke-free status of all indoor areas with signage at entrances; the designated outdoor smoking area(s) — sited away from doors, windows and air intakes, weather-protected enough to be genuinely usable (an unusable designated area produces covert indoor smoking, the most dangerous outcome), equipped with deep self-closing disposal bins emptied on schedule and appropriate extinguishing arrangements nearby; the prohibition in all service vehicles; and the service's position on any residential exemption. Where an exemption bedroom is operated: fire-retardant furnishing, suitable detection, door discipline, ventilation, cleaning schedule, and explicit fire-risk-assessment coverage — reviewed annually and after any incident. Grounds rules for visitors are signed and staff apply them with courtesy and consistency." },
      { heading: "Individual Assessment and Support", body: "Every person who smokes gets the assessment at admission or when smoking begins/emerges, reviewed at care plan reviews, on health change, and after incidents. It covers: capacity to understand smoking risks and manage materials; physical ability (grip, tremor, positioning — the dropped cigarette is the classic fatal mechanism); cognitive factors (memory of lit cigarettes, judgement, hiding materials or smoking in bed); clinical interactions (oxygen, emollients, air-flow mattresses which behave badly with fire, sedating medication); and environment (chair type, clothing, apron use where assessed as dignity-compatible). The output is a plan everyone follows: where the person smokes, with what supervision, how materials are stored and accessed, what protective measures apply (fire-retardant aprons, timing around emollient application), and what staff do when the plan is refused. Cessation support is offered at assessment and periodically — nicotine replacement via the GP/pharmacy route, local stop-smoking services, and vaping as a harm-reduction conversation where clinically supported — with offers and outcomes recorded and no pressure attached to refusal." },
      { heading: "Fire Interactions", body: "Three interactions get named controls. Oxygen: absolute separation of smoking from oxygen use and storage per the oxygen policy's distances; signage where oxygen is in use; and the person who smokes AND uses oxygen gets a joint plan with the supplying service, family involvement, and — where capacity allows choice that cannot be made safe — a formally documented positive-risk decision at senior level. Emollients: application timing separated from smoking, washing of clothing and bedding at the frequency the fire service guidance supports, awareness that build-up survives washing, and heightened supervision where both risks combine. Equipment and environment: air-flow mattresses and dynamic cushions near smoking get specific assessment; smoking aprons where used are fire-retardant and personal; bins are metal and deep; and scorch marks anywhere trigger immediate incident reporting and plan review — the scorch mark is the near-miss that predicts the fire death." },
      { heading: "Staff, Vehicles and Community Working", body: "Staff rules are uniform and enforced through the conduct route: no smoking or vaping on duty in sight of people we support or at building entrances; breaks taken in permitted places with uniform covered where the service requires; no smoking in any vehicle used for service business (own cars during work journeys included where people are carried); and hand hygiene and freshening after smoking before care contact. In people's homes the person's right to smoke in their own home stands: staff may ask for no smoking during the visit (and this is written into service user agreements where adopted), risk assessments cover second-hand smoke exposure for regular long visits, oxygen-plus-smoking households get the joint safety conversation with the supplier and fire service home-safety visit referral, and staff never smoke in a person's home regardless of invitation. Vaping by people we support in their own homes follows their choice; the service's advice role covers charger safety — cheap chargers and overnight charging cause fires in exactly the homes least able to escape them." },
    ],
    appendices: [
      { title: "Individual Smoking Risk Assessment & Plan", type: "form", body:
"Person: ______  Date: ______  Review: (care plan review / health change / post-incident)\nSMOKES: what & how much | WHERE currently | VAPES? (device, charger checked [ ])\nCAPACITY: understands risks [ ]/assessment ref: ____ | manages materials safely [ ]\nPHYSICAL: grip/tremor/dropping risk | positioning | mobility to designated area\nCOGNITIVE: memory of lit materials | smoking in bed/hiding materials history\nCLINICAL INTERACTIONS: oxygen therapy [ ] (joint plan ref: ____) | emollients [ ] (washing cycle: ____, application timing: ____) | air-flow mattress [ ] | sedating meds [ ]\nHISTORY: burns, scorch marks, near-misses (dates)\nPLAN: smoking location: ____ | supervision: none/prompt/accompanied/continuous | materials storage & access: ____ | protective measures (fire-retardant apron etc.): ____ | bin/extinguishing at location [ ]\nCESSATION: offer made (date) | response | NRT/stop-smoking referral: ____\nIf plan refused: capacity assessment → best-interests/positive-risk decision (ref: ____) — no covert confiscation.\nSigned (person involved [ ]): ______" },
      { title: "Smoking Safety Walk-Round Checklist (monthly + post-incident)", type: "checklist", body:
"PREMISES: smoke-free signage at entrances [ ] designated area usable (weather/seating) [ ] deep self-closing metal bins, emptied [ ] extinguishing arrangements at area [ ] no evidence of indoor/covert smoking (odour, butts, scorch) [ ]\nPEOPLE: all smokers have current assessment & plan [ ] supervision levels being delivered [ ] materials stored per plans [ ] aprons (where used) fire-retardant & serviceable [ ]\nINTERACTIONS: oxygen users who smoke — joint plans current [ ] emollient users — washing cycles happening [ ] scorch-mark check on clothing/bedding/furniture of assessed smokers [ ]\nVAPING: chargers correct & not overnight-unattended [ ] charging locations safe [ ]\nSTAFF/VISITORS: no on-duty smoking in view [ ] vehicles smoke-free [ ] visitors directed correctly [ ]\nIncidents/near-misses since last check reviewed & plans updated [ ]\nSign-off: name/date → findings to fire risk assessment review where relevant" },
    ],
  },
  "saf-043": {
    purpose: "This policy ensures that when someone is injured or taken ill, trained help reaches them in minutes with working equipment — on every shift, in every location the service works. First aid in a care service is not a poster and a green box: it is a needs assessment honestly done, enough trained people on every rota, kits that are stocked because someone owns checking them, and a recording chain that feeds the incident system.",
    scope: "Covers first aid provision for people we support, staff and visitors across all premises, vehicles and community working, including lone workers. Clinical emergency response (deterioration, choking, catastrophic events) links to the relevant clinical policies; this policy holds the provision framework: assessment, people, equipment, and process.",
    responsibilities: [
      { role: "Registered Manager", duties: [
        "Complete and maintain the first aid needs assessment (Appendix A), reviewing it annually and when services, premises or dependency change",
        "Roster to the assessment: the required number of first aiders (FAW/EFAW per the assessment) on every shift including nights and weekends — training expiry tracked with rebooking before lapse",
        "Provide and site kits per the assessment (premises points, vehicles, community bags), with a named owner for the monthly check of each",
        "Decide AED provision via the assessment and maintain any device (pads/battery expiry, weekly readiness check, registration with the ambulance service circuit where applicable)",
        "Ensure first aid events are recorded, reported through the incident system, and RIDDOR-assessed" ] },
      { role: "All Staff", duties: [
        "Know who the on-duty first aiders are (displayed) and how to summon them and the emergency services from anywhere they work",
        "Deliver help within their competence while first aid arrives: basic life support per training, the recovery position, pressure on bleeds",
        "Record every first aid event, however minor, in the first aid/incident record the same shift",
        "Report kit deficiencies rather than working around them, and restock after every use",
        "Lone workers: carry the personal kit, know the emergency contact cascade, and follow the lone working policy's escalation" ] },
    ],
    keyPoints: [
      "The needs assessment drives everything: population (age, frailty, clinical risk), premises (size, layout, floors), activities (kitchens, maintenance, outings), staffing patterns (nights, lone work) and ambulance response reality determine how many first aiders at what training level, how many kits where, and whether an AED is provided — a care service's assessment almost always concludes more than the legal minimum for low-risk workplaces",
      "Cover means every shift, not headcount: twelve trained staff who all work weekdays leave the night shift uncovered — rostering rules guarantee the assessed cover at all times, with training expiry managed so cover never silently lapses",
      "First aid for people we support sits alongside clinical protocols: first aiders act within first aid training while the clinical escalation runs (Deterioration/NEWS2, choking, catastrophic bleed per training) — 999 is never delayed to await an internal hierarchy",
      "Kits are owned, sited and standardised: contents to the recognised standard adjusted by the assessment (burns provision near kitchens, eye irrigation where COSHH indicates), sited where work happens including vehicles and community bags, checked monthly by a named owner against the contents card, restocked after every use — no medicines inside kits, including paracetamol",
      "AEDs save minutes that save lives: where the assessment provides one, it is publicly signed, registered with the ambulance service where schemes exist, checked weekly (readiness indicator, pad/battery expiry), and staff are familiarised — modern AEDs instruct the untrained, and no one waits for a 'qualified' person to attach one",
      "Recording is dual-purpose: the first aid record captures the event, treatment and outcome (a statutory record for staff injuries); the incident system captures learning and pattern; RIDDOR assessment applies to staff events meeting thresholds — and events involving people we support also run the care incident, notification and duty of candour routes as applicable",
      "Community and lone working get their own answer: personal kits in vehicles/bags, the emergency cascade card carried, location-sharing per the lone working policy, and first aid competence included in community staff training because help is not down the corridor",
      "Visitors and contractors are covered: provision extends to anyone on the premises, first aiders respond to all, and the sign-in system means everyone is accounted for in an evacuation-scale event",
    ],
    legislation: [
      "Health and Safety (First-Aid) Regulations 1981 and HSE guidance",
      "Health and Safety at Work etc. Act 1974",
      "RIDDOR 2013",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "Social Security (Claims and Payments) Regulations (accident book duties)",
    ],
    sections: [
      { heading: "The Needs Assessment", body: "The assessment (Appendix A) is honest about what the service is: a population with falls, choking, seizure, diabetic and cardiac risk; premises where a first aider may be two floors from an event; kitchens, maintenance activity and grounds; nights run on minimal staffing; community work far from colleagues. From these it derives: the number of first aiders per shift and their level (First Aid at Work for comprehensive cover; Emergency First Aid at Work as the floor where assessed; paediatric content where children attend or are supported), kit numbers, contents adjustments and locations, AED provision, and information arrangements (signage, induction content). The assessment is reviewed annually, after significant incidents, and on any change to services, premises or staffing model — and its conclusions are implemented, because an assessment that concludes four first aiders per shift and a rota that delivers two is evidence against the service, not for it." },
      { heading: "First Aiders: Training and Rostering", body: "Training is delivered by competent providers (regulated qualifications or trainers meeting HSE expectations), with FAW (3-day) and EFAW (1-day) per the assessment's mix, requalification before certificate expiry (three years) and annual refresher good practice in between — clinical skills like BLS/CPR follow the service's mandatory training matrix and do not substitute for the first aid qualification where the assessment requires it. The rota system flags first aid cover as a hard constraint: shifts cannot be published below assessed cover; expiry reports run monthly with rebooking at the 3-month horizon; and the display board (and handover sheet) names today's first aiders so no one hesitates hunting for help. Willingness matters too: first aiders are volunteers supported with the time and refreshers the role needs, and after distressing events they receive the debrief and support the incident policy provides." },
      { heading: "Equipment", body: "Each kit is registered: location, owner, check date. Contents follow the recognised workplace standard, tuned by the assessment: burns dressings and cling film provision near kitchens and laundry; eye irrigation where chemical risk exists; foil blankets for outdoor and evacuation scenarios; tourniquets/haemostatic dressings only where the assessment supports them AND training covers them; and no tablets or medicines of any kind (analgesia for people we support runs through the medication policy, not the first aid box). Vehicles used for service business carry travel kits; community staff carry personal kits sized to their work. Monthly checks run against the contents card sealed in each kit; every use triggers same-shift restocking by the responder with the owner closing the loop. AED arrangements where provided: signage, weekly readiness check recorded, pads and battery expiry tracked like medicines dates, post-use pad replacement and event download per the device procedure, and location shared with the ambulance circuit where local schemes operate." },
      { heading: "Response, Recording and Learning", body: "The response chain is simple and drilled: any staff member starts help within competence and summons the on-duty first aider and, for anything beyond minor, calls 999 in parallel — the escalation policies (deterioration, choking, falls with injury, suspected stroke or cardiac event) name the triggers, and nobody is criticised for a 999 call made in good faith. The first aider manages the scene until handover: treatment within training, no moving people with suspected spinal injury except for airway necessity, infection control precautions (gloves, resuscitation barriers), and clear handover to ambulance crews (SBAR-style: what happened, what was done, medications and conditions from the care record). Recording follows within the shift: the first aid/accident record (who, what, where, treatment, outcome, responder), the incident report with its analysis and notification assessments (RIDDOR for staff, regulator notifications and duty of candour for people we support), and kit/AED usage logged for restocking. The governance review sees first aid data in the incident stream: event patterns by time and location, response performance, kit findings and training compliance — because the system's job is to keep proving it works before the day it must." },
    ],
    appendices: [
      { title: "First Aid Needs Assessment", type: "form", body:
"Service: ______  Date: ______  Review due: ______ (annual / on change / post-incident)\nPOPULATION: numbers & dependency | clinical risks (falls, choking, seizures, diabetes, cardiac, dysphagia) | children present?\nPREMISES: floors/layout/distance factors | kitchens [ ] laundry [ ] maintenance/grounds [ ] chemical risks (COSHH refs)\nSTAFFING: shift patterns incl. nights | lone working [ ] | community working [ ]\nEXTERNAL: typical ambulance response locally | nearest ED\nCONCLUSIONS:\n– First aiders per shift (day/night): ____ at level (FAW/EFAW/paediatric content): ____\n– Kits: number ____ locations ____ content adjustments (burns/eye/foil/other): ____\n– Vehicle & community kits: ____\n– AED: provided? [ ] location ____ registered with ambulance circuit [ ]\n– Signage & induction arrangements: ____\nImplemented on rota system as hard constraint [ ]  Signed (manager): ______" },
      { title: "First Aid Kit Contents Card & Monthly Check Log", type: "template", body:
"KIT: location ____ owner ____\nCONTENTS (standard + assessment adjustments): guidance leaflet | plasters (assorted, incl. blue for food areas) | sterile dressings (medium/large) | triangular bandages | safety pins | sterile eye pads | eye wash (where assessed) | burns dressings/cling film (where assessed) | foil blanket | nitrile gloves (pairs) | resuscitation face shield | scissors/tweezers | microporous tape | wipes (non-alcohol) | NO MEDICINES OF ANY KIND\nMONTHLY CHECK: date | all items present & in date | seals intact | restock actions | initials\nAFTER EVERY USE: responder restocks same shift → owner verifies [ ]\nAED (if at this location): weekly readiness indicator check | pad expiry ____ | battery expiry ____ | post-use: pads replaced, event handled per device procedure" },
    ],
  },
};
