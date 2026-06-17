/**
 * Medication specialist policies — full flagship depth.
 * SAF-019  PRN (As Required) Medication Policy              (NEW)
 * SAF-020  Medication Error Reporting & Management          (NEW)
 * SAF-013  Controlled Drugs Policy                          (ENHANCED — replaces medium-depth)
 * SAF-016  Medicines Covert Administration Policy           (ENHANCED — replaces medium-depth)
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// SAF-019  PRN (As Required) Medication Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF019_CONTENT: DocumentContent = {
  title: "PRN (As Required) Medication Policy",
  policyId: "SAF-019",
  version: "1.0",
  effectiveDate: "2026-06-17",
  reviewDate: "2027-06-17",
  approvedBy: "Registered Manager / Clinical Lead",

  statement:
    "[ORGANISATION_NAME] is committed to the safe, person-centred use of PRN (as required) medicines. A PRN dose must only be given following clinical assessment confirming genuine need. Every administration must be recorded with the symptom, assessment score and outcome. PRN patterns will be audited monthly and escalated to the prescriber where frequency indicates unmet need or ineffective treatment.",

  scope:
    "This policy applies to all [ORGANISATION_NAME] staff involved in medication management, including registered nurses, healthcare assistants with verified medicines administration competency, and managers. It covers all PRN medicines: analgesics, anxiolytics, laxatives, antiemetics, inhalers, topical preparations, rescue medicines and anticipatory end of life medications.",

  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure this policy is implemented, reviewed annually and understood by all relevant staff.",
        "Ensure only staff with current, verified medicines administration competency administer PRN medicines.",
        "Conduct or commission monthly PRN audit; escalate high-frequency use to the GP or prescriber.",
        "Ensure PRN medications are reviewed at every GP medicines review (minimum annually).",
        "Maintain a register of staff competencies for PRN administration, including any restricted-scope authorisations.",
      ],
    },
    {
      role: "Registered Nurses",
      duties: [
        "Conduct clinical assessment using validated tools before each PRN administration.",
        "Administer and countersign Schedule 2 CD PRN doses in accordance with the Controlled Drugs Policy (SAF-013).",
        "Record the indication, assessment score, dose and outcome on the MAR chart.",
        "Escalate to the GP when PRN medicines are used at high frequency or appear ineffective.",
        "Supervise healthcare assistants administering PRN medicines within their competency scope.",
      ],
    },
    {
      role: "Trained Care Staff",
      duties: [
        "Only administer PRN medicines within their competency-verified scope of practice.",
        "Conduct and document a pre-administration assessment for every PRN dose.",
        "Seek guidance from the nurse-in-charge or manager if unsure whether a PRN dose is appropriate.",
        "Never administer a PRN medicine outside the prescriber's specified indication, dose, route or interval.",
        "Report any concerns about PRN frequency or effectiveness to the Registered Manager.",
      ],
    },
    {
      role: "GP / Prescriber",
      duties: [
        "Prescribe PRN medicines with clear indication, dose or dose range, route, minimum interval and maximum daily dose.",
        "Review PRN prescriptions at every medicines review and discontinue when no longer required.",
        "Respond promptly when escalated regarding high-frequency PRN use or inadequate symptom control.",
        "Provide clear written instructions for dose ranges to support safe titration by care staff.",
      ],
    },
    {
      role: "Pharmacist",
      duties: [
        "Review PRN medications as part of structured medicines reviews.",
        "Advise on appropriate formulations, dose ranges, interactions and storage.",
        "Flag clinical concerns about PRN prescriptions to the prescriber and service.",
      ],
    },
  ],

  legislation: [
    "Medicines Act 1968",
    "Human Medicines Regulations 2012",
    "Misuse of Drugs Regulations 2001 (as amended) — PRN controlled drugs",
    "Mental Capacity Act 2005 — assessing need in persons who cannot self-report",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12 (Safe care and treatment)",
    "NICE Guideline NG67: Medicines Optimisation (2015)",
    "NMC Standards for Medicines Management (2010)",
    "CQC: Safe Management of Medicines in Care Homes (2019)",
    "Royal Pharmaceutical Society: Professional Guidance on the Administration of Medicines in Healthcare Settings (2019)",
  ],

  definitions: [
    {
      term: "PRN Medication",
      definition:
        "A medicine prescribed 'as required' (pro re nata) to be given in response to a specific symptom or condition, not at a fixed regular time. Each administration requires fresh clinical assessment.",
    },
    {
      term: "PRN Dose Range",
      definition:
        "Where a prescriber specifies a minimum and maximum dose (e.g. morphine 2.5–5 mg), the lowest effective dose should always be administered first, with the rationale for a higher dose documented.",
    },
    {
      term: "Anticipatory Medication",
      definition:
        "PRN medicines prescribed in advance for symptoms expected during the dying phase (e.g. morphine for pain, midazolam for agitation). All are controlled drugs and subject to the CD Policy.",
    },
    {
      term: "Rescue Medication",
      definition:
        "Emergency PRN medicine for acute episodes such as seizures (e.g. buccal midazolam, rectal diazepam). Staff must administer rapidly without waiting for the GP; a trained-staff protocol must be in place.",
    },
    {
      term: "Minimum Interval",
      definition:
        "The shortest period that must elapse between two PRN doses, as specified by the prescriber (e.g. 'no more frequently than every 4 hours'). This must always be checked before administering.",
    },
    {
      term: "Abbey Pain Scale / PAINAD",
      definition:
        "Validated observational tools for assessing pain in people with advanced dementia or communication difficulties who cannot self-report. Required for non-verbal residents before PRN analgesia.",
    },
  ],

  sections: [
    {
      title: "1. What Constitutes a PRN Medication",
      body:
        "A PRN medication is prescribed for administration only when a specific symptom or clinical need is present. The existence of a PRN prescription on the MAR chart does not mean the medicine should be given automatically — clinical need must be assessed on each occasion.\n\nCommon PRN categories in care settings include: analgesics (paracetamol, ibuprofen, opioids); anxiolytics/sedatives (lorazepam, diazepam); laxatives; antiemetics; inhalers; topical preparations; rescue medicines (buccal midazolam); and anticipatory end of life medications.",
      subSections: [
        {
          title: "1.1 Lawful PRN Prescription Requirements",
          body:
            "A PRN prescription must include all of the following before any dose may be administered:\n\n• The drug name (generic), dose or dose range, and route\n• The specific indication (the symptom that must be present)\n• The minimum interval between doses\n• The maximum dose in 24 hours\n• The prescriber's signature and date\n\nIf any element is absent, the prescriber must be contacted before administration.",
          warningBox:
            "NEVER administer a PRN medicine if the prescription lacks an indication, maximum dose or minimum interval. Contact the GP or on-call prescriber first. Administering an incompletely prescribed medicine constitutes a medication error.",
        },
        {
          title: "1.2 Regular vs PRN — When to Escalate",
          body:
            "Consistent PRN use may indicate that a regular prescription is more appropriate. If paracetamol PRN for pain is given at every opportunity for three or more consecutive days, this must be escalated to the GP. The GP should review whether the underlying cause is being managed and whether a regular analgesic regimen is needed.",
        },
      ],
    },
    {
      title: "2. Assessment Before Administration",
      body:
        "Before every PRN dose, the administering staff member must conduct a documented clinical assessment confirming that the prescribed indication is present and that no contraindication has arisen.",
      subSections: [
        {
          title: "2.1 Pain Assessment",
          body:
            "For residents who can self-report, use a Numerical Rating Scale (NRS 0–10) or verbal equivalent. A score of 4 or above generally indicates moderate pain warranting pharmacological intervention, subject to the prescriber's specific instructions.\n\nFor residents with advanced dementia or communication difficulties, use a validated observational tool:\n• Abbey Pain Scale — validated for late-stage dementia\n• PAINAD Scale (Pain Assessment in Advanced Dementia) — five-item behavioural tool\n• Doloplus-2 — validated across multiple care settings\n\nThe assessment score must be documented on the MAR chart alongside every PRN administration entry.",
          practiceBox:
            "Establish baseline pain scores for residents with dementia when they are comfortable. Document this baseline in the care plan so that staff can identify clinically significant increases that warrant PRN analgesia.",
        },
        {
          title: "2.2 Anxiety and Distress Assessment",
          body:
            "Before administering any PRN anxiolytic or sedative, consider and document:\n\n• Whether an unmet physical need may be the cause (pain, urinary retention, constipation, discomfort)\n• Whether environmental adjustments could help (noise, lighting, familiar presence)\n• Whether non-pharmacological comfort measures have been attempted (repositioning, music, reassurance)\n\nPharmacological intervention should follow, not precede, non-pharmacological approaches.",
          warningBox:
            "Anxiolytics and sedatives (including lorazepam and zopiclone) carry significant risks in older adults: falls, respiratory depression, paradoxical agitation and dependency. Use the lowest possible dose, for the shortest possible time, only after non-pharmacological measures.",
        },
        {
          title: "2.3 Checking Before Every Dose",
          body:
            "Before administering each PRN dose, confirm:\n\n• The minimum interval since the last dose has elapsed\n• The maximum daily dose has not been reached (check all doses given in the preceding 24 hours)\n• No new contraindication has arisen (new drug interaction, acute illness, renal deterioration)\n• The person has not refused consent to the dose",
        },
      ],
    },
    {
      title: "3. Administration and Recording",
      body:
        "PRN medicines must be administered following the same safe standards as regular medicines: correct person, drug, dose, route and time, with contemporaneous recording.",
      subSections: [
        {
          title: "3.1 MAR Chart Requirements for PRN",
          body:
            "Every PRN administration must be recorded immediately after the dose is given. The MAR chart entry must include:\n\n• Exact time of administration\n• Dose administered (particularly important for dose ranges)\n• Administering staff member's signature\n• A code or brief note: the symptom and severity (e.g. 'pain NRS 6/10' or 'constipation — 3 days no BM')\n• Outcome documented within 30–60 minutes (e.g. 'pain reduced to 2/10', 'no improvement after 1 hour — GP informed')",
          practiceBox:
            "Outcome documentation within 30–60 minutes is the element most commonly missing at CQC inspections. It demonstrates effective clinical practice and is essential for identifying ineffective PRN medications that require prescriber review.",
        },
        {
          title: "3.2 Non-Administration",
          body:
            "If a PRN dose is assessed but not given (e.g. the resident declines, or non-pharmacological intervention resolves the symptom), document the reason on the MAR chart using the appropriate code. This is not an omission — it is a clinical decision that must be recorded to demonstrate assessment was conducted.",
        },
      ],
    },
    {
      title: "4. Reviewing PRN Patterns",
      body:
        "Regular review of PRN usage is essential to identify uncontrolled symptoms, inappropriate prescribing and opportunities to optimise care.",
      subSections: [
        {
          title: "4.1 Monthly PRN Audit",
          body:
            "The Registered Manager or designated medicines lead must review PRN administration records monthly, identifying:\n\n• Any PRN medicine used more than 10 times in the month\n• Any PRN medicine that appears ineffective (symptoms reoccur quickly or scores remain high)\n• Any PRN controlled drug with increasing frequency of use\n• Any PRN medicine unused for more than three months (review for discontinuation)\n\nAudit findings must be documented and escalated to the GP or prescriber where indicated.",
        },
        {
          title: "4.2 Frequency Thresholds Requiring GP Review",
          body:
            "The following usage patterns must prompt an urgent GP review:\n\n• PRN analgesia given more than twice daily on three or more consecutive days\n• PRN anxiolytic or sedative used more than three times per week\n• PRN laxative required daily for more than two consecutive weeks\n• PRN antiemetic used more than twice per week consistently\n• Any PRN opioid showing a consistent pattern of increasing frequency",
          warningBox:
            "Do not continue administering high-frequency PRN opioids or benzodiazepines without a documented GP review. Escalate immediately when these thresholds are reached — continued administration without review exposes residents to tolerance, dependency and serious harm.",
        },
      ],
    },
    {
      title: "5. PRN Controlled Drugs",
      body:
        "PRN controlled drugs (opioid analgesics, midazolam, diazepam, buprenorphine) require all standard PRN procedures plus enhanced CD requirements.",
      subSections: [
        {
          title: "5.1 Storage and Stock",
          body:
            "All PRN controlled drugs must be stored in the locked CD cabinet. PRN CD stock must be included in the twice-daily CD balance check and recorded in the CD register in accordance with the Controlled Drugs Policy (SAF-013).",
          legalBox:
            "Under the Misuse of Drugs Regulations 2001, all Schedule 2 CDs (including morphine, oxycodone, fentanyl and diamorphine) must be entered in the CD register on every administration — whether regular or PRN. The quantity removed, the resident's name, the administering staff member and the witness must be recorded contemporaneously.",
        },
        {
          title: "5.2 Two-Person Administration",
          body:
            "Administration of a PRN Schedule 2 CD must be:\n\n• Witnessed by a second authorised staff member — no exceptions\n• Recorded in the CD register immediately after administration\n• Recorded on the MAR chart with the dose, route, assessment score and outcome\n• The CD register entry must show: date, time, resident's name, dose removed, running balance, administering staff signature and witness signature",
        },
        {
          title: "5.3 PRN CD Dose Ranges",
          body:
            "Where a CD is prescribed as a range (e.g. morphine 2.5–5 mg SC PRN), start at the lowest dose. Document the clinical justification in the CD register and care record if the higher dose is used. Contact the prescriber if:\n\n• The maximum dose provides inadequate relief\n• The minimum interval is consistently being reached\n• Signs of tolerance, side effects or respiratory depression develop",
          practiceBox:
            "For residents in the dying phase with range-prescribed CDs, use a dedicated End of Life symptom monitoring chart alongside the MAR. This shows CQC inspectors — and families — a clear, compassionate record of symptom management.",
        },
      ],
    },
    {
      title: "6. Anticipatory and End of Life PRN Medication",
      body:
        "[ORGANISATION_NAME] will work with the GP, palliative care team and community nursing service to ensure anticipatory medications are prescribed and available early in the dying phase. All anticipatory medications are controlled drugs and must be managed under SAF-013.",
      subSections: [
        {
          title: "6.1 Common Anticipatory Medications",
          body:
            "Commonly prescribed anticipatory PRN medicines include:\n\n• Morphine or diamorphine — pain and breathlessness\n• Midazolam — agitation, distress and anxiety\n• Hyoscine butylbromide (Buscopan) or glycopyrronium — respiratory secretions\n• Levomepromazine (Nozinan) or haloperidol — nausea and vomiting\n\nAll of these require subcutaneous (SC) administration, which may only be performed by a registered nurse or healthcare professional with a current verified SC injection competency.",
          warningBox:
            "Subcutaneous injection of anticipatory medications may ONLY be performed by a registered nurse with documented SC injection competency. Under no circumstances should a healthcare assistant administer a subcutaneous injection, regardless of their medicines administration training level.",
        },
        {
          title: "6.2 Out-of-Hours Access",
          body:
            "Anticipatory medications must be accessible at all times. The on-call GP service (NHS 111 or local out-of-hours) must be aware they are in place. The End of Life care plan must state who to contact if symptoms arise outside regular hours and where medications are stored.",
        },
      ],
    },
    {
      title: "7. Rescue Medication",
      body:
        "Rescue medications are emergency PRN medicines for acute episodes. Unlike most PRN medicines, they must be administered quickly without waiting for the GP. All staff who may need to administer rescue medication must be trained and competency-assessed before working with that individual.",
      subSections: [
        {
          title: "7.1 Epilepsy Rescue Medication",
          body:
            "Commonly prescribed epilepsy rescue medicines:\n\n• Buccal midazolam (Buccolam/Epistatus) — given between gum and cheek; Schedule 3 CD\n• Rectal diazepam (Stesolid) — administered rectally\n• Intranasal midazolam — administered into the nostril\n\nStaff must complete a specific epilepsy medicines administration competency — general medicines training is insufficient. An individual Healthcare Protocol (IHP) must be in place for each resident with prescribed rescue medication.",
          legalBox:
            "Buccal midazolam is a Schedule 3 Controlled Drug. It must be stored in the CD cabinet, recorded in the CD register on administration, and its administration witnessed. The IHP must be written with the prescriber and reviewed at least annually.",
        },
        {
          title: "7.2 When to Call 999 After Rescue Medication",
          body:
            "Call 999 immediately after rescue medication if:\n\n• A tonic-clonic seizure has not stopped within 5 minutes of rescue medication being given\n• A second seizure occurs within 24 hours\n• The person remains unconscious for more than 5 minutes after the seizure ends\n• There are concerns about airway, breathing or circulation\n• This is the person's first known seizure\n\nNever administer a second rescue dose unless it is explicitly prescribed and clinically reviewed.",
          warningBox:
            "A second dose of rescue medication without specific prescriber instruction risks severe respiratory depression. Never give an additional dose on your own initiative.",
        },
      ],
    },
    {
      title: "8. Mental Capacity and PRN Medication",
      body:
        "For individuals who lack capacity to consent to PRN medication, administration must be a documented best interests decision under the Mental Capacity Act 2005.",
      subSections: [
        {
          title: "8.1 Assessment in Non-Verbal Individuals",
          body:
            "For people who cannot communicate pain verbally, use observational assessment and look for:\n\n• Facial expressions: grimacing, furrowing of brow, clenched teeth\n• Vocalisation: groaning, crying, calling out\n• Body language: guarding of limbs, rigidity, restlessness\n• Physiological changes: elevated heart rate, sweating, flushing\n• Behavioural change from baseline: increased confusion, withdrawal, agitation\n\nA significant change from the person's established baseline is clinically meaningful and may warrant PRN administration.",
        },
        {
          title: "8.2 Covert PRN Administration",
          body:
            "If covert administration of a PRN medicine is being considered, this must follow the Medicines Covert Administration Policy (SAF-016) and requires a formal best interests decision, GP involvement and a written covert medication care plan. Covert administration must never be an informal decision made by care staff.",
        },
      ],
    },
    {
      title: "9. Staff Competency",
      body:
        "Only staff with a current verified medicines administration competency may administer PRN medicines. Additional specific competencies are required for certain PRN medicines.",
      subSections: [
        {
          title: "9.1 Core Requirements",
          body:
            "All staff administering PRN medicines must hold a current verified competency covering:\n\n• Medicines administration theory and practical assessment\n• Pain and symptom assessment including use of Abbey Pain Scale and PAINAD\n• MAR chart documentation including PRN recording standards\n• Specific training for any specialist PRN medicines in their scope\n\nCompetency must be renewed annually or following any medication error or extended absence.",
        },
        {
          title: "9.2 Restricted PRN Medicines",
          body:
            "The following may only be administered by registered nurses unless a specific extended competency has been formally authorised:\n\n• All subcutaneous injections\n• Buccal midazolam and rectal diazepam (unless epilepsy competency held)\n• All anticipatory end of life medications\n• Schedule 2 CD PRN (unless extended scope formally authorised)\n\nA staff competency register must be maintained and kept up to date.",
        },
      ],
    },
  ],

  training:
    "All staff authorised to administer PRN medicines must complete: (1) Medicines administration theory and practical competency assessment; (2) Pain and symptom assessment training including Abbey Pain Scale and PAINAD; (3) MAR chart recording standards, including PRN outcome documentation; (4) Specific training for specialist PRN medicines (rescue medication, end of life CDs) where relevant. Competency is renewed annually. Records are held in each staff member's personnel file.",

  monitoring:
    "[ORGANISATION_NAME] monitors this policy through: (1) Monthly PRN usage audit identifying high-frequency users and ineffective medicines; (2) Quarterly MAR chart audit including PRN recording quality and outcome documentation; (3) Six-monthly medicines management audit including PRN stock reconciliation; (4) Review of all medication incidents involving PRN medicines; (5) Annual policy review incorporating changes to national guidance, legislation and CQC expectations.",

  relatedDocuments: [
    "SAF-010 — Medication Management Policy",
    "SAF-011 — Medication Administration Procedure",
    "SAF-013 — Controlled Drugs Policy",
    "SAF-016 — Medicines Covert Administration Policy",
    "SAF-020 — Medication Error Reporting & Management Procedure",
  ],

  versionHistory: [
    {
      version: "1.0",
      date: "2026-06-17",
      changes: "Policy created. Full flagship-depth content covering PRN assessment, recording, CD PRN, anticipatory medications, rescue medication, capacity considerations and staff competency.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-020  Medication Error Reporting & Management Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const SAF020_CONTENT: DocumentContent = {
  title: "Medication Error Reporting & Management Procedure",
  policyId: "SAF-020",
  version: "1.0",
  effectiveDate: "2026-06-17",
  reviewDate: "2027-06-17",
  approvedBy: "Registered Manager / Clinical Lead",

  statement:
    "[ORGANISATION_NAME] is committed to an open, transparent approach to medication errors. All medication errors and near misses must be reported, investigated and used as learning opportunities. We will fulfil our Duty of Candour obligations and report serious medication errors to the Care Quality Commission where required. We operate a just culture — blame-free reporting is essential to safety. Staff involved in medication errors will receive support.",

  scope:
    "This procedure applies to all [ORGANISATION_NAME] staff involved in any aspect of medication management, including prescribers, registered nurses, healthcare assistants, managers and pharmacy staff. It covers all medication errors and near misses regardless of whether harm occurred. It applies to all medicines including controlled drugs and over-the-counter preparations.",

  responsibilities: [
    {
      role: "All Staff",
      duties: [
        "Report any medication error or near miss immediately to the nurse-in-charge and Registered Manager, regardless of whether harm occurred.",
        "Complete an incident report within 24 hours of discovering or being involved in a medication error.",
        "Cooperate fully with any investigation into a medication error.",
        "Never attempt to conceal a medication error — this constitutes a serious disciplinary and professional conduct matter.",
      ],
    },
    {
      role: "Registered Nurses",
      duties: [
        "Take immediate clinical action following a medication error: stay with the person, assess for harm, contact the GP or NHS 111.",
        "Complete the incident report and notify the Registered Manager immediately.",
        "Document the error accurately in the person's care record and on the MAR chart (do not falsify or omit).",
        "Support the investigation by providing a full factual account.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Ensure immediate clinical safety of the affected person is addressed first.",
        "Notify the person's GP, family or next of kin, and the pharmacist as appropriate to the severity of the error.",
        "Determine whether the error constitutes a CQC notifiable incident and submit notification within the required timeframe.",
        "Lead or commission a proportionate investigation and root cause analysis.",
        "Implement and monitor corrective actions; share learning with the team.",
        "Report controlled drug errors to the NHS England Controlled Drugs Accountable Officer.",
        "Ensure staff involved receive appropriate support.",
      ],
    },
    {
      role: "Provider / Nominated Individual",
      duties: [
        "Ensure the Duty of Candour obligation is met in the event of a notifiable safety incident.",
        "Review medication error trends at governance meetings; ensure systemic issues are addressed.",
        "Ensure serious medication errors are reported to CQC via the provider portal within 10 working days where required.",
      ],
    },
  ],

  legislation: [
    "Medicines Act 1968",
    "Human Medicines Regulations 2012",
    "Misuse of Drugs Act 1971 (for CD errors)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 20 (Duty of Candour)",
    "Care Quality Commission (Registration) Regulations 2009 — Regulation 18 (Notifications of other incidents)",
    "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR)",
    "Health and Safety at Work etc. Act 1974",
    "NICE Guideline NG67: Medicines Optimisation (2015)",
    "MHRA Yellow Card scheme — adverse drug reaction reporting",
    "NHS England: National Patient Safety Incident Response Framework (PSIRF, 2022)",
    "CQC: How CQC regulates: Adult social care services provider handbook (2015, updated)",
  ],

  definitions: [
    {
      term: "Medication Error",
      definition:
        "Any preventable event that may cause or lead to inappropriate medication use or patient harm, including prescribing errors, dispensing errors, administration errors, omission errors, monitoring errors and transcription errors.",
    },
    {
      term: "Near Miss",
      definition:
        "An error that was identified and corrected before the medicine reached the person, or before any harm could result. Near misses are as important to report as actual errors — they reveal the same systemic weaknesses.",
    },
    {
      term: "Administration Error",
      definition:
        "Any deviation from the prescriber's written order for a medicine, including: wrong person, wrong drug, wrong dose, wrong route, wrong time, omission (missed dose), or extra dose.",
    },
    {
      term: "Notifiable Safety Incident",
      definition:
        "Under Regulation 20 (Duty of Candour), an unintended or unexpected incident that resulted in, or could result in, moderate harm, severe harm or death. The provider must notify the person or their representative and provide an apology.",
    },
    {
      term: "MHRA Yellow Card",
      definition:
        "The UK reporting system for suspected adverse drug reactions, defective medicines, or medication errors resulting in harm. Reports can be submitted online at yellowcard.mhra.gov.uk.",
    },
    {
      term: "Root Cause Analysis (RCA)",
      definition:
        "A structured investigation technique used to identify the underlying causes of an incident — not just the immediate cause — to prevent recurrence. Techniques include the 5 Whys and fishbone (Ishikawa) diagram.",
    },
    {
      term: "Duty of Candour",
      definition:
        "The legal duty under Regulation 20 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 to be open and transparent with people receiving care when things go wrong. It requires notification, an apology, and an explanation of what happened.",
    },
  ],

  sections: [
    {
      title: "1. Classification of Medication Errors",
      body:
        "Medication errors are classified by type and by severity of harm. Both determine the required response.",
      subSections: [
        {
          title: "1.1 Types of Medication Error",
          body:
            "Wrong person — medicine given to the wrong resident\nWrong drug — incorrect medicine given\nWrong dose — incorrect quantity given (including overdose and underdose)\nWrong route — e.g. oral medicine given parenterally, or eye drop administered in ear\nWrong time — medicine given significantly outside the prescribed time window (more than 1 hour early or late for time-critical medicines)\nOmission error — a prescribed dose was not given and not documented as refused\nExtra dose — a dose given in addition to those already administered\nWrong formulation — e.g. modified-release tablet crushed when it should not be\nExpired medicine — medicine administered after its expiry date\nTranscription error — error introduced when copying or transcribing a prescription",
        },
        {
          title: "1.2 Severity Classification",
          body:
            "No harm: Error occurred but did not reach the person, or reached the person with no discernible clinical effect.\n\nLow harm: Short-term, minor clinical effect, no treatment required.\n\nModerate harm: Clinical effect requiring additional monitoring, treatment or intervention.\n\nSevere harm: Permanent or long-term harm, significant clinical intervention required, admission to hospital.\n\nDeath: The error directly or probably caused or contributed to the death.\n\nThe severity classification determines the level of investigation required and whether CQC notification and Duty of Candour obligations are triggered.",
          legalBox:
            "Regulation 20 (Duty of Candour) is triggered by 'moderate harm, severe harm or death' caused by a notifiable safety incident. Moderate harm means harm that requires a moderate increase in treatment and that causes significant but not permanent patient harm.",
        },
      ],
    },
    {
      title: "2. Immediate Response to a Medication Error",
      body:
        "The immediate priority is always the safety of the affected person. The following actions must be taken in sequence:",
      subSections: [
        {
          title: "2.1 First Response Steps",
          body:
            "1. Stay with the person and observe for adverse effects.\n2. Do not leave the person alone unless to call for immediate help.\n3. Contact the GP or NHS 111 immediately — describe the error, the medicine, the dose given and the person's current condition. Follow their clinical advice.\n4. Contact the Registered Manager (or on-call senior) immediately if they are not already aware.\n5. Do not administer any further doses of the medicine until the error has been reviewed and the prescriber has confirmed what action to take.\n6. Do not alter, amend or destroy any documentation — preserve the MAR chart, CD register and packaging as they are.",
          warningBox:
            "Never delay calling the GP to 'see if the person is alright first.' Some overdose effects (e.g. opioid toxicity, insulin hypoglycaemia) are time-critical and require urgent clinical guidance or emergency intervention. Call immediately.",
        },
        {
          title: "2.2 What to Tell the GP",
          body:
            "When contacting the GP, provide:\n\n• The person's name, date of birth and current condition\n• The medicine involved: name, strength, dose actually given vs dose prescribed\n• The route of administration\n• The time the error was made and the time it was discovered\n• Any symptoms or signs observed\n• Other medicines the person is taking (potential interactions)\n\nDocument the GP's advice and any instructions they give in the care record.",
        },
        {
          title: "2.3 Recording the Error",
          body:
            "Do not falsify the MAR chart. If a wrong dose was given, record what actually happened with a note. If the error involved a CD, record the discrepancy in the CD register and report it to the Registered Manager immediately.\n\nComplete a written incident report within 24 hours. The incident report must include: date, time and location; nature of the error; medicines involved; how the error occurred; immediate actions taken; any harm that resulted.",
        },
      ],
    },
    {
      title: "3. Notification and Reporting Requirements",
      body:
        "Different notifications are required depending on the nature and severity of the error. These requirements are legal obligations and must not be delayed.",
      subSections: [
        {
          title: "3.1 Internal Reporting",
          body:
            "All medication errors and near misses must be reported to the Registered Manager on the day of discovery. The incident report must be completed within 24 hours. Medication errors must be logged in the service's incident register and reviewed at the next team meeting or governance review.",
        },
        {
          title: "3.2 Notification to the Person and Family",
          body:
            "The person (where they have capacity) and/or their next of kin or lasting power of attorney must be informed of any medication error that reaches them — regardless of whether harm occurred — as soon as practicable and no later than 24 hours after discovery. This notification must include a clear explanation of what happened and an apology for any distress caused.",
        },
        {
          title: "3.3 CQC Notification Requirements",
          body:
            "A medication error must be reported to CQC via the provider portal in the following circumstances:\n\n• The error resulted in the death of a service user\n• The error resulted in serious injury to a service user\n• The error involved a controlled drug discrepancy that cannot be resolved\n• The error constitutes a notifiable safety incident under Regulation 20\n\nNotification must be made as soon as reasonably practicable and in any event within 10 working days of the incident.",
          legalBox:
            "Under the Care Quality Commission (Registration) Regulations 2009 Regulation 18, providers must notify CQC of any incident which affects the health, safety or welfare of persons using the service. Failure to notify CQC of a notifiable incident is a breach of registration conditions.",
        },
        {
          title: "3.4 RIDDOR Reporting",
          body:
            "Under the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 (RIDDOR), a medication error must be reported to the HSE where it results in:\n\n• The death of an employee or member of the public\n• A specified serious injury to an employee\n• An over-three-day incapacitation injury to an employee\n\nReports are made via HSE's online reporting system. A fatality must be reported immediately by telephone; other reportable incidents within 10 days.",
        },
        {
          title: "3.5 Notification to Pharmacist",
          body:
            "The dispensing pharmacist must be notified of any error involving a dispensing error on their part, or any error that affects stock levels (particularly controlled drugs). The pharmacist may need to adjust their dispensing or labelling systems.",
        },
      ],
    },
    {
      title: "4. Controlled Drug Errors",
      body:
        "Medication errors involving controlled drugs require enhanced reporting in addition to standard medication error procedures.",
      subSections: [
        {
          title: "4.1 Immediate Actions for CD Errors",
          body:
            "When a CD error is discovered:\n\n1. Preserve the CD register and all relevant stock — do not destroy or remove anything.\n2. Notify the Registered Manager immediately.\n3. Record the discrepancy in the CD register with the date and time discovered.\n4. Contact the GP if the error has clinical implications for the person.\n5. Do not attempt to 'correct' the CD register — record the discrepancy accurately and investigate.",
          warningBox:
            "Never attempt to balance a CD register discrepancy by removing or destroying stock, or by falsifying entries. This constitutes a criminal offence under the Misuse of Drugs Act 1971 and would be treated as the most serious form of CD misuse.",
        },
        {
          title: "4.2 Reporting CD Discrepancies",
          body:
            "All unresolved CD discrepancies must be reported to:\n\n• The NHS England Controlled Drugs Accountable Officer (CDAO) for the area — within 24 hours\n• The CQC if the discrepancy cannot be resolved — as a notifiable incident\n• The police if theft or diversion is suspected\n\nThe Accountable Officer may attend to investigate. Full cooperation with their investigation is required.",
        },
      ],
    },
    {
      title: "5. Duty of Candour",
      body:
        "Where a medication error constitutes a notifiable safety incident (causing moderate harm, severe harm or death), [ORGANISATION_NAME] must comply with its Duty of Candour obligations under Regulation 20 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014.",
      subSections: [
        {
          title: "5.1 Steps Required by Duty of Candour",
          body:
            "The provider must:\n\n1. Notify the person (or, where they lack capacity, their next of kin or representative) as soon as reasonably practicable after the incident.\n2. Provide a truthful account of all the facts known at the time.\n3. Apologise — a sincere written apology must be provided. An apology does not constitute an admission of liability.\n4. Offer reasonable support to the person or their family.\n5. Provide a written record of all Duty of Candour actions taken.\n6. Provide a written summary of the investigation and any action taken to prevent recurrence.",
          legalBox:
            "Failure to comply with the Duty of Candour is a breach of a fundamental standard regulated by CQC and may result in enforcement action. The duty applies regardless of whether the person or family asks for information.",
        },
      ],
    },
    {
      title: "6. Investigation and Root Cause Analysis",
      body:
        "Every medication error resulting in harm requires a proportionate investigation. Serious errors require a full root cause analysis (RCA). Near misses also require investigation — they reveal the same systemic weaknesses as actual errors.",
      subSections: [
        {
          title: "6.1 Proportionate Investigation Levels",
          body:
            "No harm / near miss: Concise review at team level; document what happened and what change is needed.\n\nLow harm: Manager review; incident report analysis; identify contributory factors; implement specific corrective action.\n\nModerate to severe harm: Full RCA; include GP and pharmacist; identify root causes (not just proximate cause); implement and monitor systemic changes.\n\nDeath: Serious incident review; involve the provider board; consider external review; notify CQC.",
        },
        {
          title: "6.2 Root Cause Analysis — 5 Whys",
          body:
            "The 5 Whys technique asks 'Why?' five times progressively to move from the immediate cause to the underlying system failure. For example:\n\nWhy did the resident receive the wrong dose? — The staff member selected the wrong strength tablet.\nWhy was the wrong strength selected? — Two strengths were stored adjacent to each other.\nWhy were they stored adjacently? — There was no system for separating SALAD (Sound-Alike, Look-Alike Drugs).\nWhy was no SALAD system in place? — No risk assessment had been conducted for storage.\nWhy had no risk assessment been conducted? — Medicines storage risk assessments were not part of the induction process.\n\nThis reveals that the root cause is a systems failure in induction and risk assessment, not individual carelessness.",
        },
        {
          title: "6.3 Contributory Factors Framework",
          body:
            "All investigations should consider the following contributory factor categories:\n\n• Communication failures (handover, transcription, verbal instructions)\n• Training and competency (inadequate training, competency gaps)\n• Task and workload factors (high workload, distractions, interruptions)\n• Working environment (poor lighting, cluttered medicines room, noise)\n• Equipment and supplies (illegible labels, similar packaging, faulty equipment)\n• Individual factors (fatigue, stress, health, knowledge gaps)",
        },
        {
          title: "6.4 Learning and Action",
          body:
            "Every investigation must produce a written action plan with specific, measurable changes. Actions may include: changes to storage or labelling; revised procedures or checklists; targeted training; medication reconciliation improvements; introduction of double-checking procedures; near-miss reporting improvement.\n\nThe action plan must be shared with the whole team, implemented within an agreed timescale, and reviewed at the next medicines management governance meeting.",
          practiceBox:
            "The most effective way to demonstrate learning to CQC is to show that the same type of error has not recurred. Keep records of actions taken and your subsequent audit results. If the action worked, that is powerful evidence of an effective safety culture.",
        },
      ],
    },
    {
      title: "7. MHRA Yellow Card Reporting",
      body:
        "The MHRA Yellow Card scheme allows healthcare staff to report suspected adverse drug reactions (ADRs), problems with medical devices, and medication errors that result in harm. Reports are submitted online at yellowcard.mhra.gov.uk.",
      subSections: [
        {
          title: "7.1 When to Submit a Yellow Card",
          body:
            "Submit a Yellow Card report for:\n\n• Any suspected adverse drug reaction — even if causality is uncertain\n• A defective medicine (discolouration, particles, wrong contents)\n• A medication error that caused harm\n• Counterfeit or substandard medicines\n• Problems with medicine packaging or labelling contributing to an error\n\nYellow Card reports contribute to national pharmacovigilance and help identify previously unknown drug risks. All health and care staff are encouraged to report.",
        },
      ],
    },
    {
      title: "8. Supporting Staff After a Medication Error",
      body:
        "Staff involved in medication errors may experience significant distress, guilt and anxiety — sometimes described as being a 'second victim'. [ORGANISATION_NAME] is committed to supporting staff through this experience while maintaining a fair investigation process.",
      subSections: [
        {
          title: "8.1 Staff Support Principles",
          body:
            "Immediate support: The Registered Manager will speak privately with the member of staff as soon as practicable after the error is discovered, to ensure they understand what happened next and to offer initial support.\n\nJust culture: [ORGANISATION_NAME] operates a just culture where individual blame is distinguished from system failure. A good-faith error by a competent, trained member of staff is treated differently from a deliberate act, reckless behaviour or repeated failure.\n\nConfidentiality: The details of support provided to staff are treated in confidence.\n\nOngoing support: If the error resulted in serious harm or death, access to occupational health, an Employee Assistance Programme or counselling will be offered to the staff member involved.",
          practiceBox:
            "Research consistently shows that staff who fear punishment are less likely to report errors and near misses. A just culture and a blame-free reporting environment are the most effective tools for reducing medication errors over time. Every near miss reported is a future harm prevented.",
        },
        {
          title: "8.2 When Formal Action Is Required",
          body:
            "Despite a just culture approach, formal investigation or disciplinary action may be required where:\n\n• An error resulted from gross negligence or reckless disregard for safety\n• An error resulted from deliberate act (including theft or diversion of controlled drugs)\n• The staff member has made repeated similar errors despite remedial training\n• The staff member failed to report a known error\n\nIn such cases, the investigation must be conducted in line with [ORGANISATION_NAME]'s disciplinary policy and, where applicable, professional regulatory requirements (NMC, GMC).",
        },
      ],
    },
  ],

  training:
    "All staff with medicines administration responsibility must complete: (1) Medicines error recognition and reporting training as part of initial medicines administration competency; (2) Incident reporting procedure training; (3) Annual refresher on medication safety, including the duty to report near misses; (4) Root cause analysis training for managers and designated leads. Training records are maintained in personnel files.",

  monitoring:
    "[ORGANISATION_NAME] monitors medication error management through: (1) Monthly review of all medication incidents in the incident register; (2) Quarterly trend analysis identifying recurrent error types, times, drugs and staff; (3) Six-monthly medicines management audit including error prevention controls; (4) Annual review of this policy incorporating changes to legislation, CQC expectations and national learning; (5) Benchmarking against national medicines safety alerts from NHS England and MHRA.",

  relatedDocuments: [
    "SAF-010 — Medication Management Policy",
    "SAF-011 — Medication Administration Procedure",
    "SAF-013 — Controlled Drugs Policy",
    "SAF-016 — Medicines Covert Administration Policy",
    "SAF-019 — PRN (As Required) Medication Policy",
    "GOV-003 — Duty of Candour Policy",
    "GOV-007 — Incident Reporting and Management Policy",
  ],

  versionHistory: [
    {
      version: "1.0",
      date: "2026-06-17",
      changes:
        "Policy created. Full flagship-depth content covering error classification, immediate response, CQC notification, Duty of Candour, RIDDOR, CD errors, RCA methodology, MHRA Yellow Card, and staff support.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-013  Controlled Drugs Policy — ENHANCED full flagship depth
// ─────────────────────────────────────────────────────────────────────────────
export const SAF013_ENHANCED: DocumentContent = {
  title: "Controlled Drugs Policy",
  policyId: "SAF-013",
  version: "5.0",
  effectiveDate: "2026-06-17",
  reviewDate: "2027-06-17",
  approvedBy: "Registered Manager / Accountable Officer function",

  statement:
    "[ORGANISATION_NAME] will manage all controlled drugs (CDs) in full compliance with the Misuse of Drugs Act 1971, the Misuse of Drugs Regulations 2001 and the Health Act 2006. Every CD receipt, administration and disposal will be witnessed, recorded contemporaneously in the CD register and reconciled against physical stock. Any CD discrepancy will be reported to the NHS England Controlled Drugs Accountable Officer within 24 hours. No controlled drug will be destroyed or disposed of except in accordance with the legal requirements of the 2001 Regulations.",

  scope:
    "This policy applies to all [ORGANISATION_NAME] staff who handle, prescribe, supply, administer, store or are responsible for oversight of controlled drugs. It applies to all Schedule 2 and Schedule 3 controlled drugs held at [ORGANISATION_NAME]'s premises, including those prescribed for specific residents and any stock held for anticipatory use.",

  responsibilities: [
    {
      role: "Registered Manager (Accountable Officer function)",
      duties: [
        "Ensure the CD register is maintained in full compliance with the Misuse of Drugs Regulations 2001.",
        "Ensure CD stock is checked and witnessed by two authorised staff at every administration and recorded.",
        "Ensure the CD cabinet complies with the Misuse of Drugs (Safe Custody) Regulations 1973 and BS EN 1143-1.",
        "Report any unresolved CD discrepancy to the NHS England Controlled Drugs Accountable Officer (CDAO) within 24 hours.",
        "Conduct or commission a CD audit at least quarterly; maintain audit records.",
        "Cooperate fully with inspections by CQC, the CDAO, police or other authorised bodies.",
        "Ensure all CD entries are completed in ink and that no entry is erased or altered — corrections use a single line with the correct entry alongside.",
      ],
    },
    {
      role: "Authorised Administering Staff",
      duties: [
        "Administer CDs only when qualified, trained and with an authorised witness present.",
        "Sign the CD register at the time of administration — never in advance or retrospectively.",
        "Count and reconcile the CD stock balance at every administration and record the running balance.",
        "Report any discrepancy, breakage or spillage immediately to the nurse-in-charge and Registered Manager.",
        "Never remove a CD from the premises except for the resident's lawful administration or authorised return.",
      ],
    },
    {
      role: "Senior Care Staff (Witness Role)",
      duties: [
        "Act as witness to CD administration where authorised — confirm the drug, dose and person's identity independently.",
        "Sign the CD register as witness immediately after administration.",
        "Never witness an administration they did not observe directly.",
      ],
    },
  ],

  legislation: [
    "Misuse of Drugs Act 1971 — classification of controlled substances; criminal offences",
    "Misuse of Drugs Regulations 2001 (as amended, including 2014 tramadol amendment and 2019 gabapentin/pregabalin) — schedules 1–5; storage, supply and record-keeping",
    "Misuse of Drugs (Safe Custody) Regulations 1973 — CD cabinet specification",
    "Health Act 2006, sections 17–23 — Accountable Officers for controlled drugs",
    "Human Medicines Regulations 2012",
    "Care Quality Commission (Registration) Regulations 2009 — CQC powers regarding CD registers",
    "NICE Guideline NG67: Medicines Optimisation (2015)",
    "NHS England: Controlled Drugs: guidance for health and social care providers (2020)",
  ],

  definitions: [
    {
      term: "Schedule 2 Controlled Drug",
      definition:
        "The most tightly regulated CD category in therapeutic use. Requires: full CD register; two-witness administration; safe custody storage; prescription requirements; authorised destruction. Examples: morphine, diamorphine, oxycodone, fentanyl, methadone, pethidine, methylphenidate, amphetamines.",
    },
    {
      term: "Schedule 3 Controlled Drug",
      definition:
        "Subject to prescription and safe custody requirements. CD register required for temazepam and buprenorphine only. Examples: buprenorphine, temazepam, tramadol (since 2014), midazolam (since 2008), phenobarbital. Gabapentin and pregabalin (Class C CDs since 2019) are Schedule 3 but currently exempt from safe custody — check current guidance.",
    },
    {
      term: "Schedule 4 Controlled Drug",
      definition:
        "Part I — benzodiazepines (diazepam, lorazepam, nitrazepam, zopiclone, zolpidem): subject to prescription requirements, not safe custody. Part II — anabolic steroids: similar restrictions. Exempt from CD register requirements.",
    },
    {
      term: "CD Register",
      definition:
        "A bound, permanently paginated record of all Schedule 2 CD receipts and administrations. Entries must be in ink, contemporaneous, include a running balance and be signed by both the administering staff member and the witness. No erasure is permitted — errors are corrected by a single line through and initialled.",
    },
    {
      term: "CD Cabinet",
      definition:
        "A fixed cabinet compliant with the Misuse of Drugs (Safe Custody) Regulations 1973 (minimum: BS EN 1143-1 Grade 0 or BS 2881). The cabinet must be bolted to a load-bearing wall or floor. Keys must be kept by the most senior person on duty at all times.",
    },
    {
      term: "Controlled Drugs Accountable Officer (CDAO)",
      definition:
        "The person designated by NHS England to oversee CD management across health and social care providers in a geographic area. All care home CD discrepancies and concerns must be reported to the CDAO.",
    },
  ],

  sections: [
    {
      title: "1. Legal Framework and Schedule Classification",
      body:
        "Controlled drugs are classified under the Misuse of Drugs Act 1971 into Classes A, B and C, reflecting their potential for harm and misuse. Separately, the Misuse of Drugs Regulations 2001 classify them into Schedules 1–5, which determine the legal controls applying to each drug in a healthcare context.\n\nCare homes are primarily concerned with Schedule 2 and Schedule 3 drugs, which carry the most stringent healthcare obligations. [ORGANISATION_NAME] must know the schedule of every CD held and apply the corresponding controls precisely.",
      subSections: [
        {
          title: "1.1 Key Schedule 2 Drugs in Care Settings",
          body:
            "Morphine, diamorphine (heroin), oxycodone, fentanyl, buprenorphine (injections), methadone, pethidine, methylphenidate, dexamfetamine. All require: full CD register; two-witness administration; safe custody storage; destruction by an authorised person. These drugs carry the highest risk of diversion and must be managed with the most rigorous controls.",
          warningBox:
            "Any Schedule 2 CD discrepancy — including a missing tablet, unexplained balance difference, or broken packaging — must be reported to the Registered Manager immediately and to the CDAO within 24 hours. Do not wait to see if it resolves itself.",
        },
        {
          title: "1.2 Schedule 3 — Key Additions",
          body:
            "Tramadol was rescheduled to Schedule 3 in 2014. Midazolam was added to Schedule 3 in 2008 (buccal midazolam requires safe custody storage). Gabapentin and pregabalin became Schedule 3 in 2019 — they are currently exempt from safe custody but do require prescriptions and should be reviewed under medicines management controls. Temazepam requires CD register entries despite being Schedule 3.",
        },
      ],
    },
    {
      title: "2. Ordering and Receipt of Controlled Drugs",
      body:
        "Controlled drugs must be ordered on a valid CD prescription and received with appropriate checking procedures.",
      subSections: [
        {
          title: "2.1 Ordering",
          body:
            "Schedule 2 CDs must be ordered on a signed prescription form (FP10CDF for NHS prescriptions, or private CD prescription). For care homes, the prescriber typically sends the prescription directly to the dispensing pharmacy.\n\nStock levels should be kept sufficient for clinical need but must not exceed what is required. Excessive stockpiling of CDs is a risk and may indicate poor prescribing review or diversion. Review prescriptions promptly when residents are discharged, hospitalised or when their prescription changes.",
        },
        {
          title: "2.2 Receipt",
          body:
            "When CDs are received from the pharmacy:\n\n1. Two authorised staff members must be present to receive and count the delivery.\n2. The quantity received must be checked against the prescription and the pharmacy dispensing label.\n3. A receipt entry must be made in the CD register immediately, signed by both persons.\n4. The running balance must be updated and verified against physical stock.\n5. Any discrepancy between what was ordered and what was received must be reported to the pharmacy and Registered Manager immediately — do not accept an unverifiable quantity.",
          practiceBox:
            "When counting Schedule 2 CDs on receipt, the staff member and witness should each count independently and then compare results before recording. This two-count approach identifies discrepancies immediately and protects both staff members.",
        },
      ],
    },
    {
      title: "3. Storage",
      body:
        "Controlled drugs must be stored in a secure cabinet that meets the legal specification and in a way that limits access to authorised staff only.",
      subSections: [
        {
          title: "3.1 CD Cabinet Requirements",
          body:
            "The CD cabinet must:\n\n• Be constructed to BS EN 1143-1 Grade 0 or above (formerly BS 2881)\n• Be fixed — bolted to a load-bearing wall or concrete floor — so it cannot be removed\n• Have a lock that cannot be opened by the emergency pass key for the building\n• Be within a locked room or medication room where possible\n• Not have the key left in the lock or stored in an obvious location\n\nKeys must be held by the most senior qualified person on duty at all times. If a key is lost, report immediately to the Registered Manager and arrange re-keying.",
        },
        {
          title: "3.2 Segregation",
          body:
            "Different residents' CDs must be clearly separated within the cabinet, and different CDs must not be stored in the same container unless specifically labelled. CDs must not be stored with other (non-CD) medicines. The CD register must be stored securely alongside the CD cabinet.",
        },
      ],
    },
    {
      title: "4. The CD Register",
      body:
        "The CD register is a legal document. Incorrect or incomplete CD register entries are a regulatory offence. Every entry must be made contemporaneously, in ink, by the administering staff member, with the witness countersigning.",
      subSections: [
        {
          title: "4.1 Register Format Requirements",
          body:
            "The CD register must be:\n\n• A bound book (not loose leaf) with pages that cannot be removed without evidence of tampering\n• Permanently numbered or paginated\n• Dedicated — one drug per page (morphine 10 mg tablets on one page, morphine 30 mg on another)\n• Written in ink only — ball-point, fountain or rollerball\n• Retained for two years after the last entry\n\nDigital CD registers are permissible if the electronic system complies with Home Office requirements — seek specific guidance before implementing.",
          legalBox:
            "Under the Misuse of Drugs Regulations 2001 (Regulation 19), entries in a CD register must be made in ink or otherwise so as to be indelible. No entry may be erased. An incorrect entry must be corrected by making a marginal note or footnote specifying the date of the correction — not by obliterating the original entry.",
        },
        {
          title: "4.2 Required Information per Entry",
          body:
            "Each CD register entry must record:\n\n• Date of administration (or receipt)\n• Name and address of the person to whom the CD was supplied (for administrations: the resident's name)\n• Amount obtained/supplied (for receipt: quantity received; for administration: quantity given)\n• Running stock balance\n• Form of the CD (tablets, oral solution, injection, patch)\n• For administrations: signature of the person who administered and signature of the witness",
        },
        {
          title: "4.3 Balance Reconciliation",
          body:
            "The running balance recorded in the CD register must be reconciled against the physical count of stock at every administration. Where a balance discrepancy is found:\n\n1. Do not administer until the discrepancy is resolved or the Registered Manager has authorised continuation.\n2. Recount the physical stock carefully.\n3. Review the last several register entries for calculation errors.\n4. If unresolved after recount and register review: report to the Registered Manager for investigation and to the CDAO.",
          practiceBox:
            "Twice-daily CD balance checks — independent of any administration — provide early warning of discrepancies and demonstrate robust governance. Many services conduct these at the beginning of each shift. Records of these checks should be kept.",
        },
      ],
    },
    {
      title: "5. Administration of Controlled Drugs",
      body:
        "The administration of Schedule 2 CDs requires two authorised staff present, contemporaneous CD register entry and MAR chart documentation.",
      subSections: [
        {
          title: "5.1 Two-Person Requirement",
          body:
            "Every Schedule 2 CD administration must involve:\n\n• A primary administering staff member — the person who prepares and gives the dose\n• A witness — a second authorised staff member who observes the entire process and countersigns the CD register\n\nNeither the administering staff member nor the witness may sign in advance. Both signatures are applied immediately after the dose is given to the resident.\n\nWhere only one qualified staff member is on duty and a witness is unavailable, the CD must not be administered until a second person is available — except in a genuine life-threatening emergency where clinical risk outweighs procedural risk, which must be documented immediately.",
          warningBox:
            "A CD register entry signed by only one person is non-compliant and will be flagged as a serious concern at CQC inspection. Ensure adequate staffing to support two-person CD administration at all times, including nights and weekends.",
        },
        {
          title: "5.2 Administration Procedure",
          body:
            "1. Both staff members go to the CD cabinet together.\n2. The primary staff member removes the CD from the cabinet and counts the stock (the witness counts independently).\n3. The dose is prepared in front of the witness.\n4. Identity of the resident is confirmed using at least two identifiers.\n5. The CD is administered to the resident in the presence of the witness.\n6. Immediately after administration, both staff members enter and sign the CD register: date, time, resident's name, dose given, form, balance remaining.\n7. The MAR chart is completed: time, dose, route, signature.\n8. For PRN CDs, document the assessment score and, within 30–60 minutes, the outcome.",
        },
        {
          title: "5.3 Covert CD Administration",
          body:
            "Covert administration of a CD requires the same two-person procedure PLUS a valid best interests decision under the Mental Capacity Act 2005 and a written covert medication care plan as required by SAF-016. The CD register entry is unchanged — record the drug, dose, resident, and both signatures as normal.",
        },
      ],
    },
    {
      title: "6. Disposal and Destruction",
      body:
        "Controlled drugs can only be lawfully destroyed or rendered irretrievable by an authorised person. Staff must not attempt to dispose of CDs by flushing, incineration or transfer to household waste.",
      subSections: [
        {
          title: "6.1 Who May Authorise CD Destruction",
          body:
            "Schedule 2 CDs may only be destroyed in the presence of and authorised by:\n\n• A person authorised in writing by the Secretary of State (typically an Accountable Officer, pharmacist inspector or police officer)\n• A pharmacist in possession of a valid written authorisation\n\nIn practice, the dispensing pharmacist will typically collect and destroy unused Schedule 2 CDs. Destruction must be documented in the CD register: date, drug, quantity destroyed, witness.",
          legalBox:
            "Under the Misuse of Drugs Regulations 2001 Regulation 26, a Schedule 2 CD may only be destroyed in the presence of, and by or under the authority of, a person who holds a Home Office licence to destroy CDs. Destruction without an authorised witness is unlawful.",
        },
        {
          title: "6.2 Returning CDs to Pharmacy",
          body:
            "Most care homes return unused CDs to the dispensing pharmacy for destruction. When returning:\n\n1. Complete a destruction entry in the CD register: date, drug, quantity, destroyed or returned to pharmacy, signature of both witnesses.\n2. The pharmacist countersigns the destruction record.\n3. Retain the record for two years.\n\nPatients' own CDs that are no longer required should also be returned to the pharmacist for destruction.",
        },
        {
          title: "6.3 CDs on Death",
          body:
            "When a resident dies, their CDs must not be used for any other person. They must be stored securely until returned to the pharmacist for destruction. The CD register should be annotated with the date of death and the quantity held. Arrangements for pharmacy collection should be made promptly.",
        },
      ],
    },
    {
      title: "7. Patients' Own Controlled Drugs",
      body:
        "Where a resident brings controlled drugs into the service on admission (or receives them direct from a community pharmacy), specific handling procedures apply.",
      subSections: [
        {
          title: "7.1 Admission Procedure",
          body:
            "On admission, or when any CD is brought to the service:\n\n1. Count the CDs in the presence of the resident (or their representative) and one other staff member.\n2. Record the quantity in the CD register as a receipt.\n3. Check the prescription label for drug name, strength, dose instructions and prescribing doctor.\n4. Confirm the medicine is currently prescribed by obtaining confirmation from the GP.\n5. Store in the locked CD cabinet.",
        },
        {
          title: "7.2 Discrepancies on Admission",
          body:
            "If the quantity of CDs brought in by a resident does not match what was expected (based on the prescription and dispensing date), document the discrepancy and notify the Registered Manager. Do not administer the drug until the discrepancy has been reviewed and the GP has confirmed the prescription is current and appropriate.",
        },
      ],
    },
    {
      title: "8. CD Incidents and Discrepancies",
      body:
        "Any situation where actual CD stock does not match the CD register balance is a CD discrepancy and must be treated as a serious incident until proven otherwise.",
      subSections: [
        {
          title: "8.1 Immediate Response to Discrepancy",
          body:
            "1. Stop administering from the affected CD stock.\n2. Recount the physical stock independently.\n3. Review the CD register entries for the period of the discrepancy.\n4. Do not alter, remove or destroy any entries or packaging.\n5. Notify the Registered Manager immediately.\n6. If discrepancy cannot be explained within one hour, notify the CDAO.",
          warningBox:
            "A CD discrepancy that cannot be explained immediately must be treated as a potential diversion. Do not delay reporting to the CDAO — early reporting protects the service and enables the Accountable Officer to provide guidance and support.",
        },
        {
          title: "8.2 External Reporting",
          body:
            "Report to the CDAO within 24 hours of all CD discrepancies that cannot be reconciled. Report to the police where theft or diversion is suspected. Report to CQC if the discrepancy constitutes a notifiable incident under Regulation 18.",
        },
      ],
    },
    {
      title: "9. CD Audit",
      body:
        "A formal CD audit must be conducted at least quarterly by the Registered Manager or a nominated clinical lead. The audit must be documented and findings acted upon.",
      subSections: [
        {
          title: "9.1 Audit Checklist",
          body:
            "The quarterly CD audit must check:\n\n• CD register entries are complete, contemporaneous and correctly balanced\n• Physical stock matches the register balance\n• CD cabinet is secure, compliant and access restricted appropriately\n• All CD prescriptions are valid and current\n• No CD has exceeded its expiry date\n• All CD destructions/returns are documented\n• Administration records show two signatures for all Schedule 2 doses\n• Staff competency records for CD administration are current\n• All discrepancy incidents have been reported and investigated",
          practiceBox:
            "Provide the CQC inspector with your last three CD audit records, including evidence of any actions taken. A clear audit trail demonstrating proactive governance is the strongest evidence of a well-managed medicines service.",
        },
      ],
    },
  ],

  training:
    "All staff authorised to administer CDs must complete: (1) Controlled drugs theory and legislation training (as part of medicines administration competency); (2) CD register completion and balance reconciliation; (3) Two-person administration procedure and witnessing requirements; (4) CD incident and discrepancy reporting. CD competency is renewed annually. The competency register is maintained by the Registered Manager.",

  monitoring:
    "[ORGANISATION_NAME] monitors CD management through: (1) CD register reconciliation at every administration; (2) Twice-daily balance checks by the senior person on duty; (3) Quarterly formal CD audit with documented findings and actions; (4) Immediate investigation of any discrepancy; (5) CDAO notifications where required; (6) Annual policy review incorporating any changes to the Misuse of Drugs Regulations and national guidance.",

  relatedDocuments: [
    "SAF-010 — Medication Management Policy",
    "SAF-011 — Medication Administration Procedure",
    "SAF-016 — Medicines Covert Administration Policy",
    "SAF-019 — PRN (As Required) Medication Policy",
    "SAF-020 — Medication Error Reporting & Management Procedure",
    "GOV-007 — Incident Reporting and Management Policy",
  ],

  versionHistory: [
    {
      version: "5.0",
      date: "2026-06-17",
      changes:
        "Full flagship-depth enhancement. Added: Schedule classification detail including 2014 and 2019 amendments; enhanced CD register legal requirements; two-person administration procedure; patients' own CDs on admission; CD discrepancy response; quarterly audit checklist; covert CD administration cross-reference.",
    },
    {
      version: "4.0",
      date: "2026-04-28",
      changes: "Medium-depth refresh. Updated to include gabapentin/pregabalin Schedule 3 classification.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-016  Medicines Covert Administration Policy — ENHANCED full flagship depth
// ─────────────────────────────────────────────────────────────────────────────
export const SAF016_ENHANCED: DocumentContent = {
  title: "Medicines Covert Administration Policy",
  policyId: "SAF-016",
  version: "4.0",
  effectiveDate: "2026-06-17",
  reviewDate: "2027-06-17",
  approvedBy: "Registered Manager / Clinical Lead",

  statement:
    "[ORGANISATION_NAME] recognises that covert administration of medicines — giving medicine without the person's knowledge, usually by concealing it in food or drink — can be a lawful and ethical intervention for people who lack the mental capacity to consent to their medicines, where it is determined to be in their best interests. However, covert administration is never undertaken lightly: it requires a formal best interests decision under the Mental Capacity Act 2005, must involve a multidisciplinary team and a pharmacist, and must be documented in an individual covert medication care plan that is reviewed at least every three months. Any covert administration not supported by this process is unlawful and constitutes an assault.",

  scope:
    "This policy applies to all [ORGANISATION_NAME] staff involved in medicines management, care planning and direct care delivery. It applies to all residents for whom covert medication may be considered, and to all medicines (including controlled drugs). Covert administration of a PRN medicine must also comply with the PRN Medication Policy (SAF-019).",

  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure this policy is understood and implemented by all relevant staff.",
        "Ensure no covert medication is administered without a valid best interests decision and a documented covert medication care plan.",
        "Coordinate the multidisciplinary best interests meeting and ensure appropriate professionals are involved.",
        "Review covert medication care plans at least every three months and after any significant change in the resident's condition or capacity.",
        "Ensure covert medication practices are included in the quarterly medicines management audit.",
        "Report any concern about unlawful covert administration to the Safeguarding lead and, if necessary, to the relevant local authority safeguarding team.",
      ],
    },
    {
      role: "Registered Nurses",
      duties: [
        "Conduct or contribute to the mental capacity assessment for medication.",
        "Contact the GP to initiate the best interests decision-making process when covert medication is identified as potentially necessary.",
        "Consult the pharmacist regarding the safe formulation and administration method for covert medication.",
        "Administer covert medication strictly in accordance with the covert medication care plan and the administering instructions from the pharmacist.",
        "Record all covert administrations on the MAR chart as normal — concealment is in the method of giving, not in the documentation.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Never administer covert medication unless a valid covert medication care plan is in place and they have been briefed on its contents.",
        "Never decide independently to give medicine covertly — this must always be authorised in the care plan.",
        "Report any concerns about covert medication practices to the Registered Manager immediately.",
        "Maintain confidentiality of covert medication arrangements whilst ensuring all treating professionals are aware.",
      ],
    },
    {
      role: "GP / Prescriber",
      duties: [
        "Participate in the best interests decision-making process.",
        "Review the clinical appropriateness of each medicine prescribed covertly.",
        "Prescribe medicines in the most appropriate formulation for covert administration, on the advice of the pharmacist.",
        "Review the covert medication care plan at least every three months.",
      ],
    },
    {
      role: "Pharmacist",
      duties: [
        "Advise on whether each medicine can safely be crushed, dissolved, opened or otherwise modified for covert administration.",
        "Advise on alternative formulations (liquid, dispersible tablet, buccal preparations) that may be more suitable.",
        "Provide written pharmaceutical advice that is incorporated into the covert medication care plan.",
        "Review the formulation advice at each medicines review.",
      ],
    },
  ],

  legislation: [
    "Mental Capacity Act 2005 — the primary legal authority for covert medication decisions; requires assessment of capacity, best interests decision, and least restrictive option",
    "Mental Capacity Act 2005 Code of Practice — provides detailed guidance on conducting capacity assessments and best interests decisions",
    "Human Rights Act 1998 — Article 8 (right to private life), Article 3 (prohibition of degrading treatment)",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 9 (Person-centred care), Regulation 12 (Safe care and treatment)",
    "Medicines Act 1968 and Human Medicines Regulations 2012 — lawful administration of medicines",
    "Misuse of Drugs Regulations 2001 — additional requirements for covert administration of controlled drugs",
    "Equality Act 2010 — protected characteristics including disability",
    "NICE Guideline NG67: Medicines Optimisation (2015)",
    "NMC: Covert Administration of Medicines — Disguising Medicine in Food and Drink (2007)",
    "Royal Pharmaceutical Society: Guidance on crushing, opening or splitting oral dosage forms (2021)",
  ],

  definitions: [
    {
      term: "Covert Administration",
      definition:
        "Administering a prescribed medicine to a person without their knowledge, usually by concealing it in food or drink. This is distinguished from administration to a compliant, consenting person.",
    },
    {
      term: "Mental Capacity",
      definition:
        "Under the Mental Capacity Act 2005, a person lacks capacity if, because of an impairment or disturbance of the mind or brain, they cannot at the time understand the information relevant to the decision, retain it, use or weigh it, or communicate their decision.",
    },
    {
      term: "Best Interests Decision",
      definition:
        "A decision made on behalf of a person who lacks capacity, following the process in Section 4 of the Mental Capacity Act 2005. It must consider the person's past wishes, values and beliefs, involve people who care for them, and take the least restrictive appropriate option.",
    },
    {
      term: "Covert Medication Care Plan",
      definition:
        "A written care plan document specific to an individual that records: the results of the capacity assessment; the best interests decision-making process; the medicines to be given covertly; the method of administration; the pharmacist's formulation advice; review dates; and the professionals involved.",
    },
    {
      term: "Modified-Release Medicine",
      definition:
        "A medicine formulated to release its active ingredient slowly over time (prolonged-release, extended-release, sustained-release, MR, XL, LA). These must NEVER be crushed — crushing destroys the release mechanism and may cause an immediate, potentially toxic overdose.",
    },
    {
      term: "Enteric-Coated Tablet",
      definition:
        "A tablet with a coating designed to prevent dissolution in the stomach (protecting the stomach from the drug, or the drug from stomach acid). Crushing removes this protection. Enteric-coated tablets must NEVER be crushed.",
    },
  ],

  sections: [
    {
      title: "1. The Legal and Ethical Framework",
      body:
        "Covert administration of medicines without a person's knowledge is a significant intervention that engages fundamental legal rights — the right to autonomy (Article 8, Human Rights Act), the right not to receive degrading treatment (Article 3), and the law of consent to medical treatment.\n\nFor a person with mental capacity, covert administration is unlawful and constitutes an assault — it is not permissible under any circumstances, regardless of how convinced staff are that it is in the person's interest.\n\nFor a person who lacks capacity to consent to their medicines, covert administration can be lawful if — and only if — it is the outcome of a properly conducted best interests decision under the Mental Capacity Act 2005, documented in an individual covert medication care plan, and administered in the least restrictive way possible.",
      subSections: [
        {
          title: "1.1 The Five Principles of the Mental Capacity Act 2005",
          body:
            "Every covert medication decision must be grounded in the five principles of the MCA:\n\n1. A person must be assumed to have capacity unless it is established that they lack capacity.\n2. A person is not to be treated as unable to make a decision unless all practicable steps to help them do so have been taken without success.\n3. A person is not to be treated as unable to make a decision merely because they make an unwise decision.\n4. An act done or decision made for a person who lacks capacity must be done or made in their best interests.\n5. Before the act is done or decision is made, regard must be had to whether the purpose for which it is needed can be as effectively achieved in a way that is less restrictive of the person's rights and freedom of action.",
          legalBox:
            "The Mental Capacity Act 2005 applies a 'decision-specific' test of capacity. A person may lack capacity to make decisions about their medication whilst retaining capacity to make other decisions. Capacity must be assessed specifically for the question of whether to take their prescribed medicines.",
        },
        {
          title: "1.2 Covert Administration Is Not a First Resort",
          body:
            "Before covert administration is considered, [ORGANISATION_NAME] must have made and documented all reasonable attempts to:\n\n• Explain the purpose and benefits of the medicine in accessible language\n• Involve a speech and language therapist or communication specialist where appropriate\n• Trial the medicine at different times of day or in different circumstances\n• Offer the medicine in a different form (liquid instead of tablet, for example)\n• Address any apparent reason for refusal (fear, taste, side effects, misunderstanding)\n• Seek advice from a community learning disability nurse or Admiral nurse if relevant\n\nOnly when these approaches have been systematically tried and have failed should covert administration be considered.",
        },
      ],
    },
    {
      title: "2. Mental Capacity Assessment for Medication",
      body:
        "A specific mental capacity assessment must be carried out before any covert medication decision is made. The assessment must be documented, signed and reviewed at least every three months.",
      subSections: [
        {
          title: "2.1 Who Conducts the Assessment",
          body:
            "The capacity assessment for medication may be conducted by the GP, a registered nurse or a suitably trained senior care professional. The assessor must have knowledge of the Mental Capacity Act 2005, knowledge of the person, and knowledge of the specific decision being assessed.\n\nWhere there is doubt or complexity, or where the medication is for a serious condition, the GP should lead the assessment with support from the care team.",
        },
        {
          title: "2.2 The Two-Stage Capacity Test",
          body:
            "Stage 1 — Diagnostic: Is there an impairment or disturbance in the functioning of the mind or brain? This may be a diagnosis such as advanced dementia, acquired brain injury or severe learning disability.\n\nStage 2 — Functional: As a result of that impairment, can the person:\n\n• Understand the information relevant to the decision (what this medicine is, what it is for, what the consequences of not taking it are)?\n• Retain the information long enough to make the decision?\n• Use or weigh the information as part of the decision-making process?\n• Communicate the decision (by any means)?\n\nThe person lacks capacity only if they fail the Stage 2 test as a result of the Stage 1 impairment.",
        },
        {
          title: "2.3 Documenting the Capacity Assessment",
          body:
            "The capacity assessment must be recorded in the person's care file. It must include:\n\n• The date of assessment\n• The decision being assessed (i.e. whether to take their prescribed medicines)\n• The name and role of the assessor\n• The evidence supporting Stage 1 (diagnostic element)\n• The evidence supporting Stage 2 (functional element) — what information was given, how it was presented, what the person's response was\n• The conclusion: does the person lack capacity for this decision at this time?\n• The review date",
          practiceBox:
            "A capacity assessment must be time and decision specific. A person with fluctuating capacity should be assessed at a time when they are most likely to have capacity (e.g. mid-morning, after medication has taken effect, when pain is controlled). Document these timing considerations.",
        },
      ],
    },
    {
      title: "3. The Best Interests Decision-Making Process",
      body:
        "Once a person has been assessed as lacking capacity to consent to their medicines, any decision to give those medicines covertly must be made in their best interests. This requires a structured, multidisciplinary process.",
      subSections: [
        {
          title: "3.1 Best Interests Checklist (Section 4 MCA)",
          body:
            "The best interests decision must demonstrate:\n\n• All relevant circumstances have been considered\n• The person's past and present wishes, feelings, beliefs and values have been considered\n• The views of family members, carers, or anyone with LPA or deputyship for health and welfare have been sought and considered\n• The decision is not based on the person's age, appearance, condition or behaviour alone\n• Where practicable, the person has been involved in the decision as much as possible\n• Less restrictive alternatives to covert administration have been considered and found inadequate\n• The benefits and burdens of the proposed covert medication have been weighed",
        },
        {
          title: "3.2 Multidisciplinary Best Interests Meeting",
          body:
            "A formal multidisciplinary meeting must take place before any covert medication is commenced. The meeting must involve:\n\n• The GP (or hospital consultant if relevant)\n• A registered nurse or clinical lead\n• The Registered Manager\n• The dispensing pharmacist (or a pharmacist with access to the patient's medication history)\n• Where available and appropriate: family members, the person's lasting power of attorney for health and welfare (if one exists), an IMCA (Independent Mental Capacity Advocate) where the person has no family\n\nThe meeting must be recorded in the person's care file, including attendees, the decision reached, the medicines to be given covertly, and the rationale.",
          warningBox:
            "If a family member objects to covert administration, this must be documented and taken seriously. A family member does not have the legal right to veto a best interests decision, but their objection must be engaged with and the concerns addressed in the best interests documentation. Persistent serious disagreement should be referred to a mediator or solicitor experienced in MCA matters.",
        },
        {
          title: "3.3 Individual Medicine Review",
          body:
            "Each medicine to be given covertly must be reviewed individually. For each medicine, the best interests decision must consider:\n\n• Is this medicine genuinely necessary? Can any medicines be deprescribed?\n• What would happen if this medicine were not given?\n• Has the risk of not taking it been weighed against the intrusion of covert administration?\n• What is the pharmacist's advice on formulation?\n\nMedicines which are for quality of life (rather than life-preserving) should be considered carefully — the burden of covert administration may outweigh the benefit for some medicines.",
        },
      ],
    },
    {
      title: "4. Formulation and Administration Considerations",
      body:
        "Not all medicines can be safely modified for covert administration. Pharmacist advice is mandatory before any medicine is crushed, dissolved, or administered in food or drink.",
      subSections: [
        {
          title: "4.1 Medicines That Must NEVER Be Crushed",
          body:
            "The following formulations must never be crushed or tampered with for covert administration:\n\n• Modified-release (MR, XL, SR, LA, CR, ER, prolonged-release, sustained-release, extended-release) tablets and capsules — crushing causes immediate-release of the full dose, risking serious overdose\n• Enteric-coated tablets — crushing removes gastric protection; the drug may cause gastric damage or be degraded before absorption\n• Cytotoxic or immunosuppressant tablets — some are hazardous if powdered or if skin contact occurs\n• Sublingual or buccal tablets — these are designed for a specific mucosal route and are not equivalent to oral\n• Capsules containing liquid — crushing releases the liquid form which may not be safe to mix with food",
          warningBox:
            "Crushing a modified-release opioid such as morphine MR (MST, Zomorph) or oxycodone MR (OxyContin) destroys the extended-release mechanism and delivers the full 12-hour or 24-hour dose at once. This can cause fatal respiratory depression. Never crush modified-release opioids under any circumstances.",
        },
        {
          title: "4.2 Guidance on Crushing and Dispersing",
          body:
            "For medicines that may be safely modified, the pharmacist should consult the NEWT guidelines (North East Worcestershire Trust guidelines on crushing medicines for patients with dysphagia and enteral feeding) or equivalent local guidance.\n\nGeneral principles:\n\n• Immediate-release tablets may often be crushed but always check first\n• Some capsules can be opened and the contents sprinkled on food (e.g. certain omeprazole, tamsulosin OCAS and other dispersible formulations)\n• Some medicines have licensed liquid or dispersible alternatives — always seek these before considering crushing\n• Dispersed medicines should be added to a small amount of food or drink (a teaspoon of yoghurt, a small amount of jam) rather than a full meal to ensure the complete dose is taken\n• Document in the care plan the exact method approved by the pharmacist",
          practiceBox:
            "The pharmacist's written advice on formulation should be filed in the covert medication care plan. When the GP prescribes a new medicine or changes a dose, always re-check with the pharmacist before applying the same administration method — a new formulation may have different requirements.",
        },
        {
          title: "4.3 Controlled Drugs Given Covertly",
          body:
            "Covert administration of a controlled drug requires all of the above best interests and formulation requirements PLUS full CD administration procedures: two-person witness, CD register entry, and MAR chart documentation. The CD register records the administration as normal — the covert care plan covers the lawfulness of the method.",
        },
      ],
    },
    {
      title: "5. Documentation and the Covert Medication Care Plan",
      body:
        "A written covert medication care plan must be in place before any covert administration begins. This is both a legal requirement under the Mental Capacity Act 2005 and an essential safeguard for residents and staff.",
      subSections: [
        {
          title: "5.1 Required Contents of the Covert Medication Care Plan",
          body:
            "The covert medication care plan must contain:\n\n• The person's name and date of birth\n• The date of the capacity assessment and the conclusion\n• The name and role of the person who conducted the capacity assessment\n• The date and attendees of the best interests meeting\n• The decision reached and the rationale, including the alternatives considered and why they were rejected\n• A list of each medicine to be given covertly, with the dose, route, timing and pharmacist-approved method of administration\n• The method of concealment for each medicine (e.g. 'dissolved in small amount of orange juice' or 'crushed and mixed with yoghurt')\n• The pharmacist's written advice on formulation — either appended or summarised\n• The review date (maximum three months)\n• Signatures of the GP, Registered Manager, and (where available) family member or LPA",
        },
        {
          title: "5.2 MAR Chart Recording",
          body:
            "Every covert administration must be recorded on the MAR chart in the normal way — the drug, dose, route, time and staff signature. The fact that the medicine is given covertly is recorded in the care plan, not on the MAR chart. This ensures accurate medication records are maintained for all prescribers and health professionals involved in the person's care.",
        },
        {
          title: "5.3 Confidentiality",
          body:
            "Covert medication is sensitive information and is subject to normal confidentiality obligations. Access to the covert medication care plan should be limited to the care team, the GP, the pharmacist, the CQC inspector, and other health professionals involved in the person's care. It should not be shared with visitors or informal contacts without the person's consent (if they have capacity) or a best interests decision.",
        },
      ],
    },
    {
      title: "6. Review and Monitoring",
      body:
        "Covert medication must be reviewed regularly. It is not a permanent arrangement — the goal is to find an approach that works without concealment wherever possible.",
      subSections: [
        {
          title: "6.1 Three-Monthly Review",
          body:
            "The covert medication care plan must be reviewed at least every three months, or sooner if:\n\n• The person's capacity appears to change\n• A new medicine needs to be given covertly\n• A medicine currently given covertly is discontinued\n• The person begins to accept their medicines voluntarily\n• There is a significant change in the person's clinical condition\n• There are concerns from family or staff about the practice\n\nThe three-monthly review must be documented, dated and signed. It should involve the GP and, where possible, the pharmacist.",
        },
        {
          title: "6.2 Ongoing Capacity Assessment",
          body:
            "Staff should continue to explore with the person whether they will take their medicines voluntarily. Capacity is not static — a person with dementia may have periods of greater insight or cooperation. Any indication that the person may be accepting their medicines should be reported to the nurse-in-charge and documented, and a review of the covert medication plan initiated.",
        },
        {
          title: "6.3 Governance and Audit",
          body:
            "The Registered Manager must include covert medication in the quarterly medicines management audit. The audit should check:\n\n• Each covert medication care plan is current and has been reviewed within three months\n• Capacity assessments are documented and dated\n• Pharmacist advice is on file for every medicine given covertly\n• MAR chart administration is properly recorded\n• Staff have been briefed on the care plan and understand the method of administration\n• No medicine classified as 'do not crush' is being given covertly without pharmacist approval",
          practiceBox:
            "At CQC inspection, covert medication is always reviewed. Inspectors will look for: a valid capacity assessment, a documented best interests decision, pharmacist advice on each medicine, a signed care plan reviewed within three months, and MAR chart records. Having all of this in order demonstrates a high standard of clinical governance.",
        },
      ],
    },
    {
      title: "7. Situations Where Covert Medication Is Not Permissible",
      body:
        "Covert administration is never permissible in the following circumstances, regardless of any instruction or belief about benefit:",
      subSections: [
        {
          title: "7.1 When Covert Administration Must Stop",
          body:
            "Covert administration is not permissible where:\n\n• The person has capacity to consent to or refuse their medicines — even if their refusal is unwise\n• The person lacks capacity but the best interests decision has not been made or documented\n• The pharmacist has advised that the medicine cannot be safely modified and no alternative formulation exists\n• The person has made an advance decision to refuse the medicine while they had capacity, and that decision covers this situation\n• A Lasting Power of Attorney for health and welfare, or a court-appointed deputy, has made a valid decision to refuse the medicine on the person's behalf\n\nIn these circumstances, withholding the medicine must be weighed clinically and, if necessary, an urgent GP review or safeguarding referral sought.",
          warningBox:
            "Covert administration to a person who has capacity constitutes an assault. A person's refusal of medication — even if harmful to themselves — must be respected if they have the capacity to make that decision. Overriding a capacitous person's refusal is not in scope of this policy and is not permissible under any circumstances.",
        },
      ],
    },
  ],

  training:
    "All registered nurses and senior care staff must complete: (1) Mental Capacity Act 2005 awareness training (minimum Level 2); (2) Training on this policy and the covert medication care planning process; (3) Pharmacist-led training on crushing and modifying medicines, including medicines that must never be crushed; (4) Annual refresher. Healthcare assistants are trained to administer medicines only in accordance with an existing covert care plan — they do not initiate covert medication decisions. Training records are maintained in personnel files.",

  monitoring:
    "[ORGANISATION_NAME] monitors this policy through: (1) Quarterly medicines management audit including review of all covert medication care plans for currency, completeness and pharmacist sign-off; (2) Peer review of capacity assessments and best interests meeting documentation; (3) Safeguarding pathway for any concern about unlawful covert administration; (4) Annual policy review incorporating changes to MCA guidance, CQC expectations and Royal Pharmaceutical Society guidance on medicine modification.",

  relatedDocuments: [
    "SAF-010 — Medication Management Policy",
    "SAF-011 — Medication Administration Procedure",
    "SAF-013 — Controlled Drugs Policy",
    "SAF-019 — PRN (As Required) Medication Policy",
    "SAF-020 — Medication Error Reporting & Management Procedure",
    "EFF-001 — Care Planning Policy",
    "EFF-015 — Mental Capacity Act and Deprivation of Liberty Safeguards Policy",
  ],

  versionHistory: [
    {
      version: "4.0",
      date: "2026-06-17",
      changes:
        "Full flagship-depth enhancement. Added: full MCA 2005 five-principle framework; two-stage capacity test; MDT meeting requirements; individual medicine-by-medicine review; do-not-crush formulation guidance; NEWT guidelines reference; covert CD procedure; three-monthly review requirements; full governance and audit checklist; situations where covert medication is not permissible.",
    },
    {
      version: "3.0",
      date: "2026-04-30",
      changes: "Medium-depth version. Core process documented.",
    },
  ],
};
