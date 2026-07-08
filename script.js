(function(){
'use strict';

// ===================== DATA =====================
const CIVS = [
  {
    id:'mesopotamia', name:'Mesopotamia', fullName:'the Mesopotamian Civilization', river:'Tigris and Euphrates', emoji:'🏛️',
    color:'#C49A6C', funFact:'Known as the Cradle of Civilization',
    keyIdeas:'Between the Tigris and Euphrates rivers. Invented writing, the wheel, and written laws. Built ziggurats and irrigation systems.',
    locationDesc:'Between the Tigris and Euphrates rivers in the Fertile Crescent.',
    locScene:'linear-gradient(#87CEEB,#B0E0E6)',
    locFeedback:'Excellent! Mesopotamia was located between the Tigris and Euphrates rivers. The rivers provided water for drinking, farming, and transportation.',
    riverFact:'Flooding is a major problem brought by the rivers, so the Mesopotamians learned to dig channels to irrigate the dry lands and save water when needed. They became very successful, resulting in a surplus of food products.',
    correctGeo:[
      {icon:'🌊',text:'Between Tigris and Euphrates',desc:'The land between two rivers'},
      {icon:'⚠️',text:'Unpredictable flooding',desc:'Could destroy crops'},
      {icon:'🏞️',text:'Open plains',desc:'Flat land for farming'},
      {icon:'💧',text:'Needed irrigation systems',desc:'Man-made water channels'}
    ],
    wrongGeo:[
      {icon:'🏜️',text:'Desert protection',desc:'Natural barriers'},
      {icon:'🌊',text:'Predictable flooding',desc:'Regular annual floods'},
      {icon:'📐',text:'Planned grid cities',desc:'Organized street layout'},
      {icon:'💛',text:'Loess soil',desc:'Fine yellow silt'}
    ],
    achievements:[
      {name:'Code of Hammurabi',icon:'📜',desc:'Written laws'},
      {name:'Math System Based on Number 60',icon:'🔢',desc:'Base-60 counting system'},
      {name:'Cuneiform',icon:'✍️',desc:'First writing system'},
      {name:'Ziggurat',icon:'🏗️',desc:'Massive temple towers'}
    ],
    wrongAch:[
      {name:'Pyramids',icon:'🔺',desc:'Giant tombs for pharaohs'},
      {name:'Mummification',icon:'⚰️',desc:'Preserving bodies'},
      {name:'Paper',icon:'📄',desc:'Paper-like sheets'},
      {name:'Silk Production',icon:'🧵',desc:'Luxury fabric from silkworms'}
    ],
    summaryTitle:'Where Civilization Was Born!',
    summaryDesc:'Between the Tigris and Euphrates Rivers, Mesopotamia became the world\'s first civilization. It gave us the first cities, writing (cuneiform), laws, and inventions that changed history forever!',
    summaryTagline:'The First to Write, Build, and Rule!'
  }, {
    id:'egypt', name:'Egypt', fullName:'the Ancient Egyptian Civilization', river:'Nile', emoji:'🔺',
    color:'#E8B84B', funFact:'The Nile flooded at the same time every year, making farming predictable and reliable.',
    keyIdeas:'Built along the Nile River. Known for pyramids, hieroglyphics, papyrus, and a 365-day calendar.',
    locationDesc:'Along the banks of the Nile River in northeast Africa.',
    locScene:'linear-gradient(#F5DEB3,#F0C060)',
    locFeedback:'Perfect! Egypt was built along the Nile River. The Nile provided water in the middle of a desert and its predictable flooding made farming easy.',
    riverFact:'It helped Egyptian farmers create a good system of irrigation canals and plow for farming wheat, barley, and flax that are staple foods. The river also helped for transportation and communication. It is a source of food and sports for the Egyptians who are skilled in boatmaking.',
    correctGeo:[
      {icon:'🌊',text:'Nile River',desc:'World\'s longest river'},
      {icon:'📅',text:'Predictable flooding',desc:'Regular annual floods'},
      {icon:'🏜️',text:'Desert protection',desc:'Natural barriers from invaders'},
      {icon:'🌾',text:'Excellent farming',desc:'Rich fertile soil'}
    ],
    wrongGeo:[
      {icon:'⚠️',text:'Unpredictable flooding',desc:'Could destroy crops'},
      {icon:'🏞️',text:'Open plains',desc:'Flat land'},
      {icon:'💛',text:'Loess soil',desc:'Fine yellow silt'},
      {icon:'🌊',text:'Two rivers',desc:'Land between two rivers'}
    ],
    achievements:[
      {name:'Pyramids',icon:'🔺',desc:'Massive royal tombs'},
      {name:'Mummification',icon:'⚰️',desc:'Preserving bodies'},
      {name:'Paper',icon:'📜',desc:'Paper-like sheets'},
      {name:'Advanced Medical Tools',icon:'🩺',desc:'Surgical instruments'}
    ],
    wrongAch:[
      {name:'Cuneiform',icon:'✍️',desc:'Wedge-shaped writing'},
      {name:'Ziggurat',icon:'🏗️',desc:'Temple towers'},
      {name:'Code of Hammurabi',icon:'📜',desc:'Written laws'},
      {name:'Toilet',icon:'🚽',desc:'Indoor toilets in homes'}
    ],
    summaryTitle:'The Kingdom of the Nile!',
    summaryDesc:'Along the mighty Nile River, the Egyptians built gigantic pyramids, mysterious mummies, and magnificent temples. Their advanced knowledge of farming, engineering, and medicine amazed the ancient world.',
    summaryTagline:'Where Pharaohs Reached for Eternity!'
  },
  {
    id:'indus', name:'Indus Valley', fullName:'the Indus Valley Civilization', river:'Indus', emoji:'🐪',
    color:'#7CB342', funFact:'Indus cities like Mohenjo-Daro had advanced drainage systems and grid street planning.',
    keyIdeas:'Located along the Indus River. Known for planned cities, advanced drainage, standardized weights, and extensive trade.',
    locationDesc:'Along the Indus River in modern-day Pakistan and India.',
    locScene:'linear-gradient(#C8E6C9,#A5D6A7)',
    locFeedback:'Great choice! The Indus Valley civilization grew along the Indus River. The river made farming possible and rivers were used for trade.',
    riverFact:'Floodwater from the river helped in irrigation for agriculture. It also assisted in the great engineering feats of the Indus civilization in plumbing baths, drain, and sewerage.',
    correctGeo:[
      {icon:'🌊',text:'Indus River',desc:'Major river of South Asia'},
      {icon:'🌧️',text:'Seasonal flooding',desc:'Deposited rich soil'},
      {icon:'📐',text:'Planned grid cities',desc:'Organized street layout'},
      {icon:'🚢',text:'Trade routes',desc:'Connected to other civilizations'}
    ],
    wrongGeo:[
      {icon:'🏜️',text:'Desert protection',desc:'Natural barriers'},
      {icon:'💛',text:'Loess soil',desc:'Fine yellow silt'},
      {icon:'⚠️',text:'Unpredictable flooding',desc:'Could destroy crops'},
      {icon:'🌊',text:'Two rivers',desc:'Land between two rivers'}
    ],
    achievements:[
      {name:'Public baths',icon:'🛁',desc:'Great Bath at Mohenjo-Daro'},
      {name:'Grid-Planned City',icon:'📐',desc:'Planned street layouts'},
      {name:'Toilet',icon:'🚽',desc:'Indoor toilets in homes'},
      {name:'Drainage Systems in Houses',icon:'🚰',desc:'Advanced sewers'}
    ],
    wrongAch:[
      {name:'Pyramids',icon:'🔺',desc:'Giant tombs'},
      {name:'Mummification',icon:'⚰️',desc:'Body preservation'},
      {name:'Silk Production',icon:'🧵',desc:'Luxury fabric'},
      {name:'Tea',icon:'🍵',desc:'Popular drink from leaves'}
    ],
    summaryTitle:'The Cleanest Ancient City!',
    summaryDesc:'The people of the Indus Valley built well-planned cities with straight roads, brick houses, and even indoor bathrooms and drainage systems—thousands of years before modern plumbing!',
    summaryTagline:'Ancient Cities Ahead of Their Time!'
  },
  {
    id:'huanghe', name:'Huang He', fullName:'the Huang He Civilization', river:'Yellow River', emoji:'🐉',
    color:'#E8C870', funFact:'The Yellow River is called "China\'s Sorrow" because of its dangerous flooding.',
    keyIdeas:'Built along the Yellow River (Huang He). Known for silk, bronze casting, oracle bones, and flood control systems.',
    locationDesc:'Along the Yellow River (Huang He) in northern China.',
    locScene:'linear-gradient(#FFF3E0,#FFE0B2)',
    locFeedback:'Excellent! The Huang He (Yellow River) civilization developed along the Yellow River in China. The river provided water but also brought dangerous floods that required control measures.',
    riverFact:'The banks of the river and the fertile floodplains allowed early Chinese to plant millet rice, oats, barley and soybeans. It provides water for irrigation, fishing and transportation. It is called the River of Sorrows due to the violent floods that brings death and destruction, which the early Chinese learned to dredge the river channel and construct dikes to lessen the danger of floods.',
    correctGeo:[
      {icon:'🌊',text:'Yellow River',desc:'China\'s second longest river'},
      {icon:'💛',text:'Loess soil',desc:'Fine yellow silt'},
      {icon:'⚠️',text:'Dangerous flooding',desc:'Could destroy villages'},
      {icon:'🏗️',text:'Built levees',desc:'Man-made river walls'}
    ],
    wrongGeo:[
      {icon:'📅',text:'Predictable flooding',desc:'Regular annual floods'},
      {icon:'🏜️',text:'Desert protection',desc:'Natural barriers'},
      {icon:'📐',text:'Planned grid cities',desc:'Organized street layout'},
      {icon:'🌊',text:'Two rivers',desc:'Land between two rivers'}
    ],
    achievements:[
      {name:'Silk Production',icon:'🧵',desc:'Luxury fabric from silkworms'},
      {name:'Oracle Bone Scripts',icon:'🦴',desc:'Used for fortune telling'},
      {name:'Flood Control',icon:'🏗️',desc:'Dikes and levees'},
      {name:'Tea',icon:'🍵',desc:'Popular drink from leaves'}
    ],
    wrongAch:[
      {name:'Code of Hammurabi',icon:'📜',desc:'Written laws'},
      {name:'Cuneiform',icon:'✍️',desc:'Wedge writing'},
      {name:'Pyramids',icon:'🔺',desc:'Giant tombs'},
      {name:'Paper',icon:'📄',desc:'Paper material'}
    ],
    summaryTitle:'The Cradle of Chinese Civilization!',
    summaryDesc:'The fertile lands around the Yellow River helped ancient China grow into a powerful civilization. It is known for silk, bronze craftsmanship, early writing, and inventions that shaped Chinese culture for thousands of years.',
    summaryTagline:'Where China\'s Great Story Began!'
  }
];

// ===================== IMAGE URL MAPS =====================
const GEO_IMAGES = {
  'river':'https://i.imgur.com/8fPKdDu.png',
  'mountain':'https://i.imgur.com/eEpGjyF.png',
  'desert':'https://i.imgur.com/87g1V9B.png',
  'forest':'https://i.imgur.com/3bnfbd6.png',
  'Unpredictable flooding':'https://i.imgur.com/F4RyFOo.png',
  'Dangerous flooding':'https://i.imgur.com/LpJQ8LI.png',
  'Needed irrigation systems':'https://i.imgur.com/7f0asJh.png',
  'Predictable flooding':'https://i.imgur.com/MNLNaZQ.png',
  'Excellent farming':'https://i.imgur.com/7yBlnIo.png',
  'Seasonal flooding':'https://i.imgur.com/Pm3rB3K.png',
  'Open plains':'https://i.imgur.com/p9AzCRQ.png',
  'Desert protection':'https://i.imgur.com/87g1V9B.png',
  'Between Tigris and Euphrates':'https://i.imgur.com/8fPKdDu.png',
  'Nile River':'https://i.imgur.com/8fPKdDu.png',
  'Indus River':'https://i.imgur.com/8fPKdDu.png',
  'Yellow River':'https://i.imgur.com/8fPKdDu.png',
  'Two rivers':'https://i.imgur.com/8fPKdDu.png',
  'Loess soil':'https://i.imgur.com/yKyOV3B.png',
  'Trade routes':'https://i.imgur.com/BXpuGb4.png',
  'Built levees':'https://i.imgur.com/9CXFnxG.png'
};

const ACH_IMAGES = {
  'Code of Hammurabi':'https://i.imgur.com/MgMu8oa.png',
  'Math System Based on Number 60':'https://i.imgur.com/Uhh0aU8.png',
  'Cuneiform':'https://i.imgur.com/Lxnhr8G.png',
  'Ziggurat':'https://i.imgur.com/J1j9TGG.png',
  'Pyramids':'https://i.imgur.com/tpDGetb.png',
  'Mummification':'https://i.imgur.com/LdnL5Ds.png',
  'Paper':'https://i.imgur.com/7fzlumF.png',
  'Advanced Medical Tools':'https://i.imgur.com/sHykBCD.png',
  'Public baths':'https://i.imgur.com/5gk5mSQ.png',
  'Grid-Planned City':'https://i.imgur.com/i6VMe1m.png',
  'Toilet':'https://i.imgur.com/Cd8g1NC.png',
  'Drainage Systems in Houses':'https://i.imgur.com/45OV0qF.png',
  'Silk Production':'https://i.imgur.com/RFs4mm5.png',
  'Oracle Bone Scripts':'https://i.imgur.com/uiihMyF.png',
  'Flood Control':'https://i.imgur.com/Lu5dpyZ.png',
  'Tea':'https://i.imgur.com/6ypJ8D1.png'
};

const CIV_IMAGES = {
  'Mesopotamia':'https://i.imgur.com/cYt05bK.png',
  'Egypt':'https://i.imgur.com/JRmx27O.png',
  'Indus':'https://i.imgur.com/zFAZ7X4.png',
  'Huang He':'https://i.imgur.com/EP20rHx.png'
};

function imgHtml(key, fallback) {
  const url = GEO_IMAGES[key] || ACH_IMAGES[key];
  return url ? `<img src="${url}" class="icon-img" alt="">` : fallback;
}

// ===================== QUESTION BANK =====================
function buildQuestionBank() {
  const bank = [];
  CIVS.forEach(c => {
    bank.push({
      q:`Which river is associated with ${c.fullName}?`,
      opts:[c.river, ...CIVS.filter(x=>x.id!==c.id).map(x=>x.river)].sort(()=>Math.random()-0.5),
      correct:0, // Will be set below
      type:'river', civ:c.id
    });
    // Set correct index after shuffle
    const lastQ = bank[bank.length-1];
    lastQ.correct = lastQ.opts.indexOf(c.river);

    // Achievement questions
    const achCorrect = c.achievements[Math.floor(Math.random()*c.achievements.length)];
    const allWrongAch = CIVS.filter(x=>x.id!==c.id).flatMap(x=>x.achievements);
    const achWrong = allWrongAch.sort(()=>Math.random()-0.5).slice(0,3);
    const achOpts = [achCorrect.name, ...achWrong.map(x=>x.name)].sort(()=>Math.random()-0.5);
    bank.push({
      q:`Which achievement belongs to ${c.fullName}?`,
      opts:achOpts,
      correct:achOpts.indexOf(achCorrect.name),
      type:'achievement', civ:c.id
    });

    // Geography questions
    const geoCorrect = c.correctGeo[Math.floor(Math.random()*c.correctGeo.length)];
    const allWrongGeo = CIVISflatGeo().filter(x=>!c.correctGeo.some(g=>g.text===x.text));
    const geoWrong = allWrongGeo.sort(()=>Math.random()-0.5).slice(0,3);
    const geoOpts = [geoCorrect.text, ...geoWrong.map(x=>x.text)].sort(()=>Math.random()-0.5);
    bank.push({
      q:`Which geographic feature matches ${c.fullName}?`,
      opts:geoOpts,
      correct:geoOpts.indexOf(geoCorrect.text),
      type:'geography', civ:c.id
    });

    // Description questions
    const descs = [
      {text:`This civilization was located between the Tigris and Euphrates rivers.`,civ:'mesopotamia'},
      {text:`This civilization built pyramids and used hieroglyphics for writing.`,civ:'egypt'},
      {text:`This civilization had planned cities with advanced drainage systems.`,civ:'indus'},
      {text:`This civilization developed along the Yellow River and created silk.`,civ:'huanghe'},
    ];
    const myDesc = descs.find(d=>d.civ===c.id);
    if (myDesc) {
      const descOpts = ['The Mesopotamian Civilization','The Ancient Egyptian Civilization','The Indus Valley Civilization','The Huang He Civilization'].sort(()=>Math.random()-0.5);
      bank.push({
        q:`"${myDesc.text}" Which civilization is this?`,
        opts:descOpts,
        correct:descOpts.indexOf('The '+c.fullName.slice(4)),
        type:'description', civ:c.id
      });
    }

    // True/False
    const tfs = [
      {text:`${c.fullName} developed along the ${c.river}.`, tf:true, civ:c.id},
      {text:`${c.fullName} was located in South America.`, tf:false, civ:c.id},
    ];
    tfs.forEach(tf=>{
      const tfOpts = ['True','False'];
      bank.push({
        q:tf.text,
        opts:tfOpts,
        correct:tf.tf ? 0 : 1,
        type:'truefalse', civ:c.id
      });
    });
  });
  return bank;
}

function CIVISflatGeo() {
  const seen = new Set();
  const all = [];
  CIVS.forEach(c => c.correctGeo.forEach(g => {
    if (!seen.has(g.text)) { seen.add(g.text); all.push(g); }
  }));
  return all;
}

// ===================== STATE =====================
let state = {
  pp: 0,
  completedCivs: [],
  stars: 0,
  quizScore: 0,
  quizTotal: 0,
  quizAnswered: 0,
  currentCiv: null,
  currentMinigame: 1,
  geoSelected: [],
  achBuilt: [],
  quizQuestions: [],
  quizIndex: 0,
  showProgress: false
};

function saveState() {
  try {
    const s = { pp:state.pp, completedCivs:state.completedCivs, stars:state.stars };
    localStorage.setItem('roc_progress', JSON.stringify(s));
  } catch(e) {}
}

function loadState() {
  try {
    const data = localStorage.getItem('roc_progress');
    if (data) {
      const s = JSON.parse(data);
      state.pp = s.pp || 0;
      state.completedCivs = s.completedCivs || [];
      state.stars = s.stars || 0;
    }
  } catch(e) {}
}

// ===================== SOUND =====================
let audioCtx = null;
const SOUND_ENABLED = true;

function initAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
}

function playTone(freq, dur, type) {
  if (!SOUND_ENABLED || !audioCtx) return;
  try {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
  } catch(e) {}
}

function sndCorrect() { playTone(523, 0.15, 'sine'); setTimeout(()=>playTone(659, 0.15, 'sine'), 100); setTimeout(()=>playTone(784, 0.2, 'sine'), 200); }
function sndWrong() { playTone(200, 0.3, 'sawtooth'); }
function sndBuild() { playTone(400, 0.1, 'sine'); setTimeout(()=>playTone(500, 0.1, 'sine'), 80); }
function sndLevel() { [523,587,659,784].forEach((f,i)=>setTimeout(()=>playTone(f,0.15,'sine'),i*120)); }
function sndVictory() { [523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.2,'sine'),i*150)); setTimeout(()=>[784,659,523,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.15,'sine'),i*120+600)),600); }

// ===================== UI HELPERS =====================
function $(id) { return document.getElementById(id); }
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
  const ph = $('progress-header');
  if (id === 'screen-opening' || id === 'screen-intro') {
    ph.classList.remove('show');
    state.showProgress = false;
  } else {
    ph.classList.add('show');
    state.showProgress = true;
  }
  updateProgress();
}

function updateProgress() {
  $('pp-display').textContent = `🌟 ${state.pp}`;
  $('civ-display').textContent = `🏛️ ${state.completedCivs.length}/${CIVS.length}`;
  $('star-display').textContent = `⭐ ${state.stars}`;
  const pct = Math.round((state.completedCivs.length / CIVS.length) * 100);
  $('progress-bar-fill').style.width = `${pct}%`;
}

function shuffleArray(arr) {
  for (let i=arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function confetti(count) {
  const container = $('confetti-container');
  container.innerHTML = '';
  const colors = ['#E53935','#FB8C00','#FDD835','#43A047','#1E88E5','#8E24AA','#FF6F00'];
  for (let i=0; i<count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random()*100 + '%';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.width = (4+Math.random()*8)+'px';
    piece.style.height = (4+Math.random()*8)+'px';
    piece.style.borderRadius = Math.random()>0.5 ? '50%' : '2px';
    piece.style.animationDuration = (1.5+Math.random()*2)+'s';
    piece.style.animationDelay = Math.random()*0.8+'s';
    container.appendChild(piece);
  }
  setTimeout(()=>container.innerHTML='', 4000);
}

function showFeedback(area, type, msg) {
  area.innerHTML = `<div class="feedback ${type}">${msg}</div>`;
}

function sleep(ms) { return new Promise(r=>setTimeout(r,ms)); }

// ===================== OPENING =====================
$('btn-start').addEventListener('click', ()=>{
  showScreen('screen-intro');
});

// ===================== INTRO =====================
$('btn-begin').addEventListener('click', ()=>{
  showScreen('screen-map');
  updateMap();
});

// ===================== MAP =====================
function updateMap() {
  document.querySelectorAll('.map-location').forEach(el => {
    const id = el.dataset.civ;
    if (state.completedCivs.includes(id)) {
      el.classList.add('completed');
    } else {
      el.classList.remove('completed');
    }
  });
  if (state.completedCivs.length >= CIVS.length) {
    $('btn-challenge').classList.remove('hidden');
  } else {
    $('btn-challenge').classList.add('hidden');
  }
  updateProgress();
}

$('btn-challenge').addEventListener('click', ()=>{
  startQuiz();
});

$('btn-reset').addEventListener('click', ()=>{
  if (confirm('Reset all progress? You will lose all Prosperity Points and completed civilizations.')) {
    state.completedCivs = [];
    state.pp = 0;
    state.stars = 0;
    saveState();
    updateProgress();
    updateMap();
  }
});

document.querySelectorAll('.map-location').forEach(el => {
  el.addEventListener('click', function() {
    const civId = this.dataset.civ;
    if (state.completedCivs.includes(civId)) return;
    state.currentCiv = civId;
    state.currentMinigame = 1;
    startMinigame1();
  });
});

// ===================== MINI GAME 1 - Location =====================
function startMinigame1() {
  const civ = CIVS.find(c=>c.id===state.currentCiv);
  if (!civ) return;
  showScreen('screen-civ');
  $('civ-title').textContent = `${civ.emoji} ${civ.name} - Choose a Location`;

  let html = `
    <div class="loc-container" id="loc-container">
      <div class="loc-scene-col">
        <div class="loc-scene" id="loc-scene">
        <img src="layers/sky.png" class="layer layer-sky" alt="">
        <img src="layers/mountains.png" class="layer layer-mountains" alt="">
        <img src="layers/desert.png" class="layer layer-desert" alt="">
        <img src="layers/forest.png" class="layer layer-forest" alt="">
        <img src="layers/river.png" class="layer layer-river" alt="">
        <img src="layers/sun.png" class="layer layer-sun" alt="">
        </div>
        <p class="game-hint" id="loc-prompt">Where should you build your settlement?</p>
        <p class="game-hint wisdom" id="loc-wisdom">Choose wisely! Your settlement will only thrive with the right environment.</p>
      </div>
      <div class="loc-options" id="loc-options">
        <div class="loc-option" data-val="river"><span class="loc-opt-icon"><img src="https://i.imgur.com/8fPKdDu.png" class="icon-img" alt=""></span>Near the River</div>
        <div class="loc-option" data-val="mountain"><span class="loc-opt-icon"><img src="https://i.imgur.com/eEpGjyF.png" class="icon-img" alt=""></span>On the Mountain</div>
        <div class="loc-option" data-val="desert"><span class="loc-opt-icon"><img src="https://i.imgur.com/87g1V9B.png" class="icon-img" alt=""></span>In the Desert</div>
        <div class="loc-option" data-val="forest"><span class="loc-opt-icon"><img src="https://i.imgur.com/3bnfbd6.png" class="icon-img" alt=""></span>Deep in the Forest</div>
      </div>
    </div>
    <div id="loc-feedback" class="feedback-area"></div>
    <button class="btn btn-primary" id="loc-next" style="display:none">Next →</button>
  `;
  $('civ-game-area').innerHTML = html;

  document.querySelectorAll('.loc-option').forEach(el => {
    el.addEventListener('click', function() {
      if (this.classList.contains('disabled')) return;
      document.querySelectorAll('.loc-option').forEach(o => o.classList.add('disabled'));
      const val = this.dataset.val;
      const fb = $('loc-feedback');
      const scene = $('loc-scene');
      // Animate the corresponding layer
      const layerMap = { river:'river', mountain:'mountains', desert:'desert', forest:'forest' };
      if (layerMap[val]) scene.classList.add('loc-move-' + layerMap[val]);
      if (val === 'river') {
        this.classList.add('correct');
        sndCorrect();
        $('loc-prompt').textContent = '✅ Excellent choice!';
        $('loc-wisdom').textContent = civ.locFeedback;
        $('loc-wisdom').style.fontStyle = 'normal';
        $('loc-wisdom').style.color = 'var(--success)';
        fb.innerHTML = '';
        state.pp += 10;
        saveState();
        updateProgress();
        $('loc-next').style.display = 'inline-flex';
        $('loc-next').addEventListener('click', function handler(){
          this.removeEventListener('click', handler);
          startMinigame2();
        });
      } else {
        this.classList.add('wrong');
        sndWrong();
        feedbackAnim(fb, 'wrong', 'Not the best spot. Rivers gave early people water for drinking and farming!');
        setTimeout(()=>{
          this.classList.remove('wrong','disabled');
          scene.classList.remove('loc-move-' + layerMap[val]);
          document.querySelectorAll('.loc-option').forEach(o => o.classList.remove('disabled'));
        }, 1200);
      }
    });
  });
}

// ===================== MINI GAME 2 - Geography Match =====================
function findGeoOwner(text) {
  for (const c of CIVS) {
    if (c.correctGeo.some(g => g.text === text)) return c;
  }
  return null;
}

function geoFactFor(text) {
  const owner = findGeoOwner(text);
  return owner ? `${text} was a geographic feature of ${owner.name}.` : `${text} is not associated with this civilization.`;
}

function startMinigame2() {
  const civ = CIVS.find(c=>c.id===state.currentCiv);
  if (!civ) return;
  $('civ-title').textContent = `${civ.emoji} ${civ.name} - Geography Match`;

  const correctItems = civ.correctGeo.map(g=>({...g,isCorrect:true}));
  const otherGeo = CIVS.filter(c=>c.id!==civ.id).flatMap(c=>c.correctGeo);
  const wrongItems = shuffleArray([...otherGeo]).slice(0,4).map(g=>({...g,isCorrect:false}));
  const allItems = shuffleArray([...correctItems, ...wrongItems]);
  const totalCorrect = correctItems.length;
  let foundCount = 0;

  let html = `
    <p class="game-hint">Click each item to discover if it describes ${civ.name}. Find all <strong>${totalCorrect}</strong> correct features!</p>
    <div class="geo-grid" id="geo-grid">
      ${allItems.map((item,i)=>`
        <div class="geo-item" data-idx="${i}" data-correct="${item.isCorrect}">
          <span class="geo-icon">${imgHtml(item.text, item.icon)}</span>
          <div><span>${item.text}</span><br><span class="item-desc">${item.desc || ''}</span></div>
        </div>
      `).join('')}
    </div>
    <div id="geo-feedback" class="feedback-area"></div>
    <p id="geo-progress" style="font-weight:600;margin-top:8px;color:var(--text-light)">Found: 0 / ${totalCorrect}</p>
  `;
  $('civ-game-area').innerHTML = html;

  document.querySelectorAll('.geo-item').forEach(el => {
    el.addEventListener('click', function() {
      if (this.classList.contains('disabled')) return;
      this.classList.add('disabled');
      const idx = parseInt(this.dataset.idx);
      const isCorrect = this.dataset.correct === 'true';
      const item = allItems[idx];
      const fb = $('geo-feedback');

      if (isCorrect) {
        this.classList.add('correct-show');
        sndCorrect();
        foundCount++;
        const isRiverItem = item.icon === '🌊';
        const fact = isRiverItem ? civ.riverFact : `${civ.name} was known for ${item.text}.`;
        feedbackAnim(fb, 'great', `✅ ${fact}`);
        $('geo-progress').textContent = `Found: ${foundCount} / ${totalCorrect}`;

        if (foundCount >= totalCorrect) {
          confetti(40);
          state.pp += 15;
          saveState();
          updateProgress();
          setTimeout(() => {
            feedbackAnim(fb, 'great', '🌟 You found all geographic features! Amazing!');
            setTimeout(() => startMinigame3(), 1800);
          }, 600);
        }
      } else {
        this.classList.add('wrong-show');
        sndWrong();
        const fact = geoFactFor(item.text);
        feedbackAnim(fb, 'wrong', `✘ Not quite! ${fact}`);
        setTimeout(() => {
          this.classList.remove('wrong-show', 'disabled');
        }, 600);
      }
    });
  });
}

// ===================== MINI GAME 3 - Achievement Builder =====================
function findAchOwners(name) {
  const owners = [];
  for (const c of CIVS) {
    if (c.achievements.some(a => a.name === name)) owners.push(c.name);
  }
  return owners;
}

function startMinigame3() {
  const civ = CIVS.find(c=>c.id===state.currentCiv);
  if (!civ) return;
  $('civ-title').textContent = `${civ.emoji} ${civ.name} - Achievement Builder`;
  state.achBuilt = [];

  const correctAch = civ.achievements.map(a=>({...a,isCorrect:true}));
  const wrongAch = civ.wrongAch.map(a=>({...a,isCorrect:false}));
  const allAch = shuffleArray([...correctAch, ...wrongAch]);
  const totalCorrect = correctAch.length;
  let foundCount = 0;

  let html = `
    <div class="city-view" id="city-view"></div>
    <p class="game-hint">Click the inventions that belong to ${civ.name}. Each correct choice builds your city!</p>
    <div class="ach-grid" id="ach-grid">
      ${allAch.map((a,i)=>`
        <div class="ach-item" data-idx="${i}" data-correct="${a.isCorrect}">
          <span class="ach-icon">${imgHtml(a.name, a.icon)}</span>
          <div><span>${a.name}</span><br><span class="item-desc">${a.desc || ''}</span></div>
        </div>
      `).join('')}
    </div>
    <div id="ach-feedback" class="feedback-area"></div>
    <p id="ach-progress" style="font-weight:600;margin-top:8px;color:var(--text-light)">Found: 0 / ${totalCorrect}</p>
  `;
  $('civ-game-area').innerHTML = html;

  const cityView = $('city-view');

  document.querySelectorAll('.ach-item').forEach(el => {
    el.addEventListener('click', function() {
      if (this.classList.contains('disabled')) return;
      this.classList.add('disabled');
      const idx = parseInt(this.dataset.idx);
      const isCorrect = this.dataset.correct === 'true';
      const ach = allAch[idx];
      const fb = $('ach-feedback');

      if (isCorrect) {
        this.classList.add('built');
        state.achBuilt.push(ach.name);
        sndBuild();
        foundCount++;
        const fact = ach.desc;
        feedbackAnim(fb, 'great', `✅ ${civ.name} invented ${ach.name}. ${fact}!`);
        $('ach-progress').textContent = `Found: ${foundCount} / ${totalCorrect}`;

        const bldg = document.createElement('div');
        bldg.className = 'city-building';
        bldg.style.animationDelay = '0s';
        cityView.appendChild(bldg);

        if (foundCount >= totalCorrect) {
          setTimeout(() => {
            sndLevel();
            confetti(50);
            feedbackAnim(fb, 'great', `🌟 Amazing! You built ${civ.name}! All achievements discovered!`);
            state.pp += 25;
            state.completedCivs.push(civ.id);
            state.stars += 1;
            saveState();
            updateProgress();
            setTimeout(() => showSummary(civ), 2000);
          }, 500);
        }
      } else {
        this.classList.add('wrong-ach');
        sndWrong();
        const owners = findAchOwners(ach.name);
        let fact;
        if (owners.length > 1) {
          fact = `This was an achievement of ${owners.slice(0,-1).join(', ')} and ${owners.slice(-1)}.`;
        } else if (owners.length === 1) {
          fact = `This was actually an achievement of ${owners[0]}.`;
        } else {
          fact = `This was not an achievement of any river valley civilization.`;
        }
        feedbackAnim(fb, 'wrong', `✘ ${fact}`);
        setTimeout(() => {
          this.classList.remove('wrong-ach', 'disabled');
        }, 600);
      }
    });
  });
}

// ===================== SUMMARY =====================
function showSummary(civ) {
  showScreen('screen-summary');
  const civImg = CIV_IMAGES[civ.name];
  const titleImg = civImg ? '<img src="' + civImg + '" class="summary-civ-img" alt="">' : civ.emoji;
  $('summary-title').innerHTML = titleImg + ' ' + civ.summaryTitle;
  const achList = civ.achievements.map(a=>`<li>${imgHtml(a.name, a.icon)} ${a.name}</li>`).join('');
  const geoList = civ.correctGeo.map(g=>imgHtml(g.text, g.icon) + ' ' + g.text).join(', ');
  $('summary-content').innerHTML = `
    <div class="summary-desc">${civ.summaryDesc}</div>
    <div class="summary-row"><span class="label">River:</span><span>${civ.river}</span></div>
    <div class="summary-row"><span class="label">Location:</span><span>${civ.locationDesc}</span></div>
    <div class="summary-row"><span class="label">Geography:</span><span class="summary-geo">${geoList}</span></div>
    <div style="margin:12px 0"><strong>Achievements:</strong></div>
    <ul class="achievement-list">${achList}</ul>
    <div class="remember-box">
      <h3><img src="https://i.imgur.com/AVgSVAd.png" class="remember-star-img" alt=""> Remember This!</h3>
      <p>${civ.keyIdeas}</p>
    </div>
    <div class="summary-tagline">${civ.summaryTagline}</div>
  `;
}

$('btn-summary-done').addEventListener('click', ()=>{
  showScreen('screen-map');
  updateMap();
});

// ===================== QUIZ =====================
function startQuiz() {
  const bank = buildQuestionBank();
  const shuffled = shuffleArray([...bank]);
  state.quizQuestions = shuffled.slice(0, 10);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizTotal = state.quizQuestions.length;
  state.quizAnswered = 0;
  showScreen('screen-quiz');
  showQuestion();
}

function showQuestion() {
  const q = state.quizQuestions[state.quizIndex];
  if (!q) { finishQuiz(); return; }
  $('quiz-num').textContent = state.quizIndex + 1;
  $('quiz-feedback').innerHTML = '';

  let html = `<div class="quiz-question">${q.q}</div><div class="quiz-options" id="quiz-opts">`;
  q.opts.forEach((opt,i)=>{
    html += `<div class="quiz-opt" data-idx="${i}">${opt}</div>`;
  });
  html += `</div>`;
  $('quiz-card').innerHTML = html;

  document.querySelectorAll('.quiz-opt').forEach(el => {
    el.addEventListener('click', function() {
      if (this.classList.contains('disabled')) return;
      document.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('disabled'));
      const idx = parseInt(this.dataset.idx);
      const correct = q.correct;
      const fb = $('quiz-feedback');

      if (idx === correct) {
        this.classList.add('correct-show');
        sndCorrect();
        state.quizScore++;
        feedbackAnim(fb, 'great', '✓ Correct!');
      } else {
        this.classList.add('wrong-show');
        document.querySelectorAll('.quiz-opt')[correct].classList.add('correct-show');
        sndWrong();
        const correctText = q.opts[correct];
        feedbackAnim(fb, 'wrong', `✗ The correct answer was: ${correctText}`);
      }
      state.quizAnswered++;

      setTimeout(()=>{
        state.quizIndex++;
        if (state.quizIndex < state.quizTotal) {
          showQuestion();
        } else {
          finishQuiz();
        }
      }, 1500);
    });
  });
}

function finishQuiz() {
  const pct = Math.round((state.quizScore / state.quizTotal) * 100);
  state.pp += state.quizScore * 3;
  saveState();
  updateProgress();
  showScreen('screen-score');

  let rank, title, text;
  if (pct >= 90) {
    rank = '🏛️ Master Builder of Civilizations';
    title = 'Amazing!';
    text = 'You truly understand the river valley civilizations!';
    sndVictory();
    confetti(80);
    state.stars += 3;
  } else if (pct >= 75) {
    rank = '🌾 Skilled River Leader';
    title = 'Great Work!';
    text = 'You know a lot about ancient civilizations!';
    sndLevel();
    confetti(40);
    state.stars += 2;
  } else if (pct >= 60) {
    rank = '🚣 Young Explorer';
    title = 'Good Effort!';
    text = 'Keep learning and you will be a Master Builder soon!';
    sndLevel();
    confetti(20);
    state.stars += 1;
  } else {
    rank = '🌱 Future Civilization Builder';
    title = 'Keep Trying!';
    text = 'Every great builder starts somewhere. Review and try again!';
    state.stars += 0;
  }
  saveState();
  updateProgress();

  $('score-title').textContent = title;
  $('score-rank').textContent = rank;
  $('score-stars').innerHTML = '⭐'.repeat(Math.min(state.stars, 5));
  $('score-text').textContent = text;
  $('score-detail').textContent = `You scored ${state.quizScore} out of ${state.quizTotal} (${pct}%)`;
}

$('btn-replay').addEventListener('click', ()=>{
  state.completedCivs = [];
  state.pp = 0;
  state.stars = 0;
  state.quizScore = 0;
  state.quizTotal = 0;
  saveState();
  showScreen('screen-opening');
});

// ===================== BACK BUTTON =====================
$('civ-back').addEventListener('click', ()=>{
  if (confirm('Leave this civilization? Progress in this section will be lost.')) {
    showScreen('screen-map');
    updateMap();
  }
});

// ===================== FEEDBACK HELPER =====================
function feedbackAnim(area, type, msg) {
  area.innerHTML = `<div class="feedback ${type}">${msg}</div>`;
}

// ===================== LAYOUT DETECTION =====================
function updateLayout() {
  const app = $('app');
  if (window.innerWidth >= 900) {
    app.classList.add('desktop-layout');
  } else {
    app.classList.remove('desktop-layout');
  }
}
window.addEventListener('resize', updateLayout);

// ===================== INIT =====================
loadState();
updateProgress();
updateLayout();
showScreen('screen-opening');

// Handle audio context on first user interaction
document.addEventListener('click', ()=>{
  initAudio();
}, {once:true});

})();
