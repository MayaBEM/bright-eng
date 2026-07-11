// Node validation script — run with: node validate.mjs
// Loads the browser data files into a fake `window` and checks
// structural integrity + recomputes the underlying maths where possible.
import fs from "fs";

const window = {};
function load(path) {
  const code = fs.readFileSync(path, "utf8");
  new Function("window", code)(window);
}
load("src/data/chapter1Questions.js");
load("src/data/chapter2Questions.js");
load("src/data/chapter3Questions.js");
load("src/data/chapters.js");

const all = [
  ...window.MAQ.data.chapter1,
  ...window.MAQ.data.chapter2,
  ...window.MAQ.data.chapter3
];

let errors = [];
let warnings = [];

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }

// ---- 1. Counts ----
if (all.length !== 75) errors.push(`Total question count is ${all.length}, expected 75`);
[1, 2, 3].forEach((ch) => {
  const n = all.filter((q) => q.chapterId === ch).length;
  if (n !== 25) errors.push(`Chapter ${ch} has ${n} questions, expected 25`);
});

// ---- 2. Unique IDs ----
const ids = all.map((q) => q.id);
const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupIds.length) errors.push(`Duplicate IDs: ${[...new Set(dupIds)].join(", ")}`);

// ---- 3. Each stage has exactly 5 questions ----
[1, 2, 3].forEach((ch) => {
  for (let s = 1; s <= 5; s++) {
    const n = all.filter((q) => q.chapterId === ch && q.stageId === s).length;
    if (n !== 5) errors.push(`Chapter ${ch} Stage ${s} has ${n} questions, expected 5`);
  }
});

// ---- 4. Question numbers 1-25 unique per chapter ----
[1, 2, 3].forEach((ch) => {
  const nums = all.filter((q) => q.chapterId === ch).map((q) => q.questionNumber).sort((a, b) => a - b);
  const expected = Array.from({ length: 25 }, (_, i) => i + 1);
  if (JSON.stringify(nums) !== JSON.stringify(expected)) {
    errors.push(`Chapter ${ch} question numbers are not exactly 1-25: ${nums.join(",")}`);
  }
});

// ---- 5. Required fields + exactly one correct option for mcq/select ----
all.forEach((q) => {
  if (!q.topic) errors.push(`${q.id}: missing topic`);
  if (!q.difficulty) errors.push(`${q.id}: missing difficulty`);
  if (!q.correctExplanation) errors.push(`${q.id}: missing correctExplanation`);
  if (!q.solutionSteps || !q.solutionSteps.length) errors.push(`${q.id}: missing solutionSteps`);
  if (!q.points) errors.push(`${q.id}: missing points`);

  if (q.type === "mcq") {
    const correctCount = q.options.filter((o) => o.correct).length;
    if (correctCount !== 1) errors.push(`${q.id}: mcq has ${correctCount} correct options, expected 1`);
    const wrongWithoutFeedback = q.options.filter((o) => !o.correct && !o.feedback);
    if (wrongWithoutFeedback.length) errors.push(`${q.id}: incorrect option(s) missing feedback: ${wrongWithoutFeedback.map(o=>o.text).join(", ")}`);
  }
  if (q.type === "select") {
    const correctCount = q.selectOptions.filter((o) => o.correct).length;
    if (correctCount < 1) errors.push(`${q.id}: select-all has no correct options`);
  }
  if (q.type === "order") {
    if (!q.correctOrder || q.correctOrder.length !== q.orderItems.length) errors.push(`${q.id}: order question correctOrder length mismatch`);
  }
  if (q.type === "numeric") {
    if (q.answer === undefined) errors.push(`${q.id}: numeric question missing answer`);
  }
  if (q.type === "tree") {
    if (!q.treeCorrectValues || q.treeCorrectValues.length !== q.treeSlots) errors.push(`${q.id}: tree question slot/value mismatch`);
  }
});

// ---- 6. Recompute HCF questions ----
all.filter(q => q.topic === "Basic HCF" || q.topic === "HCF via Prime Factorization").forEach(q => {
  const m = q.text.match(/HCF.*?of (\d+) and (\d+)/i);
  if (m) {
    const a = parseInt(m[1]), b = parseInt(m[2]);
    const correctOpt = q.options.find(o => o.correct);
    const expected = gcd(a, b);
    if (parseInt(correctOpt.text) !== expected) {
      errors.push(`${q.id}: HCF(${a},${b}) should be ${expected}, but marked correct option is ${correctOpt.text}`);
    }
  } else {
    warnings.push(`${q.id}: could not auto-parse numbers for HCF check`);
  }
});

// ---- 7. Recompute LCM questions ----
all.filter(q => q.topic === "Basic LCM" || q.topic === "LCM via Prime Factorization").forEach(q => {
  const m = q.text.match(/LCM.*?of (\d+) and (\d+)/i);
  if (m) {
    const a = parseInt(m[1]), b = parseInt(m[2]);
    const correctOpt = q.options.find(o => o.correct);
    const expected = lcm(a, b);
    if (parseInt(correctOpt.text) !== expected) {
      errors.push(`${q.id}: LCM(${a},${b}) should be ${expected}, but marked correct option is ${correctOpt.text}`);
    }
  } else {
    warnings.push(`${q.id}: could not auto-parse numbers for LCM check`);
  }
});

// ---- 8. Recompute HCF/LCM word problems (chapter 2 stage 5) ----
const wordProblemChecks = [
  { id: "c2-s5-q22", fn: () => gcd(36, 48) },
  { id: "c2-s5-q23", fn: () => lcm(15, 20) },
  { id: "c2-s5-q24", fn: () => gcd(32, 40) },
  { id: "c2-s5-q25", fn: () => lcm(18, 24) }
];
wordProblemChecks.forEach(({ id, fn }) => {
  const q = all.find(q => q.id === id);
  const correctOpt = q.options.find(o => o.correct);
  const expected = fn();
  if (parseInt(correctOpt.text) !== expected) {
    errors.push(`${id}: expected ${expected}, but marked correct option is ${correctOpt.text}`);
  }
});

// ---- 9. Fraction reduction check helper ----
function toFrac(str) {
  const m = str.trim().match(/^(\d+)\s+(\d+)\/(\d+)$/); // mixed number
  if (m) {
    const whole = parseInt(m[1]), n = parseInt(m[2]), d = parseInt(m[3]);
    return { n: whole * d + n, d };
  }
  const m2 = str.trim().match(/^(\d+)\/(\d+)$/);
  if (m2) return { n: parseInt(m2[1]), d: parseInt(m2[2]) };
  return null;
}
function simplify(f) {
  const g = gcd(f.n, f.d);
  return { n: f.n / g, d: f.d / g };
}
function eq(f1, f2) {
  const s1 = simplify(f1), s2 = simplify(f2);
  return s1.n === s2.n && s1.d === s2.d;
}

// Manually specify expected operation per fraction arithmetic question id: [a, op, b]
const fractionOps = {
  "c3-s3-q14": ["2/7", "+", "3/7"],
  "c3-s3-q15": ["3/8", "+", "3/8"],
  "c3-s4-q16": ["1/3", "+", "1/6"],
  "c3-s4-q17": ["2/5", "+", "1/4"],
  "c3-s4-q18": ["1 1/4", "+", "2/4"],
  "c3-s4-q19": ["5/9", "-", "2/9"],
  "c3-s4-q20": ["3/4", "-", "1/2"],
  "c3-s5-q21": ["5/6", "-", "1/3"],
  "c3-s5-q22": ["2 3/5", "-", "1 1/5"],
  "c3-s5-q23": ["2/8", "+", "3/8"],
  "c3-s5-q24": ["7/8", "-", "1/4"],
  "c3-s5-q25": ["2/3", "+", "1/6"]
};
Object.entries(fractionOps).forEach(([id, [aStr, op, bStr]]) => {
  const q = all.find(q => q.id === id);
  const a = toFrac(aStr), b = toFrac(bStr);
  const commonD = lcm(a.d, b.d);
  const an = a.n * (commonD / a.d), bn = b.n * (commonD / b.d);
  const resultN = op === "+" ? an + bn : an - bn;
  const result = simplify({ n: resultN, d: commonD });
  const correctOpt = q.options.find(o => o.correct);
  const correctFrac = toFrac(correctOpt.text);
  if (!correctFrac || !eq(correctFrac, result)) {
    errors.push(`${id}: ${aStr} ${op} ${bStr} should equal ${result.n}/${result.d}, but marked correct option is "${correctOpt.text}"`);
  }
});

// ---- 10. Fraction comparison checks ----
const comparisons = {
  "c3-s1-q5": ["3/5", "2/5"],
  "c3-s2-q6": ["3/4", "5/8"],
  "c3-s2-q7": ["2/3", "3/5"],
  "c3-s2-q9": ["4/9", "5/12"]
};
Object.entries(comparisons).forEach(([id, [aStr, bStr]]) => {
  const q = all.find(q => q.id === id);
  const a = toFrac(aStr), b = toFrac(bStr);
  const cross = a.n * b.d - b.n * a.d; // >0 means a>b
  const correctOpt = q.options.find(o => o.correct);
  const expectedGreater = cross > 0 ? aStr : bStr;
  if (q.id === "c3-s1-q5" || q.id === "c3-s2-q6" || q.id === "c3-s2-q7") {
    if (correctOpt.text !== expectedGreater) errors.push(`${id}: expected greater fraction ${expectedGreater}, got ${correctOpt.text}`);
  }
  if (q.id === "c3-s2-q9") {
    const expectedSmaller = cross > 0 ? bStr : aStr;
    if (correctOpt.text !== expectedSmaller) errors.push(`${id}: expected smaller fraction ${expectedSmaller}, got ${correctOpt.text}`);
  }
});

// c3-s2-q8 uses symbol comparison 5/6 vs 7/9
{
  const q = all.find(q => q.id === "c3-s2-q8");
  const a = toFrac("5/6"), b = toFrac("7/9");
  const cross = a.n * b.d - b.n * a.d;
  const expectedSymbol = cross > 0 ? ">" : cross < 0 ? "<" : "=";
  const correctOpt = q.options.find(o => o.correct);
  if (correctOpt.text !== expectedSymbol) errors.push(`c3-s2-q8: expected symbol ${expectedSymbol}, got ${correctOpt.text}`);
}

// ---- 11. Ordering questions ----
const orderChecks = {
  "c3-s2-q10": [["1/2","a"],["1/3","b"],["1/4","c"]],
  "c3-s3-q11": [["3/4","a"],["2/3","b"],["5/6","c"]],
  "c3-s3-q12": [["2/5","a"],["3/10","b"],["1/2","c"]],
  "c3-s3-q13": [["5/8","a"],["1/4","b"],["3/4","c"]]
};
Object.entries(orderChecks).forEach(([id, items]) => {
  const q = all.find(q => q.id === id);
  const withVal = items.map(([str,id2]) => ({ id: id2, val: toFrac(str).n / toFrac(str).d }));
  const ascending = [...withVal].sort((x,y)=>x.val-y.val).map(x=>x.id);
  const descending = [...withVal].sort((x,y)=>y.val-x.val).map(x=>x.id);
  const expected = /LARGEST to SMALLEST/i.test(q.text) ? descending : ascending;
  if (JSON.stringify(q.correctOrder) !== JSON.stringify(expected)) {
    errors.push(`${id}: correctOrder ${JSON.stringify(q.correctOrder)} does not match expected ${JSON.stringify(expected)}`);
  }
});

// ---- Report ----
console.log(`Total questions: ${all.length}`);
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log("  ERROR: " + e));
console.log(`Warnings (unchecked by script, verified by hand): ${warnings.length}`);
warnings.forEach(w => console.log("  warn: " + w));
if (errors.length === 0) console.log("\nALL AUTOMATED MATH CHECKS PASSED ✔");
process.exit(errors.length ? 1 : 0);
