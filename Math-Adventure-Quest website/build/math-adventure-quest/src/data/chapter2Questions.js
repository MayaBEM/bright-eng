/* ==========================================================================
   CHAPTER 2 — THE HCF & LCM KINGDOM
   25 original, mathematically verified questions.
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.data = window.MAQ.data || {};

window.MAQ.data.chapter2 = [
  {
    id: "c2-s1-q1", chapterId: 2, stageId: 1, questionNumber: 1,
    topic: "Basic HCF", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the HCF (Highest Common Factor) of 12 and 18 by listing factors.",
    hint: "List the factors of both numbers, then find the largest one they share.",
    options: [
      { id: "a", text: "6", correct: true },
      { id: "b", text: "3", correct: false, feedback: "3 is a common factor, but it is not the highest one — 6 is also common and larger." },
      { id: "c", text: "2", correct: false, feedback: "2 is a common factor, but it is not the highest one." },
      { id: "d", text: "9", correct: false, feedback: "9 is a factor of 18 but not of 12, so it cannot be the HCF." }
    ],
    correctExplanation: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The largest common factor is 6.",
    solutionSteps: ["Factors of 12: 1, 2, 3, 4, 6, 12", "Factors of 18: 1, 2, 3, 6, 9, 18", "Common factors: 1, 2, 3, 6", "The Highest Common Factor is 6."]
  },
  {
    id: "c2-s1-q2", chapterId: 2, stageId: 1, questionNumber: 2,
    topic: "Basic HCF", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the HCF of 8 and 20.",
    hint: "List the factors of 8 and of 20, then compare.",
    options: [
      { id: "a", text: "4", correct: true },
      { id: "b", text: "2", correct: false, feedback: "2 is a common factor, but it is not the highest one." },
      { id: "c", text: "8", correct: false, feedback: "8 is a factor of 8 but not of 20, so it cannot be the HCF." },
      { id: "d", text: "5", correct: false, feedback: "5 is a factor of 20 but not of 8, so it cannot be the HCF." }
    ],
    correctExplanation: "Factors of 8: 1, 2, 4, 8. Factors of 20: 1, 2, 4, 5, 10, 20. The largest common factor is 4.",
    solutionSteps: ["Factors of 8: 1, 2, 4, 8", "Factors of 20: 1, 2, 4, 5, 10, 20", "Common factors: 1, 2, 4", "The HCF is 4."]
  },
  {
    id: "c2-s1-q3", chapterId: 2, stageId: 1, questionNumber: 3,
    topic: "Basic HCF", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the HCF of 15 and 25.",
    hint: "Factors of 15 are 1, 3, 5, 15. What are the factors of 25?",
    options: [
      { id: "a", text: "5", correct: true },
      { id: "b", text: "3", correct: false, feedback: "3 is a factor of 15 but not of 25, so it cannot be the HCF." },
      { id: "c", text: "15", correct: false, feedback: "15 is a factor of 15 but not of 25, so it cannot be the HCF." },
      { id: "d", text: "1", correct: false, feedback: "1 is a common factor, but it is not the highest one — 5 is also common and larger." }
    ],
    correctExplanation: "Factors of 15: 1, 3, 5, 15. Factors of 25: 1, 5, 25. The largest common factor is 5.",
    solutionSteps: ["Factors of 15: 1, 3, 5, 15", "Factors of 25: 1, 5, 25", "Common factors: 1, 5", "The HCF is 5."]
  },
  {
    id: "c2-s1-q4", chapterId: 2, stageId: 1, questionNumber: 4,
    topic: "Basic HCF", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the HCF of 9 and 27.",
    hint: "Every factor of 9 is also a factor of 27 — what does that tell you?",
    options: [
      { id: "a", text: "9", correct: true },
      { id: "b", text: "3", correct: false, feedback: "3 is a common factor, but it is not the highest one — 9 is also common and larger." },
      { id: "c", text: "27", correct: false, feedback: "27 is a factor of 27 but not of 9, so it cannot be the HCF." },
      { id: "d", text: "1", correct: false, feedback: "1 is a common factor, but it is not the highest one." }
    ],
    correctExplanation: "Since 9 divides evenly into 27 (27 ÷ 9 = 3), 9 is itself the highest common factor.",
    solutionSteps: ["Factors of 9: 1, 3, 9", "Factors of 27: 1, 3, 9, 27", "Common factors: 1, 3, 9", "The HCF is 9."]
  },
  {
    id: "c2-s1-q5", chapterId: 2, stageId: 1, questionNumber: 5,
    topic: "Basic HCF", difficulty: "foundation", type: "mcq", points: 10,
    text: "What is the HCF of 14 and 21?",
    hint: "List the factors of 14 and 21 and compare them.",
    options: [
      { id: "a", text: "7", correct: true },
      { id: "b", text: "14", correct: false, feedback: "14 is a factor of 14 but not of 21, so it cannot be the HCF." },
      { id: "c", text: "21", correct: false, feedback: "21 is a factor of 21 but not of 14, so it cannot be the HCF." },
      { id: "d", text: "3", correct: false, feedback: "3 is a factor of 21 but not of 14, so it cannot be the HCF." }
    ],
    correctExplanation: "Factors of 14: 1, 2, 7, 14. Factors of 21: 1, 3, 7, 21. The largest common factor is 7.",
    solutionSteps: ["Factors of 14: 1, 2, 7, 14", "Factors of 21: 1, 3, 7, 21", "Common factors: 1, 7", "The HCF is 7."]
  },
  {
    id: "c2-s2-q6", chapterId: 2, stageId: 2, questionNumber: 6,
    topic: "Basic LCM", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the LCM (Lowest Common Multiple) of 4 and 6 by listing multiples.",
    hint: "List multiples of 4 and multiples of 6 until you find one they share.",
    options: [
      { id: "a", text: "12", correct: true },
      { id: "b", text: "24", correct: false, feedback: "24 is a common multiple, but it is not the lowest one — 12 is smaller and also common." },
      { id: "c", text: "6", correct: false, feedback: "6 is a multiple of 6 but not of 4, so it cannot be the LCM." },
      { id: "d", text: "18", correct: false, feedback: "18 is a multiple of 6 but not of 4, so it cannot be the LCM." }
    ],
    correctExplanation: "Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... The lowest common multiple is 12.",
    solutionSteps: ["Multiples of 4: 4, 8, 12, 16", "Multiples of 6: 6, 12, 18", "The smallest number in both lists is 12."]
  },
  {
    id: "c2-s2-q7", chapterId: 2, stageId: 2, questionNumber: 7,
    topic: "Basic LCM", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the LCM of 5 and 8.",
    hint: "List multiples of 5 and of 8 up to 40.",
    options: [
      { id: "a", text: "40", correct: true },
      { id: "b", text: "20", correct: false, feedback: "20 is a multiple of 5 but not of 8, so it cannot be the LCM." },
      { id: "c", text: "13", correct: false, feedback: "13 comes from adding 5 and 8, but the LCM must be a multiple of both numbers, not a sum." },
      { id: "d", text: "80", correct: false, feedback: "80 is a common multiple, but it is not the lowest one — 40 is smaller and also common." }
    ],
    correctExplanation: "Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40. Multiples of 8: 8, 16, 24, 32, 40. The lowest common multiple is 40.",
    solutionSteps: ["Multiples of 5: 5,10,15,20,25,30,35,40", "Multiples of 8: 8,16,24,32,40", "The smallest shared value is 40."]
  },
  {
    id: "c2-s2-q8", chapterId: 2, stageId: 2, questionNumber: 8,
    topic: "Basic LCM", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the LCM of 6 and 9.",
    hint: "List multiples of 6 and 9 up to 18 or beyond.",
    options: [
      { id: "a", text: "18", correct: true },
      { id: "b", text: "54", correct: false, feedback: "54 is a common multiple, but it is not the lowest one." },
      { id: "c", text: "9", correct: false, feedback: "9 is a multiple of 9 but not of 6, so it cannot be the LCM." },
      { id: "d", text: "36", correct: false, feedback: "36 is a common multiple, but it is not the lowest one — 18 is smaller and also common." }
    ],
    correctExplanation: "Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. The lowest common multiple is 18.",
    solutionSteps: ["Multiples of 6: 6, 12, 18", "Multiples of 9: 9, 18", "The smallest shared value is 18."]
  },
  {
    id: "c2-s2-q9", chapterId: 2, stageId: 2, questionNumber: 9,
    topic: "Basic LCM", difficulty: "foundation", type: "mcq", points: 10,
    text: "Find the LCM of 3 and 7.",
    hint: "3 and 7 share no common factors other than 1 — what does that mean for their LCM?",
    options: [
      { id: "a", text: "21", correct: true },
      { id: "b", text: "10", correct: false, feedback: "10 is not a multiple of either 3 or 7." },
      { id: "c", text: "14", correct: false, feedback: "14 is a multiple of 7 but not of 3, so it cannot be the LCM." },
      { id: "d", text: "3", correct: false, feedback: "3 is a multiple of 3 but not of 7, so it cannot be the LCM." }
    ],
    correctExplanation: "Since 3 and 7 share no common factors besides 1, their LCM is simply 3 × 7 = 21.",
    solutionSteps: ["3 and 7 have no common factor other than 1.", "When two numbers share no common factor, their LCM is their product.", "3 × 7 = 21."]
  },
  {
    id: "c2-s2-q10", chapterId: 2, stageId: 2, questionNumber: 10,
    topic: "Basic LCM", difficulty: "developing", type: "mcq", points: 10,
    text: "Find the LCM of 10 and 15.",
    hint: "List multiples of 10 and 15 until one matches.",
    options: [
      { id: "a", text: "30", correct: true },
      { id: "b", text: "150", correct: false, feedback: "150 is a common multiple, but it is not the lowest one." },
      { id: "c", text: "45", correct: false, feedback: "45 is a multiple of 15 but not of 10, so it cannot be the LCM." },
      { id: "d", text: "10", correct: false, feedback: "10 is a multiple of 10 but not of 15, so it cannot be the LCM." }
    ],
    correctExplanation: "Multiples of 10: 10, 20, 30. Multiples of 15: 15, 30. The lowest common multiple is 30.",
    solutionSteps: ["Multiples of 10: 10, 20, 30", "Multiples of 15: 15, 30", "The smallest shared value is 30."]
  },
  {
    id: "c2-s3-q11", chapterId: 2, stageId: 3, questionNumber: 11,
    topic: "HCF via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the HCF of 24 and 36.",
    hint: "24 = 2³ × 3 and 36 = 2² × 3². Take the lowest power of each shared prime.",
    options: [
      { id: "a", text: "12", correct: true },
      { id: "b", text: "6", correct: false, feedback: "6 is a common factor, but taking the lowest shared powers (2² × 3) gives a higher common factor: 12." },
      { id: "c", text: "72", correct: false, feedback: "72 is actually the LCM of 24 and 36, not the HCF." },
      { id: "d", text: "4", correct: false, feedback: "4 only uses the shared power of 2, but 3 is also a shared prime factor." }
    ],
    correctExplanation: "24 = 2³ × 3 and 36 = 2² × 3². The shared primes are 2 and 3; using the lowest powers gives 2² × 3 = 4 × 3 = 12.",
    solutionSteps: ["24 = 2 × 2 × 2 × 3 = 2³ × 3", "36 = 2 × 2 × 3 × 3 = 2² × 3²", "Shared primes with lowest powers: 2² and 3¹", "HCF = 2² × 3 = 12"]
  },
  {
    id: "c2-s3-q12", chapterId: 2, stageId: 3, questionNumber: 12,
    topic: "HCF via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the HCF of 28 and 42.",
    hint: "28 = 2² × 7 and 42 = 2 × 3 × 7.",
    options: [
      { id: "a", text: "14", correct: true },
      { id: "b", text: "2", correct: false, feedback: "2 is a shared factor, but 7 is also shared — combine them for the true HCF." },
      { id: "c", text: "7", correct: false, feedback: "7 is a shared factor, but 2 is also shared — combine them for the true HCF." },
      { id: "d", text: "28", correct: false, feedback: "28 is a factor of 28 but not of 42, so it cannot be the HCF." }
    ],
    correctExplanation: "28 = 2² × 7 and 42 = 2 × 3 × 7. The shared primes are 2 (lowest power 1) and 7, giving 2 × 7 = 14.",
    solutionSteps: ["28 = 2 × 2 × 7 = 2² × 7", "42 = 2 × 3 × 7", "Shared primes: 2¹ and 7¹", "HCF = 2 × 7 = 14"]
  },
  {
    id: "c2-s3-q13", chapterId: 2, stageId: 3, questionNumber: 13,
    topic: "HCF via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the HCF of 40 and 60.",
    hint: "40 = 2³ × 5 and 60 = 2² × 3 × 5.",
    options: [
      { id: "a", text: "20", correct: true },
      { id: "b", text: "10", correct: false, feedback: "10 only uses 2¹ × 5, but both numbers share 2² — the true HCF is higher." },
      { id: "c", text: "40", correct: false, feedback: "40 is a factor of 40 but not of 60, so it cannot be the HCF." },
      { id: "d", text: "5", correct: false, feedback: "5 is shared, but 2² is also shared by both numbers — combine them." }
    ],
    correctExplanation: "40 = 2³ × 5 and 60 = 2² × 3 × 5. The shared primes with lowest powers are 2² and 5, giving 4 × 5 = 20.",
    solutionSteps: ["40 = 2 × 2 × 2 × 5 = 2³ × 5", "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5", "Shared primes with lowest powers: 2² and 5¹", "HCF = 4 × 5 = 20"]
  },
  {
    id: "c2-s3-q14", chapterId: 2, stageId: 3, questionNumber: 14,
    topic: "HCF via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the HCF of 45 and 75.",
    hint: "45 = 3² × 5 and 75 = 3 × 5².",
    options: [
      { id: "a", text: "15", correct: true },
      { id: "b", text: "5", correct: false, feedback: "5 is shared, but 3 is also shared by both numbers — combine them." },
      { id: "c", text: "9", correct: false, feedback: "9 = 3² is not a factor of 75 (75 ÷ 9 is not exact), so this cannot be the HCF." },
      { id: "d", text: "45", correct: false, feedback: "45 is a factor of 45 but not of 75, so it cannot be the HCF." }
    ],
    correctExplanation: "45 = 3² × 5 and 75 = 3 × 5². The shared primes with lowest powers are 3¹ and 5¹, giving 3 × 5 = 15.",
    solutionSteps: ["45 = 3 × 3 × 5 = 3² × 5", "75 = 3 × 5 × 5 = 3 × 5²", "Shared primes with lowest powers: 3¹ and 5¹", "HCF = 3 × 5 = 15"]
  },
  {
    id: "c2-s3-q15", chapterId: 2, stageId: 3, questionNumber: 15,
    topic: "LCM via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the LCM of 12 and 18.",
    hint: "12 = 2² × 3 and 18 = 2 × 3². For the LCM, take the HIGHEST power of each prime.",
    options: [
      { id: "a", text: "36", correct: true },
      { id: "b", text: "6", correct: false, feedback: "6 is actually the HCF of 12 and 18, not the LCM." },
      { id: "c", text: "216", correct: false, feedback: "216 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "18", correct: false, feedback: "18 is a multiple of 18 but not of 12, so it cannot be the LCM." }
    ],
    correctExplanation: "12 = 2² × 3 and 18 = 2 × 3². Taking the highest power of each prime: 2² × 3² = 4 × 9 = 36.",
    solutionSteps: ["12 = 2 × 2 × 3 = 2² × 3", "18 = 2 × 3 × 3 = 2 × 3²", "Highest powers: 2² and 3²", "LCM = 4 × 9 = 36"]
  },
  {
    id: "c2-s4-q16", chapterId: 2, stageId: 4, questionNumber: 16,
    topic: "LCM via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the LCM of 20 and 30.",
    hint: "20 = 2² × 5 and 30 = 2 × 3 × 5. Use the highest power of each prime that appears.",
    options: [
      { id: "a", text: "60", correct: true },
      { id: "b", text: "10", correct: false, feedback: "10 is actually the HCF of 20 and 30, not the LCM." },
      { id: "c", text: "600", correct: false, feedback: "600 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "30", correct: false, feedback: "30 is a multiple of 30 but not of 20, so it cannot be the LCM." }
    ],
    correctExplanation: "20 = 2² × 5 and 30 = 2 × 3 × 5. Taking the highest power of each prime that appears: 2² × 3 × 5 = 4 × 3 × 5 = 60.",
    solutionSteps: ["20 = 2 × 2 × 5 = 2² × 5", "30 = 2 × 3 × 5", "Highest powers of all primes involved: 2², 3¹, 5¹", "LCM = 4 × 3 × 5 = 60"]
  },
  {
    id: "c2-s4-q17", chapterId: 2, stageId: 4, questionNumber: 17,
    topic: "LCM via Prime Factorization", difficulty: "developing", type: "mcq", points: 10,
    text: "Use prime factorization to find the LCM of 14 and 21.",
    hint: "14 = 2 × 7 and 21 = 3 × 7.",
    options: [
      { id: "a", text: "42", correct: true },
      { id: "b", text: "7", correct: false, feedback: "7 is actually the HCF of 14 and 21, not the LCM." },
      { id: "c", text: "294", correct: false, feedback: "294 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "21", correct: false, feedback: "21 is a multiple of 21 but not of 14, so it cannot be the LCM." }
    ],
    correctExplanation: "14 = 2 × 7 and 21 = 3 × 7. Combining every prime that appears (2, 3, 7): LCM = 2 × 3 × 7 = 42.",
    solutionSteps: ["14 = 2 × 7", "21 = 3 × 7", "All primes involved: 2, 3, 7 (7 shared, so used once)", "LCM = 2 × 3 × 7 = 42"]
  },
  {
    id: "c2-s4-q18", chapterId: 2, stageId: 4, questionNumber: 18,
    topic: "LCM via Prime Factorization", difficulty: "challenge", type: "mcq", points: 10,
    text: "Use prime factorization to find the LCM of 16 and 24.",
    hint: "16 = 2⁴ and 24 = 2³ × 3.",
    options: [
      { id: "a", text: "48", correct: true },
      { id: "b", text: "8", correct: false, feedback: "8 is actually the HCF of 16 and 24, not the LCM." },
      { id: "c", text: "384", correct: false, feedback: "384 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "24", correct: false, feedback: "24 is a multiple of 24 but not of 16, so it cannot be the LCM." }
    ],
    correctExplanation: "16 = 2⁴ and 24 = 2³ × 3. Using the highest power of each prime: 2⁴ × 3 = 16 × 3 = 48.",
    solutionSteps: ["16 = 2 × 2 × 2 × 2 = 2⁴", "24 = 2 × 2 × 2 × 3 = 2³ × 3", "Highest powers: 2⁴ and 3¹", "LCM = 16 × 3 = 48"]
  },
  {
    id: "c2-s4-q19", chapterId: 2, stageId: 4, questionNumber: 19,
    topic: "Choosing HCF or LCM", difficulty: "challenge", type: "mcq", points: 10,
    text: "Which method should you use to find the LARGEST number that divides two given numbers exactly?",
    hint: "This is about splitting things into the biggest possible equal groups.",
    options: [
      { id: "a", text: "HCF", correct: true },
      { id: "b", text: "LCM", correct: false, feedback: "LCM finds the smallest shared multiple, which is used for repeating events — not for finding the largest number that divides two numbers." },
      { id: "c", text: "Average", correct: false, feedback: "An average does not tell you about factors or divisibility." },
      { id: "d", text: "Product", correct: false, feedback: "Multiplying the two numbers together does not find the largest shared factor." }
    ],
    correctExplanation: "The Highest Common Factor (HCF) is, by definition, the largest number that divides two or more numbers exactly.",
    solutionSteps: ["The question asks for the largest number dividing two numbers exactly.", "This is exactly what the HCF measures.", "So HCF is the correct method."]
  },
  {
    id: "c2-s4-q20", chapterId: 2, stageId: 4, questionNumber: 20,
    topic: "Choosing HCF or LCM", difficulty: "challenge", type: "mcq", points: 10,
    text: "Which method should you use to find the SMALLEST number that two given numbers both divide into exactly?",
    hint: "Think about repeating patterns, like buses leaving at intervals.",
    options: [
      { id: "a", text: "LCM", correct: true },
      { id: "b", text: "HCF", correct: false, feedback: "HCF finds the largest shared factor, not the smallest shared multiple." },
      { id: "c", text: "Sum", correct: false, feedback: "Adding the two numbers does not find a shared multiple." },
      { id: "d", text: "Difference", correct: false, feedback: "Subtracting the two numbers does not find a shared multiple." }
    ],
    correctExplanation: "The Lowest Common Multiple (LCM) is the smallest number that both given numbers divide into exactly.",
    solutionSteps: ["The question asks for the smallest number both numbers divide into.", "This matches the definition of LCM.", "So LCM is the correct method."]
  },
  {
    id: "c2-s5-q21", chapterId: 2, stageId: 5, questionNumber: 21,
    topic: "Choosing HCF or LCM", difficulty: "challenge", type: "mcq", points: 10,
    text: "Two gears turn together and line up perfectly every certain number of turns. To find out after how many turns they will next line up, should you use HCF or LCM?",
    hint: "This situation involves a repeating event happening again in the future — that's a clue.",
    options: [
      { id: "a", text: "LCM", correct: true },
      { id: "b", text: "HCF", correct: false, feedback: "HCF is used for splitting into equal groups, not for repeating or synchronising events." },
      { id: "c", text: "Either one works", correct: false, feedback: "Only one method correctly models a repeating, synchronising event — HCF would give the wrong answer here." },
      { id: "d", text: "Neither", correct: false, feedback: "One of the two methods does correctly solve this type of problem — think about repeating cycles." }
    ],
    correctExplanation: "Finding when two repeating cycles line up again is always an LCM problem, because it finds the smallest shared multiple of the cycle lengths.",
    solutionSteps: ["The gears repeat their alignment in cycles.", "Finding when two cycles next align uses the smallest common multiple of the cycle lengths.", "This is the LCM."]
  },
  {
    id: "c2-s5-q22", chapterId: 2, stageId: 5, questionNumber: 22,
    topic: "HCF & LCM Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "A shopkeeper has 36 pencils and 48 erasers. She wants to pack them into identical bags with nothing left over, using the greatest possible number of bags. How many bags does she need?",
    hint: "This is a packing-into-equal-groups problem — find the HCF of 36 and 48.",
    options: [
      { id: "a", text: "12", correct: true },
      { id: "b", text: "6", correct: false, feedback: "6 is a common factor, but it is not the greatest one — check for a higher shared factor." },
      { id: "c", text: "24", correct: false, feedback: "24 is not a factor of 36, so bags of size 24 would not divide the pencils evenly." },
      { id: "d", text: "4", correct: false, feedback: "4 is a common factor, but it is not the greatest possible number of bags." }
    ],
    correctExplanation: "36 = 2² × 3² and 48 = 2⁴ × 3, so HCF = 2² × 3 = 12. She needs 12 identical bags, each with 3 pencils and 4 erasers.",
    solutionSteps: ["This is a packing problem, so we need the HCF of 36 and 48.", "36 = 2² × 3², 48 = 2⁴ × 3", "HCF = 2² × 3 = 12", "The greatest number of identical bags is 12."]
  },
  {
    id: "c2-s5-q23", chapterId: 2, stageId: 5, questionNumber: 23,
    topic: "HCF & LCM Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "Bus A leaves a station every 15 minutes and Bus B leaves every 20 minutes. If both buses leave together at 8:00 a.m., after how many minutes will they next leave together?",
    hint: "This is a repeating-schedule problem — find the LCM of 15 and 20.",
    options: [
      { id: "a", text: "60", correct: true },
      { id: "b", text: "35", correct: false, feedback: "35 comes from adding 15 and 20, but this problem needs a common multiple, not a sum." },
      { id: "c", text: "300", correct: false, feedback: "300 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "5", correct: false, feedback: "5 is the HCF of 15 and 20, but this problem is about a repeating schedule, which needs the LCM." }
    ],
    correctExplanation: "15 = 3 × 5 and 20 = 2² × 5, so LCM = 2² × 3 × 5 = 60. The buses will next leave together after 60 minutes.",
    solutionSteps: ["A repeating schedule problem needs the LCM of 15 and 20.", "15 = 3 × 5, 20 = 2² × 5", "LCM = 2² × 3 × 5 = 60", "They next leave together after 60 minutes."]
  },
  {
    id: "c2-s5-q24", chapterId: 2, stageId: 5, questionNumber: 24,
    topic: "HCF & LCM Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "A teacher has 32 stickers and 40 stamps. She wants to give every student the same number of stickers and the same number of stamps, with nothing left over, using the greatest possible number of students. How many students can receive supplies?",
    hint: "This is an equal-sharing problem — find the HCF of 32 and 40.",
    options: [
      { id: "a", text: "8", correct: true },
      { id: "b", text: "4", correct: false, feedback: "4 is a common factor, but it is not the greatest one." },
      { id: "c", text: "16", correct: false, feedback: "16 is not a factor of 40, so it cannot divide the stamps evenly." },
      { id: "d", text: "2", correct: false, feedback: "2 is a common factor, but it is not the greatest possible number of students." }
    ],
    correctExplanation: "32 = 2⁵ and 40 = 2³ × 5, so HCF = 2³ = 8. The teacher can give supplies to 8 students, each receiving 4 stickers and 5 stamps.",
    solutionSteps: ["This is an equal-sharing problem, so we need the HCF of 32 and 40.", "32 = 2⁵, 40 = 2³ × 5", "HCF = 2³ = 8", "The greatest number of students is 8."]
  },
  {
    id: "c2-s5-q25", chapterId: 2, stageId: 5, questionNumber: 25,
    topic: "HCF & LCM Word Problems", difficulty: "challenge", type: "mcq", points: 10,
    text: "Two temple bells ring together at the same moment. One rings every 18 seconds and the other every 24 seconds. After how many seconds will they next ring together?",
    hint: "This is a repeating-event problem — find the LCM of 18 and 24.",
    options: [
      { id: "a", text: "72", correct: true },
      { id: "b", text: "42", correct: false, feedback: "42 comes from adding 18 and 24, but this problem needs a common multiple, not a sum." },
      { id: "c", text: "432", correct: false, feedback: "432 is a common multiple, but it is not the lowest one." },
      { id: "d", text: "6", correct: false, feedback: "6 is the HCF of 18 and 24, but this problem is about a repeating event, which needs the LCM." }
    ],
    correctExplanation: "18 = 2 × 3² and 24 = 2³ × 3, so LCM = 2³ × 3² = 8 × 9 = 72. The bells will next ring together after 72 seconds.",
    solutionSteps: ["A repeating-event problem needs the LCM of 18 and 24.", "18 = 2 × 3², 24 = 2³ × 3", "LCM = 2³ × 3² = 72", "They next ring together after 72 seconds."]
  }
];
