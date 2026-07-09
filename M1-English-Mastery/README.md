# M.1 English Entrance Exam Mastery
### Advanced Practice for Competitive School Admission
*Seven Interactive English Practice Tests for Competitive M.1 Admission*

A complete, ready-to-sell interactive English quiz website for Thai Grade&nbsp;6 students preparing for competitive M.1 (Grade&nbsp;7) entrance examinations. Questions, choices and passages are in **English**; every explanation, tip and reason is in **Thai (คำอธิบายภาษาไทย)**.

Built by **Bright EngMath — English and Mathematics Learning Resources**.

---

## 1. What's inside

- **7 full test sets · 25 questions each · 175 original questions total.**
- Each set follows the same structure: **Grammar 8 · Vocabulary 5 · Conversation 4 · Cloze/Error 3 · Reading 5.**
- Difficulty rises gradually: Foundation Plus → Intermediate → Upper-Intermediate → Competitive → Gifted/EP → Advanced Simulation → Final Mastery.
- Every question includes a Thai explanation, a Thai reason for **each** wrong option, a Thai test-taking tip, the tested skill, and (for reading) an original passage.
- **Two modes:** Practice (instant Thai feedback, one retry) and Exam (no feedback until submit, optional 30-minute timer, flagging).
- **Teacher Presentation Mode** on every set for classrooms, projectors, Zoom and Google Meet.
- Student dashboard, results with skill-by-skill analysis, full answer review with filters, study-tips section, gamification (points, badges, streaks), and automatic progress saving.
- Fully responsive (desktop, tablet, mobile) with keyboard navigation, ARIA labels, focus states, and reduced-motion support.

---

## 2. How to open it

**The simplest way:** double-click **`index.html`** — it opens in your web browser. No installation, no accounts, no internet required after the first load.

> **One note about saving progress:** the app saves scores and badges in your browser's local storage. A few browsers restrict local storage when a page is opened directly as a file (`file://`). If you want guaranteed saving — and for the smoothest experience — run it through a tiny local web server (see below) or upload it to a web host (Section 4). Safari and Firefox generally save fine when opened directly.

### Run a local server (optional, recommended for teachers)
Open a terminal in this folder and run **one** of these:

```bash
# Python (already on most Macs)
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then visit **http://localhost:8000** in your browser.

---

## 3. File structure

```
M1-English-Mastery/
├── index.html          Main page (structure, fonts, icons, script tags)
├── styles.css          All styling and the design system
├── app.js              All app logic (routing, modes, timer, scoring, review, teacher mode, gamification)
├── README.md           This file
└── data/               Questions kept separate from the UI code
    ├── meta.js         Set names, difficulty, skills, product title & credit
    ├── set1.js         Set 1 — 25 questions + reading passage
    ├── set2.js         Set 2
    ├── ...
    └── set7.js         Set 7
```

---

## 4. Publishing it online (to sell or share)

The site is a static website, so it works on any static host — most have a free tier:

- **Netlify / Vercel:** drag the whole `M1-English-Mastery` folder onto the dashboard, or connect a Git repo. Done in a minute.
- **GitHub Pages:** push the folder to a repository and enable Pages.
- **Any web hosting / cPanel:** upload the folder via FTP and point your domain at `index.html`.

No database, no server code, and no paid API are required.

---

## 5. Customising the product

**Your brand & credit** — edit `data/meta.js`:
```js
productTitle: "M.1 English Entrance Exam Mastery",
productSubtitle: "Seven Interactive English Practice Tests for Competitive M.1 Admission",
credit: "Created by Bright EngMath — English and Mathematics Learning Resources",
```

**Testimonials** — on the landing page they are clearly marked *placeholders*. Replace them with your own real reviews inside the testimonials section of `app.js` (search for `Testimonials`).

**Editing or adding questions** — open the relevant `data/setN.js`. Each question is one object:
```js
{
  id: "set1-q1",
  setId: 1,
  section: "grammar",            // grammar | vocabulary | conversation | cloze | reading
  skill: "past perfect continuous",
  difficulty: "advanced",
  question: "By the time the principal entered, the students ______ quietly.",
  passageId: null,               // e.g. "set1-p1" for reading questions
  options: ["waited", "had been waiting", "are waiting", "have waited"],
  correctAnswer: 1,              // 0 = A, 1 = B, 2 = C, 3 = D
  explanationThai: "ใช้ Past Perfect Continuous …",
  wrongAnswerExplanationsThai: ["Past Simple ไม่ได้เน้น…", "", "…", "…"], // "" at the correct index
  tipThai: "สังเกตคำว่า for + ระยะเวลา …"
}
```
Reading passages live at the top of each set file in `window.QUIZ_DATA.passages[N]`.

**Colours & fonts** — edit the CSS variables at the top of `styles.css` (`:root { … }`).

---

## 6. Keyboard shortcuts (in a quiz)

| Key | Action |
|-----|--------|
| `1`–`4` or `A`–`D` | Select an answer |
| `←` / `→` | Previous / next question |
| `F` | Flag / unflag the current question |
| `Esc` | Close Teacher Mode or a dialog |
| `A` (Teacher Mode) | Reveal / hide the answer |

---

## 7. Quality assurance

All 175 questions were validated programmatically and the full app was tested end-to-end:

- Exactly 7 sets × 25 questions, with the correct section split in every set.
- Balanced correct-answer distribution (roughly 6–7 each of A/B/C/D per set) with **no** consecutive-answer repeats.
- Every question has 4 options, one valid correct index, a Thai explanation, Thai reasons for each wrong option, and a Thai tip.
- Reading passages resolve correctly and scale in length across the sets (≈145 → 250 words).
- Scoring, resume, review filters, timer, both quiz modes, teacher mode, and reset progress were all tested and verified.

---

## 8. Copyright & commercial use

All questions and passages are **original**, written from scratch for M.1 entrance-exam preparation. This product is **not affiliated with or endorsed by any specific school or examination board**, and contains no third-party logos or copyrighted characters. You are free to use it commercially.

© Bright EngMath. Original educational practice content created for M.1 entrance examination preparation.
