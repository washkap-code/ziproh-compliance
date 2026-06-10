/**
 * Medium-depth policy content — batch 6.
 * Dysphagia, Covert Medication, Disciplinary & Capability,
 * Positive Behaviour Support, Information Governance.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// EFF-010  Dysphagia & Swallowing Difficulties Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF010_CONTENT: DocumentContent = {
  title: "Dysphagia & Swallowing Difficulties Policy",
  policyId: "EFF-010",
  version: "3.0",
  effectiveDate: "2026-03-12",
  reviewDate: "2027-03-12",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All service users at [ORGANISATION_NAME] who have or are suspected to have dysphagia (swallowing difficulties). This policy applies to all staff involved in food preparation, mealtime support, and care planning, and must be read alongside EFF-003 Nutrition & Hydration Policy.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure all new service users with known or suspected dysphagia are referred to Speech and Language Therapy (SALT) within 48 hours of admission.",
        "Ensure all kitchen and care staff are trained in IDDSI and dysphagia awareness within induction.",
        "Ensure SALT recommendations are implemented exactly as prescribed — no informal adaptations.",
        "Review all aspiration episodes as serious incidents and investigate causation.",
        "Maintain a dysphagia register and review it at quarterly governance meetings.",
      ],
    },
    {
      role: "All Care and Kitchen Staff",
      duties: [
        "Never prepare or serve food or fluid to a service user with dysphagia without checking the IDDSI level prescribed in their care plan.",
        "Report any new or changed swallowing difficulty immediately to the senior on duty.",
        "Follow SALT guidelines exactly — do not improvise or substitute textures.",
        "Attend dysphagia and IDDSI training within induction and at update training.",
        "Observe mealtime behaviour and report coughing, choking, a 'wet' or gurgly voice, or refusal of foods.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 14 — Meeting nutritional and hydration needs",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Mental Capacity Act 2005 — consent to and best interest decisions about modified diet",
    "Food Safety Act 1990 and Food Information Regulations 2014 — allergen management in texture-modified food",
    "NICE Clinical Knowledge Summary — Dysphagia (updated 2023)",
  ],
  definitions: [
    { term: "Dysphagia", definition: "Difficulty or discomfort in swallowing. Can affect any stage of the swallow — oral (chewing and preparation), pharyngeal (triggering the swallow reflex), or oesophageal (passage to the stomach). In care settings, the greatest risks are aspiration (food/fluid entering the airway) and malnutrition from reduced intake." },
    { term: "Aspiration", definition: "The passage of food, fluid, or oral secretions into the trachea and lungs. Aspiration can cause aspiration pneumonia, which is a leading cause of preventable death in older adults. Silent aspiration (aspiration without coughing) is particularly dangerous and may occur without obvious signs." },
    { term: "IDDSI", definition: "International Dysphagia Diet Standardisation Initiative. The internationally adopted framework for describing texture-modified foods and thickened fluids. Eight levels: Fluids 0 (thin) to 4 (extremely thick); Foods 3 (liquidised) to 7 (regular). Each level has a standardised name, a colour code, and defined testing methods (fork drip test, spoon tilt test, chopstick test)." },
    { term: "SALT", definition: "Speech and Language Therapist. The qualified clinician responsible for assessing swallowing function, recommending IDDSI levels, advising on safe swallowing techniques, and reviewing progress. SALT recommendations must be followed exactly — no modifications without SALT approval." },
    { term: "Texture-Modified Diet", definition: "Food that has been processed, cooked, or presented in a way that alters its texture to make it safer or easier to swallow for a person with dysphagia. The required texture level is prescribed by the SALT based on their clinical assessment." },
  ],
  sections: [
    {
      title: "Identification and Referral",
      body: "Dysphagia may present at any point during a service user's care. Staff must be alert to the following signs and symptoms, any of which should trigger an immediate referral to SALT:\n\n• Coughing or choking during or after eating or drinking.\n• A 'wet', gurgly, or changed voice quality during or after meals.\n• Difficulty chewing or controlling food in the mouth.\n• Food or liquid leaking from the mouth.\n• Prolonged mealtimes or significant reduction in intake.\n• Repeated chest infections — particularly aspiration pneumonia.\n• Drooling.\n• Painful swallowing.\n• Refusing food or fluid without clear reason.\n• Significant weight loss.\n\nService users with neurological conditions — stroke, dementia, Parkinson's disease, motor neurone disease, multiple sclerosis — are at significantly elevated risk and should be proactively screened for dysphagia.",
      warningBox: "Silent aspiration occurs when a person aspirates food or fluid without coughing. It is common in older adults and those with dementia or neurological conditions. Absence of coughing does NOT mean swallowing is safe. Any service user with a neurological condition or unexplained weight loss or chest infections should be referred to SALT regardless of whether they appear to be coughing.",
    },
    {
      title: "IDDSI Framework — Implementation",
      body: "The SALT assessment produces a prescribed IDDSI level for food and a separate level for fluids. Both must be documented in the care plan and communicated to kitchen staff in writing.\n\nIDDSI Fluid Levels:\n• Level 0 — Thin (water, juice, milk — no modification)\n• Level 1 — Slightly thick\n• Level 2 — Mildly thick\n• Level 3 — Moderately thick\n• Level 4 — Extremely thick (pudding consistency)\n\nIDDSI Food Levels:\n• Level 3 — Liquidised (smooth, no lumps, no chewing required)\n• Level 4 — Puréed (smooth, moist, no lumps, easily mashed)\n• Level 5 — Minced and moist (small soft pieces, easily mashed with tongue)\n• Level 6 — Soft and bite-sized (tender, moist, no hard/chewy/crunchy pieces)\n• Level 7 — Regular (normal texture — no modification required)\n\nEvery meal and drink served to a person with a prescribed IDDSI level must be prepared and checked against that level before serving. The kitchen must hold a laminated IDDSI reference card at the food preparation area.",
      practiceBox: "IDDSI testing methods are quick and require no specialist equipment. The fork drip test (for fluids) and the spoon tilt test (for puréed foods) should be performed by kitchen staff as a quality check before serving. A fluid that passes through a fork in less than 10 seconds at 10°C is Level 0. Training staff to perform these tests takes 30 minutes and prevents aspiration.",
    },
    {
      title: "Mealtime Management for Dysphagia",
      body: "Mealtime support for service users with dysphagia requires specific techniques that must be specified in the SALT report and documented in the care plan:",
      bulletPoints: [
        "Positioning — the service user must be seated upright (90 degrees) with feet flat on the floor where possible, chin slightly tucked. Never feed a person who is reclined or lying down.",
        "Pace — allow adequate time between mouthfuls. Never rush. Larger bolus sizes increase aspiration risk.",
        "Consistency check — confirm the texture and consistency of every item before offering it.",
        "Oral hygiene — good oral hygiene before meals reduces the bacterial load in secretions that may be aspirated.",
        "Focus — minimise distractions during meals. The service user should not be talking while eating.",
        "Monitoring — observe for signs of aspiration during and after eating (coughing, voice change, distress).",
        "Fluid thickener — thickeners must be prepared exactly according to manufacturer instructions and the SALT prescription. The ratio of thickener to liquid determines the IDDSI level. Do not estimate.",
      ],
    },
    {
      title: "Aspiration — Response Procedure",
      body: "If a service user chokes, aspirates, or appears to be in distress during eating or drinking:",
      procedure: [
        "Stop feeding immediately.",
        "Encourage coughing — coughing is the most effective airway clearance mechanism. Do not intervene unless the person cannot cough.",
        "If the person cannot cough and is showing signs of severe airway obstruction (cannot speak, cannot breathe, cyanosis): call 999 immediately and begin back blows and abdominal thrusts (modified Heimlich) per basic life support training.",
        "If the episode resolves: ensure the person is comfortable and their airway is clear. Monitor for respiratory symptoms over the following 24 hours.",
        "Document the episode in the care record including: food/fluid involved, IDDSI level, clinical presentation, action taken, outcome.",
        "Notify the Registered Manager — any aspiration episode is a serious incident.",
        "Refer to SALT for urgent review of the dysphagia management plan.",
        "Notify the GP if there are respiratory symptoms or concern about aspiration pneumonia.",
      ],
    },
    {
      title: "Consent and Mental Capacity",
      body: "Service users with dysphagia retain the right to make choices about what they eat and drink, including choices that carry risk, provided they have capacity to make those decisions.\n\nWhere a service user with capacity chooses to eat or drink foods that the SALT has advised against, the Registered Manager must:\n• Ensure the service user has been fully informed of the risks in an accessible way.\n• Discuss the risks with the SALT and explore any compromise (e.g. supervised eating, modified preparation).\n• Document the service user's informed decision and the information they were given.\n• Consider whether safeguarding applies (e.g. pressure from family to serve unsafe foods).\n\nFor service users who lack capacity, a best interest decision must be made under MCA 2005, involving the SALT, family, GP, and any Independent Mental Capacity Advocate (IMCA). The decision and rationale must be documented.",
      legalBox: "A service user with capacity who chooses to take a dietary risk that has been fully explained to them is exercising their legal right to autonomy. [ORGANISATION_NAME] must respect this decision while documenting it carefully. Overriding it by serving only prescribed textures without consent would itself be a violation of the person's rights.",
    },
  ],
  relatedDocuments: [
    "eff-003 — Nutrition & Hydration Policy",
    "eff-002 — Mental Capacity Act Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "car-001 — Dignity & Respect Policy",
    "eff-001 — Care Planning Policy",
  ],
  appendices: [
    { title: "Appendix A — IDDSI Quick Reference Card", content: "Laminated A5 card showing all 8 IDDSI levels with colour codes, descriptors, testing methods, and key examples of foods/fluids at each level. For display in kitchen and dining areas." },
    { title: "Appendix B — Dysphagia Care Plan Template", content: "Structured insert for the care plan: prescribed IDDSI food level; prescribed IDDSI fluid level; thickener brand and preparation instructions; positioning requirements; pace and technique guidance; signs of aspiration to monitor for; SALT contact details; review date." },
  ],
  versionHistory: [
    { version: "3.0", date: "2026-03-12", changes: "Updated to current IDDSI framework version; added silent aspiration warning; strengthened consent and capacity section." },
    { version: "2.8", date: "2025-04-01", changes: "Added aspiration response procedure; updated SALT referral timescale to 48 hours." },
    { version: "2.5", date: "2024-01-20", changes: "Replaced National Descriptors with IDDSI throughout; added IDDSI testing methods guidance." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-016  Medicines Covert Administration Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF016_CONTENT: DocumentContent = {
  title: "Medicines Covert Administration Policy",
  policyId: "SAF-016",
  version: "2.1",
  effectiveDate: "2026-01-15",
  reviewDate: "2027-01-15",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] for whom covert administration of medication is being considered or is in place. Covert administration means giving medication to a person in a disguised form — typically in food or drink — without their knowledge. This policy applies to all staff who may be involved in or aware of covert medication administration.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a covert medication protocol is in place for every service user receiving covert medication.",
        "Ensure the covert medication decision is reviewed at every care review and at minimum every 3 months.",
        "Ensure covert medication protocols are held in the care plan and that all relevant staff are aware of them.",
        "Ensure the pharmacist has approved the formulation to be used covertly.",
        "Report any covert medication that has not followed this policy procedure as a serious incident.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Never administer medication covertly without a documented covert medication protocol signed by the GP and Registered Manager.",
        "Administer covert medication strictly in accordance with the approved protocol — no improvisation.",
        "Record covert administrations on the MAR chart in the same way as standard administrations.",
        "Report any change in the service user's condition, consent capacity, or medication response to the senior immediately.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005 — capacity assessment, best interest decision-making, and lawfulness of covert administration",
    "Human Rights Act 1998, Article 8 — right to private life; Article 9 — freedom of conscience",
    "Medicines Act 1968 and Human Medicines Regulations 2012 — lawful administration of medicines",
    "Nursing and Midwifery Council — Guidance on covert administration of medicines (2018)",
    "NICE Guideline SC1 — Medicines Optimisation (2015)",
    "Royal Pharmaceutical Society — Professional Guidance on the Administration of Medicines in Healthcare Settings (2019)",
  ],
  definitions: [
    { term: "Covert Administration", definition: "The administration of medication to a person without their knowledge, typically by disguising it in food, drink, or another substance. Covert administration without a lawful basis is an assault and a potential criminal offence." },
    { term: "Disguising Medication", definition: "Crushing tablets, opening capsules, or dissolving medication in food or drink to conceal it from the person. Note that crushing some tablets or opening some capsules alters the pharmacokinetic properties of the drug (particularly modified-release formulations) and may render the medication ineffective or harmful. Pharmacist approval is mandatory before any formulation is disguised." },
    { term: "Best Interest Decision", definition: "A decision made under MCA 2005 section 4 on behalf of a person who lacks capacity for that decision, which must consider: the person's past and present wishes, feelings, values, and beliefs; the views of family and carers; and the least restrictive option. A covert medication decision is a significant best interest decision requiring formal documentation." },
    { term: "Covert Medication Protocol", definition: "A documented plan, agreed by the GP, pharmacist, Registered Manager, and relevant family or advocates, specifying: the medication; the formulation approved for disguising; the vehicle (food/drink) to be used; the administration schedule; and the review date." },
  ],
  sections: [
    {
      title: "When Covert Administration May Be Considered",
      body: "Covert administration of medication is not a routine care option — it is a significant intervention that may only be considered where:\n\n1. The service user lacks mental capacity (as assessed under MCA 2005 sections 2–3) to make the specific decision about whether to take the medication.\n2. The medication is deemed essential to the service user's health and wellbeing.\n3. All reasonable attempts to administer the medication openly — including offering choices of formulation, timing, and route, and using communication approaches appropriate to the person — have been genuinely explored and documented.\n4. A formal best interest decision has been made and documented, involving the prescriber, pharmacist, relevant family or carers, and an IMCA if there is no family.\n5. The pharmacist has confirmed that the proposed formulation can be safely disguised in the proposed vehicle.\n\nCovert administration must never be used to manage a person who has capacity and refuses medication. Refusal is a right — override of refusal is an assault.",
      warningBox: "The most common error in covert medication practice is administering medication covertly to a person who HAS capacity and has refused. A person with dementia is not automatically lacking capacity — capacity must be assessed for each decision at each relevant time. A person who cannot remember agreeing to take medication does not necessarily lack capacity to decide about it now.",
    },
    {
      title: "The Covert Medication Process",
      procedure: [
        "Identify the concern: the care team identifies that a service user who lacks capacity is refusing medication that is clinically necessary.",
        "Document all open administration attempts: record every attempt to give the medication openly, including what approaches were tried and the outcome. This documentation establishes that covert administration is a last resort.",
        "Capacity assessment: complete a formal MCA capacity assessment, documented in the care plan. The assessment must be decision-specific (the decision to take this medication) and time-specific.",
        "GP consultation: contact the prescriber to discuss the situation. The GP must agree that the medication is essential and support the covert approach.",
        "Pharmacist consultation: contact the dispensing pharmacist to confirm: (a) whether the medication can safely be crushed/opened; (b) whether the formulation will remain effective when disguised; (c) the approved vehicle (e.g. yoghurt, juice). The pharmacist's advice must be documented.",
        "Best interest meeting: convene a meeting (or documented telephone consultation) including the GP, a family member or relevant representative, and the Registered Manager. Document the meeting, the views expressed, and the decision reached.",
        "Complete the Covert Medication Protocol form: document the medication, approved formulation, vehicle, administration method, schedule, and review date.",
        "Brief all relevant staff: all staff who may administer the medication must be briefed on the protocol. The protocol must be accessible in the care plan.",
        "Commence administration and record on MAR chart as normal.",
        "Review: review the covert medication decision every 3 months (or sooner if the person's capacity changes, their condition changes, or the medication is changed).",
      ],
    },
    {
      title: "Pharmacist Approval — Formulation Safety",
      body: "Not every medication can be safely administered covertly. The pharmacist's role in the covert medication process is essential and not a formality.\n\nMedications that must NOT be crushed or modified without pharmacist-specific approval:\n• Modified-release (MR, SR, XL, XR, CR) tablets and capsules — crushing destroys the controlled-release mechanism and may cause dose dumping.\n• Enteric-coated tablets — designed to dissolve in the intestine, not the stomach; crushing removes this protection.\n• Sublingual or buccal formulations — designed for absorption under the tongue or in the cheek, not swallowed.\n• Cytotoxic medications — present an inhalation and contamination risk to the person crushing them.\n\nThe pharmacist may recommend an alternative formulation (liquid, dispersible tablet, patch, or suppository) that achieves the same therapeutic effect while being suitable for covert administration.",
      legalBox: "If a pharmacist advises that a medication cannot be safely disguised, that medication cannot be given covertly. There is no lawful workaround. If the medication is clinically essential, the prescriber must be asked to review and substitute a formulation that can safely be administered. Administering a modified-release tablet that has been crushed — contrary to pharmacist advice — may expose the service user to potentially dangerous dose effects and constitutes an unsafe administration.",
    },
    {
      title: "Documentation and Transparency",
      body: "Covert medication protocols must be:\n• Documented in the service user's care plan, accessible to all relevant staff.\n• Reviewed and re-signed at every care review (minimum 3-monthly).\n• Recorded in the governance log as an active restrictive practice.\n• Available for inspection by CQC.\n\nTransparency with family:\nAlthough the medication is given covertly to the service user (because disclosure would defeat the purpose), the process itself must be transparent with family, carers, and relevant professionals. The service user's family or IMCA must be involved in the best interest decision. They must be told that covert medication is in place and why.\n\nReview and withdrawal:\nIf the service user regains capacity for this decision, covert administration must stop immediately. If the medication is changed, the covert medication protocol must be reviewed from the beginning, including a new pharmacist consultation for the new formulation.",
    },
  ],
  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "saf-003 — Medication Management Policy",
    "saf-004 — Medication Administration Procedure",
    "car-008 — Advocacy Policy",
    "wl-005 — Data Protection & GDPR Policy",
  ],
  appendices: [
    { title: "Appendix A — Covert Medication Protocol Template", content: "Service user name and DOB; medication name, dose, frequency; reason covert administration is required; capacity assessment reference; best interest meeting date and attendees; GP name and signature; pharmacist name and advice (formulation, vehicle); administration instructions; review date; Registered Manager signature." },
    { title: "Appendix B — Open Administration Attempts Log", content: "Date/time log for recording each attempt to administer the medication openly: method used; service user response; staff member; outcome. Minimum 5 documented attempts across a range of approaches before a covert protocol is initiated." },
  ],
  versionHistory: [
    { version: "2.1", date: "2026-01-15", changes: "Strengthened pharmacist approval section; added modified-release prohibition list; updated best interest documentation requirements." },
    { version: "2.0", date: "2025-03-01", changes: "Full review; aligned with RPS Professional Guidance 2019; added IMCA requirement." },
    { version: "1.8", date: "2024-01-10", changes: "Updated MCA sections 2–3 capacity assessment guidance; added transparency with family requirement." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-010  Disciplinary & Capability Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL010_CONTENT: DocumentContent = {
  title: "Disciplinary & Capability Policy",
  policyId: "WL-010",
  version: "3.2",
  effectiveDate: "2026-03-10",
  reviewDate: "2027-03-10",
  approvedBy: "Registered Manager / HR Lead",
  scope: "All employees of [ORGANISATION_NAME], including full-time, part-time, fixed-term, and zero-hours contract staff. This policy covers misconduct (breach of expected conduct standards) and capability (poor performance or ill-health affecting ability to perform the role). It does not apply to independent contractors or agency staff, though similar principles guide decisions about their continued engagement.",
  responsibilities: [
    {
      role: "Registered Manager / HR Lead",
      duties: [
        "Ensure this policy is applied consistently and fairly across all staff.",
        "Conduct or oversee all disciplinary and capability investigations and hearings.",
        "Ensure all disciplinary decisions are proportionate to the seriousness of the matter.",
        "Ensure DBS referral and professional regulatory body notification are made where required.",
        "Retain all disciplinary records in line with the records retention schedule.",
      ],
    },
    {
      role: "Line Managers",
      duties: [
        "Address conduct and performance concerns promptly and informally where appropriate.",
        "Conduct investigations fairly and without prejudging the outcome.",
        "Maintain confidentiality throughout the disciplinary process.",
        "Seek HR guidance when unsure about process or proportionality.",
      ],
    },
  ],
  legislation: [
    "Employment Rights Act 1996 — unfair dismissal rights (qualifying period and procedural requirements)",
    "Acas Code of Practice on Disciplinary and Grievance Procedures (2015, updated 2021) — statutory code; non-compliance increases compensation by up to 25%",
    "Equality Act 2010 — protected characteristics must not be a factor in disciplinary decisions",
    "Safeguarding Vulnerable Groups Act 2006 — DBS barring referral duty for regulated activity with vulnerable persons",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 19 — Fit and Proper Persons",
  ],
  definitions: [
    { term: "Misconduct", definition: "Behaviour that falls below the standard expected of an employee. Examples: unexplained absence, lateness, minor policy breach, inappropriate behaviour toward colleagues. Generally addressed initially through informal discussion or a formal written warning." },
    { term: "Gross Misconduct", definition: "Conduct so serious that it fundamentally breaches the employment relationship, potentially justifying dismissal without notice. Examples in a care setting: abuse, neglect, or ill-treatment of a service user; theft or fraud; falsifying care records; working under the influence of substances; serious breach of confidentiality; physical violence." },
    { term: "Capability", definition: "A concern about an employee's ability to perform their role to the required standard — due to lack of skill, knowledge, performance, or ill-health. Capability procedures focus on support and improvement rather than blame, and are procedurally distinct from misconduct procedures." },
    { term: "Acas Code", definition: "The Acas Code of Practice on Disciplinary and Grievance Procedures. While not legally binding, employment tribunals take it into account when assessing fairness of dismissal. Failure to follow it can result in a 25% uplift in any compensatory award." },
  ],
  sections: [
    {
      title: "Principles",
      body: "All disciplinary and capability matters at [ORGANISATION_NAME] are managed in line with the following principles:\n\n• Fairness and consistency — the same standards are applied to all staff regardless of role, length of service, or personal characteristics.\n• Proportionality — the sanction is appropriate to the seriousness of the concern.\n• Investigation before action — no disciplinary sanction is imposed without a fair investigation.\n• Right to be accompanied — the employee has the right to be accompanied by a colleague or trade union representative at any formal hearing.\n• Right of appeal — every formal disciplinary outcome may be appealed.\n• Safeguarding primacy — where a disciplinary matter involves potential risk to service users, suspension may be appropriate as a precautionary (not punitive) measure pending investigation.",
      legalBox: "An employee with 2 or more years' continuous employment has the right not to be unfairly dismissed under the Employment Rights Act 1996. Dismissal without following a fair procedure is likely to be found unfair at employment tribunal regardless of the underlying conduct. Following the Acas Code of Practice is the clearest way to demonstrate procedural fairness.",
    },
    {
      title: "Informal Resolution",
      body: "Minor conduct or performance concerns should be addressed informally in the first instance through a 1:1 discussion between the line manager and the employee. The purpose of an informal discussion is:\n• To make the employee aware of the concern clearly and without blame.\n• To agree what improvement is needed and by when.\n• To offer any support that may address the underlying issue.\n\nInformal discussions should be documented briefly — noting that the conversation took place, what was discussed, and any agreed actions — but do not constitute a formal disciplinary record. Where an employee responds positively to informal feedback, no further action is needed. Where the informal approach fails or the matter is too serious for informal resolution, the formal procedure is initiated.",
    },
    {
      title: "Formal Disciplinary Procedure",
      body: "The formal disciplinary procedure follows the Acas Code of Practice:",
      procedure: [
        "Preliminary assessment: The line manager assesses whether a formal investigation is warranted. For potential gross misconduct, consider whether precautionary suspension is appropriate (see below).",
        "Investigation: An investigating manager (not the hearing manager) gathers evidence — interviews witnesses, reviews records, and produces a written investigation report. The investigation must be fair and objective, not aimed at building a case against the employee.",
        "Notification: The employee is given written notice of the disciplinary hearing, with at least 48 hours' notice, specifying: the concern(s) being considered; the evidence to be relied on; their right to be accompanied; the possible outcome (up to dismissal if gross misconduct is alleged).",
        "Disciplinary hearing: The hearing manager presents the findings; the employee has the opportunity to respond, present their own evidence, and call witnesses. The employee or their companion may ask questions.",
        "Decision: The hearing manager adjourns to consider the evidence and reaches a decision. The decision is communicated to the employee in writing, normally within 5 working days.",
        "Sanction (if appropriate): First written warning (misconduct); final written warning (repeated misconduct or more serious single offence); dismissal with notice (serious misconduct or repeated final warning breach); summary dismissal without notice (gross misconduct).",
        "Right of appeal: The employee is informed of their right to appeal within 5 working days. The appeal is heard by a more senior manager not previously involved.",
      ],
      practiceBox: "Precautionary suspension is used where the employee's presence in the workplace would impede the investigation or pose a risk to service users or colleagues. It is a neutral act, not a punishment. The employee must be told this in writing and paid their full pay during suspension. Suspension must be reviewed regularly — it should not be indefinite.",
    },
    {
      title: "Safeguarding Considerations — DBS and Regulatory Referrals",
      body: "Where a disciplinary outcome involves harm or risk of harm to a service user, [ORGANISATION_NAME] must consider its statutory referral duties:\n\n• DBS Barring Referral: Where an employee is dismissed, or would have been dismissed but resigned, because they harmed or placed a vulnerable adult or child at risk of harm in a regulated activity context, the employer MUST make a referral to the DBS. Failure to refer is a criminal offence.\n\n• Professional Regulatory Body: Where the employee is a registered nurse, social worker, or other regulated professional, [ORGANISATION_NAME] must notify their regulator (NMC, SWE, etc.) of the concern.\n\n• CQC Notification: Certain staffing events — including employment decisions connected to safeguarding concerns — may trigger a statutory notification requirement to CQC.\n\nThese referral duties exist independently of the employment law process — a decision not to dismiss does not negate the referral duty if the factual threshold for referral has been met.",
    },
    {
      title: "Capability Procedure",
      body: "Where the concern is about the employee's performance or ability rather than their conduct, the capability procedure applies. The capability procedure follows a similar structure to disciplinary but with a different focus:\n\n• The emphasis is on support and improvement — not punishment.\n• A Performance Improvement Plan (PIP) is used to set clear, measurable improvement targets with a review period (usually 4–12 weeks).\n• The employee is offered appropriate support: additional training, supervision, adjusted duties, or occupational health referral.\n• Where the capability concern is health-related, occupational health advice must be obtained before any formal action.\n• If the employee fails to meet the improvement targets despite reasonable support, capability dismissal may be appropriate.\n\nCapability dismissal following a fair process and adequate opportunity to improve is a potentially fair reason for dismissal under the Employment Rights Act 1996.",
    },
  ],
  relatedDocuments: [
    "wl-011 — Grievance Policy",
    "wl-002 — Recruitment & Selection Policy",
    "wl-012 — Absence Management Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
  ],
  appendices: [
    { title: "Appendix A — Disciplinary Hearing Checklist", content: "Pre-hearing preparation: investigation report compiled; employee notified in writing (≥48 hours); evidence pack prepared; right to companion confirmed; hearing room booked; note-taker arranged. During hearing: employee given opportunity to respond; questions asked and answered; adjournment taken before decision. Post-hearing: written outcome letter; appeal rights stated; DBS/regulatory referral assessed." },
    { title: "Appendix B — Performance Improvement Plan Template", content: "Employee name; role; concern(s); performance standard required; current performance; support to be provided; improvement targets; review dates (midpoint and endpoint); consequences of failure to improve; manager and employee signatures." },
  ],
  versionHistory: [
    { version: "3.2", date: "2026-03-10", changes: "Updated DBS referral section with criminal offence clarification; added capability procedure section; updated Acas Code reference." },
    { version: "3.0", date: "2025-05-01", changes: "Full review; aligned with Acas Code 2021 update; added safeguarding considerations section." },
    { version: "2.8", date: "2024-02-01", changes: "Strengthened suspension guidance; added regulatory body referral procedure." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-012  Positive Behaviour Support Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF012_CONTENT: DocumentContent = {
  title: "Positive Behaviour Support Policy",
  policyId: "EFF-012",
  version: "2.6",
  effectiveDate: "2026-02-18",
  reviewDate: "2027-02-18",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] who display behaviours of concern or who are at risk of experiencing restrictive interventions. This policy applies to all staff and must be read alongside SAF-012 Restraint & Restrictive Practice Policy and SAF-011 Violence & Aggression Policy.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all service users with identified behaviours of concern have a documented PBS Plan.",
        "Ensure at least one staff member with PBS competency is available on every shift.",
        "Review all restrictive intervention episodes at the monthly governance meeting.",
        "Monitor the use of reactive strategies across the service and drive reduction of restrictive practices.",
        "Commission specialist PBS assessment where behaviours are complex or risk is high.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Read and follow every service user's PBS Plan.",
        "Use the proactive strategies in the PBS Plan to prevent escalation wherever possible.",
        "Report all incidents of behaviour of concern and all use of restrictive interventions on the same day.",
        "Participate in PBS training within induction and as required.",
        "Contribute observations about behaviour patterns and potential triggers to care plan reviews.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005, sections 5–6 — lawful restraint as a last resort; proportionality",
    "Human Rights Act 1998, Articles 3, 5, 8 — prohibition of inhuman treatment; liberty; private life",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 13 — Safeguarding; prohibition on inappropriate restraint",
    "Care Act 2014 — well-being, including physical and mental health",
    "NHS England / NHSI — Reducing Restrictive Practice: A national framework (2022)",
    "British Psychological Society — PBS Competence Framework (2015)",
  ],
  definitions: [
    { term: "Positive Behaviour Support (PBS)", definition: "An approach to understanding and responding to behaviours of concern that focuses on improving quality of life and addressing the underlying reasons for the behaviour. PBS is proactive, person-centred, and evidence-based. It uses functional assessment to understand behaviour, then environmental, skill-building, and person-centred interventions to prevent it." },
    { term: "Behaviour of Concern", definition: "Behaviour displayed by a person that is of a frequency, intensity, or duration that poses a risk to the person or others, or that significantly limits the person's quality of life or access to community activities. Previously termed 'challenging behaviour' — this term is no longer preferred as it places responsibility on the individual rather than on the environment and support systems." },
    { term: "Functional Behaviour Assessment (FBA)", definition: "A structured assessment process to understand the function (purpose) of a behaviour of concern. Based on ABC analysis: Antecedent (what happened before), Behaviour (what the person did), Consequence (what happened afterwards). Understanding the function enables person-centred, preventative responses." },
    { term: "Proactive Strategy", definition: "An intervention implemented before a behaviour of concern occurs, aimed at preventing it. Examples: environmental modifications; structured daily routines; communication support; activity planning. Proactive strategies form the majority of a PBS Plan." },
    { term: "Reactive Strategy", definition: "A planned, proportionate response to be used during or after an episode of behaviour of concern. Must be the least restrictive option. Examples: redirection, withdrawal, de-escalation. Physical intervention is a reactive strategy of last resort only." },
  ],
  sections: [
    {
      title: "Understanding Behaviour — The PBS Foundation",
      body: "Positive Behaviour Support begins from the understanding that behaviours of concern are communicative — the person is expressing something through their behaviour, often because they lack the communication tools to express it another way. Common functions of behaviour include:\n\n• Seeking attention or social contact.\n• Avoiding or escaping a demand, activity, or person.\n• Gaining access to a preferred item, activity, or sensory experience.\n• Responding to pain, discomfort, or an unmet physical need.\n• Responding to fear, anxiety, or sensory overload.\n• Expressing boredom, frustration, or low mood.\n\nWhen staff understand the function of a behaviour, they can address the underlying need directly rather than simply managing the behaviour's surface presentation. PBS planning is therefore always preceded by a Functional Behaviour Assessment.",
      practiceBox: "When you see a behaviour of concern, ask 'what is this person trying to tell me?' rather than 'how do I stop this behaviour?' Keeping a brief ABC diary over 1–2 weeks — noting what happened before and after every episode — almost always reveals patterns that point to the underlying function. Share these observations at the next care review.",
    },
    {
      title: "The PBS Plan",
      body: "Every service user at [ORGANISATION_NAME] with identified behaviours of concern must have a PBS Plan documented in their care plan. The PBS Plan must include:",
      bulletPoints: [
        "A description of the behaviour(s) of concern — specific, observable, and measurable (not vague: 'becomes agitated'; specific: 'shouts, pushes objects from table, leaves the room').",
        "Functional behaviour assessment summary — identified triggers and functions.",
        "The person's baseline — their 'calm state' description so staff can recognise early signs of escalation.",
        "Proactive strategies — environmental adjustments, routine modifications, communication approaches, and activity planning that reduce the likelihood of escalation.",
        "Early warning signs and de-escalation strategies — how to recognise the beginning of escalation and what to do at each stage.",
        "Reactive strategies — a graded response plan from low-level de-escalation to — as a documented last resort — any approved physical intervention.",
        "Post-incident support — how the person is supported after an episode to restore calm, dignity, and the relationship.",
        "Data collection method — how incidents are recorded to enable monitoring and plan review.",
        "Review date — PBS Plans must be reviewed at minimum every 6 months and following any significant incident.",
      ],
    },
    {
      title: "Reducing Restrictive Practices",
      body: "[ORGANISATION_NAME] is committed to a programme of progressive reduction in restrictive practices. 'Restrictive practice' includes physical restraint, but also chemical restraint (sedating medication used as a behaviour management tool), mechanical restraint, environmental restrictions (locked doors, controlled access), and psychological restrictions (rules, threats, removal of items).\n\nThe Registered Manager maintains a Restrictive Practice Register listing all current restrictions in use across the service and their legal basis. Every restriction must have:\n• A documented clinical or safety justification.\n• A best interest decision under MCA 2005 (for service users who lack capacity for this).\n• A review date.\n• A reduction plan — active steps being taken to reduce or eliminate the restriction.\n\nAny restriction that cannot be justified against these criteria must be removed. The CQC expects services to be actively moving toward least restrictive practice, not maintaining restrictions as convenient defaults.",
      legalBox: "A restriction of liberty applied to a person who lacks capacity without a DoLS authorisation (or, when implemented, an LPS authorisation) is an unlawful deprivation of liberty under Article 5 of the ECHR. The Registered Manager must ensure that all service users whose liberty is restricted have either consented to the restriction with capacity, or have a current DoLS/LPS authorisation in place.",
    },
    {
      title: "Post-Incident Review",
      body: "Every episode of behaviour of concern that resulted in a restrictive intervention must be reviewed within 24 hours by the Registered Manager or their deputy. The review:\n• Examines whether the PBS Plan was followed — and if not, why not.\n• Identifies whether the restrictive intervention used was the least restrictive option available.\n• Identifies any antecedents that could be addressed to prevent recurrence.\n• Determines whether the PBS Plan needs to be updated.\n• Supports the staff involved — restrictive intervention episodes are distressing for staff as well as service users.\n\nMonthly trend data from incident records is reviewed at the governance meeting. An increase in restrictive interventions is a governance alert — it may indicate an unmet need, a staffing issue, a change in a service user's health, or insufficient PBS implementation.",
    },
  ],
  relatedDocuments: [
    "saf-012 — Restraint & Restrictive Practice Policy",
    "saf-011 — Violence & Aggression Policy",
    "eff-002 — Mental Capacity Act Policy",
    "eff-005 — Dementia Care Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — ABC Diary Template", content: "Daily recording chart: Date; Time; Setting; Antecedent (what happened immediately before); Behaviour (exact description); Consequence (what happened afterwards); Duration; Intensity (1–5); Staff present. Used for functional behaviour assessment over a minimum 2-week period." },
    { title: "Appendix B — PBS Plan Template", content: "Structured PBS Plan covering: person description and communication profile; behaviours of concern (each defined specifically); FBA summary; proactive strategies; early warning signs; de-escalation strategies (low, medium, high escalation); reactive strategies; post-incident support; data collection method; review schedule; signatures (Registered Manager, key worker, service user or representative)." },
  ],
  versionHistory: [
    { version: "2.6", date: "2026-02-18", changes: "Updated to NHS Reducing Restrictive Practice Framework 2022; added Restrictive Practice Register requirement; strengthened post-incident review procedure." },
    { version: "2.4", date: "2025-05-01", changes: "Added BPS PBS Competence Framework reference; updated reactive strategy guidance." },
    { version: "2.1", date: "2024-03-01", changes: "Full review; replaced 'challenging behaviour' terminology with 'behaviour of concern' throughout; added proactive/reactive strategy distinction." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-014  Information Governance Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL014_CONTENT: DocumentContent = {
  title: "Information Governance Policy",
  policyId: "WL-014",
  version: "4.1",
  effectiveDate: "2026-05-08",
  reviewDate: "2027-05-08",
  approvedBy: "Registered Manager / Data Protection Lead",
  scope: "All information assets held, processed, or transmitted by [ORGANISATION_NAME], including personal data, special category data, confidential business information, and NHS and partner organisation data. This policy applies to all staff, volunteers, contractors, and any third party who processes information on behalf of [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager / Data Protection Lead",
      duties: [
        "Maintain a record of processing activities (ROPA) for all personal data processing at [ORGANISATION_NAME].",
        "Ensure data protection impact assessments (DPIAs) are completed for new or changed high-risk processing.",
        "Ensure all personal data breaches are assessed and, where required, reported to the ICO within 72 hours.",
        "Conduct an annual information governance review and update the IG risk register.",
        "Ensure all staff complete information governance training within induction and annually.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Handle all personal and confidential information in line with this policy and data protection law.",
        "Report any actual or suspected data breach immediately to the Data Protection Lead.",
        "Use only approved devices and systems to process personal data.",
        "Never share personal data with third parties without lawful basis and appropriate controls.",
        "Lock screens and secure devices when leaving them unattended.",
      ],
    },
  ],
  legislation: [
    "UK General Data Protection Regulation (UK GDPR) — principles; lawful basis; data subject rights; security; breach notification",
    "Data Protection Act 2018 — supplements UK GDPR; law enforcement processing; national security",
    "Network and Information Systems (NIS) Regulations 2018 — cybersecurity requirements for essential services",
    "Computer Misuse Act 1990 — unauthorised access to computer systems",
    "Caldicott Principles — the 8 Caldicott Principles governing NHS and social care use of patient-identifiable information",
    "NHS Data Security and Protection Toolkit (DSPT) — mandatory standard for organisations processing NHS patient data",
  ],
  definitions: [
    { term: "Personal Data", definition: "Any information relating to an identified or identifiable living individual. In a care setting, this includes names, dates of birth, addresses, care plans, MAR charts, incident records, and any other information that can be linked to a specific person." },
    { term: "Special Category Data", definition: "A subset of personal data that receives enhanced protection under UK GDPR Article 9. Includes data about health, sexual orientation, race and ethnicity, religion or belief, genetic data, and biometric data used for identification. Almost all care records contain special category data." },
    { term: "Data Breach", definition: "A security incident that leads to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. Examples: sending a care record to the wrong person; losing an unencrypted USB drive containing care plans; a ransomware attack on the care management system." },
    { term: "Caldicott Principles", definition: "Eight principles developed by Dame Fiona Caldicott governing the use of patient-identifiable information in health and social care: (1) Justify the purpose; (2) Use only what is necessary; (3) Use the minimum necessary; (4) Access on a strict need-to-know basis; (5) Understand your responsibilities; (6) Comply with the law; (7) Duty to share can be as important as the duty to protect; (8) Inform and support people." },
    { term: "DSPT", definition: "Data Security and Protection Toolkit. An online self-assessment tool provided by NHS England that measures [ORGANISATION_NAME]'s performance against the National Data Guardian's 10 data security standards. Required for all organisations that have access to NHS patient data or systems." },
  ],
  sections: [
    {
      title: "Data Protection Principles",
      body: "All personal data processing at [ORGANISATION_NAME] must comply with the 7 UK GDPR data protection principles. These principles are not aspirational — they are legally binding requirements:\n\n1. Lawfulness, fairness, and transparency — processing must have a lawful basis; people must know their data is being used.\n2. Purpose limitation — data collected for one purpose must not be used for an incompatible purpose.\n3. Data minimisation — only collect and process the data you actually need.\n4. Accuracy — data must be accurate and kept up to date.\n5. Storage limitation — data must not be kept longer than necessary (refer to WL-006 retention schedule).\n6. Integrity and confidentiality — appropriate security measures must be in place.\n7. Accountability — [ORGANISATION_NAME] must be able to demonstrate compliance with all the above.",
      legalBox: "The ICO can impose fines of up to £17.5 million or 4% of global annual turnover (whichever is higher) for serious breaches of UK GDPR. More commonly, enforcement action involves audits, enforcement notices, and reputational damage. For smaller organisations, the most common route to ICO investigation is a data breach report — which is why timely, accurate breach assessment is so important.",
    },
    {
      title: "Cybersecurity and Device Security",
      body: "[ORGANISATION_NAME] maintains technical and organisational measures to protect personal data from cybersecurity threats. All staff must comply with the following security requirements:\n\nDevice security:\n• All devices (computers, tablets, phones) used to process personal data must be password-protected with automatic screen lock after 5 minutes.\n• Personal data must not be stored on personal devices (phones, home computers) unless explicitly authorised and the device meets [ORGANISATION_NAME]'s security standards.\n• USB drives and portable media must be encrypted if they contain personal data.\n• All software must be kept up to date — unpatched software is the leading cause of successful ransomware attacks.\n\nAccess control:\n• Staff are given the minimum access rights needed for their role (principle of least privilege).\n• Shared logins are prohibited — every user must have their own login credentials.\n• Passwords must be at least 12 characters and not reused. Use a password manager.\n• Multi-factor authentication (MFA) must be enabled for all systems that support it.\n\nEmail and communication:\n• Personal data must not be sent by unencrypted email unless necessary. Use secure portals or encrypted email.\n• Always verify recipient addresses before sending personal data — an email sent to the wrong address is a reportable data breach.",
      practiceBox: "The most effective cybersecurity measure is staff awareness. Phishing emails — fake emails designed to steal credentials or install malware — are responsible for the majority of care sector data breaches. If an email asks you to click a link or enter your password and you were not expecting it, do not click. Report suspicious emails to the Data Protection Lead.",
    },
    {
      title: "Data Breaches — Assessment and Reporting",
      body: "All actual or suspected data breaches must be reported to the Data Protection Lead immediately on discovery. The Data Protection Lead will assess the breach using the ICO's breach assessment framework:\n\nStep 1 — Is this a personal data breach? (Was personal data involved? Was there unauthorised access, loss, or disclosure?)\nStep 2 — Is there a risk to individuals? (Consider: sensitivity of data; number of people affected; likelihood of harm — identity theft, discrimination, distress, financial loss.)\nStep 3 — Does it need to be reported to the ICO? (A breach that is unlikely to result in risk to individuals does not need to be reported. A breach likely to result in 'high risk' must be reported within 72 hours.)\nStep 4 — Does it need to be reported to the affected individuals? (Where there is a high risk to individuals, they must be notified without undue delay.)\n\nAll breaches must be documented in the breach register regardless of whether they are reported to the ICO. The Data Protection Lead maintains the breach register.",
      warningBox: "The 72-hour ICO reporting deadline runs from when [ORGANISATION_NAME] becomes aware of the breach — not from when the Data Protection Lead is informed. Every staff member's responsibility to report breaches immediately is therefore critical to meeting the deadline. A breach reported to the Data Protection Lead 3 days after it was discovered by a care worker has almost certainly missed the window.",
    },
    {
      title: "Data Subject Rights",
      body: "Under UK GDPR, individuals have the following rights regarding their personal data held by [ORGANISATION_NAME]. All requests must be handled promptly and referred to the Data Protection Lead:\n\n• Right of access (SAR) — individuals can request all personal data held about them. Respond within one calendar month.\n• Right to rectification — individuals can ask for inaccurate data to be corrected. Respond within one month.\n• Right to erasure — individuals can request deletion of their data in certain circumstances. Does not override statutory retention requirements.\n• Right to restrict processing — individuals can ask processing to be paused while a dispute is resolved.\n• Right to data portability — applicable to electronically processed data provided by the person on the basis of consent or contract.\n• Right to object — individuals can object to processing based on legitimate interests.\n\nData subject rights requests must be logged in the data subject rights register. Never dismiss a rights request as vexatious without first consulting the Data Protection Lead.",
    },
    {
      title: "Caldicott Principles in Practice",
      body: "The 8 Caldicott Principles apply to all health and social care information sharing. In practice at [ORGANISATION_NAME], the most frequently relevant principles are:\n\nPrinciple 7 — 'The duty to share information can be as important as the duty to protect it': Do not refuse to share information with other care professionals when the information is needed to provide safe, coordinated care. Information governance is not a barrier to care — it is a framework that enables appropriate sharing while protecting against inappropriate sharing.\n\nPrinciple 3 — 'Use the minimum necessary': When sharing care information, share only what is relevant to the purpose. A GP asking about a service user's pain levels does not need a copy of the entire care record.\n\nPrinciple 4 — 'Access on a strict need-to-know basis': Care staff should only access records of service users they are actively caring for. Browsing records out of curiosity is a data protection breach.",
    },
  ],
  relatedDocuments: [
    "wl-005 — Data Protection & GDPR Policy",
    "wl-006 — Record Keeping & Confidentiality Policy",
    "wl-001 — Governance Framework",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-017 — CQC Registration & Regulatory Compliance Policy",
  ],
  appendices: [
    { title: "Appendix A — Data Breach Register Template", content: "Date discovered; date reported internally; description of breach; data type(s) affected; number of individuals affected; cause; risk assessment outcome; ICO reported (Y/N, reference number); individuals notified (Y/N); remedial action taken; lessons learned; Data Protection Lead sign-off." },
    { title: "Appendix B — Record of Processing Activities (ROPA) Summary", content: "High-level ROPA extract listing the main processing activities at [ORGANISATION_NAME]: purpose; legal basis; data categories; data subjects; retention period; recipients; security measures. Full ROPA maintained by Data Protection Lead and available on request to ICO." },
  ],
  versionHistory: [
    { version: "4.1", date: "2026-05-08", changes: "Updated cybersecurity requirements to include MFA; added phishing awareness guidance; strengthened 72-hour breach notification timing." },
    { version: "4.0", date: "2025-06-01", changes: "Full review post UK GDPR; added Caldicott Principles section; updated DSPT reference." },
    { version: "3.7", date: "2024-03-01", changes: "Added data subject rights section; updated breach assessment framework." },
  ],
};
