import type { DocumentContent } from "./documents";

export const RESPONSIVE_CONTENT: Record<string, DocumentContent> = {
  "res-001": {
    purpose: "[ORGANISATION_NAME] is committed to welcoming complaints as a valuable source of feedback and to resolving them promptly, fairly and openly. This policy sets out the organisation's complaints procedure, ensuring complainants are treated with respect and that learning from complaints improves the quality of care.",
    scope: "Applies to complaints received from service users, their families, carers, advocates, commissioners and any other party with a legitimate interest in the service.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure all complaints are acknowledged within 2 working days and investigated within 20 working days",
          "Maintain a complaints log and review complaints at monthly governance meetings",
          "Notify CQC of any complaint involving an allegation of abuse or that raises significant quality concerns",
          "Share learning from complaints with staff and evidence improvements made",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Take all complaints seriously and never dismiss or minimise a complainant's concern",
          "Pass any complaint received directly to the duty manager on the same day",
          "Never attempt to resolve a formal complaint themselves without manager involvement",
          "Treat complainants with courtesy and respect at all times",
        ],
      },
    ],
    keyPoints: [
      "Every complaint is an opportunity to improve — [ORGANISATION_NAME] aims to resolve complaints to the complainant's satisfaction and to prevent recurrence",
      "Complainants must never be made to feel unwelcome or experience any form of retaliation for raising a concern",
      "Formal complaints must be acknowledged in writing within 2 working days and a full written response provided within 20 working days",
      "If a complaint cannot be resolved within 20 working days, the complainant must be informed of progress and the revised timescale",
      "Where a complaint is not resolved to the complainant's satisfaction, they must be informed of their right to escalate to the Local Government and Social Care Ombudsman (for adult social care)",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 16",
      "Local Authority Social Services and NHS Complaints (England) Regulations 2009",
      "Care Act 2014",
      "Human Rights Act 1998",
    ],
    sections: [
      {
        heading: "Complaints Procedure",
        body: "Stage 1 — Local Resolution: on receipt of a complaint, the duty manager will acknowledge it within 2 working days. The Registered Manager will investigate by reviewing relevant records, speaking with staff involved, and wherever possible meeting with the complainant. A full written response detailing findings, any apology and any action taken must be provided within 20 working days. Stage 2 — Escalation: if the complainant remains dissatisfied after the Stage 1 response, they may request an internal review by a senior manager. Stage 3 — External Escalation: if still unresolved, the complainant may contact the Local Government and Social Care Ombudsman (England) or equivalent in other nations.",
      },
      {
        heading: "Learning from Complaints",
        body: "All complaints must be reviewed by the Registered Manager for learning. Themes and trends must be analysed at monthly governance meetings. Any action arising from complaints must be documented in a formal action plan with named owners and target dates. Evidence of improvements made as a result of complaints must be recorded and shared with the team and with the complainant where appropriate. An annual complaints report must be produced as part of the quality account.",
      },
    ],
  },

  "res-002": {
    purpose: "[ORGANISATION_NAME] is committed to involving service users meaningfully in decisions about their own care and in the running and development of the service. This policy sets out how [ORGANISATION_NAME] listens to the voices of those it supports and acts on what it hears.",
    scope: "Applies to all service users of [ORGANISATION_NAME], their families, carers and advocates, and to all staff responsible for facilitating involvement.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure regular resident or service user meetings are held and that findings are documented and acted upon",
          "Facilitate a range of methods for service users to express their views including surveys, one-to-one discussions and group meetings",
          "Report on service user involvement activity in the annual quality account",
          "Ensure service users are involved in the recruitment of key staff",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Create an environment where service users feel safe to express their views, preferences and concerns",
          "Act on service user preferences wherever possible and explain when it is not possible",
          "Facilitate service user involvement for those with communication or cognitive difficulties",
          "Treat all service user feedback — positive and negative — with equal seriousness",
        ],
      },
    ],
    keyPoints: [
      "Service user involvement is not a tick-box exercise — it must lead to genuine change and service users must see the results of their feedback",
      "Methods of involvement must be adapted to meet the communication and cognitive needs of all service users",
      "Family and carer involvement is valuable but must never substitute for direct service user involvement",
      "Service users must be informed of the outcomes of involvement activities — 'you said, we did' feedback closes the loop",
      "Involvement should include not just day-to-day care decisions but also strategic decisions about the service where appropriate",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 9",
      "Care Act 2014",
      "Mental Capacity Act 2005",
      "Equality Act 2010",
    ],
    sections: [
      {
        heading: "Methods of Service User Involvement",
        body: "Methods of involvement used at [ORGANISATION_NAME] include: regular resident or service user meetings (at least monthly); annual satisfaction surveys with accessible format versions; one-to-one key worker conversations and care reviews; suggestion boxes and feedback cards; involvement in staff recruitment (where capacity allows); involvement in quality audits as 'experts by experience'; and community meetings for matters affecting the service as a whole. All methods must be adapted to support participation by service users with cognitive or communication difficulties.",
      },
    ],
  },

  "res-003": {
    purpose: "[ORGANISATION_NAME] actively seeks and values compliments, suggestions and feedback from service users, families, staff and other stakeholders. This policy sets out how feedback is collected, acknowledged and used to continuously improve the service.",
    scope: "Applies to all forms of unsolicited feedback received by [ORGANISATION_NAME], including verbal compliments, written comments, survey responses and online reviews.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Ensure feedback collection methods are accessible and prominently available",
          "Review feedback at monthly governance meetings and identify themes for action",
          "Ensure compliments are shared with the relevant staff member and the team",
          "Report on feedback themes in the annual quality account",
        ],
      },
      {
        role: "All Staff",
        duties: [
          "Encourage service users and families to provide feedback",
          "Pass all written feedback to the duty manager",
          "Record verbal compliments and concerns in the feedback log",
        ],
      },
    ],
    keyPoints: [
      "Compliments must be shared with the individual staff member and with the team — recognition motivates and validates good practice",
      "Suggestions must be taken seriously, responded to, and where actioned, the feedback shared with the person who made the suggestion",
      "All feedback — positive and negative — must be logged and reviewed for patterns",
      "Annual satisfaction surveys must be conducted for service users, families and staff",
      "Negative feedback that falls short of a formal complaint should still be treated as an opportunity to improve and responded to appropriately",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
    ],
    sections: [
      {
        heading: "Collecting Feedback",
        body: "Feedback methods include: suggestion boxes in prominent locations; feedback forms available in easy-read and standard print; annual satisfaction surveys; resident and family meetings; key worker conversations; and the provider's own digital feedback mechanisms. Survey results must be collated and analysed at least annually. Findings must be shared with service users and staff and a 'you said, we did' report produced each year. Online reviews and social media feedback should also be monitored and responded to appropriately.",
      },
    ],
  },

  "res-004": {
    purpose: "[ORGANISATION_NAME] is committed to providing services that are truly flexible and responsive to the individual needs, preferences and circumstances of each service user. This policy sets out how care is tailored and adapted to meet changing needs and individual choices.",
    scope: "Applies to all service users of [ORGANISATION_NAME] and to all staff involved in planning and delivering care and support.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Create a culture where flexibility is the norm, not the exception",
          "Ensure staffing and systems support responsiveness to individual needs",
          "Review and act on service user feedback about the flexibility of the service",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Ask service users about their preferences for daily routines and adapt where possible",
          "Avoid rigid timetabling that prioritises service convenience over individual choice",
          "Report any restriction to flexibility that cannot be resolved at practice level to the manager",
        ],
      },
    ],
    keyPoints: [
      "Service users must be able to make real choices about daily routines — when to wake, what to eat, when to bath — and these choices must be respected",
      "Inflexible rotas or working practices that prevent responsiveness to individual choices must be reviewed",
      "Some service users may need support to express their preferences — staff must facilitate this rather than making assumptions",
      "Changes in the service user's needs or preferences must be incorporated into the care plan promptly",
      "Flexibility must be balanced with consistency — service users often benefit from predictable routines and familiar staff",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 — Regulation 9",
      "Care Act 2014",
      "Mental Capacity Act 2005",
      "Human Rights Act 1998",
    ],
    sections: [
      {
        heading: "Flexibility in Practice",
        body: "At [ORGANISATION_NAME], flexibility means: service users can choose when to get up, go to bed, bathe and eat within safe operational parameters; preferences for food, clothing and activities are actively sought and respected; staffing rotas take continuity of care into account so service users see familiar faces; care plans reflect current preferences and are updated as these change; and service users can change their mind about a preference without this being a problem. Staff must actively challenge practice that prioritises routine convenience over individual choice.",
      },
    ],
  },

  "res-005": {
    purpose: "[ORGANISATION_NAME] is committed to the proactive management of hospital admissions and discharges to ensure service users receive timely care, are not admitted or kept in hospital unnecessarily, and return to the service with their needs fully understood and planned for.",
    scope: "Applies to all service users of [ORGANISATION_NAME] who are admitted to or discharged from hospital, and to all staff involved in hospital liaison.",
    responsibilities: [
      {
        role: "Registered Manager",
        duties: [
          "Designate a hospital liaison lead or responsibility for each hospital admission",
          "Ensure hospital transfer documentation is complete and timely",
          "Liaise with hospital discharge teams to plan and prepare for timely, safe discharge",
          "Track all current hospital admissions and escalate delays in discharge",
        ],
      },
      {
        role: "Care Staff",
        duties: [
          "Communicate effectively with hospital staff about the service user's care needs",
          "Accompany service users to hospital where capacity and staffing allows",
          "Prepare the service user's room and care plan for their return before discharge",
          "Debrief with the manager following every hospital discharge",
        ],
      },
    ],
    keyPoints: [
      "Every hospital admission must be followed by immediate contact from [ORGANISATION_NAME] to the admitting ward to provide a comprehensive handover",
      "The hospital transfer document must accompany every admission and must include current medication, diagnoses, care needs, advance care plan and next of kin",
      "Avoiding unnecessary hospitalisation is a quality indicator — preventable admissions must be reviewed to identify systemic causes",
      "Discharge planning should begin at admission — [ORGANISATION_NAME] should be involved in MDT discharge planning meetings",
      "Any new clinical need or medication change identified during a hospital stay must be communicated to the GP and care team before the service user returns",
    ],
    legislation: [
      "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
      "Care Act 2014",
      "Mental Capacity Act 2005",
      "NICE Guideline NG27: Transition between Inpatient Settings and Community (2015)",
    ],
    sections: [
      {
        heading: "Hospital Admission Protocol",
        body: "On a service user being admitted to hospital: (1) The duty manager must be informed immediately. (2) The hospital transfer documentation must be completed and sent with the service user. (3) Next of kin must be notified within 4 hours. (4) The ward must be contacted by the Registered Manager within 24 hours to provide a full nursing/care handover. (5) The service user's room and belongings must be maintained. (6) The Registered Manager must liaise with the ward at least every 3 days to monitor progress and plan for discharge.",
      },
      {
        heading: "Discharge Planning and Re-admission",
        body: "The Registered Manager must be notified of a planned discharge date as early as possible. Before the service user returns: update the care plan to reflect any change in needs; order any new medications; arrange any new equipment (hoist, profiling bed, pressure mattress); brief the care team on changes; and prepare the room. On return, a re-assessment of all care risks must be completed within 24 hours and the GP informed. Any service user discharged with a new diagnosis, new medication or new care need must receive an enhanced level of monitoring for the first 72 hours.",
      },
    ],
  },
};
