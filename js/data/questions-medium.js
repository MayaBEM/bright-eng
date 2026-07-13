/* =====================================================================
   EMC.data.medium — Test Set 2: Medium (25 original questions)
   Applying vocabulary and grammar in context: short passages,
   conversations, and listening tasks.
   Cr. Bright EngMath — all content original.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  EMC.data = EMC.data || {};

  const PASSAGE_A =
    "Last Saturday, the Lee family went on a trip to the countryside. They left home early in the morning and drove for two hours. When they arrived, they visited a small farm and saw cows, sheep, and chickens. At noon, they had a picnic under a big tree. In the afternoon, the children picked strawberries. Everyone was tired but happy when they got home in the evening.";

  const PASSAGE_B =
    "Ben could not find his school bag on Monday morning. He looked under his bed and in the living room, but it was not there. Then his little sister said she saw it in the kitchen. Ben ran to the kitchen and found his bag next to the table. He was relieved and hurried to school before he was late.";

  const DIALOGUE =
    "Girl: Where were you yesterday?\nBoy: I was at my cousin's house. We played board games all afternoon.\nGirl: That sounds fun! Was your cousin's sister there too?\nBoy: Yes, she was there. She was very good at the games.";

  EMC.data.medium = [
    {
      id: "MD-VOC-1",
      testLevel: "medium",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "Lucy felt ___ because she lost her favorite toy.",
      options: ["sad", "excited", "proud", "hungry"],
      correctAnswer: "sad",
      explanation:
        "Losing a favorite toy makes most people feel unhappy, so 'sad' fits best. Feeling excited or proud does not match losing something you love.",
      hint: "Think about how you would feel if you lost something special.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-1",
      testLevel: "medium",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "Peter forgot his pencil case. He asked, \"Is this ___ pencil case?\" pointing at Amy's desk.",
      options: ["Amy's", "Amy", "Amys'", "Amys"],
      correctAnswer: "Amy's",
      explanation:
        "To ask about something belonging to Amy, we use Amy's (apostrophe + s) before the noun it owns: Amy's pencil case.",
      hint: "Peter is asking who owns the pencil case.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-LIS-1",
      testLevel: "medium",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "Where is Emma's party?",
      audioScript: "Today is Emma's birthday. Her party starts at four o'clock in the afternoon at the community hall.",
      options: ["at the community hall", "at her house", "at school", "at the park"],
      correctAnswer: "at the community hall",
      explanation:
        "The speaker says the party is \"at the community hall.\" Listen carefully for the place, not just the time.",
      hint: "Listen for the word that names a place.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-CNV-1",
      testLevel: "medium",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best response.",
      question: "A: I can't find my pencil case anywhere.\nB: ___",
      options: [
        "Do you want me to help you look for it?",
        "I like drawing pictures.",
        "It is Monday today.",
        "Yes, I am ten."
      ],
      correctAnswer: "Do you want me to help you look for it?",
      explanation:
        "Speaker A is describing a problem. The most helpful and natural reply offers help: \"Do you want me to help you look for it?\"",
      hint: "Speaker A has a problem — what would a kind friend say?",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-RDG-1",
      testLevel: "medium",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What is this passage mainly about?",
      passage: PASSAGE_A,
      options: [
        "A family's trip to the countryside.",
        "A family's trip to the city.",
        "A school picnic.",
        "A visit to a zoo."
      ],
      correctAnswer: "A family's trip to the countryside.",
      explanation:
        "The whole passage describes the Lee family's day at a farm in the countryside, so that is the main idea. It is not about a city, a school picnic, or a zoo.",
      hint: "Think about what the whole passage is describing, not just one detail.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-RDG-2",
      testLevel: "medium",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What did the children do in the afternoon?",
      passage: PASSAGE_A,
      options: ["picked strawberries", "saw cows", "had a picnic", "drove home"],
      correctAnswer: "picked strawberries",
      explanation:
        "The passage says, \"In the afternoon, the children picked strawberries.\" The other events happened at different times of the day.",
      hint: "Find the sentence that starts with 'In the afternoon'.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-RDG-3",
      testLevel: "medium",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What happened right after the family arrived at the farm?",
      passage: PASSAGE_A,
      options: [
        "They visited the farm and saw cows, sheep, and chickens.",
        "They picked strawberries.",
        "They had a picnic.",
        "They drove home."
      ],
      correctAnswer: "They visited the farm and saw cows, sheep, and chickens.",
      explanation:
        "The passage lists the events in order: arrived, visited the farm and saw animals, had a picnic at noon, then picked strawberries in the afternoon.",
      hint: "Check the order the events are written in the passage.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-2",
      testLevel: "medium",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the sentence that correctly shows ownership.",
      question: "This skateboard belongs to your brother. Which sentence is correct?",
      options: [
        "That is my brother's skateboard.",
        "That is my brothers skateboard.",
        "That is my brother skateboard.",
        "That is the skateboard my brother's."
      ],
      correctAnswer: "That is my brother's skateboard.",
      explanation:
        "To show the skateboard belongs to your brother, add ’s to 'brother': brother's skateboard. The apostrophe must come before the s for one owner.",
      hint: "There is one owner — where does the apostrophe go?",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-VOC-2",
      testLevel: "medium",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "We need an umbrella because it is ___ outside.",
      options: ["raining", "sunny", "windy", "cloudy"],
      correctAnswer: "raining",
      explanation:
        "You use an umbrella to stay dry, so 'raining' is the best fit. Being sunny, windy, or cloudy does not usually make you need an umbrella.",
      hint: "Think about what an umbrella protects you from.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-LIS-2",
      testLevel: "medium",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "Why did Jack wake up late?",
      audioScript: "Jack usually wakes up at seven, but this morning he woke up at eight because his alarm did not ring.",
      options: [
        "His alarm did not ring.",
        "He went to bed late.",
        "He was sick.",
        "He forgot to sleep."
      ],
      correctAnswer: "His alarm did not ring.",
      explanation:
        "The speaker gives the reason with the word 'because': \"because his alarm did not ring.\"",
      hint: "Listen for the word 'because'.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-CNV-2",
      testLevel: "medium",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "One reply does NOT fit this conversation. Choose the reply that is NOT suitable.",
      question: "A: Would you like to come to my party on Saturday?\nWhich reply is NOT a suitable answer?",
      options: [
        "The sky is blue today.",
        "Yes, I'd love to come!",
        "Sorry, I can't. I have a family trip.",
        "Thank you for inviting me!"
      ],
      correctAnswer: "The sky is blue today.",
      explanation:
        "\"The sky is blue today\" does not answer the invitation at all — it talks about something unrelated. The other three replies all respond to being invited to a party.",
      hint: "Which sentence has nothing to do with the invitation?",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-3",
      testLevel: "medium",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "It ___ not sunny yesterday, so we didn't go to the park.",
      options: ["was", "were", "is", "are"],
      correctAnswer: "was",
      explanation:
        "The subject is 'it', and 'it' always uses 'was' in the past, even in a negative sentence: It was not sunny yesterday.",
      hint: "The subject is 'it' — think I / he / she / it.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-RDG-4",
      testLevel: "medium",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "Where did Ben finally find his bag?",
      passage: PASSAGE_B,
      options: ["in the kitchen", "under his bed", "in the living room", "at school"],
      correctAnswer: "in the kitchen",
      explanation:
        "The passage says, \"Ben ran to the kitchen and found his bag next to the table.\" He looked under his bed and in the living room first, but the bag was not there.",
      hint: "He looked in two places first, but the bag was in a different room.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-RDG-5",
      testLevel: "medium",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "Who told Ben where his bag was?",
      passage: PASSAGE_B,
      options: ["his little sister", "his mother", "his teacher", "his friend"],
      correctAnswer: "his little sister",
      explanation:
        "The passage says, \"his little sister said she saw it in the kitchen.\" She is the one who helped Ben find his bag.",
      hint: "Look for the family member mentioned in the passage.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-VOC-3",
      testLevel: "medium",
      skill: "vocabulary",
      questionType: "match",
      instruction: "Match each people-word to its meaning.",
      question: "Match the words to their meanings.",
      pairs: [
        { left: "classmate", right: "a friend in your class" },
        { left: "neighbor", right: "a person who lives near you" },
        { left: "stranger", right: "a person you do not know" },
        { left: "visitor", right: "a person who comes to see you" }
      ],
      explanation:
        "A classmate is a friend in your class, a neighbor lives near you, a stranger is someone you don't know, and a visitor is someone who comes to see you.",
      hint: "Think about how each person is connected to you.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-LIS-3",
      testLevel: "medium",
      skill: "listening",
      questionType: "order",
      instruction: "Listen to the audio, then put Mia's morning routine in the correct order.",
      question: "Arrange the events in the order you hear them.",
      audioScript:
        "First, Mia brushed her teeth. Next, she got dressed. After that, she ate breakfast. Finally, she left for school.",
      items: ["brushed her teeth", "got dressed", "ate breakfast", "left for school"],
      explanation:
        "The words 'First', 'Next', 'After that', and 'Finally' show the order of events: brushed her teeth, got dressed, ate breakfast, then left for school.",
      hint: "Listen for order words like 'first' and 'finally'.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-4",
      testLevel: "medium",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the words that correctly complete the sentence.",
      question: "A: Were you and your friends at the zoo on Saturday?\nB: Yes, we ___.",
      options: ["were", "was", "are", "is"],
      correctAnswer: "were",
      explanation:
        "The subject 'we' always uses 'were'. A short answer should match the question: Yes, we were.",
      hint: "The short answer should match the subject 'we'.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-CNV-3",
      testLevel: "medium",
      skill: "conversation",
      questionType: "match",
      instruction: "Match each question to the best response.",
      question: "Match the questions to their responses.",
      pairs: [
        { left: "Whose notebook is this?", right: "It's Sam's notebook." },
        { left: "Were you at the library yesterday?", right: "Yes, I was." },
        { left: "Can I borrow your eraser?", right: "Sure, here you are." }
      ],
      explanation:
        "Each question needs an answer that matches its meaning: a question about ownership needs an owner's name, a yes/no question needs a short answer, and a request needs an offer or agreement.",
      hint: "Match the type of question to the type of answer it needs.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-VOC-4",
      testLevel: "medium",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best fits the situation.",
      question: "The soup was too hot, so David waited for it to ___.",
      options: ["cool down", "heat up", "spill over", "freeze"],
      correctAnswer: "cool down",
      explanation:
        "If soup is too hot to eat, you wait for it to become less hot, which means it needs to 'cool down'.",
      hint: "Think about what you do before eating something too hot.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-5",
      testLevel: "medium",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the pair of words that correctly completes the sentence.",
      question: "Last Monday, my parents ___ busy at work, but I ___ free after school.",
      options: ["were / was", "was / were", "were / were", "was / was"],
      correctAnswer: "were / was",
      explanation:
        "'My parents' is more than one person, so it needs 'were'. 'I' always uses 'was'. The correct pair is: were / was.",
      hint: "'Parents' is plural, but 'I' is singular.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-LIS-4",
      testLevel: "medium",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the short conversation, then choose the correct answer.",
      question: "Where was the boy yesterday?",
      audioScript: DIALOGUE,
      options: ["at his cousin's house", "at school", "at the park", "at home"],
      correctAnswer: "at his cousin's house",
      explanation:
        "The boy says, \"I was at my cousin's house.\" Listen carefully to his first answer in the conversation.",
      hint: "Listen to the boy's first reply.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-LIS-5",
      testLevel: "medium",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the same conversation again, then choose the correct answer.",
      question: "Who else was at the cousin's house?",
      audioScript: DIALOGUE,
      options: ["the cousin's sister", "the boy's mother", "his teacher", "his neighbor"],
      correctAnswer: "the cousin's sister",
      explanation:
        "The girl asks if the cousin's sister was there, and the boy answers, \"Yes, she was there.\" This tells us the cousin's sister was also there.",
      hint: "Listen for who the girl asks about.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-GRM-6",
      testLevel: "medium",
      skill: "grammar",
      questionType: "order",
      instruction: "Put the words in the correct order to make a sentence.",
      question: "Arrange the words to make a correct sentence.",
      items: ["She", "was", "very", "happy", "yesterday"],
      explanation:
        "A correct English sentence usually goes: subject + verb + description + time. So the order is: She was very happy yesterday.",
      hint: "Start with who the sentence is about.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-VOC-5",
      testLevel: "medium",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that completes the instruction.",
      question: "Read and follow: ___ the correct answer.",
      options: ["Circle", "Cook", "Sing", "Jump"],
      correctAnswer: "Circle",
      explanation:
        "In tests and worksheets, 'Circle the correct answer' is a common instruction meaning to draw a circle around your choice.",
      hint: "This is a word you often see in test instructions.",
      difficulty: 2,
      points: 1
    },
    {
      id: "MD-CNV-4",
      testLevel: "medium",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best answer about the purpose of the conversation.",
      question:
        "A: Excuse me, could you tell me the way to the school office?\nB: Sure, it's next to the library.\nWhat is the boy trying to do?",
      options: [
        "Ask for directions.",
        "Ask about the weather.",
        "Talk about his family.",
        "Invite someone to a party."
      ],
      correctAnswer: "Ask for directions.",
      explanation:
        "The boy asks \"could you tell me the way to...\", which is a polite way to ask for directions to a place.",
      hint: "The phrase 'the way to' is a clue about the purpose.",
      difficulty: 2,
      points: 1
    }
  ];
})();
