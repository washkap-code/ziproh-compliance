/**
 * Medium-depth policy content — batch 3.
 * Safeguarding Children, Fire Safety, Record Keeping & Confidentiality,
 * Lone Working, Nutrition & Hydration.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// SAF-002  Safeguarding Children Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF002_CONTENT: DocumentContent = {
  title: "Safeguarding Children Policy",
  policyId: "SAF-002",
  version: "3.7",
  effectiveDate: "2026-02-01",
  reviewDate: "2027-02-01",
  approvedBy: "Registered Manager / Designated Safeguarding Lead",
  scope: "All staff, volunteers, and contractors at [ORGANISATION_NAME]. This policy applies wherever children may be present — including children who are service users, children visiting adult service users, and children of staff. A child is any person under the age of 18.",
  responsibilities: [
    {
      role: "Designated Safeguarding Lead (DSL)",
      duties: [
        "Act as the named lead for all child safeguarding concerns at [ORGANISATION_NAME].",
        "Receive and assess all safeguarding concerns reported by staff.",
        "Make referrals to Children's Social Care or the police where required.",
        "Liaise with the Local Safeguarding Children Partnership (LSCP) and attend multi-agency meetings.",
        "Ensure safeguarding training records are maintained and that all staff receive training at least every 3 years.",
        "Maintain the Safeguarding Concern Log and report to the Registered Manager.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Ensure a Designated Safeguarding Lead is always in post and their details are displayed.",
        "Notify the local authority and CQC of all section 47 enquiries and child protection plans.",
        "Include child safeguarding in the annual governance report.",
        "Ensure safer recruitment is applied to all roles that involve contact with children.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Complete child safeguarding awareness training within induction and every 3 years.",
        "Report any safeguarding concern about a child to the DSL without delay.",
        "Never investigate a concern or promise confidentiality to a child — refer only.",
        "Know the name and contact details of the Designated Safeguarding Lead.",
      ],
    },
  ],
  legislation: [
    "Children Act 1989 — parental responsibility; section 47 enquiries; emergency protection orders",
    "Children Act 2004, section 11 — duty to safeguard and promote the welfare of children",
    "Working Together to Safeguard Children 2023 (HM Government) — statutory multi-agency guidance",
    "Safeguarding Vulnerable Groups Act 2006 — DBS barred list for regulated activity with children",
    "Human Rights Act 1998, Article 3 — prohibition of inhuman and degrading treatment",
  ],
  definitions: [
    { term: "Child", definition: "Any person under the age of 18 (Children Act 1989 s105). In England, some young people aged 16–17 may also have specific protections as 'looked after children' or under the Care Act 2014." },
    { term: "Abuse", definition: "Abuse of a child may be: physical (hitting, shaking, burning); emotional (persistent emotional ill-treatment affecting development); sexual (involving a child in sexual activities); neglect (persistent failure to meet basic needs); or exploitation (including county lines, cuckooing, and online abuse)." },
    { term: "Section 47 Enquiry", definition: "An investigation by Children's Social Care under section 47 of the Children Act 1989 where there is reasonable cause to suspect a child is suffering, or is likely to suffer, significant harm." },
    { term: "Child Protection Plan", definition: "A plan put in place by a multi-agency Child Protection Conference where a child has been found to be at risk of significant harm. [ORGANISATION_NAME] must cooperate fully with any Child Protection Plan relating to a child known to the service." },
    { term: "Contextual Safeguarding", definition: "An approach that recognises that abuse and exploitation of children often occurs outside the home — in peer relationships, schools, online, or the wider community. Staff should be alert to environmental and contextual risks, not only intra-familial concerns." },
  ],
  sections: [
    {
      title: "Recognising Abuse and Neglect",
      body: "Staff at [ORGANISATION_NAME] may encounter children as service users, as visitors to adult service users, or as family members of staff. Regardless of the context, all staff have a duty to act if they have concerns about a child's welfare.\n\nAbuse and neglect may present in many ways. Staff should be alert to:",
      bulletPoints: [
        "Unexplained injuries or injuries inconsistent with the explanation given.",
        "Significant changes in behaviour, mood, or school performance.",
        "Fearfulness around a particular adult; reluctance to go home.",
        "Disclosure — direct or indirect — of abuse by the child.",
        "Signs of neglect: poor hygiene, inadequate clothing, persistent hunger, untreated medical conditions.",
        "Signs of sexual exploitation: age-inappropriate sexual knowledge; unexplained gifts; secretive online activity; missing from home.",
        "A parent or carer who is using substances, experiencing domestic abuse, or has a mental health condition that affects their parenting capacity.",
      ],
      warningBox: "You do not need proof before making a safeguarding referral. Safeguarding is everyone's responsibility, not just the DSL's. If you have a concern, report it. It is always better to report a concern that turns out to be unfounded than to fail to report one that leads to harm.",
    },
    {
      title: "What to Do If You Have a Concern",
      body: "If any member of staff has a concern about a child's welfare — whether from direct observation, a disclosure, or information received from a third party — they must follow this procedure:",
      procedure: [
        "Do not investigate or ask leading questions. If a child is making a disclosure, listen carefully, use open questions ('tell me more about that'), and do not promise confidentiality.",
        "Record exactly what you saw, heard, or were told using the child's or your own exact words. Note the time, date, and location.",
        "Report to the Designated Safeguarding Lead (DSL) without delay — on the same day.",
        "The DSL will assess the concern and decide whether to refer to Children's Social Care, the police (if a child is in immediate danger, call 999), or to manage internally with monitoring.",
        "Where the DSL is unavailable and there is immediate risk to a child, any member of staff may contact Children's Social Care directly without waiting.",
        "Record all actions taken, including who was contacted and their response.",
        "Do not discuss the concern with the child's parents or carers unless advised to do so by Children's Social Care or the police — sharing may compromise an investigation.",
      ],
      practiceBox: "The threshold for making a referral is low — 'reasonable cause to suspect' harm, not certainty of harm. If you are in any doubt about whether a concern meets the threshold, discuss it with the DSL. The DSL may consult anonymously with Children's Social Care if they are unsure.",
    },
    {
      title: "Children as Service Users",
      body: "[ORGANISATION_NAME] may provide care or support to young people aged 16–17 or children with disabilities. Where children are service users, specific additional considerations apply:\n\n• All staff working directly with child service users must hold an Enhanced DBS with Barred List for regulated activity with children.\n• Care plans for child service users must include safeguarding risk assessments appropriate to the child's age, development, and vulnerability.\n• Consent for care decisions must involve the child at an age-appropriate level, their parents or legal guardians, and — where the young person is Gillick competent — may be given by the young person themselves.\n• Transition planning from children's to adults' services must begin no later than age 16, in line with the Care Act 2014.",
    },
    {
      title: "Children of Service Users and Visiting Children",
      body: "Where a service user is the parent of a child, or where children regularly visit [ORGANISATION_NAME], staff must be alert to signs that those children may be at risk. Particular considerations include:\n\n• Service users with mental illness, substance misuse, or domestic abuse histories who are parents.\n• Children present in the home during domiciliary care visits — are they safe and adequately cared for?\n• Young carers providing care to an adult service user — are their own needs being met?\n\nWhere a concern arises about a visiting child, the same reporting procedure applies as for any other safeguarding concern.",
      legalBox: "The Children Act 2004 s11 duty applies to [ORGANISATION_NAME] as a care provider — it must have regard to the need to safeguard and promote the welfare of children in everything it does. This includes recognising when the circumstances of an adult service user create a risk to children in that household.",
    },
    {
      title: "Allegations Against Staff",
      body: "Where an allegation is made that a member of staff has harmed a child, or may have behaved in a way that indicates they pose a risk to children, the matter must be reported immediately to the Local Authority Designated Officer (LADO) as well as to the Registered Manager.\n\nThe Registered Manager must also notify:\n• The DBS for consideration of barring, where the member of staff has harmed or placed a child at risk of harm in a regulated activity context.\n• CQC, under the statutory notification duty.\n• The member of staff's professional regulatory body (if applicable).\n\nThe member of staff should be suspended from work pending investigation only where this is necessary to protect children — suspension is not automatic.",
    },
  ],
  relatedDocuments: [
    "saf-001 — Safeguarding Adults at Risk Policy",
    "wl-002 — Recruitment & Selection Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "eff-002 — Mental Capacity Act Policy",
    "wl-005 — Data Protection & GDPR Policy",
  ],
  appendices: [
    { title: "Appendix A — Safeguarding Concern Recording Form", content: "A standardised recording form for all child safeguarding concerns: date and time; child's details; nature of concern (description in exact words); witnesses; actions taken; name of DSL informed; outcome of DSL assessment; referral made (Y/N); follow-up required." },
    { title: "Appendix B — Local Children's Social Care and LADO Contacts", content: "Current contact details for the local authority Children's Social Care duty team, the LADO, the NSPCC helpline (0808 800 5000), and the Childline number (0800 1111). Updated annually or when contacts change." },
  ],
  versionHistory: [
    { version: "3.7", date: "2026-02-01", changes: "Updated to Working Together 2023; added contextual safeguarding section; updated LADO referral procedure." },
    { version: "3.5", date: "2025-03-01", changes: "Added young carers guidance; updated children as service users section." },
    { version: "3.2", date: "2024-01-01", changes: "Full review; expanded allegations against staff procedure; updated DBS requirements." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-008  Fire Safety Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF008_CONTENT: DocumentContent = {
  title: "Fire Safety Policy",
  policyId: "SAF-008",
  version: "4.6",
  effectiveDate: "2026-01-15",
  reviewDate: "2027-01-15",
  approvedBy: "Registered Manager / Responsible Person",
  scope: "All staff, service users, volunteers, visitors, and contractors at [ORGANISATION_NAME]. This policy applies to all premises operated by [ORGANISATION_NAME] and to activities carried out in service users' own homes where applicable.",
  responsibilities: [
    {
      role: "Responsible Person (Registered Manager)",
      duties: [
        "Ensure a current, written Fire Risk Assessment is in place and reviewed at least annually.",
        "Ensure all fire safety equipment is regularly tested and maintained.",
        "Ensure every member of staff receives fire safety training at induction and annually.",
        "Ensure Personal Emergency Evacuation Plans (PEEPs) are in place for all service users.",
        "Report any fire, false alarm, or dangerous occurrence to the relevant enforcing authority.",
        "Cooperate with inspections by the Fire and Rescue Service.",
      ],
    },
    {
      role: "Fire Warden(s)",
      duties: [
        "Complete specific fire warden training in addition to standard fire safety training.",
        "Conduct weekly visual checks of fire escape routes, fire doors, and fire extinguisher condition.",
        "Assist with evacuation and ensure all persons are accounted for at the assembly point.",
        "Report fire safety concerns to the Responsible Person without delay.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Know the location of fire exits, fire extinguishers, and the assembly point.",
        "Know how to raise the alarm and the evacuation procedure.",
        "Never prop open fire doors or block escape routes.",
        "Report any fire safety concern immediately to the Fire Warden or Responsible Person.",
        "Ensure service users in their care are included in the evacuation in the event of a fire alarm.",
      ],
    },
  ],
  legislation: [
    "Regulatory Reform (Fire Safety) Order 2005 (FSO) — primary fire safety legislation for workplaces",
    "Fire Safety Act 2021 — extends FSO to include building structure and external walls",
    "Building Safety Act 2022 — higher-risk buildings and residents' safety",
    "Health and Safety at Work etc. Act 1974 — general employer duty",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
  ],
  definitions: [
    { term: "Responsible Person", definition: "Under the FSO 2005, the person who controls the premises — typically the employer, occupier, or owner. At [ORGANISATION_NAME], this is the Registered Manager or their nominated deputy." },
    { term: "Fire Risk Assessment", definition: "A systematic evaluation of the premises to identify fire hazards, assess the risks they present, identify who is at risk, and determine the measures needed to reduce those risks. Must be documented, reviewed annually, and updated following any significant change." },
    { term: "PEEP", definition: "Personal Emergency Evacuation Plan. An individual plan for any person who cannot self-evacuate without assistance — including all service users with mobility limitations, sensory impairments, or dementia." },
    { term: "Fire Door", definition: "A purpose-built door designed to resist the spread of fire and smoke for a specified period (typically 30 or 60 minutes). Fire doors must be kept shut when not in use. Propping open a fire door is a breach of the FSO." },
    { term: "Evacuation Strategy", definition: "The plan for evacuating the building in the event of fire. May be simultaneous (all persons evacuate at once) or progressive horizontal evacuation (used in care homes — moving people to adjacent fire compartments before full evacuation if needed)." },
  ],
  sections: [
    {
      title: "Fire Risk Assessment",
      body: "The Responsible Person must ensure a documented Fire Risk Assessment (FRA) is in place at all times. The FRA must be reviewed:\n• At least annually.\n• Following any fire, false alarm, or near miss.\n• When the building layout, use, or occupancy changes significantly.\n• Following any change in the service user profile that affects evacuation needs.\n• When new staff or contractors are regularly present.\n\nFor care homes and supported living premises with sleeping accommodation, the FRA must be carried out by a competent person — either appropriately trained in-house staff or an external fire risk assessor. The completed FRA is available for inspection by the Fire and Rescue Service.",
      legalBox: "The Regulatory Reform (Fire Safety) Order 2005 requires the Responsible Person to take 'general fire precautions' to ensure the safety of employees and relevant persons. Failure to carry out or act on a fire risk assessment can result in criminal prosecution, unlimited fines, and imprisonment for up to 2 years.",
    },
    {
      title: "Prevention — Reducing Ignition Sources and Fire Load",
      body: "Fire prevention is the first priority. Staff must be alert to and report the following fire hazards:",
      bulletPoints: [
        "Overloaded electrical sockets or damaged electrical equipment.",
        "Flammable materials stored near heat sources.",
        "Unattended cooking — kitchen areas must never be left unsupervised during cooking.",
        "Combustible items stored in escape routes.",
        "Smokers' materials — designated smoking areas only, with appropriate receptacles. No smoking in the building.",
        "Arson risk — ensure external areas are not used for storage of combustible materials.",
        "Service users who smoke — assessed individually; PEEP must include smoking risk.",
      ],
      practiceBox: "Simple daily fire safety checks take less than 5 minutes. At the start of every shift, fire wardens should confirm: fire exit routes are clear; fire doors are closed; no obvious ignition sources or fire hazards are present. These checks should be recorded in the fire log.",
    },
    {
      title: "Personal Emergency Evacuation Plans (PEEPs)",
      body: "A PEEP must be in place for every service user and for any staff member, visitor, or contractor who cannot self-evacuate without assistance. PEEPs are completed on admission and reviewed at every care review, following any change in mobility or cognition, and after any drill.\n\nEach PEEP must specify:\n• The person's evacuation needs — can they walk, use a wheelchair, use a carry chair, or require a specific technique?\n• The number of staff required and any specific equipment needed.\n• The preferred evacuation route for that person.\n• Any risks associated with the evacuation (e.g. falls risk, behaviour that challenges, oxygen dependency).\n• The role of specific named staff in supporting this person's evacuation.\n\nPEEPs are stored in the care plan and are also held at the fire warden station and reception. They must be accessible immediately in an emergency.",
      warningBox: "Progressive horizontal evacuation does not mean delaying evacuation. In a compartmentalised building, moving people to the adjacent fire compartment buys time for a controlled full evacuation — it does not mean leaving people to wait for the fire to pass. All service users must be capable of being evacuated from the building entirely if required.",
    },
    {
      title: "Fire Safety Equipment — Testing and Maintenance",
      body: "All fire safety equipment must be tested and maintained according to the following schedule:",
      subSections: [
        {
          heading: "Weekly",
          body: "Fire alarm manual call point test — rotate test points so each is tested every 2–3 months. Record in the fire log.",
        },
        {
          heading: "Monthly",
          body: "Emergency lighting function test. Visual inspection of fire extinguishers (condition, charge indicator, tamper seal). Check fire exit signs are illuminated.",
        },
        {
          heading: "Annually",
          body: "Full fire alarm system service by a competent engineer. Full emergency lighting test (3-hour discharge). Fire extinguisher service and recharge by a competent engineer. Sprinkler system service (where fitted). Review and update of the Fire Risk Assessment.",
        },
        {
          heading: "Fire Drills",
          body: "At least one full evacuation drill must be conducted every 6 months (or more frequently where the FRA identifies a higher level of risk). Results — including evacuation time, any issues identified, and actions taken — must be recorded in the fire log. Night-time drills should be conducted periodically to test out-of-hours evacuation.",
        },
      ],
    },
    {
      title: "Action on Discovering a Fire",
      body: "All staff must know and be able to act on the following procedure without hesitation:",
      procedure: [
        "Sound the alarm immediately — activate the nearest manual call point.",
        "Call 999 and request the Fire and Rescue Service. Do not assume the alarm will call them automatically.",
        "Do not attempt to fight the fire unless you are trained to do so and the fire is very small. Your safety and the safety of service users is the priority.",
        "Begin evacuation according to the evacuation strategy — start with the area of immediate danger.",
        "Assist service users according to their individual PEEP.",
        "Close doors as you evacuate — do not lock them. Closed doors significantly slow the spread of fire.",
        "Proceed to the assembly point. Account for all service users and staff.",
        "Inform the Fire and Rescue Service of anyone unaccounted for.",
        "Do not re-enter the building until the Fire and Rescue Service confirms it is safe.",
      ],
    },
  ],
  relatedDocuments: [
    "saf-006 — Risk Assessment Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "saf-018 — Environmental Safety & Maintenance Policy",
    "wl-007 — Business Continuity Policy",
    "wl-009 — Induction & Mandatory Training Policy",
  ],
  appendices: [
    { title: "Appendix A — PEEP Template", content: "Individual template covering: name; mobility and cognition needs; number of staff required; preferred evacuation route; equipment needed; specific risks; staff assigned; review date; signatures." },
    { title: "Appendix B — Fire Safety Log Template", content: "Monthly log for recording: weekly alarm tests (date, point tested, result); monthly equipment checks; drill dates and outcomes; defects noted; remedial actions taken; engineer service visits." },
  ],
  versionHistory: [
    { version: "4.6", date: "2026-01-15", changes: "Updated PEEP guidance; added Building Safety Act 2022 reference; strengthened night drill requirement." },
    { version: "4.4", date: "2025-04-01", changes: "Revised equipment testing schedule; updated drill frequency to 6-monthly." },
    { version: "4.1", date: "2024-01-01", changes: "Full review post Fire Safety Act 2021; added progressive horizontal evacuation guidance." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-006  Record Keeping & Confidentiality Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL006_CONTENT: DocumentContent = {
  title: "Record Keeping & Confidentiality Policy",
  policyId: "WL-006",
  version: "3.9",
  effectiveDate: "2026-04-25",
  reviewDate: "2027-04-25",
  approvedBy: "Registered Manager",
  scope: "All records created, received, or maintained by [ORGANISATION_NAME] in connection with its regulated activities, including care records, personnel records, financial records, and correspondence. This policy applies to all media — paper, electronic, and audio/visual.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all records are maintained in line with this policy and CQC fundamental standards.",
        "Maintain a Records Management Schedule specifying retention periods for all record types.",
        "Ensure secure disposal of records in line with retention schedules.",
        "Review record quality as part of the quarterly care plan audit.",
        "Report significant documentation failures as governance concerns.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Complete care records contemporaneously — as close to the time of the care activity as possible.",
        "Record facts accurately and objectively; never speculate or use judgmental language.",
        "Sign and date all entries; never sign for care not yet given.",
        "Report data breaches or confidentiality concerns to the Registered Manager immediately.",
        "Never access records for which they have no professional need.",
      ],
    },
  ],
  legislation: [
    "UK GDPR and Data Protection Act 2018 — lawful processing and subject access rights",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance (record keeping requirements)",
    "Access to Health Records Act 1990 — access to deceased persons' health records",
    "Freedom of Information Act 2000 (where applicable to public bodies)",
    "Limitation Act 1980 — limitation periods for legal claims affecting record retention",
  ],
  definitions: [
    { term: "Contemporaneous Record", definition: "A record made at or very shortly after the time of the event it describes. CQC expects care records to be contemporaneous — completed during or immediately after the care activity, not at the end of a shift." },
    { term: "Confidential Information", definition: "Any personal, sensitive, or business information relating to service users, staff, or [ORGANISATION_NAME] that is not in the public domain. All care records are confidential by nature." },
    { term: "Subject Access Request (SAR)", definition: "A request by a data subject (or their authorised representative) to receive a copy of all personal data held about them under UK GDPR Article 15. [ORGANISATION_NAME] must respond within one calendar month." },
    { term: "Information Governance", definition: "The framework of policies, systems, and processes that ensure information is managed lawfully, securely, accurately, and proportionately throughout its lifecycle — from creation to secure disposal." },
    { term: "Retention Period", definition: "The minimum period for which a record must be kept, as determined by legal requirements, professional guidance, and organisational need. Records must not be destroyed before their retention period has elapsed." },
  ],
  sections: [
    {
      title: "Principles of Good Record Keeping",
      body: "Good records protect service users by ensuring continuity and accuracy of care. They protect staff by providing contemporaneous evidence of what was done and why. They protect [ORGANISATION_NAME] by demonstrating compliance with CQC fundamental standards.\n\nAll records at [ORGANISATION_NAME] must be:",
      bulletPoints: [
        "Accurate — recording facts, observations, and the service user's own words where relevant.",
        "Contemporaneous — completed at or very shortly after the event.",
        "Clear — legible, in plain English, avoiding jargon and unexplained abbreviations.",
        "Objective — describing what was observed, not assumptions or personal opinions about a person.",
        "Complete — containing all the information a colleague would need to provide safe care without asking further questions.",
        "Attributable — every entry signed, dated, timed, and attributed to the named individual who made it.",
        "Secure — stored so that only those with a legitimate professional need can access them.",
      ],
      warningBox: "Never alter, delete, or add to a care record retrospectively without clearly indicating that the entry is a late addition. Falsifying care records is serious misconduct and may constitute fraud under the Fraud Act 2006. It is also grounds for referral to the DBS and, where the person is a registered professional, their regulatory body.",
    },
    {
      title: "Care Record Content",
      body: "Every service user's care record must contain as a minimum:\n• An up-to-date, signed, and dated care plan reviewing all care and support needs.\n• A current risk assessment for all identified risks.\n• A daily care record/communication log recording significant events and observations.\n• Medication Administration Record (MAR) where medication is administered.\n• Records of any falls, incidents, or complaints relating to that service user.\n• Advance care planning documentation (where applicable).\n• Consent forms for care activities.\n• Records of contact with family, GP, or other professionals.\n\nCare records must reflect what actually happened — not a template description of what should happen. CQC inspectors read care records and will identify templated, copy-pasted, or inaccurate entries.",
      practiceBox: "When making a care record entry, ask yourself: 'If a colleague who has never met this person read this record, would they have everything they need to provide safe and personalised care?' If not, add more detail.",
    },
    {
      title: "Confidentiality and Information Sharing",
      body: "All personal information about service users, staff, and [ORGANISATION_NAME]'s business is confidential. Staff may only access and share records where they have a legitimate professional reason to do so.\n\nConfidential information may be shared:\n• With the service user's consent.\n• Where there is a legal obligation to share (e.g. court order, statutory notification).\n• In the public interest — specifically, where withholding information would place someone at serious risk of harm (e.g. safeguarding concerns, public health emergencies).\n• To provide continuity of care — sharing with other professionals directly involved in the person's care.\n\nSharing confidential information with family members, friends, or other third parties requires either the service user's explicit consent or a documented best interest decision where the person lacks capacity. 'The family always know everything' is not a lawful basis for sharing.",
      legalBox: "The Data Protection Act 2018 and UK GDPR require that personal data is processed lawfully, fairly, and transparently. The lawful basis for most care data processing is either performance of a contract (care agreement) or a legal obligation. Special category data (health data) requires an additional condition under Article 9 of UK GDPR, typically the provision of health or social care. Breach of these requirements may result in ICO investigation and significant financial penalties.",
    },
    {
      title: "Record Retention Schedule",
      body: "Records must be retained for the following minimum periods:",
      subSections: [
        {
          heading: "Care Records",
          body: "Adult service users: minimum 8 years from the last entry (longer if the record contains information about a significant incident, complaint, or legal matter).\nDeceased service users: minimum 8 years from the date of death.\nChildren and young people: until the person's 25th birthday, or 8 years from the last entry — whichever is later.\nMental health records: 20 years from last contact or 8 years after death.",
        },
        {
          heading: "Personnel Records",
          body: "Employment records: 6 years from the end of employment.\nDBS disclosures: destroy within 6 months of the recruitment decision.\nAccident and incident records: 3 years from the date of the incident (10 years for serious incidents or fatalities).\nTraining records: duration of employment plus 3 years.",
        },
        {
          heading: "Financial Records",
          body: "Accounting records: 6 years from the end of the financial year.\nVAT records: 6 years.\nPayroll records: 3 years from the end of the relevant tax year.",
        },
      ],
      legalBox: "Records must not be destroyed before their retention period has elapsed, even if the service has closed. Early destruction of records relevant to ongoing legal proceedings may be treated as contempt of court. Check with your insurer and legal adviser before destroying any records relating to a significant incident.",
    },
    {
      title: "Subject Access Requests",
      body: "Any service user, employee, or their authorised representative has the right to request a copy of all personal data held about them. This is a Subject Access Request (SAR) under UK GDPR Article 15.\n\nAll SARs must be handled as follows:",
      procedure: [
        "Record the request and the date received. The one-month response clock starts immediately.",
        "Verify the identity of the requester — you must be sure you are sending information to the right person.",
        "Compile all personal data held — care records, correspondence, emails, and any other medium.",
        "Review before disclosure — redact any third-party personal data (e.g. information about other service users or staff members named in the records).",
        "Provide the data in a clear, accessible format — electronically by default.",
        "Respond within one calendar month. If the request is complex, you may extend by a further 2 months, but you must inform the requester within the first month.",
        "Keep a record of the SAR, your response, and any redactions made.",
      ],
    },
  ],
  relatedDocuments: [
    "wl-005 — Data Protection & GDPR Policy",
    "wl-014 — Information Governance Policy",
    "wl-001 — Governance Framework",
    "eff-001 — Care Planning Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Records Retention Schedule", content: "Full tabular schedule of all record types held by [ORGANISATION_NAME], their legal retention period, storage location, and method of secure destruction. Updated annually by the Registered Manager." },
    { title: "Appendix B — Subject Access Request Log", content: "Register for recording all SARs: requester's name; date received; deadline; records compiled; redactions made; date provided; any extension applied." },
  ],
  versionHistory: [
    { version: "3.9", date: "2026-04-25", changes: "Updated retention schedule for mental health records; strengthened SAR procedure; added falsification warning." },
    { version: "3.7", date: "2025-06-01", changes: "Updated GDPR lawful basis section; aligned retention periods with NHS Records Management Code 2021." },
    { version: "3.5", date: "2024-03-01", changes: "Full review post UK GDPR commencement; added information sharing principles." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-007  Lone Working Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF007_CONTENT: DocumentContent = {
  title: "Lone Working Policy",
  policyId: "SAF-007",
  version: "4.1",
  effectiveDate: "2026-03-10",
  reviewDate: "2027-03-10",
  approvedBy: "Registered Manager",
  scope: "All staff at [ORGANISATION_NAME] who work alone at any point during their duties, including domiciliary care workers visiting service users' homes, night-shift staff in residential settings, community keyworkers, and staff travelling between sites.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a Lone Working Risk Assessment is completed annually and updated when lone working arrangements change.",
        "Ensure a lone worker check-in system is in place and operational at all times.",
        "Ensure all lone workers receive lone working safety training within their induction.",
        "Investigate all lone working incidents and near misses.",
        "Ensure staff are not required to work alone in situations where the risk cannot be adequately managed.",
      ],
    },
    {
      role: "All Lone Workers",
      duties: [
        "Follow the lone worker check-in procedure on every occasion they work alone.",
        "Carry and know how to use their personal safety device or lone worker alarm.",
        "Report any security or safety concerns about a visit location to their manager before attending.",
        "Never enter a premises where they feel unsafe without contacting their manager first.",
        "Report all lone working incidents and near misses, however minor, immediately.",
      ],
    },
  ],
  legislation: [
    "Health and Safety at Work etc. Act 1974 — employer duty to ensure, so far as reasonably practicable, the health, safety and welfare of employees",
    "Management of Health and Safety at Work Regulations 1999 — duty to assess risks to employees",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Violence at Work: A Guide for Employers (HSE guidance)",
    "Personal Protective Equipment at Work Regulations 1992",
  ],
  definitions: [
    { term: "Lone Worker", definition: "A member of staff who works without direct supervision or the immediate presence of a colleague who could assist in the event of an emergency, accident, or violent incident." },
    { term: "Lone Worker Device", definition: "A device — typically a mobile app, dedicated fob, or personal alarm — that enables a lone worker to raise an alert or that automatically raises an alert if the worker fails to check in." },
    { term: "Dynamic Risk Assessment", definition: "Continuous assessment of risk in real time during a lone working visit, enabling the worker to adapt their approach or withdraw from a situation if the risk increases beyond what was anticipated." },
    { term: "No-Visit Decision", definition: "A decision, made in advance or on arrival, not to enter a premises because the risk to the lone worker is unacceptably high. All lone workers have the right to make this decision without fear of reprisal." },
  ],
  sections: [
    {
      title: "Identifying Lone Working Risk",
      body: "Lone working is inherently higher risk than working in a team because help is not immediately available. The key risks for lone workers at [ORGANISATION_NAME] include:",
      bulletPoints: [
        "Physical violence or aggression from service users, family members, or other persons.",
        "Psychological harm from threatening, abusive, or distressing interactions.",
        "Medical emergency with no colleague present to assist (e.g. allergic reaction, accident).",
        "Accident or injury without assistance (e.g. trip, fall while moving equipment).",
        "Road traffic accident when travelling between service users.",
        "Security risks when visiting unfamiliar or high-risk locations.",
        "Mental health impact of prolonged social isolation in solo roles.",
      ],
      legalBox: "The Management of Health and Safety at Work Regulations 1999 (Regulation 3) require [ORGANISATION_NAME] to assess the specific risks of lone working and take steps to eliminate or reduce those risks so far as reasonably practicable. It is not sufficient simply to provide a mobile phone — a systematic risk assessment and appropriate control measures are required.",
    },
    {
      title: "Before a Lone Working Visit",
      body: "Before undertaking any lone working visit, the following preparatory steps must be taken:",
      procedure: [
        "Check the service user's risk assessment and any relevant alerts or warnings in the care record.",
        "Confirm the visit schedule with your manager or control room — they must know where you are going and when you expect to finish.",
        "Check your lone worker device is charged and working before leaving.",
        "Ensure your mobile phone is charged. Share your schedule with a nominated contact if required by local procedure.",
        "Note any concerning information from previous visits or handover — do not disregard verbal warnings from colleagues.",
        "If a visit location is flagged as high risk or if you have personal concerns about the visit, contact your manager before attending. You may request a joint visit.",
      ],
    },
    {
      title: "Check-In Procedure",
      body: "[ORGANISATION_NAME] operates a lone worker check-in system. All lone workers must:\n\n1. Check in at the start of each visit/shift using the designated method (phone call, app, or text).\n2. Check in at the end of each visit and notify any significant delay.\n3. Make an emergency check-in call if they feel at risk at any point.\n\nThe on-call manager or control room is responsible for acting on any missed check-in within the agreed timeframe (default: 15 minutes overdue). Action on a missed check-in includes:\n• Attempt to contact the worker by phone.\n• If no response within 5 further minutes: contact the service user's location.\n• If still no contact: alert the police and the Registered Manager.",
      warningBox: "A missed check-in must never be ignored or written off as a phone signal problem without first making all reasonable attempts to contact the worker. Failure to respond to a missed check-in that results in harm to a lone worker is a serious organisational failure.",
    },
    {
      title: "Violence and Aggression — Response and Reporting",
      body: "Every member of staff has the absolute right to withdraw from any situation where they feel unsafe. No service user outcome, however important, justifies exposing a member of staff to unacceptable violence or aggression.\n\nWhere a lone worker experiences or witnesses violence or aggression:\n• Use de-escalation techniques and remove yourself from the situation if possible.\n• Do not attempt to physically intervene unless this is covered by specific training and your role.\n• Activate your lone worker alarm or call 999 if in immediate danger.\n• Report the incident immediately to your manager.\n• Complete an incident report before the end of the shift.\n• Do not return to the address alone until a risk assessment has been reviewed and a safe visiting plan is agreed.",
      practiceBox: "Reporting violence and aggression is essential — not optional. Underreporting means risk assessments stay out of date, other colleagues face the same risk uninformed, and patterns are not identified. Your safety matters. Report everything.",
    },
    {
      title: "Night-Shift Lone Working",
      body: "Staff working alone overnight in a residential setting face specific risks including managing emergencies without immediate colleague support. The following controls apply:\n\n• Night staff must have a working lone worker device or emergency contact system throughout the shift.\n• A named on-call manager must be contactable at all times.\n• Night staff must be trained in basic life support and fire safety with specific reference to their overnight role.\n• An agreed escalation procedure must be documented and known to all night staff — when to call 999, when to call the on-call manager, when to call emergency services for a service user.",
    },
  ],
  relatedDocuments: [
    "saf-006 — Risk Assessment Policy",
    "saf-011 — Violence & Aggression Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "wl-003 — Supervision & Appraisal Policy",
  ],
  appendices: [
    { title: "Appendix A — Lone Worker Risk Assessment Template", content: "Assessment covering: role and activities; identified hazards; current controls; residual risk score; additional actions; check-in procedure; emergency contacts; review date." },
    { title: "Appendix B — Lone Worker Check-In Log", content: "Daily log recording: worker name; visit/shift start time; expected finish; check-in times during shift; finish confirmed; any issues or incidents reported." },
  ],
  versionHistory: [
    { version: "4.1", date: "2026-03-10", changes: "Added night-shift section; updated missed check-in response timescales; strengthened no-visit right." },
    { version: "4.0", date: "2025-05-01", changes: "Full review; added lone worker device requirements; updated violence response guidance." },
    { version: "3.7", date: "2024-02-01", changes: "Revised to align with HSE violence at work guidance; added dynamic risk assessment section." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-003  Nutrition & Hydration Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF003_CONTENT: DocumentContent = {
  title: "Nutrition & Hydration Policy",
  policyId: "EFF-003",
  version: "4.4",
  effectiveDate: "2026-02-28",
  reviewDate: "2027-02-28",
  approvedBy: "Registered Manager",
  scope: "All service users receiving care from [ORGANISATION_NAME] where nutrition and hydration are relevant to their care and support needs. This policy covers assessment, monitoring, mealtime support, and the management of malnutrition and dehydration risk.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure MUST or equivalent nutritional screening is completed on admission and at 3-monthly reviews.",
        "Ensure referral pathways to dietitian, SALT, and GP are clearly documented and followed.",
        "Monitor nutrition-related incidents (unplanned weight loss, pressure ulcers, dehydration) at governance meetings.",
        "Ensure mealtime support training is included in staff induction and update training.",
      ],
    },
    {
      role: "Senior Care Workers",
      duties: [
        "Complete and review nutritional screenings for assigned service users.",
        "Ensure food and fluid charts are completed for at-risk individuals and acted upon.",
        "Refer concerns about nutritional intake to the GP and dietitian within 24 hours where deterioration is rapid.",
        "Ensure all dietary requirements are communicated to kitchen staff and correctly provided.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Support service users to eat and drink in a way that respects their dignity and preferences.",
        "Record food and fluid intake accurately on monitoring charts where required.",
        "Report concerns about poor intake, swallowing difficulties, or significant weight loss immediately.",
        "Never rush mealtimes — allow adequate time for every service user.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 14 — Meeting nutritional and hydration needs",
    "Care Act 2014 — well-being principle (physical and mental health)",
    "Mental Capacity Act 2005 — consent to and best interest decisions about nutrition",
    "NICE Guideline CG32 — Nutrition support for adults (2006, updated 2017)",
    "NICE Quality Standard QS24 — Nutrition support in adults (2012, updated 2024)",
  ],
  definitions: [
    { term: "MUST", definition: "Malnutrition Universal Screening Tool. A validated 5-step nutritional screening tool developed by BAPEN. Calculates malnutrition risk using: BMI; unplanned weight loss %; and the effect of acute illness. Score 0 = low risk; 1 = medium risk; 2+ = high risk." },
    { term: "Malnutrition", definition: "A state of deficiency, excess, or imbalance of energy, protein, or other nutrients. In care settings, the primary concern is undernutrition — insufficient intake to meet physiological needs." },
    { term: "Dehydration", definition: "A state of insufficient fluid intake relative to losses. In older adults, dehydration is a leading cause of falls, confusion, UTI, pressure ulcers, and hospital admission. Minimum fluid intake is generally 1.5–2 litres per day, though individual needs vary." },
    { term: "Dysphagia", definition: "Difficulty swallowing. Common in older adults and those with neurological conditions including stroke, dementia, and Parkinson's disease. Unmanaged dysphagia risks aspiration pneumonia, malnutrition, and death." },
    { term: "SALT", definition: "Speech and Language Therapist. The clinical professional responsible for assessing and managing dysphagia, recommending food and fluid texture modification, and advising on safe swallowing techniques." },
  ],
  sections: [
    {
      title: "Nutritional Screening and Assessment",
      body: "Every service user must receive a nutritional screening on admission using the MUST tool. The screening must be repeated:\n• At every 3-monthly care review.\n• After any unplanned weight loss of 5% or more.\n• Following a hospital admission.\n• When there is a significant change in appetite, ability to eat, or health status.\n\nMUST scores determine the level of monitoring and intervention required:\n• Score 0 (Low risk) — routine care; record food and fluid intake as part of general observation.\n• Score 1 (Medium risk) — observe and document food intake for 3 days; if concerns persist, refer to GP or dietitian.\n• Score 2+ (High risk) — refer to dietitian within 24 hours; increase monitoring; consider supplementary nutrition.",
      legalBox: "CQC Regulation 14 requires [ORGANISATION_NAME] to ensure service users have adequate nutrition and hydration for their health and wellbeing. This is a fundamental standard. Findings of preventable malnutrition or dehydration — particularly where records show the problem was identified but not acted upon — frequently result in CQC enforcement action and may constitute a safeguarding concern.",
    },
    {
      title: "Mealtime Environment and Experience",
      body: "The mealtime experience has a profound effect on nutrition intake and on wellbeing. At [ORGANISATION_NAME], mealtimes are treated as a social and dignified experience:",
      bulletPoints: [
        "Mealtimes are protected time — clinical and administrative tasks are not to be conducted in dining areas during meals.",
        "Service users are seated comfortably and upright before food is presented.",
        "Staff are seated alongside service users who require assistance — never standing over them.",
        "Television and loud noise are minimised during mealtimes to support concentration.",
        "Food presentation is attractive — using appropriate crockery and utensils, not disposable items without reason.",
        "Adaptive equipment (plate guards, wide-handled cutlery, non-slip mats) is available and used when assessed as appropriate.",
        "Mealtimes are never rushed. Any service user who needs longer is given that time.",
      ],
      practiceBox: "Protected Mealtimes is an NHS initiative that has been shown to improve food intake by 30% or more. [ORGANISATION_NAME] applies Protected Mealtime principles to all main meal periods. Interruptions during mealtimes — including non-urgent medication rounds — should be avoided where possible.",
    },
    {
      title: "Dietary Requirements and Choice",
      body: "Every service user's dietary requirements — including medical, cultural, religious, and personal preferences — must be documented in their care plan on admission and reviewed at every care review.\n\nDietary requirements must be communicated to kitchen staff in writing and confirmed when menus are planned. Common requirements to document and provide for:\n• Textured modified diets (IDDSI levels 1–7) — confirmed by SALT assessment.\n• Diabetic diet — confirmed by GP or dietitian.\n• High calorie / high protein — where supplementation is required.\n• Religious dietary law — halal, kosher, Hindu vegetarian, etc.\n• Allergies and intolerances — especially the 14 major allergens under the Food Information Regulations 2014.\n• Personal preferences — likes, dislikes, meal timing, portion size.",
      warningBox: "A food allergy can be life-threatening. The Food Information for Consumers Regulation 2014 requires all 14 major allergens to be declared. [ORGANISATION_NAME] must maintain allergen information for all menu items and ensure staff are trained to identify and respond to allergic reactions. If a service user has a severe allergy (e.g. nut anaphylaxis), an Emergency Action Plan must be in place and all staff must know it.",
    },
    {
      title: "Monitoring At-Risk Individuals",
      body: "Service users identified as at medium or high risk via MUST must have active monitoring in place:",
      procedure: [
        "Commence a food intake record — recording estimated percentage of each meal eaten.",
        "Commence a fluid intake record — recording all fluids consumed across 24 hours.",
        "Weigh the service user weekly (or more frequently if the risk is high).",
        "Record weight in the care plan and flag any loss of 2% or more in one week.",
        "Offer snacks and high-calorie drinks between meals.",
        "Review the monitoring record daily — do not wait until the weekly weigh-in if intake is significantly reduced.",
        "Refer to GP and/or dietitian if intake remains poor for 3 or more consecutive days.",
        "Document all referrals, responses, and changes to the care plan.",
      ],
    },
    {
      title: "Dysphagia Management",
      body: "Dysphagia must be managed according to the SALT assessment and the IDDSI (International Dysphagia Diet Standardisation Initiative) framework. IDDSI describes 8 levels of food texture and fluid thickness:\n\nFluids: Level 0 (Thin) → Level 4 (Extremely thick)\nFoods: Level 3 (Liquidised) → Level 7 (Regular)\n\nAll staff involved in food preparation and service must be trained in IDDSI. The SALT assessment determines the required levels; kitchen and care staff must implement these without deviation. Providing food or fluid at the wrong consistency to a person with dysphagia can cause aspiration pneumonia, which is a leading cause of preventable death in care homes.\n\nAny change in swallowing ability — new coughing, choking, wet voice, or refusal of certain textures — must be referred to the SALT immediately.",
    },
  ],
  relatedDocuments: [
    "eff-001 — Care Planning Policy",
    "eff-010 — Dysphagia & Swallowing Difficulties Policy",
    "eff-002 — Mental Capacity Act Policy",
    "car-001 — Dignity & Respect Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — MUST Screening Tool", content: "Step-by-step MUST calculation: Step 1 — BMI score (0/1/2); Step 2 — Weight loss score (0/1/2); Step 3 — Acute disease effect score (0/2); Step 4 — Add scores; Step 5 — Management guidelines per risk category." },
    { title: "Appendix B — IDDSI Framework Quick Reference", content: "Visual reference card showing all 8 IDDSI levels with food and fluid descriptors, testing methods (fork drip, spoon tilt), and key indicators for each level. For use by kitchen and care staff." },
  ],
  versionHistory: [
    { version: "4.4", date: "2026-02-28", changes: "Updated IDDSI reference to current version; added allergen warning for 14 major allergens; strengthened SALT referral timescale." },
    { version: "4.2", date: "2025-04-01", changes: "Added Protected Mealtimes guidance; updated MUST implementation procedure." },
    { version: "4.0", date: "2024-01-15", changes: "Full review; adopted IDDSI framework replacing National Descriptors; updated NICE QS24 reference." },
  ],
};
