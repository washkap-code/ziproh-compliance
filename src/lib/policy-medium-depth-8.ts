/**
 * Medium-depth policy content — batch 8.
 * Skin Integrity & Wound Care, Environmental Safety & Maintenance,
 * Grievance, Absence Management, Advocacy.
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// SAF-017  Skin Integrity & Wound Care Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF017_CONTENT: DocumentContent = {
  title: "Skin Integrity & Wound Care Policy",
  policyId: "SAF-017",
  version: "3.0",
  effectiveDate: "2026-04-22",
  reviewDate: "2027-04-22",
  approvedBy: "Registered Manager / Clinical Lead",
  scope: "All service users at [ORGANISATION_NAME] with actual or potential skin integrity concerns, including pressure ulcers, leg ulcers, diabetic foot wounds, traumatic wounds, surgical wounds, and moisture-associated skin damage. This policy applies to all staff involved in skin assessment, wound observation, and wound care, and must be read alongside SAF-014 Pressure Ulcer Prevention & Management Policy.",
  responsibilities: [
    {
      role: "Registered Manager / Clinical Lead",
      duties: [
        "Ensure every service user with a wound has a current wound assessment and care plan.",
        "Ensure referral pathways to Tissue Viability Nurse (TVN), district nurse, GP, and podiatrist are followed without delay.",
        "Review wound care outcomes at monthly governance meetings.",
        "Ensure wound care training is included in staff induction and annual update.",
        "Maintain a wound care product formulary and ensure appropriate products are available.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Inspect service users' skin during personal care and report any new or changed skin damage immediately.",
        "Follow the wound care plan exactly — do not improvise or substitute dressings.",
        "Report any signs of wound infection without delay.",
        "Document wound observations accurately at every dressing change.",
        "Never remove a dressing and leave a wound exposed without a replacement ready.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe care and treatment",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour (category 3/4 pressure ulcers)",
    "NICE Guideline CG179 — Pressure ulcers: prevention and management (2014, updated 2024)",
    "NICE Guideline NG19 — Diabetic foot problems: prevention and management (2015, updated 2023)",
    "NHS England — Transforming nursing, midwifery and care staff wound care resource (2023)",
  ],
  definitions: [
    { term: "Wound", definition: "A break in the continuity of any body tissue, including skin and underlying structures. Wounds may be acute (traumatic or surgical) or chronic (pressure ulcers, leg ulcers, diabetic foot ulcers). Chronic wounds are defined as those that fail to proceed through the normal stages of healing in an orderly and timely manner." },
    { term: "Moisture-Associated Skin Damage (MASD)", definition: "Skin damage caused by prolonged exposure to moisture — from urine, faeces, wound exudate, or perspiration. MASD presents as erythema, erosion, or skin loss in areas of moisture exposure. It can be confused with a Category 2 pressure ulcer; correct identification is important because management differs." },
    { term: "Wound Bed Preparation", definition: "The optimisation of the wound environment to promote healing. The TIME framework: Tissue (remove non-viable tissue); Infection/Inflammation (control); Moisture (balance); Edge (promote epithelialisation)." },
    { term: "Tissue Viability Nurse (TVN)", definition: "A specialist nurse with expertise in wound management and skin integrity. TVNs provide assessment, treatment planning, and staff education. All Category 3 and 4 pressure ulcers, complex chronic wounds, and wounds not healing as expected must be referred to the TVN." },
    { term: "Exudate", definition: "Fluid produced by a wound during the healing process. Normal exudate is pale yellow and odourless. Increased volume, purulent (pus-like) exudate, offensive odour, or greenish discolouration suggests infection." },
  ],
  sections: [
    {
      title: "Skin Inspection and Assessment",
      body: "Proactive skin inspection is the foundation of wound prevention and early intervention. All service users must have their skin inspected:\n• On admission — full head-to-toe skin assessment documented in the care plan.\n• During personal care — staff must observe and report any new or changed skin findings.\n• At every care review (minimum 3-monthly) — formal documented skin assessment.\n• Following any fall or injury.\n• Following any period of immobility, hospitalisation, or acute illness.\n\nSkin inspection must cover all bony prominences and skin folds: sacrum, heels, trochanters, elbows, occiput, ears, shoulders, ankles, and any area under medical devices (oxygen masks, splints, catheters).\n\nFindings must be recorded, including: location; size; appearance; skin colour and temperature; any broken skin or wound. Photographs should be taken with consent for baseline documentation of any skin changes.",
      practiceBox: "Skin inspection during personal care is an opportunity, not an interruption. Building a brief visual check into the routine of washing, dressing, and repositioning adds minimal time and frequently identifies skin changes before they progress to wounds. The key is knowing what to look for and being confident reporting it.",
    },
    {
      title: "Wound Assessment",
      body: "When a wound is identified, a formal wound assessment must be completed and recorded. The assessment must be updated at every dressing change. Key elements of wound assessment using the TIME framework:",
      subSections: [
        {
          heading: "T — Tissue",
          body: "Describe the wound bed composition: granulation tissue (red, moist, beefy — healthy); slough (yellow, cream, loose — requires debridement); necrotic tissue (black, hard or soft eschar — indicates ischaemia or deep damage); epithelialising tissue (pink, fragile islands at wound edges — healing). Percentage of each type in the wound bed.",
        },
        {
          heading: "I — Infection / Inflammation",
          body: "Signs of wound infection (NERDS and STONEES criteria): Non-healing despite appropriate treatment; Exudate increase; Red friable granulation tissue; Debris in wound bed; Smell. Systemic infection signs: pyrexia, increased pain, cellulitis spreading beyond wound margins, lymphangitis. Suspected infection requires urgent GP/TVN referral — a wound swab may be indicated.",
        },
        {
          heading: "M — Moisture Balance",
          body: "Assess exudate volume (none/low/moderate/high) and type (serous, serosanguineous, haemosanguineous, purulent). Select dressing based on exudate management need: dry wounds need moisture donation; highly exuding wounds need high-absorbency dressings. Maceration of surrounding skin indicates excessive moisture — adjust dressing frequency or type.",
        },
        {
          heading: "E — Edge",
          body: "Describe wound margin characteristics: advancing (epithelialising — healing); stable; rolled/undermined (suggests stalled healing); macerated. Measure wound dimensions at every dressing change: length × width in cm. Track trajectory — is the wound getting smaller? Wounds that are not reducing in size after 2–4 weeks of appropriate treatment require TVN review.",
        },
      ],
    },
    {
      title: "Wound Care — Dressing Selection Principles",
      body: "Dressing selection must be based on the wound assessment and TVN or prescriber recommendation. The following principles apply:\n\n• Match the dressing to the wound — not the wound to the available dressings.\n• Primary dressings (contact layer) must not cause trauma on removal — use non-adherent dressings for fragile, healing wounds.\n• Do not use dry gauze on granulating or epithelialising wounds — it causes trauma and removes new tissue on removal.\n• Change dressings at the frequency indicated — over-changing disrupts healing; under-changing allows infection.\n• The correct dressing type, application technique, and change frequency must all be specified in the wound care plan.\n• Any change to the prescribed dressing type requires TVN or prescriber authorisation.\n\nNon-healing, complex, or deteriorating wounds must be referred to the TVN rather than managed through repeated trial-and-error dressing changes at care home level.",
      warningBox: "A wound that deteriorates — increases in size, develops signs of infection, or shows no improvement after 2–4 weeks — requires urgent TVN or GP review. Continuing with the same dressing plan in the face of deterioration, without seeking specialist input, constitutes a failure of governance and a patient safety risk.",
    },
    {
      title: "Leg Ulcers and Diabetic Foot Wounds",
      body: "Leg ulcers and diabetic foot ulcers require specialist assessment before treatment because incorrect management can worsen outcomes:\n\nLeg ulcers:\n• The cause (venous, arterial, or mixed) must be established by ABPI (Ankle Brachial Pressure Index) assessment before compression therapy is applied. Applying compression to an arterial ulcer can cause critical ischaemia and limb loss.\n• Venous leg ulcers require compression bandaging — a competent practitioner trained in compression technique must apply it.\n• Refer all leg ulcers to the TVN or district nursing team at presentation.\n\nDiabetic foot wounds:\n• Any break in the skin of a person with diabetes requires immediate GP/podiatry review — even minor wounds can progress rapidly due to peripheral vascular disease and neuropathy.\n• Check for signs of Charcot foot — a warm, swollen, erythematous foot in a person with diabetes is a medical emergency.\n• Follow NICE NG19 — all new diabetic foot ulcers must be referred to the multidisciplinary diabetic foot team within 24 hours.",
      legalBox: "Providing inappropriate wound care — particularly applying compression to an unassessed leg ulcer or managing a deteriorating diabetic foot wound without specialist input — may constitute a failure to provide safe care under Regulation 12 and could expose [ORGANISATION_NAME] to serious incident investigation.",
    },
  ],
  relatedDocuments: [
    "saf-014 — Pressure Ulcer Prevention & Management Policy",
    "eff-003 — Nutrition & Hydration Policy",
    "saf-015 — Accident & Incident Reporting Policy",
    "eff-001 — Care Planning Policy",
    "eff-008 — Continence Management Policy",
  ],
  appendices: [
    { title: "Appendix A — Wound Assessment Chart", content: "Per-wound record: wound site; wound type; dimensions (length × width × depth); wound bed (% granulation/slough/necrosis/epithelialisation); exudate (volume/type); surrounding skin; pain score; infection indicators; dressing applied; next change date; clinical review required (Y/N); staff signature and date." },
    { title: "Appendix B — Wound Photography Protocol", content: "Consent; consistent camera distance (30cm); ruler in frame for scale; same lighting where possible; wound cleaned and dried before photograph; image stored securely in care record with date and wound reference; not stored on personal devices." },
  ],
  versionHistory: [
    { version: "3.0", date: "2026-04-22", changes: "Added NERDS/STONEES infection criteria; strengthened diabetic foot referral guidance; added MASD differentiation section." },
    { version: "2.8", date: "2025-05-01", changes: "Updated TIME framework; added leg ulcer ABPI guidance; strengthened TVN referral timescales." },
    { version: "2.5", date: "2024-03-01", changes: "Full review; added wound photography protocol; aligned with NHS wound care resources 2023." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SAF-018  Environmental Safety & Maintenance Policy
// ─────────────────────────────────────────────────────────────────────────────
export const SAF018_CONTENT: DocumentContent = {
  title: "Environmental Safety & Maintenance Policy",
  policyId: "SAF-018",
  version: "2.9",
  effectiveDate: "2026-02-28",
  reviewDate: "2027-02-28",
  approvedBy: "Registered Manager",
  scope: "All premises, equipment, and environmental hazards within [ORGANISATION_NAME]'s operational responsibility. This policy covers maintenance schedules, COSHH management, Legionella risk control, and environmental health and safety checks.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a current maintenance schedule and environmental risk assessment are in place and acted upon.",
        "Ensure a COSHH assessment is completed for all hazardous substances used at [ORGANISATION_NAME].",
        "Ensure a Legionella risk assessment is completed at least every 2 years and that the water management plan is implemented.",
        "Review environmental safety incidents and maintenance failures at governance meetings.",
        "Maintain the premises in a state fit for the delivery of regulated care activities.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Report any maintenance defect, environmental hazard, or safety concern immediately.",
        "Use COSHH substances only as specified in the COSHH assessment, wearing the required PPE.",
        "Never use a substance that has not been assessed — report unlabelled or unknown substances to the manager.",
        "Participate in environmental safety checks as required.",
      ],
    },
  ],
  legislation: [
    "Health and Safety at Work etc. Act 1974 — general employer duty for a safe working environment",
    "Management of Health and Safety at Work Regulations 1999 — risk assessment",
    "Control of Substances Hazardous to Health Regulations 2002 (COSHH) — assessment and control of hazardous substances",
    "The Water Supply (Water Fittings) Regulations 1999 / Approved Code of Practice L8 (Legionella) — Legionella risk management",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 15 — Premises and equipment",
    "Electricity at Work Regulations 1989 — electrical safety",
  ],
  definitions: [
    { term: "COSHH", definition: "Control of Substances Hazardous to Health. COSHH Regulations 2002 require [ORGANISATION_NAME] to identify all hazardous substances used (cleaning products, disinfectants, medications, bodily fluids), assess the risks from exposure, and implement appropriate controls including substitution, ventilation, and personal protective equipment (PPE)." },
    { term: "Legionella", definition: "Legionella pneumophila is a bacterium that can grow in water systems (hot and cold water tanks, showers, spa pools) at temperatures between 20–45°C. Inhalation of contaminated water droplets causes Legionnaires' disease, which can be fatal. Care home residents are particularly vulnerable." },
    { term: "Planned Preventive Maintenance (PPM)", definition: "A scheduled programme of maintenance activities carried out before equipment or premises failures occur, to prevent breakdown and ensure continued safe operation. Examples: annual boiler service, monthly lift safety inspection, weekly fire alarm test." },
    { term: "DSEAR", definition: "Dangerous Substances and Explosive Atmospheres Regulations 2002. Relevant where [ORGANISATION_NAME] stores or uses flammable substances (e.g. alcohol-based hand rubs in large quantities, oxygen cylinders). A DSEAR assessment may be required." },
  ],
  sections: [
    {
      title: "Maintenance Schedule",
      body: "A Planned Preventive Maintenance (PPM) schedule must be in place covering all premises and equipment. The schedule must include both statutory requirements and good practice checks:",
      subSections: [
        {
          heading: "Daily",
          body: "General environmental walk-round: trip hazards, spills, damaged flooring or furniture, lighting failures, external door security. Record in premises log.",
        },
        {
          heading: "Weekly",
          body: "Fire alarm test (one manual call point per week, rotated). Emergency lighting visual check. Hot water temperature check at sentinel outlets (target ≥50°C at mixer outlet or ≥55°C at calorifier). Record in water management log.",
        },
        {
          heading: "Monthly",
          body: "Fire extinguisher visual inspection. Emergency lighting function test. Hot and cold water temperature checks at representative outlets. Passenger lift safety check (visual). COSHH storage inspection.",
        },
        {
          heading: "Quarterly / Bi-annually",
          body: "Full emergency lighting discharge test. Portable Appliance Testing (PAT) for high-risk or portable equipment. Shower head descaling and disinfection (Legionella prevention). Calorifier temperature check (≥60°C). Hoist and sling LOLER inspection (6-monthly).",
        },
        {
          heading: "Annually",
          body: "Boiler and heating system service. Fire alarm full system service by competent engineer. Gas safety check by Gas Safe registered engineer. Electrical installation condition report (EICR) — every 5 years for commercial premises. Asbestos management plan review (if asbestos is present). Full environmental risk assessment review.",
        },
      ],
      legalBox: "Regulation 15 of the Health and Social Care Act 2008 Regulations requires [ORGANISATION_NAME] to ensure premises and equipment are 'clean, secure, suitable for the purpose for which they are used, and correctly used, maintained and monitored'. CQC inspectors will check maintenance records. Gaps in the PPM schedule — particularly for statutory checks — are strong indicators of governance failure.",
    },
    {
      title: "COSHH Management",
      body: "A COSHH assessment must be completed for every hazardous substance used at [ORGANISATION_NAME]. The assessment identifies:\n• What the substance is and how it is used.\n• The hazard (irritant, corrosive, toxic, carcinogenic, etc.) from the manufacturer's Safety Data Sheet (SDS).\n• Who is at risk from exposure and in what circumstances.\n• Control measures: substitution (use a safer alternative?); ventilation; equipment (dispensing systems); PPE (gloves, apron, eye protection).\n• Emergency procedures: what to do in case of spill, skin contact, inhalation, or eye exposure.\n\nAll COSHH substances must be stored in their original labelled containers in a locked, ventilated COSHH store. Decanting into unlabelled containers is prohibited. Staff must be trained in COSHH and must have access to SDS for all substances they use.",
      practiceBox: "Most cleaning products have a COSHH assessment readily available from the manufacturer. Many suppliers provide pre-written COSHH assessments for their products — ask your cleaning product supplier. The key staff training point is: never mix chemicals, always use the correct dilution, always use the required PPE, and know what to do if something goes wrong.",
    },
    {
      title: "Legionella Risk Management",
      body: "Legionella is a statutory risk in all care home and supported living settings due to the water systems involved and the vulnerability of residents. [ORGANISATION_NAME]'s Legionella management programme includes:\n\nRisk assessment:\n• A Legionella risk assessment (LRA) must be conducted at least every 2 years, or following any significant change to the water system.\n• The LRA must be conducted by a competent person (in-house if appropriately trained, or external specialist).\n• The LRA identifies the risk from Legionella and specifies the control measures required.\n\nWater management plan:\n• The WMP sets out the monitoring and control regime: temperature checks; flushing of little-used outlets; shower head cleaning; calorifier temperature maintenance (≥60°C); cold water tank inspection.\n• A Legionella-nominated responsible person must be identified.\n\nHigh-risk outlets:\n• Outlets that are rarely used (e.g. spare room showers, tap in a little-used bathroom) must be flushed weekly for at least 2 minutes to prevent stagnant warm water — the primary Legionella growth condition.\n• Shower heads must be descaled and disinfected every 3 months — limescale promotes biofilm formation and Legionella growth.",
      warningBox: "Legionnaires' disease in a care home is a serious incident with potential for multiple cases and fatalities. Any resident with unexplained pneumonia or respiratory illness should prompt consideration of Legionella as a cause. Suspected Legionnaires' disease must be notified to the local authority health protection team and to CQC. Inform the team promptly — delay increases risk.",
    },
    {
      title: "Reporting and Rectifying Defects",
      body: "All environmental defects and maintenance failures must be reported and recorded. [ORGANISATION_NAME] operates a maintenance defect log in which all reported defects are recorded with:\n• Date reported.\n• Nature of defect.\n• Risk assessment — is the defect an immediate safety risk or can repair be scheduled?\n• Action taken — who has been contacted; expected repair date.\n• Date resolved.\n\nDefects that pose an immediate safety risk must be mitigated immediately (e.g. wet floor signage for a spill; out-of-service notice on a faulty hoist) and repaired as a priority. Defects must not remain unresolved beyond a reasonable period — the Registered Manager reviews the defect log weekly to ensure no items are outstanding without reason.",
    },
    {
      title: "Equipment Safety and LOLER",
      body: "All equipment used in the delivery of care must be safe, fit for purpose, and subject to a programme of inspection and maintenance. Equipment safety at [ORGANISATION_NAME] is governed by three key regulations:\n\n• Provision and Use of Work Equipment Regulations 1998 (PUWER): all work equipment must be suitable for its intended use, maintained in a safe condition, inspected at appropriate intervals, and used only by staff who have been trained.\n• Lifting Operations and Lifting Equipment Regulations 1998 (LOLER): all lifting equipment — including hoists, slings, bath lifts, ceiling tracks, and stair lifts — must be thoroughly examined by a competent person at prescribed intervals and before first use.\n• Medical Devices Regulations 2002: medical devices must be managed in accordance with manufacturer instructions and MHRA guidance.\n\nLOLER examination intervals:\n• Hoists and mobile lifting equipment: every 6 months.\n• Slings and soft attachments: every 6 months or after any incident that could have caused damage.\n• Passenger lifts: every 6 months (under LOLER) and annually (full service).\n• Bath and shower chairs with lifting function: every 6 months.\n\nAll LOLER thorough examination reports must be retained for at least 2 years and made available to CQC on request.",
      procedure: [
        "Before using any hoist or sling, staff must perform a pre-use check: check the equipment for damage, check the sling is the correct type and size for the service user, check the sling is free from tears or worn stitching.",
        "If any equipment defect is found during a pre-use check, remove the equipment from use immediately and label it 'Do Not Use'. Report to the senior on duty and log in the maintenance defect register.",
        "Never improvise or adapt lifting equipment — use only the approved attachments and accessories for the model in use.",
        "Ensure LOLER examination certificates are current before using any lifting equipment. If a certificate has expired, the equipment must not be used until it has been examined.",
        "Any incident involving lifting equipment — including near misses — must be reported under SAF-015 and reviewed by the Registered Manager.",
      ],
      warningBox: "Using a hoist with an out-of-date LOLER certificate, damaged slings, or incorrect weight rating is a serious safety breach and may result in CQC enforcement action. Inspectors routinely check LOLER documentation during inspections. The Registered Manager is responsible for ensuring LOLER examination records are current for all equipment.",
    },
    {
      title: "Contractor Management",
      body: "Contractors working on [ORGANISATION_NAME]'s premises — including maintenance engineers, cleaning contractors, construction workers, utilities engineers, and IT contractors — present specific health and safety risks if not properly managed. Contractors are not exempt from [ORGANISATION_NAME]'s health and safety requirements by virtue of their contractor status.",
      subSections: [
        {
          heading: "Pre-Contractor Approval",
          body: "Before engaging a contractor, [ORGANISATION_NAME] must:\n• Verify that the contractor holds appropriate insurance (public liability insurance of at least £5 million; employers' liability where they employ staff).\n• Check that the contractor holds any required trade certifications (Gas Safe registration for gas work; NICEIC/NAPIT membership for electrical work; Legionella specialist certification where relevant).\n• Request and review the contractor's risk assessment and method statement (RAMS) for the planned work.\n• Obtain evidence that contractor staff have undergone appropriate checks where they will have unsupervised access to service users or their belongings (DBS disclosure may be required).",
        },
        {
          heading: "Contractor Induction",
          body: "All contractors attending [ORGANISATION_NAME]'s premises must complete a contractor induction before commencing work. The induction covers:\n• Emergency procedures — evacuation routes, muster point, how to raise an alarm.\n• [ORGANISATION_NAME]'s safeguarding obligations — contractors must report any safeguarding concern immediately to the Registered Manager.\n• Infection control requirements for the specific area being worked in.\n• Areas that are off-limits without escort.\n• Reporting procedures for incidents, near misses, or damage caused during the work.\n\nContractors sign the induction record. A record of all contractors attending site is maintained in the visitor/contractor log.",
        },
        {
          heading: "Permit to Work",
          body: "A permit to work (PTW) system must be used for high-risk activities, including:\n• Hot work (welding, grinding, cutting) — risk of fire.\n• Confined space entry.\n• Work on live electrical systems.\n• Work on the roof or at height.\n• Isolation of fire or safety systems (e.g. disabling a fire suppression system during maintenance).\n\nThe PTW is issued by the Registered Manager or a nominated competent person, specifying: the work to be done; the hazards involved; the control measures in place; the duration of the permit; and the sign-off procedure on completion. No high-risk work may commence without a signed PTW.",
        },
        {
          heading: "Supervision During Work",
          body: "Where contractors are working in areas used by service users, a member of [ORGANISATION_NAME]'s staff must be available to supervise or escort them. Service users must not be left alone with contractors without a risk assessment confirming this is safe. The Registered Manager must be informed when contractors are on site and the expected duration of the work.",
        },
      ],
    },
    {
      title: "Waste Management",
      body: "Waste generated at [ORGANISATION_NAME] must be managed in accordance with the Environmental Protection Act 1990 (Duty of Care), the Controlled Waste Regulations 2012, and the Health Technical Memorandum 07-01 (HTM 07-01) for healthcare waste. Waste must be correctly classified, segregated, stored, and disposed of in a way that does not cause harm to people or the environment.",
      subSections: [
        {
          heading: "Waste Classification and Segregation",
          body: "Waste at [ORGANISATION_NAME] falls into the following categories:\n\n• Clinical/healthcare waste: waste that has been in contact with bodily fluids, including used dressings, continence products, and certain personal protective equipment. Must be placed in yellow clinical waste bags (for incineration) or yellow/black striped bags (for alternative treatment) — never in domestic waste.\n• Sharps waste: needles, lancets, and other sharp clinical items. Must be placed in UN-approved yellow sharps containers (never in clinical waste bags). Sharps containers must be no more than 2/3 full when sealed — never overfill.\n• Medicinal waste: unused or expired medication. Must be returned to the supplying pharmacy or placed in purple-lidded sharps containers (for cytotoxic and cytostatic medicines, yellow-lidded containers) — never in clinical or domestic waste.\n• Domestic waste: non-clinical general waste. Placed in black bags for domestic collection.\n• Confidential waste: paperwork containing personal data. Must be shredded on site or placed in locked confidential waste bags for collection by an approved contractor.",
          warningBox: "Incorrect segregation of clinical waste — for example, placing a used wound dressing in domestic waste — is an environmental offence under the Environmental Protection Act 1990 and a CQC concern. Where [ORGANISATION_NAME] provides care in service users' own homes, staff must follow the organisation's guidance on managing clinical waste generated during care visits.",
        },
        {
          heading: "Storage and Collection",
          body: "Clinical waste awaiting collection must be stored in a secure, locked, purpose-designed waste storage area. Waste must not be stored for longer than the maximum period specified in the waste carrier's licence (typically 72 hours for healthcare waste). Sharps containers and clinical waste bags must be sealed before removal from the point of use.\n\nAll clinical waste must be collected by a licensed waste carrier. [ORGANISATION_NAME] must retain waste transfer notes for at least 2 years (3 years for hazardous waste). The Registered Manager maintains a waste management contract with an approved licensed carrier.",
        },
        {
          heading: "Duty of Care",
          body: "Under the Environmental Protection Act 1990, [ORGANISATION_NAME] has a legal duty of care for all waste it produces — from generation through to final disposal. This means:\n• All waste must be stored securely to prevent escape.\n• Waste may only be handed to a licensed waste carrier.\n• Waste transfer documentation must be signed and retained.\n• [ORGANISATION_NAME] must take all reasonable steps to ensure that waste is correctly described and does not cause harm to the carrier, the public, or the environment.",
          legalBox: "The offence of breaching the waste duty of care (Environmental Protection Act 1990, s.34) carries an unlimited fine on conviction. CQC inspectors also view poor waste management — particularly in relation to sharps and clinical waste — as a significant indicator of infection control failure.",
        },
      ],
    },
    {
      title: "Utilities Safety",
      body: "The safe management of utilities — gas, electricity, and water — is a critical component of environmental safety. [ORGANISATION_NAME] ensures that all utility systems are inspected, maintained, and operated safely.",
      subSections: [
        {
          heading: "Gas Safety",
          body: "All gas appliances, pipework, and flues at [ORGANISATION_NAME]'s premises must be serviced and inspected annually by a Gas Safe registered engineer. A Gas Safety Certificate (CP12) must be obtained and retained for each inspection. Staff must know the location of the gas isolation valve and how to shut off gas supply in an emergency. Any smell of gas must be treated as an emergency: evacuate, ventilate, call the National Gas Emergency Service (0800 111 999), and do not use electrical switches or naked flames.",
        },
        {
          heading: "Electrical Safety",
          body: "Fixed electrical installations must be tested every 5 years (or more frequently in high-risk environments) by a qualified electrician and an Electrical Installation Condition Report (EICR) obtained. Portable electrical appliances must be tested in accordance with the PAT schedule in the Planned Preventive Maintenance programme. Defective electrical equipment must be taken out of service immediately. Extension leads should be used only as a temporary measure and must not be daisy-chained. Staff must not attempt any electrical repair or modification.",
        },
        {
          heading: "Emergency Utility Procedures",
          body: "All staff must know the location of:\n• The gas isolation valve (main gas shut-off).\n• The electrical consumer unit / distribution board (main fuse box).\n• The water stopcock (to isolate water supply in the event of a major leak).\n\nThis information must be included in induction training and displayed in a prominent location in staff areas. In any utility emergency, the Registered Manager must be notified immediately and the relevant emergency service or utility provider contacted.",
        },
      ],
    },
  ],
  relatedDocuments: [
    "saf-008 — Fire Safety Policy",
    "saf-006 — Risk Assessment Policy",
    "saf-010 — Moving & Handling Policy",
    "wl-007 — Business Continuity Policy",
    "saf-015 — Accident & Incident Reporting Policy",
  ],
  appendices: [
    { title: "Appendix A — Maintenance Schedule Checklist", content: "Rolling checklist for daily, weekly, monthly, quarterly, and annual maintenance tasks. Each task includes: task description; responsible person; frequency; record location; legal or regulatory basis. Completed checklists retained for 3 years." },
    { title: "Appendix B — COSHH Register", content: "Tabular register of all COSHH substances: substance name; use; hazard classification; SDS available (Y/N); storage location; PPE required; emergency procedure; assessment date; review date." },
  ],
  versionHistory: [
    { version: "2.9", date: "2026-02-28", changes: "Added DSEAR reference; updated Legionella WMP requirements; strengthened defect reporting timescale." },
    { version: "2.7", date: "2025-04-01", changes: "Updated EICR frequency; added shower head descaling schedule; updated COSHH register format." },
    { version: "2.5", date: "2024-02-01", changes: "Full review; added Legionella section; aligned with HSE L8 ACoP; updated PPM schedule." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-011  Grievance Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL011_CONTENT: DocumentContent = {
  title: "Grievance Policy",
  policyId: "WL-011",
  version: "2.8",
  effectiveDate: "2026-02-25",
  reviewDate: "2027-02-25",
  approvedBy: "Registered Manager / HR Lead",
  scope: "All employees of [ORGANISATION_NAME] who wish to raise a workplace grievance. A grievance is a concern, problem, or complaint raised by an employee regarding their employment, working conditions, or treatment at work. This policy applies to all staff and provides a fair, consistent, and confidential process for raising and resolving grievances.",
  responsibilities: [
    {
      role: "Registered Manager / HR Lead",
      duties: [
        "Ensure grievances are taken seriously and dealt with promptly and fairly.",
        "Ensure managers are trained in handling grievances in line with the Acas Code.",
        "Ensure grievance records are kept confidentially and retained appropriately.",
        "Monitor patterns of grievances to identify systemic issues requiring management action.",
      ],
    },
    {
      role: "Line Managers",
      duties: [
        "Make themselves accessible to staff who wish to raise concerns.",
        "Take all grievances seriously — never dismiss or minimise a concern.",
        "Conduct grievance meetings fairly and without pre-judgement.",
        "Maintain confidentiality throughout the process.",
        "Seek HR guidance when unsure about handling a complex grievance.",
      ],
    },
  ],
  legislation: [
    "Employment Rights Act 1996 — right to be accompanied at formal grievance hearings",
    "Acas Code of Practice on Disciplinary and Grievance Procedures (2015, updated 2021) — statutory code of practice",
    "Equality Act 2010 — grievances related to discrimination or harassment",
    "Employment Relations Act 1999, section 10 — right to be accompanied",
    "Public Interest Disclosure Act 1998 — where a grievance amounts to a qualifying disclosure, whistleblowing protections apply",
  ],
  definitions: [
    { term: "Grievance", definition: "A concern, problem, or complaint raised by an employee about their employment or working conditions. Grievances may relate to: pay; working conditions; treatment by a manager or colleague; discrimination or harassment; health and safety; or any other matter affecting the employee's working life." },
    { term: "Companion", definition: "A person the employee may bring to a formal grievance hearing. The companion must be a work colleague or a trade union representative (including a trade union official). The companion has the right to address the hearing but not to answer questions on the employee's behalf." },
    { term: "Mediation", definition: "A voluntary, confidential process in which an independent, trained mediator helps two or more parties in dispute to reach a mutually agreed resolution. Mediation may be offered at any stage of the grievance process as an alternative or complement to the formal procedure." },
    { term: "Collective Grievance", definition: "A grievance raised by a group of employees on a common issue. Collective grievances are handled separately from individual grievances and may involve trade union representation." },
  ],
  sections: [
    {
      title: "Informal Resolution",
      body: "Most workplace concerns can be resolved informally through a direct conversation between the employee and their line manager. [ORGANISATION_NAME] encourages informal resolution as the first step:\n\n• The employee raises the concern with their line manager directly.\n• The manager listens, acknowledges the concern, and explores resolution options.\n• An agreed resolution is confirmed verbally or in writing.\n• The matter is considered closed unless the employee remains dissatisfied.\n\nWhere the grievance is about the employee's direct line manager, the employee should raise it with the next level of management.\n\nNot all concerns require formal process — informal resolution protects the working relationship and reduces escalation. However, employees are never required to attempt informal resolution before raising a formal grievance if the concern is serious (e.g. harassment, discrimination, safety breach).",
    },
    {
      title: "Formal Grievance Procedure",
      body: "Where informal resolution has failed or is inappropriate, the employee may raise a formal grievance.",
      procedure: [
        "Written grievance: the employee submits a written statement setting out the nature of their grievance. The statement should be specific — describing the events complained of, the dates, and the outcome sought.",
        "Acknowledgement: [ORGANISATION_NAME] acknowledges receipt within 5 working days and confirms the name of the manager who will hear the grievance.",
        "Grievance meeting: the employee is invited to a grievance hearing with at minimum 5 working days' notice. The employee has the right to be accompanied by a colleague or trade union representative.",
        "Investigation: where the grievance involves allegations against another person, [ORGANISATION_NAME] may investigate before or alongside the hearing. Investigation findings are shared with the employee.",
        "Decision: following the hearing, [ORGANISATION_NAME] responds in writing within 10 working days (or as soon as practicable for complex matters). The response confirms: the findings; any action to be taken; and the employee's right of appeal.",
        "Appeal: the employee may appeal the grievance outcome within 5 working days of receiving the written decision. The appeal is heard by a more senior manager not previously involved. The appeal decision is final within [ORGANISATION_NAME]'s internal process.",
      ],
      legalBox: "An employee who raises a grievance is protected from detriment under the Employment Rights Act 1996 and the Equality Act 2010 (where the grievance relates to a protected characteristic). Treating an employee less favourably because they have raised a grievance constitutes victimisation and may result in employment tribunal proceedings.",
    },
    {
      title: "Grievances Involving Harassment or Discrimination",
      body: "Where a grievance relates to harassment, bullying, or discrimination, [ORGANISATION_NAME] treats the matter with heightened seriousness and confidentiality:\n• The investigation is conducted by a manager who has received equality and harassment training.\n• The employee raising the grievance and any witnesses are supported throughout the process.\n• Interim protective measures may be put in place (such as changed rotas) to avoid the complainant working with the subject of the grievance pending the investigation.\n• Where the investigation finds harassment or discrimination has occurred, disciplinary action will follow under WL-010.\n• [ORGANISATION_NAME] keeps records of all harassment-related grievances and monitors for patterns.",
    },
    {
      title: "Whistleblowing Distinguished",
      body: "Some concerns raised through the grievance procedure may also qualify as protected disclosures under the Public Interest Disclosure Act 1998 (whistleblowing). A grievance that discloses information about wrongdoing, illegality, danger to health and safety, or cover-up — not just a personal complaint about working conditions — may engage whistleblowing protections under WL-004.\n\nWhere a manager is unsure whether a concern is a personal grievance or a whistleblowing disclosure, they should seek HR guidance. The distinction matters because whistleblowing disclosures attract additional legal protection against detriment and dismissal.",
    },
  ],
  relatedDocuments: [
    "wl-010 — Disciplinary & Capability Policy",
    "wl-004 — Whistleblowing (Raising Concerns) Policy",
    "car-002 — Equality, Diversity & Inclusion Policy",
    "wl-003 — Supervision & Appraisal Policy",
    "wl-015 — Equality & Human Rights Policy (Employment)",
  ],
  appendices: [
    { title: "Appendix A — Grievance Hearing Record Template", content: "Date; employee name and role; nature of grievance (summary); persons present; summary of employee's account; management response; findings; outcome; action to be taken; appeal rights stated; manager signature; employee acknowledgement." },
    { title: "Appendix B — Grievance Register", content: "Anonymised register maintained by HR/Registered Manager: date raised; broad category (pay/working conditions/harassment/discrimination/other); outcome (resolved/upheld/not upheld/appeal); themes for quarterly analysis." },
  ],
  versionHistory: [
    { version: "2.8", date: "2026-02-25", changes: "Added whistleblowing distinction section; strengthened harassment grievance handling; updated Acas Code reference." },
    { version: "2.6", date: "2025-05-01", changes: "Added mediation option; updated collective grievance definition." },
    { version: "2.3", date: "2024-02-01", changes: "Full review; aligned with Acas Code 2021; added pattern monitoring for HR governance." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WL-012  Absence Management Policy
// ─────────────────────────────────────────────────────────────────────────────
export const WL012_CONTENT: DocumentContent = {
  title: "Absence Management Policy",
  policyId: "WL-012",
  version: "3.0",
  effectiveDate: "2026-03-18",
  reviewDate: "2027-03-18",
  approvedBy: "Registered Manager / HR Lead",
  scope: "All employees of [ORGANISATION_NAME] in relation to their attendance at work. This policy covers short-term sickness absence, long-term sickness absence, and other forms of absence including unauthorised absence. It does not cover annual leave or planned compassionate or parental leave, which are addressed in staff contracts and the HR handbook.",
  responsibilities: [
    {
      role: "Registered Manager / HR Lead",
      duties: [
        "Monitor overall absence rates and trends at governance level.",
        "Ensure return-to-work interviews are conducted after every absence.",
        "Manage long-term sickness absence cases with HR guidance and occupational health involvement.",
        "Ensure absence records are accurate and retained appropriately.",
        "Investigate and address patterns of frequent short-term absence.",
      ],
    },
    {
      role: "All Employees",
      duties: [
        "Notify their manager of absence before their shift starts, following the notification procedure.",
        "Keep their manager updated during any absence lasting more than 3 days.",
        "Provide a fit note for absences lasting more than 7 calendar days.",
        "Attend a return-to-work interview on their first day back.",
        "Engage cooperatively with any occupational health referral or absence management process.",
      ],
    },
  ],
  legislation: [
    "Employment Rights Act 1996 — right not to be unfairly dismissed; capability dismissal requirements",
    "Statutory Sick Pay Act 1994 and associated regulations — SSP entitlement (from day 4 of absence)",
    "Equality Act 2010 — disability as a protected characteristic; duty to make reasonable adjustments for disabled employees",
    "Access to Medical Reports Act 1988 — employee rights regarding medical reports requested by employer",
    "Acas — Managing attendance and sickness absence (current guidance)",
  ],
  definitions: [
    { term: "Return-to-Work Interview (RTW)", definition: "A short, structured conversation between the employee and their line manager on their first day back after any period of sickness absence, however brief. The RTW interview confirms the reason for absence, identifies whether any support or reasonable adjustments are needed, and reintegrates the employee into the team. It is not a disciplinary interview." },
    { term: "Bradford Factor", definition: "A formula used to identify patterns of frequent short-term absence: B = S² × D (where S = number of separate absence spells; D = total days absent). The Bradford Factor highlights employees with many short, frequent absences (which are more disruptive than single long absences) and triggers a management review at defined thresholds." },
    { term: "Fit Note", definition: "Previously known as a 'sick note'. A medical statement issued by a GP or hospital doctor certifying a person's fitness for work. Fit notes are required for absences exceeding 7 calendar days. They may state 'not fit for work' or 'may be fit for work' with specified adjustments." },
    { term: "Occupational Health (OH)", definition: "A specialist medical service that assesses an employee's fitness for work, advises on reasonable adjustments, and supports rehabilitation from long-term illness. OH referral is appropriate in all long-term absence cases (over 4 weeks) and where there is repeated short-term absence with a pattern suggesting an underlying condition." },
    { term: "Long-Term Sickness Absence", definition: "Generally defined as absence lasting 4 or more consecutive weeks. Long-term absence requires a structured management approach involving regular contact, OH referral, exploration of adjusted duties or phased return, and — if return cannot be achieved — consideration of medical capability dismissal." },
  ],
  sections: [
    {
      title: "Absence Notification Procedure",
      body: "When a member of staff is unable to attend work due to sickness, they must:\n• Contact their manager (not a colleague) directly by telephone — not by text or social media — before the start of their shift. Where [ORGANISATION_NAME] has a specific notification number, use that.\n• Provide an indication of the likely duration of absence and the reason (in general terms — a member of staff is not obliged to disclose a specific diagnosis).\n• If the absence continues, call in again on each day of absence for the first 7 days.\n• For absence beyond 7 calendar days, obtain a fit note from their GP and submit it to the manager as soon as practicable.\n\nWhere a member of staff fails to notify their absence without a reasonable explanation, this is treated as unauthorised absence and may be subject to disciplinary action.",
    },
    {
      title: "Return-to-Work Interviews",
      body: "A return-to-work interview must be conducted by the line manager on the employee's first day back after any sickness absence — including a single day of absence. The RTW interview:\n• Confirms the employee's fitness to return.\n• Identifies whether any temporary adjustments are needed.\n• Discusses any concerns the employee has about returning.\n• Reviews the absence record and discusses any pattern if it is emerging.\n• Updates the absence record.\n\nThe RTW interview must be documented (briefly) and retained. It is not a disciplinary meeting — it is a supportive, two-way conversation. The manager should approach it as 'welcome back — how are you?' rather than 'explain your absence'.",
      practiceBox: "Return-to-work interviews are one of the most cost-effective absence management tools available. Research consistently shows that staff are more likely to come to work — including when they feel unwell — when they know they will have a 1:1 conversation on their return. The key is consistency — an RTW for every absence, every time, with no exceptions.",
    },
    {
      title: "Short-Term Absence Management — Trigger Points",
      body: "Where an employee's short-term absence reaches a trigger threshold, the line manager initiates a formal absence review. [ORGANISATION_NAME]'s absence triggers are:\n\n• 3 or more separate absence episodes in a rolling 12-month period.\n• 8 or more days of absence in a rolling 12-month period.\n• A Bradford Factor score exceeding 100 in a rolling 52 weeks.\n• A pattern suggesting a particular day (e.g. Mondays or Fridays) or a repeated circumstance.\n\nAt the absence review, the manager:\n• Reviews the absence record with the employee.\n• Explores whether there is an underlying medical or personal reason for the pattern.\n• Discusses any support or adjustments that may help.\n• Sets out clearly what improvement is expected and over what period.\n• Issues an Attendance Improvement Notice if improvement is required — this is a management tool, not a disciplinary sanction.\n\nWhere absence continues to be a concern after review, formal action under the capability procedure (WL-010) may be initiated.",
      legalBox: "Where frequent short-term absence is related to a disability as defined by the Equality Act 2010 (a physical or mental impairment that has a substantial, long-term adverse effect on normal day-to-day activities), [ORGANISATION_NAME] must consider reasonable adjustments before taking any formal action. Disciplining or dismissing a disabled employee for disability-related absence without considering adjustments is likely to constitute disability discrimination.",
    },
    {
      title: "Long-Term Sickness Absence",
      body: "Long-term sickness absence (4+ weeks) requires a structured management approach:\n\n• Maintain regular, supportive contact with the employee — at least fortnightly. Contact should be by telephone unless the employee requests otherwise. Avoid contacting the employee only when there is a process milestone — check-in calls should be genuinely welfare-focused.\n• Refer to occupational health within 4 weeks of the absence commencing. OH will provide: a prognosis; an assessment of whether a phased return or adjusted duties are possible; any relevant adjustments.\n• Based on OH advice, explore whether the employee can return on adjusted duties or a phased return basis.\n• Keep the employee updated on their position — long-term absence can create anxiety about job security.\n• If OH advises that the employee is unlikely to return to their role in the foreseeable future, consider the capability dismissal process under WL-010. This must only follow a fair process and adequate support period.",
    },
  ],
  relatedDocuments: [
    "wl-010 — Disciplinary & Capability Policy",
    "wl-011 — Grievance Policy",
    "wl-003 — Supervision & Appraisal Policy",
    "wl-008 — Staffing & Deployment Policy",
    "car-002 — Equality, Diversity & Inclusion Policy",
  ],
  appendices: [
    { title: "Appendix A — Return-to-Work Interview Record", content: "Employee name; date of return; absence dates; reason (general); fit to return (Y/N); any adjustments required; absence record reviewed (Y/N); Bradford Factor score; any concerns raised; agreed actions; manager signature; employee acknowledgement." },
    { title: "Appendix B — Attendance Improvement Notice Template", content: "Name; date; current absence record (episodes, days, Bradford Factor); trigger threshold reached; reason(s) discussed; support offered; improvement required; review period and date; consequence if improvement not achieved; manager and employee signatures." },
  ],
  versionHistory: [
    { version: "3.0", date: "2026-03-18", changes: "Added Bradford Factor trigger thresholds; updated long-term absence guidance; strengthened disability adjustment requirement." },
    { version: "2.8", date: "2025-05-01", changes: "Added phased return guidance; updated occupational health referral timescale to 4 weeks." },
    { version: "2.5", date: "2024-03-01", changes: "Full review; added Attendance Improvement Notice tool; updated trigger points." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CAR-008  Advocacy Policy
// ─────────────────────────────────────────────────────────────────────────────
export const CAR008_CONTENT: DocumentContent = {
  title: "Advocacy Policy",
  policyId: "CAR-008",
  version: "2.1",
  effectiveDate: "2026-01-18",
  reviewDate: "2027-01-18",
  approvedBy: "Registered Manager",
  scope: "All service users at [ORGANISATION_NAME] who may benefit from, or have a right to access, advocacy services. This policy applies to all staff and covers statutory advocacy rights, general advocacy, and the Registered Manager's responsibilities regarding facilitating advocacy access.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all service users are informed of their advocacy rights on admission.",
        "Maintain a current directory of local advocacy services.",
        "Ensure IMCA referrals are made promptly when the statutory criteria are met.",
        "Ensure IMHA referrals are made for all eligible patients subject to the Mental Health Act.",
        "Ensure staff understand advocacy rights and support — not impede — service users' access to advocates.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Inform service users of their right to access advocacy on admission and whenever relevant.",
        "Facilitate access to advocacy — provide privacy, time, and support for advocacy meetings.",
        "Never attempt to influence or monitor communication between a service user and their advocate.",
        "Refer concerns about unmet advocacy needs to the Registered Manager.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005, sections 35–41 — Independent Mental Capacity Advocacy (IMCA) statutory duty",
    "Care Act 2014, section 67 — Care Act Advocacy statutory duty (formerly known as Independent Advocacy under the Care Act)",
    "Mental Health Act 1983 (as amended 2007), section 130A–130D — Independent Mental Health Advocacy (IMHA)",
    "Mental Health Units (Use of Force) Act 2018 — Advocate access in inpatient mental health settings",
    "Equality Act 2010 — reasonable adjustments may include providing advocacy support",
  ],
  definitions: [
    { term: "Advocacy", definition: "The process of supporting a person to express their views, access information, and understand their rights so they can make informed decisions and be involved in matters that affect them. Advocates speak on behalf of, or alongside, people who may find it difficult to make their voices heard." },
    { term: "IMCA", definition: "Independent Mental Capacity Advocate. A statutory advocate appointed under sections 35–41 of the Mental Capacity Act 2005 to represent and support a person who lacks capacity to make a specific serious decision and who has no appropriate family member or friend to support them. [ORGANISATION_NAME] must refer to the IMCA service before making decisions about serious medical treatment or long-term care changes for eligible persons." },
    { term: "IMHA", definition: "Independent Mental Health Advocate. A statutory advocate for 'qualifying patients' under the Mental Health Act 1983 — including those detained under sections 2, 3, 37, and community treatment order patients. IMHAs help patients understand their rights, access information about their treatment, and have their wishes heard." },
    { term: "Care Act Advocacy", definition: "Statutory advocacy provided under section 67 of the Care Act 2014 for adults who have substantial difficulty engaging with the care assessment, planning, or review process and who have no appropriate person to support them. [ORGANISATION_NAME] must notify the local authority when it identifies a person who may need Care Act Advocacy." },
    { term: "Non-Statutory Advocacy", definition: "Advocacy that is not mandated by legislation but that may be arranged to support a service user's involvement in decisions — for example, a mental health advocacy service, a learning disability advocacy service, or a peer advocate." },
  ],
  sections: [
    {
      title: "Statutory Advocacy — Summary of Rights",
      body: "Service users at [ORGANISATION_NAME] have the following statutory rights to advocacy. Staff must know when these rights are triggered and take action without delay:",
      subSections: [
        {
          heading: "IMCA — Mental Capacity Act 2005",
          body: "Triggered when: (1) a person lacks capacity for a specific decision; AND (2) the decision concerns serious medical treatment, long-term accommodation change, or a safeguarding enquiry; AND (3) there is no appropriate family member, friend, or unpaid carer who can be consulted. [ORGANISATION_NAME] must refer to the local IMCA service before making the decision. Note: IMCA referral is a legal duty, not an option.",
        },
        {
          heading: "IMHA — Mental Health Act 1983",
          body: "Triggered when a person is detained under the Mental Health Act (sections 2, 3, 37) or subject to a Community Treatment Order. All qualifying patients have the right to IMHA support. [ORGANISATION_NAME] must tell qualifying patients about the IMHA service and help them access it. For care homes receiving detained patients from hospital, ensure the IMHA referral status is confirmed on admission.",
        },
        {
          heading: "Care Act Advocacy — Care Act 2014",
          body: "Triggered when a person is involved in a care assessment, care plan, review, safeguarding enquiry, or safeguarding plan, AND they have substantial difficulty engaging with the process (difficulty understanding information, retaining it, using it, or communicating views), AND there is no appropriate person to support them. Notify the local authority when these criteria are met — it is their duty to provide the advocate.",
        },
      ],
      legalBox: "Failure to make an IMCA referral when the statutory criteria are met is unlawful. An IMCA referral must be made before the decision is taken — not after. The decision cannot lawfully be made without the IMCA's involvement in these circumstances. If you are unsure whether the criteria are met, refer and discuss with the IMCA service — they will advise.",
    },
    {
      title: "Facilitating Advocacy in Practice",
      body: "An advocate's effectiveness depends on their ability to communicate freely and confidentially with the service user. [ORGANISATION_NAME]'s responsibilities in facilitating advocacy include:\n\n• Informing every service user of advocacy services on admission — using accessible formats if needed.\n• Providing private, comfortable space for advocacy meetings.\n• Ensuring advocates have access to relevant care records (with the service user's consent, or where the IMCA has a statutory right of access).\n• Never being present at advocacy meetings without the service user's request — advocacy is a confidential process.\n• Acting on feedback from advocates about service user needs or concerns.\n• Treating advocates as professionals — never dismissing an advocate's concerns or creating barriers to their access.\n\nA service user who is being assisted by an advocate should never feel that they need to hide this from staff. The presence of an advocate is not a threat — it is a sign that the person is being empowered to exercise their rights.",
      practiceBox: "Some staff worry that an advocate's involvement means criticism of the service. In practice, advocates support better outcomes for service users and often improve communication between the service user and the care provider. Welcome advocates as partners, not scrutinisers. A service that embraces advocacy demonstrates confidence in its own practice.",
    },
    {
      title: "Non-Statutory Advocacy",
      body: "Beyond statutory rights, many service users benefit from non-statutory advocacy — support from a voluntary sector organisation, peer advocate, or specialist advocacy service. Common non-statutory advocacy services relevant to care settings include:\n\n• Learning disability advocacy organisations — for service users with learning disabilities who need support understanding and communicating their wishes.\n• Mental health advocacy — for service users experiencing mental health difficulties.\n• Age-related advocacy — Older People's Advocacy Alliance (OPAAL) and local equivalents.\n• Carer advocacy — support for carers involved in a service user's care.\n\n[ORGANISATION_NAME] maintains a local advocacy services directory, reviewed annually. Referrals to non-statutory advocacy can be made at any time with the service user's consent.",
    },
  ],
  relatedDocuments: [
    "eff-002 — Mental Capacity Act Policy",
    "car-001 — Dignity & Respect Policy",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "car-007 — Family & Carer Involvement Policy",
    "car-003 — Communication Policy",
  ],
  appendices: [
    { title: "Appendix A — Local Advocacy Services Directory", content: "Contact details for: local IMCA service; local IMHA service; local Care Act advocacy provider; learning disability advocacy; mental health advocacy; older people's advocacy; carer support advocacy. Updated annually and following any service change." },
    { title: "Appendix B — Advocacy Referral Log", content: "Record of all advocacy referrals made by [ORGANISATION_NAME]: date; service user (anonymised or identified as per consent); advocacy type (IMCA/IMHA/Care Act/non-statutory); reason for referral; referral date; advocate allocated; outcome." },
  ],
  versionHistory: [
    { version: "2.1", date: "2026-01-18", changes: "Added IMHA and Care Act advocacy sections; updated IMCA criteria; added non-statutory advocacy directory." },
    { version: "2.0", date: "2025-04-01", changes: "Full review; added facilitation principles; updated legal duties section." },
    { version: "1.7", date: "2024-02-01", changes: "Added Care Act 2014 s67 advocacy; updated IMCA referral process." },
  ],
};
