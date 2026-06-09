import type { DocumentContent } from "./documents";

export const WELLLED_CONTENT: Record<string, DocumentContent> = {
  "wl-001": {
    purpose: "[ORGANISATION_NAME]'s Governance Framework sets out how the organisation exercises accountability, manages risk, ensures quality and maintains regulatory compliance. It provides the structural foundation for all governance activity and a clear line of sight from front-line care to board-level accountability.",
    scope: "Applies to the Board or Provider, Registered Manager, all staff and contracted parties. Covers all regulated activities delivered by [ORGANISATION_NAME].",
    responsibilities: [
      {
        role: "Board / Provider",
        duties: [
          "Set the strategic direction and values of the organisation",
          "Hold the Registered Manager to account for operational quality and compliance",
          "Review quality and performance reports at least quarterly",
          "Ensure sufficient resources are allocated to maintain and improve quality",
        ],
      },
      {
        role: "Registered Manager",
        duties: [
          "Implement and maintain all governance systems and processes",
          "Report to the Board on quality, safety and compliance matters",
          "Lead the organisation's quality improvement programme",
          "Ensure all regulatory notifications are submitted on time",
        ],
      },
    ],
    keyPoints: [
      "The organisation operates a quality assurance framework based on Plan-Do-Study-Act (PDSA) cycles reviewed monthly",
      "Key performance indicators are monitored at monthly governance meetings and reported to the Board quarterly",
      "All audit findings, incidents and complaints feed into the quality improvement plan",
      "An annual Quality Account is produced and shared with service users, staff and stakeholders",
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
        body: "The organisation operates a rolling programme of internal audits covering all five CQC key questions. Audit results are rated Green/Amber/Red and action plans are produced for any Amber or Red finding. Progress is reviewed monthly by the Registered Manager and quarterly by the Board or Provider.",
      },
      {
        heading: "Duty of Candour",
        body: "When a notifiable safety incident occurs, [ORGANISATION_NAME] will: inform the person affected and their family as soon as practicable; provide an honest explanation; apologise; investigate and share findings; and take action to prevent recurrence. All Duty of Candour actions must be documented.",
      },
    ],
  },

  "wl-002": {
    purpose: "[ORGANISATION_NAME] is committed to the safe, fair and effective recruitment of staff who are fit for the roles they undertake. This policy sets out a safer recruitment framework that protects service users and ensures the organisation meets its statutory obligations.",
    scope: "Applies to all recruitment activity at [ORGANISATION_NAME], including permanent, temporary, bank and volunteer roles, and to all managers involved in the recruitment process.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all required pre-employment checks are completed before any new staff member starts work",
          "Maintain a schedule of DBS check renewals and ensure all checks are current",
          "Ensure job descriptions, person specifications and interview processes are fair and consistent",
          "Maintain accurate records of all pre-employment checks for CQC inspection",
        ],
      },
      {
        role: "Recruiting Managers",
        duties: [
          "Follow the safer recruitment process for every appointment",
          "Conduct interviews using structured, competency-based questions",
          "Complete employment reference checks with at least two referees including the most recent employer",
          "Never permit a new staff member to work unsupervised until all checks are complete and satisfactory",
        ],
      },
    ],
    keyPoints: [
      "All new staff must have an enhanced DBS check with barred list check before working with vulnerable adults or children",
      "Two professional references must be obtained and must include the most recent employer — personal or character references do not satisfy this requirement",
      "Identity and right to work checks must be completed before the first day of employment",
      "Staff must not begin work with service users before satisfactory DBS disclosure is received — a risk-assessed supervised start may be permitted in exceptional circumstances with written manager authorisation",
      "All pre-employment check records must be retained on the staff file and be available for CQC inspection",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 19",
      "Safeguarding Vulnerable Groups Act 2006",
      "Police Act 1997 (DBS checks)",
      "Equality Act 2010",
      "Immigration, Asylum and Nationality Act 2006 (right to work)",
    ],
    sections: [
      {
        heading: "Pre-Employment Checks",
        body: "The following checks must be completed for all new staff before they start working with service users: (1) Identity verification — valid passport or specified combination of documents. (2) Right to work in the UK — verified against original documents. (3) Enhanced DBS with barred list check — applied for without delay; a supervised start pending receipt may be agreed in writing by the Registered Manager. (4) Two employment references — one from current/most recent employer, one from a second professional. (5) Occupational health assessment — fitness for role. (6) Qualification verification — where role requires a registered professional qualification.",
      },
    ],
  },

  "wl-003": {
    purpose: "[ORGANISATION_NAME] is committed to the regular supervision and annual appraisal of all staff to support their professional development, ensure consistent care quality and identify any performance or wellbeing concerns at an early stage.",
    scope: "Applies to all staff employed by [ORGANISATION_NAME] regardless of role or hours, and to line managers responsible for conducting supervision and appraisals.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure supervision is delivered at least every 8 weeks for care staff and every 12 weeks for other staff",
          "Ensure all staff receive an annual appraisal and a Personal Development Plan",
          "Review supervision records as part of quality assurance audits",
          "Conduct supervision and appraisal for team leaders and senior staff directly",
        ],
      },
      {
        role: "Line Managers / Team Leaders",
        duties: [
          "Conduct supervision for their direct reports at the required frequency",
          "Document all supervision meetings using the approved record format",
          "Follow up on any action points from previous supervisions",
          "Refer any significant performance, wellbeing or disciplinary concerns to the Registered Manager promptly",
        ],
      },
    ],
    keyPoints: [
      "Supervision is a protected, confidential meeting between a manager and a member of staff — it should not be cancelled without rescheduling within two weeks",
      "The agenda should include: review of previous action points, current workload and wellbeing, feedback on practice and performance, learning and development needs, and any concerns or issues the staff member wishes to raise",
      "Annual appraisals must review the previous year's performance against objectives and set new objectives for the coming year aligned to the organisation's priorities",
      "Every staff member must have a Personal Development Plan (PDP) that is reviewed and updated at appraisal",
      "Supervision records are confidential but may be reviewed by the Registered Manager and CQC as evidence of quality oversight",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 18",
      "Skills for Care: Supervision in Adult Social Care",
      "Care Certificate Standard 1: Understand Your Role",
    ],
    sections: [
      {
        heading: "Supervision Format and Frequency",
        body: "Supervision must occur at least every 8 weeks for direct care staff. New staff must receive their first supervision within 4 weeks of starting. Supervision must be conducted in a private space free from interruption and must be documented on the standard supervision record form. Both the supervisor and supervisee must sign the record; the supervisee receives a copy. The agenda must cover: wellbeing and workload; practice observations feedback; any competency concerns; any personal issues affecting work; and training and development progress.",
      },
    ],
  },

  "wl-004": {
    purpose: "[ORGANISATION_NAME] is committed to creating an environment where staff feel safe and supported to raise concerns about poor practice, misconduct or any situation that may place service users or staff at risk. This policy ensures that concerns are taken seriously, investigated promptly and that staff who raise them in good faith are protected from retaliation.",
    scope: "Applies to all staff at [ORGANISATION_NAME] including agency, bank and contracted staff, and covers all concerns about standards of care, misconduct, legal or regulatory breach, financial irregularity, or cover-up of any of the above.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Act as the first point of contact for whistleblowing concerns",
          "Ensure all concerns are investigated promptly and impartially",
          "Protect staff who raise concerns from retaliation, exclusion or victimisation",
          "Escalate concerns to the provider, CQC, safeguarding or other authorities where appropriate",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Raise concerns at the earliest opportunity — not raising a concern that puts others at risk may itself be a serious matter",
          "Use the whistleblowing procedure if normal channels have been exhausted or are not appropriate",
          "Support colleagues who raise concerns in good faith",
          "Never participate in any attempt to cover up or minimise a serious concern",
        ],
      },
    ],
    keyPoints: [
      "Staff who make a protected disclosure in good faith cannot be dismissed or subjected to detriment as a result — this is a right under the Public Interest Disclosure Act 1998",
      "Concerns can be raised internally (Registered Manager or Provider), externally (CQC, NHS England, local authority) or through independent advice (Protect, formerly Whistleblowing UK)",
      "Whistleblowing is distinct from a personal grievance — it concerns matters of public interest, not a personal dispute",
      "Anonymous concerns will be investigated as far as possible, but it is always better to be identified if the person feels safe to do so",
      "The Freedom to Speak Up approach encourages all staff to raise concerns early and informally where possible, before escalating to formal channels",
    ],
    legislation: [
      "Public Interest Disclosure Act 1998",
      "Employment Rights Act 1996 (as amended)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Raising a Concern",
        body: "A concern should normally be raised first with the immediate line manager. If the concern involves the line manager, or the line manager has failed to act, the concern should be taken to the Registered Manager. If the concern involves the Registered Manager, or the person does not feel safe raising it internally, they may contact: the CQC (0300 061 6161); the Local Authority Safeguarding Adults Team; or seek advice from Protect (formerly Public Concern at Work, 020 3117 2520). Staff should document their concern, the date raised, and any response received.",
      },
    ],
  },

  "wl-005": {
    purpose: "[ORGANISATION_NAME] is committed to processing personal and special category data lawfully, fairly and transparently, in compliance with UK GDPR and the Data Protection Act 2018. This policy sets out the legal basis for data processing, the rights of data subjects and the security measures applied to protect all personal data.",
    scope: "Applies to all personal and special category data processed by [ORGANISATION_NAME], including data about service users, staff, families and other stakeholders, in whatever format.",
    responsibilities: [
      {
        role: "Registered Manager / Data Controller",
        duties: [
          "Ensure the organisation is registered with the ICO and that the registration is current",
          "Maintain a Record of Processing Activities (ROPA) as required by UK GDPR Article 30",
          "Ensure a Data Protection Impact Assessment (DPIA) is conducted for any high-risk processing",
          "Respond to data subject access requests within one month of receipt",
          "Notify the ICO of any personal data breach within 72 hours where it meets the reporting threshold",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Access personal data only to the extent necessary for their role",
          "Never share personal data with a third party without the authority to do so",
          "Report any suspected data breach or security incident to the Registered Manager immediately",
          "Complete data protection training as required and keep it up to date",
        ],
      },
    ],
    keyPoints: [
      "All processing of personal data must have a lawful basis under UK GDPR Article 6 — the most common in adult social care are: legal obligation, vital interests, legitimate interests, and contract",
      "Special category data (including health data) requires an additional condition under Article 9 — for care providers this is most commonly Article 9(2)(h): healthcare and social care purposes",
      "A privacy notice must be provided to every service user and staff member at the point their data is collected, explaining how their data will be used",
      "Personal data must not be retained beyond its identified retention period — a data retention schedule must be maintained",
      "In the event of a data breach, the 72-hour reporting window to the ICO cannot be extended — early internal reporting is essential",
    ],
    legislation: [
      "UK General Data Protection Regulation (UK GDPR)",
      "Data Protection Act 2018",
      "Human Rights Act 1998 — Article 8",
      "ICO: Data Protection Guidance for Health and Social Care",
      "Network and Information Systems (NIS) Regulations 2018 (for digital systems)",
    ],
    sections: [
      {
        heading: "Data Subject Rights",
        body: "Under UK GDPR, data subjects have the following rights: (1) Right to be informed — provided via a privacy notice. (2) Right of access — data subject access requests must be responded to within one calendar month. (3) Right to rectification — inaccurate data must be corrected promptly. (4) Right to erasure — 'right to be forgotten', subject to legal retention requirements. (5) Right to restrict processing. (6) Right to data portability. (7) Right to object — including to direct marketing. All requests must be documented and responded to within the statutory timeframe.",
      },
      {
        heading: "Data Breach Response",
        body: "A personal data breach is any security incident that results in accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. On discovering a breach: (1) Contain the breach — take immediate steps to limit the damage. (2) Assess the risk — does the breach need to be reported to the ICO? (High risk to rights and freedoms = report within 72 hours.) (3) Notify individuals — if the breach poses a high risk, affected individuals must be notified without undue delay. (4) Document the breach — record the facts, effects and remedial action taken, even if not reportable.",
      },
    ],
  },

  "wl-006": {
    purpose: "[ORGANISATION_NAME] is committed to accurate, contemporaneous and secure record keeping across all aspects of the service. This policy sets out the standards for creating, maintaining, storing, accessing and disposing of records, in compliance with legal requirements and best practice.",
    scope: "Applies to all records created or held by [ORGANISATION_NAME], including care records, staff records, financial records, governance records and any other documented information in any format.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff understand and comply with record keeping standards",
          "Maintain a data retention schedule and ensure records are disposed of securely at the end of their retention period",
          "Ensure record keeping is included in induction training and is regularly audited",
          "Respond to data subject access requests in a timely manner",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Record all care interventions contemporaneously and accurately",
          "Never alter or falsify a record — corrections must be made by a single line through the error with the date, time and the corrector's initials",
          "Store records securely and never leave care records accessible to unauthorised persons",
          "Report any concern about the completeness or accuracy of records to the manager",
        ],
      },
    ],
    keyPoints: [
      "Records must be accurate, legible, contemporaneous, and contain sufficient detail to give a clear account of care delivered — 'not recorded = not done' is not an acceptable standard",
      "Records must never be falsified or altered retrospectively — doing so may constitute fraud and a safeguarding concern",
      "Electronic records must be accessed using individual login credentials — shared logins are prohibited",
      "Records must be stored securely: paper records in locked cabinets; electronic records behind password-protected systems",
      "The retention schedule sets minimum periods for which records must be kept — care records for adults must be retained for a minimum of 8 years after the last entry",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 17",
      "UK GDPR and Data Protection Act 2018",
      "Limitation Act 1980 (retention periods)",
      "NHS Records Management Code of Practice (contextually relevant)",
      "Freedom of Information Act 2000 (where applicable)",
    ],
    sections: [
      {
        heading: "Standards for Care Records",
        body: "All care record entries must be: written or made at the time of or immediately after the care interaction; signed with the staff member's full name and professional role; dated and timed; legible (if handwritten) or accurate (if electronic); free from jargon or abbreviations not listed in the organisation's approved abbreviations list; factual and objective — observations not interpretations; and complete — all relevant information must be recorded, not just positive events.",
      },
      {
        heading: "Data Retention and Secure Disposal",
        body: "Records must be retained for minimum periods as follows: adult care records — 8 years from last entry (or 3 years after death if longer); children's records — until age 25 (or 26 if care was received at age 17); staff personnel records — 6 years after employment ends; financial records — 7 years. At the end of the retention period, paper records must be shredded using a cross-cut shredder; electronic records must be permanently deleted using approved data destruction methods. Disposal must be documented.",
      },
    ],
  },

  "wl-007": {
    purpose: "[ORGANISATION_NAME] is committed to maintaining the continuity of care to service users during any disruption, emergency or crisis. This policy and the associated Business Continuity Plan set out the arrangements to sustain essential services during unexpected events.",
    scope: "Applies to all services delivered by [ORGANISATION_NAME] and to all staff with a role in the business continuity response, including senior managers and all operational staff.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Maintain and annually review the Business Continuity Plan (BCP)",
          "Ensure all staff are aware of the BCP and their roles within it",
          "Invoke the BCP when a disruption occurs and lead the response",
          "Notify CQC and commissioners if there is a significant disruption to services",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Be aware of their role in the BCP and where it is located",
          "Report any developing situation that may affect business continuity to the duty manager immediately",
          "Follow emergency procedures as directed by the manager during an incident",
        ],
      },
    ],
    keyPoints: [
      "The Business Continuity Plan must be reviewed and tested at least annually — a plan that has never been tested may fail when it is needed",
      "The BCP must identify all critical services, the minimum staffing levels required, alternative arrangements and escalation contacts",
      "Common disruption scenarios requiring a BCP response include: IT failure, staff shortages (sickness outbreak, industrial action), utility failure, severe weather, fire, and infectious disease outbreaks",
      "Service users and commissioners must be notified without delay if disruption is likely to significantly affect care delivery",
      "Lessons learned from any invocation of the BCP must be documented and used to improve the plan",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12 and 17",
      "Civil Contingencies Act 2004",
      "Care Act 2014",
      "NHS England: Business Continuity Management Framework",
    ],
    sections: [
      {
        heading: "Critical Service Identification",
        body: "The Business Continuity Plan must identify the critical services that must be maintained in any disruption scenario. For [ORGANISATION_NAME], critical services include: provision of medication; personal care; nutrition and hydration; safeguarding and risk management; emergency communication. For each critical service, the BCP must specify: the minimum staffing required; the key risks to continuity; and the contingency arrangements if normal delivery is impossible.",
      },
      {
        heading: "Staff Shortage Contingency",
        body: "Staff shortages are the most common business continuity challenge in social care. Contingency measures include: a bank staff pool; an agency framework agreement with at least two agencies; an on-call rota for senior managers; a cancellation protocol prioritising which activities can be safely deferred; and mutual aid arrangements with local providers. Where staffing falls below safe minimum levels, the Registered Manager must notify commissioners and CQC and escalate to the Provider.",
      },
    ],
  },

  "wl-008": {
    purpose: "[ORGANISATION_NAME] is committed to maintaining safe staffing levels at all times and to deploying staff in a way that meets the assessed needs of service users. This policy sets out the principles for workforce planning, rota management and safe staffing.",
    scope: "Applies to all staff employed or engaged by [ORGANISATION_NAME] and to all managers responsible for workforce planning and rota management.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure staffing levels are based on a dependency and acuity assessment of current service users",
          "Review staffing levels at least monthly and whenever service user dependency changes significantly",
          "Maintain a safe staffing level policy specifying minimum staffing ratios for each shift and area",
          "Notify CQC if staffing falls below a safe minimum for a sustained period",
        ],
      },
      {
        role: "Shift Leaders / Team Leaders",
        duties: [
          "Assess the staffing level at the start of each shift and escalate to the manager if unsafe",
          "Deploy staff based on service user need and not by rota convention alone",
          "Never leave a shift short-staffed without escalating to the manager for guidance",
          "Document any staffing concern in the handover record",
        ],
      },
    ],
    keyPoints: [
      "Staffing decisions must be based on a robust dependency and acuity tool, reviewed regularly — they must not be determined by budget alone",
      "Minimum safe staffing levels must be set and documented for each shift and each area of the service",
      "Agency or bank staff must be adequately briefed before commencing a shift and must not work unsupervised until they have been assessed as competent in the relevant environment",
      "Long shifts, excessive overtime and staff working beyond their agreed hours are risk factors — the rota must be monitored to prevent unsafe working patterns",
      "Staffing levels and skill mix must be reviewed whenever there is a significant change in the dependency or acuity of the service user group",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 18",
      "Working Time Regulations 1998",
      "Care Act 2014",
      "NICE Guideline NG94: Safe Staffing for Nursing in Adult Inpatient Wards in Acute Hospitals (contextual)",
    ],
    sections: [
      {
        heading: "Dependency and Acuity Assessment",
        body: "Safe staffing levels must be derived from a formal assessment of the dependency and acuity of the service user group. The assessment tool used must consider: each service user's level of physical dependency; cognitive needs; behavioural needs; clinical complexity; and the environment and layout of the service. The minimum staffing establishment for each shift and area must be documented and signed off by the Registered Manager. This establishment must be reviewed at least every six months and immediately following any significant change in the service user group.",
      },
    ],
  },

  "wl-009": {
    purpose: "[ORGANISATION_NAME] is committed to ensuring all new staff receive a thorough induction that prepares them for their role and equips them with the knowledge, skills and values to deliver safe, effective and compassionate care. This policy also sets out the mandatory training obligations for all staff.",
    scope: "Applies to all new staff at [ORGANISATION_NAME] and to the ongoing mandatory training requirements for all staff regardless of role or tenure.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure every new staff member completes the induction programme before working unsupervised",
          "Maintain a training matrix showing the training status of every member of staff",
          "Ensure mandatory training is refreshed within the required timeframes",
          "Report any significant gap in training compliance to the Provider",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Complete all required induction and mandatory training within the specified timescales",
          "Apply learning from training in their day-to-day practice",
          "Report any training need identified through practice to their line manager",
          "Maintain their own CPD record",
        ],
      },
    ],
    keyPoints: [
      "All new care staff must complete the Care Certificate (15 Standards) within 12 weeks of starting — this is a national induction standard for health and social care",
      "Mandatory training must be refreshed within the following timescales: safeguarding adults/children (2 years); manual handling (2 years); fire safety (1 year); first aid (3 years); infection prevention and control (1 year); medication (annually if administering); MCA/DoLS (2 years)",
      "Staff must not work unsupervised until their induction and any role-specific competency assessments are complete",
      "Training records must be maintained and available for inspection by CQC",
      "Training compliance must be reviewed at every supervision and formally at the annual appraisal",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 18",
      "Skills for Care: Care Certificate Standards (2015)",
      "Skills for Care: Workforce Development Fund requirements",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "The Care Certificate",
        body: "The Care Certificate consists of 15 standards that cover the values, knowledge and skills required of everyone who works in health and social care. At [ORGANISATION_NAME], every new care worker must complete all 15 standards within their first 12 weeks. Evidence of competence must be assessed and signed off by an experienced assessor for each standard. The Care Certificate is portable — evidence from a previous employer may be accepted if it can be verified as current. The 15 standards cover: understand your role; personal development; duty of care; equality and diversity; work in a person-centred way; communication; privacy and dignity; fluids and nutrition; awareness of mental health, dementia and learning disability; safeguarding; basic life support; health and safety; handling information; infection prevention and control.",
      },
    ],
  },

  "wl-010": {
    purpose: "[ORGANISATION_NAME] is committed to managing disciplinary matters and capability concerns fairly, consistently and in compliance with employment law. This policy ensures that investigations are thorough, that staff are treated with respect, and that outcomes are proportionate to the seriousness of the matter.",
    scope: "Applies to all staff employed by [ORGANISATION_NAME]. It does not apply to self-employed contractors (who are subject to contract terms) but does apply to staff working through an agency if they are carrying out the same role as employed staff.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure disciplinary and capability matters are managed in line with this policy and Acas guidance",
          "Ensure staff are informed of the allegations against them and given a fair opportunity to respond",
          "Maintain confidentiality throughout disciplinary and capability processes",
          "Notify the DBS and professional regulatory bodies of any findings that may affect a worker's suitability",
        ],
      },
      {
        role: "Line Managers",
        duties: [
          "Address conduct or capability concerns at the earliest stage, using informal management where appropriate",
          "Document all conversations and actions taken in relation to disciplinary or capability matters",
          "Ensure the staff member is aware of the standard expected and the consequence of not meeting it",
          "Seek HR or legal advice before commencing a formal process",
        ],
      },
    ],
    keyPoints: [
      "Informal management and support are the first response to conduct or capability concerns — formal processes should only be used when informal approaches have failed or the matter is too serious for an informal approach",
      "Staff have the right to be accompanied at any formal disciplinary or capability meeting by a trade union representative or a workplace colleague",
      "An investigation must be conducted before any formal disciplinary hearing — the investigator must be separate from the panel hearing the case",
      "Dismissal is the appropriate outcome only for gross misconduct or persistent failure to improve following previous warnings",
      "Any decision to dismiss or impose a final written warning must be reviewed by the Provider before being communicated",
    ],
    legislation: [
      "Employment Rights Act 1996",
      "Acas Code of Practice on Disciplinary and Grievance Procedures",
      "Equality Act 2010",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Safeguarding Vulnerable Groups Act 2006 (DBS referrals)",
    ],
    sections: [
      {
        heading: "The Disciplinary Process",
        body: "Stage 1 — Informal: where conduct or capability concerns are minor, the line manager addresses these informally through a management conversation, documenting the discussion and agreed improvement. Stage 2 — Formal Investigation: where informal management fails or the matter is serious, a formal investigation is commissioned. The investigating manager gathers evidence and produces an investigation report. Stage 3 — Formal Hearing: if the investigation establishes a case to answer, the staff member is invited to a formal hearing with at least 48 hours' written notice. They must be informed of the allegations, their right to be accompanied, and their right to see the evidence. Stage 4 — Outcome: verbal warning, written warning, final written warning, or dismissal (for gross misconduct). The staff member has a right to appeal any formal outcome.",
      },
    ],
  },

  "wl-011": {
    purpose: "[ORGANISATION_NAME] is committed to resolving staff grievances fairly, promptly and in a manner that respects the dignity of all parties. This policy provides a clear procedure for staff to raise concerns about their employment without fear of victimisation.",
    scope: "Applies to all staff employed by [ORGANISATION_NAME] who wish to raise a formal grievance about any matter relating to their employment.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure staff are aware of the grievance procedure and their right to use it",
          "Investigate all formal grievances fairly and impartially",
          "Provide a written response to every formal grievance within 20 working days",
          "Never take action against a staff member for raising a grievance in good faith",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Attempt to resolve concerns informally with their line manager in the first instance",
          "Use the formal grievance procedure if informal resolution fails",
          "Provide clear, factual information to support their grievance",
          "Not involve colleagues in a grievance investigation without their knowledge",
        ],
      },
    ],
    keyPoints: [
      "A grievance is a concern, problem or complaint that an employee raises with their employer relating to their employment",
      "Informal resolution should always be attempted first — many grievances can be resolved through a frank conversation with a line manager",
      "The staff member has the right to be accompanied at any formal grievance hearing by a trade union representative or workplace colleague",
      "A written outcome must be provided within 20 working days of the formal hearing",
      "The staff member has the right to appeal the outcome of a formal grievance to the Provider within 5 working days of receiving the outcome",
    ],
    legislation: [
      "Employment Rights Act 1996",
      "Acas Code of Practice on Disciplinary and Grievance Procedures",
      "Equality Act 2010",
    ],
    sections: [
      {
        heading: "Formal Grievance Procedure",
        body: "If informal resolution fails: (1) The staff member submits a written grievance statement to the Registered Manager, setting out the nature of the concern and the outcome they are seeking. (2) The Manager acknowledges the grievance within 5 working days and sets a date for a formal hearing. (3) The Manager investigates and meets with the staff member (who may be accompanied). (4) A written outcome is provided within 20 working days. (5) If the staff member is dissatisfied, they may appeal to the Provider within 5 working days. (6) The Provider's decision is final.",
      },
    ],
  },

  "wl-012": {
    purpose: "[ORGANISATION_NAME] is committed to supporting staff wellbeing and to managing absence in a fair, consistent and compassionate manner that balances the needs of the service with the needs of individual staff members.",
    scope: "Applies to all staff employed by [ORGANISATION_NAME] and to all managers responsible for absence monitoring and management.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Monitor absence levels using a trigger system (e.g. Bradford Factor or equivalent)",
          "Ensure return to work interviews are conducted after every absence episode regardless of duration",
          "Manage long-term sickness in line with the occupational health referral pathway",
          "Report significant absence levels to the Provider",
        ],
      },
      {
        role: "Line Managers",
        duties: [
          "Conduct a return to work interview with every member of staff following every absence episode",
          "Document all return to work interviews and any agreed support measures",
          "Refer to occupational health when a staff member has been absent for four or more consecutive weeks",
          "Contact absent staff by telephone or letter at agreed intervals during long-term absence",
        ],
      },
    ],
    keyPoints: [
      "A return to work interview must be conducted following every absence episode, however short — this is the single most effective tool for managing absence",
      "Staff must notify their line manager or the duty manager of their absence before the start of their shift",
      "Trigger points for formal absence management action: any absence exceeding 3 separate episodes in a rolling 12-month period, or any single absence lasting more than 4 weeks",
      "Long-term sick leave requires compassionate, structured management with regular supportive contact and, where appropriate, occupational health involvement",
      "Where a medical condition amounts to a disability under the Equality Act 2010, [ORGANISATION_NAME] must make reasonable adjustments before considering any action",
    ],
    legislation: [
      "Employment Rights Act 1996",
      "Statutory Sick Pay provisions",
      "Equality Act 2010 (disability and reasonable adjustments)",
      "Health and Safety at Work etc. Act 1974",
      "Acas: Managing Absence Guidance",
    ],
    sections: [
      {
        heading: "Return to Work Interview",
        body: "A return to work interview must be conducted face to face (or by video call if remote working) by the line manager on the first day the staff member returns to work. The interview must cover: a welcome back; the reason for absence and whether any workplace factor contributed to it; whether the staff member is fully fit to return; any reasonable adjustments needed; whether a GP or occupational health referral is required; and any pattern of concern. The interview must be documented on the standard return to work form, signed by both parties, and retained on the personnel file.",
      },
    ],
  },

  "wl-013": {
    purpose: "[ORGANISATION_NAME] is committed to a culture of continuous quality improvement where all staff are empowered to identify opportunities to improve care, safety and the experience of service users. This policy sets out the quality improvement methodology and the governance structures that support it.",
    scope: "Applies to all aspects of the service delivered by [ORGANISATION_NAME] and to all staff at all levels who contribute to quality monitoring and improvement.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Lead the quality improvement programme and report progress to the Provider quarterly",
          "Ensure audit results, incidents and complaints are triangulated to identify improvement themes",
          "Maintain a quality improvement plan with named owners, timescales and evidence of impact",
          "Share quality improvement progress with service users and staff",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Participate in audits, peer reviews and quality improvement projects",
          "Report concerns about quality through the incident and feedback systems",
          "Implement changes arising from quality improvement initiatives consistently",
          "Suggest improvements through team meetings and supervision",
        ],
      },
    ],
    keyPoints: [
      "Quality improvement must be driven by evidence — audit data, incident trends, complaints and service user feedback must be synthesised to identify priorities",
      "The PDSA (Plan-Do-Study-Act) cycle is the primary improvement methodology — small tests of change are preferred to large-scale redesign",
      "Every quality improvement initiative must have a clear aim, measurable indicators of success and a defined review date",
      "Improvement must involve service users and frontline staff — those closest to the work have the best insights",
      "Quality improvement must be embedded in governance — it is not a separate activity but integral to every meeting and review process",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 17",
      "Care Act 2014",
      "CQC: Well-Led Framework",
      "NHS England: Quality Improvement Frameworks (contextual)",
    ],
    sections: [
      {
        heading: "The PDSA Quality Improvement Cycle",
        body: "Plan: identify the problem or improvement opportunity, set a clear aim and measure, plan a small-scale test. Do: carry out the test in a limited area or with a small group. Study: analyse the data and feedback from the test — did it work? What were the unintended consequences? Act: if the test worked, implement more widely; if it did not, abandon or revise and re-test. PDSA cycles are deliberately small and iterative — a rapid sequence of small tests is more effective than one large change.",
      },
    ],
  },

  "wl-014": {
    purpose: "[ORGANISATION_NAME] is committed to managing information assets securely and responsibly in accordance with Caldicott Principles, UK GDPR and applicable information governance standards. This policy sets out the organisation's information governance framework and the obligations of all staff.",
    scope: "Applies to all information held or processed by [ORGANISATION_NAME], in any format, including paper, electronic, verbal and visual information about service users, staff and the organisation.",
    responsibilities: [
      {
        role: "Registered Manager / Caldicott Guardian",
        duties: [
          "Act as the senior responsible person for information governance",
          "Ensure all staff complete information governance training annually",
          "Oversee the Data Protection Impact Assessment process for new systems",
          "Respond to Freedom of Information requests (where applicable) within 20 working days",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Access information only on a need-to-know basis",
          "Never share service user or staff information with unauthorised third parties",
          "Report any information governance breach immediately",
          "Complete information governance training annually",
        ],
      },
    ],
    keyPoints: [
      "The Caldicott Principles require that personal data about service users is held and shared only when there is a clear justification and when sharing is proportionate to the purpose",
      "The minimum necessary principle means that only the information needed for the specific purpose should be shared or accessed",
      "Information governance training must be completed by all staff annually — it is not optional",
      "All portable devices used to access or store personal data must be encrypted",
      "Clinical system access must be via individual login credentials — shared logins are a serious information governance breach",
    ],
    legislation: [
      "UK GDPR and Data Protection Act 2018",
      "Caldicott Principles (updated 2020)",
      "Freedom of Information Act 2000",
      "Computer Misuse Act 1990",
      "Network and Information Systems Regulations 2018",
    ],
    sections: [
      {
        heading: "The Caldicott Principles",
        body: "The eight Caldicott Principles guide the lawful and ethical sharing of person-identifiable information: (1) Justify the purpose. (2) Use only when necessary. (3) Use the minimum necessary. (4) Access on a need-to-know basis. (5) All should be aware of their responsibilities. (6) Comply with the law. (7) Share for the benefit of the individual or community — duty to share can be as important as the duty to protect. (8) Inform individuals of how their data is used. Every decision to share or not share personal data must be justifiable against these principles.",
      },
    ],
  },

  "wl-015": {
    purpose: "[ORGANISATION_NAME] is committed to creating and maintaining a workplace free from discrimination, harassment and victimisation, where all staff are treated with dignity and respect and where equality of opportunity is actively promoted in all employment practices.",
    scope: "Applies to all aspects of employment at [ORGANISATION_NAME], including recruitment, promotion, training, pay, terms and conditions, and all employment decisions.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Investigate all complaints of discrimination, harassment or victimisation promptly and impartially",
          "Take prompt disciplinary action against any staff member found to have discriminated, harassed or victimised a colleague",
          "Conduct equality impact assessments on significant HR policy decisions",
          "Monitor recruitment, retention and development data for evidence of inequality",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Treat all colleagues with dignity and respect regardless of their protected characteristics",
          "Challenge discriminatory behaviour or language when they witness it",
          "Report any equality concern through the grievance procedure or directly to the Registered Manager",
          "Cooperate with any investigation into an equality complaint",
        ],
      },
    ],
    keyPoints: [
      "Harassment related to a protected characteristic is unlawful under the Equality Act 2010 — it is unwanted conduct that has the purpose or effect of violating a person's dignity or creating an intimidating, hostile, degrading, humiliating or offensive environment",
      "Third-party harassment (harassment of a staff member by a service user or visitor) is also a management responsibility — staff must be protected from repeated harassment by third parties",
      "A pay gap analysis must be conducted annually if [ORGANISATION_NAME] employs 250 or more staff",
      "Adjustments to working arrangements or the physical environment must be made for disabled staff where reasonable",
      "All staff must complete equality and diversity training at induction and at least every two years",
    ],
    legislation: [
      "Equality Act 2010",
      "Human Rights Act 1998",
      "Employment Rights Act 1996",
      "Acas: Equality and Discrimination: Understand the Basics",
    ],
    sections: [
      {
        heading: "Dealing with Harassment and Bullying",
        body: "Any staff member who experiences or witnesses harassment or bullying must report it to the Registered Manager or use the grievance procedure. The manager will investigate promptly and confidentially. Where harassment by a service user or visitor is reported, the manager will: acknowledge and document the report; assess the risk to the staff member; implement protective measures (e.g. change of assignment, warning to the service user, safeguarding referral where indicated); and follow up with the staff member to confirm the measures are effective. Staff must never be required to continue working in a situation where they are being subjected to harassment without management action.",
      },
    ],
  },

  "wl-016": {
    purpose: "[ORGANISATION_NAME] is committed to the continuous learning and professional development of all staff, recognising that a skilled, motivated and well-supported workforce is the foundation of high-quality care. This Learning and Development Strategy sets out the organisation's approach to identifying and meeting learning needs across all staff groups.",
    scope: "Applies to all staff employed by [ORGANISATION_NAME] regardless of role, hours or tenure.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Conduct an annual training needs analysis at organisational and individual level",
          "Maintain a training budget and allocate it equitably across all staff groups",
          "Ensure development opportunities are available and accessible to all staff",
          "Evidence investment in workforce development in the annual quality account",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Engage actively with learning and development opportunities",
          "Apply learning from training in their practice and share learning with colleagues",
          "Discuss their development needs at supervision and appraisal",
          "Maintain their own CPD record",
        ],
      },
    ],
    keyPoints: [
      "Every staff member must have a Personal Development Plan (PDP) linked to their annual appraisal and aligned to the organisation's improvement priorities",
      "Access to learning and development must be equitable — part-time staff, bank staff and those from minority groups must have the same access as full-time, permanent employees",
      "Workforce development investment builds staff capability, reduces turnover and improves the quality of care — it is not a luxury",
      "Career pathways must be visible and supported — staff who wish to progress should be actively supported to do so",
      "Learning must be evaluated for impact — training completed must translate to improved practice",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 18",
      "Skills for Care: Workforce Development Strategy",
      "Care Act 2014",
      "Apprenticeships, Skills, Children and Learning Act 2009",
    ],
    sections: [
      {
        heading: "Training Needs Analysis",
        body: "An organisational training needs analysis (TNA) must be conducted annually. The TNA process involves: reviewing mandatory training compliance for each staff member; reviewing learning from incidents, complaints and audits to identify skills gaps; reviewing staff appraisals and PDPs for development needs; considering any new regulatory requirements or changes to practice standards; and assessing the needs of new staff groups or service developments. The TNA produces the annual training plan, which specifies what training will be delivered, to whom, by when, and how it will be evaluated.",
      },
    ],
  },

  "wl-017": {
    purpose: "[ORGANISATION_NAME] is committed to maintaining full compliance with its CQC registration and to meeting all statutory notification and reporting requirements. This policy sets out the arrangements for maintaining CQC registration, preparing for inspections and meeting ongoing compliance obligations.",
    scope: "Applies to the Registered Provider, Registered Manager and all staff with responsibilities for regulatory compliance and CQC notification submissions.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Notify CQC of all notifiable incidents within the required statutory timeframes",
          "Ensure all CQC-required documentation is current, accurate and accessible",
          "Lead the preparation for CQC inspections and be the primary CQC contact",
          "Notify CQC of any changes to registration, including change of manager, location or regulated activities",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Understand that CQC is a statutory regulator and has the right to inspect the service at any time",
          "Cooperate fully with CQC inspectors and be willing to speak openly and honestly about the service",
          "Ensure records and evidence of practice are contemporaneous and accurate at all times",
        ],
      },
    ],
    keyPoints: [
      "CQC Regulation 18 notifications must be submitted promptly — the timeframe is within 24 hours for urgent notifications (deaths, serious injuries, allegations of abuse) and within 28 days for other notifications",
      "The Well-Led key question assesses the effectiveness of governance, quality assurance and regulatory compliance — CQC inspectors will look for evidence of systematic oversight, not just policy documents",
      "The Provider Information Return (PIR) must be submitted accurately and on time when requested by CQC",
      "Staff must never mislead, obstruct or be dishonest with CQC inspectors — this is a Fit and Proper Person requirement",
      "The Registered Manager is personally accountable to CQC for the day-to-day management of the regulated activity",
    ],
    legislation: [
      "Health and Social Care Act 2008",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Quality Commission (Registration) Regulations 2009",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 17 (Good Governance)",
    ],
    sections: [
      {
        heading: "CQC Notification Requirements",
        body: "Under Regulation 18 of the Regulated Activities Regulations, [ORGANISATION_NAME] must notify CQC without delay (and within 24 hours for urgent matters) of: the death of a service user; a serious injury to a service user; abuse or allegations of abuse; events affecting the ability to carry on the regulated activity; the deprivation of liberty of a service user; and certain events relating to the Registered Manager. A 28-day notification is required for: changes in registration details; and other specified events. All notifications must be submitted through CQC's online notification system and a copy retained in the governance files.",
      },
    ],
  },

  "wl-018": {
    purpose: "[ORGANISATION_NAME] is committed to ensuring that the Registered Manager meets and maintains the fitness requirements for the role, exercises clear accountability and discharges their statutory responsibilities with integrity, transparency and competence.",
    scope: "Applies to the Registered Manager of [ORGANISATION_NAME] and to the Provider who holds ultimate accountability for the fitness and performance of the Registered Manager.",
    responsibilities: [
      {
        role: "Provider",
        duties: [
          "Ensure the Registered Manager meets the Fit and Proper Person requirements before appointment and on an ongoing basis",
          "Conduct annual appraisal of the Registered Manager and provide appropriate support and challenge",
          "Notify CQC of any change in the Registered Manager within 28 days",
          "Hold the Registered Manager to account through regular governance reporting",
        ],
      },
      {
        role: "Registered Manager",
        duties: [
          "Meet and maintain all legal and regulatory requirements for the role",
          "Notify the Provider and CQC of any matter that may affect their fitness to manage",
          "Maintain continuing professional development appropriate to the role",
          "Act with integrity, honesty and transparency in all dealings with the regulator and stakeholders",
        ],
      },
    ],
    keyPoints: [
      "The Registered Manager is personally accountable to CQC for the safe and effective management of the regulated activity — this accountability cannot be wholly delegated",
      "The Registered Manager must meet the Fit and Proper Person requirements under Regulation 5: they must not be bankrupt, prohibited from acting as a director, found guilty of relevant offences, or placed on the DBS barred list",
      "The Registered Manager must notify CQC if they are going to be absent for more than 28 consecutive days and must appoint a temporary manager",
      "The Registered Manager must have the qualifications, skills, experience and health to manage the regulated activity — including a level 5 diploma or equivalent in health and social care management (or be working towards it)",
      "CQC will assess the Registered Manager's leadership through inspection evidence including staff testimony, governance records and service outcomes",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 7 (Requirements Relating to Registered Managers)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 5 (Fit and Proper Persons: Directors)",
      "Care Quality Commission (Registration) Regulations 2009",
      "Health and Social Care Act 2008",
    ],
    sections: [
      {
        heading: "Fit and Proper Person Requirements",
        body: "Under Regulation 7, the Registered Manager must: be of good character; have the qualifications, competence, skills and experience to manage the regulated activity; be able to supply satisfactory information and supporting documentation relating to their good character; have full-time or part-time capacity to manage the regulated activity; and not be prohibited from holding the role by law. The Provider must carry out relevant checks before appointment and must satisfy themselves on an ongoing basis that these requirements continue to be met.",
      },
    ],
  },
};
