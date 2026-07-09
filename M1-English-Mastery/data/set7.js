window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[7] = [
  {
    id: "set7-p1",
    setId: 7,
    title: "The Power of Community Service",
    text: "Across Thailand, more schools are encouraging students to take part in community service, and the results have been remarkable. Beyond simply completing required hours, many students discover unexpected benefits that extend far beyond the classroom.\n\nWhen teenagers volunteer - whether by tutoring younger children, cleaning up public parks, or helping at local hospitals - they often develop skills that are difficult to teach through textbooks alone. Working alongside people of different ages and backgrounds builds communication skills and empathy. Facing real problems, such as figuring out how to organize a fundraising event with limited resources, strengthens problem-solving abilities and resilience.\n\nCommunity service also has a surprising effect on academic performance. Studies suggest that students who volunteer regularly often manage their time more effectively, since balancing service commitments with schoolwork requires careful planning. In addition, many students report feeling more motivated in class after seeing how their efforts create real change in their communities.\n\nPerhaps most importantly, community service helps students see themselves as capable contributors to society rather than passive observers. A teenager who helps rebuild a flood-damaged home or organizes a donation drive learns that even young people can make a meaningful difference. This shift in mindset often stays with students long after they leave school, shaping the kind of adults they become.\n\nAs more schools recognize these benefits, community service is likely to become an even more valued part of Thai education in the years ahead."
  }
];

window.QUIZ_DATA.sets[7] = [
  {
    id: "set7-q1", setId: 7, section: "grammar", skill: "future perfect",
    difficulty: "advanced",
    question: "By next year, our school volunteer club _____ over five hundred hours of community service.",
    passageId: null,
    options: ["will complete", "will have completed", "completes", "is completing"],
    correctAnswer: 1,
    explanationThai: "Future Perfect (will have + V3) ใช้แสดงการกระทำที่จะเสร็จสมบูรณ์ก่อนถึงจุดเวลาหนึ่งในอนาคต ในที่นี้คือ 'by next year' จึงใช้ will have completed",
    wrongAnswerExplanationsThai: [
      "will complete เป็น Future Simple ไม่ได้เน้นว่าจะเสร็จสิ้นก่อนถึงจุดเวลาที่ระบุ",
      "",
      "completes เป็น Present Simple ผิดกาลโดยสิ้นเชิงสำหรับเหตุการณ์ในอนาคต",
      "is completing เป็น Present Continuous ผิดกาลเช่นกัน ไม่สื่อถึงอนาคต"
    ],
    tipThai: "สังเกตวลี 'by + เวลาในอนาคต' เป็นสัญญาณของ Future Perfect: will have + V3"
  },
  {
    id: "set7-q2", setId: 7, section: "grammar", skill: "causative (have something done)",
    difficulty: "advanced",
    question: "The community center's roof was damaged, so the volunteers decided to _____ by a professional contractor before the charity event next month.",
    passageId: null,
    options: ["repair it", "repairing it", "be repaired it", "have it repaired"],
    correctAnswer: 3,
    explanationThai: "โครงสร้าง Causative 'have + กรรม + V3' ใช้เมื่อมีคนอื่นทำสิ่งนั้นให้เรา ในที่นี้ช่างมืออาชีพเป็นผู้ซ่อม จึงใช้ have it repaired",
    wrongAnswerExplanationsThai: [
      "repair it เป็น Active Voice แปลว่าอาสาสมัครซ่อมเอง ขัดแย้งกับ 'by a professional contractor'",
      "repairing it ผิดหลักไวยากรณ์ ไม่สามารถตามหลัง decided to ในรูปแบบนี้ได้",
      "be repaired it เป็นโครงสร้างที่ผิดหลักไวยากรณ์ มีกรรมซ้ำซ้อนไม่ถูกต้อง",
      ""
    ],
    tipThai: "โครงสร้าง Causative: have + สิ่งของ + V3 ใช้เมื่อมีคนอื่นทำสิ่งนั้นให้เรา"
  },
  {
    id: "set7-q3", setId: 7, section: "grammar", skill: "reduced relative clause (participle)",
    difficulty: "advanced",
    question: "Volunteers _____ litter from the riverbank were praised by the local community.",
    passageId: null,
    options: ["who they collected", "whom collecting", "collecting", "which collected"],
    correctAnswer: 2,
    explanationThai: "Reduced Relative Clause ใช้ V-ing แทน who/which + were + V-ing เมื่อประธานเป็นผู้กระทำเอง (active) ในที่นี้คืออาสาสมัครที่กำลังเก็บขยะ จึงใช้ collecting",
    wrongAnswerExplanationsThai: [
      "who they collected มีประธานซ้ำซ้อนผิดหลักไวยากรณ์",
      "whom collecting เป็นการรวมโครงสร้างที่ไม่ถูกต้อง ผิดหลักไวยากรณ์",
      "",
      "which collected ใช้ which กับบุคคล (volunteers) ซึ่งผิดหลัก ต้องใช้กับสิ่งของเท่านั้น"
    ],
    tipThai: "Reduced Relative Clause แบบ Active ใช้ V-ing แทน who/which + be + V-ing"
  },
  {
    id: "set7-q4", setId: 7, section: "grammar", skill: "mixed conditional",
    difficulty: "challenge",
    question: "If she _____ harder for the exam last month, she would be in the honors class now.",
    passageId: null,
    options: ["had studied", "studied", "would study", "studies"],
    correctAnswer: 0,
    explanationThai: "Mixed Conditional นี้ใช้เงื่อนไขที่ตรงข้ามกับความจริงในอดีต (if-clause: had studied) ร่วมกับผลลัพธ์ในปัจจุบัน (main clause: would be now) จึงต้องใช้ had studied ใน if-clause",
    wrongAnswerExplanationsThai: [
      "",
      "studied เป็น Past Simple ไม่ใช่ Past Perfect ที่จำเป็นสำหรับเงื่อนไขผสมที่อ้างถึงอดีต",
      "would study ใช้ในประโยคหลัก ไม่ใช้ใน if-clause",
      "studies เป็น Present Simple ผิดกาลโดยสิ้นเชิงสำหรับเงื่อนไขในอดีต"
    ],
    tipThai: "Mixed Conditional ผสมระหว่างเงื่อนไขในอดีต (had + V3) กับผลลัพธ์ในปัจจุบัน (would + V.infinitive)"
  },
  {
    id: "set7-q5", setId: 7, section: "grammar", skill: "reported speech (imperatives/requests)",
    difficulty: "advanced",
    question: "\"Please remember to bring gloves for the clean-up,\" the organizer told the volunteers. The organizer told the volunteers _____.",
    passageId: null,
    options: ["please remember to bring gloves for the clean-up", "to remember to bring gloves for the clean-up", "remembering to bring gloves for the clean-up", "that remember to bring gloves for the clean-up"],
    correctAnswer: 1,
    explanationThai: "การรายงานประโยคคำสั่ง/คำขอร้อง (Reported Imperative) ใช้โครงสร้าง told + person + to + V.infinitive จึงใช้ to remember to bring gloves",
    wrongAnswerExplanationsThai: [
      "คงรูปประโยคคำสั่งเดิมไว้ทั้งหมด (please remember) ผิดหลัก Reported Speech",
      "",
      "remembering เป็นรูป gerund ไม่ใช้ในการรายงานคำสั่ง",
      "that remember ผสมโครงสร้าง that-clause กับกริยารูปพื้นฐานอย่างผิดหลัก"
    ],
    tipThai: "Reported Imperative ใช้โครงสร้าง told/asked + บุคคล + to + V.infinitive"
  },
  {
    id: "set7-q6", setId: 7, section: "grammar", skill: "sentence inversion (negative adverbials)",
    difficulty: "challenge",
    question: "_____ how much impact their small community project would have on the whole neighborhood.",
    passageId: null,
    options: ["Never before the volunteers did realize", "Never before the volunteers realized", "Never before realized the volunteers", "Never before did the volunteers realize"],
    correctAnswer: 3,
    explanationThai: "เมื่อวางคำปฏิเสธ (negative adverbial) เช่น Never before ไว้หน้าประโยค ต้องกลับโครงสร้างเป็น Auxiliary + Subject + Verb (Inversion) จึงใช้ Never before did the volunteers realize",
    wrongAnswerExplanationsThai: [
      "ลำดับคำผิด เพราะ did ต้องอยู่ก่อนประธาน ไม่ใช่หลังประธาน",
      "ไม่มีการกลับโครงสร้างประโยค (inversion) ทั้งที่ขึ้นต้นด้วยคำปฏิเสธ ผิดหลักไวยากรณ์",
      "วางกริยา realized ไว้หน้าประธานโดยไม่มี auxiliary do ที่ถูกต้อง ผิดรูปแบบ inversion",
      ""
    ],
    tipThai: "เมื่อประโยคขึ้นต้นด้วยคำปฏิเสธ เช่น Never, Rarely, Seldom, Not until ต้องกลับโครงสร้างเป็น Auxiliary + Subject + Verb"
  },
  {
    id: "set7-q7", setId: 7, section: "grammar", skill: "either...or structure",
    difficulty: "advanced",
    question: "For the community project, students can _____ collect donations or help distribute food to families in need.",
    passageId: null,
    options: ["either", "neither", "both", "not only"],
    correctAnswer: 0,
    explanationThai: "either...or ใช้เสนอทางเลือกสองทาง (เก็บเงินบริจาค หรือ ช่วยแจกอาหาร) จึงใช้ either คู่กับ or",
    wrongAnswerExplanationsThai: [
      "",
      "neither ต้องคู่กับ nor ไม่ใช่ or",
      "both ต้องคู่กับ and ไม่ใช่ or และความหมายเปลี่ยนเป็นทำทั้งสองอย่าง",
      "not only ต้องคู่กับ but also ไม่ใช่ or"
    ],
    tipThai: "จำคู่คำเชื่อมให้แม่นยำ: either...or (ทางเลือก), neither...nor (ปฏิเสธทั้งคู่)"
  },
  {
    id: "set7-q8", setId: 7, section: "grammar", skill: "so vs such (confused structures)",
    difficulty: "advanced",
    question: "The volunteer project was _____ successful event that the school decided to make it an annual tradition.",
    passageId: null,
    options: ["so", "too", "such a", "very"],
    correctAnswer: 2,
    explanationThai: "โครงสร้าง such a + adjective + noun + that ใช้แสดงผลลัพธ์เมื่อมีคำนามตามหลัง (a successful event) จึงต้องใช้ such a",
    wrongAnswerExplanationsThai: [
      "so ใช้คู่กับคำคุณศัพท์/กริยาวิเศษณ์โดยตรง (so successful) ไม่ใช้นำหน้าคำนามวลี (a successful event)",
      "too มักใช้กับโครงสร้าง too...to ไม่ใช่ too...that ในการแสดงผลลัพธ์แบบนี้",
      "",
      "very ไม่สามารถใช้ร่วมกับโครงสร้างผลลัพธ์ ...that ได้ ต้องใช้ so/such"
    ],
    tipThai: "จำกฎ: so + adj/adv, such + a/an + adj + noun เมื่อใช้ในโครงสร้างผลลัพธ์ (result clause) ...that"
  },
  {
    id: "set7-q9", setId: 7, section: "vocabulary", skill: "collocations (citizenship)",
    difficulty: "advanced",
    question: "Every student who volunteers can _____ to the community, no matter how small the task may seem.",
    passageId: null,
    options: ["do a contribution", "make a contribution", "take a contribution", "have a contribution"],
    correctAnswer: 1,
    explanationThai: "make a contribution เป็น collocation ที่ถูกต้อง แปลว่า ทำคุณประโยชน์/มีส่วนร่วม",
    wrongAnswerExplanationsThai: [
      "do a contribution ไม่ใช่ collocation ที่ถูกต้องในภาษาอังกฤษ",
      "",
      "take a contribution ไม่ใช่สำนวนที่ถูกต้อง",
      "have a contribution ไม่ใช่ collocation มาตรฐานที่ใช้กับคำนามนี้"
    ],
    tipThai: "จำ collocation: make a contribution, make an effort, make a difference"
  },
  {
    id: "set7-q10", setId: 7, section: "vocabulary", skill: "phrasal verbs (participation)",
    difficulty: "advanced",
    question: "More than a hundred students decided to _____ the neighborhood clean-up campaign this weekend.",
    passageId: null,
    options: ["take part in", "take off", "take after", "take over"],
    correctAnswer: 0,
    explanationThai: "take part in แปลว่า เข้าร่วม ตรงกับบริบทการเข้าร่วมกิจกรรมทำความสะอาดชุมชน",
    wrongAnswerExplanationsThai: [
      "",
      "take off แปลว่า ถอด(เสื้อผ้า)/ออกเดินทางกะทันหัน/เครื่องบินขึ้น ไม่เกี่ยวข้องกับบริบทนี้",
      "take after แปลว่า มีลักษณะคล้ายญาติพี่น้อง ไม่เกี่ยวข้องกับบริบทนี้",
      "take over แปลว่า เข้าควบคุม/รับช่วงต่อ ไม่ตรงกับความหมายที่ต้องการ"
    ],
    tipThai: "phrasal verb ด้านการมีส่วนร่วม: take part in = เข้าร่วม"
  },
  {
    id: "set7-q11", setId: 7, section: "vocabulary", skill: "word form (adjective/adverb/noun)",
    difficulty: "advanced",
    question: "Volunteers are expected to act _____ when handling donations meant for families in need.",
    passageId: null,
    options: ["responsibility", "responsible", "responsibleness", "responsibly"],
    correctAnswer: 3,
    explanationThai: "ช่องว่างต้องการคำกริยาวิเศษณ์ (adverb) ขยายกริยา act จึงต้องใช้ responsibly",
    wrongAnswerExplanationsThai: [
      "responsibility เป็นคำนาม ไม่สามารถขยายคำกริยาได้",
      "responsible เป็นคำคุณศัพท์ ไม่สามารถขยายคำกริยา act ได้โดยตรงในตำแหน่งนี้",
      "responsibleness ไม่ใช่คำศัพท์ที่ถูกต้องในภาษาอังกฤษ",
      ""
    ],
    tipThai: "เมื่อขยายคำกริยา ต้องใช้คำกริยาวิเศษณ์ (adverb) ที่ลงท้ายด้วย -ly"
  },
  {
    id: "set7-q12", setId: 7, section: "vocabulary", skill: "synonyms (health and well-being)",
    difficulty: "advanced",
    question: "Doctors agree that regular exercise and enough sleep are _____ for teenagers' overall health and academic performance.",
    passageId: null,
    options: ["harmful", "irrelevant", "beneficial", "optional"],
    correctAnswer: 2,
    explanationThai: "beneficial แปลว่า เป็นประโยชน์ ตรงกับบริบทที่แพทย์เห็นพ้องว่าการออกกำลังกายและการนอนหลับเพียงพอส่งผลดีต่อสุขภาพและการเรียน",
    wrongAnswerExplanationsThai: [
      "harmful แปลว่า เป็นอันตราย ความหมายตรงข้ามกับบริบท",
      "irrelevant แปลว่า ไม่เกี่ยวข้อง ขัดแย้งกับการที่แพทย์เห็นพ้องว่าสำคัญ",
      "",
      "optional แปลว่า ไม่จำเป็นต้องทำ ขัดแย้งกับน้ำเสียงที่บ่งบอกว่าสำคัญ"
    ],
    tipThai: "beneficial เป็นคำพ้องความหมายกับ helpful, advantageous ที่มักออกสอบในหัวข้อสุขภาพ"
  },
  {
    id: "set7-q13", setId: 7, section: "vocabulary", skill: "nuanced vocabulary (citizenship)",
    difficulty: "advanced",
    question: "A responsible citizen should be _____ of different opinions and cultures, actively trying to understand rather than simply ignoring them.",
    passageId: null,
    options: ["indifferent", "tolerant", "suspicious", "careless"],
    correctAnswer: 1,
    explanationThai: "tolerant แปลว่า ยอมรับ/เปิดใจกว้างต่อความแตกต่าง ตรงกับพฤติกรรมของพลเมืองที่ดีที่พยายามทำความเข้าใจผู้อื่น",
    wrongAnswerExplanationsThai: [
      "indifferent แปลว่า ไม่สนใจ/เฉยเมย ขัดแย้งกับ 'actively trying to understand'",
      "",
      "suspicious แปลว่า ระแวงสงสัย ตรงข้ามกับการเปิดรับความแตกต่าง",
      "careless แปลว่า ไม่ใส่ใจ/สะเพร่า ไม่เกี่ยวข้องและมีความหมายเชิงลบ"
    ],
    tipThai: "ในบริบทความเป็นพลเมืองดี (citizenship) คำว่า tolerant หมายถึงการเปิดใจยอมรับความแตกต่าง"
  },
  {
    id: "set7-q14", setId: 7, section: "conversation", skill: "interview responses",
    difficulty: "advanced",
    question: "Interviewer: \"Why do you want to join our school's volunteer program?\" Which is the strongest answer?",
    passageId: null,
    options: ["Because my parents told me to join.", "I don't know, I just filled in the application.", "Because it looks good on my transcript.", "I want to help my community and develop skills like teamwork and responsibility."],
    correctAnswer: 3,
    explanationThai: "คำตอบที่ดีควรแสดงแรงจูงใจที่แท้จริงและทักษะที่จะได้พัฒนา เช่น การช่วยเหลือชุมชนและพัฒนาทักษะการทำงานเป็นทีมและความรับผิดชอบ",
    wrongAnswerExplanationsThai: [
      "การอ้างว่าพ่อแม่บอกให้ทำ แสดงถึงการไม่มีแรงจูงใจส่วนตัว",
      "การตอบว่าไม่รู้ แสดงถึงการไม่เตรียมตัวมาสัมภาษณ์",
      "การให้เหตุผลเพื่อประโยชน์ส่วนตัวล้วนๆ (transcript) อาจฟังดูไม่จริงใจสำหรับผู้สัมภาษณ์",
      ""
    ],
    tipThai: "คำตอบสัมภาษณ์ที่ดีควรแสดงแรงจูงใจที่แท้จริงและเชื่อมโยงกับคุณค่าที่จะได้รับ"
  },
  {
    id: "set7-q15", setId: 7, section: "conversation", skill: "hedging opinions in discussion",
    difficulty: "advanced",
    question: "During a class discussion about whether community service should be mandatory, Ket wants to express disagreement carefully rather than sound too blunt. Which is the best sentence?",
    passageId: null,
    options: ["I understand the benefits, but I'm not entirely convinced it should be mandatory for everyone.", "That's completely wrong, it shouldn't be mandatory.", "You clearly haven't thought this through.", "Mandatory service is a stupid idea."],
    correctAnswer: 0,
    explanationThai: "'I understand the benefits, but I'm not entirely convinced...' เป็นวิธีแสดงความไม่เห็นด้วยอย่างมีชั้นเชิง โดยยอมรับข้อดีก่อนแล้วจึงเสนอความเห็นต่างอย่างนุ่มนวล",
    wrongAnswerExplanationsThai: [
      "",
      "'That's completely wrong' เป็นการปฏิเสธแบบเด็ดขาดและรุนแรงเกินไปสำหรับการอภิปรายในชั้นเรียน",
      "'You clearly haven't thought this through' เป็นการโจมตีส่วนบุคคล ไม่เหมาะสม",
      "'Mandatory service is a stupid idea' ใช้คำหยาบคายและไม่ให้เกียรติความเห็นผู้อื่น"
    ],
    tipThai: "การแสดงความเห็นต่างอย่างมีชั้นเชิง ควรเริ่มด้วยการยอมรับมุมมองอีกฝ่ายก่อน เช่น I understand...but..."
  },
  {
    id: "set7-q16", setId: 7, section: "conversation", skill: "online communication (netiquette)",
    difficulty: "advanced",
    question: "In an online class forum, Beam disagrees with a classmate's comment about a project. Which response shows appropriate netiquette?",
    passageId: null,
    options: ["lol you're clueless, read the instructions again", "This comment is completely useless, delete it.", "I see it differently - could we look at the instructions together to clarify?", "Wow, did you even read the assignment??"],
    correctAnswer: 2,
    explanationThai: "การตอบกลับอย่างสุภาพในฟอรัมออนไลน์ควรแสดงความเห็นต่างอย่างสร้างสรรค์ พร้อมชวนกันตรวจสอบข้อมูลร่วมกัน",
    wrongAnswerExplanationsThai: [
      "การใช้คำแบบไม่เป็นทางการและดูถูก ('you're clueless') ไม่เหมาะสมกับการสื่อสารในฟอรัมเรียน",
      "การบอกให้ลบความเห็นทันทีโดยไม่ให้เหตุผล เป็นการสื่อสารที่รุนแรงและไม่สร้างสรรค์",
      "",
      "น้ำเสียงเสียดสี ('Wow, did you even read...??') ไม่เหมาะสมกับมารยาทการสื่อสารออนไลน์"
    ],
    tipThai: "การสื่อสารออนไลน์ที่ดีควรแสดงความเห็นต่างอย่างสุภาพและสร้างสรรค์ ไม่ใช้น้ำเสียงเสียดสีหรือดูถูก"
  },
  {
    id: "set7-q17", setId: 7, section: "conversation", skill: "planning and diplomatic suggestions",
    difficulty: "advanced",
    question: "A group is planning a presentation on community service, and one member suggests a rushed plan. Which response tactfully suggests improvement while keeping the discussion positive?",
    passageId: null,
    options: ["That plan won't work, forget it.", "I hate that idea.", "Whatever you want, I don't care.", "That's a good start - maybe we could also add some real examples to make it stronger?"],
    correctAnswer: 3,
    explanationThai: "การให้ข้อเสนอแนะที่ดีควรเริ่มด้วยการชื่นชมสิ่งที่มีอยู่แล้วก่อน แล้วจึงเสนอแนวทางเพิ่มเติมอย่างสร้างสรรค์",
    wrongAnswerExplanationsThai: [
      "การปฏิเสธแผนทันทีโดยไม่ให้เหตุผลหรือทางเลือก ไม่สร้างสรรค์",
      "การแสดงอารมณ์เกลียดชังต่อความคิดของเพื่อน ไม่เหมาะสมในการทำงานกลุ่ม",
      "การเพิกเฉยและไม่แสดงความคิดเห็น ไม่ช่วยพัฒนางานกลุ่มให้ดีขึ้น",
      ""
    ],
    tipThai: "การเสนอแนะในการทำงานกลุ่มควรเริ่มด้วยคำชม แล้วต่อด้วยข้อเสนอแนะเพิ่มเติม เช่น That's a good start, maybe we could also..."
  },
  {
    id: "set7-q18", setId: 7, section: "cloze", skill: "error identification: infinitive after question word",
    difficulty: "challenge",
    question: "Find the segment that contains a grammatical error: \"Community service teaches students valuable life skills, (A) including how to working with (B) people from different backgrounds (C) effectively (D).\"",
    passageId: null,
    options: ["Community service teaches students valuable life skills,", "including how to working with", "people from different backgrounds", "effectively."],
    correctAnswer: 1,
    explanationThai: "ส่วน (B) 'how to working with' ผิดหลักไวยากรณ์ เพราะโครงสร้าง how + to + V.infinitive (base form) ต้องใช้ 'how to work with' ไม่ใช่ 'how to working with'",
    wrongAnswerExplanationsThai: [
      "ส่วน (A) ถูกต้องตามหลักไวยากรณ์แล้ว",
      "",
      "ส่วน (C) ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (D) ถูกต้องตามหลักไวยากรณ์แล้ว"
    ],
    tipThai: "โครงสร้าง how/what/where + to + Verb ช่องที่ 1 (infinitive) เสมอ ไม่ใช้รูป -ing"
  },
  {
    id: "set7-q19", setId: 7, section: "cloze", skill: "error identification: determiners with singular nouns",
    difficulty: "challenge",
    question: "Find the segment that contains a grammatical error: \"Every students (A) who volunteered for the event (B) received a certificate of appreciation (C) from the school principal (D).\"",
    passageId: null,
    options: ["Every students", "who volunteered for the event", "received a certificate of appreciation", "from the school principal"],
    correctAnswer: 0,
    explanationThai: "ส่วน (A) 'Every students' ผิดหลักไวยากรณ์ เพราะ every ต้องตามด้วยคำนามเอกพจน์เสมอ (every + singular noun) ต้องแก้เป็น 'Every student'",
    wrongAnswerExplanationsThai: [
      "",
      "ส่วน (B) ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (C) ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (D) ถูกต้องตามหลักไวยากรณ์แล้ว"
    ],
    tipThai: "คำว่า every, each ต้องตามด้วยคำนามเอกพจน์เสมอ แม้ความหมายจะครอบคลุมหลายคนก็ตาม"
  },
  {
    id: "set7-q20", setId: 7, section: "cloze", skill: "cloze: linking words (example/support)",
    difficulty: "challenge",
    question: "Volunteering offers many benefits for teenagers. _____, it helps them build confidence and learn practical skills such as teamwork and communication.",
    passageId: null,
    options: ["However", "Otherwise", "For example", "Nevertheless"],
    correctAnswer: 2,
    explanationThai: "'For example' ใช้เชื่อมประโยคที่ยกตัวอย่างสนับสนุนแนวคิดกว้างๆ ก่อนหน้า (ประโยชน์ของการเป็นอาสาสมัคร)",
    wrongAnswerExplanationsThai: [
      "'However' ใช้แสดงความขัดแย้ง แต่ประโยคนี้สนับสนุน/ต่อยอดความคิดเดิม ไม่ใช่ความขัดแย้ง",
      "'Otherwise' ใช้แสดงเงื่อนไขทางเลือก ไม่เหมาะกับบริบทนี้",
      "",
      "'Nevertheless' ใช้แสดงความขัดแย้ง/การยอมรับ ไม่เหมาะเพราะประโยคนี้ยังคงแนวคิดเชิงบวกเดิม"
    ],
    tipThai: "เมื่อประโยคถัดไปเป็นตัวอย่างหรือรายละเอียดสนับสนุนแนวคิดกว้างๆ ก่อนหน้า ให้ใช้ For example, For instance"
  },
  {
    id: "set7-q21", setId: 7, section: "reading", skill: "cause and effect",
    difficulty: "advanced",
    question: "According to the passage, what effect does balancing service commitments with schoolwork have on students?",
    passageId: "set7-p1",
    options: ["It causes them to quit their volunteer activities.", "It makes them perform worse in school.", "It has no effect on their academic performance.", "It often helps them manage their time more effectively."],
    correctAnswer: 3,
    explanationThai: "บทความระบุว่า 'balancing service commitments with schoolwork requires careful planning' ซึ่งนำไปสู่การที่นักเรียนบริหารเวลาได้อย่างมีประสิทธิภาพมากขึ้น",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้กล่าวว่านักเรียนเลิกทำกิจกรรมอาสาสมัคร",
      "ขัดแย้งกับบทความที่กล่าวว่านักเรียนรู้สึกมีแรงจูงใจมากขึ้น ไม่ใช่ทำผลการเรียนแย่ลง",
      "ขัดแย้งโดยตรงกับบทความที่ระบุว่ามีผลต่อการบริหารเวลาและผลการเรียน",
      ""
    ],
    tipThai: "คำถามเหตุและผลต้องหาความเชื่อมโยงที่ระบุไว้ตรงๆ ในบทความระหว่างสาเหตุกับผลลัพธ์"
  },
  {
    id: "set7-q22", setId: 7, section: "reading", skill: "inference",
    difficulty: "challenge",
    question: "What can be inferred about a teenager who organizes a donation drive, according to the passage?",
    passageId: "set7-p1",
    options: ["They are likely to gain more confidence in their ability to make a difference.", "They will definitely become a teacher in the future.", "They are only doing it to fulfill a school requirement.", "They probably dislike working with other people."],
    correctAnswer: 0,
    explanationThai: "จากบทความที่กล่าวว่านักเรียนที่ช่วยเหลือชุมชน 'learns that even young people can make a meaningful difference' จึงอนุมานได้ว่าพวกเขามีแนวโน้มที่จะมั่นใจมากขึ้นในความสามารถของตนเอง",
    wrongAnswerExplanationsThai: [
      "",
      "ไม่มีข้อมูลสนับสนุนว่าพวกเขาจะเป็นครูในอนาคตอย่างแน่นอน เป็นการคาดเดาที่ไม่มีหลักฐาน",
      "ขัดแย้งกับบทความที่เน้นย้ำถึงการเติบโตส่วนบุคคลและแรงจูงใจ ไม่ใช่แค่การทำตามข้อกำหนด",
      "ขัดแย้งกับบทความที่กล่าวว่าการทำงานอาสาสมัครช่วยพัฒนาทักษะการสื่อสารและความเห็นอกเห็นใจผ่านการทำงานร่วมกับผู้อื่น"
    ],
    tipThai: "คำถามอนุมานให้ใช้เหตุผลเชื่อมโยงจากข้อมูลในบทความ ไม่ใช่การเดาแบบไม่มีหลักฐาน"
  },
  {
    id: "set7-q23", setId: 7, section: "reading", skill: "inference",
    difficulty: "challenge",
    question: "What does the passage suggest about the long-term impact of community service on students?",
    passageId: "set7-p1",
    options: ["It has no lasting effect once students leave school.", "It only benefits students while they are still in school.", "It can shape students' attitudes and behavior well into adulthood.", "It guarantees that students will become community leaders."],
    correctAnswer: 2,
    explanationThai: "บทความระบุว่าการเปลี่ยนแปลงทัศนคติจากการทำงานอาสาสมัคร 'often stays with students long after they leave school' แสดงว่าอาสาสมัครสามารถส่งผลต่อพฤติกรรมและทัศนคติของนักเรียนไปจนถึงวัยผู้ใหญ่",
    wrongAnswerExplanationsThai: [
      "ขัดแย้งโดยตรงกับประโยคที่ระบุว่าผลกระทบยังคงอยู่หลังจากออกจากโรงเรียนไปแล้ว",
      "ขัดแย้งกับบทความที่เน้นย้ำถึงผลกระทบระยะยาวเกินกว่าช่วงเวลาในโรงเรียน",
      "",
      "เป็นการกล่าวเกินจริง บทความใช้คำว่า 'shaping the kind of adults they become' ไม่ได้รับประกันว่าทุกคนจะเป็นผู้นำชุมชน"
    ],
    tipThai: "คำถามอนุมานเกี่ยวกับผลระยะยาว ให้สังเกตคำที่บ่งบอกความต่อเนื่องของเวลา เช่น 'long after,' 'stays with'"
  },
  {
    id: "set7-q24", setId: 7, section: "reading", skill: "conclusion",
    difficulty: "advanced",
    question: "Which conclusion is best supported by the passage as a whole?",
    passageId: "set7-p1",
    options: ["Community service should replace all traditional classroom learning.", "Community service provides teenagers with valuable skills and personal growth beyond academic requirements.", "Only students with high grades should be allowed to volunteer.", "Community service is only beneficial for students planning to become social workers."],
    correctAnswer: 1,
    explanationThai: "เมื่อพิจารณาบทความทั้งหมด ข้อสรุปที่ได้รับการสนับสนุนมากที่สุดคือ การทำงานอาสาสมัครมอบทักษะที่มีคุณค่าและการเติบโตส่วนบุคคลแก่วัยรุ่นเกินกว่าข้อกำหนดทางวิชาการ",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้เสนอให้แทนที่การเรียนในห้องเรียนทั้งหมดด้วยกิจกรรมอาสาสมัคร",
      "",
      "ไม่มีการกล่าวถึงข้อจำกัดเรื่องเกรดในการเข้าร่วมกิจกรรมอาสาสมัครในบทความ",
      "เป็นการสรุปที่แคบเกินไป บทความกล่าวถึงประโยชน์สำหรับนักเรียนทั่วไป ไม่ใช่เฉพาะผู้ที่จะเป็นนักสังคมสงเคราะห์"
    ],
    tipThai: "ข้อสรุปที่ดีต้องครอบคลุมประเด็นสำคัญทั้งหมดของบทความ ไม่ใช่แค่รายละเอียดเดียว"
  },
  {
    id: "set7-q25", setId: 7, section: "reading", skill: "vocabulary in context",
    difficulty: "advanced",
    question: "In the passage, the word 'resilience' is closest in meaning to _____.",
    passageId: "set7-p1",
    options: ["kindness", "curiosity", "popularity", "the ability to recover from difficulties"],
    correctAnswer: 3,
    explanationThai: "คำว่า resilience ในบริบทนี้หมายถึง ความสามารถในการฟื้นตัวจากปัญหาหรืออุปสรรค (the ability to recover from difficulties) ซึ่งสอดคล้องกับบริบทการแก้ปัญหาที่มีทรัพยากรจำกัด",
    wrongAnswerExplanationsThai: [
      "kindness แปลว่า ความเมตตา ไม่เกี่ยวข้องกับการเผชิญและฟื้นตัวจากปัญหา",
      "curiosity แปลว่า ความอยากรู้อยากเห็น ไม่ตรงกับความหมายของ resilience",
      "popularity แปลว่า ความเป็นที่นิยม ไม่เกี่ยวข้องกับบริบทนี้เลย",
      ""
    ],
    tipThai: "ใช้บริบทรอบข้าง (เช่น 'facing real problems...strengthens problem-solving abilities and resilience') เพื่อเดาความหมายของคำศัพท์"
  }
];
