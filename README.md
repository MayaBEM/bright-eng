# English Memory Check
### A Primary 4–5 English review & test-preparation website

An original, self-contained, interactive review resource for students at approximately
Primary 4–5 level. Built with plain **HTML, CSS and vanilla JavaScript** — no backend,
no database, no build step, no installation, no account.

**Created by Bright EngMath — Cr. Bright EngMath.**

---

## How to run it

**Option A — just open the file (simplest).**
Double-click `index.html`, or drag it into any modern browser (Chrome, Edge, Safari, Firefox).
Everything runs from the page, so it works straight from disk.

**Option B — run a tiny local server (recommended for the smoothest audio).**
Some browsers restrict speech voices on `file://`. A one-line local server avoids this:

```bash
cd english-memory-check
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

No packages are required.

---

## What is included

- **3 complete test sets** — Easy, Medium, Challenging — 25 original questions each (**75 total**).
- Every test covers **Vocabulary (5), Grammar (6), Reading (5), Listening (5), Conversation (4)**,
  with questions mixed rather than grouped by section.
- Grammar focuses on **possessive ’s** and **was / were** (positive, negative, questions,
  short answers, in context), plus sentence order and subject–verb agreement.
- Original short reading passages (40–60 / 60–90 / 90–120 words as the levels get harder),
  original listening scripts read aloud with the browser's built-in text-to-speech
  (Play / Replay, with a Teacher Mode replay limit and a transcript that only appears
  after answering), and original everyday conversations.
- Three interactive question styles: **choice** (multiple-choice, fill-in-the-blank,
  read-and-choose, listen-and-choose, best-response), **match** (terms to meanings,
  questions to responses), and **order** (arrange words, events, or conversation turns).
- **One question per screen** with Previous/Next, a progress bar, a Submit Answer step,
  a Final Review grid before submission, and Submit Test.
- Instant, child-friendly feedback and explanations for every question (can be adjusted
  in Teacher Mode).
- A **Results** page (score, percentage, skill breakdown, strengths, skills to review,
  recommended next step, performance bands) and a full **Answer Review** page.
- A **Dashboard** with per-test history, best/latest scores, and an overall skill
  comparison, saved to `localStorage` on the student's device. Includes a Reset
  Progress option with confirmation.
- A **Teacher Mode** with: instant feedback on/off, explanations during the test
  on/off, optional timer, listening replay limit, randomize question order / answer
  choices, a full printable answer key, printable result summaries, a downloadable
  text summary, and per-level or full progress reset. No password/backend required.
- Accessibility: large touch targets, visible focus states, keyboard navigation,
  ARIA labels on interactive controls, adjustable text size, and a Reduced Motion
  setting.

## Project structure

```
english-memory-check/
├── index.html            # entry point; loads data then scripts (order matters)
├── README.md
├── css/
│   ├── variables.css     # design tokens (soft orange / ivory / peach palette)
│   ├── base.css          # reset, shell, typography, header/footer
│   └── components.css    # buttons, cards, quiz UI, teacher toggles, print styles
├── js/
│   ├── util.js            # small DOM/format helpers
│   ├── storage.js         # versioned localStorage (progress + teacher settings)
│   ├── audio.js            # browser speech-synthesis listening player
│   ├── a11y.js              # reduced motion + text size
│   ├── content.js          # landing/about/terms/teacher-guide copy
│   ├── quiz.js              # session state, question renderers, grading
│   ├── results.js          # results + skill breakdown + answer review
│   ├── views.js              # landing, dashboard, about, terms, instructions
│   ├── player.js            # test intro, player, final review, submit
│   ├── teacher.js            # Teacher Mode, answer key, teacher guide
│   ├── app.js                # shell (header/footer) + hash router + boot
│   └── data/
│       ├── questions-easy.js
│       ├── questions-medium.js
│       ├── questions-challenging.js
│       └── index.js
```

## Test checklist

- [ ] Landing page loads and links to the Dashboard.
- [ ] Dashboard shows all 3 tests, each "Not attempted yet" on first run.
- [ ] Each test's intro page shows the right badge, question count, and estimated time.
- [ ] Play screen: choice, match, and order questions all render and can be answered.
- [ ] Listening questions show a Play/Replay control; transcript appears only after answering.
- [ ] Submit Answer locks the question; Next/Previous move between questions.
- [ ] Final Review shows every question and how many are answered; Submit Test works.
- [ ] Results page shows score, percentage, skill breakdown, and a performance band.
- [ ] Answer Review shows all 25 questions with your answer, the correct answer, and an explanation.
- [ ] Dashboard updates with best/latest scores and an overall skill comparison.
- [ ] Reset Progress (Dashboard) and Reset This Level / Reset All (Teacher Mode) work with confirmation.
- [ ] Teacher Mode toggles (feedback, explanations, timer, replay limit, randomization,
      text size, reduced motion) take effect on the next test.
- [ ] Full Answer Key lists all 75 questions with correct answers and prints cleanly.
- [ ] Responsive: resize to a phone width — no horizontal scroll, buttons stay tappable.
- [ ] Keyboard: Tab reaches controls; Enter/Space activate them; focus is visible.

## Original content

All 75 questions, reading passages, listening scripts, explanations, and visual
design in this resource are original Bright EngMath material. Nothing is copied
from any textbook, publisher, or third-party source, and this resource is not
affiliated with, or a companion to, any specific textbook series.
