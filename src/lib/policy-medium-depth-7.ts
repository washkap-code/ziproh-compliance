/**
 * Medium-depth policy content — batch 7.
 * Mental Health & Wellbeing, Business Continuity, Communication,
 * Continence Management, Registered Manager Accountability.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// EFF-013  Mental Health & Wellbeing Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF013_CONTENT: DocumentContent = {
  title: "Mental Health & Wellbeing Policy",
  policyId: "EFF-013",
  version: "3.2",
  effectiveDate: "2026-03-30",
  reviewDate: "2027-03-30",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] whose care and support needs include mental health and psychological wellbeing. This policy also covers the mental health and wellbeing of staff, recognising that a psychologically healthy workforce is fundamental to the delivery of high-quality care.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure mental health and wellbeing needs are assessed, documented, and reviewed for all service users.",
        "Ensure referral pathways to community mental health services, GP, and psychology are clearly documented.",
        "Promote a positive workplace culture that supports staff mental health.",
        "Ensure a Mental Health First Aider (or equivalent) is available to staff.",
        "Review mental health-related incidents and near misses at governance meetings.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Recognise signs of deteriorating mental health in service users and report promptly.",
        "Engage with mental health and wellbeing training within induction.",
        "Support service users' mental health using the approaches documented in their care plan.",
        "Seek support for their own mental health if needed — [ORGANISATION_NAME] has an Employee Assistance Programme.",
        "Treat service users' mental health needs with the same dignity and seriousness as physical health needs.",
      ],
    },
  ],
  legislation: [
    "Mental Health Act 1983 (as amended by the Mental Health Act 2007) — compulsory detention and treatment",
    "Mental Capacity Act 2005 — capacity and best interest decisions for those whose mental illness affects decision-making",
    "Care Act 2014 — well-being principle; mental health as a component of overall well-being",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Equality Act 2010 — mental illness as a protected characteristic (disability) where it has a substantial long-term effect",
    "NICE Guideline CG90 — Depression in adults (2009, updated 2022); NICE NG185 — Anxiety disorders (2011, updated 2023)",
  ],
  definitions: [
    { term: "Mental Health", definition: "A state of wellbeing in which a person can realise their potential, cope with the normal stresses of life, work productively, and contribute to their community. Mental health exists on a continuum — the absence of a diagnosed mental health condition does not mean optimal mental health." },
    { term: "Mental Illness", definition: "A diagnosable condition affecting a person's thinking, feeling, behaviour, or mood. Common conditions in care settings include: depression, anxiety, bipolar disorder, schizophrenia, personality disorder, and post-traumatic stress disorder. Mental illness does not automatically mean the person lacks capacity." },
    { term: "Psychological Wellbeing", definition: "The broader dimension of mental health that encompasses emotional wellbeing, life satisfaction, sense of purpose, positive relationships, and personal growth. Supporting psychological wellbeing is a care goal alongside managing diagnosed mental health conditions." },
    { term: "Crisis", definition: "A state of acute psychological distress in which a person's usual coping mechanisms have been overwhelmed. A mental health crisis may include acute suicidality, psychotic episode, severe self-harm, or a breakdown in a person's ability to manage daily functioning. Crisis requires urgent response." },
    { term: "Recovery", definition: "In mental health, recovery does not necessarily mean a return to pre-illness functioning — it means living a meaningful and satisfying life as defined by the person themselves, despite the continuing presence or risk of recurrence of mental health symptoms." },
  ],
  sections: [
    {
      title: "Assessment and Care Planning",
      body: "The mental health and psychological wellbeing of every service user must be assessed on admission and reviewed at every care review. The assessment must identify:\n• Any diagnosed mental health conditions and current treatment.\n• Current mental state — mood, anxiety levels, thought content, perception, behaviour.\n• Social factors affecting mental health: isolation, bereavement, family relationships, financial concerns.\n• Protective factors: activities, relationships, spirituality, sense of purpose.\n• Risk factors: history of self-harm, suicide attempts, substance use.\n• Current medication for mental health, including side effects to monitor.\n\nThe care plan must include a Mental Health and Wellbeing section that documents: the person's own goals for their mental health; the strategies that help them; their early warning signs of deterioration; and the agreed escalation plan if their mental health deteriorates.",
      practiceBox: "Asking a service user directly about their mental health is not dangerous — it opens a conversation, it does not create risk. Many people with mental health needs feel relieved when a care worker asks 'how are you feeling in yourself lately?' Use open questions, listen actively, and follow up what you hear. Record significant conversations in the care notes.",
    },
    {
      title: "Recognising Deterioration",
      body: "Early recognition of deteriorating mental health enables timely intervention that can prevent crisis. Staff must be alert to the following signs, which should be reported to the senior on duty:\n\nChanges in mood or affect:\n• Persistent low mood, tearfulness, or hopelessness lasting more than 2 weeks.\n• Marked elevation of mood, increased energy, reduced sleep — possible mania or hypomania.\n• Increased irritability, agitation, or emotional dysregulation.\n\nChanges in thought and perception:\n• Expressed ideas of worthlessness, guilt, or hopelessness.\n• Apparent response to hallucinations (appearing to hear or see things others cannot).\n• Paranoid or persecutory beliefs.\n• Any expressed thoughts of self-harm or suicide.\n\nChanges in behaviour:\n• Withdrawal from activities or social contact.\n• Neglect of personal hygiene or self-care.\n• Changes in eating or sleeping patterns.\n• Increased use of alcohol or substances.\n• Self-harming behaviour.",
      warningBox: "Any expression of suicidal ideation — including indirect statements such as 'I don't want to be here anymore' or 'everyone would be better off without me' — must be taken seriously. Do not dismiss it as 'attention-seeking'. Report to the senior on duty immediately, remain with the person if safe to do so, and ensure the Registered Manager is informed. Call 999 if there is immediate risk.",
    },
    {
      title: "Escalation and Referral",
      body: "When a service user's mental health is deteriorating, the escalation pathway is:\n\n• Routine concern (change in mood/behaviour without immediate risk): inform senior on duty; document in care record; inform the key worker; consider GP referral at the next working day.\n• Moderate concern (sustained deterioration, expressed distress, emerging risk): same-day GP contact; consider referral to community mental health team (CMHT); increase monitoring frequency; inform family with consent.\n• Urgent concern (active self-harm, expressed suicidal intent, acute psychosis, significant risk of harm): contact GP or 111 immediately; consider calling 999 if risk is immediate; do not leave the person alone; notify the Registered Manager.",
    },
    {
      title: "Supporting Wellbeing — Positive Approaches",
      body: "Managing mental health conditions requires clinical input, but supporting psychological wellbeing is within the direct care role. Evidence-based approaches that staff can use in everyday care include:\n\n• Meaningful activity — occupation and purpose are protective factors for mental health. Activities should be matched to the person's interests and abilities, not generic group activities.\n• Social connection — isolation is a major risk factor for depression. Support opportunities for social engagement, contact with family and friends, and peer relationships.\n• Physical health — physical and mental health are closely linked. Supporting physical activity, good nutrition, sleep, and management of physical health conditions all supports mental health.\n• Autonomy and control — loss of control over daily life is a significant contributor to poor mental health in care settings. Maximise choice and self-determination wherever possible.\n• Hope and recovery focus — staff attitudes matter. A recovery-oriented approach assumes that improvement is possible and supports the person's own goals.",
    },
    {
      title: "Staff Mental Health and Wellbeing",
      body: "[ORGANISATION_NAME] recognises that care work can be emotionally demanding and that staff mental health affects the quality of care delivered. [ORGANISATION_NAME]'s commitments to staff mental health include:\n\n• Employee Assistance Programme (EAP): free, confidential counselling and support available to all staff.\n• Mental Health First Aiders: trained staff who can provide initial support and signposting for colleagues experiencing mental health difficulties.\n• Supervision: regular 1:1 supervision provides a supported space to discuss the emotional demands of care work.\n• Psychological safety: staff are encouraged to raise concerns, including about their own wellbeing, without fear of judgement or reprisal.\n• Post-incident support: staff involved in serious incidents, including deaths and episodes of violence, are offered structured debrief and access to professional support.\n\nLine managers are expected to proactively check in with their team members' wellbeing, not only respond reactively when concerns are raised.",
    },
    {
      title: "Ligature Risk Assessment",
      body: "A ligature risk is the risk of a person using an anchor point and a ligature (rope, cord, tie, belt, bedsheet, or any item that can be used to apply constriction) to attempt to hang or strangle themselves. Ligature risks are present in all care environments and require specific assessment and management, particularly in settings that support people with mental health needs, learning disabilities, or a history of self-harm or suicidal ideation.\n\nThis section applies to [ORGANISATION_NAME]'s services where service users may have mental health needs, a history of self-harm or suicide attempts, or where there is a risk of exploitation or coercion (including county lines involvement and modern slavery).",
      subSections: [
        {
          heading: "Ligature Risk Assessment Framework",
          body: "A ligature risk assessment must be completed for every environment in which [ORGANISATION_NAME] provides care where there is an identified or potential risk. The assessment identifies:\n\n• Ligature anchor points: door hinges, window handles, shower rails, radiators, bed frames, hooks, door handles, curtain rails, light fittings, furniture corners.\n• Ligature materials available: curtains, blind cords, telephone cords, extension cables, dressing gown cords, belts, clothing.\n• The vulnerability of service users in the environment: does any service user have a current or historical risk of self-harm or suicide?\n• Existing controls and mitigations.\n• Residual risk level and required additional controls.\n\nLigature risk assessments must be reviewed following any self-harm or suicide attempt incident, when a new service user with relevant risk factors is admitted, and at least annually.",
          warningBox: "In settings where any service user has a current risk of self-harm or suicide, the ligature risk assessment is a live document — not a tick-box exercise. Identified high-risk anchor points (including shower rails and door hinges in bathrooms, which are consistently the highest risk locations) must have controls in place. The Registered Manager must ensure that the risk assessment drives action.",
        },
        {
          heading: "Environmental Risk Categories",
          body: "Ligature anchor points are categorised by risk level:\n\n• High risk: anchor points in bathrooms and bedrooms where the person is likely to be alone and unsupervised. Requires anti-ligature fittings or compensatory care plan measures (e.g. hourly checks, removal of accessible ligatures from the environment).\n• Medium risk: anchor points in communal areas where staff are present but observation is not constant. Requires assessment and may require modification.\n• Lower risk: anchor points only accessible with significant effort. Requires monitoring.\n\nFor each identified risk, the assessment must specify: whether physical modification is required; what care plan controls are in place (observation levels, removal of personal items at risk); and who is responsible for monitoring.",
        },
        {
          heading: "Ligature Risk in Domiciliary Care Settings",
          body: "Where [ORGANISATION_NAME] provides care in service users' own homes, full environmental control is not possible. In these settings, the ligature risk assessment focuses on:\n• Identifying whether the service user has a known or emerging risk of self-harm or suicide.\n• Documenting the home environment risks for reference.\n• Agreeing with the service user (and family/carers where appropriate) practical measures to reduce risk without being intrusive.\n• Ensuring that staff visiting the home know the risk level and are equipped to respond if they find the service user in a crisis.\n• Agreeing check-in procedures and what to do if the service user does not answer.",
        },
      ],
    },
    {
      title: "Self-Neglect Procedure",
      body: "Self-neglect is the failure of a person to care for themselves to a degree that it threatens their personal health, safety, and well-being. It is explicitly recognised as a category of adult abuse and neglect under the Care Act 2014 Statutory Guidance (Chapter 14), and must be addressed through the safeguarding framework where it meets the criteria for a Section 42 enquiry.\n\nSelf-neglect is among the most challenging situations in social care — it involves navigating between a person's right to autonomy and self-determination (including the right to make unwise choices) and the duty of care to protect a person at risk.",
      subSections: [
        {
          heading: "Definition and Presentations",
          body: "Self-neglect includes:\n• Poor self-care: neglect of personal hygiene, nutrition, or medical needs in a way that threatens health.\n• Hoarding: an inability to discard possessions to the extent that it compromises the person's safety or health.\n• Refusal of services: declining care, treatment, or support in a way that leads to deterioration of health.\n• Self-imposed isolation: withdrawal from all social contact and community support.\n\nSelf-neglect must be distinguished from a capacitated adult's autonomous choice to live in a way that others might not approve of — a person who makes informed, capacitated decisions about their lifestyle is not a safeguarding concern simply because their choices are unconventional. The safeguarding threshold is reached when self-neglect poses a serious risk to health or safety and/or the person may lack the mental capacity to make an informed decision about their care.",
        },
        {
          heading: "Assessment Approach",
          body: "When staff observe signs of self-neglect, the assessment process must:\n\n1. Mental Capacity Act assessment: establish whether the person has capacity to make decisions about their self-care. A person may have capacity for some decisions but not others. Capacity assessment must be decision-specific and time-specific.\n2. Risk assessment: assess the level of risk to health and safety — is the situation an immediate risk, a medium-term risk, or a chronic but manageable risk?\n3. Engagement: attempt to build a relationship and engage the person in understanding the concerns and exploring their own wishes and goals.\n4. Multi-agency consultation: involve the GP, community mental health team, social care, and any other relevant agencies in a coordinated approach.\n5. Safeguarding referral: where the criteria are met (adult at risk; experiencing or at risk of abuse or neglect; unable to protect themselves due to care and support needs), refer to the local authority safeguarding adults team under Section 42 of the Care Act 2014.",
          practiceBox: "Self-neglect cases often benefit from a 'Making Safeguarding Personal' approach — rather than focusing on what the person should do, focus on what they want to achieve for themselves. Sometimes the most effective intervention is a consistent, trusted relationship with one key worker, over months or years, rather than a formal safeguarding process that the person resists.",
        },
        {
          heading: "Escalation to Safeguarding",
          body: "Self-neglect must be referred to the local authority safeguarding adults team where:\n• The person lacks capacity to make informed decisions about their self-care and the self-neglect poses a serious risk.\n• The person has capacity but the level of self-neglect is life-threatening and they are unable to engage with any services.\n• There are concerns that the self-neglect may be related to coercion, control, exploitation, or mental illness requiring compulsory intervention.\n• Previous attempts at voluntary engagement have failed and the situation is deteriorating.\n\nThe Registered Manager must document all assessments, interventions, and rationale for decisions in cases of self-neglect. Where a decision is made not to refer despite identified risk (because the person has capacity and is making an autonomous choice), this decision must be clearly documented with the reasoning and reviewed regularly.",
          warningBox: "Self-neglect has been identified as a factor in multiple Safeguarding Adults Reviews (SARs) in which a person died. In many of these cases, agencies identified the risk but failed to refer to safeguarding or failed to coordinate a multi-agency response. If in doubt, refer — the local authority safeguarding team can decide whether to proceed with an enquiry. Referring is not the same as removing the person's autonomy.",
        },
      ],
    },
    {
      title: "Mental Health Crisis Escalation — Service-Specific Procedures",
      body: "Where [ORGANISATION_NAME] supports service users with mental health needs — including in supported living, extra care, and mental health step-down settings — staff must be familiar with service-specific mental health crisis escalation pathways. This section supplements the general escalation procedure in section 3 with the specific legal powers and clinical pathways relevant to mental health crises.",
      subSections: [
        {
          heading: "Section 136 of the Mental Health Act 1983",
          body: "Section 136 of the Mental Health Act 1983 (as amended by the Policing and Crime Act 2017) gives police constables the power to remove a person from a public place to a Place of Safety for assessment where the constable reasonably believes the person to be suffering from a mental disorder and to be in immediate need of care or control.\n\nKey changes following the 2017 Act:\n• A private dwelling is NOT a public place for the purposes of Section 136 — police cannot use Section 136 powers inside a person's home. Where a person is in crisis in their home and police attendance is required, the mental health assessment must be arranged in a different way (e.g. Mental Health Act assessment under Section 135).\n• The maximum duration of a Section 136 detention is 24 hours (reduced from 72 hours).\n• A child (under 18) may not be detained in a police station as a Place of Safety.\n• A person detained under Section 136 must be assessed by an Approved Mental Health Professional (AMHP) and a doctor as soon as practicable.\n\nStaff response when a service user is detained under Section 136:\n• Notify the Registered Manager immediately.\n• Cooperate with police — provide relevant information about the person's care and support needs, medication, and known triggers.\n• Notify next of kin or advocate (with the person's consent or in their best interests).\n• Document all events in the care record.\n• Arrange continuity of care arrangements during the person's absence.",
          legalBox: "Section 136 is a detention power, not a safeguarding power. The person is not under arrest. Staff should ensure that any care records or medication information needed by the assessment team at the Place of Safety are available promptly — this can significantly speed up the assessment process and reduce the person's time in detention.",
        },
        {
          heading: "Section 135 of the Mental Health Act 1983",
          body: "Section 135 allows an Approved Mental Health Professional (AMHP) to apply to a magistrate for a warrant authorising police to enter premises (including a private dwelling) to remove a person to a Place of Safety for assessment, where there is reason to believe a person suffering from a mental disorder is being ill-treated, neglected, or kept otherwise than under proper control, or is living alone and unable to care for themselves.\n\nThis power is relevant where [ORGANISATION_NAME] has concerns about a person in their own home who is in a mental health crisis and refusing all support. The AMHP is the lead professional — [ORGANISATION_NAME]'s role is to share information with the AMHP and cooperate with the process.",
        },
        {
          heading: "Crisis Team Referral and CRISIS Pathway",
          body: "The Crisis Resolution and Home Treatment Team (CRHTT) — often referred to as the Crisis Team — provides intensive community-based mental health support as an alternative to hospital admission. The Crisis Team can assess, manage, and monitor a person in a mental health crisis in their own environment.\n\nCrisis Team referral is typically made by:\n• The GP (same-day urgent referral).\n• The community mental health team (CMHT) if the person is known to them.\n• Hospital A&E where the person has presented in crisis.\n• NHS 111 (Option 2 for mental health — available nationally from 2024).\n\n[ORGANISATION_NAME]'s staff should:\n• Know the local Crisis Team contact number and include it in the appendices of this policy.\n• Contact the Crisis Team directly (via NHS 111 or the local number) where a person is in crisis and not known to the CMHT.\n• Not leave a person in acute crisis without arranging an assessment or crisis response.\n• Document all contacts made and responses received.",
        },
        {
          heading: "Hospital-Based Place of Safety (HBPoS)",
          body: "The Hospital-Based Place of Safety (HBPoS) is the designated healthcare facility to which a person detained under Section 135 or 136 is taken for assessment. Since the introduction of the Policing and Crime Act 2017, HBPoS is the preferred Place of Safety in virtually all circumstances — police stations are only used as a Place of Safety in genuinely exceptional circumstances and are never appropriate for under-18s.\n\nWhere a service user is taken to the HBPoS, [ORGANISATION_NAME] should:\n• Provide the HBPoS assessment team with a care summary, medication list, and emergency contact details.\n• Maintain contact with the HBPoS to understand the outcome of the assessment.\n• Prepare for the person's return if they are not admitted — ensure care plan and risk assessment are reviewed following the crisis episode.\n• Consider requesting a discharge planning meeting if the person is admitted to hospital.",
        },
        {
          heading: "Post-Crisis Review",
          body: "Following any mental health crisis — whether or not it resulted in hospital admission — [ORGANISATION_NAME] must conduct a post-crisis review within 5 working days. The review must:\n• Identify what triggered the crisis and whether early warning signs were missed.\n• Review whether the person's care plan adequately addressed their mental health needs.\n• Consider whether any changes to the care plan, risk assessment, or support package are required.\n• Ensure staff involved in the crisis are offered debrief and support.\n• Document all findings and actions in the care record.\n\nRecurrent crisis presentations without a review and updated care plan are a governance concern and will be escalated to the Provider.",
          practiceBox: "The period immediately following a mental health crisis — sometimes called the 'post-crisis vulnerability window' — carries elevated risk of further crisis or suicide attempt. Staff should maintain heightened observation and support during this period and ensure the crisis team or CMHT is aware of the person's return home from any crisis assessment.",
        },
      ],
    },
  ],
  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "eff-012 — Positive Behaviour Support Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-011 — Violence & Aggression Policy",
    "car-001 — Dignity & Respect Policy",
  ],
  appendices: [
    { title: "Appendix A — Mental Health Crisis Contacts", content: "Local CMHT contact details; crisis line numbers; NHS 111; Samaritans (116 123); local hospital A&E; out-of-hours GP. Updated annually." },
    { title: "Appendix B — Wellbeing Assessment Tool", content: "Simple structured wellbeing assessment for care plan integration: mood (1–10); sleep; appetite; social engagement level; activities participated in; expressed concerns; protective factors identified; any risk indicators; staff completing assessment; date." },
  ],
  versionHistory: [
    { version: "3.2", date: "2026-03-30", changes: "Added staff wellbeing section; updated NICE guideline references; strengthened suicide risk response guidance." },
    { version: "3.0", date: "2025-05-01", changes: "Full review; added recovery-oriented approach section; updated escalation pathway." },
    { version: "2.7", date: "2024-02-01", changes: "Added psychological wellbeing dimension; updated deterioration recognition indicators." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-007  Business Continuity Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL007_CONTENT: DocumentContent = {
  title: "Business Continuity Policy",
  policyId: "WL-007",
  version: "2.7",
  effectiveDate: "2026-02-10",
  reviewDate: "2027-02-10",
  approvedBy: "Registered Manager / Provider",
  scope: "All business continuity risks and contingency plans for [ORGANISATION_NAME]. This policy applies to all settings and services operated by [ORGANISATION_NAME] and covers the main categories of disruption: staffing, IT and communications, utilities, premises, and supply chain.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain a current Business Continuity Plan (BCP) identifying key risks, impact assessments, and contingency actions.",
        "Test the BCP at least annually through a table-top exercise or live drill.",
        "Ensure all staff know the key elements of the BCP relevant to their role.",
        "Activate the BCP when a disruptive event occurs and log all actions taken.",
        "Report to CQC any event that threatens the ability to carry on regulated activities.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Know how to report a business continuity event to the Registered Manager or on-call.",
        "Follow the relevant contingency procedure when instructed by the Registered Manager.",
        "Keep personal contact details up to date so they can be contacted in an emergency.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance (requires robust risk management systems)",
    "Civil Contingencies Act 2004 — national framework for emergency planning and business continuity",
    "Health and Safety at Work etc. Act 1974 — employer duty of care during emergency situations",
    "Care Quality Commission (Registration) Regulations 2009, Regulation 14 — notification of events affecting service continuity",
    "NHS England — Emergency Preparedness, Resilience and Response (EPRR) Framework (applicable to NHS-funded providers)",
  ],
  definitions: [
    { term: "Business Continuity", definition: "The capability of [ORGANISATION_NAME] to continue delivering regulated activities at predefined acceptable levels following a disruptive incident." },
    { term: "Business Impact Analysis (BIA)", definition: "An assessment of the potential impact of each identified disruption scenario on [ORGANISATION_NAME]'s ability to deliver care. The BIA determines which services are critical (must be maintained at all times) and which can be scaled back or suspended temporarily." },
    { term: "Recovery Time Objective (RTO)", definition: "The maximum acceptable length of time that a critical function can be interrupted before the impact on service users becomes unacceptable. For direct care delivery, the RTO is typically very short — hours rather than days." },
    { term: "Contingency", definition: "A pre-planned alternative arrangement that enables a critical function to continue when the normal means of delivering it is unavailable. A good contingency is tested, documented, and known to relevant staff before it is needed." },
  ],
  sections: [
    {
      title: "Risk Identification — Key Threats",
      body: "The Business Continuity Plan at [ORGANISATION_NAME] addresses the following categories of disruption risk:",
      subSections: [
        {
          heading: "Staffing Disruption",
          body: "Scenarios: mass sickness (influenza, norovirus), severe weather preventing staff from reaching work, industrial action, sudden loss of a key individual (Registered Manager absence). Contingencies: bank and agency staff framework agreements; mutual aid arrangements with other local care providers; on-call management rota; succession plan for the Registered Manager role.",
        },
        {
          heading: "IT and Communications Failure",
          body: "Scenarios: internet outage, care management system failure, ransomware attack, telephone system failure. Contingencies: paper-based care records backup (maintained and accessible even when digital systems are unavailable); offline copies of key contacts and emergency procedures; mobile phone backup for communications; IT disaster recovery plan with system recovery timescales; data backup schedule (daily, offsite).",
        },
        {
          heading: "Utilities Failure",
          body: "Scenarios: power cut, gas supply failure, water supply interruption. Contingencies: emergency generator for essential systems (heating, lift, medical equipment); emergency contacts for utility providers; contingency heating and water supply plan; battery backup for critical medical equipment; service users identified who are at risk from temperature extremes.",
        },
        {
          heading: "Premises Unavailability",
          body: "Scenarios: fire, flood, structural damage, environmental contamination. Contingencies: emergency evacuation plan and assembly point; arrangements for temporary relocation of service users if required (hospital liaison, neighbouring care provider, local authority emergency placement); insurance arrangements; out-of-hours estates contact.",
        },
        {
          heading: "Supply Chain Disruption",
          body: "Scenarios: medication supply failure, food supply disruption, PPE shortage, medical consumables unavailability. Contingencies: minimum 2-week stock of essential medications held on-site where safe to do so; secondary supplier contacts for food and consumables; emergency medication supply arrangement with pharmacy; PPE emergency reserve stock.",
        },
      ],
    },
    {
      title: "The Business Continuity Plan",
      body: "The Business Continuity Plan is a living document maintained by the Registered Manager. It must contain at minimum:\n• A risk register of business continuity threats with likelihood and impact scores.\n• For each significant risk: the trigger event; the immediate actions; the contingency arrangement; the person responsible; the escalation contacts.\n• A contact directory: key staff, provider, utility providers, local authority emergency duty, NHS emergency contacts, neighbouring care providers for mutual aid.\n• The communications plan: how staff, service users, and families will be informed of a disruption and updates.\n• Recovery procedures: how normal operations will be restored.\n\nThe BCP must be reviewed and updated at least annually and following any actual business continuity event.",
      practiceBox: "The most common business continuity failure in care is not having a plan — it is having a plan that staff cannot find or do not know exists. Keep the BCP accessible (not locked in a manager's drawer) and include the key emergency contacts and immediate actions on a laminated card posted in the staff room and at the nurses' station.",
    },
    {
      title: "Major Incident Response",
      body: "When a major disruptive event occurs, the Registered Manager activates the BCP and follows the major incident response procedure:",
      procedure: [
        "Assess the immediate impact on service user safety. Ensure all service users are safe first.",
        "Activate the relevant contingency plan for the type of disruption.",
        "Contact the provider and notify them of the situation.",
        "Notify CQC if the event threatens the ability to carry on regulated activities.",
        "Communicate with staff: deploy contingency staffing if needed; brief all on-shift staff on the situation and the plan.",
        "Communicate with service users and families: keep them informed in a calm, factual way.",
        "Keep a log of all actions taken, decisions made, and communications sent — this is essential for the post-event review.",
        "Liaise with external agencies as required: local authority emergency planning, NHS, utility providers.",
        "When the immediate disruption is resolved: review the BCP in light of the event and update as needed.",
      ],
    },
    {
      title: "Testing and Training",
      body: "A Business Continuity Plan that has never been tested is an untested assumption. [ORGANISATION_NAME] tests the BCP at minimum annually:\n• Table-top exercise: the Registered Manager and senior staff walk through a simulated scenario — identifying gaps in the plan, clarifying responsibilities, and testing the contacts list.\n• Periodic live tests: where safe and appropriate, elements of the plan are tested in live conditions — for example, testing the paper-based records backup during a planned digital system maintenance window.\n\nFindings from tests are documented and used to update the BCP. Staff are briefed on the key BCP elements relevant to their role during induction and at annual update training.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-017 — CQC Registration & Regulatory Compliance Policy",
    "saf-008 — Fire Safety Policy",
    "wl-008 — Staffing & Deployment Policy",
    "saf-018 — Environmental Safety & Maintenance Policy",
  ],
  appendices: [
    { title: "Appendix A — Business Continuity Risk Register", content: "Tabular register: risk category; scenario description; likelihood (1–5); impact (1–5); risk score; current controls; contingency plan reference; owner; last reviewed." },
    { title: "Appendix B — Emergency Contact Directory", content: "Key contacts: provider (name, mobile, out-of-hours); on-call manager rota; bank staff agency (24hr); local authority emergency duty team; NHS 111; local hospital; utility emergency lines (gas, electric, water); CQC notification line; insurance emergency line. Printed and laminated; reviewed quarterly." },
  ],
  versionHistory: [
    { version: "2.7", date: "2026-02-10", changes: "Added ransomware/IT disruption section; updated CQC notification requirement; added testing and training section." },
    { version: "2.5", date: "2025-04-01", changes: "Added supply chain disruption category; updated utility failure contingencies." },
    { version: "2.2", date: "2024-01-20", changes: "Full review; adopted Business Impact Analysis framework; updated Emergency Contact Directory." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-003  Communication Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR003_CONTENT: DocumentContent = {
  title: "Communication Policy",
  policyId: "CAR-003",
  version: "2.5",
  effectiveDate: "2026-01-30",
  reviewDate: "2027-01-30",
  approvedBy: "Registered Manager",
  scope: "All communication between [ORGANISATION_NAME] and service users, their families and representatives, other professionals, and between staff members within [ORGANISATION_NAME]. This policy applies to all forms of communication including verbal, written, electronic, and non-verbal.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure every service user has a documented communication profile in their care plan.",
        "Ensure accessible formats are available for all key documents.",
        "Maintain a directory of local interpreting and translation services.",
        "Ensure staff complete communication skills and accessible communication training.",
        "Review communication as a theme in service user and carer feedback.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Communicate with every service user in the way that works best for them, as documented in their communication profile.",
        "Use accessible formats, interpreters, or communication aids when needed.",
        "Never rely on family members to interpret for service users in clinical or care-related conversations without the service user's explicit consent.",
        "Record significant communications in the care record.",
        "Report any communication barriers or concerns to the senior on duty.",
      ],
    },
  ],
  legislation: [
    "Equality Act 2010 — duty to make reasonable adjustments, including accessible communication",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care (includes communication needs)",
    "Mental Capacity Act 2005 — obligation to use all practicable steps to support communication before assessing capacity",
    "Care Act 2014 — assessment of communication and sensory needs as part of care needs assessment",
    "The Accessible Information Standard (2016) — NHS and social care duty to provide information in accessible formats",
  ],
  definitions: [
    { term: "Communication Profile", definition: "A person-centred document within the care plan that describes: the service user's preferred communication method(s); any communication aids used; languages spoken; literacy level; sensory needs (hearing, vision); any speech or language difficulties; and what helps and what hinders communication with this person." },
    { term: "Accessible Information", definition: "Information provided in a format that the individual can understand and use. This may include: large print; Easy Read; audio recording; Braille; BSL interpretation; translated documents; or digital formats compatible with assistive technology." },
    { term: "Augmentative and Alternative Communication (AAC)", definition: "Any device, system, or technique that supplements or replaces spoken communication for someone who cannot rely on natural speech alone. Examples: PECS (Picture Exchange Communication System); Makaton signs; communication boards; speech generating devices." },
    { term: "Interpreter", definition: "A qualified professional who converts spoken or signed communication between two languages in real time. Professional interpreters must be used for clinical and care-related conversations where the service user's first language is not English — family members should not interpret unless the service user has given explicit, informed consent after being offered a professional service." },
  ],
  sections: [
    {
      title: "Communication Profiles",
      body: "Every service user at [ORGANISATION_NAME] must have a communication profile completed on admission and reviewed at every care review. The profile captures:\n\n• Preferred language and any communication aids used.\n• Hearing and vision status — any aids (hearing aids, glasses) and their condition.\n• Literacy level and reading ability.\n• Preferred format for written information (large print, Easy Read, audio, etc.).\n• Speech and language needs — any difficulties, speech patterns staff should be aware of.\n• Non-verbal communication signals — how the person communicates pain, distress, happiness, or refusal.\n• What helps communication: time of day, environment, familiar faces, visual cues.\n• What hinders communication: background noise, rushed pace, certain topics.\n\nThe communication profile is shared with all staff who interact with the service user and is updated whenever needs change.",
      practiceBox: "Communication profiles are most powerful when completed with the service user (and their family where helpful) rather than about them. Ask: 'How do you prefer people to communicate with you? What makes it harder? What helps?' The answer often reveals things that formal assessments miss.",
    },
    {
      title: "Accessible Information",
      body: "Under the Accessible Information Standard (2016), [ORGANISATION_NAME] must:\n• Ask every service user about their communication and information needs.\n• Record those needs in the care plan.\n• Flag them so they are visible to all relevant staff.\n• Share them with other services and professionals involved in the person's care.\n• Act on them — provide information in the format the person needs.\n\nAccessible formats [ORGANISATION_NAME] can provide or arrange:\n• Large print (minimum 14pt, Arial or equivalent sans-serif font).\n• Easy Read (short sentences, plain language, supported by images).\n• Audio recording of key information.\n• BSL video interpretation for Deaf service users.\n• Translated documents — via professional translation service (not machine translation for clinical documents).\n• Digital accessible formats compatible with screen readers.",
      legalBox: "The Equality Act 2010 requires [ORGANISATION_NAME] to make reasonable adjustments to remove barriers for disabled people. A service user who cannot access care information because it is not available in an accessible format is experiencing a barrier that [ORGANISATION_NAME] has a legal duty to address. 'We don't have a large print version' is not an acceptable response — create one.",
    },
    {
      title: "Working with Interpreters",
      body: "When a service user's primary language is not English, or when they use British Sign Language, [ORGANISATION_NAME] must arrange professional interpretation for all significant care conversations including: initial assessments; care plan reviews; consent discussions; capacity assessments; complaints discussions; and disclosure of serious information.\n\nProfessional interpreters must be used because:\n• Family members may consciously or unconsciously distort or filter information.\n• A family member may have an interest in the outcome of the conversation.\n• The service user may not feel free to disclose sensitive information in front of a family member.\n• Safeguarding concerns involving a family member must never be discussed through that family member.\n\nWhere a professional interpreter is unavailable at short notice, Language Line or equivalent telephone interpretation is an acceptable interim measure. Staff must never conduct substantive clinical or care conversations through a family member without explicit, informed consent from the service user.",
    },
    {
      title: "Communication in Practice — Good Practice Principles",
      body: "Good communication is a care skill, not a luxury. The following principles apply to all interactions with service users at [ORGANISATION_NAME]:",
      bulletPoints: [
        "Be present — give the person your full attention. Make eye contact (if culturally appropriate). Put down equipment. Sit or kneel to the person's eye level where possible.",
        "Go at the person's pace — allow enough time. Slow your own pace. Pause and allow silence.",
        "Use clear, simple language — avoid jargon, medical terms, and long sentences. Use short sentences and check understanding.",
        "Check understanding without testing — ask 'Can you tell me what you're going to do?' rather than 'Did you understand?'",
        "Support with visuals — pictures, objects, pointing, and gestures support verbal communication for many people.",
        "Respect — never speak about a person in the third person while they are present. Never speak to a carer as if the service user is not there.",
        "Dignity in difficult conversations — discuss sensitive matters in private. Never discuss personal care, medical information, or complaints in a communal area.",
      ],
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "car-002 — Equality, Diversity & Inclusion Policy",
    "eff-002 — Mental Capacity Act Policy",
    "car-008 — Advocacy Policy",
    "eff-001 — Care Planning Policy",
  ],
  appendices: [
    { title: "Appendix A — Communication Profile Template", content: "Structured insert for the care plan: preferred language; communication aids; hearing status and aids; vision status and aids; literacy level; preferred information format; speech and language needs; non-verbal signals; what helps; what hinders; interpreter required (Y/N); interpreter provider; last reviewed." },
    { title: "Appendix B — Accessible Format Request Log", content: "Log for recording requests for accessible information: date; service user; format requested; format provided; date provided; any outstanding actions." },
  ],
  versionHistory: [
    { version: "2.5", date: "2026-01-30", changes: "Added Accessible Information Standard compliance section; strengthened interpreter guidance; updated AAC definition." },
    { version: "2.3", date: "2025-04-01", changes: "Added non-verbal communication signals to communication profile; updated good practice principles." },
    { version: "2.0", date: "2024-02-01", changes: "Full review; aligned with NHS Accessible Information Standard; added Easy Read and BSL provisions." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-008  Continence Management Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF008_CONTENT: DocumentContent = {
  title: "Continence Management Policy",
  policyId: "EFF-008",
  version: "2.7",
  effectiveDate: "2026-02-05",
  reviewDate: "2027-02-05",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] whose care needs include continence support. This policy applies to all staff involved in personal care and applies to all settings where [ORGANISATION_NAME] provides care. It covers urinary and faecal continence.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all service users with continence needs have a documented continence assessment and management plan.",
        "Ensure referral pathways to continence advisory services, GP, and district nursing are clearly documented and used.",
        "Monitor continence-related incidents (falls related to urgency, catheter-associated UTI, skin breakdown) at governance meetings.",
        "Ensure staff receive continence awareness training within induction.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Implement each service user's individual continence management plan.",
        "Promote dignity and independence in continence care at all times.",
        "Report any change in continence status, signs of UTI, or skin breakdown immediately.",
        "Never refer to continence aids using undignified language — use correct clinical or neutral terms.",
        "Complete fluid intake records for service users at risk of dehydration contributing to continence problems.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 9 — Person-centred care",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 10 — Dignity and Respect",
    "Care Act 2014 — personal dignity as a component of wellbeing",
    "NHS Continuing Healthcare (CHC) Framework — continence needs as a care domain",
    "NICE Guideline CG171 — Urinary incontinence in women (2013, updated 2019); NICE NG123 — Urinary incontinence and pelvic organ prolapse (2019)",
  ],
  definitions: [
    { term: "Continence", definition: "The ability to control bladder and bowel function voluntarily. Continence is a spectrum — from full independence through to full dependence on support from others." },
    { term: "Urinary Incontinence", definition: "Involuntary leakage of urine. Types relevant to care settings: stress incontinence (leakage on exertion); urge incontinence (sudden, strong urge followed by leakage — most common in older adults); overflow incontinence (incomplete bladder emptying leading to dribbling); functional incontinence (physical or cognitive barriers prevent reaching the toilet in time)." },
    { term: "Continence Aid", definition: "Any product used to manage incontinence, including: absorbent pads and pants; bed protection; urinary sheaths; urinary catheters. The type and absorbency of aid must be matched to the individual's need — over-reliance on pads can reduce motivation to maintain continence." },
    { term: "Catheter", definition: "A thin tube inserted into the bladder to drain urine. Indwelling urethral or suprapubic catheters require specific care to prevent catheter-associated urinary tract infection (CAUTI) — a major cause of avoidable hospital admission in care home residents." },
    { term: "Prompted Voiding", definition: "A bladder training technique in which staff prompt the service user at regular intervals to use the toilet, regardless of whether they express a need. Evidence-based for functional incontinence; must be individualised based on a bladder diary." },
  ],
  sections: [
    {
      title: "Continence Assessment",
      body: "Every service user with actual or potential continence needs must have a continence assessment completed on admission and reviewed:\n• At every 3-monthly care review.\n• Following any significant change in continence status.\n• Following a fall where urgency may have been a contributing factor.\n• Following any episode of catheter-associated UTI.\n• After any hospital admission.\n\nThe continence assessment must identify:\n• The type and severity of incontinence.\n• Possible causes (treatable causes should always be excluded first — UTI, constipation, medication side effects, mobility limitations).\n• The impact on the person's daily life and wellbeing.\n• The person's own goals for continence management.\n• Appropriate management approaches (see below).\n• Whether referral to a continence specialist is indicated.",
      practiceBox: "Incontinence is not an inevitable consequence of ageing or disability — it is frequently treatable or improvable. Before accepting that a service user has 'always been incontinent', check: do they have a UTI? Are they constipated? Is their fluid intake adequate? Is a medication causing urinary frequency? Are they getting to the toilet quickly enough given their mobility? Addressing these factors first can dramatically improve continence.",
    },
    {
      title: "Management Approaches",
      body: "The continence management plan must specify the approach(es) to be used for each service user, selected based on the assessment:",
      subSections: [
        {
          heading: "Promoting Continence",
          body: "Promote independence wherever possible. Ensure the service user can access the toilet quickly and safely — address any environmental barriers (distance to toilet, lighting, grab rails). Consider a bedside commode for night use. Ensure adequate fluid intake (minimum 1.5 litres per day — dehydration concentrates urine and irritates the bladder). Limit bladder irritants (caffeine, alcohol).",
        },
        {
          heading: "Prompted Voiding / Timed Toileting",
          body: "Based on a bladder diary (monitoring patterns of voiding and leakage over 3 days), establish an individual prompted voiding schedule. Prompt the person to use the toilet at set intervals — initially every 2 hours; adjusted based on response. Always ask if they need the toilet rather than assuming.",
        },
        {
          heading: "Bladder Training",
          body: "For service users with urge incontinence who have capacity and motivation, bladder training aims to gradually increase the interval between voids. Requires specialist continence advisory input and is not appropriate for all service users.",
        },
        {
          heading: "Containment Products",
          body: "Where incontinence cannot be cured or significantly improved, containment products (pads, pants, sheaths) manage the impact. Products must be matched to individual need — the correct absorbency for the volume of leakage; changed promptly when saturated; never left for extended periods as this causes skin breakdown. Overuse of pads as a substitute for continence promotion is not acceptable.",
        },
        {
          heading: "Catheter Care",
          body: "Indwelling catheters must be managed in line with the catheter care plan: daily cleaning of the meatus and catheter; secure drainage bag (either leg bag or overnight bag); adequate fluid intake to maintain urine output; regular observation for signs of CAUTI (cloudy or offensive urine, haematuria, fever, suprapubic pain, increased confusion in older adults). CAUTI is preventable — hand hygiene and maintaining a closed drainage system are the most important preventative measures.",
        },
      ],
      warningBox: "Leaving a service user in saturated pads or soiled clothing for more than a brief period is a breach of their dignity and a safeguarding concern. It also causes preventable skin breakdown. Continence care must be responsive — not scheduled on a fixed timetable regardless of need.",
    },
    {
      title: "Dignity and Continence",
      body: "Continence care touches on some of the most private and potentially embarrassing aspects of a person's life. The dignity principles below are non-negotiable at [ORGANISATION_NAME]:\n\n• Never discuss a service user's continence needs in a public area or within hearing of other service users.\n• Use correct, neutral language — 'incontinence pad', 'catheter bag'. Do not use infantilising or demeaning terms.\n• Knock and request permission before entering a service user's room for continence care.\n• Offer privacy and maintain dignity during continence care — use screens, close doors, keep as much of the body covered as possible.\n• Never express impatience, disgust, or annoyance — any visible negative reaction from a care worker causes lasting psychological harm.\n• Acknowledge the service user's feelings about their continence — many people find incontinence deeply distressing. Listen, validate, and provide reassurance.",
    },
  ],
  relatedDocuments: [
    "car-001 — Dignity & Respect Policy",
    "eff-001 — Care Planning Policy",
    "eff-003 — Nutrition & Hydration Policy",
    "saf-014 — Pressure Ulcer Prevention & Management Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Bladder Diary Template", content: "3-day chart recording: time; fluid intake (volume and type); time of void (toilet or incontinent episode); volume voided if measurable; urgency score (1–3); any associated symptoms. Used to establish a baseline for continence assessment and prompted voiding scheduling." },
    { title: "Appendix B — Catheter Care Record", content: "Daily care record: catheter type and size; insertion date and planned change date; meatus care performed; drainage bag type and change date; urine colour and appearance; volume output (if recorded); any signs of CAUTI; staff signature." },
  ],
  versionHistory: [
    { version: "2.7", date: "2026-02-05", changes: "Added catheter care section with CAUTI prevention guidance; strengthened dignity principles; updated NICE guideline references." },
    { version: "2.5", date: "2025-05-01", changes: "Added prompted voiding guidance; updated management approaches framework." },
    { version: "2.2", date: "2024-01-15", changes: "Full review; added bladder diary tool; updated continence assessment criteria." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-018  Registered Manager Accountability Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL018_CONTENT: DocumentContent = {
  title: "Registered Manager Accountability Policy",
  policyId: "WL-018",
  version: "3.1",
  effectiveDate: "2026-04-16",
  reviewDate: "2027-04-16",
  approvedBy: "Provider / Board",
  scope: "The Registered Manager of [ORGANISATION_NAME] and all persons involved in the management of the service. This policy sets out the accountability, responsibilities, and fitness requirements of the Registered Manager under the Health and Social Care Act 2008 and associated regulations.",
  responsibilities: [
    {
      role: "Provider / Board",
      duties: [
        "Appoint a Registered Manager who meets the fit and proper person requirements under Regulation 7.",
        "Support the Registered Manager with appropriate resources, authority, and management oversight.",
        "Agree a clear accountability framework with the Registered Manager, including reporting lines and delegated authority.",
        "Ensure the Registered Manager's performance is appraised at least annually.",
        "Notify CQC of any change in Registered Manager within 28 days.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Maintain CQC registration and notify CQC of any changes to personal circumstances required under the Registration Regulations.",
        "Ensure the service meets all CQC fundamental standards at all times.",
        "Maintain their own competence through continuing professional development.",
        "Provide the Provider with regular reports on quality, governance, and risk.",
        "Act within the scope of their delegated authority and escalate matters beyond that scope to the Provider.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008, section 13 — requirement for a registered manager for regulated activities",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 7 — Requirements relating to registered managers",
    "Care Quality Commission (Registration) Regulations 2009 — personal details notification requirements",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 5 — Fit and proper persons: directors (applies to provider organisation)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
  ],
  definitions: [
    { term: "Registered Manager", definition: "An individual registered with CQC to manage a regulated activity at a specific location. Registration is personal and location-specific — a Registered Manager registered at one location cannot manage a different location without separate CQC registration for that location." },
    { term: "Fit and Proper Person", definition: "The standard under Regulation 7 that a Registered Manager must meet. Includes: good character; the relevant qualifications, competence, skills and experience; able to properly perform tasks intrinsic to the management of the regulated activity; not prohibited from managing by CQC or a court." },
    { term: "Registered Manager Agreement", definition: "A formal agreement between the Provider and the Registered Manager setting out the terms of the management relationship, including: delegated authority; reporting requirements; support provided; remuneration; and accountability framework. Recommended as best practice by CQC." },
    { term: "Supernumerary", definition: "Where a Registered Manager is supernumerary, they are counted over and above the working care staff complement. CQC expects that Registered Managers have adequate time for management functions — governance, supervision, audits, care planning oversight — and are not so absorbed in direct care that management responsibilities are neglected." },
  ],
  sections: [
    {
      title: "Fitness Requirements — Regulation 7",
      body: "The Registered Manager at [ORGANISATION_NAME] must meet the Regulation 7 fitness requirements at all times. The Provider must assess fitness at appointment and review it annually. A Registered Manager is fit and proper if they:\n\n• Are of good character.\n• Have the relevant qualifications, competence, skills, and experience for the regulated activity and service type.\n• Are able to properly perform tasks that are intrinsic to the management of the regulated activity.\n• Have not been convicted of a relevant offence (check undertaken prior to appointment and updated via DBS Update Service or periodic rechecking).\n• Are not prohibited from holding the position by CQC, a court order, or a condition of registration.\n• Are not barred from regulated activity with adults or children by the DBS.\n\nWhere a fitness concern arises after appointment — for example, a criminal conviction, a fitness to practise finding from a professional regulator, or a significant governance failure — the Provider must assess whether the Registered Manager continues to meet the Regulation 7 requirements and notify CQC if registration may need to change.",
      legalBox: "CQC has the power to cancel or refuse registration of a Registered Manager who does not meet Regulation 7. The Provider also has accountability — deploying a Registered Manager who does not meet the fitness requirements may place the Provider's own registration at risk under Regulation 5 (Fit and Proper Persons: Directors).",
    },
    {
      title: "Accountability Framework",
      body: "The Registered Manager is accountable to the Provider for the quality and safety of care delivered at the registered location. The accountability framework must be clear, documented, and proportionate:\n\n• Delegated authority: the Registered Manager is delegated day-to-day operational authority for running the service, including staffing decisions, care quality, and compliance with the fundamental standards.\n• Limits of authority: the Registered Manager must be clear on which decisions require Provider approval (e.g. significant expenditure, major service changes, emergency situations affecting the whole service).\n• Reporting lines: the Registered Manager reports to a named Provider representative. Regular reporting must include: quality dashboard metrics; governance meeting minutes; incident trends; CQC feedback; complaints outcomes; staffing and vacancy position.\n• Escalation: the Registered Manager must escalate to the Provider promptly any matter that: poses significant risk to service users; requires Provider-level decision; involves a regulatory concern or enforcement action; or is beyond the Registered Manager's delegated authority.",
    },
    {
      title: "Registered Manager Absence and Succession",
      body: "The Registered Manager's absence must be managed to ensure the service remains compliant with CQC requirements:\n\n• Planned absence (holiday, training): a named deputy must be identified to cover. The deputy must have sufficient authority and competence for the duration of absence. For absences under 28 days, CQC notification is not required unless the deputy is also acting as Registered Manager for another location.\n• Prolonged absence (over 28 days): CQC must be notified within the 28-day period. The Provider must either appoint an interim Registered Manager or apply to CQC to register the deputy or another person.\n• Succession planning: the Provider must maintain a succession plan for the Registered Manager role. This includes: identifying potential internal successors; maintaining up-to-date job descriptions and induction materials for the role; and holding key governance documentation in a format that enables continuity.\n\nA service without a registered manager for an extended period risks CQC enforcement action including conditions on registration or cancellation.",
    },
    {
      title: "CPD and Competence Maintenance",
      body: "The Registered Manager must maintain and develop their competence through continuing professional development (CPD). [ORGANISATION_NAME] supports the Registered Manager's CPD through:\n• Annual appraisal with agreed CPD objectives.\n• Access to relevant training, conferences, and professional networks.\n• Membership of Skills for Care's Registered Manager network and access to peer support.\n• Regular management supervision with the Provider or a nominated senior colleague.\n\nThe Registered Manager is expected to:\n• Keep up to date with changes in legislation, regulation, and guidance relevant to their registered activity.\n• Maintain any professional registration (NMC, HCPC, SWE) required for their role.\n• Complete mandatory and statutory training on the same schedule as other staff.",
      practiceBox: "Skills for Care's Registered Manager Membership provides access to peer support networks, good practice resources, and CPD frameworks. It is free for registered managers in adult social care. Isolation is a risk factor for governance failures — connecting with other Registered Managers provides both practical support and early warning of sector-wide issues.",
    },
    {
      title: "Notifications and CQC Responsibilities",
      body: "The Registered Manager has personal responsibility for ensuring statutory notifications to CQC are made on time. See WL-017 for the full notification schedule. In addition, the Registered Manager must:\n• Keep their own contact details on the CQC Provider Portal up to date.\n• Notify CQC of any conviction, caution, or finding by a professional regulatory body relating to them personally.\n• Notify CQC if they become aware of any matter that may affect their fitness to remain registered.\n• Cooperate fully with CQC inspections, providing access to all premises, records, and staff.\n• Participate in any CQC investigation or enforcement process openly and in a timely manner.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-017 — CQC Registration & Regulatory Compliance Policy",
    "wl-013 — Quality Improvement Policy",
    "wl-002 — Recruitment & Selection Policy",
    "wl-003 — Supervision & Appraisal Policy",
  ],
  appendices: [
    { title: "Appendix A — Registered Manager Fit and Proper Person Assessment", content: "Annual assessment checklist: confirmation of good character (manager self-declaration); DBS check currency; professional registration status; any convictions or cautions in the period; professional regulatory findings; CQC registration status; competence evidence; Provider sign-off." },
    { title: "Appendix B — Registered Manager Absence Cover Plan", content: "Named deputy(ies) for Registered Manager absence; their delegated authority level; any matters requiring Provider escalation during absence; CQC notification trigger (28 days); succession contact list." },
  ],
  versionHistory: [
    { version: "3.1", date: "2026-04-16", changes: "Updated CQC notification section; added Skills for Care Registered Manager Membership reference; strengthened succession planning." },
    { version: "3.0", date: "2025-06-01", changes: "Full review; aligned with CQC Single Assessment Framework; updated Regulation 7 fitness requirements." },
    { version: "2.7", date: "2024-03-01", changes: "Added Registered Manager Agreement guidance; updated absence notification procedure." },
  ],
};
