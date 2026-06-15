/**
 * NEW PRIORITY POLICIES — Information & Records module
 * igr-001 through igr-005
 * Added June 2026 — Priority Phase 1 expansion
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// IGR-001  Records Management Policy
// ─────────────────────────────────────────────────────────────────────────────
export const IGR001_CONTENT: DocumentContent = {
  title: "Records Management Policy",
  policyId: "IGR-001",
  version: "2.3",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All records created, received, maintained, or disposed of by [ORGANISATION_NAME] in connection with its regulated activities, including care records, HR records, financial records, governance records, and correspondence.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a Records Management Policy and Retention Schedule are in place and reviewed annually.",
        "Ensure all records are created contemporaneously, accurately, and in the required format.",
        "Oversee secure storage and controlled access to all records.",
        "Ensure records are retained for the periods specified in the Retention and Disposal Schedule.",
        "Ensure records are disposed of securely and that disposal is documented.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Create records promptly, accurately, and legibly (or electronically as required).",
        "Sign and date every entry; never alter a record without following the correction procedure.",
        "Access only the records they are authorised to view in the course of their duties.",
        "Report any loss, damage, or breach of records security immediately to their line manager.",
        "Never remove records from the premises without authorisation.",
      ],
    },
  ],
  legislation: [
    "UK General Data Protection Regulation (UK GDPR) — Articles 5, 17, 25, 32",
    "Data Protection Act 2018",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Access to Health Records Act 1990",
    "Mental Health Act 1983 Code of Practice — record-keeping requirements",
    "Care Act 2014 — assessment and care plan records",
    "NHS Records Management Code of Practice (2021) — best practice reference for social care",
  ],
  definitions: [
    { term: "Record", definition: "Any information created, received, or maintained as evidence of the organisation's activities, regardless of format (paper, electronic, audio, video, photograph)." },
    { term: "Care Record", definition: "Any record that relates to an individual service user's care, treatment, or support, including assessments, care plans, medication records, progress notes, and correspondence." },
    { term: "Vital Record", definition: "A record that is essential to the continued operation of the organisation and cannot be recreated — e.g. current care plans, medication records, financial records." },
    { term: "Retention Period", definition: "The minimum length of time a record must be kept before it may be considered for disposal, as specified in the Retention and Disposal Schedule." },
  ],
  sections: [
    {
      title: "Purpose and Principles",
      body: "Accurate, complete records are fundamental to safe, effective, person-centred care. They support continuity of care, protect service users and staff, enable governance and audit, and evidence compliance with CQC fundamental standards. [ORGANISATION_NAME] is committed to maintaining records that are:\n\n• Accurate — reflecting reality faithfully and without bias\n• Complete — containing all relevant information without significant omission\n• Timely — created as close to the event as possible; never retrospectively falsified\n• Legible — clearly written or typed, free from unexplained abbreviations\n• Attributable — signed and dated by the person making the entry\n• Secure — protected from unauthorised access, loss, or damage\n• Retained — kept for the periods required by law and best practice",
      warningBox: "Falsifying, altering, or destroying records to conceal poor care, an incident, or a complaint is a serious criminal offence and a safeguarding issue. Any member of staff found to have done so will face immediate suspension pending investigation and referral to the DBS and/or regulatory bodies.",
    },
    {
      title: "Creating Records",
      body: "All care records must be created in the electronic care management system used by [ORGANISATION_NAME]. Paper records are used only where the electronic system is unavailable; paper records must be transferred to the electronic system as soon as possible and the paper copy retained in line with the Retention Schedule.\n\nEvery record entry must include:\n• Date and time of the entry\n• The name and role of the person making the entry\n• A clear, factual, objective account of what was observed, said, done, or decided\n• Any actions taken or required\n\nStaff must never record an event before it has happened (pre-recording), alter a record to reflect a better version of events (retrospective falsification), or make entries in another person's name.",
      practiceBox: "If you did not document it, in the eyes of a CQC inspector, a lawyer, or a coroner — it did not happen. Contemporaneous records are your most powerful protection and the most powerful evidence of good care.",
    },
    {
      title: "Record Correction Procedure",
      body: "Errors in records must be corrected using the following procedure:\n\n• In electronic records: use the system's audit-trail function to make an amendment; the original entry must remain visible with a clear note that it has been amended, by whom, and why.\n• In paper records: draw a single line through the incorrect entry so it remains legible; write the correction next to or below it; sign, date, and time the correction; never use correction fluid (Tipp-Ex).",
      warningBox: "Obliterating or deleting an incorrect entry is not acceptable. The original entry must always remain readable. An unreadable correction creates a presumption that something is being hidden.",
    },
    {
      title: "Access and Security",
      body: "Access to records is granted on a need-to-know basis. The Registered Manager maintains an access control list for the electronic care system. Access privileges are reviewed quarterly and revoked immediately when a member of staff leaves or changes role.\n\nPaper records are stored in locked cabinets. Electronic records are password-protected and access is via individual user accounts. No shared log-in credentials are permitted.\n\nService users have the right to access their own records (see IGR-004: Subject Access Request Procedure). Third parties may only access service user records with valid consent, a legal power (e.g. Lasting Power of Attorney), or a lawful basis under UK GDPR.",
    },
    {
      title: "Storage and Retention",
      body: "All records are retained for the minimum periods specified in the Retention and Disposal Schedule (IGR-005). The minimum retention periods for key record types are:\n\n• Adult care records: 8 years from last date of care (or age 25 if a child was receiving care, whichever is longer)\n• Children's care records: until the person's 25th birthday (or 26th if the person was 17 when care ended)\n• HR and employment records: 6 years from end of employment\n• Accident/incident records: 3 years (adults); until age 25 (children)\n• Financial and accounting records: 6 years\n• Governance meeting minutes: 5 years\n• DBS disclosure information: not retained beyond the recruitment decision (record date and outcome only)\n\nRecords must not be destroyed before their minimum retention period has elapsed, even if storage space is at a premium.",
    },
    {
      title: "Disposal of Records",
      body: "Records due for disposal are reviewed by the Registered Manager before destruction. No record may be destroyed without authorisation.\n\nPaper records containing personal data are shredded using a cross-cut shredder or destroyed by an approved confidential waste contractor. Electronic records are deleted using an approved secure deletion method.\n\nAll disposal is recorded in the Disposal Log, which captures: record type, date range, quantity, disposal method, date of disposal, and the name of the person authorising disposal.",
    },
  ],
  monitoring: "Quarterly records audit (minimum sample of 5 active care records). Annual review of Retention and Disposal Schedule. Disposal Log reviewed six-monthly.",
  relatedDocuments: [
    "igr-002 — Confidentiality Policy",
    "igr-003 — Data Breach and Incident Response Procedure",
    "igr-004 — Subject Access Request Procedure",
    "igr-005 — Retention and Disposal Schedule",
    "gov-004 — Document Control Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IGR-002  Confidentiality Policy
// ─────────────────────────────────────────────────────────────────────────────
export const IGR002_CONTENT: DocumentContent = {
  title: "Confidentiality Policy",
  policyId: "IGR-002",
  version: "2.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All staff, volunteers, students, agency workers, and contractors who access personal, sensitive, or confidential information in the course of their work for [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all staff receive training on confidentiality at induction and annually.",
        "Ensure all contracts of employment and contractor agreements include a confidentiality clause.",
        "Investigate all reported confidentiality breaches and take proportionate action.",
        "Ensure appropriate consent processes are in place for information sharing.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Treat all information about service users as confidential and share it only on a need-to-know basis.",
        "Obtain, or check that consent exists, before sharing information about a service user with any third party.",
        "Never discuss service user information in public places, on social media, or with friends or family.",
        "Report any actual or suspected breach of confidentiality to their line manager immediately.",
        "Lock screens, secure paper records, and log out of systems when away from their workstation.",
      ],
    },
  ],
  legislation: [
    "UK General Data Protection Regulation (UK GDPR), particularly Articles 5, 6, 9, and 17",
    "Data Protection Act 2018",
    "Human Rights Act 1998, Article 8 — right to respect for private and family life",
    "Care Act 2014, s.45 — information sharing in safeguarding",
    "Health and Social Care (Safety and Quality) Act 2015 — duty to share information for care",
    "Common law duty of confidentiality",
    "Caldicott Principles (2013, updated 2020) — framework for handling patient/service user information",
  ],
  definitions: [
    { term: "Confidential Information", definition: "Information that is not in the public domain and that a reasonable person would expect to be kept private. For care providers, this includes all personal data about service users, staff, and the organisation's business affairs." },
    { term: "Personal Data", definition: "Any information that can identify a living individual, directly or indirectly. Includes names, addresses, dates of birth, care records, photographs, and identifiers such as NHS numbers." },
    { term: "Special Category Data", definition: "Personal data revealing race or ethnic origin, political opinions, religious beliefs, trade union membership, genetic or biometric data, health data, sex life or sexual orientation. Subject to stricter protection under UK GDPR." },
    { term: "Need to Know", definition: "The principle that personal information should be shared only with those people who genuinely need it to perform their role, and no more than is necessary for that purpose." },
    { term: "Caldicott Guardian", definition: "A senior person in a health or care organisation responsible for protecting the confidentiality of patient and service user information and enabling appropriate information sharing." },
  ],
  sections: [
    {
      title: "The Duty of Confidentiality",
      body: "Everyone who works in health and social care has a legal and ethical duty to respect the confidentiality of the people they care for. This duty arises from:\n\n• The common law duty of confidentiality — which has applied in medical and care settings for centuries\n• UK GDPR and the Data Protection Act 2018 — which set legal rules for processing personal data\n• Article 8 of the Human Rights Act 1998 — which protects the right to privacy\n• Professional codes of conduct — for regulated professionals (nurses, social workers, etc.)\n• Contracts of employment — which include a confidentiality clause for all [ORGANISATION_NAME] staff\n\nBreach of confidentiality can result in disciplinary action, dismissal, referral to professional regulators, ICO enforcement, civil litigation, and in serious cases, criminal prosecution.",
      warningBox: "Confidentiality applies after you leave this organisation. The duty does not end when employment ends. Information learned in the course of your employment remains confidential indefinitely.",
    },
    {
      title: "Information Sharing — When It Is Lawful",
      body: "Confidential information may be shared without consent in limited, specific circumstances. These must be assessed on a case-by-case basis:",
      bulletPoints: [
        "With consent — the service user has given clear, informed, freely-given consent to share the specific information with the named recipient. Consent must be documented.",
        "For direct care — information is shared between members of the care team (including GPs, district nurses, social workers) where it is necessary to provide care. A service user's engagement with a care service implies consent to share information within their care team.",
        "Safeguarding — where there is a serious and credible risk of harm to the service user or others, information may be shared without consent and, if necessary, with the police, local authority, or CQC. Consult the Registered Manager before sharing; in an emergency, act first and consult afterwards.",
        "Statutory duty — where the law requires disclosure (e.g. court order, CQC notification requirement, statutory safeguarding inquiry, Public Health reporting).",
        "Public interest — in rare cases where a serious crime has been or is likely to be committed. This is a high threshold and must be authorised by the Registered Manager.",
      ],
      legalBox: "The seven Caldicott Principles apply to all health and care information sharing: (1) Justify the purpose; (2) Don't use personal data unless absolutely necessary; (3) Use the minimum necessary; (4) Access on a need-to-know basis only; (5) Everyone must understand their responsibilities; (6) Understand and comply with the law; (7) The duty to share can be as important as the duty to protect.",
    },
    {
      title: "Social Media and Electronic Communications",
      body: "The use of social media in relation to service users, their families, or the organisation's business is subject to strict controls:\n\n• Staff must never post photographs, videos, or identifying information about service users on any social media platform, including private accounts.\n• Staff must never discuss service user care, incidents, or complaints on social media, even without naming the individual.\n• Staff must never contact service users through personal social media or messaging platforms (e.g. WhatsApp, Facebook Messenger) unless specifically authorised by the Registered Manager.\n• Sharing images of service users — even 'positive' images for fundraising or publicity — requires specific written consent.\n\nBreaches of this section are treated as serious misconduct and will be dealt with under the Disciplinary Policy.",
      warningBox: "CQC and the ICO have both taken action against care providers where staff misused social media in relation to service users. This has included criminal prosecution for unauthorised disclosure of personal data and regulatory action against the provider for failure to protect confidentiality.",
    },
    {
      title: "Staff Confidentiality",
      body: "Confidentiality also applies to information about staff. HR records, disciplinary matters, health information, and personal circumstances shared by staff in confidence must be treated with the same rigour as service user information. Managers must not share staff personal information with other staff, service users, or third parties without the staff member's consent or a lawful basis.",
    },
  ],
  monitoring: "Annual confidentiality training compliance check. Confidentiality breach log reviewed monthly. Quarterly spot-check audit of consent documentation in care records.",
  relatedDocuments: [
    "igr-001 — Records Management Policy",
    "igr-003 — Data Breach and Incident Response Procedure",
    "igr-004 — Subject Access Request Procedure",
    "wl-015 — Data Protection and GDPR Policy",
    "hr-003 — Staff Conduct Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IGR-003  Data Breach and Incident Response Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const IGR003_CONTENT: DocumentContent = {
  title: "Data Breach and Incident Response Procedure",
  policyId: "IGR-003",
  version: "1.9",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All personal data processed by [ORGANISATION_NAME], whether held electronically or in paper format. Applies to all staff, contractors, and system administrators.",
  responsibilities: [
    {
      role: "Registered Manager (Data Controller representative)",
      duties: [
        "Receive all breach notifications from staff and conduct an initial risk assessment within 24 hours.",
        "Decide whether the breach must be reported to the ICO within 72 hours.",
        "Notify affected individuals where required.",
        "Maintain the Data Breach Register.",
        "Ensure remedial actions are implemented promptly.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Report any actual or suspected data breach to the Registered Manager immediately — do not delay to investigate.",
        "Preserve evidence of the breach (do not delete emails, records, or system logs).",
        "Cooperate with any investigation.",
      ],
    },
  ],
  legislation: [
    "UK General Data Protection Regulation (UK GDPR), Article 33 — notification to supervisory authority within 72 hours",
    "UK GDPR, Article 34 — notification to affected individuals without undue delay",
    "Data Protection Act 2018",
    "ICO guidance: Personal data breaches (2021 and updated)",
    "Network and Information Systems (NIS) Regulations 2018 — for significant network/system incidents",
  ],
  definitions: [
    { term: "Personal Data Breach", definition: "A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored, or otherwise processed (UK GDPR Article 4(12))." },
    { term: "Notifiable Breach", definition: "A breach that is likely to result in a risk to the rights and freedoms of natural persons. Must be reported to the ICO within 72 hours of becoming aware." },
    { term: "High-Risk Breach", definition: "A breach likely to result in a high risk to the rights and freedoms of individuals. Requires notification to the affected individuals without undue delay, in addition to ICO notification." },
    { term: "Data Breach Register", definition: "A mandatory record of all personal data breaches, regardless of whether they require reporting to the ICO, including the facts, effects, and remedial action taken." },
  ],
  sections: [
    {
      title: "What Constitutes a Data Breach",
      body: "A data breach is not just a cyber attack or hacking incident. In a care setting, the most common data breaches include:",
      bulletPoints: [
        "Sending a care record, medication summary, or personal letter to the wrong person or address.",
        "Loss of a paper file, notebook, or USB drive containing personal data.",
        "Leaving care records visible on a screen in a public area or accessible to unauthorised people.",
        "Emailing personal data to a personal or incorrect email address.",
        "Unlocked filing cabinets or unsecured paper records accessed by unauthorised individuals.",
        "A staff member accessing records they are not authorised to view (curiosity browsing).",
        "A care record shared verbally with someone not part of the care team without consent.",
        "Ransomware, malware, or unauthorised access to the electronic care system.",
        "Loss or theft of a smartphone, laptop, or tablet used to access personal data.",
      ],
      warningBox: "You must report any suspected data breach immediately — even if you are not sure it is a breach. Do not investigate it yourself first. Do not delay in the hope it will resolve. The 72-hour ICO reporting clock starts from when the organisation becomes aware, not when it has fully investigated.",
    },
    {
      title: "Immediate Response Steps",
      body: "On discovering or suspecting a data breach, the following steps must be taken immediately:",
      procedure: [
        "Step 1 — Contain: Take immediate steps to limit the breach where possible. For example: recall a misdirected email, retrieve a lost document, revoke access credentials for a compromised account, isolate an infected device. Do not delay reporting while containing.",
        "Step 2 — Report: The discovering member of staff notifies the Registered Manager verbally immediately and follows this up in writing (email or incident report form) within 1 hour.",
        "Step 3 — Assess: The Registered Manager completes an initial risk assessment within 24 hours, assessing: what data was involved; whose data was affected; how many individuals; what harm could result; whether the data has been recovered or is still at risk.",
        "Step 4 — Notify the ICO (if required): If the breach is likely to result in a risk to individuals' rights and freedoms, the Registered Manager notifies the ICO within 72 hours via ico.org.uk. If notification is not required, the reason must be documented in the Data Breach Register.",
        "Step 5 — Notify affected individuals (if required): Where the breach is high risk, affected individuals are notified without undue delay in clear, plain language, explaining what happened, what data was involved, what they can do to protect themselves, and who to contact for further information.",
        "Step 6 — Investigate and remediate: A proportionate investigation is carried out to establish root cause and implement measures to prevent recurrence.",
        "Step 7 — Record: All breaches (including low-risk breaches not reported to the ICO) are recorded in the Data Breach Register.",
      ],
    },
    {
      title: "ICO Notification",
      body: "When notifying the ICO, the Registered Manager must provide:\n\n• A description of the nature of the breach\n• The categories and approximate number of individuals concerned\n• The categories and approximate number of records concerned\n• The likely consequences of the breach\n• The measures taken, or proposed, to address the breach\n\nIf a full notification cannot be made within 72 hours, an initial notification must be made within 72 hours and supplemented as information becomes available. The ICO can be notified at ico.org.uk/make-a-report or by calling 0303 123 1113.",
      legalBox: "Failure to notify the ICO of a notifiable breach within 72 hours can result in an ICO fine of up to £17.5 million or 4% of annual global turnover (whichever is higher) under the Data Protection Act 2018. The ICO takes a much more lenient view of organisations that self-report promptly and cooperate fully with investigations.",
    },
    {
      title: "Post-Breach Review and Learning",
      body: "Within 10 working days of a breach being contained, the Registered Manager conducts a formal post-breach review to identify:\n\n• The root cause of the breach\n• Whether existing controls (technical, organisational, or procedural) were adequate\n• What changes are needed to prevent recurrence\n• Whether staff training or awareness needs to be updated\n\nFindings and actions are recorded in the Data Breach Register and reported to the next governance meeting. Significant breaches (those requiring ICO notification or individual notification) are subject to a full root cause analysis.",
    },
  ],
  monitoring: "Data Breach Register reviewed monthly by Registered Manager. ICO notifications tracked. Annual data protection audit includes review of breach response procedures.",
  relatedDocuments: [
    "igr-002 — Confidentiality Policy",
    "igr-001 — Records Management Policy",
    "igr-004 — Subject Access Request Procedure",
    "wl-015 — Data Protection and GDPR Policy",
    "gov-001 — Duty of Candour Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IGR-004  Subject Access Request Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const IGR004_CONTENT: DocumentContent = {
  title: "Subject Access Request Procedure",
  policyId: "IGR-004",
  version: "1.6",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All requests by individuals (or their authorised representatives) to access personal data held by [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Receive, log, and respond to all Subject Access Requests (SARs) within the statutory 1-month timeframe.",
        "Verify the identity of the requester before disclosing any information.",
        "Identify and apply any exemptions that may apply.",
        "Ensure third-party data is redacted before disclosure where necessary.",
        "Maintain a SAR Log.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Direct any SAR received verbally, in writing, or electronically to the Registered Manager immediately.",
        "Not attempt to respond to a SAR themselves.",
        "Assist the Registered Manager in locating and compiling the requested information when directed.",
      ],
    },
  ],
  legislation: [
    "UK General Data Protection Regulation (UK GDPR), Article 15 — Right of access",
    "Data Protection Act 2018 — Schedule 2 and 3 exemptions",
    "Access to Health Records Act 1990 (for deceased persons)",
    "Mental Capacity Act 2005 — access on behalf of those lacking capacity",
    "ICO guidance: Right of access (updated 2023)",
  ],
  definitions: [
    { term: "Subject Access Request (SAR)", definition: "A request by an individual (or their authorised representative) to obtain a copy of the personal data an organisation holds about them, together with supplementary information about how and why it is processed." },
    { term: "Data Subject", definition: "The individual whose personal data is held and who is exercising their rights under UK GDPR." },
    { term: "Authorised Representative", definition: "A person acting on behalf of the data subject — such as a parent acting for a child, an attorney acting under Lasting Power of Attorney, or an advocate." },
    { term: "Third-Party Data", definition: "Personal data about individuals other than the data subject that appears in the records being disclosed. This must normally be redacted before disclosure." },
  ],
  sections: [
    {
      title: "The Right of Access",
      body: "Under Article 15 of the UK GDPR, every individual has the right to obtain a copy of the personal data [ORGANISATION_NAME] holds about them, together with: the purposes of processing; the categories of data; any recipients to whom the data has been disclosed; the retention period; and information about their other rights (erasure, rectification, restriction, objection, complaint to the ICO).\n\nThis right applies to all personal data held, including care records, correspondence, photographs (where used in care plans), call monitoring data, and records of any decisions made about the individual.",
    },
    {
      title: "Receiving and Logging a SAR",
      body: "A SAR can be made verbally, in writing (letter or email), via the organisation's website, or through a third party acting on behalf of the data subject. There is no required form — any clear request for access to personal data constitutes a SAR.\n\nAll SARs must be logged in the SAR Log immediately, capturing: date received, name of requester, nature of the request, identity verification method, and response deadline (1 calendar month from receipt).",
    },
    {
      title: "Verification of Identity",
      body: "Before releasing any personal data, the Registered Manager must be satisfied that the requester is who they claim to be:\n\n• Data subject making their own request: Verify identity using two forms of ID (e.g. passport + recent utility bill), or identity documents already held on file.\n• Parent/guardian: Verify their identity and the child's identity; confirm the parent has parental responsibility.\n• Lasting Power of Attorney (health and welfare): Verify the LPA document is registered and covers health and welfare decisions.\n• Other authorised representative: Verify a signed, dated authorisation from the data subject.\n\nWhere identity cannot be verified, the SAR must be declined and the requester told what evidence is needed.",
      warningBox: "Releasing personal data to the wrong person is a data breach. Verification is not a bureaucratic hurdle — it is a safeguard for the data subject. Do not be pressured into releasing records quickly at the expense of proper verification.",
    },
    {
      title: "Responding to a SAR",
      body: "The response must be provided within 1 calendar month of receipt (not working days — calendar days). This can be extended by a further 2 months for complex or numerous requests, but the requester must be told of the extension within the first month.\n\nThe response must be provided free of charge unless the request is manifestly unfounded or excessive, in which case a reasonable fee may be charged or the request refused (with reasons).",
      procedure: [
        "Step 1: Acknowledge the SAR in writing within 5 working days, confirming it has been received and noting the response deadline.",
        "Step 2: Verify the requester's identity as described above.",
        "Step 3: Search all relevant systems and records to locate all personal data relating to the data subject.",
        "Step 4: Review the data to identify any exemptions that apply (e.g. information that would identify a third party; information subject to legal professional privilege; data that would harm another person's health if disclosed).",
        "Step 5: Redact any third-party personal data that cannot lawfully be disclosed.",
        "Step 6: Compile the response, including a covering letter explaining the data subject's rights, and provide a copy of the data in a clear, accessible format.",
        "Step 7: Deliver the response securely (encrypted email, secure post, or in person). Do not send unencrypted personal data by standard email.",
        "Step 8: Record the date of response in the SAR Log.",
      ],
    },
    {
      title: "Exemptions",
      body: "UK GDPR and the Data Protection Act 2018 provide limited exemptions to the right of access. The most relevant for care providers are:\n\n• Third-party data: Information that identifies a third party (other than a care professional) may be withheld unless the third party consents or it is reasonable to disclose without consent.\n• Serious harm: Information may be withheld if disclosure would be likely to cause serious physical or mental harm to the data subject or another person — this is a high threshold and must be carefully documented.\n• Legal proceedings: Information subject to legal privilege may be withheld.\n• Crime prevention: Information whose disclosure would prejudice the prevention or detection of crime.\n\nExemptions must be applied narrowly. Any decision to withhold information must be justified and documented. The requester must be told that information has been withheld and the reason (but not the nature of the information if that would defeat the exemption).",
    },
  ],
  monitoring: "SAR Log reviewed monthly. All SARs responded to within 1 calendar month. Any failure to meet the deadline reported as a compliance incident.",
  relatedDocuments: [
    "igr-001 — Records Management Policy",
    "igr-002 — Confidentiality Policy",
    "igr-003 — Data Breach and Incident Response Procedure",
    "wl-015 — Data Protection and GDPR Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IGR-005  Retention and Disposal Schedule
// ─────────────────────────────────────────────────────────────────────────────
export const IGR005_CONTENT: DocumentContent = {
  title: "Retention and Disposal Schedule",
  policyId: "IGR-005",
  version: "1.4",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All records created, received, or maintained by [ORGANISATION_NAME], in any format (paper or electronic).",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain and apply this Retention and Disposal Schedule.",
        "Review the schedule annually to ensure it remains compliant with current legislation.",
        "Authorise all disposal of records.",
        "Maintain the Disposal Log.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Not destroy or delete records without the Registered Manager's authorisation.",
        "Store records securely for the periods specified.",
        "Raise any uncertainty about whether a specific record can be destroyed with the Registered Manager.",
      ],
    },
  ],
  legislation: [
    "UK GDPR, Article 5(1)(e) — storage limitation principle",
    "Data Protection Act 2018",
    "Limitation Act 1980 — limitation periods for civil litigation",
    "NHS Records Management Code of Practice (2021) — used as best practice reference for social care",
    "Employers' Liability (Compulsory Insurance) Act 1969 — 40-year retention for relevant insurance records",
  ],
  sections: [
    {
      title: "Retention Schedule",
      body: "The following minimum retention periods apply to all records held by [ORGANISATION_NAME]. Records must not be destroyed before the expiry of the relevant retention period. Where a specific legal action, complaint, or investigation is ongoing, records relevant to that matter must be retained until the matter is fully resolved, regardless of whether the normal retention period has elapsed.",
      bulletPoints: [
        "Adult care and support records (all formats): 8 years from date last used or date of last entry, whichever is later",
        "Children's care records: Until the individual's 25th birthday, or until their 26th birthday if they were 17 when care ended",
        "Records relating to a person who has died: Retain for a minimum of 8 years from date of death",
        "Medication Administration Records (MARs): 8 years from date of last entry (adult); until age 25 (children)",
        "Accident and incident reports (adult): 3 years from date of incident",
        "Accident and incident reports (child): Until the individual's 25th birthday",
        "Risk assessments: 3 years after the risk assessment becomes obsolete, or 8 years if relating to a person receiving care",
        "Recruitment records (unsuccessful applicants): 6 months after appointment decision",
        "Employment records (all): 6 years from end of employment",
        "DBS disclosure records: Record the date of disclosure, the type of check, and the decision. Destroy the disclosure certificate within 6 months (keep no copy beyond this)",
        "Payroll and financial records: 6 years from end of financial year",
        "Training records: 6 years from end of employment",
        "Supervision and appraisal records: 6 years from end of employment",
        "Governance meeting minutes: 5 years",
        "Complaints records: 6 years from resolution (adult); until age 25 (children)",
        "Duty of Candour records: 10 years",
        "CQC notification records: 10 years",
        "Health and safety records (inspection, maintenance): 5 years or life of equipment/premises",
        "Employers' liability insurance records: 40 years",
        "Subject Access Request records: 3 years from response date",
        "Data breach records: 3 years from date of breach",
        "Quality audit records: 5 years",
        "Contracts and agreements: 6 years after contract end (or 12 years if executed as a deed)",
      ],
    },
    {
      title: "Disposal Procedure",
      body: "When records reach the end of their retention period, the following disposal procedure applies:",
      procedure: [
        "Step 1: The Registered Manager reviews the record type and confirms the retention period has elapsed and no ongoing legal action, complaint, or investigation affects the record.",
        "Step 2: The Registered Manager authorises disposal and records this in the Disposal Log.",
        "Step 3: Paper records containing personal data are shredded using a cross-cut shredder rated at least DIN 66399 P-4, or collected and destroyed by an approved confidential waste contractor who provides a certificate of destruction.",
        "Step 4: Electronic records are deleted using an approved secure deletion method. For physical media (USB drives, hard disks) that cannot be securely deleted, the media is physically destroyed.",
        "Step 5: The Disposal Log entry is completed with: record type, date range covered, quantity, method of destruction, contractor name (if applicable), certificate of destruction reference (if applicable), date of disposal, and the authorising manager's name.",
      ],
      warningBox: "Disposing of records containing personal data by placing them in a standard recycling or general waste bin is a data breach. All personal data, in any format, must be disposed of securely. CQC and the ICO have both highlighted inadequate records disposal as a serious failing.",
    },
    {
      title: "Legal Holds",
      body: "Where records may be relevant to actual or threatened litigation, a regulatory investigation, a serious incident investigation, a coroner's inquest, or a police inquiry, a 'legal hold' must be placed on those records. A legal hold suspends the normal retention and disposal process until the matter is concluded.\n\nThe Registered Manager is responsible for identifying records subject to a legal hold, recording the hold in the Disposal Log, and lifting the hold (and applying the normal retention period from the date the matter concludes) once the matter is fully resolved.",
    },
  ],
  monitoring: "Annual review of retention periods against current legislation. Disposal Log reviewed six-monthly. Quarterly check to ensure no records are being destroyed prematurely.",
  relatedDocuments: [
    "igr-001 — Records Management Policy",
    "igr-002 — Confidentiality Policy",
    "igr-003 — Data Breach and Incident Response Procedure",
    "gov-004 — Document Control Policy",
  ],
};
