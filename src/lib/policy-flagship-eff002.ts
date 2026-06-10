import type { DocumentContent } from "./documents";

export const EFF002_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] is committed to upholding the rights, dignity and autonomy of every person it supports. We recognise that the ability to make decisions — including unwise ones — is a fundamental aspect of personhood. Where a person lacks capacity to make a specific decision, [ORGANISATION_NAME] will act in their best interests, using the least restrictive option available, and will always involve the person as fully as possible in every decision that affects their life.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / MCA Lead",

  purpose:
    "This policy sets out how [ORGANISATION_NAME] implements the Mental Capacity Act 2005 (MCA) and associated legislation in day-to-day practice. It establishes the legal framework for decision-making on behalf of people who may lack capacity, ensures that every person is presumed to have capacity unless evidence indicates otherwise, and protects the rights of people who lack capacity to make specific decisions.",

  scope:
    "This policy applies to all staff, volunteers and contractors working for [ORGANISATION_NAME]. It covers all decisions made in relation to service users, from day-to-day decisions about personal care and meals, through to significant decisions about accommodation, medical treatment and financial matters. It applies in all settings in which [ORGANISATION_NAME] delivers services.",

  definitions: [
    {
      term: "Mental Capacity",
      definition:
        "The ability to make a specific decision at a specific time. A person has capacity if they can: (1) understand information about the decision; (2) retain it long enough to use it; (3) weigh it up to reach a decision; and (4) communicate their decision. Capacity is decision-specific and time-specific.",
    },
    {
      term: "The Two-Stage Test",
      definition:
        "The legal test for determining whether a person lacks capacity. Stage 1 (diagnostic): Does the person have an impairment of, or disturbance in the functioning of, the mind or brain? Stage 2 (functional): Does that impairment mean the person is unable to make the specific decision at the time it needs to be made?",
    },
    {
      term: "Best Interests",
      definition:
        "Any act done, or decision made, for a person who lacks capacity must be in their best interests. Best interests is not a 'substituted judgement' test — it is not simply about doing what the person would have wanted. It requires a balance of factors including the person's past and present wishes, feelings, beliefs and values, and must be the least restrictive of their rights and freedoms.",
    },
    {
      term: "Lasting Power of Attorney (LPA)",
      definition:
        "A legal document under the MCA 2005 that allows a person (the donor) to appoint one or more people (attorneys) to help make decisions or make decisions on their behalf. There are two types: Property and Financial Affairs LPA, and Health and Welfare LPA. Only a registered LPA has legal effect.",
    },
    {
      term: "Court of Protection",
      definition:
        "A specialist court established under the MCA 2005 that makes decisions on financial and welfare matters for people who lack capacity to make those decisions themselves. It can also appoint a deputy to make ongoing decisions.",
    },
    {
      term: "Deputy",
      definition:
        "A person appointed by the Court of Protection to make decisions on behalf of someone who lacks capacity. Deputies can be appointed for property and financial affairs, or for personal welfare decisions.",
    },
    {
      term: "Independent Mental Capacity Advocate (IMCA)",
      definition:
        "A statutory advocate appointed under sections 35-39 of the MCA 2005 to represent and support adults who lack capacity to make specific decisions and who have no one (other than paid care staff) to support or represent them. IMCAs must be instructed for serious medical treatment decisions and decisions about long-term accommodation.",
    },
    {
      term: "Advance Decision to Refuse Treatment (ADRT)",
      definition:
        "A decision made under section 24 of the MCA 2005 by a person with capacity to refuse a specific treatment in the future, if they lack capacity at that time. An ADRT refusing life-sustaining treatment must be in writing, signed and witnessed, and must state that it applies even if life is at risk.",
    },
    {
      term: "Advance Statement",
      definition:
        "A written statement of a person's wishes, feelings, beliefs and values that should be considered in any future best interests decision. Unlike an ADRT, an advance statement is not legally binding but must be given serious weight in any best interests assessment.",
    },
    {
      term: "Deprivation of Liberty Safeguards (DoLS)",
      definition:
        "A legal framework under the Mental Capacity Act 2005 (as amended by the MHA 2007) that protects people in care homes and hospitals who lack capacity and who need to be deprived of their liberty to provide care and treatment. Authorisation must be obtained from the supervisory body (local authority or NHS).",
    },
    {
      term: "Liberty Protection Safeguards (LPS)",
      definition:
        "The replacement for DoLS under the Mental Capacity (Amendment) Act 2019. LPS will extend the scheme to all settings (including supported living and private homes) and introduces a new 'responsible body' framework. Implementation has been delayed and DoLS remains in force as of the date of this policy.",
    },
    {
      term: "Section 5 Defence",
      definition:
        "Section 5 of the MCA 2005 provides that a person who does an act in connection with care or treatment of a person who lacks capacity will not incur liability if: (a) they reasonably believe the person lacks capacity in relation to the matter; and (b) they reasonably believe the act is in the person's best interests.",
    },
  ],

  responsibilities: [
    {
      role: "Registered Manager / MCA Lead",
      duties: [
        "Ensure MCA is implemented as a positive framework throughout the service",
        "Ensure all staff receive MCA and DoLS/LPS training at induction and every two years",
        "Oversee all formal capacity assessments and best interests decisions",
        "Maintain a register of all DoLS authorisations and ensure timely renewal applications",
        "Ensure IMCAs are instructed when required under sections 37-39 of the MCA 2005",
        "Review MCA documentation quality as part of monthly governance audits",
        "Liaise with the local authority supervisory body on DoLS matters",
        "Notify CQC of any unlawful deprivation of liberty",
        "Ensure all Advance Decisions to Refuse Treatment are stored accessibly and actioned correctly",
      ],
    },
    {
      role: "Senior Care Staff / Team Leaders",
      duties: [
        "Support frontline staff to apply the five MCA principles consistently",
        "Review capacity assessments and best interests decisions completed by care staff",
        "Ensure day-to-day decisions are recorded and that the MCA is applied to small as well as significant decisions",
        "Escalate complex or disputed capacity questions to the Registered Manager",
        "Check that LPA and Court of Protection order details are accurately recorded in care plans",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Always assume a person has capacity unless a capacity assessment establishes otherwise",
        "Take all practicable steps to support a person to make their own decisions before concluding they lack capacity",
        "Never treat a person as lacking capacity merely because they make an unwise decision",
        "Complete capacity assessments for decisions within their competence and record findings contemporaneously",
        "Record best interests decisions, including the views of the person and relevant others",
        "Never act under a Health and Welfare LPA unless the person currently lacks capacity for that specific decision",
        "Report any concern about a person's capacity or the use of LPA/deputy authority to their manager",
      ],
    },
  ],

  keyPoints: [
    "Capacity is always decision-specific and time-specific — never apply a blanket finding of incapacity",
    "The starting presumption is always that the person has capacity — the burden of proof lies with those who assert they do not",
    "Unwise decisions do not indicate a lack of capacity — people have the right to make decisions others consider foolish",
    "Every best interests decision must involve the person as fully as possible and consider their past and present wishes",
    "DoLS authorisation is required for any care arrangement that amounts to a deprivation of liberty for a person who lacks capacity",
    "An IMCA must be instructed for serious medical treatment and long-term accommodation decisions where the person has no appropriate representative",
    "A valid, applicable ADRT must be respected — acting against it may amount to an assault",
    "A registered Health and Welfare LPA or Court of Protection order must be seen and verified before an attorney/deputy makes decisions",
    "The least restrictive option must always be considered — more restrictive options need stronger justification",
  ],

  legislation: [
    "Mental Capacity Act 2005 — all provisions",
    "Mental Capacity (Amendment) Act 2019 — Liberty Protection Safeguards",
    "Mental Capacity Act 2005 Code of Practice (2007, updated 2023)",
    "Mental Health Act 1983 (as amended 2007) — interface with MCA",
    "Care Act 2014 — wellbeing, safeguarding and care planning",
    "Human Rights Act 1998 — Article 5 (right to liberty), Article 8 (right to private life)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 11 (Need for Consent)",
    "European Convention on Human Rights — Winterwerp criteria (lawful deprivation of liberty)",
    "Supreme Court judgment: P v Cheshire West [2014] — definition of deprivation of liberty",
    "Equality Act 2010 — reasonable adjustments in assessment processes",
    "DHSC: Mental Capacity Act and Deprivation of Liberty Safeguards Statutory Guidance",
    "CQC: Monitoring the Mental Capacity Act — guidance for providers",
  ],

  sections: [],

  procedure: [
    {
      heading: "1. The Five Statutory Principles",
      body: "The five principles in section 1 of the Mental Capacity Act 2005 are not guidelines — they are the legal framework within which every decision and every action at [ORGANISATION_NAME] must sit. Compliance with these principles is non-negotiable.",
      steps: [
        "A person must be assumed to have capacity unless it is established that they lack capacity — do not reverse this presumption",
        "A person is not to be treated as unable to make a decision unless all practicable steps to help them do so have been taken without success — consider communication aids, easier language, different times of day, trusted people",
        "A person is not to be treated as unable to make a decision merely because they make an unwise decision — the right to make unwise choices is an expression of autonomy",
        "An act done or decision made under the MCA for a person who lacks capacity must be done or made in their best interests",
        "Before the act is done or the decision is made, regard must be had to whether the purpose for which it is needed can be achieved in a way that is less restrictive of the person's rights and freedom of action",
      ],
      practiceBox:
        "Applying the principles in practice means asking, before every decision: 'Have I assumed capacity? Have I done everything I can to support this person to decide for themselves? Am I sure this is in their best interests? Is there a less restrictive way to achieve the same outcome?' These questions should become automatic.",
    },
    {
      heading: "2. Assessing Mental Capacity — The Two-Stage Test",
      body: "Any member of staff making a decision on behalf of a person who may lack capacity must first apply the two-stage test set out in sections 2 and 3 of the MCA 2005. The test must be documented contemporaneously.",
      subSections: [
        {
          heading: "2.1 Stage 1 — The Diagnostic Test",
          body: "Is there an impairment of, or a disturbance in the functioning of, the person's mind or brain? This includes, but is not limited to: dementia, acquired brain injury, learning disability, mental health conditions, stroke, unconsciousness, toxic states (including intoxication). This condition must be identified and documented — a capacity assessment cannot proceed without it.",
          warningBox:
            "A diagnosis of dementia, learning disability or mental health condition does not automatically mean the person lacks capacity. The diagnostic condition must be shown to actually prevent the person from making the specific decision in question. 'Has dementia' is not a sufficient basis for a finding of incapacity.",
        },
        {
          heading: "2.2 Stage 2 — The Functional Test",
          body: "Does the impairment mean the person is unable to: (1) understand the information relevant to the decision; (2) retain it long enough to make a decision; (3) use or weigh that information as part of the decision-making process; or (4) communicate their decision? Inability in any one of these four areas is sufficient to establish lack of capacity for the decision.",
          steps: [
            "Present the information in the clearest and simplest form possible",
            "Use alternative communication methods if needed (pictures, symbols, interpreters, communication passports)",
            "Allow as much time as the person needs",
            "Try different times of day when the person may be more alert",
            "Involve a speech and language therapist or psychologist if there is any doubt about how to assess communication",
          ],
        },
        {
          heading: "2.3 Recording a Capacity Assessment",
          body: "Every formal capacity assessment must be recorded in writing and must include:",
          bulletPoints: [
            "The specific decision being assessed",
            "The date and time of the assessment",
            "The relevant diagnostic condition (Stage 1)",
            "Details of the information provided to the person and how it was presented",
            "The person's responses and behaviour during the assessment",
            "The outcome — capacity or lack of capacity for this specific decision",
            "Who conducted the assessment and their role",
            "Any plans to reassess (capacity can change)",
          ],
        },
      ],
    },
    {
      heading: "3. Best Interests Decision-Making",
      body: "Where a person has been found to lack capacity for a specific decision, any action taken or decision made must be in their best interests. Section 4 of the MCA 2005 sets out the best interests checklist.",
      subSections: [
        {
          heading: "3.1 The Best Interests Checklist",
          body: "When determining best interests, the decision-maker must consider all relevant circumstances, including:",
          bulletPoints: [
            "Whether and when the person may regain capacity — if so, can the decision wait?",
            "The person's past and present wishes and feelings (including any written statements)",
            "The beliefs and values that would be likely to influence the person's decision if they had capacity",
            "Any other factors the person themselves would be likely to consider",
            "The views of anyone named by the person as someone to consult, carers and close family members, IMCAs, and anyone with an LPA or acting as a deputy",
          ],
          legalBox:
            "Section 4(6)(a) of the MCA 2005 requires the decision-maker to consider 'so far as is reasonably ascertainable' the person's past and present wishes and feelings. The Supreme Court in Aintree University Hospital v James [2013] confirmed that best interests is not simply about clinical outcomes — it must reflect what the person themselves would have wanted.",
        },
        {
          heading: "3.2 Who Makes a Best Interests Decision?",
          body: "The decision-maker for a best interests decision is the person responsible for the act or decision in question. For day-to-day care decisions, this is the care worker providing the care. For significant decisions about medical treatment or accommodation, this may be a clinician, the Registered Manager or a court-appointed deputy.",
          warningBox:
            "Family members and carers do not automatically have the right to make decisions for a person who lacks capacity. Unless they hold a valid, registered Health and Welfare LPA or are appointed as a deputy by the Court of Protection, they are consultees — not decision-makers. Their views must be taken into account but do not override the best interests analysis.",
        },
        {
          heading: "3.3 Recording a Best Interests Decision",
          body: "Every significant best interests decision must be recorded in the person's care file and must include:",
          bulletPoints: [
            "The specific decision and why it was necessary",
            "The decision-maker's name and role",
            "Who was consulted and what their views were",
            "How the person was involved (or why this was not possible)",
            "What the person's past wishes, feelings, beliefs and values indicated",
            "The options considered and why the chosen option is in the person's best interests",
            "Why the chosen option is the least restrictive option available",
            "The date of the decision and any plans for review",
          ],
        },
      ],
    },
    {
      heading: "4. Deprivation of Liberty — DoLS and LPS",
      body: "A person who lacks capacity and whose care arrangements amount to a deprivation of their liberty must be protected by an appropriate authorisation. Providing care that deprives a person of their liberty without authorisation is unlawful and may engage Articles 5 and 8 of the European Convention on Human Rights.",
      subSections: [
        {
          heading: "4.1 The Cheshire West Test",
          body: "Following the Supreme Court's ruling in P v Cheshire West and Chester Council [2014], a person is deprived of their liberty if they are under continuous supervision and control, and are not free to leave. The 'acid test' does not depend on the person's happiness, their compliance with the arrangement, or the motives of those providing care.",
          practiceBox:
            "In practice, many people supported by [ORGANISATION_NAME] in residential or supported living settings may be deprived of their liberty. The test is: is the person under continuous supervision? And are they not free to leave? If both answers are yes and the person lacks capacity to consent to their care arrangements, a DoLS authorisation or LPS authorisation is required.",
        },
        {
          heading: "4.2 DoLS in Registered Care Homes",
          body: "For service users in registered care homes, [ORGANISATION_NAME] is the managing authority and has duties to:",
          steps: [
            "Identify any person in their care who may be deprived of their liberty and lacks capacity to consent",
            "Apply for a standard authorisation from the supervisory body (local authority) before the deprivation begins, or as soon as it becomes apparent",
            "Grant an urgent authorisation (valid for 7 days, extendable to 14) if the deprivation must begin before a standard authorisation can be obtained",
            "Ensure the relevant person's representative (RPR) is appointed and supported",
            "Review the authorisation conditions regularly and apply for renewal before expiry",
            "Notify the supervisory body if the deprivation ends or the person's circumstances change materially",
          ],
          warningBox:
            "DoLS authorisations are time-limited. [ORGANISATION_NAME] must track expiry dates and submit renewal applications with sufficient lead time. An expired authorisation that is not renewed means the person is being deprived of their liberty unlawfully. This is a CQC Regulation 11 breach and a potential safeguarding matter.",
        },
        {
          heading: "4.3 Community and Home Care Settings",
          body: "DoLS does not apply in private homes. Where a person in a home care setting may be deprived of their liberty, an application must be made to the Court of Protection under section 16 of the MCA 2005 for a welfare order authorising the arrangements. [ORGANISATION_NAME] should seek urgent legal advice if this situation arises.",
        },
      ],
    },
    {
      heading: "5. Independent Mental Capacity Advocates (IMCAs)",
      body: "The IMCA service is a statutory advocacy provision. [ORGANISATION_NAME] has a legal duty to instruct an IMCA in defined circumstances.",
      bulletPoints: [
        "Serious medical treatment — where there is no one other than paid care workers to consult",
        "Long-term accommodation decisions (moves into/between care homes or hospitals for more than 8 weeks)",
        "Adult protection cases — the local authority may instruct an IMCA even where there is a family member",
        "Care reviews — where the local authority or NHS are involved and an IMCA is desirable",
      ],
      legalBox:
        "The duty to instruct an IMCA is set out in sections 37-39 of the MCA 2005. Failure to instruct an IMCA when required is a breach of the Act. The IMCA has the right to see relevant records and to meet the person privately. Their report must be taken into account in the best interests decision — it does not override the decision-maker's judgement.",
    },
    {
      heading: "6. Lasting Powers of Attorney and Court Orders",
      body: "Staff must understand when an LPA or Court of Protection order is relevant and how to act upon it correctly.",
      subSections: [
        {
          heading: "6.1 Verifying an LPA",
          body: "Before acting on an LPA, [ORGANISATION_NAME] must verify that:",
          steps: [
            "The LPA is registered with the Office of the Public Guardian (OPG) — an unregistered LPA has no legal force",
            "The type of LPA covers the decision in question (Health and Welfare LPA for care decisions; Property and Financial Affairs LPA for financial decisions)",
            "For a Health and Welfare LPA — the donor currently lacks capacity for the specific decision (a Health and Welfare LPA attorney can only act when the donor lacks capacity)",
            "The attorney is not acting outside the scope of their authority",
            "There are no restrictions or conditions in the LPA that limit the attorney's powers",
          ],
          practiceBox:
            "Always ask to see the original registered LPA document or a certified copy. Record the LPA reference number, the attorney's name, and the date of verification in the care file. If there is any doubt about validity, contact the OPG on 0300 456 0300 or via the OPG website.",
        },
        {
          heading: "6.2 Disputes with LPA Attorneys or Deputies",
          body: "If [ORGANISATION_NAME] has concerns that an attorney or deputy is not acting in the person's best interests — including evidence of financial abuse — it must report this to the Office of the Public Guardian and, if there is a safeguarding concern, to the Local Authority Safeguarding Adults Team.",
          warningBox:
            "Having an LPA does not give an attorney the right to demand a care provider act in a specific way if the registered manager believes this is not in the person's best interests. A care provider can decline to follow an attorney's instruction if it would constitute a breach of duty of care. Document all such decisions carefully.",
        },
      ],
    },
    {
      heading: "7. Advance Decisions to Refuse Treatment",
      body: "A valid, applicable Advance Decision to Refuse Treatment (ADRT) has the same legal force as a contemporaneous refusal by a person with capacity. Acting contrary to a valid ADRT may amount to an assault.",
      subSections: [
        {
          heading: "7.1 Validity Requirements",
          body: "For an ADRT to be valid it must:",
          bulletPoints: [
            "Be made by a person aged 18 or over with capacity at the time of making it",
            "Specify the treatment being refused",
            "Specify the circumstances in which the refusal applies",
            "Not have been withdrawn while the person had capacity",
            "For refusal of life-sustaining treatment: be in writing, signed and witnessed, and include an explicit statement that it applies even if life is at risk",
          ],
        },
        {
          heading: "7.2 Acting on an ADRT",
          body: "When [ORGANISATION_NAME] is made aware of an ADRT:",
          steps: [
            "Obtain and read the document — do not act on a second-hand account",
            "Assess whether it is valid (was the person over 18 with capacity? Is it specific? Is it applicable to the current situation?)",
            "For refusal of life-sustaining treatment, ensure a qualified clinician has also assessed validity",
            "Record the ADRT in the care plan and ensure it is easily accessible in an emergency",
            "Share with relevant healthcare providers, including the GP and any emergency services",
            "If there is doubt about validity or applicability, seek urgent legal or clinical advice — do not simply disregard it",
          ],
          warningBox:
            "An ADRT cannot authorise any act intended to end life. It can only refuse treatment — it cannot demand that specific treatment be given. If you are unsure whether an ADRT is valid, seek advice urgently rather than acting against it or simply ignoring it.",
        },
      ],
    },
    {
      heading: "8. Restraint and Restriction",
      body: "Section 6 of the MCA 2005 provides that the section 5 defence (protecting carers from liability for acts of care) does not apply to restraint unless two additional conditions are met.",
      bulletPoints: [
        "The person using restraint must reasonably believe it is necessary to prevent harm to the person who lacks capacity",
        "The restraint must be proportionate to the likelihood of the person suffering harm, and to the seriousness of that harm",
      ],
      warningBox:
        "Any restraint that goes beyond what is permitted under section 6 MCA — for example, restraint that is prolonged, excessive or not necessary to prevent harm — is unlawful. Any use of restrictive practice must be recorded and reviewed. Systematic or planned use of restraint requires specific authorisation (DoLS or court order). Refer to [ORGANISATION_NAME]'s Restraint and Restrictive Practice Policy.",
      legalBox:
        "The 'minimisation principle' in the MCA 2005 requires that any restriction on a person's liberty or autonomy must be the minimum necessary. The Courts have consistently held that restraint — even in care settings — engages Article 3 and Article 5 ECHR and must be strictly justified.",
    },
    {
      heading: "9. MCA in Day-to-Day Practice",
      body: "The MCA applies to the full spectrum of decisions — from whether to take a shower in the morning to decisions about surgery. Staff must apply MCA thinking proportionately to the significance of the decision.",
      subSections: [
        {
          heading: "9.1 Proportionate Application",
          body: "For low-level day-to-day decisions, a full written capacity assessment may not be required — but the principles must still be applied. For significant decisions (medical treatment, accommodation, financial management), a full written assessment and best interests record is mandatory.",
          practiceBox:
            "A useful rule: if you would not want to have to explain your decision to a CQC inspector or a court, you need to document it more fully. If in doubt, record. A brief note is always better than nothing.",
        },
        {
          heading: "9.2 Supporting Decision-Making",
          body: "Before concluding a person lacks capacity, all practicable steps to support their decision-making must be taken. This includes:",
          bulletPoints: [
            "Presenting information in simple, clear language or using visual aids",
            "Arranging for a trusted person to be present",
            "Using a communication aid or interpreter if needed",
            "Trying at different times of day when the person may be more lucid",
            "Involving a speech and language therapist or psychologist",
            "Giving the person more time to process the information",
          ],
        },
      ],
    },
    {
      heading: "10. Record Keeping and Documentation",
      body: "The quality of MCA documentation is one of the key indicators CQC uses to assess whether a service is applying the MCA correctly. Poor documentation is treated as evidence of poor practice.",
      bulletPoints: [
        "Capacity assessments must be in writing, dated and signed",
        "Best interests decisions must be recorded, including who was consulted and what they said",
        "DoLS authorisations must be held on file and tracked for expiry",
        "ADRT documents must be stored securely but accessibly — including for emergency services",
        "LPA details (type, attorney name, registration number, date verified) must be in the care plan",
        "MCA records form part of the person's care record and must be retained in line with the data retention policy",
      ],
    },
    {
      heading: "11. Training Requirements",
      body: "All staff must complete MCA training appropriate to their role. Training must be completed at induction and refreshed every two years.",
      bulletPoints: [
        "All care staff: MCA awareness (the five principles, two-stage test, best interests, DoLS overview) — at induction and every 2 years",
        "Senior care staff and team leaders: MCA Level 2 including ADRT, LPA, IMCA, DoLS assessment roles",
        "Registered Manager and MCA Lead: MCA Level 3 / Mental Capacity Act and Deprivation of Liberty specialist training",
        "Training must cover the interface between MCA and MHA, and between MCA and safeguarding",
      ],
    },
    {
      heading: "12. Quality Assurance and Monitoring",
      body: "The Registered Manager will monitor the quality of MCA implementation through:",
      bulletPoints: [
        "Monthly audit of a sample of capacity assessments and best interests decisions",
        "Quarterly DoLS register review — tracking all authorisations, expiry dates and renewals",
        "Annual MCA compliance audit against the CQC Key Lines of Enquiry",
        "Review of any CQC inspection findings relating to consent and MCA",
        "Staff survey on MCA confidence annually",
        "Review of any complaints or concerns that raise MCA issues",
      ],
    },
  ],

  training:
    "MCA training is mandatory for all staff before working unsupervised with service users. Refresher training is required every two years. The Registered Manager must hold evidence of all MCA training on staff files. Agency and bank staff must provide evidence of MCA training from their provider before being deployed.",

  monitoring:
    "Monthly audits of MCA documentation quality; quarterly DoLS register review; annual CQC-aligned MCA audit. The Registered Manager reports MCA compliance metrics to the Provider/Board quarterly.",

  relatedDocuments: [
    "saf-001 — Safeguarding Adults at Risk Policy",
    "eff-004 — End of Life Care Policy",
    "eff-001 — Care Planning Policy",
    "wl-006 — Record Keeping and Confidentiality Policy",
    "saf-012 — Restraint and Restrictive Practice Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Capacity Assessment Form",
      description:
        "Template for conducting and recording a formal mental capacity assessment. Includes the two-stage test, details of information presented, the person's responses, outcome and review date.",
    },
    {
      title: "Appendix B — Best Interests Decision Record",
      description:
        "Template for recording a best interests decision, including the options considered, persons consulted, the person's past and present wishes, and the rationale for the decision reached.",
    },
    {
      title: "Appendix C — DoLS Register",
      description:
        "Spreadsheet template for tracking all current DoLS authorisations: person's name, date of authorisation, supervisory body reference, conditions, expiry date, renewal application date.",
    },
    {
      title: "Appendix D — IMCA Referral Guidance",
      description:
        "Checklist of when an IMCA must be instructed and how to make a referral to the local IMCA service. Includes local IMCA service contact details.",
    },
  ],

  versionHistory: [
    { version: "3.1", date: "June 2026",    amendment: "Updated to reflect Liberty Protection Safeguards timetable delay; Cheshire West acid test explanation expanded; ADRT section rewritten to include signed/witnessed requirement clarification." },
    { version: "3.0", date: "March 2024",   amendment: "Full policy rewrite following updated MCA Code of Practice; best interests checklist updated; DoLS register requirement added." },
    { version: "2.3", date: "April 2022",   amendment: "Updated following CQC inspection findings; capacity assessment template revised." },
    { version: "2.2", date: "January 2021", amendment: "LPS provisions added following Royal Assent to Mental Capacity (Amendment) Act 2019; implementation dates updated." },
  ],
};
