window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[1] = [
  {
    id: "set1-p1",
    setId: 1,
    title: "Staying Safe Online",
    text: "Nid is twelve years old and enjoys chatting with friends on social media every evening. Last month, a stranger sent her a message asking for her home address and school name. Nid felt confused, so she told her mother right away instead of replying. Her mother explained that people should never share personal information with someone they do not know online. Together, they reported the account and blocked it. The next day, Nid's teacher held a special class about internet safety. She taught the students three simple rules: think before you post, keep passwords private, and tell an adult if something feels wrong. Nid realized that being careful online is just as important as being careful when crossing a busy street. Now she checks with her parents before adding new friends on any app, and she reminds her classmates to do the same."
  }
];

window.QUIZ_DATA.sets[1] = [
  {
    id: "set1-q1",
    setId: 1,
    section: "grammar",
    skill: "present perfect with 'already'",
    difficulty: "foundation",
    question: "She ___ her homework already, so she can watch TV now.",
    passageId: null,
    options: ["finish", "finished", "has finished", "finishing"],
    correctAnswer: 2,
    explanationThai: "ใช้ Present Perfect (has/have + V3) เมื่อพูดถึงเหตุการณ์ที่เพิ่งเสร็จสิ้นและส่งผลถึงปัจจุบัน คำว่า \"already\" เป็นสัญญาณของ Present Perfect เช่น She has finished her homework already.",
    wrongAnswerExplanationsThai: [
      "เป็นกริยาช่องที่ 1 (infinitive) ใช้ไม่ได้ในตำแหน่งนี้ เพราะประธาน she เป็นเอกพจน์และต้องมีการผันกริยาตาม tense",
      "เป็น Past Simple บอกเวลาที่ผ่านไปแล้วแบบเจาะจง แต่ประโยคนี้มีคำว่า already ซึ่งเป็นสัญญาณของ Present Perfect ที่เน้นผลลัพธ์ในปัจจุบัน",
      "",
      "เป็น gerund/present participle ต้องมี auxiliary verb เช่น is/was นำหน้าเสมอ ใช้เดี่ยวๆ เป็นกริยาหลักของประโยคไม่ได้"
    ],
    tipThai: "สังเกตคำสัญญาณ (signal words) เช่น already, just, yet, since, for มักบ่งบอกว่าต้องใช้ Present Perfect (has/have + V3)"
  },
  {
    id: "set1-q2",
    setId: 1,
    section: "grammar",
    skill: "subject-verb agreement with 'neither of'",
    difficulty: "foundation",
    question: "Neither of the students ___ finished the science project yet.",
    passageId: null,
    options: ["has", "have", "are", "were"],
    correctAnswer: 0,
    explanationThai: "\"Neither of + คำนามพหูพจน์\" ถือเป็นประธานเอกพจน์เสมอในไวยากรณ์มาตรฐาน จึงต้องใช้กริยาเอกพจน์ \"has\" เช่น Neither of the students has finished yet.",
    wrongAnswerExplanationsThai: [
      "",
      "\"have\" ใช้กับประธานพหูพจน์หรือ I/you/we/they แต่ \"neither of\" ถือเป็นเอกพจน์ จึงใช้ have ไม่ได้",
      "\"are\" เป็น be-verb พหูพจน์ ผิดทั้งชนิดกริยา (ประโยคนี้ต้องการ auxiliary คู่กับ finished แบบ Present Perfect ไม่ใช่ be-verb)",
      "\"were\" เป็น be-verb อดีตพหูพจน์ ผิดทั้งรูปแบบ tense และการสอดคล้องกับประธานเอกพจน์"
    ],
    tipThai: "\"Neither/Either of + คำนามพหูพจน์\" ให้มองว่าเป็นประธานเอกพจน์เสมอ เลือกกริยาเอกพจน์"
  },
  {
    id: "set1-q3",
    setId: 1,
    section: "grammar",
    skill: "articles a/an",
    difficulty: "foundation",
    question: "My brother wants to be ___ engineer when he grows up because he loves building things.",
    passageId: null,
    options: ["a", "the", "-- (no article)", "an"],
    correctAnswer: 3,
    explanationThai: "คำว่า engineer ขึ้นต้นด้วยเสียงสระ (vowel sound) จึงต้องใช้ \"an\" นำหน้า ไม่ใช่ \"a\"",
    wrongAnswerExplanationsThai: [
      "\"a\" ใช้นำหน้าคำที่ขึ้นต้นด้วยเสียงพยัญชนะ ไม่ใช่เสียงสระอย่าง engineer",
      "\"the\" ใช้เมื่อพูดถึงสิ่งที่เฉพาะเจาะจงหรือทั้งสองฝ่ายรู้อยู่แล้วว่าเป็นอะไร แต่ในที่นี้เป็นอาชีพทั่วไปที่ยังไม่เจาะจง",
      "คำนามนับได้เอกพจน์ (engineer) ต้องมีคำนำหน้านามเสมอ จะละคำนำหน้านามไว้ไม่ได้",
      ""
    ],
    tipThai: "เสียงขึ้นต้นคำ (ไม่ใช่ตัวอักษร) เป็นตัวกำหนดว่าใช้ a หรือ an เช่น an hour, a university"
  },
  {
    id: "set1-q4",
    setId: 1,
    section: "grammar",
    skill: "comparative with multi-syllable adjectives",
    difficulty: "intermediate",
    question: "This year's science fair project is much ___ than last year's, according to the judges.",
    passageId: null,
    options: ["good", "more creative", "creativer", "most creative"],
    correctAnswer: 1,
    explanationThai: "creative เป็นคำคุณศัพท์ที่มีหลายพยางค์ ต้องเปรียบเทียบขั้นกว่าด้วย \"more\" + adjective ไม่เติม -er ท้ายคำ",
    wrongAnswerExplanationsThai: [
      "\"good\" ไม่ใช่รูปเปรียบเทียบเลย และไม่สอดคล้องกับโครงสร้าง \"much...than\" ที่ต้องใช้คู่กับคำเปรียบเทียบขั้นกว่า",
      "",
      "\"creativer\" ผิดหลักไวยากรณ์ เพราะคำคุณศัพท์ที่มีหลายพยางค์ไม่เติม -er",
      "\"most creative\" เป็นขั้นสุด ใช้เมื่อเปรียบเทียบตั้งแต่ 3 สิ่งขึ้นไปพร้อม \"the\" ไม่ใช่โครงสร้างที่มีคำว่า \"than\""
    ],
    tipThai: "คำคุณศัพท์ที่มี 2-3 พยางค์ขึ้นไปมักใช้ more/most แทนการเติม -er/-est"
  },
  {
    id: "set1-q5",
    setId: 1,
    section: "grammar",
    skill: "preposition 'until'",
    difficulty: "foundation",
    question: "The meeting has been postponed ___ next Friday because the principal is away.",
    passageId: null,
    options: ["until", "in", "at", "since"],
    correctAnswer: 0,
    explanationThai: "\"postpone...until\" ใช้บอกว่าเลื่อนเหตุการณ์ออกไปจนถึงเวลาใดเวลาหนึ่งในอนาคต",
    wrongAnswerExplanationsThai: [
      "",
      "\"in\" ใช้กับเดือน/ปี/ช่วงเวลานานๆ ไม่ใช่ความหมายเลื่อนไปจนถึงวันที่กำหนด",
      "\"at\" ใช้กับเวลาที่เจาะจง (เช่นนาฬิกา) ไม่ใช่ความหมายเลื่อนไปจนถึงวันหนึ่ง",
      "\"since\" ใช้กับจุดเริ่มต้นในอดีตที่ต่อเนื่องมาถึงปัจจุบัน ไม่ใช่เวลาที่จะถึงในอนาคต"
    ],
    tipThai: "postpone/delay มักใช้คู่กับ \"until\" เพื่อบอกเวลาใหม่ในอนาคตที่เหตุการณ์จะเกิดขึ้น"
  },
  {
    id: "set1-q6",
    setId: 1,
    section: "grammar",
    skill: "modal 'should' for advice",
    difficulty: "intermediate",
    question: "You ___ bring your umbrella. The forecast says it will rain heavily this afternoon.",
    passageId: null,
    options: ["mustn't", "don't have to", "should", "can't"],
    correctAnswer: 2,
    explanationThai: "\"should\" ใช้แนะนำสิ่งที่ควรทำเพื่อประโยชน์ของผู้ฟัง เหมาะกับบริบทให้คำแนะนำเรื่องพยากรณ์อากาศ",
    wrongAnswerExplanationsThai: [
      "\"mustn't\" หมายถึงห้ามทำ ซึ่งมีความหมายตรงข้ามกับสิ่งที่ต้องการสื่อ",
      "\"don't have to\" หมายถึงไม่จำเป็นต้องทำ ขัดกับบริบทที่ฝนจะตกหนักซึ่งควรพกร่ม",
      "",
      "\"can't\" หมายถึงไม่สามารถทำได้ ไม่เกี่ยวข้องกับการให้คำแนะนำ"
    ],
    tipThai: "should/ought to ใช้ให้คำแนะนำ เตือน หรือแสดงความคิดเห็นว่าอะไรควรทำ"
  },
  {
    id: "set1-q7",
    setId: 1,
    section: "grammar",
    skill: "possessive pronoun agreement",
    difficulty: "foundation",
    question: "The twins forgot ___ books at school, so they had to borrow some from the library.",
    passageId: null,
    options: ["her", "his", "its", "their"],
    correctAnswer: 3,
    explanationThai: "twins เป็นประธานพหูพจน์ ต้องใช้สรรพนามแสดงความเป็นเจ้าของพหูพจน์ \"their\" ให้สอดคล้องกับประธาน",
    wrongAnswerExplanationsThai: [
      "\"her\" เป็นสรรพนามแสดงความเป็นเจ้าของเอกพจน์เพศหญิง ไม่ตรงกับประธานพหูพจน์ the twins",
      "\"his\" เป็นสรรพนามแสดงความเป็นเจ้าของเอกพจน์เพศชาย ไม่ตรงกับประธานพหูพจน์ the twins",
      "\"its\" ใช้กับสิ่งของหรือสัตว์ ไม่ใช่คน",
      ""
    ],
    tipThai: "ตรวจสอบว่าประธานเป็นเอกพจน์หรือพหูพจน์ก่อนเลือกสรรพนามแสดงความเป็นเจ้าของให้ตรงกัน"
  },
  {
    id: "set1-q8",
    setId: 1,
    section: "grammar",
    skill: "gerund after 'suggest'",
    difficulty: "intermediate",
    question: "Our teacher suggested ___ extra time on grammar before the exam.",
    passageId: null,
    options: ["to spend", "spending", "spend", "spent"],
    correctAnswer: 1,
    explanationThai: "หลังคำกริยา suggest ต้องตามด้วย gerund (V-ing) เสมอ ไม่ใช่ infinitive เช่น She suggested spending more time.",
    wrongAnswerExplanationsThai: [
      "suggest ไม่ตามด้วย to + infinitive ต่างจากคำกริยาบางคำอย่าง want หรือ decide",
      "",
      "กริยาช่องที่ 1 เดี่ยวๆ ใช้ไม่ได้หลัง suggest",
      "เป็นรูปอดีต ไม่ใช่รูปแบบที่ตามหลัง suggest"
    ],
    tipThai: "คำกริยาที่ตามด้วย gerund เสมอ เช่น suggest, enjoy, avoid, finish, mind"
  },
  {
    id: "set1-q9",
    setId: 1,
    section: "vocabulary",
    skill: "meaning from context (school)",
    difficulty: "foundation",
    question: "The teacher gave the class clear instructions before the exam so that no one would be confused. In this sentence, 'instructions' most likely means ___.",
    passageId: null,
    options: ["directions telling students what to do", "questions to test knowledge", "grades given for an assignment", "a type of exam paper"],
    correctAnswer: 0,
    explanationThai: "instructions หมายถึงคำแนะนำหรือคำสั่งที่บอกวิธีทำสิ่งใดสิ่งหนึ่ง ตรงกับ \"directions telling students what to do\"",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นความหมายของคำว่า \"questions\" ไม่ใช่ instructions",
      "grades ไม่เกี่ยวข้องกับความหมายของคำสั่งหรือคำแนะนำ",
      "exam paper เป็นคนละความหมาย ไม่ใช่คำแนะนำในการทำข้อสอบ"
    ],
    tipThai: "ใช้บริบทรอบคำ (before the exam, no one confused) ช่วยเดาความหมายคำศัพท์ที่ไม่คุ้นเคย"
  },
  {
    id: "set1-q10",
    setId: 1,
    section: "vocabulary",
    skill: "collocation with 'habit'",
    difficulty: "intermediate",
    question: "It's important to ___ good habits, such as reading every night before bed.",
    passageId: null,
    options: ["do", "take", "develop", "make"],
    correctAnswer: 2,
    explanationThai: "\"develop a habit\" เป็น collocation ที่ถูกต้อง หมายถึงสร้างหรือพัฒนานิสัยขึ้นมาอย่างค่อยเป็นค่อยไป",
    wrongAnswerExplanationsThai: [
      "\"do\" ไม่ใช้คู่กับคำว่า habit ตามหลัก collocation ภาษาอังกฤษ",
      "\"take\" ใช้กับวลีอื่นเช่น take a break, take action แต่ไม่ใช้กับ habit",
      "",
      "\"make\" ไม่ใช้คู่กับคำว่า habit เช่นกัน มักใช้กับ make a decision"
    ],
    tipThai: "จำคำที่ใช้คู่กันบ่อยๆ (collocation) เช่น develop a habit, make a decision, do homework"
  },
  {
    id: "set1-q11",
    setId: 1,
    section: "vocabulary",
    skill: "phrasal verb 'turn off'",
    difficulty: "foundation",
    question: "Can you please ___ the lights before you leave the classroom?",
    passageId: null,
    options: ["turn up", "turn off", "turn into", "turn out"],
    correctAnswer: 1,
    explanationThai: "\"turn off\" หมายถึงปิด (ไฟหรือเครื่องใช้ไฟฟ้า) ตรงกับบริบทการออกจากห้องเรียน",
    wrongAnswerExplanationsThai: [
      "\"turn up\" หมายถึงเปิดเสียงให้ดังขึ้น หรือปรากฏตัวขึ้นมา ไม่ตรงกับบริบทนี้",
      "",
      "\"turn into\" หมายถึงกลายเป็นสิ่งอื่น ไม่เกี่ยวกับการปิดไฟ",
      "\"turn out\" หมายถึงกลายเป็นผลลัพธ์สุดท้าย ไม่เกี่ยวกับการปิดไฟ"
    ],
    tipThai: "Phrasal verb กับคำว่า turn มีหลายความหมาย ต้องดูบริบทเรื่องไฟ/เครื่องใช้ไฟฟ้าจึงจะใช้ turn on/off"
  },
  {
    id: "set1-q12",
    setId: 1,
    section: "vocabulary",
    skill: "synonym for 'complicated'",
    difficulty: "foundation",
    question: "The instructions on the new phone were so complicated that even adults needed help. A word closest in meaning to 'complicated' is ___.",
    passageId: null,
    options: ["simple", "short", "boring", "difficult to understand"],
    correctAnswer: 3,
    explanationThai: "complicated แปลว่าซับซ้อนหรือเข้าใจยาก ตรงกับความหมาย \"difficult to understand\"",
    wrongAnswerExplanationsThai: [
      "\"simple\" มีความหมายตรงข้ามกับ complicated",
      "\"short\" หมายถึงสั้น ไม่เกี่ยวข้องกับความซับซ้อน",
      "\"boring\" หมายถึงน่าเบื่อ เป็นคนละความหมายกับความซับซ้อน",
      ""
    ],
    tipThai: "มองหาคำใบ้ในประโยค เช่น \"even adults needed help\" บอกใบ้ว่าคำนั้นมีความหมายว่ายากหรือซับซ้อน"
  },
  {
    id: "set1-q13",
    setId: 1,
    section: "vocabulary",
    skill: "word family (noun for person)",
    difficulty: "intermediate",
    question: "Recycling helps protect the environment. The person who cares professionally about nature and pollution is called a/an ___.",
    passageId: null,
    options: ["environmentalist", "environment", "environmental", "environmentally"],
    correctAnswer: 0,
    explanationThai: "environmentalist เป็นคำนามหมายถึงนักสิ่งแวดล้อมหรือผู้ที่ทำงานด้านสิ่งแวดล้อม ตรงกับความหมาย \"person who...\"",
    wrongAnswerExplanationsThai: [
      "",
      "\"environment\" เป็นคำนามทั่วไปหมายถึงสิ่งแวดล้อม ไม่ใช่ตัวบุคคล",
      "\"environmental\" เป็นคำคุณศัพท์ ใช้ขยายคำนาม ไม่ใช่ตัวบุคคล",
      "\"environmentally\" เป็นคำกริยาวิเศษณ์ ใช้ขยายกริยา ไม่ใช่ตัวบุคคล"
    ],
    tipThai: "สังเกตคำลงท้าย -ist มักหมายถึงบุคคลที่ทำอาชีพหรือมีความเชี่ยวชาญด้านนั้น เช่น scientist, artist"
  },
  {
    id: "set1-q14",
    setId: 1,
    section: "conversation",
    skill: "asking for clarification",
    difficulty: "foundation",
    question: "A tourist asks you for directions, but you don't understand one word she used. What should you say?",
    passageId: null,
    options: ['"No, that\'s wrong."', '"I don\'t care."', '"Sorry, could you say that again, please?"', '"Yes, of course."'],
    correctAnswer: 2,
    explanationThai: "การขอให้พูดซ้ำอย่างสุภาพเมื่อไม่เข้าใจควรใช้ \"Could you say that again, please?\" ซึ่งเป็นประโยคขอความชัดเจนที่เหมาะสม",
    wrongAnswerExplanationsThai: [
      "ฟังดูหยาบคายและไม่ได้ตอบสนองต่อสิ่งที่ถูกถาม",
      "แสดงความไม่สนใจ ไม่สุภาพและไม่ช่วยแก้ปัญหาการสื่อสาร",
      "",
      "ตอบรับทั้งที่ยังไม่เข้าใจคำถาม ไม่สมเหตุสมผลกับสถานการณ์"
    ],
    tipThai: "ประโยคขอความชัดเจน (clarification) มักขึ้นต้นด้วย Sorry, Could you..., Pardon?, What do you mean by...?"
  },
  {
    id: "set1-q15",
    setId: 1,
    section: "conversation",
    skill: "disagreeing politely",
    difficulty: "intermediate",
    question: 'Your friend says, "I think we should finish the group project this weekend." You have a different opinion. What is the most polite way to respond?',
    passageId: null,
    options: ['"That\'s a terrible idea."', '"I see your point, but maybe next week would be better for everyone."', '"No way, I\'m busy."', '"Whatever you want."'],
    correctAnswer: 1,
    explanationThai: "การไม่เห็นด้วยอย่างสุภาพควรรับฟังความเห็นของอีกฝ่ายก่อน (I see your point) แล้วจึงเสนอความเห็นต่างอย่างนุ่มนวล",
    wrongAnswerExplanationsThai: [
      "ตำหนิความคิดของเพื่อนตรงๆ ฟังดูหยาบคายและไม่สุภาพ",
      "",
      "ปฏิเสธทันทีโดยไม่ให้เหตุผล ฟังดูไม่เป็นมิตร",
      "ฟังดูเฉยเมย ไม่ใช่การแสดงความคิดเห็นที่แตกต่างอย่างสุภาพ"
    ],
    tipThai: "เวลาไม่เห็นด้วย ให้เริ่มด้วยการรับฟัง (I understand/I see your point) ก่อนเสนอความเห็นต่าง จะฟังดูสุภาพกว่า"
  },
  {
    id: "set1-q16",
    setId: 1,
    section: "conversation",
    skill: "giving advice",
    difficulty: "foundation",
    question: 'A classmate says, "I always feel nervous before speaking in front of the class." What is the best advice you can give?',
    passageId: null,
    options: ['"Just quit school then."', '"That\'s not my problem."', '"You should never speak in public again."', '"Why don\'t you practice in front of a mirror first?"'],
    correctAnswer: 3,
    explanationThai: "\"Why don't you...?\" เป็นโครงสร้างให้คำแนะนำที่เป็นประโยชน์และเหมาะสมกับสถานการณ์ของเพื่อน",
    wrongAnswerExplanationsThai: [
      "เป็นคำแนะนำที่สุดโต่งและไม่สร้างสรรค์",
      "แสดงความไม่เห็นใจต่อปัญหาของเพื่อน",
      "แนะนำในทางลบและไม่ช่วยแก้ปัญหาความประหม่า",
      ""
    ],
    tipThai: "โครงสร้าง \"Why don't you...?\" และ \"You should...\" ใช้ให้คำแนะนำเชิงบวกและสร้างสรรค์"
  },
  {
    id: "set1-q17",
    setId: 1,
    section: "conversation",
    skill: "asking permission",
    difficulty: "foundation",
    question: "You want to leave the classroom to go to the nurse because you feel sick. What should you say to your teacher?",
    passageId: null,
    options: ['"Excuse me, may I go to the nurse? I feel sick."', '"I\'m leaving now."', '"Give me permission now."', '"You must let me go."'],
    correctAnswer: 0,
    explanationThai: "\"May I...?\" เป็นรูปแบบขออนุญาตอย่างสุภาพที่เหมาะสมกับการพูดกับครู",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นการบอกกล่าวโดยไม่ขออนุญาต ไม่เหมาะสมกับสถานการณ์ที่ต้องขอครู",
      "ใช้คำสั่งกับครู ฟังดูไม่สุภาพ",
      "ใช้ \"must\" บังคับ ฟังดูไม่เหมาะสมกับสถานการณ์ที่ต้องขออนุญาต"
    ],
    tipThai: "การขออนุญาตอย่างสุภาพมักใช้ \"May I...?\" หรือ \"Could I...please?\""
  },
  {
    id: "set1-q18",
    setId: 1,
    section: "cloze",
    skill: "error identification: be-verb agreement in past tense",
    difficulty: "intermediate",
    question: "(A) My father has visited (B) Chiang Mai three times (C) since he were young (D) because he loves the mountains there. Which part contains an error?",
    passageId: null,
    options: ["(A) My father has visited", "(B) Chiang Mai three times", "(C) since he were young", "(D) because he loves the mountains there"],
    correctAnswer: 2,
    explanationThai: "ส่วน (C) ผิดเพราะ \"he\" เป็นประธานเอกพจน์ ต้องใช้ be-verb อดีตเอกพจน์ \"was\" ไม่ใช่ \"were\" (ประโยคที่ถูกต้องคือ since he was young)",
    wrongAnswerExplanationsThai: [
      "(A) ถูกต้องแล้ว เป็นโครงสร้าง Present Perfect บอกประสบการณ์ที่ทำมาแล้วหลายครั้ง",
      "(B) ถูกต้องแล้ว เป็นวลีบอกจำนวนครั้งที่ถูกต้อง",
      "",
      "(D) ถูกต้องแล้ว เป็น because-clause ที่ให้เหตุผลถูกต้องตามหลักไวยากรณ์"
    ],
    tipThai: "ตรวจสอบ subject-verb agreement ของ be-verb ในอดีต (was/were) ให้ตรงกับประธานเสมอ"
  },
  {
    id: "set1-q19",
    setId: 1,
    section: "cloze",
    skill: "error identification: 'every + singular noun' agreement",
    difficulty: "intermediate",
    question: "(A) Every student in the class (B) were excited (C) about the field trip (D) to the science museum next week. Which part contains an error?",
    passageId: null,
    options: ["(A) Every student in the class", "(B) were excited", "(C) about the field trip", "(D) to the science museum next week"],
    correctAnswer: 1,
    explanationThai: "ส่วน (B) ผิดเพราะ \"every student\" เป็นประธานเอกพจน์เสมอ (แม้ความหมายจะรวมคนหลายคนก็ตาม) จึงต้องใช้กริยาเอกพจน์ \"was\" ไม่ใช่ \"were\"",
    wrongAnswerExplanationsThai: [
      "(A) ถูกต้องแล้ว \"every + คำนามเอกพจน์\" เป็นโครงสร้างที่ถูกต้องตามหลักไวยากรณ์",
      "",
      "(C) ถูกต้องแล้ว เป็นวลีบุพบทที่ใช้ปกติ",
      "(D) ถูกต้องแล้ว บอกเวลาและสถานที่อย่างถูกต้อง"
    ],
    tipThai: "\"every/each + คำนามเอกพจน์\" ต้องใช้กริยาเอกพจน์เสมอ แม้ความหมายจะรวมคนหลายคน"
  },
  {
    id: "set1-q20",
    setId: 1,
    section: "cloze",
    skill: "error identification: infinitive of purpose",
    difficulty: "advanced",
    question: "(A) Mai and her sister (B) are going to the market (C) to buy some fruits and vegetables (D) for make their mother's birthday cake. Which part contains an error?",
    passageId: null,
    options: ["(A) Mai and her sister", "(B) are going to the market", "(C) to buy some fruits and vegetables", "(D) for make their mother's birthday cake"],
    correctAnswer: 3,
    explanationThai: "ส่วน (D) ผิดเพราะการบอกจุดประสงค์ (purpose) ต้องใช้ \"to + กริยาช่องที่ 1\" คือ \"to make\" ไม่ใช่ \"for make\"",
    wrongAnswerExplanationsThai: [
      "(A) ถูกต้องแล้ว เป็นประธานที่ถูกต้องตามหลักไวยากรณ์",
      "(B) ถูกต้องแล้ว เป็น Present Continuous บอกอนาคตที่วางแผนไว้",
      "(C) ถูกต้องแล้ว \"fruits and vegetables\" เป็นรูปพหูพจน์ที่ถูกต้อง",
      ""
    ],
    tipThai: "เมื่อบอกจุดประสงค์ของการกระทำ ใช้ \"to + กริยาช่องที่ 1\" เช่น to buy, to make ไม่ใช่ \"for + กริยา\""
  },
  {
    id: "set1-q21",
    setId: 1,
    section: "reading",
    skill: "main idea",
    difficulty: "intermediate",
    question: "What is the passage mainly about?",
    passageId: "set1-p1",
    options: ["The importance of protecting personal information online", "Nid's daily habit of chatting with friends after school", "A stranger who wanted to know everything about Nid", "A class trip about crossing a busy street safely"],
    correctAnswer: 0,
    explanationThai: "เนื้อเรื่องทั้งหมดพูดถึงเหตุการณ์ที่ทำให้ Nid และเพื่อนๆ ตระหนักถึงความสำคัญของการปกป้องข้อมูลส่วนตัวเมื่อใช้อินเทอร์เน็ต ซึ่งเป็นใจความหลักของเรื่อง",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นเพียงรายละเอียดเล็กน้อยตอนต้นเรื่อง ไม่ใช่ใจความหลักของทั้งย่อหน้า",
      "เป็นเหตุการณ์หนึ่งในเรื่องแต่ไม่ใช่ประเด็นหลักทั้งหมดของย่อหน้า",
      "เป็นเพียงการเปรียบเทียบท้ายเรื่อง ไม่ใช่ใจความหลัก"
    ],
    tipThai: "ใจความหลัก (main idea) มักสรุปเนื้อหาทั้งย่อหน้า ไม่ใช่รายละเอียดปลีกย่อยเพียงจุดเดียว"
  },
  {
    id: "set1-q22",
    setId: 1,
    section: "reading",
    skill: "supporting detail",
    difficulty: "intermediate",
    question: "According to the passage, what did Nid do when the stranger asked for her address?",
    passageId: "set1-p1",
    options: ["She replied with her home address", "She blocked the account by herself without telling anyone", "She told her mother right away instead of replying", "She asked her teacher for advice first"],
    correctAnswer: 2,
    explanationThai: "ในเนื้อเรื่องระบุชัดเจนว่า \"Nid felt confused, so she told her mother right away instead of replying\" จึงตรงกับตัวเลือกนี้",
    wrongAnswerExplanationsThai: [
      "ตรงข้ามกับเรื่อง เพราะ Nid ไม่ได้ตอบกลับด้วยข้อมูลส่วนตัว",
      "ผิดเพราะเธอบล็อกบัญชีร่วมกับแม่ ไม่ใช่ทำคนเดียว",
      "",
      "ผิดเพราะเรื่องราวไม่ได้กล่าวว่าเธอถามครูก่อน เหตุการณ์กับครูเกิดขึ้นวันถัดมา"
    ],
    tipThai: "คำถามรายละเอียด (detail question) ต้องหาคำตอบที่ตรงกับข้อความในเรื่องเป๊ะๆ อย่าเดาเอง"
  },
  {
    id: "set1-q23",
    setId: 1,
    section: "reading",
    skill: "inference",
    difficulty: "advanced",
    question: "What can be inferred about Nid's mother from the passage?",
    passageId: "set1-p1",
    options: ["She dislikes Nid using social media at all", "She cares about Nid's safety and helps her handle online risks", "She works at Nid's school as a teacher", "She has never used the internet before"],
    correctAnswer: 1,
    explanationThai: "จากพฤติกรรมที่แม่อธิบายกฎการใช้อินเทอร์เน็ตและช่วยรายงาน/บล็อกบัญชีร่วมกับ Nid แสดงให้เห็นว่าแม่ใส่ใจความปลอดภัยของลูก",
    wrongAnswerExplanationsThai: [
      "ไม่มีข้อความใดในเรื่องบอกว่าแม่ไม่ชอบให้ Nid ใช้โซเชียลมีเดียเลย",
      "",
      "ไม่มีการกล่าวถึงอาชีพของแม่ในเรื่องเลย",
      "ไม่มีหลักฐานในเรื่องสนับสนุนข้อนี้"
    ],
    tipThai: "การอนุมาน (inference) ต้องใช้เบาะแสจากเรื่องมาประกอบเหตุผล ไม่ใช่ข้อมูลที่เรื่องไม่ได้กล่าวถึงเลย"
  },
  {
    id: "set1-q24",
    setId: 1,
    section: "reading",
    skill: "vocabulary in context",
    difficulty: "intermediate",
    question: "In the passage, the word 'confused' is closest in meaning to ___.",
    passageId: "set1-p1",
    options: ["excited", "angry", "sleepy", "unsure what to do"],
    correctAnswer: 3,
    explanationThai: "\"confused\" หมายถึงรู้สึกงุนงงหรือไม่แน่ใจว่าจะทำอย่างไร ตรงกับ \"unsure what to do\"",
    wrongAnswerExplanationsThai: [
      "\"excited\" หมายถึงตื่นเต้น เป็นคนละความหมาย",
      "\"angry\" หมายถึงโกรธ ไม่ตรงกับบริบทของเรื่อง",
      "\"sleepy\" หมายถึงง่วงนอน ไม่เกี่ยวข้องกับสถานการณ์นี้",
      ""
    ],
    tipThai: "ดูปฏิกิริยาที่ตามมาหลังคำศัพท์ (Nid told her mother right away) ช่วยบอกใบ้ว่า confused คือความรู้สึกไม่แน่ใจ ไม่ใช่อารมณ์ทางบวก"
  },
  {
    id: "set1-q25",
    setId: 1,
    section: "reading",
    skill: "pronoun reference",
    difficulty: "advanced",
    question: 'In the sentence "Together, they reported the account and blocked it," what does \'it\' refer to?',
    passageId: "set1-p1",
    options: ["the stranger's account", "Nid's phone", "the school's website", "the safety class"],
    correctAnswer: 0,
    explanationThai: "\"it\" แทนคำนามที่กล่าวถึงก่อนหน้าในประโยคเดียวกัน คือ \"the account\" (บัญชีของคนแปลกหน้า)",
    wrongAnswerExplanationsThai: [
      "",
      "\"Nid's phone\" ไม่ได้ถูกกล่าวถึงในประโยคนี้เลย",
      "\"the school's website\" ไม่มีการกล่าวถึงในเรื่องเลย",
      "\"the safety class\" เกิดขึ้นในวันถัดไป ไม่ใช่สิ่งที่ถูกบล็อกในประโยคนี้"
    ],
    tipThai: "สรรพนาม (pronoun) มักแทนคำนามที่อยู่ใกล้ที่สุดก่อนหน้าในประโยคเดียวกัน"
  }
];
