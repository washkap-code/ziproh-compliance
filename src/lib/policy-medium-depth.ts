/**
 * Medium-depth policy content for high-priority non-flagship policies.
 * These are the 5 policies most frequently scrutinised by CQC inspectors
 * after the 10 comprehensive flagship documents.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// WL-004  Whistleblowing (Raising Concerns) Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL004_CONTENT: DocumentContent = {
  title: "Whistleblowing (Raising Concerns) Policy",
  policyId: "WL-004",
  version: "3.4",
  effectiveDate: "2026-03-05",
  reviewDate: "2027-03-05",
  approvedBy: "Registered Manager",
  scope: "All staff, volunteers, agency workers, and contractors working for or on behalf of [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a Freedom to Speak Up (FTSU) Guardian or designated lead is in post.",
        "Investigate all disclosures made under this policy promptly and thoroughly.",
        "Report substantiated concerns to CQC or other relevant bodies.",
        "Maintain a confidential whistleblowing log and review annually.",
        "Protect staff who raise concerns from any form of detriment or victimisation.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Raise genuine concerns about malpractice, harm, or wrongdoing without delay.",
        "Use the procedure set out in this policy in the first instance.",
        "Cooperate with any investigation arising from a disclosure.",
        "Never discourage others from raising concerns.",
      ],
    },
    {
      role: "Freedom to Speak Up Guardian / Designated Lead",
      duties: [
        "Act as the first point of contact for staff raising concerns.",
        "Maintain confidentiality and the identity of the disclosing worker.",
        "Escalate concerns that cannot be resolved internally to the appropriate authority.",
        "Provide feedback to the person who raised the concern on the outcome.",
      ],
    },
  ],
  legislation: [
    "Public Interest Disclosure Act 1998 (PIDA) — primary legislation protecting whistleblowers",
    "Employment Rights Act 1996, ss 47B and 103A — protection against detriment and unfair dismissal",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Care Act 2014 — duty to raise safeguarding concerns",
    "NHS and CQC Freedom to Speak Up guidance (2019 and ongoing)",
  ],
  definitions: [
    { term: "Qualifying Disclosure", definition: "Information disclosed in good faith that the worker reasonably believes tends to show malpractice, danger, illegality, breach of legal obligation, miscarriage of justice, concealment of wrongdoing, or risk to the environment (PIDA 1998 s43B)." },
    { term: "Protected Disclosure", definition: "A qualifying disclosure made to an employer, prescribed person, or the media (in limited circumstances) that attracts statutory protection under PIDA 1998." },
    { term: "Detriment", definition: "Any act or deliberate failure to act that places the worker at a disadvantage — including dismissal, demotion, disciplinary action, harassment, or exclusion — because they made a protected disclosure." },
    { term: "Freedom to Speak Up Guardian (FTSU)", definition: "A designated individual responsible for supporting staff to raise concerns and ensuring the organisation learns from them. Required in NHS trusts; recommended for all regulated care services." },
    { term: "Prescribed Person", definition: "Bodies designated by law to receive protected disclosures, including CQC, the Health and Safety Executive, and the Information Commissioner's Office." },
  ],
  sections: [
    {
      title: "Purpose and Commitment",
      body: "[ORGANISATION_NAME] is committed to the highest standards of openness, probity, and accountability. We recognise that staff are often the first to witness poor practice, unsafe conditions, or dishonest behaviour. This policy exists to encourage and enable staff to raise concerns early — before they escalate into serious harm — without fear of reprisal.\n\nThis policy applies to concerns raised in the public interest about the conduct of [ORGANISATION_NAME], its staff, contractors, or third parties acting on its behalf. It is distinct from a personal grievance (which is handled under the Grievance Policy) and from a complaint by a service user or family member.",
      warningBox: "Victimisation of any worker for raising a genuine concern under this policy is a serious disciplinary offence and may constitute automatic unfair dismissal under the Employment Rights Act 1996 s103A. Any manager found to have deterred, penalised, or victimised a whistleblower will face disciplinary action up to and including dismissal.",
    },
    {
      title: "What Concerns Can Be Raised",
      body: "Staff should raise concerns where they reasonably believe (in good faith) that one of the following has occurred, is occurring, or is likely to occur:",
      bulletPoints: [
        "A criminal offence, including fraud, financial irregularity, or theft.",
        "A danger to the health or safety of service users, staff, or the public.",
        "A breach of a legal obligation, regulatory requirement, or CQC fundamental standard.",
        "A miscarriage of justice or concealment of wrongdoing.",
        "Abuse, neglect, or mistreatment of service users.",
        "Gross misconduct by a colleague, manager, or senior leader.",
        "Systemic failures in care quality that management have failed to address.",
      ],
      legalBox: "A worker does not need proof before raising a concern — they need only a reasonable belief that the concern is well-founded. Raising a concern that turns out to be wrong is not a disciplinary matter, provided the disclosure was made in good faith and not for personal gain.",
    },
    {
      title: "How to Raise a Concern — Internal Procedure",
      body: "Concerns should normally be raised using the following stepped approach. There is no obligation to exhaust internal routes before contacting an external prescribed person if the concern is serious or urgent.",
      procedure: [
        "Step 1 — Speak to your line manager. Explain your concern clearly, including what you have observed and when. If you feel unable to approach your line manager, go to Step 2.",
        "Step 2 — Contact the Freedom to Speak Up Guardian or Designated Whistleblowing Lead. This person will maintain confidentiality and advise you on next steps. Contact details are displayed on staff noticeboards.",
        "Step 3 — Contact the Registered Manager or Director. If the concern involves your line manager or the FTSU Guardian, contact the next level of management directly.",
        "Step 4 — Contact CQC directly. You can raise a concern with CQC at any time by telephone (03000 616161) or online at cqc.org.uk/give-feedback-on-care. CQC is a prescribed person under PIDA 1998.",
        "Step 5 — Escalate to a prescribed person or, as a last resort, to the media. Further escalation is appropriate only where internal and CQC routes have failed and the matter is of exceptional public interest.",
      ],
      practiceBox: "You can raise a concern anonymously. However, providing your name makes it easier to investigate thoroughly, provide feedback, and protect you. Where a concern is raised anonymously, [ORGANISATION_NAME] will still investigate and take appropriate action where possible.",
    },
    {
      title: "Investigation and Feedback",
      body: "All disclosures will be acknowledged within 5 working days. The Registered Manager or FTSU Guardian will assess the concern and decide on the appropriate level of investigation. The investigation will be conducted independently of those subject to the concern wherever possible.\n\nThe person who raised the concern will be kept informed of progress, subject to the constraints of confidentiality relating to other parties. A written outcome will be provided within 28 days, or a progress update if the investigation is likely to take longer.\n\nAll whistleblowing concerns, investigations, and outcomes will be recorded in the confidential Whistleblowing Log held by the Registered Manager. This log is reviewed at least annually to identify patterns and inform quality improvement.",
    },
    {
      title: "Protection from Detriment",
      body: "[ORGANISATION_NAME] guarantees that no worker who makes a protected disclosure will suffer any detriment as a result. This protection applies regardless of whether the concern is upheld, provided it was made in good faith.\n\nProtection covers: dismissal; selection for redundancy; demotion; disciplinary action; denial of promotion or training; harassment; exclusion or ostracism. If a worker believes they have been subjected to detriment following a disclosure, they should report this immediately to the FTSU Guardian, the Registered Manager, or directly to an employment tribunal.",
      warningBox: "If a concern is raised maliciously, in bad faith, or primarily for personal gain, the whistleblowing protections under PIDA 1998 do not apply and the matter may be dealt with under the Disciplinary Policy. However, a concern that is made in good faith but turns out to be unsubstantiated will never in itself be treated as a disciplinary matter.",
    },
    {
      title: "External Contacts and Support",
      body: "The following external bodies can receive protected disclosures and/or provide independent advice:",
      bulletPoints: [
        "Care Quality Commission (CQC) — 03000 616161 or cqc.org.uk (prescribed person for care regulation).",
        "Health and Safety Executive (HSE) — hse.gov.uk (prescribed person for health and safety concerns).",
        "Information Commissioner's Office (ICO) — 0303 123 1113 (data protection concerns).",
        "Protect (formerly Public Concern at Work) — advice line 020 3117 2520; whistleblowing.org.uk.",
        "Care Talk (anonymous reporting) — via Skills for Care or local ICB (where applicable).",
        "ACAS — for employment rights advice: 0300 123 1100.",
      ],
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-010 — Disciplinary & Capability Policy",
    "wl-011 — Grievance Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "wl-005 — Data Protection & GDPR Policy",
  ],
  appendices: [
    { title: "Appendix A — Whistleblowing Concern Form", content: "A standardised form for recording the nature of the concern, date raised, persons involved, and the raising worker's contact details (if not anonymous). Available from the Registered Manager and on the staff intranet." },
    { title: "Appendix B — List of Prescribed Persons", content: "A current list of prescribed persons under the Public Interest Disclosure (Prescribed Persons) Order 2014 is maintained by the government at gov.uk/government/publications/blowing-the-whistle-list-of-prescribed-persons-and-bodies." },
  ],
  versionHistory: [
    { version: "3.4", date: "2026-03-05", changes: "Updated Freedom to Speak Up Guardian requirements; added external contacts section; revised investigation timescales to 28 days." },
    { version: "3.3", date: "2025-06-01", changes: "Updated CQC contact details and prescribed persons order reference." },
    { version: "3.0", date: "2024-04-01", changes: "Major revision to align with FTSU national guidance and PIDA case law." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-006  Risk Assessment Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF006_CONTENT: DocumentContent = {
  title: "Risk Assessment Policy",
  policyId: "SAF-006",
  version: "4.1",
  effectiveDate: "2026-02-01",
  reviewDate: "2027-02-01",
  approvedBy: "Registered Manager",
  scope: "All care and support activities carried out by [ORGANISATION_NAME], including individual risk assessments for service users and environmental health and safety risk assessments for the workplace.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a risk assessment programme is in place and reviewed annually.",
        "Sign off all high-risk (score 15+) service user risk assessments.",
        "Ensure staff receive risk assessment training within their induction and every 3 years thereafter.",
        "Review the risk register at every monthly governance meeting.",
        "Notify CQC of significant risks under Regulation 18 where required.",
      ],
    },
    {
      role: "Senior Care Workers / Team Leaders",
      duties: [
        "Complete or review service user risk assessments on admission, after any significant event, and at the 3-monthly care review.",
        "Sign off medium-risk (score 8–14) assessments.",
        "Ensure risk management plans are communicated to all staff involved in care delivery.",
        "Report to the Registered Manager any new or emerging risks identified during care delivery.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Carry out dynamic risk assessment during care delivery and respond proportionately.",
        "Report hazards and near-misses immediately via the incident reporting system.",
        "Comply with agreed risk management plans; never deviate without authorisation.",
        "Escalate concerns about unmanaged risk to a senior colleague immediately.",
      ],
    },
  ],
  legislation: [
    "Health and Safety at Work etc. Act 1974 — general employer duty to ensure safety",
    "Management of Health and Safety at Work Regulations 1999 — explicit duty to assess and manage risks",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Manual Handling Operations Regulations 1992 (as amended)",
    "Care Act 2014 — well-being principle and safeguarding",
  ],
  definitions: [
    { term: "Hazard", definition: "Anything that has the potential to cause harm — including physical, chemical, biological, ergonomic, and psychosocial hazards." },
    { term: "Risk", definition: "The likelihood that harm from a hazard will occur, combined with the severity of that harm." },
    { term: "Risk Score", definition: "Likelihood (1–5) × Impact (1–5) = Score (1–25). Low: 1–7; Medium: 8–14; High: 15–25." },
    { term: "Dynamic Risk Assessment", definition: "The continuous process of identifying and evaluating risks during care delivery, adapting practice in real time in response to changing circumstances." },
    { term: "Positive Risk-Taking", definition: "An approach that weighs the benefits of enabling a service user to take a risk against potential harms, recognising autonomy and the right to make informed decisions under the Mental Capacity Act 2005." },
  ],
  sections: [
    {
      title: "Principles of Risk Assessment at [ORGANISATION_NAME]",
      body: "Risk assessment at [ORGANISATION_NAME] is not about eliminating all risk — it is about managing risk proportionately so that service users can live fulfilling lives with appropriate support. We embrace the principle of positive risk-taking, which recognises that an overly risk-averse approach can itself cause harm by restricting autonomy and wellbeing.\n\nAll risk assessments must be:\n• Person-centred — reflecting the individual's own wishes and tolerance of risk.\n• Proportionate — the level of assessment should match the level of risk.\n• Evidence-based — informed by observation, clinical assessment, and the person's history.\n• Reviewed — regularly and after any significant incident or change in condition.\n• Accessible — written in plain English and shared with the service user and relevant staff.",
      legalBox: "Under the Mental Capacity Act 2005, a service user with capacity has the right to make decisions about their own lives, including decisions that carry risk. Staff may not restrict this right to protect the person from risk unless they lack capacity and a best interest decision has been properly made. A blanket 'no risk' policy is not compatible with the MCA.",
    },
    {
      title: "Types of Risk Assessment",
      body: "The following types of risk assessment are used at [ORGANISATION_NAME]:",
      subSections: [
        {
          heading: "1. Individual Service User Risk Assessments",
          body: "Completed for every service user on admission. Must cover all areas of identified risk including: falls, pressure ulcers, nutrition/hydration, medication, moving and handling, behaviour that challenges, self-neglect, safeguarding, infection, and any specific health conditions. Reviewed at 3-monthly care reviews and following any significant incident or change in presentation.",
        },
        {
          heading: "2. Environmental / Workplace Risk Assessments",
          body: "Statutory risk assessments for the physical workplace, carried out by the Registered Manager or designated Health & Safety lead annually and after any significant change to the premises or activities.",
          bulletPoints: [
            "Fire risk assessment — reviewed annually; external assessment every 3 years.",
            "COSHH assessments — for all hazardous substances used in the service.",
            "Moving and handling assessment — for care activities and equipment.",
            "Display screen equipment (DSE) assessment — for staff with significant screen use.",
            "Lone working risk assessment — for all lone workers.",
          ],
        },
        {
          heading: "3. Dynamic Risk Assessment",
          body: "Continuous real-time assessment during care delivery. All staff are trained to pause and reassess risk whenever circumstances change — for example, when a service user's presentation deteriorates, during challenging weather, or when providing care in a new environment.",
          practiceBox: "Dynamic risk assessment does not replace formal written assessments — it supplements them. If a dynamic assessment identifies a new or changed risk, staff must report it so the formal written assessment can be updated.",
        },
      ],
    },
    {
      title: "Risk Scoring Matrix",
      body: "All formal risk assessments use a 5×5 scoring matrix:\n\nLikelihood Score: 1 = Very unlikely; 2 = Unlikely; 3 = Possible; 4 = Likely; 5 = Almost certain.\nImpact Score: 1 = Negligible; 2 = Minor; 3 = Moderate; 4 = Major; 5 = Catastrophic.\n\nRisk Score = Likelihood × Impact:\n• 1–7 (Low) — Document and monitor. Review at standard care review intervals.\n• 8–14 (Medium) — Document, action plan required, review monthly or sooner if situation changes. Senior care worker sign-off.\n• 15–25 (High) — Immediate action plan required. Registered Manager sign-off. Review weekly or more frequently. Consider whether CQC notification is required.",
      warningBox: "A high-risk score (15+) does not mean the activity must be prohibited. It means a robust management plan must be in place, reviewed frequently, and subject to senior oversight. Failure to complete or act upon a high-risk assessment may constitute a breach of Regulation 12 (Safe care and treatment).",
    },
    {
      title: "Risk Management Plans",
      body: "Every risk identified must have a corresponding risk management plan. This plan must specify:",
      procedure: [
        "The specific risk identified (what could go wrong and to whom).",
        "Current control measures already in place.",
        "Additional actions required and who is responsible for completing them, with a deadline.",
        "Residual risk score after controls are applied.",
        "Review date.",
        "Signatures of the assessor and (where applicable) the service user or their advocate.",
      ],
      practiceBox: "The best risk management plans are co-produced with service users. Where a service user disagrees with a proposed restriction, this must be recorded, and the least restrictive option must be adopted wherever possible.",
    },
    {
      title: "Review, Monitoring, and Learning",
      body: "Risk assessments are living documents. They must be reviewed:\n• At the 3-monthly care review (service user assessments).\n• Annually (environmental assessments).\n• Following any incident, near miss, or complaint that reveals a gap in risk management.\n• When a service user's condition or circumstances change significantly.\n• When new evidence, guidance, or legislation changes best practice.\n\nThe Risk Register is maintained by the Registered Manager and reviewed at every governance meeting. Trends and themes from incidents and near misses are analysed quarterly to identify systemic risks. Learning is shared with all staff via team meetings, supervision, and the staff notice board.",
    },
  ],
  relatedDocuments: [
    "saf-015 — Accident & Incident Reporting Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-007 — Lone Working Policy",
    "saf-010 — Moving & Handling Policy",
    "wl-001 — Governance Framework",
  ],
  appendices: [
    { title: "Appendix A — Individual Risk Assessment Template", content: "A structured template covering: name of service user; date of assessment; risk identified; likelihood score (1–5); impact score (1–5); total risk score; current controls; additional actions; residual score; review date; signatures." },
    { title: "Appendix B — Risk Register Template", content: "Organisation-level log recording all medium and high risks, responsible owner, current control status, review date, and escalation status." },
  ],
  versionHistory: [
    { version: "4.1", date: "2026-02-01", changes: "Added positive risk-taking principle; updated MCA guidance; added dynamic risk assessment section." },
    { version: "4.0", date: "2025-01-15", changes: "Full review to align with updated Management of Health and Safety at Work Regulations guidance." },
    { version: "3.8", date: "2024-03-01", changes: "Revised scoring matrix; added environmental risk assessment requirements." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-002  Recruitment & Selection Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL002_CONTENT: DocumentContent = {
  title: "Recruitment & Selection Policy",
  policyId: "WL-002",
  version: "4.8",
  effectiveDate: "2026-01-15",
  reviewDate: "2027-01-15",
  approvedBy: "Registered Manager",
  scope: "All recruitment and selection activity at [ORGANISATION_NAME], including permanent, part-time, fixed-term, bank, agency, and volunteer roles. All persons involved in recruitment decisions must be familiar with this policy.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all pre-employment checks are completed before a new recruit commences employment.",
        "Maintain a Single Central Record (SCR) of all pre-employment checks.",
        "Ensure at least one member of each interview panel is trained in safer recruitment.",
        "Verify overseas applicants' right to work documents and relevant overseas checks.",
        "Report to CQC if a recruited person is subsequently barred or found to be unsuitable.",
      ],
    },
    {
      role: "HR / Recruiting Manager",
      duties: [
        "Advertise all vacancies openly and fairly, complying with equality legislation.",
        "Shortlist candidates against objective, role-relevant criteria only.",
        "Arrange and conduct structured interviews with at least two panel members.",
        "Verify all original identity, qualification, and right to work documents.",
        "Initiate and chase DBS applications and reference requests without delay.",
      ],
    },
    {
      role: "All Panel Members",
      duties: [
        "Apply selection criteria fairly and without discrimination.",
        "Declare any conflict of interest before participating in a selection process.",
        "Keep all application information strictly confidential.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 19 — Fit and Proper Persons (Employees)",
    "Safeguarding Vulnerable Groups Act 2006 — DBS barred list checks",
    "Equality Act 2010 — prohibition on discrimination throughout recruitment",
    "Immigration, Asylum and Nationality Act 2006 — right to work checks",
    "Rehabilitation of Offenders Act 1974 (Exceptions) Order 1975 — DBS disclosure requirements",
  ],
  definitions: [
    { term: "DBS Check", definition: "Disclosure and Barring Service check. For roles regulated by CQC, an Enhanced DBS with Barred List check is mandatory before employment commences. Enhanced DBS checks include spent and unspent convictions, cautions, reprimands, and relevant police intelligence." },
    { term: "Single Central Record (SCR)", definition: "A register maintained by the Registered Manager listing every member of staff and the pre-employment checks completed for them, including dates. Required by CQC and inspected during regulatory visits." },
    { term: "Fit and Proper Person (FPP)", definition: "Regulation 19 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 requires that only fit and proper persons are employed. This means they must be of good character, have the skills and qualifications for the role, and not be barred from working with vulnerable adults or children." },
    { term: "Safer Recruitment", definition: "An approach to recruitment that aims to prevent unsuitable people from working with children and vulnerable adults. Includes structured interview techniques designed to identify concerning attitudes and behaviours." },
    { term: "Right to Work", definition: "The legal right to work in the UK. Employers must verify documents before employment commences. Since 1 July 2021 EU citizens must provide evidence of settled or pre-settled status or another qualifying document." },
  ],
  sections: [
    {
      title: "Safer Recruitment Principles",
      body: "[ORGANISATION_NAME] is committed to the safe recruitment of staff who are appropriate, qualified, and of good character. All recruitment is carried out in a way that deters and identifies unsuitable candidates before they have access to vulnerable adults or children.\n\nSafer recruitment does not mean excessive caution or refusing all applicants with a criminal record. It means applying consistent, objective criteria, thoroughly exploring concerns identified during the process, and making informed decisions based on the full picture rather than a single factor.",
      legalBox: "Regulation 19 requires that [ORGANISATION_NAME] does not employ a person who is barred from working with vulnerable adults (or children, where applicable) under the Safeguarding Vulnerable Groups Act 2006. It is a criminal offence to knowingly employ a barred person in a regulated activity. The DBS barred list check must be completed before — not after — the person commences employment.",
    },
    {
      title: "Mandatory Pre-Employment Checks",
      body: "The following checks must be completed and verified for every new recruit before they commence employment. No exceptions. Each check must be recorded on the Single Central Record:",
      procedure: [
        "Identity verification — sight of original documents establishing identity (e.g. passport, birth certificate, driving licence). Photocopies retained on file.",
        "Right to work check — verify original documents per Home Office guidance. For EEA nationals post-Brexit, check settled or pre-settled status via the online service.",
        "Enhanced DBS check with Barred List — applied for before start date. Staff may commence work before the certificate is received only if risk-assessed and subject to supervision (not if they have previously lived or worked abroad).",
        "Two written references — at least one must be from the most recent employer. References must specifically address conduct and suitability for a role working with vulnerable adults. Verbal references are insufficient.",
        "Qualification verification — sight of original qualification certificates relevant to the role (e.g. NVQ/QCF/Diploma in Health and Social Care, nursing registration with NMC).",
        "Occupational health assessment — where relevant to the role and any declared health conditions.",
        "Professional registration check — verify NMC, HCPC, GMC, or other regulatory body registration is current and without restrictions.",
        "Overseas criminal record check — required for any applicant who has lived or worked outside the UK for 3 or more months in the past 5 years.",
      ],
    },
    {
      title: "Structured Interview Process",
      body: "All interviews must be conducted by a panel of at least two people. Interview questions must be prepared in advance and applied consistently to all candidates for the same post.\n\nSafer recruitment interview questions should include at least two questions designed to explore attitudes to vulnerable adults, safeguarding awareness, and responses to concerning situations. Example topics include: how the candidate would respond if they witnessed abuse; their understanding of professional boundaries; and what they believe distinguishes a good carer.",
      warningBox: "Do not ask questions about pregnancy, plans for children, marital status, religion, political beliefs, or any other protected characteristic under the Equality Act 2010. Questions about disability may only be asked after a job offer and only for the purposes of making reasonable adjustments. Any deviation from these rules exposes [ORGANISATION_NAME] to discrimination claims.",
    },
    {
      title: "Handling Convictions and DBS Disclosures",
      body: "An Enhanced DBS disclosure does not automatically disqualify a candidate. [ORGANISATION_NAME] will consider each disclosure on its individual merits, weighing: the nature of the offence; the date and age of the applicant at the time; whether it is relevant to the role; the pattern of behaviour; and the person's circumstances since.\n\nA written record of the decision-making process must be retained confidentially. The applicant must be given the opportunity to discuss the disclosure before a final decision is made. DBS certificates must not be retained for more than 6 months after the recruitment decision.",
      practiceBox: "The Disclosure and Barring Service Update Service allows employers to check whether a previously issued DBS certificate is still current, at no additional cost to the employee. Encourage staff to subscribe at the time of their initial DBS application to avoid the cost and delay of a full re-check in future.",
    },
    {
      title: "Agency Staff and Volunteers",
      body: "Agency staff may only be deployed by [ORGANISATION_NAME] where the agency has confirmed in writing that:\n• An Enhanced DBS with Barred List check has been carried out.\n• Two references have been obtained and are satisfactory.\n• The worker's right to work has been verified.\n• Relevant qualifications and training have been verified.\n\n[ORGANISATION_NAME] retains the right to conduct spot-checks on agency staff checks and will never accept an agency worker without written confirmation that all checks are complete. Volunteers who have unsupervised access to service users must undergo the same pre-employment checks as paid staff.",
    },
    {
      title: "Single Central Record and Record Keeping",
      body: "The Registered Manager maintains a Single Central Record that lists every member of staff (including agency and volunteers) and records the date each pre-employment check was completed and the identity of the person who verified it.\n\nThe SCR is reviewed at every governance meeting and is available for inspection by CQC without notice. Gaps in the SCR are a direct indicator of a potential breach of Regulation 19 and will be treated as a Significant Event. Pre-employment check documents (including references) are retained on individual personnel files for the duration of employment plus 10 years.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "wl-009 — Induction & Mandatory Training Policy",
    "wl-010 — Disciplinary & Capability Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
  ],
  appendices: [
    { title: "Appendix A — Single Central Record Template", content: "A spreadsheet template for recording staff details, role, start date, and the status of each pre-employment check. Columns for: identity, right to work, DBS (date applied, date received, certificate number), references (x2), qualifications, professional registration, overseas check (where applicable), occupational health." },
    { title: "Appendix B — Interview Scoring Criteria", content: "A structured score sheet for recording panel members' scores (1–5) against each interview question. Enables objective comparison of candidates and provides an auditable record of the selection decision." },
  ],
  versionHistory: [
    { version: "4.8", date: "2026-01-15", changes: "Updated right to work section for post-Brexit EEA nationals; added Update Service guidance; strengthened agency staff confirmation requirements." },
    { version: "4.5", date: "2025-03-01", changes: "Revised overseas check requirements following updated DBS guidance." },
    { version: "4.2", date: "2024-06-01", changes: "Added structured interview question guidance and discrimination warnings." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-003  Supervision & Appraisal Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL003_CONTENT: DocumentContent = {
  title: "Supervision & Appraisal Policy",
  policyId: "WL-003",
  version: "3.6",
  effectiveDate: "2026-02-20",
  reviewDate: "2027-02-20",
  approvedBy: "Registered Manager",
  scope: "All staff employed by [ORGANISATION_NAME], including part-time, bank, and fixed-term workers. Agency staff are not subject to formal supervision by [ORGANISATION_NAME] but must receive an operational briefing at the start of each shift.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a supervision and appraisal schedule is in place and complied with.",
        "Supervise all senior care staff and team leaders directly.",
        "Maintain a supervision record for each member of staff.",
        "Review supervision data at quarterly governance meetings to identify trends.",
        "Ensure all supervisors are trained in reflective supervision techniques.",
      ],
    },
    {
      role: "Team Leaders / Senior Care Workers",
      duties: [
        "Conduct regular supervision sessions for assigned staff within the required timescales.",
        "Complete and countersign supervision records promptly.",
        "Raise welfare, conduct, or competence concerns identified during supervision.",
        "Support staff to identify personal development goals and achieve them.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Attend all scheduled supervision and appraisal sessions.",
        "Engage openly and honestly in discussions about practice and wellbeing.",
        "Complete agreed development actions within the agreed timescales.",
        "Notify their supervisor if they have concerns about practice or their own wellbeing.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Skills for Care — The Code of Conduct for Healthcare Support Workers and Adult Social Care Workers",
    "Care Act 2014 — workforce development duty",
    "Health and Safety at Work etc. Act 1974 — duty of care to employees",
  ],
  definitions: [
    { term: "Formal Supervision", definition: "A planned, private, one-to-one meeting between a member of staff and their line manager or supervisor. It is structured, recorded, and focused on professional practice, wellbeing, and development." },
    { term: "Reflective Supervision", definition: "A model of supervision that encourages staff to examine their practice in depth — not just what they did, but why, how it felt, what the impact was, and what they would do differently. Particularly valuable in care work where emotional labour is significant." },
    { term: "Annual Appraisal", definition: "A comprehensive review of the previous year's performance, achievement against goals, identification of development needs, and setting of goals for the coming year. Must be conducted at least annually for every member of staff." },
    { term: "Probationary Review", definition: "A structured review conducted at the midpoint and end of a probationary period (normally 3 months and 6 months). Determines whether the member of staff has met the standards required to continue in post." },
  ],
  sections: [
    {
      title: "Why Supervision and Appraisal Matter",
      body: "Regular, high-quality supervision is one of the most effective tools available to improve care quality, protect service users, and support staff wellbeing. CQC inspectors consistently scrutinise supervision records as evidence of a well-led service.\n\nAt [ORGANISATION_NAME], supervision is not a bureaucratic exercise. It is a protected, confidential space for staff to reflect on their practice, raise concerns, receive professional support, and plan their development. Supervision protects service users by identifying and addressing practice issues early. It protects staff by providing emotional support and ensuring their concerns are heard.",
      practiceBox: "Research consistently shows that staff who receive regular, quality supervision report higher job satisfaction, lower stress, better retention, and deliver improved care outcomes. [ORGANISATION_NAME] treats supervision as a professional right, not a management tool.",
    },
    {
      title: "Frequency Requirements",
      body: "The following minimum supervision frequencies apply at [ORGANISATION_NAME]:",
      subSections: [
        {
          heading: "New and Probationary Staff",
          body: "Weekly informal check-ins during the first month. Formal supervision at the end of months 1, 3, and 6 (probationary review). Not less than monthly for the first 6 months of employment.",
        },
        {
          heading: "Established Care Staff",
          body: "Formal supervision not less than every 6 weeks (approximately 8–9 times per year). Additional supervision is provided following any significant incident, near miss, complaint, or period of absence.",
        },
        {
          heading: "Team Leaders and Senior Staff",
          body: "Formal supervision from the Registered Manager not less than every 6 weeks. Group or peer supervision may supplement but not replace individual supervision.",
        },
        {
          heading: "Annual Appraisal",
          body: "All staff receive a formal annual appraisal in addition to their regular supervision cycle. Appraisals are not a substitute for regular supervision.",
          warningBox: "If a staff member has not received supervision within the required timeframe, this must be reported to the Registered Manager. Repeated failure to supervise staff is a governance concern that may indicate insufficient management capacity and may be identified as a regulatory concern by CQC under Regulations 17 and 18.",
        },
      ],
    },
    {
      title: "Structure of a Supervision Session",
      body: "Every formal supervision session must cover the following core areas, in an order determined by the supervisor and supervisee together:",
      procedure: [
        "Wellbeing check-in — how is the member of staff? Workload, health, any personal concerns affecting work.",
        "Review of agreed actions from the last supervision — what was completed? What was not? Why?",
        "Reflection on recent practice — cases or situations the staff member wants to explore in depth.",
        "Any concerns or issues to raise — practice concerns, interpersonal issues, resource gaps.",
        "Learning and development — progress against development goals; upcoming training; appraisal preparation.",
        "Agree new actions — specific, time-bound, and achievable. Record owner and deadline.",
        "Date and time of next supervision — agreed and recorded before the session closes.",
      ],
    },
    {
      title: "Recording Requirements",
      body: "A written record of every supervision session must be completed using [ORGANISATION_NAME]'s supervision record form. The record must be signed by both parties and retained on the individual's personnel file.\n\nThe supervision record must include: date, time, and duration; participants; a summary of topics discussed; agreed actions with named owner and deadline; and any matters to be escalated to the Registered Manager.\n\nStaff have the right to add comments or corrections to supervision records. Both parties retain a copy. Records are treated as confidential and are not shared without the staff member's consent, except where concerns about harm to service users or others make disclosure necessary.",
      warningBox: "If a safeguarding concern, allegation of abuse, or significant practice concern is raised during supervision, the supervisor must immediately follow the Safeguarding Adults Policy and report to the Registered Manager, regardless of the confidentiality of the supervision session.",
    },
    {
      title: "Annual Appraisal Process",
      body: "All staff will receive a formal annual appraisal within 12 months of their last appraisal (or within 12 months of completing their probationary period for new staff). Appraisals are conducted by the staff member's direct line manager.\n\nThe appraisal must cover: reflection on the past year's performance; achievement against the previous year's goals; identification of training and development needs; agreement of SMART goals for the coming year; discussion of the staff member's career aspirations; and any changes to the role or responsibilities.\n\nAppraisal records are retained on the personnel file. Development needs identified at appraisal are fed into [ORGANISATION_NAME]'s annual Training Needs Analysis.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-009 — Induction & Mandatory Training Policy",
    "wl-010 — Disciplinary & Capability Policy",
    "wl-016 — Learning & Development Strategy",
    "saf-001 — Safeguarding Adults at Risk Policy",
  ],
  appendices: [
    { title: "Appendix A — Supervision Record Form", content: "A structured form capturing: date; supervisor and supervisee names; topics discussed (wellbeing, practice reflection, concerns, development); agreed actions (owner, deadline); next supervision date; signatures of both parties." },
    { title: "Appendix B — Annual Appraisal Form", content: "Comprehensive appraisal documentation covering performance review against previous goals, competency self-assessment, training needs, SMART goal-setting for the coming year, and manager/employee signatures." },
  ],
  versionHistory: [
    { version: "3.6", date: "2026-02-20", changes: "Added reflective supervision guidance; clarified frequency for new starters; strengthened safeguarding escalation requirement." },
    { version: "3.4", date: "2025-04-01", changes: "Updated to align with Skills for Care supervision toolkit and Code of Conduct." },
    { version: "3.0", date: "2024-01-01", changes: "Major revision following CQC inspection feedback on supervision record quality." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-015  Accident & Incident Reporting Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF015_CONTENT: DocumentContent = {
  title: "Accident & Incident Reporting Policy",
  policyId: "SAF-015",
  version: "4.3",
  effectiveDate: "2026-03-15",
  reviewDate: "2027-03-15",
  approvedBy: "Registered Manager",
  scope: "All accidents, incidents, near misses, and adverse events affecting service users, staff, visitors, and contractors at [ORGANISATION_NAME]. This policy applies at all locations and at any time during care delivery.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all incidents are reviewed within 48 hours and a root cause identified.",
        "Submit RIDDOR notifications to HSE within the required timescales.",
        "Notify CQC of notifiable incidents as required by Regulation 18.",
        "Submit statutory notifications to the local authority safeguarding team where applicable.",
        "Review incident data at monthly governance meetings to identify themes and learning.",
        "Apply the Duty of Candour (Regulation 20) for notifiable incidents.",
      ],
    },
    {
      role: "Witnessing / First-Responding Staff Member",
      duties: [
        "Provide immediate care and call for assistance as required.",
        "Report the incident verbally to the shift leader/manager immediately.",
        "Complete the Accident/Incident Report Form accurately before the end of the shift.",
        "Preserve evidence where relevant (e.g. do not tamper with a fall scene until assessed).",
      ],
    },
    {
      role: "Shift Leader / Senior on Duty",
      duties: [
        "Ensure all immediate care needs are met.",
        "Notify the Registered Manager or on-call manager promptly.",
        "Notify next of kin/emergency contacts where required.",
        "Ensure the incident report form is completed and accurate.",
      ],
    },
  ],
  legislation: [
    "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR) — statutory duty to report specified incidents to HSE",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — CQC notification of incidents",
    "Regulation 20 — Duty of Candour (notification and apology to affected persons)",
    "Health and Safety at Work etc. Act 1974 — general employer duty",
    "Care Act 2014 — safeguarding duty to report abuse and neglect",
  ],
  definitions: [
    { term: "Accident", definition: "An unplanned event that results in injury, harm, or damage — for example, a fall, medication error, or burn." },
    { term: "Incident", definition: "An unplanned event that does not result in harm but could have done (near miss), or an event involving behaviour that challenges, aggression, or a care delivery failure." },
    { term: "Near Miss", definition: "An unplanned event that did not cause harm but had the potential to do so — for example, a medication that was prepared but not administered before the error was caught." },
    { term: "RIDDOR", definition: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013. Requires employers to report specified work-related injuries, diseases, and dangerous occurrences to the Health and Safety Executive." },
    { term: "Duty of Candour", definition: "Under Regulation 20, [ORGANISATION_NAME] must be open and honest with service users (and/or their family) when something goes wrong with their care that causes or could cause moderate harm or above. This includes a verbal and written apology." },
    { term: "Notifiable Safety Incident", definition: "Under Regulation 20, any unintended or unexpected incident that occurred in the provision of a regulated activity and resulted (or could result) in death, severe harm, moderate harm, or prolonged psychological harm." },
  ],
  sections: [
    {
      title: "Reporting Culture and No-Blame Approach",
      body: "[ORGANISATION_NAME] promotes an open, no-blame reporting culture. We recognise that most incidents are the result of system failures, inadequate resources, or honest mistakes — not malicious intent. Staff who report incidents promptly and honestly are valued, not penalised.\n\nA culture of underreporting creates systemic risk. Every incident — including near misses — is an opportunity to learn and prevent future harm. Staff are expected and encouraged to report all incidents, however minor, without fear of disproportionate consequences. Managers must model this culture by responding to reports with thanks, curiosity, and constructive action — not blame.",
      practiceBox: "Never discourage a colleague from completing an incident report. If you feel pressured not to report an incident, raise this under the Whistleblowing Policy immediately. Suppression of incident reports is a serious governance failure.",
    },
    {
      title: "Immediate Response to an Incident",
      body: "The immediate priority in any incident is the safety and wellbeing of those involved:",
      procedure: [
        "Ensure the safety of the affected person and all others in the immediate vicinity.",
        "Call for assistance and administer first aid if qualified and appropriate.",
        "Call 999 if there is any risk to life or the person requires emergency medical treatment.",
        "Do not move a person who may have suffered a head, neck, or spinal injury unless there is immediate danger.",
        "Notify the Registered Manager or on-call manager by phone. Do not wait until the end of the shift.",
        "Secure and preserve any evidence (e.g. medication that may have caused a reaction; scene of a fall).",
        "Contact next of kin/emergency contacts for service user incidents, as soon as practicable.",
        "Complete the Accident/Incident Report Form before the end of the shift — do not delay.",
      ],
    },
    {
      title: "Statutory Reporting Requirements",
      body: "The following external reporting requirements apply:",
      subSections: [
        {
          heading: "RIDDOR Reports to HSE",
          body: "The following must be reported to the Health and Safety Executive under RIDDOR 2013:",
          bulletPoints: [
            "Death of a worker resulting from a work-related accident — report online within 10 days.",
            "Specified injuries to workers (e.g. fractures other than fingers/toes; amputation; serious burns) — report online within 10 days.",
            "Over-7-day incapacitation of a worker — report within 15 days.",
            "Work-related death of a member of the public — report immediately by phone: 0345 300 9923.",
            "Dangerous occurrences (near-miss events with major harm potential, listed in Schedule 2 of RIDDOR).",
          ],
          legalBox: "Failure to comply with RIDDOR is a criminal offence. Records of all RIDDOR reports must be retained for at least 3 years. Report online at hse.gov.uk/riddor.",
        },
        {
          heading: "CQC Statutory Notifications",
          body: "The following must be notified to CQC via the CQC Provider Portal within the timescales stated:",
          bulletPoints: [
            "Death of a service user — within 3 working days.",
            "Abuse or allegation of abuse — without delay.",
            "Serious injury to a service user — within 3 working days.",
            "Deprivation of liberty (unauthorised) — without delay.",
            "Theft, burglary, or misappropriation of property — within 3 working days.",
            "Events that prevent or threaten to prevent the regulated activity — without delay.",
          ],
        },
        {
          heading: "Duty of Candour (Regulation 20)",
          body: "Where a notifiable safety incident has occurred, the Registered Manager must contact the affected service user (and/or their family) in person within a reasonable timeframe. They must: tell the person what happened; express a sincere apology; explain what will be done to prevent recurrence; and follow up in writing within 10 working days.",
          warningBox: "The Duty of Candour applies even if the organisation was not at fault. An apology under Regulation 20 does not constitute an admission of liability. Failure to comply with the Duty of Candour is a breach of the fundamental standards and may result in prosecution.",
        },
      ],
    },
    {
      title: "Root Cause Analysis and Learning",
      body: "All incidents resulting in harm, all near misses, and all RIDDOR or CQC notifiable events must undergo a Root Cause Analysis (RCA). The Registered Manager leads the RCA and completes a written report within 14 days of the incident.\n\nThe RCA must identify: what happened and when; who was involved; the immediate cause; the underlying root causes; any contributing factors; lessons learned; and specific actions to prevent recurrence, with named owners and deadlines.\n\nLearning from incidents is shared with the whole staff team at monthly team meetings. A quarterly trend analysis of all incidents is presented at the governance meeting and used to update risk assessments and care plans.",
    },
    {
      title: "Incident Records and Retention",
      body: "All completed incident report forms must be filed in the Incident Log, which is maintained by the Registered Manager. The log is reviewed monthly.\n\nIncident records are retained for:\n• Adults: 10 years from the date of the incident.\n• Children: until the person's 25th birthday, or 10 years from the incident — whichever is longer.\n• Fatal incidents: indefinitely.\n\nThe Incident Log is available for inspection by CQC at any time. Staff may access their own incident reports subject to Data Protection Act 2018 subject access rights.",
    },
  ],
  relatedDocuments: [
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-006 — Risk Assessment Policy",
    "wl-001 — Governance Framework",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "wl-005 — Data Protection & GDPR Policy",
  ],
  appendices: [
    { title: "Appendix A — Accident/Incident Report Form", content: "Structured report form capturing: date, time, and location; persons involved; description of the incident; immediate action taken; witnesses; RIDDOR/CQC notification required (Y/N); root cause analysis summary; actions arising; signatures." },
    { title: "Appendix B — RIDDOR Quick Reference Card", content: "One-page reference guide listing all RIDDOR reportable injuries, diseases, and dangerous occurrences with the reporting timescale and method for each. Displayed in the staff room and available on the staff intranet." },
    { title: "Appendix C — CQC Notification Timescales", content: "Quick-reference table of all CQC statutory notification requirements under Regulations 16–20, including timescale, portal reference, and designated internal lead for each notification type." },
  ],
  versionHistory: [
    { version: "4.3", date: "2026-03-15", changes: "Updated Duty of Candour section with written follow-up timescale; added CQC notification quick-reference appendix; strengthened no-blame culture statement." },
    { version: "4.1", date: "2025-07-01", changes: "Revised RIDDOR reporting procedure to reflect updated HSE online reporting system." },
    { version: "4.0", date: "2024-04-01", changes: "Full review post-Regulation 20 case law; expanded root cause analysis section." },
  ],
};
