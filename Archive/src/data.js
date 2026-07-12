/* =========================================================================
   Sound Garden Studio — Phonics content
   Bright EngMath · Interactive Phonics Teaching Studio
   -------------------------------------------------------------------------
   Curriculum notes:
   - British English (en-GB) reference pronunciation.
   - "oo" is split into short /ʊ/ (book) and long /uː/ (moon).
   - "th" is split into unvoiced /θ/ (thin) and voiced /ð/ (this).
   - Regular decodable words are kept separate from tricky (irregular) words.
   - Example words are chosen to clearly contain the target grapheme.
   ========================================================================= */
(function (global) {
  'use strict';

  /* Multi-letter graphemes treated as ONE sound unit when segmenting a word
     for blending. Longer units are matched first. Order matters. */
  var MULTIGRAPHS = [
    'igh', 'qu',
    'ck', 'ch', 'sh', 'th', 'ng', 'ph', 'wh',
    'ai', 'ay', 'oa', 'ie', 'ee', 'ea', 'or', 'oo', 'ou', 'oi', 'oy',
    'ue', 'ew', 'er', 'ar', 'ir', 'ur', 'aw', 'au',
    'll', 'ss', 'ff', 'zz'
  ];

  /* Break a word into grapheme units (digraphs stay together). */
  function segment(word) {
    var w = String(word).toLowerCase();
    var out = [];
    var i = 0;
    while (i < w.length) {
      var matched = null;
      for (var m = 0; m < MULTIGRAPHS.length; m++) {
        var g = MULTIGRAPHS[m];
        if (w.substr(i, g.length) === g) { matched = g; break; }
      }
      if (matched) { out.push(matched); i += matched.length; }
      else { out.push(w[i]); i += 1; }
    }
    return out;
  }

  var STAGES = [
    {
      id: 1,
      area: 'Sound Seeds',
      title: 'Sound Seeds',
      thTitle: 'เพาะเมล็ดเสียง',
      color: '#F4C24E',
      tint: '#FDF1D2',
      icon: 'seed',
      objectiveEn: 'Hear and say the first six letter sounds, then blend them into short CVC words.',
      objective: 'ฟังและออกเสียงตัวอักษร 6 เสียงแรก แล้วผสมเป็นคำสั้น (CVC) อย่างเป็นขั้นตอน',
      duration: 25,
      order: ['s', 'a', 't', 'p', 'i', 'n'],
      teacherTip: 'ออกเสียงพยัญชนะให้สั้นและชัด เลี่ยงการเติมเสียง “เออะ” ท้ายพยัญชนะ (พูด /t/ ไม่ใช่ “เทอะ”)',
      sentences: ['Sam sat on a mat.', 'A pin is in the tin.', 'Pat can tap the pan.'],
      tricky: ['I', 'the', 'to', 'no', 'go'],
      sounds: [
        { key: 's', grapheme: 's', type: 'letter', phoneme: '/s/', say: 'sss', example: 'sun', position: 'beginning',
          mouth: 'Smile a little, tongue behind the top teeth, push the air out softly.',
          note: 'เสียงลมยาว /s/ เหมือนเสียงงู ลากเสียงได้',
          words: ['sat', 'sit', 'sip', 'sap', 'sun', 'sock', 'spin', 'snap'] },
        { key: 'a', grapheme: 'a', type: 'letter', phoneme: '/æ/', say: 'ah', example: 'ant', position: 'beginning',
          mouth: 'Open the mouth wide, tongue low and flat.',
          note: 'เสียง a สั้น (æ) อ้าปากกว้าง เหมือนคำว่า ant',
          words: ['at', 'an', 'am', 'ant', 'tap', 'pan', 'sat', 'nap'] },
        { key: 't', grapheme: 't', type: 'letter', phoneme: '/t/', say: 't', example: 'tap', position: 'beginning',
          mouth: 'Tongue tip taps behind the top teeth, quick puff of air.',
          note: 'เสียงสั้น ๆ จากปลายลิ้น ไม่ก้อง',
          words: ['tap', 'tin', 'tan', 'tip', 'sat', 'pat', 'pit', 'nut'] },
        { key: 'p', grapheme: 'p', type: 'letter', phoneme: '/p/', say: 'p', example: 'pin', position: 'beginning',
          mouth: 'Lips together, then pop them apart with a little air.',
          note: 'ปล่อยลมเบา ๆ จากริมฝีปาก ไม่ก้อง',
          words: ['pit', 'pat', 'pan', 'pin', 'tap', 'nap', 'sip', 'spin'] },
        { key: 'i', grapheme: 'i', type: 'letter', phoneme: '/ɪ/', say: 'ih', example: 'insect', position: 'beginning',
          mouth: 'Mouth a little open, tongue high at the front, short sound.',
          note: 'เสียง i สั้น (ɪ) สั้นและกระชับ',
          words: ['in', 'it', 'sit', 'sip', 'pin', 'tin', 'pit', 'nip'] },
        { key: 'n', grapheme: 'n', type: 'letter', phoneme: '/n/', say: 'nnn', example: 'net', position: 'beginning',
          mouth: 'Tongue tip behind the top teeth, hum the sound through the nose.',
          note: 'เสียงนาสิกต่อเนื่อง ลากเสียงได้',
          words: ['an', 'in', 'nap', 'nip', 'net', 'pan', 'pin', 'tin'] }
      ]
    },
    {
      id: 2,
      area: 'Little Word Garden',
      title: 'Little Word Garden',
      thTitle: 'สวนคำน้อย',
      color: '#73B995',
      tint: '#E4F1EA',
      icon: 'leaf',
      objectiveEn: 'Read more CVC words fluently and meet the ending "ck".',
      objective: 'อ่านคำ CVC ได้คล่องขึ้น และรู้จัก ck ที่มักพบท้ายคำหลังสระเสียงสั้น',
      duration: 25,
      order: ['ck', 'e', 'h', 'r', 'm', 'd'],
      teacherTip: 'ให้เด็กแตะทีละเสียง แล้วลากเสียงเข้าหากันก่อนอ่านทั้งคำ (touch – say – blend)',
      sentences: ['The red hen is on the mat.', 'Dad had a red hat.', 'Ed can pat the hen.'],
      tricky: ['he', 'she', 'we', 'me', 'be'],
      sounds: [
        { key: 'ck', grapheme: 'ck', type: 'digraph', phoneme: '/k/', say: 'k', example: 'duck', position: 'ending', match: 'ck',
          mouth: 'Back of the tongue lifts to the roof of the mouth, quick sound.',
          note: 'สองตัว หนึ่งเสียง /k/ มักอยู่ท้ายคำหลังสระเสียงสั้น',
          words: ['back', 'pack', 'sack', 'neck', 'pick', 'sick', 'kick', 'duck'] },
        { key: 'e', grapheme: 'e', type: 'letter', phoneme: '/e/', say: 'eh', example: 'egg', position: 'beginning',
          mouth: 'Mouth open a little, tongue mid-front, short sound.',
          note: 'เสียง e สั้น (e) เหมือนคำว่า egg',
          words: ['egg', 'bed', 'ten', 'pen', 'red', 'pet', 'men', 'net'] },
        { key: 'h', grapheme: 'h', type: 'letter', phoneme: '/h/', say: 'h', example: 'hat', position: 'beginning',
          mouth: 'A soft, quiet breath out, no voice.',
          note: 'เสียงลมหายใจเบา ๆ ไม่ก้อง',
          words: ['hat', 'hen', 'him', 'hit', 'has', 'had', 'hid', 'hip'] },
        { key: 'r', grapheme: 'r', type: 'letter', phoneme: '/r/', say: 'rrr', example: 'red', position: 'beginning',
          note: 'เสียง r ที่ต้นคำ ไม่กลิ้งลิ้น',
          words: ['red', 'rat', 'run', 'rip', 'ram', 'ran', 'rim', 'rack'] },
        { key: 'm', grapheme: 'm', type: 'letter', phoneme: '/m/', say: 'mmm', example: 'map', position: 'beginning',
          mouth: 'Lips together and hum. You can hold the sound.',
          note: 'ปิดริมฝีปากแล้วลากเสียง (ก้อง)',
          words: ['mat', 'man', 'map', 'men', 'mad', 'mix', 'met', 'mum'] },
        { key: 'd', grapheme: 'd', type: 'letter', phoneme: '/d/', say: 'd', example: 'dog', position: 'beginning',
          mouth: 'Tongue tip behind top teeth, a short voiced sound.',
          note: 'เสียงก้องสั้น ๆ จากปลายลิ้น',
          words: ['dad', 'den', 'did', 'dip', 'dig', 'dam', 'red', 'bed'] }
      ]
    },
    {
      id: 3,
      area: 'Sound Trail',
      title: 'Sound Trail',
      thTitle: 'เส้นทางเสียง',
      color: '#F0857D',
      tint: '#FCE6E4',
      icon: 'signpost',
      objectiveEn: 'Complete the core single letters: g, o, u, l, f, b.',
      objective: 'อ่านและจำแนกเสียง g, o, u, l, f, b ในตำแหน่งต้นและท้ายคำ',
      duration: 25,
      order: ['g', 'o', 'u', 'l', 'f', 'b'],
      teacherTip: 'สลับถาม “เสียงต้นคืออะไร” และ “เสียงท้ายคืออะไร” เพื่อฝึกฟังอย่างมีเป้าหมาย',
      sentences: ['A big frog sat on a log.', 'The bug is in the mud.', 'Dad got a red bus.'],
      tricky: ['was', 'my', 'you', 'they', 'her'],
      sounds: [
        { key: 'g', grapheme: 'g', type: 'letter', phoneme: '/g/', say: 'g', example: 'gate', position: 'beginning',
          mouth: 'Back of the tongue lifts, a short voiced sound.',
          note: 'เสียง g แข็ง (hard g) ก้อง',
          words: ['get', 'got', 'gap', 'gas', 'dog', 'bag', 'pig', 'big'] },
        { key: 'o', grapheme: 'o', type: 'letter', phoneme: '/ɒ/', say: 'o', example: 'octopus', position: 'beginning',
          mouth: 'Round the lips a little, mouth open, short sound.',
          note: 'เสียง o สั้น (ɒ) เหมือนคำว่า on',
          words: ['on', 'pot', 'top', 'dog', 'log', 'hot', 'mop', 'not'] },
        { key: 'u', grapheme: 'u', type: 'letter', phoneme: '/ʌ/', say: 'uh', example: 'umbrella', position: 'beginning',
          mouth: 'Mouth relaxed and open, short sound from the middle.',
          note: 'เสียง u สั้น (ʌ) เหมือนคำว่า up',
          words: ['up', 'bus', 'sun', 'cup', 'fun', 'mud', 'run', 'but'] },
        { key: 'l', grapheme: 'l', type: 'letter', phoneme: '/l/', say: 'lll', example: 'leg', position: 'beginning',
          mouth: 'Tongue tip touches behind the top teeth, hold the sound.',
          note: 'ปลายลิ้นแตะหลังฟันบน ลากเสียงได้',
          words: ['leg', 'lip', 'lid', 'lap', 'let', 'log', 'lot', 'bell'] },
        { key: 'f', grapheme: 'f', type: 'letter', phoneme: '/f/', say: 'fff', example: 'fan', position: 'beginning',
          mouth: 'Top teeth on the bottom lip, blow air softly. Hold it.',
          note: 'ฟันบนแตะริมฝีปากล่าง แล้วปล่อยลม ลากเสียงได้',
          words: ['fit', 'fun', 'fan', 'fog', 'fig', 'fell', 'fib', 'off'] },
        { key: 'b', grapheme: 'b', type: 'letter', phoneme: '/b/', say: 'b', example: 'bed', position: 'beginning',
          mouth: 'Lips together, then a short voiced pop.',
          note: 'เสียงก้องสั้นจากริมฝีปาก',
          words: ['bed', 'bat', 'bag', 'bus', 'bun', 'big', 'bin', 'bib'] }
      ]
    },
    {
      id: 4,
      area: 'Vowel Team Workshop',
      title: 'Vowel Team Workshop',
      thTitle: 'เวิร์กช็อปทีมสระ',
      color: '#6FB2E4',
      tint: '#E1EFFA',
      icon: 'tools',
      objectiveEn: 'Read the long-vowel teams ai, oa, ie, ee, or, plus the sound j.',
      objective: 'อ่านรูปสะกด ai, oa, ie, ee, or และทบทวนเสียง j ในคำจริง',
      duration: 30,
      order: ['ai', 'j', 'oa', 'ie', 'ee', 'or'],
      teacherTip: 'วงคู่ตัวอักษรเป็นหนึ่งหน่วยเสียง อย่าให้เด็กแยกอ่านทีละตัว',
      sentences: ['The goat is on the road.', 'I can see a green tree.', 'The rain fell on the sail.'],
      tricky: ['all', 'are', 'said', 'so', 'have'],
      sounds: [
        { key: 'ai', grapheme: 'ai', type: 'vowel-team', phoneme: '/eɪ/', say: 'ay', example: 'rain', position: 'middle', match: 'ai',
          note: 'ทีมสระ ai อ่าน /eɪ/ มักอยู่กลางคำ',
          words: ['aid', 'aim', 'wait', 'paid', 'maid', 'pain', 'rain', 'sail'] },
        { key: 'j', grapheme: 'j', type: 'letter', phoneme: '/dʒ/', say: 'j', example: 'jet', position: 'beginning',
          note: 'เสียง j ที่ต้นคำ (ก้อง)',
          words: ['jet', 'jam', 'job', 'jar', 'jug', 'jog', 'jab', 'jump'] },
        { key: 'oa', grapheme: 'oa', type: 'vowel-team', phoneme: '/əʊ/', say: 'oh', example: 'boat', position: 'middle', match: 'oa',
          note: 'ทีมสระ oa อ่าน /əʊ/ มักอยู่กลางคำ',
          words: ['boat', 'coat', 'goat', 'road', 'toad', 'soap', 'soak', 'load'] },
        { key: 'ie', grapheme: 'ie', type: 'vowel-team', phoneme: '/aɪ/', say: 'eye', example: 'pie', position: 'ending', match: 'ie',
          note: 'ทีมสระ ie อ่าน /aɪ/ (บางคำ เช่น field/chief อ่าน /iː/ เป็นข้อยกเว้น)',
          words: ['pie', 'tie', 'lie', 'die', 'cried', 'tried', 'dried', 'fried'] },
        { key: 'ee', grapheme: 'ee', type: 'vowel-team', phoneme: '/iː/', say: 'ee', example: 'tree', position: 'middle', match: 'ee',
          note: 'ทีมสระ ee อ่าน /iː/ เสียงยาว',
          words: ['bee', 'see', 'tree', 'seed', 'need', 'feed', 'feet', 'green'] },
        { key: 'or', grapheme: 'or', type: 'vowel-team', phoneme: '/ɔː/', say: 'or', example: 'fork', position: 'middle', match: 'or',
          note: 'รูปสะกด or อ่าน /ɔː/',
          words: ['or', 'for', 'corn', 'horn', 'fork', 'port', 'sort', 'storm'] }
      ]
    },
    {
      id: 5,
      area: 'Sound Lab',
      title: 'Sound Lab',
      thTitle: 'ห้องแล็บเสียง',
      color: '#E39A6B',
      tint: '#FBEBDD',
      icon: 'flask',
      objectiveEn: 'Meet z, w, ng, v and compare the two "oo" sounds.',
      objective: 'แยกเสียง z, w, ng, v และเปรียบเทียบ oo เสียงสั้นกับ oo เสียงยาว',
      duration: 30,
      order: ['z', 'w', 'ng', 'v', 'oo-short', 'oo-long'],
      teacherTip: 'วางคำ book และ moon คู่กัน ให้เด็กสังเกตว่าเขียนเหมือนกันแต่เสียงต่างกัน',
      sentences: ['The king can sing a song.', 'Look at the good book.', 'The moon is over the pool.'],
      tricky: ['like', 'some', 'come', 'one', 'do'],
      sounds: [
        { key: 'z', grapheme: 'z', type: 'letter', phoneme: '/z/', say: 'zzz', example: 'zip', position: 'beginning',
          mouth: 'Like /s/ but switch your voice on — you feel a buzz.',
          note: 'เสียงก้องต่อเนื่อง เหมือน /s/ แต่ก้อง',
          words: ['zoo', 'zip', 'zap', 'zig', 'zero', 'buzz', 'fizz', 'jazz'] },
        { key: 'w', grapheme: 'w', type: 'letter', phoneme: '/w/', say: 'wuh', example: 'web', position: 'beginning',
          mouth: 'Round your lips like a small kiss, then open.',
          note: 'ห่อริมฝีปากก่อนออกเสียง',
          words: ['we', 'win', 'wet', 'wax', 'web', 'wig', 'wind', 'wall'] },
        { key: 'ng', grapheme: 'ng', type: 'digraph', phoneme: '/ŋ/', say: 'ng', example: 'ring', position: 'ending', match: 'ng',
          note: 'เสียงนาสิกท้ายคำ /ŋ/ (สองตัว หนึ่งเสียง)',
          words: ['sing', 'ring', 'king', 'wing', 'song', 'bang', 'hang', 'long'] },
        { key: 'v', grapheme: 'v', type: 'letter', phoneme: '/v/', say: 'vvv', example: 'van', position: 'beginning',
          mouth: 'Top teeth on the bottom lip like /f/, but voice on.',
          note: 'เสียงก้อง ฟันบนแตะริมฝีปากล่าง',
          words: ['van', 'vet', 'vest', 'vote', 'vase', 'five', 'seven', 'river'] },
        { key: 'oo-short', grapheme: 'oo', type: 'vowel-team', phoneme: '/ʊ/', say: 'uu (short)', example: 'book', position: 'middle', match: 'oo',
          soundLabel: 'short oo',
          note: 'oo เสียงสั้น /ʊ/ เหมือนคำว่า book, look',
          words: ['book', 'cook', 'look', 'foot', 'good', 'wood', 'hook', 'took'] },
        { key: 'oo-long', grapheme: 'oo', type: 'vowel-team', phoneme: '/uː/', say: 'oo (long)', example: 'moon', position: 'middle', match: 'oo',
          soundLabel: 'long oo',
          note: 'oo เสียงยาว /uː/ เหมือนคำว่า moon, food',
          words: ['moon', 'spoon', 'pool', 'room', 'food', 'soon', 'noon', 'boot'] }
      ]
    },
    {
      id: 6,
      area: 'Digraph House',
      title: 'Digraph House',
      thTitle: 'บ้านพยัญชนะควบ',
      color: '#A98BC9',
      tint: '#EDE6F5',
      icon: 'house',
      objectiveEn: 'Read consonant digraphs ch, sh, th and tell the two "th" sounds apart.',
      objective: 'อ่าน digraph เป็นหนึ่งเสียง และแยก th เสียงก้องกับไม่ก้อง',
      duration: 30,
      order: ['y', 'x', 'ch', 'sh', 'th-quiet', 'th-voiced'],
      teacherTip: 'ให้เด็กแตะคอเมื่อออกเสียง th: ถ้ารู้สึกสั่นคือเสียงก้อง /ð/ (this), ถ้าไม่สั่นคือ /θ/ (thin)',
      sentences: ['This is a thin shell.', 'The chick is in the shop.', 'Ten fish swim with the ship.'],
      tricky: ['when', 'what', 'where', 'there', 'here'],
      sounds: [
        { key: 'y', grapheme: 'y', type: 'letter', phoneme: '/j/', say: 'yuh', example: 'yes', position: 'beginning',
          note: 'เสียง y ที่ต้นคำ /j/',
          words: ['yes', 'yet', 'yam', 'yard', 'yell', 'yuck', 'yawn', 'yolk'] },
        { key: 'x', grapheme: 'x', type: 'letter', phoneme: '/ks/', say: 'ks', example: 'fox', position: 'ending',
          note: 'x อ่าน /ks/ มักพบท้ายคำ',
          words: ['ax', 'ox', 'fox', 'box', 'wax', 'six', 'fix', 'mix'] },
        { key: 'ch', grapheme: 'ch', type: 'digraph', phoneme: '/tʃ/', say: 'ch', example: 'chip', position: 'beginning', match: 'ch',
          note: 'สองตัว หนึ่งเสียง /tʃ/',
          words: ['chip', 'chin', 'chat', 'chop', 'chick', 'check', 'much', 'rich'] },
        { key: 'sh', grapheme: 'sh', type: 'digraph', phoneme: '/ʃ/', say: 'sh', example: 'ship', position: 'beginning', match: 'sh',
          mouth: 'Push lips forward, quiet air out — "shhh".',
          note: 'เสียงลมยาวและเบา /ʃ/',
          words: ['ship', 'shop', 'shed', 'shut', 'shell', 'fish', 'wish', 'dish'] },
        { key: 'th-quiet', grapheme: 'th', type: 'digraph', phoneme: '/θ/', say: 'th (quiet)', example: 'thin', position: 'beginning', match: 'th',
          soundLabel: 'quiet th',
          mouth: 'Tongue tip between the teeth, blow air — no voice.',
          note: 'th ไม่ก้อง /θ/ เหมือนคำว่า thin, bath (คอไม่สั่น)',
          words: ['thin', 'thick', 'think', 'thank', 'bath', 'path', 'both', 'teeth'] },
        { key: 'th-voiced', grapheme: 'th', type: 'digraph', phoneme: '/ð/', say: 'th (buzzy)', example: 'this', position: 'beginning', match: 'th',
          soundLabel: 'buzzy th',
          mouth: 'Tongue tip between the teeth, turn your voice on — it buzzes.',
          note: 'th ก้อง /ð/ เหมือนคำว่า this, that (คอสั่น)',
          words: ['this', 'that', 'then', 'them', 'than', 'mother', 'father', 'brother'] }
      ]
    },
    {
      id: 7,
      area: 'Sound Explorer',
      title: 'Sound Explorer',
      thTitle: 'นักสำรวจเสียง',
      color: '#4FB0A5',
      tint: '#DDF0ED',
      icon: 'compass',
      objectiveEn: 'Explore qu, ou, oi, ue, er, ar and use them in longer words.',
      objective: 'อ่าน qu, ou, oi, ue, er, ar และนำไปใช้ในคำหลายพยางค์',
      duration: 30,
      order: ['qu', 'ou', 'oi', 'ue', 'er', 'ar'],
      teacherTip: 'แบ่งคำยาวเป็นส่วน เช่น win-ter, pa-per แล้วค่อยรวมเป็นคำเต็ม',
      sentences: ['The queen found a coin.', 'The blue car is on the farm.', 'A loud shout came from the park.'],
      tricky: ['little', 'down', 'saw', 'very', 'put'],
      sounds: [
        { key: 'qu', grapheme: 'qu', type: 'digraph', phoneme: '/kw/', say: 'kw', example: 'queen', position: 'beginning', match: 'qu',
          note: 'q มักเดินคู่กับ u อ่าน /kw/',
          words: ['queen', 'quick', 'quiz', 'quiet', 'quack', 'quit', 'quilt', 'squid'] },
        { key: 'ou', grapheme: 'ou', type: 'vowel-team', phoneme: '/aʊ/', say: 'ow', example: 'cloud', position: 'middle', match: 'ou',
          note: 'ou อ่าน /aʊ/ ในคำกลุ่มนี้',
          words: ['out', 'ouch', 'cloud', 'loud', 'round', 'shout', 'mouth', 'found'] },
        { key: 'oi', grapheme: 'oi', type: 'vowel-team', phoneme: '/ɔɪ/', say: 'oy', example: 'coin', position: 'middle', match: 'oi',
          note: 'oi อ่าน /ɔɪ/ มักอยู่กลางคำ',
          words: ['oil', 'coin', 'boil', 'soil', 'join', 'point', 'coil', 'spoil'] },
        { key: 'ue', grapheme: 'ue', type: 'vowel-team', phoneme: '/uː/', say: 'oo', example: 'blue', position: 'ending', match: 'ue',
          note: 'ue อ่าน /uː/ มักอยู่ท้ายคำ',
          words: ['blue', 'glue', 'true', 'clue', 'due', 'rescue', 'statue', 'value'] },
        { key: 'er', grapheme: 'er', type: 'vowel-team', phoneme: '/ɜː/, /ə/', say: 'er', example: 'her', position: 'ending', match: 'er',
          note: 'er อ่าน /ɜː/ เมื่อเน้น (her) และ /ə/ เบา ๆ ท้ายพยางค์ (winter)',
          words: ['her', 'term', 'fern', 'verb', 'tiger', 'winter', 'paper', 'sister'] },
        { key: 'ar', grapheme: 'ar', type: 'vowel-team', phoneme: '/ɑː/', say: 'ar', example: 'car', position: 'middle', match: 'ar',
          note: 'ar อ่าน /ɑː/',
          words: ['car', 'jar', 'far', 'star', 'park', 'arm', 'farm', 'dark'] }
      ]
    }
  ];

  /* English classroom scripts (teacher language). */
  var SCRIPTS = [
    'Listen to the sound.',
    'Say it with me.',
    'Point to the letters.',
    'Sound it out.',
    'Blend the sounds together.',
    'Read the whole word.',
    'Say it again, smoothly.',
    'Great blending!',
    'Try again. Listen carefully.',
    'What is the first sound?',
    'What is the last sound?'
  ];

  /* Attach helpers + data to a single global namespace. */
  global.SG = {
    stages: STAGES,
    scripts: SCRIPTS,
    multigraphs: MULTIGRAPHS,
    segment: segment,
    stageById: function (id) { return STAGES.find(function (s) { return s.id === Number(id); }); },
    soundByKey: function (stageId, key) {
      var st = this.stageById(stageId);
      return st ? st.sounds.find(function (s) { return s.key === key; }) : null;
    },
    match: function (sound) { return sound.match || sound.grapheme; },
    allWords: function (stage) {
      var set = [];
      stage.sounds.forEach(function (s) { s.words.forEach(function (w) { if (set.indexOf(w) < 0) set.push(w); }); });
      return set;
    }
  };
})(window);
