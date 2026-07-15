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
};
