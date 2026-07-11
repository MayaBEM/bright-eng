/* ==========================================================================
   CHAPTER 1 — THE FACTOR FOREST
   25 original, mathematically verified questions.
   Stages: 1 Warm-Up Trail, 2 Puzzle Path, 3 Skill Cave, 4 Challenge Tower, 5 Crystal Mission
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.data = window.MAQ.data || {};

window.MAQ.data.chapter1 = [
  {
    id: "c1-s1-q1", chapterId: 1, stageId: 1, questionNumber: 1,
    topic: "Identifying Factors", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which of these numbers is a factor of 20?",
    hint: "A factor divides the number exactly, with no remainder.",
    options: [
      { id: "a", text: "6", correct: false, feedback: "6 does not divide 20 evenly (20 ÷ 6 leaves a remainder), so 6 is not a factor of 20." },
      { id: "b", text: "5", correct: true },
      { id: "c", text: "9", correct: false, feedback: "9 does not divide 20 evenly (20 ÷ 9 leaves a remainder), so 9 is not a factor of 20." },
      { id: "d", text: "8", correct: false, feedback: "8 does not divide 20 evenly (20 ÷ 8 leaves a remainder), so 8 is not a factor of 20." }
    ],
    correctExplanation: "20 ÷ 5 = 4 exactly, with nothing left over, so 5 is a factor of 20.",
    solutionSteps: ["Divide 20 by each option.", "20 ÷ 5 = 4 with no remainder.", "Because the division is exact, 5 is a factor of 20."]
  },
  {
    id: "c1-s1-q2", chapterId: 1, stageId: 1, questionNumber: 2,
    topic: "Identifying Factors", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which of these numbers has 7 as one of its factors?",
    hint: "Try dividing each number by 7 and check for a remainder.",
    options: [
      { id: "a", text: "45", correct: false, feedback: "45 ÷ 7 = 6 remainder 3, so 7 is not a factor of 45." },
      { id: "b", text: "50", correct: false, feedback: "50 ÷ 7 = 7 remainder 1, so 7 is not a factor of 50." },
      { id: "c", text: "56", correct: true },
      { id: "d", text: "60", correct: false, feedback: "60 ÷ 7 = 8 remainder 4, so 7 is not a factor of 60." }
    ],
    correctExplanation: "56 ÷ 7 = 8 exactly, so 7 is a factor of 56 (7 × 8 = 56).",
    solutionSteps: ["Divide each number by 7.", "56 ÷ 7 = 8 with no remainder.", "Since 7 × 8 = 56, 7 is a factor of 56."]
  },
  {
    id: "c1-s1-q3", chapterId: 1, stageId: 1, questionNumber: 3,
    topic: "Identifying Factors", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which number is NOT a factor of 36?",
    hint: "The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18 and 36.",
    options: [
      { id: "a", text: "4", correct: false, feedback: "36 ÷ 4 = 9 exactly, so 4 IS a factor of 36 — look for the one that leaves a remainder." },
      { id: "b", text: "6", correct: false, feedback: "36 ÷ 6 = 6 exactly, so 6 IS a factor of 36 — look for the one that leaves a remainder." },
      { id: "c", text: "8", correct: true },
      { id: "d", text: "9", correct: false, feedback: "36 ÷ 9 = 4 exactly, so 9 IS a factor of 36 — look for the one that leaves a remainder." }
    ],
    correctExplanation: "36 ÷ 8 = 4 remainder 4, so 8 does not divide 36 exactly — it is not a factor.",
    solutionSteps: ["The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.", "8 does not appear in this list.", "Check: 36 ÷ 8 = 4 remainder 4, confirming 8 is not a factor."]
  },
  {
    id: "c1-s1-q4", chapterId: 1, stageId: 1, questionNumber: 4,
    topic: "Identifying Factors", difficulty: "foundation", type: "select", points: 10,
    text: "Select ALL the correct factors of 24 from the choices below.",
    hint: "Check each number by dividing 24 by it — no remainder means it's a factor.",
    selectOptions: [
      { id: "a", text: "3", correct: true },
      { id: "b", text: "5", correct: false },
      { id: "c", text: "6", correct: true },
      { id: "d", text: "10", correct: false },
      { id: "e", text: "12", correct: true },
      { id: "f", text: "7", correct: false }
    ],
    correctExplanation: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24. From the choices, 3, 6 and 12 all divide 24 exactly.",
    solutionSteps: ["List the factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.", "Compare each choice to this list.", "3, 6 and 12 appear in the list — 5, 10 and 7 do not."]
  },
  {
    id: "c1-s1-q5", chapterId: 1, stageId: 1, questionNumber: 5,
    topic: "Identifying Factors", difficulty: "foundation", type: "numeric", points: 10,
    text: "Fill in the missing number: 20 ÷ ___ = 5, so ___ is a factor of 20.",
    hint: "Think about what number multiplied by 5 gives 20.",
    answer: "4", acceptableAnswers: ["4"],
    correctExplanation: "20 ÷ 4 = 5 exactly, and 4 × 5 = 20, so 4 is a factor of 20.",
    solutionSteps: ["We need 20 ÷ ? = 5.", "Since 4 × 5 = 20, the missing number is 4.", "Check: 20 ÷ 4 = 5 exactly."],
    incorrectGenericFeedback: "That is not the missing number. Remember: if 20 ÷ n = 5, then n × 5 must equal 20."
  },
  {
    id: "c1-s2-q6", chapterId: 1, stageId: 2, questionNumber: 6,
    topic: "Factor Pairs", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which factor pair of 18 includes the number 3?",
    hint: "A factor pair multiplies together to make 18.",
    options: [
      { id: "a", text: "3 × 6", correct: true },
      { id: "b", text: "3 × 9", correct: false, feedback: "3 × 9 = 27, not 18, so this is not a factor pair of 18." },
      { id: "c", text: "3 × 5", correct: false, feedback: "3 × 5 = 15, not 18, so this is not a factor pair of 18." },
      { id: "d", text: "3 × 15", correct: false, feedback: "3 × 15 = 45, not 18, so this is not a factor pair of 18." }
    ],
    correctExplanation: "3 × 6 = 18, so (3, 6) is a factor pair of 18.",
    solutionSteps: ["A factor pair for 18 must multiply to 18.", "Test 3 × 6 = 18 — this works.", "So (3, 6) is the correct factor pair."]
  },
  {
    id: "c1-s2-q7", chapterId: 1, stageId: 2, questionNumber: 7,
    topic: "Factor Pairs", difficulty: "foundation", type: "mcq", points: 10,
    text: "Which factor pair multiplies to give 40?",
    hint: "Try each pair and see which one equals 40.",
    options: [
      { id: "a", text: "5 × 8", correct: true },
      { id: "b", text: "4 × 9", correct: false, feedback: "4 × 9 = 36, not 40." },
      { id: "c", text: "6 × 7", correct: false, feedback: "6 × 7 = 42, not 40." },
      { id: "d", text: "5 × 9", correct: false, feedback: "5 × 9 = 45, not 40." }
    ],
    correctExplanation: "5 × 8 = 40, so this is the correct factor pair.",
    solutionSteps: ["Multiply each pair.", "5 × 8 = 40 — this matches.", "The other pairs multiply to 36, 42, and 45."]
  },
  {
    id: "c1-s2-q8", chapterId: 1, stageId: 2, questionNumber: 8,
    topic: "Factor Pairs", difficulty: "foundation", type: "mcq", points: 10,
    text: "How many factor pairs does the number 16 have?",
    hint: "List the factors of 16 first: 1, 2, 4, 8, 16.",
    options: [
      { id: "a", text: "2", correct: false, feedback: "16 has more than 2 factor pairs — try listing all the factors first." },
      { id: "b", text: "3", correct: true },
      { id: "c", text: "4", correct: false, feedback: "That is too many — some of those pairs would not multiply to 16." },
      { id: "d", text: "5", correct: false, feedback: "That is too many — some of those pairs would not multiply to 16." }
    ],
    correctExplanation: "The factor pairs of 16 are (1, 16), (2, 8) and (4, 4) — that is 3 factor pairs.",
    solutionSteps: ["Factors of 16: 1, 2, 4, 8, 16.", "Pair them so each pair multiplies to 16: (1,16), (2,8), (4,4).", "That gives exactly 3 factor pairs."]
  },
  {
    id: "c1-s2-q9", chapterId: 1, stageId: 2, questionNumber: 9,
    topic: "Factor Pairs", difficulty: "developing", type: "mcq", points: 10,
    text: "Which of these is NOT a factor pair of 48?",
    hint: "Multiply each pair — one of them will not equal 48.",
    options: [
      { id: "a", text: "6 × 8", correct: false, feedback: "6 × 8 = 48, so this IS a factor pair of 48 — keep checking." },
      { id: "b", text: "4 × 12", correct: false, feedback: "4 × 12 = 48, so this IS a factor pair of 48 — keep checking." },
      { id: "c", text: "5 × 10", correct: true },
      { id: "d", text: "3 × 16", correct: false, feedback: "3 × 16 = 48, so this IS a factor pair of 48 — keep checking." }
    ],
    correctExplanation: "5 × 10 = 50, not 48, so (5, 10) is not a factor pair of 48.",
    solutionSteps: ["Multiply each option.", "5 × 10 = 50 ≠ 48.", "The other three pairs all multiply exactly to 48."]
  },
  {
    id: "c1-s2-q10", chapterId: 1, stageId: 2, questionNumber: 10,
    topic: "Prime & Composite Numbers", difficulty: "developing", type: "mcq", points: 10,
    text: "Which of these numbers is prime?",
    hint: "A prime number has exactly two factors: 1 and itself.",
    options: [
      { id: "a", text: "21", correct: false, feedback: "21 = 3 × 7, so it has more than two factors — it is composite." },
      { id: "b", text: "29", correct: true },
      { id: "c", text: "33", correct: false, feedback: "33 = 3 × 11, so it has more than two factors — it is composite." },
      { id: "d", text: "45", correct: false, feedback: "45 = 9 × 5, so it has more than two factors — it is composite." }
    ],
    correctExplanation: "29 can only be divided evenly by 1 and 29, so it is a prime number.",
    solutionSteps: ["Check each number for factors other than 1 and itself.", "29 has no other factors — it is prime.", "21, 33 and 45 can all be split into smaller factors, so they are composite."]
  },
  {
    id: "c1-s3-q11", chapterId: 1, stageId: 3, questionNumber: 11,
    topic: "Prime & Composite Numbers", difficulty: "developing", type: "mcq", points: 10,
    text: "Which of these numbers is composite?",
    hint: "A composite number has more than two factors.",
    options: [
      { id: "a", text: "17", correct: false, feedback: "17 can only be divided by 1 and 17 — it is prime, not composite." },
      { id: "b", text: "19", correct: false, feedback: "19 can only be divided by 1 and 19 — it is prime, not composite." },
      { id: "c", text: "23", correct: false, feedback: "23 can only be divided by 1 and 23 — it is prime, not composite." },
      { id: "d", text: "27", correct: true }
    ],
    correctExplanation: "27 = 3 × 9, so it has factors besides 1 and itself — it is composite.",
    solutionSteps: ["Check each number for extra factors.", "27 ÷ 3 = 9 exactly, so 27 has factors 1, 3, 9, 27.", "Having more than two factors makes 27 composite."]
  },
  {
    id: "c1-s3-q12", chapterId: 1, stageId: 3, questionNumber: 12,
    topic: "Prime & Composite Numbers", difficulty: "developing", type: "select", points: 10,
    text: "Select ALL the prime numbers in this list.",
    hint: "Check that each number has no factors other than 1 and itself.",
    selectOptions: [
      { id: "a", text: "11", correct: true },
      { id: "b", text: "15", correct: false },
      { id: "c", text: "17", correct: true },
      { id: "d", text: "20", correct: false },
      { id: "e", text: "23", correct: true },
      { id: "f", text: "25", correct: false }
    ],
    correctExplanation: "11, 17 and 23 each have only two factors (1 and themselves), so they are prime. 15 = 3×5, 20 = 4×5, and 25 = 5×5 are composite.",
    solutionSteps: ["Test each number for extra factors.", "11, 17, 23 have no other factors — prime.", "15, 20, 25 can each be divided evenly by a number other than 1 and itself — composite."]
  },
  {
    id: "c1-s3-q13", chapterId: 1, stageId: 3, questionNumber: 13,
    topic: "Prime & Composite Numbers", difficulty: "developing", type: "mcq", points: 10,
    text: "A number has exactly two factors: 1 and itself. What type of number must it be?",
    hint: "Think about the definition of a prime number.",
    options: [
      { id: "a", text: "Composite", correct: false, feedback: "A composite number has more than two factors, not exactly two." },
      { id: "b", text: "Prime", correct: true },
      { id: "c", text: "Square number", correct: false, feedback: "Square numbers (like 4, 9, 16) usually have more than two factors." },
      { id: "d", text: "Even number", correct: false, feedback: "Being even is not about the number of factors — for example, 2 is even and prime, but 8 is even and composite." }
    ],
    correctExplanation: "A number with exactly two factors, 1 and itself, is by definition a prime number.",
    solutionSteps: ["Recall the definition: a prime number has exactly two factors.", "Those two factors are always 1 and the number itself.", "This matches the description in the question, so the number is prime."]
  },
  {
    id: "c1-s3-q14", chapterId: 1, stageId: 3, questionNumber: 14,
    topic: "Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "What is the prime factorization of 12?",
    hint: "Break 12 down into prime numbers only — no composite numbers allowed in the final answer.",
    options: [
      { id: "a", text: "2 × 2 × 3", correct: true },
      { id: "b", text: "2 × 3 × 3", correct: false, feedback: "2 × 3 × 3 = 18, not 12." },
      { id: "c", text: "2 × 2 × 2", correct: false, feedback: "2 × 2 × 2 = 8, not 12." },
      { id: "d", text: "3 × 4", correct: false, feedback: "4 is not a prime number, so this is not a full prime factorization." }
    ],
    correctExplanation: "12 = 2 × 2 × 3. Every number in this factorization (2, 2, 3) is prime.",
    solutionSteps: ["12 = 2 × 6", "6 = 2 × 3", "So 12 = 2 × 2 × 3, and 2 and 3 are both prime."]
  },
  {
    id: "c1-s3-q15", chapterId: 1, stageId: 3, questionNumber: 15,
    topic: "Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "What is the prime factorization of 30?",
    hint: "Start by dividing 30 by the smallest prime number, 2.",
    options: [
      { id: "a", text: "2 × 3 × 5", correct: true },
      { id: "b", text: "2 × 2 × 5", correct: false, feedback: "2 × 2 × 5 = 20, not 30." },
      { id: "c", text: "2 × 3 × 3", correct: false, feedback: "2 × 3 × 3 = 18, not 30." },
      { id: "d", text: "5 × 6", correct: false, feedback: "6 is not a prime number (6 = 2 × 3), so this is not a complete prime factorization." }
    ],
    correctExplanation: "30 = 2 × 3 × 5, and 2, 3 and 5 are all prime numbers.",
    solutionSteps: ["30 = 2 × 15", "15 = 3 × 5", "So 30 = 2 × 3 × 5, all prime factors."]
  },
  {
    id: "c1-s4-q16", chapterId: 1, stageId: 4, questionNumber: 16,
    topic: "Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "What is the prime factorization of 45?",
    hint: "45 is divisible by 3 and by 5 — try dividing by 3 first.",
    options: [
      { id: "a", text: "3 × 3 × 5", correct: true },
      { id: "b", text: "3 × 15", correct: false, feedback: "15 is not prime (15 = 3 × 5), so this is not a complete prime factorization." },
      { id: "c", text: "5 × 9", correct: false, feedback: "9 is not prime (9 = 3 × 3), so this is not a complete prime factorization." },
      { id: "d", text: "3 × 5 × 5", correct: false, feedback: "3 × 5 × 5 = 75, not 45." }
    ],
    correctExplanation: "45 = 3 × 3 × 5. All three numbers (3, 3, 5) are prime.",
    solutionSteps: ["45 = 3 × 15", "15 = 3 × 5", "So 45 = 3 × 3 × 5."]
  },
  {
    id: "c1-s4-q17", chapterId: 1, stageId: 4, questionNumber: 17,
    topic: "Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "What is the prime factorization of 60?",
    hint: "Try splitting 60 into 2 × 30, then keep breaking each part down.",
    options: [
      { id: "a", text: "2 × 2 × 3 × 5", correct: true },
      { id: "b", text: "2 × 3 × 10", correct: false, feedback: "10 is not prime (10 = 2 × 5), so this is not a complete prime factorization." },
      { id: "c", text: "2 × 2 × 15", correct: false, feedback: "15 is not prime (15 = 3 × 5), so this is not a complete prime factorization." },
      { id: "d", text: "4 × 15", correct: false, feedback: "Neither 4 nor 15 is prime." }
    ],
    correctExplanation: "60 = 2 × 2 × 3 × 5. Every factor here is prime.",
    solutionSteps: ["60 = 2 × 30", "30 = 2 × 15", "15 = 3 × 5", "So 60 = 2 × 2 × 3 × 5."]
  },
  {
    id: "c1-s4-q18", chapterId: 1, stageId: 4, questionNumber: 18,
    topic: "Prime Factorization", difficulty: "challenge", type: "mcq", points: 10,
    text: "Using index notation, how do we write the prime factorization of 72?",
    hint: "First find the prime factorization, then group repeated factors using powers.",
    options: [
      { id: "a", text: "2³ × 3²", correct: true },
      { id: "b", text: "2² × 3³", correct: false, feedback: "2² × 3³ = 4 × 27 = 108, not 72." },
      { id: "c", text: "2³ × 3", correct: false, feedback: "2³ × 3 = 8 × 3 = 24, not 72." },
      { id: "d", text: "2 × 3³", correct: false, feedback: "2 × 3³ = 2 × 27 = 54, not 72." }
    ],
    correctExplanation: "72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3², since 2³ = 8, 3² = 9, and 8 × 9 = 72.",
    solutionSteps: ["72 = 2 × 36", "36 = 2 × 18", "18 = 2 × 9", "9 = 3 × 3", "So 72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²."]
  },
  {
    id: "c1-s4-q19", chapterId: 1, stageId: 4, questionNumber: 19,
    topic: "Prime Factorization", difficulty: "challenge", type: "mcq", points: 10,
    text: "Using index notation, how do we write the prime factorization of 100?",
    hint: "100 = 4 × 25 — break each of those down into primes.",
    options: [
      { id: "a", text: "2² × 5²", correct: true },
      { id: "b", text: "2 × 5³", correct: false, feedback: "2 × 5³ = 2 × 125 = 250, not 100." },
      { id: "c", text: "2³ × 5", correct: false, feedback: "2³ × 5 = 8 × 5 = 40, not 100." },
      { id: "d", text: "2⁴ × 5", correct: false, feedback: "2⁴ × 5 = 16 × 5 = 80, not 100." }
    ],
    correctExplanation: "100 = 2 × 2 × 5 × 5 = 2² × 5², since 2² = 4, 5² = 25, and 4 × 25 = 100.",
    solutionSteps: ["100 = 2 × 50", "50 = 2 × 25", "25 = 5 × 5", "So 100 = 2 × 2 × 5 × 5 = 2² × 5²."]
  },
  {
    id: "c1-s4-q20", chapterId: 1, stageId: 4, questionNumber: 20,
    topic: "Factor Trees", difficulty: "challenge", type: "mcq", points: 10,
    text: "A factor tree for 48 begins with 48 = 6 × 8. If you continue the tree until every branch ends in a prime number, what is the complete prime factorization?",
    hint: "Break 6 into 2 × 3, and break 8 into 2 × 4, then break 4 again.",
    options: [
      { id: "a", text: "2 × 2 × 2 × 2 × 3", correct: true },
      { id: "b", text: "2 × 2 × 2 × 3 × 3", correct: false, feedback: "2 × 2 × 2 × 3 × 3 = 72, not 48." },
      { id: "c", text: "2 × 2 × 3 × 3", correct: false, feedback: "2 × 2 × 3 × 3 = 36, not 48." },
      { id: "d", text: "2 × 2 × 2 × 2 × 2", correct: false, feedback: "2 × 2 × 2 × 2 × 2 = 32, not 48, and this factorization has no 3 even though 6 = 2 × 3 needs one." }
    ],
    correctExplanation: "6 = 2 × 3 and 8 = 2 × 2 × 2, so 48 = 2 × 3 × 2 × 2 × 2 = 2 × 2 × 2 × 2 × 3.",
    solutionSteps: ["48 = 6 × 8", "6 branches into 2 × 3 (both prime)", "8 branches into 2 × 4, and 4 branches into 2 × 2", "Combining every prime branch: 2 × 2 × 2 × 2 × 3 = 48."]
  },
  {
    id: "c1-s5-q21", chapterId: 1, stageId: 5, questionNumber: 21,
    topic: "Factor Trees", difficulty: "challenge", type: "mcq", points: 10,
    text: "Which set of branches correctly completes a factor tree for 90, ending only in prime numbers?",
    hint: "Try splitting 90 into 9 × 10 first, then keep branching.",
    options: [
      { id: "a", text: "2 × 3 × 3 × 5", correct: true },
      { id: "b", text: "2 × 2 × 3 × 5", correct: false, feedback: "2 × 2 × 3 × 5 = 60, not 90." },
      { id: "c", text: "2 × 3 × 5 × 5", correct: false, feedback: "2 × 3 × 5 × 5 = 150, not 90." },
      { id: "d", text: "3 × 3 × 5 × 5", correct: false, feedback: "3 × 3 × 5 × 5 = 225, not 90." }
    ],
    correctExplanation: "90 = 9 × 10 = (3 × 3) × (2 × 5) = 2 × 3 × 3 × 5.",
    solutionSteps: ["90 = 9 × 10", "9 = 3 × 3", "10 = 2 × 5", "So 90 = 2 × 3 × 3 × 5."]
  },
  {
    id: "c1-s5-q22", chapterId: 1, stageId: 5, questionNumber: 22,
    topic: "Factor Trees", difficulty: "challenge", type: "tree", points: 10,
    text: "Complete the factor tree for 36: 36 splits into 6 × 6, and each 6 splits into two prime numbers. What are those two prime numbers?",
    hint: "Think of a factor pair of 6 where both numbers are prime.",
    treeSlots: 2, treeCorrectValues: ["2", "3"],
    correctExplanation: "6 = 2 × 3, and both 2 and 3 are prime, so each branch of 6 splits into 2 and 3.",
    solutionSteps: ["36 = 6 × 6", "Each 6 = 2 × 3", "2 and 3 are both prime, so the tree is complete: 36 = 2 × 3 × 2 × 3."],
    incorrectGenericFeedback: "Not quite. Each 6 must split into two prime numbers that multiply back to 6 — that pair is 2 and 3."
  },
  {
    id: "c1-s5-q23", chapterId: 1, stageId: 5, questionNumber: 23,
    topic: "Mixed Application", difficulty: "challenge", type: "mcq", points: 10,
    text: "Maria has 42 stickers. She wants to arrange them into equal rows, with more than one sticker per row and more than one row. Which row size below is possible?",
    hint: "The row size must be a factor of 42, other than 1 or 42.",
    options: [
      { id: "a", text: "5", correct: false, feedback: "42 ÷ 5 = 8 remainder 2 — 5 does not divide 42 evenly." },
      { id: "b", text: "6", correct: true },
      { id: "c", text: "8", correct: false, feedback: "42 ÷ 8 = 5 remainder 2 — 8 does not divide 42 evenly." },
      { id: "d", text: "9", correct: false, feedback: "42 ÷ 9 = 4 remainder 6 — 9 does not divide 42 evenly." }
    ],
    correctExplanation: "42 ÷ 6 = 7 exactly, so Maria can make 6 rows of 7 stickers (or 7 rows of 6). 6 is a factor of 42.",
    solutionSteps: ["The factors of 42 are 1, 2, 3, 6, 7, 14, 21, 42.", "We need a row size greater than 1 and less than 42 that is a factor.", "6 works because 42 ÷ 6 = 7 exactly."]
  },
  {
    id: "c1-s5-q24", chapterId: 1, stageId: 5, questionNumber: 24,
    topic: "Mixed Application", difficulty: "challenge", type: "mcq", points: 10,
    text: "Which number below is composite AND has 3 as one of its prime factors?",
    hint: "First eliminate any prime numbers, then check which remaining number divides evenly by 3.",
    options: [
      { id: "a", text: "15", correct: true },
      { id: "b", text: "22", correct: false, feedback: "22 = 2 × 11 — it does not have 3 as a factor." },
      { id: "c", text: "29", correct: false, feedback: "29 is a prime number, so it is not composite." },
      { id: "d", text: "31", correct: false, feedback: "31 is a prime number, so it is not composite." }
    ],
    correctExplanation: "15 = 3 × 5, so it is composite (more than two factors) and has 3 as a prime factor.",
    solutionSteps: ["Eliminate the prime numbers: 29 and 31 are prime.", "Check 22: 22 = 2 × 11, no factor of 3.", "Check 15: 15 = 3 × 5 — composite and divisible by 3."]
  },
  {
    id: "c1-s5-q25", chapterId: 1, stageId: 5, questionNumber: 25,
    topic: "Mixed Application", difficulty: "challenge", type: "mcq", points: 10,
    text: "A number has the prime factorization 2² × 3². What is the number?",
    hint: "Work out 2² and 3² separately, then multiply the results.",
    options: [
      { id: "a", text: "36", correct: true },
      { id: "b", text: "24", correct: false, feedback: "24 = 2³ × 3, which does not match 2² × 3²." },
      { id: "c", text: "48", correct: false, feedback: "48 = 2⁴ × 3, which does not match 2² × 3²." },
      { id: "d", text: "72", correct: false, feedback: "72 = 2³ × 3², which does not match 2² × 3²." }
    ],
    correctExplanation: "2² = 4 and 3² = 9, so 2² × 3² = 4 × 9 = 36.",
    solutionSteps: ["2² = 2 × 2 = 4", "3² = 3 × 3 = 9", "4 × 9 = 36"]
  }
];
