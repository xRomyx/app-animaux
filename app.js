// ── STATE ──
let currentView = 'explorer';
let searchQuery = '';
let activeHabitat = '🗺️ Tous';
let currentAnimalId = null;
let quiz = { questions: [], current: 0, correct: 0, wrong: 0, answered: false };

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
  if (view === 'quiz') startQuiz();
}

// ── CONTINENT FILTERS ──
function getContinents() {
  return ['🗺️ Tous', ...Object.keys(CONTINENT_IDS)];
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
    const matchHabitat = activeHabitat === '🗺️ Tous' || a.continent === activeHabitat;
    return matchSearch && matchHabitat;
  });
}

function renderGrid() {
  const grid = document.getElementById('animal-grid');
  const animals = getFilteredAnimals();
  document.getElementById('animal-counter').textContent = `${animals.length} animal${animals.length > 1 ? 'x' : ''} trouvé${animals.length > 1 ? 's' : ''}`;
  grid.innerHTML = '';

  if (animals.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-emoji">🔍</div><p>Aucun animal trouvé.<br>Essaie un autre mot !</p></div>`;
    return;
  }

  animals.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-color', a.color);
    const visual = a.image
      ? `<img class="animal-photo" src="${a.image}" alt="${a.name}" loading="lazy" />`
      : `<span class="animal-emoji">${a.emoji}</span>`;
    card.innerHTML = `
      <span class="animal-id">#${a.id}</span>
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

  header.style.background = `linear-gradient(135deg, ${a.color}, ${shadeColor(a.color, -20)})`;
  const emojiEl = document.getElementById('modal-emoji');
  if (a.image) {
    emojiEl.innerHTML = `<img class="modal-photo" src="${a.image}" alt="${a.name}" />`;
  } else {
    emojiEl.innerHTML = a.emoji;
  }
  document.getElementById('modal-name').textContent = a.name;
  document.getElementById('modal-habitat').textContent = `${a.habitatEmoji} ${a.habitat}`;
  document.getElementById('modal-classe').textContent = a.classe || '—';
  document.getElementById('modal-weight').textContent = a.weight || '—';
  document.getElementById('modal-origin').textContent = a.origin || '—';
  document.getElementById('modal-diet').textContent = a.diet || '—';
  document.getElementById('modal-social').textContent = a.social || '—';
  document.getElementById('modal-lifespan').textContent = a.lifespan || '—';
  document.getElementById('modal-superpower').textContent = a.superpower;
  document.getElementById('modal-fact').textContent = a.fact;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
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
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.88;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

// Lecture vocale : clic sur une pill ou un bloc info
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal-body').addEventListener('click', e => {
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
  if (text) speakText(text);
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
        const other = shuffled.find(a => a.id !== animal.id);
        questions.push({
          animal,
          text: `${animal.name} : « ${other.superpower} »`,
          answer: false,
          explanation: `❌ Faux ! Ce super-pouvoir appartient au ${other.name}. Pour le ${animal.name} : ${animal.superpower}`
        });
      }
    } else {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        questions.push({
          animal,
          text: `Le ${animal.name} habite : ${animal.habitat}`,
          answer: true,
          explanation: `✅ C'est vrai ! Le ${animal.name} vit bien dans : ${animal.habitat}`
        });
      } else {
        const other = shuffled.find(a => a.id !== animal.id && a.habitat !== animal.habitat);
        questions.push({
          animal,
          text: `Le ${animal.name} habite : ${other ? other.habitat : 'la Lune'}`,
          answer: false,
          explanation: `❌ Faux ! Le ${animal.name} vit dans : ${animal.habitat}`
        });
      }
    }
  });

  return questions;
}

function setupQuiz() {
  quiz.questions = generateQuestions();
}

function startQuiz() {
  quiz.questions = generateQuestions();
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

  document.getElementById('q-emoji').textContent = q.animal.emoji;
  document.getElementById('q-animal-name').textContent = q.animal.name;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-type').textContent = '🎯 Vrai ou Faux ?';

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

  // Lecture automatique du feedback
  speakText(q.explanation);

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
  else if (pct >= 60) { trophy = '🥈'; msg = 'Très bien ! Tu connais bien les animaux !'; }
  else if (pct >= 40) { trophy = '🥇'; msg = 'Pas mal ! Encore un peu de pratique !'; }

  document.getElementById('trophy-emoji').textContent = trophy;
  document.getElementById('end-message').textContent = msg;
  document.getElementById('final-score').textContent = `${quiz.correct} / ${quiz.questions.length}`;
  document.getElementById('final-pct').textContent = `soit ${pct}% de bonnes réponses`;

  // Lecture du message final
  speakText(`${msg} Tu as eu ${quiz.correct} bonnes réponses sur ${quiz.questions.length}, soit ${pct} pourcent.`);
}
