/* =====================================================================
   EMC.content — static copy for Landing, About, Terms, Teacher Guide.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};

  EMC.content = {
    headline: "English Memory Check",
    subtitle: "Review, remember, and build confidence through vocabulary, grammar, reading, listening, and conversation.",
    intro:
      "English Memory Check is a review and test-preparation resource for students at approximately Primary 4–5 level. " +
      "It is designed for one simple purpose: to check what a student still remembers after a break from studying — " +
      "and to build that memory back up with clear, friendly explanations for every question.",
    features: [
      { icon: "📚", title: "3 Levels", desc: "Easy, Medium, and Challenging tests that build in difficulty." },
      { icon: "✏️", title: "75 Questions", desc: "25 original questions in every test — never repeated, never copied." },
      { icon: "🧩", title: "5 English Skills", desc: "Vocabulary, grammar, reading, listening, and conversation in every test." },
      { icon: "💡", title: "Instant Explanations", desc: "Every question includes a clear, child-friendly explanation." },
      { icon: "🎧", title: "Listening Practice", desc: "Built-in audio with play and replay controls for every listening task." },
      { icon: "📈", title: "Progress Tracking", desc: "Scores are saved on this device so progress builds over time." }
    ],
    objectives: [
      "Recall everyday vocabulary from familiar topics: family, school, daily routines, places, food, activities, and feelings.",
      "Use possessive ’s correctly to show ownership, and tell it apart from a simple plural.",
      "Use was and were correctly in positive, negative, and question forms, in real-life situations.",
      "Understand short original reading passages and answer who/what/where/when/why and sequencing questions.",
      "Listen to short original audio and answer questions about details, order, and meaning.",
      "Choose natural, polite responses in everyday conversations.",
      "Follow common test instructions and apply grammar and vocabulary knowledge in context."
    ],
    studentInstructions: [
      "Choose a test from your Dashboard. You can take the tests in any order, but Easy → Medium → Challenging works well.",
      "Read each question carefully. Some questions include a short passage or an audio clip — read or listen before choosing your answer.",
      "Tap or click your answer, then press Submit Answer.",
      "Use Previous and Next to move between questions. You can change an answer before you submit the whole test.",
      "When you reach the end, you'll see a Final Review screen showing every question. Check it over, then press Submit Test.",
      "After submitting, you'll see your score, a skill-by-skill breakdown, and a full answer review with explanations.",
      "There is no countdown timer unless your teacher turns one on — take your time and think it through."
    ],
    aboutBody:
      "English Memory Check is an original resource created for students learning English with an international/EP-style " +
      "curriculum at approximately Primary 4–5 level. It was built to answer one question clearly: what does a student " +
      "still remember after roughly two weeks away from lessons? Every question, reading passage, listening script, and " +
      "explanation on this site is original writing — none of the content is copied from any textbook or publisher. " +
      "The resource is equally suited to independent review at home and to classroom or tutoring use, and it includes a " +
      "separate Teacher Mode with settings for feedback, timing, randomization, and printable reports.",
    aboutIncludes: [
      "3 complete test sets (Easy, Medium, Challenging) with 25 original questions each — 75 questions in total.",
      "Every skill area required for this level: vocabulary, possessive ’s, was/were, sentence structure, reading, listening, and conversation.",
      "Instant, child-friendly explanations for every question, whether the answer is correct or not.",
      "A results dashboard with scores, skill breakdowns, and simple, encouraging performance bands.",
      "A Teacher Mode with an answer key, printable reports, and settings that do not require any account or backend."
    ],
    termsBody: [
      "This resource, English Memory Check, is provided for classroom, tutoring, and home-study use.",
      "A single purchased copy may be used by one teacher or tutor with their own students, or by one family for their own children, unless a separate license has been agreed.",
      "You may print result summaries and answer keys for use with your own students or children.",
      "You may not resell, redistribute, or republish this resource (in whole or in part) as your own product, and you may not share the source files outside your own classroom, tutoring practice, or family.",
      "All questions, reading passages, listening scripts, explanations, and visual design in this resource are original work and are not affiliated with, or copied from, any third-party textbook or publisher.",
      "Progress and scores are stored only in the browser being used (localStorage) and are not uploaded anywhere — clearing browser data will remove them."
    ],
    teacherGuideIntro:
      "Teacher Mode gives you classroom-style controls without needing an account, a login, or an internet connection. " +
      "Everything is stored locally in the browser you're using.",
    teacherGuideSteps: [
      { title: "Open Teacher Mode", body: "Use the 'Teacher' link in the footer or navigation. There is no password by default — this is a settings panel, not a security feature." },
      { title: "Choose feedback style", body: "Turn Instant Feedback on for a supportive, learn-as-you-go experience, or off if you want students to see results only at the end (better for formal check-ins)." },
      { title: "Set a timer (optional)", body: "There is no timer by default. Turn Teacher Timer on and set minutes per level if you want timed practice." },
      { title: "Control listening replays", body: "Set how many times a student may replay each audio clip (or choose unlimited)." },
      { title: "Randomize for retakes", body: "Turn on question and/or answer-choice randomization so repeat attempts feel fresh and reduce answer-memorizing." },
      { title: "Review results", body: "View each test's attempts, best score, and skill breakdown, or open the full Answer Key to see every question and correct answer." },
      { title: "Print or reset", body: "Print a result summary for a student's file, or use Reset Progress to clear all saved scores from this device before handing it to a new student." }
    ]
  };
})();
