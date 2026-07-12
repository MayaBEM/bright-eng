# Sound Garden Studio
### Interactive Phonics Teaching Studio · Bright EngMath

A premium, classroom-ready phonics web app for beginner readers. Seven learning
areas cover Phonics 1–7, each with guided sound lessons, whole-class games, a
distraction-free projector mode, and printable resources. No account, no server,
no monthly cost — everything runs in the browser and saves progress on the device.

**Cr. Bright EngMath**

---

## Run it locally

It is a **static site — there is no build step**. Two ways to open it:

**Quickest:** double-click `index.html`.
_(Audio and lessons work. The offline service worker only activates over http/https.)_

**Recommended (enables the PWA / offline cache):** serve the folder over http:

```bash
# from inside the sound-garden-studio/ folder — pick any one:
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080`.

## "Build"

There is nothing to compile. The `src/` files are plain, browser-native
JavaScript and CSS. To ship, upload the folder as-is.

## Deploy (Vercel / Netlify / GitHub Pages)

- **Netlify / Vercel:** drag-and-drop this whole folder, or point the project at
  the repo. Framework preset: **None / Other**. Build command: _empty_. Publish
  directory: **`.`** (this folder).
- **GitHub Pages:** push the folder to a repo and enable Pages on the branch root.
- **Any static host:** upload `index.html`, `manifest.json`, `sw.js`, and the
  `src/` folder together.

---

## Project structure

```
sound-garden-studio/
  index.html         App shell (topbar, nav, footer)
  manifest.json      PWA manifest
  sw.js              Service worker (offline cache)
  src/
    data.js          Phonics curriculum (7 stages) + grapheme segmenter
    audio.js         Speech engine (cancel-safe, voice detection, fallback)
    styles.css       Full design system + responsive + A4 print styles
    app.js           Router, home, journey, stage, 5-step lessons, library, progress
    activities.js    7 activity types + Stage Challenge assessment
    present.js       Full-screen Presentation / Projector mode
    toolkit.js       Teacher Toolkit (deck builder, picker, spinner, exit ticket…)
  previews/          Standalone rendered screenshots of every screen (open in a browser)
```

## What's inside

- **7 areas** (Sound Seeds → Sound Explorer), **42 sound lessons**, **336 example words**.
- **5-step lesson flow** per sound: Hear → Spot → Blend → Read → Quick Check.
- **7 genuinely different activities:** Listen & Choose, Sound Detective, Build the
  Word, Blend & Reveal, Odd One Out, Word Sort, Flashcard Challenge.
- **Stage Challenge** assessment (12 items, practice or assessment mode, skills breakdown).
- **Presentation Mode** with keyboard control, reveal-segmented / reveal-word,
  shuffle, timer, student-turn counter.
- **Word Library** with search + filters (area / sound / position) and large mode.
- **Teacher Toolkit:** deck builder, random word picker, sound spinner, 5-word
  warm-up, exit-ticket generator, printable word & sound cards.
- **Teacher Guide** (Thai guidance + English classroom scripts).
- **Progress** saved to `localStorage` (with reset + confirmation), no student data collected.
- **A4 print styles** for cards, word lists, exit tickets.

## Curriculum accuracy notes

- British English (en-GB) reference throughout.
- `oo` is split into **short /ʊ/** (book) and **long /uː/** (moon).
- `th` is split into **unvoiced /θ/** (thin) and **voiced /ð/** (this).
- Regular decodable words are kept separate from **tricky words** (the, was, one…),
  which are labelled as memorise-not-sound-out.
- Every example word was verified to contain its target grapheme.

## Audio — honest limitations

Playback uses the browser's built-in Text-to-Speech. It reads **whole words**
well but **cannot produce a clean isolated phoneme**, so the app labels this
honestly and prompts the teacher to model the isolated sound. If no English voice
is installed on the device, the app detects it and shows a friendly notice. There
is **no fake microphone scoring** or pronunciation grading.

---

Bright EngMath · Interactive Phonics Teaching Studio · Cr. Bright EngMath
