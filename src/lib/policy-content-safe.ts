import type { DocumentContent } from "./documents";

export const SAFE_CONTENT: Record<string, DocumentContent> = {
  "saf-001": {
    purpose: "[ORGANISATION_NAME] is committed to protecting adults at risk from abuse, neglect and exploitation. This policy sets out the responsibilities of all staff in preventing, recognising and responding to safeguarding concerns, ensuring that the safety and wellbeing of every service user remains paramount at all times.",
    scope: "This policy applies to all staff employed by or contracted to [ORGANISATION_NAME], including permanent, bank, agency, volunteer and student staff. It covers all adults who use or come into contact with the service.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Act as or designate a named Safeguarding Lead for the service",
          "Ensure all safeguarding concerns are referred to the Local Authority Safeguarding Adults Team without delay",
          "Submit CQC Regulation 18 notifications for all applicable safeguarding incidents",
          "Maintain a safeguarding log and review trends at governance meetings",
          "Ensure all staff complete safeguarding training at induction and refresher training every two years",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report any suspected or witnessed abuse immediately to the duty manager",
          "Never investigate allegations themselves or promise confidentiality to a person disclosing abuse",
          "Preserve any evidence and document disclosures in the person's own words",
          "Cooperate fully with any safeguarding investigation or Safeguarding Adults Review",
          "Maintain professional curiosity and challenge practice that may constitute institutional abuse",
        ],
      },
    ],
    keyPoints: [
      "All concerns must be reported immediately — there is no threshold below which a safeguarding concern should be ignored or dismissed",
      "The Care Act 2014 identifies ten types of abuse: physical, sexual, psychological, financial, modern slavery, discriminatory, organisational, domestic violence, neglect and self-neglect",
      "Safeguarding is everyone's responsibility — staff must not assume someone else will report a concern",
      "Confidentiality cannot be guaranteed when a person discloses abuse; information must be shared with the appropriate authority",
      "Making Safeguarding Personal (MSP) requires the person at risk to be central to all safeguarding activity and outcomes",
    ],
    legislation: [
      "Care Act 2014 (Sections 42–46)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Mental Capacity Act 2005",
      "Human Rights Act 1998",
      "Modern Slavery Act 2015",
      "Data Protection Act 2018 / UK GDPR",
    ],
    sections: [
      {
        heading: "Types of Abuse",
        body: "The Care Act 2014 identifies ten types of abuse that staff must be able to recognise: physical abuse (including hitting, restraint), domestic violence or abuse, sexual abuse (including non-consensual intimate care), psychological or emotional abuse, financial or material abuse (including theft, fraud, exploitation), modern slavery, discriminatory abuse (based on protected characteristics), organisational or institutional abuse (poor care practices), neglect and acts of omission, and self-neglect. Signs may be physical, behavioural, financial or environmental and may be subtle.",
      },
      {
        heading: "Reporting Procedure",
        body: "On witnessing or receiving a disclosure of abuse: (1) ensure the immediate safety of the person; (2) contact the duty manager without delay; (3) do not investigate, confront the alleged abuser or promise confidentiality; (4) document what was seen or said using the person's own words and the exact time; (5) complete an incident report. The manager will assess whether a referral to the Local Authority Safeguarding Adults Team is required and will notify CQC where applicable under Regulation 18.",
      },
      {
        heading: "Multi-Agency Working",
        body: "Safeguarding is a multi-agency responsibility. [ORGANISATION_NAME] works in partnership with the Local Authority, CQC, police, NHS commissioners and other relevant bodies as part of the Safeguarding Adults Board (SAB) framework. Staff will cooperate fully with Safeguarding Adults Reviews (SARs), Domestic Homicide Reviews (DHRs) and any associated learning exercises.",
      },
    ],
  },

  "saf-002": {
    purpose: "[ORGANISATION_NAME] recognises its responsibility to protect children who may come into contact with the service, whether as visitors, the children of service users, or young people within the service itself. This policy sets out procedures for recognising and reporting child protection concerns in line with statutory guidance.",
    scope: "This policy applies to all staff at [ORGANISATION_NAME] and covers any child under 18 years of age who comes into contact with the service in any capacity.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Act as or designate a named Child Protection Lead",
          "Ensure all child protection concerns are referred to the Local Authority Children's Services without delay",
          "Maintain records of all referrals and their outcomes",
          "Ensure staff complete child protection training at least every two years",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report any child protection concern to the duty manager immediately",
          "Never investigate allegations or interview a child about suspected abuse",
          "Document any observations or disclosures accurately and in the child's own words",
          "Cooperate fully with any statutory investigation by Children's Services or Police",
        ],
      },
    ],
    keyPoints: [
      "The welfare of the child is the paramount consideration in all decisions under the Children Acts 1989 and 2004",
      "Signs of abuse in children include unexplained injuries, behavioural changes, fearfulness, poor hygiene, or inappropriate sexualised behaviour",
      "A referral to Children's Services should be made wherever there are reasonable grounds to believe a child is suffering or likely to suffer significant harm",
      "Do not alert a parent or carer if doing so might place the child at greater risk",
      "Staff who are unsure whether to make a referral should always discuss their concern with the manager rather than do nothing",
    ],
    legislation: [
      "Children Act 1989",
      "Children Act 2004",
      "Working Together to Safeguard Children 2023",
      "Keeping Children Safe in Education 2023 (contextual reference)",
      "Children and Social Work Act 2017",
    ],
    sections: [
      {
        heading: "Recognising Abuse in Children",
        body: "Physical abuse may result in bruising, burns, fractures or injuries inconsistent with the explanation given. Emotional abuse signs include low self-esteem, fearfulness, self-harm or excessively compliant behaviour. Sexual abuse indicators include age-inappropriate sexual knowledge, sexualised behaviour, or physical signs in the genital area. Neglect is indicated by poor nutrition, inadequate clothing, poor hygiene, untreated medical conditions, or persistent lateness/non-attendance at appointments. Staff should document their observations with dates, times and the child's own words.",
      },
      {
        heading: "Reporting and Referral",
        body: "Any staff member with a child protection concern must report it to the duty manager immediately. If the concern involves the manager, staff should contact the Local Authority Children's Services directly. The manager will decide whether a referral to Children's Services is required, which should be confirmed in writing within 24 hours. If a child is in immediate danger, the police (999) should be called without delay. [ORGANISATION_NAME] will cooperate fully with any Section 47 enquiry.",
      },
    ],
  },

  "saf-003": {
    purpose: "[ORGANISATION_NAME] is committed to the safe management of medicines to protect service users from harm caused by medication errors, misuse or poor practice. This policy ensures all staff understand their responsibilities throughout every stage of the medication process.",
    scope: "This policy applies to all staff at [ORGANISATION_NAME] involved in any aspect of medication management, including ordering, receiving, storing, administering, recording and disposing of medicines.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff administering medication hold a current competency sign-off",
          "Oversee quarterly medication audits and implement action plans for any findings",
          "Ensure medication errors are investigated, documented and learning shared",
          "Maintain appropriate controlled drug registers",
        ],
      },
      {
        role: "Senior Care Staff / Team Leaders",
        duties: [
          "Conduct monthly MAR chart checks and stock reconciliation",
          "Report medication errors or near misses to the manager immediately",
          "Support and witness new staff competency assessments",
          "Ensure controlled drug administration is always witnessed and signed by two staff",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Administer medication only when signed off as competent and never outside scope of training",
          "Complete MAR charts accurately at the time of administration — never in advance or retrospectively",
          "Apply the five rights: right person, right medicine, right dose, right route, right time",
          "Report any medication concern to a senior immediately",
        ],
      },
    ],
    keyPoints: [
      "No medication should be administered without a valid, current prescription or GP-authorised instruction",
      "MAR charts must be completed at the time of administration — never before or after",
      "Medication errors must be reported immediately to the manager and GP, and documented as an incident",
      "Controlled drugs require two signatures for administration and a running balance in the CD register",
      "Self-administration requires a risk assessment reviewed every six months or following any change in condition",
    ],
    legislation: [
      "Medicines Act 1968",
      "Misuse of Drugs Act 1971 and Regulations 2001",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Medicines Optimisation Guideline NG5 (2015)",
      "Human Medicines Regulations 2012",
    ],
    sections: [
      {
        heading: "Storage of Medication",
        body: "All medication must be stored in a locked, purpose-built medicine cabinet accessible only to authorised staff. Refrigerated medicines must be stored at 2–8°C with twice-daily temperature logs. Controlled drugs must be stored in a locked metal cabinet fixed within the medicine room. Cabinet keys must remain with the responsible staff member at all times and must never be left unattended.",
      },
      {
        heading: "Medication Administration",
        body: "Staff must apply the five rights before every administration: right person (verify identity against photo on MAR), right medicine (check label against MAR), right dose (confirm dose matches prescription), right route (oral, topical, etc.), and right time (within 30 minutes of the prescribed time). Any omitted dose must be coded on the MAR with the reason. No medication should be crushed or disguised without a covert administration assessment and best interests decision.",
      },
      {
        heading: "Disposal of Unused Medication",
        body: "Unused, discontinued or expired medication must be returned to the dispensing pharmacy using pharmaceutical waste containers (DOOP bags or appropriate sharps containers). Medication must never be flushed, poured away or placed in general waste. All disposals must be documented with the date, medication name, quantity, reason and the signature of the disposing staff member and a witness.",
      },
    ],
  },

  "saf-004": {
    purpose: "This procedure provides [ORGANISATION_NAME] staff with clear, step-by-step guidance for the safe administration of medication to service users, minimising the risk of medication errors and ensuring all administration is legal, evidence-based and person-centred.",
    scope: "Applies to all staff at [ORGANISATION_NAME] who are trained and currently competency-assessed to administer medication. Staff must not administer medication outside the scope of their assessed competency.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure competency assessments are current and recorded for all medication staff",
          "Review and update this procedure at least annually",
          "Investigate and document all medication incidents",
        ],
      },
      {
        role: "Trained Care Staff",
        duties: [
          "Follow the five rights of medication administration at every administration",
          "Complete the MAR chart at the point of administration",
          "Report omissions, errors or concerns immediately to the shift leader",
          "Ensure the medication room is left secure after every use",
        ],
      },
    ],
    keyPoints: [
      "Always check the service user's identity — including their photograph — before administering any medication",
      "If in doubt about any aspect of a medication, do not administer and seek clarification from the duty manager or GP",
      "Never administer medication that has been out of the original packaging for an unknown period",
      "A missed dose must always be coded on the MAR with the reason and reported to the GP if clinically significant",
      "Adverse reactions must be reported immediately, and emergency services called if the person's condition deteriorates",
    ],
    legislation: [
      "Medicines Act 1968",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Guideline NG5: Medicines Optimisation (2015)",
      "NMC Standards for Medicines Management (where applicable to registered nurses)",
    ],
    sections: [
      {
        heading: "Step-by-Step Administration Procedure",
        body: "Before administering: wash hands, gather equipment, check the MAR against the prescription. During administration: confirm service user identity using their photo and name, explain the medication in a way they understand, check for consent, prepare the dose as prescribed, administer directly — never leave medication unattended. After administration: sign the MAR immediately, note any relevant observations (e.g. service user refused, spat out medication), return all medication to the locked cabinet.",
      },
      {
        heading: "Specific Routes of Administration",
        body: "Oral medications: check for dysphagia risk before administering; do not crush tablets without pharmaceutical or prescriber authority. Topical creams and patches: apply to intact skin, rotate application sites as directed; document and witness patch removal. Eye/ear drops: use correct technique to avoid contamination of the dropper. Inhalers: support correct technique; document and report if service user cannot self-administer. Rectal or vaginal preparations: require additional consent considerations and must be administered by appropriately trained staff.",
      },
      {
        heading: "Dealing with Medication Errors",
        body: "If an error is made or discovered: do not conceal it. Inform the duty manager immediately. Assess the service user for any signs of adverse effect. Contact the GP or NHS 111 for clinical advice. Complete an incident report form the same shift. The manager will review the incident within 24 hours, complete a root cause analysis where appropriate, and share learning with the team. Referral to CQC under Regulation 18 will be made if the error caused or may cause significant harm.",
      },
    ],
  },

  "saf-005": {
    purpose: "[ORGANISATION_NAME] is committed to preventing and controlling the spread of infections to protect service users, staff and visitors. This policy establishes a comprehensive infection prevention and control (IPC) framework aligned to national guidance and regulatory standards.",
    scope: "Applies to all staff, volunteers and contractors working at or visiting [ORGANISATION_NAME]. It covers all aspects of IPC including hand hygiene, PPE, environmental cleanliness, isolation procedures and outbreak management.",
    responsibilities: [
      {
        role: "Registered Manager / IPC Lead",
        duties: [
          "Designate an IPC Lead and ensure they complete relevant IPC training",
          "Conduct quarterly IPC audits and implement action plans for findings",
          "Manage and report any outbreak of infection to Public Health England/UKHSA and CQC",
          "Review and update IPC procedures at least annually and following any outbreak",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Perform hand hygiene using the correct technique at all five moments of care",
          "Use appropriate PPE as specified for each task and dispose of it correctly after use",
          "Report any suspected infection or outbreak to the duty manager immediately",
          "Do not attend work if they have symptoms of a communicable illness",
        ],
      },
    ],
    keyPoints: [
      "Hand hygiene is the single most effective measure for preventing the spread of infection — it must be performed at the five moments: before patient contact, before aseptic procedures, after body fluid exposure risk, after patient contact, after contact with the patient's environment",
      "Standard precautions apply to all service users regardless of their known infection status",
      "PPE must be selected based on the assessed risk of each individual task and must be donned and doffed in the correct sequence",
      "Isolation procedures must be implemented promptly when a service user has or is suspected of having a communicable infection",
      "MRSA, C. difficile, norovirus and COVID-19 outbreaks must be reported to UKHSA and potentially to CQC",
    ],
    legislation: [
      "Health Act 2006: Code of Practice on the Prevention and Control of Infections",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "Public Health (Control of Disease) Act 1984",
      "Control of Substances Hazardous to Health (COSHH) Regulations 2002",
      "NICE Guideline PH36: Prevention and Control of Healthcare-Associated Infections",
    ],
    sections: [
      {
        heading: "Hand Hygiene",
        body: "Effective hand hygiene requires either soap and water (for 20 seconds minimum) or alcohol-based hand rub (ABHR) applied using the WHO 7-step technique. Soap and water must be used when hands are visibly soiled, when caring for someone with C. difficile or norovirus, and before and after removing gloves. ABHR must be available at the point of care. Staff with skin conditions affecting their hands must seek occupational health guidance.",
      },
      {
        heading: "Personal Protective Equipment",
        body: "PPE selection is risk-based. Disposable gloves and aprons must be worn for all personal care tasks with potential exposure to body fluids. Fluid-resistant surgical masks are required when caring for a service user with a respiratory infection. Full face protection (visor or goggles) is required when splashing of body fluids is likely. PPE must be donned before entering the care environment and doffed outside it, disposing of each item in the clinical waste stream immediately.",
      },
      {
        heading: "Outbreak Management",
        body: "An outbreak is defined as two or more linked cases of infection within 48 hours. On identifying a suspected outbreak: isolate affected service users to their rooms where possible; increase PPE requirements; notify the Registered Manager who will contact UKHSA for guidance; suspend communal activities; increase the frequency of environmental cleaning; maintain a line listing of cases. The outbreak is declared over 72 hours after the last case. A debrief and written review must be completed within two weeks.",
      },
    ],
  },

  "saf-006": {
    purpose: "[ORGANISATION_NAME] is committed to identifying, assessing and managing risks that may cause harm to service users, staff and visitors. This policy provides a systematic framework for risk assessment to ensure that hazards are controlled so far as is reasonably practicable.",
    scope: "Applies to all activities, environments and working practices at [ORGANISATION_NAME], including individual care-related risks for service users and workplace health and safety risks for staff.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure a risk register is maintained and reviewed at monthly governance meetings",
          "Ensure all significant hazards have a documented risk assessment",
          "Review and sign off all risk assessments at least annually",
          "Notify CQC of any significant risk events as required under Regulation 18",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report hazards and near misses to the manager promptly",
          "Follow control measures specified in risk assessments",
          "Contribute to the review of care-related risk assessments for the people they support",
          "Not undertake a task they believe presents an unacceptable risk without seeking guidance first",
        ],
      },
    ],
    keyPoints: [
      "All risk assessments must follow the five-step approach: identify the hazard, identify who might be harmed, evaluate the risk and decide on precautions, record findings, review and update regularly",
      "Risk must be reduced to a level that is as low as reasonably practicable (ALARP) — the legal standard is not zero risk but managed risk",
      "Care-related risk assessments must balance risk management with the individual's right to make choices, including positive risk-taking",
      "All risk assessments must be reviewed when circumstances change, following an incident, or at least annually",
      "Staff must never ignore a risk they identify — it must be reported even if they cannot resolve it themselves",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "Care Act 2014",
      "Manual Handling Operations Regulations 1992",
    ],
    sections: [
      {
        heading: "The Five-Step Risk Assessment Process",
        body: "Step 1 — Identify the hazard: walk the area, review incidents, consult staff and service users. Step 2 — Identify who might be harmed and how: consider service users, staff, visitors and contractors; consider differing vulnerabilities. Step 3 — Evaluate the risk: assess the likelihood and severity of harm; consider existing controls; rate as High/Medium/Low. Step 4 — Record findings and implement action: document the assessment; assign actions with owners and target dates. Step 5 — Review and update: review when circumstances change and at least annually.",
      },
      {
        heading: "Individual Care Risk Assessments",
        body: "Every service user must have individual care risk assessments completed at admission and reviewed at each care plan review (minimum six-monthly). Core assessments include falls risk (using a validated tool such as MORSE or St Thomas's Risk Assessment), pressure ulcer risk (Waterlow or Braden), nutritional risk (MUST), and manual handling risk. These assessments must be person-centred and reflect the individual's own views and preferences, including their right to take positive risks.",
      },
    ],
  },

  "saf-007": {
    purpose: "[ORGANISATION_NAME] recognises that staff working alone in the community or in service users' homes face particular risks. This policy establishes measures to protect lone workers, ensure effective communication, and enable swift response if a lone worker is in difficulty.",
    scope: "Applies to all staff at [ORGANISATION_NAME] who work alone at any time, including domiciliary care workers visiting service users at home, on-call managers and any staff working in isolated areas of the premises outside normal hours.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure a lone working procedure is in place and that all lone workers are trained in it",
          "Ensure lone workers have access to a mobile phone and a means of raising an alarm at all times",
          "Maintain a log of all lone working visits and check-in times",
          "Conduct a risk assessment for each service user's home environment before the first visit",
        ],
      },
      {
        role: "Lone Workers",
        duties: [
          "Follow the check-in and check-out procedure for every lone working visit without exception",
          "Report any concerns about the safety of a visit or environment to the manager before attending",
          "Carry their mobile phone, fully charged, at all times during a lone working shift",
          "Leave if they feel unsafe and report the situation to the manager immediately",
        ],
      },
    ],
    keyPoints: [
      "No lone worker should feel compelled to remain in a situation where they feel unsafe — they have the right to leave and the responsibility to report",
      "A robust check-in/check-out procedure must be followed for every visit — the absence of a check-in must trigger an escalation protocol within a defined timeframe",
      "Home environment risk assessments must be completed for each service user's address, covering access, hazards, pets, and known risks from others in the household",
      "Lone workers must never provide intimate personal care in a service user's home for the first time without a risk assessment and supervisor support where indicated",
      "Any incident involving a lone worker must be reported as an incident and reviewed to prevent recurrence",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Working Alone: Health and Safety Guidance on Lone Working (HSE)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
    ],
    sections: [
      {
        heading: "Check-In and Check-Out Procedure",
        body: "Lone workers must check in with the office or duty manager at the start of each visit and check out at the end. The maximum time between a scheduled check-in and the office initiating a welfare check is 30 minutes. If no check-in is received, the duty manager will: attempt to contact the worker by phone; if unsuccessful within 15 minutes, contact the service user or a key contact for the address; if still no contact within a further 15 minutes, contact the police for a welfare check.",
      },
      {
        heading: "Managing Risk in the Home Environment",
        body: "Before the first visit to a new service user, a home environment risk assessment must be completed, covering: access and security; known hazards (e.g. trip hazards, animals, COSHH substances); people in the household; any history of violence or aggression; and communication barriers. Risk assessments must be updated whenever the home environment changes. Staff must not enter a property if they have concerns about immediate safety — they should contact the office immediately.",
      },
    ],
  },

  "saf-008": {
    purpose: "[ORGANISATION_NAME] is committed to protecting service users, staff and visitors from the risk of fire. This policy sets out the organisation's fire safety management arrangements, evacuation procedures and responsibilities to comply with fire safety legislation and protect life.",
    scope: "Applies to all premises occupied or used by [ORGANISATION_NAME], all staff, service users, visitors and contractors. All staff must be familiar with the evacuation procedure for the premises in which they work.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure a current fire risk assessment is in place, reviewed annually and after any significant change",
          "Ensure fire drills are conducted at least twice yearly (including at night for residential services)",
          "Ensure all staff complete fire safety training at induction and annually thereafter",
          "Maintain fire safety equipment, systems and records as required by law",
          "Ensure a Personal Emergency Evacuation Plan (PEEP) is in place for every service user",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Know the location of all fire exits, fire alarm call points and fire-fighting equipment",
          "Know the full evacuation procedure and their role within it",
          "Complete fire safety training annually",
          "Never prop open fire doors or obstruct fire exits",
          "Report any fire safety concern to the manager without delay",
        ],
      },
    ],
    keyPoints: [
      "On discovering a fire: sound the alarm, call 999, commence evacuation — do not attempt to fight a fire unless trained and only with a clear escape route behind you",
      "Every service user must have a Personal Emergency Evacuation Plan (PEEP) documented in their care plan, reviewed at least annually and whenever their mobility or dependency changes",
      "Fire doors must be kept closed — they are designed to slow the spread of fire and smoke",
      "The fire register must be completed to account for all persons on the premises at every evacuation",
      "Furniture, fixtures and fittings must meet the fire resistance standards set out in the Furniture and Furnishings (Fire Safety) Regulations 1988",
    ],
    legislation: [
      "Regulatory Reform (Fire Safety) Order 2005",
      "Furniture and Furnishings (Fire Safety) Regulations 1988",
      "Health and Safety at Work etc. Act 1974",
      "Building Regulations 2010 (Part B: Fire Safety)",
      "Fire Safety Act 2021",
    ],
    sections: [
      {
        heading: "Evacuation Procedure",
        body: "On activation of the fire alarm: (1) All staff must commence evacuation of service users from their immediate area, using the nearest available fire exit. (2) Staff must not use lifts. (3) Service users requiring assistance must be evacuated using agreed procedures from their PEEP. (4) All persons must assemble at the designated muster point. (5) The person in charge must take the fire register and account for all staff and service users. (6) No one may re-enter the building until the fire service confirms it is safe to do so.",
      },
      {
        heading: "Personal Emergency Evacuation Plans (PEEPs)",
        body: "A PEEP must be in place for every service user who cannot evacuate independently. The PEEP must document: the individual's mobility and evacuation needs; the number of staff required and their roles; the evacuation method and equipment required (e.g. evacuation chair, ski sheet); the designated route; and any specific considerations. PEEPs must be reviewed at every care review, after any change in mobility, and following each fire drill.",
      },
    ],
  },

  "saf-009": {
    purpose: "[ORGANISATION_NAME] is committed to reducing the incidence and impact of falls among service users. This policy sets out a systematic approach to falls prevention through risk assessment, environmental management, individual care planning and post-fall response, consistent with NICE guidance.",
    scope: "Applies to all service users of [ORGANISATION_NAME] who are assessed as being at risk of falling, and to all staff responsible for their care and safety.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure falls risk assessments are completed for all service users at admission and reviewed six-monthly",
          "Review all falls incidents and analyse for trends at monthly governance meetings",
          "Ensure the environment is assessed for fall hazards regularly",
          "Liaise with GP and occupational therapy services for service users at high risk",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Carry out falls risk assessments using the service's validated tool",
          "Implement and record all interventions specified in the falls care plan",
          "Respond appropriately to a fallen service user without moving them until assessed",
          "Complete an incident report following every fall and near-miss",
        ],
      },
    ],
    keyPoints: [
      "All service users must be assessed for falls risk at admission using a validated tool (MORSE Fall Scale or St Thomas's Risk Assessment) and reassessed every six months or after a fall",
      "Following a fall, the service user must not be moved until they have been assessed by a competent person for injury — call 999 if there is any suspicion of fracture or head injury",
      "Post-fall observations must be carried out as specified in the care plan and documented; deterioration must be escalated using an early warning score",
      "Bed rails must only be used as part of an individual risk assessment and with the service user's informed consent — they must never be used as a restraint",
      "Environmental factors contributing to falls include poor lighting, wet floors, inappropriate footwear and inappropriate seating — these must be addressed as a matter of urgency",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "Health and Safety at Work etc. Act 1974",
      "Mental Capacity Act 2005",
      "NICE Clinical Guideline CG161: Falls in Older People (2013, updated 2019)",
      "NICE Quality Standard QS86: Falls in Older People",
    ],
    sections: [
      {
        heading: "Post-Fall Response",
        body: "Immediately following a fall: (1) Do not move the person — assess for injury. (2) Call 999 if there is any suspicion of head injury, fracture, or loss of consciousness. (3) If the person is uninjured and can be safely assisted up, do so with appropriate moving and handling equipment and two staff. (4) Carry out neurological observations for 24 hours if there was any head contact. (5) Document the fall in detail: time, location, circumstances, injuries, observations and actions taken. (6) Inform the next of kin. (7) Complete an incident report. (8) Review the falls care plan within 48 hours.",
      },
      {
        heading: "Environmental Risk Reduction",
        body: "The environment must be assessed for fall hazards at least quarterly and following any fall. Key measures include: adequate lighting in all areas including at night; non-slip flooring and prompt attention to spillages; use of contrasting colours to aid spatial awareness; appropriate, well-maintained furniture and seating; cleared walkways free from trailing cables; call system accessible from all areas; and appropriate footwear and non-slip socks available for service users. Identified hazards must be actioned promptly and documented.",
      },
    ],
  },

  "saf-010": {
    purpose: "[ORGANISATION_NAME] is committed to the safe moving and handling of service users to prevent injury to both service users and staff. This policy establishes a framework for the assessment, planning and execution of all moving and handling activities, in line with current ergonomic guidance and legislation.",
    scope: "Applies to all staff at [ORGANISATION_NAME] involved in the moving and handling of service users, and to all service users who require assistance with mobility. It also covers the manual handling of objects and equipment.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all staff complete manual handling training at induction and at least every two years",
          "Ensure moving and handling risk assessments are in place for every service user requiring assistance",
          "Maintain all handling equipment in a safe condition with documented service records",
          "Investigate all moving and handling incidents and near misses",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Complete moving and handling training before assisting any service user with mobility",
          "Follow the individual moving and handling care plan for each service user — do not improvise",
          "Inspect all equipment before use and report any defect immediately",
          "Report any injury or near miss related to moving and handling without delay",
        ],
      },
    ],
    keyPoints: [
      "No unsafe manual lift of a person should be attempted — if in doubt, seek guidance before proceeding",
      "Every service user requiring moving and handling assistance must have an individual moving and handling assessment and care plan",
      "Equipment such as hoists, slings, slide sheets and stand aids must be used as specified in the care plan — staff must not use improvised methods",
      "Slings must be labelled with the correct size and type for the individual service user and must be inspected before each use",
      "The TILE approach must be applied to all manual handling tasks: Task, Individual capability, Load, Environment",
    ],
    legislation: [
      "Manual Handling Operations Regulations 1992 (amended 2002)",
      "Health and Safety at Work etc. Act 1974",
      "Provision and Use of Work Equipment Regulations 1998 (PUWER)",
      "Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    sections: [
      {
        heading: "Moving and Handling Assessments",
        body: "A moving and handling assessment must be completed for every service user who requires assistance with mobility, at admission and reviewed at every care review or following any change in their condition. The assessment must document: the service user's current mobility, weight and any relevant clinical condition; the tasks required; the equipment needed; the number of staff required; the specific techniques to be used; and the service user's own preferences. The care plan must be accessible to all staff providing care.",
      },
      {
        heading: "Hoist and Sling Use",
        body: "Before using a hoist: check the service user's care plan confirms hoist use; select the correct sling type and size as documented; inspect the sling for tears, worn stitching or damage — do not use if in any doubt; check the hoist is functioning correctly and its service date is current. During hoisting: ensure two trained staff are present; explain the procedure to the service user; never leave a person suspended in a hoist unattended. After use: document any issues; return equipment to the correct storage location.",
      },
    ],
  },

  "saf-011": {
    purpose: "[ORGANISATION_NAME] has a duty to protect staff, service users and others from violence, aggression and threatening behaviour. This policy sets out preventative measures, de-escalation strategies and post-incident support to create and maintain a safe working and living environment.",
    scope: "Applies to all staff, service users, visitors and contractors at [ORGANISATION_NAME]. It covers all forms of violence, aggression and threatening behaviour, whether verbal or physical, and whether arising from service users, visitors or others.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure staff receive training in de-escalation and conflict management",
          "Conduct risk assessments for service users whose behaviour may include aggression",
          "Investigate all violent or aggressive incidents and implement preventative measures",
          "Provide post-incident support and debrief for affected staff",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Attend training in de-escalation and conflict management",
          "Report all incidents of violence or aggression using the incident reporting procedure",
          "Follow behaviour support plans for individual service users",
          "Seek immediate help from colleagues if a situation escalates beyond their ability to manage alone",
        ],
      },
    ],
    keyPoints: [
      "The safety of all people in the environment is the primary consideration — staff should prioritise their own safety and the safety of others over property",
      "De-escalation techniques should be the first response to aggression — physical intervention should only be used as a last resort and only by trained staff",
      "Every incident of violence or aggression must be recorded regardless of severity — patterns are often identified through consistent incident reporting",
      "Service users whose behaviour may include aggression must have an individual behaviour support plan that is regularly reviewed",
      "Staff have the right to leave a situation they consider unsafe without fear of disciplinary action",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Mental Health Act 1983 (as amended 2007)",
      "Mental Capacity Act 2005",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
    ],
    sections: [
      {
        heading: "De-escalation Techniques",
        body: "When a service user or visitor becomes agitated or aggressive: use a calm, low tone of voice; maintain a non-threatening posture with open body language; give the person space; acknowledge their feelings without necessarily agreeing with them; offer choices where possible to restore a sense of control; remove any audience if it is safe to do so; avoid arguments or raising your voice. If de-escalation is not working, increase staffing presence and consider environmental interventions (reducing noise, offering a change of environment) before considering any physical intervention.",
      },
      {
        heading: "Post-Incident Support",
        body: "Following any significant incident of violence or aggression: ensure all staff involved receive an immediate debrief from the duty manager; offer and arrange access to occupational health or employee assistance services for any affected staff; review the incident for learning within 48 hours; update the service user's behaviour support plan if required; notify family or representatives as appropriate; complete the incident report within four hours of the incident. Where staff have suffered injury, ensure RIDDOR reporting requirements are assessed.",
      },
    ],
  },

  "saf-012": {
    purpose: "[ORGANISATION_NAME] is committed to providing care that is the least restrictive possible. This policy establishes the legal and ethical framework for the use of any form of restraint or restrictive practice, ensuring that such measures are only used lawfully, proportionately and as a last resort.",
    scope: "Applies to all staff at [ORGANISATION_NAME] involved in supporting or caring for service users, and covers all forms of physical, mechanical, environmental and chemical restraint, as well as any other practice that restricts a person's movement or liberty.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure any use of restrictive practice is individually assessed, documented and regularly reviewed",
          "Ensure staff receive training in the legal framework and in positive behaviour support",
          "Notify the relevant authorities (CQC, local authority) of any Deprivation of Liberty Safeguards or Liberty Protection Safeguards applications",
          "Review all restraint incidents within 24 hours and ensure learning is acted upon",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Use the least restrictive option available in every situation",
          "Document any use of restraint or restriction immediately in the care record and as an incident",
          "Never use unauthorised physical restraint techniques",
          "Report concerns about any restrictive practice they witness, including by colleagues",
        ],
      },
    ],
    keyPoints: [
      "The use of any restraint must be lawful, necessary, proportionate to the risk, and the least restrictive option available",
      "Restraint of a person who lacks mental capacity must comply with the Mental Capacity Act 2005 — a best interests decision must be documented",
      "Any restriction that amounts to a deprivation of liberty requires authorisation under DoLS (for care homes/hospitals) or LPS when implemented",
      "Physical restraint techniques must only be used by staff trained and currently certified in approved techniques",
      "Every episode of restraint must be documented, reviewed and reported at governance level",
    ],
    legislation: [
      "Mental Capacity Act 2005 (Sections 5 and 6)",
      "Mental Capacity (Amendment) Act 2019 — Liberty Protection Safeguards",
      "Human Rights Act 1998 — Article 5 (Right to Liberty)",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Deprivation of Liberty Safeguards",
        body: "Where a service user who lacks mental capacity is subject to care arrangements that amount to a deprivation of their liberty (i.e. they are under continuous supervision and control and not free to leave), the Registered Manager must apply for a Standard Authorisation through the local authority Supervisory Body under DoLS. Applications must be made proactively before the restrictions are imposed where possible. All DoLS authorisations must be reviewed at the specified review date or sooner if the person's circumstances change.",
      },
      {
        heading: "Positive Behaviour Support",
        body: "The preferred approach to managing behaviours that may challenge is Positive Behaviour Support (PBS), which seeks to understand the function of behaviours and address underlying unmet needs. Where a service user's behaviour includes or is at risk of including any restrictive practice, a PBS plan must be developed with input from the service user, family, and where appropriate a specialist behaviour support practitioner. The PBS plan must be reviewed at least every six months and following any significant incident.",
      },
    ],
  },

  "saf-013": {
    purpose: "[ORGANISATION_NAME] is committed to the safe, legal and accountable management of controlled drugs (CDs) in compliance with the Misuse of Drugs Act 1971 and associated regulations. This policy ensures that CDs are prescribed, stored, administered and disposed of in a manner that prevents misuse and protects service users.",
    scope: "Applies to all staff at [ORGANISATION_NAME] involved in any aspect of controlled drug management. CDs covered include Schedule 2 drugs (e.g. morphine, oxycodone, fentanyl patches) and Schedule 3 drugs where record-keeping is required.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Maintain the CD register and ensure it is balanced at every administration",
          "Ensure CDs are stored in a locked, fixed CD cabinet that meets legal specifications",
          "Report any CD discrepancy, theft or loss to the police and CQC immediately",
          "Conduct monthly CD audits and document the findings",
        ],
      },
      {
        role: "Senior/Registered Nurses and Trained Staff",
        duties: [
          "Administer CDs only in line with a valid prescription and in the presence of a witness",
          "Complete the CD register immediately after each administration with dual signatures",
          "Conduct and document stock checks at each shift changeover",
          "Report any suspected discrepancy to the Registered Manager immediately",
        ],
      },
    ],
    keyPoints: [
      "Controlled drugs must be stored in a locked metal cabinet that is fixed to the wall or floor — the key must remain with the responsible person at all times",
      "Every administration of a Schedule 2 CD requires two authorised staff: one to administer and one to witness, both of whom must sign the CD register",
      "The CD register must be maintained in a bound, consecutively numbered book — corrections must be made in ink with a single line through the error, never using correction fluid",
      "Any discrepancy in CD stock must be reported to the Registered Manager and investigated immediately — it must not be left unresolved until the next audit",
      "CDs that are discontinued or expire must be denatured and disposed of according to local pharmacy guidance — never poured down the drain",
    ],
    legislation: [
      "Misuse of Drugs Act 1971",
      "Misuse of Drugs Regulations 2001 (as amended)",
      "Misuse of Drugs (Safe Custody) Regulations 1973",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "NICE Guideline NG5: Medicines Optimisation (2015)",
    ],
    sections: [
      {
        heading: "CD Administration Procedure",
        body: "Before administration: (1) Two authorised staff must be present — one to administer, one to witness. (2) Check the current stock balance in the register against the physical stock. (3) Verify the prescription against the CD register entry for name, dose, route and frequency. (4) Confirm the service user's identity. After administration: (5) Both staff immediately sign and enter the administration in the CD register with time, dose given and stock balance. (6) Any refused or omitted dose must be documented and the reason recorded.",
      },
      {
        heading: "Disposal of Controlled Drugs",
        body: "Unused, expired or discontinued CDs must not be disposed of informally. Disposal must be witnessed by an authorised person and the CD register must record the date, name of the drug, quantity destroyed and the signature of both the staff member and witness. [ORGANISATION_NAME] will arrange for a pharmacist or authorised person to oversee CD destruction using an approved CD denaturing kit. Under no circumstances should CDs be flushed down the sink.",
      },
    ],
  },

  "saf-014": {
    purpose: "[ORGANISATION_NAME] is committed to the prevention and effective management of pressure ulcers to protect service users from avoidable harm. This policy sets out a systematic approach to risk assessment, preventative care and wound management in line with NICE guidance and best practice.",
    scope: "Applies to all service users of [ORGANISATION_NAME] who are assessed as being at risk of pressure ulcer development, and to all staff responsible for their care and skin assessment.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure pressure ulcer risk assessments are completed at admission and reviewed at each care review",
          "Report all avoidable Category 2 and above pressure ulcers to CQC under Regulation 18",
          "Conduct monthly wound care audits and ensure action plans are implemented",
          "Facilitate prompt referral to tissue viability nurses for complex wounds",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Complete and document pressure area skin checks at every care delivery",
          "Implement repositioning schedules as specified in the care plan",
          "Report any new or deteriorating skin break to the duty manager and nurse immediately",
          "Maintain accurate wound care records for every dressing change",
        ],
      },
    ],
    keyPoints: [
      "All service users must be assessed for pressure ulcer risk using a validated tool (Waterlow or Braden) at admission and at every care review",
      "Skin inspections must be carried out at every care intervention — particularly over bony prominences (heels, sacrum, hips, elbows, ankles)",
      "Repositioning must be carried out as specified in the care plan — typically every two hours for high-risk individuals, with the schedule documented",
      "Any pressure damage must be categorised using the EPUAP/NPIAP classification system and reported as an incident",
      "Avoidable Category 2 or above pressure ulcers are a notifiable safety incident and must be reported to CQC",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Quality Standard QS89: Pressure Ulcers (2015)",
      "NICE Guideline CG179: Pressure Ulcers: Prevention and Management (2014)",
      "NHS Improvement Patient Safety Alert on Pressure Ulcers",
    ],
    sections: [
      {
        heading: "Pressure Ulcer Classification",
        body: "Category 1: Non-blanching erythema on intact skin. Category 2: Partial thickness skin loss — may appear as a shallow open ulcer or intact blister. Category 3: Full thickness tissue loss — subcutaneous fat may be visible but bone, tendon and muscle are not exposed. Category 4: Full thickness tissue loss with exposed bone, tendon or muscle. Unstageable: base of ulcer covered with slough or eschar. Deep Tissue Injury: purple or maroon localised area of discoloured intact skin. All categories must be documented and photographed (with consent).",
      },
      {
        heading: "Repositioning and Pressure Relief",
        body: "A repositioning schedule must be developed for every service user assessed as at risk. The frequency of repositioning depends on the Waterlow/Braden score, skin condition, and the service user's tolerance. Repositioning must be documented in the care record each time it is performed. Appropriate pressure-relieving equipment (e.g. alternating air mattresses, heel protectors, pressure cushions) must be assessed and provided based on individual need. Equipment must be maintained and its condition checked daily.",
      },
    ],
  },

  "saf-015": {
    purpose: "[ORGANISATION_NAME] is committed to creating a learning culture where all accidents and incidents are reported, investigated and used to improve the safety and quality of care. This policy sets out the organisation's approach to incident reporting and investigation in line with statutory requirements.",
    scope: "Applies to all staff at [ORGANISATION_NAME] and covers all accidents, incidents, near misses and dangerous occurrences affecting service users, staff, visitors and contractors on the premises or in connection with the service.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all incidents are recorded, investigated and acted upon within specified timescales",
          "Review all incidents at monthly governance meetings and identify trends",
          "Submit RIDDOR notifications to the HSE for qualifying incidents within the statutory timeframe",
          "Notify CQC of incidents that meet Regulation 18 notification requirements",
          "Share learning from incidents with all staff",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report every accident, incident and near miss to the duty manager on the same shift it occurs",
          "Complete an incident report form before the end of the shift on which the incident occurred",
          "Preserve any physical evidence until the manager has reviewed it",
          "Co-operate fully with any investigation",
        ],
      },
    ],
    keyPoints: [
      "Every incident must be reported, no matter how minor — patterns are often identified through consistent recording of apparently minor events",
      "Near misses must be reported in the same way as incidents — they represent an opportunity to prevent future harm",
      "RIDDOR reporting to the HSE is required for: employee deaths, specified injuries to employees, over-7-day incapacitation, non-employee deaths, non-employee injuries requiring hospitalisation, and dangerous occurrences",
      "CQC must be notified under Regulation 18 of certain incidents including unexpected or unexplained deaths, serious injuries to service users, events that prevent the operation of the service, and police involvement",
      "Incident investigations should focus on systems and processes — not blame — to identify root causes and prevent recurrence",
    ],
    legislation: [
      "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR)",
      "Health and Safety at Work etc. Act 1974",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 18",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Incident Reporting Process",
        body: "On the occurrence of an incident: (1) ensure the immediate safety and care of all persons involved; (2) notify the duty manager without delay; (3) complete the incident report form before the end of the shift; (4) preserve any evidence such as medications, equipment or environmental factors; (5) the duty manager will assess whether immediate notifications to CQC, RIDDOR, safeguarding or other authorities are required. The Registered Manager will review all incidents within 24 hours and initiate an investigation for all significant incidents.",
      },
      {
        heading: "Incident Investigation",
        body: "All significant incidents must be investigated by the Registered Manager or a nominated investigator within five working days. The investigation must include: a review of the incident record; interviews with staff and service users involved; a review of relevant care records and risk assessments; an analysis of contributing factors; and the identification of root causes. Findings must be documented in an investigation report with a clear action plan. Learning must be shared at the next team meeting and documented in the minutes.",
      },
    ],
  },

  "saf-016": {
    purpose: "[ORGANISATION_NAME] recognises that there are rare circumstances where a service user who lacks the mental capacity to consent to taking their medication may need to have it administered covertly. This policy ensures that any covert administration is lawful, ethical, in the best interests of the individual and subject to appropriate oversight.",
    scope: "Applies to all staff at [ORGANISATION_NAME] involved in the administration or planning of medication for service users who lack the capacity to consent to taking their medicines.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all covert administration arrangements are documented, reviewed and authorised",
          "Ensure a pharmacist is consulted regarding the compatibility of any medication to be disguised",
          "Ensure covert administration is reviewed at every care review or medication review",
          "Maintain a central register of all service users receiving covert medication",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Never administer medication covertly without a current, documented best interests decision and written authorisation",
          "Administer covert medication only as directed and never experiment with crushing or mixing without pharmacist approval",
          "Document every covert administration on the MAR chart",
          "Report any concerns about a covert administration arrangement to the manager",
        ],
      },
    ],
    keyPoints: [
      "Covert administration of medication is only lawful for a person who lacks capacity to make the decision to take it — a two-stage mental capacity assessment must always be documented first",
      "A best interests meeting must be convened, involving the GP, pharmacist, family or IMCA, and the decision documented before any covert administration begins",
      "The pharmacist must be consulted to confirm that the medication can safely be crushed or disguised without affecting its efficacy or releasing a modified-release formulation too quickly",
      "Covert administration must be reviewed at every medication review — it must not continue indefinitely without reassessment",
      "Covert administration for a person who has capacity constitutes an unlawful act and a safeguarding concern",
    ],
    legislation: [
      "Mental Capacity Act 2005 (Sections 1–6)",
      "Medicines Act 1968",
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "NMC Guidance on Covert Administration of Medicines",
      "NICE Guideline NG5: Medicines Optimisation (2015)",
    ],
    sections: [
      {
        heading: "Best Interests Process for Covert Administration",
        body: "Before covert administration begins: (1) Document a formal two-stage mental capacity assessment — capacity is always decision-specific. (2) Convene a best interests meeting including the GP, pharmacist, and where possible the family, next of kin or IMCA. (3) Document the meeting and the decision, including the view of the service user's previously expressed wishes and values. (4) Obtain written pharmacist advice on the safe disguising of each specific medication. (5) Document the authorised method of disguising the medication in the care plan. Review at every medication review or within three months, whichever is sooner.",
      },
    ],
  },

  "saf-017": {
    purpose: "[ORGANISATION_NAME] is committed to the prevention of skin breakdown and the effective management of wounds to promote healing and protect service users from infection and avoidable harm. This policy ensures that wound care is evidence-based, person-centred and delivered by appropriately trained staff.",
    scope: "Applies to all staff at [ORGANISATION_NAME] providing wound care or skin integrity monitoring to service users, including care staff assessing skin condition and nursing staff providing clinical wound care.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure staff involved in wound care receive appropriate training",
          "Facilitate timely referrals to the tissue viability nurse (TVN) for complex wounds",
          "Ensure all wounds are documented and wound care charts are maintained accurately",
          "Review wound care incidents and near misses at governance meetings",
        ],
      },
      {
        role: "Care and Nursing Staff",
        duties: [
          "Assess and document the condition of all skin and wounds at each care delivery",
          "Follow the wound care plan as documented — do not improvise with dressings or products",
          "Report any deteriorating or new wound to the nurse and manager immediately",
          "Maintain aseptic technique when performing wound care procedures",
        ],
      },
    ],
    keyPoints: [
      "Every service user's skin should be inspected at each care delivery, with particular attention to bony prominences, areas under medical devices and skin folds",
      "Wound care must always be performed using aseptic non-touch technique (ANTT) to prevent infection",
      "Wound assessment must use a validated tool and document size (length × width × depth), exudate type and amount, wound bed tissue type, surrounding skin condition and pain",
      "Wound care products and dressings must be selected based on current evidence — the TVN should be involved for any wound that fails to progress within two weeks",
      "All wounds must be photographed (with consent) at baseline and at each dressing change, with measurements recorded",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12",
      "NICE Guideline CG179: Pressure Ulcers (2014)",
      "NICE Wound Care Resource",
      "Infection Prevention Society: ANTT Framework",
    ],
    sections: [
      {
        heading: "Wound Assessment",
        body: "At initial assessment and at each dressing change, document: wound size (measure with a disposable ruler); wound bed tissue (granulation, slough, necrosis, epithelialising); exudate type and volume (nil, minimal, moderate, heavy) and character (serous, purulent, haemoserous); surrounding skin condition (intact, erythema, maceration, excoriation); signs of infection (increased exudate, malodour, pyrexia, peri-wound warmth and cellulitis); and pain level. Use a wound assessment chart and photograph with consent.",
      },
      {
        heading: "Referral to Tissue Viability",
        body: "Refer to the tissue viability nurse (TVN) or equivalent specialist in all of the following circumstances: any Category 3 or 4 pressure ulcer; any wound that fails to show progress within two to four weeks of treatment; any wound with signs of infection not responding to topical treatment within 48 hours; any wound on the lower limb where vascular or diabetic aetiology is suspected; any complex or unusual wound that falls outside the competence of the current care team. The referral must be documented in the care record with the date and response received.",
      },
    ],
  },

  "saf-018": {
    purpose: "[ORGANISATION_NAME] is committed to maintaining a safe physical environment for service users, staff and visitors. This policy sets out the arrangements for environmental safety, maintenance, COSHH management, Legionella risk control and routine safety checks.",
    scope: "Applies to all premises owned, managed or used by [ORGANISATION_NAME] and to all staff, contractors and visitors within those premises.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Maintain an asset register and a scheduled maintenance programme",
          "Ensure statutory inspections (gas safety, electrical, Legionella) are carried out on schedule and records maintained",
          "Ensure COSHH assessments are in place for all hazardous substances in use",
          "Ensure all maintenance contractors are competent and have current insurance and DBS clearance where required",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Report any maintenance defect, hazard or equipment failure to the duty manager immediately",
          "Use COSHH substances only in accordance with their assessment and safety data sheet",
          "Carry out daily, weekly and monthly environmental safety checks as assigned",
          "Never use equipment that has been reported as defective or is visibly damaged",
        ],
      },
    ],
    keyPoints: [
      "Statutory compliance records for gas safety (annual), electrical installation (5-yearly), PAT testing (annually) and Legionella (risk assessment reviewed every two years) must be maintained and available for inspection",
      "COSHH assessments must be in place for every hazardous substance used in the service — staff must read and follow the COSHH assessment before using any such substance",
      "Legionella risk is controlled through regular flushing of outlets used infrequently, water temperature monitoring, and disinfection of water systems — a Legionella control log must be maintained",
      "Any defect that poses an immediate risk must result in the affected area or equipment being taken out of use and the maintenance contractor contacted the same day",
      "Environmental temperature in living areas must be maintained at a minimum of 18°C (21°C for bathing areas) for the comfort and safety of service users",
    ],
    legislation: [
      "Health and Safety at Work etc. Act 1974",
      "Control of Substances Hazardous to Health (COSHH) Regulations 2002",
      "Legionella: Approved Code of Practice L8 (HSE)",
      "Electricity at Work Regulations 1989",
      "Gas Safety (Installation and Use) Regulations 1998",
      "Provision and Use of Work Equipment Regulations 1998 (PUWER)",
    ],
    sections: [
      {
        heading: "COSHH Management",
        body: "A COSHH assessment must be completed for every hazardous substance used at [ORGANISATION_NAME], including cleaning products, disinfectants, body fluid spill kits and any chemical used in maintenance. The assessment must identify: the substance and its hazards; who may be exposed and how; the measures to control exposure (substitution, enclosure, ventilation, PPE); emergency procedures in the event of a spill or exposure; and storage and disposal requirements. Assessments must be reviewed annually and whenever a new product is introduced.",
      },
      {
        heading: "Legionella Control",
        body: "Legionella bacteria multiply in water systems held between 20°C and 45°C. Control measures at [ORGANISATION_NAME] include: hot water stored at a minimum of 60°C and distributed at 50°C or above at outlets; cold water maintained below 20°C; monthly temperature monitoring of sentinel outlets; quarterly flushing of all little-used outlets; descaling of showerheads every three months; and an annual review of the Legionella risk assessment by a competent person. A Legionella control log must be maintained and available for inspection.",
      },
    ],
  },
};
