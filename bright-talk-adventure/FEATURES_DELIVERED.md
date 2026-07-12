# Bright Talk Adventure — Delivered Features Checklist

Every item below is implemented and functional (not a mockup). Verified with
`npm run typecheck` and `npm run build`.

## Pages / routes (11)
- [x] Welcome Page — hero, name field, Start Adventure / Teacher Mode / Continue, Student & Classroom mode toggle, feature highlights, footer credit
- [x] Mode Selection Page
- [x] Learning Map — 5 worlds, progress bars, badges, start/continue, free order
- [x] Learn & Speak Mode
- [x] Pick a Card Mode
- [x] Spin & Speak Mode
- [x] Classroom Mode
- [x] Review Quiz
- [x] Progress & Results
- [x] Teacher Guide
- [x] Printable Worksheet Page

## Content
- [x] 25 conversation questions with full data (no placeholders), grouped 5×5 into worlds
- [x] Each: number, text, category, difficulty, illustration, 3–5 vocab, sentence starter, short + extended answer, follow-up, Thai hint, teacher tip
- [x] 25 unique review-quiz questions across 6 formats, auto-graded

## Learn & Speak
- [x] Illustration, number, large question
- [x] Listen (normal), Slow, Repeat buttons (Web Speech API)
- [x] Sentence starter, vocabulary chips (each speakable)
- [x] Show Example (short + extended), Show Thai Hint
- [x] Record / Play / Delete / Try Again (MediaRecorder, browser-only)
- [x] Complete Mission + prev/next navigation
- [x] Speaking Checklist (4 friendly, child-appropriate items)
- [x] 3 support levels (Picture / Sentence / Speak Freely), switchable anytime

## Pick a Card
- [x] 25 face-down cards, tap to flip (smooth animation), used-state, world filter, shuffle, reset, used counter, fullscreen view

## Spin & Speak
- [x] Wheel over all 25 / per world, remove-answered option, optional spin sound, gentle animation, result panel, Spin Again, Mark as Completed, design-system colours only

## Classroom Mode
- [x] Fullscreen, random/prev/next, show-hide model answer / Thai hint / vocabulary
- [x] Timer 15/30/45/60s, pause, reset
- [x] Add students, random picker, award star, participation counter
- [x] Sound on/off, animation on/off, mark completed
- [x] Names/stars in localStorage, Clear Class Data with confirmation modal

## Review Quiz
- [x] 6 formats: choose, match, complete, order, listen, follow-up
- [x] Progress bar, counter, score, one gentle retry, instant kind feedback
- [x] Final results, review incorrect answers, restart

## Results & Progress
- [x] Name, missions, worlds, quiz score, checklist summary, badges, most-practiced, date
- [x] Encouraging (non-comparative) messages
- [x] Continue / Review / Print Certificate / Print Progress Report / Reset
- [x] Printable certificate of completion

## Printables (A4 + print CSS)
- [x] 25 question cards, speaking checklist, observation sheet, pair work, favorite answers, certificate (+ progress report)
- [x] Print hides nav/buttons, keeps cards whole, light ink, credit on every page

## Design / Accessibility / State
- [x] Premium playful design system, defined palette + Fredoka/Nunito with fallbacks
- [x] Original SVG mascot "Brighty", world scenes, question icons, badges (no licensed characters)
- [x] Responsive: mobile / tablet / laptop / classroom screen; touch-friendly
- [x] Keyboard nav, visible focus, aria-labels, status via icon+text, reduced-motion, zoom enabled
- [x] Typed models: ConversationQuestion, QuizQuestion, StudentProgress, TeacherSettings, ClassroomStudent, Badge, SpeakingChecklist, SoundSettings
- [x] localStorage with version guard + corruption-safe reads
- [x] No autoplay sound on first load; full sound & motion settings panel

## Known browser limitations (stated honestly)
- Read-aloud (Web Speech API): full in Chrome/Edge/Safari; limited in Firefox desktop. Voice quality comes from the OS and varies by device.
- Recording (MediaRecorder): needs mic permission and an HTTPS origin in production (Vercel provides HTTPS). App shows a friendly message if denied/unsupported and keeps working.
- localStorage may be disabled in some private-browsing modes; saving is skipped safely.
