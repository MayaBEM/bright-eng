/* =====================================================================
   EMC.data.challenging — Test Set 3: Challenging (25 original questions)
   Deeper comprehension, grammar accuracy, sequencing, inference,
   and choosing the best answer. Still appropriate for Primary 4–5.
   Cr. Bright EngMath — all content original.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  EMC.data = EMC.data || {};

  const PASSAGE =
    "On Friday, Ms. Carter's class had a special science day. In the morning, the students planted seeds in small pots and wrote their names on labels. Next, they watched a short video about how plants grow. After lunch, each student presented one interesting fact about plants to the class. Ravi told everyone that some plants can grow taller than a house! At the end of the day, Ms. Carter placed all the pots near the window so they could get sunlight. She reminded the class to water them every two days. Everyone left school feeling proud of their new little plants.";

  const DIALOGUE =
    "Man: Excuse me, do you know where the nearest bookstore is?\nWoman: Yes, it's on Green Street, next to the bakery. It was moved there last month.\nMan: Thank you! Was it far from here?\nWoman: No, it's just a five-minute walk.";

  EMC.data.challenging = [
    {
      id: "CH-VOC-1",
      testLevel: "challenging",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "The old man walked slowly because his legs were ___.",
      options: ["weak", "strong", "fast", "loud"],
      correctAnswer: "weak",
      explanation:
        "Walking slowly suggests a lack of strength, so 'weak' fits best. 'Strong' would not explain slow walking.",
      hint: "Think about why someone might walk slowly.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-1",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the sentence that correctly shows ownership.",
      question: "These bags belong to the two teachers. Which sentence is correct?",
      options: [
        "These are the teachers' bags.",
        "These are the teacher's bags.",
        "These are the teachers bags.",
        "These are teacher bags's."
      ],
      correctAnswer: "These are the teachers' bags.",
      explanation:
        "When more than one owner (teachers) already ends in s, we add just an apostrophe after the s: teachers'. Teacher's (apostrophe before s) would mean only one teacher.",
      hint: "There is more than one teacher — where does the apostrophe go?",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-LIS-1",
      testLevel: "challenging",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "What time did the train actually leave?",
      audioScript:
        "The train to the city was supposed to leave at nine o'clock, but it left twenty minutes late because of heavy rain.",
      options: ["nine twenty", "nine o'clock", "eight forty", "twenty o'clock"],
      correctAnswer: "nine twenty",
      explanation:
        "The train was supposed to leave at nine o'clock but left twenty minutes late, so it actually left at nine twenty.",
      hint: "The train did not leave on time — add the extra minutes.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-CNV-1",
      testLevel: "challenging",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the most natural response.",
      question: "A: I'm so sorry, I broke your pencil by accident.\nB: ___",
      options: [
        "That's okay, accidents happen.",
        "I don't want to talk to you.",
        "You always do that!",
        "It doesn't matter who you are."
      ],
      correctAnswer: "That's okay, accidents happen.",
      explanation:
        "When someone apologizes for a small accident, the polite and natural response is to accept the apology kindly, like \"That's okay, accidents happen.\"",
      hint: "Speaker A is apologizing — how should a kind friend respond?",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-VOC-2",
      testLevel: "challenging",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "Lily studied hard but still failed the test. She felt ___.",
      options: ["disappointed", "delighted", "relaxed", "bored"],
      correctAnswer: "disappointed",
      explanation:
        "Failing a test after studying hard usually makes someone feel unhappy that things did not go as hoped, which is called 'disappointed'.",
      hint: "Think about how it feels when hard work does not pay off.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-2",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the correct sentence.",
      question: "The toys belong to the children. Which sentence is correct?",
      options: [
        "The children's toys are on the floor.",
        "The childrens' toys are on the floor.",
        "The childs' toys are on the floor.",
        "The children toys' are on the floor."
      ],
      correctAnswer: "The children's toys are on the floor.",
      explanation:
        "'Children' is already a plural word that does not end in s, so we add ’s (apostrophe + s) just like a singular word: children's toys.",
      hint: "'Children' does not end in s, so it works like a singular word.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-RDG-1",
      testLevel: "challenging",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What is this passage mainly about?",
      passage: PASSAGE,
      options: [
        "A special science day about plants.",
        "A trip to a garden shop.",
        "A test about animals.",
        "A class party."
      ],
      correctAnswer: "A special science day about plants.",
      explanation:
        "The whole passage describes a day of planting seeds, watching a video, and presenting facts about plants, so the main idea is a science day about plants.",
      hint: "Think about what most of the passage describes.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-RDG-2",
      testLevel: "challenging",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What did the students do right after planting their seeds?",
      passage: PASSAGE,
      options: [
        "They watched a short video about how plants grow.",
        "They presented facts about plants.",
        "They went home.",
        "They watered the plants."
      ],
      correctAnswer: "They watched a short video about how plants grow.",
      explanation:
        "The passage says, \"In the morning, the students planted seeds... Next, they watched a short video.\" The word 'Next' shows what happened right after.",
      hint: "Look for the word 'Next' in the passage.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-RDG-3",
      testLevel: "challenging",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What interesting fact did Ravi share?",
      passage: PASSAGE,
      options: [
        "Some plants can grow taller than a house.",
        "Plants need sunlight.",
        "Seeds need water every day.",
        "Plants can talk."
      ],
      correctAnswer: "Some plants can grow taller than a house.",
      explanation:
        "The passage says, \"Ravi told everyone that some plants can grow taller than a house!\" This is the exact fact he shared.",
      hint: "Look for the sentence with Ravi's name.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-RDG-4",
      testLevel: "challenging",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "Why did Ms. Carter place the pots near the window?",
      passage: PASSAGE,
      options: [
        "So the plants could get sunlight.",
        "So the pots would not break.",
        "Because there was no space on the desks.",
        "Because the window was warm."
      ],
      correctAnswer: "So the plants could get sunlight.",
      explanation:
        "The passage says she \"placed all the pots near the window so they could get sunlight.\" Plants need sunlight to grow, which explains her choice.",
      hint: "Look for the word 'so' — it explains a reason.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-RDG-5",
      testLevel: "challenging",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question:
        "In the sentence \"She reminded the class to water them every two days,\" who or what does 'them' refer to?",
      passage: PASSAGE,
      options: ["the pots of seeds", "the students", "Ms. Carter", "the labels"],
      correctAnswer: "the pots of seeds",
      explanation:
        "'Them' replaces the pots of seeds mentioned just before — you water plants, not students, so 'them' means the pots of seeds.",
      hint: "You water plants, not people — think about what needs watering.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-LIS-2",
      testLevel: "challenging",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "How did the girl feel about winning the art competition?",
      audioScript:
        "Boy: I heard you won first place in the art competition!\nGirl: Thank you! I was really surprised because I didn't expect to win.",
      options: ["surprised", "angry", "bored", "worried"],
      correctAnswer: "surprised",
      explanation:
        "The girl says, \"I was really surprised because I didn't expect to win.\" She directly names her feeling.",
      hint: "Listen for the feeling word the girl uses about herself.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-CNV-2",
      testLevel: "challenging",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the reply that best shows the speaker agreeing to help.",
      question: "A: Could you help me carry these books, please?\nWhich reply best shows the speaker agreeing to help?",
      options: [
        "Of course, let me help you with that.",
        "I already have books at home.",
        "Books are heavy sometimes.",
        "No, I don't like reading."
      ],
      correctAnswer: "Of course, let me help you with that.",
      explanation:
        "\"Of course, let me help you with that\" directly agrees to the request. The other replies do not answer the request to help.",
      hint: "Look for the reply that says yes and offers to act.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-VOC-3",
      testLevel: "challenging",
      skill: "vocabulary",
      questionType: "match",
      instruction: "Match each word to its meaning.",
      question: "Match the words to their meanings.",
      pairs: [
        { left: "curious", right: "wanting to learn or know about something" },
        { left: "nervous", right: "feeling worried before something happens" },
        { left: "confident", right: "feeling sure about yourself" },
        { left: "careful", right: "paying close attention to avoid mistakes" }
      ],
      explanation:
        "Curious means wanting to know something, nervous means worried before something happens, confident means feeling sure of yourself, and careful means paying close attention.",
      hint: "Think about how each word describes a person's feeling or behavior.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-3",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the words that correctly complete the sentence.",
      question:
        "Last summer, my brother and I went camping. He ___ excited, but I ___ a little scared of the dark.",
      options: ["was / was", "were / were", "was / were", "were / was"],
      correctAnswer: "was / was",
      explanation:
        "Both 'he' and 'I' are singular subjects, so both need 'was': He was excited, but I was a little scared.",
      hint: "Both 'he' and 'I' are single people.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-LIS-3",
      testLevel: "challenging",
      skill: "listening",
      questionType: "order",
      instruction: "Listen to the audio, then put the events in the correct order.",
      question: "Arrange the events in the order you hear them.",
      audioScript:
        "Before the school trip, the students first checked their bags. Then they lined up outside the classroom. After that, they walked to the bus. Finally, the bus left for the museum.",
      items: [
        "checked their bags",
        "lined up outside the classroom",
        "walked to the bus",
        "the bus left for the museum"
      ],
      explanation:
        "The order words 'first', 'Then', 'After that', and 'Finally' show the correct sequence: checked bags, lined up, walked to the bus, then the bus left.",
      hint: "Listen for the order words: first, then, after that, finally.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-CNV-3",
      testLevel: "challenging",
      skill: "conversation",
      questionType: "order",
      instruction: "Put the conversation in the correct order.",
      question: "Arrange the lines to make a natural conversation.",
      items: [
        "A: Hi, have you seen my umbrella?",
        "B: Is it the blue one with white dots?",
        "A: Yes, that's the one!",
        "B: I saw it near the classroom door."
      ],
      explanation:
        "A natural conversation starts with a question, is followed by a clarifying question, then a confirmation, and finally the answer: Ask → clarify → confirm → answer.",
      hint: "Start with the question that begins the conversation.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-VOC-4",
      testLevel: "challenging",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "Even though it started to rain, the players ___ the game.",
      options: ["continued", "stopped", "watched", "missed"],
      correctAnswer: "continued",
      explanation:
        "'Even though' shows a contrast — the rain started, but the players kept playing anyway, so 'continued' fits best.",
      hint: "The phrase 'even though' means something unexpected still happened.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-4",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the grammatically correct exchange.",
      question: "Which exchange uses 'was' and 'were' correctly?",
      options: [
        "A: Was they at the party? B: No, they wasn't.",
        "A: Were they at the party? B: No, they weren't.",
        "A: Were they at the party? B: No, they wasn't.",
        "A: Was they at the party? B: No, they weren't."
      ],
      correctAnswer: "A: Were they at the party? B: No, they weren't.",
      explanation:
        "'They' always uses 'were'. The question should be 'Were they...?' and the negative short answer is 'No, they weren't' (were + not).",
      hint: "'They' always pairs with 'were', never 'was'.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-LIS-4",
      testLevel: "challenging",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the conversation, then choose the correct answer.",
      question: "Where is the bookstore now?",
      audioScript: DIALOGUE,
      options: [
        "on Green Street, next to the bakery",
        "on Green Street, next to the school",
        "near the train station",
        "inside the bakery"
      ],
      correctAnswer: "on Green Street, next to the bakery",
      explanation:
        "The woman says, \"it's on Green Street, next to the bakery.\" She also explains it moved there last month, so this is its current location.",
      hint: "Listen for the street name and the shop nearby.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-LIS-5",
      testLevel: "challenging",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the same conversation again, then choose the correct answer.",
      question: "How far is the bookstore from where they are?",
      audioScript: DIALOGUE,
      options: ["a five-minute walk", "a ten-minute walk", "a one-hour drive", "a two-minute walk"],
      correctAnswer: "a five-minute walk",
      explanation:
        "The woman answers, \"No, it's just a five-minute walk.\" This tells us exactly how far away the bookstore is.",
      hint: "Listen to the woman's last sentence.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-5",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "Two days ago, the weather ___ terrible, but today it is lovely.",
      options: ["was", "were", "is", "are"],
      correctAnswer: "was",
      explanation:
        "'The weather' is a singular subject and this sentence is about the past (two days ago), so it needs 'was': the weather was terrible.",
      hint: "'The weather' is treated as one thing (singular).",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-CNV-4",
      testLevel: "challenging",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best response about ownership.",
      question: "A: Whose jacket is this on the chair?\nB: ___",
      options: [
        "It's Noah's. He left it after class.",
        "I am wearing a jacket.",
        "It was cold yesterday.",
        "She was at home."
      ],
      correctAnswer: "It's Noah's. He left it after class.",
      explanation:
        "The question \"Whose...?\" asks about ownership, so the best answer names an owner: \"It's Noah's.\"",
      hint: "'Whose' questions need an owner's name in the answer.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-VOC-5",
      testLevel: "challenging",
      skill: "vocabulary",
      questionType: "multiple-choice",
      instruction: "Choose the word that best completes the sentence.",
      question: "The museum was so ___ that we wanted to stay longer.",
      options: ["interesting", "boring", "empty", "closed"],
      correctAnswer: "interesting",
      explanation:
        "Wanting to stay longer shows the museum was enjoyable, so 'interesting' fits best. 'Boring', 'empty', or 'closed' would not make people want to stay.",
      hint: "Think about what would make you want to stay somewhere longer.",
      difficulty: 3,
      points: 1
    },
    {
      id: "CH-GRM-6",
      testLevel: "challenging",
      skill: "grammar",
      questionType: "order",
      instruction: "Put the words in order to make a correct question.",
      question: "Arrange the words to make a correct question.",
      items: ["Were", "you", "at", "school", "yesterday"],
      explanation:
        "A 'was/were' question starts with was/were, then the subject, then the rest of the sentence: Were you at school yesterday?",
      hint: "Questions with 'were' start with 'Were'.",
      difficulty: 3,
      points: 1
    }
  ];
})();
