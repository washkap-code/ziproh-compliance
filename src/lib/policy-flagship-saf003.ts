import type { DocumentContent } from "./documents";

export const SAF003_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] recognises that medicines are one of the most common interventions in the care of the people it supports, and that medication errors are a leading cause of preventable harm in health and social care. We are committed to a safe, person-centred approach to medicines management that promotes independence where possible, minimises risk at every stage of the medicine cycle, and ensures that every person receives the right medicine, in the right dose, at the right time, by the right route.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / Medicines Lead",

  purpose:
    "This policy sets out [ORGANISATION_NAME]'s approach to the safe management of medicines across the full medicines cycle: prescribing, dispensing, storage, administration, recording, disposal and review. It ensures that all staff involved in medicines management are trained, competent and working within their scope of practice, and that service users are protected from harm arising from unsafe medication practice.",

  scope:
    "This policy applies to all staff at [ORGANISATION_NAME] who are involved in any aspect of medicines management, including registered nurses, senior care workers administering medicines, care workers who prompt or assist service users with self-administration, and any staff who handle, store or dispose of medicines. It covers all medicines — including prescription-only medicines (POMs), pharmacy-only medicines (P medicines), general sale list (GSL) medicines, controlled drugs, and homely remedies.",

  definitions: [
    {
      term: "Medicines Administration Record (MAR)",
      definition:
        "A paper or electronic chart used to record every medicine administered to a service user. The MAR must record: the medicine name, dose, route, frequency, prescriber, date of supply, and every administration or omission. MAR charts are legal documents.",
    },
    {
      term: "Controlled Drug (CD)",
      definition:
        "A drug listed in Schedules 1-5 of the Misuse of Drugs Regulations 2001. Schedule 2 and 3 CDs (such as morphine, oxycodone, fentanyl and temazepam) are subject to strict storage, recording and destruction requirements. Schedule 2 CDs require a bound register.",
    },
    {
      term: "PRN Medicine",
      definition:
        "A medicine prescribed to be given 'as required' (pro re nata) rather than at regular intervals. PRN medicines require a specific protocol that defines: the indication (when to give it), minimum dose interval, maximum daily dose, and who can authorise administration.",
    },
    {
      term: "Covert Administration",
      definition:
        "Administering a medicine to a person without their knowledge, typically by disguising it in food or drink. Covert administration requires a formal best interests decision under the MCA 2005, a multidisciplinary team (MDT) decision, the GP's prescription specifying the covert route, and documentation on a covert administration protocol.",
    },
    {
      term: "Homely Remedy",
      definition:
        "A non-prescription medicine (e.g. paracetamol, antacid, laxative) that a care provider has agreed with the GP or prescriber can be given without a specific prescription in defined circumstances. Homely remedies must be listed on an agreed formulary, and a protocol for their use must be in place.",
    },
    {
      term: "Self-Administration",
      definition:
        "Where a service user manages their own medicines, either independently or with prompting/assistance from staff. The level of independence must be assessed and recorded, and the care plan must specify the agreed arrangement.",
    },
    {
      term: "Medicines Reconciliation",
      definition:
        "The process of creating a complete and accurate list of a person's medicines when they transfer between care settings (e.g. on admission, on discharge from hospital) and comparing this list against GP or hospital records to identify discrepancies.",
    },
    {
      term: "Medication Error",
      definition:
        "Any unintended deviation from a prescriber's instruction in relation to a medicine, including: wrong medicine, wrong dose, wrong route, wrong time, wrong patient, omission, or failure to record administration. All medication errors — including near-misses — must be reported.",
    },
    {
      term: "Medicines Optimisation",
      definition:
        "A person-centred approach to safe and effective medicines use. Medicines optimisation considers the person's experience of taking medicines, evidence-based choice of medicines, and regular reviews to ensure medicines remain appropriate.",
    },
    {
      term: "MDS / Compliance Aid",
      definition:
        "Multi-dose dispensing system (also called a blister pack, dosette box or Nomad tray) — a device for organising medicines into individual doses. MDS use is appropriate for some service users but is not suitable for all medicines (e.g. those that need to be stored at specific temperatures or that are sensitive to light or moisture). The prescriber and pharmacist must authorise MDS use.",
    },
  ],

  responsibilities: [
    {
      role: "Registered Manager / Medicines Lead",
      duties: [
        "Ensure all staff involved in medicines administration are trained and hold a current medicines competency assessment",
        "Maintain a record of all staff authorised to administer medicines and the scope of their authorisation",
        "Ensure the organisation's medicines policy and procedures are up to date and accessible to all staff",
        "Oversee investigation of all medication errors and near-misses, and ensure learning is applied",
        "Conduct quarterly medicines audits covering all aspects of the medicines cycle",
        "Maintain the controlled drug register and conduct CD checks at least monthly",
        "Ensure safe and appropriate storage conditions are maintained and checked regularly",
        "Liaise with the prescriber and pharmacist to facilitate medicines reviews at least annually for each service user",
        "Submit CQC notifications for serious medication incidents within 24 hours",
        "Ensure disposal of unused or unwanted medicines in line with legal requirements",
      ],
    },
    {
      role: "Authorised Medicines Administrators",
      duties: [
        "Only administer medicines for which they are authorised and for which they have been trained and assessed as competent",
        "Check the MAR chart before every administration: right person, right medicine, right dose, right time, right route",
        "Record administration on the MAR immediately after giving the medicine — never before",
        "Never leave administered medicines unattended",
        "Report any concerns about a medicine (unfamiliar medicine, unusual dose, patient refuses) to the Registered Manager before proceeding",
        "Report any medication error or near-miss immediately to the manager",
        "Never administer a medicine that has not been supplied by a pharmacist against a valid prescription, except homely remedies within agreed protocols",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Understand the difference between administration, assistance and prompting",
        "Never administer medicines unless authorised and competency-assessed to do so",
        "Prompt service users to take their medicines where this is within the agreed care plan arrangement",
        "Report any concern about a service user's response to a medicine immediately",
        "Maintain the confidentiality of all medicine-related information",
      ],
    },
  ],

  keyPoints: [
    "Every medicine administered must be recorded on the MAR immediately after administration — recording before administration is never acceptable",
    "A medication error must be reported immediately — however minor — and must not be concealed",
    "Controlled drugs require double-checking by two members of staff and entry in the CD register",
    "Covert administration of medicines is only lawful following a formal MCA best interests decision and MDT agreement",
    "Medicines must never be administered from memory — always check the MAR chart",
    "PRN medicines require a protocol specifying the indication and any additional authorisation required",
    "Any change to a service user's medicines must be communicated to all relevant staff before the next administration",
    "Unused or unwanted medicines must be returned to the pharmacist for safe disposal — they must not be destroyed on the premises",
    "Staff must never administer a medicine they are unsure about — checking is not a weakness",
  ],

  legislation: [
    "Medicines Act 1968 — classification and supply of medicines",
    "Misuse of Drugs Act 1971 and Misuse of Drugs Regulations 2001 — controlled drugs",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12 (Safe Care and Treatment)",
    "Mental Capacity Act 2005 — consent to treatment, covert administration",
    "Human Medicines Regulations 2012",
    "NICE Guideline NG67: Medicines Optimisation (2016)",
    "CQC: Medicines in health and social care (October 2022 guidance)",
    "Royal Pharmaceutical Society: Medicines Optimisation: Helping patients to make the most of medicines (2013)",
    "NHS England: National Patient Safety Alert on safe use of controlled drugs",
    "DHSC: Guidance on the management of controlled drugs in health and social care (2017)",
    "The National Health Service (Charges for Drugs and Appliances) Regulations 2015",
    "Equality Act 2010 — reasonable adjustments in medicines administration",
  ],

  sections: [],

  procedure: [
    {
      heading: "1. The Medicines Cycle — Overview",
      body: "Safe medicines management requires attention at every stage of the medicines cycle. A failure at any stage can result in harm. [ORGANISATION_NAME] maintains procedures for each stage.",
      steps: [
        "Prescribing — ensuring prescriptions are current, legible and appropriate",
        "Ordering — ordering medicines in good time to avoid gaps in supply",
        "Receipt and reconciliation — checking what has been dispensed against the prescription",
        "Storage — maintaining correct storage conditions and security",
        "Administration — right person, right medicine, right dose, right time, right route",
        "Recording — contemporaneous, accurate MAR chart entries",
        "Monitoring — observing the person for intended and unintended effects",
        "Review — regular medicines reviews by the prescriber",
        "Disposal — safe return of unwanted medicines to the pharmacist",
      ],
    },
    {
      heading: "2. Ordering and Receiving Medicines",
      body: "Medicines must be ordered in good time to avoid gaps in supply. Gaps in supply — particularly for critical medicines such as anticoagulants, antiepileptics and insulin — can cause serious harm.",
      subSections: [
        {
          heading: "2.1 Ordering Process",
          body: "The responsible person for medicines ordering must:",
          steps: [
            "Review the MAR chart and medicine stocks at least weekly to identify medicines that need reordering",
            "Order repeat prescriptions with sufficient lead time — normally at least 7 days before supply is exhausted",
            "Use the service user's nominated pharmacy and ensure the pharmacy has an up-to-date list of the service user's medicines",
            "Record all orders and expected delivery dates",
            "Follow up immediately if a medicine has not arrived by its expected delivery date",
          ],
          warningBox:
            "Critical medicines — anticoagulants (warfarin, DOACs), antiepileptics, insulin, lithium, clozapine, immunosuppressants and cardiac medicines — must never be allowed to run out. These medicines require additional vigilance at the ordering stage. A 48-hour emergency stock should be maintained where clinically appropriate.",
        },
        {
          heading: "2.2 Receiving Medicines",
          body: "On receipt of medicines from the pharmacy, the responsible person must:",
          steps: [
            "Check that the name on the medicine packaging matches the service user's name exactly",
            "Check that the medicine, dose, strength and directions match the current prescription and the MAR",
            "Check the expiry date",
            "Record receipt on the MAR or in the medicines receipt log",
            "Store the medicine correctly immediately",
            "Report any discrepancy to the pharmacy and the Registered Manager immediately",
          ],
        },
      ],
    },
    {
      heading: "3. Storage of Medicines",
      body: "Medicines must be stored securely, at the correct temperature, and in a manner that prevents unauthorised access while remaining accessible to authorised staff.",
      subSections: [
        {
          heading: "3.1 General Storage Requirements",
          body: "All medicines must be:",
          bulletPoints: [
            "Stored in a dedicated, lockable medicines cabinet or room",
            "Kept at the temperature specified in the Summary of Product Characteristics (SPC) — usually below 25°C unless refrigeration is required",
            "Stored separately for each service user — medicines must not be mixed",
            "Kept in their original container or as dispensed by the pharmacist",
            "Clearly labelled — never decant into unmarked containers",
            "Checked for expiry dates monthly",
          ],
        },
        {
          heading: "3.2 Controlled Drug Storage",
          body: "Schedule 2 Controlled Drugs must be stored in a locked, wall-mounted CD cabinet that complies with the Misuse of Drugs (Safe Custody) Regulations 1973. The CD cabinet must be separate from other medicines storage. Only authorised keyholders may access the CD cabinet.",
          legalBox:
            "Schedule 2 CDs must be recorded in a bound CD register. Entries must be made in ink and must include the date, the name of the person receiving the drug, the quantity obtained and the balance remaining. Errors in the CD register must be corrected by annotation — the original entry must remain visible. The CD register must be retained for 2 years after the last entry.",
        },
        {
          heading: "3.3 Refrigerated Medicines",
          body: "Medicines requiring refrigeration (2-8°C) must be stored in a dedicated medicines fridge — never in a fridge used for food. The fridge temperature must be checked and recorded daily. Any deviation outside 2-8°C must be reported to the Registered Manager and to the pharmacist, who will advise on whether the medicine remains fit for use.",
        },
      ],
    },
    {
      heading: "4. Administering Medicines — The Five Rights",
      body: "Before administering any medicine, the authorised medicines administrator must check the five rights. No administration may take place without this check.",
      steps: [
        "RIGHT PERSON — check the service user's full name and date of birth against the MAR chart. Use two identifiers where possible. Never give a medicine to the wrong person.",
        "RIGHT MEDICINE — check the medicine name on the container against the MAR chart. Be alert to sound-alike / look-alike medicine names. If in any doubt, do not administer — check with the pharmacist or prescriber.",
        "RIGHT DOSE — check the dose on the MAR chart against the label on the medicine container. Do not round doses up or down without prescriber authorisation.",
        "RIGHT ROUTE — check the administration route on the MAR chart. Some medicines are dose-form specific (e.g. a modified-release tablet must not be crushed). Confirm the route is correct and feasible for this person.",
        "RIGHT TIME — check that the time of administration is within the acceptable window for the prescribed frequency. Record the actual time of administration — not the prescribed time.",
      ],
      warningBox:
        "If any of the five rights cannot be confirmed — for example, the MAR chart is unclear, the medicine label doesn't match, or there is any doubt about the person's identity — DO NOT administer the medicine. Record that administration was withheld and the reason. Contact the prescriber or pharmacist immediately for clarification.",
    },
    {
      heading: "5. Medicines Administration Record (MAR)",
      body: "The MAR chart is a legal document. Every entry must be accurate, contemporaneous and signed by the administering member of staff.",
      bulletPoints: [
        "Sign the MAR immediately after administration — never in advance",
        "Use the agreed codes for omissions (e.g. R = refused, A = away, U = unavailable)",
        "Record the reason for any omission in the notes section",
        "Never use correction fluid (Tipp-Ex) on a MAR chart — draw a single line through an error and initial",
        "MAR charts must be legible — if a chart becomes unclear, request a new one from the pharmacy",
        "Completed MAR charts must be retained for a minimum of 8 years",
        "Electronic MAR (eMAR) systems must have audit trails and be backed up daily",
      ],
      practiceBox:
        "A good MAR chart tells the complete story of every medicine administered to a person. Inspectors will look for gaps (unexplained omissions), illegible entries, and discrepancies between the MAR and the CD register. A clean, complete MAR chart is one of the strongest demonstrations of safe medicines practice.",
    },
    {
      heading: "6. Controlled Drugs — Additional Requirements",
      body: "Schedule 2 and Schedule 3 Controlled Drugs require additional safeguards beyond standard medicines administration.",
      subSections: [
        {
          heading: "6.1 Administration of Schedule 2 CDs",
          body: "Schedule 2 CDs (e.g. morphine, oxycodone, diamorphine, methylphenidate) must:",
          steps: [
            "Be administered by an authorised member of staff with CD administration competency",
            "Be double-checked by a second authorised member of staff before administration",
            "Be entered in the CD register before administration (noting the quantity removed and the balance remaining)",
            "Be signed for on the MAR chart immediately after administration",
            "The CD register entry must be signed by both the administering person and the witness",
          ],
          legalBox:
            "The Misuse of Drugs Regulations 2001 Regulation 19 requires care homes to keep a CD register for Schedule 2 drugs. The register must be kept for 2 years. Inspection by the Home Office CD Inspectorate or the local CD Accountable Officer can occur at any time. Discrepancies in the CD register must be reported immediately to the Registered Manager.",
        },
        {
          heading: "6.2 CD Stock Checks",
          body: "CD stock must be checked at every shift handover. The physical count must match the running balance in the CD register. Any discrepancy must be:",
          steps: [
            "Reported to the Registered Manager immediately",
            "Investigated promptly — re-check the register, the MAR chart, and the storage area",
            "Reported to the police and the CD Accountable Officer if the discrepancy cannot be explained",
            "Documented in a separate incident report",
          ],
          warningBox:
            "CD discrepancies may indicate diversion (theft by staff or visitors), administration errors, or recording errors. All unexplained discrepancies are serious and must be treated as a potential safeguarding matter. Do not attempt to resolve a discrepancy by altering the CD register — this is a criminal offence.",
        },
      ],
    },
    {
      heading: "7. PRN (As Required) Medicines",
      body: "Every medicine prescribed PRN must have a written PRN protocol before it can be administered. The protocol must be agreed with the prescriber and documented in the care plan.",
      bulletPoints: [
        "The condition or symptom that indicates the medicine should be given",
        "The dose and route to be given",
        "The minimum interval between doses",
        "The maximum number of doses in 24 hours",
        "What action to take if the medicine does not relieve the symptom",
        "Whether additional authorisation from a clinician is needed before administration",
      ],
      practiceBox:
        "PRN pain relief is commonly where MCA principles intersect with medicines management. Where a person cannot communicate pain (e.g. advanced dementia), staff must use a validated pain assessment tool (such as the Abbey Pain Scale or PAINAD) and document their assessment before and after administration of PRN analgesia.",
    },
    {
      heading: "8. Covert Administration",
      body: "Covert administration of medicines — giving medicines hidden in food or drink without the person's knowledge — is only lawful where specific conditions are met. It is never acceptable as a default response to a person refusing medicines.",
      steps: [
        "A formal mental capacity assessment must confirm the person lacks capacity to consent to taking this medicine",
        "A multidisciplinary best interests meeting must be convened, including the prescriber (GP or specialist), pharmacist, and key worker",
        "The meeting must conclude that covert administration is in the person's best interests",
        "The prescriber must issue a new prescription specifying the covert route",
        "The pharmacist must confirm the medicine can safely be given in the proposed way (e.g. crushed in food) without affecting its properties",
        "A covert administration protocol must be written, signed by all parties, and held in the care plan",
        "The covert administration protocol must be reviewed every 3 months or sooner if the person's condition changes",
      ],
      warningBox:
        "Giving a medicine covertly without following this procedure is an assault and may constitute a deprivation of liberty. Staff must never administer medicines covertly on their own initiative or at a family member's request without going through the formal process. Covert administration that has not been properly authorised must be reported as a safeguarding concern.",
    },
    {
      heading: "9. Medication Errors and Near-Misses",
      body: "All medication errors and near-misses must be reported immediately, regardless of whether harm occurred. A culture of open reporting is essential for learning and for preventing future harm.",
      subSections: [
        {
          heading: "9.1 Immediate Actions",
          body: "On discovering a medication error:",
          steps: [
            "Assess the person immediately — check for any adverse effects",
            "If the person is unwell, call 999 or arrange urgent medical review",
            "Report to the Registered Manager immediately — the same shift",
            "Contact the prescriber or pharmacist for clinical advice about the specific error",
            "Document what happened factually in the incident report — do not guess or speculate",
            "Do not alter any records — including the MAR chart",
          ],
        },
        {
          heading: "9.2 Reporting and Investigation",
          body: "Following a medication error, the Registered Manager must:",
          bulletPoints: [
            "Complete a full incident investigation within 72 hours",
            "Notify the person's GP and any relevant prescriber",
            "Notify the family or next of kin where appropriate and in line with the Duty of Candour",
            "Submit a CQC Regulation 18 notification if the error is a notifiable event",
            "Submit a yellow card report to the MHRA if a medicine caused or may have caused harm",
            "Identify root causes and implement corrective actions",
            "Share learning with the team — anonymised if appropriate",
          ],
          legalBox:
            "Regulation 20 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 (Duty of Candour) requires that when a notifiable safety incident occurs, the provider must tell the person (and family) in person, apologise, provide a written account, and offer support. A serious medication error that harms a service user is likely to be a notifiable safety incident.",
        },
      ],
    },
    {
      heading: "10. Self-Administration",
      body: "Where a service user wishes to manage their own medicines, [ORGANISATION_NAME] will support them to do so safely, in line with their assessed capacity and personal wishes.",
      steps: [
        "Complete a self-administration assessment using the agreed tool, in conjunction with the GP or pharmacist",
        "Document the agreed arrangement (fully self-administering, prompting only, supervision, or partial) in the care plan and risk assessment",
        "Provide a secure, lockable space for the person to store their own medicines if they are managing them independently",
        "Review the self-administration arrangement at every care plan review and following any incident or change in the person's condition",
        "Ensure staff understand that prompting a person to take their medicine is not the same as administering it — but that a person who refuses while prompting is still exercising their right to decline",
      ],
    },
    {
      heading: "11. Disposal of Medicines",
      body: "Medicines that are no longer required, have expired, or have been discontinued must be disposed of safely.",
      bulletPoints: [
        "Return unwanted medicines to the supplying pharmacy — do not destroy them on the premises",
        "Schedule 2 CDs that need to be disposed of must be denatured in the presence of an authorised person (CD Accountable Officer or authorised police officer) and the disposal recorded in the CD register",
        "Do not flush medicines down the sink or toilet",
        "Maintain a disposal log recording: medicine name, quantity, date of disposal, reason, and the name of the pharmacy to which they were returned",
        "Sharps waste (needles, lancets) must be disposed of in a registered sharps container and collected by a licensed waste contractor",
      ],
      legalBox:
        "The Environmental Protection Act 1990 and the Hazardous Waste Regulations 2005 classify certain medicines as hazardous waste. Cytotoxic and cytostatic medicines must be disposed of via a licensed hazardous waste carrier — return to pharmacy is not sufficient for these categories. Seek pharmacist advice on classification.",
    },
    {
      heading: "12. Medicines Reviews",
      body: "All service users receiving medicines should have a structured medicines review at least annually, or more frequently if their condition changes. [ORGANISATION_NAME] will facilitate and support medicines reviews.",
      bulletPoints: [
        "Ensure the GP or prescriber conducts a structured medicines review at least annually for each service user",
        "For people taking five or more medicines (polypharmacy), request a specialist pharmacist-led medicines review",
        "Implement any changes arising from a medicines review promptly and update the MAR chart and care plan accordingly",
        "Flag any concerns about a medicine (side effects, refusals, interactions) to the prescriber at the earliest opportunity",
        "Use tools such as STOPP/START criteria to identify potentially inappropriate prescribing in older adults",
      ],
    },
  ],

  training:
    "All staff administering medicines must complete an accredited medicines administration course and hold a current competency assessment. Competency assessments must be reviewed annually and following any medicine incident. Staff whose competency assessment has expired must not administer medicines until it is renewed. The Registered Manager must maintain a medicines training matrix on all staff files.",

  monitoring:
    "Quarterly medicines audits covering: MAR chart completion, CD register accuracy and stock reconciliation, storage temperature logs, disposal records, error reports and actions taken. Annual medicines optimisation review with the service user's GP or pharmacist.",

  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "eff-001 — Care Planning Policy",
    "wl-006 — Record Keeping and Confidentiality Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Medicines Administration Competency Framework",
      description: "Competency standards and assessment tool for authorising staff to administer medicines. Covers: knowledge of medicine types, five rights, MAR chart completion, error reporting, CD procedures, and emergency procedures.",
    },
    {
      title: "Appendix B — Controlled Drug Register Template",
      description: "Bound register template for Schedule 2 CDs. Pre-formatted columns for date, person's name, quantity in, quantity out, balance, signatures.",
    },
    {
      title: "Appendix C — PRN Protocol Template",
      description: "Template for documenting PRN medicine protocols, including indication, dose, interval, maximum daily dose, and escalation.",
    },
    {
      title: "Appendix D — Covert Administration Protocol Template",
      description: "Template for the covert administration best interests decision record, MDT agreement, pharmacist confirmation and review schedule.",
    },
    {
      title: "Appendix E — Medication Error Report Form",
      description: "Standardised form for reporting medication errors and near-misses, including root cause analysis framework and corrective action plan.",
    },
  ],

  versionHistory: [
    { version: "5.1", date: "June 2026",    amendment: "Updated CQC medicines guidance reference (October 2022); covert administration section expanded; STOPP/START criteria added to medicines review section." },
    { version: "5.0", date: "January 2024", amendment: "Full rewrite to align with NICE NG67 and updated CQC inspection methodology; eMAR guidance added; CD disposal section updated." },
    { version: "4.3", date: "June 2022",    amendment: "PRN protocol requirements updated; self-administration assessment tool replaced." },
    { version: "4.2", date: "April 2020",   amendment: "COVID-19 addendum: guidance on administering medicines with PPE; remote supervision protocols." },
  ],
};
