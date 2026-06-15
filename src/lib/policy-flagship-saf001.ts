import type { DocumentContent } from "./documents";

// ═══════════════════════════════════════════════════════════════════════════════
// SAFEGUARDING ADULTS AT RISK — FLAGSHIP COMPREHENSIVE POLICY
// Equivalent depth: 18–20 printed A4 pages
// Legislative basis: Care Act 2014, Human Rights Act 1998, MCA 2005,
//   Modern Slavery Act 2015, Domestic Abuse Act 2021
// ═══════════════════════════════════════════════════════════════════════════════

export const SAF001_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] is absolutely committed to safeguarding the adults it supports. We believe that every person has the right to live free from abuse, exploitation and neglect. Safeguarding is not an additional activity — it is an integral part of the culture, values and day-to-day practice of everyone who works for or on behalf of [ORGANISATION_NAME]. We recognise that abuse can take many forms, can be carried out by anyone, and can occur anywhere. Our response will always be proportionate, person-centred and guided by the principle of Making Safeguarding Personal.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / Safeguarding Lead",

  purpose:
    "[ORGANISATION_NAME] is committed to protecting adults at risk from abuse, neglect and exploitation. This policy sets out the legal framework, organisational responsibilities and operational procedures that govern how [ORGANISATION_NAME] identifies, reports, responds to and learns from safeguarding concerns. It ensures that all staff, volunteers and contracted persons understand their individual and collective duty to safeguard the adults they support.",

  scope:
    "This policy applies to all individuals employed by or working on behalf of [ORGANISATION_NAME], including: permanent and temporary employees; bank and agency staff; volunteers; students and trainees on placement; and any person contracted to deliver services on behalf of the organisation. It applies in all settings and at all times — including during off-site activities, transport and any service delivered in a service user's own home. It covers all adult service users of [ORGANISATION_NAME] who may be at risk, regardless of whether the risk arises within or outside the service.",

  definitions: [
    {
      term: "Adult at Risk",
      definition:
        "Under section 42 of the Care Act 2014, an adult at risk is a person aged 18 or over who: (a) has needs for care and support (whether or not the local authority is meeting those needs); (b) is experiencing, or is at risk of, abuse or neglect; and (c) as a result of those care and support needs is unable to protect themselves from the risk of or experience of abuse or neglect.",
    },
    {
      term: "Abuse",
      definition:
        "A violation of an individual's human and civil rights by any other person or persons. Abuse may be a single act or repeated acts. It may be physical, verbal or psychological; it may be an act of neglect or an omission to act; or it may occur when a vulnerable person is persuaded to enter into a financial or sexual transaction to which they have not consented, or cannot consent.",
    },
    {
      term: "Safeguarding Enquiry (Section 42)",
      definition:
        "A formal enquiry carried out by a local authority, or directed by a local authority to another body, under section 42 of the Care Act 2014. An enquiry must be made when the local authority has reasonable cause to suspect an adult with care and support needs is experiencing or is at risk of abuse or neglect.",
    },
    {
      term: "Making Safeguarding Personal (MSP)",
      definition:
        "An approach adopted across adult safeguarding that seeks to ensure safeguarding is person-led and outcome-focused. It engages the person in a conversation about how best to respond to their safeguarding situation in a way that enhances involvement, choice and control as well as improving their quality of life, wellbeing and safety.",
    },
    {
      term: "Safeguarding Adults Board (SAB)",
      definition:
        "A statutory multi-agency board established under the Care Act 2014, led by the local authority and including representatives of the NHS, police and other partners. The SAB's primary objective is to assure itself that local safeguarding arrangements are effective.",
    },
    {
      term: "MARAC",
      definition:
        "Multi-Agency Risk Assessment Conference — a meeting where information is shared on the highest-risk cases of domestic abuse between representatives of local police, health, child protection, housing, Independent Domestic Violence Advisors (IDVAs) and other specialists.",
    },
    {
      term: "MASH",
      definition:
        "Multi-Agency Safeguarding Hub — a co-located, multi-disciplinary team that brings together key practitioners to share information and make decisions about the most appropriate safeguarding response for adults and children.",
    },
    {
      term: "IMCA",
      definition:
        "Independent Mental Capacity Advocate — a person appointed under the Mental Capacity Act 2005 to represent and support adults who lack the mental capacity to make specific decisions and who have no one else (other than paid carers) to support them.",
    },
    {
      term: "Deprivation of Liberty Safeguards (DoLS) / Liberty Protection Safeguards (LPS)",
      definition:
        "Legal frameworks that protect people who lack mental capacity and who may be deprived of their liberty in order to receive care or treatment. DoLS applies in registered care homes and hospitals; LPS will eventually replace DoLS across all settings.",
    },
    {
      term: "Safeguarding Adults Review (SAR)",
      definition:
        "A review conducted by a Safeguarding Adults Board when an adult has died or been seriously harmed and abuse or neglect is suspected, and when there is concern that organisations could have worked more effectively to protect the adult.",
    },
    {
      term: "Coercive Control",
      definition:
        "An act or a pattern of acts of assault, threats, humiliation and intimidation or other abuse that is used to harm, punish or frighten the victim. It is an offence under section 76 of the Serious Crime Act 2015.",
    },
    {
      term: "Cuckooing",
      definition:
        "A practice used by criminal gangs and drug dealers where they take over a vulnerable person's home and use it as a base for criminal activity. The term is associated with county lines drug operations.",
    },
    {
      term: "Whistleblowing",
      definition:
        "The act of a staff member reporting a concern about a colleague, manager or the organisation itself where that concern relates to potential wrongdoing, illegality or safeguarding risk.",
    },
  ],

  responsibilities: [
    {
      role: "Provider / Board",
      duties: [
        "Ensure the organisation has robust safeguarding policies, procedures and governance in place",
        "Designate a Senior Safeguarding Lead at board or provider level",
        "Ensure the Registered Manager has the qualifications, resources and support to fulfil the safeguarding lead role",
        "Receive and review safeguarding exception reports at least quarterly",
        "Ensure all Fit and Proper Person requirements are met in relation to safeguarding",
        "Commission a Safeguarding Adults Review when required under the Care Act 2014",
      ],
    },
    {
      role: "Registered Manager / Safeguarding Lead",
      duties: [
        "Act as, or designate, a Safeguarding Lead who is trained to at least safeguarding adults Level 3",
        "Ensure all safeguarding concerns are reported to the Local Authority Safeguarding Adults Team on the same working day",
        "Submit CQC Regulation 18 notifications for all safeguarding incidents within 24 hours",
        "Ensure all staff receive safeguarding training at induction and at least every two years thereafter",
        "Lead investigations into allegations against staff under the employer's procedure",
        "Maintain a safeguarding log and review trends at monthly governance meetings",
        "Make referrals to the Disclosure and Barring Service (DBS) where appropriate",
        "Engage fully with section 42 enquiries and any Safeguarding Adults Reviews",
        "Ensure Making Safeguarding Personal is embedded in all safeguarding practice",
        "Notify the Local Authority of any safeguarding concern involving a person who lacks capacity to consent to the referral",
        "Ensure staff understand the interface between safeguarding and the Mental Capacity Act 2005",
      ],
    },
    {
      role: "Senior Care Staff / Team Leaders",
      duties: [
        "Act as first line of support for staff reporting safeguarding concerns",
        "Ensure concerns are passed to the duty manager immediately — within the same shift",
        "Never investigate an allegation themselves or attempt to resolve it informally",
        "Assist with record keeping and preservation of evidence",
        "Support staff wellbeing following a safeguarding concern or incident",
        "Lead safeguarding discussions in team meetings and handovers",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Recognise the signs and indicators of all ten types of abuse defined in the Care Act 2014",
        "Report any safeguarding concern, however minor it may seem, to the duty manager immediately",
        "Never promise confidentiality to a person disclosing abuse",
        "Never investigate allegations or confront an alleged abuser",
        "Preserve any physical evidence related to a concern",
        "Record what they observed or was disclosed using the person's own words, factually and without interpretation",
        "Complete required safeguarding training within specified timeframes",
        "Understand the Prevent duty and report any concerns about radicalisation to the manager",
        "Be aware of the whistleblowing procedure and use it if normal reporting channels are blocked",
      ],
    },
    {
      role: "Volunteers and Students",
      duties: [
        "Complete safeguarding awareness training before working with service users",
        "Report any concern to their supervisor or the duty manager without delay",
        "Follow the same principles as employed staff in relation to confidentiality, evidence preservation and recording",
      ],
    },
  ],

  keyPoints: [
    "Safeguarding is everyone's responsibility — it is not solely the duty of the manager or the safeguarding lead",
    "Any concern, however minor, must be reported — there is no such thing as 'too small to report'",
    "The duty to share information to protect an adult at risk overrides the duty of confidentiality",
    "Making Safeguarding Personal means the adult's voice and wishes must be at the centre of every safeguarding response",
    "An allegation against a staff member must be treated as a safeguarding concern, not just a disciplinary matter",
    "Modern slavery, county lines drug exploitation and domestic abuse are recognised forms of abuse and must be responded to accordingly",
    "The Mental Capacity Act 2005 provides the framework for safeguarding decisions where a person lacks capacity to consent",
    "A DBS referral must be made to the Disclosure and Barring Service if a staff member is dismissed or removed from working with vulnerable people following a safeguarding finding",
    "Staff who make a protected disclosure in good faith are protected from retaliation under the Public Interest Disclosure Act 1998",
  ],

  legislation: [
    "Care Act 2014 — sections 42 to 47 (safeguarding adults duties)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 13 (Safeguarding)",
    "Human Rights Act 1998 — Article 2 (Right to Life), Article 3 (Freedom from Torture), Article 8 (Right to Privacy)",
    "Mental Capacity Act 2005 — decision-making and best interests",
    "Mental Capacity (Amendment) Act 2019 — Liberty Protection Safeguards",
    "Domestic Abuse Act 2021",
    "Serious Crime Act 2015 — section 76 (coercive and controlling behaviour)",
    "Modern Slavery Act 2015",
    "Safeguarding Vulnerable Groups Act 2006",
    "Protection of Freedoms Act 2012 (DBS provisions)",
    "Public Interest Disclosure Act 1998 (whistleblowing)",
    "Data Protection Act 2018 / UK GDPR — lawful sharing in safeguarding",
    "Equality Act 2010",
    "Crime and Disorder Act 1998",
    "Counter-Terrorism and Security Act 2015 — Prevent duty",
    "DHSC: Care and Support Statutory Guidance (updated 2023) — Chapter 14",
    "CQC: Fundamental Standards — Regulation 13",
    "Local Government and Social Care Ombudsman: Safeguarding Guidance",
  ],

  sections: [], // legacy field — content is in procedure[] below

  procedure: [
    {
      heading: "1. Policy Statement and Organisational Commitment",
      body:
        "[ORGANISATION_NAME] is unconditionally committed to ensuring that every person it supports is safe from abuse, neglect and exploitation. We operate a zero-tolerance approach to abuse in all its forms. This commitment extends to action — not just aspiration. Every safeguarding concern will be taken seriously, responded to promptly and will inform learning and improvement.",
      legalBox:
        "Section 1 of the Care Act 2014 establishes a general duty on local authorities to promote the wellbeing of individuals needing care and support. The six wellbeing principles include 'protection from abuse and neglect' as a core component. As a registered care provider, [ORGANISATION_NAME] shares responsibility for fulfilling this duty.",
      practiceBox:
        "Best practice: The difference between a safeguarding-aware organisation and one that is not is often cultural — the willingness of staff at every level to speak up, the confidence that concerns will be taken seriously, and the absence of blame when concerns are raised in good faith.",
    },
    {
      heading: "2. Aims and Objectives",
      body:
        "The aims of this policy are to:",
      steps: [
        "Protect adults with care and support needs from abuse, neglect and exploitation",
        "Ensure all staff understand and fulfil their safeguarding responsibilities",
        "Embed Making Safeguarding Personal across all safeguarding activity",
        "Establish clear reporting and referral pathways that are known to all staff",
        "Ensure proportionate, timely responses to all safeguarding concerns",
        "Work in effective partnership with the Local Authority, CQC, Police and NHS",
        "Create an environment where staff feel safe to raise concerns without fear of retaliation",
        "Learn from safeguarding incidents and continually improve practice",
        "Ensure compliance with all relevant legislation, statutory guidance and CQC requirements",
      ],
    },
    {
      heading: "3. Types of Abuse and Neglect",
      body:
        "The Care Act 2014 and the accompanying statutory guidance identify ten categories of abuse and neglect. All staff must be trained to recognise the signs and indicators of each. The following are not exhaustive descriptions — the absence of visible indicators does not mean abuse is not occurring.",
      subSections: [
        {
          heading: "3.1 Physical Abuse",
          body:
            "Physical abuse includes hitting, slapping, pushing, kicking, misuse of medication, restraint or inappropriate physical sanctions.",
          bulletPoints: [
            "Unexplained bruising, cuts, burns or injuries",
            "Injuries inconsistent with the explanation given",
            "Flinching when approached by certain staff",
            "Fear of being touched or assisted with personal care",
            "Injuries in unusual locations (e.g. inner arms, thighs, torso)",
          ],
        },
        {
          heading: "3.2 Domestic Violence or Abuse",
          body:
            "Any incident or pattern of incidents of controlling, coercive, threatening behaviour, violence or abuse between those aged 16 or over who are, or have been, intimate partners or family members regardless of gender or sexuality.",
          bulletPoints: [
            "Visible injuries with implausible explanations",
            "Partner or family member refuses to allow private communication",
            "Service user appears frightened, anxious or subdued around a specific person",
            "History of isolation from friends and wider family",
            "Financial control — no access to money or benefits",
          ],
        },
        {
          heading: "3.3 Sexual Abuse",
          body:
            "Rape, indecent exposure, sexual harassment, inappropriate touching, unwanted sexual acts, sexual teasing or innuendo, photographing a person in sexual poses, voyeurism, and the involvement of a person in pornography.",
          bulletPoints: [
            "Unexplained injuries or soreness in genital areas",
            "Sexually transmitted infections",
            "Distress before, during or after personal care",
            "Inappropriate sexual knowledge or behaviour",
            "Self-harm or withdrawal",
          ],
          warningBox:
            "Any allegation of sexual abuse must be reported to the police immediately, regardless of whether the alleged victim has consented to a referral or lacks capacity to consent. Evidence must be preserved — do not bath or shower the person. Do not wash bedding or clothing.",
        },
        {
          heading: "3.4 Psychological or Emotional Abuse",
          body:
            "Threats of harm or abandonment, deprivation of contact, humiliation, blaming, controlling, intimidation, coercion, harassment, verbal abuse, cyber bullying, isolation and unreasonable or unjustified withdrawal of services or supportive networks.",
          bulletPoints: [
            "Low self-esteem, tearfulness, withdrawal",
            "Sudden changes in behaviour",
            "Fear of speaking in front of certain people",
            "Statements such as 'I mustn't say' or 'they'll be angry with me'",
            "Evidence of being controlled, monitored or isolated",
          ],
        },
        {
          heading: "3.5 Financial or Material Abuse",
          body:
            "Theft, fraud, exploitation, pressure in connection with wills, property or inheritance, financial transactions, or the misuse or misappropriation of property, possessions or benefits.",
          bulletPoints: [
            "Unexplained withdrawal of money or changes to financial arrangements",
            "Inability to pay for basic needs despite appearing to have adequate income",
            "A new individual showing unusual interest in the person's finances",
            "Unexpected changes to a will or power of attorney",
            "Unpaid bills, debts or lack of necessities",
          ],
          warningBox:
            "Staff must never accept gifts, loans or inheritances from service users. Receiving financial benefit from a service user is a potential disciplinary and safeguarding matter. Staff must report any concern about a service user's finances immediately.",
        },
        {
          heading: "3.6 Modern Slavery",
          body:
            "Modern slavery encompasses slavery, human trafficking, forced labour and domestic servitude. Traffickers and slave masters use whatever means they have at their disposal to coerce, deceive and force individuals into a life of abuse, servitude and inhumane treatment.",
          bulletPoints: [
            "Appears malnourished, unkempt or inappropriately dressed",
            "Shows signs of physical or psychological abuse",
            "Seems fearful, submissive or avoids eye contact",
            "Does not appear to be in control of their own money, ID documents or movement",
            "Has multiple people living in a cramped space",
            "Is not allowed to speak for themselves",
          ],
          legalBox:
            "The Modern Slavery Act 2015 requires organisations to report suspected modern slavery. Staff must not attempt to 'rescue' victims themselves — contact the National Referral Mechanism (NRM) via the Single Competent Authority (0800 0121 700) and inform the Registered Manager immediately.",
        },
        {
          heading: "3.7 Discriminatory Abuse",
          body:
            "Abuse that is motivated by a prejudice against a person's protected characteristics under the Equality Act 2010, including age, disability, gender reassignment, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.",
          bulletPoints: [
            "Derogatory remarks or 'jokes' about a person's protected characteristics",
            "Denying a person services based on prejudice",
            "Treating a person less favourably because of who they are",
            "Hate crime or hate incidents",
          ],
        },
        {
          heading: "3.8 Organisational or Institutional Abuse",
          body:
            "Mistreatment or abuse within a care setting or organisation, or due to poor practice or systems. This includes rigid routines that do not reflect the needs of individuals, denial of privacy and dignity, and inappropriate use of medication.",
          bulletPoints: [
            "Rigid, task-focused routines that override individual choice",
            "Systematic use of inappropriate restraint",
            "Service users being 'batch processed' without individuality",
            "Staff speaking about service users in derogatory ways",
            "Denial of basic rights such as choice of food, clothing or activity",
          ],
          warningBox:
            "Organisational abuse is difficult to identify because it can become 'normalised' — staff who witness it may come to see it as 'the way we do things here'. Any concern about the culture or practice of the organisation must be raised through the whistleblowing procedure without delay.",
        },
        {
          heading: "3.9 Neglect and Acts of Omission",
          body:
            "Ignoring medical, emotional or physical care needs; failure to provide access to appropriate health, social care or educational services; the withholding of the necessities of life, such as medication, adequate nutrition and heating.",
          bulletPoints: [
            "Pressure ulcers resulting from failure to reposition",
            "Malnutrition or dehydration",
            "Failure to administer prescribed medication",
            "Failure to access appropriate healthcare",
            "Failure to support with personal hygiene",
            "Leaving a person wet, soiled or in pain",
          ],
        },
        {
          heading: "3.10 Self-Neglect",
          body:
            "Self-neglect covers a wide range of behaviour: neglecting to care for one's personal hygiene, health or surroundings, and includes behaviour such as hoarding. A person may self-neglect because of mental health needs, addiction, capacity issues or a lifestyle choice.",
          practiceBox:
            "Self-neglect is particularly complex because of the tension between autonomy (the right of a person to make unwise decisions) and protection. The starting point is always a mental capacity assessment. If the person has capacity, their right to self-determine must be respected — but risk-managed, risk-documented and regularly reviewed.",
        },
      ],
    },
    {
      heading: "4. Recognising Abuse — General Indicators",
      body:
        "Abuse and neglect are rarely obvious. Staff should be alert to changes from a person's baseline — physical, behavioural or emotional changes that cannot be explained by the person's condition. The following general indicators, combined with knowledge of the individual, should trigger a concern:",
      bulletPoints: [
        "Unexplained or poorly explained injuries",
        "Significant change in behaviour, mood or personality",
        "Withdrawal, depression or anxiety that is new or worsening",
        "Fearfulness around specific individuals",
        "Reluctance to be alone with certain members of staff",
        "Expressions of hopelessness, worthlessness or fear",
        "Unexplained financial changes",
        "Deterioration in physical health or personal care without clinical explanation",
        "Disclosure — direct or indirect — of abuse by the person themselves or a third party",
        "Physical signs of restraint or force",
      ],
      warningBox:
        "A person's denial that abuse is occurring does not mean abuse is not occurring. Some forms of abuse — particularly coercive control and financial abuse — involve the victim being pressured to deny the abuse. Always consider the wider picture.",
    },
    {
      heading: "5. Reporting a Safeguarding Concern — Step-by-Step Procedure",
      body:
        "The following procedure must be followed whenever a member of staff observes, is informed of, or suspects abuse or neglect. Speed is essential — delay can put the person at further risk.",
      steps: [
        "IMMEDIATE SAFETY — Ensure the immediate safety of the person. If they are in danger, call 999. If medical attention is required, call 999 or arrange urgent GP attendance.",
        "DO NOT INVESTIGATE — Do not ask leading questions, investigate the concern yourself, confront the alleged abuser or attempt an informal resolution.",
        "DO NOT PROMISE CONFIDENTIALITY — If a person begins to disclose, listen actively but do not promise that you will keep what they say to yourself. Explain calmly that you have a duty to share some information to keep them safe.",
        "RECORD — As soon as possible after the concern arises, record what you observed or what was said. Use the person's own words. Record the time, date, location and who else was present. Do not add opinion or interpretation.",
        "PRESERVE EVIDENCE — If there is physical evidence (bedding, clothing, the scene of an incident), do not disturb it. If there has been a sexual assault, do not bath or wash the person.",
        "REPORT TO DUTY MANAGER — Inform the duty manager or Registered Manager immediately — within the same shift. This is a non-negotiable duty.",
        "COMPLETE AN INCIDENT FORM — A formal incident report must be completed on the same day, using the organisation's incident reporting system.",
        "DO NOT SPEAK TO OTHERS — Safeguarding referrals and investigations are confidential. Do not discuss the concern with other service users, families, or non-involved staff.",
        "SUPPORT THE PERSON — Continue to provide care to the person while the concern is being managed. They must not be left feeling isolated or abandoned.",
      ],
      warningBox:
        "If the concern involves the Registered Manager or another senior person, or if you have reported a concern and no action has been taken, you may refer directly to the Local Authority Safeguarding Adults Team, CQC (0300 061 6161) or use the whistleblowing procedure. Your employment rights are protected under the Public Interest Disclosure Act 1998.",
    },
    {
      heading: "6. Referral to the Local Authority",
      body:
        "Following receipt of a safeguarding concern, the Registered Manager or Safeguarding Lead is responsible for making a formal referral to the Local Authority Safeguarding Adults Team. This must be done on the same day the concern is received by the manager.",
      subSections: [
        {
          heading: "6.1 When to Refer",
          body:
            "A referral must be made where there are reasonable grounds to believe that an adult with care and support needs is experiencing or is at risk of abuse or neglect. The threshold is 'reasonable cause to suspect' — certainty is not required. When in doubt, refer.",
          steps: [
            "The concern involves an adult aged 18 or over",
            "The adult has needs for care and support",
            "There are reasonable grounds to suspect abuse or neglect",
            "The adult appears unable to protect themselves from the risk",
          ],
        },
        {
          heading: "6.2 How to Refer",
          body:
            "Contact the Local Authority Safeguarding Adults Team by telephone (using the number on [ORGANISATION_NAME]'s safeguarding contacts list) and follow up in writing within 24 hours using the local authority's referral form or [ORGANISATION_NAME]'s own safeguarding referral documentation.",
          bulletPoints: [
            "Record the date, time and name of the person spoken to at the local authority",
            "Record the local authority reference number if provided",
            "Retain a copy of all referral documentation",
            "Submit CQC Regulation 18 notification within 24 hours of the concern arising",
            "Inform the person's key worker and update the care record appropriately",
          ],
        },
        {
          heading: "6.3 When a Person Lacks Capacity to Consent to Referral",
          body:
            "Where a person lacks mental capacity to consent to a safeguarding referral, the decision to refer must be made in their best interests under the Mental Capacity Act 2005. This will almost always mean referring. The lack of consent does not prevent a referral — it makes one more necessary.",
          legalBox:
            "Section 42(3) of the Care Act 2014 states that where a local authority is conducting a safeguarding enquiry, the person must be involved in the process as far as practicable, even if they lack capacity. The MCA 2005 principles require that any best interests decision must consider the person's past and present wishes, feelings, beliefs and values.",
        },
      ],
    },
    {
      heading: "7. Making Safeguarding Personal",
      body:
        "Making Safeguarding Personal (MSP) is the approach set out in the Care Act 2014 statutory guidance. It requires that safeguarding is person-led and outcome-focused. The adult must be at the centre of every safeguarding decision.",
      subSections: [
        {
          heading: "7.1 The MSP Approach in Practice",
          body:
            "At [ORGANISATION_NAME], we will always ask the person what they want to happen, respect their wishes wherever it is safe and lawful to do so, and explain any situations where we cannot do so.",
          steps: [
            "Ask the person what outcome they want from the safeguarding process",
            "Explain the options available to them and the potential consequences of each",
            "Respect their decision if they have capacity to make it",
            "Document their views and wishes in the safeguarding record",
            "Where a person lacks capacity, appoint an advocate (IMCA if no suitable person is available)",
            "Report back to the person on what happened and what was done",
          ],
        },
        {
          heading: "7.2 When a Person Does Not Want a Referral",
          body:
            "If an adult with capacity does not want a safeguarding referral made, their wishes must generally be respected. However, this must be risk-assessed carefully. There are circumstances in which a referral must be made regardless of the person's wishes.",
          bulletPoints: [
            "The risk to the person is very high (life-threatening or risk of serious harm)",
            "Other adults are at risk from the same abuser",
            "A criminal offence has occurred",
            "The person is subject to coercive control and may not be expressing a free choice",
            "The person lacks capacity in relation to the specific decision",
          ],
          warningBox:
            "If you are unsure whether to proceed with a referral against a person's stated wishes, discuss with the Safeguarding Lead and document the decision carefully, including your reasoning. 'No referral made because the person said no' is not, by itself, sufficient justification where the risk is high.",
        },
      ],
    },
    {
      heading: "8. Allegations Against Staff",
      body:
        "Allegations of abuse by a member of staff or volunteer are among the most serious concerns a care organisation can face. They require a particularly careful response because the allegation simultaneously triggers safeguarding processes, employment processes and potentially criminal processes.",
      subSections: [
        {
          heading: "8.1 Immediate Action",
          body:
            "On receipt of an allegation against a member of staff:",
          steps: [
            "Ensure the safety of the service user — remove them from contact with the alleged abuser if necessary",
            "Do not confront the staff member or carry out any preliminary investigation",
            "Contact the Registered Manager immediately (or the Provider if the allegation is against the Manager)",
            "Make a referral to the Local Authority Safeguarding Adults Team on the same day",
            "Consider whether the staff member should be suspended pending investigation",
            "Notify the person's family and, where appropriate, commissioners",
            "Submit a CQC Regulation 18 notification within 24 hours",
          ],
        },
        {
          heading: "8.2 Suspension and Investigation",
          body:
            "Suspension of the staff member is not automatic but must be considered in every case. The decision must be based on risk — specifically, the risk to service users if the person continues to work whilst the allegation is investigated. Suspension is a neutral act — it is not a presumption of guilt.",
          practiceBox:
            "The employer's investigation runs in parallel with (not instead of) the safeguarding process. Do not wait for the outcome of one before proceeding with the other. The Local Authority leads the safeguarding process; the employer leads the employment process. Keep the two separate to avoid compromising either.",
        },
        {
          heading: "8.3 DBS Referral",
          body:
            "A referral must be made to the Disclosure and Barring Service (DBS) if a staff member is dismissed, removed from regulated activity, or would have been dismissed had they not resigned, following a finding of harm or risk of harm to a service user.",
          legalBox:
            "Failure to refer to the DBS when required is a criminal offence under the Safeguarding Vulnerable Groups Act 2006. Employers must not use the fact that a staff member has resigned, retired or been redeployed to avoid their duty to refer.",
        },
      ],
    },
    {
      heading: "9. Domestic Abuse and Safeguarding",
      body:
        "Domestic abuse is a form of abuse within the meaning of the Care Act 2014 and must be responded to within the safeguarding framework. The Domestic Abuse Act 2021 extended the definition of domestic abuse and created new duties on local authorities and other bodies.",
      subSections: [
        {
          heading: "9.1 Definition",
          body:
            "Under the Domestic Abuse Act 2021, domestic abuse includes: physical, sexual, financial, emotional and controlling or coercive behaviour between partners, ex-partners and family members aged 16 and over. It includes non-physical forms — controlling, coercive or threatening behaviour is an offence under section 76 of the Serious Crime Act 2015.",
        },
        {
          heading: "9.2 Identifying Domestic Abuse",
          body:
            "Domestic abuse may be difficult to identify because victims are often prevented from disclosing, may minimise what is happening to them, or may fear the consequences of reporting. Staff at [ORGANISATION_NAME] should:",
          steps: [
            "Create an environment where the person feels safe to disclose",
            "Offer private, confidential conversations where possible",
            "Use safe communication — do not discuss safeguarding concerns in front of the suspected abuser",
            "Be aware of the indicators listed in section 3.2 of this policy",
            "Use resources such as the DASH (Domestic Abuse, Stalking and Honour-based violence) risk assessment tool",
          ],
        },
        {
          heading: "9.3 Response",
          body:
            "On identifying or suspecting domestic abuse, follow the safeguarding reporting procedure set out in section 5. Referral to MARAC (Multi-Agency Risk Assessment Conference) should be considered for high-risk cases. An IDVA (Independent Domestic Violence Advisor) may be the most appropriate support resource.",
        },
      ],
    },
    {
      heading: "10. Modern Slavery and County Lines",
      body:
        "Modern slavery is recognised as abuse under the Care Act 2014. County lines drug exploitation (where criminal gangs exploit vulnerable individuals to transport and sell drugs across county lines) is a rapidly growing form of exploitation that staff may encounter.",
      subSections: [
        {
          heading: "10.1 The National Referral Mechanism",
          body:
            "Any person suspected of being a victim of modern slavery (including trafficking, forced labour and domestic servitude) should be referred to the National Referral Mechanism (NRM). For adults, this requires the victim's consent. The Single Competent Authority can be contacted on 0800 0121 700.",
          legalBox:
            "The Modern Slavery Act 2015 imposes a duty on public authorities to notify the Home Office of known or suspected victims of modern slavery. Care providers are not public authorities but have a moral and safeguarding duty to report.",
        },
        {
          heading: "10.2 County Lines — What to Look For",
          body:
            "County lines exploitation may not be immediately recognisable. Indicators include:",
          bulletPoints: [
            "Unexplained or increasing presence of unknown visitors",
            "The service user's home being used by others (cuckooing)",
            "Fear of certain individuals or pressure to perform tasks",
            "Unexplained cash, mobile phones or gifts",
            "Evidence of drug use or drug dealing activity in or near the home",
            "The person being absent for unexplained periods",
          ],
        },
      ],
    },
    {
      heading: "11. Safeguarding and the Mental Capacity Act 2005",
      body:
        "The interface between safeguarding and the Mental Capacity Act 2005 is central to effective adult safeguarding practice at [ORGANISATION_NAME]. Capacity is decision-specific and time-specific — a person may have capacity to make some decisions but not others.",
      subSections: [
        {
          heading: "11.1 The Five Principles of the MCA",
          body:
            "All safeguarding decisions involving a person whose capacity may be in question must be governed by the five statutory principles:",
          steps: [
            "A person must be assumed to have capacity unless it is established that they do not",
            "A person is not to be treated as unable to make a decision unless all practicable steps to help them do so have been taken without success",
            "A person is not to be treated as unable to make a decision merely because they make an unwise decision",
            "An act done or decision made for a person who lacks capacity must be done or made in their best interests",
            "Before the act is done or the decision made, regard must be had to whether the purpose can be achieved in a way that is less restrictive of the person's rights and freedom of action",
          ],
        },
        {
          heading: "11.2 Capacity Assessments in Safeguarding",
          body:
            "Where a safeguarding concern arises in relation to a person whose capacity may be in doubt, a formal capacity assessment must be conducted in relation to the specific decision in question. The assessment must be documented and must record the two-stage test: (1) Does the person have an impairment of the mind or brain? (2) Does that impairment prevent them from making the specific decision at this time?",
          warningBox:
            "A person's vulnerability, disability or mental health condition does not, by itself, mean they lack capacity. Every person must be assessed individually, for each specific decision. Assuming incapacity without conducting the two-stage test is itself a safeguarding concern.",
        },
      ],
    },
    {
      heading: "12. Multi-Agency Working and Information Sharing",
      body:
        "[ORGANISATION_NAME] is committed to working effectively in partnership with other agencies in the local safeguarding system. Effective safeguarding requires the timely and proportionate sharing of information between agencies.",
      subSections: [
        {
          heading: "12.1 The Legal Basis for Sharing Information",
          body:
            "The general duty of confidentiality does not prevent the sharing of information where it is necessary to protect an individual from serious harm. Section 45 of the Care Act 2014 specifically enables local authorities and their partners to share information for the purpose of protecting an adult at risk. UK GDPR Article 9(2)(b) permits the processing of special category data where necessary for safeguarding purposes.",
          legalBox:
            "The seven principles for information sharing in safeguarding (DHSC, 2023) are: (1) justify the purpose; (2) share only what is necessary; (3) use only the minimum information required; (4) share on a 'need to know' basis; (5) everyone must understand their responsibilities; (6) comply with the law; (7) the duty to share can be as important as the duty to protect.",
        },
        {
          heading: "12.2 Working with the Safeguarding Adults Board",
          body:
            "The local Safeguarding Adults Board (SAB) is the statutory multi-agency body responsible for overseeing adult safeguarding in the local area. [ORGANISATION_NAME] will cooperate fully with the SAB, including contributing to Safeguarding Adults Reviews (SARs) and implementing any recommendations arising from them.",
        },
      ],
    },
    {
      heading: "13. Prevent Duty",
      body:
        "The Counter-Terrorism and Security Act 2015 places a duty on certain organisations, including many in health and social care, to have 'due regard' to the need to prevent people from being drawn into terrorism. Staff at [ORGANISATION_NAME] should be aware of the Prevent duty and understand when to make a referral.",
      steps: [
        "If a staff member has concerns that a service user or visitor is being drawn into radicalisation, report this to the Registered Manager immediately",
        "The Registered Manager will contact the local police Prevent team (via 101) or refer through Channel, the government's early intervention programme",
        "Do not challenge the individual about suspected radicalisation — this should be left to trained professionals",
        "The confidentiality of the concern must be maintained",
      ],
      practiceBox:
        "Radicalisation can affect people of any background, religion or nationality. Vulnerability factors include: personal grievance, mental health issues, social isolation, being the victim of discrimination, and a charismatic relationship with an extremist recruiter. The indicators of concern are not the same as indicators of criminality — a referral through Channel is a welfare intervention, not a criminal process.",
    },
    {
      heading: "14. Record Keeping in Safeguarding",
      body:
        "All safeguarding concerns, referrals, discussions and actions must be documented accurately and contemporaneously. Good records protect both service users and staff.",
      steps: [
        "Complete a safeguarding concern record on the same day the concern arises, using the person's own words wherever possible",
        "Record the date, time, location and names of those present",
        "Record what was observed, heard or disclosed — not opinions or interpretations",
        "Record all actions taken, including contacts made with the local authority, police, CQC or other agencies",
        "Record the referral details — who was spoken to, when, the reference number provided",
        "Record any discussion with the person about their wishes and what outcome they want",
        "Store all safeguarding records securely, in line with the organisation's data retention policy",
        "Do not include safeguarding records in the main care record where this could jeopardise the safety of the investigation",
      ],
      warningBox:
        "Safeguarding records may be reviewed by the Local Authority, CQC, Police or a Safeguarding Adults Review panel. They may also be disclosable in legal proceedings. Inaccurate, incomplete or falsified records are not only a professional failing — they may constitute evidence of a cover-up.",
    },
    {
      heading: "15. Staff Training and Competency",
      body:
        "All staff at [ORGANISATION_NAME] must complete safeguarding training that is appropriate to their role.",
      subSections: [
        {
          heading: "15.1 Minimum Training Requirements",
          body: "The following training requirements apply:",
          bulletPoints: [
            "All staff: Safeguarding Adults Awareness (Level 1/2) — at induction and every 2 years",
            "Registered Manager and Safeguarding Lead: Safeguarding Adults Level 3 or equivalent — on appointment and updated every 3 years",
            "Senior care staff: Level 2 with additional domestic abuse and modern slavery awareness",
            "All staff: Mental Capacity Act and DoLS/LPS awareness — at induction and every 2 years",
          ],
        },
        {
          heading: "15.2 Training Content — Minimum Standards",
          body: "Safeguarding training at [ORGANISATION_NAME] will cover as a minimum:",
          bulletPoints: [
            "The legislative framework — Care Act 2014 section 42, the Fundamental Standards",
            "The ten types of abuse and indicators of each",
            "Making Safeguarding Personal",
            "The reporting and referral procedure for [ORGANISATION_NAME]",
            "Record keeping requirements",
            "Mental Capacity Act 2005 — the five principles, two-stage test and best interests",
            "Allegations against staff",
            "Modern slavery and county lines exploitation",
            "Domestic abuse — indicators and referral pathways",
            "Prevent duty",
            "Whistleblowing and the freedom to speak up",
          ],
        },
      ],
    },
    {
      heading: "16. Quality Assurance and Monitoring",
      body:
        "[ORGANISATION_NAME] will monitor the effectiveness of its safeguarding arrangements through the following mechanisms:",
      bulletPoints: [
        "Monthly review of the safeguarding log by the Registered Manager",
        "Quarterly safeguarding audit covering referral quality, timeliness, record keeping and staff training compliance",
        "Annual review of this policy against any changes to legislation, statutory guidance or CQC inspection methodology",
        "Review of all relevant CQC inspection reports for learning",
        "Contribution to the local Safeguarding Adults Board annual report processes",
        "Review of any Safeguarding Adults Review (SAR) findings that are relevant to the organisation's service type",
        "Staff survey on safeguarding confidence and culture, annually",
        "Service user survey on feeling safe, annually",
      ],
      practiceBox:
        "Quality assurance in safeguarding is not just about counting the number of referrals made. It is about assessing whether the quality of those referrals was good, whether the people involved had the right outcome, and whether learning has been applied to prevent recurrence.",
    },
    {
      heading: "17. Allegations Against Staff",
      body:
        "Where an allegation is made — or information is received — that a member of staff, volunteer, or contractor has abused, neglected, or harmed a service user (or acted in a way that may have caused harm), [ORGANISATION_NAME] must respond with the same rigour as any other safeguarding concern. The person alleged to have caused harm is not exempted from safeguarding processes by virtue of their employment status.",
      subSections: [
        {
          heading: "17.1 Immediate Response",
          body: "On receiving an allegation against a member of staff, the Registered Manager must:\n• Ensure the safety of the service user(s) involved — remove the alleged perpetrator from the area if this can be done without drawing attention to the investigation, or consider immediate suspension on full pay pending investigation.\n• Not investigate the allegation internally before consulting the Local Authority Designated Officer (LADO).\n• Preserve any evidence — secure the scene, retain records, and ensure witnesses are not spoken to in a way that contaminates their accounts.\n• Notify the CQC of the allegation under Regulation 18 (notification of other incidents) within 24 hours where the allegation involves a regulated activity.\n• Notify the Disclosure and Barring Service (DBS) where a member of staff is removed from working with vulnerable adults following a safeguarding allegation.",
          warningBox:
            "Do not conduct an internal investigation before contacting the LADO. Premature interviews of witnesses or the subject of an allegation can contaminate evidence, undermine a subsequent police investigation, and create legal risk for [ORGANISATION_NAME]. The LADO's role is to advise on the investigation process — contact them first.",
        },
        {
          heading: "17.2 LADO Referral",
          body: "The Local Authority Designated Officer (LADO) is a statutory role under Working Together to Safeguard Children 2023 and local adult safeguarding guidance. The LADO manages allegations against staff across all agencies in the local area.\n\nA referral to the LADO must be made within 24 hours where:\n• An allegation has been made that a staff member, volunteer or contractor has behaved in a way that has harmed, or may have harmed, an adult at risk.\n• The allegation involves possible criminal offending against an adult at risk.\n• The behaviour of the staff member suggests they may be unsuitable to work with vulnerable adults.\n\nThe Registered Manager will contact the LADO by telephone, followed by a written referral within 24 hours. The LADO will advise on next steps, which may include: internal investigation led by [ORGANISATION_NAME]; police investigation; joint investigation; or strategy discussion. [ORGANISATION_NAME] will cooperate fully with the LADO's recommendations.",
        },
        {
          heading: "17.3 Suspension Considerations",
          body: "Suspension is a neutral act — it is not a punishment or a finding of guilt. Suspension on full pay may be appropriate pending investigation where:\n• The nature of the allegation is serious and the service user's or staff safety is at risk if the person continues in their role.\n• There is a risk of evidence being tampered with.\n• The working relationship has broken down in a way that makes the investigation impossible.\n\nAlternative management arrangements (change of rota, redeployment to a non-service user facing role, increased supervision) should be considered before suspension, where the allegation is less serious.\n\nThe decision to suspend must be made by the Registered Manager or Provider, in consultation with the LADO and HR advice if available. The suspension must be reviewed at regular intervals — it must not become open-ended.",
        },
        {
          heading: "17.4 Parallel Investigations",
          body: "Investigations into allegations against staff may run in parallel:\n• A police investigation (if criminal conduct is suspected).\n• A Section 42 safeguarding enquiry by the local authority.\n• An internal disciplinary investigation by [ORGANISATION_NAME] (paused if police investigation is in progress, to avoid prejudicing criminal proceedings).\n• A DBS referral.\n• A professional regulatory body referral (e.g. NMC, HCPC, Social Work England) if the staff member is a registered professional.\n\n[ORGANISATION_NAME] will coordinate its internal investigation with the LADO strategy discussions to ensure no duplication, contamination, or prejudice to parallel proceedings.",
        },
        {
          heading: "17.5 Confidentiality and Communication",
          body: "Allegations against staff must be handled with strict confidentiality:\n• The identity of the person making the allegation must not be disclosed to the subject of the allegation without their consent, or unless required by law.\n• Information must be shared only on a 'need to know' basis — staff involved in the investigation must not discuss it with colleagues.\n• The service user or their family/advocate must be kept informed of progress in a way that does not prejudice the investigation.\n• The subject of the allegation is entitled to be told the nature of the allegation and to have the opportunity to respond — but only in the context of the formal investigation process, not informally.\n• Staff must not contact service users or their families directly about the allegation.",
        },
        {
          heading: "17.6 Outcome and Record-Keeping",
          body: "Following investigation, outcomes may include: substantiated (allegation proven and action taken); unsubstantiated (allegation not proven — not the same as deliberately false); unfounded (allegation is demonstrably false or made in bad faith); inconclusive (insufficient evidence to determine).\n\nAll outcomes must be recorded on the person's HR file and in the safeguarding log. Where the allegation is substantiated, [ORGANISATION_NAME] must:\n• Take appropriate disciplinary action, up to and including dismissal.\n• Refer to the DBS under the Safeguarding Vulnerable Groups Act 2006 (mandatory referral where a person is dismissed or removed from regulated activity in circumstances where the grounds relate to harm to a vulnerable adult).\n• Consider referral to a professional regulatory body.\n• Report to CQC.",
          legalBox:
            "Failure to make a mandatory DBS referral where one is required is a criminal offence. [ORGANISATION_NAME] has a legal duty to refer where a person is removed from regulated activity (dismissed, resigned, or moved to non-regulated activity) and the grounds relate to concerns about harming, or posing a risk of harm to, a vulnerable adult. The test is whether [ORGANISATION_NAME] reasonably considers the person has engaged in relevant conduct — not whether harm has been proven.",
        },
      ],
    },
    {
      heading: "18. Closed Culture Prevention",
      body:
        "A 'closed culture' is one in which poor or harmful care is able to flourish behind closed doors — where staff do not feel able to raise concerns, where service users cannot easily complain, where scrutiny is limited, and where leadership does not demonstrate openness or accountability. CQC's guidance on closed cultures (2020, updated 2022) identifies closed cultures as among the highest-risk environments for the abuse and neglect of people receiving care. [ORGANISATION_NAME] is committed to preventing the development of a closed culture and to creating an environment where concerns are raised, heard, and acted upon.",
      subSections: [
        {
          heading: "18.1 Indicators of a Closed Culture",
          body: "Staff and managers must be aware of the following indicators that a closed culture may be developing:\n\nCulture and behaviour:\n• Staff who mock, infantilise, or demean service users — even in a supposedly 'joking' manner.\n• Use of derogatory language about service users, in private conversations or on communication channels.\n• Staff who resist scrutiny, external visits, or inspection readiness activities.\n• A 'them and us' mentality between management and frontline staff.\n• Reluctance of staff to raise concerns, or previous concerns being dismissed.\n\nCare practices:\n• Unexplained or repetitive injuries to service users.\n• Service users appearing withdrawn, fearful, or distressed without explanation.\n• Consistent use of restrictive practices without documentation or review.\n• Pressure on service users not to complain or to discourage contact with family.\n\nGovernance:\n• Low or absent whistleblowing activity over a sustained period.\n• Patterns of staff misconduct being handled informally rather than through policy.\n• Safeguarding referrals that do not reflect the volume or severity of known concerns.",
          warningBox:
            "CQC has found in multiple Serious Case Reviews and SARs that a 'normalisation of poor care' is the most common precursor to a closed culture. When poor care becomes routine — when staff no longer recognise it as poor care — the risk of serious harm escalates dramatically. Leadership must be alert to any drifting of standards, however gradual.",
        },
        {
          heading: "18.2 Proactive Monitoring and Prevention",
          body: "[ORGANISATION_NAME] will take the following proactive steps to prevent the development of a closed culture:\n\n• Leadership visibility: The Registered Manager will conduct regular unannounced walk-arounds across all shifts, including nights and weekends, to observe care quality and staff behaviour.\n• Service user feedback: Structured, independent feedback from service users will be sought at least quarterly, using accessible formats and ensuring feedback can be given without staff present.\n• Speak Up culture: The Registered Manager will actively encourage and visibly celebrate staff who raise concerns under WL-004 (Whistleblowing Policy). Zero tolerance for any retaliation against staff who speak up.\n• Culture audits: An annual culture audit will be conducted, gathering anonymous feedback from staff on team dynamics, management behaviour, and the safety of raising concerns.\n• External scrutiny: [ORGANISATION_NAME] will actively engage with and facilitate visits by external professionals — local authority quality teams, Healthwatch, advocacy organisations — and will not attempt to limit or choreograph their interactions with service users.\n• Duty of Candour: [ORGANISATION_NAME] is committed to Regulation 20 (Duty of Candour) and will be open and transparent with service users, their families, and regulators when things go wrong.",
        },
        {
          heading: "18.3 CQC Guidance on Closed Cultures",
          body: "CQC's guidance 'Assessing closed cultures' (2022) provides a framework for identifying and challenging closed cultures. CQC inspectors are specifically trained to identify the indicators of a closed culture and are empowered to take urgent enforcement action where a closed culture is identified — including cancellation of registration.\n\n[ORGANISATION_NAME] uses CQC's published indicators as a self-assessment tool, reviewing against them annually and following any significant incident or complaint. The Registered Manager will present a closed culture self-assessment to the Provider/Board annually as part of the governance calendar.\n\nKey CQC focus areas:\n• Are people treated with dignity and respect in interactions with staff?\n• Are people supported to maintain relationships outside the service?\n• Are staff trained and confident to raise concerns?\n• Is there a culture of openness, learning and improvement?\n• Are restrictive practices used only as a last resort, with full documentation and review?",
          practiceBox:
            "One of the most effective preventive measures against closed cultures is investing in the human relationships within the service. Services where staff genuinely know and care about their service users — where there is warmth, laughter, and connection — are fundamentally less at risk than those where staff are merely going through the motions. Leadership must model the culture it wants to see, not just monitor for its absence.",
        },
      ],
    },
  ],

  training:
    "All staff must complete safeguarding awareness training before working unsupervised with service users. Training must be refreshed every two years for all staff and every three years for Level 3 safeguarding leads. Training records must be maintained on the staff file and available for CQC inspection. Staff who fail to complete training within the required timeframe will be removed from lone working until compliant.",

  monitoring:
    "The Registered Manager will review the safeguarding log monthly and provide a safeguarding exception report to the Provider/Board quarterly. Annual safeguarding audits will assess: referral volume and timeliness; quality of records; training compliance; and outcome data. CQC will be notified of all notifiable safeguarding events within 24 hours under Regulation 18.",

  relatedDocuments: [
    "saf-012 — Restraint and Restrictive Practice Policy",
    "eff-002 — Mental Capacity Act Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "wl-005 — Data Protection and GDPR Policy",
    "wl-006 — Record Keeping and Confidentiality Policy",
    "car-002 — Equality, Diversity and Inclusion Policy",
    "saf-002 — Safeguarding Children Policy",
    "wl-010 — Disciplinary and Capability Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Safeguarding Concern Record Form",
      description:
        "Template for recording safeguarding observations, disclosures and concerns. To be completed within the same shift on which the concern arises. Fields include: date and time; details of the concern; person's own words; action taken; referral details.",
    },
    {
      title: "Appendix B — Safeguarding Referral Checklist",
      description:
        "Step-by-step checklist to guide the Registered Manager through the referral process, including LA contact details, CQC notification requirements, and family notification guidance.",
    },
    {
      title: "Appendix C — Local Authority and Agency Contacts",
      description:
        "Contact details for the local authority Safeguarding Adults Team, CQC, Police (101), MARAC, NRM (modern slavery), Prevent, and local IDVA services. To be updated by the Registered Manager whenever contact details change.",
    },
    {
      title: "Appendix D — Types of Abuse — Quick Reference Card",
      description:
        "A single-page quick reference card for staff listing the ten types of abuse with key indicators for each. Suitable for laminating and displaying in staff areas.",
    },
    {
      title: "Appendix E — Capacity Assessment Record",
      description:
        "Template for documenting a mental capacity assessment in the context of a safeguarding decision. Includes the two-stage test and best interests decision-making framework.",
    },
  ],

  versionHistory: [
    { version: "4.2", date: "June 2026", amendment: "Updated to reflect Domestic Abuse Act 2021 provisions; added county lines guidance in section 10.2; Prevent duty section expanded. Reviewed against DHSC Statutory Guidance (updated March 2023)." },
    { version: "4.1", date: "January 2025", amendment: "Updated definitions to reflect Liberty Protection Safeguards timetable; added MASH reference in section 6." },
    { version: "4.0", date: "March 2024", amendment: "Full policy rewrite to align with Care Act 2014 as amended; Making Safeguarding Personal embedded throughout; county lines added." },
    { version: "3.2", date: "April 2022", amendment: "Updated CQC notification requirements following Regulation 18 guidance update." },
    { version: "3.1", date: "March 2021", amendment: "COVID-19 addendum removed; policy returned to standard version." },
  ],
};
