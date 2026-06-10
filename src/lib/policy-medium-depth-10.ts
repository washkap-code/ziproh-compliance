/**
 * Medium-depth policy content — batch 10 (FINAL).
 * Relationships & Sexuality, Spiritual & Religious Care,
 * Service User Involvement, Compliments & Feedback,
 * Flexible Service Delivery, Hospital Admission & Discharge Liaison,
 * Equality & Human Rights (Employment).
 * Completing all 62 policy stubs.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// CAR-004  Relationships & Sexuality Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR004_CONTENT: DocumentContent = {
  title: "Relationships & Sexuality Policy",
  policyId: "CAR-004",
  version: "2.2",
  effectiveDate: "2026-03-01",
  reviewDate: "2027-03-01",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] in relation to their rights to form and maintain relationships, express their sexuality and gender identity, and experience intimacy. This policy applies to all staff and reflects [ORGANISATION_NAME]'s commitment to dignity, autonomy, and person-centred care.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure staff are trained to support relationships and sexuality in a respectful, rights-based manner.",
        "Ensure the environment supports private, intimate time for service users.",
        "Ensure safeguarding considerations are balanced with service users' rights to autonomy.",
        "Manage any expressions of sexuality or relationship behaviour sensitively and without judgement.",
        "Ensure the policy is applied equitably regardless of sexual orientation, gender identity, or relationship type.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Respect every service user's right to form relationships, express affection, and experience intimacy.",
        "Never ridicule, shame, or express disapproval regarding a service user's sexuality, gender identity, or relationships.",
        "Raise concerns about capacity or safeguarding through the correct channels — not by blocking intimacy without a lawful basis.",
        "Maintain privacy when service users request it for relationship or intimate purposes.",
        "Seek guidance from the Registered Manager when uncertain how to respond to a specific situation.",
      ],
    },
  ],
  legislation: [
    "Human Rights Act 1998, Article 8 — right to private and family life",
    "Equality Act 2010 — sexual orientation and gender reassignment as protected characteristics",
    "Mental Capacity Act 2005 — capacity for sexual relationships; best interests principle",
    "Sexual Offences Act 2003, section 30–41 — offences involving persons with a mental disorder impeding choice",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — person-centred care",
  ],
  definitions: [
    { term: "Capacity for Sexual Activity", definition: "Mental capacity for sexual activity is assessed using the Mental Capacity Act 2005 two-stage test. The relevant information for the decision includes: understanding that they have a choice whether to engage; understanding that they can say no; understanding that different activities carry different risks (including pregnancy and sexually transmitted infections). Capacity for sexual activity is decision-specific and time-specific. Note: there is no 'capacity for a relationship' — relationships are not a single decision but a series of ongoing interactions." },
    { term: "Sexuality", definition: "The full range of a person's sexual feelings, behaviours, and identity, including sexual orientation (heterosexual, gay, lesbian, bisexual, pansexual, asexual), gender identity (including transgender and non-binary identities), and intimate expression. Sexuality is a normal, lifelong dimension of human experience and does not diminish with age, disability, or cognitive impairment." },
    { term: "Intimate Expression", definition: "Physical or emotional expression of closeness, affection, or sexuality. This includes: holding hands; kissing; sexual activity; self-stimulation (masturbation); use of sexual imagery or material. All are normal aspects of human experience. [ORGANISATION_NAME]'s role is to create a safe, private environment for expression — not to make moral judgements about it." },
  ],
  sections: [
    {
      title: "Rights-Based Approach",
      body: "Every service user at [ORGANISATION_NAME] retains the right to:\n• Form and maintain relationships, including romantic and sexual relationships.\n• Express their sexual orientation and gender identity freely and without discrimination.\n• Experience intimacy and physical closeness with consenting adults.\n• Access private space for intimate activity.\n• Make their own decisions about relationships and sexual activity (subject to capacity).\n\nThese rights do not diminish with age, cognitive impairment, or physical disability. A person with dementia retains the right to intimate relationships and sexual expression. Staff discomfort with sexuality in older or disabled people — however understandable — cannot override a service user's rights.",
      practiceBox: "The most common staff error in this area is conflation of personal discomfort with safeguarding concern. 'I found it uncomfortable to see them kissing' is not a safeguarding concern. 'I am not sure she understands what is happening between them' — that may warrant further assessment. Train staff to distinguish between the two.",
    },
    {
      title: "Capacity, Consent, and Safeguarding",
      body: "Where there are genuine concerns about whether a service user has capacity to consent to a relationship or sexual activity, the correct pathway is:\n\n1. Do not intervene in the activity immediately unless there is clear distress or evidence of non-consent.\n2. Discuss the concern with the Registered Manager the same day.\n3. Complete a Mental Capacity Assessment for the relevant decision (with support from a GP or mental health professional if needed).\n4. If the service user lacks capacity for the decision and there is a concern about exploitation, refer to safeguarding.\n5. If the service user has capacity, the activity is their autonomous choice — do not impose a best interests decision on a person with capacity.\n\nWhere a service user is being exploited or coerced, this is a safeguarding matter and must be referred under SAF-001 without delay.\n\nThe Sexual Offences Act 2003 sections 30–41 create criminal offences for those who engage in sexual activity with a person who lacks capacity to consent due to a mental disorder. Staff must understand this framework and apply it correctly — it is a protection for vulnerable service users, not a licence for staff to restrict all intimate expression.",
      warningBox: "Restricting a service user's ability to form relationships or experience intimacy without a lawful basis (capacity assessment, safeguarding referral, or DoLS authorisation) is a potential violation of their human rights and a deprivation of liberty. Never use 'we need to keep them safe' as a justification for restricting intimacy without going through the correct legal process.",
    },
    {
      title: "Creating a Private Environment",
      body: "Service users must have access to private space for intimate activity. In practice this means:\n• Knocking and waiting for a response before entering a bedroom or bathroom.\n• Where a 'Do Not Disturb' sign is in use, respecting it unless there is a genuine safety concern.\n• Avoiding unnecessary interruption of private time.\n• Not commenting on, speculating about, or gossiping about service users' intimate lives.\n\nWhere a service user shares a room and requests private time with a partner, staff should arrange alternative accommodation for the other room occupant where possible. The logistics must be resolved by management — not by refusing the service user's request.",
    },
    {
      title: "LGBTQ+ Service Users",
      body: "LGBTQ+ service users have the same rights as all service users to express their identity and relationships freely. Additional considerations:\n• Gender-affirming care must be respected — name, pronouns, and gender expression as specified by the service user.\n• A transgender service user's history is confidential — staff must not disclose a person's transgender status without consent.\n• LGBTQ+ service users may have experienced significant discrimination and may be reluctant to disclose their identity — create an environment of visible inclusion (LGBTQ+-inclusive imagery, language, and policies).\n• Ensure LGBTQ+ service users are not subjected to religious or cultural commentary from staff about their identity.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "eff-002 — Mental Capacity Act Policy",
    "car-002 — Equality, Diversity & Inclusion Policy",
    "car-005 — Spiritual & Religious Care Policy",
  ],
  appendices: [
    { title: "Appendix A — Capacity Assessment Guidance for Sexual Activity", content: "The relevant information for capacity to consent to sexual activity: understanding they have choice whether to engage; can say no and that their refusal will be respected; different activities carry different risks (STI, pregnancy); the other person may have different motives. Two-stage test: does the person have an impairment of or disturbance in the functioning of mind or brain? If so, does this mean they cannot understand, retain, use/weigh, or communicate the relevant information? If both stages are met, the person lacks capacity for the specific activity at this time." },
  ],
  versionHistory: [
    { version: "2.2", date: "2026-03-01", changes: "Added LGBTQ+ section; strengthened capacity-vs-safeguarding guidance; updated Sexual Offences Act reference." },
    { version: "2.0", date: "2025-05-01", changes: "Full review; added rights-based framework; updated MCA capacity guidance." },
    { version: "1.8", date: "2024-03-01", changes: "Added private environment section; updated safeguarding pathway." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-005  Spiritual & Religious Care Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR005_CONTENT: DocumentContent = {
  title: "Spiritual & Religious Care Policy",
  policyId: "CAR-005",
  version: "2.1",
  effectiveDate: "2026-02-01",
  reviewDate: "2027-02-01",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] in relation to their spiritual, religious, and cultural needs. This policy applies to all staff and reflects [ORGANISATION_NAME]'s commitment to holistic, person-centred care that respects the beliefs, values, and practices of every service user.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure spiritual and religious needs are assessed on admission and included in the care plan.",
        "Facilitate access to faith leaders, religious services, and spiritual support for all service users.",
        "Ensure dietary and other religious observance requirements are met.",
        "Ensure end-of-life spiritual and religious preferences are documented and acted upon.",
        "Ensure the service is welcoming and inclusive to people of all faiths and no faith.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Respect every service user's spiritual and religious beliefs without judgement or comment.",
        "Support service users to observe their faith practices — prayer, worship, dietary rules, dress, observances.",
        "Never attempt to influence a service user's religious or spiritual beliefs.",
        "Report unmet spiritual needs to the Registered Manager.",
        "Treat sacred objects and religious texts with respect.",
      ],
    },
  ],
  legislation: [
    "Human Rights Act 1998, Article 9 — freedom of thought, conscience and religion",
    "Equality Act 2010 — religion or belief as a protected characteristic",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — person-centred care",
    "Care Act 2014 — wellbeing includes participation in recreational activities and spiritual wellbeing",
  ],
  definitions: [
    { term: "Spirituality", definition: "The dimension of a person's experience that relates to meaning, purpose, connection, and transcendence. Spirituality is broader than religion — it includes non-religious search for meaning, connection with nature, humanist values, and the sense of what matters most. All service users have a spiritual dimension, whether or not they hold religious beliefs." },
    { term: "Religion", definition: "A structured system of belief, practice, and community based on faith in a deity or deities, or a set of transcendent values. Major religions represented in UK care homes include: Christianity (multiple denominations); Islam; Judaism; Hinduism; Sikhism; Buddhism. [ORGANISATION_NAME] respects all religious traditions equally." },
    { term: "Religious Observance", definition: "The practices, rituals, and customs associated with a person's religion. Examples: daily prayer (Islam, Christianity, Judaism); Sabbath observation (Judaism); fasting (Ramadan in Islam; Lent in Christianity; Yom Kippur in Judaism); religious festivals; dietary laws (Halal, Kosher, vegetarianism in Hinduism and Buddhism); dress requirements (hijab, turban, kippah, cross)." },
  ],
  sections: [
    {
      title: "Spiritual and Religious Assessment",
      body: "Every service user's care plan must include documentation of their spiritual and religious needs. This is assessed on admission and reviewed at each care review. The assessment covers:\n• Religious affiliation (if any) and denomination.\n• Specific religious observances the service user wishes to maintain: prayer times, services, festivals, fasting.\n• Dietary requirements related to religion or culture.\n• Dress and personal presentation preferences with religious significance.\n• Preferred language for spiritual care and worship.\n• Sacred objects or materials important to the service user (prayer beads, rosary, holy books, icons).\n• Preferred faith leader or chaplain — name and contact details.\n• End-of-life spiritual and religious wishes (see also End of Life Care Policy).\n• Non-religious spiritual needs: what gives the person meaning, purpose, and peace.\n\nThe assessment must be led by the service user — not assumed from ethnicity, name, or background. A person of Pakistani heritage may be Muslim, or may not observe Islam, or may be of a different faith. Always ask.",
    },
    {
      title: "Supporting Religious Observance",
      body: "Once spiritual and religious needs are documented, the care plan must specify how they will be met. Practical support includes:\n\nPrayer and worship:\n• Providing a quiet, private space for prayer at required times.\n• Adjusting care schedules where possible to accommodate prayer times (e.g. not scheduling personal care during Fajr or Salah times without discussion).\n• Assisting with ablution (wudu) for Muslim service users before prayer.\n• Facilitating access to religious services — local church, mosque, synagogue, gurdwara, temple — by transport or by arranging visits from faith leaders.\n\nDiet:\n• Ensuring halal, kosher, vegetarian, or other religiously required meals are consistently available.\n• Never serving non-compliant food without the service user's knowledge and consent.\n• Accommodating fasting observances — consult with the service user and their GP about fasting during illness or when medication requires food.\n\nCultural observances and festivals:\n• Acknowledging and celebrating significant religious festivals: Eid, Christmas, Hanukkah, Diwali, Vaisakhi, Wesak — according to each service user's tradition.\n• Decorations and activities should reflect the diversity of service users present.",
      practiceBox: "The most common failure in spiritual care is not active discrimination — it is passive neglect. A Muslim service user who has not prayed in 3 months because no one helped them prepare, or a Christian service user who has missed Easter communion every year because no one arranged transport to church — these are failures of person-centred care. Spiritual care requires proactive action, not just an open-door policy.",
    },
    {
      title: "Spiritual Care for People with Dementia",
      body: "People with advanced dementia may retain spiritual and religious memory longer than other forms of memory — familiar prayers, hymns, and rituals from long-term memory can provide comfort and connection even when verbal communication is severely reduced. Supporting spiritual care for people with dementia:\n• Use familiar religious music, prayers, or readings that the person has known throughout their life.\n• The physical sensation of familiar rituals — holding a rosary, lighting a candle, making the sign of the cross — can be meaningful even without full comprehension.\n• Family members are a key source of information about a person's spiritual life.\n• Religious observance should never be imposed, but a familiar spiritual ritual offered gently is not coercive — it is responsive care.",
    },
    {
      title: "End-of-Life Spiritual Care",
      body: "Spiritual and religious needs are frequently most acute at the end of life. [ORGANISATION_NAME] ensures:\n• Advance care planning includes explicit discussion of end-of-life spiritual wishes.\n• Preferred faith leader or chaplain is contacted before death where the service user wishes this.\n• Last rites, anointing, or other religious sacraments specific to the person's tradition are facilitated without delay when requested.\n• After death, religious requirements for the treatment of the body are observed — this may include specific requirements about who can touch the body, timing of washing, positioning, and preparation for burial. These requirements must be known in advance, not established hurriedly after death.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "car-002 — Equality, Diversity & Inclusion Policy",
    "car-006 — Activities & Social Engagement Policy",
    "eff-003 — Nutrition & Hydration Policy",
    "eff-001 — Care Planning Policy",
  ],
  appendices: [
    { title: "Appendix A — Spiritual & Religious Care Assessment Template", content: "Faith/religion; denominational specifics; observances required (prayer/fasting/festivals); dietary requirements; dress requirements; sacred objects; preferred language; faith leader contact; end-of-life wishes (last rites/sacraments/body care); non-religious spiritual needs (what gives meaning); assessment completed by; date; review date." },
    { title: "Appendix B — Local Faith Community Directory", content: "Contact details for: Church of England; Catholic; Nonconformist; Mosque; Synagogue; Hindu Temple; Gurdwara; Buddhist Centre; NHS Chaplaincy service. Reviewed annually. Add service user-specific faith contacts as identified." },
  ],
  versionHistory: [
    { version: "2.1", date: "2026-02-01", changes: "Added dementia-specific spiritual care guidance; updated end-of-life section; expanded dietary observance guidance." },
    { version: "2.0", date: "2025-04-01", changes: "Full review; added non-religious spirituality section; updated assessment template." },
    { version: "1.8", date: "2024-02-01", changes: "Added faith community directory; strengthened advance care planning link." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RES-002  Service User Involvement Policy
// ─────────────────────────────────────────────────────────────────────────────
export const RES002_CONTENT: DocumentContent = {
  title: "Service User Involvement Policy",
  policyId: "RES-002",
  version: "2.3",
  effectiveDate: "2026-02-20",
  reviewDate: "2027-02-20",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] and the mechanisms through which they can be involved in the planning, running, and review of the service. This policy applies to all staff and reflects [ORGANISATION_NAME]'s commitment to service users as active participants in their own care and in the governance of the service.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure formal mechanisms for service user involvement are in place and active.",
        "Ensure service user feedback is collected, analysed, and acted upon.",
        "Ensure residents' meetings or equivalent forums are held at least monthly.",
        "Ensure service users who cannot engage through standard mechanisms have alternative routes for their views to be heard.",
        "Report on service user feedback and resulting actions at governance meetings.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Actively seek service users' views in everyday interactions — not just in formal forums.",
        "Take service user feedback seriously and report it through appropriate channels.",
        "Never dismiss or minimise a service user's concerns or suggestions.",
        "Ensure service users know how to raise concerns and provide feedback.",
        "Involve service users in decisions about their own care at every opportunity.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good governance: requires effective feedback systems",
    "Care Act 2014 — wellbeing principle includes participation and control",
    "Mental Capacity Act 2005 — supported decision-making; involvement in decisions",
    "Human Rights Act 1998, Article 10 — freedom of expression",
  ],
  definitions: [
    { term: "Service User Involvement", definition: "The active participation of service users in decisions about their own care AND in the broader governance and development of [ORGANISATION_NAME] as a service. Involvement at the individual level means choice and control over personal care. Involvement at the service level means contributing to service design, staff recruitment, quality improvement, and governance." },
    { term: "Residents' Meeting", definition: "A regular forum in which service users can raise issues, make suggestions, and provide feedback about the service. Effective residents' meetings are genuinely service-user-led, have a clear record of items raised and responses given, and demonstrate that feedback has resulted in action. They are not staff-led presentations of service information." },
    { term: "Supported Decision-Making", definition: "The process of providing a person with the information, time, communication support, and environment they need to make or participate in decisions — before concluding that they lack capacity. The MCA requires that all practicable steps are taken to support a person to make their own decisions. Supported decision-making is an active process, not a passive acknowledgement that someone might find decisions difficult." },
  ],
  sections: [
    {
      title: "Individual Involvement — Involvement in Own Care",
      body: "At the individual level, service user involvement means genuine participation in decisions about their own care:\n• Care plans must be co-produced with the service user — written in language they understand; reflecting their own words and priorities.\n• Service users must be offered the opportunity to be present at and contribute to their own care reviews.\n• Service users must be able to consent to, decline, or modify their care — and these decisions must be respected.\n• Service users must be told about changes to their care before they happen, not after.\n• Service users must be supported to make choices in daily life: what to eat, when to wake, what to wear, who to spend time with — these everyday choices are the most frequent form of involvement.\n\nSupported decision-making applies where a service user has cognitive difficulties. The response to difficulty in making a decision is increased support — not removal of the decision.",
    },
    {
      title: "Collective Involvement — Service-Level Participation",
      body: "Service users should be involved collectively in the governance and development of [ORGANISATION_NAME]. Mechanisms include:\n\nResidents' meetings:\n• Held at least monthly.\n• Agenda items generated by service users as well as management.\n• Minutes recorded and distributed (in accessible formats).\n• Actions from each meeting tracked and reported at the next meeting.\n• The meeting is chaired by a service user or facilitated impartially.\n\nAnnual service user survey:\n• Distributed to all service users annually (and to family/carers with consent).\n• Anonymous; accessible formats available.\n• Results analysed and benchmarked year-on-year.\n• A report of findings and planned actions shared with service users.\n\nInvolvement in recruitment:\n• Service users are involved in recruitment panels or meet-and-greet sessions for new staff where they wish to participate.\n• Service user feedback on new staff induction period is sought.",
      practiceBox: "The best residents' meetings are run largely by the residents. The Registered Manager's role is to facilitate, not to present. If every item on the agenda is brought by management, the meeting is an information briefing — not a forum for involvement. Start with 'What would you like to discuss today?' and go from there.",
    },
    {
      title: "Involvement for People Who Find Participation Difficult",
      body: "Standard involvement mechanisms (meetings, surveys) may not be accessible to service users with advanced dementia, severe communication difficulties, or significant sensory impairment. [ORGANISATION_NAME] ensures these service users have equal opportunity to influence their care through:\n• Observation of non-verbal responses — pleasure, discomfort, engagement, withdrawal — as valid data about preferences.\n• Use of communication tools: Talking Mats; picture-based choice boards; PECS (Picture Exchange Communication System); communication passports.\n• Involvement of families, carers, and advocates to supplement (not replace) the service user's own voice.\n• One-to-one sessions with a key worker specifically focused on preferences and feedback.\n• Activity observation — which activities does the person engage with? Avoid? These are data points about preferences.",
    },
  ],
  relatedDocuments: [
    "res-003 — Compliments & Feedback Policy",
    "eff-001 — Care Planning Policy",
    "car-008 — Advocacy Policy",
    "wl-013 — Quality Improvement Policy",
    "car-001 — Dignity & Respect Policy",
  ],
  appendices: [
    { title: "Appendix A — Residents' Meeting Record Template", content: "Date; attendees (service users and staff); apologies; items raised by service users; items raised by management; responses and decisions; actions: (action / owner / target date); follow-up from previous meeting (actions completed Y/N); next meeting date. Distributed to all service users within 5 working days." },
    { title: "Appendix B — Annual Survey Template", content: "Sections: My room and personal space; food and mealtimes; activities and things to do; staff — how they treat me; safety and feeling secure; having my say; overall rating. Each item rated on a 1–5 scale with space for free text comments. An easy-read version is available." },
  ],
  versionHistory: [
    { version: "2.3", date: "2026-02-20", changes: "Added involvement section for people with communication difficulties; strengthened collective involvement mechanisms." },
    { version: "2.1", date: "2025-05-01", changes: "Updated residents' meeting format; added annual survey benchmarking requirement." },
    { version: "2.0", date: "2024-03-01", changes: "Full review; aligned with Regulation 9 and Regulation 17; added service-level involvement mechanisms." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RES-003  Compliments & Feedback Policy
// ─────────────────────────────────────────────────────────────────────────────
export const RES003_CONTENT: DocumentContent = {
  title: "Compliments, Feedback & Complaints Policy",
  policyId: "RES-003",
  version: "3.0",
  effectiveDate: "2026-04-15",
  reviewDate: "2027-04-15",
  approvedBy: "Registered Manager",
  scope: "All service users, families, carers, and other stakeholders of [ORGANISATION_NAME] who wish to provide feedback, compliments, or complaints about the service. This policy applies to all staff and sets out [ORGANISATION_NAME]'s commitment to welcoming and acting on feedback of all kinds.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure the feedback and complaints procedure is clearly communicated to all service users, families, and stakeholders on admission and at all times.",
        "Investigate complaints within required timescales and respond in writing.",
        "Report complaints, their outcomes, and any resulting improvements at governance meetings.",
        "Ensure compliments are shared with the relevant staff.",
        "Submit notifications to CQC where a complaint relates to a notifiable event.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Welcome feedback — treat all feedback as an opportunity to improve.",
        "Never respond defensively to a complaint or attempt to discourage someone from complaining.",
        "Pass on complaints or concerns to the Registered Manager immediately.",
        "Record and report compliments as well as complaints.",
        "Know the complaints procedure and be able to explain it to service users and families.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 16 — Receiving and acting on complaints",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour",
    "Local Authority Social Services and National Health Service Complaints (England) Regulations 2009",
    "Parliamentary and Health Service Ombudsman (PHSO) — complaint handling principles",
    "CQC — The right to complain: guidance for regulated services",
  ],
  definitions: [
    { term: "Complaint", definition: "An expression of dissatisfaction, made formally or informally, about [ORGANISATION_NAME]'s actions, decisions, or the standard of service received. A complaint may be made verbally or in writing by a service user, family member, carer, or any other person with a legitimate interest." },
    { term: "Compliment", definition: "An expression of appreciation or satisfaction about the service, staff, or care received. Compliments are as important as complaints — they identify what is working well, motivate staff, and provide evidence of quality for CQC and commissioners." },
    { term: "Duty of Candour", definition: "The legal duty under Regulation 20 to be open and transparent with service users (and/or their representatives) when a notifiable safety incident has occurred. Duty of Candour requires [ORGANISATION_NAME] to: notify the affected person; apologise; offer a truthful account of what happened; explain what will be done to prevent recurrence. A statutory duty of candour notification must be in writing." },
  ],
  sections: [
    {
      title: "How to Provide Feedback or Make a Complaint",
      body: "Service users, families, and stakeholders can provide feedback or make a complaint:\n• Verbally — to any member of staff at any time.\n• In writing — letter or email to the Registered Manager.\n• Via the feedback box in the entrance or communal area.\n• Via [ORGANISATION_NAME]'s website or contact form.\n• By contacting CQC directly — CQC accepts complaints about registered providers at all times. Service users and families must be told about this right and must never be discouraged from using it.\n• By contacting the Local Government and Social Care Ombudsman (LGSCO) if the complaint relates to a local authority-arranged service.\n\nThe feedback procedure must be explained to every service user and their family on admission — in accessible formats (large print, easy read, translated) where needed.",
    },
    {
      title: "Complaint Handling Procedure",
      body: "Informal resolution:\n• Most concerns can be resolved quickly through a direct conversation. Any staff member receiving a complaint should try to resolve it immediately if within their authority — and if not, pass it to the Registered Manager without delay.\n\nFormal complaint:\n1. Acknowledgement in writing within 3 working days of receipt.\n2. Investigation: the Registered Manager (or a person designated by them who was not involved in the matter) investigates the complaint. The complainant should be offered the opportunity to meet and discuss their concerns.\n3. Written response within 20 working days of acknowledgement (or a written explanation of any delay).\n4. The response must: address every point raised; explain what was found; apologise where appropriate; explain what will be done differently.\n5. Appeal: if the complainant is not satisfied, they may escalate to the provider's management structure or to the LGSCO/CQC.\n\nAll complaints, whether resolved informally or formally, must be recorded in the complaints register.",
      legalBox: "Regulation 16 requires [ORGANISATION_NAME] to have a complaints system and to act on any complaints received. CQC can take regulatory action where a provider fails to have an effective complaints system or fails to investigate and respond to complaints. Complaints must never be hidden, minimised, or discouraged — CQC inspectors specifically ask service users and families about the complaints process and whether they feel safe to complain.",
    },
    {
      title: "Learning from Complaints",
      body: "[ORGANISATION_NAME] treats every complaint as an opportunity to improve. The complaints register is reviewed at monthly governance meetings with analysis of:\n• Volume and trend — are complaints increasing or decreasing?\n• Theme — what subjects are most frequently complained about? What does this indicate about systemic issues?\n• Outcome — what proportion of complaints are upheld? Partially upheld? Not upheld?\n• Actions taken — what changes have been made as a result of complaints?\n\nLearning from complaints is shared with staff at team meetings. Staff are supported to learn from complaints without blame — the question is always 'what can we do differently?' not 'who is at fault?'",
    },
    {
      title: "Compliments",
      body: "Compliments must be recorded in the compliments register and shared with the relevant staff as soon as possible. Compliments:\n• Are shared at team meetings and in supervision.\n• Are compiled quarterly for reporting to governance meetings and for use in evidence of quality (CQC Statement of Purpose, commissioner reports).\n• Are used to identify and celebrate good practice.\n\nA service that tracks only complaints and not compliments is missing half of its feedback picture. Compliments identify what to sustain and strengthen as much as complaints identify what to improve.",
    },
  ],
  relatedDocuments: [
    "res-002 — Service User Involvement Policy",
    "wl-004 — Whistleblowing Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-013 — Quality Improvement Policy",
    "car-001 — Dignity & Respect Policy",
  ],
  appendices: [
    { title: "Appendix A — Complaints Register Template", content: "Complaint reference; date received; complainant (anonymised); summary of complaint; category (care; staffing; environment; communication; other); date acknowledged; outcome of investigation (upheld/partially upheld/not upheld); date of written response; complainant satisfied (Y/N); action taken; learning shared with team (date)." },
    { title: "Appendix B — Compliments Register Template", content: "Date; source (service user/family/professional/other); recipient (named staff member or service generally); summary of compliment; shared with staff (date)." },
  ],
  versionHistory: [
    { version: "3.0", date: "2026-04-15", changes: "Merged compliments tracking into complaints policy; added LGSCO escalation route; updated Regulation 16 and 20 references." },
    { version: "2.8", date: "2025-06-01", changes: "Added learning from complaints governance reporting; updated investigation timescale to 20 working days." },
    { version: "2.5", date: "2024-04-01", changes: "Full review; added Duty of Candour section; updated CQC complaint referral rights." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RES-004  Flexible Service Delivery Policy
// ─────────────────────────────────────────────────────────────────────────────
export const RES004_CONTENT: DocumentContent = {
  title: "Flexible Service Delivery Policy",
  policyId: "RES-004",
  version: "2.0",
  effectiveDate: "2026-03-25",
  reviewDate: "2027-03-25",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] in relation to the delivery of their care, support, and daily routines. This policy reflects [ORGANISATION_NAME]'s commitment to delivering services that flex around the individual rather than requiring individuals to conform to institutional routines.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure rotas and care schedules are designed with flexibility to accommodate individual service user preferences.",
        "Review and challenge institutional routines that exist for staff convenience rather than service user benefit.",
        "Ensure service users know they can request changes to their care routines.",
        "Monitor whether flexibility is genuinely delivered in practice or only on paper.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Ask service users what they prefer — do not assume the standard routine is what they want.",
        "Accommodate reasonable requests for changes to care timing, sequencing, or approach.",
        "Escalate requests that require a care plan change to the Registered Manager.",
        "Never enforce a routine on a service user who expresses a preference for something different.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Care Act 2014 — wellbeing principle: control over day-to-day life",
    "Mental Capacity Act 2005 — the right to make decisions; supported decision-making",
    "Equality Act 2010 — flexible delivery as a reasonable adjustment for disability",
  ],
  definitions: [
    { term: "Institutional Care", definition: "A model of care organised around the operational needs of the institution (staff shifts, mealtimes, cleaning schedules) rather than the needs and preferences of the individuals receiving care. Institutional care is characterised by: fixed rising and bedtimes; set mealtimes regardless of appetite or preference; all residents receiving the same activities; little individual choice. [ORGANISATION_NAME] is committed to moving away from institutional care models." },
    { term: "Person-Centred Routine", definition: "A care and support routine that is designed around the individual service user's preferences, history, and daily rhythm — as distinct from the service's operational schedule. Person-centred routines are documented in the care plan and implemented consistently by all staff." },
  ],
  sections: [
    {
      title: "Flexible Daily Routines",
      body: "Service users have the right to choose their own daily routine to the greatest extent possible. [ORGANISATION_NAME]'s approach to flexibility covers:\n\nSleep and waking:\n• Service users choose what time they go to bed and wake up.\n• Staff do not wake service users at a fixed time because it is convenient for the morning shift.\n• Night care is provided when the service user needs it — not on a fixed schedule that wakes sleeping service users.\n\nMealtimes:\n• Mealtimes are offered at regular times, but service users are not required to eat at a specific time.\n• Food is available outside set mealtimes for service users who prefer different eating patterns.\n• Service users choose what and how much to eat — neither insisting they eat more nor refusing second helpings.\n\nBathing and personal care:\n• Service users choose how often they wash, whether they prefer a bath or shower, and at what time of day.\n• Personal care must never be scheduled purely for staff convenience.\n\nActivities:\n• Activities are offered, not imposed — service users are never required to participate.\n• Choosing to stay in their room, watch television, or do nothing is a valid choice that must be respected.",
      practiceBox: "The test of genuine flexibility is: 'If a service user said they wanted to get up at 10am, eat lunch at 2pm, and go to bed at midnight — could we make that work?' If the answer is 'only if they're the first to ask' or 'not really', the care model is more institutional than person-centred. Flexibility requires planning at rota and care-planning level, not just goodwill in the moment.",
    },
    {
      title: "Adapting Care Approaches",
      body: "Beyond daily routines, flexibility applies to how care is delivered:\n• Staff adapt their communication style, pace, and approach to each individual.\n• Equipment, techniques, and products used in care reflect individual preference where clinically safe.\n• Service users can ask for a different member of staff to carry out personal care — this request must be accommodated wherever possible.\n• Where a service user's preferences conflict with clinical or safety needs, the tension must be discussed honestly with the service user and a compromise sought — not resolved by overriding the service user's choice without explanation.",
    },
    {
      title: "Reviewing and Updating Preferences",
      body: "Service user preferences change. A routine that suited someone on admission may not suit them a year later. [ORGANISATION_NAME] ensures preferences are actively reviewed:\n• At every care review (minimum 3-monthly), care plan preferences are confirmed or updated.\n• Staff record and report any verbal or observed changes in preference between formal reviews.\n• The Registered Manager reviews whether the service's actual operation reflects the documented preferences in care plans — a gap between the two is a governance and quality issue.",
    },
  ],
  relatedDocuments: [
    "eff-001 — Care Planning Policy",
    "car-001 — Dignity & Respect Policy",
    "res-002 — Service User Involvement Policy",
    "car-006 — Activities & Social Engagement Policy",
    "car-001 — Dignity & Respect Policy",
  ],
  appendices: [
    { title: "Appendix A — Preferences and Daily Routine Template", content: "Section in the care plan covering: preferred wake time; preferred bedtime; morning care preferences (bath/shower/wash; time of day; products; staff preferences); mealtime preferences (times; favourite foods; dislikes; eating environment); activities preferences (what; when; how often; what to avoid); any other routine preferences. Updated at every review." },
  ],
  versionHistory: [
    { version: "2.0", date: "2026-03-25", changes: "Full rewrite; added institutional care definition; strengthened sleep/waking and personal care flexibility; added review and update section." },
    { version: "1.7", date: "2025-04-01", changes: "Added mealtime flexibility section; updated care plan template." },
    { version: "1.5", date: "2024-03-01", changes: "Initial review; aligned with Regulation 9 person-centred care." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RES-005  Hospital Admission & Discharge Liaison Policy
// ─────────────────────────────────────────────────────────────────────────────
export const RES005_CONTENT: DocumentContent = {
  title: "Hospital Admission & Discharge Liaison Policy",
  policyId: "RES-005",
  version: "2.4",
  effectiveDate: "2026-04-08",
  reviewDate: "2027-04-08",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] who are admitted to or discharged from hospital. This policy covers the responsibilities of [ORGANISATION_NAME] in preparing a service user for hospital admission, supporting them during a hospital stay, and ensuring a safe and effective discharge back to [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure robust hospital admission and discharge processes are in place and consistently followed.",
        "Ensure all required information accompanies a service user to hospital.",
        "Ensure timely and effective liaison with hospital discharge teams.",
        "Review every hospital admission and discharge for learning and quality improvement.",
        "Ensure readmission risk is assessed and mitigated following discharge.",
      ],
    },
    {
      role: "Care Staff",
      duties: [
        "Prepare and send required documentation when a service user is admitted to hospital.",
        "Maintain contact with the service user (and family, with consent) during a hospital stay.",
        "Receive and act on discharge information when a service user returns.",
        "Ensure the service user's room and care provision are ready on their return.",
        "Report any concerns about an unsafe discharge to the Registered Manager immediately.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Care Act 2014 — continuity of care across settings",
    "NHS Continuing Healthcare Framework — CHC assessment requirements",
    "Mental Capacity Act 2005 — decision-making during hospital admission and discharge",
    "NICE Guideline NG27 — Transition between inpatient hospital settings and community or care home settings (2015)",
  ],
  definitions: [
    { term: "Hospital Passport", definition: "A document prepared by [ORGANISATION_NAME] that travels with the service user to hospital and provides essential information for hospital staff: name, diagnosis, communication needs, medication, allergies, current care needs, next of kin, LPA details, advance care plan, DNACPR status, and communication preferences. The hospital passport dramatically reduces the risk of fundamental information being lost during hospital admission." },
    { term: "Discharge Summary", definition: "A document prepared by the hospital at discharge that summarises the service user's hospital treatment, diagnosis, medication changes, and follow-up requirements. [ORGANISATION_NAME] must receive and review the discharge summary before the service user returns. If a discharge summary is not available, a verbal handover from the ward nurse must be obtained and documented." },
    { term: "DNACPR", definition: "Do Not Attempt Cardiopulmonary Resuscitation. A clinical decision documented by a doctor that CPR should not be attempted in the event of a cardiac arrest. A DNACPR decision made in one clinical setting (e.g. [ORGANISATION_NAME]) may not automatically transfer to hospital — [ORGANISATION_NAME] must ensure the hospital is aware of any existing DNACPR and that the service user's wishes regarding resuscitation are communicated clearly." },
    { term: "Discharge to Assess (D2A)", definition: "An NHS discharge model where service users are discharged from hospital as soon as they are medically stable, with assessment of longer-term care needs taking place in a community or care setting rather than in hospital. [ORGANISATION_NAME] may receive service users under D2A pathways — the discharge assessment must be completed promptly and the service user's continuing care needs identified." },
  ],
  sections: [
    {
      title: "When a Service User is Admitted to Hospital",
      body: "When a service user is admitted to hospital (whether as an emergency or as a planned admission), [ORGANISATION_NAME] must:\n\n1. Prepare and send a hospital passport with the service user or ensure it reaches the ward within 1 hour of admission.\n2. Inform the next of kin (with consent) immediately.\n3. Inform the service user's GP.\n4. If the service user has a DNACPR form, send a copy with the service user — do not assume the hospital will have this on file.\n5. If the service user has an Advance Care Plan (including advance decision to refuse treatment), send a copy.\n6. If the service user lacks capacity and has a Health and Welfare LPA, inform the hospital of this and provide attorney contact details.\n7. Retain the service user's room for a defined period (in line with the service user's contract) — do not clear their room during admission.\n8. Nominate a member of staff to maintain liaison with the ward.",
      legalBox: "Failure to provide adequate information when a service user is admitted to hospital — particularly regarding DNACPR, advance care plans, and LPA status — may result in decisions being made that are contrary to the service user's documented wishes. Sending the hospital passport and advance care plan with every admission is a fundamental duty of care, not an optional extra.",
    },
    {
      title: "During a Hospital Stay",
      body: "During a hospital stay, [ORGANISATION_NAME]'s responsibilities include:\n• Maintaining regular contact with the service user — visiting if the service user would benefit (with their consent); calling the ward to monitor progress.\n• Responding promptly to requests from the ward for information or decisions.\n• Communicating updates to the family as agreed.\n• Proactively contacting the ward's discharge team once the service user is medically stable to begin discharge planning.\n• Alerting the ward to any factors relevant to discharge planning: level of care needed; adaptations at [ORGANISATION_NAME]; equipment requirements; family circumstances.\n• Participating in any hospital discharge planning meeting or multidisciplinary team (MDT) review.",
    },
    {
      title: "Discharge Back to [ORGANISATION_NAME]",
      body: "A safe discharge requires advance planning — not a same-day response to a phone call from the ward. [ORGANISATION_NAME]'s discharge checklist:\n\n• Minimum 24 hours' notice of discharge (48 hours preferred for complex discharges) — advocate for this with the ward if needed.\n• Receive and review the discharge summary before the service user returns.\n• Clarify any new medications — doses, routes, new items, discontinued items. Ensure medication supply is available for Day 1 of return.\n• Clarify any new care needs, wound care requirements, or therapy input required.\n• Ensure any new equipment (hospital bed, pressure mattress, hoist sling) is in place before the service user returns.\n• Ensure appropriate staff are available to receive the service user and carry out any new care tasks on Day 1.\n• Complete a post-discharge risk assessment and update the care plan within 24 hours of return.\n• Contact the GP same day to confirm return and any follow-up requirements.",
      practiceBox: "The highest-risk period for a care home resident is the 72 hours after discharge from hospital. This is when medication errors, falls, and clinical deterioration are most likely — particularly following changes to medication, loss of conditioning during the hospital stay, and confusion from the environment change. Heightened monitoring in the first 72 hours post-discharge is best practice: daily review; NEWS2 baseline; medication reconciliation completed; all staff briefed on new care needs.",
    },
    {
      title: "Concerns About Unsafe Discharge",
      body: "If [ORGANISATION_NAME] has concerns that a service user is being discharged unsafely — insufficient notice; care needs beyond [ORGANISATION_NAME]'s registered scope; medication not ready; essential equipment not in place — the Registered Manager must:\n• Raise concerns with the ward's discharge coordinator and/or the bed manager directly.\n• Document the concerns and the response.\n• Escalate to the hospital's Patient Advice and Liaison Service (PALS) if the concern is not addressed.\n• Contact the local authority discharge team if the discharge involves a local authority-funded placement.\n\n[ORGANISATION_NAME] should not accept a service user's discharge if it cannot safely meet their care needs. Accepting an unsafe discharge and then delivering inadequate care is worse than declining and advocating for a safe discharge plan.",
    },
  ],
  relatedDocuments: [
    "eff-007 — Discharge & Transfer Policy",
    "saf-004 — Medication Management Policy",
    "eff-002 — Mental Capacity Act Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "eff-011 — Physical Health Monitoring Policy",
  ],
  appendices: [
    { title: "Appendix A — Hospital Passport Template", content: "Service user's name, preferred name, date of birth, NHS number; diagnosis and medical history; current medications and allergies; communication needs and preferred language; cognitive impairment / dementia (Y/N); mobility and care needs summary; continence; eating and drinking (texture/consistency if IDDSI-modified); DNACPR status; advance care plan (Y/N — location); LPA (Y/N — attorney name and contact); next of kin name and contact; GP name and surgery; key worker name and contact; home/service name, address and phone." },
    { title: "Appendix B — Discharge Checklist", content: "Notice of discharge received (date/time); discharge summary received (Y/N); medications reconciled (Y/N — new/changed/discontinued items listed); new care needs identified (Y/N — documented); new equipment in place (Y/N); staff briefed on new care needs (Y/N); GP notified (Y/N); care plan updated within 24 hours (Y/N); 72-hour enhanced monitoring in place (Y/N)." },
  ],
  versionHistory: [
    { version: "2.4", date: "2026-04-08", changes: "Added 72-hour post-discharge monitoring guidance; strengthened unsafe discharge escalation; updated DNACPR transfer guidance." },
    { version: "2.2", date: "2025-05-01", changes: "Added D2A pathway section; updated discharge checklist; added PALS escalation route." },
    { version: "2.0", date: "2024-04-01", changes: "Full review; aligned with NICE NG27; added hospital passport template." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-015  Equality & Human Rights Policy (Employment)
// ─────────────────────────────────────────────────────────────────────────────
export const WL015_CONTENT: DocumentContent = {
  title: "Equality & Human Rights Policy (Employment)",
  policyId: "WL-015",
  version: "2.5",
  effectiveDate: "2026-03-15",
  reviewDate: "2027-03-15",
  approvedBy: "Registered Manager",
  scope: "All employees, workers, volunteers, and job applicants at [ORGANISATION_NAME] in relation to equality, diversity, and inclusion in the employment relationship. This policy should be read alongside CAR-002 Equality, Diversity & Inclusion Policy, which covers equality in relation to service users. This policy focuses on employment practices.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all employment practices — recruitment, induction, supervision, appraisal, promotion, pay, and discipline — are free from unlawful discrimination.",
        "Ensure [ORGANISATION_NAME] makes reasonable adjustments for disabled employees and job applicants.",
        "Investigate any allegation of discrimination, harassment, or victimisation promptly and thoroughly.",
        "Monitor workforce diversity and take positive action where underrepresentation is identified.",
        "Ensure all staff receive equality and diversity training.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Treat colleagues with dignity and respect regardless of any protected characteristic.",
        "Never discriminate, harass, or victimise a colleague or job applicant.",
        "Challenge discriminatory behaviour if safe and appropriate to do so, or report it.",
        "Support reasonable adjustments for disabled colleagues.",
        "Engage constructively with equality and diversity training.",
      ],
    },
  ],
  legislation: [
    "Equality Act 2010 — nine protected characteristics; prohibited conduct; reasonable adjustments",
    "Human Rights Act 1998 — Article 14 (prohibition of discrimination); Article 8 (private life); Article 9 (religion); Article 10 (expression)",
    "Employment Rights Act 1996 — unfair dismissal; detriment",
    "Part-time Workers (Prevention of Less Favourable Treatment) Regulations 2000",
    "Fixed-term Employees (Prevention of Less Favourable Treatment) Regulations 2002",
  ],
  definitions: [
    { term: "Protected Characteristics", definition: "The nine characteristics protected under the Equality Act 2010: age; disability; gender reassignment; marriage and civil partnership; pregnancy and maternity; race; religion or belief; sex; sexual orientation. [ORGANISATION_NAME] prohibits discrimination, harassment, and victimisation related to any of these characteristics in all aspects of employment." },
    { term: "Direct Discrimination", definition: "Treating a person less favourably because of a protected characteristic than [ORGANISATION_NAME] treats or would treat others in the same or comparable circumstances. Example: not shortlisting an applicant because they disclose a disability; refusing to promote a woman because she might become pregnant." },
    { term: "Indirect Discrimination", definition: "Applying a provision, criterion, or practice (PCP) that applies to everyone but puts people with a protected characteristic at a particular disadvantage compared to those without, and which cannot be justified as a proportionate means of achieving a legitimate aim. Example: requiring all applicants to have a driving licence may indirectly discriminate against people with certain disabilities." },
    { term: "Reasonable Adjustments", definition: "Steps an employer must take to remove a disadvantage faced by a disabled person. 'Reasonable' is assessed by reference to: the practicability and cost of the adjustment; the resources of [ORGANISATION_NAME]; the extent to which the adjustment would alleviate the disadvantage. Failure to make a reasonable adjustment is unlawful. Reasonable adjustments may include: adjusted hours; different equipment; modified duties; additional support; different working location." },
    { term: "Harassment", definition: "Unwanted conduct related to a protected characteristic that has the purpose or effect of violating a person's dignity or creating an intimidating, hostile, degrading, humiliating, or offensive environment. Harassment does not require intent — the effect on the recipient is what matters. Sexual harassment (unwanted conduct of a sexual nature) is a specific form of harassment." },
  ],
  sections: [
    {
      title: "Equality in Recruitment",
      body: "All recruitment activity at [ORGANISATION_NAME] must be free from unlawful discrimination:\n• Job descriptions and person specifications must be based on genuine operational requirements — they must not indirectly exclude candidates from protected groups without justification.\n• Advertisements must be placed where they will reach diverse pools of candidates.\n• Selection criteria must be objective and applied consistently. Interview panels must be trained in fair selection techniques.\n• [ORGANISATION_NAME] provides equal access to any reasonable adjustments needed by disabled applicants for the selection process.\n• Pre-employment health questions are only asked after a conditional offer is made, and only to assess fitness for the role or to identify reasonable adjustments — not to screen out disabled candidates.\n• Asking candidates about pregnancy, family plans, or relationship status at interview is prohibited.",
    },
    {
      title: "Equality in Day-to-Day Employment",
      body: "Equality principles apply throughout the employment relationship:\n\nPay and terms:\n• All staff performing equal work must receive equal pay. Gender pay differences for equal work are unlawful. Regular pay reviews must include an equality analysis.\n\nPromoting and developing:\n• Promotion and development opportunities must be allocated on merit. [ORGANISATION_NAME] monitors whether development opportunities reach all staff groups.\n\nFlexible working:\n• [ORGANISATION_NAME] considers all flexible working requests fairly, regardless of the reason. Flexible working may be a reasonable adjustment for a disability or a requirement for a carer.\n\nGrievance and discipline:\n• Disciplinary action and grievance investigations must be applied consistently regardless of protected characteristic. The Registered Manager monitors for patterns of disproportionate disciplinary action against particular groups.",
    },
    {
      title: "Dealing with Discrimination, Harassment, and Victimisation",
      body: "Any employee who believes they have experienced or witnessed discrimination, harassment, or victimisation should:\n• Raise the matter informally with their line manager if they feel comfortable doing so.\n• Or raise a formal grievance under WL-011 Grievance Policy.\n• Or contact the Registered Manager directly.\n\n[ORGANISATION_NAME] investigates all allegations promptly, confidentially, and without prejudging the outcome. Where an allegation is upheld, disciplinary action up to and including dismissal is applied under WL-010.\n\nVictimisation — treating someone less favourably because they have made or supported a complaint under the Equality Act — is itself unlawful and is treated as a disciplinary matter.\n\nThird-party harassment (harassment by a service user or visitor) must also be addressed by [ORGANISATION_NAME]. Staff who are harassed by a service user are entitled to be protected — management must take reasonable steps to prevent the harassment from continuing.",
    },
    {
      title: "Positive Action",
      body: "Where [ORGANISATION_NAME] identifies that people with a particular protected characteristic are under-represented in its workforce or in specific roles, it may take positive action to address this imbalance. Positive action is voluntary and must be proportionate. Examples:\n• Targeted job advertisements in media reaching under-represented communities.\n• Work experience or apprenticeship programmes aimed at under-represented groups.\n• Mentoring or development programmes for under-represented groups.\n\nPositive action is distinct from positive discrimination (preferring a less-qualified candidate solely on the basis of a protected characteristic) — which is unlawful in the UK except in very specific circumstances under the Equality Act 2010, section 159.",
    },
  ],
  relatedDocuments: [
    "car-002 — Equality, Diversity & Inclusion Policy",
    "wl-010 — Disciplinary & Capability Policy",
    "wl-011 — Grievance Policy",
    "wl-012 — Absence Management Policy",
    "wl-001 — Recruitment & Selection Policy",
  ],
  appendices: [
    { title: "Appendix A — Equality Monitoring Form", content: "Voluntary monitoring form for job applicants and employees: age band; gender; ethnic group; disability (Y/N); sexual orientation; religion or belief. Data collected anonymously and used only for equality monitoring purposes. Never used in selection decisions. GDPR-compliant privacy notice included." },
    { title: "Appendix B — Reasonable Adjustments Process", content: "Step 1: employee/applicant discloses a disability or health condition. Step 2: manager discusses what adjustments might help — using occupational health advice where needed. Step 3: adjustments agreed and documented. Step 4: adjustments implemented. Step 5: review date set. If adjustment request is declined, written reasons provided and grievance right explained." },
  ],
  versionHistory: [
    { version: "2.5", date: "2026-03-15", changes: "Added third-party harassment section; updated positive action guidance; added reasonable adjustments process appendix." },
    { version: "2.3", date: "2025-05-01", changes: "Added gender pay equality section; updated flexible working section to reflect statutory right from Day 1." },
    { version: "2.0", date: "2024-03-01", changes: "Full review; aligned with Equality Act 2010 current guidance; separated from service user EDI policy." },
  ],
};
