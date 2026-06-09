import type { DocumentContent } from "./documents";

export const EFFECTIVE_CONTENT: Record<string, DocumentContent> = {
  "eff-001": {
    purpose: "[ORGANISATION_NAME] is committed to delivering care that is person-centred, outcome-focused and responsive to each individual's changing needs. This policy sets out the framework for assessing, developing, implementing and reviewing personalised care plans for all service users.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all staff involved in the assessment, planning and delivery of care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure every service user has a current, personalised care plan in place from the date of admission",
          "Oversee care plan audits and ensure quality standards are maintained",
          "Ensure care plans are reviewed within 6 weeks of admission and at least six-monthly thereafter",
          "Ensure care plans are co-produced with service users and where appropriate their family or representatives",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Deliver care in accordance with the individual care plan at all times",
          "Document care delivery accurately and contemporaneously",
          "Raise any concern about a care plan that appears outdated or inappropriate for the service user's current needs",
          "Support service users to express their preferences and contribute to their own care planning",
        ],
      },
    ],
    keyPoints: [
      "Every service user must have a care plan in place before care commences — it must be developed with the person, not just for them",
      "Care plans must reflect the person's own goals, preferences and desired outcomes — not just their clinical needs",
      "Care plans must be reviewed at least six-monthly, within 28 days of any significant change in need, and following any hospital admission or safeguarding concern",
      "A care plan is a living document — it must be updated whenever the person's needs, preferences or circumstances change",
      "Care plans must be written in plain English and accessible formats should be provided where needed (large print, easy read, translation)",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 9",
      "Care Act 2014 (person-centred care and support planning)",
      "Mental Capacity Act 2005",
      "Equality Act 2010",
      "NICE Guideline NG108: Home Care (2018)",
    ],
    sections: [
      {
        heading: "Initial Assessment and Care Planning",
        body: "A comprehensive assessment must be completed before or at the point of admission using a validated holistic assessment tool. The assessment must cover: physical health and clinical needs; mental health and cognitive function; communication needs; social and cultural preferences; spiritual and religious needs; personal history and life story; goals, preferences and outcomes the person wants to achieve; risks and how they wish these to be managed. The care plan must be developed from this assessment in partnership with the service user.",
      },
      {
        heading: "Care Plan Reviews",
        body: "Care plans must be formally reviewed: at 6 weeks post-admission; six-monthly thereafter; within 48 hours of any significant change in the person's condition; following any hospital admission; following any safeguarding concern; and at any time the service user requests a review. The review must be co-produced with the service user and, where appropriate, their family or representative. Outcomes of the review must be documented and any changes to the care plan made within 24 hours.",
      },
    ],
  },

  "eff-002": {
    purpose: "[ORGANISATION_NAME] is committed to upholding the rights of all people to make their own decisions and to ensuring that decisions made on behalf of those who lack capacity are made lawfully and in their best interests. This policy sets out how the Mental Capacity Act 2005 and Liberty Protection Safeguards are applied throughout the service.",
    scope: "Applies to all staff at [ORGANISATION_NAME] who work with or make decisions affecting service users, and covers all decisions, from day-to-day choices to significant decisions about care, treatment, finances and living arrangements.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff receive MCA training and understand the five statutory principles",
          "Oversee all best interests decisions and ensure they are documented",
          "Ensure DoLS/LPS applications are made without delay when required",
          "Maintain a register of all service users subject to a DoLS authorisation or LPS arrangement",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Apply the five MCA principles in all interactions with service users",
          "Complete and document formal mental capacity assessments for significant decisions",
          "Facilitate service users to make their own decisions with all practicable support",
          "Never make a best interests decision without documenting the process and rationale",
        ],
      },
    ],
    keyPoints: [
      "The five MCA principles must be applied by all staff: (1) presume capacity; (2) support the person to decide; (3) respect unwise decisions; (4) act in best interests if capacity is absent; (5) use the least restrictive option",
      "Capacity is decision-specific and time-specific — a person may have capacity for one decision but not another",
      "A formal capacity assessment must be documented before making any best interests decision — it must evidence the two-stage test: does the person have an impairment or disturbance of the mind? Does this impairment mean they cannot make this specific decision?",
      "Best interests decisions must take into account the person's past and present wishes, feelings, beliefs and values, and the views of those close to them",
      "Any restriction on liberty that amounts to a deprivation requires authorisation under DoLS (current) or LPS (when implemented)",
    ],
    legislation: [
      "Mental Capacity Act 2005",
      "Mental Capacity Act Code of Practice (2007)",
      "Mental Capacity (Amendment) Act 2019 — Liberty Protection Safeguards",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Human Rights Act 1998 — Article 5 (Right to Liberty)",
    ],
    sections: [
      {
        heading: "Conducting a Mental Capacity Assessment",
        body: "To assess capacity for a specific decision: Step 1 — Establish whether the person has an impairment or disturbance affecting the functioning of their mind or brain (diagnostic test). Step 2 — Establish whether this means the person is unable to: understand the information relevant to the decision; retain that information long enough to make the decision; use or weigh the information; or communicate their decision (functional test). All four elements must be present for lack of capacity to be established. The assessment must be documented in the care record with the date, decision in question, evidence considered, conclusion and the assessor's name.",
      },
      {
        heading: "Making Best Interests Decisions",
        body: "If a person is found to lack capacity for a specific decision, the decision-maker must: consult those close to the person (family, friends, paid carers); consider any written statement of wishes (advance decision, advance statement, lasting power of attorney); consider what the person would have wanted based on their known wishes, feelings, beliefs and values; consider the least restrictive option; weigh the benefits and burdens of the proposed decision. The outcome must be documented with a clear rationale. For significant decisions, consider whether an IMCA should be instructed.",
      },
    ],
  },

  "eff-003": {
    purpose: "[ORGANISATION_NAME] is committed to ensuring all service users receive adequate nutrition and hydration to maintain their health, wellbeing and quality of life. This policy sets out a systematic approach to nutritional screening, assessment, care planning and mealtime support.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all staff involved in supporting nutrition and hydration, including care staff, catering staff and healthcare professionals.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure nutritional risk screening (MUST) is completed at admission and at every review",
          "Ensure appropriate referrals are made to dietitian, SALT and GP for service users at nutritional risk",
          "Oversee monthly food and fluid intake audits for service users identified as at risk",
          "Ensure mealtimes are protected, enjoyable and socially valued in the service",
        ],
      },
      {
        role: "Care and Catering Staff",
        duties: [
          "Complete MUST screening at admission and monthly for all service users",
          "Provide nutritional support as specified in the care plan",
          "Document food and fluid intake for service users on monitoring",
          "Report any concern about a service user's eating or drinking to the duty manager without delay",
        ],
      },
    ],
    keyPoints: [
      "All service users must be screened using the Malnutrition Universal Screening Tool (MUST) at admission and at least monthly or following any significant change",
      "MUST scores of 1 (medium risk) or 2+ (high risk) must trigger a care plan with specific nutritional interventions and referral to a dietitian where appropriate",
      "Fluid intake must be a minimum of 1.5–2 litres per day unless clinically contraindicated — this must be documented for service users at risk of dehydration",
      "Mealtimes must be treated as a positive social occasion — call bells should be unanswered only in genuine emergencies during protected mealtimes",
      "Staff must be trained to recognise signs of dysphagia and must not modify food textures without a SALT assessment and instruction",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 14",
      "Care Act 2014",
      "NICE Clinical Guideline CG32: Nutrition Support in Adults (2006)",
      "NICE Quality Standard QS24: Nutritional Support in Adults",
      "Food Safety Act 1990 and associated regulations",
    ],
    sections: [
      {
        heading: "MUST Screening and Nutritional Risk",
        body: "The MUST tool assesses nutritional risk using three steps: (1) BMI score (0–2); (2) unplanned weight loss score over 3–6 months (0–2); (3) acute disease effect score (0 or 2). A total score of 0 indicates low risk — routine clinical care. Score 1: medium risk — document food intake for 3 days, review if inadequate. Score 2 or above: high risk — refer to dietitian, implement nutritional support plan, set a goal, monitor and review weekly. All MUST scores must be documented in the care record.",
      },
      {
        heading: "Protected Mealtimes and Mealtime Support",
        body: "Mealtimes at [ORGANISATION_NAME] are protected periods during which non-essential clinical and administrative activity is minimised to allow staff to focus on the dining experience. Service users who need assistance eating must receive one-to-one support at mealtimes. Adaptive equipment (weighted cutlery, plate guards, non-slip mats, appropriate cups) must be provided where assessed as beneficial. The dining environment must be pleasant, unhurried and supportive of independence. Service users' food preferences, cultural and religious requirements must be met.",
      },
    ],
  },

  "eff-004": {
    purpose: "[ORGANISATION_NAME] is committed to delivering compassionate, person-centred end of life care that honours the dignity, comfort and wishes of every service user approaching the end of their life. This policy sets out the principles and practices for end of life care planning, symptom management, dying care and bereavement support.",
    scope: "Applies to all service users of [ORGANISATION_NAME] who are approaching the end of their life, their families and carers, and all staff involved in their care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all service users have the opportunity to complete advance care planning",
          "Ensure staff receive training in end of life care, including recognition of dying and bereavement support",
          "Facilitate prompt referral to palliative care specialist teams where needed",
          "Notify the GP, coroner and CQC as required following a service user's death",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Deliver care consistent with the individual's advance care plan and expressed wishes",
          "Provide compassionate care to the dying person and emotional support to their family",
          "Recognise and report signs of deterioration in a timely way using early warning tools",
          "Treat the person and their family with sensitivity, dignity and respect at all times",
        ],
      },
    ],
    keyPoints: [
      "Every service user should be given the opportunity to discuss and document their end of life wishes through advance care planning — this must never be imposed",
      "A Do Not Attempt Cardiopulmonary Resuscitation (DNACPR) decision must be made by the GP or appropriate clinician — it is not a care home decision and must not be assumed",
      "The person's advance care plan must be accessible to all involved in their care, including out-of-hours services and ambulance crews",
      "Comfort and dignity must always take precedence over unnecessary clinical interventions at the end of life",
      "Bereavement support must be offered to families and, where appropriate, to staff who were close to the service user",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Mental Capacity Act 2005 (Advance Decisions to Refuse Treatment)",
      "Human Rights Act 1998 — Article 8 (Right to Private and Family Life)",
      "NICE Guideline NG31: Care of Dying Adults in the Last Days of Life (2015)",
      "NHS England: Universal Principles for Advance Care Planning (2022)",
    ],
    sections: [
      {
        heading: "Advance Care Planning",
        body: "Advance care planning is a voluntary process through which a person, in discussion with their healthcare team and with those close to them, makes known their values, wishes and preferences for their future care. At [ORGANISATION_NAME], all service users are offered the opportunity to complete an advance care plan. This may include: preferred place of death; wishes regarding resuscitation and other clinical interventions; religious or cultural preferences; who should be contacted; and personal wishes for after death. Advance decisions to refuse treatment (ADRTs) have legal force under the MCA 2005 if validly made.",
      },
      {
        heading: "Care in the Last Days of Life",
        body: "When it is recognised that a service user is in the last days of life, the care plan must be reviewed and updated to focus on comfort, dignity and symptom management. The GP must be notified immediately to review and prescribe anticipatory medications for common end of life symptoms (pain, breathlessness, secretions, agitation). Observation rounds must be increased. Family must be notified and offered the opportunity to be present. Mouth care, repositioning and comfort measures must continue. The environment should be calm, private and comfortable. Complete the ReSPECT form or equivalent if not already in place.",
      },
    ],
  },

  "eff-005": {
    purpose: "[ORGANISATION_NAME] is committed to providing high-quality, person-centred care for service users living with dementia, enabling them to live as well as possible and maintaining their dignity, autonomy and quality of life. This policy sets out the principles and practices for dementia care throughout the service.",
    scope: "Applies to all service users at [ORGANISATION_NAME] living with dementia or cognitive impairment, and to all staff involved in their care and support.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff complete dementia awareness training including skills for communicating with people living with dementia",
          "Ensure life story work is offered and completed for all service users with dementia",
          "Create and maintain a dementia-friendly physical environment",
          "Facilitate access to specialist dementia support including memory services where indicated",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Approach all interactions with people living with dementia with patience, empathy and respect",
          "Use techniques such as validation and reminiscence to support communication",
          "Follow the individual's care plan and life story to understand and meet their needs",
          "Report any significant change in behaviour or cognition to the nurse or manager",
        ],
      },
    ],
    keyPoints: [
      "The person living with dementia must always be treated as an individual with their own unique history, relationships, values and preferences — their diagnosis does not define them",
      "Life story work is fundamental to person-centred dementia care — understanding who the person is and was helps staff interpret behaviour and provide meaningful care",
      "Behaviours described as 'challenging' are often attempts by the person to communicate an unmet need — staff must seek to understand the message behind the behaviour",
      "Physical restraint or chemical sedation for behavioural reasons is only ever lawful as a last resort with a documented best interests decision under the MCA",
      "The dementia-friendly environment should use clear signage, good contrasting colours, avoid patterns that may cause confusion, and support orientation",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Mental Capacity Act 2005",
      "Care Act 2014",
      "Equality Act 2010",
      "NICE Guideline NG97: Dementia: Assessment, Management and Support (2018)",
    ],
    sections: [
      {
        heading: "Communication with People Living with Dementia",
        body: "Effective communication requires: approaching from the front and at eye level; using the person's preferred name; speaking slowly and clearly in short sentences; giving one piece of information at a time; allowing time for a response; using non-verbal cues including facial expression and touch (where welcomed); avoiding arguing with or correcting distressing beliefs; using validation — acknowledging the emotion behind what the person is saying. Written prompts, pictures, and objects can also support communication.",
      },
      {
        heading: "Understanding Behaviours That May Challenge",
        body: "Before describing a behaviour as 'challenging', staff must ask: what is this person trying to communicate? Common triggers include pain, hunger, thirst, boredom, loneliness, fear, environmental overstimulation, unmet continence needs or constipation, and medication side effects. A behavioural log (ABC chart: Antecedent, Behaviour, Consequence) should be used to identify patterns. Responses should be individualised, non-pharmacological first, and documented in the behaviour support section of the care plan.",
      },
    ],
  },

  "eff-006": {
    purpose: "[ORGANISATION_NAME] is committed to preventing pressure ulcer development through proactive risk assessment, evidence-based interventions and a culture that treats every avoidable pressure ulcer as a patient safety incident requiring investigation.",
    scope: "Applies to all service users at [ORGANISATION_NAME] who are assessed as being at any level of risk of pressure ulcer development, and to all staff involved in their care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure pressure ulcer risk assessments are completed and documented at admission and reviewed six-monthly",
          "Report Category 2 and above avoidable pressure ulcers to CQC",
          "Ensure pressure-relieving equipment is available and correctly prescribed",
          "Review all pressure ulcer incidents for learning",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Inspect all pressure areas at each care delivery and document findings",
          "Implement repositioning schedules as specified in the care plan and document each turn",
          "Ensure pressure-relieving equipment is correctly applied and functioning",
          "Report any new redness or skin break immediately to the nurse or duty manager",
        ],
      },
    ],
    keyPoints: [
      "Prevention is the priority — a pressure ulcer that was avoidable represents a failure of care",
      "Risk assessment must use a validated tool (Waterlow or Braden) and be repeated at every care review and after any significant change in the person's condition or mobility",
      "Repositioning must be documented every time it is carried out — an unsigned repositioning chart is not evidence of repositioning",
      "Heels are the highest-risk site — they must be offloaded as a priority for all service users assessed as at risk",
      "Moisture lesions (incontinence-associated dermatitis) must be distinguished from pressure ulcers — they have different causes and treatments",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Clinical Guideline CG179: Pressure Ulcers: Prevention and Management (2014)",
      "NICE Quality Standard QS89",
      "NHS Improvement Patient Safety Alert on Pressure Ulcers",
    ],
    sections: [
      {
        heading: "Repositioning Schedules",
        body: "The frequency of repositioning must be based on the individual's risk assessment, skin condition, tolerance and the surface they are on. For high-risk individuals on a standard mattress, repositioning should occur at least every two hours when in bed and every hour when sitting out. For those on a dynamic mattress, the interval may be extended based on clinical judgement. Each repositioning episode must be documented with the time, position used, skin condition observed and the name of the staff member. The 30-degree tilt position is recommended for lateral repositioning to reduce pressure on bony prominences.",
      },
      {
        heading: "Pressure-Relieving Equipment",
        body: "Pressure-relieving equipment must be prescribed based on the individual's risk score and clinical presentation. A reactive (foam or gel) surface should be used for medium risk; a dynamic (alternating air) mattress for high risk. Seating assessment must consider a pressure-cushioning seat cushion for all service users who spend significant time sitting. Equipment must be checked daily for correct inflation, positioning and condition. Any fault must be reported and the equipment replaced immediately. Equipment settings must be reviewed whenever the service user's condition or weight changes.",
      },
    ],
  },

  "eff-007": {
    purpose: "[ORGANISATION_NAME] is committed to the safe, planned and well-coordinated discharge and transfer of service users to and from the service, ensuring continuity of care and the safe handover of all relevant information.",
    scope: "Applies to all service users at [ORGANISATION_NAME] who are discharged from the service or transferred to or from hospital or another care setting, and to all staff involved in the discharge or transfer process.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure discharge and transfer procedures are followed for every transfer",
          "Ensure comprehensive handover documentation accompanies every transfer",
          "Liaise with hospital discharge teams, community health teams and local authority as required",
          "Review and audit the quality of transfer documentation",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Prepare and check all medications, documents and personal items prior to transfer",
          "Complete a contemporaneous handover record detailing current care needs and recent changes",
          "Inform the receiving service of any immediate care needs or risk factors",
          "Document the transfer in the care record with the date, time, destination and responsible person",
        ],
      },
    ],
    keyPoints: [
      "Every transfer must be planned in advance wherever possible — emergency transfers require a verbal handover at minimum, followed by written documentation within 24 hours",
      "Handover documentation must include current diagnoses, medication list (reconciled), current care needs, risk assessments, advance care plan (if applicable), next of kin details and GP details",
      "Medication reconciliation must be completed before every planned transfer to ensure the medication list is accurate and complete",
      "A hospital passport or equivalent accessible information document must accompany any service user being transferred to hospital",
      "The service user's family or representative must be informed of any planned or emergency transfer",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
      "Mental Capacity Act 2005",
      "NICE Guideline NG27: Transition between Inpatient Hospital Settings and Community (2015)",
    ],
    sections: [
      {
        heading: "Hospital Transfer Procedure",
        body: "When a service user requires hospital admission: (1) contact the GP or 999 as appropriate; (2) prepare the hospital transfer documentation including the medication list, summary of current needs, recent observations, risk assessments, and advance care plan; (3) if the service user lacks capacity, ensure the MCA/best interests decision is documented and accompany them if possible; (4) send the original medication (or a clear list) with the transfer; (5) notify the next of kin immediately; (6) document the transfer in the care record. Maintain contact with the hospital ward throughout the admission.",
      },
      {
        heading: "Discharge from Hospital Back to [ORGANISATION_NAME]",
        body: "Before a service user returns from hospital: (1) receive a discharge summary from the hospital; (2) reconcile the discharge medication list against pre-admission medication — any changes must be communicated to the GP for prescribing; (3) update the care plan to reflect any change in needs resulting from the hospital admission; (4) reassess pressure ulcer, falls and manual handling risks; (5) arrange any new equipment or community health input identified in the discharge summary; (6) brief all care staff on the service user's current condition and any new needs before they return.",
      },
    ],
  },

  "eff-008": {
    purpose: "[ORGANISATION_NAME] is committed to supporting service users to maintain or regain continence, and to providing dignified and respectful continence care for those who experience continence difficulties. This policy promotes a person-centred approach that maximises independence and minimises distress.",
    scope: "Applies to all service users of [ORGANISATION_NAME] with continence needs and to all staff involved in their care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure continence assessment is included in every service user's care plan",
          "Facilitate referral to continence advisory services where indicated",
          "Ensure adequate continence products are available to meet assessed needs",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Conduct and document continence assessments at admission and at each care review",
          "Implement the individual's continence care plan consistently and with dignity",
          "Record continence output on monitoring charts where specified",
          "Promote continence independence wherever possible",
        ],
      },
    ],
    keyPoints: [
      "Continence difficulties must never be regarded as an inevitable consequence of ageing or disability — a full assessment may identify treatable causes",
      "Continence care must be delivered with the utmost dignity and respect — the language used by staff must reflect this at all times",
      "The goal of continence care is to promote independence and continence wherever possible — the use of continence pads must not be the default response without assessment",
      "Service users with catheters must have an individual catheter care plan and indwelling catheters must be reviewed regularly for ongoing clinical indication",
      "Any change in continence pattern must be investigated as it may indicate an underlying condition such as UTI, constipation or prostate disease",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
      "NICE Guideline CG171: Urinary Incontinence in Women (2013)",
      "NICE Guideline CG148: Urinary Incontinence in Neurological Disease (2012)",
    ],
    sections: [
      {
        heading: "Continence Assessment",
        body: "A continence assessment must be completed at admission and at every six-monthly review. The assessment must document: type of incontinence (urge, stress, mixed, overflow, functional); frequency and pattern of urination and bowel movements; fluid intake; current use of continence aids; previous investigations and treatments; impact on the individual's quality of life; and the person's own goals and preferences. Findings must inform an individual continence care plan with specific management strategies.",
      },
      {
        heading: "Catheter Care",
        body: "For service users with an indwelling urethral or suprapubic catheter: the catheter must be inserted and changed by a trained, competency-assessed member of staff; catheter care must be performed at least twice daily and after each bowel movement; the catheter must be secured to prevent traction; the drainage bag must always be positioned below bladder level and never on the floor; the catheter must not be routinely irrigated; the continuing need for the catheter must be reviewed and documented at every care review. Signs of catheter-associated urinary tract infection (CAUTI) must be reported to the GP.",
      },
    ],
  },

  "eff-009": {
    purpose: "[ORGANISATION_NAME] is committed to maintaining the oral health of service users as an integral part of their overall health and wellbeing. This policy establishes daily mouth care routines, oral health assessment and referral pathways to dental services.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all care staff involved in delivering personal care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure an oral health assessment is completed for all service users at admission",
          "Facilitate access to dental services, including domiciliary dentistry where required",
          "Ensure adequate oral care equipment and products are available",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Provide or support daily oral care as specified in the care plan",
          "Record oral care on the daily care notes",
          "Report any oral health concern (pain, bleeding, ulcers, broken dentures) to the duty manager",
        ],
      },
    ],
    keyPoints: [
      "Oral health is closely linked to general health — poor oral health can contribute to aspiration pneumonia, malnutrition and cardiovascular disease",
      "All service users must have their teeth or dentures cleaned at least twice daily — staff must support or assist where the person cannot do this independently",
      "Service users must have access to a dentist — [ORGANISATION_NAME] will facilitate NHS or private dental appointments including domiciliary visits where the person cannot attend a surgery",
      "Dentures must be correctly labelled with the service user's name and soaked overnight in an appropriate cleansing solution",
      "Staff must never use the same toothbrush or denture pot for more than one service user",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "NICE Guideline NG48: Oral Health for Adults in Care Homes (2016)",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Daily Oral Care",
        body: "Natural teeth should be brushed twice daily using fluoride toothpaste and a soft-bristled toothbrush. Care staff must assist or supervise service users who cannot clean their own teeth effectively. Dentures should be removed at night (unless there is a clinical reason not to), cleaned under running water using a denture brush and non-abrasive cleaner, and soaked in cold water or a denture-soaking solution. The service user's mouth and gums must also be cleaned when dentures are removed. Oral care must be documented in the daily care record.",
      },
    ],
  },

  "eff-010": {
    purpose: "[ORGANISATION_NAME] is committed to the safe management of dysphagia (swallowing difficulties) to reduce the risk of aspiration pneumonia and choking for service users at risk. This policy establishes a systematic approach to identification, specialist assessment and safe food and fluid provision in line with IDDSI standards.",
    scope: "Applies to all service users at [ORGANISATION_NAME] with known or suspected swallowing difficulties and to all staff involved in their care, including catering staff.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff who support eating and drinking receive dysphagia awareness training",
          "Ensure timely referral to Speech and Language Therapy (SALT) for all service users with suspected dysphagia",
          "Maintain a register of all service users on modified texture diets and thickened fluids",
        ],
      },
      {
        role: "Care and Catering Staff",
        duties: [
          "Follow SALT recommendations and IDDSI texture and fluid levels precisely",
          "Never modify food textures or fluid consistency without a SALT recommendation",
          "Monitor and report any sign of aspiration (coughing during or after meals, wet voice, recurrent chest infections) to the nurse or manager",
          "Ensure emergency action plans for choking are in place and accessible",
        ],
      },
    ],
    keyPoints: [
      "Dysphagia is a significant risk factor for aspiration pneumonia — it must be identified early and managed with specialist input",
      "Signs of dysphagia include: coughing or choking during or after eating or drinking; a wet or gurgling voice after swallowing; taking a long time to eat; holding food in the mouth; recurrent chest infections",
      "All modified diets and thickened fluids must comply with the International Dysphagia Diet Standardisation Initiative (IDDSI) framework",
      "Food texture and fluid levels must never be changed without a new SALT assessment — an incorrect texture modification can be fatal",
      "All staff involved in supporting eating and drinking must know the choking emergency procedure and the Heimlich manoeuvre",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "NICE Clinical Guideline NG32: Motor Neurone Disease (contextual)",
      "IDDSI Framework (2019)",
      "Food Safety Act 1990",
    ],
    sections: [
      {
        heading: "IDDSI Levels",
        body: "The IDDSI framework uses levels 0–7 to describe food textures and drink consistencies. Drinks: Level 0 (Thin), Level 1 (Slightly Thick), Level 2 (Mildly Thick), Level 3 (Moderately Thick), Level 4 (Extremely Thick). Foods: Level 3 (Liquidised), Level 4 (Puréed), Level 5 (Minced & Moist), Level 6 (Soft & Bite-Sized), Level 7 (Regular/Easy to Chew). SALT will specify the exact IDDSI level for each service user. Catering staff must be trained in preparing foods to the correct level and testing them using the specified IDDSI flow or fork drip tests.",
      },
      {
        heading: "Responding to Choking",
        body: "If a service user appears to be choking: (1) Stay calm and encourage them to cough if they can do so effectively. (2) If the cough becomes ineffective (silent, unable to speak or breathe), perform up to 5 back blows between the shoulder blades. (3) If unsuccessful, perform up to 5 abdominal thrusts. (4) Alternate back blows and abdominal thrusts; call 999 if the obstruction does not clear. (5) If the person becomes unconscious, begin CPR and call 999. (6) Document the incident and complete an incident report. All staff must complete first aid including choking management training annually.",
      },
    ],
  },

  "eff-011": {
    purpose: "[ORGANISATION_NAME] is committed to the systematic monitoring of service users' physical health to detect deterioration early and ensure timely clinical intervention. This policy establishes a framework for routine observation, recording and escalation using validated early warning tools.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all care and nursing staff responsible for monitoring and recording physical health observations.",
    responsibilities: [
      {
        role: "Registered Manager / Nurse in Charge",
        duties: [
          "Ensure all staff are trained in taking and recording physical health observations",
          "Ensure escalation procedures are understood and followed by all staff",
          "Ensure observation equipment is calibrated and maintained",
        ],
      },
      {
        role: "Care and Nursing Staff",
        duties: [
          "Take and record observations as specified in the care plan",
          "Calculate and act upon NEWS2 scores as required",
          "Escalate any concerning observation or NEWS2 score without delay",
          "Never delay escalation due to uncertainty — use SBAR to communicate concerns",
        ],
      },
    ],
    keyPoints: [
      "Early identification of deterioration saves lives — any deviation from a service user's normal vital signs must be escalated, not assumed to be insignificant",
      "The National Early Warning Score 2 (NEWS2) must be used to identify and communicate clinical deterioration",
      "A NEWS2 score of 5 or above requires urgent clinical review; a score of 7 or above requires emergency response",
      "Staff must use SBAR (Situation, Background, Assessment, Recommendation) when communicating concerns about a deteriorating service user",
      "Physical observations must be documented legibly and contemporaneously — never estimated or reconstructed retrospectively",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Guideline CG50: Acutely Ill Adults in Hospital (2007)",
      "NHS England: NEWS2 (Royal College of Physicians, 2017)",
    ],
    sections: [
      {
        heading: "NEWS2 Score and Escalation",
        body: "NEWS2 scores six physiological parameters: respiration rate, oxygen saturations, systolic blood pressure, pulse rate, level of consciousness (ACVPU), and temperature. Each parameter is scored 0–3 based on deviation from normal; a score of 3 on any individual parameter triggers an immediate alert regardless of the aggregate score. Total score: 0–4 (Low) — routine monitoring; 5–6 or 3 in a single parameter (Medium) — urgent review by a clinician within 30 minutes; 7+ (High) — emergency response, consider 999 call.",
      },
    ],
  },

  "eff-012": {
    purpose: "[ORGANISATION_NAME] is committed to the use of Positive Behaviour Support (PBS) as the primary framework for understanding and responding to behaviours that challenge the service. This policy ensures that PBS plans are individually tailored, person-centred and aimed at improving quality of life.",
    scope: "Applies to all service users at [ORGANISATION_NAME] whose behaviour may challenge the service or create risk, and to all staff involved in their care and support.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure a PBS-trained lead is available to the service",
          "Ensure PBS plans are developed with service user involvement and specialist input where needed",
          "Review all restrictive practice data monthly",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Follow individual PBS plans consistently across all shifts",
          "Complete ABC charts to identify triggers and patterns",
          "Contribute to PBS plan reviews with observations",
          "Never use unauthorised restrictive interventions",
        ],
      },
    ],
    keyPoints: [
      "Every behaviour that challenges is a form of communication — the PBS approach focuses on understanding the function of the behaviour and meeting the underlying need",
      "PBS plans must include proactive strategies (environment and routine changes), reactive strategies (de-escalation) and, as a last resort, planned physical interventions",
      "Restrictive physical interventions must be authorised, documented and reported — their use must be reviewed with a goal of reduction over time",
      "The service user must be involved in developing their own PBS plan wherever possible",
      "All restrictive interventions must be reviewed every three months with the aim of reduction or elimination",
    ],
    legislation: [
      "Mental Capacity Act 2005",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Mental Health Units (Use of Force) Act 2018",
      "NICE Guideline NG11: Violence and Aggression (2015)",
    ],
    sections: [
      {
        heading: "Functional Behaviour Assessment",
        body: "Before developing a PBS plan, a functional behaviour assessment must be completed to understand the function (purpose) of the behaviour. The ABC chart is the primary tool: Antecedent (what happened immediately before), Behaviour (a precise description), Consequence (what happened immediately after). Analysis of multiple ABC charts identifies triggers, patterns and reinforcers. The assessment should also consider the person's communication profile, sensory needs, health factors, environment and social context.",
      },
    ],
  },

  "eff-013": {
    purpose: "[ORGANISATION_NAME] is committed to the mental health and emotional wellbeing of all service users, recognising that mental and physical health are equally important. This policy sets out how the service promotes positive mental health, identifies mental health needs and supports access to appropriate services.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all staff responsible for their care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure mental health needs are included in every care plan",
          "Facilitate referrals to mental health teams, IAPT and specialist services",
          "Ensure staff receive training in mental health awareness and suicide prevention",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Build therapeutic relationships that support service users to express their feelings",
          "Recognise and report signs of depression, anxiety or mental health deterioration",
          "Follow individual mental health care plans consistently",
          "Know and follow the crisis response procedure",
        ],
      },
    ],
    keyPoints: [
      "Mental health needs must be assessed at admission and included in the care plan — they must not be treated as secondary to physical health",
      "Staff must be able to recognise common signs of mental health difficulty: persistent low mood, withdrawal, changes in sleep or appetite, self-harm, or expressions of hopelessness",
      "Any expression of suicidal ideation or intent must be taken seriously and escalated immediately to the manager and GP",
      "Mental health interventions must be person-centred, recovery-focused and based on the individual's own goals and preferences",
      "Restrictive interventions must only be used under the Mental Health Act or Mental Capacity Act as applicable, and must be proportionate and regularly reviewed",
    ],
    legislation: [
      "Mental Health Act 1983 (as amended 2007)",
      "Mental Capacity Act 2005",
      "Care Act 2014",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "NICE Guideline CG90: Depression in Adults (2009, updated 2022)",
    ],
    sections: [
      {
        heading: "Recognising and Responding to Mental Health Deterioration",
        body: "Staff should be alert to the following signs of mental health deterioration: persistent low mood lasting more than two weeks; significant changes in behaviour, appetite or sleep; social withdrawal; expressions of hopelessness or worthlessness; self-neglect; increased agitation or distress; self-harm; or direct expressions of suicidal intent. Any concern must be reported to the duty manager immediately. The GP must be contacted for a clinical review. Where there is immediate risk of harm, 999 or the crisis team must be called. Do not leave the person alone.",
      },
    ],
  },
};
