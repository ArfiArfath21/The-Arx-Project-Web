export const NAV = {
  brand: "The Arx Project",
  links: [
    { label: "Problem", href: "#problem" },
    { label: "System", href: "#how-it-works" },
    { label: "Behaviours", href: "#behaviours" },
  ],
} as const;

export const HERO = {
  eyebrow: "Personal memory layer",
  headline: "The version of you that never forgets.",
  subheadline:
    "Arx is a personal memory layer. Tell it what you encounter. It remembers, connects, and gives it back to you when you need it.",
  supporting: "For curious people who consume a lot and remember too little.",
  rail: [
    { label: "Input", value: "Voice, text, image" },
    { label: "Mode", value: "Private by default" },
    { label: "Use case", value: "Real recall in conversation" },
  ],
  signals: [
    {
      stamp: "01",
      title: "Capture",
      text: "A chapter finished. A rabbit hole opened. A line worth keeping.",
    },
    {
      stamp: "02",
      title: "Thread",
      text: "Patterns connect before memory has the chance to flatten them.",
    },
    {
      stamp: "03",
      title: "Recall",
      text: "Ask what you know and get back something you can actually use.",
    },
  ],
} as const;

export const PROBLEM = {
  eyebrow: "Why it disappears",
  headline: "You've read it. Watched it. Learned it. And then it's gone.",
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
  eyebrow: "System",
  headline: "Tell Arx what you encounter. It does the rest.",
  steps: [
    {
      number: 1,
      title: "Capture anything, your way",
      description:
        "Send a voice note after finishing a chapter. Text a keyword mid-rabbit hole. Send a photo of your handwritten notes. Arx accepts whatever you naturally produce — no structured format required.",
    },
    {
      number: 2,
      title: "Arx builds your memory",
      description:
        "Every input gets processed — entities extracted, topics identified, connections mapped. Not stored as a blob of text. Stored as something Arx actually understands.",
    },
    {
      number: 3,
      title: "Retrieve it when it matters",
      description:
        "Ask Arx what you know about something. Get back your own context, your own words, with the connections you might have forgotten you made. In the moment, in the conversation, when it actually counts.",
    },
  ],
} as const;

export const CORE_BEHAVIOURS = {
  eyebrow: "Capabilities",
  headline: "Four things Arx does — and nothing else.",
  behaviours: [
    {
      title: "Capture",
      description:
        "You send it. Arx acknowledges it, extracts what matters, and stores it. Voice, text, image — all treated the same.",
    },
    {
      title: "Active Recall",
      description:
        'Ask "what do I know about X?" and get back your own logged context — with dates, sources, and connections — composed into something actually usable.',
    },
    {
      title: "Thread",
      description:
        "When something you log connects to something you've logged before, Arx tells you. Automatically. No searching required.",
      example:
        "This connects to what you noted about the Kaiser's centralised authority — same pattern of fragile structures collapsing under pressure.",
    },
    {
      title: "Daily Brief",
      description:
        "Every morning, a short summary of what's in your memory — what you logged recently, what connects to what, what you might want to revisit. Readable in under a minute.",
    },
  ],
} as const;

export const CLOSING = {
  eyebrow: "Final note",
  headline: "Your curiosity deserves better than forgetting.",
  body: "Arx is being built as a personal tool first — by someone who reads a lot, watches a lot, and remembers too little. If that sounds familiar, you're exactly who this is for.",
} as const;

export const FOOTER = {
  text: `© ${new Date().getFullYear()} The Arx Project`,
} as const;
