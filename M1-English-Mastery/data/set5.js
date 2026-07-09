window.QUIZ_DATA = window.QUIZ_DATA || { sets: {}, passages: {} };

window.QUIZ_DATA.passages[5] = [
  {
    id: "set5-p1",
    setId: 5,
    title: "Using Artificial Intelligence Wisely",
    text: "Artificial intelligence, or AI, has quickly become part of everyday student life. Many learners now use AI tools to summarize articles, translate difficult vocabulary, or even generate ideas for essays. These tools can save time and make studying more efficient, but they also raise an important question: how much should students rely on them?\n\nTeachers have noticed that some students copy AI-generated answers without fully understanding the material. When exam time comes, these students often struggle because they never actually practiced the skills themselves. On the other hand, students who use AI carefully - checking its answers, questioning its suggestions, and using it only as a starting point - tend to develop stronger critical thinking skills. They treat AI as a study partner rather than a replacement for their own effort.\n\nEducation experts suggest a simple guideline: use AI to support learning, not to avoid it. For example, instead of asking an AI to write an entire essay, a student might ask it to explain a difficult concept in simpler terms and then write the essay independently. This approach keeps the responsibility for learning where it belongs - with the student.\n\nAs AI becomes more powerful and widely available, schools will need to teach students not just how to use these tools, but when to rely on their own thinking instead. The students who benefit most from AI in the future will likely be those who learned early on to use it wisely rather than depend on it blindly."
  }
];

window.QUIZ_DATA.sets[5] = [
  {
    id: "set5-q1", setId: 5, section: "grammar", skill: "present perfect continuous",
    difficulty: "advanced",
    question: "She _____ for the entrance exam for three months, so she feels well-prepared.",
    passageId: null,
    options: ["has been studying", "studied", "is studying", "had studied"],
    correctAnswer: 0,
    explanationThai: "ประโยคนี้ใช้ Present Perfect Continuous (has/have been + V-ing) เพื่อเน้นการกระทำที่เริ่มในอดีตและดำเนินต่อเนื่องมาจนถึงปัจจุบัน สังเกตคำบอกเวลา 'for three months' และผลลัพธ์ในปัจจุบัน 'feels well-prepared' จึงต้องใช้ has been studying",
    wrongAnswerExplanationsThai: [
      "",
      "studied เป็น Past Simple ไม่แสดงความต่อเนื่องมาถึงปัจจุบัน",
      "is studying เป็น Present Continuous ไม่ได้บอกระยะเวลาที่ทำต่อเนื่องมาตั้งแต่อดีต",
      "had studied เป็น Past Perfect ใช้กับเหตุการณ์ที่เกิดก่อนอดีตอีกจุดหนึ่ง ไม่ตรงกับบริบทที่พูดถึงปัจจุบัน"
    ],
    tipThai: "เมื่อเห็นคำว่า for/since คู่กับผลลัพธ์ในปัจจุบัน ให้นึกถึง Present Perfect (Continuous) ทันที"
  },
  {
    id: "set5-q2", setId: 5, section: "grammar", skill: "passive voice (future simple)",
    difficulty: "advanced",
    question: "This bridge _____ by highly skilled engineers before it opens to traffic next month.",
    passageId: null,
    options: ["will inspect", "is inspecting", "will be inspected", "inspects"],
    correctAnswer: 2,
    explanationThai: "ประโยคใช้ Passive Voice ในอนาคต (will be + V3) เพราะสะพานเป็นผู้ถูกกระทำ (ถูกตรวจสอบ) ไม่ใช่ผู้กระทำเอง จึงต้องใช้ will be inspected",
    wrongAnswerExplanationsThai: [
      "will inspect เป็น Active Voice ซึ่งหมายความว่าสะพานเป็นผู้ตรวจสอบเอง ผิดความหมาย",
      "is inspecting เป็น Present Continuous Active ไม่ตรงกับทั้งกาลอนาคตและไม่ใช่ Passive Voice",
      "",
      "inspects เป็น Present Simple Active ผิดทั้งกาลและ voice"
    ],
    tipThai: "ถ้าประธานเป็นผู้ถูกกระทำ ให้ใช้ Passive Voice: will be + V3"
  },
  {
    id: "set5-q3", setId: 5, section: "grammar", skill: "relative clause (whose)",
    difficulty: "advanced",
    question: "The scientist _____ discovery changed modern medicine received the Nobel Prize.",
    passageId: null,
    options: ["who", "whose", "which", "that"],
    correctAnswer: 1,
    explanationThai: "ใช้ whose เพื่อแสดงความเป็นเจ้าของ เชื่อมระหว่าง scientist กับ discovery (การค้นพบของนักวิทยาศาสตร์คนนั้น) โครงสร้าง whose + noun ทำหน้าที่เป็นคำสรรพนามแสดงความเป็นเจ้าของในอนุประโยค",
    wrongAnswerExplanationsThai: [
      "who ใช้แทนประธาน/กรรมที่เป็นบุคคล ไม่ได้แสดงความเป็นเจ้าของ",
      "",
      "which ใช้กับสิ่งของ ไม่ใช่บุคคล และไม่แสดงความเป็นเจ้าของ",
      "that ไม่สามารถแสดงความเป็นเจ้าของได้"
    ],
    tipThai: "เมื่อประโยคต้องการแสดงความเป็นเจ้าของระหว่างคนกับสิ่งของ ให้ใช้ whose"
  },
  {
    id: "set5-q4", setId: 5, section: "grammar", skill: "third conditional",
    difficulty: "challenge",
    question: "If the team _____ more carefully, they would not have made that mistake during the competition.",
    passageId: null,
    options: ["planned", "would plan", "plans", "had planned"],
    correctAnswer: 3,
    explanationThai: "Third Conditional ใช้พูดถึงเหตุการณ์สมมติในอดีตที่ตรงข้ามกับความจริง โครงสร้างคือ If + past perfect, would have + V3 ในที่นี้ if-clause ต้องใช้ had planned",
    wrongAnswerExplanationsThai: [
      "planned เป็น Past Simple ไม่ใช่ Past Perfect ที่ third conditional ต้องการ",
      "would plan ใช้ในประโยคหลัก (main clause) ไม่ใช้ใน if-clause",
      "plans เป็น Present Simple ผิดกาลโดยสิ้นเชิงสำหรับเหตุการณ์ในอดีต",
      ""
    ],
    tipThai: "สังเกตประโยคหลักที่มี would not have + V3 แสดงว่าเป็น Third Conditional ต้องใช้ had + V3 ใน if-clause"
  },
  {
    id: "set5-q5", setId: 5, section: "grammar", skill: "reported speech (questions)",
    difficulty: "advanced",
    question: "\"Why are you late again?\" the teacher asked Somchai. The teacher asked Somchai _____.",
    passageId: null,
    options: ["why are you late again", "why you are late again", "why he was late again", "why was he late again"],
    correctAnswer: 2,
    explanationThai: "ในการรายงานคำถาม (Reported Questions) ต้องเปลี่ยนลำดับคำเป็นประโยคบอกเล่า (Subject + Verb) ไม่ใช่โครงสร้างคำถาม และต้องเปลี่ยนสรรพนาม you เป็น he และถอยกาล (backshift) are เป็น was เพราะกริยาในประโยคหลัก (asked) เป็นอดีต",
    wrongAnswerExplanationsThai: [
      "คงโครงสร้างคำถามและสรรพนาม you ไว้ ไม่ถูกต้องตามกฎ Reported Speech",
      "เปลี่ยนลำดับคำแล้วแต่ยังใช้ you และไม่ backshift กาลจาก are เป็น was",
      "",
      "ยังคงโครงสร้างคำถาม (was he) แม้จะเปลี่ยนสรรพนามและกาลแล้ว"
    ],
    tipThai: "Reported Question ต้องเรียงประโยคแบบบอกเล่า และเปลี่ยนกาล/สรรพนามให้สอดคล้องกับผู้พูดรายงาน"
  },
  {
    id: "set5-q6", setId: 5, section: "grammar", skill: "tag questions with negative subjects",
    difficulty: "advanced",
    question: "Nobody in the class finished the difficult assignment on time, _____?",
    passageId: null,
    options: ["did they", "didn't they", "do they", "were they"],
    correctAnswer: 0,
    explanationThai: "เมื่อประธานมีความหมายเชิงปฏิเสธอยู่แล้ว เช่น nobody, tag question ต้องเป็นรูปบวก และใช้ they แทน nobody (เพราะไม่รู้เพศ) กริยาในประโยคหลักเป็นอดีต (finished) จึงใช้ did they",
    wrongAnswerExplanationsThai: [
      "",
      "didn't they เป็นรูปปฏิเสธซ้ำ ผิดหลักเพราะประธานเป็นปฏิเสธอยู่แล้ว ต้องใช้ tag แบบบวก",
      "do they ผิดกาล ต้องสอดคล้องกับ Past Simple (finished)",
      "were they ใช้ผิด เพราะกริยาหลักไม่ใช่ verb to be"
    ],
    tipThai: "ประธานที่มีความหมายปฏิเสธ (nobody, no one, nothing) ต้องใช้ tag question แบบบวกเสมอ"
  },
  {
    id: "set5-q7", setId: 5, section: "grammar", skill: "neither...nor structure",
    difficulty: "advanced",
    question: "_____ the students nor the teacher was aware that the meeting had been cancelled.",
    passageId: null,
    options: ["Either", "Both", "Not only", "Neither"],
    correctAnswer: 3,
    explanationThai: "Neither...nor ใช้คู่กันเพื่อปฏิเสธทั้งสองสิ่ง (ทั้งนักเรียนและครูต่างไม่รู้) ต้องใช้ Neither นำหน้าคู่กับ nor",
    wrongAnswerExplanationsThai: [
      "Either ต้องใช้คู่กับ or ไม่ใช่ nor",
      "Both ใช้คู่กับ and ไม่ใช่ nor และมีความหมายตรงข้าม",
      "Not only ต้องใช้คู่กับ but also ไม่ใช่ nor",
      ""
    ],
    tipThai: "จำคู่คำเชื่อมให้แม่นยำ: neither...nor, either...or, not only...but also, both...and"
  },
  {
    id: "set5-q8", setId: 5, section: "grammar", skill: "modals of deduction (past)",
    difficulty: "challenge",
    question: "The lights are off and the car isn't in the driveway. They _____ home yet.",
    passageId: null,
    options: ["mustn't have arrived", "can't have arrived", "shouldn't have arrived", "needn't have arrived"],
    correctAnswer: 1,
    explanationThai: "can't have + V3 ใช้แสดงการอนุมานเชิงปฏิเสธอย่างมั่นใจเกี่ยวกับอดีต จากหลักฐาน (ไฟดับ รถไม่อยู่) จึงสรุปได้ว่า 'พวกเขาต้องยังไม่มาถึงบ้านแน่ๆ'",
    wrongAnswerExplanationsThai: [
      "mustn't have arrived ไม่ใช่โครงสร้างที่ถูกต้อง เพราะ mustn't ใช้ห้ามหรือแนะนำอย่างหนักแน่น ไม่ใช่การอนุมาน",
      "",
      "shouldn't have arrived หมายถึงการตำหนิว่าไม่ควรทำสิ่งนั้น ไม่ใช่การอนุมานจากหลักฐาน",
      "needn't have arrived หมายถึงสิ่งที่ทำไปแต่ไม่จำเป็นต้องทำ ความหมายผิดไปจากบริบทนี้โดยสิ้นเชิง"
    ],
    tipThai: "can't have + V3 ใช้เมื่อมั่นใจว่าเป็นไปไม่ได้ที่เหตุการณ์นั้นจะเกิดขึ้นในอดีต"
  },
  {
    id: "set5-q9", setId: 5, section: "vocabulary", skill: "phrasal verbs (innovation)",
    difficulty: "advanced",
    question: "The engineering team managed to _____ an innovative solution to reduce plastic waste in packaging.",
    passageId: null,
    options: ["take up", "give up", "come up with", "look up"],
    correctAnswer: 2,
    explanationThai: "come up with แปลว่า คิดค้น/หาวิธีการหรือไอเดียใหม่ๆ ได้ ตรงกับบริบท 'คิดค้นวิธีแก้ปัญหาที่สร้างสรรค์'",
    wrongAnswerExplanationsThai: [
      "take up หมายถึง เริ่มทำกิจกรรม/งานอดิเรก หรือใช้พื้นที่ ไม่ตรงความหมาย",
      "give up หมายถึง ยอมแพ้ ความหมายตรงข้าม",
      "",
      "look up หมายถึง ค้นหาข้อมูล ไม่ใช่การคิดค้นสิ่งใหม่"
    ],
    tipThai: "จำ phrasal verb ที่เกี่ยวกับความคิดสร้างสรรค์: come up with = คิดค้นได้"
  },
  {
    id: "set5-q10", setId: 5, section: "vocabulary", skill: "word form (noun/adjective/verb)",
    difficulty: "advanced",
    question: "Thomas Edison is remembered as one of history's most _____ inventors, credited with over a thousand patents.",
    passageId: null,
    options: ["productive", "production", "produce", "productivity"],
    correctAnswer: 0,
    explanationThai: "ช่องว่างต้องเป็นคำคุณศัพท์ (adjective) ขยายคำนาม inventors คำว่า productive เป็นรูปคุณศัพท์ที่ถูกต้อง",
    wrongAnswerExplanationsThai: [
      "",
      "production เป็นคำนาม ไม่สามารถขยายคำนามอีกคำได้ในตำแหน่งนี้",
      "produce เป็นคำกริยารูปพื้นฐาน ผิดหลักไวยากรณ์ในตำแหน่งนี้",
      "productivity เป็นคำนามนามธรรม ไม่ใช่คุณศัพท์"
    ],
    tipThai: "สังเกตตำแหน่งในประโยค หากขยายคำนามโดยตรง ต้องใช้คำคุณศัพท์ (-ive, -ful, -ous)"
  },
  {
    id: "set5-q11", setId: 5, section: "vocabulary", skill: "synonyms in context (technology)",
    difficulty: "advanced",
    question: "Parents want their children's smart devices to be _____, meaning the software rarely crashes or malfunctions.",
    passageId: null,
    options: ["fashionable", "dependable", "affordable", "portable"],
    correctAnswer: 1,
    explanationThai: "dependable แปลว่า น่าเชื่อถือ/ไว้วางใจได้ ตรงกับความหมายของ reliable ในบริบทเรื่องซอฟต์แวร์ที่ไม่ค่อยขัดข้อง",
    wrongAnswerExplanationsThai: [
      "fashionable แปลว่า ทันสมัย ไม่เกี่ยวกับความน่าเชื่อถือ",
      "",
      "affordable แปลว่า ราคาไม่แพง ไม่เกี่ยวกับการทำงานผิดพลาด",
      "portable แปลว่า พกพาสะดวก ไม่เกี่ยวกับความน่าเชื่อถือ"
    ],
    tipThai: "reliable และ dependable เป็นคำพ้องความหมาย (synonym) ที่มักออกสอบคู่กัน"
  },
  {
    id: "set5-q12", setId: 5, section: "vocabulary", skill: "nuanced vocabulary (media literacy)",
    difficulty: "advanced",
    question: "Media literacy experts encourage students to remain _____ of sensational headlines and check facts before sharing them online.",
    passageId: null,
    options: ["confident", "convinced", "enthusiastic", "skeptical"],
    correctAnswer: 3,
    explanationThai: "skeptical แปลว่า ระแวง/ตั้งข้อสงสัย ตรงกับพฤติกรรมการรู้เท่าทันสื่อ คือไม่เชื่อทันทีและตรวจสอบข้อเท็จจริงก่อน",
    wrongAnswerExplanationsThai: [
      "confident แปลว่า มั่นใจ ไม่ตรงกับพฤติกรรมการตรวจสอบข้อมูล",
      "convinced แปลว่า เชื่อแล้ว ขัดแย้งกับการตรวจสอบข้อเท็จจริงก่อนเชื่อ",
      "enthusiastic แปลว่า กระตือรือร้น ไม่เกี่ยวกับการตั้งคำถามต่อข้อมูล",
      ""
    ],
    tipThai: "ในบริบท media literacy คำว่า skeptical มักหมายถึงการตั้งคำถามก่อนเชื่อข้อมูล"
  },
  {
    id: "set5-q13", setId: 5, section: "vocabulary", skill: "collocations (science)",
    difficulty: "advanced",
    question: "The lab team plans to _____ a series of experiments to test whether the new material can withstand extreme heat.",
    passageId: null,
    options: ["carry out", "make", "do over", "bring up"],
    correctAnswer: 0,
    explanationThai: "carry out เป็น collocation ที่ใช้คู่กับ experiments หมายถึง ดำเนินการ/ทำการทดลอง",
    wrongAnswerExplanationsThai: [
      "",
      "make ไม่ใช่ collocation ที่ถูกต้องกับคำว่า experiments ในบริบททางวิทยาศาสตร์",
      "do over แปลว่า ทำใหม่อีกครั้ง ความหมายไม่ตรงกับบริบท",
      "bring up แปลว่า หยิบยกประเด็น หรือ เลี้ยงดู ไม่เกี่ยวกับการทดลอง"
    ],
    tipThai: "จำ collocation ทางวิทยาศาสตร์: carry out an experiment/research"
  },
  {
    id: "set5-q14", setId: 5, section: "conversation", skill: "polite disagreement",
    difficulty: "advanced",
    question: "A: \"I think we should submit the report without double-checking the data since we're already late.\" B: \"_____\"",
    passageId: null,
    options: ["You're totally wrong to think that.", "That's a terrible idea and we shouldn't do it.", "I see your point, but rushing might cause errors that cost us more time later.", "Absolutely not, we can't submit it like that."],
    correctAnswer: 2,
    explanationThai: "'I see your point, but...' เป็นวิธีแสดงความไม่เห็นด้วยอย่างสุภาพ (polite disagreement) โดยรับฟังความเห็นอีกฝ่ายก่อนแล้วจึงเสนอมุมมองต่าง",
    wrongAnswerExplanationsThai: [
      "You're totally wrong เป็นการตำหนิตรงๆ ฟังดูหยาบคายและไม่สุภาพ",
      "That's a terrible idea เป็นการตัดสินความคิดผู้อื่นอย่างรุนแรง ไม่เหมาะกับการทำงานกลุ่ม",
      "",
      "Absolutely not เป็นการปฏิเสธทันทีโดยไม่แสดงความเข้าใจ ขาดความทางการทูต"
    ],
    tipThai: "การแสดงความไม่เห็นด้วยอย่างสุภาพ ควรเริ่มด้วยการรับฟัง เช่น I understand, but... / I see your point, but..."
  },
  {
    id: "set5-q15", setId: 5, section: "conversation", skill: "hedging opinions",
    difficulty: "advanced",
    question: "During a class debate, Nid wants to express her opinion cautiously rather than sound too certain. Which is the best way to begin?",
    passageId: null,
    options: ["It is definitely true that", "Everyone knows that", "There's no doubt that", "It seems to me that"],
    correctAnswer: 3,
    explanationThai: "'It seems to me that' เป็นสำนวน hedging language ใช้แสดงความเห็นอย่างระมัดระวัง ไม่ฟันธงเกินไป เหมาะกับการโต้วาทีในชั้นเรียน",
    wrongAnswerExplanationsThai: [
      "It is definitely true that แสดงความมั่นใจสูงเกินไป ไม่ใช่การ hedge ความเห็น",
      "Everyone knows that เป็นการกล่าวอ้างเกินจริงและฟันธงแทนคนอื่น",
      "There's no doubt that แสดงความแน่ใจ 100% ตรงข้ามกับการพูดอย่างระมัดระวัง",
      ""
    ],
    tipThai: "สำนวน hedging ที่พบบ่อย: it seems, it appears, I would say, in my opinion"
  },
  {
    id: "set5-q16", setId: 5, section: "conversation", skill: "interview responses",
    difficulty: "advanced",
    question: "Interviewer: \"What would you say is your biggest weakness?\" Which response shows the most mature, self-aware answer suitable for an interview?",
    passageId: null,
    options: ["I don't really have any weaknesses.", "I sometimes spend too long perfecting details, so I'm learning to manage my time better.", "I don't know, I've never thought about it.", "My friends say I'm lazy sometimes."],
    correctAnswer: 1,
    explanationThai: "คำตอบที่ดีในการสัมภาษณ์ควรยอมรับจุดอ่อนอย่างมีวุฒิภาวะ พร้อมแสดงว่ากำลังพัฒนาตนเอง เช่น การใช้เวลานานเกินไปกับรายละเอียดแต่กำลังฝึกบริหารเวลา",
    wrongAnswerExplanationsThai: [
      "การอ้างว่าไม่มีจุดอ่อนเลย ฟังดูไม่น่าเชื่อถือและขาดการไตร่ตรองตนเอง",
      "",
      "การตอบว่าไม่เคยคิดเรื่องนี้ แสดงถึงการไม่เตรียมตัวมาสัมภาษณ์",
      "การอ้างความเห็นของเพื่อนแทนตนเอง ฟังดูไม่เป็นมืออาชีพและหลีกเลี่ยงความรับผิดชอบ"
    ],
    tipThai: "คำตอบเรื่องจุดอ่อนที่ดี ควรระบุจุดอ่อนจริง พร้อมแนวทางพัฒนา แสดงความมีวุฒิภาวะ"
  },
  {
    id: "set5-q17", setId: 5, section: "conversation", skill: "online communication (netiquette)",
    difficulty: "advanced",
    question: "In a class group chat, Ann accidentally sent a message meant for someone else. What is the most appropriate way for her to respond?",
    passageId: null,
    options: ["Sorry everyone, that message wasn't meant for this chat. Please ignore it!", "Whatever, it's not a big deal, forget it.", "delete it now!!! don't read it!!!", "Why does this app even let you send messages like that?"],
    correctAnswer: 0,
    explanationThai: "การขอโทษอย่างสุภาพและชี้แจงสถานการณ์สั้นๆ เป็นมารยาทที่เหมาะสมในการสื่อสารออนไลน์เมื่อส่งข้อความผิดกลุ่ม",
    wrongAnswerExplanationsThai: [
      "",
      "การพูดว่า 'ไม่ใช่เรื่องใหญ่ ลืมมันซะ' แสดงถึงการไม่รับผิดชอบต่อความผิดพลาดของตนเอง",
      "การพิมพ์ตัวพิมพ์ใหญ่ทั้งหมดพร้อมเครื่องหมายตกใจหลายตัว ให้ความรู้สึกตื่นตระหนกและไม่สุภาพ",
      "การตำหนิแอปพลิเคชันแทนที่จะรับผิดชอบต่อความผิดพลาดของตนเอง ไม่เหมาะสม"
    ],
    tipThai: "ในการสื่อสารออนไลน์ ควรขอโทษอย่างสุภาพและกระชับเมื่อเกิดความผิดพลาด"
  },
  {
    id: "set5-q18", setId: 5, section: "cloze", skill: "error identification: subject-verb agreement",
    difficulty: "challenge",
    question: "Find the segment that contains a grammatical error: \"Many scientists agree (A) that renewable energy sources (B) produce far less pollution (C) than fossil fuels does (D).\"",
    passageId: null,
    options: ["Many scientists agree", "that renewable energy sources", "produce far less pollution", "than fossil fuels does"],
    correctAnswer: 3,
    explanationThai: "ส่วน (D) 'than fossil fuels does' ผิดหลัก subject-verb agreement เพราะประธาน fossil fuels เป็นพหูพจน์ ต้องใช้กริยา do ไม่ใช่ does ต้องแก้เป็น 'than fossil fuels do'",
    wrongAnswerExplanationsThai: [
      "ส่วน (A) 'Many scientists agree' ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (B) 'that renewable energy sources' ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (C) 'produce far less pollution' ถูกต้องตามหลักไวยากรณ์แล้ว",
      ""
    ],
    tipThai: "เมื่อเปรียบเทียบด้วย than ให้ตรวจสอบว่ากริยาช่วยที่ตามมาสอดคล้องกับประธานที่เปรียบเทียบหรือไม่ (เอกพจน์/พหูพจน์)"
  },
  {
    id: "set5-q19", setId: 5, section: "cloze", skill: "error identification: gerund/infinitive",
    difficulty: "challenge",
    question: "Find the segment that contains a grammatical error: \"Despite the heavy rain (A), the players continued (B) to practicing (C) their skills until the coach called them in (D).\"",
    passageId: null,
    options: ["Despite the heavy rain", "the players continued", "to practicing", "their skills until the coach called them in"],
    correctAnswer: 2,
    explanationThai: "ส่วน (C) 'to practicing' ผิดหลักไวยากรณ์ เพราะ continued สามารถตามด้วย gerund (practicing) หรือ infinitive (to practice) แต่ไม่ใช่การผสม 'to' กับ V-ing ต้องแก้เป็น 'to practice' หรือ 'practicing'",
    wrongAnswerExplanationsThai: [
      "ส่วน (A) 'Despite the heavy rain' ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (B) 'the players continued' ถูกต้องตามหลักไวยากรณ์แล้ว",
      "",
      "ส่วน (D) 'their skills until the coach called them in' ถูกต้องตามหลักไวยากรณ์แล้ว"
    ],
    tipThai: "ระวังการผสมโครงสร้าง infinitive (to + V.) กับ gerund (V-ing) ผิดรูปแบบ เช่น to practicing ซึ่งไม่ถูกต้อง"
  },
  {
    id: "set5-q20", setId: 5, section: "cloze", skill: "error identification: subject-verb agreement (indefinite pronouns)",
    difficulty: "challenge",
    question: "Find the segment that contains a grammatical error: \"Every one of the students in the debate club (A) are required (B) to prepare a well-researched argument (C) before the tournament begins (D).\"",
    passageId: null,
    options: ["Every one of the students in the debate club", "are required", "to prepare a well-researched argument", "before the tournament begins"],
    correctAnswer: 1,
    explanationThai: "ส่วน (B) 'are required' ผิดหลัก subject-verb agreement เพราะ 'Every one' ถือเป็นประธานเอกพจน์เสมอ ต้องใช้ 'is required'",
    wrongAnswerExplanationsThai: [
      "ส่วน (A) 'Every one of the students in the debate club' เป็นเพียงประธานของประโยค ไม่มีข้อผิดพลาด",
      "",
      "ส่วน (C) 'to prepare a well-researched argument' ถูกต้องตามหลักไวยากรณ์แล้ว",
      "ส่วน (D) 'before the tournament begins' ถูกต้องตามหลักไวยากรณ์แล้ว"
    ],
    tipThai: "'Every one of + พหูพจน์' ยังคงถือเป็นประธานเอกพจน์ ต้องใช้กริยาเอกพจน์เสมอ"
  },
  {
    id: "set5-q21", setId: 5, section: "reading", skill: "main idea",
    difficulty: "advanced",
    question: "What is the main idea of the passage?",
    passageId: "set5-p1",
    options: ["AI tools are becoming too powerful for schools to control.", "Teachers should ban the use of AI in classrooms completely.", "AI always improves students' critical thinking automatically.", "Students benefit most when they use AI thoughtfully to support, not replace, their own learning."],
    correctAnswer: 3,
    explanationThai: "ใจความสำคัญของบทความคือ นักเรียนจะได้ประโยชน์สูงสุดเมื่อใช้ AI อย่างรอบคอบเพื่อสนับสนุนการเรียนรู้ ไม่ใช่แทนที่ความพยายามของตนเอง ซึ่งสรุปแนวคิดหลักตลอดทั้งบทความ",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้กล่าวว่า AI มีพลังมากเกินกว่าที่โรงเรียนจะควบคุมได้",
      "บทความไม่ได้เสนอให้ห้ามใช้ AI ในห้องเรียนโดยสิ้นเชิง ตรงข้ามกับที่กล่าวว่าควรใช้เพื่อสนับสนุนการเรียนรู้",
      "บทความระบุว่าการใช้ AI อย่างรอบคอบ 'มีแนวโน้ม' พัฒนาทักษะการคิดวิเคราะห์ ไม่ได้บอกว่าเกิดขึ้นโดยอัตโนมัติเสมอไป",
      ""
    ],
    tipThai: "หาใจความสำคัญจากประโยคสรุปท้ายย่อหน้าหรือแนวคิดที่ปรากฏซ้ำตลอดบทความ"
  },
  {
    id: "set5-q22", setId: 5, section: "reading", skill: "inference",
    difficulty: "challenge",
    question: "What can be inferred about students who copy AI-generated answers without understanding them?",
    passageId: "set5-p1",
    options: ["They are likely to perform poorly when tested on their own knowledge.", "They will definitely fail every exam in school.", "They understand the material better than other students.", "They are following the guideline recommended by education experts."],
    correctAnswer: 0,
    explanationThai: "จากเนื้อหาที่ว่านักเรียนที่คัดลอกคำตอบจาก AI โดยไม่เข้าใจเนื้อหา มักจะประสบปัญหาเมื่อถึงเวลาสอบ จึงอนุมานได้ว่าพวกเขามีแนวโน้มทำข้อสอบที่วัดความรู้จริงได้ไม่ดี",
    wrongAnswerExplanationsThai: [
      "",
      "บทความไม่ได้ระบุว่าพวกเขาจะสอบตกทุกวิชาอย่างแน่นอน เป็นการอนุมานที่เกินเลยไป",
      "ตรงข้ามกับเนื้อหา บทความบอกว่ากลุ่มนี้ไม่เข้าใจเนื้อหาอย่างแท้จริง",
      "ขัดแย้งกับคำแนะนำของผู้เชี่ยวชาญที่บอกว่าควรใช้ AI สนับสนุนการเรียนรู้ ไม่ใช่หลีกเลี่ยงมัน"
    ],
    tipThai: "คำถามอนุมานต้องใช้เหตุผลจากข้อมูลที่ให้มา ไม่ใช่ข้อมูลที่ระบุตรงๆ ในบทความ"
  },
  {
    id: "set5-q23", setId: 5, section: "reading", skill: "inference (author's purpose in example)",
    difficulty: "challenge",
    question: "Why does the author mention the example of asking AI to 'explain a difficult concept' instead of 'write an entire essay'?",
    passageId: "set5-p1",
    options: ["To prove that AI cannot write essays as well as humans.", "To illustrate how AI can be used responsibly to support rather than replace learning.", "To criticize teachers who assign essay writing.", "To show that AI explanations are always simpler than textbook explanations."],
    correctAnswer: 1,
    explanationThai: "ผู้เขียนยกตัวอย่างการขอให้ AI อธิบายแนวคิดยากๆ แทนการให้เขียนเรียงความทั้งหมด เพื่อแสดงให้เห็นวิธีใช้ AI อย่างรับผิดชอบ คือใช้เป็นเครื่องมือสนับสนุนมากกว่าทดแทนการเรียนรู้ของนักเรียนเอง",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้มุ่งพิสูจน์ว่า AI เขียนเรียงความได้แย่กว่ามนุษย์",
      "",
      "ไม่มีการวิจารณ์ครูผู้สอนในบทความนี้",
      "เป็นการสรุปเกินจริง บทความไม่ได้กล่าวว่าคำอธิบายของ AI ง่ายกว่าหนังสือเรียนเสมอไป"
    ],
    tipThai: "เมื่อผู้เขียนยกตัวอย่าง ให้พิจารณาว่าตัวอย่างนั้นสนับสนุนแนวคิดหลักเรื่องใด"
  },
  {
    id: "set5-q24", setId: 5, section: "reading", skill: "vocabulary in context",
    difficulty: "advanced",
    question: "In the passage, the word 'blindly' is closest in meaning to _____.",
    passageId: "set5-p1",
    options: ["carefully", "occasionally", "without thinking critically", "secretly"],
    correctAnswer: 2,
    explanationThai: "คำว่า blindly ในบริบทนี้หมายถึง การทำสิ่งใดโดยไม่ไตร่ตรองหรือตั้งคำถาม (without thinking critically) ตรงข้ามกับการใช้ AI อย่างรอบคอบที่กล่าวถึงก่อนหน้า",
    wrongAnswerExplanationsThai: [
      "carefully มีความหมายตรงข้ามกับ blindly ในบริบทนี้",
      "occasionally หมายถึง เป็นบางครั้ง ไม่ตรงกับความหมายของ blindly",
      "",
      "secretly หมายถึง อย่างลับๆ ไม่เกี่ยวข้องกับความหมายของ blindly ในบริบทนี้"
    ],
    tipThai: "ใช้บริบทรอบข้างคำศัพท์ (context clues) เพื่อเดาความหมาย โดยเฉพาะประโยคที่แสดงความขัดแย้ง (contrast)"
  },
  {
    id: "set5-q25", setId: 5, section: "reading", skill: "author's purpose",
    difficulty: "advanced",
    question: "What is the author's main purpose in writing this passage?",
    passageId: "set5-p1",
    options: ["To entertain readers with a story about technology.", "To advertise a new AI application for students.", "To criticize schools for allowing technology in classrooms.", "To inform readers and encourage thoughtful, balanced use of AI in learning."],
    correctAnswer: 3,
    explanationThai: "ผู้เขียนต้องการให้ข้อมูลและสนับสนุนให้ผู้อ่านใช้ AI อย่างสมดุลและรอบคอบ ซึ่งเห็นได้จากน้ำเสียงที่ให้คำแนะนำตลอดบทความ",
    wrongAnswerExplanationsThai: [
      "บทความไม่ได้มีลักษณะเป็นเรื่องเล่าเพื่อความบันเทิง",
      "ไม่มีการโฆษณาผลิตภัณฑ์ AI ใดๆ ในบทความนี้",
      "บทความไม่ได้วิจารณ์โรงเรียนที่อนุญาตให้ใช้เทคโนโลยี",
      ""
    ],
    tipThai: "พิจารณาน้ำเสียงโดยรวมของบทความ (ให้ข้อมูล/โน้มน้าว/วิจารณ์/บันเทิง) เพื่อหาจุดประสงค์ของผู้เขียน"
  }
];
