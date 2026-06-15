/**
 * NEW PRIORITY POLICIES — Care Operations module
 * cop-001 through cop-006
 * Added June 2026 — Priority Phase 1 expansion
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// COP-001  Consent to Care and Treatment Policy
// ─────────────────────────────────────────────────────────────────────────────
export const COP001_CONTENT: DocumentContent = {
  title: "Consent to Care and Treatment Policy",
  policyId: "COP-001",
  version: "2.5",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All care and treatment decisions involving service users receiving any regulated activity from [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a valid consent policy and procedure is embedded across all care delivery.",
        "Ensure all staff are trained in consent and the Mental Capacity Act 2005 at induction and annually.",
        "Ensure consent documentation is completed accurately and reviewed regularly.",
        "Ensure that where a service user lacks capacity, a lawful best-interests decision process is used.",
      ],
    },
    {
      role: "All Care and Support Staff",
      duties: [
        "Always seek consent before providing any personal care, treatment, or support.",
        "Explain care activities in a way the service user can understand before seeking consent.",
        "Never assume consent — always check afresh, especially if a service user's condition has changed.",
        "Document all consent decisions (and any refusals) in the service user's care record.",
        "Respect and uphold refusals of care from service users with mental capacity.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 11 — Need for Consent",
    "Mental Capacity Act 2005 — framework for making decisions on behalf of those who lack capacity",
    "Mental Capacity Act Code of Practice (2007)",
    "Human Rights Act 1998, Article 8 — right to respect for private and family life",
    "Common law — the right of any competent adult to refuse medical treatment (Re MB [1997]; Re C [1994])",
    "Equality Act 2010 — reasonable adjustments to support decision-making",
  ],
  definitions: [
    { term: "Consent", definition: "A voluntary, informed, and capacitous agreement by a person to receive care or treatment. Consent may be expressed (verbal or written) or implied (through cooperative behaviour), but must always be genuine." },
    { term: "Mental Capacity", definition: "The ability to make a specific decision at a specific point in time. Under the Mental Capacity Act 2005, a person lacks capacity if they cannot understand information relevant to the decision, retain it long enough to decide, use or weigh it, or communicate their decision." },
    { term: "Informed Consent", definition: "Consent given by a person who has been provided with sufficient information about the proposed care or treatment — including the purpose, what it involves, any significant risks, and available alternatives — to make a genuinely informed decision." },
    { term: "Best Interests", definition: "The standard applied when making decisions on behalf of a person who lacks capacity. A best-interests decision must consider all relevant factors, involve the person as much as possible, and consult with those who know the person well." },
    { term: "Advance Decision to Refuse Treatment (ADRT)", definition: "A legally binding written document made by a person with capacity (in advance of losing capacity) setting out their refusal of specific medical treatment if they cannot consent in the future." },
  ],
  sections: [
    {
      title: "The Right to Consent and Refuse",
      body: "Every adult with mental capacity has an absolute right to consent to or refuse any care or treatment — including care or treatment that would save their life. This right is enshrined in common law, the Human Rights Act 1998, and Regulation 11 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014.\n\n[ORGANISATION_NAME] upholds the right of all service users to make their own decisions about their care. We support service users to make decisions by: providing clear information in accessible formats; ensuring decisions are free from pressure or coercion; supporting them to involve family, carers, or advocates; and documenting their decisions and preferences in their care plans.",
      legalBox: "Providing care or treatment to a competent adult without their consent may constitute battery under the common law of trespass to the person. This applies even where the care is clearly in the person's best interests. The only lawful exceptions are emergency situations where the person is unconscious and unable to consent.",
    },
    {
      title: "Obtaining Valid Consent",
      body: "For consent to be valid, three conditions must be met:",
      bulletPoints: [
        "The person has mental capacity to make the specific decision at the relevant time.",
        "Consent is given voluntarily — free from undue pressure, coercion, or manipulation.",
        "The person has been given sufficient information — in a format they can understand — to make an informed decision.",
      ],
      practiceBox: "Consent is not a one-off event — it is an ongoing process. A service user who agreed to a particular care routine last month may not consent to it today if their condition, preferences, or circumstances have changed. Always check; never assume.",
    },
    {
      title: "Assessing Mental Capacity",
      body: "Staff must apply the two-stage test under the Mental Capacity Act 2005 when there is doubt about a person's capacity to make a specific decision:\n\n1. Is there an impairment or disturbance in the functioning of the mind or brain? (e.g. dementia, learning disability, acquired brain injury, significant mental illness, severe intoxication)\n2. Does the impairment or disturbance cause the person to be unable to: understand information relevant to the decision; retain it long enough to make a decision; use or weigh the information; or communicate their decision?\n\nIf both stages are met, the person lacks capacity for that decision at that time. Capacity is decision-specific and time-specific — a person may lack capacity for one decision but retain capacity for others.\n\nAll capacity assessments must be documented in the care record, including: the decision being assessed; the two-stage test; the conclusion; and the names of those involved in the assessment.",
      warningBox: "Never assume that a person lacks capacity because of their diagnosis, age, behaviour, or communication difficulties. The assumption is always that a person has capacity unless assessed to the contrary. An unwise decision does not mean a person lacks capacity.",
    },
    {
      title: "Consent and Personal Care",
      body: "Personal care — including washing, dressing, toileting, and moving and handling — requires consent before each episode of care. Staff must not assume that because a service user consented to personal care yesterday they consent today.\n\nBefore beginning personal care, staff should:\n\n• Explain what they are going to do and why\n• Check the service user is happy to proceed ('Is that OK? Shall we get started?')\n• Watch for non-verbal signals of discomfort, refusal, or distress\n• Stop immediately if the service user indicates they do not want to continue\n• Document any significant consent discussions or refusals\n\nWhere a service user with dementia or another cognitive impairment consistently resists personal care, this must be addressed through a formal best-interests discussion, potentially involving family and health professionals.",
    },
    {
      title: "When a Service User Lacks Capacity",
      body: "Where a service user has been assessed as lacking capacity for a specific decision, [ORGANISATION_NAME] follows the Mental Capacity Act 2005 framework:\n\n1. Can the decision be delayed until capacity is regained? If so, wait.\n2. Is there a valid, applicable Advance Decision to Refuse Treatment? If so, this is legally binding.\n3. Is there a Lasting Power of Attorney (health and welfare) or a court-appointed Deputy? If so, they may have authority to decide.\n4. If none of the above, the decision-maker (usually the care professional responsible for the care) makes a best-interests decision, following the statutory checklist under s.4 MCA 2005.\n\nAll best-interests decisions must be documented, including: who was consulted; what factors were considered; the outcome; and the rationale.",
    },
    {
      title: "Consent Documentation",
      body: "Consent to care is documented in the service user's care plan and/or daily care notes. Written consent is obtained for:\n\n• Photography or video recording of service users (for any purpose)\n• Sharing of information with third parties\n• Participation in research, surveys, or training activities\n• Significant changes to care and treatment\n• Advance care planning decisions\n\nConsent forms are reviewed and refreshed at each care plan review, or sooner if circumstances change.",
    },
  ],
  monitoring: "Quarterly consent documentation audit (sample of 5 active care records). Training compliance for MCA and Consent reviewed monthly. Best-interests decisions reviewed at governance meeting.",
  relatedDocuments: [
    "cop-002 — Deprivation of Liberty Safeguards Policy",
    "eff-001 — Mental Capacity Act Policy",
    "saf-001 — Safeguarding Adults Policy",
    "car-001 — Dignity and Respect Policy",
    "igr-002 — Confidentiality Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COP-002  Deprivation of Liberty Safeguards / Liberty Protection Safeguards Policy
// ─────────────────────────────────────────────────────────────────────────────
export const COP002_CONTENT: DocumentContent = {
  title: "Deprivation of Liberty Safeguards and Liberty Protection Safeguards Policy",
  policyId: "COP-002",
  version: "2.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All service users accommodated in a care home or hospital setting managed by [ORGANISATION_NAME] where restrictions to their freedom may amount to a deprivation of liberty. Also applies where [ORGANISATION_NAME] is the responsible party for supported living arrangements.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Identify all service users who may be subject to, or at risk of, a deprivation of liberty.",
        "Apply for DoLS authorisation from the supervisory body promptly when required.",
        "Maintain an accurate DoLS/LPS Register of all current and pending authorisations.",
        "Ensure all relevant staff are trained in DoLS at induction and annually.",
        "Review restrictions on service users regularly and take action to reduce them where possible.",
        "Respond to conditions attached to DoLS authorisations within the required timescale.",
        "Ensure every service user subject to a deprivation of liberty has access to an IMCA or RPR.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Be alert to situations where restrictions on a service user may amount to a deprivation of liberty.",
        "Report any new or increased restrictions on a service user to the Registered Manager immediately.",
        "Treat all restrictions as a last resort and use the least restrictive option at all times.",
        "Never impose a restriction without it being lawfully authorised.",
      ],
    },
  ],
  legislation: [
    "Mental Capacity Act 2005, ss.4A, 4B, and Schedule A1 — Deprivation of Liberty Safeguards (DoLS)",
    "Mental Capacity (Amendment) Act 2019 — Liberty Protection Safeguards (LPS) (implementation date to be confirmed)",
    "Human Rights Act 1998, Article 5 — right to liberty and security",
    "Cheshire West judgment (P v Cheshire West and Chester Council [2014] UKSC 19) — defining deprivation of liberty as the 'acid test'",
    "CQC Key Lines of Enquiry: Safe — S3 (use of restrictive practices); Effective — E1 (consent and MCA)",
  ],
  definitions: [
    { term: "Deprivation of Liberty", definition: "A situation in which a person who lacks capacity is under continuous supervision and control and is not free to leave the place where they are being cared for ('the acid test' from Cheshire West [2014]). A deprivation of liberty requires lawful authorisation under DoLS (or, when implemented, LPS), a Court of Protection order, or another lawful mechanism." },
    { term: "DoLS (Deprivation of Liberty Safeguards)", definition: "The legal framework introduced by the Mental Capacity Act 2005 to authorise the deprivation of liberty of people in care homes and hospitals who lack capacity to consent to their care and treatment. Administered by local authority supervisory bodies." },
    { term: "LPS (Liberty Protection Safeguards)", definition: "The replacement for DoLS, introduced by the Mental Capacity (Amendment) Act 2019. LPS broadens the range of settings and is intended to be more person-centred. Implementation date is subject to government confirmation." },
    { term: "Acid Test", definition: "The test for deprivation of liberty established by the Supreme Court in Cheshire West: is the person under continuous supervision and control? Are they free to leave? If both apply, there is a deprivation of liberty regardless of the level of care, the reason, or the person's compliance." },
    { term: "RPR (Relevant Person's Representative)", definition: "A person (often a family member) appointed to represent and support the service user throughout the DoLS process, including by requesting a review or challenge." },
    { term: "IMCA (Independent Mental Capacity Advocate)", definition: "An independent advocate appointed to represent service users who have no appropriate family or friend to consult in significant decisions, including DoLS applications." },
    { term: "Best Interests Assessor (BIA)", definition: "A trained professional (social worker, nurse, OT, or psychologist) who completes the best interests assessment as part of the DoLS authorisation process." },
  ],
  sections: [
    {
      title: "The Acid Test — Are We Depriving This Person of Their Liberty?",
      body: "Following the Supreme Court ruling in Cheshire West (2014), any situation where a service user who lacks mental capacity is under continuous supervision and control AND is not free to leave amounts to a deprivation of liberty, regardless of:\n\n• Whether the person is compliant or appears content\n• Whether the person's family agrees with the arrangements\n• Whether the restrictions are considered to be in the person's best interests\n• Whether the care setting is a care home, supported living, or any other setting\n\n[ORGANISATION_NAME] applies the acid test to every service user who lacks capacity for the relevant decision. Where the acid test is met, a DoLS application is made immediately.",
      warningBox: "A deprivation of liberty that is not lawfully authorised — however good the intentions — is a breach of the service user's rights under Article 5 of the Human Rights Act 1998 and constitutes false imprisonment. CQC treats unlawful deprivation of liberty as a fundamental standards breach and may prosecute the provider.",
    },
    {
      title: "Identifying Service Users Who May Be Deprived of Their Liberty",
      body: "The Registered Manager maintains a DoLS/LPS Register that lists all current service users and whether they are subject to an authorisation, being assessed, or where no deprivation of liberty has been identified.\n\nNew admissions are assessed within 7 days of admission. The following factors trigger consideration of a DoLS application:\n\n• The service user has a diagnosis of dementia, learning disability, brain injury, or other impairment that may affect their capacity\n• The service user is subject to locked doors, access restrictions, or constant supervision\n• The service user is prevented from leaving the premises when they wish\n• The service user is given medication (including sedation) that restricts their freedom of movement\n• The service user is restricted in their contact with others\n\nWhere staff are unsure, they must discuss with the Registered Manager.",
    },
    {
      title: "Making a DoLS Application",
      body: "When a deprivation of liberty has been identified (or is anticipated), the Registered Manager makes a Standard or Urgent DoLS application to the supervisory body (the local authority where the service is located).",
      procedure: [
        "Step 1: Complete a Standard DoLS Application form and submit to the local authority supervisory body. The application must include: the service user's details; the nature of the deprivation of liberty; the relevant care and treatment; the person's diagnosis and capacity assessment.",
        "Step 2: If the deprivation of liberty is already occurring and there is an immediate need for authorisation, apply for an Urgent Authorisation simultaneously. An Urgent Authorisation may be granted by the managing authority (the care home) itself for up to 7 days pending the Standard Authorisation.",
        "Step 3: Inform the service user (in a way they can understand), their RPR or family, and (where there is no appropriate person) an IMCA of the application.",
        "Step 4: Cooperate fully with the assessors (BIA and Mental Health Assessor) appointed by the supervisory body.",
        "Step 5: If authorisation is granted, implement any conditions attached to the authorisation immediately. Record the authorisation details in the DoLS Register and the service user's care plan.",
        "Step 6: Review the arrangements regularly. Apply for a review or renewal before the authorisation expires.",
      ],
    },
    {
      title: "Least Restrictive Practice",
      body: "The Mental Capacity Act 2005 requires that any decision or action taken on behalf of a person who lacks capacity must be the least restrictive option available, and must represent the maximum degree of liberty consistent with the person's safety and the safety of others.\n\n[ORGANISATION_NAME] regularly reviews all restrictions on service users with a view to reducing them. Restrictions are reviewed at least monthly at the individual's care plan review and whenever circumstances change. Any reduction in restrictions must be documented and tested before the DoLS application is amended.\n\nPositive risk-taking — accepting some degree of risk in order to support a person's freedom and wellbeing — is an important principle. Not every risk justifies a restriction.",
      practiceBox: "Ask yourself: is this restriction necessary? Is it proportionate? Could we achieve the same safety outcome with a less restrictive approach? A locked door may feel safe, but if it stops a person with dementia from accessing the garden they love, it restricts their wellbeing. Could a sensor, a wander-guard, or supervised access achieve the same safety with more freedom?",
    },
    {
      title: "DoLS Register and Reporting",
      body: "The Registered Manager maintains a live DoLS/LPS Register recording for each service user: current status (authorised / pending / not required); authorisation reference and expiry date; any conditions; RPR details; review date.\n\nThe DoLS Register is reviewed monthly at the governance meeting. CQC is notified of DoLS-related events as required by the CQC Notifications Policy (GOV-005). Unauthorised deprivations of liberty are reported as serious incidents.",
    },
  ],
  monitoring: "DoLS Register reviewed monthly. Authorisations renewed before expiry. Quarterly training compliance check for MCA/DoLS. CQC notifications tracked.",
  relatedDocuments: [
    "cop-001 — Consent Policy",
    "eff-001 — Mental Capacity Act Policy",
    "saf-001 — Safeguarding Adults Policy",
    "gov-005 — CQC Notifications Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COP-003  Service User Guide
// ─────────────────────────────────────────────────────────────────────────────
export const COP003_CONTENT: DocumentContent = {
  title: "Service User Guide — Policy and Procedure",
  policyId: "COP-003",
  version: "1.8",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "Applies to the production, review, and distribution of Service User Guides for all [ORGANISATION_NAME] services. Also provides the content framework for the Service User Guide document itself.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a current, accurate, and accessible Service User Guide is available for each registered service.",
        "Review and update the guide at least annually and whenever there is a significant change to the service.",
        "Ensure the guide is provided to every new service user (or their representative) at or before the start of their care.",
        "Ensure the guide is available in alternative formats (large print, Easy Read, other languages) on request.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Schedule 3 — Statement of Purpose (which informs the Service User Guide)",
    "Regulation 9 — Person-Centred Care (service users must be informed about their care and treatment)",
    "Equality Act 2010 — accessible information in alternative formats",
    "Health and Social Care (Safety and Quality) Act 2015 — Accessible Information Standard",
  ],
  sections: [
    {
      title: "Purpose of the Service User Guide",
      body: "The Service User Guide is a key document that tells service users, their families, and their representatives who we are, what we offer, what to expect from us, and how to raise concerns or complaints. It is an essential registration document, a quality assurance tool, and a fundamental component of person-centred care.\n\nCQC inspectors routinely check for the existence of a Service User Guide and ask service users whether they have received and understood it. The guide should be written in plain English, at a reading level accessible to the majority of service users.",
    },
    {
      title: "Contents of the Service User Guide",
      body: "The Service User Guide for [ORGANISATION_NAME] includes the following sections:",
      bulletPoints: [
        "Welcome from the Registered Manager — a personal introduction to the service and its values.",
        "About the service — what we provide, where we are located, and who we care for.",
        "Our team — the names and roles of key staff, including the Registered Manager.",
        "Your care and support — how care plans are developed, what to expect on a daily basis, and how preferences are respected.",
        "Your rights — your rights to dignity, respect, privacy, consent, independence, and freedom from abuse.",
        "How we keep you safe — our approach to safeguarding, medication management, and infection control.",
        "Staying connected — visitors, communication, activities, and staying in touch with family and friends.",
        "What to do if things go wrong — how to raise a concern or make a complaint, and the complaints procedure.",
        "Advocacy — your right to an independent advocate and how to access one.",
        "CQC — our most recent CQC inspection rating and how to contact CQC directly.",
        "Privacy and your information — how we use your personal information and your data rights.",
        "Fees and charges — a clear explanation of what is included and any additional costs (residential services).",
        "Contact information — key telephone numbers, addresses, email addresses, and emergency contacts.",
        "Useful contacts — local advocacy services, Citizens Advice, NHS helplines, and regulatory bodies.",
      ],
      practiceBox: "Write the Service User Guide as if you are speaking to the service user directly. Use 'we' and 'you'. Avoid jargon, acronyms, and complex language. Have it proof-read by a service user or family member before finalising.",
    },
    {
      title: "Distribution and Accessibility",
      body: "The Service User Guide is:\n\n• Provided in printed form to all new service users (or their family/representative) before or at the time of admission\n• Available in the main entrance or reception area for visitors\n• Available in digital format on request\n• Available in alternative formats (large print, audio, Easy Read, other languages) within 7 working days of request\n\nAll requests for alternative formats are recorded and responded to promptly in line with the Accessible Information Standard.",
    },
    {
      title: "Review and Update",
      body: "The Service User Guide is reviewed at least annually, or immediately when:\n\n• The service model, registered activities, or staffing structure changes significantly\n• CQC publishes a new inspection rating\n• Fees or charges change\n• Key contacts change\n• Legislation or regulatory guidance relevant to the guide's content changes\n\nChanges to the guide are approved by the Registered Manager. Updated guides are distributed to all current service users and their representatives when significant changes are made.",
    },
  ],
  monitoring: "Annual review of Service User Guide. Evidence of distribution to new service users maintained in their admission pack. Accessibility requests recorded and responded to.",
  relatedDocuments: [
    "gov-006 — Statement of Purpose Policy",
    "res-001 — Complaints Handling Policy",
    "cop-001 — Consent Policy",
    "car-001 — Dignity and Respect Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COP-004  No Reply / Missed Call Policy
// ─────────────────────────────────────────────────────────────────────────────
export const COP004_CONTENT: DocumentContent = {
  title: "No Reply and Missed Call Policy",
  policyId: "COP-004",
  version: "2.0",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All domiciliary care, community care, and supported living services provided by [ORGANISATION_NAME] where care workers visit service users in their own homes or community settings.",
  responsibilities: [
    {
      role: "Registered Manager / On-Call Manager",
      duties: [
        "Ensure the No Reply / Missed Call Procedure is understood and followed by all staff at all times.",
        "Ensure an on-call system is in place 24/7 so that no reply situations are always escalated to a responsible person.",
        "Review all no reply and missed call incidents in the incident log.",
        "Conduct a welfare check via alternative means whenever a care worker cannot gain access to a service user.",
      ],
    },
    {
      role: "Care Workers",
      duties: [
        "Follow the No Reply Procedure every time they arrive at a service user's home and cannot gain entry or get a response.",
        "Never leave a service user's home without completing the procedure and documenting the outcome.",
        "Contact their coordinator or on-call manager immediately when a no reply situation arises.",
        "Log every missed call in the electronic call monitoring system.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe Care and Treatment",
    "Care Act 2014 — duty of care and safeguarding",
    "Health and Safety at Work Act 1974 — duty of care to staff in lone working situations",
    "Common law duty of care — failure to check on a service user who is at risk may constitute negligence",
  ],
  definitions: [
    { term: "No Reply", definition: "A situation where a care worker arrives at a service user's home at the scheduled time and receives no answer at the door and is unable to gain entry." },
    { term: "Missed Call", definition: "A care visit that was scheduled but did not take place — either because the care worker could not gain entry (no reply) or because the visit was cancelled, skipped, or curtailed." },
    { term: "Electronic Call Monitoring (ECM)", definition: "A system that records the arrival and departure times of care workers at service users' homes, typically via telephone landline, GPS, or mobile app, providing a real-time record of call completion." },
  ],
  sections: [
    {
      title: "Why This Policy Matters",
      body: "A no reply situation in domiciliary care can be a life-or-death emergency. Service users who do not answer the door may have fallen, become seriously unwell, lost consciousness, or died. Equally, they may have simply gone out, be in the bathroom, or be visiting a family member. The care worker cannot know which — and must act as if the worst is possible.\n\nThe No Reply Procedure exists to ensure that every no reply situation is handled consistently, promptly, and safely, with appropriate escalation so that the service user's welfare is confirmed as quickly as possible.",
      warningBox: "A care worker who leaves a no reply without completing the procedure, contacting their coordinator, or documenting the incident is placing a vulnerable person at serious risk. This constitutes a breach of the duty of care and may be treated as serious misconduct. It may also result in safeguarding referral and CQC notification.",
    },
    {
      title: "No Reply Procedure — Step by Step",
      body: "When a care worker arrives at a scheduled call and receives no reply, they must follow this procedure:",
      procedure: [
        "Step 1 — Try all access points: Knock loudly, ring the bell (if fitted), wait 2 minutes. Try to look through letterbox, side gate, or window (from public access only) for signs of the service user. Call the service user's telephone number.",
        "Step 2 — Contact coordinator immediately: The care worker phones the care coordinator or on-call manager. They must not proceed to the next call or leave the premises without coordinator authorisation.",
        "Step 3 — Try emergency contacts: The coordinator or care worker calls the service user's nominated emergency contacts (family members, next of kin) to check if the service user is with them or has let someone know of their plans.",
        "Step 4 — Try the keysafe or nominated keyholder: If the service user has a keysafe or has nominated a keyholder, use the key to gain access. If no key is available, move to Step 5.",
        "Step 5 — Consider police welfare check: If emergency contacts cannot account for the service user and there is concern for their welfare — particularly if the service user is frail, has a medical condition, or has not cancelled — the coordinator or Registered Manager authorises a request to the police for a welfare check (via 999 for immediate concern, 101 for non-immediate).",
        "Step 6 — Notify the Registered Manager: All no reply situations are notified to the Registered Manager that same day (or the next working day for out-of-hours where the welfare check outcome was satisfactory).",
        "Step 7 — Document: The care worker logs the no reply in the electronic call monitoring system immediately, including arrival time, all actions taken, and the outcome. The coordinator completes an incident report.",
        "Step 8 — Review: The Registered Manager reviews all no reply incidents in the weekly incident review. If a service user has multiple no replies in a short period, a safeguarding assessment is initiated.",
      ],
    },
    {
      title: "Preventing Missed Calls",
      body: "Care workers must use the electronic call monitoring system to log every arrival and departure. Calls are monitored in real time by the coordinator. Any call not logged as started within 15 minutes of the scheduled time triggers an alert.\n\nService users must notify [ORGANISATION_NAME] at least 24 hours in advance (wherever possible) if they wish to cancel or rearrange a call. Walk-out cancellations (where the care worker arrives and is told on the doorstep the call is not needed) are recorded and, where they occur repeatedly, a care plan review is initiated.",
    },
  ],
  monitoring: "No reply and missed call incidents reviewed weekly. Monthly report to Registered Manager on trends. Repeated no replies for same service user trigger a care plan and risk assessment review.",
  relatedDocuments: [
    "saf-001 — Safeguarding Adults Policy",
    "saf-007 — Lone Working Policy",
    "gov-005 — CQC Notifications Policy",
    "cop-005 — Delegated Healthcare Tasks Policy",
    "gov-007 — Business Continuity Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COP-005  Delegated Healthcare Tasks / Clinical Tasks Policy
// ─────────────────────────────────────────────────────────────────────────────
export const COP005_CONTENT: DocumentContent = {
  title: "Delegated Healthcare Tasks and Clinical Procedures Policy",
  policyId: "COP-005",
  version: "1.9",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All care staff undertaking delegated healthcare tasks under the supervision or delegation of a registered healthcare professional. Applies to all [ORGANISATION_NAME] service settings.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure a register of delegated healthcare tasks is maintained for each service user.",
        "Ensure care staff only undertake tasks for which they have been trained, assessed, and formally delegated by a registered healthcare professional.",
        "Ensure all delegations are documented and reviewed at least annually.",
        "Identify and report any situation where a care worker is asked to perform a task without appropriate delegation, training, or assessment.",
      ],
    },
    {
      role: "Care Staff",
      duties: [
        "Only undertake a healthcare task if it has been specifically delegated to them in writing by a registered professional.",
        "Only undertake a task for which they have been trained and competency assessed.",
        "Refuse to perform any task for which they have not been trained or delegated, and report the situation to their line manager.",
        "Report any change in a service user's condition that affects their ability to safely receive a delegated task.",
      ],
    },
    {
      role: "Delegating Registered Professional (GP, District Nurse, etc.)",
      duties: [
        "Only delegate tasks that are appropriate to the recipient's role and competence.",
        "Ensure that training and competency assessment has been completed before delegation.",
        "Document the delegation clearly, specifying: the task; the service user; the care worker; the duration; the circumstances under which the delegation applies; and what to do if the situation changes.",
        "Remain accountable for the decision to delegate and the appropriateness of that delegation.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 18 — Staffing (competence)",
    "NMC guidance: Delegation and accountability (2019)",
    "NHS England: Responsibility and accountability in health and care (2022)",
    "NICE guidance: Managing medicines in care homes (SC1, 2014)",
    "Mental Capacity Act 2005 — consent for clinical tasks",
  ],
  definitions: [
    { term: "Delegation", definition: "The formal transfer of responsibility for carrying out a specific task from a registered professional (the delegator) to a less qualified person (the delegatee), while the registered professional retains professional accountability for the decision to delegate." },
    { term: "Competency Assessment", definition: "A formal assessment — conducted by a registered professional or approved assessor — confirming that an individual has the knowledge, skills, and ability to safely perform a specific task." },
    { term: "Delegatable Task", definition: "A healthcare task that a registered professional has determined, for a specific service user, can safely be performed by a trained and competency-assessed care worker with appropriate supervision and monitoring in place." },
  ],
  sections: [
    {
      title: "Principle of Delegation",
      body: "Delegation is not about task-shifting to save money or fill staffing gaps — it is about ensuring that the specific, individual needs of service users can be met in a way that is safe, lawful, and in the service user's best interests. A registered healthcare professional (GP, district nurse, community nurse, etc.) may delegate a clinical task to a care worker where:\n\n1. The task is clinically appropriate to delegate for this service user\n2. The care worker has been properly trained in the task\n3. The care worker has been competency-assessed and found competent\n4. There is a clear, written care plan and delegation record\n5. There is an accessible pathway for the care worker to seek help if the situation changes\n6. The registered professional is contactable for advice and review",
      warningBox: "A care worker who carries out a clinical task without formal delegation and competency sign-off is acting outside their role and may be causing harm to the service user, exposing themselves to criminal liability, and placing the organisation in breach of Regulation 18. When in doubt: do not do it. Contact the Registered Manager.",
    },
    {
      title: "Tasks That May Be Delegated to Care Workers (with appropriate training and delegation)',",
      body: "The following tasks may be delegated to trained and competency-assessed care staff. This list is not exhaustive — the appropriateness of delegation for each task must be determined by the delegating registered professional for the specific service user:",
      bulletPoints: [
        "Administration of prescribed oral medications (solid and liquid forms)",
        "Application of topical medications (creams, patches) — specific to named medication and service user",
        "Administration of insulin — only where the care worker has completed an approved insulin administration training programme and specific written delegation is in place",
        "Catheter care — emptying, measuring, and recording catheter drainage; changing leg bags",
        "Stoma care — emptying and changing stoma appliances (where trained and delegated)",
        "PEG/Enteral feeding — operating a PEG feed and flushing the tube (where trained and delegated by a community nurse or dietitian)",
        "Blood glucose monitoring — using an approved glucometer for named service users (where trained and delegated)",
        "Administration of oxygen therapy — only where written delegation is in place and the care worker has completed oxygen therapy training",
        "Application of compression hosiery",
        "Wound dressing changes — simple non-infected dressings using prescribed dressing materials",
        "Ear drops, eye drops — prescribed, for specific named service users",
        "Use of nebuliser — where prescribed and care worker has been trained",
        "Manual evacuation of bowel — only where clinically prescribed, specifically delegated, and care worker is competency assessed",
        "Taking and recording vital signs (pulse, blood pressure, oxygen saturation, temperature, respiration rate, blood glucose)",
      ],
    },
    {
      title: "Training and Competency Assessment",
      body: "Before any care worker can undertake a delegated healthcare task, they must:\n\n1. Complete approved training specific to the task (from an accredited provider or the delegating registered professional)\n2. Demonstrate competence in the task through a formal competency assessment conducted by a registered professional\n3. Receive a written delegation from the registered professional specifying the task, the service user, the care worker, and the duration of the delegation\n\nTraining and competency are task-specific and service-user-specific. A care worker who has been assessed as competent to administer insulin for one service user is not thereby competent or delegated to do so for another without a separate assessment and delegation.",
    },
    {
      title: "What to Do If Something Goes Wrong",
      body: "If a care worker encounters any of the following during a delegated healthcare task, they must stop, call for help, and NOT continue:\n\n• The service user refuses or withdraws consent\n• The service user's condition appears to have changed significantly since the delegation was set up\n• The care worker is uncertain how to carry out the task safely\n• There is a change in the service user's medication, equipment, or care needs\n• An error occurs (e.g. wrong dose, missed administration, equipment malfunction)\n\nErrors or near-misses involving delegated healthcare tasks are reported as incidents and notified to the delegating registered professional immediately. Where harm has occurred, the Duty of Candour procedure is activated.",
    },
  ],
  monitoring: "Delegated tasks register reviewed quarterly. Training and competency records maintained for all staff undertaking delegated tasks. Incidents involving delegated tasks reviewed at governance meeting.",
  relatedDocuments: [
    "saf-003 — Medication Management Policy",
    "saf-004 — Medication Administration Procedure",
    "cop-001 — Consent Policy",
    "hr-002 — Mandatory Training Policy",
    "gov-001 — Duty of Candour Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COP-006  Choking Risk Management Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const COP006_CONTENT: DocumentContent = {
  title: "Choking Risk Management Procedure",
  policyId: "COP-006",
  version: "2.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All service users and all care settings managed by [ORGANISATION_NAME]. This procedure works alongside the Dysphagia and Swallowing Difficulties Policy (EFF-008) and applies to all mealtimes, snack times, and any occasions when food or drink is offered.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all staff are trained in choking risk recognition and the emergency Heimlich manoeuvre / back-blow technique at induction and annually.",
        "Ensure every service user has a documented choking risk assessment in their care plan.",
        "Ensure safe food textures and drink consistencies are implemented for service users identified at risk.",
        "Ensure a defibrillator and first aid resources are accessible at all times.",
        "Review all choking incidents and near-misses within 24 hours.",
      ],
    },
    {
      role: "All Care Staff",
      duties: [
        "Supervise all mealtimes for service users identified as at risk of choking.",
        "Follow the food texture and drink consistency requirements in each service user's care plan.",
        "Never leave a service user who is at risk of choking alone while eating or drinking.",
        "Respond immediately and correctly to any choking emergency.",
        "Report all choking incidents and near-misses to the Registered Manager immediately.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe Care and Treatment",
    "NICE Quality Standard QS24 — Nutrition support in adults",
    "RCSLT / IDDSI guidelines on food texture modification",
    "Royal College of Physicians — National review of avoidable deaths from choking (2022)",
    "Mencap: Death by Indifference and 74 Deaths reports — choking identified as avoidable cause of death in people with learning disabilities",
  ],
  definitions: [
    { term: "Dysphagia", definition: "Difficulty in swallowing, which increases the risk of choking, aspiration, and aspiration pneumonia. May be caused by stroke, dementia, Parkinson's disease, learning disability, or other conditions." },
    { term: "IDDSI (International Dysphagia Diet Standardisation Initiative)", definition: "An internationally agreed framework for standardised food texture and liquid thickness levels for people with dysphagia (Levels 0–7)." },
    { term: "Aspiration", definition: "The inhalation of food, liquid, or secretions into the airway below the vocal cords. Aspiration may result in aspiration pneumonia, which is a leading cause of death in people with dysphagia." },
    { term: "Complete Airway Obstruction", definition: "A life-threatening emergency where the airway is entirely blocked by food or another foreign body, preventing the person from breathing, speaking, or coughing effectively." },
    { term: "Heimlich Manoeuvre", definition: "An emergency abdominal thrust technique used to dislodge a foreign body from the airway of a conscious adult or child over 1 year of age." },
  ],
  sections: [
    {
      title: "Why Choking Is a Preventable Death Risk",
      body: "Choking is one of the most preventable causes of death in care settings. Multiple national reports — including the NHS England National Patient Safety Agency data, and Mencap's reports on avoidable deaths of people with learning disabilities — identify choking as a recurring, avoidable tragedy in care homes, supported living, and domiciliary care.\n\nService users at heightened risk include those with dementia, learning disability, Parkinson's disease, stroke, acquired brain injury, and those taking medications that affect swallowing (such as antipsychotics and some antidepressants).\n\n[ORGANISATION_NAME] is committed to ensuring that every service user who is at risk of choking has a clear, personalised, implemented plan to protect them — and that every member of staff is trained to respond effectively to a choking emergency.",
      warningBox: "A choking death is almost always investigated by the coroner. Inspectors and coroners look for: a choking risk assessment in the care plan; evidence of the correct food texture and drink consistency being implemented; evidence that staff were trained in choking response; and documentation of who was present at mealtimes. The absence of any of these is indefensible.",
    },
    {
      title: "Choking Risk Assessment",
      body: "Every new service user receives a choking risk assessment within 72 hours of admission, completed by a senior care worker or the Registered Manager. The assessment is reviewed:\n\n• At every care plan review\n• Whenever the service user's swallowing ability changes\n• After any choking incident\n• Following a hospital admission, new diagnosis, or medication change affecting swallowing\n\nThe risk assessment identifies:\n1. Whether the service user has a history of choking or dysphagia\n2. Any diagnoses that increase choking risk\n3. Whether a Speech and Language Therapist (SaLT) assessment has been carried out\n4. The required food texture level (IDDSI levels 0–7)\n5. The required fluid consistency (IDDSI levels 0–4)\n6. Any specific foods or drinks to avoid\n7. The level of supervision required at mealtimes\n8. Whether the service user can self-report difficulties",
    },
    {
      title: "IDDSI Food Texture and Drink Consistency Framework",
      body: "All food and fluid modifications must follow the IDDSI framework:\n\n• Drinks: Level 0 (Thin) / Level 1 (Slightly Thick) / Level 2 (Mildly Thick) / Level 3 (Moderately Thick) / Level 4 (Extremely Thick)\n• Foods: Level 3 (Liquidised) / Level 4 (Puréed) / Level 5 (Minced and Moist) / Level 6 (Soft and Bite-Sized) / Level 7 (Regular — with or without easy-to-chew adaptations)\n\nThe required level is prescribed by the Speech and Language Therapist (where one is involved) or identified in the choking risk assessment. Kitchen staff and care workers must be trained in IDDSI preparation and testing methods. The flow test, fork drizzle test, and spoon tilt test are used to verify correct texture and consistency.",
      practiceBox: "IDDSI is an international standard — use it consistently. A texture or consistency described differently by different staff creates a safety risk. Use the IDDSI labels and levels on all menus, care plans, and food preparation instructions without exception.",
    },
    {
      title: "Mealtime Safety Supervision",
      body: "The level of supervision at mealtimes is specified in each service user's care plan based on their choking risk level:\n\n• High risk: 1:1 support throughout every meal; care worker remains within arm's reach\n• Moderate risk: Oversight from a staff member present in the room throughout the meal\n• Lower risk / monitored: Regular visual checks; available support if needed\n\nDuring supervised mealtimes, staff must watch for the following warning signs:\n\n• Coughing frequently during eating or drinking\n• Watery eyes or red face during eating\n• Wet or 'gurgly' voice quality after eating\n• Food residue remaining in the mouth (pocketing)\n• Refusing food or drink without clear reason\n• Distress, reaching for throat, or inability to speak",
    },
    {
      title: "Emergency Response to Choking",
      body: "All staff must be trained in the following response to a conscious adult who is choking. This procedure is based on Resuscitation Council UK guidance (2021):",
      procedure: [
        "Step 1 — Assess: Ask 'Are you choking?' If the person can speak, cough, or breathe, encourage them to keep coughing. Do not intervene further but stay with them. Call for help.",
        "Step 2 — Back blows (if unable to cough effectively): Lean the person forward. Give up to 5 sharp back blows between the shoulder blades with the heel of your hand. Check after each blow whether the obstruction has cleared.",
        "Step 3 — Abdominal thrusts (Heimlich manoeuvre): If 5 back blows have not cleared the obstruction, give up to 5 abdominal thrusts. Stand behind the person; place one fist (thumb side in) just above the navel and below the breastbone; grasp the fist with the other hand; pull sharply inward and upward.",
        "Step 4 — Alternate: Alternate 5 back blows and 5 abdominal thrusts until the obstruction clears or the person loses consciousness.",
        "Step 5 — Call 999: If the obstruction does not clear after the first cycle of back blows and abdominal thrusts, call 999 immediately. Continue the procedure while waiting for the ambulance.",
        "Step 6 — If the person loses consciousness: Begin CPR immediately. Call 999 if not already called. Do not perform abdominal thrusts on an unconscious person. Check the mouth before each rescue breath and remove any visible obstruction.",
        "Step 7 — After the incident: Any person who has received abdominal thrusts must be reviewed by a doctor or paramedic before being given further food or drink. A choking incident report must be completed immediately.",
      ],
      warningBox: "NEVER perform a blind finger sweep. NEVER perform abdominal thrusts on an unconscious person, a pregnant person, or a child under 1 year. For pregnant service users, use chest thrusts (same position as CPR chest compressions) instead of abdominal thrusts.",
    },
    {
      title: "Post-Incident Review",
      body: "Every choking incident — whether the obstruction cleared spontaneously, required intervention, or required emergency services — must be:\n\n• Reported to the Registered Manager immediately\n• Documented as an incident in the electronic care system within 2 hours\n• Reviewed by the Registered Manager within 24 hours\n• Reported to the SaLT if one is involved in the service user's care\n• Subject to a care plan review and updated risk assessment within 48 hours\n• Notified to CQC if it meets the threshold for a notifiable safety incident\n• Subject to the Duty of Candour procedure if moderate or severe harm resulted\n\nAny near-miss (where a service user showed signs of difficulty but the situation resolved without an emergency response) is treated in the same way.",
    },
  ],
  monitoring: "Monthly review of all choking-related incidents and near-misses. Annual audit of choking risk assessments against the active service user list. Training compliance reviewed quarterly.",
  relatedDocuments: [
    "eff-008 — Dysphagia and Swallowing Difficulties Policy",
    "eff-003 — Nutrition and Hydration Policy",
    "gov-001 — Duty of Candour Policy",
    "gov-005 — CQC Notifications Policy",
    "hr-002 — Mandatory Training Policy",
  ],
};
