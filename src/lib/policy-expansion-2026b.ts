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
};
