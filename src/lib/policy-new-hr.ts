/**
 * NEW PRIORITY POLICIES — Workforce & HR module
 * hr-001 through hr-007
 * Added June 2026 — Priority Phase 1 expansion
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// HR-001  Induction and Onboarding Policy
// ─────────────────────────────────────────────────────────────────────────────
export const HR001_CONTENT: DocumentContent = {
  title: "Induction and Onboarding Policy",
  policyId: "HR-001",
  version: "2.4",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All new employees, returning employees, agency workers, volunteers, students, and long-term contractors commencing work with [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure every new starter completes a structured induction before working unsupervised with service users.",
        "Designate an induction supervisor / buddy for each new starter.",
        "Ensure all pre-employment checks are completed before first day of work.",
        "Review and sign off the induction checklist for each new starter within 12 weeks.",
        "Ensure induction completion is recorded in the staff training record.",
      ],
    },
    {
      role: "Line Manager / Induction Supervisor",
      duties: [
        "Conduct and document the Day 1 induction with the new starter.",
        "Complete and sign the induction checklist at each stage.",
        "Provide ongoing supervision and support throughout the probationary period.",
        "Identify any training needs or competency gaps and arrange additional support.",
      ],
    },
    {
      role: "New Starter",
      duties: [
        "Actively participate in all induction activities and complete all required training modules.",
        "Ask for help or clarification whenever unsure about any aspect of their role.",
        "Complete mandatory training modules within the timescales specified.",
        "Never work unsupervised until formally signed off as competent to do so.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing (staff must be trained and competent)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 19 — Fit and Proper Persons",
    "Care Certificate Standards (Skills for Care, 2015) — the baseline qualification framework for new care workers",
    "Employment Rights Act 1996 — employment contract terms including probationary period",
    "Equality Act 2010 — non-discrimination in training and development",
  ],
  definitions: [
    { term: "Induction", definition: "The process through which a new member of staff is introduced to their organisation, role, team, responsibilities, and mandatory training requirements." },
    { term: "Care Certificate", definition: "A set of 15 standards introduced in 2015 (Skills for Care) that all new care workers who have not previously worked in health or social care should achieve. Completion of the Care Certificate demonstrates baseline competence." },
    { term: "Probationary Period", definition: "A defined initial period of employment (typically 3–6 months) during which the new starter's suitability, performance, and conduct are formally assessed." },
    { term: "Competency Sign-Off", definition: "A formal assessment by an authorised assessor confirming that a member of staff has demonstrated the knowledge, skills, and behaviour required to perform a specific task or role safely and effectively." },
  ],
  sections: [
    {
      title: "Purpose",
      body: "An effective induction is the single most important factor in getting a new member of staff off to a safe and successful start. CQC inspectors routinely ask to see evidence that staff received a thorough induction before working unsupervised with service users. Poor or incomplete induction is a recurring finding in services rated 'Requires Improvement' or 'Inadequate' under the Well-Led and Safe key questions.\n\n[ORGANISATION_NAME] uses a structured, staged induction programme aligned to the Care Certificate and the Skills for Care Induction Standards. All new starters must complete induction before working unsupervised.",
      warningBox: "No new member of staff, agency worker, or volunteer should have unsupervised contact with service users until they have completed at minimum the Day 1 Safety Essentials and have been personally briefed by their induction supervisor. This is a non-negotiable safety requirement.",
    },
    {
      title: "Pre-Employment Checks",
      body: "The following pre-employment checks must be completed before a new starter begins work. The Registered Manager maintains a pre-employment checklist and no new starter commences without confirmation that all checks are satisfactory:\n\n• Enhanced DBS check (with Children's and/or Adults' Barred List check as appropriate to role)\n• Right to work in the UK verification\n• Minimum of two satisfactory references, including most recent employer\n• Occupational health clearance / health questionnaire (where required)\n• Professional registration check (NMC, HCPC, etc.) where applicable\n• Identity verification (passport or other approved document)\n• Qualification verification where required by role\n\nNo new starter may commence employment before a clear or risk-assessed DBS is received unless a documented risk assessment has been completed and signed off by the Registered Manager.",
    },
    {
      title: "Induction Programme",
      body: "The induction programme is structured in three stages:",
      procedure: [
        "Stage 1 — Day 1 Safety Essentials: Completed on the first day before any contact with service users. Covers: fire evacuation procedures and muster points; lone working and emergency contacts; safeguarding — recognising and reporting abuse; medication — what not to touch; confidentiality and data protection; infection control basics; manual handling — do not assist with transfers until trained; key policies — Conduct, Confidentiality, Safeguarding; introduction to the electronic care system.",
        "Stage 2 — First 2 Weeks (Supervised Practice): The new starter works alongside their induction supervisor. Covers: Care Certificate Standards 1–15 (knowledge and workplace observation); shadowing experienced staff on all care tasks; completing Ziproh mandatory e-learning modules; introduction to service users (with their consent); medication competency (observation only until trained and signed off); emergency procedures (practical drill).",
        "Stage 3 — Weeks 3–12 (Supported Practice and Sign-Off): The new starter begins to work more independently under the supervision of experienced colleagues. Covers: competency sign-offs for all relevant care tasks; first formal supervison meeting with line manager (Week 4); Care Certificate portfolio completion; full mandatory training completion; probationary review meeting (Week 12).",
      ],
      practiceBox: "The Care Certificate is not bureaucracy — it is a genuine quality baseline. Services where new starters complete the full Care Certificate have measurably lower rates of safeguarding incidents and complaints in the first year. Make it a meaningful learning experience, not a paper exercise.",
    },
    {
      title: "Agency Workers and Temporary Staff",
      body: "Agency workers and temporary staff who have not previously worked for [ORGANISATION_NAME] must complete a shortened induction before their first shift:\n\n• Day 1 Safety Essentials (Stage 1 above) — mandatory before first shift\n• Introduction to the service, service users, care plans, and emergency contacts\n• Confirmation of current DBS status and Care Certificate completion from the agency\n\nThe Registered Manager or designated senior staff member is responsible for conducting the agency induction. A record is kept of the induction date and what was covered for every agency worker used.",
    },
    {
      title: "Induction Records",
      body: "A completed, signed induction checklist must be placed in the staff member's personnel file. The date of induction completion is recorded in the staff training matrix. Induction records are retained for the duration of employment and for 6 years after employment ends.",
    },
  ],
  monitoring: "Induction completion rate reported monthly. Care Certificate completion tracked in staff training matrix. All new starters have probationary review at 12 weeks.",
  relatedDocuments: [
    "hr-002 — Statutory and Mandatory Training Policy",
    "hr-003 — Staff Conduct Policy",
    "wl-003 — Recruitment Policy",
    "wl-004 — Supervision and Appraisal Policy",
    "igr-002 — Confidentiality Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-002  Statutory and Mandatory Training Policy
// ─────────────────────────────────────────────────────────────────────────────
export const HR002_CONTENT: DocumentContent = {
  title: "Statutory and Mandatory Training Policy",
  policyId: "HR-002",
  version: "2.2",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All staff employed by or contracted to [ORGANISATION_NAME], including agency workers, volunteers, and students (pro-rated to their role).",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain a Statutory and Mandatory Training Matrix listing all required training, frequencies, and current completion status for every staff member.",
        "Ensure training is available in accessible formats and within working hours wherever possible.",
        "Act on the training matrix to ensure no staff member works beyond the expiry of safety-critical training without a risk assessment.",
        "Report monthly training compliance to the governance meeting.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Complete all mandatory training within the timescales specified.",
        "Attend refresher training when due.",
        "Inform their line manager if they are unable to attend scheduled training.",
        "Apply the knowledge and skills gained from training in their day-to-day practice.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing",
    "Management of Health and Safety at Work Regulations 1999, Regulation 13 — Capabilities and training",
    "Manual Handling Operations Regulations 1992",
    "Fire Precautions (Workplace) Regulations 1997",
    "Mental Capacity Act 2005 Code of Practice",
    "Skills for Care Core and Mandatory Training Guidance (2019)",
  ],
  definitions: [
    { term: "Statutory Training", definition: "Training required by specific legislation (e.g. fire safety training required under the Regulatory Reform (Fire Safety) Order 2005; manual handling training required under the Manual Handling Operations Regulations 1992)." },
    { term: "Mandatory Training", definition: "Training required by the organisation, a regulator, or a commissioner as a condition of employment or contract — not required by a specific piece of legislation but essential for safe and competent practice." },
    { term: "Training Matrix", definition: "A document (usually a spreadsheet) that lists all staff, all required training subjects, the required frequency, and the date each individual last completed each subject." },
  ],
  sections: [
    {
      title: "Statutory and Mandatory Training Requirements",
      body: "The following subjects are mandatory for all staff of [ORGANISATION_NAME]. Frequency and delivery method are specified for each subject. The Training Matrix records each staff member's current status for every subject.",
      bulletPoints: [
        "Safeguarding Adults — annual; online + face-to-face awareness (Level 2 for all staff; Level 3 for managers and designated leads)",
        "Safeguarding Children — annual; online + face-to-face awareness (Level 2 for all staff; Level 3 where children's safeguarding is in scope)",
        "Fire Safety — annual; practical fire drill and online module",
        "Manual Handling — annual (theory); 2-yearly (practical competency assessment)",
        "Infection Prevention and Control — annual; online + annual IPC audit",
        "Mental Capacity Act and Deprivation of Liberty Safeguards — bi-annual; online + face-to-face",
        "Medication Management — annual; online module + annual competency assessment (for administering staff)",
        "Health and Safety awareness — annual; online",
        "First Aid Awareness — annual; (full First Aid at Work for designated first aiders: 3-yearly)",
        "Information Governance and Data Protection — annual; online",
        "Equality and Diversity — annual; online",
        "Food Hygiene — bi-annual; online (for all staff involved in catering or meal preparation: Level 2 Food Hygiene certificate)",
        "Conflict Resolution / Managing Challenging Behaviour — annual; online + face-to-face scenario",
        "Lone Working Safety — at induction; annual refresher online (for lone workers)",
        "Duty of Candour — at induction; bi-annual refresher (for all registered professionals and managers)",
        "Dementia Awareness — at induction; bi-annual refresher (for care homes and services for people with dementia)",
      ],
      legalBox: "Where a member of staff's mandatory training lapses, a formal risk assessment must be completed before they continue in their role. The risk assessment considers the nature of the lapsed training, the risk to service users, and what interim safeguards can be put in place. The risk assessment is documented and the training is rescheduled as a priority.",
    },
    {
      title: "Training Compliance and Follow-Up",
      body: "The Training Matrix is updated immediately after each training event. The Registered Manager reviews the matrix monthly and takes the following escalation steps for non-compliance:\n\n• Training overdue up to 4 weeks: Line manager issues a reminder and books the staff member onto the next available session.\n• Training overdue 4–8 weeks: Formal written reminder from the Registered Manager; the staff member may be restricted from certain duties (e.g. medication administration) until training is completed.\n• Training overdue more than 8 weeks: Disciplinary process initiated; the member of staff may be suspended from duties pending completion of training; the incident is recorded in the governance log.\n\nAgency workers must provide evidence of current mandatory training from their agency before commencing their first shift. Where evidence is not available, the agency worker must complete a minimum of Day 1 safety essentials (see HR-001) before starting.",
    },
    {
      title: "Training Delivery and Records",
      body: "Training may be delivered as:\n\n• Online e-learning via the Ziproh Compliance Centre or an approved external platform\n• Face-to-face classroom sessions with an approved trainer\n• Blended learning (online theory + face-to-face practical)\n• Competency-based workplace assessment\n\nAll training is recorded in the individual staff member's training record and on the Training Matrix. Certificates of completion are retained in the personnel file for the duration of employment and for 6 years thereafter.",
    },
  ],
  monitoring: "Monthly training compliance report at governance meeting (target: 95% compliance for all mandatory subjects). Annual training needs analysis. Training matrix reviewed quarterly by line managers.",
  relatedDocuments: [
    "hr-001 — Induction and Onboarding Policy",
    "wl-004 — Supervision and Appraisal Policy",
    "wl-017 — Learning and Development Strategy",
    "gov-002 — Quality Assurance Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-003  Staff Conduct and Code of Conduct Policy
// ─────────────────────────────────────────────────────────────────────────────
export const HR003_CONTENT: DocumentContent = {
  title: "Staff Conduct and Code of Conduct Policy",
  policyId: "HR-003",
  version: "2.0",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All persons employed by or working on behalf of [ORGANISATION_NAME], including employees, agency workers, volunteers, students, and contractors.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure the Code of Conduct is embedded in induction and communicated annually to all staff.",
        "Take appropriate action, including initiating the Disciplinary Procedure, when conduct falls below required standards.",
        "Model the behaviours expected of all staff.",
        "Ensure the Code of Conduct is applied consistently and fairly across the workforce.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Read, understand, and abide by this Code of Conduct as a condition of their employment or engagement.",
        "Behave in a professional, respectful, and compassionate manner at all times.",
        "Report concerns about the conduct of colleagues to their line manager or through the Whistleblowing procedure.",
        "Acknowledge they have read and understood this policy annually.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 19 — Fit and Proper Persons",
    "Employment Rights Act 1996",
    "Equality Act 2010",
    "Care Standards Act 2000 — registration and fitness to practise",
    "Skills for Care Code of Conduct for Healthcare Support Workers and Adult Social Care Workers in England (2013)",
    "NMC Code (2018) / HCPC Standards of Conduct, Performance and Ethics (2016) — for registered professionals",
  ],
  definitions: [
    { term: "Conduct", definition: "The behaviour of a member of staff in the workplace, including their interactions with service users, families, colleagues, and managers." },
    { term: "Gross Misconduct", definition: "Conduct so serious that it fundamentally destroys the trust and confidence between employer and employee, justifying summary dismissal without notice. Examples include abuse of service users, theft, falsification of records, and serious breaches of confidentiality." },
    { term: "Misconduct", definition: "Conduct that falls below the required standard but does not (without repetition) justify summary dismissal. Managed through the Disciplinary Procedure." },
  ],
  sections: [
    {
      title: "Standards of Conduct — What We Expect",
      body: "Every member of staff is expected to:\n\n1. Treat service users, colleagues, and all others with dignity, respect, and compassion at all times.\n2. Act with honesty and integrity — never deceiving, misleading, or withholding information from service users, families, managers, or CQC.\n3. Respect the privacy, confidentiality, and personal autonomy of service users.\n4. Follow all policies, procedures, and safe working practices.\n5. Report concerns, incidents, and errors promptly and honestly — including their own mistakes.\n6. Maintain appropriate professional boundaries at all times.\n7. Present themselves for work in a fit, healthy, and appropriate state.\n8. Wear their uniform or work attire as required and maintain personal hygiene standards appropriate to their role.\n9. Use organisation equipment, vehicles, and resources only for authorised work purposes.\n10. Behave professionally when representing the organisation — including on social media.",
    },
    {
      title: "Professional Boundaries",
      body: "All staff must maintain clear professional boundaries in their relationships with service users and their families. Appropriate boundaries include:\n\n• Not accepting gifts worth more than £10 in value, or any gifts of cash or vouchers (see the Gifts and Gratuities Policy).\n• Not forming personal (including romantic or sexual) relationships with service users or their families.\n• Not entering a service user's property in a personal capacity (e.g. outside working hours) without explicit authorisation from the Registered Manager.\n• Not discussing personal problems, financial difficulties, or personal life in detail with service users.\n• Not contacting service users through personal social media, messaging apps, or personal phone numbers.\n\nBoundary violations are taken very seriously and may constitute safeguarding concerns, treated as gross misconduct, and reported to the DBS.",
      warningBox: "Forming a personal relationship with a service user — including accepting significant gifts, developing a sexual or romantic interest, or involving a service user in personal financial matters — is a safeguarding risk, a conduct issue, and potentially a criminal matter. It will always result in disciplinary action and DBS referral.",
    },
    {
      title: "Conduct Outside Work",
      body: "Staff are expected to conduct themselves appropriately outside of work when it may affect the organisation's reputation or their fitness to work. This includes:\n\n• Criminal convictions that are relevant to their role (e.g. offences involving violence, dishonesty, or sexual offences) must be disclosed to the Registered Manager immediately.\n• Staff must not discuss the organisation, service users, or colleagues negatively on social media or in public.\n• Staff must not be under the influence of alcohol or illegal substances at work or when on call.\n\nFailure to disclose a relevant criminal conviction is itself a serious conduct issue.",
    },
    {
      title: "Behaviour That Constitutes Gross Misconduct",
      body: "The following behaviours are examples of gross misconduct and may result in summary dismissal and DBS referral without warning:",
      bulletPoints: [
        "Physical, emotional, sexual, or financial abuse of a service user.",
        "Wilful neglect of a service user's care needs.",
        "Theft from a service user, colleague, or the organisation.",
        "Falsification of care records, medication records, timesheets, or any other documentation.",
        "Serious breach of confidentiality (e.g. sharing care records with unauthorised parties).",
        "Reporting for work under the influence of alcohol or illegal substances.",
        "Harassment, bullying, or discrimination of colleagues or service users.",
        "Deliberate damage to property.",
        "Serious breach of health and safety rules placing others at risk.",
        "Refusing to cooperate with a safeguarding investigation.",
        "Misuse of the organisation's information technology systems, including accessing records without authorisation.",
        "Bringing the organisation into serious disrepute.",
      ],
    },
  ],
  monitoring: "Code of Conduct acknowledgement rate tracked annually. Conduct issues reported at governance meeting (anonymised). DBS referrals recorded and reviewed.",
  relatedDocuments: [
    "hr-004 — Disciplinary Policy and Procedure",
    "hr-001 — Induction Policy",
    "igr-002 — Confidentiality Policy",
    "saf-001 — Safeguarding Adults Policy",
    "wl-004 — Whistleblowing Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-004  Disciplinary Policy and Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const HR004_CONTENT: DocumentContent = {
  title: "Disciplinary Policy and Procedure",
  policyId: "HR-004",
  version: "3.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Director / Registered Manager",
  scope: "All employees of [ORGANISATION_NAME]. Agency workers are subject to this procedure in relation to conduct issues arising during their engagement; their employing agency is informed of outcomes.",
  responsibilities: [
    {
      role: "Director / Owner",
      duties: [
        "Act as the appeal authority for disciplinary outcomes.",
        "Ensure the organisation has adequate HR support for complex disciplinary cases.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Investigate alleged misconduct promptly, fairly, and thoroughly.",
        "Convene disciplinary hearings and issue sanctions where appropriate.",
        "Ensure the disciplinary procedure complies with the ACAS Code of Practice at all times.",
        "Refer to the DBS and/or professional regulators where required by law.",
      ],
    },
    {
      role: "All Managers",
      duties: [
        "Address minor conduct issues informally and at the earliest opportunity.",
        "Document all informal discussions about conduct.",
        "Escalate to the formal procedure when informal methods are insufficient.",
      ],
    },
  ],
  legislation: [
    "Employment Rights Act 1996 (ERA) — including provisions on unfair dismissal (ss.94–134A)",
    "ACAS Code of Practice 1: Disciplinary and Grievance Procedures (2015) — failure to follow creates uplift risk of up to 25% in Employment Tribunal awards",
    "Equality Act 2010 — disciplinary procedure must be applied consistently and without discrimination",
    "Safeguarding Vulnerable Groups Act 2006 — DBS referral duty on dismissal or resignation in connection with harm",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 19 — Fit and Proper Persons",
  ],
  definitions: [
    { term: "Misconduct", definition: "A failure to meet the required standard of conduct. May be addressed through informal discussion (minor misconduct) or the formal disciplinary procedure (repeated or more serious misconduct)." },
    { term: "Gross Misconduct", definition: "A single act of misconduct so serious that it fundamentally destroys the employment relationship. See HR-003 (Code of Conduct) for examples. May justify summary dismissal without notice or payment in lieu." },
    { term: "Summary Dismissal", definition: "Dismissal without notice or payment in lieu of notice, reserved for cases of gross misconduct. Requires a fair procedure including investigation and hearing before the decision is made." },
    { term: "DBS Barred List Referral", definition: "The legal duty to refer an individual to the Disclosure and Barring Service where they have been dismissed or resigned in connection with conduct that harmed or placed at risk a child or vulnerable adult." },
  ],
  sections: [
    {
      title: "Principles",
      body: "This procedure is designed to be fair, consistent, and proportionate. The aim is not primarily to punish but to correct behaviour and improve conduct. Every individual is entitled to:\n\n• Be told what allegation is being investigated\n• Have the opportunity to present their case before a decision is made\n• Be accompanied at all formal hearings by a trade union representative or a work colleague\n• Receive written notification of any sanction imposed and the right to appeal\n• Have their case dealt with without unreasonable delay\n• Not be subjected to double jeopardy (dealt with formally for the same matter more than once)\n\nThis procedure does not apply to redundancy, capability/performance issues, or dismissal during the probationary period (these are addressed under separate policies).",
      legalBox: "Failure to follow the ACAS Code of Practice on Disciplinary and Grievance Procedures does not render a dismissal automatically unfair, but an Employment Tribunal may increase any compensatory award by up to 25% where a party unreasonably fails to follow the Code. Always follow the Code.",
    },
    {
      title: "Informal Resolution",
      body: "Many conduct issues can and should be resolved without formal disciplinary action. Where a member of staff's conduct falls short in a minor way, the line manager should:\n\n• Speak to the staff member promptly and privately\n• Explain clearly what the conduct issue is and what the expected standard is\n• Give the staff member the opportunity to explain\n• Agree what improvement is needed and by when\n• Document the discussion and place a note on the personnel file (informal — not a formal warning)\n• Monitor and support the staff member to improve\n\nIf the conduct does not improve, or if the same issue recurs, the formal procedure is initiated.",
    },
    {
      title: "Formal Disciplinary Procedure",
      body: "The formal procedure follows five stages:",
      procedure: [
        "Stage 1 — Investigation: The Registered Manager (or a nominated investigating manager who is not involved in the allegation) conducts a thorough, timely, and impartial investigation. The investigating manager interviews relevant witnesses, reviews evidence, and prepares a written investigation report. The investigation should normally be completed within 10 working days. Where a safeguarding concern is involved, the safeguarding procedure is followed concurrently.",
        "Stage 2 — Suspension (if required): Where the allegation is serious and the individual's continued presence at work could hinder the investigation, compromise the safety of service users, or constitute an ongoing risk, the Registered Manager may suspend the individual on full pay pending investigation. Suspension is a neutral act and not a disciplinary sanction.",
        "Stage 3 — Disciplinary Hearing: The staff member is invited in writing to a disciplinary hearing, giving at least 48 hours' notice (5 working days for more serious matters). The invitation includes: the allegation(s); the evidence to be relied upon; the right to be accompanied; and the potential outcome. At the hearing, the chair presents the case and the staff member has the opportunity to respond, call witnesses, and present their case. The chair may adjourn to consider the outcome.",
        "Stage 4 — Decision and Sanction: Following the hearing, the chair makes a decision based on the balance of probabilities. Available sanctions are: no case to answer (matter closed); first formal written warning (valid 12 months); final written warning (valid 18 months); dismissal with notice; summary dismissal (gross misconduct only). The outcome is confirmed in writing within 5 working days, including the right of appeal.",
        "Stage 5 — Appeal: The staff member has the right to appeal against any formal disciplinary outcome within 10 working days of receiving the written decision. Appeals are heard by a manager not involved in the original hearing, or by the Director. The appeal decision is final.",
      ],
    },
    {
      title: "DBS and Regulatory Referrals",
      body: "Where a staff member is dismissed, or resigns in connection with conduct that harmed, or placed at risk of harm, a child or vulnerable adult, [ORGANISATION_NAME] has a legal duty to refer to the DBS. This referral must be made regardless of whether the individual admits the conduct or the matter was proven beyond doubt.\n\nWhere the staff member is a registered professional (nurse, social worker, occupational therapist, etc.), the relevant regulatory body (NMC, HCPC, etc.) must also be notified.\n\nReferrals are made by the Registered Manager and recorded in the Conduct and Referral Log.",
      warningBox: "Failure to make a required DBS referral is a criminal offence. Even where a member of staff resigns to avoid a disciplinary investigation, if the underlying conduct related to harm to service users, the referral must be made. The DBS referral duty is triggered by the conduct, not the outcome of a hearing.",
    },
  ],
  monitoring: "All formal disciplinary cases recorded in the Conduct Log. DBS referral log maintained. Anonymised quarterly report to governance meeting on conduct trends.",
  relatedDocuments: [
    "hr-003 — Staff Conduct Policy",
    "hr-005 — Grievance Policy",
    "saf-001 — Safeguarding Adults Policy",
    "wl-004 — Whistleblowing Policy",
    "wl-003 — Recruitment Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-005  Grievance Policy and Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const HR005_CONTENT: DocumentContent = {
  title: "Grievance Policy and Procedure",
  policyId: "HR-005",
  version: "2.3",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Director / Registered Manager",
  scope: "All employees of [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure staff know how to raise a grievance and that it will be taken seriously.",
        "Investigate all formal grievances promptly, fairly, and impartially.",
        "Convene grievance hearings within the timescales specified.",
        "Ensure no member of staff is treated detrimentally for raising a genuine grievance.",
      ],
    },
    {
      role: "All Employees",
      duties: [
        "Raise concerns at the earliest opportunity, beginning with informal discussion where appropriate.",
        "Engage constructively with the grievance process.",
        "Not raise vexatious or bad-faith grievances.",
      ],
    },
  ],
  legislation: [
    "Employment Rights Act 1996",
    "ACAS Code of Practice 1: Disciplinary and Grievance Procedures (2015)",
    "Equality Act 2010 — protection from victimisation for raising a grievance",
    "Public Interest Disclosure Act 1998 — where a grievance overlaps with a protected disclosure",
  ],
  sections: [
    {
      title: "Purpose and Principles",
      body: "Every employee has the right to raise a grievance about their employment — including their working conditions, treatment by colleagues or managers, pay, or any other aspect of their working life. [ORGANISATION_NAME] takes all grievances seriously and deals with them promptly, fairly, and confidentially.\n\nRaising a grievance will never result in the employee being treated detrimentally. Any manager found to have victimised, penalised, or threatened a member of staff for raising a grievance will face disciplinary action.",
    },
    {
      title: "Informal Resolution",
      body: "Many grievances can be resolved quickly and informally. Where an employee has a concern, they should in the first instance:\n\n• Raise the matter with their line manager (or the Registered Manager if the complaint involves their line manager)\n• Discuss the issue clearly and honestly\n• Agree what action will be taken to resolve it and by when\n\nIf the informal approach does not resolve the matter within 10 working days, or if the concern is serious, the employee may raise a formal grievance.",
    },
    {
      title: "Formal Grievance Procedure",
      body: "",
      procedure: [
        "Step 1 — Written grievance: The employee submits a written grievance to the Registered Manager (or the Director if the grievance involves the Registered Manager), setting out the nature of the grievance and the outcome they are seeking.",
        "Step 2 — Acknowledgement: The grievance is acknowledged in writing within 3 working days. A grievance hearing is arranged within 10 working days of receipt.",
        "Step 3 — Grievance hearing: The employee attends a hearing with the Registered Manager (or Director). They have the right to be accompanied by a trade union representative or a work colleague. The employee presents their grievance and the manager asks questions to clarify. The manager may adjourn to investigate further.",
        "Step 4 — Decision: The manager communicates the outcome in writing within 5 working days of the hearing. The outcome will include: findings; any action to be taken; and the right of appeal.",
        "Step 5 — Appeal: The employee may appeal within 10 working days of receiving the written outcome. The appeal is heard by the Director or a senior manager not involved in the original hearing. The appeal decision is final.",
      ],
    },
    {
      title: "Confidentiality",
      body: "Grievances are handled with confidentiality. Information about a grievance is shared only with those who need to know in order to investigate it. The outcome of a grievance is not disclosed to other staff without the consent of the employee who raised it. Records of grievance hearings and outcomes are retained securely for 6 years.",
    },
  ],
  monitoring: "Formal grievances recorded in the HR Log. Anonymised quarterly report to governance meeting. Recurring grievance themes trigger a management review.",
  relatedDocuments: [
    "hr-004 — Disciplinary Policy",
    "hr-003 — Staff Conduct Policy",
    "wl-004 — Whistleblowing Policy",
    "wl-004 — Supervision and Appraisal Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-006  Staff Rota and Rostering Policy
// ─────────────────────────────────────────────────────────────────────────────
export const HR006_CONTENT: DocumentContent = {
  title: "Staff Rota and Rostering Policy",
  policyId: "HR-006",
  version: "1.7",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All staff involved in planning, producing, or working to staff rotas at [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure rotas are produced at least 2 weeks in advance and communicated to all staff.",
        "Ensure rotas always meet minimum safe staffing ratios and skill-mix requirements.",
        "Ensure roster planning takes account of staff skills, competencies, continuity of care, and working time legislation.",
        "Ensure a contingency plan is in place for unexpected staffing shortfalls.",
      ],
    },
    {
      role: "Senior Staff / Shift Leaders",
      duties: [
        "Report staffing shortfalls on their shift to the Registered Manager immediately.",
        "Never accept a rota that leaves the service below the minimum safe staffing ratio without escalating.",
        "Manage breaks, overtime, and handovers in line with this policy.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Check their rota regularly and report any errors promptly.",
        "Request any rota changes through their line manager in advance.",
        "Notify the Registered Manager or designated on-call contact as early as possible if unable to work a shift.",
      ],
    },
  ],
  legislation: [
    "Working Time Regulations 1998 — maximum 48-hour working week; minimum rest periods; limits on night work",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — sufficient numbers of suitable staff",
    "Management of Health and Safety at Work Regulations 1999 — risk assessment for fatigue and lone working",
    "Employment Rights Act 1996 — contracts of employment specify hours of work",
  ],
  definitions: [
    { term: "Minimum Safe Staffing Level", definition: "The minimum number and skill-mix of staff required to safely provide the regulated activity at any given time. This is determined by a staffing needs assessment based on the number, acuity, and dependencies of service users." },
    { term: "Skill-Mix", definition: "The combination of qualifications, skills, and experience across the staff on duty at any time. The required skill-mix depends on the needs of the service users being supported." },
    { term: "Continuity of Care", definition: "The principle that, where possible, service users are supported by a consistent group of familiar staff, rather than a different person each visit. Rota planning should maximise continuity of care." },
  ],
  sections: [
    {
      title: "Purpose and Safe Staffing",
      body: "Unsafe staffing levels are one of the most common factors in serious care incidents, abuse, and neglect. [ORGANISATION_NAME] has a legal duty under Regulation 18 to deploy sufficient numbers of suitably skilled, qualified, and experienced staff to meet the needs of service users at all times. This policy ensures that rota planning is done systematically, transparently, and with safe staffing as the paramount concern.",
      warningBox: "The minimum safe staffing ratio is a floor, not a target. A rota that consistently runs at minimum staffing with no contingency is a risk management failure. The Registered Manager must escalate to the Director when structural staffing levels make minimum safe staffing difficult to maintain.",
    },
    {
      title: "Rota Planning Principles",
      body: "Rotas must be planned in accordance with the following principles:\n\n1. Safe staffing first — meet the minimum safe staffing ratio for every shift before considering staff preferences or cost efficiency.\n2. Skill-mix — every shift must include staff with the competencies required for the service users on that shift (e.g. a registered nurse where required; a first-aider on every shift; a senior carer or shift leader at all times).\n3. Working Time Regulations compliance — no staff member works more than 48 hours per week (averaged over 17 weeks) without a signed opt-out; rest breaks of 20 minutes for shifts over 6 hours; 11 hours between shifts; one rest day per week.\n4. Continuity — service users should, wherever possible, be supported by the same staff from shift to shift. Rota planning should minimise the use of agency or unfamiliar staff.\n5. Fairness — shift allocation should be fair and equitable, with weekends, bank holidays, and unpopular shift patterns distributed as evenly as possible.\n6. Communication — the rota is published at least 2 weeks in advance in a format accessible to all staff.",
    },
    {
      title: "Staffing Shortfalls and Contingency",
      body: "When a staffing shortfall arises (whether through sickness absence, late cancellation, or under-recruitment), the following escalation procedure applies:",
      procedure: [
        "Step 1: The shift leader or Registered Manager first contacts available staff to offer overtime or additional shifts.",
        "Step 2: If internal cover is unavailable, the Registered Manager contacts the approved agency supplier(s) to source agency cover.",
        "Step 3: If agency cover is unavailable or insufficient to maintain minimum safe staffing, the Registered Manager contacts the Director immediately.",
        "Step 4: If minimum safe staffing cannot be maintained, the Registered Manager considers: reducing admissions; requesting support from commissioners; contacting CQC if the situation poses an immediate risk to service users.",
        "Step 5: All staffing shortfalls, the actions taken, and the outcome are recorded in the Staffing Shortfall Log.",
      ],
      legalBox: "Regulation 18 requires providers to notify CQC where staffing shortfalls prevent or are likely to prevent the safe provision of care. Do not manage a prolonged staffing crisis silently. CQC and commissioners must be kept informed where there is an ongoing, unresolved safe staffing risk.",
    },
    {
      title: "Agency Staff",
      body: "Agency staff are used only to supplement the permanent workforce. [ORGANISATION_NAME] works only with approved agency suppliers who have been quality-assured. All agency workers must:\n\n• Have a current, clear DBS certificate\n• Hold current mandatory training certificates (provided by their agency)\n• Complete a local induction before commencing their first shift\n• Be allocated to work alongside a permanent member of staff until they are familiar with the service\n\nThe Registered Manager reviews agency usage monthly and acts to reduce dependency on agency staff through recruitment and retention activity.",
    },
  ],
  monitoring: "Minimum staffing levels audited monthly by comparing actual vs planned staffing on a sample of days. Staffing shortfall log reviewed at governance meeting. Agency usage reported monthly.",
  relatedDocuments: [
    "hr-001 — Induction Policy",
    "hr-002 — Mandatory Training Policy",
    "wl-009 — Staffing and Deployment Policy",
    "gov-007 — Business Continuity Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HR-007  Whistleblowing / Speaking Up Policy (Enhanced)
// ─────────────────────────────────────────────────────────────────────────────
export const HR007_CONTENT: DocumentContent = {
  title: "Whistleblowing and Speaking Up Policy",
  policyId: "HR-007",
  version: "3.5",
  effectiveDate: "2026-06-01",
  reviewDate: "2027-06-01",
  approvedBy: "Director / Registered Manager",
  scope: "All workers — including employees, agency staff, volunteers, students, and contractors — who raise concerns in the public interest about [ORGANISATION_NAME]'s activities.",
  responsibilities: [
    {
      role: "Director / Provider",
      duties: [
        "Champion a culture of openness and transparency at the highest level of the organisation.",
        "Receive escalated concerns where the Registered Manager is the subject of the disclosure.",
        "Ensure that no member of staff suffers detriment for raising a genuine concern.",
        "Review anonymised whistleblowing data annually as part of governance oversight.",
      ],
    },
    {
      role: "Registered Manager / Freedom to Speak Up Lead",
      duties: [
        "Act as (or designate) the Freedom to Speak Up (FTSU) lead for the organisation.",
        "Ensure all disclosures are investigated promptly and thoroughly.",
        "Maintain the Whistleblowing Log and report to governance meetings.",
        "Protect the identity of individuals who raise concerns wherever possible.",
      ],
    },
    {
      role: "All Workers",
      duties: [
        "Raise genuine concerns about malpractice, harm, or wrongdoing promptly and in good faith.",
        "Never victimise, discourage, or retaliate against a colleague for raising a concern.",
        "Cooperate with any investigation arising from a disclosure.",
      ],
    },
  ],
  legislation: [
    "Public Interest Disclosure Act 1998 (PIDA) — statutory protection for qualifying disclosures",
    "Employment Rights Act 1996, ss 47B and 103A — protection from detriment and unfair dismissal",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Care Act 2014 — duty to raise safeguarding concerns",
  ],
  sections: [
    {
      title: "Our Commitment",
      body: "[ORGANISATION_NAME] is committed to creating an environment where staff feel safe to speak up about concerns — including concerns about the care of service users, the conduct of colleagues, financial impropriety, or any other form of malpractice. Speaking up is not disloyalty — it is a fundamental duty of every person who works in care.\n\nThis policy builds on the existing Whistleblowing Policy (WL-004) with an enhanced focus on Freedom to Speak Up principles and a strengthened non-retaliation commitment. It reflects CQC's increased focus on speak-up culture as a Well-Led indicator.",
      practiceBox: "Ask yourself: if something happened to a person you loved in a care service, would you want the staff around them to speak up? Be that person for your service users.",
    },
    {
      title: "What to Raise and How",
      body: "Concerns that should be raised include (but are not limited to): poor or unsafe care; abuse or neglect; falsification of records; financial fraud; bullying or harassment of staff; closed culture or covering up of incidents; regulatory breaches.\n\nConcerns may be raised: verbally to the FTSU Lead or Registered Manager; in writing (email or letter); anonymously via the organisation's confidential reporting route; directly to CQC (03000 616161); or to Protect (formerly PCAW) at 020 3117 2520.",
    },
  ],
  monitoring: "Whistleblowing Log reviewed quarterly. Themes reported annually to governance. Staff survey includes speak-up culture question annually.",
  relatedDocuments: [
    "wl-004 — Whistleblowing Policy (original)",
    "hr-004 — Disciplinary Policy",
    "gov-001 — Duty of Candour Policy",
    "saf-001 — Safeguarding Adults Policy",
  ],
};
