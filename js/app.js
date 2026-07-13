/* ============================================================
   THE PIRATES' TREASURE — App logic
   Vanilla JS, no build step, no backend. localStorage persistence.
   ============================================================ */

(function(){
"use strict";

/* ---------------- Combined Part 3 order ---------------- */
const PART3_ORDER = [
  ...SEQUENCING.map(d => ({ type:"seq", data:d })),
  ...TRUE_FALSE.map(d => ({ type:"tf", data:d })),
  ...SHORT_ANSWER.map(d => ({ type:"sa", data:d }))
];

/* ---------------- State ---------------- */
const STORAGE_KEY = "piratesTreasureState_v1";

function defaultState(){
  return {
    studentName: "",
    settings: { hintsEnabled: true, thaiEnabled: true, mode: "easy" },
    teacherPin: "1234",
    currentView: "home",
    progress: {
      part1: { records:{}, index:0 },
      part2: { records:{}, index:0 },
      part3: { records:{}, index:0 },
      vocab: { records:{}, index:0, items:null }
    },
    completedAt: null
  };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed, {
      settings: Object.assign(defaultState().settings, parsed.settings||{}),
      progress: Object.assign(defaultState().progress, parsed.progress||{})
    });
  }catch(e){ return defaultState(); }
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetProgress(){
  const name = state.studentName;
  const settings = state.settings;
  const pin = state.teacherPin;
  state = defaultState();
  state.studentName = name;
  state.settings = settings;
  state.teacherPin = pin;
  saveState();
}

/* ---------------- Utilities ---------------- */
function esc(str){
  return String(str==null?"":str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function normalizeAnswer(str){
  return String(str||"").trim().toLowerCase().replace(/\s+/g," ").replace(/[.,!?'"]/g,"");
}
function levenshtein(a,b){
  const m=a.length, n=b.length;
  const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}
function fuzzyMatch(userVal, answer){
  const u = normalizeAnswer(userVal);
  const a = normalizeAnswer(answer);
  if(!u) return { match:false, near:false };
  if(u===a) return { match:true, near:false };
  if(a.length>=4 && levenshtein(u,a)<=1) return { match:true, near:true };
  return { match:false, near:false };
}
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(()=>t.classList.remove("show"), 2400);
}
function fmtDate(d){
  try{ return new Date(d).toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'}); }
  catch(e){ return ""; }
}

/* ---------------- Icon library ---------------- */
function icon(name, cls){
  const wrap = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${inner}</svg>`;
  const icons = {
    chest: `<rect x="3" y="10" width="18" height="10" rx="1.5"/><path d="M3 10 L3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/><path d="M9 10V8a3 3 0 0 1 6 0v2"/><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none"/>`,
    hook: `<path d="M9 3v10a5 5 0 0 0 10 0"/><circle cx="9" cy="3" r="1.4" fill="currentColor" stroke="none"/>`,
    binoculars: `<rect x="3" y="9" width="6" height="8" rx="2"/><rect x="15" y="9" width="6" height="8" rx="2"/><path d="M9 12h6"/><path d="M5 9 6 5h2l1 4"/><path d="M19 9 18 5h-2l-1 4"/>`,
    flag: `<path d="M5 3v18"/><path d="M5 4h13l-3 4 3 4H5z"/>`,
    coin: `<circle cx="12" cy="12" r="8"/><path d="M9 12h6"/><path d="M12 9v6"/>`,
    island: `<path d="M2 18c3-2 5 2 8 0s5 2 8 0 4 1 4 1"/><path d="M12 4v8"/><path d="M12 4l4 2-4 2z"/>`,
    town: `<path d="M4 21V9l5-4 5 4v12"/><path d="M14 21V13h6v8"/><path d="M7 12h1M7 15h1M7 18h1"/>`,
    coconut: `<circle cx="12" cy="13" r="7"/><path d="M9 8l1-3M15 8l-1-3"/><circle cx="10" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="1" fill="currentColor" stroke="none"/>`,
    waterDrop: `<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>`,
    shovel: `<path d="M17 3l4 4-8 8-4-4z"/><path d="M9 15l-5 5"/><path d="M4 20c-1-2 0-4 1-5"/>`,
    handTake: `<path d="M7 11V6a2 2 0 0 1 4 0v4"/><path d="M11 10V5a2 2 0 0 1 4 0v6"/><path d="M15 11V7a2 2 0 0 1 4 0v7c0 4-3 7-7 7s-6-2-8-5l-1.5-3c-.5-1 .3-2 1.3-1.7L7 15"/>`,
    boat: `<path d="M3 15h18l-2 5H5z"/><path d="M6 15V6h1l9 5"/><path d="M12 3v3"/>`,
    chain: `<rect x="3" y="9" width="7" height="9" rx="3"/><rect x="14" y="9" width="7" height="9" rx="3"/>`,
    torch: `<path d="M9 21h6"/><path d="M10 21V13h4v8"/><path d="M12 2c2 3 3 5 3 7a3 3 0 0 1-6 0c0-2 1-4 3-7z"/>`,
    bush: `<circle cx="7" cy="12" r="4"/><circle cx="13" cy="9" r="5"/><circle cx="17" cy="13" r="4"/><path d="M3 20c4-2 14-2 18 0"/>`,
    sword: `<path d="M5 19L17 7"/><path d="M14 4l6 6"/><path d="M3 21l3-1 1-3"/>`,
    sneeze: `<circle cx="10" cy="14" r="4"/><path d="M15 8l3-2M16 11l4 0M14 6l1-3"/>`,
    hole: `<ellipse cx="12" cy="12" rx="8" ry="5"/><ellipse cx="12" cy="12" rx="4" ry="2.4" fill="currentColor" stroke="none" opacity=".5"/>`,
    glow: `<circle cx="12" cy="12" r="3.4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/>`,
    poof: `<circle cx="12" cy="12" r="3" stroke-dasharray="2 3"/><circle cx="5" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="18" r="1" fill="currentColor" stroke="none"/>`,
    sequence: `<path d="M4 6h16M4 12h10M4 18h13"/><circle cx="21" cy="12" r="1" fill="currentColor" stroke="none"/>`,
    characters: `<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M12 20c0-3 3-5 6-5"/>`,
    detail: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>`,
    exam: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>`,
    evidence: `<path d="M7 4h10l3 5v11H4V9z"/><path d="M9 13h6M9 16h4"/>`,
    grad: `<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 3 3 6 3s6-1.3 6-3v-5"/>`,
    bulb: `<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3 11c1 .6 1 1.5 1 2h4c0-.5 0-1.4 1-2a6 6 0 0 0-3-11z"/>`,
    compass: `<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6z"/>`,
    check: `<path d="M20 6L9 17l-5-5"/>`,
    cross: `<path d="M18 6L6 18M6 6l12 12"/>`
  };
  return wrap(icons[name] || icons.compass);
}

/* ---------------- Navigation ---------------- */
const NAV_MAP = {
  home:"view-home", story:"view-story", vocab:"view-vocab",
  part1:"view-part1", part2:"view-part2", part3:"view-part3",
  results:"view-results", review:"view-review", teacher:"view-teacher"
};

function showView(key){
  document.querySelectorAll("[data-view]").forEach(v => v.classList.add("hidden"));
  const el = document.getElementById(NAV_MAP[key] || key);
  if(el) el.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  if(key !== "teacher"){ state.currentView = key; saveState(); }
  renderView(key);
}

function renderView(key){
  switch(key){
    case "home": renderHome(); break;
    case "story": renderStory(); break;
    case "vocab": renderVocab(currentVocabMode); break;
    case "part1": renderPart1(); break;
    case "part2": renderPart2(); break;
    case "part3": renderPart3(); break;
    case "results": renderResults(); break;
    case "review": renderReview(currentReviewFilter); break;
    case "teacher": renderTeacher(); break;
  }
}

/* ============================================================
   HOME
   ============================================================ */
const OBJECTIVES = [
  { icon:"sequence", text:"Follow the sequence of events in the story." },
  { icon:"characters", text:"Spot characters, actions, places, causes and results." },
  { icon:"detail", text:"Remember important details from the story." },
  { icon:"chest", text:"Learn useful vocabulary in context." },
  { icon:"exam", text:"Answer school-style comprehension questions." },
  { icon:"evidence", text:"Explain answers using evidence from the story." },
  { icon:"grad", text:"Get ready for an EP reading exam." },
  { icon:"bulb", text:"Learn independently — no teacher needed!" }
];

function renderHome(){
  document.getElementById("student-name").value = state.studentName || "";
  const grid = document.getElementById("objectives-grid");
  grid.innerHTML = OBJECTIVES.map(o => `
    <div class="objective-chip">${icon(o.icon)}<span>${esc(o.text)}</span></div>
  `).join("");

  const p1Done = isPart1Complete(), p2Done = isPart2Complete(), p3Done = isPart3Complete();
  const stops = [
    { label:"Part 1: Multiple Choice", desc:"15 questions · 30 points", key:"part1", unlocked:true, done:p1Done },
    { label:"Part 2: Fill in the Blanks", desc:"15 questions · 30 points", key:"part2", unlocked:true, done:p2Done },
    { label:"Part 3: Story Detective Challenge", desc:"12 activities · 30 points", key:"part3", unlocked:true, done:p3Done }
  ];
  document.getElementById("challenge-map").innerHTML = stops.map((s,i) => `
    <div class="map-stop" data-action="goto" data-nav="${s.key}" role="button" tabindex="0">
      <div class="stop-num">${s.done? '✓' : (i+1)}</div>
      <div class="stop-info"><h4>${esc(s.label)}</h4><p>${esc(s.desc)}</p></div>
    </div>
  `).join("");

  const hasProgress = Object.keys(state.progress.part1.records).length ||
    Object.keys(state.progress.part2.records).length ||
    Object.keys(state.progress.part3.records).length;
  document.getElementById("btn-continue-progress").style.display = hasProgress ? "" : "none";
}

function isPart1Complete(){ return MC_QUESTIONS.every(q => state.progress.part1.records[q.id] && state.progress.part1.records[q.id].done); }
function isPart2Complete(){ return FILL_BLANKS.every(q => state.progress.part2.records[q.id] && state.progress.part2.records[q.id].done); }
function isPart3Complete(){ return PART3_ORDER.every(item => state.progress.part3.records[item.data.id] && state.progress.part3.records[item.data.id].done); }

/* ============================================================
   STORY REVIEW
   ============================================================ */
function renderStory(){
  document.getElementById("story-stages").innerHTML = STORY_STAGES.map(st => `
    <div class="stage-card">
      <div class="stage-num">${st.id}</div>
      <h3>${esc(st.title)}</h3>
      <p>${esc(st.text)}</p>
      <button class="btn btn-secondary btn-sm" data-action="toggle-key-detail" data-id="${st.id}">Show Key Detail</button>
      <div class="key-detail hidden" id="key-detail-${st.id}">${icon("bulb")}<span>${esc(st.keyDetail)}</span></div>
    </div>
  `).join("");
}

/* ============================================================
   VOCABULARY
   ============================================================ */
let currentVocabMode = "cards";
let flashcardIndex = 0, flashcardFlipped = false;
let matchState = null;

function renderVocab(mode){
  currentVocabMode = mode;
  document.querySelectorAll("[data-vocab-mode]").forEach(b => b.classList.toggle("active-mode", b.dataset.vocabMode===mode));
  const el = document.getElementById("vocab-content");
  if(mode==="cards") el.innerHTML = renderVocabCards();
  else if(mode==="flashcards") el.innerHTML = renderFlashcards();
  else if(mode==="match") el.innerHTML = renderMatch();
  else if(mode==="sentence") el.innerHTML = renderVocabSentenceQuiz();
}

function renderVocabCards(){
  return `<div class="vocab-grid">` + VOCABULARY.map((v,i) => `
    <div class="vocab-card">
      <div class="vocab-top">
        <div class="vocab-icon">${icon(v.icon)}</div>
        <div>
          <div class="vocab-word">${esc(v.word)}</div>
          <div class="vocab-pos">${esc(v.pos)}</div>
          <div class="vocab-ipa">${esc(v.ipa)}</div>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm toggle-meaning" data-action="toggle-vocab-meaning" data-id="${i}">Show meaning</button>
      <div class="vocab-meaning hidden" id="vocab-meaning-${i}">
        <div>${esc(v.def)}</div>
        <div class="thai">${esc(v.thai)}</div>
        <div class="example">“${esc(v.example)}”</div>
      </div>
    </div>
  `).join("") + `</div>`;
}

function renderFlashcards(){
  if(flashcardIndex>=VOCABULARY.length) flashcardIndex=0;
  const v = VOCABULARY[flashcardIndex];
  return `
    <p class="muted small text-center">Practice mode — not scored. Tap the card to flip it.</p>
    <div class="flashcard-wrap">
      <div class="flashcard" data-action="flip-flashcard" role="button" tabindex="0">
        ${flashcardFlipped ? `
          <h3>${esc(v.def)}</h3>
          <div class="thai" style="font-family:var(--font-thai);color:var(--purple);margin-top:.4rem;">${esc(v.thai)}</div>
          <p class="fc-hint">“${esc(v.example)}”</p>
        ` : `
          <div class="fc-icon">${icon(v.icon)}</div>
          <h3>${esc(v.word)}</h3>
          <p class="fc-hint">${esc(v.pos)} · ${esc(v.ipa)}</p>
          <p class="fc-hint">Tap to reveal meaning</p>
        `}
      </div>
      <div class="flashcard-controls">
        <button class="btn btn-secondary btn-sm" data-action="flashcard-prev">← Prev</button>
        <span class="muted small" style="align-self:center;">${flashcardIndex+1} / ${VOCABULARY.length}</span>
        <button class="btn btn-secondary btn-sm" data-action="flashcard-next">Next →</button>
      </div>
    </div>
  `;
}

function renderMatch(){
  if(!matchState){
    const chosen = shuffle(VOCABULARY).slice(0,8);
    matchState = {
      words: chosen.map((v,i)=>({id:i, word:v.word})),
      meanings: shuffle(chosen.map((v,i)=>({id:i, def:v.def}))),
      selectedWord:null, matched:[], attempts:0
    };
  }
  const wordsHtml = matchState.words.map(w => `
    <button class="option-btn ${matchState.matched.includes(w.id)?'correct disabled':''} ${matchState.selectedWord===w.id?'selected':''}"
      data-action="match-word" data-id="${w.id}">${esc(w.word)}</button>
  `).join("");
  const meaningsHtml = matchState.meanings.map(m => `
    <button class="option-btn ${matchState.matched.includes(m.id)?'correct disabled':''}"
      data-action="match-meaning" data-id="${m.id}">${esc(m.def)}</button>
  `).join("");
  const done = matchState.matched.length === matchState.words.length;
  return `
    <p class="muted small text-center">Practice mode — not scored. Tap a word, then tap its meaning.</p>
    <p class="text-center small" style="font-weight:700;">Matched: ${matchState.matched.length} / ${matchState.words.length}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
      <div class="option-list">${wordsHtml}</div>
      <div class="option-list">${meaningsHtml}</div>
    </div>
    ${done ? `<div class="home-actions"><button class="btn btn-gold" data-action="match-reset">Play Again</button></div>` : ""}
  `;
}

/* Vocabulary "Complete the sentence" — graded, worth 10 points total */
function ensureVocabQuiz(){
  const vp = state.progress.vocab;
  if(!vp.items){
    const chosen = shuffle(VOCABULARY).slice(0,10);
    vp.items = chosen.map(v => {
      const distractors = shuffle(VOCABULARY.filter(o=>o.word!==v.word)).slice(0,3).map(o=>o.word);
      return { word:v.word, sentence:v.example.replace(new RegExp(v.word.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&'),"i"), "_____"), options: shuffle([v.word, ...distractors]) };
    });
    saveState();
  }
  return vp;
}

function renderVocabSentenceQuiz(){
  const vp = ensureVocabQuiz();
  const idx = vp.index;
  if(idx >= vp.items.length){
    return `<div class="card text-center"><h3>Vocabulary practice complete!</h3><p>You scored ${vocabScore()} / 10 on Complete the Sentence.</p>
      <button class="btn btn-secondary" data-action="vocab-quiz-restart">Practice Again</button></div>`;
  }
  const item = vp.items[idx];
  const rec = vp.records[idx] || { attempts:0, done:false, points:0, selected:null };
  vp.records[idx] = rec;
  const optionsHtml = item.options.map(opt => {
    let cls = "option-btn";
    if(rec.done){
      if(opt===item.word) cls += " correct";
      else if(opt===rec.selected) cls += " incorrect";
      cls += " disabled";
    } else if(rec.selected===opt){ cls += " selected"; }
    return `<button class="${cls}" data-action="vocab-quiz-answer" data-option="${esc(opt)}">${esc(opt)}</button>`;
  }).join("");
  return `
    <div class="quiz-progress"><span>Sentence ${idx+1} / ${vp.items.length}</span>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${(idx/vp.items.length)*100}%"></div></div>
    </div>
    <div class="practice-question">
      <p class="fb-sentence">${esc(item.sentence)}</p>
      <div class="option-list">${optionsHtml}</div>
      <div class="feedback-box ${rec.done ? 'show ' + (rec.points>0?'correct':'incorrect') : ''}">
        ${rec.done ? `<div class="fb-title">${icon(rec.points>0?'check':'cross')} ${rec.points>0?'Correct!':'Not quite'}</div>
        <div>The correct word is <strong>${esc(item.word)}</strong>.</div>` : ""}
      </div>
      <div class="quiz-actions">
        ${rec.done ? `<button class="btn btn-primary" data-action="vocab-quiz-next">${idx+1>=vp.items.length?'See My Vocabulary Score':'Next →'}</button>` : ""}
      </div>
    </div>
  `;
}
function vocabScore(){
  const vp = state.progress.vocab;
  if(!vp.items) return 0;
  return Object.values(vp.records||{}).reduce((s,r)=>s+(r.points||0),0);
}

/* ============================================================
   PART 1 — MULTIPLE CHOICE
   ============================================================ */
function ensureP1Record(q){
  const p1 = state.progress.part1;
  if(!p1.records[q.id]){
    const order = shuffle(q.options.map((text,i)=>({text, isCorrect:i===q.correctIndex})));
    p1.records[q.id] = { attempts:0, done:false, points:0, order, selected:null, hint:false };
  }
  return p1.records[q.id];
}

function renderPart1(){
  const p1 = state.progress.part1;
  const idx = Math.min(p1.index, MC_QUESTIONS.length-1);
  const q = MC_QUESTIONS[idx];
  const rec = ensureP1Record(q);
  document.getElementById("p1-progress-label").textContent = `Question ${idx+1} / ${MC_QUESTIONS.length}`;
  document.getElementById("p1-progress-fill").style.width = ((idx)/MC_QUESTIONS.length*100)+"%";

  const optionsHtml = rec.order.map((opt,i) => {
    let cls = "option-btn";
    if(rec.done){
      if(opt.isCorrect) cls += " correct";
      else if(rec.selected===i) cls += " incorrect";
      cls += " disabled";
    } else if(rec.selected===i){ cls += " selected"; }
    return `<button class="${cls}" data-action="p1-answer" data-idx="${i}">${esc(String.fromCharCode(65+i))}.  ${esc(opt.text)}</button>`;
  }).join("");

  const showTryAgain = !rec.done && rec.attempts===1 && rec.lastWrong;
  const hintHtml = (state.settings.hintsEnabled && rec.hint) ? `<div class="feedback-box show" style="background:var(--turquoise-light);border:2px solid var(--turquoise);"><div class="fb-title">${icon('bulb')} Hint</div><div>${esc(q.hint)}</div></div>` : "";

  let feedbackHtml = "";
  if(rec.done){
    const good = rec.points > 0;
    feedbackHtml = `
      <div class="feedback-box show ${good?'correct':'incorrect'}">
        <div class="fb-title">${icon(good?'check':'cross')} ${good ? "Well done!" : "Let's learn from this one"}</div>
        <div>${esc(q.correctFeedback)}</div>
        ${!good ? `<div class="fb-thai">${esc(q.incorrectFeedback)}</div>` : ""}
        <div class="fb-evidence">Story evidence: ${esc(q.evidence)}</div>
      </div>
    `;
  } else if(rec.attempts>0 && rec.lastWrong){
    feedbackHtml = `
      <div class="feedback-box show incorrect shake">
        <div class="fb-title">${icon('cross')} Not quite</div>
        <div class="fb-thai">${esc(q.incorrectFeedback)}</div>
      </div>
    `;
  }

  document.getElementById("p1-question-area").innerHTML = `
    <div class="practice-question">
      <span class="level-tag easy">${esc(q.skill)}</span>
      <h3>${esc(q.question)}</h3>
      <div class="option-list">${optionsHtml}</div>
      ${hintHtml}
      ${feedbackHtml}
      <div class="quiz-actions">
        ${!rec.done && state.settings.hintsEnabled ? `<button class="btn btn-ghost btn-sm" data-action="p1-hint">Show Hint</button>` : ""}
        ${rec.done ? `<button class="btn btn-primary" data-action="p1-next">${idx+1>=MC_QUESTIONS.length ? "Finish Part 1 →" : "Next Question →"}</button>` : ""}
      </div>
    </div>
  `;
}

function handleP1Answer(i){
  const p1 = state.progress.part1;
  const q = MC_QUESTIONS[p1.index];
  const rec = ensureP1Record(q);
  if(rec.done) return;
  rec.selected = i;
  rec.attempts++;
  const isCorrect = rec.order[i].isCorrect;
  if(isCorrect){
    rec.done = true;
    rec.points = rec.attempts===1 ? 2 : 1.5;
    rec.lastWrong = false;
  } else {
    if(rec.attempts>=2){
      rec.done = true;
      rec.points = 0.5;
    }
    rec.lastWrong = true;
  }
  saveState();
  renderPart1();
}

function goPart1Next(){
  const p1 = state.progress.part1;
  if(p1.index+1 >= MC_QUESTIONS.length){
    p1.index = MC_QUESTIONS.length-1;
    saveState();
    showView("part2");
  } else {
    p1.index++;
    saveState();
    renderPart1();
  }
}

/* ============================================================
   PART 2 — FILL IN THE BLANKS
   ============================================================ */
function ensureP2Record(q){
  const p2 = state.progress.part2;
  if(!p2.records[q.id]) p2.records[q.id] = { attempts:0, done:false, points:0, value:"", showLetter:false, showThai:false, correct:null };
  return p2.records[q.id];
}

function renderPart2(){
  const p2 = state.progress.part2;
  const idx = Math.min(p2.index, FILL_BLANKS.length-1);
  const q = FILL_BLANKS[idx];
  const rec = ensureP2Record(q);
  document.getElementById("p2-progress-label").textContent = `Question ${idx+1} / ${FILL_BLANKS.length} (${q.level})`;
  document.getElementById("p2-progress-fill").style.width = ((idx)/FILL_BLANKS.length*100)+"%";

  const parts = q.sentence.split("___");
  const sentenceHtml = esc(parts[0]) + `<strong style="border-bottom:2px dashed var(--coral); padding:0 6px;">${rec.done ? esc(q.answer) : "_____"}</strong>` + esc(parts[1]||"");

  const wordBankHtml = (q.wordBank && !rec.done) ? `
    <div class="wordbank">${q.wordBank.map(w=>`<button class="wordbank-chip" data-action="p2-bank" data-word="${esc(w)}">${esc(w)}</button>`).join("")}</div>
  ` : "";

  const hintsHtml = `
    <div class="quiz-actions">
      ${state.settings.hintsEnabled && !rec.done ? `<button class="btn btn-ghost btn-sm" data-action="p2-hint-letter">Show First Letter</button>` : ""}
      ${state.settings.hintsEnabled && !rec.done ? `<button class="btn btn-ghost btn-sm" data-action="p2-hint-thai">Show Thai Meaning</button>` : ""}
    </div>
    ${rec.showLetter && !rec.done ? `<p class="small muted">Starts with: <strong>${esc(q.hintLetter)}___</strong></p>` : ""}
    ${rec.showThai && !rec.done ? `<p class="small muted" style="font-family:var(--font-thai);">${esc(q.hintThai)}</p>` : ""}
  `;

  let feedbackHtml = "";
  if(rec.done){
    const good = rec.points > 0;
    feedbackHtml = `
      <div class="feedback-box show ${good?'correct':'incorrect'}">
        <div class="fb-title">${icon(good?'check':'cross')} ${good ? (rec.near ? "Correct! (small spelling note)" : "Correct!") : "Let's check the story"}</div>
        <div>${esc(q.explanation)}</div>
        ${rec.near ? `<div class="small">Watch the spelling next time: <strong>${esc(q.answer)}</strong></div>` : ""}
        ${!good ? `<div class="fb-thai">${esc(q.hintThai)}</div>` : ""}
        <div class="fb-evidence">Story evidence: ${esc(q.evidence)}</div>
      </div>
    `;
  } else if(rec.correct===false){
    feedbackHtml = `<div class="feedback-box show incorrect shake"><div class="fb-title">${icon('cross')} Not yet — try again!</div></div>`;
  }

  document.getElementById("p2-question-area").innerHTML = `
    <div class="practice-question">
      <span class="level-tag ${q.level}">${esc(q.level)}</span>
      <p class="fb-sentence">${sentenceHtml}</p>
      ${wordBankHtml}
      ${!rec.done ? `
      <div class="fb-input-row">
        <input type="text" id="p2-input" placeholder="Type your answer..." value="${esc(rec.value)}" autocomplete="off" />
        <button class="btn btn-primary" data-action="p2-submit">Check</button>
      </div>` : ""}
      ${hintsHtml}
      ${feedbackHtml}
      <div class="quiz-actions">
        ${rec.done ? `<button class="btn btn-primary" data-action="p2-next">${idx+1>=FILL_BLANKS.length ? "Finish Part 2 →" : "Next Question →"}</button>` : ""}
      </div>
    </div>
  `;
  const inputEl = document.getElementById("p2-input");
  if(inputEl){
    inputEl.addEventListener("input", e => { rec.value = e.target.value; });
    inputEl.addEventListener("keydown", e => { if(e.key==="Enter"){ e.preventDefault(); submitP2(); } });
    inputEl.focus();
  }
}

function submitP2(){
  const p2 = state.progress.part2;
  const q = FILL_BLANKS[p2.index];
  const rec = ensureP2Record(q);
  if(rec.done) return;
  rec.attempts++;
  const result = fuzzyMatch(rec.value, q.answer);
  if(result.match){
    rec.done = true;
    rec.correct = true;
    rec.near = result.near;
    rec.points = rec.attempts===1 ? 2 : 1.5;
  } else {
    rec.correct = false;
    if(rec.attempts>=2){
      rec.done = true;
      rec.points = 0.5;
    }
  }
  saveState();
  renderPart2();
}

function goPart2Next(){
  const p2 = state.progress.part2;
  if(p2.index+1 >= FILL_BLANKS.length){
    p2.index = FILL_BLANKS.length-1;
    saveState();
    showView("part3");
  } else {
    p2.index++;
    saveState();
    renderPart2();
  }
}

/* ============================================================
   PART 3 — STORY DETECTIVE CHALLENGE
   ============================================================ */
function ensureP3Record(item){
  const p3 = state.progress.part3;
  const id = item.data.id;
  if(!p3.records[id]){
    if(item.type==="seq"){
      const shuffledIdx = shuffle(item.data.events.map((e,i)=>i));
      p3.records[id] = { attempts:0, done:false, points:0, order:shuffledIdx, chosen:[] };
    } else if(item.type==="tf"){
      p3.records[id] = { attempts:0, done:false, points:0, selected:null, correctionText:"", correctionOk:null };
    } else {
      p3.records[id] = { attempts:0, done:false, points:0, answerText:"" };
    }
  }
  return p3.records[id];
}

function renderPart3(){
  const p3 = state.progress.part3;
  const idx = Math.min(p3.index, PART3_ORDER.length-1);
  const item = PART3_ORDER[idx];
  const rec = ensureP3Record(item);
  const sectionLabel = item.type==="seq" ? "Section A · Story Sequencing" : item.type==="tf" ? "Section B · True, False or Fix It" : "Section C · Short Answer with Evidence";
  document.getElementById("p3-progress-label").textContent = `Activity ${idx+1} / ${PART3_ORDER.length} — ${sectionLabel}`;
  document.getElementById("p3-progress-fill").style.width = ((idx)/PART3_ORDER.length*100)+"%";

  let html = "";
  if(item.type==="seq") html = renderSeqActivity(item.data, rec);
  else if(item.type==="tf") html = renderTfActivity(item.data, rec);
  else html = renderSaActivity(item.data, rec);

  document.getElementById("p3-question-area").innerHTML = `<div class="practice-question">${html}</div>`;

  const saInput = document.getElementById("sa-input");
  if(saInput){
    saInput.addEventListener("input", e => { rec.answerText = e.target.value; });
  }
  const corrInput = document.getElementById("correction-input");
  if(corrInput){
    corrInput.addEventListener("input", e => { rec.correctionText = e.target.value; });
  }
}

function renderSeqActivity(data, rec){
  const labels = ["First","Next","Then","Last"];
  const itemsHtml = rec.order.map(origIdx => {
    const chosenPos = rec.chosen.indexOf(origIdx);
    const isChosen = chosenPos !== -1;
    return `<li class="seq-item ${isChosen?'chosen':''}" data-action="${rec.done?'':'seq-pick'}" data-idx="${origIdx}">
      <span class="seq-order-badge ${isChosen?'':'empty'}">${isChosen ? (chosenPos+1) : ''}</span>
      <span>${esc(data.events[origIdx])}</span>
    </li>`;
  }).join("");

  let feedback = "";
  if(rec.done){
    const good = rec.points > 0;
    feedback = `<div class="feedback-box show ${good?'correct':'incorrect'}">
      <div class="fb-title">${icon(good?'check':'cross')} ${good ? "Great detective work!" : "Here is the correct order"}</div>
      <div class="seq-answer-list">${data.events.map((e,i)=>`<div>${labels[i]}: ${esc(e)}</div>`).join("")}</div>
    </div>`;
  } else if(rec.lastWrong){
    feedback = `<div class="feedback-box show incorrect shake"><div class="fb-title">${icon('cross')} Not in the right order yet</div><div>Try again — think about what happened first, next, then, and last.</div></div>`;
  }

  return `
    <span class="level-tag easy">Story Sequencing</span>
    <h3>${esc(data.title)}</h3>
    <p class="small muted">Tap the events in the order they happened in the story (1st, 2nd, 3rd, 4th).</p>
    <ul class="seq-list">${itemsHtml}</ul>
    ${feedback}
    <div class="quiz-actions">
      ${!rec.done && rec.chosen.length>0 ? `<button class="btn btn-ghost btn-sm" data-action="seq-reset">Reset Order</button>` : ""}
      ${!rec.done && rec.chosen.length===4 ? `<button class="btn btn-primary" data-action="seq-check">Check Order</button>` : ""}
      ${rec.done ? `<button class="btn btn-primary" data-action="p3-next">${p3IsLast()?"Finish Part 3 →":"Next Activity →"}</button>` : ""}
    </div>
  `;
}

function renderTfActivity(data, rec){
  let feedback = "", correctionArea = "";
  const needsCorrection = !data.isTrue;

  if(rec.selected!==null && !rec.done && needsCorrection && rec.selected===false){
    correctionArea = `
      <div class="correction-box">
        <p class="small muted">The statement is false. Type what actually happened, using the story:</p>
        <textarea id="correction-input" placeholder="Type the correct information...">${esc(rec.correctionText)}</textarea>
        <div class="quiz-actions"><button class="btn btn-primary btn-sm" data-action="tf-submit-correction">Submit Correction</button></div>
      </div>
    `;
  }

  if(rec.done){
    const good = rec.points > 0;
    feedback = `<div class="feedback-box show ${good?'correct':'incorrect'}">
      <div class="fb-title">${icon(good?'check':'cross')} ${data.isTrue ? "True" : "False"}${!data.isTrue ? " — here's the correction" : ""}</div>
      ${!data.isTrue ? `<div>${esc(data.correction)}</div>` : ""}
      <div class="fb-thai">${esc(data.thai)}</div>
      <div class="fb-evidence">Story evidence: ${esc(data.evidence)}</div>
    </div>`;
  } else if(rec.lastWrong){
    feedback = `<div class="feedback-box show incorrect shake"><div class="fb-title">${icon('cross')} Not quite</div><div class="fb-thai">${esc(data.thai)}</div></div>`;
  }

  return `
    <span class="level-tag medium">True, False or Fix It</span>
    <h3>${esc(data.statement)}</h3>
    <div class="tf-row">
      <button class="tf-btn ${rec.selected===true?'selected true-choice':''} ${rec.done?'disabled':''}" data-action="tf-select" data-val="true">True</button>
      <button class="tf-btn ${rec.selected===false?'selected false-choice':''} ${rec.done?'disabled':''}" data-action="tf-select" data-val="false">False</button>
    </div>
    ${correctionArea}
    ${feedback}
    <div class="quiz-actions">
      ${rec.done ? `<button class="btn btn-primary" data-action="p3-next">${p3IsLast()?"Finish Part 3 →":"Next Activity →"}</button>` : ""}
    </div>
  `;
}

function renderSaActivity(data, rec){
  let feedback = "";
  if(rec.done){
    feedback = `
      <div class="model-answer-box">
        <div class="fb-title" style="font-family:var(--font-head);font-weight:800;color:var(--navy);">${icon('evidence')} Model Answer</div>
        <p>${esc(data.modelAnswer)}</p>
        <div class="keyword-chip-row">${data.keywords.map(k=>`<span class="keyword-chip">${esc(k)}</span>`).join("")}</div>
        <p class="fb-thai" style="margin-top:.6rem;">${esc(data.thai)}</p>
        <p class="fb-evidence" style="margin-top:.4rem;">Story evidence: ${esc(data.evidence)}</p>
        <p class="small muted" style="margin-top:.5rem;">Your answer may be worded differently and still be correct, as long as the idea matches the story.${data.isInference?" This question asks for your own reasonable idea — the story does not state the answer directly.":""}</p>
      </div>
    `;
  }
  return `
    <span class="level-tag challenging">Short Answer with Evidence</span>
    <h3>${esc(data.question)}</h3>
    ${!rec.done ? `
      <div class="short-answer-box">
        <textarea id="sa-input" placeholder="Write one or two sentences in English...">${esc(rec.answerText)}</textarea>
      </div>
      <div class="quiz-actions"><button class="btn btn-primary" data-action="sa-submit">Submit Answer</button></div>
    ` : feedback}
    <div class="quiz-actions">
      ${rec.done ? `<button class="btn btn-primary" data-action="p3-next">${p3IsLast()?"Finish Part 3 →":"Next Activity →"}</button>` : ""}
    </div>
  `;
}

function p3IsLast(){ return state.progress.part3.index+1 >= PART3_ORDER.length; }

function handleSeqPick(origIdx){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const rec = ensureP3Record(item);
  if(rec.done || rec.chosen.includes(origIdx) || rec.chosen.length>=4) return;
  rec.chosen.push(origIdx);
  saveState();
  renderPart3();
}
function handleSeqReset(){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const rec = ensureP3Record(item);
  rec.chosen = [];
  rec.lastWrong = false;
  saveState();
  renderPart3();
}
function handleSeqCheck(){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const rec = ensureP3Record(item);
  rec.attempts++;
  const isCorrect = rec.chosen.every((v,i)=>v===i);
  if(isCorrect){
    rec.done = true;
    rec.points = rec.attempts===1 ? 2.5 : 2;
  } else {
    rec.lastWrong = true;
    if(rec.attempts>=2){
      rec.done = true;
      rec.points = 0.5;
    } else {
      rec.chosen = [];
    }
  }
  saveState();
  renderPart3();
}

function handleTfSelect(val){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const data = item.data;
  const rec = ensureP3Record(item);
  if(rec.done) return;
  rec.selected = val;
  if(val===data.isTrue){
    if(data.isTrue===true){
      rec.attempts++;
      rec.done = true;
      rec.points = 2.5;
      rec.lastWrong = false;
    }
    // if false-and-correct, wait for correction text (handled in tf-submit-correction)
  } else {
    rec.attempts++;
    rec.lastWrong = true;
    if(rec.attempts>=2){ rec.done = true; rec.points = 0.5; }
  }
  saveState();
  renderPart3();
}
function handleTfSubmitCorrection(){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const data = item.data;
  const rec = ensureP3Record(item);
  if(rec.done) return;
  rec.attempts++;
  const text = normalizeAnswer(rec.correctionText);
  const hits = data.correctionKeywords.filter(k => text.includes(normalizeAnswer(k))).length;
  if(hits>=1){
    rec.done = true;
    rec.points = rec.attempts===1 ? 2.5 : 2;
  } else if(rec.attempts>=2){
    rec.done = true;
    rec.points = 0.5;
  } else {
    rec.lastWrong = true;
  }
  saveState();
  renderPart3();
}
function handleSaSubmit(){
  const p3 = state.progress.part3;
  const item = PART3_ORDER[p3.index];
  const data = item.data;
  const rec = ensureP3Record(item);
  if(rec.done) return;
  const text = normalizeAnswer(rec.answerText);
  const hits = data.keywords.filter(k => text.includes(normalizeAnswer(k))).length;
  rec.done = true;
  if(hits>=2) rec.points = 2.5;
  else if(hits===1) rec.points = 1.5;
  else if(text.split(" ").filter(Boolean).length>=3) rec.points = 1;
  else rec.points = 0.5;
  saveState();
  renderPart3();
}

function goPart3Next(){
  const p3 = state.progress.part3;
  if(p3.index+1 >= PART3_ORDER.length){
    p3.index = PART3_ORDER.length-1;
    saveState();
    finishAttemptIfReady();
    showView("results");
  } else {
    p3.index++;
    saveState();
    renderPart3();
  }
}
function finishAttemptIfReady(){
  if(isPart1Complete() && isPart2Complete() && isPart3Complete() && !state.completedAt){
    state.completedAt = new Date().toISOString();
    saveState();
  }
}

/* ============================================================
   SCORING
   ============================================================ */
function scorePart1(){ return Object.values(state.progress.part1.records).reduce((s,r)=>s+(r.points||0),0); }
function scorePart2(){ return Object.values(state.progress.part2.records).reduce((s,r)=>s+(r.points||0),0); }
function scorePart3(){ return Object.values(state.progress.part3.records).reduce((s,r)=>s+(r.points||0),0); }
function scoreVocab(){ return vocabScore(); }

function skillSnapshot(){
  const bySkill = {};
  MC_QUESTIONS.forEach(q => {
    const rec = state.progress.part1.records[q.id];
    if(!rec || !rec.done) return;
    bySkill[q.skill] = bySkill[q.skill] || { good:0, total:0 };
    bySkill[q.skill].total++;
    if(rec.points>=2) bySkill[q.skill].good++;
  });
  const extraLabels = {
    "Fill in the Blanks": scorePart2()/30,
    "Story Sequencing": null, "True/False Reasoning": null, "Evidence-based Writing": null
  };
  const p3 = state.progress.part3;
  const seqPts = SEQUENCING.reduce((s,d)=> s+((p3.records[d.id]&&p3.records[d.id].points)||0),0);
  const tfPts = TRUE_FALSE.reduce((s,d)=> s+((p3.records[d.id]&&p3.records[d.id].points)||0),0);
  const saPts = SHORT_ANSWER.reduce((s,d)=> s+((p3.records[d.id]&&p3.records[d.id].points)||0),0);
  const fbPts = scorePart2();

  const skills = Object.keys(bySkill).map(k => ({ name:k, ratio: bySkill[k].good/bySkill[k].total }));
  if(Object.values(state.progress.part2.records).some(r=>r.done)) skills.push({ name:"Vocabulary in Context", ratio: fbPts/(FILL_BLANKS.filter(q=>state.progress.part2.records[q.id]&&state.progress.part2.records[q.id].done).length*2 || 1) });
  if(SEQUENCING.some(d=>p3.records[d.id]&&p3.records[d.id].done)) skills.push({ name:"Story Sequencing", ratio: seqPts/10 });
  if(TRUE_FALSE.some(d=>p3.records[d.id]&&p3.records[d.id].done)) skills.push({ name:"True/False Reasoning", ratio: tfPts/10 });
  if(SHORT_ANSWER.some(d=>p3.records[d.id]&&p3.records[d.id].done)) skills.push({ name:"Evidence-based Writing", ratio: saPts/10 });
  return skills;
}

function performanceLevel(total){
  return PERFORMANCE_LEVELS.find(l => total>=l.min && total<=l.max) || PERFORMANCE_LEVELS[PERFORMANCE_LEVELS.length-1];
}

/* ============================================================
   RESULTS
   ============================================================ */
function renderResults(){
  const s1 = scorePart1(), s2 = scorePart2(), s3 = scorePart3(), sv = scoreVocab();
  const total = Math.round((s1+s2+s3+sv)*10)/10;
  const level = performanceLevel(total);
  document.getElementById("results-name").textContent = `${state.studentName || "Explorer"}, here's your result!`;
  document.getElementById("results-score").innerHTML = `${total}<span style="font-size:1.6rem">/100</span>`;
  document.getElementById("results-level").innerHTML = `<strong>${esc(level.title)}</strong> — ${esc(level.thai)}`;
  document.getElementById("results-date").textContent = state.completedAt ? `Completed on ${fmtDate(state.completedAt)}` : "In progress";

  const sections = [
    { name:"Part 1: Multiple Choice", score:s1, max:30 },
    { name:"Part 2: Fill in the Blanks", score:s2, max:30 },
    { name:"Part 3: Story Detective", score:s3, max:30 },
    { name:"Vocabulary Practice", score:sv, max:10 }
  ];
  document.getElementById("results-sections").innerHTML = sections.map(s => `
    <div class="results-section-card">
      <h4><span>${esc(s.name)}</span><span>${Math.round(s.score*10)/10}/${s.max}</span></h4>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${Math.min(100,(s.score/s.max)*100)}%"></div></div>
    </div>
  `).join("");

  const skills = skillSnapshot();
  document.getElementById("results-skills").innerHTML = skills.length ? skills.map(sk => `
    <span class="chip ${sk.ratio>=0.75?'strong':sk.ratio<0.5?'weak':''}">${esc(sk.name)} — ${sk.ratio>=0.75?'Strong':sk.ratio<0.5?'Practice more':'Good'}</span>
  `).join("") : `<p class="muted small">Complete more of the quiz to see your skill snapshot.</p>`;

  const vp = state.progress.vocab;
  const vocabAttempted = vp.items ? Object.values(vp.records||{}).filter(r=>r.done).length : 0;
  document.getElementById("results-vocab-summary").innerHTML = `
    <p>Vocabulary score: <strong>${sv} / 10</strong></p>
    <p class="small muted">Sentence-completion items attempted: ${vocabAttempted} / ${vp.items ? vp.items.length : 10}</p>
  `;
}

/* ============================================================
   ANSWER REVIEW
   ============================================================ */
let currentReviewFilter = "all";

function buildReviewItems(){
  const items = [];
  MC_QUESTIONS.forEach(q => {
    const rec = state.progress.part1.records[q.id];
    if(!rec || !rec.done) return;
    const chosenText = rec.selected!=null ? rec.order[rec.selected].text : "(no answer)";
    items.push({
      section:"Part 1", question:q.question, studentAnswer:chosenText, correctAnswer: q.options[q.correctIndex],
      correct: rec.points>=2, explanation: rec.points>=2 ? q.correctFeedback : q.incorrectFeedback, evidence:q.evidence, vocab:null
    });
  });
  FILL_BLANKS.forEach(q => {
    const rec = state.progress.part2.records[q.id];
    if(!rec || !rec.done) return;
    items.push({
      section:"Part 2", question:q.sentence.replace("___","_____"), studentAnswer:rec.value||"(no answer)", correctAnswer:q.answer,
      correct: rec.points>=2, explanation:q.explanation, evidence:q.evidence, vocab:q.answer
    });
  });
  const p3 = state.progress.part3;
  SEQUENCING.forEach(d => {
    const rec = p3.records[d.id];
    if(!rec || !rec.done) return;
    items.push({
      section:"Part 3A", question:`Sequence: ${d.title}`, studentAnswer: rec.chosen.map(i=>d.events[i]).join(" → "),
      correctAnswer: d.events.join(" → "), correct: rec.points>=2.5, explanation:"See the correct order of events.", evidence:"", vocab:null
    });
  });
  TRUE_FALSE.forEach(d => {
    const rec = p3.records[d.id];
    if(!rec || !rec.done) return;
    items.push({
      section:"Part 3B", question:d.statement, studentAnswer: rec.selected===true?"True":"False",
      correctAnswer: d.isTrue?"True":`False — ${d.correction}`, correct: rec.points>=2, explanation:d.thai, evidence:d.evidence, vocab:null
    });
  });
  SHORT_ANSWER.forEach(d => {
    const rec = p3.records[d.id];
    if(!rec || !rec.done) return;
    items.push({
      section:"Part 3C", question:d.question, studentAnswer: rec.answerText||"(no answer)",
      correctAnswer: d.modelAnswer, correct: rec.points>=2, explanation:d.thai, evidence:d.evidence, vocab:null
    });
  });
  return items;
}

function renderReview(filter){
  currentReviewFilter = filter;
  document.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("active", b.dataset.filter===filter));
  const items = buildReviewItems().filter(it => filter==="all" || (filter==="wrong" && !it.correct) || (filter==="right" && it.correct));
  const el = document.getElementById("review-content");
  if(!items.length){ el.innerHTML = `<div class="card text-center muted">No answers to show yet — complete some questions first!</div>`; return; }
  el.innerHTML = items.map(it => `
    <div class="review-item ${it.correct?'right':'wrong'}">
      <div class="review-q">[${esc(it.section)}] ${esc(it.question)}</div>
      <div class="review-row"><span class="label">Your answer:</span><span>${esc(it.studentAnswer)}</span></div>
      <div class="review-row"><span class="label">Correct answer:</span><span>${esc(it.correctAnswer)}</span></div>
      ${it.explanation ? `<div class="review-row"><span class="label">Explanation:</span><span style="font-family:var(--font-thai);">${esc(it.explanation)}</span></div>` : ""}
      ${it.evidence ? `<div class="review-row"><span class="label">Story clue:</span><span><em>${esc(it.evidence)}</em></span></div>` : ""}
      ${it.vocab ? `<div class="review-row"><span class="label">Vocabulary:</span><span>${esc(it.vocab)}</span></div>` : ""}
    </div>
  `).join("");
}

function retryIncorrectOnly(){
  // Reset only records where correct===false, keep everything else
  ["part1","part2","part3"].forEach(part => {
    const rec = state.progress[part].records;
    Object.keys(rec).forEach(id => { if((rec[id].points||0) < (part==="part1"||part==="part2" ? 2 : 2) ) delete rec[id]; });
  });
  state.progress.part1.index = 0;
  state.progress.part2.index = 0;
  state.progress.part3.index = 0;
  saveState();
  toast("Let's retry the questions you missed!");
  showView("part1");
}

/* ============================================================
   TEACHER MODE
   ============================================================ */
let teacherUnlocked = false;

function renderTeacher(){
  document.getElementById("teacher-locked").classList.toggle("hidden", teacherUnlocked);
  document.getElementById("teacher-unlocked").classList.toggle("hidden", !teacherUnlocked);
  if(teacherUnlocked){
    document.getElementById("toggle-hints").checked = state.settings.hintsEnabled;
    document.getElementById("toggle-thai").checked = state.settings.thaiEnabled;
    document.getElementById("mode-easy").classList.toggle("btn-primary", state.settings.mode==="easy");
    document.getElementById("mode-exam").classList.toggle("btn-primary", state.settings.mode==="exam");
  }
}

function buildQuestionBankHtml(){
  let html = `<h3>Full Question Bank & Answer Key</h3>`;
  html += `<h4>Part 1 — Multiple Choice</h4>` + MC_QUESTIONS.map((q,i)=>`
    <div class="review-item"><div class="review-q">${i+1}. ${esc(q.question)}</div>
    <div>${q.options.map((o,j)=>`${String.fromCharCode(65+j)}. ${esc(o)}${j===q.correctIndex?' ✓':''}`).join(" | ")}</div>
    <div class="small muted">${esc(q.evidence)}</div></div>
  `).join("");
  html += `<h4>Part 2 — Fill in the Blanks</h4>` + FILL_BLANKS.map((q,i)=>`
    <div class="review-item"><div class="review-q">${i+1}. ${esc(q.sentence.replace("___","_____"))}</div>
    <div>Answer: <strong>${esc(q.answer)}</strong></div></div>
  `).join("");
  html += `<h4>Part 3A — Sequencing</h4>` + SEQUENCING.map((d,i)=>`
    <div class="review-item"><div class="review-q">${i+1}. ${esc(d.title)}</div><div>${d.events.map((e,j)=>`${j+1}. ${esc(e)}`).join("<br>")}</div></div>
  `).join("");
  html += `<h4>Part 3B — True/False/Fix It</h4>` + TRUE_FALSE.map((d,i)=>`
    <div class="review-item"><div class="review-q">${i+1}. ${esc(d.statement)} — ${d.isTrue?'TRUE':'FALSE'}</div>${!d.isTrue?`<div>${esc(d.correction)}</div>`:""}</div>
  `).join("");
  html += `<h4>Part 3C — Short Answer</h4>` + SHORT_ANSWER.map((d,i)=>`
    <div class="review-item"><div class="review-q">${i+1}. ${esc(d.question)}</div><div>${esc(d.modelAnswer)}</div></div>
  `).join("");
  return html;
}

function printWorksheet(){
  let html = `<h1>The Pirates' Treasure — Student Worksheet</h1><p>Name: ______________________  Date: ______________________</p>`;
  html += `<h2>Part 1: Multiple Choice</h2>` + MC_QUESTIONS.map((q,i)=>`<p><strong>${i+1}. ${esc(q.question)}</strong><br>${q.options.map((o,j)=>`${String.fromCharCode(65+j)}. ${esc(o)}`).join("&nbsp;&nbsp;")}</p>`).join("");
  html += `<h2>Part 2: Fill in the Blanks</h2>` + FILL_BLANKS.map((q,i)=>`<p>${i+1}. ${esc(q.sentence.replace("___","_____________"))}</p>`).join("");
  html += `<h2>Part 3: Story Detective Challenge</h2><h3>A. Put the events in order (1-4)</h3>` + SEQUENCING.map((d,i)=>`<p><strong>${d.title}</strong><br>${shuffle(d.events).map(e=>`___ ${esc(e)}`).join("<br>")}</p>`).join("");
  html += `<h3>B. True or False? If false, write the correction.</h3>` + TRUE_FALSE.map((d,i)=>`<p>${i+1}. ${esc(d.statement)}  (True / False) ____________________</p>`).join("");
  html += `<h3>C. Short answer</h3>` + SHORT_ANSWER.map((d,i)=>`<p>${i+1}. ${esc(d.question)}<br>____________________________________________</p>`).join("");
  openPrintWindow(html);
}
function printAnswerKey(){
  openPrintWindow(`<h1>The Pirates' Treasure — Answer Key</h1>` + buildQuestionBankHtml());
}
function openPrintWindow(innerHtml){
  const w = window.open("", "_blank");
  w.document.write(`<html><head><title>Print</title><link rel="stylesheet" href="css/styles.css"></head><body style="padding:2rem;font-family:sans-serif;">${innerHtml}</body></html>`);
  w.document.close();
  setTimeout(()=>w.print(), 300);
}

/* ============================================================
   EVENT DELEGATION
   ============================================================ */
document.addEventListener("click", function(e){
  const navBtn = e.target.closest("[data-nav]");
  if(navBtn && !navBtn.closest("[data-action='goto']")){
    showView(navBtn.dataset.nav);
    return;
  }
  const actionEl = e.target.closest("[data-action]");
  if(!actionEl) return;
  const action = actionEl.dataset.action;

  switch(action){
    case "goto": showView(actionEl.dataset.nav); break;
    case "toggle-key-detail": {
      const box = document.getElementById(`key-detail-${actionEl.dataset.id}`);
      box.classList.toggle("hidden");
      actionEl.textContent = box.classList.contains("hidden") ? "Show Key Detail" : "Hide Key Detail";
      break;
    }
    case "toggle-vocab-meaning": {
      const box = document.getElementById(`vocab-meaning-${actionEl.dataset.id}`);
      box.classList.toggle("hidden");
      actionEl.textContent = box.classList.contains("hidden") ? "Show meaning" : "Hide meaning";
      break;
    }
    case "flip-flashcard": flashcardFlipped = !flashcardFlipped; renderVocab("flashcards"); break;
    case "flashcard-prev": flashcardIndex = (flashcardIndex-1+VOCABULARY.length)%VOCABULARY.length; flashcardFlipped=false; renderVocab("flashcards"); break;
    case "flashcard-next": flashcardIndex = (flashcardIndex+1)%VOCABULARY.length; flashcardFlipped=false; renderVocab("flashcards"); break;
    case "match-word": matchState.selectedWord = parseInt(actionEl.dataset.id,10); renderVocab("match"); break;
    case "match-meaning": {
      const mid = parseInt(actionEl.dataset.id,10);
      if(matchState.selectedWord!==null){
        if(matchState.selectedWord===mid){ matchState.matched.push(mid); }
        matchState.selectedWord = null;
      }
      renderVocab("match");
      break;
    }
    case "match-reset": matchState = null; renderVocab("match"); break;
    case "vocab-quiz-answer": {
      const vp = ensureVocabQuiz();
      const rec = vp.records[vp.index] || {attempts:0, done:false, points:0, selected:null};
      vp.records[vp.index] = rec;
      if(rec.done) break;
      rec.selected = actionEl.dataset.option;
      rec.attempts++;
      const item = vp.items[vp.index];
      if(rec.selected===item.word){ rec.done = true; rec.points = 1; }
      else if(rec.attempts>=2){ rec.done = true; rec.points = 0.3; }
      saveState();
      renderVocab("sentence");
      break;
    }
    case "vocab-quiz-next": {
      const vp = state.progress.vocab;
      vp.index++;
      saveState();
      renderVocab("sentence");
      break;
    }
    case "vocab-quiz-restart": {
      state.progress.vocab = { records:{}, index:0, items:null };
      saveState();
      renderVocab("sentence");
      break;
    }
    case "p1-answer": handleP1Answer(parseInt(actionEl.dataset.idx,10)); break;
    case "p1-hint": {
      const q = MC_QUESTIONS[state.progress.part1.index];
      ensureP1Record(q).hint = true; saveState(); renderPart1();
      break;
    }
    case "p1-next": goPart1Next(); break;
    case "p2-bank": {
      const inp = document.getElementById("p2-input");
      if(inp) inp.value = actionEl.dataset.word;
      const q = FILL_BLANKS[state.progress.part2.index];
      ensureP2Record(q).value = actionEl.dataset.word;
      break;
    }
    case "p2-submit": submitP2(); break;
    case "p2-hint-letter": {
      const q = FILL_BLANKS[state.progress.part2.index];
      ensureP2Record(q).showLetter = true; saveState(); renderPart2();
      break;
    }
    case "p2-hint-thai": {
      const q = FILL_BLANKS[state.progress.part2.index];
      ensureP2Record(q).showThai = true; saveState(); renderPart2();
      break;
    }
    case "p2-next": goPart2Next(); break;
    case "seq-pick": handleSeqPick(parseInt(actionEl.dataset.idx,10)); break;
    case "seq-reset": handleSeqReset(); break;
    case "seq-check": handleSeqCheck(); break;
    case "tf-select": handleTfSelect(actionEl.dataset.val==="true"); break;
    case "tf-submit-correction": handleTfSubmitCorrection(); break;
    case "sa-submit": handleSaSubmit(); break;
    case "p3-next": goPart3Next(); break;
    case "btn-retry-incorrect": retryIncorrectOnly(); break;
  }
});

document.querySelectorAll("[data-vocab-mode]").forEach(btn => {
  btn.addEventListener("click", () => renderVocab(btn.dataset.vocabMode));
});

document.querySelectorAll(".filter-chip").forEach(btn => {
  btn.addEventListener("click", () => renderReview(btn.dataset.filter));
});

document.getElementById("btn-logo-home").addEventListener("click", () => showView("home"));

document.getElementById("btn-start-learning").addEventListener("click", () => {
  const name = document.getElementById("student-name").value.trim();
  state.studentName = name || "Explorer";
  saveState();
  showView("story");
});
document.getElementById("btn-continue-progress").addEventListener("click", () => {
  showView(state.currentView && state.currentView!=="home" ? state.currentView : "story");
});
document.getElementById("student-name").addEventListener("input", e => { state.studentName = e.target.value; saveState(); });

document.getElementById("btn-retry-incorrect").addEventListener("click", retryIncorrectOnly);
document.getElementById("btn-restart-full").addEventListener("click", () => {
  if(confirm("This will clear all your answers and start the quiz again. Continue?")){
    resetProgress();
    showView("home");
  }
});
document.getElementById("btn-print-results").addEventListener("click", () => window.print());

/* ---- Teacher PIN modal ---- */
document.getElementById("btn-open-pin").addEventListener("click", () => {
  document.getElementById("pin-modal-backdrop").classList.remove("hidden");
  document.getElementById("pin-input").value = "";
  document.getElementById("pin-error").textContent = "";
  document.getElementById("pin-input").focus();
});
document.getElementById("btn-pin-cancel").addEventListener("click", () => {
  document.getElementById("pin-modal-backdrop").classList.add("hidden");
});
document.getElementById("btn-pin-submit").addEventListener("click", () => {
  const val = document.getElementById("pin-input").value;
  if(val === state.teacherPin){
    teacherUnlocked = true;
    document.getElementById("pin-modal-backdrop").classList.add("hidden");
    renderTeacher();
  } else {
    document.getElementById("pin-error").textContent = "Incorrect PIN. Try again.";
  }
});
document.getElementById("toggle-hints").addEventListener("change", e => { state.settings.hintsEnabled = e.target.checked; saveState(); });
document.getElementById("toggle-thai").addEventListener("change", e => { state.settings.thaiEnabled = e.target.checked; saveState(); });
document.getElementById("mode-easy").addEventListener("click", () => { state.settings.mode="easy"; saveState(); renderTeacher(); });
document.getElementById("mode-exam").addEventListener("click", () => { state.settings.mode="exam"; saveState(); renderTeacher(); });
document.getElementById("btn-view-questions").addEventListener("click", () => {
  const box = document.getElementById("teacher-question-bank");
  box.classList.toggle("hidden");
  if(!box.classList.contains("hidden")) box.innerHTML = buildQuestionBankHtml();
});
document.getElementById("btn-print-worksheet").addEventListener("click", printWorksheet);
document.getElementById("btn-print-answerkey").addEventListener("click", printAnswerKey);
document.getElementById("btn-reset-progress").addEventListener("click", () => {
  if(confirm("Reset all student progress? This cannot be undone.")){
    resetProgress();
    toast("Student progress has been reset.");
    showView("home");
  }
});
document.getElementById("btn-lock-teacher").addEventListener("click", () => { teacherUnlocked = false; renderTeacher(); });

/* ---------------- Init ---------------- */
showView(state.currentView && NAV_MAP[state.currentView] ? state.currentView : "home");

})();
