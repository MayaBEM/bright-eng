# Bright Talk Adventure
### 25 Daily Conversation Missions for Young Learners
*Created by Bright EngMath · For classroom and educational use*

A premium, interactive English-speaking practice website for young learners (ages ~4–8):
Preschool, Kindergarten, Grade 1–2 and ESL. Twenty-five everyday questions become
**25 Conversation Missions** across five colourful worlds. No backend, no login — everything
runs in the browser and saves locally.

---

## ✨ Features

- **5 Conversation Worlds** (All About Me, My Favorite Things, Family and Friends, Feelings and My Day, Dreams and Tomorrow), each with its own colour, original SVG illustration and unlockable badge.
- **Learn & Speak mode** — big question, Listen / Slow / Repeat audio, sentence starter, vocabulary chips, short + extended model answers, Thai hint, follow-up question, **microphone recording** (play / delete / try again) and a friendly Speaking Checklist.
- **Three support levels** per question — Picture Support, Sentence Support, Speak Freely — switchable at any time.
- **Pick a Card mode** — 25 face-down cards with a smooth flip, world filter, shuffle, reset, used counter and full-screen view.
- **Spin & Speak mode** — an interactive wheel that draws from all 25 or one world, can remove answered questions, has an optional spin sound, and a gentle (non-dizzy) animation.
- **Classroom Mode** — teacher presentation tools: fullscreen, next/previous/random, show-hide model answer / Thai hint / vocabulary, 15/30/45/60-second timer with pause & reset, add student names, random student picker, award stars, participation counter, sound & animation toggles, mark-as-completed, and Clear Class Data with a confirmation modal.
- **Review Quiz** — 25 unique auto-graded questions in six formats (choose the best answer, match, complete the sentence, put the words in order, listen & choose, choose the follow-up), with progress bar, score, one gentle retry, instant kind feedback, final results and a review of missed questions.
- **Progress & Results** — missions completed, worlds completed, quiz score, badges, speaking-checklist summary, most-practiced world, plus print certificate / progress report and reset.
- **Printable A4 materials** — question cards, student speaking checklist, teacher observation sheet, pair-work activity, favorite-answers worksheet and a certificate of completion, with a dedicated print stylesheet.
- **Teacher Guide** page covering setup, lesson ideas, the support levels, assessment, privacy and printing.
- **Brighty** — an original SVG star mascot (no third-party characters).
- **Accessibility** — keyboard support, visible focus, aria-labels, large touch targets, status shown with icons + text (not colour alone), `prefers-reduced-motion` support, and mobile zoom left enabled.
- **Sound & motion settings** — voice, effects, celebration sounds, animations and mute-all. Nothing plays automatically on first load.

---

## 🧱 Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + **TypeScript** (strict)
- Organised, plain CSS design system (`src/styles/*.css`) — no CSS framework
- [lucide-react](https://lucide.dev/) for system icons only
- **Web Speech API** (`speechSynthesis`) for English read-aloud
- **MediaRecorder API** for student recordings (audio never leaves the browser)
- **Web Audio API** for tiny built-in sound effects (no audio files to ship)
- `localStorage` for all saved data — no backend, no accounts
- Client-side routing via `react-router-dom` (HashRouter — works on any static host)

---

## 🚀 Getting started

Requires Node.js 18+.

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run typecheck  # TypeScript check, no emit
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build locally
```

---

## ▲ Deploy on Vercel

This is a static site — deploy in minutes.

**Option A — Dashboard**
1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Confirm: **Build Command** `npm run build`, **Output Directory** `dist`.
4. Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # follow the prompts (first deploy)
vercel --prod   # production deploy
```

A `vercel.json` is included to rewrite all routes to `index.html`. Routing already uses
HashRouter, so deep links work even without it.

---

## ✏️ Customising

**Edit the questions** — `src/data/questions.ts`. Each item is a typed `ConversationQuestion`
(question, category/world, difficulty, vocabulary, sentence starter, short & extended answers,
follow-up question, Thai hint, teacher tip). Keep 5 questions per world and matching `worldId`.

**Edit the quiz** — `src/data/quiz.ts`. Each item is a typed `QuizQuestion`. For "order" questions
use the `order(...)` helper. Keep the 25 IDs unique.

**Change worlds / badges** — `src/data/worlds.ts` (name, subtitle, colour, questionIds, badge).

**Change colours, fonts & logo**
- Palette and typography live as CSS variables at the top of `src/styles/theme.css`
  (`--sky`, `--coral`, `--w1`…`--w5`, `--font-head`, `--font-body`). Change them in one place.
- Fonts are loaded in `index.html` (Fredoka + Nunito) with system fallbacks.
- The **logo/mascot** is `public/brighty.svg` (favicon) and the `Brighty` component in
  `src/art/Brighty.tsx`. Replace either to rebrand. The product name and credit strings appear in
  `src/components/Layout.tsx` (nav + footer) and on the certificate in `src/pages/PrintPage.tsx`.

---

## 🔊 Browser support for audio & recording

| Feature | Chrome | Edge | Safari | Firefox | Notes |
|---|---|---|---|---|---|
| Read-aloud (Web Speech API) | ✅ | ✅ | ✅ | ⚠️ | Firefox desktop support for `speechSynthesis` is limited; voices depend on the OS. |
| Voice recording (MediaRecorder) | ✅ | ✅ | ✅ (14.1+) | ✅ | Needs microphone permission and, in production, an HTTPS origin (Vercel provides this). |
| Sound effects (Web Audio API) | ✅ | ✅ | ✅ | ✅ | — |
| localStorage saving | ✅ | ✅ | ✅ | ✅ | Disabled in some private-browsing modes; the app fails safe and simply won't persist. |

The app **degrades gracefully**: if read-aloud or recording is unavailable, a short friendly
message appears and every other feature keeps working. English voice quality is provided by the
operating system, so it varies by device.

---

## 🔐 Privacy

No accounts, no analytics, no servers. Microphone recordings are held only in the browser's
memory on the current device and are removed on delete, question change, or page close. All
progress and class data live in `localStorage` on that one device. See the in-app **Teacher
Guide → Privacy note** for wording you can share with parents.

---

## 📁 Project structure

```
src/
  art/         Original SVG mascot, world scenes, question icons, badges, confetti
  components/  Layout (nav/footer), SoundPanel, Modal
  data/        questions.ts (25), quiz.ts (25), worlds.ts
  hooks/       useSpeech, useRecorder, useSfx
  pages/       Welcome, ModeSelect, LearningMap, LearnSpeak, PickCard, SpinSpeak,
               Classroom, Quiz, Progress, TeacherGuide, Print
  store/       AppContext (state), storage.ts (versioned localStorage, corruption-safe)
  styles/      theme.css, layout.css, pages.css, print.css
  types/       index.ts (all shared TypeScript types)
```

---

*Bright Talk Adventure — Created by Bright EngMath. For classroom and educational use.*
