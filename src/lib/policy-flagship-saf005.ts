import type { DocumentContent } from "./documents";

export const SAF005_COMPREHENSIVE: DocumentContent = {
  statement:
    "[ORGANISATION_NAME] is committed to preventing and controlling infection as a fundamental component of safe care. Healthcare-associated infections (HCAIs) cause avoidable harm, suffering and death. Every member of our team — from the care worker to the manager — plays a vital role in breaking the chain of infection. We commit to implementing evidence-based infection prevention measures, providing our staff with the training and equipment they need, and creating a culture where infection prevention is a daily practice, not an occasional response.",

  reviewDate: "June 2026",
  nextReviewDate: "June 2027",
  reviewedBy: "Registered Manager / IPC Lead",

  purpose:
    "This policy establishes [ORGANISATION_NAME]'s approach to infection prevention and control (IPC), setting out the standard precautions, outbreak management procedures, environmental cleaning standards, and staff training requirements that apply in all settings. It implements Regulation 12 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 and aligns with the UK Health Security Agency (UKHSA) and NHS England IPC guidance for social care settings.",

  scope:
    "This policy applies to all staff, volunteers, contractors and visitors to [ORGANISATION_NAME]. It applies in all settings in which [ORGANISATION_NAME] provides care — residential, nursing, supported living, domiciliary and day care. It covers standard precautions, transmission-based precautions, environmental cleaning, waste management, outbreak management, and staff health.",

  definitions: [
    {
      term: "Infection Prevention and Control (IPC)",
      definition:
        "A practical, evidence-based approach to preventing patients and health and social care workers from being harmed by avoidable infection. IPC encompasses standard precautions (applied to all care), transmission-based precautions (applied when a specific organism is known or suspected), environmental controls, and education.",
    },
    {
      term: "Standard Precautions",
      definition:
        "A set of infection control practices applied to all care, regardless of whether the person is known to have an infection. Standard precautions include: hand hygiene; personal protective equipment (PPE); safe handling and disposal of sharps; management of blood and body fluid spills; waste management; and decontamination of equipment and the environment.",
    },
    {
      term: "Transmission-Based Precautions",
      definition:
        "Additional precautions applied on top of standard precautions when caring for a person known or suspected to have an infection transmissible by a specific route. The three categories are: contact precautions; droplet precautions; and airborne precautions.",
    },
    {
      term: "Healthcare-Associated Infection (HCAI)",
      definition:
        "An infection that occurs as a result of healthcare interventions or is acquired during a period of healthcare. Common HCAIs include Clostridioides difficile (C.diff), meticillin-resistant Staphylococcus aureus (MRSA), norovirus and urinary tract infections related to catheter use.",
    },
    {
      term: "PPE (Personal Protective Equipment)",
      definition:
        "Equipment worn to minimise exposure to hazards including infections. In a care setting, PPE includes: disposable gloves, disposable aprons, fluid-resistant surgical face masks (FRSMs), and eye/face protection. The type of PPE required depends on the task and the risk of exposure.",
    },
    {
      term: "The Chain of Infection",
      definition:
        "A model describing the six links required for an infection to spread: infectious agent (pathogen); reservoir (where the pathogen lives); portal of exit; mode of transmission; portal of entry; and susceptible host. Breaking any link in the chain prevents infection transmission.",
    },
    {
      term: "Outbreak",
      definition:
        "An occurrence of more than the expected number of cases of a disease or infection in a given place and time. In a care setting, an outbreak is typically defined as two or more linked cases. All suspected outbreaks must be reported to the local Health Protection Team (HPT).",
    },
    {
      term: "COSHH",
      definition:
        "Control of Substances Hazardous to Health — the regulatory framework requiring employers to control substances that are hazardous to health, including cleaning agents, disinfectants and body fluids. [ORGANISATION_NAME] must maintain COSHH assessments for all hazardous substances used.",
    },
    {
      term: "Decontamination",
      definition:
        "The process of removing or destroying microorganisms from equipment, the environment or the body to render it safe. The three levels of decontamination are: cleaning (physical removal of contamination); disinfection (reduction of microorganisms to a safe level); and sterilisation (destruction of all microorganisms).",
    },
    {
      term: "IPC Link Practitioner",
      definition:
        "A staff member who has received additional IPC training and acts as a resource for colleagues on IPC matters. The IPC Link Practitioner supports the IPC Lead to implement IPC standards and identify emerging IPC issues.",
    },
  ],

  responsibilities: [
    {
      role: "Provider",
      duties: [
        "Ensure an IPC policy is in place and reviewed annually",
        "Ensure sufficient resources for IPC — adequate PPE stocks, cleaning equipment, decontamination facilities",
        "Ensure the service meets the requirements of the Code of Practice for health and social care on the prevention and control of infections (the CQC IPC Code)",
        "Ensure an IPC Lead is appointed and supported",
      ],
    },
    {
      role: "Registered Manager / IPC Lead",
      duties: [
        "Implement this IPC policy and all associated procedures",
        "Conduct monthly IPC audits using the UKHSA/NHS England IPC audit tool",
        "Maintain PPE stocks at adequate levels at all times",
        "Report all outbreaks to the local Health Protection Team",
        "Notify CQC of any outbreak or HCAI that poses a significant risk",
        "Review and act on the results of IPC audits and monitoring data",
        "Ensure all staff receive IPC training at induction and annually",
        "Manage staff health policies including exclusion of staff with infectious illness",
        "Maintain COSHH assessments for all cleaning and disinfection products",
        "Conduct or commission an annual IPC risk assessment",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Follow all IPC procedures in this policy at all times",
        "Perform hand hygiene at the five moments (WHO): before patient contact; before an aseptic task; after a body fluid exposure risk; after patient contact; after contact with patient surroundings",
        "Wear the correct PPE for every task where PPE is required",
        "Report any suspected infection, outbreak or IPC concern to the manager immediately",
        "Do not attend work if suffering from vomiting, diarrhoea, or other infectious illness",
        "Follow the exclusion guidance for specific infections",
        "Complete IPC training as required",
      ],
    },
  ],

  keyPoints: [
    "Hand hygiene is the single most effective measure for preventing the spread of infection — it must be practised consistently, not occasionally",
    "PPE protects the wearer and the person being cared for — wearing the wrong PPE, or wearing it incorrectly, provides false protection",
    "The environment must be visibly clean at all times — 'clean enough to look at' is not clean enough for a care setting",
    "Two or more linked cases of diarrhoea and vomiting is an outbreak — contact the Health Protection Team immediately, do not wait",
    "Exclusion of symptomatic staff from work is not optional — it is a legal requirement under the Health and Safety at Work Act",
    "Antibiotic stewardship is an IPC issue — unnecessary antibiotics breed resistant organisms",
    "Catheter-associated urinary tract infections (CAUTIs) are largely preventable — the first question when managing a catheter is always whether the catheter is still needed",
  ],

  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 12 (Safe Care and Treatment)",
    "Health and Social Care Act 2008 — Code of Practice on the prevention and control of infections and related guidance (IPC Code, 2022)",
    "Health and Safety at Work Act 1974 — employer duties for staff and visitor safety",
    "Control of Substances Hazardous to Health Regulations 2002 (COSHH)",
    "Environmental Protection Act 1990 — waste management",
    "Hazardous Waste Regulations 2005",
    "Public Health (Control of Disease) Act 1984 — notifiable diseases",
    "Health Protection (Notification) Regulations 2010 — notifiable diseases list",
    "NHS England / UKHSA: National IPC Manual for England (2022)",
    "NHS England / UKHSA: COVID-19 infection prevention and control guidance for social care settings",
    "NICE guideline NG125: Surgical site infections — prevention and treatment",
    "NICE guideline CG139: Infection — prevention and control of healthcare-associated infections in primary and community care",
  ],

  sections: [],

  procedure: [
    {
      heading: "1. Hand Hygiene",
      body: "Hand hygiene is the most important IPC measure. [ORGANISATION_NAME] adopts the WHO Five Moments of Hand Hygiene as the standard for when hands must be cleaned.",
      subSections: [
        {
          heading: "1.1 The Five Moments",
          body: "Hand hygiene must be performed:",
          bulletPoints: [
            "MOMENT 1 — Before touching a person",
            "MOMENT 2 — Before a clean or aseptic procedure",
            "MOMENT 3 — After body fluid exposure or risk",
            "MOMENT 4 — After touching a person",
            "MOMENT 5 — After touching a person's surroundings",
          ],
        },
        {
          heading: "1.2 Method",
          body: "Hand hygiene may be performed with alcohol hand rub (AHR) or soap and water. Soap and water must be used when: hands are visibly dirty or contaminated; after contact with a person with diarrhoea and/or vomiting; after caring for a person with Clostridioides difficile (alcohol does not kill C.diff spores); and after removing gloves if hands are contaminated.",
          steps: [
            "Wet hands under running water",
            "Apply soap and rub hands together vigorously for at least 20 seconds — covering all surfaces including between fingers and thumbs",
            "Rinse thoroughly under running water",
            "Dry with a single-use paper towel",
            "Use the paper towel to turn off the tap",
          ],
          practiceBox:
            "The 20-second rule: singing 'Happy Birthday' twice takes approximately 20 seconds. This is the minimum time for effective handwashing. Studies consistently show that the most commonly missed areas are the fingertips and the backs of the thumbs — give these extra attention.",
        },
        {
          heading: "1.3 Bare Below the Elbow",
          body: "All staff providing direct care must be bare below the elbow: no wrist watches, no bracelets, no rings with stones. Plain wedding bands are acceptable. Nails must be short, clean and free of nail varnish or false nails. Long sleeves must be rolled up before providing care.",
          legalBox:
            "CQC inspectors will observe hand hygiene practice during inspection and will check whether the 'bare below the elbow' policy is being followed. Jewellery worn during care tasks is evidence of non-compliance with the IPC Code and Regulation 12.",
        },
      ],
    },
    {
      heading: "2. Personal Protective Equipment (PPE)",
      body: "PPE protects care workers and the people they support from cross-infection. The correct PPE must be selected for every task, donned correctly, worn throughout the task, and removed and disposed of correctly without contaminating the wearer.",
      subSections: [
        {
          heading: "2.1 When to Wear PPE",
          body: "The following PPE requirements apply as a minimum:",
          bulletPoints: [
            "GLOVES — when there is a risk of contact with blood, body fluids, mucous membranes, non-intact skin, or when handling contaminated items",
            "APRON — when there is a risk of contaminating clothing or skin with blood, body fluids, or microorganisms",
            "FACE MASK — when providing personal care to a person with a respiratory infection; when there is a risk of blood/body fluid splashing to the face",
            "EYE PROTECTION — when there is a risk of blood or body fluid splashing into the eyes",
          ],
        },
        {
          heading: "2.2 Donning and Doffing",
          body: "The order in which PPE is put on (donned) and removed (doffed) matters — incorrect doffing is a major route of self-contamination.",
          steps: [
            "DONNING: Hand hygiene → Apron → Mask → Eye protection → Gloves",
            "DOFFING: Gloves → Apron (touching only the inside) → Eye protection → Mask (touching only the strings) → Hand hygiene",
          ],
          warningBox:
            "Gloves do not replace hand hygiene — they supplement it. Hands must be cleaned before gloves are put on and after gloves are removed. Wearing gloves does not prevent contamination of hands if gloves are perforated or if doffing technique is incorrect.",
        },
        {
          heading: "2.3 PPE in Outbreak Situations",
          body: "During a gastrointestinal or respiratory outbreak, enhanced PPE requirements apply. The IPC Lead will issue specific guidance. Typically: FFP3 respirator masks (rather than surgical masks) for aerosol-generating procedures; enhanced glove and apron use for all contact with symptomatic individuals.",
        },
      ],
    },
    {
      heading: "3. Environmental Cleaning",
      body: "The care environment must be maintained in a visibly clean condition at all times. Cleaning is an IPC measure, not a housekeeping preference.",
      subSections: [
        {
          heading: "3.1 Routine Cleaning",
          body: "The following frequencies apply as a minimum:",
          bulletPoints: [
            "High-touch surfaces (door handles, light switches, grab rails, call bells, toilet flush handles) — twice daily and after each soiling",
            "Bathrooms and toilets — daily and after each use for people with an infection",
            "Kitchen surfaces, refrigerators and food preparation areas — daily and after each use",
            "Floors — daily by mopping",
            "Communal areas — daily",
            "Individual bedrooms — daily when occupied",
          ],
        },
        {
          heading: "3.2 Enhanced Cleaning",
          body: "Enhanced cleaning is required when:",
          bulletPoints: [
            "A person has a known infection such as C.diff, norovirus or MRSA",
            "A room has been vacated after a person with an infection",
            "An outbreak is declared — enhanced cleaning of the entire affected area",
            "A blood or body fluid spillage has occurred",
          ],
        },
        {
          heading: "3.3 Cleaning Products",
          body: "Chlorine-based disinfectant (bleach solution) must be used for environmental decontamination during outbreaks of diarrhoea and vomiting (including norovirus) and C.diff. Alcohol-based products are ineffective against these organisms. The correct dilution must be followed — too weak is ineffective; too strong causes surface damage and respiratory irritation.",
          legalBox:
            "COSHH assessments must be in place for all cleaning and disinfection products. Staff must be trained in the correct use, dilution and storage of each product. Products must be stored out of reach of service users, in a locked cupboard.",
        },
      ],
    },
    {
      heading: "4. Specific Organisms — MRSA and C.diff",
      body: "[ORGANISATION_NAME] has specific protocols for managing the two most common HCAIs: meticillin-resistant Staphylococcus aureus (MRSA) and Clostridioides difficile (C.diff).",
      subSections: [
        {
          heading: "4.1 MRSA",
          body: "MRSA is a strain of Staphylococcus aureus that is resistant to many antibiotics. It can cause skin infections, wound infections, pneumonia and bloodstream infections. MRSA is spread mainly by direct skin contact — hand hygiene is the primary prevention measure.",
          bulletPoints: [
            "A person known to carry MRSA must have their status recorded in their care plan",
            "Contact precautions apply — gloves and apron for all direct care",
            "Shared equipment (commodes, bath hoists) must be decontaminated after each use",
            "MRSA does not require isolation in a single room unless the person has an open wound or is clinically at risk of spreading MRSA to vulnerable others",
            "Staff carrying MRSA are not generally excluded from work — seek occupational health advice",
          ],
        },
        {
          heading: "4.2 Clostridioides difficile (C.diff)",
          body: "C.diff is a spore-forming bacterium that causes diarrhoea. It typically affects people who have received antibiotic treatment. C.diff is spread by the faecal-oral route — spores can survive in the environment for months. Alcohol hand rub does NOT kill C.diff spores.",
          bulletPoints: [
            "A person with confirmed or suspected C.diff must have contact precautions: gloves and apron for all care; hand washing with soap and water (not AHR) after all contact",
            "The person should use a dedicated toilet or commode; commodes must be decontaminated with chlorine after each use",
            "Environmental cleaning must use chlorine-based disinfectant (hypochlorite 1000 ppm for general cleaning; 10000 ppm for spill management)",
            "Antibiotic stewardship is critical — report any concern about unnecessary antibiotic prescribing to the GP/clinician",
            "C.diff is a notifiable condition — the GP must inform Public Health England",
          ],
          warningBox:
            "Alcohol hand rub is INEFFECTIVE against C.diff spores. During a C.diff outbreak — or when caring for a person with suspected or confirmed C.diff — staff MUST wash hands with soap and water at all five moments. Using alcohol hand rub in place of hand washing creates a false sense of protection.",
        },
      ],
    },
    {
      heading: "5. Outbreak Management",
      body: "An outbreak of infectious illness within [ORGANISATION_NAME] requires prompt, coordinated action to contain the spread and protect service users, staff and visitors.",
      subSections: [
        {
          heading: "5.1 Recognising an Outbreak",
          body: "An outbreak should be suspected when:",
          bulletPoints: [
            "Two or more service users or staff have similar symptoms within a 72-hour period",
            "Cases are linked — i.e. they are likely to have a common source or to have acquired infection from each other",
            "Common symptoms include: vomiting, diarrhoea, respiratory symptoms, fever, rash",
          ],
        },
        {
          heading: "5.2 Outbreak Response",
          body: "On recognition of a suspected outbreak, the following actions must be taken immediately:",
          steps: [
            "Inform the Registered Manager immediately — the same shift",
            "Contact the local Health Protection Team (HPT) for advice and guidance",
            "Isolate symptomatic individuals in their rooms where possible",
            "Implement enhanced PPE — gloves and apron for all contact with symptomatic individuals",
            "Implement enhanced hand hygiene — soap and water for all moments of care for symptomatic individuals",
            "Implement enhanced environmental cleaning — increase frequency and use chlorine-based disinfectant",
            "Cease new admissions until the outbreak has been declared over by the HPT",
            "Keep a line list (record of cases, symptoms and dates) and update it daily",
            "Exclude symptomatic staff from work — they must not return until 48 hours after their last symptom",
            "Notify CQC if the outbreak is likely to prevent safe operation of the service",
            "Communicate with families and commissioners as appropriate",
            "Declare the outbreak over in agreement with the HPT — typically 72 hours after the last case",
          ],
          warningBox:
            "Ceasing new admissions during an outbreak is not optional — it is a fundamental outbreak control measure. A decision not to cease admissions in order to maintain occupancy rates is a serious breach of Regulation 12 and places incoming service users at risk. The Registered Manager must not allow financial considerations to override this decision.",
        },
      ],
    },
    {
      heading: "6. Waste Management",
      body: "Healthcare waste must be segregated, stored and disposed of in accordance with the Hazardous Waste Regulations 2005 and the relevant NHS and social care waste management guidance.",
      bulletPoints: [
        "INFECTIOUS WASTE (soiled dressings, continence pads, gloves, aprons) — yellow-striped or tiger-stripe bags; collected by a registered waste contractor",
        "SHARPS — yellow sharps containers; must never be overfilled beyond the fill line; collected by a registered waste contractor",
        "DOMESTIC WASTE — black bags; for non-contaminated waste only",
        "MEDICINES WASTE — pharmacist-supplied waste containers; returned to pharmacy or collected by waste contractor",
        "ANATOMICAL WASTE (e.g. amputated limbs) — requires separate consignment and specialist contractor",
        "COSHH waste (contaminated cleaning materials) — in accordance with product COSHH data sheet",
      ],
      legalBox:
        "Misclassification of healthcare waste — putting infectious waste in a domestic waste bin, or sharps in a clinical waste bag — is a criminal offence under the Environmental Protection Act 1990. All staff must understand the waste segregation system. Waste must be stored securely pending collection.",
    },
    {
      heading: "7. Staff Health",
      body: "Staff health is an IPC matter. Staff who attend work when they are infectious put service users, colleagues and visitors at risk.",
      subSections: [
        {
          heading: "7.1 Exclusion from Work",
          body: "Staff must not attend work and must inform their manager immediately if they have:",
          bulletPoints: [
            "Diarrhoea or vomiting — must not return until 48 hours after symptoms resolve",
            "A confirmed or suspected respiratory infection with fever — seek medical advice; do not attend until symptoms have resolved or medical clearance is obtained",
            "A skin condition involving open sores or weeping lesions",
            "Active tuberculosis — must not return until declared non-infectious by their clinician",
            "Chickenpox or shingles (if in contact with immunocompromised service users)",
          ],
        },
        {
          heading: "7.2 Vaccination",
          body: "Staff are encouraged and supported to keep their vaccinations up to date, including:",
          bulletPoints: [
            "Seasonal influenza vaccine — annual, strongly recommended",
            "COVID-19 — as per current public health guidance",
            "Hepatitis B — offered to staff with a risk of exposure to blood and body fluids",
            "MMR (measles, mumps, rubella) — two doses required if not previously immunised",
          ],
        },
      ],
    },
  ],

  training:
    "All staff must complete IPC training at induction and annually thereafter. Training must cover: the chain of infection; hand hygiene technique (WHO five moments); correct PPE selection, donning and doffing; environmental cleaning standards; waste management; outbreak recognition and reporting; and specific organisms (MRSA, C.diff). At least one IPC Link Practitioner must be trained per team/location.",

  monitoring:
    "Monthly IPC audit using the UKHSA/NHS England IPC audit tool; quarterly review of HCAI incidents and trends; immediate review following any outbreak; annual IPC risk assessment. Results of IPC audits reported to governance meeting monthly.",

  relatedDocuments: [
    "wl-001 — Governance Framework",
    "saf-001 — Safeguarding Adults at Risk Policy",
    "eff-001 — Care Planning Policy",
    "wl-002 — Health and Safety Policy",
  ],

  appendices: [
    {
      title: "Appendix A — Hand Hygiene Technique (WHO Six-Step Method)",
      description: "Illustrated six-step hand hygiene technique poster. Suitable for display at all hand hygiene points.",
    },
    {
      title: "Appendix B — PPE Donning and Doffing Guide",
      description: "Step-by-step illustrated guide to the correct order for donning and doffing PPE, including common errors to avoid.",
    },
    {
      title: "Appendix C — Outbreak Line List Template",
      description: "Template for recording outbreak cases, including: case reference, name, room/location, onset date, symptoms, outcome and notes.",
    },
    {
      title: "Appendix D — Health Protection Team Contact Numbers",
      description: "Regional Health Protection Team contact numbers and out-of-hours arrangements for outbreak notification.",
    },
    {
      title: "Appendix E — Monthly IPC Audit Tool",
      description: "Structured monthly IPC audit tool covering: hand hygiene, PPE stock and use, environmental cleanliness, waste management, staff knowledge, equipment decontamination.",
    },
  ],

  versionHistory: [
    { version: "4.3", date: "June 2026",    amendment: "Post-pandemic PPE guidance reviewed; C.diff section updated to reflect UKHSA 2024 guidance; antibiotic stewardship section strengthened." },
    { version: "4.2", date: "January 2023", amendment: "COVID-19 guidance updated; respiratory infection staff exclusion guidance updated." },
    { version: "4.1", date: "March 2022",   amendment: "Aligned with NHS England National IPC Manual for England (2022); MRSA section updated." },
    { version: "4.0", date: "April 2020",   amendment: "Full rewrite in response to COVID-19 pandemic; PPE guidance substantially expanded; outbreak management section rewritten." },
  ],
};
