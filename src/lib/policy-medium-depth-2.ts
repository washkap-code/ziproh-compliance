/**
 * Medium-depth policy content — batch 2.
 * Dementia Care, Falls Prevention, Induction & Training,
 * Restraint & Restrictive Practice, Equality Diversity & Inclusion.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// EFF-005  Dementia Care Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF005_CONTENT: DocumentContent = {
  title: "Dementia Care Policy",
  policyId: "EFF-005",
  version: "4.2",
  effectiveDate: "2026-03-01",
  reviewDate: "2027-03-01",
  approvedBy: "Registered Manager",
  scope: "All staff providing care and support to service users with a dementia diagnosis or suspected dementia at [ORGANISATION_NAME]. This policy applies to all stages of the dementia journey, from early-stage diagnosis through to end-of-life care.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all staff receive dementia awareness training at induction and update training every 3 years.",
        "Ensure at least one member of staff on each shift has completed the Dementia Champion or equivalent training.",
        "Ensure the physical environment is assessed and adapted to support people with dementia.",
        "Review dementia care practice at quarterly governance meetings using care plan audits and feedback.",
        "Maintain relationships with the local Memory Assessment Service and dementia specialist teams.",
      ],
    },
    {
      role: "Dementia Champion / Lead",
      duties: [
        "Act as the designated practice lead for dementia care.",
        "Support colleagues with complex dementia care queries and best practice guidance.",
        "Keep up to date with Alzheimer's Society and NICE dementia guidance.",
        "Lead dementia care audits and share learning with the team.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Deliver care that upholds the dignity and personhood of every person with dementia.",
        "Use person-centred communication techniques appropriate to the individual's stage of dementia.",
        "Record significant changes in behaviour, communication, or presentation promptly.",
        "Never use restrictive practices without a documented best interest decision and authorisation.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005 — decision-making for people who lack capacity",
    "Mental Health Act 1983 (amended 2007) — detention where applicable",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Care Act 2014 — well-being principle; safeguarding",
    "NICE Guideline NG97 — Dementia: assessment, management and support for people living with dementia and their carers (2018, updated 2023)",
  ],
  definitions: [
    { term: "Dementia", definition: "A syndrome characterised by progressive decline in cognitive function, memory, language, and the ability to carry out daily activities. Alzheimer's disease accounts for 60–70% of cases; other types include vascular dementia, Lewy body dementia, and frontotemporal dementia." },
    { term: "Person-Centred Care", definition: "An approach that treats each person as an individual with their own unique history, preferences, abilities, and needs — not defined by their diagnosis. Developed by Professor Tom Kitwood, who introduced the concept of personhood in dementia care." },
    { term: "BPSD", definition: "Behavioural and Psychological Symptoms of Dementia. Includes agitation, aggression, wandering, sleep disturbance, and psychosis. These are often expressions of unmet need rather than deliberate behaviour." },
    { term: "Life History / This is Me", definition: "A personal profile document completed with the service user and their family that records the person's life story, preferences, routines, and important relationships. Essential for person-centred dementia care." },
    { term: "Sundowning", definition: "Increased confusion, agitation, or restlessness that typically occurs in the late afternoon or evening. May be related to fatigue, changes in light, disrupted routine, or unmet physical needs." },
  ],
  sections: [
    {
      title: "Person-Centred Dementia Care",
      body: "At [ORGANISATION_NAME], we are committed to seeing the person behind the diagnosis. Every person with dementia has a life history, preferences, relationships, and a unique identity. Our approach is built on the five principles of person-centred care:\n\n1. Treating every person with dignity and respect as an individual.\n2. Supporting the person's right to make decisions where they have capacity.\n3. Recognising that behaviour is communication — especially when verbal communication is limited.\n4. Maintaining meaningful connections with family, friends, and community.\n5. Focusing on the person's strengths and capabilities, not only their impairments.",
      practiceBox: "Every person with dementia must have a completed 'This is Me' or equivalent life history profile within 7 days of admission. This document should be compiled with the service user and their family and must include: preferred name and pronouns; key relationships; occupation and interests; daily routine preferences; food and drink preferences; things that bring comfort; and things that cause distress.",
    },
    {
      title: "Assessment and Care Planning",
      body: "Dementia-specific assessment must be completed on or before admission and reviewed at every care review:",
      procedure: [
        "Cognitive assessment — use a validated tool appropriate to the stage: MMSE, MoCA, or the 4AT for acute settings. Record baseline and monitor for change.",
        "Life history and communication assessment — document the person's preferred communication style, language, and any aids required (hearing, vision, communication boards).",
        "Behavioural assessment — document current BPSD, their frequency, likely triggers, and effective de-escalation strategies.",
        "Risk assessment — including wandering/going outside unsafely, falls, nutrition/hydration, medication adherence, and self-neglect.",
        "Mental capacity assessment — decision-specific assessments for all material decisions. Document clearly under MCA 2005.",
        "Needs assessment for activities, social engagement, and meaningful occupation.",
        "Pain assessment using an observational tool such as Abbey or PAINAD where verbal self-report is unreliable.",
        "Review with MDT and family at minimum every 3 months or following any significant change.",
      ],
    },
    {
      title: "Communication",
      body: "Effective communication is at the heart of good dementia care. As dementia progresses, verbal communication typically becomes more difficult, but non-verbal communication — touch, facial expression, tone of voice, body language — remains meaningful throughout.\n\nKey communication principles at [ORGANISATION_NAME]:",
      bulletPoints: [
        "Always approach from the front, at the person's eye level. Never approach from behind.",
        "Use the person's preferred name. Speak slowly and clearly in short, simple sentences.",
        "Allow time for the person to process and respond — do not rush or finish their sentences.",
        "Use positive body language: open posture, gentle touch (where welcomed), warm facial expression.",
        "Never argue or correct someone with dementia about their confusion about time, place, or identity. Use validation and gentle redirection.",
        "Use pictures, objects, and non-verbal cues to supplement verbal communication.",
        "Where verbal communication has been lost, observe carefully for non-verbal expressions of pain, distress, pleasure, or need.",
      ],
      practiceBox: "Entering a person's reality rather than correcting it is called 'validation therapy'. If a person with dementia believes they are in a different decade, or waiting for a deceased family member, gentle validation — acknowledging their feelings rather than correcting their beliefs — is usually kinder and more effective than reality orientation.",
    },
    {
      title: "Managing Behavioural and Psychological Symptoms (BPSD)",
      body: "BPSD affects up to 90% of people with dementia at some point. The first step is always to identify the unmet need or trigger — BPSD is rarely behaviour without cause.",
      subSections: [
        {
          heading: "ABC Framework for Understanding Behaviour",
          body: "Antecedent — what happened immediately before the behaviour? (Time of day, environment, care activity, visitor, physical pain?)\nBehaviour — what exactly happened? (Describe objectively, not judgementally.)\nConsequence — what happened after? (Did it resolve? Did it escalate? What helped?)\n\nRecording ABC data over time identifies patterns and informs person-centred interventions.",
        },
        {
          heading: "Non-Pharmacological Interventions First",
          body: "In line with NICE NG97, non-pharmacological interventions must always be tried first for BPSD before pharmacological approaches are considered:",
          bulletPoints: [
            "Meaningful activity and occupation tailored to past interests and current abilities.",
            "Music therapy — especially familiar music from the person's formative years.",
            "Reminiscence activities — using photographs, objects, and sensory stimuli.",
            "Increased social interaction and one-to-one time.",
            "Review and treatment of any underlying physical cause (pain, UTI, constipation, dehydration).",
            "Environmental modification — reduce noise, improve lighting, simplify the environment.",
          ],
          warningBox: "Antipsychotic medication should only be used for BPSD where the person is at risk of harm to themselves or others, and only when non-pharmacological approaches have been tried and failed. Prescribing must be by a specialist with consent or a documented best interest decision, reviewed every 6 weeks, and discontinued as soon as possible. Antipsychotics double the risk of stroke in people with dementia.",
        },
      ],
    },
    {
      title: "Environment and Dementia-Friendly Design",
      body: "The physical environment significantly affects the wellbeing and safety of people with dementia. [ORGANISATION_NAME] will maintain an environment that is orientating, safe, and supportive:",
      bulletPoints: [
        "Good lighting throughout, especially in bathrooms and corridors. Avoid harsh glare and dark shadows.",
        "Contrasting colours between floors, walls, and furniture to aid spatial orientation (e.g. contrasting toilet seat).",
        "Clear, simple signage with pictures and words for toilets, bedrooms, and communal areas.",
        "Safe access to a garden or outdoor space with appropriate supervision.",
        "Minimise clutter and noise; create calm spaces for relaxation.",
        "Remove or camouflage hazardous exits if the person is at risk of unsafe wandering (subject to MCA best interest decision and DoLS authorisation where relevant).",
        "Personalise bedroom and living spaces with familiar objects, photographs, and meaningful items.",
      ],
    },
    {
      title: "End-of-Life Care in Dementia",
      body: "Advanced dementia is a life-limiting condition. [ORGANISATION_NAME] will ensure that every person with dementia has an advance care plan that reflects their wishes, values, and preferences for the final stage of their life.\n\nThis must include:\n• Discussion and documentation of resuscitation (DNACPR/ReSPECT) wishes — ideally while the person has capacity.\n• Identification of preferred place of death.\n• Documentation of preferences for pain and symptom management.\n• Referral to the specialist palliative care team where appropriate.\n• Regular family communication and bereavement support.\n\nThe PEACE Care Framework or Liverpool Care Pathway equivalent provides structured guidance for end-of-life care in dementia. Staff must receive end-of-life care training within their induction.",
      legalBox: "Where a person with advanced dementia lacks capacity, all care and treatment decisions must be made in their best interests under MCA 2005 s4. This includes decisions about hospitalisation, cardiopulmonary resuscitation, artificial nutrition, and palliative sedation. Best interest meetings must involve family, relevant clinicians, and any advocate, and must be documented in full.",
    },
  ],
  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "eff-001 — Care Planning Policy",
    "eff-004 — End of Life Care Policy",
    "saf-012 — Restraint & Restrictive Practice Policy",
    "car-001 — Dignity & Respect Policy",
  ],
  appendices: [
    { title: "Appendix A — 'This is Me' Life History Profile Template", content: "A person-centred profile document to be completed with the service user and their family/carers on admission, capturing: name preferences, key life history, occupation, family, religion/spirituality, daily routine preferences, communication needs, food preferences, and what brings comfort or distress." },
    { title: "Appendix B — BPSD Record and ABC Chart", content: "A structured recording tool for documenting Antecedent, Behaviour, and Consequence for each BPSD episode, enabling pattern analysis and care plan updates." },
  ],
  versionHistory: [
    { version: "4.2", date: "2026-03-01", changes: "Updated BPSD section with NICE NG97 2023 update; strengthened antipsychotic warning; added PEACE framework reference." },
    { version: "4.0", date: "2025-01-10", changes: "Full review; added ABC framework; expanded communication section; updated MCA best interest guidance." },
    { version: "3.8", date: "2024-04-01", changes: "Added dementia-friendly environment standards; updated pain assessment tools." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-009  Falls Prevention Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF009_CONTENT: DocumentContent = {
  title: "Falls Prevention Policy",
  policyId: "SAF-009",
  version: "4.5",
  effectiveDate: "2026-02-15",
  reviewDate: "2027-02-15",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME], with particular attention to those aged 65 and over, those with a history of previous falls, and those with conditions that increase falls risk (dementia, Parkinson's, stroke, visual impairment, diabetes, or postural hypotension).",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all service users have a falls risk assessment on admission and after every fall.",
        "Review falls data at monthly governance meetings and report to CQC where required.",
        "Ensure the environment is assessed and maintained to minimise falls hazards.",
        "Ensure staff are trained in falls prevention and post-fall response.",
        "Ensure falls reduction is included in the Quality Improvement Plan where rates are above expected.",
      ],
    },
    {
      role: "Senior Care Workers",
      duties: [
        "Complete and review falls risk assessments using the STRATIFY or equivalent validated tool.",
        "Ensure falls management plans are implemented consistently on every shift.",
        "Lead the post-fall review within 24 hours and update the care plan.",
        "Refer to physiotherapy, occupational therapy, or the GP where clinically indicated.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Implement falls management plan interventions on every shift.",
        "Report all falls immediately, however minor, and complete the incident report before end of shift.",
        "Never attempt to stop a person falling by grabbing — use safe falling techniques.",
        "Ensure the environment is free from hazards at the start of every shift.",
      ],
    },
  ],
  legislation: [
    "Health and Safety at Work etc. Act 1974 — duty of care to residents and staff",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "NICE Guideline NG147 — Falls in older people: assessing risk and prevention (2019, updated 2024)",
    "NICE Clinical Guideline CG161 — Falls in older people (2013)",
    "Mental Capacity Act 2005 — positive risk-taking and autonomy",
  ],
  definitions: [
    { term: "Fall", definition: "An event which results in a person coming to rest inadvertently on the ground or floor or other lower level, regardless of whether injury results (WHO definition)." },
    { term: "STRATIFY", definition: "The St Thomas's Risk Assessment Tool in Falling Elderly Inpatients. A validated 5-question screening tool that identifies falls risk in older people. Score of 2 or more indicates high risk." },
    { term: "Postural Hypotension", definition: "A drop in blood pressure of ≥20mmHg systolic or ≥10mmHg diastolic upon standing, causing dizziness and falls risk. Common in older adults, especially those on antihypertensives, diuretics, or antidepressants." },
    { term: "Safe Falling Technique", definition: "A trained response where a carer guides a person toward the ground in a controlled way rather than attempting to hold them upright, reducing the risk of injury to both parties." },
    { term: "Post-Fall Huddle", definition: "A brief, structured team discussion immediately following a fall to share information about what happened, the person's current condition, and immediate care adjustments." },
  ],
  sections: [
    {
      title: "Falls Risk Assessment",
      body: "Every service user must have a documented falls risk assessment completed within 24 hours of admission. A validated tool must be used — [ORGANISATION_NAME] uses the STRATIFY tool as standard, with the MORSE Falls Scale as an alternative for more complex presentations.\n\nThe falls risk assessment must be repeated:\n• At every 3-monthly care review.\n• Within 24 hours of any fall (however minor).\n• Following any acute illness, hospital admission, change in medication, or significant deterioration.\n• When a new risk factor is identified (e.g. new diagnosis of Parkinson's, deteriorating vision).",
      legalBox: "A high falls risk score does not justify restricting a service user's mobility or independence without a best interest decision under the Mental Capacity Act 2005. A person with capacity has the right to choose to take risks, including the risk of falling. The care plan must document the person's informed consent to any restriction, or the best interest decision where they lack capacity.",
    },
    {
      title: "Individual Falls Management Plans",
      body: "Every service user identified as medium or high risk must have a written falls management plan that forms part of their care plan. The plan must specify personalised interventions across the following domains:",
      subSections: [
        {
          heading: "Medication Review",
          body: "Many falls are caused or worsened by medication side effects. The GP or pharmacist must be asked to review:\n• Psychotropic medications (sedatives, antipsychotics, antidepressants).\n• Antihypertensives and diuretics (risk of postural hypotension).\n• Polypharmacy (4+ medications increases falls risk significantly).\n\nDocument the outcome of the review and any changes made.",
        },
        {
          heading: "Vision and Footwear",
          body: "Ensure the person's vision is assessed at least annually. Report to the GP if there are concerns. Ensure the person wears well-fitting, non-slip footwear at all times. Check footwear at every shift. Socks without shoes and backless slippers significantly increase falls risk.",
        },
        {
          heading: "Environment",
          body: "Conduct an environmental assessment for every high-risk individual:",
          bulletPoints: [
            "Adequate lighting — including nightlights for nocturnal visits to the bathroom.",
            "Clear pathways — furniture arranged to allow safe walking routes.",
            "Handrails and grab bars in bathrooms, corridors, and beside the bed.",
            "Non-slip flooring and bath mats.",
            "Call bell/personal alarm within reach at all times.",
            "Bed and chair at correct height for safe transfers.",
          ],
        },
        {
          heading: "Exercise and Strength",
          body: "In line with NICE NG147, strength and balance exercise programmes reduce falls by up to 35% in older people. Refer to physiotherapy for a personalised programme where the person has capacity and is willing. Group exercise (e.g. Otago, Tai Chi) can be effective where individual therapy is not available.",
          practiceBox: "NICE recommends that multifactorial falls assessment and intervention should be offered to all older people who present with a fall or are identified as at risk. This includes community-dwelling older people — falls prevention is not just a care home responsibility.",
        },
      ],
    },
    {
      title: "Post-Fall Response Procedure",
      body: "The immediate response to a fall must follow this sequence:",
      procedure: [
        "Do not move the person until you have assessed them. Speak to them calmly and reassure them.",
        "Check for signs of injury — particularly head injury, loss of consciousness, confusion, limb deformity, or inability to bear weight. If any are present, call 999 immediately.",
        "If no acute injury is suspected, assist the person to a comfortable position using the correct moving and handling technique and appropriate equipment.",
        "Complete a head-to-toe assessment and record observations (BP, pulse, GCS if head injury suspected).",
        "Notify the Registered Manager or on-call manager by phone immediately.",
        "Notify next of kin/emergency contacts within 24 hours (or immediately if significant injury).",
        "Complete the Accident/Incident Report Form before the end of the shift.",
        "Conduct a post-fall huddle with the care team and update the falls management plan.",
        "Review for CQC notification requirement — fractures and significant head injuries must be notified.",
      ],
      warningBox: "Never leave a person on the floor unnecessarily, but never rush to lift them unsafely either. If in doubt, call 999 and follow the ambulance service's advice while staying with the person and keeping them warm. A person who has been on the floor for more than 30 minutes is at risk of hypothermia and rhabdomyolysis.",
    },
    {
      title: "Monitoring, Analysis, and Learning",
      body: "All falls are recorded on the Incident Log. The Registered Manager reviews falls data at every monthly governance meeting, analysing:\n• Total falls and falls resulting in harm by month — trend over time.\n• Falls by time of day and shift — are there patterns suggesting staffing gaps?\n• Falls by location — are certain areas generating disproportionate incidents?\n• Repeat fallers — individuals with 2+ falls in 30 days require urgent MDT review.\n• Post-fall review completion rate — are care plans being updated following every fall?\n\nLearning from falls is shared with all staff at team meetings. Any fall resulting in fracture, head injury, or hospital admission is subject to a full Root Cause Analysis within 14 days.",
    },
  ],
  relatedDocuments: [
    "saf-006 — Risk Assessment Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "saf-010 — Moving & Handling Policy",
    "eff-002 — Mental Capacity Act Policy",
    "eff-001 — Care Planning Policy",
  ],
  appendices: [
    { title: "Appendix A — STRATIFY Falls Risk Assessment Tool", content: "The validated 5-item STRATIFY tool: (1) Was the patient admitted due to a fall? (2) Agitated? (3) Visual impairment affecting daily function? (4) Frequent toileting? (5) Transfer/mobility score of 3 or 4? Each yes = 1 point. Score ≥2 = high risk." },
    { title: "Appendix B — Post-Fall Review Template", content: "Structured template for completing a falls review within 24 hours: circumstances of the fall; injury assessment; immediate actions taken; root cause analysis; care plan updates; referrals made; family notified." },
  ],
  versionHistory: [
    { version: "4.5", date: "2026-02-15", changes: "Updated with NICE NG147 2024 update; added postural hypotension medication guidance; strengthened post-fall huddle requirement." },
    { version: "4.2", date: "2025-04-01", changes: "Added environmental assessment checklist; updated safe falling guidance." },
    { version: "4.0", date: "2024-01-15", changes: "Full review; introduced STRATIFY tool as standard; added falls analysis framework." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-009  Induction & Mandatory Training Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL009_CONTENT: DocumentContent = {
  title: "Induction & Mandatory Training Policy",
  policyId: "WL-009",
  version: "3.9",
  effectiveDate: "2026-01-20",
  reviewDate: "2027-01-20",
  approvedBy: "Registered Manager",
  scope: "All staff employed by [ORGANISATION_NAME] including permanent, part-time, bank, and fixed-term workers. Agency staff must provide evidence of equivalent mandatory training completion to their agency; the agency is responsible for compliance. Volunteers receive a streamlined induction appropriate to their role.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a Training Needs Analysis (TNA) is completed annually and used to inform the training programme.",
        "Maintain an up-to-date Training Matrix recording each staff member's compliance with mandatory training.",
        "Ensure overall mandatory training compliance is above 90% at all times.",
        "Report to CQC and the governing body where training compliance falls below 80% for any topic.",
        "Ensure all induction elements are completed within the required timescales.",
      ],
    },
    {
      role: "Senior Care Workers / Training Lead",
      duties: [
        "Act as buddy or mentor to new starters during their induction period.",
        "Deliver or coordinate delivery of role-specific induction elements.",
        "Update the Training Matrix when staff complete training.",
        "Remind staff of approaching training renewal dates.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Complete all induction elements within the required timescales.",
        "Maintain their own training records and alert their manager to approaching renewals.",
        "Apply learning from training in their day-to-day practice.",
        "Not provide care or carry out tasks for which they have not been trained and assessed as competent.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing (competence and training)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Skills for Care — Care Certificate (2015) — foundation standard for new care workers",
    "Skills for Care — Core and Mandatory Training Guidance (2019 and updates)",
    "Health and Safety at Work etc. Act 1974 — employer duty to train staff for safe working",
  ],
  definitions: [
    { term: "Care Certificate", definition: "A set of 15 standards developed by Skills for Care, Health Education England, and Skills for Health that new entrants to the care sector must demonstrate competence in. Not a qualification but a record of assessed competence. Must be completed within 12 weeks of starting employment." },
    { term: "Mandatory Training", definition: "Training that every member of staff must complete as a condition of their employment, regardless of their role. The specific topics and renewal frequencies are determined by regulatory requirements, legislation, and the service's assessed risks." },
    { term: "Training Matrix", definition: "A live record showing every member of staff, all mandatory training topics, the date each was last completed, and the renewal date. Used to monitor compliance and plan training." },
    { term: "Training Needs Analysis (TNA)", definition: "An annual assessment of the training needs of the workforce, informed by incident analysis, care plan audits, supervision feedback, changes in legislation, and new service developments." },
    { term: "Competency Assessment", definition: "A structured observation and/or knowledge test confirming that a member of staff can perform a specific skill or task safely and competently, not just that they have attended training." },
  ],
  sections: [
    {
      title: "Induction Programme",
      body: "All new starters must complete a structured induction before undertaking unsupervised care duties. The induction programme has two phases:",
      subSections: [
        {
          heading: "Phase 1 — Pre-Commencement (Before First Shift)",
          body: "Before undertaking any care duties, all new starters must have:\n• Received and signed their contract of employment, job description, and key policies.\n• Completed an identity and right-to-work check.\n• Had their DBS application submitted (certificate received before unsupervised working).\n• Completed mandatory online induction modules (fire safety, safeguarding awareness, infection control basics, moving and handling theory).\n• Met their named buddy/mentor.",
          warningBox: "No new starter may work with service users unsupervised until their DBS Enhanced Check with Barred List has been received. If a risk assessment permits a new starter to work before the certificate is received, they must be directly supervised at all times by an experienced member of staff with a clear DBS.",
        },
        {
          heading: "Phase 2 — Care Certificate and Workplace Induction (Weeks 1–12)",
          body: "Within the first 12 weeks, the new starter must complete:\n• All 15 Care Certificate standards, assessed by a qualified assessor.\n• Mandatory training topics listed in the Training Schedule (see below).\n• A competency assessment in moving and handling using the service's equipment.\n• A competency assessment in medication administration (if applicable to the role).\n• A supervised period carrying out core care tasks with feedback from their buddy.\n• Three formal supervision sessions at weeks 2, 6, and 12.\n\nThe Registered Manager signs off the induction upon satisfactory completion of all elements.",
        },
      ],
    },
    {
      title: "Mandatory Training Topics and Renewal Frequencies",
      body: "The following mandatory training applies to all care staff at [ORGANISATION_NAME]. Renewal frequencies align with Skills for Care guidance and the service's risk assessment:",
      subSections: [
        {
          heading: "Annual Renewal (every 12 months)",
          body: "The following topics must be refreshed annually:",
          bulletPoints: [
            "Safeguarding Adults (and Children, where applicable) — aligned with local authority multi-agency safeguarding training framework.",
            "Fire Safety — theory and practical drill. Fire warden training for designated wardens.",
            "Infection Prevention and Control — including hand hygiene competency assessment.",
            "Mental Capacity Act and Deprivation of Liberty Safeguards (DoLS/LPS).",
            "Health and Safety including manual handling awareness.",
          ],
        },
        {
          heading: "Every 2–3 Years",
          body: "The following topics require renewal every 2–3 years or as specified:",
          bulletPoints: [
            "Moving and Handling — practical, with competency sign-off using the service's equipment (2 yearly).",
            "Basic Life Support / CPR (2 yearly).",
            "Medication Management — theory; competency assessment annually (3 yearly for classroom).",
            "Dementia Awareness (3 yearly).",
            "Equality, Diversity and Inclusion (3 yearly).",
            "Information Governance and Data Protection (3 yearly).",
            "Positive Behaviour Support / managing behaviour that challenges (3 yearly, plus after any significant incident).",
          ],
        },
      ],
      practiceBox: "Skills for Care recommends using a blended learning approach — combining e-learning with face-to-face training and workplace competency assessment. E-learning alone is insufficient for practical skills such as moving and handling, BLS, and medication administration, which must always include a hands-on competency check.",
    },
    {
      title: "Monitoring Training Compliance",
      body: "The Training Matrix is maintained by the Registered Manager and updated every time a member of staff completes training. The matrix is reviewed at:\n• Monthly governance meetings — to check current compliance rates by topic and individual.\n• Annual appraisals — to review each staff member's training record and agree renewal plan.\n• CQC inspections — the matrix is one of the first documents inspectors request.\n\nWhere a staff member's compliance in a mandatory topic has lapsed, they must not perform tasks covered by that training until they have completed a refresher. The Registered Manager will agree a remedial training plan within 5 working days of identifying a lapse.",
      warningBox: "A Training Matrix showing compliance below 80% in any mandatory topic will be treated as a governance failure and may indicate unsafe staffing under Regulation 18. Where this is identified, the Registered Manager must escalate to the governing body immediately and notify CQC if there is an immediate risk to service users.",
    },
    {
      title: "Role-Specific and Additional Training",
      body: "In addition to mandatory training, staff in specific roles must complete the following:\n\n• Registered Nurses (where applicable): NMC revalidation requirements, IV therapy, clinical assessment skills, and any specialist clinical training relevant to the service.\n• Team Leaders / Senior Care Workers: Leadership and management, supervision skills, safeguarding lead training.\n• Dementia Lead / Champion: Foundation-level dementia qualification (e.g. City & Guilds, RSPH) or Alzheimer's Society dementia training programme.\n• Medication Administration Staff: Level 3 competency framework assessment; controlled drugs training.\n• Moving and Handling Trainer: Specific train-the-trainer qualification; updated every 3 years.\n\nIndividual development needs beyond mandatory training are identified at annual appraisal and funded through the training budget subject to business need.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-002 — Recruitment & Selection Policy",
    "wl-003 — Supervision & Appraisal Policy",
    "wl-016 — Learning & Development Strategy",
    "saf-001 — Safeguarding Adults at Risk Policy",
  ],
  appendices: [
    { title: "Appendix A — Induction Checklist", content: "A comprehensive checklist of all elements to be completed during induction, with columns for: element description; responsible person; completion date; signature. Signed off by the Registered Manager on completion." },
    { title: "Appendix B — Mandatory Training Matrix Template", content: "Spreadsheet template with staff names in rows and mandatory training topics in columns. Each cell shows: completion date / renewal date. Conditional formatting highlights green (current), amber (due within 3 months), and red (overdue)." },
  ],
  versionHistory: [
    { version: "3.9", date: "2026-01-20", changes: "Updated to reflect Skills for Care 2025 training guidance; added LPS to mandatory topics; revised agency staff requirements." },
    { version: "3.7", date: "2025-06-01", changes: "Added blended learning guidance; updated CPR renewal to 2 yearly." },
    { version: "3.5", date: "2024-04-01", changes: "Full review post Care Certificate update; added competency assessment requirements." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-012  Restraint & Restrictive Practice Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF012_CONTENT: DocumentContent = {
  title: "Restraint & Restrictive Practice Policy",
  policyId: "SAF-012",
  version: "5.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All staff at [ORGANISATION_NAME] in all circumstances where a service user's freedom of movement, choice, or autonomy may be limited. This includes physical restraint, mechanical restraint, chemical restraint, environmental restraint, and psychological/emotional restricting practices. The policy applies regardless of whether a restriction is planned or reactive.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure restrictive practices are only used where a documented best interest decision under MCA 2005 is in place.",
        "Submit all DoLS applications to the supervisory body within 7 days of identifying a deprivation of liberty.",
        "Review all restrictive practice plans at least every 3 months and ensure reduction over time.",
        "Report all use of physical restraint as a serious incident under the Incident Reporting Policy.",
        "Ensure a Positive Behaviour Support Plan is in place for every service user for whom restrictive practices are used.",
      ],
    },
    {
      role: "Senior Care Workers",
      duties: [
        "Ensure no restrictive practice is applied without a current written authorisation.",
        "Lead the post-incident review following any use of physical restraint.",
        "Monitor the effectiveness of agreed restrictive practices and report changes to the Registered Manager.",
        "Identify and implement proactive strategies to reduce the need for restriction.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Never apply any restriction without specific written authorisation in the care plan.",
        "Record all instances of restrictive practice contemporaneously.",
        "Attempt non-restrictive de-escalation strategies first in all situations.",
        "Report any concerns about inappropriate use of restriction under the Whistleblowing Policy.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005, s6 — limitation on use of restraint",
    "Mental Capacity Act 2005, s4A and Schedule A1 — Deprivation of Liberty Safeguards (DoLS)",
    "Mental Health Act 1983 (amended 2007) — where applicable to detained patients",
    "Human Rights Act 1998, Article 5 — right to liberty; Article 3 — prohibition of inhuman treatment",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 10 — Dignity and Respect; Regulation 12 — Safe care and treatment",
  ],
  definitions: [
    { term: "Restraint", definition: "Under MCA 2005 s6(4), a person restrains another if they (a) use force, or threaten to use force, to secure a physical act the person is resisting; or (b) restrict a person's liberty of movement, whether or not they resist. Restraint under MCA is only lawful if necessary to prevent harm and proportionate." },
    { term: "Deprivation of Liberty", definition: "A state characterised by continuous supervision and control, and the person not being free to leave. Following Cheshire West [2014] UKSC 19, any person lacking capacity who is being cared for in such conditions is deprived of their liberty, regardless of the setting, and requires legal authorisation (DoLS/LPS or Court of Protection order)." },
    { term: "DoLS (Deprivation of Liberty Safeguards)", definition: "The legal framework under Schedule A1 of the Mental Capacity Act 2005 for authorising a deprivation of liberty in a care home or hospital for adults who lack capacity to consent to their care arrangements. Being replaced by Liberty Protection Safeguards (LPS) on a date to be confirmed by government." },
    { term: "Physical Restraint", definition: "The use of physical force — holds, grips, or bodily contact — to prevent, restrict, or subdue a person's movement or behaviour. The most restrictive form of intervention; only lawful in an immediate emergency to prevent serious harm." },
    { term: "Positive Behaviour Support (PBS)", definition: "A framework for understanding the function of behaviour and developing proactive, person-centred strategies to meet the needs that drive it, thereby reducing the need for reactive or restrictive interventions." },
    { term: "Least Restrictive Option", definition: "The principle under MCA 2005 s1(6) that any act done or decision made for a person who lacks capacity must be the option that is least restrictive of the person's rights and freedom of action, while still achieving the necessary purpose." },
  ],
  sections: [
    {
      title: "Principles — Restriction as a Last Resort",
      body: "[ORGANISATION_NAME] is committed to the elimination of unnecessary restrictive practices and the reduction of all restrictive practices over time. Restriction is only ever used where:\n\n1. The person lacks the mental capacity to consent to the restriction (assessed decision-specifically under MCA 2005).\n2. There is a genuine risk of serious harm — to the person or others — that cannot be managed by any less restrictive means.\n3. A documented best interest decision authorises the specific restriction.\n4. The restriction is proportionate to the risk and the least restrictive option available.\n5. It is regularly reviewed and actively reduced.\n\nThe 'Positive and Proactive Care' guidance from NHS England and the 'Reducing Restrictive Interventions' framework from NHS Improvement underpin this policy.",
      warningBox: "Any restriction applied outside these conditions is unlawful. It may constitute the criminal offences of false imprisonment, assault, or ill-treatment under the Mental Capacity Act 2005 s44. Staff who apply unauthorised restrictions will face disciplinary action and may be reported to the police, the DBS, or a professional regulator.",
    },
    {
      title: "Types of Restrictive Practice",
      body: "The following forms of restrictive practice may be encountered at [ORGANISATION_NAME]. Each requires prior authorisation via a best interest decision — none may be applied on an ad hoc basis:",
      subSections: [
        {
          heading: "Physical Restraint",
          body: "The use of any physical hold, grip, or bodily contact to restrict movement. Physical restraint is the most restrictive intervention and must only be used in immediate emergency situations where there is imminent serious risk of harm. No planned physical restraint technique should be used unless the staff member has received specific training and the technique is documented in the care plan. Post-incident review is mandatory within 24 hours. All use must be reported as a serious incident.",
          warningBox: "Prone restraint (face-down) must never be used. It carries a high risk of positional asphyxia and death. Any member of staff who witnesses or is instructed to use prone restraint must refuse and raise the matter as an urgent safeguarding concern.",
        },
        {
          heading: "Environmental Restraint",
          body: "Limiting a person's freedom of movement through the environment — for example, locked doors, bedrails, chair trays, sensor mats triggering door locks, or camouflaged exits. These are among the most commonly used and most overlooked forms of restriction. Each requires individual best interest authorisation. Blanket environmental restrictions (e.g. locking a ward exit for all residents) require a DoLS authorisation.",
        },
        {
          heading: "Chemical Restraint",
          body: "The use of medication to control or limit behaviour that challenges. The use of medication solely or primarily as a restraint is unlawful. Medication must only be prescribed for a clinical purpose (e.g. treatment of psychosis, relief of pain) and must have been assessed and prescribed by a registered prescriber with a best interest decision documented. PRN (as required) medication must have a clear protocol specifying clinical indications — 'agitation' alone is insufficient.",
        },
        {
          heading: "Psychological and Emotional Restriction",
          body: "Practices that limit a person's choices, autonomy, or self-expression through intimidation, threats, excessive supervision, or persistent denial of requests. These are often unrecognised as restrictive practice but can constitute abuse. Examples include: telling a person they cannot have a visitor; preventing a person from making a phone call; refusing to allow a person to choose their own clothing.",
          practiceBox: "A useful test: would this person object to this restriction if they had full capacity? If yes, it is almost certainly restrictive and requires authorisation. If you would not want it done to you, do not do it to someone else.",
        },
      ],
    },
    {
      title: "Deprivation of Liberty — DoLS and LPS",
      body: "Where a service user lacks capacity and their care arrangements meet the 'acid test' from Cheshire West — they are under continuous supervision and control and are not free to leave — they are deprived of their liberty. This must be legally authorised.\n\nFor care homes and hospitals in England and Wales, the current legal framework is the Deprivation of Liberty Safeguards (DoLS) under Schedule A1 MCA 2005. The Registered Manager must:\n• Identify all service users who may be deprived of their liberty within 7 days of admission or identification.\n• Submit a Standard Authorisation Request to the Supervisory Body (local authority).\n• Display the DoLS authorisation in the person's care record and notify their family/IMCA.\n• Review the authorisation at least every 12 months (or sooner if the situation changes).\n• Apply to the Court of Protection if DoLS is refused or the situation is complex.",
      legalBox: "The Liberty Protection Safeguards (LPS) — the replacement for DoLS under the Mental Capacity (Amendment) Act 2019 — have been postponed by government. DoLS remains the applicable framework until LPS commences. [ORGANISATION_NAME] will update this policy immediately upon any change in commencement date. Current status must be confirmed by checking gov.uk.",
    },
    {
      title: "Positive Behaviour Support and De-Escalation",
      body: "The best restrictive practice is the one that never happens. Every service user for whom restrictive practices are used must have a Positive Behaviour Support Plan that:\n• Identifies the functions and triggers of their behaviour.\n• Specifies proactive strategies to meet underlying needs and reduce incidents.\n• Describes de-escalation techniques that work for that individual.\n• Lists reactive strategies in order from least to most restrictive.\n• Sets reduction targets and review dates.\n\nDe-escalation must always be attempted before any restriction. Effective de-escalation includes: calm voice and body language; removing the trigger; offering a meaningful distraction; giving the person space; involving a trusted person.",
    },
    {
      title: "Recording and Review",
      body: "Every use of a restrictive practice must be recorded contemporaneously, including:\n• The type of restriction used and the specific technique.\n• The duration.\n• The reason — what risk was being managed?\n• What less restrictive alternatives were attempted first.\n• The effect on the service user (calm/distressed/no change).\n• Any injuries — to the service user or staff.\n\nAll physical restraint must be reported as a serious incident. A post-incident review must be completed within 24 hours. Restrictive practice plans are reviewed at every 3-monthly care review, with the explicit aim of reduction.",
    },
  ],
  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "eff-005 — Dementia Care Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
  ],
  appendices: [
    { title: "Appendix A — Restrictive Practice Decision-Making Flowchart", content: "A flowchart guiding staff through: (1) Does the person have capacity? (2) If not, is there an immediate risk of serious harm? (3) Is this the least restrictive option? (4) Is there a documented best interest decision? (5) Record and review." },
    { title: "Appendix B — DoLS Application Checklist", content: "Checklist for the Registered Manager when submitting a Standard Authorisation Request: identification of acid test criteria met; mental capacity assessment on file; best interest decision documented; IMCA involved where appropriate; supervisory body contacted; copy to family." },
  ],
  versionHistory: [
    { version: "5.1", date: "2026-04-01", changes: "Updated LPS implementation note; added prone restraint absolute prohibition; strengthened PBS plan requirements." },
    { version: "5.0", date: "2025-03-01", changes: "Full review post Cheshire West case law update; expanded chemical restraint section; added psychological restriction examples." },
    { version: "4.8", date: "2024-04-01", changes: "Revised DoLS procedure to align with CQC oversight guidance; added de-escalation section." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-002  Equality, Diversity & Inclusion Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR002_CONTENT: DocumentContent = {
  title: "Equality, Diversity & Inclusion Policy",
  policyId: "CAR-002",
  version: "4.0",
  effectiveDate: "2026-01-10",
  reviewDate: "2027-01-10",
  approvedBy: "Registered Manager",
  scope: "All aspects of [ORGANISATION_NAME]'s activities — service delivery to service users, employment of staff, and engagement with third parties. This policy applies to all staff, volunteers, agency workers, and contractors.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure the Equality, Diversity and Inclusion Policy is reviewed annually and implemented consistently.",
        "Investigate all complaints of discrimination, harassment, or victimisation promptly and fairly.",
        "Ensure equality monitoring data is collected, analysed, and acted upon.",
        "Complete an annual Equality Impact Assessment (EqIA) on key policies and service changes.",
        "Ensure staff receive EDI training within induction and every 3 years.",
      ],
    },
    {
      role: "All Managers and Supervisors",
      duties: [
        "Model inclusive behaviour and challenge discriminatory language or actions in the workplace.",
        "Apply recruitment, supervision, and appraisal processes consistently and without bias.",
        "Consider the protected characteristics of service users when planning and delivering care.",
        "Report concerns about discriminatory practice through the appropriate channels.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Treat every service user and colleague with dignity and respect regardless of protected characteristics.",
        "Challenge discriminatory comments or behaviour when safe to do so, and report if not.",
        "Attend required EDI training and apply learning in practice.",
        "Declare any conflict of interest or personal bias where it may affect decision-making.",
      ],
    },
  ],
  legislation: [
    "Equality Act 2010 — nine protected characteristics; direct and indirect discrimination; harassment; victimisation; duty to make reasonable adjustments",
    "Human Rights Act 1998 — Article 14: prohibition of discrimination; Article 8: right to private and family life",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care; Regulation 10 — Dignity and Respect",
    "Care Act 2014 — well-being principle including the importance of relationships and cultural needs",
    "Accessible Information Standard (NHS England, 2016, updated 2024) — communication needs of disabled people",
  ],
  definitions: [
    { term: "Protected Characteristics", definition: "The nine characteristics protected under the Equality Act 2010: age; disability; gender reassignment; marriage and civil partnership (employment only); pregnancy and maternity; race; religion or belief; sex; and sexual orientation." },
    { term: "Direct Discrimination", definition: "Treating a person less favourably than another because of a protected characteristic. For example, refusing a service user a care activity because of their age." },
    { term: "Indirect Discrimination", definition: "Applying a practice, policy, or rule that applies to everyone but puts people with a particular protected characteristic at a disadvantage. Lawful only if it can be objectively justified as a proportionate means of achieving a legitimate aim." },
    { term: "Harassment", definition: "Unwanted conduct related to a protected characteristic that has the purpose or effect of violating a person's dignity, or creating an intimidating, hostile, degrading, humiliating, or offensive environment." },
    { term: "Reasonable Adjustment", definition: "A change to a practice, policy, procedure, or physical feature to remove or reduce a substantial disadvantage experienced by a disabled person. The duty to make reasonable adjustments is anticipatory — organisations must not wait to be asked." },
  ],
  sections: [
    {
      title: "Our Equality Commitment",
      body: "[ORGANISATION_NAME] is committed to providing services that are fair, inclusive, and free from discrimination for all service users, regardless of who they are. We celebrate diversity — the different backgrounds, experiences, beliefs, and identities that make each person unique — and we recognise that providing genuinely equal care means treating people as individuals and sometimes treating them differently to achieve equivalent outcomes.\n\nEquality does not mean treating everyone the same. It means removing barriers and making reasonable adjustments so that everyone can access the same quality of care and opportunity.",
      legalBox: "The Equality Act 2010 imposes a public sector equality duty on many organisations and a general duty on all service providers not to discriminate. Even where an organisation is not a public body, it must comply with all provisions of the Equality Act 2010 as a care provider. Any breach may result in civil liability, compensation claims, and regulatory action by CQC.",
    },
    {
      title: "The Nine Protected Characteristics",
      body: "Care and treatment decisions, employment decisions, and the way [ORGANISATION_NAME] operates must never be negatively influenced by any of the following protected characteristics:",
      subSections: [
        {
          heading: "Age",
          body: "Age discrimination in care settings commonly manifests as age-based assumptions about capability, motivation, or treatment options. Every person must be assessed and cared for as an individual. 'They're old, they won't mind' is not an acceptable basis for any care decision.",
        },
        {
          heading: "Disability",
          body: "The Equality Act 2010 uses a broad definition of disability: a physical or mental impairment that has a substantial and long-term adverse effect on a person's ability to carry out normal day-to-day activities. [ORGANISATION_NAME] must make reasonable adjustments to remove barriers for disabled service users and employees. Examples include: accessible information, adapted equipment, modified care routines, and flexible working arrangements.",
          practiceBox: "The duty to make reasonable adjustments is anticipatory — [ORGANISATION_NAME] must think proactively about what barriers disabled people may face and remove them, not wait until a person asks or complains.",
        },
        {
          heading: "Gender Reassignment",
          body: "A trans person must be treated according to their acquired gender in all aspects of care and employment. This includes use of their preferred name and pronouns, assignment to single-sex accommodation (where applicable, in accordance with their gender), and the manner in which personal care is delivered. Care plans must record the person's preferences sensitively and confidentially.",
        },
        {
          heading: "Race, Religion or Belief, and Culture",
          body: "Care plans must reflect and respect the cultural, linguistic, dietary, and spiritual practices of every service user. This includes ensuring:\n• Interpreting or translation services are available where English is not a service user's first language.\n• Dietary requirements (halal, kosher, Hindu vegetarian, etc.) are documented and reliably provided.\n• Religious observance (prayer times, festivals, religious dress) is facilitated.\n• End-of-life care reflects cultural and religious preferences regarding the body, rituals, and family involvement.",
        },
        {
          heading: "Sexual Orientation and Sex",
          body: "LGBT+ service users and staff must be treated with the same dignity and respect as any other person. Assumptions about relationships, preferred visitors, or living arrangements must never be made based on someone's perceived sexual orientation. The rights and needs of same-sex partners must be treated identically to those of opposite-sex partners.",
        },
        {
          heading: "Pregnancy, Maternity, and Marriage/Civil Partnership",
          body: "Pregnant employees and service users have specific additional protections. No employment decision (including allocation, promotion, or dismissal) may be made based on pregnancy or maternity. Service users who are pregnant or new mothers must receive care that appropriately accounts for their situation.",
        },
      ],
    },
    {
      title: "Reasonable Adjustments",
      body: "[ORGANISATION_NAME] must anticipate and proactively make reasonable adjustments for disabled service users and employees. Reasonable adjustments must be:\n• Identified at assessment/recruitment and documented in the care plan or personnel file.\n• Practical and proportionate — cost, disruption, and effectiveness are all factors.\n• Reviewed when circumstances change.\n• Never refused solely on grounds of cost without exploring alternatives.\n\nExamples of reasonable adjustments for service users: providing written information in large print, easy read, or translated formats; installing grab rails or providing adaptive equipment; adjusting care routine timings to accommodate a religious observance; offering a carer of a specific gender for personal care.\n\nExamples for staff: adjusted shift patterns for a disability-related health condition; modified physical duties; accessible workplace equipment.",
    },
    {
      title: "Handling Discrimination Complaints",
      body: "Any service user, family member, or staff member who believes they have been treated less favourably because of a protected characteristic may raise a complaint under the Complaints Policy. All discrimination complaints are investigated with the same seriousness as any safeguarding concern.\n\nThe Registered Manager investigates discrimination complaints independently and reports findings to the governing body. Where a staff member is found to have discriminated against a service user, this is treated as gross misconduct under the Disciplinary Policy.",
      warningBox: "Victimisation — treating someone less favourably because they have made or supported a discrimination complaint — is itself unlawful under the Equality Act 2010. Any manager who is found to have victimised a complainant faces disciplinary action up to and including dismissal.",
    },
    {
      title: "Equality Impact Assessments",
      body: "Before implementing any significant policy change, service redesign, or new procedure, [ORGANISATION_NAME] will complete an Equality Impact Assessment to identify and mitigate disproportionate effects on any group with protected characteristics. EqIAs are completed by the Registered Manager with input from service users, staff, and external representatives where appropriate.\n\nEqIA reports are retained for 3 years and are available on request. The outcome of EqIAs is fed back into the decision-making process. Where a proposed change is found to have an unjustified adverse impact on a protected group, it is modified or abandoned.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "wl-002 — Recruitment & Selection Policy",
    "res-001 — Complaints Handling Policy",
    "wl-010 — Disciplinary & Capability Policy",
    "wl-015 — Equality & Human Rights Policy (Employment)",
  ],
  appendices: [
    { title: "Appendix A — Equality Impact Assessment Template", content: "A structured template for assessing the equalities impact of proposed policy changes: description of the change; relevant protected characteristics; evidence of potential impact; mitigating actions; consultation undertaken; decision and rationale; review date." },
    { title: "Appendix B — Accessible Information Standard Checklist", content: "A checklist ensuring compliance with NHS England's Accessible Information Standard: identification and recording of communication needs at assessment; flagging in care records; meeting needs (interpretation, translation, alternative formats); review." },
  ],
  versionHistory: [
    { version: "4.0", date: "2026-01-10", changes: "Full review; expanded trans and non-binary guidance; strengthened reasonable adjustments section; added EqIA process; updated Accessible Information Standard reference." },
    { version: "3.8", date: "2025-04-01", changes: "Added cultural and religious care examples; updated protected characteristics definitions." },
    { version: "3.5", date: "2024-01-01", changes: "Revised to align with updated CQC EDI expectations and Equality Act case law." },
  ],
};
