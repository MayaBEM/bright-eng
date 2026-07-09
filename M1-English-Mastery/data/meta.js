/* ============================================================
   M.1 English Entrance Exam Mastery — Set metadata
   Loaded before set1..set7.js. Questions live in those files.
   ============================================================ */
window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.meta = {
  productTitle: "M.1 English Entrance Exam Mastery",
  productSubtitle: "Seven Interactive English Practice Tests for Competitive M.1 Admission",
  credit: "Created by Bright EngMath — English and Mathematics Learning Resources",
  recommendedMinutes: 30,
  sets: [
    {
      id: 1, name: "Foundation Plus", difficulty: "Foundation",
      tagline: "Build a strong, exam-ready base.",
      skills: ["Core tenses", "Everyday vocabulary", "Polite conversation", "Error spotting", "Reading for detail"],
      color: "#3b82f6"
    },
    {
      id: 2, name: "Intermediate Entrance Practice", difficulty: "Intermediate",
      tagline: "Step up to real entrance-exam questions.",
      skills: ["Perfect tenses", "Collocations", "Making suggestions", "Cloze completion", "Main idea"],
      color: "#0ea5e9"
    },
    {
      id: 3, name: "Upper-Intermediate Challenge", difficulty: "Upper-Intermediate",
      tagline: "Sharpen grammar and inference.",
      skills: ["Passive & relatives", "Academic vocabulary", "Online communication", "Linking words", "Inference"],
      color: "#8b5cf6"
    },
    {
      id: 4, name: "Competitive School Practice", difficulty: "Competitive",
      tagline: "Practise at competitive-school level.",
      skills: ["Conditionals", "Phrasal verbs", "Group projects", "Error identification", "Author's purpose"],
      color: "#f59e0b"
    },
    {
      id: 5, name: "Gifted and EP Challenge", difficulty: "Gifted / EP",
      tagline: "Designed for gifted & EP applicants.",
      skills: ["Reported speech", "Nuanced vocabulary", "Diplomatic language", "Error ID", "Deep inference"],
      color: "#ec4899"
    },
    {
      id: 6, name: "Advanced Entrance Simulation", difficulty: "Advanced",
      tagline: "A full advanced exam simulation.",
      skills: ["Inversion & parallelism", "Media vocabulary", "Formal register", "Pronoun reference", "Conclusion"],
      color: "#ef4444"
    },
    {
      id: 7, name: "Final Mastery Examination", difficulty: "Mastery",
      tagline: "Prove you are entrance-exam ready.",
      skills: ["Future perfect & mixed", "Science vocabulary", "Interview English", "Mixed cloze/error", "Synthesis"],
      color: "#14b8a6"
    }
  ]
};

/* Section display metadata */
window.QUIZ_DATA.sectionMeta = {
  grammar:      { label: "Grammar & Language Use", short: "Grammar", icon: "grammar", color: "#3b82f6" },
  vocabulary:   { label: "Vocabulary in Context",  short: "Vocabulary", icon: "vocab", color: "#8b5cf6" },
  conversation: { label: "Conversation & Functional Language", short: "Conversation", icon: "chat", color: "#f59e0b" },
  cloze:        { label: "Cloze / Error Identification", short: "Cloze / Error", icon: "cloze", color: "#14b8a6" },
  reading:      { label: "Reading Comprehension", short: "Reading", icon: "reading", color: "#ec4899" }
};
