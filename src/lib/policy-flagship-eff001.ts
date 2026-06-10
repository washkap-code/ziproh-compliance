import type { DocumentContent } from "./documents";

export const EFF001_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] believes that a care plan is not a form to be completed — it is a living, person-centred document that reflects who a person is, what matters to them, what support they need, and how they wish to live their life. We commit to working in genuine partnership with each person we support, and with those who know and care for them, to create care plans that are individual, outcome-focused and continuously reviewed.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / Care Planning Lead",

  purpose:
    "This policy establishes [ORGANISATION_NAME]'s approach to person-centred assessment and care planning. It ensures that every service user has a care plan that accurately reflects their assessed needs, personal preferences, goals and risks; that care plans are developed with the person; that they are implemented consistently by all staff; and that they are reviewed regularly and updated when circumstances change.",

  scope:
    "This policy applies to all staff at [ORGANISATION_NAME] involved in the assessment, planning, delivery or review of care and support. It covers all service users from the point of initial assessment through to the conclusion of the care relationship. It applies in all service settings — residential, supported living, day services and home care.",

  definitions: [
    {
      term: "Person-Centred Care",
      definition:
        "An approach that treats people as individuals, not as conditions or diagnoses. Person-centred care considers the whole person — their history, values, preferences, cultural background and goals — and involves them as a partner in decisions about their care.",
    },
    {
      term: "Care and Support Plan",
      definition:
        "A written document that records: the person's needs as assessed; the outcomes they wish to achieve; the support [ORGANISATION_NAME] will provide; how risks will be managed; the person's preferences about how support is delivered; and review dates.",
    },
    {
      term: "Needs Assessment",
      definition:
        "A structured assessment of a person's care and support needs. Under the Care Act 2014, a needs assessment considers the impact of the person's needs on their wellbeing across ten areas of daily life, and determines whether those needs are eligible for local authority support.",
    },
    {
      term: "Outcome",
      definition:
        "What the person wants to achieve as a result of the support they receive. Outcomes may be specific (e.g. 'I want to be able to prepare my own breakfast') or broader (e.g. 'I want to maintain contact with my family'). Outcome-focused care planning measures success by whether outcomes are achieved.",
    },
    {
      term: "Risk Assessment",
      definition:
        "A structured process for identifying, evaluating and managing risks to a person's safety and wellbeing, and to others. Risk assessments must be proportionate — they must not restrict a person's autonomy beyond what is necessary to manage genuine risk.",
    },
    {
      term: "Support Worker / Key Worker",
      definition:
        "The designated member of staff with primary responsibility for a service user's day-to-day care and for coordinating their care plan. The key worker is the person's main point of contact within [ORGANISATION_NAME].",
    },
    {
      term: "Person-Centred Thinking Tools",
      definition:
        "Structured approaches to gathering information about a person's preferences, history and goals. Examples include: 'Important to / Important for' (what matters to the person versus what is needed for their safety and health), 'Good day / Bad day', 'Communication charts', and 'One-page profiles'.",
    },
    {
      term: "Eligible Needs",
      definition:
        "Under the Care Act 2014, needs that meet the eligibility criteria set out in the Care and Support (Eligibility Criteria) Regulations 2015. An adult's needs are eligible if they arise from a physical or mental impairment or illness; have a significant impact on their ability to achieve two or more specified outcomes; and as a consequence their wellbeing is, or is likely to be, significantly impaired.",
    },
  ],

  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure every service user has a current, person-centred care plan from the day of admission/commencement of service",
        "Ensure care plans are reviewed at a minimum every 12 months and following any significant change",
        "Oversee the quality of care plans through regular audits",
        "Ensure all staff are trained in person-centred care planning and outcome-focused approaches",
        "Liaise with the local authority on care and support planning and review processes",
        "Ensure the care planning process reflects the requirements of the Care Act 2014",
      ],
    },
    {
      role: "Key Worker / Designated Care Planner",
      duties: [
        "Lead the care planning process for their designated service users, involving the person and their family or representatives throughout",
        "Complete an initial assessment within 48 hours of admission/commencement and a full care plan within 7 days",
        "Ensure care plans use the person's own words wherever possible",
        "Update care plans following any significant change in the person's needs or wishes",
        "Coordinate review meetings and ensure all relevant parties attend or contribute",
        "Ensure risk assessments are current, proportionate and reviewed after any incident",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Read and understand the care plan for every person they support before providing care",
        "Deliver care in line with the care plan — not according to habit or convenience",
        "Report any observed change in a person's needs, preferences or circumstances to the key worker or duty manager",
        "Contribute observations and feedback to care plan reviews",
        "Never share care plan information outside of the need-to-know group",
      ],
    },
  ],

  keyPoints: [
    "A care plan is a legal document — it must be accurate, up to date and completed by a competent, trained practitioner",
    "The person themselves must be at the centre of their care plan — it must reflect their voice, not the service's convenience",
    "A care plan that has not been reviewed following a significant change in the person's needs is a risk management failure",
    "Risk assessments must be proportionate — they must manage risk without unnecessarily restricting the person's choices",
    "Outcome-focused planning asks 'what does this person want to achieve?' — not 'what tasks do we perform?'",
    "The absence of a care plan, or a care plan that is generic or not person-specific, is a CQC finding of regulatory concern",
    "Care plans must be accessible to those who need them — all staff providing care must be able to read and understand the plan",
    "Consent to the care plan must be recorded — and where a person lacks capacity, a best interests decision must be documented",
  ],

  legislation: [
    "Care Act 2014 — sections 9-13 (needs assessment, eligibility and care planning)",
    "Care and Support (Eligibility Criteria) Regulations 2015",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 9 (Person-Centred Care)",
    "Mental Capacity Act 2005 — consent, best interests, least restrictive option",
    "Equality Act 2010 — individual needs and reasonable adjustments",
    "Human Rights Act 1998 — Article 8 (right to private and family life)",
    "DHSC: Care and Support Statutory Guidance (2014, updated 2023) — Chapters 6-10",
    "NICE Guideline NG86: Home Care for Older Adults (2018)",
    "CQC: Fundamental Standards — Regulation 9",
    "NHS and Community Care Act 1990 — community care assessments",
    "Data Protection Act 2018 / UK GDPR — care records as personal data",
  ],

  sections: [],

  procedure: [
    {
      heading: "1. Pre-Admission and Initial Assessment",
      body: "Good care planning begins before a service user arrives. A pre-admission assessment enables [ORGANISATION_NAME] to determine whether it can meet the person's needs, and to begin gathering the information needed for an individualised care plan.",
      steps: [
        "Contact the person, their family/representative and the referring body (local authority, hospital, GP) to gather preliminary information about the person's needs, wishes and preferences",
        "Conduct a pre-admission assessment visit wherever possible — meeting the person in their current environment provides invaluable insight",
        "Review all available documentation: local authority care and support plan, NHS care records, hospital discharge summary, previous care plans",
        "Assess whether [ORGANISATION_NAME] can safely and appropriately meet the person's needs before making a placement decision",
        "Complete an initial risk assessment covering key areas: falls, pressure care, nutrition, medication, behaviour, environmental hazards",
        "Complete a baseline assessment of the person's needs and current functional ability",
        "Within 48 hours of admission: complete a full initial assessment covering all domains",
        "Within 7 days: develop and agree a full person-centred care plan with the person",
      ],
      practiceBox:
        "The first 72 hours are the most important for getting to know a new service user. Use this time for observation and conversation — not task completion. Understanding who the person is, what matters to them, what makes a good day, and what they find difficult is the foundation of every good care plan.",
    },
    {
      heading: "2. Assessment Domains",
      body: "A comprehensive assessment must cover all relevant domains of the person's life and needs. [ORGANISATION_NAME] uses a structured assessment framework aligned to the Care Act 2014 wellbeing outcomes.",
      subSections: [
        {
          heading: "2.1 Physical Health and Personal Care",
          body: "Assess: mobility and transfers, personal hygiene and washing, dressing and undressing, continence, nutrition and hydration, skin integrity, oral health, sensory needs (vision, hearing), pain, sleep, long-term health conditions, medicines.",
        },
        {
          heading: "2.2 Cognitive and Mental Health",
          body: "Assess: memory and orientation, communication (verbal, non-verbal, written), mental health conditions and their impact, any formal diagnoses (dementia, learning disability, autism), current cognitive baseline (MMSE or equivalent if appropriate), mood and emotional wellbeing.",
        },
        {
          heading: "2.3 Social and Relationship Needs",
          body: "Assess: family relationships and contact preferences, friendships and social networks, cultural, religious and spiritual needs, community connections and activities, preferred daily routines, hobbies and interests, preferred social setting (independent vs. social).",
        },
        {
          heading: "2.4 Safety and Risk",
          body: "Assess: history of falls, history of self-harm or harm to others, fire safety risks, risk of exploitation or abuse, environmental hazards, night-time needs, capacity to manage risk independently.",
        },
        {
          heading: "2.5 Legal and Financial",
          body: "Assess: capacity to manage finances and legal affairs, existence of LPA or Court of Protection order, benefits entitlement, housing situation, any ongoing legal proceedings.",
        },
      ],
    },
    {
      heading: "3. Person-Centred Care Planning",
      body: "The care plan is developed from the assessment, but it is not a list of care tasks. It is an expression of who the person is and how [ORGANISATION_NAME] will support them to live the life they want.",
      subSections: [
        {
          heading: "3.1 What a Person-Centred Care Plan Contains",
          body: "Every care plan at [ORGANISATION_NAME] must include:",
          bulletPoints: [
            "A 'Who I Am' profile — background, history, what makes me the person I am",
            "What is important to me — my values, preferences, routines and choices",
            "What I want to achieve — my personal goals and aspirations",
            "How I like to be supported — my preferred communication style, my likes and dislikes in care delivery",
            "My health needs and how they are managed",
            "My medicines and how they are administered",
            "My risk assessments and how risks are managed proportionately",
            "My communication preferences — including any communication aids or tools",
            "Emergency and contingency arrangements",
            "Review dates",
          ],
        },
        {
          heading: "3.2 Using the Person's Own Words",
          body: "Wherever possible, care plans should be written in the first person ('I like...', 'I find it difficult to...') or should clearly reflect the person's own language and descriptions. Generic, task-focused language ('assist with personal care') should be replaced with specific, person-centred language ('help me wash my hair on Tuesdays because it takes longer and I like to look nice for my daughter's visit').",
          practiceBox:
            "One test of whether a care plan is truly person-centred: could it belong to anyone, or does it unmistakably belong to this specific person? If you removed the name from the plan and couldn't tell whose it was from the content, it needs more individualisation.",
        },
        {
          heading: "3.3 Consent to the Care Plan",
          body: "The care plan must be agreed with the service user. Where the person has capacity, they must consent to the plan. Their signature (or a record of verbal agreement) must be obtained. Where a person lacks capacity for aspects of the plan, a best interests decision must be documented, following the MCA 2005 framework.",
          legalBox:
            "Regulation 9 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 requires that care and treatment must be appropriate for the person, must meet their needs, and must reflect their preferences. A care plan that a person has not agreed to, and for which no best interests decision has been recorded, may amount to a breach of Regulation 9 and Regulation 11 (Need for Consent).",
        },
      ],
    },
    {
      heading: "4. Risk Assessment and Positive Risk Management",
      body: "Risk assessment at [ORGANISATION_NAME] is not about saying 'no' — it is about understanding risk, managing it proportionately, and enabling people to take calculated risks in order to live fulfilling lives.",
      subSections: [
        {
          heading: "4.1 The Principle of Positive Risk Management",
          body: "Everyone takes risks every day. The right to take reasonable risks is an expression of autonomy. [ORGANISATION_NAME]'s role is not to eliminate all risk — it is to support people to understand the risks they face and to make informed choices about them. Where a person has capacity to choose to take a risk, their choice must be respected even if staff consider it unwise.",
          legalBox:
            "Section 1 of the Care Act 2014 requires local authorities (and, by extension, care providers) to promote individual wellbeing. The DHSC Statutory Guidance states that wellbeing includes 'personal dignity' and 'control by the individual over day-to-day life'. An approach to risk that overrides a person's informed choices in the name of safety may itself be a wellbeing failure.",
        },
        {
          heading: "4.2 Risk Assessment Process",
          body: "For each identified risk, [ORGANISATION_NAME] will:",
          steps: [
            "Identify the hazard and who might be harmed",
            "Assess the likelihood and severity of harm",
            "Identify control measures to reduce the risk to an acceptable level",
            "Involve the person in agreeing the control measures",
            "Record the risk assessment and control measures in the care plan",
            "Set a review date — sooner if the person's situation changes",
            "Review the assessment after any incident related to the identified risk",
          ],
        },
        {
          heading: "4.3 Key Risk Areas",
          body: "Standard risk assessments must be in place for all relevant areas, which may include:",
          bulletPoints: [
            "Falls — Waterlow or equivalent; mobility aids; footwear; environment",
            "Pressure ulcers — Braden or Waterlow scale; repositioning plan",
            "Nutrition and dehydration — MUST tool; food preference record",
            "Choking and dysphagia — IDDSI framework; texture-modified diet if needed",
            "Skin integrity and wound care",
            "Medication — self-administration assessment; covert administration protocol if needed",
            "Mental health — crisis plans, de-escalation strategies",
            "Challenging behaviour — behaviour support plans",
            "Community access and personal safety",
            "Exploitation and abuse risk",
          ],
        },
      ],
    },
    {
      heading: "5. Communication and Information-Sharing",
      body: "A care plan is only effective if all staff who provide care have read it and are following it. [ORGANISATION_NAME] ensures that care plans are accessible, read and understood.",
      steps: [
        "Care plans must be stored in a consistent, accessible location — physical file at point of care and/or electronic system",
        "Every new member of staff must read the care plan for each service user they will support before working with that person",
        "Handover processes must reference any changes to care plans or risk assessments",
        "Staff must sign to confirm they have read and understood a care plan",
        "Any changes to a care plan must be communicated at the earliest handover and recorded",
        "Family members or representatives named in the care plan as contacts must be kept informed of significant changes",
        "Commissioners and the local authority must be notified of significant changes to a person's needs",
      ],
    },
    {
      heading: "6. Care Plan Reviews",
      body: "Care plans must be living documents — regularly reviewed and updated to reflect the person's current needs, wishes and circumstances.",
      subSections: [
        {
          heading: "6.1 Scheduled Reviews",
          body: "Every service user's care plan must be formally reviewed at least every 12 months. For people with complex or rapidly changing needs, reviews must be more frequent — at least every 3-6 months, or as agreed with the commissioning authority.",
        },
        {
          heading: "6.2 Unscheduled Reviews",
          body: "A care plan review must be triggered immediately following any of the following:",
          bulletPoints: [
            "A significant change in the person's health or functional ability",
            "A safeguarding incident or allegation",
            "A significant medication change",
            "A hospital admission or discharge",
            "The person's expressed wish to change their care arrangements",
            "A near-miss or incident that suggests the current care plan is not adequate",
            "A change in the person's social circumstances (bereavement, family change)",
          ],
        },
        {
          heading: "6.3 Review Process",
          body: "Care plan reviews should involve the person, their key worker, family or representatives (where appropriate and with the person's consent), and any relevant health or social care professionals. The review should ask: Are the person's needs being met? Are their goals and preferences still current? Are the risks still being managed appropriately? Does anything need to change?",
        },
      ],
    },
    {
      heading: "7. Transition and Discharge Planning",
      body: "When a person's support is ending or changing, [ORGANISATION_NAME] has a duty to support a safe, well-planned transition. Poor transitions are a leading cause of harm in health and social care.",
      steps: [
        "Give the person and their representatives as much notice as possible of any planned ending or transition",
        "Share the care plan and relevant records with the receiving provider at the earliest opportunity",
        "Ensure the receiving provider is aware of all risks and current support needs",
        "Complete a formal handover summary capturing: current needs, risks, medicines, behaviour, communication, preferences",
        "Support the person emotionally through the transition — acknowledge that change is difficult",
        "Where discharge is to a hospital or health setting, ensure a medicines reconciliation is completed",
      ],
    },
  ],

  training:
    "All care staff must receive care planning training at induction. Training must cover: the Care Act 2014 needs assessment framework, person-centred planning principles, risk assessment and positive risk management, MCA and consent in care planning, and record keeping. Senior care staff must be trained to lead care plan reviews. Training must be refreshed every 2 years.",

  monitoring:
    "Monthly audit of a sample of care plans against the care plan quality standards framework. Quarterly review of time to initial assessment and time to full care plan. Annual outcome measurement — are service users achieving the goals identified in their care plans? Results reported to Provider/Board quarterly.",

  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-003 — Medication Management Policy",
    "eff-004 — End of Life Care Policy",
    "car-001 — Dignity and Respect Policy",
    "wl-006 — Record Keeping and Confidentiality Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Care Plan Quality Standards Audit Tool",
      description: "Audit checklist for assessing care plan quality against key person-centred standards. Includes: individualisation, voice of the person, outcome focus, risk assessment quality, consent, review currency.",
    },
    {
      title: "Appendix B — Assessment Framework",
      description: "Structured assessment template covering all domains: physical health, mental health, cognition, social needs, cultural and spiritual needs, risk, legal and financial.",
    },
    {
      title: "Appendix C — One-Page Profile Template",
      description: "One-page profile template capturing: what people like and admire about me; what is important to me; how best to support me.",
    },
    {
      title: "Appendix D — Risk Assessment Template",
      description: "Generic risk assessment template with hazard, likelihood, severity, control measures, residual risk rating and review date.",
    },
  ],

  versionHistory: [
    { version: "4.0", date: "June 2026",    amendment: "Outcome-focused planning section expanded; transition planning added; Care Act 2014 eligibility criteria section updated following 2023 statutory guidance revision." },
    { version: "3.2", date: "April 2024",   amendment: "Person-centred thinking tools added; one-page profile template adopted." },
    { version: "3.1", date: "January 2022", amendment: "Risk assessment section updated to reflect positive risk management approach; Waterlow and Braden scale references added." },
    { version: "3.0", date: "March 2020",   amendment: "Full rewrite following Care Act 2014 implementation review; outcome-focused approach embedded throughout." },
  ],
};
