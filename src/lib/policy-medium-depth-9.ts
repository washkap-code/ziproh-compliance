/**
 * Medium-depth policy content — batch 9.
 * Pressure Ulcer Prevention (Effective KQ), Oral Health & Dental Care,
 * Activities & Social Engagement, Family & Carer Involvement,
 * Learning & Development Strategy.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// EFF-006  Pressure Ulcer Prevention Policy (Effective KQ)
// ─────────────────────────────────────────────────────────────────────────────
export const EFF006_CONTENT: DocumentContent = {
  title: "Pressure Ulcer Prevention Policy",
  policyId: "EFF-006",
  version: "3.1",
  effectiveDate: "2026-05-01",
  reviewDate: "2027-05-01",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All service users at [ORGANISATION_NAME] who are at risk of developing pressure ulcers. This policy covers pressure ulcer risk assessment, prevention strategies, care planning, repositioning, pressure-relieving equipment, and escalation. It must be read alongside SAF-014 Pressure Ulcer Prevention & Management Policy (which covers wound management once a pressure ulcer has developed) and SAF-017 Skin Integrity & Wound Care Policy.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure every service user at risk of pressure damage has a current Waterlow or equivalent risk assessment and a prevention care plan.",
        "Ensure appropriate pressure-relieving equipment is available, maintained, and used correctly.",
        "Review all new pressure ulcers (Category 2 and above) as potential serious incidents.",
        "Submit serious incident reports for Category 3 and 4 pressure ulcers in line with local authority and NHS reporting requirements.",
        "Track pressure ulcer incidence and prevalence at monthly governance meetings.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Complete or contribute to pressure ulcer risk assessment on admission and at each review.",
        "Follow repositioning schedules precisely — do not deviate without clinical authorisation.",
        "Inspect skin at every care contact and report any new skin changes immediately.",
        "Ensure pressure-relieving equipment is in use as specified in the care plan.",
        "Attend pressure ulcer prevention training at induction and annually.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour (Category 3/4 pressure ulcers)",
    "NICE Guideline CG179 — Pressure ulcers: prevention and management (2014, updated 2024)",
    "NHS England — Stop the Pressure programme: pressure ulcer prevention resources",
    "NHS England — Serious Incident Framework 2015 (applicable to Category 3 and 4 pressure ulcers)",
  ],
  definitions: [
    { term: "Pressure Ulcer", definition: "A localised injury to the skin and/or underlying tissue, usually over a bony prominence, resulting from sustained pressure or pressure combined with shear. The European Pressure Ulcer Advisory Panel (EPUAP) classifies pressure ulcers in four categories: Category 1 (non-blanchable erythema); Category 2 (partial thickness skin loss — blister or shallow open ulcer); Category 3 (full thickness skin loss); Category 4 (full thickness tissue loss — exposed bone, tendon, or muscle). Deep Tissue Injury (DTI) and Unstageable ulcers are additional categories." },
    { term: "Waterlow Score", definition: "A validated pressure ulcer risk assessment tool that scores patients across multiple risk factors: build/weight-for-height; skin type; sex and age; malnutrition screening (MUST score); continence; mobility; special risk factors (tissue malnutrition, neurological deficit, surgery, medication). Score interpretation: 10–14 = at risk; 15–19 = high risk; 20+ = very high risk. Higher scores require more intensive prevention." },
    { term: "Repositioning", definition: "Changing a person's position to relieve pressure over bony prominences. Repositioning frequency is determined by the risk assessment and individual care plan. Standard schedules are 2-hourly for bedbound patients and 15-minutely for wheelchair-dependent patients, but these must be individualised. A repositioning chart must be maintained as evidence." },
    { term: "Pressure-Relieving Equipment", definition: "Devices designed to redistribute pressure over larger areas of the body: dynamic air mattresses (alternating pressure or low-air-loss); high-specification foam mattresses; pressure-relieving cushions; heel protectors. Equipment selection must be based on the Waterlow score and individual need — a standard foam mattress does not provide adequate pressure relief for high or very high risk patients." },
    { term: "Shear", definition: "A force that acts parallel to the skin surface, causing skin and underlying tissue to move in opposite directions (e.g., when a patient slides down the bed, the skin adheres to the sheet while underlying tissue moves). Shear significantly amplifies pressure damage. Repositioning technique must minimise shear — use slide sheets; raise the bed foot before the backrest; never drag patients up the bed." },
  ],
  sections: [
    {
      title: "Risk Assessment",
      body: "Pressure ulcer risk assessment must be completed:\n• Within 6 hours of admission.\n• Within 6 hours of any significant change in health status (acute illness, reduction in mobility, new incontinence).\n• At every formal care review (minimum 3-monthly, or monthly for high and very high risk).\n• Following any period of hospitalisation.\n\n[ORGANISATION_NAME] uses the Waterlow Scale as its primary risk assessment tool, supplemented by clinical judgement. Waterlow assessments must be documented in the care record. The risk score determines the level of prevention required — a care plan must be updated immediately following any risk assessment that shows increased risk.\n\nRisk assessment alone is not sufficient — it must be accompanied by a documented prevention care plan. A high or very high Waterlow score with no corresponding prevention plan is a governance failure.",
      practiceBox: "Waterlow is a guide, not a ceiling. A person with a Waterlow score of 12 ('at risk') who is acutely unwell, has poor nutritional intake, or who staff observe is spending long periods immobile may actually be at high risk in practice. Document your clinical reasoning when the plan deviates from the score-based recommendation.",
    },
    {
      title: "Prevention — The SSKIN Bundle",
      body: "The SSKIN bundle is [ORGANISATION_NAME]'s structured approach to pressure ulcer prevention. All five elements must be documented and actioned for every service user at risk:",
      subSections: [
        {
          heading: "S — Surface",
          body: "Every service user at risk must have an appropriate pressure-relieving surface. Waterlow 10–14: minimum high-specification foam mattress. Waterlow 15–19: dynamic (alternating pressure) mattress. Waterlow 20+: dynamic mattress; consider low-air-loss for very high risk. Appropriate seating cushion for all at-risk service users who sit out. Check equipment is functioning, inflated to correct pressure, and correctly set for the person's weight.",
        },
        {
          heading: "S — Skin inspection",
          body: "Skin must be inspected at every care contact (personal care, repositioning, continence care). Any skin redness or discolouration must be assessed for blanching — non-blanchable erythema is Category 1 and requires escalation. Any new Category 1 or above finding must be reported to the person in charge immediately, photographed, and documented.",
        },
        {
          heading: "K — Keep moving",
          body: "Repositioning must be carried out at the frequency specified in the individual care plan (standard: 2-hourly in bed; 15-minute weight-shifts in chair; review each shift). Repositioning must be documented on a repositioning chart — gaps in the chart may indicate gaps in care. Active participation and mobility should be encouraged where possible.",
        },
        {
          heading: "I — Incontinence and moisture",
          body: "Moisture from urine, faeces, sweat, or wound exudate significantly increases pressure damage risk. Refer to EFF-008 Continence Management Policy. Continence aids must be appropriate; skin must be thoroughly dried after each episode; barrier products applied as prescribed. Distinguish between MASD (moisture damage) and pressure ulcer — both may coexist.",
        },
        {
          heading: "N — Nutrition",
          body: "Malnutrition and dehydration are major pressure ulcer risk factors. Refer to EFF-003 Nutrition & Hydration Policy. Every at-risk service user must have a current MUST score and a nutritional care plan. Dietitian referral for MUST score 2+ or any at-risk service user with unplanned weight loss.",
        },
      ],
    },
    {
      title: "Pressure Ulcer Escalation and Reporting",
      body: "When a new pressure ulcer is identified, the following escalation pathway applies:\n\n• Category 1: Photograph; update care plan (increase repositioning frequency, review surface); inform person in charge; document in wound care record; increase skin surveillance. Review within 24 hours.\n• Category 2: As above plus: inform GP or district nurse same day; refer to TVN within 48 hours; notify next of kin (with consent); document in incident report. Review within 24 hours.\n• Category 3 or 4: As above plus: treat as serious incident; complete full incident report; report to local authority safeguarding team (unexplained pressure ulcers may constitute neglect); report to CQC under Regulation 20 (Duty of Candour); commission root cause analysis.\n\nFor Category 3 and 4 pressure ulcers, the Duty of Candour requires [ORGANISATION_NAME] to notify the service user (and/or their representative), offer an apology, and explain what happened and what will be done to prevent recurrence.",
      warningBox: "A new Category 3 or 4 pressure ulcer acquired at [ORGANISATION_NAME] is a Never Event equivalent in many NHS frameworks and a potential safeguarding matter. It must trigger a serious incident investigation — not just a wound care review. The question to answer is: was every element of the SSKIN bundle in place, correctly implemented, and documented? If not, the investigation must establish why.",
    },
  ],
  relatedDocuments: [
    "saf-014 — Pressure Ulcer Prevention & Management Policy",
    "saf-017 — Skin Integrity & Wound Care Policy",
    "eff-003 — Nutrition & Hydration Policy",
    "eff-008 — Continence Management Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Waterlow Risk Assessment Tool", content: "Full Waterlow scoring matrix: build/weight for height (0–3); skin type visual risk (0–3); sex and age (1–5); malnutrition screening tool result (0–3); continence (0–3); mobility (0–5); special risks: tissue malnutrition (8), neurological deficit (4–6), major surgery/trauma (5), medication (4). Total score interpretation: <10 = low risk; 10–14 = at risk; 15–19 = high risk; 20+ = very high risk." },
    { title: "Appendix B — Repositioning Chart Template", content: "24-hour repositioning log: time; position (left lateral / right lateral / semi-recumbent / seated); skin inspection findings; staff initials; next position due. Any gap in the chart must be explained in the nursing notes." },
  ],
  versionHistory: [
    { version: "3.1", date: "2026-05-01", changes: "Added SSKIN bundle as structured prevention framework; updated Category escalation pathway; added Duty of Candour requirements for Cat 3/4." },
    { version: "3.0", date: "2025-06-01", changes: "Full review; aligned with NICE CG179 2024 update; added deep tissue injury category." },
    { version: "2.8", date: "2024-05-01", changes: "Updated Waterlow thresholds; added repositioning chart requirement; linked to SSKIN." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-009  Oral Health & Dental Care Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF009_CONTENT: DocumentContent = {
  title: "Oral Health & Dental Care Policy",
  policyId: "EFF-009",
  version: "2.3",
  effectiveDate: "2026-03-10",
  reviewDate: "2027-03-10",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] in relation to their oral health and dental care. This policy covers oral health assessment, daily oral hygiene care, denture management, access to dental services, and specific oral health considerations for people with dementia or swallowing difficulties.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure oral health assessment is completed for every service user on admission.",
        "Ensure the care plan includes a personalised oral care plan for every service user.",
        "Facilitate access to dental services — NHS or private — for all service users who need it.",
        "Ensure staff are trained in oral health and denture care.",
        "Ensure oral health products (toothbrushes, toothpaste, denture fixative, mouthwash) are available and replaced regularly.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Support service users to clean their teeth, gums, and dentures as specified in the oral care plan.",
        "Never skip oral hygiene care — it is as clinically important as pressure area care.",
        "Report any new oral health concerns (pain, bleeding gums, broken dentures, mouth ulcers) without delay.",
        "Handle dentures with care — label and store correctly.",
        "Respect service user preferences regarding oral hygiene products and timing.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "NICE Guideline NG48 — Oral health for adults in care homes (2016)",
    "NHS England — Smiling Matters: Oral Health Care in Care Homes (2019)",
    "NHS Dental Contract Regulations 2005 — NHS dental entitlements",
  ],
  definitions: [
    { term: "Oral Health Assessment", definition: "A structured assessment of a service user's oral health status covering: natural teeth (condition, sensitivity, missing teeth); dentures (fit, condition, labelling); gums (colour, bleeding, swelling); tongue and mucosa (ulcers, coating, dryness); oral hygiene (plaque, food debris); saliva (dry mouth); pain or difficulty eating. The assessment informs the oral care plan and identifies need for dental referral." },
    { term: "Xerostomia (Dry Mouth)", definition: "Reduced saliva production, commonly caused by dehydration, mouth-breathing, or medication side effects (antihistamines, antidepressants, antipsychotics, diuretics, anticholinergics). Dry mouth increases risk of tooth decay, oral thrush, and difficulty swallowing. Management includes oral hydration, saliva substitutes, and medication review." },
    { term: "Denture-Induced Stomatitis", definition: "Inflammation of the oral mucosa under a denture, usually caused by the Candida fungus. It appears as a red, inflamed area under the denture, which may be sore or burning. Treatment involves antifungal medication and meticulous denture hygiene — dentures must be removed at night and soaked in denture cleaner." },
    { term: "IDDSI", definition: "International Dysphagia Diet Standardisation Initiative. For service users with dysphagia (swallowing difficulties), IDDSI-classified food textures and drink consistencies are prescribed to prevent aspiration. Oral care in people with dysphagia must be adapted — refer to the speech and language therapist's (SALT) guidance for safe mouth care techniques." },
  ],
  sections: [
    {
      title: "Oral Health Assessment on Admission",
      body: "Every service user admitted to [ORGANISATION_NAME] must have an oral health assessment completed within 48 hours of admission. [ORGANISATION_NAME] uses the NHSE Oral Health Assessment Tool (OHAT) adapted for care homes. The assessment covers:\n\n• Lips, tongue, gums and tissues, saliva, natural teeth, dentures, oral cleanliness, dental pain.\n• Each domain is scored: healthy; changes; unhealthy.\n• A care plan is generated from the assessment.\n• Dental referral is arranged if the assessment identifies unmet dental need.\n\nWhere a service user is admitted from hospital, the oral health status documented in the discharge summary must be reviewed — any dental appointments must be carried over.\n\nThe oral health assessment must be reviewed at least every 6 months and following any change in health status that may affect oral health (acute illness, new medication, dysphagia diagnosis, significant weight loss).",
      practiceBox: "Oral health assessments take 5–10 minutes and are frequently missed during busy admissions. Brief every admission care worker: 'Before the end of this admission, one more assessment to complete — oral health.' A checklist embedded in the admission paperwork increases compliance significantly.",
    },
    {
      title: "Daily Oral Hygiene Care",
      body: "Daily oral care must be carried out at least twice daily — after breakfast and before bed — as a minimum. The oral care plan specifies the service user's individual preferences and any adaptations required:\n\nNatural teeth:\n• Brush with fluoride toothpaste (1,450ppm for adults) for 2 minutes.\n• Use a small-headed soft toothbrush — replace every 3 months or after illness.\n• Do not rinse with water immediately after brushing — spit only — to maximise fluoride contact time.\n• Where a service user cannot tolerate brushing, try adapted approaches: a smaller brush; a different flavour of toothpaste; a finger brush; timing around a comfortable moment.\n\nDentures:\n• Remove dentures after each meal and rinse under running water.\n• Brush all surfaces of dentures with a denture brush and denture cleaner (not toothpaste — it is too abrasive).\n• Remove dentures at night — soak in cold water or denture cleaner solution.\n• Do not soak metal-based dentures in bleach-based cleaners.\n• Handle dentures over a bowl of water or a folded towel to reduce breakage risk if dropped.\n\nGums and mucosa:\n• Even where a service user has no teeth, gums and oral mucosa must be cleaned gently with a moistened soft foam swab or cloth.",
    },
    {
      title: "Oral Health for People with Dementia",
      body: "Oral care for people with dementia requires patient, adaptable, and person-centred approaches. People with dementia may resist oral care due to confusion, pain, discomfort, or inability to understand what is happening. Strategies:\n\n• Use a calm, consistent routine — same time, same approach, same person where possible.\n• Give simple, one-step instructions — 'open your mouth'; 'bite down' — rather than complex instructions.\n• Use touch prompts — gently touching the cheek or lips can prompt opening of the mouth.\n• Hand-over-hand technique — guide the service user's hand with a toothbrush and let them feel the sensation as a prompt.\n• Consider the service user's oral care history — did they use mouthwash? Electric toothbrush? These familiar items may be more accepted.\n• Pain from dental caries or loose dentures may be expressed as behaviour — unexplained distress, refusing to eat, or increased agitation — not as verbal complaint. Report behavioural changes that may indicate oral pain.",
    },
    {
      title: "Access to Dental Services",
      body: "Every service user has the right to access dental care. [ORGANISATION_NAME] facilitates access to dental services:\n\n• NHS dental services: service users are entitled to NHS dental treatment (Band 1, 2, 3). [ORGANISATION_NAME] maintains a list of local NHS dentists accepting care home patients. Domiciliary dental services (dentists who visit care homes) are available in most areas through the community dental service — refer to the commissioner.\n• Emergency dental access: for acute toothache or dental injury, contact the GP (who can prescribe analgesia) and arrange urgent dentist appointment. Out of hours: NHS 111 can direct to emergency dental services.\n• Dental costs: service users on benefits or meeting NHS low-income criteria are entitled to free NHS dental treatment via HC2 certificate. Support service users to apply where eligible.",
    },
  ],
  relatedDocuments: [
    "eff-003 — Nutrition & Hydration Policy",
    "eff-010 — Dysphagia Management Policy",
    "eff-001 — Care Planning Policy",
    "car-001 — Dignity & Respect Policy",
    "saf-004 — Medication Management Policy",
  ],
  appendices: [
    { title: "Appendix A — Oral Health Assessment Tool (OHAT adapted)", content: "Eight domains scored 0–2: lips; tongue; gums and tissues; saliva; natural teeth; dentures; oral cleanliness; dental pain. Score 0 = healthy; 1 = changes; 2 = unhealthy. Total score 0–16. Score ≥3 triggers dental referral consideration. Assessment completed by care staff on admission and 6-monthly thereafter." },
    { title: "Appendix B — Oral Care Plan Template", content: "Service user name; assessment date; natural teeth (Y/N, condition); dentures (upper/lower/both/none, labelled Y/N, fit adequate Y/N); daily care routine (frequency, products, technique, adaptations needed); oral pain or concerns; dental appointment due date; dental referral made (Y/N, date); review date." },
  ],
  versionHistory: [
    { version: "2.3", date: "2026-03-10", changes: "Added dementia-specific oral care guidance; updated IDDSI reference for dysphagia; added OHAT assessment tool." },
    { version: "2.1", date: "2025-04-01", changes: "Added NHS dental entitlement guidance; updated domiciliary dental service referral pathway." },
    { version: "2.0", date: "2024-03-01", changes: "Full review; aligned with NICE NG48 and NHS England Smiling Matters report." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-006  Activities & Social Engagement Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR006_CONTENT: DocumentContent = {
  title: "Activities & Social Engagement Policy",
  policyId: "CAR-006",
  version: "2.5",
  effectiveDate: "2026-02-14",
  reviewDate: "2027-02-14",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] in relation to their social, recreational, cultural, and spiritual activities. This policy applies to all staff and covers activity planning, individual engagement, meaningful occupation, community access, and the prevention of social isolation.",
  responsibilities: [
    {
      role: "Registered Manager / Activities Coordinator",
      duties: [
        "Ensure every service user has an individual activity profile and preferences documented in their care plan.",
        "Develop and publish a varied activities programme that reflects service users' diverse interests, backgrounds, and abilities.",
        "Ensure activities are accessible to all service users, including those with cognitive, physical, or sensory impairments.",
        "Monitor participation and identify service users who are at risk of social isolation.",
        "Facilitate community links and external activities for service users who are able and willing to participate.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Contribute to service users' activity engagement as part of everyday care — not just during organised sessions.",
        "Know each service user's interests, hobbies, and meaningful occupations from their activity profile.",
        "Never dismiss a service user's interest as trivial — all interests and activities have value.",
        "Record meaningful engagements in care records and flag where engagement has reduced.",
        "Assist service users to attend activities in accordance with their support needs.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Care Act 2014 — wellbeing principle; promotion of social participation",
    "Equality Act 2010 — activities must be inclusive and accessible; reasonable adjustments required",
    "Mental Capacity Act 2005 — activity choices must be respected; supported decision-making applies",
    "Human Rights Act 1998, Article 8 — right to private and family life; Article 9 — freedom of thought, conscience and religion",
  ],
  definitions: [
    { term: "Meaningful Occupation", definition: "Activities or occupations that are personally significant to a service user — that provide purpose, enjoyment, cognitive stimulation, or connection with identity, history, or relationships. Meaningful occupation is not limited to organised group activities — it includes reading, gardening, listening to music, reminiscing, socialising with family, or any activity the service user values." },
    { term: "Activity Profile", definition: "A documented record of a service user's past and present interests, hobbies, occupations, and activities, including: what they enjoyed before moving to the service; activities they would like to continue or try; activities they dislike or wish to avoid; adaptations needed to enable participation; cultural, spiritual, or religious activities important to them." },
    { term: "Social Isolation", definition: "A state in which a person has limited or no meaningful social contact. Social isolation is a significant risk factor for depression, cognitive decline, physical health deterioration, and mortality. Loneliness — the subjective experience of feeling alone — is distinct from social isolation but often co-occurs. Both must be actively monitored and addressed." },
    { term: "Reminiscence", definition: "A structured or informal activity in which service users reflect on and share memories from their past life. Reminiscence has evidenced benefits for people with dementia, supporting identity, mood, and communication. It uses objects, photographs, music, and sensory stimuli associated with the person's past. All staff can participate in reminiscence — it does not require specialist training." },
  ],
  sections: [
    {
      title: "Activity Assessment and Care Planning",
      body: "Every service user's care plan must include an individual activity profile and a section on meaningful occupation and social engagement. The activity profile is completed:\n• On admission — as part of the life history and care planning process.\n• At each care review (minimum 3-monthly).\n• Following any significant change in health, cognition, or mobility that may affect participation.\n\nThe activity profile must capture:\n• Pre-admission interests, hobbies, occupations, and daily routines.\n• Activities the service user currently enjoys or would like to try.\n• Activities they wish to avoid (cultural, religious, or personal preference).\n• Any barriers to participation: mobility, sensory impairment, cognitive impairment, language.\n• Adaptations and support needed to enable participation.\n• Preferences for individual vs. group activities.\n\nThe profile must be person-led — drawn from the service user's own words and, where needed, from family and carers who know the person well.",
    },
    {
      title: "Activities Programme",
      body: "A varied weekly activities programme must be developed that reflects the service user group's collective and individual interests. The programme must be:\n• Published and accessible to service users, families, and visitors.\n• Varied — a balance of physical, cognitive, creative, social, and cultural activities.\n• Inclusive — activities must be adapted so that service users with dementia, physical disability, or sensory impairment can participate meaningfully.\n• Flexible — the programme is a framework, not a rigid schedule. If a planned activity is not meeting service users' needs on the day, staff have the authority to adapt it.\n\nActivities must go beyond the organised session programme. Staff interactions during personal care, mealtimes, and quiet time are themselves opportunities for engagement — conversation, music, reminiscence, reading, and sensory stimulation can all occur during routine care.",
      practiceBox: "The most effective activities person in a care home is often not the activities coordinator but the care worker who spends hours each day with a service user. Building engagement into all care interactions — talking about the service user's past job, playing music they loved in their 20s during morning care, reading them a letter from their family — is the highest-frequency and often highest-impact form of activity provision.",
    },
    {
      title: "Preventing and Addressing Social Isolation",
      body: "Social isolation in care settings can occur even when group activities are offered — a service user may be physically present but psychologically withdrawn. [ORGANISATION_NAME] monitors for social isolation by:\n\n• Key workers observing and recording participation and mood at each visit.\n• Flagging any service user who declines activities for more than 3 consecutive days.\n• Including a social engagement question in care reviews: 'How connected do you feel to people around you?'\n• Monitoring service users who have no or infrequent family visitors — these individuals are at highest risk of isolation.\n\nWhere social isolation is identified, the response must be individual and proactive:\n• Explore the reason — is the service user unwell? In pain? Bereaved? Depressed?\n• Adjust the activity offer — sometimes preferred activities are not available.\n• Increase 1:1 engagement from key worker.\n• Consider referral to psychology, community mental health team, or befriending service.\n• Involve the family in understanding and addressing the withdrawal if possible.",
      legalBox: "Social isolation and loneliness in care settings may constitute a failure to meet the wellbeing principle under the Care Act 2014 and the person-centred care requirement under Regulation 9. A service user who is isolated — whether physically or emotionally — cannot be said to be receiving person-centred care that promotes their wellbeing.",
    },
    {
      title: "Community Access and External Activities",
      body: "Service users have the right to access their community and to maintain connections with the wider world. [ORGANISATION_NAME] supports community access by:\n• Facilitating trips and outings in line with individual risk assessments and service user wishes.\n• Supporting service users to maintain relationships with family, friends, and community groups.\n• Ensuring service users can access their faith communities, cultural events, and social networks.\n• Providing technology support (video calls, internet access) for service users who wish to connect digitally.\n\nAny restriction on a service user's ability to go out or access their community must be legally authorised (e.g. under a Deprivation of Liberty Safeguard authorisation or Court of Protection order) and must be the least restrictive option consistent with their safety.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "car-005 — Spiritual & Religious Care Policy",
    "car-007 — Family & Carer Involvement Policy",
    "eff-001 — Care Planning Policy",
    "res-002 — Service User Involvement Policy",
  ],
  appendices: [
    { title: "Appendix A — Activity Profile Template", content: "Service user name; completed by; date. Sections: working life and career; family and relationships; hobbies and interests (past and present); music preferences; food and drink preferences; favourite TV/radio; cultural and religious observances; daily routine preferences; activities to avoid; current participation barriers; support/adaptations needed; goals for activities." },
    { title: "Appendix B — Activities Record", content: "Monthly record: activity name; date and time; service user names (or key-coded); level of participation (active / passive / declined); notes on engagement and mood; staff signature. Participation records reviewed at monthly governance." },
  ],
  versionHistory: [
    { version: "2.5", date: "2026-02-14", changes: "Added social isolation monitoring framework; updated community access rights section; strengthened 1:1 engagement guidance." },
    { version: "2.3", date: "2025-05-01", changes: "Added reminiscence definition; updated activity profile template." },
    { version: "2.0", date: "2024-02-01", changes: "Full review; aligned with Care Act wellbeing principle; added digital access section." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-007  Family & Carer Involvement Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR007_CONTENT: DocumentContent = {
  title: "Family & Carer Involvement Policy",
  policyId: "CAR-007",
  version: "2.4",
  effectiveDate: "2026-01-22",
  reviewDate: "2027-01-22",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] and their families, carers, and significant others. This policy sets out how [ORGANISATION_NAME] will involve families and carers in care planning, decision-making, and service life, while maintaining the rights and confidentiality of the service user.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure family/carer involvement is embedded in care planning, review, and communication processes.",
        "Ensure staff understand the balance between family involvement and service user confidentiality rights.",
        "Ensure families are welcomed, respected, and treated as partners in care.",
        "Ensure family and carer concerns are taken seriously and responded to promptly.",
        "Ensure visiting arrangements are as open and flexible as possible.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Welcome families and carers warmly and make them feel valued as partners in care.",
        "Share information with family members only where the service user has consented, or where information sharing is legally appropriate.",
        "Listen to family concerns and observations — they frequently hold information about the service user that enhances care.",
        "Communicate important changes in care, health, or wellbeing to the named next of kin promptly.",
        "Support service users to maintain and develop their family relationships.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Care Act 2014 — carer's rights; duty to involve in assessments",
    "Mental Capacity Act 2005, section 4 — best interests: consulting those who know the person",
    "General Data Protection Regulation (UK GDPR) and Data Protection Act 2018 — confidentiality of service user information",
    "Equality Act 2010 — carers as a protected characteristic (association); reasonable adjustments for disabled carers",
  ],
  definitions: [
    { term: "Family", definition: "For the purposes of this policy, 'family' includes all people with a close personal relationship to the service user — immediate family (spouse/partner, children, parents, siblings), extended family, close friends, and any other person the service user regards as family. Family is defined by the service user, not by legal relationship." },
    { term: "Carer", definition: "A person who provides unpaid care or support to a family member or friend who could not manage without that support, due to illness, disability, or older age. Carers have their own rights under the Care Act 2014, including the right to a carer's assessment. Carers of service users at [ORGANISATION_NAME] should be supported to maintain their caring role alongside the service we provide." },
    { term: "Next of Kin", definition: "The person(s) nominated by the service user to be contacted in case of emergency or when important information needs to be shared. Being nominated as next of kin does not confer legal rights to access medical information or make decisions on the service user's behalf — it is an emergency contact designation only. Legal authority to make decisions on behalf of a person who lacks capacity requires a Lasting Power of Attorney (Health and Welfare) or a Court of Protection order." },
    { term: "Lasting Power of Attorney (LPA)", definition: "A legal document that allows a person (the 'donor') to appoint one or more people ('attorneys') to make decisions on their behalf if they lose mental capacity. A Health and Welfare LPA covers decisions about care, medical treatment, and daily living. An attorney under a valid, registered Health and Welfare LPA has decision-making authority for health and care decisions — [ORGANISATION_NAME] must act in accordance with their decisions (within the best interests framework of the MCA)." },
  ],
  sections: [
    {
      title: "Welcoming Families and Carers",
      body: "Families and carers are central to the lives of most service users and are among the most important people in [ORGANISATION_NAME]'s community. [ORGANISATION_NAME]'s approach to family involvement is built on the principle that families are partners in care, not visitors.\n\nVisiting:\n• Visiting hours are as open and flexible as possible — [ORGANISATION_NAME] does not operate unnecessarily restrictive visiting hours. The service user's preferences govern when they wish to receive visitors.\n• Families may visit during personal care or at mealtimes with the service user's consent and agreement.\n• Where visiting is restricted for any reason (e.g. infection control, at the service user's own request, or under a legal order), the reason must be explained clearly and sensitively to the family.\n\nWelcoming environment:\n• Staff must greet visiting families warmly and introduce themselves.\n• A family-facing summary of the service (welcome pack) must be available and up to date.\n• Families must know how to raise concerns or compliments — the complaints procedure must be clearly displayed and explained.",
    },
    {
      title: "Involving Families in Care Planning and Review",
      body: "With the service user's consent, families and carers should be involved in care planning and reviews. This involvement should be:\n• Invited and facilitated — not assumed or imposed. Some service users do not wish their family involved; this preference must be absolutely respected.\n• Meaningful — families should have the opportunity to contribute to, not merely be informed about, care plans.\n• Documented — the care plan should note who is involved and in what capacity.\n\nPractical approaches to family involvement:\n• Invite named family members to attend care review meetings.\n• Provide families with a written summary of care plan changes.\n• Create a 'family communication book' for informal daily updates.\n• Ensure families are aware of and can contact the key worker.\n• Follow up after significant events (falls, illness, medication changes) with a call to the next of kin on the same day.",
      practiceBox: "Families who feel informed and involved are significantly less likely to raise formal complaints. A proactive call to a family member — 'I wanted to let you know your mother had a small fall today; she is absolutely fine and there is no injury, but I wanted to tell you myself' — takes 3 minutes and builds immense trust. Families only hear from the home when something has gone wrong? That is a culture problem worth addressing.",
    },
    {
      title: "Confidentiality and Information Sharing",
      body: "Service users have an absolute right to confidentiality regarding their health information. [ORGANISATION_NAME] balances family involvement with this right:\n\n• On admission, the service user must be asked who they consent to having information shared with, and this must be documented.\n• Information about a service user's health, care, finances, or personal life must not be shared with family members without the service user's consent, unless:\n  - The service user lacks capacity for the decision and sharing is in their best interests.\n  - There is a safeguarding concern requiring disclosure.\n  - There is a legal obligation to share (e.g. court order).\n• Family members who disagree with a care decision made by a service user who has capacity cannot override that decision. The service user's autonomous choice prevails.\n• Where a family member holds a valid Health and Welfare LPA, they have legal decision-making authority for the domain covered by the LPA when the service user lacks capacity for that specific decision.",
      legalBox: "Sharing a service user's medical or personal information with a family member without consent, or complying with a family member's demand to restrict visits without the service user's agreement, may constitute a breach of UK GDPR, a violation of the service user's human rights (Article 8), and a failure of person-centred care under Regulation 9. If a family member is pressuring staff to share information or restrict the service user's freedoms, refer the matter to the Registered Manager and consider a safeguarding referral.",
    },
    {
      title: "Supporting Carers",
      body: "Many service users at [ORGANISATION_NAME] have family members who are also their primary carers — or who were until the service user moved to [ORGANISATION_NAME]. These individuals may be:\n• Grieving the change in their caregiving role.\n• Experiencing guilt about the transition to residential care.\n• Exhausted from years of caring.\n• Anxious about the service user's safety and wellbeing.\n\n[ORGANISATION_NAME] supports carers by:\n• Acknowledging the expertise and knowledge they hold about the service user.\n• Involving them as partners in care transitions.\n• Signposting to carer support organisations (local carer support services, Carers UK, Carers Trust).\n• Ensuring carers are aware of their right to a Carer's Assessment from the local authority under the Care Act 2014.\n• Supporting carers to maintain or adjust their caring role alongside the care [ORGANISATION_NAME] provides — particularly for service users at end of life.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "car-003 — Communication Policy",
    "car-008 — Advocacy Policy",
    "eff-001 — Care Planning Policy",
    "wl-006 — Record Keeping Policy",
  ],
  appendices: [
    { title: "Appendix A — Information Sharing Consent Record", content: "Service user name; date; list of people consented to receive information (name, relationship, contact, scope of consent); any exclusions; signed by service user or lawful decision-maker; review date." },
    { title: "Appendix B — Family Communication Record", content: "Date; staff member; family member contacted; method (telephone/in person/written); reason for contact (routine update/incident/care review/concern); summary of communication; follow-up action required." },
  ],
  versionHistory: [
    { version: "2.4", date: "2026-01-22", changes: "Added carer support section; strengthened LPA guidance; updated GDPR information-sharing section." },
    { version: "2.2", date: "2025-04-01", changes: "Added family communication record; updated next of kin definition." },
    { version: "2.0", date: "2024-02-01", changes: "Full review; added Care Act carer rights; aligned with Regulation 9 person-centred care." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-016  Learning & Development Strategy Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL016_CONTENT: DocumentContent = {
  title: "Learning & Development Strategy",
  policyId: "WL-016",
  version: "2.6",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All employees and volunteers at [ORGANISATION_NAME] in relation to their induction, mandatory training, continuing professional development, and career progression. This policy sets out [ORGANISATION_NAME]'s commitment to investing in a skilled, competent, and confident workforce and the structures through which learning and development are delivered.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain a training needs analysis (TNA) for the service and ensure the training programme meets both statutory requirements and identified needs.",
        "Ensure a training matrix is in place, up to date, and reviewed at governance level monthly.",
        "Ensure all staff complete mandatory training within required timescales.",
        "Support staff to access continuing professional development (CPD) opportunities.",
        "Ensure learning from incidents, complaints, and audits is translated into training updates.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Complete all mandatory training within the required timescale.",
        "Engage actively with supervision and appraisal as opportunities for identifying development needs.",
        "Apply learning from training in day-to-day practice.",
        "Bring observations and questions from practice to training sessions to enrich learning.",
        "Be responsible for their own professional development — take ownership of CPD goals set at appraisal.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing: requires staff to have the skills and competence to fulfil their roles",
    "Health and Safety at Work etc. Act 1974 — training as a component of safe working conditions",
    "Care Certificate Standards (Skills for Care, 2015) — minimum standards for new care workers",
    "Skills for Care — The Care Certificate; Code of Conduct for Healthcare Support Workers and Adult Social Care Workers",
    "CQC — Well-Led and Effective key questions: evidence of training, competency, and continuous improvement",
  ],
  definitions: [
    { term: "Mandatory Training", definition: "Training that all staff at [ORGANISATION_NAME] must complete, either because it is legally required, contractually required, or required by [ORGANISATION_NAME]'s governance framework. Failure to complete mandatory training within the required timescale is a disciplinary matter. The mandatory training schedule is reviewed annually." },
    { term: "Care Certificate", definition: "A set of 15 standards that health and social care workers must meet to demonstrate they have the knowledge, skills, and behaviours expected of them. Introduced in 2015, it is the minimum standard for new care workers in adult social care. [ORGANISATION_NAME] supports all new care workers to complete the Care Certificate within the first 12 weeks of employment." },
    { term: "Training Needs Analysis (TNA)", definition: "A systematic process of identifying the gap between current staff competencies and the competencies required to deliver safe, effective, and high-quality care. The TNA is updated annually, following significant incidents, following CQC inspections, and following any change to legislation, regulation, or clinical practice guidelines." },
    { term: "Competency Assessment", definition: "An assessment of an individual staff member's ability to perform a specific skill or task to a defined standard. Competency assessment is conducted by observation of practice and may include verbal questions. It is the definitive measure of whether training has translated into competent practice — completing an e-learning module does not automatically demonstrate competency." },
    { term: "Training Matrix", definition: "A record that maps each member of staff against each mandatory and role-specific training requirement, showing: whether training has been completed; date completed; expiry date; and whether it is overdue. The training matrix is the Registered Manager's primary governance tool for monitoring training compliance." },
  ],
  sections: [
    {
      title: "Mandatory Training Schedule",
      body: "All staff at [ORGANISATION_NAME] must complete the following mandatory training. Frequencies are the maximum interval between refreshers — more frequent refreshers may be required following incidents or competency concerns:",
      subSections: [
        {
          heading: "Annual mandatory training",
          body: "Manual handling (annual theory + practical); Safeguarding adults (annual); Fire safety awareness (annual); Health and safety (annual); Infection prevention and control (annual); Medication awareness (annual for all staff, plus additional medication administration competency for administering staff); Information governance / GDPR; Deprivation of Liberty Safeguards / Mental Capacity Act.",
        },
        {
          heading: "2–3 yearly mandatory training",
          body: "Safeguarding children (every 3 years); Basic life support (annual for clinical staff; every 2 years for care staff); Equality, diversity and inclusion; Food hygiene (every 3 years for catering staff); Moving and handling practical competency (annual for staff who hoist; every 2 years for others).",
        },
        {
          heading: "Role-specific mandatory training",
          body: "Medication administration competency (administering staff only — annual; competency assessed, not just e-learning); Hoist and moving equipment competency (annual practical); Wound care and pressure ulcer prevention (for care staff; annual); PBS/Restraint reduction (for staff working with people with behaviours of concern); Dementia care (for staff working in specialist dementia settings).",
        },
      ],
    },
    {
      title: "Care Certificate",
      body: "Every new care worker who joins [ORGANISATION_NAME] without an in-date Care Certificate from a previous employer must complete the Care Certificate within their first 12 weeks of employment. The Care Certificate covers 15 standards:\n1. Understand your role\n2. Your personal development\n3. Duty of care\n4. Equality and diversity\n5. Work in a person-centred way\n6. Communication\n7. Privacy and dignity\n8. Fluids and nutrition\n9. Awareness of mental health, dementia and learning disabilities\n10. Safeguarding adults\n11. Safeguarding children\n12. Basic life support\n13. Health and safety\n14. Handling information\n15. Infection prevention and control\n\nCompletion of the Care Certificate requires demonstration of competency — it is not sufficient to complete 15 worksheets without observed practice assessment. The assessor (line manager or designated Care Certificate assessor) must sign off each standard based on both knowledge and observed practice.",
      practiceBox: "The Care Certificate is a minimum, not a maximum. A new care worker who has completed the Care Certificate is beginning their learning journey, not completing it. The most effective inductions pair Care Certificate completion with mentoring by an experienced colleague who can translate standards into the realities of the specific service.",
    },
    {
      title: "Continuing Professional Development",
      body: "CPD for care staff beyond mandatory training is a shared responsibility between the individual and [ORGANISATION_NAME]:\n\n• CPD goals are identified at the annual appraisal and agreed between staff member and line manager.\n• [ORGANISATION_NAME] supports CPD through: paid time for training; access to e-learning platforms; funding for relevant qualifications (subject to budget and commitment periods).\n• Relevant qualifications include: QCF/RQF Level 2 and 3 Diplomas in Health and Social Care; Level 4/5 Diplomas in Leadership and Management; Specialist qualifications (dementia care, end of life care, learning disabilities).\n• The Registered Manager and Deputy should hold, or be working towards, relevant Level 5 qualifications in leadership and management.\n• [ORGANISATION_NAME] supports staff to engage with Skills for Care's professional development resources and with any relevant local authority workforce development funding.",
    },
    {
      title: "Learning from Practice",
      body: "Training must be responsive to the learning generated by [ORGANISATION_NAME]'s own practice — not just by a fixed calendar:\n\n• Following every significant incident (serious falls, pressure ulcer Category 3/4, medication error, safeguarding referral), the Registered Manager reviews whether training contributed to the incident and whether training updates are required.\n• Learning from incidents is shared with staff at team meetings and via supervision — without blame; focused on systemic improvement.\n• CQC inspection reports, complaints, and audit findings are reviewed for training implications.\n• Benchmarking against external learning — NICE guidance updates, NHS England safety alerts, CQC thematic reviews — is the Registered Manager's responsibility to translate into practice updates.\n\nA culture of learning — where staff feel safe to report errors, ask questions, and identify their own development needs — is the foundation of continuous improvement.",
    },
  ],
  relatedDocuments: [
    "wl-003 — Supervision & Appraisal Policy",
    "wl-001 — Recruitment & Selection Policy",
    "wl-002 — Induction Policy",
    "wl-008 — Staffing & Deployment Policy",
    "wl-013 — Quality Improvement Policy",
  ],
  appendices: [
    { title: "Appendix A — Mandatory Training Schedule", content: "Full tabular mandatory training schedule: training topic; applicable staff group; frequency; delivery method (e-learning/classroom/competency assessment); minimum pass mark; record retention period. Reviewed annually by Registered Manager." },
    { title: "Appendix B — Training Matrix Template", content: "Rows: staff names. Columns: each mandatory training topic with expiry date. Cell content: date completed; RAG status (Green = current; Amber = due within 60 days; Red = overdue). Reviewed monthly at governance meeting." },
  ],
  versionHistory: [
    { version: "2.6", date: "2026-04-01", changes: "Updated mandatory training schedule; added PBS/restraint reduction; strengthened competency assessment requirement for Care Certificate." },
    { version: "2.4", date: "2025-06-01", changes: "Added learning from practice section; updated Skills for Care CPD pathways." },
    { version: "2.2", date: "2024-04-01", changes: "Full review; updated Care Certificate standards; added Level 5 expectation for RM and deputy." },
  ],
};
