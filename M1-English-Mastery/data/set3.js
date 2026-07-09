window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[3] = [
  {
    id: "set3-p1",
    setId: 3,
    title: "Using AI Wisely",
    text: "Artificial intelligence, or AI, has become a common tool in classrooms around the world. Many students now use AI programs to check their spelling, translate difficult words, or organize their notes. These tools can save time and help learners understand new topics more quickly. However, teachers warn that AI should support learning, not replace it.\n\nSome students have started copying answers directly from AI chatbots without understanding the content. This habit can weaken their thinking skills and make it harder for them to solve problems on their own during exams. To use AI responsibly, students should treat it as a helpful assistant rather than a shortcut. For example, they can ask an AI tool to explain a concept in simpler words, and then try to summarize it in their own sentences afterward.\n\nSchools are now teaching digital literacy lessons so that students understand both the benefits and the risks of these new technologies. As AI continues to develop quickly, learning how to use it wisely may become just as important as learning the subject itself. Ultimately, the goal is not to avoid technology, but to use it thoughtfully."
  }
];

window.QUIZ_DATA.sets[3] = [
  {
    id: "set3-q1", setId: 3, section: "grammar", skill: "present perfect vs past perfect",
    difficulty: "advanced",
    question: "By the time the teacher arrived, the students _____ their presentation slides.",
    passageId: null,
    options: ["have already finished", "already finished", "were already finishing", "had already finished"],
    correctAnswer: 3,
    explanationThai: "ใช้ Past Perfect (had + V3) เพื่อแสดงว่าเหตุการณ์หนึ่ง (นักเรียนทำสไลด์เสร็จ) เกิดขึ้นและจบลงก่อนอีกเหตุการณ์หนึ่งในอดีต (ครูมาถึง) เช่น 'She had left before I called.'",
    wrongAnswerExplanationsThai: [
      "Present Perfect (have + V3) ใช้กับเหตุการณ์ที่เชื่อมโยงกับปัจจุบัน แต่ประโยคนี้อยู่ในอดีตทั้งหมด จึงต้องใช้ Past Perfect",
      "Past Simple ไม่ได้แสดงลำดับก่อน-หลังของสองเหตุการณ์ในอดีตอย่างชัดเจน",
      "Past Continuous สื่อว่ากำลังทำอยู่ ไม่ใช่เสร็จสิ้นไปแล้วก่อนครูมาถึง",
      ""
    ],
    tipThai: "สังเกตคำว่า 'By the time' + Past Simple มักตามด้วย Past Perfect ในอีกประโยคเสมอ"
  },
  {
    id: "set3-q2", setId: 3, section: "grammar", skill: "passive voice",
    difficulty: "advanced",
    question: "The new school library _____ by a famous architect last year.",
    passageId: null,
    options: ["designed", "was designed", "has designed", "is designing"],
    correctAnswer: 1,
    explanationThai: "ประธาน 'the library' เป็นผู้ถูกกระทำ (ถูกออกแบบ) จึงต้องใช้ Passive Voice: was/were + V3 ในอดีต เพราะมีคำว่า 'last year' บอกเวลาที่ชัดเจน",
    wrongAnswerExplanationsThai: [
      "'designed' เป็น Active Voice ที่แปลว่าห้องสมุดเป็นผู้ออกแบบเอง ซึ่งไม่สมเหตุสมผล ต้องใช้ Passive",
      "",
      "'has designed' เป็น Present Perfect แบบ Active และผิดเวลา เพราะมี 'last year' ระบุอดีตชัดเจน",
      "'is designing' เป็น Present Continuous แบบ Active ผิดทั้ง tense และ voice"
    ],
    tipThai: "เมื่อประธานของประโยคเป็น 'ผู้ถูกกระทำ' ให้มองหาโครงสร้าง Passive Voice (be + V3) ทันที"
  },
  {
    id: "set3-q3", setId: 3, section: "grammar", skill: "relative clauses (whose)",
    difficulty: "advanced",
    question: "The scientist _____ discovery changed modern medicine was awarded a Nobel Prize.",
    passageId: null,
    options: ["who", "which", "whose", "whom"],
    correctAnswer: 2,
    explanationThai: "ใช้ 'whose' เพื่อแสดงความเป็นเจ้าของ หมายถึง 'the scientist's discovery' (การค้นพบของนักวิทยาศาสตร์คนนั้น)",
    wrongAnswerExplanationsThai: [
      "'who' ใช้แทนคนในฐานะประธานหรือกรรม ไม่ได้แสดงความเป็นเจ้าของ",
      "'which' ใช้แทนสิ่งของ ไม่ใช้แทนคน",
      "",
      "'whom' ใช้แทนคนในฐานะกรรม ไม่ได้แสดงความเป็นเจ้าของเช่นกัน"
    ],
    tipThai: "ถ้าประโยคมีความหมายว่า 'ของใคร' ให้นึกถึง whose ทันที"
  },
  {
    id: "set3-q4", setId: 3, section: "grammar", skill: "first conditional",
    difficulty: "intermediate",
    question: "If the weather _____ fine tomorrow, we will go hiking in the national park.",
    passageId: null,
    options: ["is", "will be", "was", "would be"],
    correctAnswer: 0,
    explanationThai: "First Conditional ใช้โครงสร้าง If + Present Simple, ... will + V1 เพื่อพูดถึงเหตุการณ์ที่มีความเป็นไปได้จริงในอนาคต",
    wrongAnswerExplanationsThai: [
      "",
      "ห้ามใช้ 'will' ในประโยคเงื่อนไข (if-clause) ของ First Conditional",
      "'was' เป็น Past Simple ซึ่งใช้ใน Second Conditional (เหตุการณ์สมมติที่ไม่จริง) ไม่ตรงกับ 'will go' ที่บ่งบอกความเป็นไปได้จริง",
      "'would be' ใช้ใน Second Conditional เช่นกัน ไม่สอดคล้องกับความหมายที่เป็นไปได้จริงของประโยคนี้"
    ],
    tipThai: "First Conditional: If + Present Simple, will + V1 — ห้ามใช้ will ซ้ำในประโยค if"
  },
  {
    id: "set3-q5", setId: 3, section: "grammar", skill: "second conditional",
    difficulty: "advanced",
    question: "If I _____ more free time, I would learn how to play the guitar.",
    passageId: null,
    options: ["have", "will have", "would have", "had"],
    correctAnswer: 3,
    explanationThai: "Second Conditional ใช้โครงสร้าง If + Past Simple, ... would + V1 เพื่อพูดถึงสถานการณ์สมมติที่ไม่เป็นจริงในปัจจุบัน",
    wrongAnswerExplanationsThai: [
      "Present Simple ใช้ใน First Conditional (เหตุการณ์ที่เป็นไปได้จริง) ไม่ตรงกับน้ำเสียงสมมติของ 'would learn'",
      "ห้ามใช้ future tense ในประโยค if-clause",
      "'would have' ทำให้ประโยคมีคำบ่งชี้เงื่อนไขซ้ำสองครั้ง ซึ่งผิดโครงสร้าง",
      ""
    ],
    tipThai: "Second Conditional: If + Past Simple, would + V1 — ใช้พูดถึงสิ่งที่ไม่จริงในตอนนี้"
  },
  {
    id: "set3-q6", setId: 3, section: "grammar", skill: "reported speech (backshift)",
    difficulty: "challenge",
    question: "The coach said that the team _____ hard for the competition the following week.",
    passageId: null,
    options: ["practices", "was practicing", "had practiced", "will practice"],
    correctAnswer: 1,
    explanationThai: "ประโยคต้นฉบับคือ 'We are practicing hard...' (Present Continuous) เมื่อเปลี่ยนเป็น Reported Speech ต้อง Backshift เป็น Past Continuous: 'was/were practicing'",
    wrongAnswerExplanationsThai: [
      "Present Simple ไม่ใช่รูป Backshift ที่ถูกต้องของ Present Continuous",
      "",
      "Past Perfect สื่อว่าเหตุการณ์เสร็จสิ้นไปก่อนแล้ว ซึ่งผิดความหมายเดิมที่กำลังทำอยู่",
      "'will practice' ไม่ได้ถูก Backshift เป็น 'would practice' ตามกฎ Reported Speech"
    ],
    tipThai: "เมื่อรายงานคำพูด ให้ 'ถอยเวลากลับ' หนึ่งขั้นเสมอ: is/are + V-ing → was/were + V-ing"
  },
  {
    id: "set3-q7", setId: 3, section: "grammar", skill: "modals of deduction",
    difficulty: "advanced",
    question: "Look at the empty plate and dirty fork on the table – Somchai _____ already eaten his lunch.",
    passageId: null,
    options: ["must have", "can have", "should have", "might have"],
    correctAnswer: 0,
    explanationThai: "'must have + V3' ใช้แสดงการคาดเดาที่มั่นใจสูงจากหลักฐานที่เห็นชัดเจน (จานเปล่า ส้อมสกปรก) ว่าเหตุการณ์นั้นเกิดขึ้นแล้วในอดีต",
    wrongAnswerExplanationsThai: [
      "",
      "'can have' ไม่ใช่รูปแบบมาตรฐานสำหรับการคาดเดาเหตุการณ์ในอดีต",
      "'should have' ใช้แสดงการตำหนิหรือสิ่งที่ควรทำแต่ไม่ได้ทำ ไม่ใช่การคาดเดาจากหลักฐาน",
      "'might have' แสดงความเป็นไปได้เพียงเล็กน้อย ซึ่งอ่อนเกินไปเมื่อมีหลักฐานชัดเจนขนาดนี้"
    ],
    tipThai: "เมื่อมีหลักฐานชัดเจนตรงหน้า ให้เลือก 'must have + V3' เพื่อแสดงการคาดเดาที่มั่นใจ"
  },
  {
    id: "set3-q8", setId: 3, section: "grammar", skill: "gerunds after verbs",
    difficulty: "advanced",
    question: "Our teacher suggested _____ extra time on the science project before the deadline.",
    passageId: null,
    options: ["to spend", "spend", "spending", "spent"],
    correctAnswer: 2,
    explanationThai: "คำกริยา 'suggest' ตามด้วย Gerund (V-ing) เสมอ ไม่ใช้ to-infinitive เช่น 'suggest doing something'",
    wrongAnswerExplanationsThai: [
      "'suggest' ไม่สามารถตามด้วย to-infinitive ได้",
      "ไม่สามารถใช้กริยาช่องที่ 1 แบบไม่มีรูปแบบตามหลัง suggest ได้",
      "",
      "'spent' เป็นกริยาช่องที่ 2/3 ซึ่งผิดหลักไวยากรณ์ตามหลัง suggested"
    ],
    tipThai: "จำคำกริยาที่ตามด้วย Gerund เสมอ: suggest, enjoy, avoid, finish, consider"
  },
  {
    id: "set3-q9", setId: 3, section: "vocabulary", skill: "vocabulary in context - technology",
    difficulty: "intermediate",
    question: "Many students now use online tools to collaborate on group projects in real time. In this context, the word 'collaborate' most likely means to _____",
    passageId: null,
    options: ["compete against each other", "work together", "copy someone's work", "complain about a task"],
    correctAnswer: 1,
    explanationThai: "'Collaborate' แปลว่าทำงานร่วมกันเพื่อบรรลุเป้าหมายเดียวกัน ซึ่งตรงกับบริบทของการทำโปรเจกต์กลุ่ม",
    wrongAnswerExplanationsThai: [
      "'compete' มีความหมายตรงข้ามคือแข่งขันกัน ไม่ใช่ทำงานร่วมกัน",
      "",
      "การคัดลอกงานผู้อื่นไม่เกี่ยวข้องกับความหมายของการร่วมมือกัน และเป็นพฤติกรรมที่ไม่เหมาะสม",
      "การบ่นเกี่ยวกับงานไม่เกี่ยวข้องกับความหมายของคำนี้"
    ],
    tipThai: "ดูบริบทรอบคำศัพท์ 'group projects' และ 'real time' จะช่วยบอกความหมายที่แท้จริงของคำว่า collaborate"
  },
  {
    id: "set3-q10", setId: 3, section: "vocabulary", skill: "collocation - environment",
    difficulty: "intermediate",
    question: "To protect our planet, everyone should try to reduce, reuse, and _____ waste whenever possible.",
    passageId: null,
    options: ["recover", "reveal", "refuse", "recycle"],
    correctAnswer: 3,
    explanationThai: "'Reduce, reuse, recycle' เป็นวลีคุ้นเคยที่ใช้พูดถึงการจัดการขยะอย่างยั่งยืน คำว่า recycle หมายถึงการนำกลับมาแปรรูปใช้ใหม่",
    wrongAnswerExplanationsThai: [
      "'recover' หมายถึงการฟื้นตัวหรือกู้คืน ไม่ตรงกับวลีที่ใช้พูดถึงการจัดการขยะ",
      "'reveal' หมายถึงการเปิดเผย ไม่เกี่ยวข้องกับการจัดการขยะ",
      "'refuse' หมายถึงการปฏิเสธ ความหมายต่างจากบริบทของวลีนี้",
      ""
    ],
    tipThai: "จำวลียอดฮิตด้านสิ่งแวดล้อม 'reduce, reuse, recycle' ให้ขึ้นใจ"
  },
  {
    id: "set3-q11", setId: 3, section: "vocabulary", skill: "phrasal verb - science",
    difficulty: "advanced",
    question: "Scientists had to _____ several experiments before they found a solution that worked.",
    passageId: null,
    options: ["carry out", "give up", "look after", "turn down"],
    correctAnswer: 0,
    explanationThai: "'Carry out' เป็น phrasal verb ที่แปลว่า 'ดำเนินการ/ทำการทดลอง' ตรงกับบริบทของการทำการทดลองทางวิทยาศาสตร์",
    wrongAnswerExplanationsThai: [
      "",
      "'give up' แปลว่ายอมแพ้ ซึ่งมีความหมายตรงข้ามกับการดำเนินการทดลองต่อไป",
      "'look after' แปลว่าดูแล ไม่เกี่ยวข้องกับการทำการทดลอง",
      "'turn down' แปลว่าปฏิเสธ ไม่เกี่ยวข้องกับบริบทนี้"
    ],
    tipThai: "phrasal verb 'carry out' มักใช้คู่กับคำว่า experiment, plan, research เสมอ"
  },
  {
    id: "set3-q12", setId: 3, section: "vocabulary", skill: "word family - health",
    difficulty: "advanced",
    question: "Doctors recommend regular exercise to improve overall _____.",
    passageId: null,
    options: ["healthy", "healthier", "health", "healthily"],
    correctAnswer: 2,
    explanationThai: "ตำแหน่งหลัง 'overall' ต้องเป็นคำนาม จึงใช้ 'health' (สุขภาพ) ซึ่งเป็นรูปคำนามในตระกูลคำนี้",
    wrongAnswerExplanationsThai: [
      "'healthy' เป็นคำคุณศัพท์ ไม่สามารถทำหน้าที่เป็นกรรมของกริยา improve ได้โดยตรง",
      "'healthier' เป็นคำคุณศัพท์ขั้นกว่า ไม่ใช่คำนาม จึงใช้ในตำแหน่งนี้ไม่ได้",
      "",
      "'healthily' เป็นคำกริยาวิเศษณ์ (adverb) ไม่สามารถเป็นกรรมของประโยคได้"
    ],
    tipThai: "หลังคำว่า overall/good/poor มักตามด้วยคำนาม ให้สังเกตตำแหน่งไวยากรณ์ในประโยค"
  },
  {
    id: "set3-q13", setId: 3, section: "vocabulary", skill: "synonym - media literacy",
    difficulty: "advanced",
    question: "Before sharing information online, it is important to verify that it is accurate. The word 'verify' is closest in meaning to _____",
    passageId: null,
    options: ["ignore", "confirm", "publish", "exaggerate"],
    correctAnswer: 1,
    explanationThai: "'Verify' แปลว่าตรวจสอบยืนยันความถูกต้อง ซึ่งใกล้เคียงกับคำว่า 'confirm'",
    wrongAnswerExplanationsThai: [
      "'ignore' แปลว่าเพิกเฉย ซึ่งตรงข้ามกับการตรวจสอบข้อมูล",
      "",
      "'publish' แปลว่าเผยแพร่ ซึ่งเป็นการกระทำคนละขั้นตอนกับการตรวจสอบ",
      "'exaggerate' แปลว่าพูดเกินจริง ซึ่งตรงข้ามกับการตรวจสอบความถูกต้อง"
    ],
    tipThai: "คำว่า verify มักปรากฏในบริบทเกี่ยวกับความน่าเชื่อถือของข้อมูล (media literacy)"
  },
  {
    id: "set3-q14", setId: 3, section: "conversation", skill: "clarification",
    difficulty: "intermediate",
    question: "A: 'We need to finish the report by Wednesday.' B: '_____ Did you say Wednesday or Thursday?'",
    passageId: null,
    options: ["I'm sorry, could you clarify that?", "That's a great idea!", "I completely disagree.", "Never mind, forget it."],
    correctAnswer: 0,
    explanationThai: "เมื่อฟังไม่ชัดเจนและต้องการให้อีกฝ่ายพูดซ้ำหรืออธิบายเพิ่ม ควรใช้สำนวนขอความชัดเจนอย่างสุภาพ เช่น 'Could you clarify that?'",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นการแสดงความเห็นด้วย ไม่ใช่การขอความชัดเจนเกี่ยวกับวันที่",
      "เป็นการแสดงความไม่เห็นด้วย ไม่เกี่ยวข้องกับการขอให้พูดซ้ำ",
      "เป็นการตัดบทสนทนา ไม่สอดคล้องกับการถามยืนยันวันที่ต่อท้าย"
    ],
    tipThai: "สำนวนขอความชัดเจน (clarification) มักขึ้นต้นด้วย 'Could you...' หรือ 'Sorry, could you...'"
  },
  {
    id: "set3-q15", setId: 3, section: "conversation", skill: "polite disagreement",
    difficulty: "advanced",
    question: "A: 'I think we should cancel the school trip because of the weather.' B: '_____ I think it will be fine if we bring umbrellas.'",
    passageId: null,
    options: ["You're absolutely right, let's cancel it.", "That's a stupid idea.", "Whatever you say, I don't care.", "I see your point, but I'm not sure I agree."],
    correctAnswer: 3,
    explanationThai: "การไม่เห็นด้วยอย่างสุภาพควรยอมรับมุมมองของอีกฝ่ายก่อน แล้วจึงเสนอความเห็นต่างอย่างนุ่มนวล เช่น 'I see your point, but...'",
    wrongAnswerExplanationsThai: [
      "เป็นการเห็นด้วย ซึ่งขัดแย้งกับประโยคถัดไปที่เสนอความเห็นต่าง",
      "เป็นคำพูดที่หยาบคายเกินไป ไม่เหมาะกับการไม่เห็นด้วยอย่างสุภาพ",
      "เป็นคำตอบที่ไม่สนใจ ไม่ได้แสดงเหตุผลของความไม่เห็นด้วย",
      ""
    ],
    tipThai: "โครงสร้างการไม่เห็นด้วยอย่างสุภาพ: 'I see your point, but...' หรือ 'I understand, however...'"
  },
  {
    id: "set3-q16", setId: 3, section: "conversation", skill: "suggestion/advice",
    difficulty: "intermediate",
    question: "A: 'Our presentation slides look messy and hard to read.' B: '_____ Maybe we could use a simpler template.'",
    passageId: null,
    options: ["You should never use slides at all.", "It doesn't matter what they look like.", "Why don't we redesign them together?", "I refuse to help with this project."],
    correctAnswer: 2,
    explanationThai: "'Why don't we...?' เป็นสำนวนเสนอแนะที่สุภาพและร่วมมือกันแก้ปัญหา ตรงกับบริบทที่ตามด้วยการเสนอไอเดียเพิ่มเติม",
    wrongAnswerExplanationsThai: [
      "เป็นคำแนะนำที่รุนแรงเกินไปและไม่ตรงกับปัญหาที่กล่าวถึง (สไลด์ยุ่งเหยิง ไม่ใช่การใช้สไลด์)",
      "เป็นการเพิกเฉยต่อปัญหา ไม่ใช่การให้คำแนะนำ",
      "",
      "เป็นการปฏิเสธที่จะช่วยเหลือ ไม่สอดคล้องกับการทำงานกลุ่ม"
    ],
    tipThai: "สำนวนเสนอแนะที่พบบ่อย: 'Why don't we...?', 'How about...?', 'We could...'"
  },
  {
    id: "set3-q17", setId: 3, section: "conversation", skill: "requests and permission",
    difficulty: "intermediate",
    question: "A: 'Excuse me, would it be all right if I used your laptop to check my email quickly?' B: '_____'",
    passageId: null,
    options: ["I don't want to.", "Of course, go ahead.", "You must be joking.", "Never do that again."],
    correctAnswer: 1,
    explanationThai: "เมื่อมีคนขออนุญาตอย่างสุภาพ การตอบอนุญาตอย่างเป็นมิตรคือ 'Of course, go ahead.'",
    wrongAnswerExplanationsThai: [
      "เป็นการปฏิเสธที่ค่อนข้างห้วนและไม่สุภาพสำหรับคำขออนุญาตทั่วไปเช่นนี้",
      "",
      "เป็นคำตอบที่ไม่สมเหตุสมผลกับคำขออนุญาตที่สุภาพ",
      "เป็นคำพูดเชิงตำหนิ ไม่เกี่ยวข้องกับการตอบรับคำขออนุญาต"
    ],
    tipThai: "การอนุญาตอย่างสุภาพ: 'Of course', 'Sure, go ahead', 'No problem at all'"
  },
  {
    id: "set3-q18", setId: 3, section: "cloze", skill: "cloze - linking words (contrast)",
    difficulty: "advanced",
    question: "Ploy studied very hard for the exam. _____, she still felt nervous on the test day.",
    passageId: null,
    options: ["However", "Therefore", "In addition", "For example"],
    correctAnswer: 0,
    explanationThai: "'However' ใช้เชื่อมความขัดแย้งระหว่างสองประโยค (ตั้งใจเรียนหนัก แต่ยังประหม่า)",
    wrongAnswerExplanationsThai: [
      "",
      "'Therefore' แสดงผลลัพธ์ที่สอดคล้องกัน ไม่ใช่ความขัดแย้งตามบริบทนี้",
      "'In addition' ใช้เพิ่มข้อมูลที่สอดคล้องกัน ไม่ใช่แสดงความขัดแย้ง",
      "'For example' ใช้ยกตัวอย่าง ไม่เกี่ยวข้องกับความขัดแย้งในประโยคนี้"
    ],
    tipThai: "เมื่อสองประโยคมีเนื้อหาขัดแย้งกัน ให้มองหาคำเชื่อมกลุ่ม contrast เช่น however, but, although"
  },
  {
    id: "set3-q19", setId: 3, section: "cloze", skill: "cloze - linking words (purpose)",
    difficulty: "advanced",
    question: "Our class planted more trees around the school _____ the air would become cleaner.",
    passageId: null,
    options: ["although", "even though", "instead of", "so that"],
    correctAnswer: 3,
    explanationThai: "'So that' ใช้แสดงจุดประสงค์ (purpose) ของการกระทำ หมายถึง 'เพื่อที่ว่า' อากาศจะสะอาดขึ้น",
    wrongAnswerExplanationsThai: [
      "'although' แสดงความขัดแย้ง ไม่ตรงกับความหมายจุดประสงค์ในประโยคนี้",
      "'even though' แสดงความขัดแย้งเช่นกัน ไม่สมเหตุสมผลในบริบทนี้",
      "'instead of' แสดงการแทนที่ และต้องตามด้วย gerund ไม่ใช่ประโยคสมบูรณ์แบบนี้",
      ""
    ],
    tipThai: "'so that' + subject + จะ/will/would มักใช้บอกจุดประสงค์ของการกระทำ"
  },
  {
    id: "set3-q20", setId: 3, section: "cloze", skill: "cloze - prepositions of contrast",
    difficulty: "advanced",
    question: "_____ the heavy rain, the football match continued as planned.",
    passageId: null,
    options: ["Although", "Despite", "Because", "So"],
    correctAnswer: 1,
    explanationThai: "'Despite' ตามด้วยคำนามหรือวลี (the heavy rain) โดยไม่ต้องมีประธาน+กริยา ต่างจาก although ที่ต้องตามด้วยประโยคสมบูรณ์",
    wrongAnswerExplanationsThai: [
      "'Although' ต้องตามด้วยประโยคที่มีประธานและกริยา ไม่ใช่วลีคำนามเพียงอย่างเดียวแบบนี้",
      "",
      "'Because' แสดงเหตุผล แต่ในที่นี้ฝนตกหนักน่าจะทำให้แข่งไม่ได้ ไม่ใช่เหตุผลที่ทำให้แข่งต่อ",
      "'So' แสดงผลลัพธ์และมักไม่ใช้ขึ้นต้นประโยคในโครงสร้างนี้"
    ],
    tipThai: "Despite/In spite of + คำนาม ส่วน Although/Even though + ประโยค (มีประธาน+กริยา)"
  },
  {
    id: "set3-q21", setId: 3, section: "reading", skill: "reading - main idea",
    difficulty: "advanced",
    question: "What is the main idea of the passage?",
    passageId: "set3-p1",
    options: ["AI should never be used by students.", "Teachers do not allow AI in the classroom.", "Students should learn to use AI responsibly to support their learning.", "AI is more important than traditional school subjects."],
    correctAnswer: 2,
    explanationThai: "เนื้อเรื่องทั้งหมดพูดถึงการใช้ AI อย่างมีความรับผิดชอบเพื่อสนับสนุนการเรียนรู้ ไม่ใช่แทนที่การเรียนรู้",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้บอกว่าห้ามใช้ AI เลย แต่บอกให้ใช้อย่างรับผิดชอบ",
      "บทความไม่ได้กล่าวว่าครูห้ามใช้ AI ในห้องเรียน มีนักเรียนหลายคนใช้เครื่องมือนี้อยู่",
      "",
      "บทความกล่าวว่าการเรียนรู้ที่จะใช้ AI อย่างชาญฉลาด 'อาจสำคัญพอ ๆ กับ' การเรียนวิชา ไม่ได้บอกว่าสำคัญกว่า"
    ],
    tipThai: "คำถาม main idea ให้มองภาพรวมทั้งย่อหน้า ไม่ใช่แค่ประโยคเดียว"
  },
  {
    id: "set3-q22", setId: 3, section: "reading", skill: "reading - detail",
    difficulty: "advanced",
    question: "According to the passage, what can happen if students copy answers directly from AI chatbots?",
    passageId: "set3-p1",
    options: ["Their thinking and problem-solving skills may become weaker.", "They will save more time for other subjects.", "They will get better exam scores automatically.", "Their teachers will stop teaching digital literacy."],
    correctAnswer: 0,
    explanationThai: "บทความระบุตรง ๆ ว่าการคัดลอกคำตอบจาก AI 'can weaken their thinking skills and make it harder for them to solve problems on their own'",
    wrongAnswerExplanationsThai: [
      "",
      "บทความไม่ได้กล่าวว่าการคัดลอกคำตอบช่วยประหยัดเวลาสำหรับวิชาอื่น",
      "ตรงข้ามกับบทความ เพราะการคัดลอกทำให้แก้ปัญหาเองยากขึ้น ไม่ใช่ทำให้คะแนนดีขึ้นอัตโนมัติ",
      "บทความไม่ได้เชื่อมโยงพฤติกรรมนี้กับการที่โรงเรียนจะหยุดสอน digital literacy"
    ],
    tipThai: "คำถามแบบ detail ให้กลับไปหาประโยคที่มีคำสำคัญตรงกับคำถามในบทความ"
  },
  {
    id: "set3-q23", setId: 3, section: "reading", skill: "reading - inference",
    difficulty: "challenge",
    question: "What can be inferred about the schools mentioned in the passage?",
    passageId: "set3-p1",
    options: ["They have completely banned all forms of technology.", "They think digital literacy is unnecessary for young learners.", "They only allow AI use for teachers, not for students.", "They believe students should learn both the advantages and dangers of AI."],
    correctAnswer: 3,
    explanationThai: "จากประโยค 'Schools are now teaching digital literacy lessons so that students understand both the benefits and the risks' สามารถอนุมานได้ว่าโรงเรียนเชื่อว่านักเรียนควรเรียนรู้ทั้งข้อดีและข้อเสียของ AI",
    wrongAnswerExplanationsThai: [
      "ขัดแย้งกับบทความ เพราะนักเรียนหลายคนใช้เครื่องมือ AI ในห้องเรียนอยู่แล้ว",
      "ขัดแย้งกับบทความที่เน้นย้ำความสำคัญของการสอน digital literacy",
      "บทความไม่ได้กล่าวถึงข้อจำกัดเช่นนี้ นักเรียนเป็นผู้ใช้ AI โดยตรงในเนื้อเรื่อง",
      ""
    ],
    tipThai: "คำถาม inference ต้องใช้เหตุผลจากสิ่งที่ระบุไว้ ไม่ใช่คัดลอกคำตอบตรง ๆ จากบทความ"
  },
  {
    id: "set3-q24", setId: 3, section: "reading", skill: "reading - vocabulary in context",
    difficulty: "advanced",
    question: "In the passage, the word 'shortcut' most likely refers to _____",
    passageId: "set3-p1",
    options: ["a faster route to school", "a way to avoid real effort or understanding", "a new AI software update", "an official school rule"],
    correctAnswer: 1,
    explanationThai: "ในบริบท 'treat it as a helpful assistant rather than a shortcut' คำว่า shortcut หมายถึงวิธีลัดที่หลีกเลี่ยงความพยายามหรือความเข้าใจที่แท้จริงในการเรียนรู้",
    wrongAnswerExplanationsThai: [
      "เป็นความหมายตามตัวอักษรของคำว่า shortcut (ทางลัด) แต่ไม่ตรงกับบริบทเรื่องการเรียนรู้",
      "",
      "บทความไม่ได้กล่าวถึงการอัปเดตซอฟต์แวร์ใด ๆ",
      "ไม่เกี่ยวข้องกับกฎระเบียบของโรงเรียนตามที่กล่าวในประโยคนี้"
    ],
    tipThai: "คำศัพท์ในบริบทให้ดูประโยคก่อนหน้าและหลังคำนั้นเพื่อหาความหมายที่ใกล้เคียงที่สุด"
  },
  {
    id: "set3-q25", setId: 3, section: "reading", skill: "reading - best title",
    difficulty: "challenge",
    question: "Which title best summarizes the passage?",
    passageId: "set3-p1",
    options: ["The Dangers of Modern Technology", "Why Schools Should Ban Computers", "Using AI Wisely in the Classroom", "The History of Artificial Intelligence"],
    correctAnswer: 2,
    explanationThai: "บทความพูดถึงทั้งประโยชน์และความเสี่ยงของ AI พร้อมแนวทางการใช้อย่างมีความรับผิดชอบ ชื่อเรื่อง 'Using AI Wisely in the Classroom' จึงครอบคลุมเนื้อหาทั้งหมดได้ดีที่สุด",
    wrongAnswerExplanationsThai: [
      "เน้นแง่ลบเพียงด้านเดียว ทั้งที่บทความกล่าวถึงประโยชน์ของ AI ด้วย",
      "บทความไม่เคยเสนอให้ห้ามใช้คอมพิวเตอร์หรือเทคโนโลยีเลย",
      "",
      "บทความไม่ได้พูดถึงประวัติศาสตร์ของ AI แต่เน้นการใช้งานอย่างรับผิดชอบในปัจจุบัน"
    ],
    tipThai: "ชื่อเรื่องที่ดีต้องครอบคลุมทั้งใจความหลักของย่อหน้า ไม่ใช่แค่รายละเอียดบางส่วน"
  }
];
