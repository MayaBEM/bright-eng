/* ============================================================
   THE PIRATES' TREASURE — Reading Comprehension Adventure
   Content data file.
   Every fact below comes ONLY from the uploaded story
   "The Pirates' Treasure" (Alex, Phoebe, Patrick).
   No invented characters, places or events.
   ============================================================ */

/* ---------- STORY REVIEW: 12 stages ---------- */
const STORY_STAGES = [
  {
    id: 1,
    title: "The children see two ships",
    text: "Alex suggested climbing a hill to check if any pirates were still nearby. Through their binoculars, the three friends saw the pirate ship sailing away to the south. Behind it was another ship with red sails and a black flag. Phoebe wondered who it was, but Patrick said they'd never know and suggested checking the other direction for more pirates. To the north they saw only a bigger island with a town — no pirates there.",
    keyDetail: "There were TWO ships to notice: the pirate ship (sailing south) and a mysterious second ship with red sails and a black flag."
  },
  {
    id: 2,
    title: "Back to the treasure chest",
    text: "The friends walked back to where the treasure was buried. They were thirsty, so they cracked open some coconuts and drank the milk before they started digging.",
    keyDetail: "They drank coconut milk because they were thirsty — this happens before the digging begins."
  },
  {
    id: 3,
    title: "Gold coins inside!",
    text: "After two hours of digging, they pulled the treasure chest out of the ground and opened it with a key that was already in the lock. Inside, it was full of gold coins.",
    keyDetail: "The key was already in the lock — the children did not need to find it separately."
  },
  {
    id: 4,
    title: "The other ship was not pirates",
    text: "Phoebe said the treasure wasn't theirs, since the pirates — not them — had stolen it. Just then, Alex looked through the binoculars again and realised the people on the second ship weren't pirates at all — he could see children.",
    keyDetail: "Alex's second look through the binoculars changed everything they thought about the mysterious ship."
  },
  {
    id: 5,
    title: "Meeting the families",
    text: "The three friends ran to the beach and found lots of families arriving on a boat, thirsty and tired. Patrick gave them some coconuts. One woman explained that pirates had stolen their gold coins, coins they needed to buy farms in America, and now they had nothing. She began to cry.",
    keyDetail: "The families were not pirates — they were the victims the gold coins had been stolen from."
  },
  {
    id: 6,
    title: "Returning the treasure",
    text: "Patrick told the woman that the three friends had watched the pirates hide the treasure and had dug it up themselves. He said, 'Maybe it's yours. You can have it,' and gave the chest to the families.",
    keyDetail: "Patrick's exact reasoning: since the friends only found what pirates had hidden, it rightfully belonged to the families."
  },
  {
    id: 7,
    title: "Sending the treasure north",
    text: "The families loaded the treasure chest onto their boat. Patrick told them to sail to the town on the island to the north, where they would find a bigger ship to take them to America — and to hurry, because the pirates weren't far away.",
    keyDetail: "The town Patrick mentioned is the same town the friends had spotted earlier from the hill."
  },
  {
    id: 8,
    title: "Night falls on the beach",
    text: "After the boat left, the three friends found some bananas to eat. When it grew dark, they lay down on the sand to rest.",
    keyDetail: "The friends stayed behind on the same beach after sending the families off to safety."
  },
  {
    id: 9,
    title: "Pirates and their prisoner",
    text: "At midnight, shouting woke the friends, so they got up and hid in some bushes. Three men carrying torches appeared, holding the pirate captain — recognisable by his hook — as their prisoner. One man demanded to know where the treasure was buried. The captain pointed to a tree, but all the men found there was a big, empty hole.",
    keyDetail: "The pirate captain was a PRISONER of his own men — he was not leading them at this point in the story."
  },
  {
    id: 10,
    title: "Alex sneezes",
    text: "While hiding, Alex suddenly sneezed. The noise gave away exactly where the three friends were hiding in the bushes.",
    keyDetail: "One small sneeze is the single cause that leads to everything that happens next."
  },
  {
    id: 11,
    title: "Caught and threatened",
    text: "Waving their swords, the men ran straight to the bushes, grabbed the three friends, and dragged them to the hole. They warned the children that if they didn't lead them to the treasure, they would be thrown in and covered with sand.",
    keyDetail: "The pirates believed the children knew where the treasure was — but the treasure was already gone."
  },
  {
    id: 12,
    title: "A glowing escape",
    text: "Looking down into the hole, the three friends saw a strange yellow glow. Without another option, they jumped in — and disappeared in a flash.",
    keyDetail: "The story ends the moment they disappear. It does not tell us where the hole leads."
  }
];

/* ---------- VOCABULARY: 24 words ---------- */
const VOCABULARY = [
  { word: "treasure", pos: "noun", ipa: "/ˈtreʒ.ər/", def: "valuable things such as gold that are often hidden or buried", thai: "สมบัติ", example: "The treasure had been buried on the island for a long time.", icon: "chest" },
  { word: "treasure chest", pos: "noun", ipa: "/ˈtreʒ.ər tʃest/", def: "a strong box used for storing treasure", thai: "หีบสมบัติ", example: "They dug up the treasure chest and unlocked it with the key.", icon: "chest" },
  { word: "pirate", pos: "noun", ipa: "/ˈpaɪ.rət/", def: "someone who sails the seas and steals from others", thai: "โจรสลัด", example: "The pirate ship sailed away to the south.", icon: "flag" },
  { word: "pirate captain", pos: "noun", ipa: "/ˈpaɪ.rət ˈkæp.tɪn/", def: "the leader of a group of pirates", thai: "กัปตันโจรสลัด", example: "The pirate captain, who had a hook, was now a prisoner.", icon: "hook" },
  { word: "binoculars", pos: "noun", ipa: "/bɪˈnɒk.jə.ləz/", def: "a tool held with both hands and used to see things far away", thai: "กล้องส่องทางไกล", example: "Alex looked through the binoculars to check for pirates.", icon: "binoculars" },
  { word: "black flag", pos: "noun", ipa: "/blæk flæg/", def: "a dark flag flown on the mysterious second ship", thai: "ธงสีดำ", example: "Behind the pirate ship was another ship with red sails and a black flag.", icon: "flag" },
  { word: "gold coins", pos: "noun", ipa: "/ɡəʊld kɔɪnz/", def: "round pieces of money made of gold", thai: "เหรียญทอง", example: "The chest was full of gold coins.", icon: "coin" },
  { word: "island", pos: "noun", ipa: "/ˈaɪ.lənd/", def: "an area of land completely surrounded by water", thai: "เกาะ", example: "To the north was a bigger island with a town.", icon: "island" },
  { word: "town", pos: "noun", ipa: "/taʊn/", def: "a place with houses and shops, smaller than a city", thai: "เมือง", example: "Patrick told the families to sail to the town to find a bigger ship.", icon: "town" },
  { word: "coconut", pos: "noun", ipa: "/ˈkəʊ.kə.nʌt/", def: "a large, hard brown fruit with milk inside", thai: "มะพร้าว", example: "They cracked open some coconuts because they were thirsty.", icon: "coconut" },
  { word: "thirsty", pos: "adjective", ipa: "/ˈθɜː.sti/", def: "needing something to drink", thai: "กระหายน้ำ", example: "The families were thirsty and tired after their journey on the boat.", icon: "waterDrop" },
  { word: "dig up", pos: "phrasal verb", ipa: "/dɪɡ ʌp/", def: "to remove something buried from the ground", thai: "ขุดขึ้นมา", example: "It took two hours for the three friends to dig up the treasure chest.", icon: "shovel" },
  { word: "steal", pos: "verb", ipa: "/stiːl/", def: "to take something that belongs to someone else", thai: "ขโมย", example: "The pirates had stolen the families' gold coins.", icon: "handTake" },
  { word: "load", pos: "verb", ipa: "/ləʊd/", def: "to put something onto a vehicle or boat", thai: "บรรทุกขึ้น", example: "The families loaded the treasure chest onto their boat.", icon: "boat" },
  { word: "boat", pos: "noun", ipa: "/bəʊt/", def: "a small vehicle that travels on water", thai: "เรือ", example: "Lots of families arrived on a boat, thirsty and tired.", icon: "boat" },
  { word: "prisoner", pos: "noun", ipa: "/ˈprɪz.ən.ər/", def: "someone who is being held and is not free to leave", thai: "เชลย / นักโทษ", example: "The three men had the pirate captain with them as their prisoner.", icon: "chain" },
  { word: "torch", pos: "noun", ipa: "/tɔːtʃ/", def: "a stick that burns at one end, used for light at night", thai: "คบเพลิง", example: "The three men carried torches when they came looking at midnight.", icon: "torch" },
  { word: "hide", pos: "verb", ipa: "/haɪd/", def: "to go somewhere so that other people cannot see you", thai: "ซ่อนตัว", example: "The three friends quickly hid in some bushes when they heard shouting.", icon: "bush" },
  { word: "bushes", pos: "noun", ipa: "/ˈbʊʃ.ɪz/", def: "small, thick plants that are low to the ground", thai: "พุ่มไม้", example: "They hid in some bushes when they heard people shouting at midnight.", icon: "bush" },
  { word: "sneeze", pos: "verb", ipa: "/sniːz/", def: "to suddenly and noisily push air out through your nose and mouth", thai: "จาม", example: "Alex sneezed, and the men ran straight towards the bushes.", icon: "sneeze" },
  { word: "sword", pos: "noun", ipa: "/sɔːd/", def: "a weapon with a long, sharp blade", thai: "ดาบ", example: "Waving their swords, the men ran over to where the friends were hiding.", icon: "sword" },
  { word: "hole", pos: "noun", ipa: "/həʊl/", def: "an empty space dug into the ground", thai: "หลุม", example: "Next to the tree, the men found only a big, empty hole.", icon: "hole" },
  { word: "glowing", pos: "adjective", ipa: "/ˈɡləʊ.ɪŋ/", def: "shining with a soft, steady light", thai: "เรืองแสง", example: "Inside the hole, the three friends saw a strange yellow glowing light.", icon: "glow" },
  { word: "disappear", pos: "verb", ipa: "/ˌdɪs.əˈpɪər/", def: "to stop being visible; to vanish suddenly", thai: "หายไป", example: "The three friends jumped into the hole and disappeared in a flash.", icon: "poof" }
];

/* ---------- PART 1: 15 Multiple-choice questions ---------- */
/* options: array of strings. correctIndex: index of the correct option BEFORE shuffling (shuffling happens at render time). */
const MC_QUESTIONS = [
  {
    id: "mc1",
    skill: "Cause & reason",
    question: "Why did the three friends climb the hill?",
    options: ["To pick coconuts for a drink", "To see if the pirates were still nearby", "To look for the pirate captain", "To bury the treasure chest"],
    correctIndex: 1,
    hint: "Alex suggested it right at the start of the story, before they went back to the chest.",
    correctFeedback: "Alex suggested climbing the hill so they could check, with their binoculars, whether the pirates were still around.",
    incorrectFeedback: "ยังไม่ถูกนะ ลองอ่านช่วงต้นเรื่องอีกครั้ง Alex ชวนเพื่อนๆ ปีนเนินเขาเพื่อดูว่าโจรสลัดยังอยู่แถวนั้นหรือเปล่า ไม่ใช่เพื่อไปหามะพร้าวหรือฝังสมบัติ",
    evidence: "\"'Let's climb that hill,' suggested Alex. 'Maybe we can see if the pirates are still here.'\""
  },
  {
    id: "mc2",
    skill: "Explicit detail",
    question: "What did the children first see through their binoculars from the hill?",
    options: ["The pirate ship sailing away to the south", "A town full of pirates", "A boat full of gold coins", "The three men with torches"],
    correctIndex: 0,
    hint: "This is the very first thing they spotted after climbing up.",
    correctFeedback: "Through the binoculars, they watched the pirate ship sailing away to the south.",
    incorrectFeedback: "ยังไม่ถูกนะ สิ่งแรกที่เด็กๆ เห็นผ่านกล้องส่องทางไกลคือเรือโจรสลัดที่กำลังแล่นออกไปทางทิศใต้ ไม่ใช่เมืองหรือเรือทองคำ",
    evidence: "\"Through their binoculars, they could see the pirate ship sailing away to the south.\""
  },
  {
    id: "mc3",
    skill: "Explicit detail",
    question: "What was special about the other ship behind the pirate ship?",
    options: ["It was much smaller than the pirate ship", "It had white sails and no flag at all", "It had red sails and a black flag", "It was sailing towards the town"],
    correctIndex: 2,
    hint: "Phoebe pointed it out and asked who it might belong to.",
    correctFeedback: "Phoebe noticed this second ship because of its red sails and black flag, and wondered who was on it.",
    incorrectFeedback: "ยังไม่ถูกนะ ในเรื่อง ฟีบี้สังเกตเห็นเรืออีกลำที่มีใบเรือสีแดงและธงสีดำ ตามหลังเรือโจรสลัดมา",
    evidence: "\"'What's that other ship with the red sails and the black flag, behind the pirate ship? I wonder who they are,' said Phoebe.\""
  },
  {
    id: "mc4",
    skill: "Explicit detail",
    question: "What did the three friends find inside the treasure chest?",
    options: ["Old maps and letters", "Coconuts and bananas", "Swords and torches", "Gold coins"],
    correctIndex: 3,
    hint: "This is what made Phoebe ask, 'What are we going to do?'",
    correctFeedback: "After two hours of digging, they opened the chest and found it full of gold coins.",
    incorrectFeedback: "ยังไม่ถูกนะ เมื่อเปิดหีบสมบัติออก เด็กๆ พบว่าข้างในเต็มไปด้วยเหรียญทอง ไม่ใช่แผนที่หรือดาบ",
    evidence: "\"...found that it was full of gold coins.\""
  },
  {
    id: "mc5",
    skill: "Character decisions",
    question: "Why did Phoebe say the treasure was not theirs?",
    options: ["Because it belonged to the pirate captain", "Because the pirates had stolen it, not the three friends", "Because Alex found it first", "Because it was buried too deep for them"],
    correctIndex: 1,
    hint: "Think about who actually stole the gold coins in the first place.",
    correctFeedback: "Phoebe pointed out that the friends didn't steal the treasure — the pirates did — so it wasn't rightfully theirs to keep.",
    incorrectFeedback: "ยังไม่ถูกนะ ฟีบี้บอกว่าสมบัตินี้ไม่ใช่ของพวกเขา เพราะคนที่ขโมยมาคือโจรสลัด ไม่ใช่พวกเขาเอง ดังนั้นสมบัติจึงไม่ควรเป็นของพวกเขา",
    evidence: "\"'We didn't steal it!' 'No, we didn't,' said Phoebe, 'but those pirates did. It isn't ours.'\""
  },
  {
    id: "mc6",
    skill: "Character identification",
    question: "Who did the three friends meet on the beach?",
    options: ["The pirate captain", "A group of pirates", "Families arriving on a boat", "Three men with torches"],
    correctIndex: 2,
    hint: "Alex realised who they really were after looking through the binoculars a second time.",
    correctFeedback: "The friends ran to the beach and found lots of families arriving on a boat — not pirates at all.",
    incorrectFeedback: "ยังไม่ถูกนะ คนที่เด็กๆ พบบนชายหาดคือครอบครัวต่างๆ ที่มากับเรือ ไม่ใช่โจรสลัดหรือกัปตันโจรสลัด",
    evidence: "\"The three friends ran to the beach and saw lots of families arriving on a boat.\""
  },
  {
    id: "mc7",
    skill: "Explicit detail / cause",
    question: "What had the pirates stolen from the families?",
    options: ["Their boat", "Their gold coins", "Their coconuts", "Their swords"],
    correctIndex: 1,
    hint: "One of the women explained this and started to cry.",
    correctFeedback: "A woman explained that pirates had stolen their gold coins, which they had wanted to use to buy farms in America.",
    incorrectFeedback: "ยังไม่ถูกนะ สิ่งที่โจรสลัดขโมยไปคือเหรียญทองของครอบครัวเหล่านั้น ไม่ใช่เรือหรือมะพร้าว",
    evidence: "\"'Pirates have stolen our gold coins,' one woman said.\""
  },
  {
    id: "mc8",
    skill: "Character decisions",
    question: "Why did Patrick decide to give the treasure to the families?",
    options: ["Because the pirate captain ordered him to", "Because he realised the treasure had really been theirs before it was stolen", "Because Phoebe was too tired to carry it", "Because the families offered him coconuts in return"],
    correctIndex: 1,
    hint: "Patrick explained his reasoning himself, right before giving them the chest.",
    correctFeedback: "Patrick explained that the friends had only watched pirates hide the treasure and then dug it up — so it likely belonged to the families all along.",
    incorrectFeedback: "ยังไม่ถูกนะ แพทริกให้เหตุผลว่าพวกเขาแค่เห็นโจรสลัดซ่อนสมบัติแล้วขุดขึ้นมาเอง สมบัตินี้จึงน่าจะเป็นของครอบครัวเหล่านั้นตั้งแต่แรก ไม่มีใครสั่งให้เขาทำ",
    evidence: "\"'We watched the pirates hide some treasure and we dug it up,' said Patrick. 'Maybe it's yours. You can have it.'\""
  },
  {
    id: "mc9",
    skill: "Sequence / method",
    question: "How did the families take the treasure chest away with them?",
    options: ["They buried it again on the beach", "They carried it on foot to the town", "They loaded it onto their boat", "They gave it to the pirate captain"],
    correctIndex: 2,
    hint: "Remember what they arrived on, and what happened right after Patrick gave them the chest.",
    correctFeedback: "The families loaded the treasure chest onto their boat before sailing off.",
    incorrectFeedback: "ยังไม่ถูกนะ ครอบครัวเหล่านั้นนำหีบสมบัติขึ้นเรือที่พวกเขามาด้วย ไม่ได้ฝังใหม่หรือเดินไปเมืองด้วยตนเอง",
    evidence: "\"They fetched the treasure chest and the men loaded it onto the boat.\""
  },
  {
    id: "mc10",
    skill: "Sequence",
    question: "What did the three friends do after the boat with the families had left?",
    options: ["They swam after the boat", "They found bananas to eat and lay down on the sand when it got dark", "They went straight to the town", "They began digging another hole"],
    correctIndex: 1,
    hint: "Think about what happens right before midnight in the story.",
    correctFeedback: "After the boat left, the friends found some bananas to eat, and once it was dark, they lay down on the sand.",
    incorrectFeedback: "ยังไม่ถูกนะ หลังเรือของครอบครัวจากไป เด็กๆ หามะพร้าวกล้วยกินและนอนลงบนทรายเมื่อฟ้ามืด ไม่ได้ว่ายน้ำตามเรือหรือขุดหลุมใหม่",
    evidence: "\"After the boat left, they found some bananas to eat and when it was dark, they lay down on the sand.\""
  },
  {
    id: "mc11",
    skill: "Sequence / cause",
    question: "What happened at midnight?",
    options: ["The families came back to say thank you", "They heard shouting and hid in some bushes", "A big storm began", "Another boat arrived with more food"],
    correctIndex: 1,
    hint: "This is what woke the three friends up.",
    correctFeedback: "At midnight, the friends heard shouting, got up quickly, and hid in some bushes.",
    incorrectFeedback: "ยังไม่ถูกนะ ตอนเที่ยงคืน เด็กๆ ได้ยินเสียงตะโกนแล้วรีบไปซ่อนตัวในพุ่มไม้ ไม่ใช่ครอบครัวกลับมาหรือมีพายุ",
    evidence: "\"At midnight, they heard some people shouting, so they got up and quickly hid in some bushes.\""
  },
  {
    id: "mc12",
    skill: "Character identification",
    question: "Who was being held as a prisoner by the three men with torches?",
    options: ["Patrick", "One of the families", "The pirate captain with the hook", "Alex"],
    correctIndex: 2,
    hint: "This character is recognisable by one particular feature — a hook.",
    correctFeedback: "The three men had the pirate captain, who had a hook, as their prisoner.",
    incorrectFeedback: "ยังไม่ถูกนะ คนที่ถูกจับเป็นเชลยคือกัปตันโจรสลัดที่มีตะขอ ไม่ใช่แพทริก อเล็กซ์ หรือครอบครัวใดๆ",
    evidence: "\"...they had the pirate captain with the hook as their prisoner.\""
  },
  {
    id: "mc13",
    skill: "Cause & effect",
    question: "Why were the pirates able to find where the three friends were hiding?",
    options: ["Phoebe shouted for help", "Alex sneezed", "The bushes caught fire", "Patrick stepped on a branch"],
    correctIndex: 1,
    hint: "It was a sudden, noisy, uncontrollable sound.",
    correctFeedback: "Alex sneezed, and that noise made the men run straight over to where the friends were hiding.",
    incorrectFeedback: "ยังไม่ถูกนะ สาเหตุที่โจรสลัดพบตัวเด็กๆ คืออเล็กซ์จาม ไม่ใช่ฟีบี้ตะโกนหรือพุ่มไม้ไฟไหม้",
    evidence: "\"At that moment, Alex sneezed. Waving their swords, the men ran over to where the three friends were hiding.\""
  },
  {
    id: "mc14",
    skill: "Explicit detail / cause",
    question: "What did the men threaten to do if the children didn't lead them to the treasure?",
    options: ["Take away their binoculars", "Throw them in the hole and cover them with sand", "Send them to the town", "Make them carry the torches"],
    correctIndex: 1,
    hint: "The threat involves the same hole the men had just found empty.",
    correctFeedback: "The men warned that if the children didn't take them to the treasure, they would be thrown into the hole and covered with sand.",
    incorrectFeedback: "ยังไม่ถูกนะ โจรสลัดขู่ว่าจะโยนเด็กๆ ลงหลุมแล้วกลบด้วยทราย ถ้าเด็กๆ ไม่พาไปหาสมบัติ ไม่ใช่แค่ริบกล้องส่องทางไกลหรือให้ถือคบเพลิง",
    evidence: "\"'If you don't take us to the treasure, we'll throw you in and cover you with sand,' one of the men shouted.\""
  },
  {
    id: "mc15",
    skill: "Main idea / resolution",
    question: "How did the three friends finally get away from the pirates?",
    options: ["A boat came to rescue them", "They fought the men with swords", "They jumped into a glowing hole and disappeared", "They ran back up the hill"],
    correctIndex: 2,
    hint: "Think about the very last thing that happens in the story.",
    correctFeedback: "The friends looked into the hole, saw a yellow glow, jumped in, and were gone in a flash.",
    incorrectFeedback: "ยังไม่ถูกนะ ตอนจบเรื่อง เพื่อนทั้งสามมองเห็นแสงเรืองสีเหลืองในหลุม แล้วกระโดดลงไปและหายวับไปทันที ไม่ได้สู้ด้วยดาบหรือมีเรือมาช่วย",
    evidence: "\"The three friends looked into the hole and saw a yellow glow. They jumped in. They were gone in a flash.\""
  }
];

/* ---------- PART 2: 15 Fill-in-the-blank questions ---------- */
const FILL_BLANKS = [
  { id: "fb1", level: "easy", sentence: "The three friends looked through their ___ to check for pirates near the island.", answer: "binoculars", wordBank: ["binoculars", "treasure chest", "coconuts", "gold coins", "families"], hintLetter: "b", hintThai: "อุปกรณ์ที่ใช้ส่องดูของที่อยู่ไกลๆ (กล้องส่องทางไกล)", explanation: "The story says the friends used their binoculars from the hill to look for pirates.", evidence: "\"Through their binoculars, they could see the pirate ship sailing away to the south.\"" },
  { id: "fb2", level: "easy", sentence: "After two hours of digging, the friends pulled an old ___ out of the ground.", answer: "treasure chest", wordBank: ["binoculars", "treasure chest", "coconuts", "gold coins", "families"], hintLetter: "t", hintThai: "กล่องหรือหีบที่ใช้เก็บสมบัติ (หีบสมบัติ)", explanation: "They dug up the treasure chest and then opened it with the key in the lock.", evidence: "\"Two hours later, they pulled it out, opened it with the key which was in the lock...\"" },
  { id: "fb3", level: "easy", sentence: "Because they felt thirsty, the friends cracked open some ___ and drank the milk.", answer: "coconuts", wordBank: ["binoculars", "treasure chest", "coconuts", "gold coins", "families"], hintLetter: "c", hintThai: "ผลไม้เปลือกแข็งสีน้ำตาล มีน้ำอยู่ข้างใน (มะพร้าว)", explanation: "Being thirsty, they cracked open coconuts and drank the milk before digging.", evidence: "\"By now, they were thirsty, so they cracked open some coconuts and drank the milk.\"" },
  { id: "fb4", level: "easy", sentence: "Inside the chest, the friends found it was completely full of shiny ___.", answer: "gold coins", wordBank: ["binoculars", "treasure chest", "coconuts", "gold coins", "families"], hintLetter: "g", hintThai: "เหรียญที่ทำจากทองคำ (เหรียญทอง)", explanation: "The chest was full of gold coins, which is why Phoebe asked what they should do.", evidence: "\"...found that it was full of gold coins.\"" },
  { id: "fb5", level: "easy", sentence: "On the beach, the three friends met several ___ who had lost their gold coins to pirates.", answer: "families", wordBank: ["binoculars", "treasure chest", "coconuts", "gold coins", "families"], hintLetter: "f", hintThai: "กลุ่มคนในครอบครัวที่มากับเรือ (ครอบครัว)", explanation: "The people on the second ship turned out to be families, not pirates.", evidence: "\"The three friends ran to the beach and saw lots of families arriving on a boat.\"" },

  { id: "fb6", level: "medium", sentence: "Patrick told the families to sail to the ___ on the island to the north.", answer: "town", hintLetter: "t", hintThai: "สถานที่มีบ้านเรือนและร้านค้า (เมือง)", explanation: "Patrick suggested the town because a bigger ship there could take them to America.", evidence: "\"'There's a town on an island to the north. Go there,' Patrick suggested...\"" },
  { id: "fb7", level: "medium", sentence: "The families ___ the treasure chest onto their boat before they sailed away.", answer: "loaded", hintLetter: "l", hintThai: "การนำสิ่งของขึ้นไปบนพาหนะ (บรรทุกขึ้น)", explanation: "Before leaving, the families loaded the chest onto their boat.", evidence: "\"They fetched the treasure chest and the men loaded it onto the boat.\"" },
  { id: "fb8", level: "medium", sentence: "That night, three men arrived carrying torches, with the pirate captain as their ___.", answer: "prisoner", hintLetter: "p", hintThai: "คนที่ถูกจับตัวไว้ ไม่มีอิสระ (เชลย/นักโทษ)", explanation: "The pirate captain, recognisable by his hook, was being held prisoner by his own men.", evidence: "\"...they had the pirate captain with the hook as their prisoner.\"" },
  { id: "fb9", level: "medium", sentence: "When they heard shouting at midnight, the three friends quickly hid in some ___.", answer: "bushes", hintLetter: "b", hintThai: "พุ่มไม้เตี้ยๆ ที่ใช้ซ่อนตัวได้ (พุ่มไม้)", explanation: "The friends hid in the bushes as soon as they heard the shouting.", evidence: "\"...so they got up and quickly hid in some bushes.\"" },
  { id: "fb10", level: "medium", sentence: "The men discovered the friends' hiding place after Alex suddenly ___.", answer: "sneezed", hintLetter: "s", hintThai: "อาการจามที่เกิดขึ้นกะทันหันและมีเสียงดัง (จาม)", explanation: "Alex's sneeze made a noise that revealed exactly where they were hiding.", evidence: "\"At that moment, Alex sneezed.\"" },

  { id: "fb11", level: "challenging", sentence: "Waving their ___, the men ran straight towards the bushes where the children were hiding.", answer: "swords", hintLetter: "s", hintThai: "อาวุธมีคมยาว (ดาบ)", explanation: "The men waved their swords as they ran toward the sound of the sneeze.", evidence: "\"Waving their swords, the men ran over to where the three friends were hiding.\"" },
  { id: "fb12", level: "challenging", sentence: "Instead of finding the treasure, the men discovered only a big, empty ___ next to the tree.", answer: "hole", hintLetter: "h", hintThai: "ช่องว่างที่ขุดลงไปในพื้นดิน (หลุม)", explanation: "The treasure was already gone, so the men found only an empty hole where it used to be buried.", evidence: "\"The three men walked over to the tree, but they could only see a big hole.\"" },
  { id: "fb13", level: "challenging", sentence: "Deep inside the hole, the three friends noticed a strange, yellow ___ light.", answer: "glowing", hintLetter: "g", hintThai: "ลักษณะของแสงที่ส่องสว่างนุ่มนวล (เรืองแสง)", explanation: "The friends saw a glowing yellow light at the bottom of the hole right before they jumped.", evidence: "\"The three friends looked into the hole and saw a yellow glow.\"" },
  { id: "fb14", level: "challenging", sentence: "To escape the pirates, the three friends ___ into the hole.", answer: "jumped", hintLetter: "j", hintThai: "การกระโดดลงไป (กระโดด)", explanation: "Faced with the pirates, the friends chose to jump into the glowing hole rather than be caught.", evidence: "\"They jumped in.\"" },
  { id: "fb15", level: "challenging", sentence: "In a flash, the three friends completely ___ from sight.", answer: "disappeared", hintLetter: "d", hintThai: "หายไปอย่างกะทันหัน มองไม่เห็นอีกต่อไป (หายไป)", explanation: "The story ends with the friends vanishing instantly after jumping into the hole.", evidence: "\"They were gone in a flash.\"" }
];

/* ---------- PART 3: Story Detective Challenge (12 activities) ---------- */

/* Section A: Sequencing — 4 questions, 4 events each, correct order is index 0,1,2,3 (events are pre-shuffled at render time) */
const SEQUENCING = [
  {
    id: "seq1",
    title: "From the hill to the gold coins",
    events: [
      "Alex suggests climbing the hill to look for pirates.",
      "Through the binoculars, they see the pirate ship sailing south.",
      "The friends dig up the treasure chest.",
      "They open the chest and find it full of gold coins."
    ]
  },
  {
    id: "seq2",
    title: "Meeting the families",
    events: [
      "Alex realises the people on the second ship are not pirates.",
      "The three friends run to the beach.",
      "A woman explains that pirates stole their gold coins.",
      "Patrick gives the treasure chest to the families."
    ]
  },
  {
    id: "seq3",
    title: "Night on the beach",
    events: [
      "The families load the treasure chest onto their boat.",
      "The three friends eat bananas and lie down on the sand.",
      "At midnight, they hear shouting and hide in the bushes.",
      "Three men bring the pirate captain to the tree as their prisoner."
    ]
  },
  {
    id: "seq4",
    title: "The final escape",
    events: [
      "Alex sneezes and reveals the friends' hiding place.",
      "The men grab the three friends and take them to the hole.",
      "The friends see a glowing yellow light inside the hole.",
      "The three friends jump into the hole and disappear."
    ]
  }
];

/* Section B: True / False / Fix it — 4 statements */
const TRUE_FALSE = [
  {
    id: "tf1",
    statement: "The three friends decided to keep the gold coins for themselves.",
    isTrue: false,
    correction: "They decided to give the treasure back to the families whose gold coins had been stolen by the pirates.",
    correctionKeywords: ["families", "gave", "back", "stolen", "not theirs"],
    thai: "ยังไม่ถูกนะ ในเรื่องเด็กๆ ไม่ได้เก็บเหรียญทองไว้เอง แต่มอบหีบสมบัติคืนให้ครอบครัวที่ถูกโจรสลัดขโมยเหรียญทองไป",
    evidence: "\"'We watched the pirates hide some treasure and we dug it up,' said Patrick. 'Maybe it's yours. You can have it.'\""
  },
  {
    id: "tf2",
    statement: "Phoebe believed the treasure truly belonged to the three friends.",
    isTrue: false,
    correction: "Phoebe believed the treasure was not theirs, because the pirates were the ones who had stolen it.",
    correctionKeywords: ["not theirs", "pirates", "stole", "stolen"],
    thai: "ยังไม่ถูกนะ ฟีบี้พูดชัดเจนว่าสมบัตินี้ไม่ใช่ของพวกเขา เพราะโจรสลัดต่างหากที่เป็นคนขโมยมา",
    evidence: "\"'No, we didn't,' said Phoebe, 'but those pirates did. It isn't ours.'\""
  },
  {
    id: "tf3",
    statement: "When the three men arrived with torches at midnight, the pirate captain was leading them as their commander.",
    isTrue: false,
    correction: "The pirate captain was not leading the men — he was their prisoner.",
    correctionKeywords: ["prisoner", "captured", "not leading", "hook"],
    thai: "ยังไม่ถูกนะ กัปตันโจรสลัดไม่ได้เป็นผู้นำของกลุ่มนั้น แต่เขาถูกจับเป็นเชลยของพวกโจรสลัดคนอื่นต่างหาก",
    evidence: "\"...they had the pirate captain with the hook as their prisoner.\""
  },
  {
    id: "tf4",
    statement: "Alex sneezed while the three friends were hiding, and that is how the pirates found them.",
    isTrue: true,
    correction: "",
    correctionKeywords: [],
    thai: "ถูกต้อง! อเล็กซ์จามขึ้นมาโดยไม่ได้ตั้งใจ เสียงจามนั้นเองที่ทำให้โจรสลัดวิ่งตรงมายังพุ่มไม้ที่พวกเขาซ่อนตัวอยู่",
    evidence: "\"At that moment, Alex sneezed. Waving their swords, the men ran over to where the three friends were hiding.\""
  }
];

/* Section C: Short answer with story evidence — 4 questions */
const SHORT_ANSWER = [
  {
    id: "sa1",
    question: "Why did the friends decide not to keep the gold coins?",
    modelAnswer: "Because the pirates had stolen the gold coins from the families, so the treasure never really belonged to the three friends. They gave it back to the families instead.",
    keywords: ["stolen", "pirates", "not theirs", "families", "gave back"],
    thai: "เพราะเหรียญทองนั้นเป็นของครอบครัวที่ถูกโจรสลัดขโมยไป ไม่ใช่ของเด็กๆ พวกเขาจึงตัดสินใจคืนให้เจ้าของที่แท้จริง",
    evidence: "\"'We didn't steal it!' 'No, we didn't,' said Phoebe, 'but those pirates did. It isn't ours.'\""
  },
  {
    id: "sa2",
    question: "How did the three friends help the families they met on the beach?",
    modelAnswer: "They gave the thirsty families some coconuts to drink, and they gave the families back the treasure chest full of gold coins that the pirates had stolen.",
    keywords: ["coconuts", "treasure chest", "gold coins", "gave back", "help"],
    thai: "เด็กๆ ให้มะพร้าวแก่ครอบครัวที่กระหายน้ำ และมอบหีบสมบัติที่เต็มไปด้วยเหรียญทองคืนให้พวกเขา",
    evidence: "\"Patrick gave them some coconuts.\" / \"'Maybe it's yours. You can have it.'\""
  },
  {
    id: "sa3",
    question: "Why were the pirates able to find the three friends while they were hiding in the bushes?",
    modelAnswer: "Alex sneezed loudly, and the noise showed the men exactly where the three friends were hiding.",
    keywords: ["sneezed", "sneeze", "noise", "hiding place"],
    thai: "เพราะอเล็กซ์จามเสียงดัง ทำให้โจรสลัดได้ยินและวิ่งตรงมายังจุดที่พวกเขาซ่อนตัวอยู่ในพุ่มไม้",
    evidence: "\"At that moment, Alex sneezed.\""
  },
  {
    id: "sa4",
    question: "What does the glowing hole suggest about how the story ends?",
    modelAnswer: "The glowing yellow light suggests the hole is unusual or perhaps magical, since the friends vanished the instant they jumped in. The story does not tell us exactly where the hole leads — that part is left as a mystery.",
    keywords: ["magical", "mysterious", "unusual", "disappeared", "unknown", "mystery"],
    thai: "แสงเรืองสีเหลืองในหลุมทำให้รู้สึกว่าหลุมนี้อาจไม่ธรรมดา หรืออาจมีเวทมนตร์บางอย่าง เพราะเด็กๆ หายวับไปทันทีที่กระโดดลง แต่เรื่องราวไม่ได้บอกชัดเจนว่าหลุมนำไปสู่ที่ใด จุดนี้ยังคงเป็นปริศนา",
    evidence: "\"The three friends looked into the hole and saw a yellow glow. They jumped in. They were gone in a flash.\"",
    isInference: true
  }
];

/* ---------- Scoring configuration ---------- */
const SCORING = {
  totalPoints: 100,
  part1Points: 30,   // 15 Qs x 2 pts
  part2Points: 30,   // 15 Qs x 2 pts
  part3Points: 30,   // A:10 + B:10 + C:10
  vocabPoints: 10
};

const PERFORMANCE_LEVELS = [
  { min: 90, max: 100, title: "Treasure Master", thai: "สุดยอดนักผจญภัยผู้เชี่ยวชาญ" },
  { min: 75, max: 89, title: "Brave Explorer", thai: "นักสำรวจผู้กล้าหาญ" },
  { min: 60, max: 74, title: "Story Adventurer", thai: "นักผจญภัยแห่งเรื่องราว" },
  { min: 0, max: 59, title: "Keep Exploring", thai: "มุ่งมั่นสำรวจต่อไป" }
];
