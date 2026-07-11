/* ==========================================================================
   CHAPTER 3 — THE FRACTION ISLAND
   25 original, mathematically verified questions.
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.data = window.MAQ.data || {};

window.MAQ.data.chapter3 = [
  {
    id: "c3-s1-q1", chapterId: 3, stageId: 1, questionNumber: 1,
    topic: "Equivalent & Simplified Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which fraction is equivalent to 2/3?",
    hint: "Multiply the numerator and denominator by the same number.",
    options: [
      { id: "a", text: "4/6", correct: true },
      { id: "b", text: "3/5", correct: false, feedback: "3/5 = 0.6, but 2/3 ≈ 0.67 — these are not equal." },
      { id: "c", text: "5/8", correct: false, feedback: "5/8 = 0.625, but 2/3 ≈ 0.67 — these are not equal." },
      { id: "d", text: "6/10", correct: false, feedback: "6/10 simplifies to 3/5, which is not equal to 2/3." }
    ],
    correctExplanation: "Multiplying both the numerator and denominator of 2/3 by 2 gives 4/6, which is equivalent.",
    solutionSteps: ["2/3 × (2/2) = 4/6", "4/6 has the same value as 2/3, just written with bigger numbers."]
  },
  {
    id: "c3-s1-q2", chapterId: 3, stageId: 1, questionNumber: 2,
    topic: "Equivalent & Simplified Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Simplify 12/18 to its lowest terms.",
    hint: "Find the HCF of 12 and 18, then divide both numbers by it.",
    options: [
      { id: "a", text: "2/3", correct: true },
      { id: "b", text: "6/9", correct: false, feedback: "6/9 has the same value as 12/18, but it is not fully simplified — 6 and 9 can still both be divided by 3." },
      { id: "c", text: "4/6", correct: false, feedback: "4/6 has the same value as 12/18, but it is not fully simplified — 4 and 6 can still both be divided by 2." },
      { id: "d", text: "1/2", correct: false, feedback: "1/2 = 0.5, but 12/18 ≈ 0.67 — these are not equal." }
    ],
    correctExplanation: "The HCF of 12 and 18 is 6. Dividing both numbers by 6 gives 12÷6 / 18÷6 = 2/3, which cannot be simplified further.",
    solutionSteps: ["Find the HCF of 12 and 18: it is 6.", "Divide numerator and denominator by 6: 12÷6=2, 18÷6=3.", "12/18 simplifies to 2/3."]
  },
  {
    id: "c3-s1-q3", chapterId: 3, stageId: 1, questionNumber: 3,
    topic: "Equivalent & Simplified Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which fraction is NOT equivalent to 3/4?",
    hint: "Check whether each fraction simplifies back down to 3/4.",
    options: [
      { id: "a", text: "6/8", correct: false, feedback: "6/8 simplifies to 3/4, so it IS equivalent — keep checking." },
      { id: "b", text: "9/12", correct: false, feedback: "9/12 simplifies to 3/4, so it IS equivalent — keep checking." },
      { id: "c", text: "12/16", correct: false, feedback: "12/16 simplifies to 3/4, so it IS equivalent — keep checking." },
      { id: "d", text: "8/10", correct: true }
    ],
    correctExplanation: "8/10 simplifies to 4/5, which is not the same as 3/4 (0.8 vs 0.75).",
    solutionSteps: ["3/4 = 0.75", "6/8 = 0.75, 9/12 = 0.75, 12/16 = 0.75 — all match.", "8/10 = 0.8, which does not match 3/4."]
  },
  {
    id: "c3-s1-q4", chapterId: 3, stageId: 1, questionNumber: 4,
    topic: "Equivalent & Simplified Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Simplify 24/36 to its lowest terms.",
    hint: "The HCF of 24 and 36 is 12.",
    options: [
      { id: "a", text: "2/3", correct: true },
      { id: "b", text: "3/4", correct: false, feedback: "3/4 = 0.75, but 24/36 ≈ 0.67 — these are not equal." },
      { id: "c", text: "4/6", correct: false, feedback: "4/6 has the same value as 24/36, but it is not fully simplified — 4 and 6 can still both be divided by 2." },
      { id: "d", text: "8/12", correct: false, feedback: "8/12 has the same value as 24/36, but it is not fully simplified — 8 and 12 can still both be divided by 4." }
    ],
    correctExplanation: "The HCF of 24 and 36 is 12. Dividing both numbers by 12 gives 24÷12 / 36÷12 = 2/3.",
    solutionSteps: ["Find the HCF of 24 and 36: it is 12.", "Divide both numbers by 12: 24÷12=2, 36÷12=3.", "24/36 simplifies to 2/3."]
  },
  {
    id: "c3-s1-q5", chapterId: 3, stageId: 1, questionNumber: 5,
    topic: "Comparing Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which is greater: 3/5 or 2/5?",
    hint: "When denominators are the same, compare the numerators.",
    options: [
      { id: "a", text: "3/5", correct: true },
      { id: "b", text: "2/5", correct: false, feedback: "2/5 has a smaller numerator than 3/5, so it is the smaller fraction." },
      { id: "c", text: "They are equal", correct: false, feedback: "They have different numerators (3 and 2), so they are not equal." },
      { id: "d", text: "Cannot be compared", correct: false, feedback: "Fractions with the same denominator can always be compared directly by their numerators." }
    ],
    correctExplanation: "Both fractions share the denominator 5, so we compare numerators: 3 is greater than 2, so 3/5 is greater.",
    solutionSteps: ["Both fractions have denominator 5.", "Compare numerators: 3 > 2.", "So 3/5 > 2/5."]
  },
  {
    id: "c3-s2-q6", chapterId: 3, stageId: 2, questionNumber: 6,
    topic: "Comparing Fractions", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which is greater: 3/4 or 5/8?",
    hint: "Convert 3/4 to eighths so both fractions have the same denominator.",
    options: [
      { id: "a", text: "3/4", correct: true },
      { id: "b", text: "5/8", correct: false, feedback: "3/4 = 6/8, and 6/8 is greater than 5/8." },
      { id: "c", text: "They are equal", correct: false, feedback: "3/4 = 6/8, which is not equal to 5/8." },
      { id: "d", text: "Cannot be compared", correct: false, feedback: "We can compare them by converting to a common denominator." }
    ],
    correctExplanation: "3/4 = 6/8. Since 6/8 is greater than 5/8, 3/4 is the greater fraction.",
    solutionSteps: ["Convert 3/4 to eighths: 3/4 = 6/8.", "Compare 6/8 and 5/8.", "6/8 > 5/8, so 3/4 > 5/8."]
  },
  {
    id: "c3-s2-q7", chapterId: 3, stageId: 2, questionNumber: 7,
    topic: "Comparing Fractions", difficulty: "developing", type: "mcq", points: 10,
    text: "Which is greater: 2/3 or 3/5?",
    hint: "The LCD of 3 and 5 is 15. Convert both fractions to fifteenths.",
    options: [
      { id: "a", text: "2/3", correct: true },
      { id: "b", text: "3/5", correct: false, feedback: "2/3 = 10/15 and 3/5 = 9/15 — 10/15 is greater." },
      { id: "c", text: "They are equal", correct: false, feedback: "2/3 = 10/15 and 3/5 = 9/15, which are not equal." },
      { id: "d", text: "Cannot be compared", correct: false, feedback: "We can compare them by converting to a common denominator of 15." }
    ],
    correctExplanation: "2/3 = 10/15 and 3/5 = 9/15. Since 10/15 is greater than 9/15, 2/3 is greater.",
    solutionSteps: ["LCD of 3 and 5 is 15.", "2/3 = 10/15, 3/5 = 9/15.", "10/15 > 9/15, so 2/3 > 3/5."]
  },
  {
    id: "c3-s2-q8", chapterId: 3, stageId: 2, questionNumber: 8,
    topic: "Comparing Fractions", difficulty: "developing", type: "mcq", points: 10,
    text: "Which symbol correctly compares 5/6 and 7/9?",
    hint: "The LCD of 6 and 9 is 18.",
    options: [
      { id: "a", text: ">", correct: true },
      { id: "b", text: "<", correct: false, feedback: "5/6 = 15/18 and 7/9 = 14/18 — 15/18 is greater, not less." },
      { id: "c", text: "=", correct: false, feedback: "5/6 = 15/18 and 7/9 = 14/18, which are not equal." },
      { id: "d", text: "None of these", correct: false, feedback: "One of the comparison symbols does correctly describe the relationship." }
    ],
    correctExplanation: "5/6 = 15/18 and 7/9 = 14/18. Since 15/18 is greater than 14/18, the correct symbol is >.",
    solutionSteps: ["LCD of 6 and 9 is 18.", "5/6 = 15/18, 7/9 = 14/18.", "15/18 > 14/18, so 5/6 > 7/9."]
  },
  {
    id: "c3-s2-q9", chapterId: 3, stageId: 2, questionNumber: 9,
    topic: "Comparing Fractions", difficulty: "developing", type: "mcq", points: 10,
    text: "Which is smaller: 4/9 or 5/12?",
    hint: "The LCD of 9 and 12 is 36.",
    options: [
      { id: "a", text: "5/12", correct: true },
      { id: "b", text: "4/9", correct: false, feedback: "4/9 = 16/36 and 5/12 = 15/36 — 15/36 is smaller." },
      { id: "c", text: "They are equal", correct: false, feedback: "4/9 = 16/36 and 5/12 = 15/36, which are not equal." },
      { id: "d", text: "Cannot be compared", correct: false, feedback: "We can compare them by converting to a common denominator of 36." }
    ],
    correctExplanation: "4/9 = 16/36 and 5/12 = 15/36. Since 15/36 is less than 16/36, 5/12 is the smaller fraction.",
    solutionSteps: ["LCD of 9 and 12 is 36.", "4/9 = 16/36, 5/12 = 15/36.", "15/36 < 16/36, so 5/12 < 4/9."]
  },
  {
    id: "c3-s2-q10", chapterId: 3, stageId: 2, questionNumber: 10,
    topic: "Ordering Fractions", difficulty: "developing", type: "order", points: 10,
    text: "Arrange these fractions in order from SMALLEST to LARGEST: 1/2, 1/3, 1/4",
    hint: "Think of these as pieces of a whole — the more pieces something is split into, the smaller each piece is.",
    orderItems: [
      { id: "a", text: "1/2" }, { id: "b", text: "1/3" }, { id: "c", text: "1/4" }
    ],
    correctOrder: ["c", "b", "a"],
    correctExplanation: "As decimals, 1/4 = 0.25, 1/3 ≈ 0.33, and 1/2 = 0.5, so the order from smallest to largest is 1/4, 1/3, 1/2.",
    solutionSteps: ["Convert to a common denominator of 12: 1/2=6/12, 1/3=4/12, 1/4=3/12.", "Order the numerators: 3 < 4 < 6.", "So the order is 1/4, 1/3, 1/2."],
    incorrectGenericFeedback: "Not quite the right order. Try converting all three fractions to a common denominator of 12 before comparing them."
  },
  {
    id: "c3-s3-q11", chapterId: 3, stageId: 3, questionNumber: 11,
    topic: "Ordering Fractions", difficulty: "developing", type: "order", points: 10,
    text: "Arrange these fractions in order from SMALLEST to LARGEST: 3/4, 2/3, 5/6",
    hint: "Try converting all three fractions to twelfths.",
    orderItems: [
      { id: "a", text: "3/4" }, { id: "b", text: "2/3" }, { id: "c", text: "5/6" }
    ],
    correctOrder: ["b", "a", "c"],
    correctExplanation: "Using twelfths: 3/4 = 9/12, 2/3 = 8/12, 5/6 = 10/12. So the order is 2/3, 3/4, 5/6.",
    solutionSteps: ["LCD of 4, 3, 6 is 12.", "3/4 = 9/12, 2/3 = 8/12, 5/6 = 10/12.", "Order the numerators: 8 < 9 < 10.", "So the order is 2/3, 3/4, 5/6."],
    incorrectGenericFeedback: "Not quite the right order. Convert each fraction to twelfths, then compare the numerators."
  },
  {
    id: "c3-s3-q12", chapterId: 3, stageId: 3, questionNumber: 12,
    topic: "Ordering Fractions", difficulty: "developing", type: "order", points: 10,
    text: "Arrange these fractions in order from LARGEST to SMALLEST: 2/5, 3/10, 1/2",
    hint: "Try converting all three fractions to tenths.",
    orderItems: [
      { id: "a", text: "2/5" }, { id: "b", text: "3/10" }, { id: "c", text: "1/2" }
    ],
    correctOrder: ["c", "a", "b"],
    correctExplanation: "Using tenths: 2/5 = 4/10, 3/10 = 3/10, 1/2 = 5/10. From largest to smallest: 1/2, 2/5, 3/10.",
    solutionSteps: ["LCD of 5, 10, 2 is 10.", "2/5 = 4/10, 3/10 = 3/10, 1/2 = 5/10.", "Order the numerators from largest to smallest: 5 > 4 > 3.", "So the order is 1/2, 2/5, 3/10."],
    incorrectGenericFeedback: "Not quite the right order. Convert each fraction to tenths, then compare the numerators from largest to smallest."
  },
  {
    id: "c3-s3-q13", chapterId: 3, stageId: 3, questionNumber: 13,
    topic: "Ordering Fractions", difficulty: "challenge", type: "order", points: 10,
    text: "Arrange these fractions in order from SMALLEST to LARGEST: 5/8, 1/4, 3/4",
    hint: "Try converting all three fractions to eighths.",
    orderItems: [
      { id: "a", text: "5/8" }, { id: "b", text: "1/4" }, { id: "c", text: "3/4" }
    ],
    correctOrder: ["b", "a", "c"],
    correctExplanation: "Using eighths: 5/8 = 5/8, 1/4 = 2/8, 3/4 = 6/8. So the order is 1/4, 5/8, 3/4.",
    solutionSteps: ["LCD of 8 and 4 is 8.", "1/4 = 2/8, 5/8 = 5/8, 3/4 = 6/8.", "Order the numerators: 2 < 5 < 6.", "So the order is 1/4, 5/8, 3/4."],
    incorrectGenericFeedback: "Not quite the right order. Convert each fraction to eighths, then compare the numerators."
  },
  {
    id: "c3-s3-q14", chapterId: 3, stageId: 3, questionNumber: 14,
    topic: "Fraction Addition", difficulty: "developing", type: "mcq", points: 10,
    text: "Calculate: 2/7 + 3/7",
    hint: "When denominators are the same, just add the numerators.",
    options: [
      { id: "a", text: "5/7", correct: true },
      { id: "b", text: "5/14", correct: false, feedback: "When denominators are already the same, you don't add them together — keep the denominator as 7." },
      { id: "c", text: "6/7", correct: false, feedback: "2 + 3 = 5, not 6 — check your addition of the numerators." },
      { id: "d", text: "1", correct: false, feedback: "2/7 + 3/7 does not make a whole one — it only makes 5/7." }
    ],
    correctExplanation: "The denominators are already the same, so simply add the numerators: 2 + 3 = 5, giving 5/7.",
    solutionSteps: ["Denominators are the same (7), so keep the denominator.", "Add the numerators: 2 + 3 = 5.", "Result: 5/7."]
  },
  {
    id: "c3-s3-q15", chapterId: 3, stageId: 3, questionNumber: 15,
    topic: "Fraction Addition", difficulty: "developing", type: "mcq", points: 10,
    text: "Calculate: 3/8 + 3/8. Give your answer in lowest terms.",
    hint: "Add the numerators first, then check if the result can be simplified.",
    options: [
      { id: "a", text: "3/4", correct: true },
      { id: "b", text: "6/8", correct: false, feedback: "6/8 is the correct value, but it is not fully simplified. Divide both numbers by their HCF (2) to get 3/4." },
      { id: "c", text: "6/16", correct: false, feedback: "The denominators should not be added together — keep the denominator as 8 before simplifying." },
      { id: "d", text: "3/8", correct: false, feedback: "3/8 + 3/8 is more than just one 3/8 — you need to add both parts together." }
    ],
    correctExplanation: "3/8 + 3/8 = 6/8, which simplifies to 3/4 because the HCF of 6 and 8 is 2.",
    solutionSteps: ["Denominators match, so add numerators: 3 + 3 = 6, giving 6/8.", "Simplify: HCF of 6 and 8 is 2.", "6÷2 / 8÷2 = 3/4."]
  },
  {
    id: "c3-s4-q16", chapterId: 3, stageId: 4, questionNumber: 16,
    topic: "Fraction Addition", difficulty: "developing", type: "mcq", points: 10,
    text: "Calculate: 1/3 + 1/6",
    hint: "Find the LCD of 3 and 6 first — it is 6.",
    options: [
      { id: "a", text: "1/2", correct: true },
      { id: "b", text: "2/9", correct: false, feedback: "You cannot add fractions by adding numerators and denominators separately — first find a common denominator." },
      { id: "c", text: "3/6", correct: false, feedback: "3/6 is the correct value before simplifying, but it should be simplified to 1/2." },
      { id: "d", text: "2/6", correct: false, feedback: "Check your conversion of 1/3 to sixths — 1/3 = 2/6 is correct, but then you must add 1/6 as well." }
    ],
    correctExplanation: "1/3 = 2/6, so 2/6 + 1/6 = 3/6, which simplifies to 1/2.",
    solutionSteps: ["LCD of 3 and 6 is 6.", "Convert 1/3 to sixths: 1/3 = 2/6.", "Add: 2/6 + 1/6 = 3/6.", "Simplify: 3/6 = 1/2."]
  },
  {
    id: "c3-s4-q17", chapterId: 3, stageId: 4, questionNumber: 17,
    topic: "Fraction Addition", difficulty: "developing", type: "mcq", points: 10,
    text: "Calculate: 2/5 + 1/4",
    hint: "Find the LCD of 5 and 4 — it is 20.",
    options: [
      { id: "a", text: "13/20", correct: true },
      { id: "b", text: "3/9", correct: false, feedback: "You cannot add fractions by adding numerators and denominators separately — first find a common denominator." },
      { id: "c", text: "9/20", correct: false, feedback: "Check your conversion of 2/5 to twentieths — 2/5 = 8/20, not 5/20." },
      { id: "d", text: "3/20", correct: false, feedback: "This looks like the numerators were subtracted instead of added — try adding 8/20 + 5/20." }
    ],
    correctExplanation: "2/5 = 8/20 and 1/4 = 5/20, so 8/20 + 5/20 = 13/20.",
    solutionSteps: ["LCD of 5 and 4 is 20.", "Convert: 2/5 = 8/20, 1/4 = 5/20.", "Add: 8/20 + 5/20 = 13/20.", "13/20 is already in lowest terms."]
  },
  {
    id: "c3-s4-q18", chapterId: 3, stageId: 4, questionNumber: 18,
    topic: "Fraction Addition", difficulty: "challenge", type: "mcq", points: 10,
    text: "Calculate: 1 1/4 + 2/4",
    hint: "Add the fraction parts first, then combine with the whole number.",
    options: [
      { id: "a", text: "1 3/4", correct: true },
      { id: "b", text: "1 1/2", correct: false, feedback: "1/4 + 2/4 = 3/4, not 1/2 — check your addition of the fraction parts." },
      { id: "c", text: "2", correct: false, feedback: "1/4 + 2/4 = 3/4, which is less than a whole one, so the answer is not a whole number." },
      { id: "d", text: "1 2/4", correct: false, feedback: "1/4 + 2/4 = 3/4, not 2/4 — check your addition of the numerators." }
    ],
    correctExplanation: "Keep the whole number 1, and add the fractions: 1/4 + 2/4 = 3/4. The result is 1 3/4.",
    solutionSteps: ["Add the fraction parts: 1/4 + 2/4 = 3/4.", "Keep the whole number: 1.", "Combine: 1 3/4."]
  },
  {
    id: "c3-s4-q19", chapterId: 3, stageId: 4, questionNumber: 19,
    topic: "Fraction Subtraction", difficulty: "challenge", type: "mcq", points: 10,
    text: "Calculate: 5/9 - 2/9. Give your answer in lowest terms.",
    hint: "Subtract the numerators first, then simplify if possible.",
    options: [
      { id: "a", text: "1/3", correct: true },
      { id: "b", text: "3/9", correct: false, feedback: "3/9 is the correct value, but it is not fully simplified. Divide both numbers by their HCF (3) to get 1/3." },
      { id: "c", text: "2/9", correct: false, feedback: "5 − 2 = 3, not 2 — check your subtraction of the numerators." },
      { id: "d", text: "4/9", correct: false, feedback: "5 − 2 = 3, not 4 — check your subtraction of the numerators." }
    ],
    correctExplanation: "5/9 - 2/9 = 3/9, which simplifies to 1/3 because the HCF of 3 and 9 is 3.",
    solutionSteps: ["Denominators match, so subtract numerators: 5 - 2 = 3, giving 3/9.", "Simplify: HCF of 3 and 9 is 3.", "3÷3 / 9÷3 = 1/3."]
  },
  {
    id: "c3-s4-q20", chapterId: 3, stageId: 4, questionNumber: 20,
    topic: "Fraction Subtraction", difficulty: "challenge", type: "mcq", points: 10,
    text: "Calculate: 3/4 - 1/2",
    hint: "Convert 1/2 to quarters before subtracting.",
    options: [
      { id: "a", text: "1/4", correct: true },
      { id: "b", text: "1/2", correct: false, feedback: "Convert 1/2 to quarters (2/4) first, then subtract: 3/4 - 2/4 = 1/4, not 1/2." },
      { id: "c", text: "2/4", correct: false, feedback: "3/4 - 2/4 = 1/4, not 2/4 — check your subtraction." },
      { id: "d", text: "1/8", correct: false, feedback: "The denominators should not be multiplied here — convert 1/2 to quarters instead." }
    ],
    correctExplanation: "1/2 = 2/4, so 3/4 - 2/4 = 1/4.",
    solutionSteps: ["LCD of 4 and 2 is 4.", "Convert 1/2 to quarters: 1/2 = 2/4.", "Subtract: 3/4 - 2/4 = 1/4."]
  },
  {
    id: "c3-s5-q21", chapterId: 3, stageId: 5, questionNumber: 21,
    topic: "Fraction Subtraction", difficulty: "challenge", type: "mcq", points: 10,
    text: "Calculate: 5/6 - 1/3. Give your answer in lowest terms.",
    hint: "Convert 1/3 to sixths before subtracting, then simplify.",
    options: [
      { id: "a", text: "1/2", correct: true },
      { id: "b", text: "3/6", correct: false, feedback: "3/6 is the correct value, but it is not fully simplified. Divide both numbers by their HCF (3) to get 1/2." },
      { id: "c", text: "2/3", correct: false, feedback: "Check your conversion of 1/3 to sixths — 1/3 = 2/6, then subtract from 5/6." },
      { id: "d", text: "1/3", correct: false, feedback: "This is the value you were subtracting, not the answer — subtract 2/6 from 5/6." }
    ],
    correctExplanation: "1/3 = 2/6, so 5/6 - 2/6 = 3/6, which simplifies to 1/2.",
    solutionSteps: ["LCD of 6 and 3 is 6.", "Convert 1/3 to sixths: 1/3 = 2/6.", "Subtract: 5/6 - 2/6 = 3/6.", "Simplify: 3/6 = 1/2."]
  },
  {
    id: "c3-s5-q22", chapterId: 3, stageId: 5, questionNumber: 22,
    topic: "Fraction Subtraction", difficulty: "challenge", type: "mcq", points: 10,
    text: "Calculate: 2 3/5 - 1 1/5",
    hint: "Subtract the whole numbers and the fraction parts separately.",
    options: [
      { id: "a", text: "1 2/5", correct: true },
      { id: "b", text: "1 1/5", correct: false, feedback: "3/5 - 1/5 = 2/5, not 1/5 — check your subtraction of the fraction parts." },
      { id: "c", text: "3/5", correct: false, feedback: "Don't forget to subtract the whole numbers too: 2 - 1 = 1, plus the fraction part 2/5." },
      { id: "d", text: "2 2/5", correct: false, feedback: "2 - 1 = 1, not 2 — check your subtraction of the whole numbers." }
    ],
    correctExplanation: "Subtract the whole numbers: 2 - 1 = 1. Subtract the fractions: 3/5 - 1/5 = 2/5. Combine: 1 2/5.",
    solutionSteps: ["Subtract whole numbers: 2 - 1 = 1.", "Subtract fraction parts: 3/5 - 1/5 = 2/5.", "Combine: 1 2/5."]
  },
  {
    id: "c3-s5-q23", chapterId: 3, stageId: 5, questionNumber: 23,
    topic: "Fraction Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "Ali ate 2/8 of a pizza and his sister ate 3/8 of the same pizza. What fraction of the pizza did they eat altogether?",
    hint: "The denominators are already the same — just add the numerators.",
    options: [
      { id: "a", text: "5/8", correct: true },
      { id: "b", text: "1/8", correct: false, feedback: "This looks like a subtraction — the question asks how much they ate altogether, so you should add." },
      { id: "c", text: "6/16", correct: false, feedback: "The denominators should not be added — keep the denominator as 8." },
      { id: "d", text: "5/16", correct: false, feedback: "The denominators should not be added — keep the denominator as 8, giving 5/8." }
    ],
    correctExplanation: "Since the denominators are the same, add the numerators: 2/8 + 3/8 = 5/8.",
    solutionSteps: ["Both fractions have denominator 8.", "Add the numerators: 2 + 3 = 5.", "Together they ate 5/8 of the pizza."]
  },
  {
    id: "c3-s5-q24", chapterId: 3, stageId: 5, questionNumber: 24,
    topic: "Fraction Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "A ribbon is 7/8 metres long. Nina cuts off 1/4 metre to decorate a gift. What length of ribbon is left?",
    hint: "Convert 1/4 to eighths before subtracting.",
    options: [
      { id: "a", text: "5/8", correct: true },
      { id: "b", text: "3/4", correct: false, feedback: "Convert 1/4 to eighths first: 1/4 = 2/8. Then subtract from 7/8." },
      { id: "c", text: "6/8", correct: false, feedback: "7/8 - 2/8 = 5/8, not 6/8 — check your subtraction." },
      { id: "d", text: "1/2", correct: false, feedback: "7/8 - 2/8 = 5/8, not 1/2 — check your subtraction." }
    ],
    correctExplanation: "1/4 = 2/8, so the ribbon left is 7/8 - 2/8 = 5/8 metres.",
    solutionSteps: ["Convert 1/4 to eighths: 1/4 = 2/8.", "Subtract: 7/8 - 2/8 = 5/8.", "5/8 metres of ribbon is left."]
  },
  {
    id: "c3-s5-q25", chapterId: 3, stageId: 5, questionNumber: 25,
    topic: "Fraction Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "A recipe needs 2/3 cup of flour and 1/6 cup of sugar. How much flour and sugar combined does the recipe need?",
    hint: "Convert 2/3 to sixths before adding.",
    options: [
      { id: "a", text: "5/6", correct: true },
      { id: "b", text: "3/9", correct: false, feedback: "You cannot add fractions by adding numerators and denominators separately — first find a common denominator." },
      { id: "c", text: "1/2", correct: false, feedback: "2/3 = 4/6, and 4/6 + 1/6 = 5/6, not 1/2 — check your conversion and addition." },
      { id: "d", text: "3/6", correct: false, feedback: "2/3 = 4/6, and 4/6 + 1/6 = 5/6, not 3/6 — check your conversion of 2/3." }
    ],
    correctExplanation: "2/3 = 4/6, so 4/6 + 1/6 = 5/6 cup combined.",
    solutionSteps: ["LCD of 3 and 6 is 6.", "Convert 2/3 to sixths: 2/3 = 4/6.", "Add: 4/6 + 1/6 = 5/6."]
  }
];
