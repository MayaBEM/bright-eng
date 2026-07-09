window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[4] = [
  {
    id: "set4-p1",
    setId: 4,
    title: "Power From the Sun",
    text: "Last year, a group of students at a secondary school in Chiang Mai decided to tackle their school's high electricity bills. After researching different options, they proposed installing solar panels on the roof of the main building. At first, the school director was hesitant because the initial cost seemed high. However, the students prepared a detailed report showing that the panels would pay for themselves within five years and continue producing free electricity for at least two decades afterward.\n\nConvinced by the evidence, the school approved the project. Local engineers helped the students install the panels safely, while the students monitored the energy output as part of a science class assignment. Within six months, the school's electricity costs dropped by nearly forty percent. Encouraged by this success, several other schools in the region have since contacted the students to ask for advice on starting similar projects.\n\nWhat began as a simple classroom idea has grown into a model of sustainable innovation for the whole province. The project shows that when young people combine curiosity with careful planning, they can create real, lasting change in their communities."
  }
];

window.QUIZ_DATA.sets[4] = [
  {
    id: "set4-q1", setId: 4, section: "grammar", skill: "present perfect continuous",
    difficulty: "advanced",
    question: "Nan _____ English for six years, so she can communicate quite fluently now.",
    passageId: null,
    options: ["studies", "studied", "has been studying", "is studying"],
    correctAnswer: 2,
    explanationThai: "Present Perfect Continuous (has/have been + V-ing) ใช้แสดงการกระทำที่เริ่มในอดีตและต่อเนื่องมาจนถึงปัจจุบัน โดยเน้นระยะเวลา (for six years)",
    wrongAnswerExplanationsThai: [
      "Present Simple ไม่ได้แสดงระยะเวลาที่ต่อเนื่องมาจนถึงปัจจุบัน",
      "Past Simple สื่อว่าการกระทำจบไปแล้ว ขัดแย้งกับ 'now' ที่บ่งบอกว่ายังใช้ทักษะนี้อยู่",
      "",
      "Present Continuous ไม่ได้สื่อถึงระยะเวลาที่ผ่านมาตั้งแต่อดีตจนถึงปัจจุบัน"
    ],
    tipThai: "เมื่อเจอ 'for + ระยะเวลา' ร่วมกับความหมายที่ต่อเนื่องถึงปัจจุบัน ให้นึกถึง Present Perfect Continuous"
  },
  {
    id: "set4-q2", setId: 4, section: "grammar", skill: "passive voice with modals",
    difficulty: "challenge",
    question: "All the entries for the science competition _____ by Friday afternoon.",
    passageId: null,
    options: ["must be submitted", "must submit", "must submitted", "must have submit"],
    correctAnswer: 0,
    explanationThai: "'entries' เป็นผู้ถูกกระทำ (ถูกส่ง) จึงต้องใช้ Passive Voice กับ modal: must + be + V3",
    wrongAnswerExplanationsThai: [
      "",
      "เป็น Active Voice ซึ่งความหมายผิด เพราะ 'entries' ไม่สามารถส่งตัวเองได้",
      "ขาดคำว่า 'be' ทำให้โครงสร้าง Passive ไม่สมบูรณ์",
      "เป็นโครงสร้างที่ผิดไวยากรณ์ ไม่มีรูปแบบนี้ในภาษาอังกฤษ"
    ],
    tipThai: "Modal + Passive Voice: must/should/can + be + V3 เมื่อประธานเป็นผู้ถูกกระทำ"
  },
  {
    id: "set4-q3", setId: 4, section: "grammar", skill: "relative clauses (which)",
    difficulty: "advanced",
    question: "The book _____ I borrowed from the library was extremely interesting.",
    passageId: null,
    options: ["who", "which", "whose", "whom"],
    correctAnswer: 1,
    explanationThai: "'which' ใช้แทนคำนามที่เป็นสิ่งของ (the book) ในฐานะกรรมของ relative clause",
    wrongAnswerExplanationsThai: [
      "'who' ใช้แทนคน ไม่ใช้แทนสิ่งของอย่าง 'the book'",
      "",
      "'whose' แสดงความเป็นเจ้าของ ไม่ตรงกับโครงสร้างประโยคนี้",
      "'whom' ใช้แทนคนในฐานะกรรม ไม่ใช้แทนสิ่งของ"
    ],
    tipThai: "which/that ใช้แทนสิ่งของ ส่วน who/whom ใช้แทนคนเท่านั้น"
  },
  {
    id: "set4-q4", setId: 4, section: "grammar", skill: "third conditional",
    difficulty: "challenge",
    question: "If she _____ harder, she would have passed the entrance exam.",
    passageId: null,
    options: ["studies", "studied", "would study", "had studied"],
    correctAnswer: 3,
    explanationThai: "Third Conditional ใช้โครงสร้าง If + Past Perfect, ... would have + V3 เพื่อพูดถึงสถานการณ์สมมติในอดีตที่ไม่ได้เกิดขึ้นจริง",
    wrongAnswerExplanationsThai: [
      "Present Simple ใช้ใน First Conditional ไม่ตรงกับความหมายสมมติในอดีต",
      "Past Simple ใช้ใน Second Conditional ไม่สอดคล้องกับ 'would have passed' ที่พูดถึงอดีต",
      "'would study' เป็นรูปเงื่อนไข ไม่สามารถใช้ในประโยค if-clause ได้",
      ""
    ],
    tipThai: "Third Conditional: If + had + V3, would have + V3 — พูดถึงสิ่งที่ไม่เกิดขึ้นจริงในอดีต"
  },
  {
    id: "set4-q5", setId: 4, section: "grammar", skill: "reported speech (yes/no questions)",
    difficulty: "advanced",
    question: "Ann asked me _____ I had finished my homework.",
    passageId: null,
    options: ["that", "what", "if", "which"],
    correctAnswer: 2,
    explanationThai: "เมื่อรายงานคำถามแบบ Yes/No Question ต้องใช้ 'if' หรือ 'whether' นำหน้าประโยค",
    wrongAnswerExplanationsThai: [
      "'that' ใช้รายงานประโยคบอกเล่า ไม่ใช่คำถามแบบ Yes/No",
      "'what' ใช้ถามหาข้อมูล ไม่เหมาะกับคำถามที่ตอบได้แค่ ใช่/ไม่ใช่",
      "",
      "'which' ใช้ถามเลือกระหว่างตัวเลือกที่เจาะจง ไม่ตรงกับบริบทนี้"
    ],
    tipThai: "Reported Yes/No Question: asked + if/whether + subject + verb"
  },
  {
    id: "set4-q6", setId: 4, section: "grammar", skill: "modals of obligation",
    difficulty: "intermediate",
    question: "You _____ wear a uniform at this school; it is one of the strictest rules.",
    passageId: null,
    options: ["might", "must", "could", "may"],
    correctAnswer: 1,
    explanationThai: "'must' ใช้แสดงข้อบังคับที่เข้มงวด ตรงกับบริบท 'one of the strictest rules'",
    wrongAnswerExplanationsThai: [
      "'might' แสดงความเป็นไปได้ ไม่ใช่ข้อบังคับ",
      "",
      "'could' แสดงความสามารถหรือความเป็นไปได้ ไม่ใช่กฎเกณฑ์ที่เข้มงวด",
      "'may' แสดงการอนุญาตหรือความเป็นไปได้ ซึ่งอ่อนกว่าข้อบังคับที่เข้มงวด"
    ],
    tipThai: "'must' ใช้กับกฎที่เข้มงวดหรือจำเป็นต้องทำ ต่างจาก may/might ที่แสดงความเป็นไปได้"
  },
  {
    id: "set4-q7", setId: 4, section: "grammar", skill: "comparative structures",
    difficulty: "advanced",
    question: "_____ you practice speaking English, the more confident you will become.",
    passageId: null,
    options: ["The more", "More", "The most", "As much"],
    correctAnswer: 0,
    explanationThai: "โครงสร้าง 'The + comparative..., the + comparative...' ใช้แสดงความสัมพันธ์ที่แปรผันตามกัน",
    wrongAnswerExplanationsThai: [
      "",
      "ขาดคำว่า 'the' ทำให้โครงสร้าง double comparative ไม่สมบูรณ์",
      "'the most' เป็นขั้นสุด ไม่ใช่โครงสร้างเปรียบเทียบคู่ขนานแบบนี้",
      "'as much' ไม่ได้ใช้ในโครงสร้าง the...the... แบบนี้"
    ],
    tipThai: "จำโครงสร้าง 'The more..., the more...' ให้ขึ้นใจ ใช้บ่อยในข้อสอบ"
  },
  {
    id: "set4-q8", setId: 4, section: "grammar", skill: "quantifiers (few/little)",
    difficulty: "challenge",
    question: "Although we had very _____ time left, we managed to finish the group project on schedule.",
    passageId: null,
    options: ["few", "a few", "a little", "little"],
    correctAnswer: 3,
    explanationThai: "'time' เป็นคำนามนับไม่ได้ จึงใช้ little/a little และ 'very little' เป็นสำนวนที่ใช้บอกว่ามีเวลาน้อยมาก ซึ่งเข้ากับคำว่า 'very' ได้อย่างเป็นธรรมชาติ",
    wrongAnswerExplanationsThai: [
      "'few' ใช้กับคำนามนับได้ แต่ 'time' เป็นคำนามนับไม่ได้",
      "'a few' ก็ใช้กับคำนามนับได้เช่นกัน ไม่เหมาะกับ 'time'",
      "'very a little' ไม่ใช่สำนวนที่ถูกต้อง เพราะ 'very' ไม่ใช้ขยาย 'a little' ในลักษณะนี้",
      ""
    ],
    tipThai: "few/a few ใช้กับนามนับได้ (fewer books) little/a little ใช้กับนามนับไม่ได้ (less time)"
  },
  {
    id: "set4-q9", setId: 4, section: "vocabulary", skill: "phrasal verb - technology",
    difficulty: "intermediate",
    question: "If you don't understand a difficult word, you can _____ it in an online dictionary.",
    passageId: null,
    options: ["put up", "look up", "give up", "take up"],
    correctAnswer: 1,
    explanationThai: "'look up' เป็น phrasal verb ที่แปลว่า 'ค้นหาข้อมูล' ตรงกับบริบทของการค้นหาคำศัพท์ในพจนานุกรม",
    wrongAnswerExplanationsThai: [
      "'put up' แปลว่าทนหรือติดตั้ง ไม่เกี่ยวข้องกับการค้นหาคำศัพท์",
      "",
      "'give up' แปลว่ายอมแพ้ ไม่เกี่ยวข้องกับการค้นหาความหมาย",
      "'take up' แปลว่าเริ่มทำงานอดิเรกหรือใช้พื้นที่ ไม่เกี่ยวข้องกับบริบทนี้"
    ],
    tipThai: "'look up' มักใช้คู่กับคำว่า word, information, dictionary เสมอ"
  },
  {
    id: "set4-q10", setId: 4, section: "vocabulary", skill: "word family - environment",
    difficulty: "advanced",
    question: "The factory's new filters have greatly reduced air _____ in the city.",
    passageId: null,
    options: ["pollute", "polluted", "pollution", "polluting"],
    correctAnswer: 2,
    explanationThai: "ตำแหน่งหลัง 'air' ต้องเป็นคำนาม จึงใช้ 'pollution' (มลพิษ) ซึ่งเป็นรูปคำนามของคำตระกูลนี้",
    wrongAnswerExplanationsThai: [
      "'pollute' เป็นคำกริยา ไม่สามารถเป็นกรรมของ reduced ได้",
      "'polluted' เป็นคำคุณศัพท์/กริยาช่องที่ 3 ไม่ใช่คำนาม",
      "",
      "'polluting' เป็นรูป gerund/participle ซึ่งไม่เป็นธรรมชาติในตำแหน่งนี้"
    ],
    tipThai: "หลัง noun ที่ทำหน้าที่ขยาย (เช่น air) มักตามด้วยคำนามอีกตัวในโครงสร้าง compound noun"
  },
  {
    id: "set4-q11", setId: 4, section: "vocabulary", skill: "synonym - science",
    difficulty: "advanced",
    question: "The experiment produced surprising results that amazed the entire research team. 'Amazed' is closest in meaning to _____",
    passageId: null,
    options: ["astonished", "bored", "confused", "worried"],
    correctAnswer: 0,
    explanationThai: "'amazed' แปลว่ารู้สึกประหลาดใจอย่างมาก ใกล้เคียงกับคำว่า 'astonished'",
    wrongAnswerExplanationsThai: [
      "",
      "'bored' แปลว่าเบื่อหน่าย ซึ่งเป็นอารมณ์ที่ต่างจากความประหลาดใจ",
      "'confused' แปลว่าสับสน ไม่ตรงกับความหมายของการประหลาดใจ",
      "'worried' แปลว่ากังวล ซึ่งเป็นอารมณ์คนละแบบกับความประหลาดใจ"
    ],
    tipThai: "เวลาหาคำเหมือน (synonym) ให้พิจารณาอารมณ์/น้ำหนักความหมายของคำให้ตรงกัน"
  },
  {
    id: "set4-q12", setId: 4, section: "vocabulary", skill: "collocation - health",
    difficulty: "intermediate",
    question: "It is important to get enough sleep and eat a balanced diet in order to maintain good _____.",
    passageId: null,
    options: ["illness", "sickness", "medicine", "health"],
    correctAnswer: 3,
    explanationThai: "'maintain good health' เป็น collocation ที่ใช้บ่อย หมายถึงการรักษาสุขภาพให้ดี",
    wrongAnswerExplanationsThai: [
      "'illness' แปลว่าอาการเจ็บป่วย ซึ่งมีความหมายตรงข้ามกับสิ่งที่ต้องการรักษาไว้",
      "'sickness' ก็แปลว่าความเจ็บป่วยเช่นกัน ไม่ตรงกับ collocation นี้",
      "'medicine' หมายถึงยาหรือการรักษา ไม่ใช่คำที่ใช้ใน collocation นี้",
      ""
    ],
    tipThai: "จำ collocation 'maintain/improve good health' ให้ขึ้นใจ"
  },
  {
    id: "set4-q13", setId: 4, section: "vocabulary", skill: "antonym - media literacy",
    difficulty: "advanced",
    question: "Reliable news sources check their facts carefully before publishing a story. The opposite of 'reliable' is _____",
    passageId: null,
    options: ["accurate", "untrustworthy", "popular", "recent"],
    correctAnswer: 1,
    explanationThai: "'reliable' แปลว่าน่าเชื่อถือ คำตรงข้ามคือ 'untrustworthy' ที่แปลว่าไม่น่าไว้วางใจ",
    wrongAnswerExplanationsThai: [
      "'accurate' เป็นคำใกล้เคียงความหมายเดียวกับ reliable ไม่ใช่คำตรงข้าม",
      "",
      "'popular' หมายถึงเป็นที่นิยม ไม่เกี่ยวข้องกับความน่าเชื่อถือ",
      "'recent' หมายถึงเมื่อเร็ว ๆ นี้ ซึ่งเป็นเรื่องของเวลา ไม่เกี่ยวกับความน่าเชื่อถือ"
    ],
    tipThai: "เมื่อหาคำตรงข้าม (antonym) ให้ระวังตัวเลือกที่เป็นคำใกล้เคียงความหมายเดิม (synonym) ซึ่งเป็นตัวลวงยอดฮิต"
  },
  {
    id: "set4-q14", setId: 4, section: "conversation", skill: "polite refusal/scheduling",
    difficulty: "advanced",
    question: "A: 'Let's meet at the library at 4 p.m. to finish the group project.' B: '_____ I have a dentist appointment then. Could we meet at 5 instead?'",
    passageId: null,
    options: ["That's a fantastic plan, see you then!", "I completely agree with everything.", "Never mind, I'll do it myself.", "I'm afraid that won't work for me."],
    correctAnswer: 3,
    explanationThai: "'I'm afraid that won't work for me' เป็นสำนวนสุภาพในการปฏิเสธข้อเสนอ ก่อนจะเสนอเวลาทางเลือกอื่น ซึ่งสอดคล้องกับประโยคถัดมา",
    wrongAnswerExplanationsThai: [
      "เป็นการเห็นด้วย ซึ่งขัดแย้งกับการเสนอเวลาใหม่ในประโยคถัดไป",
      "เป็นการเห็นด้วยทั้งหมด ไม่สอดคล้องกับการขอเปลี่ยนเวลานัด",
      "เป็นการตัดขาดจากกลุ่ม ไม่สอดคล้องกับน้ำเสียงที่ต้องการนัดเวลาร่วมกันใหม่",
      ""
    ],
    tipThai: "สำนวนปฏิเสธอย่างสุภาพ: 'I'm afraid...', 'I'm sorry, but...' มักตามด้วยเหตุผลและทางเลือกใหม่"
  },
  {
    id: "set4-q15", setId: 4, section: "conversation", skill: "giving advice",
    difficulty: "intermediate",
    question: "A: 'I'm really nervous about presenting in front of the whole class tomorrow.' B: '_____ Practicing in front of a mirror tonight might help.'",
    passageId: null,
    options: ["There's no way you can do this.", "Just forget about the presentation.", "Why don't you try practicing a few times first?", "It's not my problem."],
    correctAnswer: 2,
    explanationThai: "'Why don't you...?' เป็นสำนวนให้คำแนะนำอย่างสุภาพ สอดคล้องกับประโยคถัดไปที่แนะนำให้ฝึกซ้อม",
    wrongAnswerExplanationsThai: [
      "เป็นคำพูดบั่นทอนกำลังใจ ไม่ใช่คำแนะนำที่เป็นประโยชน์",
      "เป็นการบอกให้ยกเลิก ไม่ใช่การให้คำแนะนำที่เป็นประโยชน์",
      "",
      "แสดงความไม่สนใจ ไม่ใช่การให้คำแนะนำ"
    ],
    tipThai: "สำนวนให้คำแนะนำที่พบบ่อย: 'Why don't you...?', 'You could try...', 'Maybe you should...'"
  },
  {
    id: "set4-q16", setId: 4, section: "conversation", skill: "requests and permission",
    difficulty: "advanced",
    question: "A: 'Do you mind if I borrow your notes from yesterday's class? I was absent.' B: '_____'",
    passageId: null,
    options: ["Not at all, here you go.", "I absolutely mind.", "You should have come to class.", "That's none of your business."],
    correctAnswer: 0,
    explanationThai: "'Not at all' เป็นวิธีตอบอนุญาตอย่างสุภาพเมื่อมีคนถามว่า 'Do you mind if...?' หมายถึง 'ไม่ว่ากันเลย เชิญได้'",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นการปฏิเสธอย่างห้วนและไม่สุภาพสำหรับคำขอที่เป็นมิตรเช่นนี้",
      "เป็นคำพูดเชิงตำหนิ ไม่ใช่การตอบรับหรือปฏิเสธคำขอโดยตรง",
      "เป็นคำพูดที่หยาบคายและไม่เกี่ยวข้องกับคำขอที่สุภาพนี้"
    ],
    tipThai: "ระวัง! เมื่อถูกถามด้วย 'Do you mind if...?' การอนุญาตต้องตอบว่า 'Not at all' หรือ 'No, go ahead' (ไม่ใช่ Yes)"
  },
  {
    id: "set4-q17", setId: 4, section: "conversation", skill: "expressing opinions",
    difficulty: "intermediate",
    question: "A: 'Should we hold the charity event indoors or outdoors this year?' B: '_____ Then we won't have to worry about the weather.'",
    passageId: null,
    options: ["I don't have any opinion at all.", "Let's cancel the event completely.", "In my opinion, it would be safer indoors.", "Whatever, I don't really care."],
    correctAnswer: 2,
    explanationThai: "'In my opinion...' เป็นสำนวนแสดงความคิดเห็นอย่างชัดเจน สอดคล้องกับเหตุผลเรื่องสภาพอากาศในประโยคถัดไป",
    wrongAnswerExplanationsThai: [
      "ขัดแย้งกับประโยคถัดไปที่ให้เหตุผลสนับสนุนความเห็นอย่างชัดเจน",
      "ไม่ได้ตอบคำถามเรื่องในร่ม/กลางแจ้ง และเป็นคำตอบที่ไม่เกี่ยวข้อง",
      "",
      "แสดงความไม่สนใจ ไม่สอดคล้องกับการให้เหตุผลสนับสนุนในประโยคถัดไป"
    ],
    tipThai: "สำนวนแสดงความคิดเห็น: 'In my opinion...', 'I think...', 'From my point of view...'"
  },
  {
    id: "set4-q18", setId: 4, section: "cloze", skill: "error identification - subject-verb agreement",
    difficulty: "challenge",
    question: "Read the sentence below and identify which underlined part contains a grammatical error: (A) 'Neither the teacher nor the students was aware' (B) 'that the fire drill' (C) 'would take place' (D) 'during the final exam.'",
    passageId: null,
    options: ["Neither the teacher nor the students was aware", "that the fire drill", "would take place", "during the final exam."],
    correctAnswer: 0,
    explanationThai: "กฎ 'neither...nor' ให้กริยาสอดคล้องกับคำนามที่อยู่ใกล้กริยาที่สุด ในที่นี้คือ 'the students' ซึ่งเป็นพหูพจน์ จึงต้องใช้ 'were aware' ไม่ใช่ 'was aware' ส่วน (A) จึงผิดหลักไวยากรณ์",
    wrongAnswerExplanationsThai: [
      "",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด"
    ],
    tipThai: "neither...nor / either...or ให้กริยาผันตามคำนามตัวหลังสุดที่อยู่ใกล้กริยา"
  },
  {
    id: "set4-q19", setId: 4, section: "cloze", skill: "error identification - past perfect tense",
    difficulty: "challenge",
    question: "Read the sentence below and identify which underlined part contains a grammatical error: (A) 'By the time the bell rang,' (B) 'the students has already left' (C) 'the classroom quietly' (D) 'to catch their bus home.'",
    passageId: null,
    options: ["By the time the bell rang,", "the students has already left", "the classroom quietly", "to catch their bus home."],
    correctAnswer: 1,
    explanationThai: "'By the time' + Past Simple ในอดีต ต้องตามด้วย Past Perfect (had + V3) เพื่อแสดงว่าเหตุการณ์หนึ่งเกิดก่อนอีกเหตุการณ์หนึ่ง ส่วน (B) ใช้ 'has' (Present Perfect) ผิด ต้องแก้เป็น 'had already left'",
    wrongAnswerExplanationsThai: [
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด"
    ],
    tipThai: "'By the time + Past Simple' มักจับคู่กับ Past Perfect ในอีกประโยคเสมอ ไม่ใช่ Present Perfect"
  },
  {
    id: "set4-q20", setId: 4, section: "cloze", skill: "error identification - subject-verb agreement (plural pronoun)",
    difficulty: "advanced",
    question: "Read the sentence below and identify which underlined part contains a grammatical error: (A) 'The volunteers worked all afternoon' (B) 'to clean up the beach,' (C) 'and by evening they' (D) 'was completely exhausted.'",
    passageId: null,
    options: ["The volunteers worked all afternoon", "to clean up the beach,", "and by evening they", "was completely exhausted."],
    correctAnswer: 3,
    explanationThai: "ประธาน 'they' เป็นพหูพจน์ ต้องใช้กริยา 'were' ไม่ใช่ 'was' ส่วน (D) จึงผิดหลักไวยากรณ์ ต้องแก้เป็น 'were completely exhausted'",
    wrongAnswerExplanationsThai: [
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      "ส่วนนี้ถูกต้องตามหลักไวยากรณ์ ไม่มีข้อผิดพลาด",
      ""
    ],
    tipThai: "ตรวจสอบว่าประธานเอกพจน์หรือพหูพจน์เสมอ ก่อนเลือกกริยา was/were ให้สอดคล้องกัน"
  },
  {
    id: "set4-q21", setId: 4, section: "reading", skill: "reading - main idea",
    difficulty: "advanced",
    question: "What is the passage mainly about?",
    passageId: "set4-p1",
    options: ["Students successfully led a solar energy project that reduced their school's costs.", "A school director refused to approve any new technology.", "Engineers built a school without any help from students.", "Electricity prices increased dramatically across the province."],
    correctAnswer: 0,
    explanationThai: "เนื้อเรื่องทั้งหมดเล่าถึงนักเรียนที่ริเริ่มโครงการติดตั้งแผงโซลาร์เซลล์และช่วยลดค่าไฟฟ้าของโรงเรียนได้สำเร็จ",
    wrongAnswerExplanationsThai: [
      "",
      "ขัดแย้งกับบทความ เพราะผู้อำนวยการอนุมัติโครงการในที่สุดหลังเห็นหลักฐาน",
      "ขัดแย้งกับบทความ เพราะนักเรียนมีส่วนร่วมในการติดตั้งและตรวจสอบพลังงานด้วยตนเอง",
      "บทความไม่ได้กล่าวถึงราคาไฟฟ้าที่เพิ่มขึ้นทั่วทั้งจังหวัด"
    ],
    tipThai: "คำถาม main idea ต้องมองภาพรวมทั้งเรื่อง ไม่ใช่รายละเอียดย่อยเพียงจุดเดียว"
  },
  {
    id: "set4-q22", setId: 4, section: "reading", skill: "reading - detail",
    difficulty: "advanced",
    question: "According to the passage, how much did the school's electricity costs drop within six months?",
    passageId: "set4-p1",
    options: ["Ten percent", "Twenty percent", "Nearly forty percent", "One hundred percent"],
    correctAnswer: 2,
    explanationThai: "บทความระบุตรง ๆ ว่า 'the school's electricity costs dropped by nearly forty percent' ภายในหกเดือน",
    wrongAnswerExplanationsThai: [
      "ตัวเลขนี้ไม่ตรงกับที่ระบุไว้ในบทความ",
      "ตัวเลขนี้ไม่ตรงกับที่ระบุไว้ในบทความ",
      "",
      "บทความไม่ได้กล่าวว่าค่าไฟฟ้าลดลงทั้งหมดร้อยเปอร์เซ็นต์"
    ],
    tipThai: "คำถามแบบ detail มักมีตัวเลขหรือข้อเท็จจริงที่ต้องกลับไปหาในบทความโดยตรง"
  },
  {
    id: "set4-q23", setId: 4, section: "reading", skill: "reading - inference",
    difficulty: "challenge",
    question: "What can be inferred about the school director's initial reaction to the project?",
    passageId: "set4-p1",
    options: ["The director immediately loved the idea with no concerns.", "The director was cautious mainly because of the cost involved.", "The director had no opinion about the project at all.", "The director wanted to install the panels personally."],
    correctAnswer: 1,
    explanationThai: "จากประโยค 'the school director was hesitant because the initial cost seemed high' สามารถอนุมานได้ว่าความลังเลของผู้อำนวยการมาจากความกังวลเรื่องค่าใช้จ่ายเป็นหลัก",
    wrongAnswerExplanationsThai: [
      "ขัดแย้งกับบทความที่ระบุว่าผู้อำนวยการ 'was hesitant' ในตอนแรก ไม่ได้ชื่นชอบทันที",
      "",
      "ขัดแย้งกับบทความ เพราะผู้อำนวยการแสดงท่าทีลังเลอย่างชัดเจน ไม่ใช่ไม่มีความคิดเห็น",
      "บทความระบุว่าวิศวกรท้องถิ่นเป็นผู้ช่วยติดตั้ง ไม่ใช่ผู้อำนวยการ"
    ],
    tipThai: "คำถาม inference ต้องอาศัยการเชื่อมโยงเหตุผลจากข้อมูลที่ให้มา ไม่ใช่คำตอบตรง ๆ"
  },
  {
    id: "set4-q24", setId: 4, section: "reading", skill: "reading - vocabulary in context",
    difficulty: "advanced",
    question: "In the passage, the word 'tackle' is closest in meaning to _____",
    passageId: "set4-p1",
    options: ["ignore", "create", "increase", "address"],
    correctAnswer: 3,
    explanationThai: "ในบริบท 'decided to tackle their school's high electricity bills' คำว่า tackle หมายถึงการลงมือจัดการหรือแก้ไขปัญหาอย่างจริงจัง ใกล้เคียงกับคำว่า 'address'",
    wrongAnswerExplanationsThai: [
      "'ignore' แปลว่าเพิกเฉย ซึ่งมีความหมายตรงข้ามกับการลงมือแก้ปัญหา",
      "'create' แปลว่าสร้างขึ้นใหม่ ไม่ตรงกับความหมายของการจัดการปัญหาที่มีอยู่แล้ว",
      "'increase' แปลว่าเพิ่มขึ้น ไม่เกี่ยวข้องกับความหมายของการแก้ไขปัญหา",
      ""
    ],
    tipThai: "คำว่า tackle มักใช้คู่กับปัญหา (tackle a problem/issue) หมายถึงลงมือจัดการอย่างจริงจัง"
  },
  {
    id: "set4-q25", setId: 4, section: "reading", skill: "reading - conclusion",
    difficulty: "challenge",
    question: "Which conclusion best matches the passage?",
    passageId: "set4-p1",
    options: ["Careful planning by motivated students can lead to meaningful change.", "Solar panels are too expensive for any school to consider.", "Only professional engineers can design successful energy projects.", "Schools should avoid working with local engineers."],
    correctAnswer: 0,
    explanationThai: "ประโยคสุดท้ายของบทความสรุปว่า เมื่อเยาวชนผสมผสานความอยากรู้อยากเห็นเข้ากับการวางแผนอย่างรอบคอบ พวกเขาสามารถสร้างการเปลี่ยนแปลงที่แท้จริงและยั่งยืนได้",
    wrongAnswerExplanationsThai: [
      "",
      "ขัดแย้งกับบทความ เพราะแผงโซลาร์เซลล์พิสูจน์แล้วว่าคุ้มค่าในระยะยาว",
      "ขัดแย้งกับบทความ เพราะนักเรียนมีบทบาทสำคัญในโครงการนี้ ไม่ใช่วิศวกรเพียงฝ่ายเดียว",
      "ขัดแย้งกับบทความ เพราะวิศวกรท้องถิ่นช่วยเหลือโครงการได้สำเร็จ ไม่มีคำแนะนำให้หลีกเลี่ยง"
    ],
    tipThai: "คำถามสรุปเนื้อเรื่อง (conclusion) ให้เลือกคำตอบที่สอดคล้องกับข้อความสรุปท้ายย่อหน้ามากที่สุด"
  }
];
