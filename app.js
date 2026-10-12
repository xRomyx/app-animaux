// ── STATE ──
let currentView = 'explorer';
let searchQuery = '';
let activeHabitat = '🗺️ Tous';
let currentAnimalId = null;
let quiz = { mode: 'vf', questions: [], current: 0, correct: 0, wrong: 0, answered: false };

// ── FAVORIS (enregistrés dans l'appareil, pas partagés entre appareils) ──
const FAV_KEY = 'animaux-favoris';
const FAV_FILTER = '❤️ Favoris';
let favorites = loadFavorites();

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; }
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite() {
  if (currentAnimalId === null) return;
  favorites = isFavorite(currentAnimalId)
    ? favorites.filter(id => id !== currentAnimalId)
    : [...favorites, currentAnimalId];
  try { localStorage.setItem(FAV_KEY, JSON.stringify(favorites)); } catch (e) {}
  updateFavButton();
  renderGrid();
}

function updateFavButton() {
  const fav = isFavorite(currentAnimalId);
  const btn = document.getElementById('fav-btn');
  btn.textContent = fav ? '❤️' : '🤍';
  btn.classList.toggle('active', fav);
  btn.setAttribute('aria-label', fav ? 'Retirer des favoris' : 'Ajouter aux favoris');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderGrid();
  setupQuiz();
});

// ── NAVIGATION ──
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  document.getElementById('explorer-section').style.display = view === 'explorer' ? 'block' : 'none';
  document.getElementById('quiz-section').style.display = view === 'quiz' ? 'block' : 'none';
  if (view === 'quiz') showQuizMenu();
}

// ── CONTINENT FILTERS ──
function getContinents() {
  return ['🗺️ Tous', FAV_FILTER, ...Object.keys(CONTINENT_IDS)];
}

function renderFilters() {
  const container = document.getElementById('habitat-filters');
  getContinents().forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (c === activeHabitat ? ' active' : '');
    btn.textContent = c;
    btn.onclick = () => {
      activeHabitat = c;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid();
    };
    container.appendChild(btn);
  });
}

// ── GRID ──
function getFilteredAnimals() {
  return ANIMALS.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        a.habitat.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        a.superpower.toLowerCase().includes(searchQuery.toLowerCase());
    const matchHabitat = activeHabitat === '🗺️ Tous' ||
                         (activeHabitat === FAV_FILTER ? isFavorite(a.id) : a.continent === activeHabitat);
    return matchSearch && matchHabitat;
  });
}

function renderGrid() {
  const grid = document.getElementById('animal-grid');
  const animals = getFilteredAnimals();
  document.getElementById('animal-counter').textContent = `${animals.length} animal${animals.length > 1 ? 'x' : ''} trouvé${animals.length > 1 ? 's' : ''}`;
  grid.innerHTML = '';

  if (animals.length === 0) {
    grid.innerHTML = activeHabitat === FAV_FILTER && favorites.length === 0
      ? `<div class="empty-state"><div class="empty-emoji">🤍</div><p>Tu n'as pas encore de favori.<br>Ouvre un animal et appuie sur le cœur !</p></div>`
      : `<div class="empty-state"><div class="empty-emoji">🔍</div><p>Aucun animal trouvé.<br>Essaie un autre mot !</p></div>`;
    return;
  }

  animals.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-color', a.color);
    const visual = a.image
      // Miniature légère (img/thumbs/, même nom de fichier) ; la grande photo ne se charge que dans la fiche
      ? `<img class="animal-photo" src="${a.image.replace('img/', 'img/thumbs/')}" alt="${a.name}" loading="lazy" />`
      : `<span class="animal-emoji">${a.emoji}</span>`;
    card.innerHTML = `
      <span class="animal-id">#${a.id}</span>
      ${isFavorite(a.id) ? '<span class="card-fav">❤️</span>' : ''}
      ${visual}
      <div class="animal-name">${a.name}</div>
      <span class="animal-habitat-tag">${a.habitatEmoji} ${a.habitat}</span>
    `;
    card.onclick = () => openModal(a.id);
    grid.appendChild(card);
  });
}

// ── MODAL ──
function openModal(id) {
  currentAnimalId = id;
  const a = ANIMALS.find(x => x.id === id);
  const modal = document.getElementById('animal-modal');
  const header = document.getElementById('modal-header');

  updateFavButton();

  const emojiEl = document.getElementById('modal-emoji');
  header.classList.toggle('has-photo', !!a.image);
  if (a.image) {
    // Photo entière en bandeau (jamais coupée) ; la même photo floutée remplit les côtés — voir style.css
    header.style.background = a.color;
    header.style.setProperty('--photo', `url("${a.image}")`);
    emojiEl.innerHTML = '';
  } else {
    header.style.background = `linear-gradient(135deg, ${a.color}, ${shadeColor(a.color, -20)})`;
    emojiEl.innerHTML = a.emoji;
  }
  document.getElementById('modal-name').textContent = a.name;
  document.getElementById('modal-habitat').textContent = `${a.habitatEmoji} ${a.habitat}`;
  document.getElementById('modal-classe').textContent = a.classe || '—';
  document.getElementById('modal-weight').textContent = fixRange(a.weight || '—');
  document.getElementById('modal-size').textContent = a.size || '—';
  renderSizeComparison(a);
  document.getElementById('modal-origin').textContent = a.origin || '—';
  document.getElementById('modal-diet').textContent = a.diet || '—';
  document.getElementById('modal-social').textContent = fixRange(a.social || '—');
  document.getElementById('modal-lifespan').textContent = fixRange(a.lifespan || '—');
  document.getElementById('modal-superpower').textContent = a.superpower;
  document.getElementById('modal-fact').textContent = a.fact;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── COMPARAISON DE TAILLE ──
// Repère choisi selon la taille de l'animal : max = taille (cm) jusqu'à laquelle on utilise ce repère
const SIZE_REFS = [
  { max: 2,        emoji: '🍚', label: 'Grain de riz',    un: 'Un grain de riz',   de: "d'un grain de riz",   fem: false, cm: 0.6,  txt: '6 mm' },
  { max: 30,       emoji: '✋', label: "Main d'enfant",   un: "Une main d'enfant", de: "d'une main d'enfant", fem: true,  cm: 15,   txt: '15 cm' },
  { max: 600,      emoji: '🧒', label: 'Enfant de 7 ans', un: 'Un enfant',         de: "d'un enfant",         fem: false, cm: 120,  txt: '1,20 m' },
  { max: Infinity, emoji: '🚌', label: 'Bus',             un: 'Un bus',            de: "d'un bus",            fem: false, cm: 1200, txt: '12 m' }
];

function sizeSentence(sizeCm, ref) {
  const r = sizeCm / ref.cm;
  if (r >= 1.75) return `C'est environ ${Math.round(r)} fois la taille ${ref.de}.`;
  if (r >= 1.3) return `C'est environ une fois et demie la taille ${ref.de}.`;
  if (r > 0.77) return `C'est à peu près la taille ${ref.de}.`;
  const grand = ref.fem ? 'grande' : 'grand';
  if (r > 0.57) return `${ref.un} est environ une fois et demie plus ${grand}.`;
  return `${ref.un} est environ ${Math.round(1 / r)} fois plus ${grand}.`;
}

function renderSizeComparison(a) {
  const block = document.getElementById('modal-size-block');
  if (!a.sizeCm) { block.style.display = 'none'; return; }
  block.style.display = '';

  const ref = SIZE_REFS.find(r => a.sizeCm <= r.max);
  const biggest = Math.max(a.sizeCm, ref.cm);
  // Largeur minimale de 4 % pour que la plus petite barre reste visible
  const width = cm => Math.max(4, Math.round((cm / biggest) * 100)) + '%';
  const row = (emoji, label, cm, color) => `
    <div class="size-row">
      <span class="size-row-label">${emoji} ${label}</span>
      <span class="size-bar-track"><span class="size-bar" style="width:${width(cm)};background:${color}"></span></span>
    </div>`;

  document.getElementById('modal-size-bars').innerHTML =
    row(a.emoji, a.name, a.sizeCm, shadeColor(a.color, -20)) +
    row(ref.emoji, `${ref.label} (${ref.txt})`, ref.cm, '#b2bec3');
  document.getElementById('modal-size-text').textContent = sizeSentence(a.sizeCm, ref);
}

function closeModal() {
  document.getElementById('animal-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateModal(dir) {
  const filtered = getFilteredAnimals();
  const idx = filtered.findIndex(a => a.id === currentAnimalId);
  const next = filtered[(idx + dir + filtered.length) % filtered.length];
  openModal(next.id);
}

// ── TEXT TO SPEECH ──
function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  // Remplace les tirets de plage numérique (ex: "10-14") par "à"
  const cleaned = text.replace(/(\d)\s*-\s*(\d)/g, '$1 à $2');
  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.75;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

// Lecture vocale : clic sur une pill ou un bloc info
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal-body').addEventListener('click', e => {
    // Nom + habitat (lus sans les emojis)
    if (e.target.closest('.modal-title')) {
      const a = ANIMALS.find(x => x.id === currentAnimalId);
      if (a) speakText(`${a.name}. ${a.habitat}`);
      return;
    }
    // Pill (classe, poids, origine…)
    const pill = e.target.closest('.info-pill');
    if (pill) {
      const label = pill.querySelector('.pill-label')?.textContent || '';
      const value = pill.querySelector('.pill-value')?.textContent || '';
      if (value && value !== '—') speakText(`${label} : ${value}`);
      return;
    }
    // Bloc super-pouvoir ou fait
    const block = e.target.closest('.info-block');
    if (block) {
      const content = block.querySelector('.content')?.textContent || '';
      if (content) speakText(content);
    }
  });
});

// Remplace les tirets de plage numérique par "à" (ex: "10-14 ans" → "10 à 14 ans")
function fixRange(text) {
  return text.replace(/(\d)\s*-\s*(\d)/g, '$1 à $2');
}

// Détecte si une couleur hex est claire (luminosité > 60%)
function isLightColor(hex) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = (num >> 16) & 0xFF;
  const g = (num >> 8) & 0xFF;
  const b = num & 0xFF;
  // Luminance perçue (formule standard)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
}

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

// Close modal on overlay click
document.getElementById('animal-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Bouton écouter le quiz
function speakQuizQuestion() {
  const text = document.getElementById('q-text').textContent;
  // « Qui est-ce ? » : on lit aussi les trois noms proposés
  const q = quiz.questions[quiz.current];
  const choices = quiz.mode === 'photo' && q ? ' ' + q.choices.map(c => c.name).join(', ') + ' ?' : '';
  if (text) speakText(text + choices);
}

// Clic sur le feedback pour le relire
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('quiz-feedback').addEventListener('click', () => {
    const text = document.getElementById('quiz-feedback').textContent;
    if (text) speakText(text);
  });
});

// ── SEARCH ──
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderGrid();
});

// ── QUIZ ──
function generateQuestions() {
  const questions = [];
  const shuffled = [...ANIMALS].sort(() => Math.random() - 0.5);
  // Un autre animal tiré au hasard à chaque question (sinon la même fausse réponse revient toute la partie)
  const pickOther = test => {
    const pool = ANIMALS.filter(test);
    return pool[Math.floor(Math.random() * pool.length)];
  };

  shuffled.slice(0, 15).forEach(animal => {
    const type = Math.random() < 0.5 ? 'superpower' : 'habitat';

    if (type === 'superpower') {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        questions.push({
          animal,
          text: `${animal.name} : « ${animal.superpower} »`,
          answer: true,
          explanation: `✅ C'est vrai ! ${animal.superpower}`
        });
      } else {
        const other = pickOther(a => a.id !== animal.id);
        questions.push({
          animal,
          text: `${animal.name} : « ${other.superpower} »`,
          answer: false,
          explanation: `❌ Faux ! Ce super-pouvoir est celui d'un autre animal : ${other.name}. Le vrai, pour ${animal.name} : ${animal.superpower}`
        });
      }
    } else {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        questions.push({
          animal,
          text: `${animal.name} — son habitat : ${animal.habitat}`,
          answer: true,
          explanation: `✅ C'est vrai ! ${animal.name} — son habitat : ${animal.habitat}`
        });
      } else {
        const other = pickOther(a => a.id !== animal.id && a.habitat !== animal.habitat);
        questions.push({
          animal,
          text: `${animal.name} — son habitat : ${other ? other.habitat : 'la Lune'}`,
          answer: false,
          explanation: `❌ Faux ! ${animal.name} — son vrai habitat : ${animal.habitat}`
        });
      }
    }
  });

  return questions;
}

function setupQuiz() {
  quiz.questions = generateQuestions();
}

// Quiz « Qui est-ce ? » : une photo, trois noms au choix
function generatePhotoQuestions() {
  const shuffle = list => [...list].sort(() => Math.random() - 0.5);
  const withPhoto = ANIMALS.filter(a => a.image);
  return shuffle(withPhoto).slice(0, 10).map(animal => {
    const others = shuffle(withPhoto.filter(a => a.id !== animal.id)).slice(0, 2);
    return { animal, choices: shuffle([animal, ...others]) };
  });
}

// Écran de choix du jeu
function showQuizMenu() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.getElementById('quiz-title').textContent = '🧠 Quiz';
  document.getElementById('quiz-menu').style.display = '';
  document.getElementById('quiz-game').style.display = 'none';
}

// mode : 'vf' ou 'photo' ; sans argument (bouton Rejouer) on garde le jeu en cours
function startQuiz(mode) {
  if (mode) quiz.mode = mode;
  const isPhoto = quiz.mode === 'photo';
  document.getElementById('quiz-title').textContent = isPhoto ? '📸 Quiz — Qui est-ce ?' : '🧠 Quiz — Vrai ou Faux ?';
  document.getElementById('quiz-menu').style.display = 'none';
  document.getElementById('quiz-game').style.display = '';
  quiz.questions = isPhoto ? generatePhotoQuestions() : generateQuestions();
  quiz.current = 0;
  quiz.correct = 0;
  quiz.wrong = 0;
  quiz.answered = false;
  document.getElementById('quiz-end').classList.remove('show');
  document.getElementById('question-card').style.display = 'block';
  updateScoreDisplay();
  renderQuestion();
}

function renderQuestion() {
  if (quiz.current >= quiz.questions.length) {
    showQuizEnd();
    return;
  }

  const q = quiz.questions[quiz.current];
  quiz.answered = false;

  // Selon le jeu : emoji + nom + Vrai/Faux, ou photo + trois noms
  const isPhoto = quiz.mode === 'photo';
  document.getElementById('q-emoji').style.display = isPhoto ? 'none' : '';
  document.getElementById('q-animal-name').style.display = isPhoto ? 'none' : '';
  document.querySelector('.answer-buttons').style.display = isPhoto ? 'none' : '';
  const photo = document.getElementById('q-photo');
  const choices = document.getElementById('choice-buttons');
  photo.style.display = isPhoto ? '' : 'none';
  choices.style.display = isPhoto ? '' : 'none';
  choices.innerHTML = '';

  if (isPhoto) {
    photo.src = q.animal.image;
    document.getElementById('q-text').textContent = 'Qui est cet animal ?';
    document.getElementById('q-type').textContent = '📸 Qui est-ce ?';
    q.choices.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = c.name;
      btn.dataset.id = c.id;
      btn.onclick = () => answerChoice(c.id);
      choices.appendChild(btn);
    });
  } else {
    document.getElementById('q-emoji').textContent = q.animal.emoji;
    document.getElementById('q-animal-name').textContent = q.animal.name;
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('q-type').textContent = '🎯 Vrai ou Faux ?';
  }

  const progress = (quiz.current / quiz.questions.length) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';
  document.getElementById('q-number').textContent = `Question ${quiz.current + 1} / ${quiz.questions.length}`;

  const trueBtn = document.getElementById('btn-true');
  const falseBtn = document.getElementById('btn-false');
  trueBtn.className = 'answer-btn';
  falseBtn.className = 'answer-btn';
  trueBtn.disabled = false;
  falseBtn.disabled = false;

  const feedback = document.getElementById('quiz-feedback');
  feedback.className = 'feedback-message';
  feedback.textContent = '';

  document.getElementById('next-btn').className = 'next-question-btn';
}

function answer(value) {
  if (quiz.answered) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.current];
  const isCorrect = value === q.answer;

  const trueBtn = document.getElementById('btn-true');
  const falseBtn = document.getElementById('btn-false');
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  if (value === true) trueBtn.classList.add(isCorrect ? 'correct' : 'wrong');
  else falseBtn.classList.add(isCorrect ? 'correct' : 'wrong');

  if (q.answer === true) trueBtn.classList.add('correct');
  else falseBtn.classList.add('correct');

  if (isCorrect) quiz.correct++; else quiz.wrong++;
  updateScoreDisplay();

  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = q.explanation;
  feedback.className = 'feedback-message show ' + (isCorrect ? 'feedback-correct' : 'feedback-wrong');

  // Lecture automatique du feedback : "Bravo !" si correct, explication complète si faux
  if (isCorrect) {
    speakText('Bravo ! C\'est vrai !');
  } else {
    speakText(q.explanation.replace(/^❌\s*/, ''));
  }

  document.getElementById('next-btn').className = 'next-question-btn show';
}

// Réponse au quiz « Qui est-ce ? »
function answerChoice(id) {
  if (quiz.answered) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.current];
  const isCorrect = id === q.animal.id;

  document.querySelectorAll('#choice-buttons .answer-btn').forEach(btn => {
    btn.disabled = true;
    const btnId = Number(btn.dataset.id);
    if (btnId === q.animal.id) btn.classList.add('correct');
    else if (btnId === id) btn.classList.add('wrong');
  });

  if (isCorrect) quiz.correct++; else quiz.wrong++;
  updateScoreDisplay();

  const text = isCorrect ? `Bravo ! C'est bien : ${q.animal.name}` : `Raté ! C'était : ${q.animal.name}`;
  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = (isCorrect ? '✅ ' : '❌ ') + text;
  feedback.className = 'feedback-message show ' + (isCorrect ? 'feedback-correct' : 'feedback-wrong');
  speakText(text);

  document.getElementById('next-btn').className = 'next-question-btn show';
}

function nextQuestion() {
  quiz.current++;
  renderQuestion();
}

function updateScoreDisplay() {
  document.getElementById('score-correct').textContent = quiz.correct;
  document.getElementById('score-wrong').textContent = quiz.wrong;
}

function showQuizEnd() {
  document.getElementById('question-card').style.display = 'none';
  const end = document.getElementById('quiz-end');
  end.classList.add('show');

  const pct = Math.round((quiz.correct / quiz.questions.length) * 100);
  let trophy = '🥉', msg = 'Continue à apprendre !';
  if (pct >= 80) { trophy = '🏆'; msg = 'Excellent ! Tu es un expert des animaux !'; }
  else if (pct >= 60) { trophy = '🥇'; msg = 'Très bien ! Tu connais bien les animaux !'; }
  else if (pct >= 40) { trophy = '🥈'; msg = 'Pas mal ! Encore un peu de pratique !'; }

  document.getElementById('trophy-emoji').textContent = trophy;
  document.getElementById('end-message').textContent = msg;
  document.getElementById('final-score').textContent = `${quiz.correct} / ${quiz.questions.length}`;
  document.getElementById('final-pct').textContent = `soit ${pct}% de bonnes réponses`;

  // Lecture du message final
  speakText(`${msg} Tu as eu ${quiz.correct} bonnes réponses sur ${quiz.questions.length}, soit ${pct} pourcent.`);
}
