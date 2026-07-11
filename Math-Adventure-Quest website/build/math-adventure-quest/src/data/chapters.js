/* ==========================================================================
   CHAPTER & STAGE METADATA (the quest map)
   ========================================================================== */
window.MAQ = window.MAQ || {};

window.MAQ.stageNames = [
  { id: 1, name: "Warm-Up Trail", icon: "🥾" },
  { id: 2, name: "Puzzle Path", icon: "🧩" },
  { id: 3, name: "Skill Cave", icon: "🕯️" },
  { id: 4, name: "Challenge Tower", icon: "🗼" },
  { id: 5, name: "Crystal Mission", icon: "💎" }
];

window.MAQ.chapters = [
  {
    id: 1,
    slug: "factor-forest",
    title: "The Factor Forest",
    land: "Factor Forest",
    icon: "🌲",
    accentVar: "--chapter-1",
    pillClass: "pill-mint",
    crystalName: "Forest Crystal",
    crystalColor: "#4CBE93",
    tagline: "Track down factors, primes, and factor trees hidden among the trees.",
    topics: ["Factors & factor pairs", "Prime & composite numbers", "Prime factorization", "Factor trees & index notation"],
    questions: () => window.MAQ.data.chapter1
  },
  {
    id: 2,
    slug: "hcf-lcm-kingdom",
    title: "The HCF & LCM Kingdom",
    land: "HCF & LCM Kingdom",
    icon: "🏰",
    accentVar: "--chapter-2",
    pillClass: "pill-sky",
    crystalName: "Kingdom Crystal",
    crystalColor: "#3EA0C9",
    tagline: "Master the Highest Common Factor and Lowest Common Multiple to unlock the castle gates.",
    topics: ["Highest Common Factor (HCF)", "Lowest Common Multiple (LCM)", "Prime-factorization methods", "Real-world word problems"],
    questions: () => window.MAQ.data.chapter2
  },
  {
    id: 3,
    slug: "fraction-island",
    title: "The Fraction Island",
    land: "Fraction Island",
    icon: "🏝️",
    accentVar: "--chapter-3",
    pillClass: "pill-lavender",
    crystalName: "Island Crystal",
    crystalColor: "#8C74D6",
    tagline: "Compare, order, add and subtract fractions to cross every bridge on the island.",
    topics: ["Equivalent & simplified fractions", "Comparing & ordering fractions", "Addition & subtraction of fractions", "Fraction word problems"],
    questions: () => window.MAQ.data.chapter3
  }
];

// Helper: get all questions for a chapter grouped by stage
window.MAQ.getStageQuestions = function (chapterId, stageId) {
  var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
  if (!chapter) return [];
  return chapter.questions().filter(function (q) { return q.stageId === stageId; });
};

window.MAQ.getChapterQuestions = function (chapterId) {
  var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
  return chapter ? chapter.questions() : [];
};
