import type { DocumentContent } from "./documents";

export const CARING_CONTENT: Record<string, DocumentContent> = {
  "car-001": {
    purpose: "[ORGANISATION_NAME] is committed to treating every service user with dignity, respect and compassion at all times. This policy sets out the organisation's values and the standards of behaviour expected from all staff to uphold the dignity of the people in their care.",
    scope: "Applies to all staff employed by or contracted to [ORGANISATION_NAME] in any capacity, and covers all interactions with service users, their families, and each other.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Model and promote a culture where dignity and respect are lived values, not just policy statements",
          "Address any behaviour that falls short of the expected standard promptly and firmly",
          "Include dignity and respect observational audits in the quality assurance programme",
          "Ensure all staff complete dignity in care training at induction",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Treat every service user as an individual with their own unique identity, history and preferences",
          "Always knock and wait for a response before entering a service user's private space",
          "Speak about and to service users with respect at all times, including when not in their presence",
          "Challenge any colleague whose behaviour does not uphold dignity standards",
        ],
      },
    ],
    keyPoints: [
      "Dignity is not just about care tasks — it is about how we speak to people, how we speak about them, and how we make them feel",
      "Every service user has the right to privacy — doors must be closed, curtains drawn and personal information kept confidential during all care interactions",
      "Staff must always use a service user's preferred name and form of address, as established with the individual",
      "Dignity must be maintained even when a service user has dementia or communication difficulties — they feel how they are treated even when they cannot articulate it",
      "Service users must be enabled to make choices about their daily lives — mealtimes, clothing, activities — however small those choices may seem",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 10",
      "Human Rights Act 1998 — Article 8 (Right to Private and Family Life)",
      "Equality Act 2010",
      "Care Act 2014",
      "Mental Capacity Act 2005",
    ],
    sections: [
      {
        heading: "Privacy and Personal Space",
        body: "Every service user is entitled to privacy in their personal space and during personal care. Staff must: always knock and wait before entering a bedroom, bathroom or toilet; ensure doors are closed and curtains drawn during personal care; never expose a service user unnecessarily when providing care; not discuss service user matters in public areas of the building; ensure care records are stored and accessed in accordance with confidentiality requirements. Service users must be enabled to personalise their own space with belongings and photographs if they wish.",
      },
      {
        heading: "Language and Attitude",
        body: "The language staff use about and to service users must reflect respect and individuality. Staff must not: use infantilising language (e.g. 'good girl', 'sweetie'); use task-focused language that ignores the person (e.g. 'I need to do your pad now'); discuss one service user's personal details in front of others; use derogatory nicknames; or make comments that demean, mock or objectify a service user, even in jest. Positive, affirming language that recognises the person's strengths and personhood is expected at all times.",
      },
    ],
  },

  "car-002": {
    purpose: "[ORGANISATION_NAME] is committed to providing services that are free from discrimination and that actively promote equality, diversity and inclusion for all service users, staff, visitors and stakeholders. This policy sets out the organisation's legal obligations and its commitment to going beyond legal compliance to celebrate diversity.",
    scope: "Applies to all aspects of service delivery and employment at [ORGANISATION_NAME], and to all staff, service users, volunteers, contractors and visitors.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure equal access to services for all service users regardless of protected characteristics",
          "Take prompt and decisive action on any incident of discrimination, harassment or victimisation",
          "Ensure equality and diversity training is included in induction and refreshed regularly",
          "Conduct equality impact assessments when developing new services or changing practice",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Treat every person with equal dignity and respect regardless of their protected characteristics",
          "Challenge discriminatory behaviour, language or attitudes from colleagues, service users or visitors",
          "Report any equality incident to the Registered Manager",
          "Meet individual cultural, linguistic and religious needs in care delivery",
        ],
      },
    ],
    keyPoints: [
      "The nine protected characteristics under the Equality Act 2010 are: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex and sexual orientation",
      "Direct discrimination (treating someone less favourably because of a protected characteristic) and indirect discrimination (applying a practice that disadvantages a group) are both unlawful",
      "Making reasonable adjustments for disabled people is a legal duty — this includes adjustments to communication formats, physical access, care practices and service delivery",
      "Every service user's cultural, religious and linguistic needs must be actively identified and met — this is not optional",
      "Staff who experience or witness discrimination, harassment or victimisation have the right and responsibility to report it",
    ],
    legislation: [
      "Equality Act 2010",
      "Human Rights Act 1998",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
      "Race Relations Act 1976 (superseded by Equality Act but contextually relevant)",
    ],
    sections: [
      {
        heading: "Reasonable Adjustments",
        body: "Under the Equality Act 2010, [ORGANISATION_NAME] has a legal duty to make reasonable adjustments for disabled people. In practice this means: providing information in alternative formats (large print, easy read, audio, translated); ensuring physical accessibility of all areas used by service users; adapting care practices to meet individual needs arising from disability; providing interpreters or communication aids; and reviewing care delivery methods where a standard approach disadvantages a service user. The question to ask is: 'What do we need to do differently to ensure this person gets the same quality of experience as anyone else?'",
      },
      {
        heading: "Cultural and Religious Needs",
        body: "The cultural and religious needs of every service user must be identified at assessment and documented in the care plan. This includes: dietary requirements (halal, kosher, vegetarian, cultural preferences); religious observances (prayer times, holy days, fasting); dress and personal appearance preferences; language needs (preferred language, interpreter arrangements); family and community involvement; and preferences relating to gender of care staff. [ORGANISATION_NAME] will make every reasonable effort to meet these needs and will record any instance where this was not possible and the reason.",
      },
    ],
  },

  "car-003": {
    purpose: "[ORGANISATION_NAME] is committed to effective communication with all service users, families, staff and other professionals. This policy sets out the standards for communication to ensure every person can express their needs, access information and participate fully in decisions about their care.",
    scope: "Applies to all staff at [ORGANISATION_NAME] and covers all forms of communication including verbal, non-verbal, written, digital and augmentative and alternative communication (AAC).",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure a communication assessment is completed for every service user at admission",
          "Facilitate access to communication aids, speech and language therapy and interpreter services",
          "Ensure all written communications meet accessibility standards",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Identify and document every service user's communication needs and preferred methods",
          "Use plain English in all written and verbal communication",
          "Arrange professional interpreters for service users and families whose first language is not English",
          "Never rely on family members to interpret clinical or care-related information",
        ],
      },
    ],
    keyPoints: [
      "Every service user's communication needs must be assessed and documented in the care plan — staff must know how each individual communicates most effectively",
      "For service users with communication difficulties, accessible formats (Makaton, picture exchange, easy read, AAC devices) must be used and facilitated",
      "Professional interpreting services must be used when a service user or family member's first language is not English — using family members as interpreters for clinical conversations is inappropriate and potentially unsafe",
      "The accessible information standard requires [ORGANISATION_NAME] to identify and meet the communication and information needs of all people with a disability or sensory loss",
      "Effective communication is a two-way process — staff must create conditions in which service users feel able to express their views, preferences and concerns",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Accessible Information Standard (NHS England, 2016)",
      "Equality Act 2010",
      "Care Act 2014",
      "Mental Capacity Act 2005",
    ],
    sections: [
      {
        heading: "Communication Assessments",
        body: "At admission, every service user's communication needs must be assessed. This should establish: their preferred language; whether they have any hearing, visual or speech impairment; whether they use AAC or communication aids; their literacy level; their preferred format for information (verbal, written, pictures, large print); any professional support needed (speech and language therapist, interpreter). The assessment must be documented in the care plan and reviewed at every review. Any change in communication ability must be reassessed promptly.",
      },
      {
        heading: "Communicating with Service Users with Dementia or Learning Disabilities",
        body: "For service users with dementia: use short, clear sentences; give one instruction at a time; allow time for processing; use gestures and visual cues; maintain eye contact at the same level; respond to the emotion behind the words rather than the literal content. For service users with learning disabilities: use the communication passport or support plan; use Easy Read materials where available; use Makaton or Widgit symbols if the person uses these; involve communication support workers as needed. All staff must be trained in the communication methods used by the service users they support.",
      },
    ],
  },

  "car-004": {
    purpose: "[ORGANISATION_NAME] recognises and respects the right of all service users to form and maintain relationships and to express their sexuality. This policy ensures that these rights are upheld within a framework of appropriate safeguarding, consent and person-centred support.",
    scope: "Applies to all service users at [ORGANISATION_NAME] and to all staff involved in their care and support.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure this policy is discussed openly during staff induction and supervision",
          "Ensure capacity assessments and best interests decisions are documented where required",
          "Manage any safeguarding concern arising from relationships appropriately",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Respect service users' right to form consensual relationships without judgement",
          "Protect the privacy of service users who are in relationships",
          "Report any concern about consent or exploitation to the duty manager",
          "Never impose personal values or moral judgements on service users' relationship choices",
        ],
      },
    ],
    keyPoints: [
      "Service users have the right to form, maintain and end relationships, and to express their sexuality, provided they have capacity to consent",
      "Staff must not impose their personal values or moral judgements on service users' relationship and sexuality choices",
      "Where a service user may lack capacity to consent to a sexual relationship, a mental capacity assessment must be conducted and safeguarding procedures may need to be initiated",
      "Privacy must be respected — staff must knock before entering private spaces and must not interrupt consenting adults engaged in intimate activity without good reason",
      "Any concern that a service user is being exploited or coerced in a relationship must be treated as a safeguarding concern and reported immediately",
    ],
    legislation: [
      "Mental Capacity Act 2005",
      "Human Rights Act 1998",
      "Equality Act 2010",
      "Sexual Offences Act 2003",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Consent and Capacity",
        body: "Consensual sexual activity between adults with capacity is lawful and private. For service users whose capacity to consent to sexual relationships may be in question, a mental capacity assessment specific to this decision must be completed and documented. The assessment must establish: whether the person understands the nature of a sexual act; whether they understand that they can say no; whether they understand the possible consequences (pregnancy, STI). If the person lacks capacity, a safeguarding referral may be required. Capacity assessments for this area should involve specialist input where needed.",
      },
    ],
  },

  "car-005": {
    purpose: "[ORGANISATION_NAME] is committed to respecting and supporting the spiritual, religious and cultural needs and preferences of all service users, recognising that these are fundamental to a person's identity, wellbeing and quality of life.",
    scope: "Applies to all service users of [ORGANISATION_NAME] regardless of faith, belief or culture, and to all staff responsible for their care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure spiritual and religious needs are identified at admission and documented in the care plan",
          "Facilitate access to faith leaders, chaplains and relevant community resources",
          "Ensure the service is culturally responsive and that staff understand and respect diverse beliefs",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Ask respectfully about and actively support service users' spiritual and religious needs",
          "Facilitate religious observances, prayer, and access to faith communities",
          "Ensure diet, dress, modesty and other cultural preferences are respected",
          "Never impose their own beliefs or attempt to convert a service user",
        ],
      },
    ],
    keyPoints: [
      "Spiritual needs are not exclusively about religion — they may include a sense of meaning and purpose, connection with nature, creative expression, or cultural identity",
      "Every service user's spiritual, religious and cultural preferences must be documented at assessment and form part of their care plan",
      "Religious observances (prayer, fasting, attending services) must be facilitated wherever possible",
      "Dietary requirements connected to religion or culture (halal, kosher, vegan, fasting days) must be identified, communicated to catering staff and consistently met",
      "At end of life, spiritual and religious support takes on particular importance — the service user's wishes for after-death care must be identified and respected",
    ],
    legislation: [
      "Human Rights Act 1998 — Article 9 (Freedom of Thought, Conscience and Religion)",
      "Equality Act 2010 — Religion or Belief",
      "Care Act 2014",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
    ],
    sections: [
      {
        heading: "Identifying and Meeting Spiritual Needs",
        body: "At admission, staff must sensitively explore the service user's spiritual and religious background, asking: Do you have a religion or faith that is important to you? Are there religious or cultural practices or observances that we should support? Are there particular foods you do or do not eat for religious or cultural reasons? Are there any preferences regarding the gender of care staff? Would you like us to contact a religious leader or chaplain for you? This information must be documented in the care plan and shared with all care staff on a need-to-know basis.",
      },
    ],
  },

  "car-006": {
    purpose: "[ORGANISATION_NAME] is committed to providing a diverse programme of meaningful activities and social engagement opportunities that promote the mental, physical and emotional wellbeing of service users. This policy sets out the approach to activities planning, delivery and evaluation.",
    scope: "Applies to all service users at [ORGANISATION_NAME] and to all staff involved in planning and delivering activities.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure an activities programme is in place and that resources are allocated to support it",
          "Ensure activities are varied, inclusive and based on individual service user interests",
          "Monitor service user engagement and wellbeing outcomes from activities",
        ],
      },
      {
        role: "Care Staff and Activities Coordinator",
        duties: [
          "Conduct an activities and interests assessment for every service user at admission",
          "Plan and deliver a mix of individual, small group and community activities",
          "Document service user engagement and report any withdrawal from activities",
          "Ensure activities are inclusive and adapted for service users with cognitive or physical needs",
        ],
      },
    ],
    keyPoints: [
      "Activities must be meaningful to the individual — they must be based on the person's own interests, history and preferences, not on what is easiest to organise",
      "Service users must never be pressured to participate in activities — choice and autonomy must be respected at all times",
      "Activities should address all dimensions of wellbeing: physical, cognitive, social, creative, and spiritual",
      "Service users should be supported to maintain community links and connections — outings, visitors and community involvement are as important as in-house activities",
      "Withdrawal from previously enjoyed activities may be a sign of deteriorating physical or mental health and must be investigated",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
      "Mental Capacity Act 2005",
      "Equality Act 2010",
    ],
    sections: [
      {
        heading: "Activities Assessment",
        body: "An activities and interests assessment must be completed at admission in collaboration with the service user and, where appropriate, family members or others who know the person well. The assessment should capture: lifelong interests, hobbies and passions; previous occupation and skills; preferred social environment (one-to-one, small group, large group); physical and cognitive abilities; any sensory needs affecting participation; cultural and spiritual interests; and goals relating to activity and social engagement. This information must be used to develop an individual activities plan.",
      },
    ],
  },

  "car-007": {
    purpose: "[ORGANISATION_NAME] recognises the vital role of families and carers as partners in care and is committed to engaging with them in a meaningful, respectful and transparent way. This policy sets out how [ORGANISATION_NAME] involves families and carers in care planning, daily life and governance.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and their families, carers and significant others, and to all staff responsible for family liaison.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure families are contacted promptly and appropriately at admission and for significant events",
          "Establish and maintain open communication channels with families and carers",
          "Facilitate family and carer meetings as part of care reviews",
          "Maintain confidentiality while ensuring family members receive appropriate information",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Welcome and acknowledge families when they visit and be willing to provide a brief update",
          "Respect the service user's privacy and only share information with people the service user has authorised",
          "Involve families in care reviews and care planning where the service user consents",
          "Report any family concern or complaint to the duty manager immediately",
        ],
      },
    ],
    keyPoints: [
      "The service user's right to privacy and confidentiality must be respected — information should only be shared with family members with the service user's consent or where they lack capacity and sharing is in their best interests",
      "Families and carers should be treated as partners in care — their knowledge of the service user is valuable and should inform care planning",
      "Visiting arrangements should be flexible and welcoming — restrictions on visiting should only be imposed when there is a clear clinical, safeguarding or infection control reason",
      "Families have the right to raise concerns and complaints and must be provided with information about how to do this",
      "Family members who are formal carers (holding LPA or acting as nearest relative) have specific legal rights that must be recognised",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014 — Carers' Rights",
      "Mental Capacity Act 2005",
      "Data Protection Act 2018 / UK GDPR",
      "Human Rights Act 1998",
    ],
    sections: [
      {
        heading: "Maintaining Contact with Families",
        body: "At admission, the service user must identify their nominated next of kin, family contacts and any person holding Lasting Power of Attorney. Contact preferences must be documented. Families must be contacted within 24 hours of admission, within 4 hours following any significant incident (hospital admission, fall, safeguarding concern), and at every formal care review. Regular updates should be available via phone or email at the family's request. An open visiting policy should apply unless clinical, safeguarding or infection control reasons require restriction.",
      },
    ],
  },

  "car-008": {
    purpose: "[ORGANISATION_NAME] is committed to ensuring that all service users, particularly those who are most vulnerable, are able to access independent advocacy to help them understand, exercise and uphold their rights and to participate fully in decisions about their care and support.",
    scope: "Applies to all service users of [ORGANISATION_NAME] who may need advocacy support, and to all staff responsible for identifying advocacy needs and facilitating access.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Maintain up-to-date information about local advocacy services",
          "Ensure statutory requirements for Independent Mental Capacity Advocacy (IMCA) and Independent Mental Health Advocacy (IMHA) are met",
          "Ensure advocacy referrals are made proactively and without delay",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Recognise when a service user may benefit from advocacy and refer to the manager",
          "Facilitate access for advocates including providing appropriate private space for meetings",
          "Never discourage a service user from seeking advocacy",
          "Support service users to communicate their concerns to their advocate",
        ],
      },
    ],
    keyPoints: [
      "An IMCA must be instructed by [ORGANISATION_NAME] when a person lacks capacity and there is no appropriate family member or friend to consult, and a decision is to be made about serious medical treatment or a change in accommodation",
      "An IMHA must be made available to all patients detained under the Mental Health Act 1983 and to those subject to guardianship or community treatment orders",
      "Advocacy support should also be offered more broadly to any service user who would benefit from independent representation",
      "The service user's advocate must be welcomed and their right to meet privately with the service user respected",
      "Advocacy is not in conflict with good care — it supports it",
    ],
    legislation: [
      "Mental Capacity Act 2005 (IMCA — Sections 35–41)",
      "Mental Health Act 1983 (IMHA — Section 130A)",
      "Care Act 2014 (Independent Advocacy — Sections 67–68)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
    ],
    sections: [
      {
        heading: "Statutory Advocacy",
        body: "IMCA: must be instructed when a person lacks capacity to consent to a decision about: serious medical treatment; a move to long-term accommodation; a protective measure under a DoLS/LPS. [ORGANISATION_NAME] must contact the local IMCA service without delay when these criteria are met. IMHA: all qualifying patients under the Mental Health Act must be informed of their right to an IMHA and supported to access one. Care Act Independent Advocacy: the local authority must provide advocacy for people with substantial difficulty engaging in their care assessment or review who have no appropriate person to support them.",
      },
    ],
  },
};
