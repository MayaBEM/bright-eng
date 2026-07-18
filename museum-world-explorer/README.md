# Bright EngMath — English Revision Quiz
Museum & World Around Us

A simple, no-login, no-backend English revision quiz for primary school
students, covering **Unit 1: In the Museum** and **Unit 2: The World Around
Us**. Built with React + TypeScript + Vite.

## Two ways to run it

**Option A — open directly, no install:**
Open `bright-engmath-museum-world-quiz-standalone.html` (delivered alongside
this project) straight in a browser by double-clicking it. Nothing to install,
no server needed.

**Option B — run/build from source:**

```bash
npm install
npm run dev        # local dev server with hot reload
npm run build      # production build → dist/ (deploy to any static host)
npm run build:standalone   # single self-contained HTML → dist-standalone/index.html
```

`dist/` must be served over `http://` (any static host, or `npm run
preview`). The standalone build in `dist-standalone/` has everything inlined
(JS, CSS, fonts) into one file and can be opened directly via `file://`.

## What's inside

- **Home** — title, subtitle, two big "Start Unit" buttons, and a small
  "Reset Score" button.
- **Unit 1 Quiz** and **Unit 2 Quiz** — 15 multiple-choice questions each (6
  vocabulary, 5 story comprehension, 2 useful expressions, 2 phonics), one
  question at a time, progress bar, large answer buttons, and a Next /
  Submit Quiz button. Students can change their answer before pressing Next.
- **Result** — score (e.g. 8/15), percentage, a message based on the score
  band, and a full answer review (your answer vs. the correct answer, with a
  short explanation for anything missed). Try Again and Back Home buttons.

## Data & content

All 30 questions live in `src/data/questions.ts` — edit that file to tweak
wording, add distractors, or adjust explanations. Scoring bands are in
`src/utils/scoring.ts`. There is no other content elsewhere to keep in sync.

## Storage

The app only ever remembers each unit's **latest** score, in
`localStorage`, so a teacher can glance at the Home screen and see how the
last attempt went. "Reset Score" clears both units' saved scores. There is no
history, no accounts, and nothing leaves the browser.

## Design

Palette: cream background, sky blue, soft green, coral orange, muted yellow,
turquoise, and dark navy text — tokens live in `src/styles/theme.css`. Fonts
are self-hosted (Nunito, Latin subset only, woff2) from `src/assets/fonts/`
via `src/styles/fonts.css` — no Google Fonts CDN, so the app has zero
external network dependency at runtime.

## QA performed

- `tsc -b` and `vite build` both pass cleanly; `oxlint` reports 0 issues.
- Playwright-driven full-flow pass (Reset → Start quiz → disabled-Next check
  → answer all 15 questions, including changing an answer before Next →
  Submit → Result screen → Try Again → Back Home → saved score shown on
  Home) at 1280px, 768px, and 375px widths, on the standalone HTML opened via
  `file://`. Zero console errors, no horizontal overflow, at any width.
- Verified scoring math directly: answering every question with choice "C"
  scored 4/15 on Unit 2, matching a manual count of how many correct answers
  in the data file are index 2 — confirms the scoring logic reads the right
  answer key.
- Verified `localStorage` persistence (score saved per unit, shown on Home
  after a quiz) and Reset Score (clears both units' saved scores).
