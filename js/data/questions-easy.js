/* =====================================================================
   EMC.data.easy — Test Set 1: Easy (25 original questions)
   Warm-up review: basic recall, recognition, simple sentence understanding.
   Cr. Bright EngMath — all content original.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  EMC.data = EMC.data || {};

  const PASSAGE_A =
    "Tom woke up at seven o'clock. He ate breakfast with his family. Then he walked to school with his sister. At school, Tom read a story and drew a picture of his dog. After school, he was happy because he got a gold star from his teacher.";

  const PASSAGE_B =
    "It was Mia's birthday on Saturday afternoon. Her friends came to her house to celebrate. They played fun games in the garden and ate chocolate cake. Mia's mother gave her a new bicycle. Mia smiled and said, \"Thank you! This is the best birthday ever!\"";

  EMC.data.easy = [
    {
      id: "EZ-VOC-1",
      testLevel: "easy",
      skill: "vocabulary",
      questionType: "multiple-choice",
      instruction: "Choose the correct word.",
      question: "Which word means a place where you can borrow books?",
      options: ["library", "kitchen", "garden", "hospital"],
      correctAnswer: "library",
      explanation:
        "A library is a place with lots of books that people can borrow. A kitchen is for cooking, a garden is for growing plants, and a hospital is for people who are sick.",
      hint: "Think about where you go to find storybooks.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-1",
      testLevel: "easy",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the sentence that correctly shows ownership.",
      question: "This bag belongs to Anna. Which sentence is correct?",
      options: [
        "This is Anna's bag.",
        "This is Annas bag.",
        "This is the Anna bag.",
        "This is bag Anna's."
      ],
      correctAnswer: "This is Anna's bag.",
      explanation:
        "We add an apostrophe and 's' (’s) to a name to show ownership: Anna's bag means the bag that belongs to Anna.",
      hint: "Look for the apostrophe (’) before the s.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-2",
      testLevel: "easy",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "The ___ tail is long and brown.",
      options: ["dog's", "dogs", "dogs'", "dog"],
      correctAnswer: "dog's",
      explanation:
        "To show that the tail belongs to one dog, we use dog's (with an apostrophe before the s). 'Dogs' with no apostrophe just means more than one dog.",
      hint: "One dog owns the tail — use ’s.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-LIS-1",
      testLevel: "easy",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "How old is Ben?",
      audioScript: "Hi! My name is Ben. I am nine years old. I have a small dog.",
      options: ["nine", "eight", "seven", "ten"],
      correctAnswer: "nine",
      explanation:
        "Ben says, \"I am nine years old.\" Listen for the number word to find his age.",
      hint: "Listen carefully for the number.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-CNV-1",
      testLevel: "easy",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best response.",
      question: "A: Hi! How are you today?\nB: ___",
      options: [
        "I'm fine, thank you!",
        "I am a student.",
        "See you later.",
        "It's a book."
      ],
      correctAnswer: "I'm fine, thank you!",
      explanation:
        "When someone asks \"How are you?\", the natural reply is to say how you feel, like \"I'm fine, thank you!\"",
      hint: "The question asks about your feelings, not facts.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-VOC-2",
      testLevel: "easy",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best completes the sentence.",
      question: "My mother's sister is my ___.",
      options: ["aunt", "uncle", "cousin", "niece"],
      correctAnswer: "aunt",
      explanation:
        "Your mother's sister is called your aunt. Your mother's brother would be your uncle.",
      hint: "This word is for a female family member.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-RDG-1",
      testLevel: "easy",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What did Tom draw a picture of?",
      passage: PASSAGE_A,
      options: ["his dog", "his cat", "his school", "his sister"],
      correctAnswer: "his dog",
      explanation:
        "The passage says, \"Tom read a story and drew a picture of his dog.\" This tells us exactly what he drew.",
      hint: "Look for the word 'drew' in the passage.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-RDG-2",
      testLevel: "easy",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "How did Tom go to school?",
      passage: PASSAGE_A,
      options: ["He walked.", "He ran.", "He rode a bike.", "He took a bus."],
      correctAnswer: "He walked.",
      explanation:
        "The passage says, \"he walked to school with his sister.\" This tells us how Tom got to school.",
      hint: "Find the sentence about going to school.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-RDG-3",
      testLevel: "easy",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "Why was Tom happy?",
      passage: PASSAGE_A,
      options: [
        "He got a gold star.",
        "He ate breakfast.",
        "He drew a picture.",
        "He woke up early."
      ],
      correctAnswer: "He got a gold star.",
      explanation:
        "The passage ends, \"he was happy because he got a gold star from his teacher.\" The word 'because' tells us the reason.",
      hint: "Look for the word 'because'.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-3",
      testLevel: "easy",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the sentence that is correct.",
      question: "Look at the toy box. It has more than one toy inside. Which sentence is correct?",
      options: [
        "I have two toys.",
        "I have two toy's.",
        "I have two toys'.",
        "I have two toy."
      ],
      correctAnswer: "I have two toys.",
      explanation:
        "When we just mean more than one toy, we add 's' with no apostrophe: toys. We only use ’s (with an apostrophe) to show ownership, like 'Anna's toy'.",
      hint: "This sentence is about how many toys, not who owns them.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-LIS-2",
      testLevel: "easy",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "What time is it?",
      audioScript: "Look at the clock. It is three o'clock. It is time for football practice.",
      options: ["three o'clock", "two o'clock", "four o'clock", "one o'clock"],
      correctAnswer: "three o'clock",
      explanation:
        "The speaker says, \"It is three o'clock.\" Listen carefully for the exact time.",
      hint: "Listen for the number before 'o'clock'.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-CNV-2",
      testLevel: "easy",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best response.",
      question: "A: What is your name?\nB: ___",
      options: [
        "My name is Lily.",
        "I am nine.",
        "Yes, I do.",
        "It's blue."
      ],
      correctAnswer: "My name is Lily.",
      explanation:
        "The question \"What is your name?\" asks for a name, so the best answer gives a name: \"My name is Lily.\"",
      hint: "The question is asking for a name.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-VOC-3",
      testLevel: "easy",
      skill: "vocabulary",
      questionType: "match",
      instruction: "Match each feeling word to its meaning.",
      question: "Match the words to their meanings.",
      pairs: [
        { left: "hungry", right: "wanting to eat" },
        { left: "sleepy", right: "wanting to rest" },
        { left: "thirsty", right: "wanting to drink" },
        { left: "excited", right: "feeling very happy about something" }
      ],
      explanation:
        "Hungry means you want to eat, sleepy means you want to rest, thirsty means you want to drink, and excited means you feel very happy about something.",
      hint: "Think about what your body or feelings are telling you.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-4",
      testLevel: "easy",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "Yesterday, she ___ at the park.",
      options: ["was", "were", "is", "are"],
      correctAnswer: "was",
      explanation:
        "We use 'was' with he, she, and it. Since the subject here is 'she', the correct word is 'was': She was at the park yesterday.",
      hint: "The subject is 'she' — think I / he / she / it.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-RDG-4",
      testLevel: "easy",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "Whose birthday was it?",
      passage: PASSAGE_B,
      options: ["Mia's", "Mia's mother's", "Mia's friend's", "Mia's sister's"],
      correctAnswer: "Mia's",
      explanation:
        "The passage begins, \"It was Mia's birthday.\" This tells us straight away whose special day it was.",
      hint: "Look at the very first sentence.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-RDG-5",
      testLevel: "easy",
      skill: "reading",
      questionType: "multiple-choice",
      instruction: "Read the passage, then choose the best answer.",
      question: "What gift did Mia get?",
      passage: PASSAGE_B,
      options: ["a bicycle", "a book", "a doll", "a game"],
      correctAnswer: "a bicycle",
      explanation:
        "The passage says, \"Mia's mother gave her a new bicycle.\" This tells us exactly what the gift was.",
      hint: "Find the sentence about Mia's mother.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-LIS-3",
      testLevel: "easy",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "What is the speaker's favorite place?",
      audioScript: "My favorite place is the park. I like to play on the swings there.",
      options: ["the park", "the school", "the zoo", "the beach"],
      correctAnswer: "the park",
      explanation:
        "The speaker says, \"My favorite place is the park.\" Listen for the words 'favorite place'.",
      hint: "Listen for the words 'favorite place'.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-5",
      testLevel: "easy",
      skill: "grammar",
      questionType: "fill-blank",
      instruction: "Choose the word that correctly completes the sentence.",
      question: "Last week, we ___ at my grandmother's house.",
      options: ["were", "was", "are", "is"],
      correctAnswer: "were",
      explanation:
        "We use 'were' with you, we, and they. Since the subject here is 'we', the correct word is 'were': We were at my grandmother's house.",
      hint: "The subject is 'we' — think you / we / they.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-CNV-3",
      testLevel: "easy",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the best response.",
      question: "A: Do you want to play with me?\nB: ___",
      options: [
        "Yes, let's play together!",
        "It is raining.",
        "I am ten years old.",
        "Goodbye."
      ],
      correctAnswer: "Yes, let's play together!",
      explanation:
        "This is an invitation to play. A friendly and natural way to accept an invitation is, \"Yes, let's play together!\"",
      hint: "This is an invitation — think about how to say yes nicely.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-VOC-4",
      testLevel: "easy",
      skill: "vocabulary",
      questionType: "multiple-choice",
      instruction: "Choose the correct word.",
      question: "Which one is a fruit?",
      options: ["banana", "carrot", "potato", "bread"],
      correctAnswer: "banana",
      explanation:
        "A banana is a fruit. Carrots and potatoes are vegetables, and bread is made from grain.",
      hint: "Think about which one grows on a tree or plant and is sweet.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-GRM-6",
      testLevel: "easy",
      skill: "grammar",
      questionType: "multiple-choice",
      instruction: "Choose the correct question.",
      question: "You want to ask your friend about yesterday. Which question is correct?",
      options: [
        "Was you at school yesterday?",
        "Were you at school yesterday?",
        "Was you at school today?",
        "Are you at school yesterday?"
      ],
      correctAnswer: "Were you at school yesterday?",
      explanation:
        "We use 'were' with 'you'. The correct question is: Were you at school yesterday? (We also need 'yesterday' because 'was/were' talk about the past.)",
      hint: "'You' always goes with 'were', not 'was'.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-LIS-4",
      testLevel: "easy",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "What color is Sara's backpack?",
      audioScript: "Sara has a red backpack. Inside, she has two books and a pencil case.",
      options: ["red", "blue", "green", "yellow"],
      correctAnswer: "red",
      explanation:
        "The speaker says, \"Sara has a red backpack.\" Listen for the color word near the beginning.",
      hint: "Listen for the color word.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-VOC-5",
      testLevel: "easy",
      skill: "vocabulary",
      questionType: "fill-blank",
      instruction: "Choose the word that best completes the sentence.",
      question: "We eat breakfast in the ___.",
      options: ["morning", "night", "week", "month"],
      correctAnswer: "morning",
      explanation:
        "Breakfast is the first meal of the day, and we eat it in the morning, soon after we wake up.",
      hint: "Think about when your day starts.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-CNV-4",
      testLevel: "easy",
      skill: "conversation",
      questionType: "multiple-choice",
      instruction: "Choose the most appropriate response.",
      question: "A: Where is the library?\nB: ___",
      options: [
        "It is next to the school.",
        "I like reading.",
        "She is my friend.",
        "It was fun."
      ],
      correctAnswer: "It is next to the school.",
      explanation:
        "The question \"Where is...?\" asks about a location, so the best answer gives a place: \"It is next to the school.\"",
      hint: "The question 'Where' needs a place in the answer.",
      difficulty: 1,
      points: 1
    },
    {
      id: "EZ-LIS-5",
      testLevel: "easy",
      skill: "listening",
      questionType: "listening-choice",
      instruction: "Listen to the audio, then choose the correct answer.",
      question: "What was the weather like yesterday?",
      audioScript: "Yesterday was rainy, so we stayed at home and watched a movie.",
      options: ["rainy", "sunny", "snowy", "windy"],
      correctAnswer: "rainy",
      explanation:
        "The speaker says, \"Yesterday was rainy.\" Listen for the weather word at the start of the sentence.",
      hint: "Listen for the weather word.",
      difficulty: 1,
      points: 1
    }
  ];
})();
