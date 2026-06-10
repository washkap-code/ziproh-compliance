/**
 * quiz-data.ts
 * ─────────────
 * Knowledge-check questions for Learning Centre modules.
 * Passing the quiz (≥80%) records a training completion and unlocks the
 * CPD certificate for modules that award one.
 */

export type QuizQuestion = {
  question: string;
  options: string[];     // exactly 4 options
  correct: number;       // index into options
};

export const PASS_MARK = 0.8; // 80%

export const QUIZZES: Record<string, QuizQuestion[]> = {
  "lrn-001": [ // Safeguarding Adults — Foundation
    {
      question: "A service user tells you, in confidence, that a staff member has been taking money from their purse. What should you do first?",
      options: [
        "Keep it confidential as they asked",
        "Confront the staff member directly",
        "Reassure them, record the facts, and report to the safeguarding lead immediately",
        "Wait to see if it happens again",
      ],
      correct: 2,
    },
    {
      question: "Which of these is a form of abuse recognised by the Care Act 2014?",
      options: [
        "Financial abuse only",
        "Physical, emotional, financial, sexual, organisational, neglect, self-neglect, domestic, modern slavery and discriminatory abuse",
        "Only physical and sexual abuse",
        "Only abuse by staff members",
      ],
      correct: 1,
    },
    {
      question: "Under Section 42 of the Care Act 2014, the local authority must:",
      options: [
        "Prosecute the alleged abuser",
        "Make enquiries (or ask others to) when an adult with care needs may be at risk of abuse or neglect",
        "Remove the adult from their home",
        "Inform the police in every case",
      ],
      correct: 1,
    },
    {
      question: "What does 'Making Safeguarding Personal' mean?",
      options: [
        "Keeping safeguarding concerns to yourself",
        "Only the manager handles safeguarding",
        "Engaging the person in decisions and focusing on the outcomes THEY want",
        "Personally investigating the concern",
      ],
      correct: 2,
    },
    {
      question: "When recording a safeguarding disclosure you should:",
      options: [
        "Record the facts in the person's own words as soon as possible, without leading questions",
        "Write a summary from memory next week",
        "Ask detailed probing questions to build a full case first",
        "Only record it if you believe the allegation",
      ],
      correct: 0,
    },
  ],

  "lrn-002": [ // Medication Administration
    {
      question: "The '6 Rights' of medication administration are:",
      options: [
        "Right person, medicine, dose, route, time, and right to refuse",
        "Right person, room, dose, day, doctor, and dosage form",
        "Right medicine, meal, time, place, person, and pharmacist",
        "Right prescription, pharmacy, pack, person, plan, and price",
      ],
      correct: 0,
    },
    {
      question: "A service user refuses their prescribed medication. You should:",
      options: [
        "Hide it in their food",
        "Respect the refusal, record it, and inform the prescriber/manager as per policy",
        "Insist until they take it",
        "Skip recording it if it's only once",
      ],
      correct: 1,
    },
    {
      question: "Covert administration of medication is only lawful when:",
      options: [
        "The person is assessed as lacking capacity, a best-interests decision is made and documented with the prescriber and pharmacist",
        "The manager is too busy to ask",
        "The family requests it verbally",
        "The person is simply being difficult",
      ],
      correct: 0,
    },
    {
      question: "A medication error has occurred. The FIRST priority is:",
      options: [
        "Completing the incident form",
        "Telling the colleague who made the error",
        "Checking the person's wellbeing and seeking medical advice if needed",
        "Updating the MAR chart",
      ],
      correct: 2,
    },
    {
      question: "Controlled drugs in a care home must be:",
      options: [
        "Kept with other medicines for convenience",
        "Stored in a CD cabinet, recorded in a CD register, and witnessed by two trained staff",
        "Handled only by the GP",
        "Counted once a month",
      ],
      correct: 1,
    },
  ],

  "lrn-003": [ // Infection Prevention & Control
    {
      question: "The single most effective way to prevent the spread of infection is:",
      options: [
        "Wearing gloves at all times",
        "Effective hand hygiene at the right moments",
        "Deep cleaning once a week",
        "Keeping windows closed",
      ],
      correct: 1,
    },
    {
      question: "When should PPE (gloves and apron) be changed?",
      options: [
        "After every shift",
        "Between each episode of care and between each service user",
        "Only when visibly soiled",
        "Once per day",
      ],
      correct: 1,
    },
    {
      question: "The 'chain of infection' is broken by:",
      options: [
        "Removing any one link — e.g. hand hygiene, cleaning, PPE, or isolation",
        "Antibiotics only",
        "Waiting for symptoms to pass",
        "Vaccination only",
      ],
      correct: 0,
    },
    {
      question: "An outbreak of diarrhoea and vomiting affects several residents. You should:",
      options: [
        "Continue group activities as normal",
        "Isolate affected residents, increase cleaning, restrict movement, and notify the manager/health protection team",
        "Send affected staff home only if they ask",
        "Wait 48 hours before acting",
      ],
      correct: 1,
    },
    {
      question: "Clinical waste (e.g. soiled dressings) should be disposed of:",
      options: [
        "In the general waste bin",
        "In the designated clinical waste stream per the waste policy",
        "Down the sluice",
        "In recycling",
      ],
      correct: 1,
    },
  ],

  "lrn-005": [ // Mental Capacity Act & DoLS
    {
      question: "The first principle of the Mental Capacity Act 2005 is:",
      options: [
        "A person must be assumed to have capacity unless it is established that they lack it",
        "Staff decide what is best",
        "Family members always decide",
        "Capacity is assessed once a year",
      ],
      correct: 0,
    },
    {
      question: "The two-stage capacity test asks:",
      options: [
        "Is the person old? Are they ill?",
        "Is there an impairment of mind or brain, and does it prevent the person making THIS decision at THIS time?",
        "Can the person read and write? Do they agree with staff?",
        "Has the GP signed a form? Has the family consented?",
      ],
      correct: 1,
    },
    {
      question: "A person with capacity makes a decision staff believe is unwise. The MCA says:",
      options: [
        "Staff can override it",
        "An unwise decision does not by itself mean the person lacks capacity",
        "The family should decide instead",
        "A DoLS application is needed",
      ],
      correct: 1,
    },
    {
      question: "A Deprivation of Liberty Safeguards (DoLS) authorisation is required when a person who lacks capacity is:",
      options: [
        "Under continuous supervision and control AND not free to leave",
        "Simply living in a care home",
        "Receiving any personal care",
        "Over 85 years old",
      ],
      correct: 0,
    },
    {
      question: "Best-interests decisions must:",
      options: [
        "Be whatever is cheapest",
        "Consider the person's wishes, feelings, beliefs, consult relevant others, and choose the least restrictive option",
        "Be made only by doctors",
        "Always follow the family's wishes",
      ],
      correct: 1,
    },
  ],

  "lrn-006": [ // Moving & Handling
    {
      question: "Before assisting a person to move you must:",
      options: [
        "Check their moving & handling risk assessment and care plan",
        "Just ask a colleague what they normally do",
        "Use the hoist for everyone to be safe",
        "Lift them manually if it is quicker",
      ],
      correct: 0,
    },
    {
      question: "Drag lifting (lifting under the arms) is:",
      options: [
        "Acceptable if two staff do it",
        "Never acceptable — it risks serious injury to the person and staff",
        "Fine in an emergency only",
        "Recommended for falls",
      ],
      correct: 1,
    },
    {
      question: "A hoist sling should be:",
      options: [
        "Shared between residents to save costs",
        "The correct type and size for the individual, checked for damage before each use",
        "Washed once a month",
        "Chosen by whoever is on shift",
      ],
      correct: 1,
    },
    {
      question: "A person falls but appears uninjured. You should:",
      options: [
        "Lift them up quickly under the arms",
        "Assess for injury first; if uninjured, encourage them to get up themselves with guidance or use appropriate equipment",
        "Leave them to rest on the floor",
        "Always call an ambulance before doing anything",
      ],
      correct: 1,
    },
    {
      question: "Under LOLER, hoists must be thoroughly examined:",
      options: [
        "Every 6 months by a competent person",
        "Every 5 years",
        "Only when they break",
        "Weekly by care staff",
      ],
      correct: 0,
    },
  ],

  "lrn-007": [ // Dementia Care Excellence
    {
      question: "A person with dementia keeps asking to 'go home' although they are home. The best response is:",
      options: [
        "Correct them firmly each time",
        "Acknowledge the feeling behind the words, offer reassurance and gentle redirection",
        "Ignore them until they stop",
        "Lock the doors and walk away",
      ],
      correct: 1,
    },
    {
      question: "Person-centred dementia care means:",
      options: [
        "Treating everyone with dementia the same way",
        "Seeing the person first — their history, preferences and abilities — not the diagnosis",
        "Focusing only on physical needs",
        "Letting the family make all decisions",
      ],
      correct: 1,
    },
    {
      question: "Behaviour that challenges (e.g. agitation) is best understood as:",
      options: [
        "Deliberate naughtiness",
        "An attempt to communicate an unmet need — pain, fear, boredom, hunger",
        "An inevitable part of dementia needing sedation",
        "Something to be ignored",
      ],
      correct: 1,
    },
    {
      question: "When communicating with a person with dementia you should:",
      options: [
        "Use short, clear sentences, allow time to respond, and reduce background noise",
        "Speak loudly and quickly",
        "Use complex questions to stimulate them",
        "Talk about them to colleagues in front of them",
      ],
      correct: 0,
    },
    {
      question: "Antipsychotic medication for distress in dementia should be:",
      options: [
        "First choice for any agitation",
        "A last resort after non-drug approaches, regularly reviewed",
        "Given covertly when convenient",
        "Decided by care staff",
      ],
      correct: 1,
    },
  ],

  "lrn-008": [ // End of Life Care
    {
      question: "Advance care planning conversations should happen:",
      options: [
        "Only in the final days of life",
        "Early, sensitively, and be revisited as the person's wishes evolve",
        "Only with the family present",
        "Never — it upsets people",
      ],
      correct: 1,
    },
    {
      question: "A ReSPECT form / DNACPR decision:",
      options: [
        "Means all treatment stops",
        "Records recommendations about emergency care, including CPR — other care and comfort continue",
        "Is signed by the family",
        "Cannot be changed once made",
      ],
      correct: 1,
    },
    {
      question: "Signs that a person may be entering the last days of life include:",
      options: [
        "Increased appetite and energy",
        "Reduced intake, increased sleepiness, changes in breathing, withdrawal",
        "Asking for more activities",
        "Improved mobility",
      ],
      correct: 1,
    },
    {
      question: "Good mouth care for a dying person is:",
      options: [
        "Unnecessary once they stop eating",
        "Essential comfort care — regular gentle moistening and cleaning",
        "Only done by nurses",
        "Done once daily at most",
      ],
      correct: 1,
    },
    {
      question: "After a death, staff should:",
      options: [
        "Follow the care plan and policy: verify per procedure, care for the body respectfully, support family, and complete records",
        "Move the body immediately themselves",
        "Inform other residents with full details",
        "Clear the room within the hour",
      ],
      correct: 0,
    },
  ],

  "lrn-009": [ // Leadership in Care
    {
      question: "A 'learning culture' in a care service means:",
      options: [
        "Blaming individuals for errors so they learn",
        "Treating incidents and feedback as opportunities to improve systems, openly and without blame",
        "Annual training only",
        "Keeping mistakes quiet to protect the service",
      ],
      correct: 1,
    },
    {
      question: "The CQC Well-Led key question primarily examines:",
      options: [
        "The size of the building",
        "Governance, leadership, culture, and how the service learns and improves",
        "Food quality",
        "Staff uniforms",
      ],
      correct: 1,
    },
    {
      question: "Effective supervision of staff should be:",
      options: [
        "A disciplinary tool only",
        "Regular, two-way, supportive, and documented — covering wellbeing, development and practice",
        "Done only when problems arise",
        "Optional for experienced staff",
      ],
      correct: 1,
    },
    {
      question: "The duty of candour requires providers to:",
      options: [
        "Be open and honest with people when things go wrong, apologise, and explain what will change",
        "Inform CQC of staff holidays",
        "Publish all complaints online",
        "Never admit fault",
      ],
      correct: 0,
    },
    {
      question: "Good governance is best evidenced by:",
      options: [
        "A locked filing cabinet",
        "Regular audits, action plans that close the loop, and visible quality improvements",
        "Having policies that nobody reads",
        "Low staff pay",
      ],
      correct: 1,
    },
  ],
};
