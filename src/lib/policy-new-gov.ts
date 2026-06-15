/**
 * NEW PRIORITY POLICIES — Governance & Quality module
 * gov-001 through gov-007
 * Added June 2026 — Priority Phase 1 expansion
 */
import type { DocumentContent } from "./documents";

// ─────────────────────────────────────────────────────────────────────────────
// GOV-001  Duty of Candour Policy and Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const GOV001_CONTENT: DocumentContent = {
  title: "Duty of Candour Policy and Procedure",
  policyId: "GOV-001",
  version: "2.1",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager / Director of Quality",
  scope: "All staff, managers, and directors employed by or contracted to [ORGANISATION_NAME], across all registered regulated activities.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure all notifiable safety incidents are identified and the duty of candour procedure is activated within required timescales.",
        "Oversee all written notifications and acknowledgements to service users or their representatives.",
        "Maintain an accurate Duty of Candour Register and report at each governance meeting.",
        "Ensure staff are trained on the duty of candour at induction and annually thereafter.",
        "Report to CQC as required under the notification regulations.",
      ],
    },
    {
      role: "All Clinical and Care Staff",
      duties: [
        "Report all incidents, near-misses, errors, and unexpected outcomes immediately using the incident reporting procedure.",
        "Avoid making misleading statements or withholding information from service users or families.",
        "Support line managers and the Registered Manager in carrying out the duty of candour where directed.",
        "Cooperate with any investigation, review, or root cause analysis arising from an incident.",
      ],
    },
    {
      role: "Directors / Senior Leaders",
      duties: [
        "Create and sustain an open, honest, and learning culture across the organisation.",
        "Ensure adequate resources, time, and support are available to carry out the duty of candour properly.",
        "Review the Duty of Candour Register at board level at least quarterly.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour (mandatory for all registered providers from April 2015)",
    "Care Quality Commission (Registration) Regulations 2009 — notification requirements",
    "Francis Report (2013) and subsequent DHSC guidance on openness and transparency",
    "Professional duty of candour: General Medical Council / Nursing and Midwifery Council standards (for regulated professionals)",
    "Human Rights Act 1998 — right to life (Article 2) and right to fair trial (Article 6)",
  ],
  definitions: [
    { term: "Notifiable Safety Incident", definition: "Under Regulation 20, a notifiable safety incident is any unintended or unexpected incident that occurred in respect of a service user during the provision of a regulated activity AND has resulted in, or could result in, death, severe harm, moderate harm, or prolonged psychological harm." },
    { term: "Duty of Candour", definition: "The statutory and professional requirement on registered providers and registered professionals to be open and transparent with service users when things go wrong, including offering an apology, an explanation, and information about actions being taken to prevent recurrence." },
    { term: "Moderate Harm", definition: "Harm which requires a moderate increase in treatment, causes significant but not permanent harm, or results in an extended period of recovery." },
    { term: "Severe Harm", definition: "A permanent lessening of bodily, sensory, motor, physiological, or intellectual functions, including a permanent change to an existing condition, as a direct result of the incident." },
    { term: "Prolonged Psychological Harm", definition: "Psychological harm that a service user has experienced, or is likely to experience, for a continuous period of at least 28 days." },
  ],
  sections: [
    {
      title: "Purpose and Statutory Duty",
      body: "[ORGANISATION_NAME] recognises that when things go wrong in the delivery of care and treatment, service users and their families have a right to know. This is not just an ethical obligation — it is a statutory requirement under Regulation 20 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014.\n\nThis policy sets out how [ORGANISATION_NAME] will meet both the statutory duty of candour and the professional duty of candour that applies to registered professionals. It reflects the values of openness, transparency, and honesty that are fundamental to our culture.",
      legalBox: "Regulation 20 applies to all CQC-registered providers. Failure to comply with the duty of candour is a breach of a fundamental standard and CQC may take enforcement action, including prosecution. The CQC has made duty of candour compliance a standing inspection focus under the Well-Led key question.",
    },
    {
      title: "Identifying a Notifiable Safety Incident",
      body: "Not every incident triggers the statutory duty of candour — only 'notifiable safety incidents' as defined above. All incidents must first be reported via the incident reporting procedure. The Registered Manager or designated deputy will then assess each incident within 24 hours to determine whether it meets the threshold for a notifiable safety incident.",
      procedure: [
        "Step 1: Any member of staff who witnesses or becomes aware of an incident immediately completes an incident report form in the electronic care system.",
        "Step 2: The shift manager or on-call manager reviews the incident on the same day and alerts the Registered Manager if the incident may constitute moderate or severe harm.",
        "Step 3: The Registered Manager reviews the incident within 24 hours and makes a formal determination as to whether it is a notifiable safety incident using the harm threshold definitions in this policy.",
        "Step 4: All incidents assessed as 'possible notifiable safety incident' are recorded in the Duty of Candour Register regardless of the final determination.",
        "Step 5: Where the incident is confirmed as a notifiable safety incident, the duty of candour procedure is activated immediately.",
      ],
      practiceBox: "When in doubt, treat the incident as notifiable. It is far better to apply the duty of candour procedure unnecessarily than to fail to do so when required. The test is whether the harm could be notifiable — not whether you are certain it is.",
    },
    {
      title: "Carrying Out the Duty of Candour",
      body: "Once a notifiable safety incident has been confirmed, [ORGANISATION_NAME] must fulfil all of the following duties under Regulation 20:",
      procedure: [
        "Step 1 — Notification (verbal/written, as soon as reasonably practicable): Make contact with the service user or their representative in person, by telephone, or in the absence of these, by letter. This notification must happen as soon as reasonably practicable after the incident has been identified. The Registered Manager or a suitably senior person should carry out this notification.",
        "Step 2 — Apologise: Offer a sincere and meaningful apology. An apology is not an admission of legal liability but is an expression of genuine regret. Saying 'I am sorry this happened' satisfies the requirement.",
        "Step 3 — Explain: Provide, to the best of your knowledge at that time, an account of what happened, what inquiries are planned, and what actions have been or are being taken to prevent recurrence.",
        "Step 4 — Written notification: Following the verbal notification, send a written summary within 10 working days. This must include the same information as the verbal notification, reiterate the apology, and explain next steps.",
        "Step 5 — Support: Offer the service user or their representative access to appropriate support, including signposting to independent advocacy services where relevant.",
        "Step 6 — Outcome notification: Once any investigation or review has concluded, share the findings with the service user or representative and confirm what action has been taken.",
      ],
      warningBox: "Under Regulation 20(5), organisations must NOT offer 'incentives' to service users or relatives to prevent them from making a complaint or seeking legal advice. This includes informal pressures not to escalate. Any such conduct will be treated as a serious disciplinary matter.",
    },
    {
      title: "Documentation and Record-Keeping",
      body: "All steps taken under this procedure must be documented contemporaneously in:\n\n• The service user's care record\n• The Duty of Candour Register\n• The Incident Management Log\n\nThe Duty of Candour Register must capture: incident date, incident description, harm level, name of person notified, date of verbal notification, date of written notification, apology confirmed (yes/no), investigation outcome, and date outcome shared.\n\nAll correspondence with service users or their representatives under this procedure must be retained for a minimum of 8 years (adult) or until the age of 25 for children, in line with the Retention and Disposal Schedule.",
    },
    {
      title: "Learning and Quality Improvement",
      body: "Every notifiable safety incident must be subject to a structured review, proportionate to the level of harm caused. Reviews may range from a structured debrief (moderate harm) to a full root cause analysis with external involvement (severe harm or death).\n\nLearning from each incident — including changes to practice, environment, training, or procedures — must be shared with relevant staff within 28 days of the investigation being concluded. A summary of duty of candour cases, themes, and learning is presented to the governance meeting at least quarterly.",
      practiceBox: "Families and service users who feel they have been treated with openness and honesty after an adverse event are significantly less likely to complain formally or pursue legal action. The duty of candour is not a liability risk — it is the single most effective risk management tool after an incident.",
    },
  ],
  monitoring: "The Registered Manager reviews the Duty of Candour Register monthly. Compliance with this policy is audited quarterly by the governance lead. Any failure to activate the duty of candour within required timescales is reported as a serious compliance concern at the next governance meeting.",
  relatedDocuments: [
    "gov-003 — Internal Audit Policy",
    "gov-005 — CQC Notifications Policy",
    "wl-001 — Governance Framework",
    "saf-001 — Safeguarding Adults Policy",
    "wl-013 — Quality Improvement Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-002  Quality Assurance and Governance Framework Policy
// ─────────────────────────────────────────────────────────────────────────────
export const GOV002_CONTENT: DocumentContent = {
  title: "Quality Assurance and Governance Framework Policy",
  policyId: "GOV-002",
  version: "2.0",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Director / Registered Manager",
  scope: "All aspects of [ORGANISATION_NAME]'s regulated activities, including care delivery, workforce, health and safety, information governance, and financial management.",
  responsibilities: [
    {
      role: "Director / Provider",
      duties: [
        "Set the strategic direction for quality and governance across the organisation.",
        "Ensure adequate resources are allocated to quality assurance activities.",
        "Review quality dashboards and governance reports at board/director level at least quarterly.",
        "Ensure the Registered Manager has sufficient authority, time, and support to discharge their statutory functions.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Operate and maintain the organisation's integrated governance system.",
        "Ensure all quality monitoring activity — audits, surveys, complaints, incidents — is coordinated and reported.",
        "Lead the governance meeting schedule and ensure action plans are implemented and evidenced.",
        "Maintain the Quality Assurance Dashboard and present monthly reports to the Director.",
        "Ensure the service is continuously ready for CQC inspection.",
      ],
    },
    {
      role: "All Senior Staff / Team Leaders",
      duties: [
        "Contribute to audits, quality checks, and staff monitoring as directed.",
        "Implement corrective actions arising from quality monitoring within agreed timescales.",
        "Report quality or safety concerns to the Registered Manager promptly.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Care Quality Commission (Registration) Regulations 2009",
    "Care Act 2014 — provider failure and quality standards",
    "Health and Safety at Work Act 1974",
    "UK GDPR and Data Protection Act 2018",
    "CQC Single Assessment Framework (2023 onwards)",
  ],
  definitions: [
    { term: "Clinical Governance", definition: "A framework through which organisations are accountable for continuously improving the quality of their services and safeguarding high standards of care by creating an environment in which excellence in clinical care will flourish." },
    { term: "Quality Assurance", definition: "The systematic monitoring, evaluation, and improvement of services to ensure that standards of quality are being met and continuously improved upon." },
    { term: "Key Performance Indicator (KPI)", definition: "A measurable value that demonstrates how effectively the organisation is achieving its key quality and safety objectives." },
    { term: "Governance Meeting", definition: "A regular, structured meeting at which quality, safety, risk, and compliance data are reviewed, decisions are made, and actions are assigned and tracked." },
  ],
  sections: [
    {
      title: "Purpose and Principles",
      body: "[ORGANISATION_NAME] is committed to providing safe, effective, caring, responsive, and well-led services. This policy establishes the framework through which quality is assured, risks are managed, and continuous improvement is embedded in everything we do.\n\nOur quality assurance framework is built on six pillars:\n\n1. Leadership and accountability — clear lines of responsibility for quality at all levels\n2. Monitoring and measurement — regular collection and review of quality and safety data\n3. Learning and improvement — turning data and incidents into action\n4. Staff engagement — involving frontline staff in quality improvement\n5. Service user and carer voice — acting on feedback from the people we support\n6. Transparency and openness — being honest about performance and improvement needs",
      legalBox: "Regulation 17 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 requires all registered providers to have effective systems and processes to assess, monitor, and improve the quality and safety of the services provided. Failure to have an effective governance system is one of the most common reasons for CQC enforcement action.",
    },
    {
      title: "Quality Monitoring and Measurement",
      body: "The Registered Manager maintains a Quality Assurance Dashboard that is updated at least monthly. The dashboard includes the following domains and Key Performance Indicators:",
      bulletPoints: [
        "Safety — incident rates, falls per 1,000 occupied days, pressure ulcer prevalence, medication errors, near-misses, safeguarding referrals.",
        "Effectiveness — care plan completion rates, MCA assessments completed, DoLS authorisations in place, health action plan completion.",
        "Caring — complaint rates, compliment rates, net promoter score from service user surveys, family/carer satisfaction scores.",
        "Responsiveness — complaint response times, waiting times for assessment, unmet needs identified and actioned.",
        "Well-Led — staff sickness rate, turnover rate, mandatory training completion, supervision completion, DBS renewal compliance.",
        "CQC compliance — percentage of fundamental standards met per most recent self-assessment.",
      ],
      practiceBox: "Data on its own is not quality assurance. What matters is: what does the data tell us, what action do we need to take, and what difference has the action made? Every KPI should drive a conversation, not just be reported.",
    },
    {
      title: "The Governance Meeting Structure",
      body: "[ORGANISATION_NAME] operates a structured governance meeting schedule to provide oversight at three levels:\n\n1. Monthly Governance Meeting (Registered Manager + Senior Team): Reviews all KPIs, incidents, complaints, safeguarding, audit outcomes, and risk register. Actions are assigned with named owners and deadlines.\n\n2. Quarterly Director Review (Director + Registered Manager): Reviews aggregated quality data, strategic risks, CQC compliance position, financial performance, and staffing position. Approves major improvement plans.\n\n3. Annual Quality Account Review: Reviews performance over the full year, sets quality priorities for the coming year, and produces the Quality Account statement.\n\nAll governance meetings are minuted. Minutes and action logs are retained for a minimum of 3 years.",
    },
    {
      title: "Risk Management",
      body: "Quality assurance is inseparable from effective risk management. [ORGANISATION_NAME] maintains a Risk Register that identifies, assesses, and controls risks across all domains of the organisation.\n\nEach risk is assessed using a 5×5 likelihood/consequence matrix. Risks scoring 15 or above (high) are escalated to the Director and reviewed at every monthly governance meeting until resolved or reduced.\n\nThe Registered Manager reviews the Risk Register monthly. New risks are added within 48 hours of identification. Closed risks are retained in the Risk Register archive for audit purposes.",
      warningBox: "CQC inspectors routinely ask to see the Risk Register during Well-Led inspections. A register that is incomplete, not regularly reviewed, or contains risks with no actions assigned is a significant governance failing. The Risk Register must be a live document, not an annual exercise.",
    },
    {
      title: "Service User and Staff Feedback",
      body: "Feedback from service users, their families and carers, and staff is an essential component of quality assurance. [ORGANISATION_NAME] collects feedback through:\n\n• Annual service user satisfaction surveys (minimum 75% response target)\n• Post-complaint satisfaction surveys (100% of formal complaints)\n• Quarterly staff wellbeing and engagement surveys\n• Bi-annual staff 'speak up' sessions with the Registered Manager\n• Daily / weekly informal feedback channels in care records\n• Exit interviews for all departing staff\n\nFeedback is analysed quarterly, themes are identified, and action plans are produced. The outcomes of action taken in response to feedback are communicated back to those who provided it (closing the loop).",
    },
    {
      title: "Continuous Improvement Cycle",
      body: "All quality improvement activity follows a structured improvement cycle (Plan-Do-Study-Act or PDSA):\n\n1. Plan: Identify the problem or improvement opportunity, set a measurable aim, and design the change.\n2. Do: Implement the change on a small scale or pilot basis.\n3. Study: Measure the impact and compare results against the baseline.\n4. Act: If successful, spread the change; if not, modify the approach and repeat.\n\nAll improvement projects are recorded in the Improvement Log, which is reviewed at monthly governance meetings. The log must identify: the problem identified, the change made, the evidence of impact, and the date the change was embedded in standard practice.",
    },
  ],
  monitoring: "Quality assurance dashboard reviewed monthly by Registered Manager. Quarterly director review. Annual quality account produced and made available to service users, commissioners, and CQC.",
  relatedDocuments: [
    "gov-001 — Duty of Candour Policy",
    "gov-003 — Audit Policy",
    "gov-005 — CQC Notifications Policy",
    "wl-001 — Governance Framework",
    "wl-013 — Quality Improvement Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-003  Internal Audit Policy and Audit Schedule
// ─────────────────────────────────────────────────────────────────────────────
export const GOV003_CONTENT: DocumentContent = {
  title: "Internal Audit Policy and Audit Schedule",
  policyId: "GOV-003",
  version: "1.8",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All regulated activities, services, premises, and functions of [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Ensure an annual audit schedule is in place by 1 April each year covering all required audit domains.",
        "Assign named audit leads for each scheduled audit.",
        "Review all completed audit reports within 10 working days of receipt.",
        "Ensure improvement actions from audits are tracked to completion in the Action Log.",
        "Present audit findings and action progress to the monthly governance meeting.",
      ],
    },
    {
      role: "Audit Leads / Senior Staff",
      duties: [
        "Complete assigned audits using the standardised audit tools, within the timescales set in the Audit Schedule.",
        "Produce a written audit report within 5 working days of completing the audit.",
        "Discuss findings with the Registered Manager and agree an action plan.",
        "Follow up on actions assigned to their team and report progress to the Registered Manager.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Cooperate with internal audits and provide accurate information when requested.",
        "Implement improvement actions assigned to them within the agreed timescale.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance",
    "Care Act 2014, s.5 — market oversight and quality requirements",
    "CQC Single Assessment Framework (2023) — Well-Led quality statement on governance systems",
    "NICE guidance on quality improvement and clinical governance",
  ],
  definitions: [
    { term: "Audit", definition: "A systematic, independent examination of evidence to determine whether defined requirements or standards are being met, and to identify opportunities for improvement." },
    { term: "Audit Tool", definition: "A standardised checklist or assessment framework used to consistently measure compliance against a specific standard or policy." },
    { term: "Action Plan", definition: "A written plan, produced following an audit, that specifies what improvement actions are required, who is responsible, and by when." },
    { term: "Compliance Score", definition: "The percentage of audit criteria rated as 'met' or 'fully compliant' in a given audit cycle. The target score for each domain is set in the Audit Schedule." },
  ],
  sections: [
    {
      title: "Purpose of Internal Audit",
      body: "[ORGANISATION_NAME] uses internal audit as a key tool for quality assurance, regulatory compliance, and continuous improvement. Internal audits enable us to:\n\n• Measure compliance with policies, procedures, and regulatory standards before a CQC inspection\n• Identify risks, gaps, and poor practice early and take corrective action\n• Provide evidence of quality monitoring to CQC, commissioners, and service users\n• Learn from practice, share good examples, and drive improvement\n\nAudit is not a 'tick-box' exercise — it is a systematic process that drives meaningful change in the quality of care.",
      practiceBox: "The best audit programmes are those where staff see the results, understand why things need to change, and are involved in designing the solutions. Share audit outcomes with the whole team — not just the action plan.",
    },
    {
      title: "Annual Audit Schedule",
      body: "The Registered Manager produces an Annual Audit Schedule each April covering the following minimum domains. Audits are completed by the named lead within the specified frequency:",
      bulletPoints: [
        "Care Plans and Risk Assessments — monthly sample audit (minimum 10% of active care plans)",
        "Medication Management — monthly audit of all medication administration records (MARs)",
        "Infection Prevention and Control — monthly environmental audit; quarterly hand hygiene audit",
        "Health and Safety — monthly premises safety check; quarterly fire safety audit",
        "Safeguarding — quarterly review of all referrals, outcomes, and staff training compliance",
        "Mental Capacity Act / DoLS — quarterly audit of MCA assessments and DoLS authorisations",
        "Staff Training and Supervision — monthly report on mandatory training completion; supervision audit quarterly",
        "Complaints and Feedback — monthly review of all complaints, comments, and feedback received",
        "Duty of Candour — monthly review of Duty of Candour Register",
        "Records and Documentation — quarterly random record audit (minimum 5 records)",
        "Falls and Incidents — monthly trend analysis of all incidents",
        "Nutritional Screening — monthly audit of MUST/nutritional screening completion",
      ],
    },
    {
      title: "Audit Process",
      body: "Each internal audit follows a standard five-stage process:",
      procedure: [
        "Stage 1 — Plan: The audit lead reviews the relevant policy, procedure, and regulatory standard. They select the audit tool (from the Ziproh Compliance Centre audit library or an approved equivalent) and identify the sample to be reviewed.",
        "Stage 2 — Conduct: The audit lead completes the audit tool, collects evidence, observes practice (where appropriate), and reviews records within the agreed timescale.",
        "Stage 3 — Report: The audit lead produces a written audit report using the standard report template, including: audit date, lead, sample size, compliance score, key findings (positive and negative), and recommended actions.",
        "Stage 4 — Action: The Registered Manager reviews the report and agrees an action plan with the audit lead. Each action is assigned a named owner and a completion date. Actions from audits scoring below 75% must be completed within 14 days.",
        "Stage 5 — Re-audit: All audits scoring below 75% compliance on any domain are re-audited within 6 weeks to verify improvement. Re-audit results are compared against the original to demonstrate progress.",
      ],
      warningBox: "CQC inspectors pay particular attention to what a provider does when an audit identifies a problem. An audit that finds a 50% compliance score but is followed by a comprehensive, implemented action plan that drives scores up to 90% in 6 weeks is evidence of good governance. An audit with no action plan — or actions that are never completed — is evidence of governance failure.",
    },
    {
      title: "Audit Records and Reporting",
      body: "All audit tools, reports, action plans, and re-audit evidence are retained in the Compliance Centre for a minimum of 5 years. A summary of audit outcomes — compliance scores by domain, month-on-month trends, and outstanding actions — is presented to every monthly governance meeting.\n\nAn annual audit summary report is produced each March and reviewed at the Quarterly Director Review. This report identifies domains of sustained good practice (compliance scores consistently above 90%), improvement areas (scores 75–89%), and areas of concern (scores below 75% for two or more consecutive months).",
    },
  ],
  monitoring: "Monthly compliance summary at governance meeting. Annual audit programme reviewed and reset each April. CQC inspection readiness assessed against audit evidence at each quarterly director review.",
  relatedDocuments: [
    "gov-002 — Quality Assurance and Governance Policy",
    "gov-001 — Duty of Candour Policy",
    "wl-001 — Governance Framework",
    "wl-013 — Quality Improvement Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-004  Document Control and Policy Review Policy
// ─────────────────────────────────────────────────────────────────────────────
export const GOV004_CONTENT: DocumentContent = {
  title: "Document Control and Policy Review Policy",
  policyId: "GOV-004",
  version: "1.5",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All policies, procedures, guidelines, protocols, and associated documents produced by or on behalf of [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: [
        "Maintain a master Policy Register that lists all current, superseded, and archived documents.",
        "Ensure all new and reviewed policies are approved before publication.",
        "Ensure a rolling review schedule is maintained so no policy is more than 12 months overdue for review.",
        "Communicate policy changes to all relevant staff and record acknowledgement.",
      ],
    },
    {
      role: "Policy Author / Reviewer",
      duties: [
        "Draft or review assigned policies within the agreed timescale.",
        "Ensure all references, legislation, and guidance cited are current and accurate.",
        "Complete a version history entry for every change made.",
        "Submit completed policies for approval using the standard approval process.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Access and read only the current, approved version of policies and procedures.",
        "Report outdated, conflicting, or missing policies to their line manager promptly.",
        "Acknowledge reading new or updated policies as required.",
        "Never print and use a policy without checking it is the current approved version.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 17 — Good Governance (systems and processes must be fit for purpose and kept up to date)",
    "UK GDPR and Data Protection Act 2018 — document retention and disposal",
    "Equality Act 2010 — policies must be equality-impact assessed",
    "Health and Safety at Work Act 1974 — safety procedures must be communicated to all staff",
  ],
  definitions: [
    { term: "Document Control", definition: "The systematic management of documents through their full lifecycle: creation, approval, publication, review, revision, and disposal." },
    { term: "Policy", definition: "A formal statement of the organisation's intent and approach to a specific area of practice or governance. Sets out what will be done and why." },
    { term: "Procedure", definition: "A step-by-step description of how a specific task or process is to be carried out. Supports implementation of a policy." },
    { term: "Version Control", definition: "The process of tracking changes to a document over time, assigning unique version numbers to each approved iteration." },
    { term: "Superseded Document", definition: "A previous version of a policy or procedure that has been replaced by a more recent approved version. Must be clearly marked as superseded and archived." },
  ],
  sections: [
    {
      title: "Purpose and Scope",
      body: "This policy ensures that all documents used in [ORGANISATION_NAME] are accurate, current, approved, accessible, and controlled. Outdated or inconsistent documents are a patient safety risk and a CQC compliance risk. This policy protects staff by ensuring they always have access to the right version of every document.",
      warningBox: "Using an outdated policy or procedure is not a defence in a CQC inspection, a disciplinary investigation, or legal proceedings. The onus is on the organisation to ensure only current documents are in circulation, and on the Registered Manager to maintain effective document control.",
    },
    {
      title: "Document Numbering and Version Control",
      body: "Every controlled document must have a unique document reference number (e.g. GOV-004), a version number (e.g. v1.5), an effective date, and a review date.\n\nVersion numbering follows this convention:\n• Major revision (significant content change): increment the whole number (v1.0 → v2.0)\n• Minor revision (minor clarification, updated references): increment the decimal (v1.0 → v1.1)\n• Draft versions: use a D prefix (v1.0D) and never publish as current",
      practiceBox: "Review dates should be set at the time of approval. Standard review cycle is 12 months (annually). Documents that reference specific legislation, guidance, or regulatory standards that change frequently should be reviewed every 6 months.",
    },
    {
      title: "Policy Review Process",
      body: "All policies must be reviewed at least annually, or earlier if:\n\n• Relevant legislation or regulatory guidance changes\n• A serious incident, complaint, or investigation reveals a policy gap\n• CQC publishes updated inspection framework expectations\n• The organisation changes its service model, client group, or registered activities\n• Staff or service users identify a problem with the existing policy\n\nThe review process:",
      procedure: [
        "Step 1: The Registered Manager identifies the policy due for review (6 weeks before the review date) and assigns a reviewer.",
        "Step 2: The reviewer reads the current policy alongside any updated legislation, CQC guidance, NICE guidelines, or sector guidance published since the last review.",
        "Step 3: The reviewer makes amendments as necessary and completes a version history entry documenting what changed and why.",
        "Step 4: The revised draft is submitted to the Registered Manager for review and then approved by the Director (for major revisions) or Registered Manager (for minor revisions).",
        "Step 5: The approved policy is uploaded to the Compliance Centre and the old version is archived. The new version date is entered in the Policy Register.",
        "Step 6: Staff are notified of the updated policy via the platform and required to acknowledge they have read the new version within 10 working days.",
      ],
    },
    {
      title: "Staff Acknowledgement of Policies",
      body: "Whenever a new or significantly revised policy is published, all relevant staff must read and acknowledge the document within 10 working days. Acknowledgement is recorded automatically via the Ziproh Compliance Centre reading list function.\n\nStaff who have not acknowledged a policy change within 10 working days will be followed up by their line manager. Outstanding acknowledgements are reviewed at the monthly governance meeting. Refusal to read and acknowledge a policy without good reason is a conduct issue dealt with under the Disciplinary Policy.",
    },
  ],
  monitoring: "Policy Register reviewed monthly by Registered Manager. Policies overdue for review flagged at governance meeting. Staff acknowledgement rates reported monthly.",
  relatedDocuments: [
    "gov-002 — Quality Assurance and Governance Policy",
    "igr-001 — Records Management Policy",
    "igr-005 — Retention and Disposal Schedule",
    "hr-002 — Statutory and Mandatory Training Policy",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-005  CQC Notifications Policy and Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const GOV005_CONTENT: DocumentContent = {
  title: "CQC Notifications Policy and Procedure",
  policyId: "GOV-005",
  version: "2.2",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Registered Manager",
  scope: "All registered activities of [ORGANISATION_NAME]. All managers and staff who may be responsible for, or involved in, notifiable events.",
  responsibilities: [
    {
      role: "Registered Manager / Provider",
      duties: [
        "Submit all required notifications to CQC within the prescribed timescales.",
        "Maintain a Notifications Log recording all notifications submitted.",
        "Ensure all staff are trained on which events must be notified and to whom.",
        "Report any change in registration information (Registered Manager change, service change, etc.) to CQC promptly.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Report any potentially notifiable event to the Registered Manager immediately.",
        "Complete an incident report at the earliest opportunity using the incident reporting system.",
        "Cooperate with any investigation or review following a notifiable event.",
      ],
    },
  ],
  legislation: [
    "Care Quality Commission (Registration) Regulations 2009, Regulation 16 — Notification of death of a service user",
    "Care Quality Commission (Registration) Regulations 2009, Regulation 17 — Notification of death or unauthorised absence of a detained or liable to be detained person",
    "Care Quality Commission (Registration) Regulations 2009, Regulation 18 — Notification of other incidents",
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20 — Duty of Candour",
    "Mental Health Act 1983 — notification of AWOL patients (where applicable)",
  ],
  definitions: [
    { term: "Notifiable Event", definition: "An event that a registered provider is legally required to report to CQC within specified timescales under the CQC Registration Regulations 2009." },
    { term: "Statutory Notification", definition: "A formal report submitted to CQC via the online notification portal (or by telephone in emergencies) as required by law." },
  ],
  sections: [
    {
      title: "Events That Must Be Notified to CQC",
      body: "The following events must be notified to CQC under the CQC Registration Regulations 2009. Failure to notify is a breach of registration conditions and may result in CQC enforcement action.",
      bulletPoints: [
        "Death of a service user — notify without delay (same working day) via CQC's online portal.",
        "Serious injury to a service user — notify within 3 working days.",
        "Abuse or allegation of abuse of a service user — notify within 3 working days.",
        "Events that prevent, or are likely to prevent, the provider from carrying on the regulated activity safely — notify without delay.",
        "Deprivation of Liberty Safeguards — relevant events as defined by CQC guidance.",
        "Application for, or granting of, an urgent DoLS authorisation — notify within 3 working days.",
        "Referral to the Disclosure and Barring Service (DBS) — notify within 1 working day of making the referral.",
        "A whistleblowing disclosure that reveals a notifiable event — notify as appropriate for the underlying event.",
        "Change in Registered Manager — notify CQC immediately and apply for new manager registration within 28 days.",
        "Temporary closure or significant change to service — notify CQC as early as possible before the change.",
      ],
      warningBox: "Not all incidents require CQC notification, but all serious incidents must be assessed to determine whether notification is required. When in doubt, notify. It is not possible to 'un-notify', but failure to notify when required is a regulatory breach with serious consequences.",
    },
    {
      title: "Notification Procedure",
      body: "All notifications to CQC are submitted electronically via the CQC Provider Portal at cqc.org.uk. For urgent events outside office hours, CQC's 24-hour line is 03000 616161.",
      procedure: [
        "Step 1: Any member of staff who witnesses or becomes aware of a potentially notifiable event immediately informs their line manager or the Registered Manager.",
        "Step 2: An incident report is completed in the electronic care system within 2 hours of the event being discovered.",
        "Step 3: The Registered Manager assesses the event against the list of notifiable events and makes a determination within 4 hours (same day for deaths and serious events).",
        "Step 4: Where notification is required, the Registered Manager completes the relevant CQC notification form on the Provider Portal and submits it within the required timescale.",
        "Step 5: The notification reference number from CQC is recorded in the Notifications Log.",
        "Step 6: Where the event also triggers the Duty of Candour procedure (Regulation 20), that procedure is activated concurrently.",
        "Step 7: The Registered Manager reviews the event with senior staff and initiates any required investigation, referral to other bodies (police, LADO, local authority safeguarding), or preventive action.",
      ],
    },
    {
      title: "Notifications Log",
      body: "The Registered Manager maintains a Notifications Log for all events notified or assessed for notification. The log records:\n\n• Date of event\n• Nature of event\n• Decision (notification required / not required, and reason)\n• Date notification submitted to CQC\n• CQC notification reference number\n• Any parallel notifications (e.g. to local authority, LADO, police, CCG/ICB)\n• Outcome of investigation\n\nThe Notifications Log is reviewed at the monthly governance meeting and retained for 10 years.",
    },
  ],
  monitoring: "Notifications Log reviewed monthly. Annual review of all notifications submitted to identify trends and improvement areas.",
  relatedDocuments: [
    "gov-001 — Duty of Candour Policy",
    "gov-002 — Quality Assurance Policy",
    "saf-001 — Safeguarding Adults Policy",
    "wl-001 — Governance Framework",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-006  Statement of Purpose — Policy and Review Procedure
// ─────────────────────────────────────────────────────────────────────────────
export const GOV006_CONTENT: DocumentContent = {
  title: "Statement of Purpose — Policy and Review Procedure",
  policyId: "GOV-006",
  version: "1.4",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Director / Provider",
  scope: "The registered provider and all registered services operated by [ORGANISATION_NAME].",
  responsibilities: [
    {
      role: "Provider / Director",
      duties: [
        "Ensure a current, accurate Statement of Purpose is in place for every registered service.",
        "Approve and sign the Statement of Purpose and any revisions.",
        "Notify CQC of any changes to the Statement of Purpose within 28 days of the change taking effect.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Review the Statement of Purpose annually and whenever a significant change occurs.",
        "Draft any necessary amendments and submit for Director approval.",
        "Maintain a copy of the current Statement of Purpose in the CQC registration folder and on the Compliance Centre.",
        "Ensure the Statement of Purpose is accessible to service users, families, staff, and commissioners on request.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 and Schedule 3 — Statement of Purpose requirements",
    "Care Quality Commission (Registration) Regulations 2009, Regulation 12 — requirement to have and maintain a Statement of Purpose",
    "CQC guidance: Statement of Purpose guidance (updated 2022)",
  ],
  definitions: [
    { term: "Statement of Purpose", definition: "A formal document, required by law under the Health and Social Care Act 2008, that describes the provider, its aims and objectives, the services it provides, and the people it serves. It forms part of CQC registration and must be kept up to date." },
  ],
  sections: [
    {
      title: "Purpose and Legal Requirement",
      body: "A Statement of Purpose is a mandatory legal document for all CQC-registered providers. It forms part of the registration application and must be kept accurate and current at all times. The Statement of Purpose describes who we are, what we do, who we serve, and how we deliver care.\n\nCQC inspectors routinely ask to see the Statement of Purpose and will check whether the actual service matches what is stated. Any significant difference between the Statement of Purpose and the service delivered raises an immediate regulatory concern.",
      legalBox: "Under Schedule 3 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, the Statement of Purpose must include: the name and address of the registered provider; the regulated activities provided; a description of the service; the service user group; the number of service users; the aims and objectives of the service; and the names of the Registered Manager(s).",
    },
    {
      title: "Contents of the Statement of Purpose",
      body: "[ORGANISATION_NAME]'s Statement of Purpose includes the following mandatory information:\n\n1. Name, address, and contact details of the registered provider\n2. Legal status of the provider (company, partnership, individual, etc.)\n3. The registered activities provided (e.g. 'personal care', 'accommodation for persons requiring nursing or personal care')\n4. A description of the service, including the care and support provided\n5. The service user group served (age range, care needs, diagnoses supported)\n6. The maximum number of service users the service can accommodate\n7. The aims and objectives of the service\n8. The name and contact details of the Registered Manager\n9. The registered address of each location\n10. Any conditions of registration\n11. Details of staffing, including any specialist staff",
    },
    {
      title: "Keeping the Statement of Purpose Current",
      body: "The Statement of Purpose must be updated and notified to CQC whenever any of the following changes occur:\n\n• Change of Registered Manager\n• Change to the registered address or locations\n• Change to the regulated activities provided\n• Significant change to the service model or service user group\n• Change to the maximum number of service users\n• Any condition of registration changes\n\nCQC must be notified of changes within 28 days of the change taking effect. The Registered Manager must not wait for the annual review — changes must be notified as they occur.",
      procedure: [
        "Step 1: Any proposed change to the service that might affect the Statement of Purpose is flagged to the Registered Manager and Director.",
        "Step 2: The Registered Manager reviews the current Statement of Purpose and determines whether an amendment is needed.",
        "Step 3: The amended Statement of Purpose is drafted, reviewed by the Director, and approved.",
        "Step 4: The updated Statement of Purpose is uploaded to the CQC Provider Portal. A copy is saved to the Compliance Centre.",
        "Step 5: The date of the update and the CQC notification reference are recorded in the Compliance Register.",
      ],
    },
  ],
  monitoring: "Statement of Purpose reviewed annually as part of the governance calendar. CQC notifications recorded in the Compliance Register.",
  relatedDocuments: [
    "gov-005 — CQC Notifications Policy",
    "gov-002 — Quality Assurance Policy",
    "cop-003 — Service User Guide",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GOV-007  Business Continuity and Emergency Planning Policy (Comprehensive)
// ─────────────────────────────────────────────────────────────────────────────
export const GOV007_CONTENT: DocumentContent = {
  title: "Business Continuity and Emergency Planning Policy",
  policyId: "GOV-007",
  version: "3.0",
  effectiveDate: "2026-04-01",
  reviewDate: "2027-04-01",
  approvedBy: "Director / Registered Manager",
  scope: "All [ORGANISATION_NAME] services, sites, and staff. Covers all foreseeable emergencies that could disrupt the provision of regulated activities.",
  responsibilities: [
    {
      role: "Director / Provider",
      duties: [
        "Ensure a Business Continuity Plan (BCP) is in place, tested, and reviewed annually.",
        "Provide adequate financial and operational resource to implement the BCP when required.",
        "Take strategic decisions about service continuity during major emergencies.",
      ],
    },
    {
      role: "Registered Manager",
      duties: [
        "Maintain the Business Continuity Plan and Emergency Response Procedures.",
        "Ensure all staff are trained on emergency procedures at induction and annually.",
        "Activate the Business Continuity Plan when required and coordinate the response.",
        "Conduct a BCP desktop exercise at least annually and a full test every 2 years.",
        "Liaise with Local Resilience Forums, ICBs, and commissioners as required.",
      ],
    },
    {
      role: "All Staff",
      duties: [
        "Know where to find the Business Continuity Plan and the Emergency Response Procedures.",
        "Report any event that has the potential to disrupt service delivery immediately to their line manager.",
        "Follow emergency procedures as directed by the Registered Manager or designated lead.",
      ],
    },
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 12 — Safe Care and Treatment (systems to respond to emergencies)",
    "Civil Contingencies Act 2004 — care providers as category 2 responders in some contexts",
    "Health and Safety at Work Act 1974 — safe systems of work",
    "UK GDPR — data continuity and disaster recovery",
    "NHS England EPRR Framework (Core Standards) — where applicable to providers receiving NHS funding",
  ],
  definitions: [
    { term: "Business Continuity Plan (BCP)", definition: "A documented set of procedures and information developed, compiled, and maintained in readiness for use in the event of an emergency or major disruption to normal operations." },
    { term: "Critical Service", definition: "A service that, if interrupted, would cause serious harm to service users. All personal care and nursing care services are classified as critical." },
    { term: "Maximum Tolerable Period of Disruption (MTPD)", definition: "The maximum length of time a service can be disrupted before the impact becomes unacceptable from a safety, legal, or reputational perspective." },
  ],
  sections: [
    {
      title: "Purpose and Approach",
      body: "[ORGANISATION_NAME] provides critical care services to vulnerable people who depend on us for their safety, health, and wellbeing. We have a legal and ethical obligation to maintain service continuity even when faced with unexpected events. This policy establishes a structured, rehearsed approach to identifying, preparing for, and responding to emergencies that could disrupt our services.",
      warningBox: "Failure to maintain service continuity during an emergency — especially where service users come to harm as a result — is one of the most serious CQC safety failures. CQC expects all regulated providers to have a tested, documented BCP. The absence of a BCP is in itself a breach of Regulation 12.",
    },
    {
      title: "Risk Scenarios Covered",
      body: "The Business Continuity Plan covers the following scenarios. A specific Emergency Response Procedure is held for each:",
      bulletPoints: [
        "Severe weather (snow, flooding, extreme heat) — including staff inability to travel and service user welfare.",
        "Significant staffing shortage (pandemic, mass sickness, strike action, sudden resignation of key staff).",
        "IT system failure or cyber attack — including loss of care records, electronic medication systems, and communication platforms.",
        "Utility failure (power cut, water supply failure, heating failure) — especially critical for residential services.",
        "Premises loss or damage (fire, flood, structural damage) — including evacuation and relocation procedures.",
        "Medical emergency affecting a large number of service users simultaneously (outbreak of infectious disease, food poisoning).",
        "Death or incapacity of the Registered Manager.",
        "Loss of key suppliers (medication supplier, agency staff, food delivery, specialist equipment).",
        "Serious security incident (intruder, assault, bomb threat).",
        "Death of a service user in circumstances that require service suspension.",
      ],
    },
    {
      title: "Emergency Response Procedures",
      body: "For each risk scenario, the Business Continuity Plan includes an Emergency Response Procedure (ERP). Each ERP specifies:\n\n1. Trigger — what event or threshold activates this ERP\n2. Immediate actions (0–4 hours) — who does what in the first phase of the emergency\n3. Short-term actions (4–72 hours) — sustaining the service with reduced/adapted resources\n4. Recovery actions — returning to normal operations\n5. Communication plan — who is contacted and in what order (staff, service users, families, commissioners, CQC)\n6. Key contact list — emergency contact numbers for staff, commissioners, emergency services, ICB, Out-of-Hours GP, utilities providers\n\nThe Registered Manager maintains a laminated Emergency Response Quick Guide at each site, accessible without power or IT.",
      practiceBox: "The 'first 30 minutes' of an emergency determine whether it becomes a crisis or a managed incident. Invest in planning, rehearsal, and staff training so that the first 30 minutes go well. A team that knows what to do doesn't need to wait for instructions.",
    },
    {
      title: "Staffing Contingency",
      body: "The most common cause of service continuity risk is inadequate staffing. [ORGANISATION_NAME] maintains the following staffing contingency measures:\n\n• An up-to-date contact list of all staff including personal mobile numbers and contracted hours\n• Agreements with at least two approved agency suppliers\n• A staff cascade calling tree for emergency deployment\n• Minimum safe staffing ratios that must not be breached in any circumstances\n• A named deputy for the Registered Manager who can take authority in an emergency\n\nIn a staffing emergency, the Registered Manager will: assess the risk to service users immediately; contact available staff; activate agency cover; notify the Director; and notify commissioners and CQC if service reduction is unavoidable.",
    },
    {
      title: "Testing and Review",
      body: "The Business Continuity Plan and all Emergency Response Procedures are reviewed annually. A desktop exercise (tabletop scenario) is conducted at least annually with the management team. A full exercise involving staff is conducted at least every 2 years.\n\nFollowing any actual activation of the BCP, a debrief is conducted within 5 working days to review what worked, what did not, and what changes are needed. Debrief findings are used to update the BCP immediately.",
    },
  ],
  monitoring: "Annual BCP review. Desktop exercise minutes retained as evidence. Post-incident debriefs recorded and acted on within 10 working days.",
  relatedDocuments: [
    "gov-002 — Quality Assurance Policy",
    "gov-005 — CQC Notifications Policy",
    "wl-009 — Staffing and Deployment Policy",
    "saf-008 — Fire Safety Policy",
  ],
};
