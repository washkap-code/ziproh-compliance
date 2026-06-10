/**
 * Medium-depth policy content — batch 5.
 * Controlled Drugs, Violence & Aggression, Staffing & Deployment,
 * Quality Improvement, Discharge & Transfer of Care.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// SAF-013  Controlled Drugs Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF013_CONTENT: DocumentContent = {
  title: "Controlled Drugs Policy",
  policyId: "SAF-013",
  version: "4.0",
  effectiveDate: "2026-04-28",
  reviewDate: "2027-04-28",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All staff at [ORGANISATION_NAME] who handle, administer, or are responsible for the oversight of controlled drugs (CDs). This policy applies to all Schedule 2 and Schedule 3 controlled drugs held at [ORGANISATION_NAME]'s premises. It must be read alongside SAF-003 Medication Management Policy and SAF-004 Medication Administration Procedure.",
  responsibilities: [
    {
      role: "Registered Manager (Accountable Officer function)",
      duties: [
        "Ensure a compliant CD register is maintained and reconciled at every administration.",
        "Ensure CD stock is checked and witnessed by two authorised staff at each administration.",
        "Ensure the CD cupboard is compliant with BS 2881 and that keys are held by the most senior person on duty at all times.",
        "Report any CD discrepancy to the relevant Accountable Officer (NHS England) and the pharmacy within 24 hours.",
        "Conduct or arrange CD audits at least quarterly.",
        "Cooperate fully with CD inspector visits.",
      ],
    },
    {
      role: "Authorised Administering Staff",
      duties: [
        "Administer CDs only when authorised, trained, and with a second authorised witness present.",
        "Sign the CD register at the time of administration — never in advance or retrospectively.",
        "Count and reconcile the CD stock balance at every administration and record the running balance.",
        "Report any discrepancy, breakage, or spillage immediately to the senior on duty.",
        "Never remove CDs from the premises except for the purpose of their administration or authorised return.",
      ],
    },
  ],
  legislation: [
    "Misuse of Drugs Act 1971 — classification of controlled drugs; criminal offences",
    "Misuse of Drugs Regulations 2001 (as amended) — schedules 1–5; storage, supply, and record-keeping requirements",
    "Misuse of Drugs (Safe Custody) Regulations 1973 — CD cupboard specification (BS 2881)",
    "Health Act 2006, sections 17–23 — Accountable Officers for CDs",
    "Care Quality Commission (Registration) Regulations 2009 — CQC powers to inspect CD registers",
    "NICE Guideline SC1 — Medicines Optimisation (2015)",
  ],
  definitions: [
    { term: "Schedule 2 Controlled Drug", definition: "The most tightly regulated category of CD, subject to full CD register requirements, two-witness administration, safe custody regulations, and destruction requirements. Includes: morphine, diamorphine, oxycodone, fentanyl, pethidine, methadone, methylphenidate, and amphetamines." },
    { term: "Schedule 3 Controlled Drug", definition: "Subject to safe custody requirements (most) and prescription requirements but not generally to CD register requirements — except temazepam and buprenorphine, which require a register. Includes: temazepam, buprenorphine, tramadol (since 2014), gabapentin, pregabalin (since 2019)." },
    { term: "CD Register", definition: "A bound, carbon-duplicated or equivalent permanent record of all receipts and administrations of Schedule 2 CDs. Must record: date; quantity received or administered; service user name (for administrations); person administering; witness; and running balance. The running balance must be reconciled against physical stock at every entry." },
    { term: "CD Cupboard", definition: "A secure, fixed container compliant with the Misuse of Drugs (Safe Custody) Regulations 1973 and British Standard BS 2881. CDs must be stored in a locked CD cupboard, within a locked medicine cupboard, within a locked room where possible. Keys must be with the most senior person on duty at all times — not left in the cupboard." },
    { term: "Accountable Officer", definition: "The designated person responsible within an NHS or care organisation for safe management of CDs. For most care homes, the relevant Accountable Officer is located at the local integrated care board (ICB). Any CD discrepancy or concerns must be reported to them." },
  ],
  sections: [
    {
      title: "Ordering and Receipt of Controlled Drugs",
      body: "Schedule 2 CDs must be ordered on a standardised CD order form (FP10CDF or equivalent), signed by the prescriber. The order form must be presented to the dispensing pharmacy.\n\nOn receipt of CDs from the pharmacy:\n• Two authorised members of staff must be present to receive and count the CDs.\n• The quantity received must be checked against the pharmacy dispensing label and the prescription.\n• A receipt entry must be made in the CD register immediately, signed by both persons present.\n• The running balance must be updated and verified against physical stock.\n• Any discrepancy between what was ordered and what was received must be reported to the pharmacy and the Registered Manager immediately — do not accept a quantity you cannot verify.",
      warningBox: "CDs received from a pharmacy that do not match the dispensing label quantity must never be accepted without immediate pharmacist clarification. Accepting incorrect quantities creates register discrepancies that can trigger formal CD investigations.",
    },
    {
      title: "Administration of Controlled Drugs",
      body: "Every administration of a Schedule 2 CD must be witnessed by a second authorised person. 'Authorised' means a member of staff who is trained, competency-assessed, and listed on [ORGANISATION_NAME]'s authorised administering staff list.",
      procedure: [
        "Retrieve the CD register and the service user's MAR chart.",
        "Both the administering person and the witness must attend the CD cupboard together.",
        "Count the physical stock in the cupboard. The count must match the running balance in the CD register before proceeding.",
        "Remove the prescribed dose only. Count and verify the dose to be administered.",
        "Both persons sign the CD register: administering staff member and witness.",
        "Record the quantity administered and update the running balance.",
        "Administer the medication to the service user — both staff present.",
        "Lock the CD cupboard and return the key.",
        "Record the administration on the MAR chart.",
        "If any residual CD waste occurs (e.g. partial vial), denature and document in the register immediately.",
      ],
      legalBox: "Administering a CD without a witness is a breach of this policy and of the Misuse of Drugs Regulations 2001. Under no circumstances should CDs be administered without two authorised persons present. In the event that a witness is genuinely unavailable (e.g. sole worker on a night shift), the CD must not be administered — the prescriber must be contacted for alternative analgesia or pain management advice.",
    },
    {
      title: "CD Discrepancies",
      body: "A CD discrepancy occurs when the physical stock count does not match the running balance in the CD register. All discrepancies must be treated as serious until proved otherwise.\n\nWhen a discrepancy is identified:\n• Recount the physical stock twice independently.\n• Check the register entries for arithmetic errors or transcription mistakes.\n• If the discrepancy cannot be immediately explained, report to the Registered Manager within the hour.\n• The Registered Manager must notify the dispensing pharmacy and the ICB Accountable Officer within 24 hours.\n• A full investigation must be commenced, including reviewing access to the CD cupboard and cross-referencing with MAR charts.\n• Document the investigation in full in the incident reporting system.\n• The police may need to be involved if theft is suspected.\n\nStaff must understand that reporting a discrepancy promptly is the right thing to do — failure to report is a more serious matter than the discrepancy itself.",
    },
    {
      title: "Disposal and Returns",
      body: "CDs must be returned to the pharmacy for destruction when:\n• A service user dies, is discharged, or no longer requires the CD.\n• A CD has reached its expiry date.\n• A CD is damaged or contaminated.\n\nCD returns must be documented in the CD register with: date; quantity returned; pharmacy receiving; staff member handling the return; witness signature. A return receipt from the pharmacy must be retained.\n\nCDs must never be disposed of in domestic, clinical, or pharmaceutical waste streams. They must never be 'used up' by administering them to other service users. CDs prescribed for one service user are not transferable to another under any circumstances.",
      practiceBox: "When a service user dies, their CDs should be denaturing or returning to the pharmacy promptly — this reduces the risk of diversion. Most pharmacies provide sharps or waste collection and CD destruction services. Build a relationship with your dispensing pharmacy so that CD returns are straightforward.",
    },
    {
      title: "CD Audits and Inspections",
      body: "CD registers and stock must be audited at minimum quarterly by the Registered Manager or a senior person they designate who is not normally involved in day-to-day CD administration. The audit checks:\n• Register completeness: all entries made, all fields completed, running balance correct.\n• Physical stock matches register balance.\n• CD cupboard compliance (condition, location, key security).\n• MAR charts match CD register entries.\n• Any discrepancies recorded and actions taken.\n\nCQC inspectors and CD inspectors from the ICB have the right to inspect CD registers and stock at any time. All CD documentation must be retained for 7 years. CD registers must be kept bound and must not have pages removed.",
    },
  ],
  relatedDocuments: [
    "saf-003 — Medication Management Policy",
    "saf-004 — Medication Administration Procedure",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-001 — Governance Framework",
    "wl-006 — Record Keeping & Confidentiality Policy",
  ],
  appendices: [
    { title: "Appendix A — CD Register Format", content: "Columns required: Date; Service User Name; Prescriber; Quantity Received (if receipt); Quantity Administered; Balance; Administering Staff Signature; Witness Signature; Notes. Register must be bound with sequentially numbered pages. No corrections using correction fluid — errors crossed through with single line, initialled." },
    { title: "Appendix B — CD Discrepancy Investigation Template", content: "Template for documenting CD discrepancy investigations: date discovered; CD name and strength; register balance vs physical count; recount results; register review findings; staff interviewed; timeline of access; conclusion; actions taken; notification to ICB Accountable Officer (date/name); police referral if applicable." },
  ],
  versionHistory: [
    { version: "4.0", date: "2026-04-28", changes: "Updated to include pregabalin/gabapentin Schedule 3 status; added ICB Accountable Officer notification; strengthened discrepancy investigation procedure." },
    { version: "3.8", date: "2025-06-01", changes: "Added CD waste/denaturation guidance; updated disposal section." },
    { version: "3.5", date: "2024-02-01", changes: "Full review; updated pharmacy return procedure; aligned with NHS CD framework 2023." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-011  Violence & Aggression Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF011_CONTENT: DocumentContent = {
  title: "Violence & Aggression Policy",
  policyId: "SAF-011",
  version: "2.5",
  effectiveDate: "2026-02-01",
  reviewDate: "2027-02-01",
  approvedBy: "Registered Manager",
  scope: "All staff at [ORGANISATION_NAME] who may be exposed to violence, aggression, or threatening behaviour from service users, their family members, visitors, or members of the public. This policy applies in all settings including care homes, domiciliary care, and supported living.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure violence and aggression risk assessments are in place for all service users who present with relevant risks.",
        "Ensure all staff receive conflict resolution and de-escalation training within induction and at least every 2 years.",
        "Review all violence and aggression incidents within 24 hours and investigate all serious incidents.",
        "Provide appropriate post-incident support to affected staff, including access to occupational health or counselling.",
        "Ensure PREVENT and county lines risks are assessed where relevant to the service user group.",
        "Report patterns of aggression to the governance meeting and implement service-level changes where needed.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Report all incidents of violence, aggression, or threatening behaviour immediately and complete a written report before the end of the shift.",
        "Use de-escalation techniques as the primary response to aggression — never retaliate or match aggression with aggression.",
        "Withdraw from any situation where personal safety is at immediate risk and call for help.",
        "Never accept violence or aggression as 'part of the job'.",
        "Support colleagues following difficult incidents.",
      ],
    },
  ],
  legislation: [
    "Health and Safety at Work etc. Act 1974 — employer duty to ensure, so far as reasonably practicable, the health, safety and welfare at work of employees",
    "Management of Health and Safety at Work Regulations 1999 — duty to assess risks to employees from violence at work",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Mental Health Act 1983 / Mental Capacity Act 2005 — context for understanding behaviour in care settings",
    "HSE Violence at Work: A Guide for Employers (current edition)",
  ],
  definitions: [
    { term: "Violence", definition: "Any incident in which a person is abused, threatened, or assaulted in circumstances relating to their work. This includes physical attacks, verbal abuse, threatening behaviour, and psychological intimidation." },
    { term: "Behaviours That Challenge", definition: "Behaviours displayed by a service user that are culturally abnormal in intensity, frequency, or duration, and which place the physical safety of the person or others at risk. Often communicative — the person is expressing an unmet need. The preferred response is positive behaviour support, not restraint or punitive measures." },
    { term: "De-escalation", definition: "A range of verbal, non-verbal, and environmental techniques used to reduce the intensity of an aggressive or potentially violent situation. De-escalation is always the preferred first response where it is safe to use." },
    { term: "Zero Tolerance", definition: "[ORGANISATION_NAME] operates a zero tolerance approach to violence and aggression directed at staff. This does not mean refusing to care for people who may present with challenging behaviours; it means that [ORGANISATION_NAME] will not accept violence as routine or inevitable, and will take all reasonable steps to protect staff." },
  ],
  sections: [
    {
      title: "Risk Assessment — Individual and Environmental",
      body: "Every service user whose care plan indicates a risk of aggression or violence must have a specific Behaviour Risk Assessment. This assessment must include:\n• The triggers that are known to precede escalation.\n• The early warning signs of escalation for this person.\n• Effective de-escalation strategies.\n• The preferred physical environment and routine to minimise risk.\n• Any contraindications (e.g. do not approach from behind; do not make direct eye contact).\n• The response plan if de-escalation is unsuccessful — including who to call and when.\n\nEnvironmental risk assessments must also consider: visibility and sightlines in working areas; access to potential weapons; panic button or alarm availability; lone working risks; visitor management.",
      practiceBox: "Most aggressive incidents are not random — they follow patterns. If you notice that a service user becomes agitated at a particular time of day, in a particular environment, or when specific topics arise, document this and discuss it at handover. Pattern recognition is the most effective prevention tool.",
    },
    {
      title: "De-escalation Techniques",
      body: "De-escalation is a skill, not an instinct. Staff must be trained in and regularly practise the following approaches:\n\nVerbal de-escalation:\n• Use a calm, low, steady voice — do not match the person's volume or pace.\n• Use the person's preferred name.\n• Acknowledge the person's feelings: 'I can see you're upset. I want to help.'\n• Use open questions to understand the underlying need.\n• Avoid blame, sarcasm, threats, ultimatums, or prolonged eye contact.\n• Give the person space and options: 'Would you like to sit down? Can I get you a drink?'\n\nNon-verbal de-escalation:\n• Maintain a relaxed, non-threatening posture — hands visible, not crossed.\n• Stay at the person's eye level where possible, but do not crowd them.\n• Ensure the person can see an exit — do not back them into a corner.\n• Reduce environmental stimulation: turn off loud TV or music; reduce crowds.\n\nEnvironmental de-escalation:\n• Move the interaction to a quieter space if safe to do so.\n• Reduce the number of people in the vicinity.\n• Allow the person to have something to hold, fidget with, or do.",
      warningBox: "If de-escalation is not working, do not persist to the point of physical danger. Disengage, ensure colleagues and other service users are safe, and call for help. Your safety is the priority. The situation can be reassessed once immediate risk has reduced.",
    },
    {
      title: "Physical Intervention",
      body: "Physical intervention — any form of physical contact to restrict or redirect a person's movement — must only be used:\n• As a last resort, when de-escalation has failed and there is immediate risk of serious harm to the person or others.\n• By staff who are trained and competency-assessed in physical intervention techniques.\n• Using only the minimum force necessary for the minimum duration required to manage the risk.\n• In a manner consistent with the individual's Behaviour Risk Assessment and PBS Plan.\n\nPhysical intervention must never be used as punishment, as a behaviour management tool, or in response to property damage that does not pose a risk to persons. Prone (face-down) restraint is absolutely prohibited at [ORGANISATION_NAME] under any circumstances.",
      legalBox: "Physical intervention without consent or lawful justification is battery under the common law and potentially an assault under the Criminal Justice Act. Restraint in a care setting is only lawful under the Mental Capacity Act 2005 (section 6) where: the person lacks capacity for the relevant decision; the restraint is necessary to prevent harm to the person; and the restraint is proportionate to the likelihood and seriousness of the harm. Any restraint episode must be documented in full as a restrictive practice incident and reviewed by the Registered Manager.",
    },
    {
      title: "Post-Incident Response",
      body: "Following any incident of violence or aggression:\n• Ensure the safety of all persons — call emergency services if anyone is injured.\n• Separate those involved and provide immediate support to the person and to staff.\n• Complete an incident report before the end of the shift, including: the sequence of events; de-escalation attempts made; any physical intervention used; injuries sustained; witnesses.\n• The Registered Manager must debrief all involved staff — this is both a welfare duty and a learning opportunity.\n• Offer affected staff access to Employee Assistance Programme (EAP), occupational health, or other post-incident support.\n• Review the service user's Behaviour Risk Assessment in light of the incident.\n• Consider whether the incident triggers a safeguarding referral — for the service user (what need was unmet?) and for any other service user who witnessed the incident.",
    },
    {
      title: "Staff Wellbeing and Support",
      body: "Violence and aggression incidents can cause significant psychological harm to staff including anxiety, post-traumatic stress, and loss of confidence. [ORGANISATION_NAME] takes its duty of care to staff seriously.\n\n• Staff are never required to return to the same care environment immediately after a serious incident without support and a risk review.\n• All staff have access to the Employee Assistance Programme (EAP) or equivalent confidential counselling at no cost.\n• Line managers are expected to check in with staff following any incident, including minor incidents, and to act on any concerns about staff wellbeing.\n• Patterns of repeated incidents involving the same service user must be reviewed at governance level — individual staff should not be expected to repeatedly manage situations without service-level support.",
    },
  ],
  relatedDocuments: [
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-012 — Restraint & Restrictive Practice Policy",
    "saf-006 — Risk Assessment Policy",
    "saf-007 — Lone Working Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Behaviour Risk Assessment Template", content: "Individual assessment covering: triggers; early warning signs; effective de-escalation strategies; contraindicated approaches; preferred environment; response plan; PBS plan reference; physical intervention authorisation (if any); review date." },
    { title: "Appendix B — Post-Incident Debrief Record", content: "Structured debrief template: incident summary; staff involved; service user response post-incident; de-escalation attempted; outcome; injuries; immediate support offered; Behaviour Risk Assessment review required; EAP referral made; manager sign-off." },
  ],
  versionHistory: [
    { version: "2.5", date: "2026-02-01", changes: "Strengthened post-incident staff support section; added prone restraint absolute prohibition; updated de-escalation technique guidance." },
    { version: "2.3", date: "2025-03-01", changes: "Added PREVENT context; updated MCA restraint lawfulness section." },
    { version: "2.1", date: "2024-01-15", changes: "Full review; added zero tolerance framing; updated environmental de-escalation guidance." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-008  Staffing & Deployment Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL008_CONTENT: DocumentContent = {
  title: "Staffing & Deployment Policy",
  policyId: "WL-008",
  version: "3.5",
  effectiveDate: "2026-04-08",
  reviewDate: "2027-04-08",
  approvedBy: "Registered Manager",
  scope: "All staffing and deployment decisions at [ORGANISATION_NAME], including day-to-day rota management, dependency-based staffing calculations, agency and bank staff use, and safe staffing escalation. This policy applies to all settings operated by [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Establish a staffing model based on service user dependency and acuity, reviewed at minimum quarterly.",
        "Ensure staffing levels never fall below the minimum safe staffing threshold.",
        "Escalate persistent understaffing to the provider immediately.",
        "Review agency and bank staff use monthly and ensure all agency staff meet competency requirements.",
        "Document all instances where staffing fell below the planned level and the action taken.",
      ],
    },
    {
      role: "Senior Care Worker / Shift Lead",
      duties: [
        "At the start of every shift, confirm that staffing meets the minimum safe level.",
        "Escalate any staffing concern to the Registered Manager or on-call immediately.",
        "Ensure agency and bank staff are orientated to the service, key service users, and emergency procedures at the start of every shift.",
        "Distribute work appropriately across the shift according to staff skills and service user needs.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing",
    "Health and Safety at Work etc. Act 1974 — employer duty of care to employees and others",
    "Working Time Regulations 1998 — maximum working hours; rest break entitlements",
    "National Minimum Wage Act 1998 / National Living Wage — minimum pay requirements",
    "CQC Guidance — Staffing: A guidance document for providers (2015, updated 2023)",
  ],
  definitions: [
    { term: "Dependency Assessment", definition: "A structured assessment of each service user's care needs, producing a score that indicates the time and skill level required to meet those needs. Dependency scores are aggregated across all service users to produce the total staffing hours required for a given shift." },
    { term: "Minimum Safe Staffing Level", definition: "The minimum number of staff, at the minimum skill mix, required to deliver safe care across a given shift. This is not the same as 'normal' staffing — it is the floor below which safe care cannot be guaranteed. Dropping below minimum safe staffing triggers the escalation procedure." },
    { term: "Skill Mix", definition: "The combination of staff roles and qualifications on a shift. For example: a minimum safe skill mix for a care home night shift might require one senior care worker and one care assistant — not two care assistants. Skill mix must be considered alongside headcount." },
    { term: "Supernumerary", definition: "A member of staff counted over and above the minimum safe staffing number, not included in the working ratio. Registered Managers who are supernumerary do not count toward the ratio and can focus on governance tasks; those who are not supernumerary must be included in the count." },
  ],
  sections: [
    {
      title: "Dependency-Based Staffing Model",
      body: "Safe staffing at [ORGANISATION_NAME] is calculated using a dependency-based model rather than a fixed staff-to-service-user ratio. Fixed ratios (e.g. 1:6) do not account for variations in acuity — a service with 20 highly dependent nursing residents requires very different staffing from a service with 20 lower-dependency residents.\n\nThe dependency assessment is completed for every service user on admission and reviewed quarterly, or when dependency changes. The aggregate dependency score is used to calculate the planned staffing hours required per shift. This calculation is reviewed by the Registered Manager at least quarterly and whenever there is a significant change in the service user profile.\n\nThe staffing model must account for:\n• Direct care hours (personal care, medication, moving and handling).\n• Indirect care hours (care planning, documentation, family liaison).\n• Domestic and ancillary tasks (if included in care staff remit).\n• Supervision, handover, and training time.\n• Leave, sickness, and vacancy buffer.",
      legalBox: "CQC Regulation 18 requires [ORGANISATION_NAME] to have 'sufficient numbers of suitably qualified, competent, skilled and experienced persons deployed' to meet service user needs. CQC will scrutinise staffing levels during inspections, reviewing rotas, dependency assessments, and any instances where staffing fell below planned levels. A pattern of understaffing without documented management action is likely to result in a 'Requires Improvement' or 'Inadequate' rating for Safe.",
    },
    {
      title: "Rota Planning and Safe Staffing Assurance",
      body: "Rotas must be planned at minimum 4 weeks in advance, allowing staff adequate notice and enabling early identification of gaps. Rota planning must ensure:\n• Every shift meets the minimum safe staffing level and required skill mix.\n• No individual works more than the maximum hours permitted under their contract and the Working Time Regulations 1998 (maximum 48 hours per week averaged over 17 weeks, unless an individual opt-out is signed).\n• Adequate rest between shifts — minimum 11 hours between the end of one shift and the start of the next.\n• Any shift gap is filled before the shift commences — not discovered mid-shift.\n\nA daily staffing assurance check must be completed at the start of every shift by the senior on duty, confirming that the planned staffing is in place. Any deviation from planned staffing must be documented in the shift record.",
    },
    {
      title: "Agency and Bank Staff",
      body: "Agency and bank staff are a legitimate way to manage planned absences and short-notice gaps, but their use carries specific risks that must be managed:\n• Agency staff should not be used to cover the same shift position routinely — this indicates a vacancy or workforce planning failure that must be addressed.\n• All agency staff must be verified as meeting [ORGANISATION_NAME]'s standards before commencing work: Enhanced DBS check via the agency; mandatory training compliance; right to work in the UK.\n• Agency staff must receive a shift-start orientation from the senior on duty before beginning work. This must cover: fire exits and procedure; service user needs relevant to their assignment; medication procedure; safeguarding contacts; emergency procedures.\n• The orientation must be documented in the shift record.\n• A written agreement (or agency confirmation email) confirming the worker's DBS status and training compliance must be held on file.",
      warningBox: "An agency worker whose DBS status, training, or right to work cannot be confirmed must not be deployed. 'The agency confirmed it verbally' is not sufficient. Obtain written confirmation. Deploying an unverified agency worker creates both a CQC compliance risk and a safeguarding risk.",
    },
    {
      title: "Escalation When Staffing Falls Below Safe Level",
      body: "When the shift senior identifies that staffing has fallen or will fall below the minimum safe level, the escalation procedure must be followed without delay:",
      procedure: [
        "Contact all available bank and relief staff to fill the gap.",
        "Contact agency providers for emergency cover — document time of call and response.",
        "If the gap cannot be filled within 30 minutes: notify the Registered Manager or on-call manager.",
        "The Registered Manager assesses whether the shift can continue safely with adjusted care delivery or whether emergency measures are required.",
        "If the service cannot operate safely: notify the provider, consider whether any service users need emergency hospital or alternative care placement, and notify CQC as a serious incident if safety is materially compromised.",
        "Document all actions taken, calls made, and outcomes in the shift record.",
        "Report the understaffing episode in the governance incident log for Registered Manager review.",
      ],
    },
  ],
  relatedDocuments: [
    "wl-002 — Recruitment & Selection Policy",
    "wl-009 — Induction & Mandatory Training Policy",
    "wl-012 — Absence Management Policy",
    "wl-001 — Governance Framework",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Dependency Assessment Tool", content: "Scoring matrix across care domains: personal care; mobility and transfers; continence; nutrition; medication; cognitive support; communication; social and emotional support. Each domain scored 1–4; aggregate score maps to planned care hours per 24 hours and staffing requirement per shift." },
    { title: "Appendix B — Daily Staffing Assurance Log", content: "Shift-by-shift record: date; shift; planned staffing; actual staffing; skill mix achieved; any gaps and action taken; agency/bank used (name, agency, DBS confirmation, orientation completed); senior signature." },
  ],
  versionHistory: [
    { version: "3.5", date: "2026-04-08", changes: "Added dependency model guidance; strengthened agency verification requirements; updated escalation procedure." },
    { version: "3.3", date: "2025-06-01", changes: "Updated to align with CQC staffing guidance 2023; added skill mix definition." },
    { version: "3.0", date: "2024-03-01", changes: "Full review; replaced fixed-ratio approach with dependency-based model." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-013  Quality Improvement Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL013_CONTENT: DocumentContent = {
  title: "Quality Improvement Policy",
  policyId: "WL-013",
  version: "3.6",
  effectiveDate: "2026-04-30",
  reviewDate: "2027-04-30",
  approvedBy: "Registered Manager",
  scope: "All quality improvement activities at [ORGANISATION_NAME], including clinical audit, PDSA improvement cycles, learning from incidents and complaints, governance monitoring, and external quality assurance. This policy applies to all staff and to all regulated activities carried out by [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain an annual Quality Improvement Programme, setting out planned audits and improvement cycles.",
        "Chair the monthly governance meeting at which quality data is reviewed.",
        "Ensure learning from incidents, complaints, and audits is disseminated to all staff.",
        "Lead the service's Quality Improvement Plan following any inspection finding.",
        "Ensure service user and carer feedback is systematically collected and used to drive improvement.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Report incidents, near misses, and concerns promptly — the foundation of quality improvement.",
        "Participate in audits and quality reviews as requested.",
        "Implement changes to practice arising from improvement initiatives.",
        "Engage with service user feedback activities.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour",
    "Care Act 2014 — local authority quality assurance duties",
    "CQC Single Assessment Framework — Well-Led quality statements (2023)",
    "NHS England — A Simple Guide to PDSA (Plan-Do-Study-Act) cycles",
  ],
  definitions: [
    { term: "Clinical Audit", definition: "A quality improvement process that seeks to improve patient care and outcomes through systematic review of care against explicit criteria, followed by implementation of change." },
    { term: "PDSA Cycle", definition: "Plan-Do-Study-Act. A four-stage iterative improvement methodology: Plan (identify the change to be tested, predict the outcome); Do (test the change on a small scale); Study (analyse the results against the prediction); Act (adopt, adapt, or abandon the change based on the evidence)." },
    { term: "Root Cause Analysis (RCA)", definition: "A structured investigation technique used to identify the underlying causes of an incident, rather than just the proximate cause. RCA produces recommendations to prevent recurrence." },
    { term: "Quality Indicator", definition: "A measurable element of care that provides evidence about the quality of that care. Examples: medication error rate per 1000 administrations; percentage of service users with a current care plan; percentage of staff with up-to-date mandatory training; rate of avoidable pressure ulcers." },
    { term: "Benchmarking", definition: "Comparing [ORGANISATION_NAME]'s quality indicators against those of similar services, national averages, or best practice standards to identify areas of relative strength and weakness." },
  ],
  sections: [
    {
      title: "Annual Quality Improvement Programme",
      body: "The Registered Manager maintains an Annual Quality Improvement Programme (AQIP) that sets out the planned audit and improvement activities for the year. The AQIP is structured around the CQC 5 key questions and must include at minimum:\n\n• Monthly: medication administration audit (MAR completeness, error rate); staffing assurance review; incident and complaint analysis.\n• Quarterly: care plan quality audit (sample of 10% of care plans); pressure ulcer and falls incidence review; infection control audit; training matrix review.\n• Bi-annually: service user satisfaction survey; staff satisfaction survey; environment and equipment audit.\n• Annually: full governance review; CQC inspection readiness self-assessment; care planning deep-dive audit.\n\nThe AQIP is reviewed and updated at the annual governance review. It is shared with the provider and is available for inspection by CQC.",
    },
    {
      title: "The Audit Cycle",
      body: "Every audit at [ORGANISATION_NAME] must follow a complete audit cycle — not just a data collection exercise:",
      procedure: [
        "Set criteria — what does 'good' look like? Use a recognised standard (CQC fundamental standards, NICE guidelines, or your own policy).",
        "Set a target — what percentage compliance is acceptable? (Usually 90–100% for critical safety standards.)",
        "Collect data — sample a representative cross-section of records, observations, or interviews.",
        "Analyse results — compare findings against criteria and target.",
        "Identify improvements — what is causing any shortfall? What changes are needed?",
        "Implement change — assign named owners and realistic timescales to each action.",
        "Re-audit — repeat the data collection after the change has had time to embed (usually 3–6 months).",
        "Close the loop — confirm that the change has achieved the target or repeat the improvement cycle.",
      ],
      warningBox: "An audit that produces findings but no action is worse than no audit at all — it demonstrates awareness of a problem without willingness to fix it. CQC inspectors review audit findings AND the actions taken. An audit trail showing a persistent problem, identified but not addressed, is strong evidence of poor governance.",
    },
    {
      title: "Learning from Incidents and Complaints",
      body: "Incidents and complaints are the most valuable source of quality improvement intelligence — they represent real harm or near-harm rather than theoretical risk.\n\n[ORGANISATION_NAME]'s incident review process:\n• All incidents are reviewed by the Registered Manager within 24 hours of reporting.\n• Significant incidents (serious harm, death, safeguarding concern, media risk) are subject to a Root Cause Analysis within 14 days.\n• Learning from incidents is shared with all relevant staff within 7 days through briefings, team meetings, or a 'Learning from Incidents' newsletter.\n• A monthly trend analysis is presented at the governance meeting, identifying any patterns, clusters, or recurring issues.\n• Complaints are reviewed alongside incidents — a complaint about the same issue as a recent incident is a strong signal that the improvement action has not been effective.\n\nThe learning culture at [ORGANISATION_NAME] is based on openness, not blame. Staff who report concerns or disclose their own errors will not be disciplined unless there is evidence of serious misconduct or deliberate harm.",
      practiceBox: "The best quality improvement ideas often come from frontline staff. Consider implementing a 'staff suggestion' mechanism — a physical or digital way for any member of staff to raise an improvement idea. Review suggestions monthly. Acting visibly on staff ideas is one of the strongest drivers of improvement culture.",
    },
    {
      title: "Service User and Carer Involvement in Quality",
      body: "Service users and their families are the primary judge of quality at [ORGANISATION_NAME]. Their experience of care is systematically captured through:\n• Annual written satisfaction survey — distributed to all service users and families; summarised results shared with all stakeholders.\n• Residents' meetings (or equivalent) — held at minimum quarterly; minutes recorded and action items followed up.\n• Individual feedback at care reviews — 'What is working well for you? What could be better?'\n• Complaints and compliments log — reviewed monthly.\n\nFeedback results are presented at the governance meeting and published in the service's quality report. Where feedback identifies a theme for improvement, a PDSA cycle is initiated. Service users and families are informed of the changes made as a result of their feedback — 'you said, we did'.",
    },
    {
      title: "Quality Dashboard and Governance Reporting",
      body: "The Registered Manager maintains a quality dashboard that displays the service's performance against key quality indicators in real time. The dashboard is reviewed at the monthly governance meeting and shared with the provider.\n\nDashboard indicators include: medication error rate; falls rate; pressure ulcer incidence; infection rate; training compliance percentage; supervision completion rate; complaint response compliance; CQC rating and outstanding actions.\n\nThe governance meeting produces a monthly quality report that includes: progress against AQIP; incident trend analysis; dashboard performance; actions in progress and completed; risks and issues. The report is retained as evidence of the governance process for CQC inspection.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-017 — CQC Registration & Regulatory Compliance Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "res-001 — Complaints Handling Policy",
    "wl-003 — Supervision & Appraisal Policy",
  ],
  appendices: [
    { title: "Appendix A — Annual Quality Improvement Programme Template", content: "Year-view calendar of planned audits and improvement activities, mapped to CQC key questions. Columns: activity; standard/criteria; frequency; lead; target; method; completion date; actions arising." },
    { title: "Appendix B — Quality Dashboard Template", content: "Monthly dashboard showing: medication error rate; falls rate (per 1000 bed days); pressure ulcer incidence; training compliance %; supervision completion %; complaint response rate; CQC rating; outstanding improvement actions. RAG-rated against local targets and, where available, national benchmarks." },
  ],
  versionHistory: [
    { version: "3.6", date: "2026-04-30", changes: "Aligned with CQC Single Assessment Framework quality statements; added quality dashboard section; strengthened service user involvement requirements." },
    { version: "3.4", date: "2025-06-01", changes: "Updated PDSA cycle guidance; added benchmarking definition; strengthened audit cycle procedure." },
    { version: "3.1", date: "2024-02-01", changes: "Full review; added Annual Quality Improvement Programme concept; aligned with Regulation 17 good governance requirements." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-007  Discharge & Transfer of Care Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF007_CONTENT: DocumentContent = {
  title: "Discharge & Transfer of Care Policy",
  policyId: "EFF-007",
  version: "3.1",
  effectiveDate: "2026-03-20",
  reviewDate: "2027-03-20",
  approvedBy: "Registered Manager",
  scope: "All planned and unplanned transfers and discharges of service users from [ORGANISATION_NAME], including transfers to hospital, between care settings, home discharge, and transfer to another care provider. This policy does not cover end of life transitions, which are addressed in EFF-004.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a documented Discharge or Transfer Plan is in place for every planned transition.",
        "Ensure all information required for safe handover is compiled and shared before the service user leaves [ORGANISATION_NAME]'s care.",
        "Review all unplanned hospital admissions to identify whether they were preventable.",
        "Maintain a hospital liaison contact list and a discharge planning checklist.",
      ],
    },
    {
      role: "Senior Care Workers",
      duties: [
        "Compile the handover information pack for all planned transfers.",
        "Accompany the service user if clinically necessary and if the transfer is unplanned.",
        "Communicate clearly with the receiving service using the SBAR framework.",
        "Ensure the service user's care plan, medication, and personal items are included in a planned transfer.",
        "Document all transfer activity in the care record.",
      ],
    },
  ],
  legislation: [
    "Care Act 2014 — assessment and provision of care on transition; duty to cooperate between authorities",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "NHS Act 2006 (as amended) — hospital discharge duties",
    "Hospital Discharge and Community Support Guidance 2022 (DHSC) — 'discharge to assess' model",
    "NICE Guideline NG27 — Transition between inpatient hospital settings and community or care home settings for adults with social care needs (2015, updated 2020)",
  ],
  definitions: [
    { term: "Transfer of Care", definition: "The movement of a service user from [ORGANISATION_NAME]'s care to another care provider, setting, or to the person's own home, with the expectation that care will continue to be delivered. Includes hospital admissions, inter-care home transfers, and step-down to domiciliary care." },
    { term: "Discharge", definition: "The ending of [ORGANISATION_NAME]'s formal care responsibility for a service user. Includes discharge home (where no further ongoing care is required), discharge to a different provider (transfer of care), or death." },
    { term: "Handover Document", definition: "The package of clinical, care, and personal information passed from [ORGANISATION_NAME] to the receiving service or professional at the time of transfer. A comprehensive handover document is essential for continuity and safety of care." },
    { term: "Discharge to Assess (D2A)", definition: "The NHS model, promoted by the DHSC Hospital Discharge Guidance 2022, which encourages patients to be discharged from hospital to a temporary care setting or their own home as soon as they are medically fit, with further assessment of long-term needs taking place in the community rather than in an acute hospital bed." },
  ],
  sections: [
    {
      title: "Principles of Safe Transfer and Discharge",
      body: "Every transfer and discharge from [ORGANISATION_NAME] must be:\n• Planned — with adequate notice where the transition is foreseeable.\n• Documented — a comprehensive handover document must accompany every transfer.\n• Person-centred — the service user's wishes, preferences, and consent must be central to the planning process.\n• Safe — the receiving setting must be confirmed as appropriate, equipped, and available before transfer.\n• Timely — neither delayed beyond clinical need nor rushed to the point of causing harm.\n\nFor service users lacking capacity, discharge and transfer decisions must be made in their best interest under the Mental Capacity Act 2005, with involvement of family, carers, and advocates where appropriate.",
    },
    {
      title: "Planned Transfer — Procedure",
      body: "When a planned transfer is identified (e.g. return home, step-down to another provider, planned hospital admission for surgery):",
      procedure: [
        "Confirm the transfer with the receiving setting at least 48 hours in advance where possible.",
        "Discuss the transfer with the service user (and family where appropriate), obtaining consent and addressing any concerns.",
        "For a service user lacking capacity, convene a best interest meeting if the transfer is a significant change.",
        "Compile the handover documentation pack (see Appendix A).",
        "Arrange transportation appropriate to the service user's needs.",
        "On the day of transfer: perform a final observation set; confirm medication has been sent in appropriate labelled containers with a copy of the MAR; confirm personal belongings are packed and listed.",
        "Brief the receiving setting by telephone before arrival using SBAR.",
        "Document the transfer in the care record: time, mode, who accompanied, handover given to, items sent.",
        "Retain a copy of the handover documentation in the service user's care record.",
      ],
    },
    {
      title: "Unplanned Hospital Admission",
      body: "When a service user requires an unplanned hospital admission (emergency or urgent):\n• Call 999 for all life-threatening situations — do not delay emergency care for documentation.\n• Compile the handover document as quickly as possible — this can be done simultaneously with awaiting the ambulance.\n• Send the handover document with the service user; a copy of the handover 'red bag' (see below) should always be ready to go within minutes.\n• A member of staff must accompany the service user to hospital if their condition requires it or if they lack capacity and have no family available.\n• Notify the next of kin and the relevant GP as soon as the service user has left.\n• Document the admission in the care record.\n• Contact the hospital liaison contact to introduce the service and offer to assist with discharge planning.",
      practiceBox: "The Red Bag scheme, originally developed for care homes in partnership with NHS England, provides a pre-packed bag containing key documents (care passport, medication list, advance care plan, DNR where applicable) that travels with the service user to hospital. Implementing a Red Bag equivalent dramatically improves the quality of information handover in unplanned admissions and reduces avoidable harm.",
    },
    {
      title: "Hospital Discharge — Receiving a Service User",
      body: "When a service user is returning to [ORGANISATION_NAME] from hospital following an acute admission, safe receipt of care requires:\n• Advance notice of discharge — minimum 24 hours is expected from the hospital under NHS discharge guidance. Where this is not given, the Registered Manager may request a delay until [ORGANISATION_NAME] can safely receive the service user.\n• Receipt of a hospital discharge summary including: diagnoses; procedures undertaken; changes to medication; clinical observations at discharge; follow-up appointments; any new care or equipment requirements.\n• Assessment of the service user on return: observations, pressure ulcer check, medication reconciliation.\n• Care plan review within 48 hours of return to incorporate any changes in need arising from the hospital admission.\n• Communication with GP to confirm receipt and any urgent follow-up needed.",
    },
  ],
  relatedDocuments: [
    "eff-001 — Care Planning Policy",
    "eff-002 — Mental Capacity Act Policy",
    "saf-003 — Medication Management Policy",
    "eff-011 — Physical Health Monitoring Policy",
    "res-005 — Hospital Admission & Discharge Liaison Policy",
  ],
  appendices: [
    { title: "Appendix A — Handover Documentation Pack", content: "Contents: (1) Care Passport — 1-page summary of service user's name, date of birth, diagnosis, communication needs, preferences, next of kin; (2) Medication list — all current medications with doses, frequency, and any recent changes; (3) Most recent set of observations; (4) Advance care plan and DNACPR where applicable; (5) Details of any ongoing wound care, catheter care, or specialist equipment; (6) Contact details for the Registered Manager; (7) Copy of current MAR (last 7 days)." },
    { title: "Appendix B — Hospital Discharge Checklist", content: "Pre-admission check (for planned procedures) and post-discharge receipt checklist: discharge summary received; medication reconciliation complete; new care needs assessed; care plan updated; GP notified; family notified; follow-up appointments noted; equipment ordered." },
  ],
  versionHistory: [
    { version: "3.1", date: "2026-03-20", changes: "Updated to include DHSC Hospital Discharge Guidance 2022; added Red Bag scheme guidance; strengthened unplanned admission procedure." },
    { version: "3.0", date: "2025-05-01", changes: "Full review; added D2A model; updated NICE NG27 reference." },
    { version: "2.7", date: "2024-02-01", changes: "Added hospital discharge checklist; strengthened medication reconciliation requirement." },
  ],
};
