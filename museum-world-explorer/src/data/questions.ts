// Question bank for Bright EngMath — English Revision Quiz
// Unit 1: In the Museum · Unit 2: The World Around Us
// Each question has exactly 3 choices, one correct answer, and a short
// explanation shown on the Result screen for questions the student got wrong.

export type Category = 'vocabulary' | 'story' | 'expression' | 'phonics';
export type UnitId = 1 | 2;

export interface Question {
  id: string;
  unit: UnitId;
  category: Category;
  question: string;
  choices: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explanation: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  vocabulary: 'Vocabulary',
  story: 'Story',
  expression: 'Useful Expression',
  phonics: 'Phonics',
};

export const UNIT_TITLES: Record<UnitId, string> = {
  1: 'In the Museum',
  2: 'The World Around Us',
};

export const unit1Questions: Question[] = [
  // Vocabulary (6)
  {
    id: 'u1-v1',
    unit: 1,
    category: 'vocabulary',
    question: "Which object protects a knight's body from attacks?",
    choices: ['A shield', 'A necklace', 'A crown'],
    correctIndex: 0,
    explanation: "A shield is the object a knight holds to protect himself in battle.",
  },
  {
    id: 'u1-v2',
    unit: 1,
    category: 'vocabulary',
    question: 'What weapon does a knight hold and swing to fight?',
    choices: ['A bracelet', 'A sword', 'A belt'],
    correctIndex: 1,
    explanation: "A sword is a knight's main weapon for fighting.",
  },
  {
    id: 'u1-v3',
    unit: 1,
    category: 'vocabulary',
    question: "What covers a knight's head for protection?",
    choices: ['A helmet', 'A crown', 'A necklace'],
    correctIndex: 0,
    explanation: 'A helmet protects the head. A crown is worn by a queen or king, not for protection.',
  },
  {
    id: 'u1-v4',
    unit: 1,
    category: 'vocabulary',
    question: 'Which weapon shoots arrows from far away?',
    choices: ['A sword', 'A shield', 'A bow and arrow'],
    correctIndex: 2,
    explanation: 'A bow and arrow is used to shoot arrows at a target from a distance.',
  },
  {
    id: 'u1-v5',
    unit: 1,
    category: 'vocabulary',
    question: 'What does a queen wear on her head to show she rules the kingdom?',
    choices: ['A helmet', 'A crown', 'A belt'],
    correctIndex: 1,
    explanation: 'A crown is a symbol worn by a queen or king to show they rule.',
  },
  {
    id: 'u1-v6',
    unit: 1,
    category: 'vocabulary',
    question: 'Which piece of jewellery is worn around the neck?',
    choices: ['A necklace', 'A bracelet', 'A belt'],
    correctIndex: 0,
    explanation: 'A necklace goes around the neck. A bracelet goes around the wrist and a belt around the waist.',
  },

  // Story comprehension (5)
  {
    id: 'u1-s1',
    unit: 1,
    category: 'story',
    question: 'What are Ben and Lucy searching for in the museum?',
    choices: ['The first line of a rhyme', 'A lost dog', 'Tickets for the museum'],
    correctIndex: 0,
    explanation: 'Ben and Lucy are looking for the first line of a treasure rhyme.',
  },
  {
    id: 'u1-s2',
    unit: 1,
    category: 'story',
    question: 'What suddenly gives Ben and Lucy a fright near the display?',
    choices: ['An arrow flies close to them', 'The lights turn off', 'Buster runs away'],
    correctIndex: 0,
    explanation: 'An arrow flies close to them, and they realise someone is trying to hurt them.',
  },
  {
    id: 'u1-s3',
    unit: 1,
    category: 'story',
    question: 'Why do Ben and Lucy hide?',
    choices: ['A knight with a sword is coming after them', 'They want to play a game', 'They are tired'],
    correctIndex: 0,
    explanation: 'They hide because a knight with a sword is coming after them and they feel scared.',
  },
  {
    id: 'u1-s4',
    unit: 1,
    category: 'story',
    question: 'How does Lucy stop the knight?',
    choices: ["She shouts loudly", "She uses Buster's lead", 'She hides behind a wall'],
    correctIndex: 1,
    explanation: "Lucy has an idea and uses Buster's lead to make the knight fall.",
  },
  {
    id: 'u1-s5',
    unit: 1,
    category: 'story',
    question: 'Where do Ben and Lucy find the first symbol and the rhyme line?',
    choices: ["On the queen's crown", "On the knight's shield", 'Under the stairs'],
    correctIndex: 1,
    explanation: "They find the symbol on the knight's shield, with the line: 'Behind the picture in the frame.'",
  },

  // Useful expressions (2)
  {
    id: 'u1-e1',
    unit: 1,
    category: 'expression',
    question: 'Which sentence would you say if you wanted everyone to escape quickly?',
    choices: ["Let's run.", "Let's look for...", 'I was very scared.'],
    correctIndex: 0,
    explanation: "'Let's run' is used to tell someone to escape quickly.",
  },
  {
    id: 'u1-e2',
    unit: 1,
    category: 'expression',
    question: 'Which sentence means the children must stay very quiet?',
    choices: ["I've got an idea.", "We mustn't make a noise.", 'That was a brilliant idea.'],
    correctIndex: 1,
    explanation: "'We mustn't make a noise' means they need to stay silent so no one hears them.",
  },

  // Phonics (2)
  {
    id: 'u1-p1',
    unit: 1,
    category: 'phonics',
    question: "Which letter is silent in the word 'knight'?",
    choices: ['k', 'n', 't'],
    correctIndex: 0,
    explanation: "In 'knight', the letter k is silent — we say /naɪt/.",
  },
  {
    id: 'u1-p2',
    unit: 1,
    category: 'phonics',
    question: "Which letter is silent in the word 'sword'?",
    choices: ['s', 'w', 'd'],
    correctIndex: 1,
    explanation: "In 'sword', the letter w is silent — we say /sɔːd/.",
  },
];

export const unit2Questions: Question[] = [
  // Vocabulary (6)
  {
    id: 'u2-v1',
    unit: 2,
    category: 'vocabulary',
    question: 'Which word means a large area of land covered with trees?',
    choices: ['A forest', 'A village', 'A field'],
    correctIndex: 0,
    explanation: 'A forest is a large area of land covered with trees.',
  },
  {
    id: 'u2-v2',
    unit: 2,
    category: 'vocabulary',
    question: 'Which word means a small piece of land surrounded by water?',
    choices: ['A mountain', 'An island', 'A path'],
    correctIndex: 1,
    explanation: 'An island is a small piece of land with water all around it.',
  },
  {
    id: 'u2-v3',
    unit: 2,
    category: 'vocabulary',
    question: 'Where do farmers usually grow their crops?',
    choices: ['A field', 'A mountain', 'A river'],
    correctIndex: 0,
    explanation: 'A field is an open area of land used for growing crops or keeping animals.',
  },
  {
    id: 'u2-v4',
    unit: 2,
    category: 'vocabulary',
    question: 'Which word means a small town where people live?',
    choices: ['A lake', 'A path', 'A village'],
    correctIndex: 2,
    explanation: 'A village is a small town or group of houses where people live.',
  },
  {
    id: 'u2-v5',
    unit: 2,
    category: 'vocabulary',
    question: 'Which word means flowing water that runs across the land to the sea?',
    choices: ['A river', 'A lake', 'A mountain'],
    correctIndex: 0,
    explanation: 'A river is flowing water that runs across land, often towards the sea.',
  },
  {
    id: 'u2-v6',
    unit: 2,
    category: 'vocabulary',
    question: 'Which word means a narrow track for walking?',
    choices: ['A path', 'A village', 'A field'],
    correctIndex: 0,
    explanation: 'A path is a narrow track that people can walk along.',
  },

  // Story comprehension (5)
  {
    id: 'u2-s1',
    unit: 2,
    category: 'story',
    question: 'What do Ben and Lucy show Grandpa at the restaurant?',
    choices: ['Their treasure map', 'A photo', 'A museum ticket'],
    correctIndex: 0,
    explanation: 'Ben and Lucy show Grandpa their treasure map at the table.',
  },
  {
    id: 'u2-s2',
    unit: 2,
    category: 'story',
    question: 'What does Grandpa ask the children about the map?',
    choices: ['Where is the library?', 'What are you looking for?', 'What is your name?'],
    correctIndex: 1,
    explanation: "Grandpa asks 'What are you looking for?' when he sees the treasure map.",
  },
  {
    id: 'u2-s3',
    unit: 2,
    category: 'story',
    question: "Why can't Ben find the map after lunch?",
    choices: ['Ben left it at home', 'Lucy lost it in the lake', 'The waiter took it'],
    correctIndex: 2,
    explanation: 'The waiter secretly took the map, but Grandpa had already swapped it for a menu.',
  },
  {
    id: 'u2-s4',
    unit: 2,
    category: 'story',
    question: "What did Grandpa put in Ben's pocket to keep the real map safe?",
    choices: ['A menu', 'Some bread', 'A spoon'],
    correctIndex: 0,
    explanation: 'Grandpa put a menu in Ben\'s pocket and kept the real treasure map safe.',
  },
  {
    id: 'u2-s5',
    unit: 2,
    category: 'story',
    question: 'What do they discover about the name of the restaurant?',
    choices: ['It is called The Golden Knight', 'It has no name', 'It is called The Red Lion, matching the map'],
    correctIndex: 2,
    explanation: "The restaurant is called The Red Lion, matching the lion picture on the treasure map.",
  },

  // Useful expressions (2)
  {
    id: 'u2-e1',
    unit: 2,
    category: 'expression',
    question: 'Which sentence shows Lucy is impressed when she arrives?',
    choices: ['What a nice restaurant!', 'What is it?', 'Look at the menu.'],
    correctIndex: 0,
    explanation: "'What a nice restaurant!' is used to show you like a place a lot.",
  },
  {
    id: 'u2-e2',
    unit: 2,
    category: 'expression',
    question: 'Which sentence does Grandpa use to warn the children to take care of the map?',
    choices: ['We have to find...', 'What are you looking for?', 'You must be more careful.'],
    correctIndex: 2,
    explanation: "'You must be more careful' is a warning to look after something important.",
  },

  // Phonics (2)
  {
    id: 'u2-p1',
    unit: 2,
    category: 'phonics',
    question: "Which letter is silent in the word 'rhino'?",
    choices: ['r', 'h', 'o'],
    correctIndex: 1,
    explanation: "In 'rhino', the letter h is silent — we say /ˈraɪnoʊ/.",
  },
  {
    id: 'u2-p2',
    unit: 2,
    category: 'phonics',
    question: "Which letter is silent in the word 'island'?",
    choices: ['i', 's', 'd'],
    correctIndex: 1,
    explanation: "In 'island', the letter s is silent — we say /ˈaɪlənd/.",
  },
];

export function getQuestionsForUnit(unit: UnitId): Question[] {
  return unit === 1 ? unit1Questions : unit2Questions;
}
