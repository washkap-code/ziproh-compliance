/**
 * Medium-depth policy content — batch 4.
 * Medication Administration, Moving & Handling, Pressure Ulcer Prevention,
 * Physical Health Monitoring, CQC Registration & Regulatory Compliance.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// SAF-004  Medication Administration Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const SAF004_CONTENT: DocumentContent = {
  title: "Medication Administration Procedure",
  policyId: "SAF-004",
  version: "3.4",
  effectiveDate: "2026-05-20",
  reviewDate: "2027-05-20",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All staff at [ORGANISATION_NAME] who are authorised to administer medication to service users. This procedure applies to all routes and forms of medication administration including oral, topical, inhaled, and, where the service is registered for nursing care, parenteral administration. It must be read alongside SAF-003 Medication Management Policy.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure only trained and competency-assessed staff administer medication.",
        "Ensure competency assessments are completed before authorisation and annually thereafter.",
        "Review all medication administration errors and near misses within 24 hours.",
        "Maintain a current list of staff authorised to administer medication.",
        "Ensure MAR charts are audited monthly for completeness and accuracy.",
      ],
    },
    {
      role: "Authorised Administering Staff",
      duties: [
        "Administer medication only when trained, competency-assessed, and listed as authorised.",
        "Follow the 5 Rights on every administration: Right Person, Right Drug, Right Dose, Right Route, Right Time.",
        "Never administer medication that has not been correctly prescribed and transcribed onto the MAR.",
        "Record each administration on the MAR chart immediately after giving the medication — never in advance.",
        "Report and record any administration error, omission, or refusal immediately.",
      ],
    },
  ],
  legislation: [
    "Medicines Act 1968 — classification of medicines and supply requirements",
    "Misuse of Drugs Act 1971 and Misuse of Drugs Regulations 2001 — controlled drugs",
    "Human Medicines Regulations 2012 — prescribing and supply",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "NICE Guideline SC1 — Medicines Optimisation (2015)",
    "CQC Medicines: Information and Guidance for Adult Social Care Services (2022)",
  ],
  definitions: [
    { term: "MAR Chart", definition: "Medication Administration Record. The legal document on which every administration of medication must be recorded. A missing signature indicates a dose was NOT given — not that it was forgotten to be recorded. MAR charts are legal records." },
    { term: "PRN Medication", definition: "Pro re nata — 'as required' medication. PRN medication must have a specific protocol in the care plan specifying: the indication (when to give it); the maximum dose and frequency; the assessment to perform before administering; and what to do if it is ineffective." },
    { term: "Covert Administration", definition: "Administering medication hidden in food or drink without the person's knowledge. This requires a specific best interest decision under the Mental Capacity Act 2005, documented in the care plan, and must be covered by a separate Covert Medication Protocol (SAF-016)." },
    { term: "Transcribing", definition: "Copying a prescription onto a MAR chart. Transcribing errors are a leading cause of medication harm. All transcription must be performed by an authorised person and independently checked before the MAR is used for administration." },
    { term: "Homely Remedy", definition: "A general sale or pharmacy medicine (e.g. paracetamol, antacid) provided under a Homely Remedies Protocol signed by the GP. Use requires specific criteria to be met before administration and must be documented on the MAR." },
  ],
  sections: [
    {
      title: "The 5 Rights — Pre-Administration Checks",
      body: "Before administering any medication, the authorised staff member must check all 5 Rights. This check must be performed from the original MAR chart and the medication container at the same time. Reciting the 5 Rights from memory is not sufficient.",
      subSections: [
        {
          heading: "1. Right Person",
          body: "Confirm the identity of the service user. Use two identifiers: name and date of birth (or room number for residential settings). For service users with dementia who cannot confirm their name, check the MAR against the photo ID in the care plan before administering.",
        },
        {
          heading: "2. Right Drug",
          body: "Check the medication name on the MAR against the label on the container. Check for sound-alike, look-alike drugs. Do not administer medication from a container that does not match the MAR entry exactly.",
        },
        {
          heading: "3. Right Dose",
          body: "Check the prescribed dose on the MAR against the label. Calculate if required. If any doubt about the dose, do not administer — check with the prescriber or pharmacist first.",
        },
        {
          heading: "4. Right Route",
          body: "Confirm the prescribed route (oral, topical, inhaled, etc.) matches the formulation. An oral tablet must not be crushed without pharmacist advice — some formulations are modified-release and must not be altered.",
        },
        {
          heading: "5. Right Time",
          body: "Administer within the agreed administration window — typically ± 1 hour of the prescribed time for most medications, or as specified in the care plan for time-critical medications. Check no previous signature appears for this dose.",
        },
      ],
      warningBox: "NEVER administer medication on verbal instruction alone. Every administration must correspond to a current, signed MAR entry. If a GP or prescriber asks you to give a medication that is not on the MAR, ask for a written prescription or faxed amendment first. 'The GP said to' is not a safe system of work.",
    },
    {
      title: "The Administration Process",
      procedure: [
        "Collect the MAR chart and medication for the relevant service user.",
        "Perform the 5 Rights check — MAR chart against medication label.",
        "Check for any known allergies on the MAR and care plan.",
        "Check the service user's condition — are they well enough to receive the medication? Is there any reason (e.g. swallowing difficulty, refusal, symptom change) not to administer?",
        "Prepare the medication in a clean area. Wear gloves for topical preparations. Do not touch oral medication with bare hands — use a medicine pot.",
        "Administer to the service user, remaining present to confirm the dose is swallowed (for oral medication).",
        "Record the administration on the MAR chart immediately — sign legibly and in full.",
        "Return medication to the correct storage location. Secure any controlled drugs immediately.",
        "Document any relevant observations in the care record (e.g. response to PRN analgesia, blood pressure reading before antihypertensive).",
      ],
      practiceBox: "If you are interrupted during medication administration — by a colleague, a service user, a phone call — stop, make the medication safe, and restart the full 5 Rights check from the beginning when you return. Most medication errors occur when the administering staff member is interrupted.",
    },
    {
      title: "Refusal of Medication",
      body: "Every service user with capacity has the absolute right to refuse medication, including when they are unwell. Where a service user with capacity refuses:\n• Respect the refusal — never coerce or deceive.\n• Record the refusal on the MAR chart using the agreed code.\n• Document the reason given in the care record.\n• Inform the prescriber if the refusal is likely to affect the service user's health.\n• Review whether the medication can be offered at a different time or in a different form.\n\nWhere a service user who lacks capacity appears to refuse medication:\n• Do not force medication.\n• Document the occurrence and attempt again at a later time.\n• If persistent refusal occurs, refer to the prescriber and consider a best interest decision under MCA 2005.\n• Consider whether covert administration is appropriate and lawful — refer to SAF-016.",
      legalBox: "A person with capacity cannot be given medication without their consent. Administering medication to a competent person who refuses constitutes assault. Do not confuse reluctance (which can be gently addressed) with refusal (which must be respected).",
    },
    {
      title: "Administration Errors and Near Misses",
      body: "A medication error is any deviation from the intended administration — wrong drug, wrong dose, wrong person, wrong time, missed dose, or unrecorded administration. A near miss is an event that could have led to an error but was prevented.\n\nAll errors and near misses must be reported immediately:",
      procedure: [
        "Assess the service user — are they experiencing any adverse effects? If in doubt, call 111 or 999.",
        "Inform the Registered Manager or on-call manager immediately.",
        "Contact the prescriber to report the error and seek guidance on any action required.",
        "Complete an incident report form before the end of the shift.",
        "Do not attempt to correct the error on the MAR chart — record exactly what happened.",
        "The Registered Manager will determine whether statutory notifications are required (CQC Regulation 18; RIDDOR).",
        "A root cause analysis (RCA) will be conducted within 14 days for all significant errors.",
      ],
      warningBox: "Do not conceal a medication error. A culture of openness and learning is the only way to prevent recurrence. The Duty of Candour (Regulation 20) may require the error to be disclosed to the service user or their family.",
    },
    {
      title: "Self-Administration",
      body: "Where a service user wishes to self-administer their own medication, a Self-Administration Risk Assessment must be completed and documented in the care plan. The assessment considers:\n• Mental capacity to consent and manage medication safely.\n• Physical ability to open containers, read labels, and administer the correct dose.\n• Risk of overdose, hoarding, or sharing medication.\n• Storage requirements and security.\n\nSelf-administration may be full (service user manages entirely) or supervised (staff observe and prompt). The level must be reviewed at least 3-monthly or following any change in condition. Even for full self-administration, [ORGANISATION_NAME] retains responsibility for ensuring the service user has access to correctly prescribed medication.",
    },
  ],
  relatedDocuments: [
    "saf-003 — Medication Management Policy",
    "saf-013 — Controlled Drugs Policy",
    "saf-016 — Medicines Covert Administration Policy",
    "eff-002 — Mental Capacity Act Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Medication Administration Competency Assessment", content: "Checklist for assessing staff competence: knowledge of the 5 Rights; MAR chart completion; controlled drug procedure; PRN protocol use; error reporting; refusal handling; storage and security. Signed by assessor and assessed; valid for 12 months." },
    { title: "Appendix B — MAR Chart Coding System", content: "Agreed codes for recording administration outcomes: no code = administered; R = refused; A = away from service; U = unwell; S = self-administered; O = out of stock; X = omitted (with written reason in care record). Any code other than a signature requires a written explanation in the care record." },
  ],
  versionHistory: [
    { version: "3.4", date: "2026-05-20", changes: "Updated to reflect CQC Medicines guidance 2022; added self-administration section; strengthened interrupted administration guidance." },
    { version: "3.2", date: "2025-06-01", changes: "Added PRN protocol requirements; updated refusal of medication guidance to align with MCA." },
    { version: "3.0", date: "2024-03-01", changes: "Full review; added 5 Rights sub-sections; updated error reporting procedure." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-010  Moving & Handling Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF010_CONTENT: DocumentContent = {
  title: "Moving & Handling Policy",
  policyId: "SAF-010",
  version: "4.1",
  effectiveDate: "2026-03-25",
  reviewDate: "2027-03-25",
  approvedBy: "Registered Manager",
  scope: "All staff at [ORGANISATION_NAME] involved in the moving and handling of service users or objects. This policy applies in all settings including care homes, supported living, and domiciliary care. It applies to all equipment used in moving and handling operations.",
  responsibilities: [
    {
      role: "Registered Manager / Moving & Handling Lead",
      duties: [
        "Ensure a documented Moving & Handling Risk Assessment is in place for every service user who requires assistance.",
        "Ensure all staff complete Moving & Handling training before undertaking any manual handling tasks and annually thereafter.",
        "Ensure all moving and handling equipment is inspected, maintained, and LOLER-tested.",
        "Review all moving and handling incidents and near misses.",
        "Maintain a Moving & Handling Equipment Register.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Never move or handle a service user without first reading their Moving & Handling Risk Assessment and Handling Plan.",
        "Refuse to carry out a handling task that is unsafe, and report the concern to their manager immediately.",
        "Use the prescribed equipment and techniques at all times — never improvise.",
        "Report any injury, near miss, or equipment defect immediately.",
        "Complete annual mandatory moving and handling training.",
      ],
    },
  ],
  legislation: [
    "Manual Handling Operations Regulations 1992 (as amended) — duty to avoid hazardous manual handling; risk assessment requirements",
    "Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) — inspection and testing of hoists, slings, and other lifting equipment",
    "Provision and Use of Work Equipment Regulations 1998 (PUWER) — safe use and maintenance of equipment",
    "Health and Safety at Work etc. Act 1974 — general employer and employee duties",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
  ],
  definitions: [
    { term: "Manual Handling", definition: "Any transporting or supporting of a load (including a person) by bodily force — lifting, putting down, pushing, pulling, carrying, or moving." },
    { term: "TILE Assessment", definition: "The framework for assessing manual handling risk: Task (what is being done?); Individual (who is doing it?); Load (what is being moved?); Environment (where is it happening?). TILE provides the structure for every Moving & Handling Risk Assessment." },
    { term: "Handling Plan", definition: "A care plan component that specifies exactly how a service user should be assisted with movement and transfers, including the equipment to be used, the number of staff required, and any specific instructions or restrictions." },
    { term: "LOLER", definition: "Lifting Operations and Lifting Equipment Regulations 1998. All lifting equipment — hoists, slings, bath hoists, ceiling track systems — must be thoroughly examined by a competent person every 6 months, with records kept." },
    { term: "No-Lift Policy", definition: "A policy approach that prohibits the manual lifting of service users (i.e. lifting them entirely off the ground by bodily strength) except in defined emergencies. [ORGANISATION_NAME] operates a No-Lift approach — all lifts must use appropriate equipment." },
  ],
  sections: [
    {
      title: "Risk Assessment — The TILE Framework",
      body: "A Moving & Handling Risk Assessment using the TILE framework must be completed for every service user who requires moving and handling assistance. This must be completed on admission and reviewed:\n• At every care review (minimum 3-monthly).\n• Following any fall, injury, or significant change in mobility, cognition, or health status.\n• Following any moving and handling incident.\n• When new equipment is introduced.\n\nThe TILE assessment must result in a written Handling Plan that is accessible to all staff who provide care to the service user. It is not acceptable for handling arrangements to be passed verbally or informally.",
      legalBox: "The Manual Handling Operations Regulations 1992 require employers to: first, avoid hazardous manual handling so far as reasonably practicable; second, where it cannot be avoided, assess the risk; third, take steps to reduce the risk of injury to the lowest reasonably practicable level. Failure to assess and manage moving and handling risks is a breach of health and safety law and CQC Regulation 12.",
    },
    {
      title: "Hoists — Safe Use",
      body: "Hoists are the primary equipment used to assist service users who cannot weight-bear or who require maximum assistance. Safe hoist use requires adherence to the following principles:",
      bulletPoints: [
        "Minimum two staff for all hoist transfers, unless a specific single-handler assessment is in place and documented.",
        "Check the hoist battery is sufficiently charged before starting a transfer.",
        "Always use the correct sling for the service user — slings are person-specific and must be checked for fit, condition, and compliance with the hoist manufacturer's compatibility list.",
        "Inspect the sling on every use for damage, fraying, or stitching failure. Remove any damaged sling from use immediately.",
        "Never leave a service user suspended in a hoist unattended.",
        "In the event of a hoist failure during a transfer, keep the service user calm and in a safe position. Do not attempt to lower the person without adequate assistance and do not use the manual lowering valve without training.",
        "Record use of the hoist in the care record where required by the Handling Plan.",
      ],
      warningBox: "Using the wrong sling — or a sling that is not compatible with the hoist model — can cause the service user to fall during transfer. Never use a sling from a different manufacturer without confirming compatibility. Sling compatibility charts must be accessible in the area where the hoist is stored.",
    },
    {
      title: "LOLER Equipment Inspection",
      body: "All lifting equipment is subject to LOLER 1998 and must be inspected every 6 months by a competent engineer. [ORGANISATION_NAME] maintains a LOLER inspection schedule and records all inspection outcomes in the Equipment Register.\n\nIn addition to LOLER inspections, staff must conduct visual pre-use checks:\n• Before every use: check the hoist for damage, check the sling for integrity, confirm the serial numbers match the compatibility list.\n• Monthly: a documented visual inspection of all hoists and slings by the Moving & Handling Lead.\n\nAny equipment failing a pre-use check must be taken out of service immediately and labelled. It must not be returned to use until inspected and cleared by a competent engineer.",
    },
    {
      title: "Emergency Handling — Floor Procedure",
      body: "Where a service user falls and is found on the floor, staff must follow the floor procedure rather than attempting to lift them manually:\n• Assess for injury — call 999 if fracture, head injury, or loss of consciousness is suspected. Do not move the person until medical advice is obtained.\n• If no injury is suspected, make the person comfortable on the floor with a pillow and a blanket.\n• Use the approved floor-level raising procedure — typically a Raizer chair, PowerLift cushion, or similar — according to the Handling Plan.\n• Document the fall and the handling used in the incident report and care record.",
      practiceBox: "A floor-raiser (e.g. Raizer) makes post-fall recovery safe and dignified for both the service user and staff. If your service does not have a floor-raiser, discuss procurement with the Registered Manager. Manual lifting from the floor by two staff members risks serious musculoskeletal injury to both staff and causes additional injury to the service user.",
    },
    {
      title: "Domiciliary Care Considerations",
      body: "In domiciliary care settings, the home environment is the employer's workplace for the purposes of health and safety law. [ORGANISATION_NAME] must therefore assess moving and handling risks in every service user's home before care begins.\n\nDomiciliary care-specific requirements include:\n• Pre-commencement Moving & Handling Risk Assessment including access, floor surfaces, space, and suitability for equipment.\n• Procurement or commissioning of appropriate equipment (hoist, banana board, stand aid, grab rails) from the relevant occupational therapist or community equipment service before care begins.\n• Lone worker consideration — who provides two-person assistance in the community? Rotas must account for complex handling tasks requiring two care workers.\n• Equipment must be checked on every visit — a hoist found to be unsuitable or malfunctioning must be reported before care proceeds.",
    },
  ],
  relatedDocuments: [
    "saf-006 — Risk Assessment Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "saf-007 — Lone Working Policy",
    "saf-009 — Falls Prevention Policy",
    "wl-009 — Induction & Mandatory Training Policy",
  ],
  appendices: [
    { title: "Appendix A — Moving & Handling Risk Assessment (TILE) Template", content: "Structured TILE assessment form: Task description; Individual factors (ability, training, health); Load factors (weight, unpredictability, cognition); Environment (space, floor, equipment); Risk score; Prescribed handling technique; Equipment required; Number of staff; Specific instructions; Review date; Signatures." },
    { title: "Appendix B — LOLER Equipment Register", content: "Register of all lifting equipment: item name; serial number; purchase date; LOLER inspection dates; inspector name; outcome; next inspection due; sling compatibility list." },
  ],
  versionHistory: [
    { version: "4.1", date: "2026-03-25", changes: "Added domiciliary care section; updated floor procedure to include named equipment; strengthened sling compatibility guidance." },
    { version: "4.0", date: "2025-05-01", changes: "Full review; updated LOLER schedule; added emergency hoist failure procedure." },
    { version: "3.7", date: "2024-01-20", changes: "Updated to align with Skills for Care Moving People Safely guidance; added TILE framework section." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-014  Pressure Ulcer Prevention & Management Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF014_CONTENT: DocumentContent = {
  title: "Pressure Ulcer Prevention & Management Policy",
  policyId: "SAF-014",
  version: "4.2",
  effectiveDate: "2026-04-05",
  reviewDate: "2027-04-05",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All service users in the care of [ORGANISATION_NAME] who are at risk of developing or who have an existing pressure ulcer. This policy applies to all staff involved in direct care including senior care workers, care assistants, and nursing staff.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure all service users are assessed for pressure ulcer risk using the Waterlow score on admission.",
        "Ensure referral pathways to the Tissue Viability Nurse (TVN) are followed promptly.",
        "Review all Category 3 or 4 pressure ulcers as serious incidents requiring Duty of Candour.",
        "Monitor pressure ulcer incidence at governance meetings and report any cluster to CQC.",
        "Ensure repositioning charts are audited monthly.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Report any new skin redness, skin damage, or suspected pressure ulcer to the senior on duty immediately.",
        "Follow the repositioning schedule in every service user's care plan.",
        "Complete repositioning charts accurately — a blank chart for a high-risk patient is a serious governance failure.",
        "Assist with skin inspections during personal care and report any changes.",
        "Ensure equipment (pressure-relieving mattress, cushion, heel protectors) is in place and functioning.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour (Category 3/4 pressure ulcers are notifiable incidents)",
    "NICE Guideline CG179 — Pressure ulcers: prevention and management (2014, updated 2024)",
    "NHS Improvement — Pressure Ulcers: revised definition and measurement framework (2018)",
    "Human Rights Act 1998, Article 3 — prohibition of inhuman or degrading treatment (relevant to severe, avoidable pressure ulcers)",
  ],
  definitions: [
    { term: "Waterlow Score", definition: "A validated pressure ulcer risk assessment tool used in UK care settings. Scores weight/build, skin type, sex/age, malnutrition screening, continence, mobility, special risks (tissue malnutrition, neurological deficit, major surgery/trauma, medication). Score 10+ = at risk; 15+ = high risk; 20+ = very high risk." },
    { term: "NPIAP/EPUAP Categories", definition: "International pressure injury classification: Category 1 — non-blanchable erythema of intact skin; Category 2 — partial-thickness skin loss with exposed dermis; Category 3 — full-thickness skin loss; Category 4 — full-thickness skin and tissue loss exposing muscle, tendon, or bone. Categories 3 and 4 are always treated as serious incidents." },
    { term: "Pressure-Relieving Equipment", definition: "Devices designed to distribute pressure more evenly or to alternate pressure points, reducing the risk of ischaemic damage. Includes: reactive foam, gel, or air mattresses; alternating pressure mattresses (APM); heel elevation devices; pressure-relieving cushions. The appropriate device is determined by the Waterlow score and Tissue Viability Nurse assessment." },
    { term: "Repositioning", definition: "The planned regular movement of a service user to relieve pressure on vulnerable areas. Frequency is determined by risk assessment — typically 2-hourly for high-risk patients in bed, with 30-degree tilt as the preferred position. Every repositioning must be recorded on a repositioning chart." },
    { term: "Avoidable Pressure Ulcer", definition: "A pressure ulcer that developed because [ORGANISATION_NAME] failed to: assess the person's risk; implement appropriate preventative measures; monitor the effectiveness of the measures; or respond to changes in condition. CQC considers all Category 2+ pressure ulcers as potentially avoidable and will expect to see evidence that all prevention measures were in place." },
  ],
  sections: [
    {
      title: "Risk Assessment — Waterlow",
      body: "All service users must have a Waterlow score completed:\n• On admission (within 6 hours for high-dependency settings).\n• At every 3-monthly care review.\n• Following any acute illness, hospital admission, or significant change in health status.\n• When a new pressure ulcer or skin change is identified.\n\nThe Waterlow score determines the prevention plan:",
      subSections: [
        {
          heading: "Score 1–9 (Not at risk)",
          body: "Routine skin care. No specialist equipment indicated unless other risk factors present. Reassess at 3-monthly review.",
        },
        {
          heading: "Score 10–14 (At risk)",
          body: "Implement repositioning schedule. Standard pressure-reducing foam mattress. Document skin inspection at each repositioning. Reassess Waterlow at 1-monthly review.",
        },
        {
          heading: "Score 15–19 (High risk)",
          body: "Implement 2-hourly repositioning with 30-degree tilt. Alternating pressure mattress (APM). Pressure-relieving cushion in chair. Heel elevation device. Refer to Tissue Viability Nurse. Reassess Waterlow weekly or on any change.",
        },
        {
          heading: "Score 20+ (Very high risk)",
          body: "Implement 2-hourly repositioning as minimum. Dynamic air mattress. Specialist cushion. Consider bariatric equipment if BMI >30. Urgent TVN referral within 24 hours. Daily documented skin inspection. Nutritional assessment (MUST) and supplementation if indicated.",
        },
      ],
    },
    {
      title: "Prevention — The Skin Bundle",
      body: "Prevention of pressure ulcers requires consistent application of a multi-element care bundle. [ORGANISATION_NAME] uses the following 5-element skin bundle for all at-risk service users:",
      bulletPoints: [
        "Skin inspection — daily inspection of all bony prominences (sacrum, heels, trochanters, elbows, occiput). Document findings and report changes immediately.",
        "Repositioning — according to schedule; document every position change on the repositioning chart.",
        "Skin hygiene — gentle cleansing after incontinence using pH-balanced products. Do not rub; pat dry. Apply a barrier cream for incontinent patients.",
        "Moisture management — incontinence must be managed promptly. Moisture damage presents similarly to a Category 2 pressure ulcer but has different management and documentation requirements.",
        "Nutrition — adequate nutrition and hydration are essential for skin integrity. Complete MUST on admission; refer to dietitian if score ≥2.",
      ],
      legalBox: "Category 3 and 4 pressure ulcers acquired in the care of [ORGANISATION_NAME] are notifiable incidents under CQC Regulation 18 and trigger the Duty of Candour under Regulation 20. The verbal notification to the service user or their representative must occur as soon as practicable; the written apology must follow within 10 working days. Refer to SAF-015 for the full incident reporting procedure.",
    },
    {
      title: "Repositioning Schedules and Charts",
      body: "Every service user with a Waterlow score of 10 or above must have a documented repositioning schedule in their care plan and a corresponding repositioning chart on which each reposition is recorded.\n\nRepositioning charts must record:\n• Time of each position change.\n• Position used (e.g. left lateral, right lateral, supine, 30-degree tilt).\n• Skin condition observed.\n• Signature of the staff member who carried out the reposition.\n\nAn incomplete repositioning chart for a high-risk patient is a serious governance failure. CQC inspectors routinely review repositioning charts for completeness during inspections. Gaps in the chart suggest pressure areas were not relieved.",
      warningBox: "30-degree tilt is the evidence-based gold standard for pressure ulcer prevention in bed. Lying flat (0-degree supine) and full lateral (90-degree) positions expose bony prominences to maximum pressure. Unless contraindicated (e.g. post-surgical requirements, respiratory needs), 30-degree tilt should be the default for all high-risk patients.",
    },
    {
      title: "Wound Assessment and Management",
      body: "Where a pressure ulcer is identified, a wound assessment must be completed by a competent staff member and reviewed by the Clinical Lead or TVN:\n\n• Category 1 — non-blanchable erythema: Do not rub the area. Increase repositioning frequency. Apply barrier cream. Photograph and document. Review at every reposition.\n• Category 2 — partial-thickness loss: Wound assessment; appropriate dressing (moisture management, non-adhesive dressings for fragile skin). TVN referral within 24–48 hours. Document dimensions and wound bed description.\n• Category 3 and 4 — full-thickness loss: Treat as a serious incident (see above). Immediate TVN referral. Document as notifiable. Begin root cause analysis within 7 days.",
      procedure: [
        "Identify the category using NPIAP/EPUAP classification.",
        "Photograph the wound (with consent) using a consistent method — same distance, same lighting — for ongoing monitoring.",
        "Document wound dimensions: length × width × depth in cm.",
        "Describe wound bed: granulating, sloughy, necrotic, epithelialising.",
        "Select appropriate dressing in consultation with the TVN.",
        "Establish a dressing change schedule in the care plan.",
        "Review wound at each dressing change and document progress or deterioration.",
        "Refer to GP if signs of infection are present: increased pain, surrounding erythema, purulent exudate, pyrexia.",
      ],
    },
  ],
  relatedDocuments: [
    "saf-015 — Accident & Incident Reporting Policy",
    "eff-003 — Nutrition & Hydration Policy",
    "eff-001 — Care Planning Policy",
    "saf-017 — Skin Integrity & Wound Care Policy",
    "wl-001 — Governance Framework",
  ],
  appendices: [
    { title: "Appendix A — Waterlow Score Calculator", content: "Full Waterlow scoring matrix with all subscales, scoring instructions, and risk band thresholds. Equipment recommendation matrix by risk band." },
    { title: "Appendix B — Wound Assessment Documentation", content: "Template for recording: wound site; category; dimensions; wound bed description; surrounding skin; exudate; pain score; photograph reference; dressing choice; plan; review date; clinician signature." },
  ],
  versionHistory: [
    { version: "4.2", date: "2026-04-05", changes: "Updated NPIAP categories; added 5-element skin bundle; strengthened Category 3/4 reporting requirements." },
    { version: "4.0", date: "2025-06-01", changes: "Full review; aligned with NICE CG179 update; added moisture damage differentiation guidance." },
    { version: "3.8", date: "2024-03-15", changes: "Updated Duty of Candour trigger to include Category 3+ ulcers; added repositioning chart audit requirement." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EFF-011  Physical Health Monitoring Policy
// ─────────────────────────────────────────────────────────────────────────────
export const EFF011_CONTENT: DocumentContent = {
  title: "Physical Health Monitoring Policy",
  policyId: "EFF-011",
  version: "3.5",
  effectiveDate: "2026-04-14",
  reviewDate: "2027-04-14",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All service users at [ORGANISATION_NAME] whose care plan indicates a requirement for physical health monitoring. This policy applies to all staff who undertake physical health observations and applies to all settings in which [ORGANISATION_NAME] provides care.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure monitoring frequency is specified in every service user's care plan.",
        "Ensure all staff undertaking observations are trained in NEWS2 and the escalation procedure.",
        "Review all instances of NEWS2 triggering escalation at governance meetings.",
        "Maintain a training record for physical health monitoring competency.",
        "Ensure monitoring equipment is calibrated and maintained.",
      ],
    },
    {
      role: "Authorised Care Staff",
      duties: [
        "Undertake observations only when trained and assessed as competent.",
        "Record observations accurately and immediately in the care record.",
        "Calculate NEWS2 scores correctly and escalate without delay when thresholds are reached.",
        "Never delay escalation because of uncertainty — if in doubt, act on the score.",
        "Report any monitoring equipment that appears to be inaccurate.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Care Act 2014 — well-being principle; duty of care",
    "NICE Guideline CG50 — Acutely ill adults in hospital: recognising and responding to deterioration (2007, updated 2020)",
    "NHS England — National Early Warning Score (NEWS2): Standardising the assessment of acute-illness severity (2017)",
    "Rapid Response to Acute Illness Learning Set — NHS Improvement (2019)",
  ],
  definitions: [
    { term: "Observation", definition: "The measurement and recording of a physiological parameter — respiratory rate, oxygen saturation, temperature, blood pressure, heart rate, or level of consciousness — to monitor a service user's health status over time." },
    { term: "NEWS2", definition: "National Early Warning Score 2. A validated clinical scoring system that aggregates 6 physiological measurements plus an ACVPU consciousness score to produce a single score (0–20) indicating risk of clinical deterioration. Developed by the Royal College of Physicians." },
    { term: "ACVPU", definition: "Alert, Confusion (new), Voice, Pain, Unresponsive. A modified consciousness scale used in NEWS2. Any new confusion (C) scores 3 points — equal to severe physiological derangement." },
    { term: "Escalation", definition: "The process of communicating a concern about a service user's health to an appropriate clinician with urgency proportionate to the NEWS2 score. Escalation at [ORGANISATION_NAME] uses the SBAR communication tool." },
    { term: "SBAR", definition: "Situation, Background, Assessment, Recommendation. A structured communication framework used when escalating concerns to a GP, paramedic, or other clinician. Using SBAR ensures all relevant information is conveyed clearly and reduces the risk of delays due to miscommunication." },
  ],
  sections: [
    {
      title: "Observations — Parameters and Normal Ranges",
      body: "The following parameters are monitored at [ORGANISATION_NAME] as part of physical health assessment. Normal adult ranges are provided for guidance — individual service users may have different baseline values that must be specified in their care plan.",
      subSections: [
        {
          heading: "Respiratory Rate (RR)",
          body: "Normal adult range: 12–20 breaths per minute. Measure by counting chest rise over 60 seconds (not 15 seconds × 4 — this introduces error). Record to the nearest whole number. Respiratory rate is the single most sensitive early indicator of deterioration. Tachypnoea (RR >20) should never be dismissed.",
        },
        {
          heading: "Oxygen Saturation (SpO₂)",
          body: "Normal range for most adults: 96–100% (Scale 1). Service users with confirmed hypercapnic respiratory failure (e.g. COPD) use Scale 2: 88–92%. The target scale must be documented in the care plan. Oxygen saturation must be measured at rest with a clean, warm finger. Nail varnish or poor circulation can produce falsely low readings — remove nail varnish and ensure hand is warm before measuring.",
        },
        {
          heading: "Blood Pressure (BP)",
          body: "Normal range: systolic 100–140 mmHg; diastolic 60–90 mmHg. Document both systolic and diastolic. Individual baseline must be specified in care plan. Hypotension (systolic <90 or a drop of >40 from baseline) and hypertension (systolic >180) both require escalation regardless of other parameters.",
        },
        {
          heading: "Heart Rate (HR)",
          body: "Normal range: 51–90 beats per minute. Note any irregularity of rhythm during measurement. New irregular pulse (suspected atrial fibrillation) requires urgent escalation even if NEWS2 score is low.",
        },
        {
          heading: "Temperature",
          body: "Normal range: 36.1–38.0°C. Fever (>38.0°C) or hypothermia (<36.0°C) both score on NEWS2. Measure using a calibrated tympanic thermometer or equivalent. Document the route (tympanic, axillary, oral).",
        },
        {
          heading: "Consciousness (ACVPU)",
          body: "Alert = normal; Confusion = new mental confusion (this must be new, not baseline dementia); Voice = responds to voice; Pain = responds only to pain; Unresponsive = no response. Any change from the person's baseline warrants careful consideration. New confusion = score 3 on NEWS2.",
        },
      ],
    },
    {
      title: "NEWS2 Scoring and Escalation",
      body: "After recording all 6 observations and the ACVPU score, calculate the NEWS2 score using the official RCP chart. The total score determines the response:",
      subSections: [
        {
          heading: "NEWS2 Score 0–4 (Low)",
          body: "Continue routine monitoring at the frequency specified in the care plan. Any single parameter scoring 3 (a 'red score') triggers minimum low-medium response regardless of total.",
        },
        {
          heading: "NEWS2 Score 5–6 or any single score of 3 (Medium)",
          body: "Increase monitoring frequency (minimum hourly until stable). Inform the senior on duty. Contact the GP for assessment — same day if during hours, or out-of-hours GP if urgent. Use SBAR to communicate. Document the escalation and response in the care record.",
        },
        {
          heading: "NEWS2 Score 7+ (High)",
          body: "Call 999 immediately. Inform the Registered Manager or on-call. Continue monitoring while waiting for the ambulance. Use SBAR when handing over to paramedics. Complete a serious incident report.",
        },
      ],
      warningBox: "Do not wait for the service user's condition to deteriorate further before escalating. NEWS2 is designed to identify deterioration early — acting early saves lives. If a service user's score is rising trend even within normal bands, document the trend and discuss with the GP.",
    },
    {
      title: "SBAR Escalation Tool",
      body: "When escalating a concern about a service user's physical health, use the SBAR format:",
      subSections: [
        { heading: "S — Situation", body: "State your name, your role, and the service. 'I'm calling about [service user name], date of birth [DOB]. I'm concerned about their condition because [brief description of concern].'" },
        { heading: "B — Background", body: "Summarise the relevant clinical background: diagnosis, current medications, known allergies, any recent changes in condition or treatment." },
        { heading: "A — Assessment", body: "Give the observations: 'Their current NEWS2 score is X. The vital signs are: RR [X], SpO₂ [X]%, BP [X/X] mmHg, HR [X] bpm, Temp [X]°C, ACVPU [X].' Describe your clinical concern: 'I am worried that...'" },
        { heading: "R — Recommendation", body: "State what you think needs to happen: 'I think [service user name] needs to be assessed urgently / needs a 999 call / needs their medication reviewed.' Ask: 'What would you like me to do while waiting?'" },
      ],
      practiceBox: "Writing the SBAR script down before making the call reduces anxiety and ensures no information is missed. Keep a SBAR template laminated at the nurses' station or in the domiciliary care bag.",
    },
    {
      title: "Monitoring Frequency and Equipment",
      body: "The frequency of physical health monitoring is determined by the service user's clinical needs and must be specified in their care plan. Minimum monitoring requirements:\n\n• All service users: full observations at admission; at every care review (minimum 3-monthly).\n• Following any acute illness, hospital admission, or deterioration: daily observations until stable.\n• For service users with known long-term conditions (e.g. heart failure, COPD, diabetes): frequency specified in care plan by GP or specialist.\n• For service users on high-risk medications (diuretics, antihypertensives, anticoagulants): monitoring as specified by prescriber.\n\nEquipment must be calibrated annually. Pulse oximeters and thermometers must be CE-marked medical devices, not consumer products. Sphygmomanometers must be validated for use in older adults with arterial stiffness.",
    },
  ],
  relatedDocuments: [
    "eff-001 — Care Planning Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "saf-003 — Medication Management Policy",
    "eff-013 — Mental Health & Wellbeing Policy",
    "saf-009 — Falls Prevention Policy",
  ],
  appendices: [
    { title: "Appendix A — NEWS2 Scoring Chart", content: "Full RCP NEWS2 scoring table with all 7 parameters, scoring bands, physiological threshold values, and response thresholds. Scale 1 and Scale 2 (COPD/hypercapnic respiratory failure). Colour-coded low/medium/high response." },
    { title: "Appendix B — SBAR Template Card", content: "Laminated A6 pocket card with SBAR headings and prompts for each section. Designed for staff to use when calling GP or 999 to escalate concern about a deteriorating service user." },
  ],
  versionHistory: [
    { version: "3.5", date: "2026-04-14", changes: "Updated SpO₂ Scale 2 guidance for COPD; added SBAR sub-sections; strengthened new confusion (ACVPU-C) guidance." },
    { version: "3.3", date: "2025-05-01", changes: "Aligned with NHS NEWS2 2017 guidance; added equipment calibration requirements." },
    { version: "3.0", date: "2024-01-15", changes: "Full review; adopted NEWS2 replacing original NEWS; updated escalation thresholds." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-017  CQC Registration & Regulatory Compliance Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL017_CONTENT: DocumentContent = {
  title: "CQC Registration & Regulatory Compliance Policy",
  policyId: "WL-017",
  version: "4.0",
  effectiveDate: "2026-05-20",
  reviewDate: "2027-05-20",
  approvedBy: "Registered Manager / Provider",
  scope: "All registered activities carried out by [ORGANISATION_NAME] under its CQC registration. This policy applies to all staff, but the primary responsibility lies with the Registered Provider, the Registered Manager, and the Nominated Individual.",
  responsibilities: [
    {
      role: "Registered Provider",
      duties: [
        "Ensure the service is registered with CQC for all regulated activities being carried out.",
        "Ensure the fit and proper persons requirements (Regulation 5 and 19) are met for all directors, partners, and Registered Managers.",
        "Notify CQC of changes to the provider or to registration conditions as required.",
        "Ensure CQC statutory notifications are submitted correctly and on time.",
        "Cooperate fully with CQC inspections and take prompt action on improvement notices.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Maintain personal CQC registration and notify CQC of any change in personal circumstances required.",
        "Ensure all staff understand the CQC fundamental standards.",
        "Lead the service's preparation for CQC inspections.",
        "Submit all statutory notifications within the required timeframes.",
        "Maintain the provider information return (PIR) and evidence library.",
        "Review the CQC rating and take action on any required improvements.",
      ],
    },
    {
      role: "Nominated Individual",
      duties: [
        "Act as the registered person responsible for supervising the management of the service.",
        "Ensure the Registered Manager has the management support and resources needed to deliver compliant care.",
        "Participate in CQC Fit and Proper Person assessment as required.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 — registration and inspection framework; CQC powers",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — fundamental standards (Regulations 4–20A)",
    "Care Quality Commission (Registration) Regulations 2009 — registration conditions and requirements",
    "Care Quality Commission (Registration) Regulations 2009, Regulation 14 — changes to registration",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing",
  ],
  definitions: [
    { term: "Registered Provider", definition: "The organisation or individual registered with CQC as the provider of regulated activities. Responsible for ensuring all CQC requirements are met. May be a company, partnership, or individual." },
    { term: "Registered Manager", definition: "The individual registered with CQC to manage a specific regulated activity at a specific location. Must be fit and proper, suitably qualified and experienced, and must notify CQC of specified events." },
    { term: "Nominated Individual", definition: "Where the provider is an organisation (not an individual), the Nominated Individual is the person responsible to CQC for supervising management of the service. Must be fit and proper under Regulation 5." },
    { term: "Statutory Notification", definition: "A legally required notification to CQC of a specified event, submitted via the CQC Provider Portal within the timeframe set out in the Registration Regulations. Failure to notify is a criminal offence." },
    { term: "Provider Information Return (PIR)", definition: "An annual return submitted by providers to CQC containing current information about the service, its quality, and the evidence of compliance. Used by CQC as part of the monitoring and inspection planning process." },
  ],
  sections: [
    {
      title: "CQC Fundamental Standards",
      body: "The Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 set out 13 fundamental standards that all CQC-registered services must meet. These are the minimum standards below which care must never fall. The five CQC key questions — is the service Safe, Effective, Caring, Responsive, and Well-Led? — map onto these standards.",
      subSections: [
        { heading: "Regulation 9 — Person-centred care", body: "Care and treatment must be appropriate; meet people's needs and preferences. Mapped to: CQC Effective and Responsive." },
        { heading: "Regulation 10 — Dignity and respect", body: "People must be treated with dignity and respect. Privacy must be maintained. Mapped to: CQC Caring." },
        { heading: "Regulation 11 — Need for consent", body: "Care must only be provided with lawful consent. The Mental Capacity Act 2005 must be followed. Mapped to: CQC Effective." },
        { heading: "Regulation 12 — Safe care and treatment", body: "Care must be provided in a safe way. Risks must be assessed and managed. Medicines must be managed safely. Mapped to: CQC Safe." },
        { heading: "Regulation 13 — Safeguarding", body: "People must be protected from abuse and improper treatment. Restrictive practice must be proportionate and lawful. Mapped to: CQC Safe." },
        { heading: "Regulation 14 — Meeting nutritional and hydration needs", body: "Adequate nutrition and hydration must be provided. Mapped to: CQC Effective." },
        { heading: "Regulation 15 — Premises and equipment", body: "Premises and equipment must be clean, suitable, and properly maintained. Mapped to: CQC Safe." },
        { heading: "Regulation 16 — Receiving and acting on complaints", body: "A complaints system must be in place. Complaints must be handled openly and transparently. Mapped to: CQC Responsive." },
        { heading: "Regulation 17 — Good governance", body: "Effective governance, assurance, and quality improvement systems must be in place. Records must be accurate and maintained. Mapped to: CQC Well-Led." },
        { heading: "Regulation 18 — Staffing", body: "Sufficient numbers of suitably qualified staff must be deployed. Mapped to: CQC Safe and Effective." },
        { heading: "Regulation 19 — Fit and proper persons employed", body: "Staff must be of good character and have the qualifications and skills needed. Mapped to: CQC Well-Led." },
        { heading: "Regulation 20 — Duty of Candour", body: "Providers must be open and transparent with people when things go wrong. Verbal and written notification and apology must follow notifiable incidents. Mapped to: CQC Well-Led." },
        { heading: "Regulation 20A — Requirement as to display of performance assessments", body: "The latest CQC rating must be displayed at the premises and on the website. Mapped to: CQC Well-Led." },
      ],
    },
    {
      title: "Statutory Notifications — Schedule and Timescales",
      body: "The Registered Manager must submit statutory notifications to CQC via the Provider Portal. The following events trigger a notification requirement:",
      subSections: [
        {
          heading: "Within 24 hours",
          body: "— Death of a service user related to care or treatment.\n— Serious injury to a service user.\n— Abuse or alleged abuse of a service user by a member of staff.\n— Unexpected death of a service user.\n— Application for a Deprivation of Liberty Safeguards (DoLS) authorisation.\n— Any event preventing or threatening to prevent the carrying on of the regulated activity.",
        },
        {
          heading: "Within 3 days",
          body: "— Absence of a Registered Manager for 28 days or more (notify no later than the 28th day).\n— Death of a service user (non-care-related).\n— Serious injury to a service user not covered by the 24-hour notification.",
        },
        {
          heading: "Without undue delay",
          body: "— Any change to the Registered Manager's personal details.\n— Any criminal conviction of the Registered Manager.\n— Any significant change to the service that may affect registration conditions.",
        },
      ],
      warningBox: "Failure to submit a statutory notification when required is a criminal offence under the Health and Social Care Act 2008. CQC can prosecute without prior notice or warning. Keep a statutory notification log — recording all events, whether or not they triggered a notification, and the reason for the decision — as evidence of your governance processes.",
    },
    {
      title: "CQC Inspection Preparation",
      body: "CQC conducts inspections of all registered services, either announced or unannounced. The Registered Manager must maintain a state of continuous readiness for inspection — not a rushed preparation when an inspection is announced.\n\n[ORGANISATION_NAME] maintains an Evidence Library organised by the CQC 5 key questions and the 6 quality statements (Safe, Effective, Caring, Responsive, Well-Led, Governance). The Evidence Library is reviewed quarterly and updated following any significant incident, policy change, or audit.\n\nKey documents that CQC inspectors will request:",
      bulletPoints: [
        "Current policies and procedures — all policies dated, versioned, and within review date.",
        "Staff training matrix — showing all mandatory training completion percentages.",
        "Supervision and appraisal records — for all current staff.",
        "Service user care plans and risk assessments — up to date and person-centred.",
        "Medication Administration Records and controlled drug registers.",
        "Incident, accident, and safeguarding logs — with evidence of review and learning.",
        "Audit programme — recent audits, findings, and actions taken.",
        "Complaints log and outcomes.",
        "Governance meeting minutes — demonstrating oversight and improvement culture.",
        "Recruitment records — DBS checks, references, Right to Work.",
      ],
    },
    {
      title: "CQC Single Assessment Framework",
      body: "CQC's Single Assessment Framework (SAF), introduced from 2023, assesses services against quality statements rather than just the 5 key questions. Quality statements describe what 'good' looks like from the perspective of people using services.\n\n[ORGANISATION_NAME] uses the quality statements as the organising framework for its governance evidence library and self-assessment programme. The Registered Manager reviews the service's position against each quality statement at the annual governance review.\n\nIf the service has been rated 'Requires Improvement' or 'Inadequate' in any area, a documented Quality Improvement Plan must be in place, with named owners and realistic timescales for each action. The plan is reviewed at monthly governance meetings until the improvement is embedded.",
      practiceBox: "CQC inspectors will speak with service users, families, and staff as a core part of every inspection. The quality of care experienced by people using the service is the inspectors' primary evidence source — no amount of excellent paperwork can compensate for poor care experiences. The best inspection preparation is excellent, consistent care every day.",
    },
    {
      title: "Changes to Registration",
      body: "The Registered Provider must notify CQC and obtain consent before making the following changes:\n• Adding a new regulated activity.\n• Removing a regulated activity.\n• Changing the registered location.\n• Changing the Registered Manager.\n• Significant change to the service model, service user group, or bed/place numbers.\n\nNotification of change must be submitted via the CQC Provider Portal. CQC's timescales for processing registration changes vary — plan ahead and do not make the change before CQC confirmation is received. Operating a regulated activity without the correct registration is a criminal offence.",
    },
  ],
  relatedDocuments: [
    "wl-001 — Governance Framework",
    "wl-015 — Equality & Human Rights Policy (Employment)",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "wl-013 — Quality Improvement Policy",
  ],
  appendices: [
    { title: "Appendix A — Statutory Notification Log", content: "Register for recording all CQC statutory notifications: event date; nature of event; date assessed for notification requirement; notification reference number; date submitted; outcome. Also records events assessed as not requiring notification, with reasons." },
    { title: "Appendix B — CQC Inspection Readiness Checklist", content: "Quarterly self-assessment checklist mapped to CQC fundamental standards: policy currency; training compliance; care plan completion; MAR audit status; safeguarding log review; incident analysis; complaints log; governance meeting schedule. RAG-rated with action notes." },
  ],
  versionHistory: [
    { version: "4.0", date: "2026-05-20", changes: "Updated to reflect CQC Single Assessment Framework 2023; added quality statements guidance; updated statutory notification timescales." },
    { version: "3.7", date: "2025-04-01", changes: "Added evidence library guidance; updated Provider Information Return section." },
    { version: "3.5", date: "2024-06-01", changes: "Full review post CQC SAF rollout; restructured around 5 key questions and quality statements." },
  ],
};
