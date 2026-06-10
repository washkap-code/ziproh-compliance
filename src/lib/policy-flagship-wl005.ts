import type { DocumentContent } from "./documents";

export const WL005_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] handles personal data about the people it supports, its staff, and its business partners. We recognise that the right to privacy is a fundamental human right, and that the people who share their personal information with us do so in trust. We commit to handling all personal data lawfully, fairly and transparently; to protecting it from unauthorised access, loss or disclosure; and to respecting the rights of the individuals whose data we hold.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / Data Protection Lead",

  purpose:
    "This policy sets out [ORGANISATION_NAME]'s obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. It establishes the legal basis for processing personal data, the rights of data subjects, the organisation's security obligations, and the procedures for handling data subject requests, data breaches and Data Protection Impact Assessments.",

  scope:
    "This policy applies to all personal data processed by [ORGANISATION_NAME], regardless of the medium (paper, electronic, photographs, voice recordings) or the context in which it is processed. It applies to all staff, volunteers, contractors and third parties who handle personal data on behalf of [ORGANISATION_NAME]. It covers personal data about service users, staff, job applicants, volunteers, families and any other individuals.",

  definitions: [
    {
      term: "Personal Data",
      definition:
        "Any information relating to an identified or identifiable natural person (the 'data subject'). This includes names, addresses, dates of birth, identification numbers, location data, and any information specific to the physical, physiological, genetic, mental, economic, cultural or social identity of the person.",
    },
    {
      term: "Special Category Data",
      definition:
        "A subset of personal data that is more sensitive and therefore requires additional protection. Under Article 9 of the UK GDPR, special category data includes: health data; data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership; genetic data; biometric data; data concerning sex life or sexual orientation.",
    },
    {
      term: "Data Controller",
      definition:
        "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of processing personal data. [ORGANISATION_NAME] is a data controller in relation to the personal data it processes about service users and staff.",
    },
    {
      term: "Data Processor",
      definition:
        "A natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller. Examples include: payroll providers, IT system providers, and care management software suppliers.",
    },
    {
      term: "Lawful Basis for Processing",
      definition:
        "UK GDPR Article 6 requires that every act of processing personal data has a lawful basis. The six lawful bases are: (1) Consent; (2) Contract; (3) Legal obligation; (4) Vital interests; (5) Public task; (6) Legitimate interests. For special category data, an additional condition under Article 9(2) must also apply.",
    },
    {
      term: "Data Subject Rights",
      definition:
        "Rights held by individuals under the UK GDPR: the right to be informed; the right of access (subject access request); the right to rectification; the right to erasure ('right to be forgotten'); the right to restrict processing; the right to data portability; the right to object; and rights related to automated decision-making.",
    },
    {
      term: "Subject Access Request (SAR)",
      definition:
        "A request by a data subject to receive a copy of the personal data an organisation holds about them, and information about how it is processed. Under UK GDPR, a SAR must be responded to within one calendar month.",
    },
    {
      term: "Data Protection Impact Assessment (DPIA)",
      definition:
        "A process to identify and minimise the data protection risks of a project or new system. A DPIA is mandatory under UK GDPR where processing is likely to result in a high risk to individuals — for example, large-scale processing of special category data or systematic monitoring of individuals.",
    },
    {
      term: "Personal Data Breach",
      definition:
        "A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. Not every breach requires notification, but all breaches must be assessed and documented.",
    },
    {
      term: "ICO",
      definition:
        "Information Commissioner's Office — the UK's independent body set up to uphold information rights. The ICO can investigate data protection breaches, issue enforcement notices and impose fines of up to £17.5 million or 4% of global turnover (whichever is higher) for serious breaches.",
    },
    {
      term: "Legitimate Interests Assessment (LIA)",
      definition:
        "An assessment required when relying on 'legitimate interests' as the lawful basis for processing. The LIA involves a three-part test: identify the legitimate interest; show the processing is necessary; balance the interest against the individual's interests, rights and freedoms.",
    },
  ],

  responsibilities: [
    {
      role: "Data Controller / Provider",
      duties: [
        "Register with the ICO as a data controller and renew registration annually",
        "Ensure a Data Protection Policy is in place and reviewed at least annually",
        "Appoint a Data Protection Lead or Data Protection Officer (DPO) where required",
        "Ensure sufficient resources are allocated to data protection compliance",
        "Ensure all data processors (third parties) are covered by written data processing agreements",
      ],
    },
    {
      role: "Registered Manager / Data Protection Lead",
      duties: [
        "Act as the point of contact for data protection matters",
        "Maintain the Record of Processing Activities (ROPA)",
        "Ensure all staff receive data protection training",
        "Handle all data subject requests within the statutory timescales",
        "Assess and document all personal data breaches; notify the ICO within 72 hours where required",
        "Conduct or commission DPIAs for new or changed processing activities",
        "Review all third-party processor contracts to ensure data processing agreements are in place",
        "Maintain data retention schedules and ensure data is deleted or destroyed when its retention period expires",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Handle all personal data in accordance with this policy",
        "Access only the personal data necessary for their role",
        "Report any actual or suspected data breach to the Registered Manager immediately",
        "Never share personal data with unauthorised third parties",
        "Secure paper records and digital devices at all times",
        "Complete data protection training at induction and every 2 years",
        "Challenge any instruction to process data in a way that appears unlawful",
      ],
    },
  ],

  keyPoints: [
    "Every act of processing personal data must have a lawful basis under UK GDPR Article 6, and where special category data is involved, an additional condition under Article 9",
    "Service users and staff have the right to access the personal data held about them — a subject access request must be responded to within one month",
    "A personal data breach that is likely to cause risk to individuals must be reported to the ICO within 72 hours of discovery",
    "Data must not be kept longer than necessary — [ORGANISATION_NAME]'s retention schedule must be followed",
    "Data must be kept secure — physically and digitally — against unauthorised access, loss or destruction",
    "Photographs, CCTV footage and voice recordings are personal data and must be handled accordingly",
    "When sharing data with third parties, a written data processing agreement must be in place",
    "Staff who access personal data for purposes not related to their role, or who disclose data to unauthorised persons, may face disciplinary action and criminal prosecution",
  ],

  legislation: [
    "UK General Data Protection Regulation (UK GDPR) 2021",
    "Data Protection Act 2018",
    "Human Rights Act 1998 — Article 8 (right to private and family life)",
    "Health and Social Care Act 2008 — care records as confidential medical information",
    "NHS Confidentiality Code of Practice (2003, updated 2022)",
    "Common law duty of confidentiality",
    "Access to Health Records Act 1990",
    "Regulation of Investigatory Powers Act 2000 — surveillance",
    "Care Act 2014 — information sharing in safeguarding contexts",
    "Computer Misuse Act 1990",
    "Freedom of Information Act 2000 (applies to public authorities — relevant for NHS-commissioned services)",
    "ICO: Guidance on data protection in health and social care (2023)",
  ],

  sections: [],

  procedure: [
    {
      heading: "1. The Six Data Protection Principles",
      body: "Article 5 of the UK GDPR establishes six principles that govern all personal data processing. [ORGANISATION_NAME] must be able to demonstrate compliance with all six — the seventh principle ('accountability') requires documentation of this compliance.",
      steps: [
        "LAWFULNESS, FAIRNESS AND TRANSPARENCY — process data only with a lawful basis; be honest with people about how their data is used",
        "PURPOSE LIMITATION — collect data only for specified, explicit and legitimate purposes; don't use it for something else",
        "DATA MINIMISATION — collect only the data that is necessary; don't collect more than you need",
        "ACCURACY — keep data accurate and up to date; take reasonable steps to correct inaccurate data",
        "STORAGE LIMITATION — keep data only for as long as necessary; follow the retention schedule",
        "INTEGRITY AND CONFIDENTIALITY — protect data against unauthorised access, loss or destruction using appropriate technical and organisational measures",
      ],
      legalBox:
        "Article 5(2) UK GDPR — the accountability principle — requires [ORGANISATION_NAME] to be able to demonstrate that it complies with all six principles. This means keeping records of processing activities, conducting DPIAs, having written policies, providing staff training, and being able to produce evidence of compliance on request — including during a CQC inspection.",
    },
    {
      heading: "2. Lawful Bases for Processing",
      body: "[ORGANISATION_NAME] processes personal data on the following lawful bases. The appropriate basis must be identified before processing begins and must be documented in the Record of Processing Activities.",
      subSections: [
        {
          heading: "2.1 Processing Service User Data",
          body: "The primary lawful bases for processing personal data about service users are:",
          bulletPoints: [
            "Article 6(1)(b) — Contract: processing is necessary for the performance of the care and support contract with the service user",
            "Article 6(1)(c) — Legal obligation: processing is required by law (e.g. CQC registration, safeguarding duties, medicines records)",
            "Article 6(1)(d) — Vital interests: processing is necessary to protect the vital interests of the person (emergency situations where consent cannot be obtained)",
            "Article 6(1)(e) — Public task: processing is necessary for a task in the public interest (e.g. safeguarding enquiries)",
          ],
        },
        {
          heading: "2.2 Processing Special Category Health Data",
          body: "Health data is special category data. An additional condition under Article 9(2) must apply. For [ORGANISATION_NAME], the relevant conditions are typically:",
          bulletPoints: [
            "Article 9(2)(b) — Necessary for carrying out obligations and exercising rights in employment or social security/protection law",
            "Article 9(2)(h) — Necessary for the purposes of preventive or occupational medicine, medical diagnosis, provision of health or social care, or management of health or social care systems",
            "Article 9(2)(i) — Necessary for reasons of public interest in the area of public health",
            "Article 9(2)(c) — Necessary to protect the vital interests of the data subject or another person where the data subject is physically or legally incapable of giving consent",
          ],
          legalBox:
            "Consent under UK GDPR is a specific, high-standard lawful basis — it must be freely given, specific, informed and unambiguous, and must be as easy to withdraw as to give. Where there is a power imbalance (e.g. a service user and their care provider), consent may not be the most appropriate basis. [ORGANISATION_NAME] should rely on Article 6(1)(b) or (c) in preference to consent wherever these apply.",
        },
        {
          heading: "2.3 Processing Staff Data",
          body: "Staff personal data is typically processed on the bases of: contract (employment contract); legal obligation (payroll, right to work checks, DBS); and legitimate interests (HR management, supervision records).",
        },
      ],
    },
    {
      heading: "3. Data Subject Rights",
      body: "UK GDPR gives individuals rights over their personal data. [ORGANISATION_NAME] must have a process for receiving and responding to each type of request.",
      subSections: [
        {
          heading: "3.1 Subject Access Requests (SARs)",
          body: "Any individual may request access to the personal data [ORGANISATION_NAME] holds about them. [ORGANISATION_NAME] must respond within one calendar month. The response must include: a copy of the personal data; an explanation of how and why it is processed; details of any recipients; and information about retention periods.",
          steps: [
            "Verify the identity of the requester before disclosing any data",
            "Log the request and the date received",
            "Identify all personal data held about the requester in all systems and in paper records",
            "Consider any exemptions that may apply (e.g. data about third parties that cannot be disclosed without consent)",
            "Provide the data in an accessible format",
            "Respond within one calendar month (extendable by two further months for complex requests, with notice)",
          ],
          practiceBox:
            "A service user asking to read their care file is making a subject access request. This is a right, not a discretion. It cannot be refused unless a specific exemption applies. However, you may redact information about third parties (e.g. staff surnames, other service users) to protect their privacy.",
        },
        {
          heading: "3.2 Right to Erasure",
          body: "An individual can request that their personal data be erased. This right is not absolute — it applies in specific circumstances (e.g. the data is no longer necessary; consent has been withdrawn and there is no other lawful basis). Care records must generally be retained for the legally required minimum retention period, which overrides a request for erasure during that period.",
          warningBox:
            "The right to erasure does NOT allow a person to have their care records deleted while those records are still required by law. CQC, HMRC and other regulators require retention of specific records for defined periods. Deleting records in response to an erasure request during the retention period is likely to be unlawful.",
        },
        {
          heading: "3.3 Right to Rectification",
          body: "If a person believes their personal data held by [ORGANISATION_NAME] is inaccurate, they can request that it be corrected. [ORGANISATION_NAME] must respond within one month. Where data is factually inaccurate, correct it. Where it is a matter of professional judgement or contemporaneous record, annotate the record with the person's view while retaining the original entry.",
        },
      ],
    },
    {
      heading: "4. Data Security",
      body: "[ORGANISATION_NAME] will implement technical and organisational measures appropriate to the risk to protect personal data against unauthorised access, accidental loss, destruction or damage.",
      subSections: [
        {
          heading: "4.1 Physical Security",
          body: "Paper records must be:",
          bulletPoints: [
            "Stored in locked filing cabinets or rooms when not in use",
            "Never left unattended in public areas",
            "Disposed of securely using shredding or a confidential waste service — never in general waste",
            "Not taken off-site except in a secure bag or folder, with the minimum information necessary",
          ],
        },
        {
          heading: "4.2 Digital Security",
          body: "Electronic systems must be protected by:",
          bulletPoints: [
            "Strong password policies — passwords must be at least 12 characters, not shared between staff",
            "Multi-factor authentication for systems containing special category data",
            "Screen locks that activate after a short period of inactivity",
            "Encryption of laptops, tablets and USB drives",
            "Regular software updates and patches",
            "Access controls — staff can only access the data they need for their role",
            "Regular backups stored securely",
          ],
        },
        {
          heading: "4.3 Remote and Home Working",
          body: "Where staff access personal data remotely, additional security measures apply:",
          bulletPoints: [
            "Use only [ORGANISATION_NAME]'s approved devices or VPN-connected personal devices",
            "Do not use personal email accounts for organisational data",
            "Do not store personal data on personal devices unless specifically authorised",
            "Ensure screens cannot be seen by others in public places",
            "Report any lost or stolen device immediately",
          ],
        },
      ],
    },
    {
      heading: "5. Personal Data Breaches",
      body: "A personal data breach is a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. All breaches must be assessed, documented and (where required) notified to the ICO and/or affected individuals.",
      subSections: [
        {
          heading: "5.1 Examples of Data Breaches",
          body: "Data breaches in a care setting may include:",
          bulletPoints: [
            "A care file left in a public area",
            "An email containing personal data sent to the wrong person",
            "A laptop, phone or USB drive containing personal data lost or stolen",
            "Unauthorised access to a care management system by a person without a legitimate need",
            "Paper records not shredded and found in general waste",
            "A care plan sent to the wrong family member",
            "A verbal disclosure of a person's health condition to an unauthorised third party",
          ],
        },
        {
          heading: "5.2 Breach Response Process",
          body: "On discovery of a potential data breach, the following steps must be taken:",
          steps: [
            "Contain the breach — stop the ongoing disclosure if possible (e.g. recall an email, secure the lost device)",
            "Report to the Registered Manager immediately — the same day",
            "The Registered Manager assesses the risk: what data was involved? How many people? What is the likelihood of harm?",
            "Document the breach in the breach register, regardless of whether it needs reporting",
            "If the breach is likely to result in a risk to individuals' rights and freedoms — notify the ICO within 72 hours",
            "If the breach is likely to result in a HIGH risk to individuals — also notify the affected individuals directly without undue delay",
            "Identify root cause and implement preventative measures",
          ],
          warningBox:
            "The 72-hour ICO notification window begins from the moment [ORGANISATION_NAME] becomes aware of the breach — not from when it is confirmed or fully investigated. If there is any doubt about whether notification is required, err on the side of notifying. Failure to notify a reportable breach is itself a breach of the UK GDPR and can result in regulatory enforcement action.",
        },
      ],
    },
    {
      heading: "6. Sharing Personal Data",
      body: "[ORGANISATION_NAME] shares personal data with a range of organisations as part of its care delivery and business operations. All sharing must be lawful, documented and proportionate.",
      subSections: [
        {
          heading: "6.1 Sharing in a Care Context",
          body: "Personal data about service users may be shared with:",
          bulletPoints: [
            "NHS organisations (GP, district nurse, hospital) — for care and treatment purposes",
            "Local authorities — for care management, safeguarding and commissioning purposes",
            "Other care providers — for continuity of care during transitions",
            "Family members — only where the person has consented, or where it is necessary to protect their vital interests",
            "Police and emergency services — in the interest of public safety or the prevention or detection of crime",
          ],
          practiceBox:
            "When in doubt about whether it is lawful to share personal data, apply the Caldicott Principles: justify the purpose; don't use data that is not strictly necessary; use the minimum necessary; access should be on a strict need-to-know basis; everyone with access should understand their responsibilities; understand and comply with the law.",
        },
        {
          heading: "6.2 Third-Party Processors",
          body: "Where [ORGANISATION_NAME] engages a third party to process personal data on its behalf, a written Data Processing Agreement (DPA) must be in place before processing begins. The DPA must address: the nature and purpose of processing; the types of data; the data subject categories; the obligations and rights of the controller; and the security measures in place.",
          legalBox:
            "Article 28 of the UK GDPR requires a written contract (the DPA) with all processors. Using a processor without a DPA in place is a breach of the UK GDPR. [ORGANISATION_NAME] must also carry out due diligence on processors — particularly those handling special category health data.",
        },
      ],
    },
    {
      heading: "7. Retention and Disposal",
      body: "Personal data must not be kept for longer than necessary for the purpose for which it was collected. [ORGANISATION_NAME] maintains a data retention schedule that specifies how long each category of record must be kept.",
      bulletPoints: [
        "Service user care records — minimum 8 years after last contact (or until the person's 25th birthday if they were under 18 when records commenced), whichever is later",
        "Children's records — minimum until 25th birthday or 26th if young person was 17 at conclusion of treatment",
        "Staff employment records — 6 years after termination of employment",
        "Recruitment records (unsuccessful applicants) — 6 months",
        "Accident and incident records — 3 years (or until a claimant's 21st birthday if the injured person was a child)",
        "Financial records — 6 years",
        "CCTV footage — 31 days (unless required for investigation purposes)",
      ],
      warningBox:
        "Records must be securely destroyed at the end of their retention period — not just deleted from active files. Paper records must be shredded. Electronic records must be permanently deleted or overwritten. Retaining personal data beyond its retention period is a breach of the storage limitation principle.",
    },
    {
      heading: "8. CCTV and Monitoring",
      body: "[ORGANISATION_NAME] may operate CCTV or other monitoring equipment in some service settings. Any monitoring of individuals must comply with the UK GDPR, the Protection of Freedoms Act 2012, and the ICO's CCTV Code of Practice.",
      bulletPoints: [
        "CCTV must only be used where there is a legitimate purpose — security and safety",
        "Signage must be displayed to inform people that they are being recorded",
        "CCTV footage must be stored securely and accessed only by authorised staff",
        "Footage must be retained for no more than 31 days unless required for investigation",
        "Body-worn cameras, room monitoring or any surveillance of individuals in their private spaces requires a formal privacy impact assessment and legal advice",
        "Service users must be informed of and consulted about any monitoring in their living areas",
      ],
    },
  ],

  training:
    "All staff must complete data protection awareness training at induction and every 2 years. Training must cover: the six principles, lawful bases, data subject rights, breach reporting, and physical/digital security. Senior staff must complete advanced data protection training including DPIAs and third-party processor management.",

  monitoring:
    "Annual data protection audit against the ICO accountability framework; quarterly review of subject access requests received and responded to; monthly review of breach register; annual review of retention schedule. ICO registration renewal annually.",

  relatedDocuments: [
    "wl-006 — Record Keeping and Confidentiality Policy",
    "wl-004 — Whistleblowing Policy",
    "wl-001 — Governance Framework",
    "saf-001 — Safeguarding Adults at Risk Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Record of Processing Activities (ROPA)",
      description: "Template for documenting all personal data processing activities, including: purpose, lawful basis, data categories, data subjects, recipients, retention period, and security measures.",
    },
    {
      title: "Appendix B — Data Retention Schedule",
      description: "Full retention schedule for all categories of records held by [ORGANISATION_NAME], including review dates and disposal method.",
    },
    {
      title: "Appendix C — Breach Notification Assessment Tool",
      description: "Decision tree for assessing whether a personal data breach must be reported to the ICO and/or affected individuals.",
    },
    {
      title: "Appendix D — Subject Access Request Procedure",
      description: "Step-by-step procedure for receiving, verifying, processing and responding to subject access requests, including template acknowledgement letter.",
    },
  ],

  versionHistory: [
    { version: "3.2", date: "June 2026",    amendment: "CCTV section updated; body-worn camera guidance added; retention schedule reviewed against NHS Records Management Code of Practice 2021." },
    { version: "3.1", date: "January 2024", amendment: "ICO accountability framework reference updated; DPA template revised." },
    { version: "3.0", date: "March 2021",   amendment: "Full rewrite to reflect UK GDPR post-Brexit; updated to reflect Data Protection Act 2018; ICO registration requirements updated." },
    { version: "2.2", date: "May 2018",     amendment: "Revised to comply with GDPR ahead of May 2018 implementation." },
  ],
};
