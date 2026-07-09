window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[6] = [
  {
    id: "set6-p1",
    setId: 6,
    title: "Powering the Future: Renewable Energy",
    text: "Renewable energy is often described as one of the most promising solutions to the world's growing energy needs. Unlike fossil fuels, which release harmful gases when burned, renewable sources such as solar, wind, and hydroelectric power produce clean electricity with minimal environmental damage. In the past, renewable energy was criticized for being too expensive and unreliable, since sunlight and wind are not always available. However, recent advances in technology have changed this picture dramatically.\n\nBattery storage systems, for example, now allow excess energy generated during sunny or windy periods to be saved and used later when conditions change. At the same time, the cost of solar panels and wind turbines has dropped significantly, making renewable energy more competitive with traditional power sources. Some countries have already reached a point where renewable energy supplies a large share of their electricity, proving that a full transition is possible.\n\nStill, challenges remain. Building the infrastructure needed to support renewable energy requires significant investment, and some regions lack the natural resources, such as strong winds or consistent sunlight, to rely on these methods alone. Governments and private companies must continue working together to overcome these obstacles.\n\nAs more countries invest in clean energy research, the dream of a world powered mainly by renewable sources seems increasingly within reach. The transition will not happen overnight, but the direction is now clear."
  }
];

window.QUIZ_DATA.sets[6] = [
  {
    id: "set6-q1", setId: 6, section: "grammar", skill: "past perfect",
    difficulty: "advanced",
    question: "By the time the fire brigade arrived, the flames _____ most of the old warehouse.",
    passageId: null,
    options: ["destroy", "were destroying", "have destroyed", "had destroyed"],
    correctAnswer: 3,
    explanationThai: "Past Perfect (had + V3) ใช้กับเหตุการณ์ที่เกิดขึ้นและเสร็จสิ้นก่อนอีกเหตุการณ์หนึ่งในอดีต ในที่นี้ไฟไหม้เผาทำลายไปแล้วก่อนที่นักดับเพลิงจะมาถึง จึงใช้ had destroyed",
    wrongAnswerExplanationsThai: [
      "destroy เป็น Present Simple ผิดกาลโดยสิ้นเชิงสำหรับเรื่องราวในอดีต",
      "were destroying เป็น Past Continuous แสดงการกระทำที่กำลังดำเนินอยู่ ไม่ได้เน้นว่าเสร็จสิ้นก่อนอีกเหตุการณ์",
      "have destroyed เป็น Present Perfect ซึ่งเชื่อมโยงกับปัจจุบัน ไม่ใช่จุดในอดีต",
      ""
    ],
    tipThai: "เมื่อมีสองเหตุการณ์ในอดีต เหตุการณ์ที่เกิดก่อนให้ใช้ Past Perfect (had + V3)"
  },
  {
    id: "set6-q2", setId: 6, section: "grammar", skill: "passive voice (present perfect)",
    difficulty: "advanced",
    question: "Great progress _____ in solar panel efficiency over the last decade.",
    passageId: null,
    options: ["has made", "has been made", "had make", "is making"],
    correctAnswer: 1,
    explanationThai: "ประโยคนี้ใช้ Passive Voice ใน Present Perfect (has/have been + V3) เพราะ 'progress' เป็นสิ่งที่ถูกทำให้เกิดขึ้น ไม่ใช่ผู้กระทำเอง จึงต้องใช้ has been made",
    wrongAnswerExplanationsThai: [
      "has made เป็น Active Voice ซึ่งหมายความว่า progress เป็นผู้กระทำเอง ผิดความหมายและโครงสร้าง",
      "",
      "had make ผิดรูปกริยาโดยสิ้นเชิง ไม่ถูกต้องตามหลักไวยากรณ์",
      "is making เป็น Present Continuous Active ผิดทั้งกาลและ voice"
    ],
    tipThai: "เมื่อประธานเป็นสิ่งที่ถูกกระทำ และเชื่อมโยงกับปัจจุบัน ให้ใช้ Present Perfect Passive: has/have been + V3"
  },
  {
    id: "set6-q3", setId: 6, section: "grammar", skill: "relative clause (non-defining)",
    difficulty: "advanced",
    question: "Wind turbines, _____ have become a common sight in rural areas, generate electricity without producing greenhouse gases.",
    passageId: null,
    options: ["which", "who", "whose", "that"],
    correctAnswer: 0,
    explanationThai: "ใช้ which นำหน้าอนุประโยคขยายความแบบ non-defining (มีจุลภาคคั่น) เพื่อขยายความเกี่ยวกับ wind turbines ซึ่งเป็นสิ่งของ",
    wrongAnswerExplanationsThai: [
      "",
      "who ใช้กับบุคคลเท่านั้น ไม่ใช้กับสิ่งของอย่าง wind turbines",
      "whose แสดงความเป็นเจ้าของ ซึ่งไม่ตรงกับบริบทประโยคนี้",
      "that มักไม่ใช้นำหน้า non-defining relative clause ที่มีจุลภาคคั่น"
    ],
    tipThai: "อนุประโยคที่มีจุลภาคคั่น (non-defining) ห้ามใช้ that นำหน้า"
  },
  {
    id: "set6-q4", setId: 6, section: "grammar", skill: "second conditional",
    difficulty: "advanced",
    question: "If every household _____ solar panels, the country's dependence on fossil fuels would decrease significantly.",
    passageId: null,
    options: ["installs", "will install", "installed", "had installed"],
    correctAnswer: 2,
    explanationThai: "Second Conditional ใช้พูดถึงสถานการณ์สมมติที่ไม่เป็นจริงในปัจจุบัน โครงสร้างคือ If + past simple, would + V.infinitive ในที่นี้ if-clause ต้องใช้ installed",
    wrongAnswerExplanationsThai: [
      "installs เป็น Present Simple ใช้กับ Zero/First Conditional ไม่ใช่สถานการณ์สมมติ",
      "will install เป็นรูปอนาคต ไม่ใช้ใน if-clause ของ conditional",
      "",
      "had installed เป็น Past Perfect ที่ใช้ใน Third Conditional สำหรับอดีต ไม่ใช่ปัจจุบัน"
    ],
    tipThai: "สังเกตประโยคหลักที่มี would + V.infinitive แสดงว่าเป็น Second Conditional ต้องใช้ Past Simple ใน if-clause"
  },
  {
    id: "set6-q5", setId: 6, section: "grammar", skill: "reported speech (statement with time/place shift)",
    difficulty: "challenge",
    question: "\"We will present our renewable energy project here tomorrow,\" the students said. The students said that _____.",
    passageId: null,
    options: ["we will present our renewable energy project here tomorrow", "they will present their renewable energy project here tomorrow", "they would present their renewable energy project here the next day", "they would present their renewable energy project there the following day"],
    correctAnswer: 3,
    explanationThai: "การรายงานคำพูดต้องเปลี่ยนสรรพนาม (we→they), กาล (will→would), และคำบอกเวลา/สถานที่ (here→there, tomorrow→the following day) ให้สอดคล้องกับบริบทของผู้รายงาน",
    wrongAnswerExplanationsThai: [
      "ไม่มีการเปลี่ยนแปลงใดๆ เลย ทั้งสรรพนาม กาล และคำบอกสถานที่/เวลา ผิดหลัก Reported Speech ทั้งหมด",
      "เปลี่ยนสรรพนามแล้วแต่ไม่เปลี่ยนกาล (will) และคำบอกเวลา/สถานที่ (here, tomorrow)",
      "เปลี่ยนกาลและเวลาถูกต้องแล้ว แต่ลืมเปลี่ยนคำบอกสถานที่ here เป็น there",
      ""
    ],
    tipThai: "เมื่อรายงานคำพูด ต้องเปลี่ยนทั้งสรรพนาม กาล และคำบอกเวลา/สถานที่ให้ครบถ้วน (here→there, tomorrow→the next day)"
  },
  {
    id: "set6-q6", setId: 6, section: "grammar", skill: "indirect questions",
    difficulty: "advanced",
    question: "Could you tell me _____?",
    passageId: null,
    options: ["where is the recycling center", "where the recycling center is", "where the recycling center was", "where does the recycling center locate"],
    correctAnswer: 1,
    explanationThai: "ประโยคคำถามทางอ้อม (Indirect Question) ต้องเรียงคำแบบประโยคบอกเล่า (Subject + Verb) ไม่ใช่โครงสร้างคำถามโดยตรง จึงใช้ where the recycling center is",
    wrongAnswerExplanationsThai: [
      "where is the recycling center คงโครงสร้างคำถามโดยตรง ผิดหลัก Indirect Question",
      "",
      "was เปลี่ยนเป็นอดีตโดยไม่มีเหตุผล เพราะศูนย์รีไซเคิลยังคงมีอยู่ในปัจจุบัน",
      "does the recycling center locate ทั้งลำดับคำและการใช้กริยา locate ผิดหลักไวยากรณ์"
    ],
    tipThai: "Indirect Question ต้องเรียงคำแบบประโยคบอกเล่าเสมอ (Subject + Verb) ไม่ใช้โครงสร้างคำถาม"
  },
  {
    id: "set6-q7", setId: 6, section: "grammar", skill: "parallel structure",
    difficulty: "advanced",
    question: "Renewable energy is important because it reduces pollution, saves money, and _____.",
    passageId: null,
    options: ["it is protecting natural resources", "protection of natural resources", "protects natural resources", "to protect natural resources"],
    correctAnswer: 2,
    explanationThai: "โครงสร้าง Parallel Structure ต้องให้รูปแบบคำในรายการเดียวกันสอดคล้องกัน เนื่องจาก reduces และ saves เป็นกริยารูป Present Simple (verb+s) คำถัดไปต้องเป็นรูปเดียวกันคือ protects",
    wrongAnswerExplanationsThai: [
      "it is protecting ทำให้โครงสร้างไม่ขนานกับ reduces, saves ที่เป็น Present Simple",
      "protection of natural resources เป็นคำนาม ไม่ขนานกับกริยาสองตัวก่อนหน้า",
      "",
      "to protect เป็น infinitive ไม่ขนานกับรูปกริยา Present Simple ก่อนหน้า"
    ],
    tipThai: "เมื่อมีรายการ (list) ในประโยค ต้องใช้รูปแบบไวยากรณ์เดียวกันทุกรายการ (Parallel Structure)"
  },
  {
    id: "set6-q8", setId: 6, section: "grammar", skill: "gerund after certain verbs (suggest)",
    difficulty: "advanced",
    question: "Scientists suggest _____ renewable energy sources to slow down climate change.",
    passageId: null,
    options: ["using", "to use", "use", "used"],
    correctAnswer: 0,
    explanationThai: "คำกริยา suggest ตามด้วย gerund (V-ing) หรือ that-clause ไม่ใช่ to + infinitive โดยตรง จึงใช้ using",
    wrongAnswerExplanationsThai: [
      "",
      "to use เป็นรูป infinitive ซึ่งไม่ใช้ตามหลัง suggest โดยตรง (เป็นข้อผิดพลาดที่พบบ่อย)",
      "use เป็นรูปกริยาพื้นฐานไม่มี to หรือ -ing ผิดหลักไวยากรณ์ในตำแหน่งนี้",
      "used เป็นรูป Past Participle ผิดหลักไวยากรณ์ในตำแหน่งนี้"
    ],
    tipThai: "คำกริยาบางคำ เช่น suggest, recommend, avoid, enjoy ต้องตามด้วย gerund (V-ing) เสมอ"
  },
  {
    id: "set6-q9", setId: 6, section: "vocabulary", skill: "collocations (environment)",
    difficulty: "advanced",
    question: "Many companies are now trying to _____ their carbon footprint by switching to renewable energy.",
    passageId: null,
    options: ["raise", "expand", "increase", "reduce"],
    correctAnswer: 3,
    explanationThai: "reduce แปลว่า ลด ตรงกับเป้าหมายของบริษัทที่ต้องการลดปริมาณคาร์บอนฟุตพริ้นท์ (carbon footprint) เป็น collocation ที่ถูกต้อง",
    wrongAnswerExplanationsThai: [
      "raise แปลว่า เพิ่มขึ้น ตรงข้ามกับเป้าหมายด้านสิ่งแวดล้อม",
      "expand ไม่ใช่ collocation ที่ใช้คู่กับ carbon footprint ในบริบทนี้",
      "increase มีความหมายตรงข้ามกับเป้าหมายลดผลกระทบต่อสิ่งแวดล้อม",
      ""
    ],
    tipThai: "collocation ด้านสิ่งแวดล้อมที่พบบ่อย: reduce carbon footprint/emissions"
  },
  {
    id: "set6-q10", setId: 6, section: "vocabulary", skill: "phrasal verbs (environment)",
    difficulty: "advanced",
    question: "The government is encouraging citizens to _____ their use of plastic bags to protect the environment.",
    passageId: null,
    options: ["cut off", "cut in", "cut down on", "cut out for"],
    correctAnswer: 2,
    explanationThai: "cut down on แปลว่า ลดปริมาณการใช้สิ่งใดสิ่งหนึ่งลง ตรงกับบริบทการลดใช้ถุงพลาสติก",
    wrongAnswerExplanationsThai: [
      "cut off แปลว่า ตัดขาด/หยุดจ่ายทันที ความหมายต่างจากการค่อยๆ ลดปริมาณ",
      "cut in แปลว่า แทรก/ขัดจังหวะ ไม่เกี่ยวกับการลดปริมาณ",
      "",
      "cut out for แปลว่า เหมาะสมกับ ไม่เกี่ยวข้องกับบริบทนี้"
    ],
    tipThai: "phrasal verb ด้านสิ่งแวดล้อมที่พบบ่อย: cut down on = ลดปริมาณการใช้"
  },
  {
    id: "set6-q11", setId: 6, section: "vocabulary", skill: "word family (pollution)",
    difficulty: "advanced",
    question: "Factories that release harmful chemicals into rivers are major sources of water _____.",
    passageId: null,
    options: ["polluted", "pollution", "pollutant", "polluting"],
    correctAnswer: 1,
    explanationThai: "ช่องว่างต้องการคำนามทั่วไปที่หมายถึงมลพิษ (the general concept of pollution) คำว่า pollution เป็นคำนามที่ถูกต้องในบริบทนี้",
    wrongAnswerExplanationsThai: [
      "polluted เป็นคำคุณศัพท์/Past Participle ไม่ใช่คำนาม",
      "",
      "pollutant หมายถึงสารมลพิษที่เจาะจง ไม่ใช่คำทั่วไปที่ใช้ในวลี water pollution",
      "polluting เป็นรูป Present Participle/Adjective ไม่ใช่คำนามที่ต้องการในตำแหน่งนี้"
    ],
    tipThai: "จำ word family: pollute (v.) - polluted (adj.) - pollution (n. ทั่วไป) - pollutant (n. สารเฉพาะ)"
  },
  {
    id: "set6-q12", setId: 6, section: "vocabulary", skill: "synonyms/antonyms (resources)",
    difficulty: "advanced",
    question: "As fossil fuels become more _____, many countries are investing in alternative energy sources.",
    passageId: null,
    options: ["scarce", "abundant", "available", "affordable"],
    correctAnswer: 0,
    explanationThai: "scarce แปลว่า หายาก/ขาดแคลน ตรงกับบริบทที่เชื้อเพลิงฟอสซิลลดน้อยลงจนต้องหาพลังงานทดแทน",
    wrongAnswerExplanationsThai: [
      "",
      "abundant แปลว่า มีมากมาย ความหมายตรงข้ามกับบริบท",
      "available ไม่ได้สื่อถึงการลดน้อยลงซึ่งเป็นเหตุผลของการลงทุนในพลังงานทางเลือก",
      "affordable แปลว่า ราคาย่อมเยา ไม่เกี่ยวกับปริมาณทรัพยากรที่ลดลง"
    ],
    tipThai: "scarce และ abundant เป็นคำตรงข้ามกัน (antonym) ที่มักออกสอบคู่กัน"
  },
  {
    id: "set6-q13", setId: 6, section: "vocabulary", skill: "nuanced vocabulary (media literacy)",
    difficulty: "advanced",
    question: "A good news report about environmental issues should be _____, presenting facts fairly without favoring one side.",
    passageId: null,
    options: ["biased", "emotional", "objective", "persuasive"],
    correctAnswer: 2,
    explanationThai: "objective แปลว่า เป็นกลาง/ไม่ลำเอียง ตรงกับลักษณะการรายงานข่าวที่ดีที่นำเสนอข้อเท็จจริงอย่างเป็นธรรม",
    wrongAnswerExplanationsThai: [
      "biased แปลว่า ลำเอียง ซึ่งตรงข้ามกับคุณสมบัติของการรายงานข่าวที่ดี",
      "emotional แปลว่า ใช้อารมณ์ ขัดแย้งกับการรายงานข้อเท็จจริงอย่างเป็นกลาง",
      "",
      "persuasive แปลว่า โน้มน้าวใจ ไม่ตรงกับการนำเสนอข้อมูลอย่างเป็นกลาง"
    ],
    tipThai: "ในบริบท media literacy คำว่า objective หมายถึงการนำเสนอข้อมูลอย่างเป็นกลางไม่ลำเอียง"
  },
  {
    id: "set6-q14", setId: 6, section: "conversation", skill: "diplomatic advice",
    difficulty: "advanced",
    question: "A friend's science project idea about renewable energy has a weak methodology, and Ploy wants to suggest improvements tactfully. Which sentence is the most diplomatic?",
    passageId: null,
    options: ["Your methodology is wrong, you need to change it.", "This won't work at all, try something else.", "I don't think this is a good idea.", "Have you thought about adjusting the methodology to make the results more reliable?"],
    correctAnswer: 3,
    explanationThai: "การเสนอแนะอย่างสุภาพควรใช้คำถามชี้แนะ เช่น 'Have you thought about...' เพื่อกระตุ้นให้อีกฝ่ายพิจารณาปรับปรุงโดยไม่ทำให้รู้สึกถูกตำหนิ",
    wrongAnswerExplanationsThai: [
      "การบอกตรงๆ ว่า 'วิธีการของคุณผิด' ฟังดูรุนแรงและไม่สร้างสรรค์",
      "การพูดว่า 'ใช้ไม่ได้เลย' เป็นการปฏิเสธแบบไม่ให้กำลังใจ ไม่เหมาะสม",
      "การพูดว่า 'ฉันไม่คิดว่านี่เป็นความคิดที่ดี' คลุมเครือและไม่ได้เสนอแนวทางปรับปรุง",
      ""
    ],
    tipThai: "การให้คำแนะนำอย่างมีชั้นเชิง (diplomatic advice) ควรใช้คำถามนำ เช่น Have you considered...? หรือ What if...?"
  },
  {
    id: "set6-q15", setId: 6, section: "conversation", skill: "planning and arranging",
    difficulty: "advanced",
    question: "Two classmates are arranging a group study session before the exam. A: \"When should we meet to review the renewable energy chapter?\" B: \"_____\"",
    passageId: null,
    options: ["How about Saturday morning at the library? That way we'll have plenty of time.", "I don't care, whenever.", "Maybe never, I'm too busy.", "You decide, I don't want to plan."],
    correctAnswer: 0,
    explanationThai: "การตอบที่ดีในการวางแผนควรเสนอเวลา/สถานที่ที่ชัดเจนพร้อมเหตุผลสนับสนุน แสดงถึงความกระตือรือร้นในการร่วมมือ",
    wrongAnswerExplanationsThai: [
      "",
      "'ยังไงก็ได้ไม่สนใจ' แสดงถึงการไม่ร่วมมือในการวางแผน",
      "'อาจจะไม่มีเวลาเลย' ไม่สร้างสรรค์และไม่ช่วยในการวางแผน",
      "'คุณตัดสินใจเอง ฉันไม่อยากวางแผน' แสดงถึงการเพิกเฉยต่อการมีส่วนร่วม"
    ],
    tipThai: "การวางแผนที่ดีควรเสนอทางเลือกที่ชัดเจนพร้อมเหตุผล เช่น How about...? That way we can..."
  },
  {
    id: "set6-q16", setId: 6, section: "conversation", skill: "study habits discussion",
    difficulty: "advanced",
    question: "Two students discuss study techniques. A: \"I always cram everything the night before the test.\" B: \"_____\"",
    passageId: null,
    options: ["That sounds like a great strategy, keep doing that.", "You might find it more effective to review a little each day instead.", "It doesn't matter when you study.", "Why do you even bother studying at all?"],
    correctAnswer: 1,
    explanationThai: "การให้คำแนะนำที่ดีเกี่ยวกับนิสัยการเรียนควรเสนอแนวทางที่มีประโยชน์กว่าอย่างสุภาพ เช่น การทบทวนบทเรียนทีละน้อยทุกวันแทนการอ่านหนักในคืนก่อนสอบ",
    wrongAnswerExplanationsThai: [
      "การชื่นชมพฤติกรรมที่ไม่มีประสิทธิภาพ (cram) ว่าเป็นกลยุทธ์ที่ดี ไม่ถูกต้องและไม่เป็นประโยชน์",
      "",
      "การบอกว่า 'เวลาที่อ่านหนังสือไม่สำคัญ' ขัดแย้งกับหลักการจัดการเวลาที่ดี",
      "การถามอย่างเสียดสีว่า 'จะอ่านหนังสือไปทำไม' หยาบคายและไม่สร้างสรรค์"
    ],
    tipThai: "คำแนะนำที่ดีเกี่ยวกับการเรียนควรเป็นเชิงบวกและเสนอแนวทางที่ดีกว่า เช่น You might find it more effective to..."
  },
  {
    id: "set6-q17", setId: 6, section: "conversation", skill: "polite requests",
    difficulty: "advanced",
    question: "A student needs more time to finish a renewable energy research project. Which request is most polite and appropriate for a teacher?",
    passageId: null,
    options: ["I need more time, give it to me.", "You have to let me have an extension.", "Can't you just give me another week or something?", "Would it be possible to have a few extra days to complete the project?"],
    correctAnswer: 3,
    explanationThai: "การขอเวลาเพิ่มอย่างสุภาพควรใช้โครงสร้าง Would it be possible...? ซึ่งแสดงความสุภาพและให้เกียรติผู้ฟัง เหมาะสมกับการขอร้องครูอาจารย์",
    wrongAnswerExplanationsThai: [
      "'ให้เวลาฉันเพิ่ม' เป็นประโยคคำสั่งที่ฟังดูไม่สุภาพ",
      "'คุณต้องให้ฉันขยายเวลา' ใช้น้ำเสียงบังคับ ไม่เหมาะกับการขอร้องครู",
      "'ให้อีกอาทิตย์นึงหรืออะไรก็ได้' ใช้ภาษาพูดที่ไม่เป็นทางการเกินไปสำหรับสถานการณ์นี้",
      ""
    ],
    tipThai: "การขอร้องอย่างสุภาพ ควรใช้โครงสร้าง Would it be possible...? หรือ Could I possibly...?"
  },
  {
    id: "set6-q18", setId: 6, section: "cloze", skill: "cloze: linking words (cause-effect)",
    difficulty: "advanced",
    question: "Solar energy has grown rapidly worldwide over the past decade. _____, the cost of solar panels has fallen sharply, making the technology more affordable for ordinary households.",
    passageId: null,
    options: ["As a result", "On the other hand", "For instance", "In spite of this"],
    correctAnswer: 0,
    explanationThai: "'As a result' ใช้เชื่อมประโยคที่แสดงผลลัพธ์ที่ตามมาจากเหตุการณ์ก่อนหน้า (การเติบโตอย่างรวดเร็วของพลังงานแสงอาทิตย์ ส่งผลให้ต้นทุนลดลง)",
    wrongAnswerExplanationsThai: [
      "",
      "'On the other hand' ใช้แสดงความขัดแย้ง แต่ประโยคนี้ไม่ได้ขัดแย้งกับประโยคก่อนหน้า",
      "'For instance' ใช้ยกตัวอย่าง แต่ประโยคนี้ไม่ใช่ตัวอย่าง เป็นผลลัพธ์ที่ตามมา",
      "'In spite of this' แสดงการขัดแย้ง/ยอมรับ ซึ่งไม่ตรงกับความหมายต่อเนื่องเชิงบวกของประโยค"
    ],
    tipThai: "สังเกตความสัมพันธ์ระหว่างประโยค หากเป็นเหตุและผลต่อเนื่องกัน ให้ใช้ As a result, Therefore, Consequently"
  },
  {
    id: "set6-q19", setId: 6, section: "cloze", skill: "cloze: pronoun reference (agreement)",
    difficulty: "advanced",
    question: "Wind energy has expanded too, and, combined with solar power, _____ now provide a significant share of electricity in some countries.",
    passageId: null,
    options: ["it", "he", "they", "one"],
    correctAnswer: 2,
    explanationThai: "ประธานของประโยคคือพลังงานลมและพลังงานแสงอาทิตย์รวมกัน (สองสิ่ง) จึงต้องใช้สรรพนามพหูพจน์ they แทน ไม่ใช่ it ซึ่งเป็นเอกพจน์",
    wrongAnswerExplanationsThai: [
      "it เป็นสรรพนามเอกพจน์ ไม่สอดคล้องกับประธานที่เป็นสองสิ่งรวมกัน (wind + solar)",
      "he ใช้กับบุคคลเพศชาย ไม่เกี่ยวข้องกับพลังงาน",
      "",
      "one เป็นคำที่ใช้แทนคำนามทั่วไปแบบไม่เจาะจง ไม่เหมาะกับการอ้างอิงกลับไปยังประธานที่ระบุชัดเจนแล้ว"
    ],
    tipThai: "ตรวจสอบว่าคำสรรพนามอ้างอิงถึงคำนามเอกพจน์หรือพหูพจน์ก่อนเลือกใช้ it/they"
  },
  {
    id: "set6-q20", setId: 6, section: "cloze", skill: "cloze: linking words (result)",
    difficulty: "advanced",
    question: "Despite this progress, renewable energy still faces challenges, such as limited storage capacity. _____, engineers continue to develop better battery technology so that energy can be stored for later use.",
    passageId: null,
    options: ["However", "Therefore", "For example", "Otherwise"],
    correctAnswer: 1,
    explanationThai: "'Therefore' ใช้เชื่อมประโยคที่แสดงผลลัพธ์หรือการตอบสนองต่อปัญหาที่กล่าวถึงก่อนหน้า (ปัญหาการกักเก็บพลังงาน นำไปสู่การพัฒนาแบตเตอรี่)",
    wrongAnswerExplanationsThai: [
      "'However' ใช้แสดงความขัดแย้ง แต่ประโยคนี้แสดงการตอบสนอง/ผลลัพธ์ ไม่ใช่ความขัดแย้ง",
      "",
      "'For example' ใช้ยกตัวอย่าง แต่ประโยคนี้ไม่ใช่ตัวอย่างของข้อจำกัดด้านการกักเก็บพลังงาน",
      "'Otherwise' ใช้แสดงเงื่อนไขทางเลือก ไม่เหมาะกับบริบทนี้"
    ],
    tipThai: "เมื่อประโยคถัดไปเป็นผลลัพธ์หรือวิธีแก้ปัญหาที่กล่าวถึงก่อนหน้า ให้ใช้ Therefore, Consequently, As a result"
  },
  {
    id: "set6-q21", setId: 6, section: "reading", skill: "detail",
    difficulty: "advanced",
    question: "According to the passage, what has caused the cost of solar panels and wind turbines to become more competitive?",
    passageId: "set6-p1",
    options: ["Recent advances in technology and falling production costs.", "Government bans on fossil fuels.", "A worldwide shortage of coal and oil.", "New laws requiring all homes to use solar power."],
    correctAnswer: 0,
    explanationThai: "บทความระบุชัดเจนว่า 'recent advances in technology' และต้นทุนที่ลดลงเป็นสาเหตุที่ทำให้พลังงานแสงอาทิตย์และกังหันลมแข่งขันได้มากขึ้น",
    wrongAnswerExplanationsThai: [
      "",
      "บทความไม่ได้กล่าวถึงการห้ามใช้เชื้อเพลิงฟอสซิลโดยรัฐบาล",
      "ไม่มีการกล่าวถึงการขาดแคลนถ่านหินหรือน้ำมันในบทความ",
      "ไม่มีการกล่าวถึงกฎหมายบังคับให้ใช้พลังงานแสงอาทิตย์ในบทความ"
    ],
    tipThai: "คำถามรายละเอียด (detail) ต้องหาคำตอบที่ระบุไว้ตรงๆ ในบทความ"
  },
  {
    id: "set6-q22", setId: 6, section: "reading", skill: "inference",
    difficulty: "challenge",
    question: "What can be inferred about regions that lack strong winds or consistent sunlight?",
    passageId: "set6-p1",
    options: ["They will never be able to use any form of renewable energy.", "They should immediately stop using fossil fuels.", "They have already achieved full renewable energy transition.", "They may need to rely on additional methods or resources to benefit fully from renewable energy."],
    correctAnswer: 3,
    explanationThai: "บทความระบุว่าบางพื้นที่ 'lack the natural resources' เช่นลมแรงหรือแสงแดดสม่ำเสมอ จึงอนุมานได้ว่าพื้นที่เหล่านี้อาจต้องพึ่งพาวิธีการหรือทรัพยากรเพิ่มเติมเพื่อใช้ประโยชน์จากพลังงานหมุนเวียนได้เต็มที่",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้บอกว่าพื้นที่เหล่านี้จะไม่มีทางใช้พลังงานหมุนเวียนได้เลย เป็นการตีความที่รุนแรงเกินไป",
      "ไม่มีข้อมูลสนับสนุนว่าพื้นที่เหล่านี้ควรหยุดใช้เชื้อเพลิงฟอสซิลทันที",
      "ขัดแย้งกับบทความที่ระบุว่ามีเพียง 'some countries' เท่านั้นที่บรรลุการเปลี่ยนผ่านเต็มรูปแบบ",
      ""
    ],
    tipThai: "คำถามอนุมานต้องใช้เหตุผลจากข้อมูลที่ให้มา ไม่ใช่การคาดเดาที่เกินจากเนื้อหา"
  },
  {
    id: "set6-q23", setId: 6, section: "reading", skill: "inference (author's purpose in evidence)",
    difficulty: "challenge",
    question: "Why does the author mention that 'some countries have already reached a point where renewable energy supplies a large share of their electricity'?",
    passageId: "set6-p1",
    options: ["To argue that fossil fuels should be banned immediately worldwide.", "To support the claim that a full transition to renewable energy is achievable.", "To criticize countries that still rely on fossil fuels.", "To explain why battery storage technology was invented."],
    correctAnswer: 1,
    explanationThai: "ผู้เขียนยกตัวอย่างประเทศที่ประสบความสำเร็จ เพื่อสนับสนุนแนวคิดว่าการเปลี่ยนผ่านไปสู่พลังงานหมุนเวียนอย่างเต็มรูปแบบเป็นไปได้จริง",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้เรียกร้องให้ห้ามใช้เชื้อเพลิงฟอสซิลทันทีทั่วโลก",
      "",
      "ไม่มีการวิจารณ์ประเทศอื่นที่ยังพึ่งพาเชื้อเพลิงฟอสซิลในบทความ",
      "ตัวอย่างนี้ไม่เกี่ยวข้องกับการอธิบายที่มาของเทคโนโลยีแบตเตอรี่"
    ],
    tipThai: "พิจารณาว่าตัวอย่างหรือหลักฐานที่ยกมาสนับสนุนแนวคิดหลักของย่อหน้าอย่างไร"
  },
  {
    id: "set6-q24", setId: 6, section: "reading", skill: "pronoun reference",
    difficulty: "advanced",
    question: "In the passage, what does the phrase 'these obstacles' refer to?",
    passageId: "set6-p1",
    options: ["The high cost of fossil fuels.", "The environmental damage caused by pollution.", "The challenges of infrastructure investment and limited natural resources in some regions.", "The advances in battery storage technology."],
    correctAnswer: 2,
    explanationThai: "'these obstacles' อ้างอิงถึงความท้าทายที่กล่าวถึงในประโยคก่อนหน้าโดยตรง คือการลงทุนด้านโครงสร้างพื้นฐานและการขาดแคลนทรัพยากรธรรมชาติในบางพื้นที่",
    wrongAnswerExplanationsThai: [
      "ต้นทุนเชื้อเพลิงฟอสซิลไม่ได้ถูกกล่าวถึงเป็นอุปสรรคในส่วนนี้ของบทความ",
      "ความเสียหายต่อสิ่งแวดล้อมจากมลพิษถูกกล่าวถึงในตอนต้น ไม่ใช่คำที่ these obstacles อ้างอิงถึงในที่นี้",
      "",
      "ความก้าวหน้าด้านแบตเตอรี่ถูกกล่าวถึงในฐานะวิธีแก้ปัญหา ไม่ใช่อุปสรรค"
    ],
    tipThai: "การหาคำอ้างอิงของสรรพนาม ให้ดูประโยคก่อนหน้าที่อยู่ใกล้ที่สุดก่อนเสมอ"
  },
  {
    id: "set6-q25", setId: 6, section: "reading", skill: "best title",
    difficulty: "advanced",
    question: "Which title best summarizes the passage?",
    passageId: "set6-p1",
    options: ["Renewable Energy: Progress, Challenges, and a Promising Future", "The History of Fossil Fuels", "Why Solar Panels Are Too Expensive", "A Complete Guide to Battery Manufacturing"],
    correctAnswer: 0,
    explanationThai: "ชื่อเรื่องนี้ครอบคลุมทั้งความก้าวหน้า ความท้าทาย และอนาคตที่มีแนวโน้มดีของพลังงานหมุนเวียน ซึ่งเป็นแนวคิดหลักตลอดทั้งบทความ",
    wrongAnswerExplanationsThai: [
      "",
      "บทความไม่ได้เน้นเล่าประวัติศาสตร์ของเชื้อเพลิงฟอสซิลเป็นหลัก",
      "ขัดแย้งกับเนื้อหาที่ระบุว่าราคาแผงโซลาร์เซลล์ลดลง ไม่ใช่แพงเกินไป",
      "บทความกล่าวถึงแบตเตอรี่เพียงสั้นๆ ไม่ใช่คู่มือการผลิตแบตเตอรี่แบบละเอียด"
    ],
    tipThai: "ชื่อเรื่องที่ดีต้องครอบคลุมประเด็นสำคัญทั้งหมดของบทความ ไม่ใช่แค่รายละเอียดเล็กน้อยส่วนเดียว"
  }
];
