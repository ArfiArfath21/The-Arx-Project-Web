export const NAV = {
  brand: "ARX",
  strap: "Personal memory layer",
  links: [
    { label: "Collapse", href: "#problem", index: "01" },
    { label: "Pipeline", href: "#how-it-works", index: "02" },
    { label: "Behaviours", href: "#behaviours", index: "03" },
    { label: "Manifesto", href: "#closing", index: "04" },
  ],
} as const;

export const HERO = {
  eyebrow: "Recall Signal / Active Memory Surface",
  headline: ["The version", "of you that", "never forgets."],
  summary: [
    "Arx is a personal memory layer for people who consume a lot and remember too little.",
    "Tell it what you encounter. It remembers, connects, and gives it back when you need it.",
  ],
  supporting: [
    "Built for readers, watchers, obsessives, and rabbit-hole people.",
    "No folders. No rituals. Just a memory that actually holds.",
  ],
  orbitLabels: [
    "Books",
    "History",
    "Conversations",
    "Shows",
    "Fragments",
    "Threads",
  ],
  callouts: [
    "Signal / Capture",
    "Recall / Retrieve",
    "Thread / Connect",
  ],
} as const;

export const PROBLEM = {
  eyebrow: "Memory Collapse / Section 01",
  headline: ["You've read it.", "Watched it.", "Learned it.", "And then it's gone."],
  shards: [
    "midnight rabbit holes",
    "a vague feeling",
    "nothing usable",
    "details fade",
    "connections collapse",
    "yeah, I've seen that",
    "impressionistic memory",
    "nothing holds it",
  ],
  paragraphs: [
    "You're curious. You go deep on things — books, shows, history, rabbit holes at midnight. You genuinely enjoy learning.",
    "But ask yourself: what do you actually remember from the last book you finished? The last series you watched? The last thing you got genuinely interested in?",
    "The details fade. The connections collapse. And the next time the topic comes up in conversation, all you have is a vague feeling that you know something about it — but nothing you can actually use.",
    "It's not that you're not paying attention. It's that nothing holds it for you.",
    "Note-taking apps ask too much. Second brain tools are built for people who already have perfect systems. And your memory — impressionistic, intuitive, and completely human — doesn't play well with folders and tags.",
  ],
  quote:
    "I've watched so much, read so much — but in conversation it always ends at 'yeah, I've seen that.' There's nothing I can actually bring.",
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "Memory Pipeline / Section 02",
  headline: "Tell Arx what you encounter. It does the rest.",
  intro:
    "The flow is simple on purpose: intake what feels natural, map what matters, recall it when the moment arrives.",
  stages: [
    {
      number: "01",
      label: "Capture",
      title: "Capture anything, your way",
      description:
        "Send a voice note after finishing a chapter. Text a keyword mid-rabbit hole. Send a photo of your handwritten notes. Arx accepts whatever you naturally produce — no structured format required.",
      signal: "Voice / text / image",
      details: [
        "No rigid template",
        "Fast enough for the moment itself",
        "Built for messy human input",
      ],
    },
    {
      number: "02",
      label: "Map",
      title: "Arx builds your memory",
      description:
        "Every input gets processed — entities extracted, topics identified, connections mapped. Not stored as a blob of text. Stored as something Arx actually understands.",
      signal: "Entities / topics / links",
      details: [
        "Turns notes into structure",
        "Finds connections you would miss later",
        "Stores context instead of clutter",
      ],
    },
    {
      number: "03",
      label: "Retrieve",
      title: "Retrieve it when it matters",
      description:
        "Ask Arx what you know about something. Get back your own context, your own words, with the connections you might have forgotten you made. In the moment, in the conversation, when it actually counts.",
      signal: "Recall / context / timing",
      details: [
        "Returns your memory in usable form",
        "Brings back the thread, not just the source",
        "Made for conversation, thought, and reuse",
      ],
    },
  ],
} as const;

export const CORE_BEHAVIOURS = {
  eyebrow: "System Board / Section 03",
  headline: "Four things Arx does. Nothing ornamental.",
  intro:
    "Each behaviour holds a specific role in the system: intake, recall, connection, and resurfacing.",
  behaviours: [
    {
      id: "capture",
      kicker: "Intake Layer",
      title: "Capture",
      description:
        "You send it. Arx acknowledges it, extracts what matters, and stores it. Voice, text, image — all treated the same.",
      signal: "Any format. Any moment.",
    },
    {
      id: "recall",
      kicker: "Recall Layer",
      title: "Active Recall",
      description:
        'Ask "what do I know about X?" and get back your own logged context — with dates, sources, and connections — composed into something actually usable.',
      signal: "Context instead of guesswork.",
    },
    {
      id: "thread",
      kicker: "Thread Layer",
      title: "Thread",
      description:
        "When something you log connects to something you've logged before, Arx tells you. Automatically. No searching required.",
      signal: "The system spots the pattern.",
      example:
        "This connects to what you noted about the Kaiser's centralised authority — same pattern of fragile structures collapsing under pressure.",
    },
    {
      id: "brief",
      kicker: "Resurfacing Layer",
      title: "Daily Brief",
      description:
        "Every morning, a short summary of what's in your memory — what you logged recently, what connects to what, what you might want to revisit. Readable in under a minute.",
      signal: "A readable pulse, once a day.",
    },
  ],
} as const;

export const CLOSING = {
  eyebrow: "Closing Signal / Section 04",
  headline: [
    "Your curiosity",
    "deserves better",
    "than forgetting.",
  ],
  body: "Arx is being built as a personal tool first — by someone who reads a lot, watches a lot, and remembers too little. If that sounds familiar, you're exactly who this is for.",
  notes: [
    "No second-brain cosplay.",
    "No dashboard theatre.",
    "Just your memory held in place long enough to use.",
  ],
} as const;

export const FOOTER = {
  text: `© ${new Date().getFullYear()} The Arx Project`,
  tag: "Memory, held in tension.",
} as const;
