window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[2] = [
  {
    id: "set2-p1",
    setId: 2,
    title: "Small Actions, Big Change",
    text: "Ben used to throw away his empty bottles and paper without thinking twice. Everything changed when his school started a new Recycling Club last semester. At first, only ten students joined, but the number quickly grew because the club made recycling fun instead of boring. Members collect plastic bottles, cardboard, and cans from every classroom every Friday. They also turn some waste into art for the school fair, which surprises visitors every year. Ben's favorite part is the monthly competition: whichever class collects the most recyclable materials wins a small prize and a certificate. Since joining, Ben has learned that small actions, like reusing paper for notes, can make a real difference. His teacher says the club has reduced the school's rubbish by almost a third. Ben now encourages his neighbors to sort their waste at home, hoping that good habits can spread beyond the school gate."
  }
];

window.QUIZ_DATA.sets[2] = [
  {
    id: "set2-q1",
    setId: 2,
    section: "grammar",
    skill: "past perfect for earlier past action",
    difficulty: "intermediate",
    question: "By the time the bell rang, the students ___ their test.",
    passageId: null,
    options: ["finish", "had finished", "have finished", "finishing"],
    correctAnswer: 1,
    explanationThai: "\"By the time + Past Simple\" มักตามด้วย Past Perfect (had + V3) เพื่อบอกเหตุการณ์ที่เกิดขึ้นก่อนอีกเหตุการณ์หนึ่งในอดีต (นักเรียนทำเสร็จก่อนกริ่งดัง)",
    wrongAnswerExplanationsThai: [
      "เป็นกริยาช่องที่ 1 (infinitive) ผิด tense ทั้งหมด ไม่สอดคล้องกับประโยคที่เล่าเหตุการณ์ในอดีต",
      "",
      "เป็น Present Perfect ใช้กับเหตุการณ์ที่เชื่อมกับปัจจุบัน ไม่ใช่การเปรียบเทียบสองเหตุการณ์ในอดีต",
      "ต้องมี auxiliary verb นำหน้าเสมอ ใช้เดี่ยวๆ เป็นกริยาหลักไม่ได้"
    ],
    tipThai: "\"By the time + Past Simple\" มักตามด้วย Past Perfect (had + V3) เพื่อบอกเหตุการณ์ที่เกิดก่อนหน้า"
  },
  {
    id: "set2-q2",
    setId: 2,
    section: "grammar",
    skill: "quantifier 'much' with uncountable nouns",
    difficulty: "intermediate",
    question: "There isn't ___ time left before the exam, so we should start reviewing now.",
    passageId: null,
    options: ["many", "a few", "several", "much"],
    correctAnswer: 3,
    explanationThai: "\"time\" เป็นคำนามนับไม่ได้ (uncountable noun) ต้องใช้ \"much\" ในประโยคปฏิเสธ เช่น There isn't much time left.",
    wrongAnswerExplanationsThai: [
      "\"many\" ใช้กับคำนามนับได้พหูพจน์ ไม่ใช้กับ time ในความหมายนี้",
      "\"a few\" ใช้กับคำนามนับได้ หมายถึงมีอยู่บ้างเล็กน้อย ไม่ใช้กับคำนามนับไม่ได้อย่าง time",
      "\"several\" ใช้กับคำนามนับได้พหูพจน์เช่นกัน ไม่ใช้กับ time",
      ""
    ],
    tipThai: "คำนามนับไม่ได้ (uncountable nouns เช่น time, money, information) ใช้คู่กับ much ไม่ใช่ many"
  },
  {
    id: "set2-q3",
    setId: 2,
    section: "grammar",
    skill: "conjunction of contrast 'although'",
    difficulty: "advanced",
    question: "___ it was raining heavily, the football match continued as planned.",
    passageId: null,
    options: ["Although", "Because", "So", "Therefore"],
    correctAnswer: 0,
    explanationThai: "\"Although\" ใช้เชื่อมประโยคที่มีเนื้อหาขัดแย้งกัน (ฝนตกหนัก แต่การแข่งขันยังดำเนินต่อไปตามแผน)",
    wrongAnswerExplanationsThai: [
      "",
      "\"Because\" ใช้บอกเหตุผล ไม่ใช่ความขัดแย้ง ซึ่งขัดกับความหมายของประโยคนี้",
      "\"So\" ใช้บอกผลลัพธ์ และไม่สามารถใช้ขึ้นต้นประโยคแบบนี้ในเชิงไวยากรณ์ทางการได้",
      "\"Therefore\" เป็นคำเชื่อมบอกผลลัพธ์ ไม่ใช่ความขัดแย้ง"
    ],
    tipThai: "Although/Even though/Though ใช้เชื่อมความคิดสองอย่างที่ขัดแย้งกันในประโยคเดียว"
  },
  {
    id: "set2-q4",
    setId: 2,
    section: "grammar",
    skill: "superlative with 'of all'",
    difficulty: "intermediate",
    question: "Of all the students in the debate club, Praew is ___ speaker.",
    passageId: null,
    options: ["a more confident", "the more confident", "the most confident", "most confident"],
    correctAnswer: 2,
    explanationThai: "เมื่อเปรียบเทียบตั้งแต่ 3 คนขึ้นไป (of all the students) ต้องใช้ขั้นสุด (superlative) คือ \"the most confident\"",
    wrongAnswerExplanationsThai: [
      "\"a more confident\" เป็นขั้นกว่า ใช้เปรียบเทียบระหว่าง 2 สิ่ง ไม่ตรงกับบริบท \"of all\"",
      "\"the more confident\" ขาดคำว่า most จึงยังเป็นขั้นกว่า ไม่ใช่ขั้นสุดที่ต้องใช้กับ of all",
      "",
      "\"most confident\" ขาด \"the\" ซึ่งจำเป็นต้องมีเสมอสำหรับขั้นสุด"
    ],
    tipThai: "เมื่อเจอคำว่า \"of all/in the class/in the world\" ให้ใช้ขั้นสุด (the most/the -est)"
  },
  {
    id: "set2-q5",
    setId: 2,
    section: "grammar",
    skill: "preposition 'in' with time periods",
    difficulty: "intermediate",
    question: "The school's annual sports day always takes place ___ the last week of November.",
    passageId: null,
    options: ["at", "in", "on", "by"],
    correctAnswer: 1,
    explanationThai: "ใช้ \"in\" กับช่วงเวลาที่ยาวกว่าหนึ่งวัน เช่น เดือน ปี หรือสัปดาห์ เช่น in the last week of November",
    wrongAnswerExplanationsThai: [
      "\"at\" ใช้กับเวลาที่เจาะจงเช่นชั่วโมง หรือสถานที่บางจุด ไม่ใช้กับช่วงสัปดาห์",
      "",
      "\"on\" ใช้กับวันที่หรือวันในสัปดาห์ ไม่ใช้กับช่วงสัปดาห์ทั้งสัปดาห์",
      "\"by\" หมายถึงภายในกำหนดเวลาหนึ่ง ไม่ใช่ช่วงเวลาที่เหตุการณ์เกิดขึ้นเป็นประจำ"
    ],
    tipThai: "จำหลัก in+เดือน/ปี/ฤดู, on+วัน/วันที่, at+เวลานาฬิกา/จุดเวลาเฉพาะ"
  },
  {
    id: "set2-q6",
    setId: 2,
    section: "grammar",
    skill: "modal 'must' for strict obligation",
    difficulty: "advanced",
    question: "All students ___ wear their uniforms correctly; it is one of the school's strictest rules.",
    passageId: null,
    options: ["might", "could", "would", "must"],
    correctAnswer: 3,
    explanationThai: "\"must\" ใช้แสดงข้อบังคับที่เข้มงวดหรือกฎที่ต้องปฏิบัติตาม ตรงกับบริบท \"strictest rules\"",
    wrongAnswerExplanationsThai: [
      "\"might\" แสดงความเป็นไปได้ ไม่ใช่ข้อบังคับ",
      "\"could\" แสดงความสามารถหรือการขออนุญาตในอดีต ไม่ใช่กฎเกณฑ์ที่ต้องทำตาม",
      "\"would\" ใช้ในเงื่อนไขหรือคำพูดสุภาพ ไม่ตรงกับบริบทกฎระเบียบที่เข้มงวด",
      ""
    ],
    tipThai: "must/have to ใช้แสดงข้อบังคับหรือกฎเกณฑ์ที่ต้องทำตามอย่างเคร่งครัด"
  },
  {
    id: "set2-q7",
    setId: 2,
    section: "grammar",
    skill: "relative pronoun 'who'",
    difficulty: "intermediate",
    question: "The student ___ won first prize in the science competition is my classmate.",
    passageId: null,
    options: ["who", "which", "whose", "whom"],
    correctAnswer: 0,
    explanationThai: "ใช้ \"who\" แทนคำนามที่เป็นคน (the student) ในฐานะประธานของอนุประโยค",
    wrongAnswerExplanationsThai: [
      "",
      "\"which\" ใช้แทนสิ่งของหรือสัตว์ ไม่ใช่คน",
      "\"whose\" ใช้แสดงความเป็นเจ้าของ ไม่ตรงกับโครงสร้างประโยคนี้",
      "\"whom\" ใช้แทนคนในตำแหน่งกรรม ไม่ใช่ประธานของอนุประโยค"
    ],
    tipThai: "who ใช้แทนคนในตำแหน่งประธาน, whom ใช้แทนคนในตำแหน่งกรรม, which ใช้แทนสิ่งของ"
  },
  {
    id: "set2-q8",
    setId: 2,
    section: "grammar",
    skill: "infinitive after 'decide'",
    difficulty: "advanced",
    question: "My parents have decided ___ me to a new school next year for better opportunities.",
    passageId: null,
    options: ["sending", "send", "to send", "sent"],
    correctAnswer: 2,
    explanationThai: "หลังคำกริยา \"decide\" ต้องตามด้วย infinitive (to + V1) เสมอ เช่น decided to send",
    wrongAnswerExplanationsThai: [
      "\"sending\" เป็น gerund ซึ่งไม่ตามหลัง decide",
      "กริยาช่องที่ 1 เดี่ยวๆ ใช้ไม่ได้ในตำแหน่งนี้",
      "",
      "\"sent\" เป็นรูปอดีต ไม่ตรงกับโครงสร้างที่ตามหลัง decide"
    ],
    tipThai: "คำกริยาที่ตามด้วย to+infinitive เสมอ เช่น decide, want, plan, hope, promise"
  },
  {
    id: "set2-q9",
    setId: 2,
    section: "vocabulary",
    skill: "meaning from context (technology)",
    difficulty: "intermediate",
    question: "The new app crashed twice during the presentation, which was quite embarrassing for the team. Here, 'crashed' most likely means ___.",
    passageId: null,
    options: ["worked perfectly", "stopped working suddenly", "became very popular", "was deleted from the phone"],
    correctAnswer: 1,
    explanationThai: "\"crashed\" ในบริบทเทคโนโลยีหมายถึงโปรแกรมหรือแอปหยุดทำงานกะทันหัน ตรงกับ \"stopped working suddenly\"",
    wrongAnswerExplanationsThai: [
      "มีความหมายตรงข้ามกับสิ่งที่เกิดขึ้นจริง",
      "",
      "\"became very popular\" ไม่เกี่ยวข้องกับบริบทของเรื่องเลย",
      "\"was deleted\" เป็นคนละความหมาย ไม่มีการกล่าวถึงการลบแอปในประโยค"
    ],
    tipThai: "บริบท \"embarrassing\" และ \"twice\" ช่วยบอกใบ้ว่าเป็นเหตุการณ์ไม่ดีที่เกิดซ้ำ นั่นคือแอปมีปัญหา"
  },
  {
    id: "set2-q10",
    setId: 2,
    section: "vocabulary",
    skill: "collocation with 'sleep'",
    difficulty: "intermediate",
    question: "Doctors recommend that students ___ enough sleep every night to stay healthy and focused at school.",
    passageId: null,
    options: ["do", "make", "take", "get"],
    correctAnswer: 3,
    explanationThai: "\"get enough sleep\" เป็น collocation ที่ถูกต้อง หมายถึงนอนหลับให้เพียงพอ",
    wrongAnswerExplanationsThai: [
      "\"do\" ไม่ใช้คู่กับคำว่า sleep ตามหลัก collocation ภาษาอังกฤษ",
      "\"make\" ไม่ใช้คู่กับคำว่า sleep เช่นกัน",
      "\"take\" ใช้กับ \"take a nap\" แต่ไม่ใช้กับ \"enough sleep\" ในรูปแบบนี้",
      ""
    ],
    tipThai: "จำ collocation เกี่ยวกับสุขภาพ เช่น get enough sleep, stay healthy, keep fit"
  },
  {
    id: "set2-q11",
    setId: 2,
    section: "vocabulary",
    skill: "phrasal verb 'fill in on'",
    difficulty: "advanced",
    question: "I couldn't hear the announcement clearly, so I asked my friend to ___ what the teacher had said.",
    passageId: null,
    options: ["fill me in on", "turn down", "give up on", "look forward to"],
    correctAnswer: 0,
    explanationThai: "\"fill someone in on something\" หมายถึงบอกข้อมูลที่พลาดไปให้ทราบ ตรงกับบริบทที่ไม่ได้ยินประกาศชัดเจน",
    wrongAnswerExplanationsThai: [
      "",
      "\"turn down\" หมายถึงปฏิเสธหรือลดเสียงลง ไม่ตรงกับบริบทนี้",
      "\"give up on\" หมายถึงยอมแพ้ ไม่เกี่ยวข้องกับการขอข้อมูล",
      "\"look forward to\" หมายถึงตั้งตารอ ไม่ตรงกับบริบทนี้"
    ],
    tipThai: "\"fill someone in (on something)\" เป็นวลีที่ใช้บ่อยเมื่อขอให้คนอื่นเล่าข้อมูลที่พลาดไปให้ฟัง"
  },
  {
    id: "set2-q12",
    setId: 2,
    section: "vocabulary",
    skill: "synonym for 'exhausting'",
    difficulty: "intermediate",
    question: "After a long and exhausting day at school, Tam just wanted to relax at home. A word closest in meaning to 'exhausting' is ___.",
    passageId: null,
    options: ["exciting", "short", "very tiring", "enjoyable"],
    correctAnswer: 2,
    explanationThai: "\"exhausting\" หมายถึงเหน็ดเหนื่อยมาก ตรงกับความหมาย \"very tiring\"",
    wrongAnswerExplanationsThai: [
      "\"exciting\" หมายถึงน่าตื่นเต้น เป็นคนละความหมาย",
      "\"short\" ไม่เกี่ยวข้องกับความเหนื่อย",
      "",
      "\"enjoyable\" หมายถึงสนุกสนาน มีความหมายตรงข้ามกับบริบทที่อยากพักผ่อน"
    ],
    tipThai: "คำใบ้ \"wanted to relax at home\" บอกว่าวันนั้นเหนื่อยมาก จึงตรงกับความหมาย very tiring"
  },
  {
    id: "set2-q13",
    setId: 2,
    section: "vocabulary",
    skill: "word family (noun form)",
    difficulty: "advanced",
    question: "Turning off lights and unplugging devices when not in use is a simple way to save ___.",
    passageId: null,
    options: ["energetic", "energy", "energize", "energetically"],
    correctAnswer: 1,
    explanationThai: "หลังกริยา \"save\" ต้องตามด้วยคำนาม (noun) คือ \"energy\" หมายถึงพลังงาน",
    wrongAnswerExplanationsThai: [
      "\"energetic\" เป็นคำคุณศัพท์ ใช้ขยายคำนาม ไม่ใช่กรรมของ save",
      "",
      "\"energize\" เป็นคำกริยา หมายถึงทำให้มีพลัง ไม่ใช่คำนามที่เป็นกรรมของ save",
      "\"energetically\" เป็นคำกริยาวิเศษณ์ ใช้ขยายกริยา ไม่ใช่กรรมของ save"
    ],
    tipThai: "หลังกริยาต้องการกรรมที่เป็นคำนาม (noun) เสมอ ให้เลือกรูปคำนามในกลุ่มคำที่มีรากศัพท์เดียวกัน"
  },
  {
    id: "set2-q14",
    setId: 2,
    section: "conversation",
    skill: "apologizing sincerely",
    difficulty: "intermediate",
    question: "You accidentally spilled water on your classmate's homework. What should you say?",
    passageId: null,
    options: ['"It\'s your fault for leaving it there."', '"That\'s not a big deal, forget it."', '"Whatever, it will dry."', '"I\'m so sorry! Let me help you fix it."'],
    correctAnswer: 3,
    explanationThai: "การขอโทษอย่างจริงใจพร้อมเสนอช่วยเหลือ \"I'm so sorry! Let me help you fix it.\" เหมาะสมที่สุดกับสถานการณ์ที่ทำผิดพลาด",
    wrongAnswerExplanationsThai: [
      "โยนความผิดให้อีกฝ่าย ไม่ใช่การขอโทษ",
      "ไม่ใช่คำพูดที่เหมาะกับผู้ที่ทำผิด ซึ่งควรเป็นฝ่ายขอโทษเอง",
      "แสดงความไม่รับผิดชอบต่อสิ่งที่ตนเองทำ",
      ""
    ],
    tipThai: "การขอโทษที่ดีควรมีคำว่า sorry และเสนอวิธีแก้ไขหรือช่วยเหลืออีกฝ่าย"
  },
  {
    id: "set2-q15",
    setId: 2,
    section: "conversation",
    skill: "school interview response",
    difficulty: "advanced",
    question: 'In a school interview, the teacher asks, "Why do you want to join our school?" What is the best answer?',
    passageId: null,
    options: ['"I admire your school\'s strong academic programs and friendly environment."', '"My mom told me to come here."', '"I don\'t really know, my friend just signed up."', '"Because it\'s close to my house."'],
    correctAnswer: 0,
    explanationThai: "คำตอบที่แสดงความตั้งใจและเหตุผลเชิงบวกเกี่ยวกับโรงเรียนเป็นคำตอบที่เหมาะสมที่สุดในการสัมภาษณ์",
    wrongAnswerExplanationsThai: [
      "",
      "ฟังดูไม่มีความตั้งใจของตนเอง ขาดความมั่นใจในการตัดสินใจ",
      "แสดงว่าไม่ได้ตัดสินใจด้วยตนเอง ไม่เหมาะกับการสัมภาษณ์",
      "เป็นเหตุผลด้านความสะดวกเท่านั้น ไม่แสดงความสนใจในโรงเรียนอย่างแท้จริง"
    ],
    tipThai: "คำตอบสัมภาษณ์ที่ดีควรแสดงความตั้งใจ เหตุผลเชิงบวก และความสนใจอย่างแท้จริงต่อโรงเรียน"
  },
  {
    id: "set2-q16",
    setId: 2,
    section: "conversation",
    skill: "making suggestions in group work",
    difficulty: "intermediate",
    question: "During a group project meeting, you think there's a better way to organize the presentation. What is the most appropriate way to say this?",
    passageId: null,
    options: ['"Your plan is bad, let\'s do mine instead."', '"I don\'t want to follow this plan at all."', '"What if we tried organizing the slides by topic instead? It might be clearer."', '"This is boring, can we just finish quickly?"'],
    correctAnswer: 2,
    explanationThai: "\"What if we tried...?\" เป็นวิธีเสนอความคิดเห็นหรือทางเลือกอย่างสุภาพและสร้างสรรค์ในการทำงานกลุ่ม",
    wrongAnswerExplanationsThai: [
      "ตำหนิแผนของเพื่อนตรงๆ ฟังดูไม่สุภาพ",
      "ปฏิเสธโดยไม่เสนอทางเลือกใดๆ",
      "",
      "แสดงความไม่ใส่ใจต่องานกลุ่ม ไม่ใช่การเสนอความคิดเห็นที่สร้างสรรค์"
    ],
    tipThai: "การเสนอความคิดเห็นในกลุ่มควรใช้ \"What if...?\" หรือ \"How about...?\" เพื่อฟังดูสุภาพและเปิดรับความเห็นต่าง"
  },
  {
    id: "set2-q17",
    setId: 2,
    section: "conversation",
    skill: "expressing opinions",
    difficulty: "advanced",
    question: 'Your teacher asks the class, "Do you think homework should be reduced?" What is a well-expressed way to give your opinion?',
    passageId: null,
    options: ['"Homework is stupid and useless."', '"In my opinion, less homework would give us more time to rest and practice hobbies."', '"I don\'t care about this topic."', '"Everyone should just skip homework."'],
    correctAnswer: 1,
    explanationThai: "\"In my opinion...\" เป็นวิธีเปิดประโยคแสดงความคิดเห็นอย่างเป็นทางการ พร้อมให้เหตุผลสนับสนุนอย่างมีเหตุผล",
    wrongAnswerExplanationsThai: [
      "ใช้คำรุนแรง ไม่เหมาะกับการแสดงความเห็นในห้องเรียน",
      "",
      "แสดงความไม่สนใจ ไม่ใช่การให้ความเห็นต่อคำถาม",
      "เป็นข้อเสนอที่สุดโต่งและไม่มีเหตุผลรองรับ"
    ],
    tipThai: "การแสดงความคิดเห็นที่ดีควรใช้วลีเช่น \"In my opinion\", \"I think\", \"I believe\" ตามด้วยเหตุผลสนับสนุน"
  },
  {
    id: "set2-q18",
    setId: 2,
    section: "cloze",
    skill: "cloze: past tense verb form in narrative",
    difficulty: "advanced",
    question: "Last weekend, Ann and her brother decided to clean their grandmother's garden. They (1)___ up early on Saturday morning and worked for three hours. Which word best completes blank (1)?",
    passageId: null,
    options: ["get", "gets", "getting", "got"],
    correctAnswer: 3,
    explanationThai: "เนื้อเรื่องเล่าเหตุการณ์ที่ผ่านมาแล้ว (decided, worked เป็น Past Simple) จึงต้องใช้ \"got\" ซึ่งเป็นอดีตของ get ให้สอดคล้องกับ tense ของเรื่อง",
    wrongAnswerExplanationsThai: [
      "เป็นกริยาช่องที่ 1 ไม่ตรงกับ tense อดีตของเรื่อง",
      "ใช้กับประธานเอกพจน์ใน Present Simple เท่านั้น ผิด tense",
      "ต้องมี auxiliary verb นำหน้า ใช้เดี่ยวๆ ไม่ได้ในตำแหน่งนี้",
      ""
    ],
    tipThai: "ตรวจสอบกริยาตัวอื่นในเรื่อง (decided, worked) เพื่อดูว่าอยู่ใน tense ใด แล้วเลือกกริยาช่องที่ตรงกัน"
  },
  {
    id: "set2-q19",
    setId: 2,
    section: "cloze",
    skill: "cloze: 'keep + V-ing' structure",
    difficulty: "advanced",
    question: "Ann's brother was tired, but he (2)___ complaining because he wanted to finish the job. Which word best completes blank (2)?",
    passageId: null,
    options: ["kept", "keep", "keeps", "keeping"],
    correctAnswer: 0,
    explanationThai: "ประโยคนี้อยู่ใน Past Simple (was tired) จึงต้องใช้ \"kept\" ซึ่งเป็นอดีตของ keep และตามด้วย V-ing (complaining) ตามโครงสร้าง \"keep + V-ing\" ที่แปลว่าทำต่อเนื่อง",
    wrongAnswerExplanationsThai: [
      "",
      "เป็นกริยาช่องที่ 1 ไม่ตรงกับ tense อดีตของเรื่อง",
      "ใช้กับประธานเอกพจน์ใน Present Simple เท่านั้น ผิด tense",
      "ต้องมี auxiliary verb นำหน้าจึงจะใช้ได้ ใช้เดี่ยวๆ ในตำแหน่งนี้ไม่ได้"
    ],
    tipThai: "\"keep + V-ing\" แปลว่าทำสิ่งนั้นต่อไปเรื่อยๆ ต้องผัน keep ตาม tense ของเรื่อง"
  },
  {
    id: "set2-q20",
    setId: 2,
    section: "cloze",
    skill: "cloze: adjective after linking verb 'look'",
    difficulty: "challenge",
    question: "By the afternoon, the garden looked so (3)___ that their grandmother could not stop smiling. Which word best completes blank (3)?",
    passageId: null,
    options: ["messily", "tidily", "tidy", "messy"],
    correctAnswer: 2,
    explanationThai: "หลัง linking verb \"look\" ต้องตามด้วยคำคุณศัพท์ (adjective) ไม่ใช่กริยาวิเศษณ์ (adverb) และความหมายต้องเป็นไปในทางบวกเพราะยายยิ้มไม่หยุด จึงต้องใช้ \"tidy\" (เรียบร้อย)",
    wrongAnswerExplanationsThai: [
      "เป็นกริยาวิเศษณ์ (adverb) ใช้ไม่ได้หลัง linking verb อย่าง look",
      "เป็นกริยาวิเศษณ์เช่นกัน ผิดชนิดคำที่ต้องตามหลัง look",
      "",
      "เป็นคำคุณศัพท์ถูกชนิดคำ แต่ความหมายไม่ตรงเพราะยายคงไม่ยิ้มไม่หยุดถ้าสวนรกรุงรัง"
    ],
    tipThai: "หลัง linking verbs เช่น look, seem, feel, sound ต้องตามด้วยคำคุณศัพท์ (adjective) เสมอ ไม่ใช่กริยาวิเศษณ์ (adverb)"
  },
  {
    id: "set2-q21",
    setId: 2,
    section: "reading",
    skill: "main idea",
    difficulty: "intermediate",
    question: "What is the passage mainly about?",
    passageId: "set2-p1",
    options: ["The history of Ben's school building", "How a school club has changed students' recycling habits", "A competition between two famous schools", "Reasons why plastic bottles are dangerous"],
    correctAnswer: 1,
    explanationThai: "เนื้อเรื่องทั้งหมดเล่าว่า Recycling Club ทำให้ Ben และเพื่อนๆ เปลี่ยนพฤติกรรมการรีไซเคิลและใส่ใจสิ่งแวดล้อมมากขึ้น ซึ่งเป็นใจความหลักของเรื่อง",
    wrongAnswerExplanationsThai: [
      "ไม่มีการกล่าวถึงประวัติอาคารโรงเรียนในเรื่องเลย",
      "",
      "ไม่มีการกล่าวถึงการแข่งขันระหว่างโรงเรียนสองแห่งในเรื่อง",
      "เรื่องนี้ไม่ได้เน้นอันตรายของขวดพลาสติก แต่เน้นการเปลี่ยนพฤติกรรม"
    ],
    tipThai: "ใจความหลัก (main idea) มักสรุปเนื้อหาทั้งย่อหน้า ไม่ใช่รายละเอียดปลีกย่อยเพียงจุดเดียว"
  },
  {
    id: "set2-q22",
    setId: 2,
    section: "reading",
    skill: "supporting detail",
    difficulty: "advanced",
    question: "According to the passage, what happens to some of the collected waste?",
    passageId: "set2-p1",
    options: ["It is sold to a recycling company", "It is sent back to students' homes", "It is thrown away at the end of the year", "It is turned into art for the school fair"],
    correctAnswer: 3,
    explanationThai: "ในเนื้อเรื่องระบุว่า \"They also turn some waste into art for the school fair, which surprises visitors every year\" จึงตรงกับตัวเลือกนี้",
    wrongAnswerExplanationsThai: [
      "ไม่มีการกล่าวถึงการขายให้บริษัทรีไซเคิลในเรื่องเลย",
      "ไม่มีการกล่าวถึงการส่งขยะกลับบ้านนักเรียนในเรื่อง",
      "ขัดกับเนื้อเรื่องที่บอกว่าขยะบางส่วนถูกนำไปทำเป็นงานศิลปะ ไม่ใช่ถูกทิ้ง",
      ""
    ],
    tipThai: "คำถามรายละเอียด (detail question) ต้องหาคำตอบที่ตรงกับข้อความในเรื่องเป๊ะๆ อย่าเดาเอง"
  },
  {
    id: "set2-q23",
    setId: 2,
    section: "reading",
    skill: "inference",
    difficulty: "challenge",
    question: "What can be inferred about the club's popularity?",
    passageId: "set2-p1",
    options: ["It has become more popular since it started", "It is only popular with teachers", "It failed after the first semester", "Only ten students have ever joined"],
    correctAnswer: 0,
    explanationThai: "เรื่องระบุว่า \"only ten students joined, but the number quickly grew\" ซึ่งแสดงว่าชมรมได้รับความนิยมมากขึ้นเรื่อยๆ",
    wrongAnswerExplanationsThai: [
      "",
      "ไม่มีข้อความใดในเรื่องบอกว่าชมรมเป็นที่นิยมเฉพาะในหมู่ครูเท่านั้น",
      "ขัดกับเนื้อเรื่องที่บอกว่าจำนวนสมาชิกเพิ่มขึ้นอย่างต่อเนื่อง ไม่ได้ล้มเหลว",
      "ขัดกับเนื้อเรื่องที่ระบุว่าจำนวนนักเรียนเพิ่มขึ้นจากสิบคนในตอนแรก"
    ],
    tipThai: "การอนุมาน (inference) ต้องเชื่อมโยงเบาะแสหลายจุดในเรื่อง เช่นจำนวนสมาชิกที่เพิ่มขึ้นเรื่อยๆ"
  },
  {
    id: "set2-q24",
    setId: 2,
    section: "reading",
    skill: "vocabulary in context",
    difficulty: "advanced",
    question: "In the passage, the word 'reduced' is closest in meaning to ___.",
    passageId: "set2-p1",
    options: ["increased", "measured", "made smaller", "reported"],
    correctAnswer: 2,
    explanationThai: "\"reduced\" หมายถึงทำให้น้อยลง ตรงกับความหมาย \"made smaller\" ซึ่งในที่นี้หมายถึงปริมาณขยะของโรงเรียนลดลง",
    wrongAnswerExplanationsThai: [
      "\"increased\" มีความหมายตรงข้ามกับ reduced",
      "\"measured\" หมายถึงวัดปริมาณ ไม่ใช่ทำให้น้อยลง",
      "",
      "\"reported\" หมายถึงรายงาน ไม่เกี่ยวข้องกับความหมายของ reduced"
    ],
    tipThai: "ดูบริบทรอบคำ \"almost a third\" ซึ่งบ่งบอกถึงปริมาณที่ลดลง ช่วยยืนยันความหมายของ reduced"
  },
  {
    id: "set2-q25",
    setId: 2,
    section: "reading",
    skill: "best title",
    difficulty: "advanced",
    question: "What would be the best title for this passage?",
    passageId: "set2-p1",
    options: ["Ben's Favorite School Subject", "Small Actions, Big Change: The Recycling Club", "The Most Expensive School Fair", "Why Ben Dislikes Cleaning"],
    correctAnswer: 1,
    explanationThai: "ชื่อเรื่องนี้สรุปใจความหลักของเรื่องได้ดีที่สุด คือการที่การกระทำเล็กๆ ของนักเรียนผ่านชมรมรีไซเคิลนำไปสู่การเปลี่ยนแปลงที่ยิ่งใหญ่",
    wrongAnswerExplanationsThai: [
      "ไม่มีการกล่าวถึงวิชาที่ Ben ชื่นชอบในเรื่องเลย",
      "",
      "ไม่มีการกล่าวถึงงานโรงเรียนที่มีค่าใช้จ่ายสูงในเรื่อง",
      "ขัดกับเนื้อเรื่องที่บอกว่า Ben ชอบและสนุกกับกิจกรรมของชมรม ไม่ได้เกลียดการทำความสะอาด"
    ],
    tipThai: "ชื่อเรื่องที่ดีต้องครอบคลุมใจความหลักของทั้งย่อหน้า ไม่ใช่รายละเอียดเล็กๆ น้อยๆ เพียงจุดเดียว"
  }
];
