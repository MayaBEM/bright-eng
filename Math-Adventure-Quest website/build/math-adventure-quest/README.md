# Math Adventure Quest — by Bright EngMath

An interactive, quest-based mathematics practice product for Grades 5–6, covering three chapters (Factors, HCF & LCM, and Fractions) with 75 original, verified questions.

## Running it

This build is **dependency-free vanilla HTML/CSS/JavaScript** — there is no build step and nothing to install.

- **Easiest:** double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Safari, Firefox).
- **Recommended for full compatibility:** serve the folder with any static file server, e.g.:
  ```
  npx serve .
  # or
  python3 -m http.server 8080
  ```
  then visit the printed local URL.

Progress is saved automatically in the browser's `localStorage`, so refreshing the page never loses progress. Progress is per-browser; use "Reset Progress" on the Dashboard to start fresh.

## Deploying

Because this is a static site, it deploys to any static host with zero configuration:

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the whole `math-adventure-quest` folder (or connect a repo containing it) — no build command is needed. Leave the build command empty and set the publish directory to the project root.
- **GitHub Pages:** push the folder to a repository and enable Pages on the root.

The app uses hash-based routing (`#/map`, `#/chapter/1`, etc.) specifically so it works from a plain static file server or `file://` with no server-side rewrite rules.

## Project structure

```
index.html                 Single entry point; loads every script in order
styles/
  tokens.css                Design tokens (colors, type, spacing, motion) — edit this to re-theme
  base.css                  Reset, layout shell, accessibility helpers
  animations.css            All keyframes + reduced-motion overrides
  components.css            Buttons, cards, question UI, modals, etc.
  pages.css                 Page-specific layout
src/
  types.js                  JSDoc type definitions (Chapter, Question, Progress, etc.)
  data/
    chapter1Questions.js    25 questions — The Factor Forest
    chapter2Questions.js    25 questions — The HCF & LCM Kingdom
    chapter3Questions.js    25 questions — The Fraction Island
    chapters.js             Chapter/stage metadata (titles, topics, crystal names)
  engine/
    audio.js                Synthesized sound effects (Web Audio API, no audio files)
    scoring.js               Points/accuracy rules
    progress.js              localStorage-backed learner progress + badges
    router.js                Tiny hash router
  components/
    icons.js                 Original inline-SVG illustrations
    ui.js                     Shared helpers (modals, progress bars, stars, math text)
    navbar.js                 Shared navbar/footer shell
  pages/                     One file per screen (16 screens total)
  app.js                     Registers routes and boots the app
validate.mjs                 Node QA script — run "node validate.mjs"
```

## Why vanilla JS instead of React/Vite?

The environment this product was built in had no network access to npm, unpkg, jsdelivr, or any CDN, so installing React/Vite/TypeScript/Framer Motion was not possible. Rather than deliver an incomplete shell, this was built as a fully self-contained, dependency-free vanilla JS single-page app that satisfies every functional requirement in the brief (routing, animations, quiz engine, scoring, progress persistence, certificate, accessibility) without needing any install step. If you'd like it re-implemented as a React/TypeScript/Vite codebase, that conversion can be done in an environment with normal package-registry access.

## Content QA

Run `node validate.mjs` from this folder to re-verify: total question count (75), 25 per chapter, unique IDs, exactly 5 questions per stage, every multiple-choice question has exactly one correct option, every question has an explanation/topic/difficulty, and the underlying HCF/LCM/fraction arithmetic for every computable question.

---
© Bright EngMath. All rights reserved. Interactive learning content created for educational use.
