// Ziproh Compliance — 2026 Expansion Set H (Easy Read & Service User Information)
// All content original. Written to Easy Read conventions: short sentences, one idea
// per line, key words in bold, hard words explained, picture cues marked for the
// illustrated editions. These are service-user-facing companions to the staff policies.

import type { Document, DocumentContent } from "./documents";

export const EXPANSION_2026H_DOCS: Document[] = [
  {
    id: "su-001",
    title: "Easy Read — How to Make a Complaint",
    category: "Responsive", subcategory: "Easy Read & Service User Information", keyQuestion: "Responsive",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-16", status: "updated", readTime: 5,
    tags: ["easy read", "complaints", "service user information", "accessible", "large print"],
    summary: "The Easy Read companion to the Complaints policy (res-001/pc-013), written for the people we support: what a complaint is, how to make one, who can help, what happens next, and the promise that complaining never makes care worse. Print-ready as a large-print leaflet.",
  },
  {
    id: "su-002",
    title: "Easy Read — Keeping Safe from Abuse",
    category: "Safe", subcategory: "Easy Read & Service User Information", keyQuestion: "Safe",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-16", status: "updated", readTime: 5,
    tags: ["easy read", "safeguarding", "abuse", "keeping safe", "accessible", "large print"],
    summary: "The Easy Read companion to the Safeguarding policy (saf-001), for the people we support: what abuse is in plain words, that it is never your fault, who to tell, what will happen when you tell, and the numbers to call. Print-ready as a large-print leaflet.",
  },
  {
    id: "su-003",
    title: "Easy Read — Your Care Service: What to Expect",
    category: "Caring", subcategory: "Easy Read & Service User Information", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-16", status: "updated", readTime: 6,
    tags: ["easy read", "service user guide", "what to expect", "accessible", "large print"],
    summary: "An Easy Read mini service-user guide: who we are, what good care from us looks like, who will come and how you will know them, your care plan in plain words, and how to change things you do not like. A bridge until the full interactive Service User Guide builder ships.",
  },
  {
    id: "su-004",
    title: "Easy Read — Your Rights and Choices",
    category: "Caring", subcategory: "Easy Read & Service User Information", keyQuestion: "Caring",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-16", status: "updated", readTime: 5,
    tags: ["easy read", "rights", "choices", "advocacy", "accessible", "large print"],
    summary: "The Easy Read rights leaflet: your home and your day belong to you, you can say no, you can take risks you choose, you can see your own information, you can have visitors and relationships, and an advocate can speak up with you. Companion to the dignity, choice and advocacy policies.",
  },
  {
    id: "su-005",
    title: "Easy Read — Your Information and Privacy",
    category: "Well-Led", subcategory: "Easy Read & Service User Information", keyQuestion: "Well-Led",
    serviceTypes: ["All"], regulators: ["CQC", "CI", "CIW", "RQIA"],
    version: "1.0", lastUpdated: "2026-07-16", status: "updated", readTime: 5,
    tags: ["easy read", "privacy", "information", "records", "accessible", "large print"],
    summary: "The Easy Read privacy leaflet: what we write about you and why, who is allowed to see it, who is not, how to see your own records, and what to do if something is wrong. Companion to the records and confidentiality policies (wl-024/igr-002).",
  },
];

export const EXPANSION_2026H_CONTENT: Record<string, DocumentContent> = {
  "su-001": {
    purpose: "This leaflet is for you.\n\nIt tells you how to make a complaint.\n\nA complaint is when you tell us something is wrong.\n\n[Picture: a person talking to a staff member, being listened to]",
    scope: "This leaflet is written in Easy Read.\n\nShort sentences. One idea at a time.\n\nYou can ask for it in large print, another language, braille, or as a recording.\n\nSomeone can read it with you. Just ask.",
    responsibilities: [
      { role: "Who can help you complain", duties: [
        "Any staff member. You can tell anyone who works here. They will help you",
        "The manager. Their name is on the notice board. You can ask to see them",
        "Your family or a friend. They can complain for you if you say it is okay",
        "An advocate. An advocate is a person whose job is to speak up for you. They are free. They do not work for us. Ask us and we will help you find one" ] },
    ],
    keyPoints: [
      "You can complain about anything that is wrong. Big things and small things",
      "Complaining is always okay. You will NOT get in trouble",
      "Your care will NOT get worse because you complained. That is a promise",
      "You can tell us by talking. You do not have to write anything",
      "You can ask someone to help you. Family, a friend, staff, or an advocate",
      "We will tell you what we found out and what we changed",
      "If you are not happy with our answer, you can go to the Ombudsman. The Ombudsman checks complaints. They are free and they do not work for us",
    ],
    sections: [
      { heading: "What is a complaint?", body: "A complaint is telling us something is wrong.\n\nMaybe your care was late.\nMaybe someone was not kind.\nMaybe your food was not right.\nMaybe something else upset you.\n\nAll of these are okay to complain about.\n\n[Picture: thought bubbles showing a clock, a meal, a sad face]" },
      { heading: "How do I complain?", body: "You can tell any staff member. Talking is enough.\n\nYou can ask to see the manager.\n\nYou can phone the office. The number is on your information sheet.\n\nYou can write it down or ask someone to write it for you.\n\nYou can ask your family, a friend or an advocate to complain for you.\n\n[Picture: a person speaking; a telephone; a pen and paper]" },
      { heading: "What happens next?", body: "1. We will say thank you for telling us.\n\n2. We will write down what you said. We will check we understood you right.\n\n3. We will look into it properly. This can take a few weeks. We will keep you told.\n\n4. We will tell you what we found out. We will say sorry if we got something wrong. We will tell you what we changed.\n\n[Picture: a calendar; a person explaining with a letter]" },
      { heading: "Will I get in trouble?", body: "No. Never.\n\nComplaining is your right.\n\nStaff will still be kind to you.\nYour care will stay just as good.\n\nIf anyone is unkind to you because you complained, that is very serious. Tell the manager straight away. Or tell someone you trust.\n\n[Picture: a shield; a smiling carer]" },
      { heading: "What if I am still not happy?", body: "You can ask the Ombudsman to look at your complaint.\n\nThe Ombudsman is free.\nThe Ombudsman does not work for us.\nThey check if we dealt with your complaint fairly.\n\nWe will give you their phone number and address when we answer your complaint. You can also ask us for it any time.\n\nYou can also tell the Care Quality Commission (CQC). They check care services. Telling them is always allowed.\n\n[Picture: a magnifying glass over a letter; official building]" },
    ],
    appendices: [
      { title: "My complaint — a page to fill in (someone can help you)", type: "form", body:
"My name: ______________________\n\nWhat went wrong (your words): ______________________\n\nWhen did it happen? ______________________\n\nWho have you told already? ______________________\n\nWhat would make it better? ______________________\n\nDo you want someone with you when we talk about it? YES / NO\nWho? ______________________\n\nGive this page to any staff member, or post it to the office.\nWe will contact you within 3 working days." },
    ],
  },
  "su-002": {
    purpose: "This leaflet is about keeping safe.\n\nSometimes people hurt other people. This is called abuse.\n\nAbuse is always wrong.\n\nThis leaflet tells you what abuse is and who to tell.\n\n[Picture: a protective umbrella over a person]",
    scope: "This leaflet is written in Easy Read.\n\nYou can ask for it in large print, another language, braille, or as a recording.\n\nSomeone you trust can read it with you.",
    responsibilities: [
      { role: "People you can tell", duties: [
        "Any staff member you trust",
        "The manager",
        "Your family or a friend",
        "An advocate — a person whose job is to speak up for you. They are free",
        "The council's safeguarding team. Safeguarding means keeping people safe. Their number is on the notice board",
        "The police. If you are in danger right now, call 999" ] },
    ],
    keyPoints: [
      "Abuse is when someone hurts you or treats you badly. It is ALWAYS wrong",
      "It is NEVER your fault",
      "Abuse can be hitting or hurting your body",
      "Abuse can be shouting, laughing at you, or calling you names",
      "Abuse can be someone taking your money or your things",
      "Abuse can be touching you in ways you do not want",
      "Abuse can be not giving you the care you need",
      "Anyone can be an abuser. Even family. Even staff. Even friends",
      "If you tell us, we will listen and we will believe you. We will help you be safe",
      "If you are in danger NOW, call 999",
    ],
    sections: [
      { heading: "What is abuse?", body: "Abuse is when someone hurts you or treats you badly.\n\nHitting, pushing or rough handling. [Picture: a raised hand crossed out]\n\nShouting at you, calling you names, making you feel small. [Picture: an angry speech bubble crossed out]\n\nTaking your money or your things. [Picture: a purse with a cross]\n\nTouching you in ways you do not want. Any touch you do not want is wrong. [Picture: a hand and a stop sign]\n\nNot giving you your food, your medicine, or your care. [Picture: an empty plate with a cross]\n\nAll abuse is wrong. Every kind." },
      { heading: "It is not your fault", body: "If someone abuses you, it is NOT your fault.\n\nIt does not matter who they are.\nIt does not matter what they say.\n\nAbusers sometimes say 'keep it secret'.\nAbusers sometimes say 'no one will believe you'.\n\nThose things are not true.\n\nWe WILL believe you.\nTelling is always the right thing to do.\n\n[Picture: a person with a heart; a crossed-out padlock on lips]" },
      { heading: "Who do I tell?", body: "Tell someone you trust.\n\nAny staff member. The manager. Your family. A friend. An advocate.\n\nYou can also ring the council's safeguarding team yourself. Their job is keeping people safe.\n\nIf you are in danger right now, call 999 and ask for the police.\n\nIf the person hurting you works here, you can still tell us. You can also tell the council or the CQC instead if that feels safer. That is okay.\n\n[Picture: trusted people — carer, family member, advocate; a telephone with 999]" },
      { heading: "What happens when I tell?", body: "1. We will listen. We will believe you.\n\n2. We will make sure you are safe today.\n\n3. We will tell the people whose job is to help. This is called safeguarding. We have to tell them — it is how we keep you safe. We will tell you who we are telling.\n\n4. You will be asked what YOU want to happen. Your wishes matter the most.\n\n5. Nobody is allowed to be unkind to you for telling. Ever.\n\n[Picture: a listening ear; a safety chain of people holding hands]" },
    ],
    appendices: [
      { title: "Keeping safe — numbers to keep", type: "template", body:
"Fill this in with a staff member and keep it somewhere easy to find.\n\nThe manager here: name ____________ phone ____________\n\nThe council safeguarding team: phone ____________\n\nMy advocate (if I have one): name ____________ phone ____________\n\nSomeone I trust: name ____________ phone ____________\n\nThe police:\n– Danger right now: 999\n– Not an emergency: 101\n\nCare Quality Commission (CQC): 03000 616161\n\nIf you cannot use a phone, show this leaflet to someone and point to who you want." },
    ],
  },
  "su-003": {
    purpose: "This leaflet tells you about your care service.\n\nIt says what you can expect from us.\n\nIt says what to do if something is not right.\n\n[Picture: a friendly carer and a person smiling together]",
    scope: "This leaflet is written in Easy Read.\n\nYou can ask for it in large print, another language, braille, or as a recording.\n\nWhen you join us, someone will go through it with you.",
    responsibilities: [
      { role: "People you will meet", duties: [
        "Care workers. They help you day to day. They wear ID badges with their name and photo",
        "The manager. They are in charge. You can always ask to speak to them",
        "Sometimes new staff. We will tell you before someone new comes. They will always show their badge",
        "Never let anyone in without a badge. Real staff are happy to wait while you check. Ring the office to check any time" ] },
    ],
    keyPoints: [
      "You will be treated with kindness and respect. Always",
      "Your care plan says what help you get. It is YOUR plan. You helped write it",
      "Staff will come when they are meant to. If they are running late, we will tell you",
      "Staff will show their ID badge every time. Check it. Real staff never mind",
      "Your home and your things belong to you. Staff are guests",
      "You choose your day. When to get up. What to eat. What to do",
      "If you do not like something, tell us. We will try to change it",
      "Your private things stay private",
    ],
    sections: [
      { heading: "Your care plan", body: "Your care plan is about you.\n\nIt says what help you want and need.\nIt says when we come and what we do.\nIt has your likes and dislikes in it.\n\nYou helped make it. You can see it any time.\n\nIf your needs change, the plan changes too. Just tell us.\n\nWe check the plan with you regularly. You can bring anyone you like to that meeting.\n\n[Picture: a folder with a person's photo on it; two people looking at it together]" },
      { heading: "When staff visit or help you", body: "Staff will:\n– Say hello and use your name.\n– Show their ID badge.\n– Knock and wait before coming in.\n– Ask before touching or helping.\n– Do the things in your care plan.\n– Ask what you want, not just decide.\n– Leave your home tidy and locked the way you like.\n\nStaff will NOT:\n– Rush you.\n– Talk over you or about you as if you are not there.\n– Borrow money or take gifts.\n– Share your private things with other people.\n\n[Picture: an ID badge; a hand knocking on a door]" },
      { heading: "If something is not right", body: "Tell us. We want to know.\n\nSmall things and big things. Both matter.\n\nYou can tell any staff member, or the manager, or your family, or an advocate.\n\nThere is an Easy Read leaflet about complaints. Ask for it. (It is called 'How to Make a Complaint'.)\n\nIf you ever feel scared or someone hurts you, there is a leaflet called 'Keeping Safe from Abuse'. Ask for it. Or just tell someone you trust straight away.\n\n[Picture: a person telling a carer; a leaflet]" },
      { heading: "Changing or stopping your service", body: "You are in charge of your care.\n\nYou can ask for changes. Different times. Different help.\n\nYou can ask for a different care worker if you are not comfortable. You do not have to say why.\n\nYou can stop using our service. We will help you plan what comes next so you are safe.\n\nNothing bad happens for asking. Ever.\n\n[Picture: a person pointing at choices; a thumbs up]" },
    ],
    appendices: [
      { title: "My important information — keep this page", type: "template", body:
"The office phone number: ____________\n\nOut of hours (evenings and weekends): ____________\n\nThe manager's name: ____________\n\nMy usual care workers: ____________\n\nWhen my visits are: ____________\n\nMy advocate (if I have one): ____________\n\nWhere my care plan is kept: ____________\n\nIf a stranger comes to the door saying they are from us:\nAsk to see their badge. Ring the office to check. Real staff are happy to wait." },
    ],
  },
  "su-004": {
    purpose: "This leaflet is about your rights.\n\nRights are things you are allowed. The law protects them.\n\nGetting care does not take your rights away.\n\n[Picture: a person standing tall with a certificate/scroll]",
    scope: "This leaflet is written in Easy Read.\n\nYou can ask for it in large print, another language, braille, or as a recording.",
    responsibilities: [
      { role: "People who help protect your rights", duties: [
        "You. Your voice comes first",
        "Staff and the manager. It is our job to respect your rights every day",
        "An advocate. An advocate speaks up for you. They are free and independent. Ask us to help you find one",
        "Your family and friends, if you want them involved. It is your choice who is involved" ] },
    ],
    keyPoints: [
      "You can make your own choices. Your day belongs to you",
      "You can say NO. To care, to visits, to anything. Saying no is allowed",
      "You can take risks you choose. Like anyone else. We will help you do things safely instead of stopping you",
      "You can have visitors when you want. Your friends and family are welcome",
      "You can have relationships. Love and friendship are your right",
      "You can follow your religion and culture. We will help",
      "You can see your own records. They are about you",
      "You can spend your own money on what you like",
      "You can complain and nothing bad will happen",
      "If deciding is hard, you get help to decide. People only decide FOR you when the law says you cannot, and then they must do what is best for you and what you would have wanted",
    ],
    sections: [
      { heading: "Your choices", body: "You choose:\n– When to get up and go to bed.\n– What to wear and what to eat.\n– What to do with your day.\n– Who comes into your room or home.\n– What happens with your money.\n\nStaff are there to help with YOUR choices.\nNot to make choices for you.\n\nIf staff and you disagree, staff can say what they think. But the choice is yours.\n\n[Picture: a person choosing between clothes; a menu; a clock]" },
      { heading: "Saying no", body: "You are allowed to say no.\n\nNo to a bath today.\nNo to a visit.\nNo to medicine. (We will explain why it matters, and we may ask the doctor to talk with you. But forcing you is not allowed.)\n\nIf you say no, staff must listen.\n\nStaff might ask again later or explain more. That is okay. Bullying you into yes is NOT okay.\n\n[Picture: a person holding up a hand — stop; a respectful carer nodding]" },
      { heading: "Help with big decisions", body: "Some decisions are hard.\n\nYou can have help:\n– Information in words you understand.\n– Time to think.\n– Someone you trust with you.\n– An advocate.\n\nIf the law says you cannot make a certain decision, the people deciding must:\n– Do what is best for you.\n– Think about what you would have wanted.\n– Ask the people who know you.\n– Choose the thing that takes away the least freedom.\n\nAnd you must still be involved as much as possible. It is still your life.\n\n[Picture: two people talking through pictures/cards; a lightbulb]" },
      { heading: "An advocate", body: "An advocate is a person whose job is to speak up for you.\n\nThey are free.\nThey do not work for us. They only work for you.\n\nAn advocate can:\n– Help you say what you want.\n– Come to meetings with you.\n– Help you complain.\n– Make sure people listen to you.\n\nAsk any staff member to help you get an advocate. We will always help. We will never be cross that you asked.\n\n[Picture: an advocate standing beside a person, megaphone in hand]" },
    ],
    appendices: [
      { title: "My rights — a card to keep", type: "template", body:
"I can make my own choices.\nI can say NO.\nI can see my own records.\nI can have visitors and relationships.\nI can follow my religion and culture.\nI can spend my money how I like.\nI can complain safely.\nI can have an advocate — free — by asking.\n\nIf I think my rights are not being respected:\nTell any staff member, the manager, my family, or my advocate.\nOr ring the CQC: 03000 616161.\n\n(Ask us to print this page in large print to keep in your room or your folder.)" },
    ],
  },
  "su-005": {
    purpose: "This leaflet is about your information.\n\nWe write things down about you. This leaflet says why, and who can see it.\n\nYour information belongs to you.\n\n[Picture: a folder with a lock; a person holding a key]",
    scope: "This leaflet is written in Easy Read.\n\nYou can ask for it in large print, another language, braille, or as a recording.",
    responsibilities: [
      { role: "Who looks after your information", duties: [
        "Staff write notes about your care. Only what is needed",
        "The manager makes sure your information is kept safe",
        "Only people who help with your care can see your records",
        "You can see your own records. Just ask" ] },
    ],
    keyPoints: [
      "We write down your care so everyone helping you knows what you need",
      "Your records are kept safe and locked (paper) or protected (computer)",
      "Only people who need to know can see them. Like your care workers, your doctor, your nurse",
      "We do NOT share your information with just anyone. Not neighbours. Not visitors. Not family — unless you say yes",
      "You can see your own records any time. Ask and we will show you",
      "If something in your records is wrong, tell us. We will fix it",
      "Sometimes the law says we must share — like keeping you or someone else safe. We will tell you when we do",
      "Staff never put you on their own phones or the internet. No photos without asking you properly",
    ],
    sections: [
      { heading: "What we write and why", body: "We write down:\n– The help you get each visit or each day.\n– Your medicines.\n– How you are feeling.\n– Anything the next care worker needs to know.\n\nWhy? So your care is safe.\nSo the next person helping you knows what you need.\nSo the doctor has the right facts if you are unwell.\n\nWe write respectfully. You can read it.\n\n[Picture: a care worker writing in a folder; a nurse reading it]" },
      { heading: "Who can see it — and who cannot", body: "CAN see your records:\n– Care workers who help you.\n– The manager.\n– Your doctor and nurse, when they need to.\n– You. Always.\n\nCANNOT see your records:\n– Neighbours.\n– Visitors.\n– Other people we care for.\n– Your family — UNLESS you say it is okay, or the law lets them because they make decisions for you.\n\nIf someone asks us about you, we say: 'You would have to ask them.' Even when the person asking is kind.\n\n[Picture: a green tick group and a red cross group]" },
      { heading: "Seeing your own records", body: "You can see your records. They are about you.\n\nAsk any staff member or the manager.\n\nYou can have someone with you to help read them.\nYou can ask for parts in large print or read aloud.\n\nIf something is wrong — a mistake — tell us. We will correct it. We are not allowed to hide the mistake. We fix it in a way that shows what changed.\n\nIf you want copies, ask. It is free.\n\n[Picture: a person reading their own folder with a helper]" },
      { heading: "When we have to share", body: "Sometimes the law says we must share your information.\n\nMainly this is to keep people safe:\n– If you are being hurt.\n– If someone else is in danger.\n– If a court tells us to.\n\nWhen we share, we share only what is needed.\nWe will tell you, unless telling you would put someone in danger.\n\nIf you are worried about your information, tell the manager. You can also talk to the Information Commissioner (ICO) — they check that organisations look after information properly. We can give you their number.\n\n[Picture: a shield; a set of scales]" },
    ],
    appendices: [
      { title: "Your information — quick answers", type: "template", body:
"Can I see my records? YES — just ask.\nCan I get help reading them? YES.\nCan I have copies? YES — free.\nCan my family see them? ONLY if you say yes (or the law lets them decide for you).\nCan staff photograph me on their phones? NO — never on their own phones.\nWhat if something is wrong in my records? Tell us — we will fix it properly.\nWho checks we behave? The ICO (information watchdog) and the CQC.\n\nWorried about your information?\nTell the manager: ____________\nOr ask us for the ICO's phone number." },
    ],
  },
};
