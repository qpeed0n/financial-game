const roundData = [
  {
    title: 'Раунд 1', points: [100, 200, 300, 400, 500],
    categories: ['Инвесторский старт', 'Цели и горизонт', 'Доходность', 'Финансовая подушка', 'Риск-профиль', 'Инструменты'],
    prompts: [
      ['Что называют инвестированием?', 'Зачем инвестору определять финансовую цель?', 'Что показывает доходность вложения?', 'Для чего нужна финансовая подушка?', 'Что такое риск-профиль?', 'Назовите один инвестиционный инструмент.'],
      ['Чем инвестиции отличаются от сбережений?', 'Как горизонт влияет на выбор актива?', 'Что значит «доходность за год»?', 'Сколько месяцев расходов обычно покрывает подушка?', 'Какой риск ниже: у вклада или акции?', 'Что такое облигация простыми словами?'],
      ['Почему деньги сегодня ценнее денег через год?', 'Что такое сложный процент?', 'Как посчитать прибыль в рублях?', 'Когда подушку нельзя считать инвестициями?', 'Почему нельзя вкладывать последние деньги?', 'Что такое дивиденды?'],
      ['Какая цель называется краткосрочной?', 'Зачем фиксировать цель и сумму?', 'Что такое реальная доходность?', 'Где лучше хранить резерв на непредвиденные расходы?', 'Как новости влияют на риск?', 'Что такое пай фонда?'],
      ['С чего начать новичку-инвестору?', 'Почему горизонт 10 лет меняет стратегию?', 'Доходность 12% при инфляции 8% — это много или мало?', 'Назовите два правила подушки безопасности.', 'Что означает диверсификация?', 'Чем акция отличается от облигации?']
    ]
  },
  {
    title: 'Раунд 2', points: [600, 700, 800, 900, 1000],
    categories: ['Портфель', 'Акции', 'Облигации', 'Фонды', 'Налоги', 'Мошенники'],
    prompts: [
      ['Что такое инвестиционный портфель?', 'Зачем смешивать активы?', 'Как акция даёт доход инвестору?', 'Что делает биржевой фонд?', 'Когда возникает налог на доход?', 'Назовите красный флаг финансовой пирамиды.'],
      ['Как распределить 100 000 ₽ между двумя активами?', 'Что такое ребалансировка?', 'Почему цена акции меняется каждый день?', 'Чем ETF или БПИФ удобен новичку?', 'Что такое налоговый вычет ИИС?', 'Почему обещание «гарантированных 50%» опасно?'],
      ['Что означает корреляция активов?', 'Почему один сектор — это концентрация риска?', 'Как купон влияет на цену облигации?', 'Чем пассивный фонд отличается от активного?', 'В какой момент брокер удерживает налог?', 'Как проверить легальность брокера?'],
      ['Как выбрать доли акций и облигаций?', 'Что такое «голубые фишки»?', 'Что произойдёт с облигацией при дефолте?', 'Что такое комиссия фонда?', 'Можно ли вернуть налог за обучение и инвестировать его?', 'Почему нельзя передавать код из СМС?'],
      ['Соберите портфель для цели через 3 года.', 'Почему прошлый рост не гарантирует будущий?', 'Как ставка ЦБ влияет на облигации?', 'Что важнее: низкая комиссия или прогноз доходности?', 'Чем отличается налоговый вычет типа А от типа Б?', 'Какие вопросы задать перед переводом денег?']
    ]
  },
  {
    title: 'Раунд 3', points: [1100, 1200, 1300, 1400, 1500],
    categories: ['Стратегия', 'Макроэкономика', 'Разбор кейса', 'Поведение', 'Цифровые активы', 'Финал инвестора'],
    prompts: [
      ['Как связать стратегию с жизненным планом?', 'Почему инфляция важна для инвестора?', 'Кейс: доход растёт, а накоплений нет. Что проверить?', 'Что такое эффект толпы?', 'Какие риски есть у цифровых активов?', 'Как принять взвешенное решение?'],
      ['Когда активная стратегия оправдана?', 'Как ставка ЦБ меняет привлекательность вклада?', 'Кейс: друг советует взять кредит для инвестиций.', 'Почему инвестор продаёт на падении?', 'Что значит хранить ключи самостоятельно?', 'Сформулируйте личное правило инвестора.'],
      ['Как оценить риск цели и срок?', 'Что происходит с покупательной способностью денег?', 'Кейс: портфель просел на 20%. Ваши шаги?', 'Как бороться с FOMO?', 'Почему цифровой актив не равен банковскому вкладу?', 'Что проверять в отчёте компании?'],
      ['Почему стратегию пересматривают, но не меняют каждый день?', 'Как связаны ВВП, инфляция и рынки?', 'Кейс: две акции одной отрасли ведут себя по-разному.', 'Что такое когнитивная ошибка «я всё знаю»?', 'Что такое волатильность цифровых активов?', 'Как объяснить диверсификацию подростку?'],
      ['Соберите стратегию для цели «своё жильё через 8 лет».', 'Как защитить план от высокой инфляции?', 'Кейс: нужно выбрать вклад, облигации или фонд.', 'Как дневник решений помогает инвестору?', 'Какие правила безопасности нужны в приложении?', 'Назовите 3 признака зрелого инвестора.']
    ]
  }
];

const eventDescriptions = {
  'Кот в мешке': 'Внутри — вопрос из другой категории. Команда получает шанс на неожиданный поворот.',
  'Аукцион': 'Ведущий предлагает командам сделать ставку. Победитель отвечает и получает выбранное количество баллов.'
};

const state = { teams: [], round: 0, used: new Set(), events: new Map(), activeCell: null, seconds: 30, timer: null };
const $ = (selector) => document.querySelector(selector);
const setupScreen = $('#setupScreen');
const lobbyScreen = $('#lobbyScreen');
const gameScreen = $('#gameScreen');
const resultsScreen = $('#resultsScreen');
const pageIndicator = $('#pageIndicator');

function setPageIndicator(value) {
  if (pageIndicator) pageIndicator.textContent = value;
}

function showPage(page) {
  const pages = { setup: setupScreen, lobby: lobbyScreen, game: gameScreen, results: resultsScreen };
  Object.values(pages).forEach(screen => screen.classList.remove('active'));
  if (pages[page]) pages[page].classList.add('active');
  const numbers = { setup: '01 / 05', lobby: '02 / 05', game: '03 / 05', results: '05 / 05' };
  setPageIndicator(numbers[page] || '01 / 05');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function makeTeamFields() {
  const count = Number($('#teamCount').value);
  $('#teamCountValue').textContent = count;
  const current = [...document.querySelectorAll('.team-field input')].map(input => input.value);
  $('#teamFields').innerHTML = Array.from({ length: count }, (_, index) => `
    <div class="team-field">
      <span class="team-number">0${index + 1}</span>
      <input type="text" maxlength="22" value="${escapeHtml(current[index] || '')}" placeholder="Название команды ${index + 1}" aria-label="Название команды ${index + 1}" />
    </div>
  `).join('');
}

function createEvents() {
  const totalCells = 3 * 6 * 5;
  const available = Array.from({ length: totalCells }, (_, i) => i);
  for (let i = available.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [available[i], available[j]] = [available[j], available[i]]; }
  state.events.clear();
  state.events.set(available[0], 'Кот в мешке');
  state.events.set(available[1], 'Аукцион');
  state.events.set(available[2], 'Кот в мешке');
}

function startGame() {
  const inputs = [...document.querySelectorAll('.team-field input')];
  state.teams = inputs.map((input, index) => ({ name: input.value.trim() || `Команда ${index + 1}`, score: 0 }));
  state.round = 0; state.used.clear(); createEvents();
  renderLobby();
  showPage('lobby');
}

function renderLobby() {
  $('#lobbyTeams').innerHTML = state.teams.map((team, index) => `
    <div class="lobby-team">
      <span class="lobby-team-number">0${index + 1}</span>
      <span class="lobby-team-name">${escapeHtml(team.name)}</span>
      <span class="lobby-team-status">готовы</span>
    </div>
  `).join('');
}

function beginRound() {
  renderScoreboard(); renderBoard(); updateRoundUI();
  showPage('game');
}

function renderResults() {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  $('#resultsList').innerHTML = sorted.map((team, index) => `
    <div class="result-row ${index === 0 ? 'winner' : ''}">
      <span class="result-rank">${String(index + 1).padStart(2, '0')}</span>
      <span class="result-name">${escapeHtml(team.name)}</span>
      <strong>${team.score.toLocaleString('ru-RU')}</strong>
    </div>
  `).join('');
}

function showResults() {
  stopTimer();
  renderResults();
  showPage('results');
}

function renderScoreboard() {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  $('#scoreboard').innerHTML = state.teams.map((team) => {
    const rank = sorted.findIndex(item => item === team) + 1;
    return `<div class="score-card ${rank === 1 && team.score > 0 ? 'leader' : ''}">
      <div class="score-card-head"><span class="score-card-name">${escapeHtml(team.name)}</span><span class="score-card-rank">#${rank}</span></div>
      <strong class="score-card-points">${team.score.toLocaleString('ru-RU')}</strong>
    </div>`;
  }).join('');
}

function renderBoard() {
  const data = roundData[state.round];
  const offset = state.round * 30;
  const cells = data.categories.map((category, categoryIndex) => `<div class="board-category">${category}</div>`).join('');
  let html = cells;
  data.points.forEach((point, pointIndex) => {
    data.categories.forEach((_, categoryIndex) => {
      const index = pointIndex * 6 + categoryIndex;
      const globalIndex = offset + index;
      const event = state.events.get(globalIndex);
      const used = state.used.has(globalIndex);
      html += `<button class="question-cell ${used ? 'used' : ''}" data-index="${index}" data-global="${globalIndex}" ${used ? 'disabled' : ''} type="button"><span>${point.toLocaleString('ru-RU')}</span></button>`;
    });
  });
  $('#gameBoard').innerHTML = html;
  document.querySelectorAll('.question-cell:not(.used)').forEach(cell => cell.addEventListener('click', () => openQuestion(cell)));
}

function updateRoundUI() {
  const data = roundData[state.round];
  $('#roundTitle').textContent = data.title;
  $('#roundNumber').textContent = String(state.round + 1).padStart(2, '0');
  document.querySelectorAll('.round-tab').forEach((tab, index) => { tab.classList.toggle('active', index === state.round); tab.setAttribute('aria-selected', index === state.round); });
}

function openQuestion(cell) {
  const data = roundData[state.round];
  const pointIndex = Math.floor(Number(cell.dataset.index) / 6);
  const categoryIndex = Number(cell.dataset.index) % 6;
  const points = data.points[pointIndex];
  const event = state.events.get(Number(cell.dataset.global));
  state.activeCell = cell;
  $('#modalCategory').textContent = data.categories[categoryIndex];
  $('#modalPoints').textContent = `${points.toLocaleString('ru-RU')} баллов`;
  $('#modalTitle').textContent = event || 'Вопрос для команды';
  $('#questionText').textContent = data.prompts[pointIndex][categoryIndex];
  $('#scoreInput').value = points;
  $('#answerText').textContent = answerFor(data.prompts[pointIndex][categoryIndex]);
  $('#answerBox').hidden = true;
  $('#showAnswer').textContent = 'Показать ответ';
  const banner = $('#eventBanner');
  banner.hidden = !event;
  if (event) banner.innerHTML = `<strong>✦ ${event}</strong>${eventDescriptions[event]}`;
  $('#awardTeam').innerHTML = state.teams.map((team, i) => `<option value="${i}">${escapeHtml(team.name)}</option>`).join('');
  openModal(); startTimer();
}

function answerFor(question) {
  const answers = {
    'Что называют инвестированием?': 'Размещение денег в активы с расчётом на рост стоимости или доход.',
    'Зачем инвестору определять финансовую цель?': 'Чтобы выбрать подходящий срок, сумму и уровень риска.',
    'Что показывает доходность вложения?': 'Сколько инвестор заработал или потерял относительно вложенной суммы.',
    'Для чего нужна финансовая подушка?': 'Для покрытия непредвиденных расходов без кредитов и продажи инвестиций.',
    'Что такое сложный процент?': 'Начисление дохода и на первоначальную сумму, и на ранее полученный доход.',
    'Что означает диверсификация?': 'Распределение денег между разными активами, чтобы снизить общий риск.',
    'Что такое дивиденды?': 'Часть прибыли компании, которую она может выплатить владельцам акций.',
    'Чем акция отличается от облигации?': 'Акция даёт долю в компании, облигация — это долг компании или государства.'
  };
  return answers[question] || 'Обсудите логику решения: срок, риск, доходность и цель инвестора.';
}

function openModal() { $('#questionModal').classList.add('open'); $('#questionModal').setAttribute('aria-hidden', 'false'); setPageIndicator('04 / 05'); }
function closeModal() { stopTimer(); $('#questionModal').classList.remove('open'); $('#questionModal').setAttribute('aria-hidden', 'true'); state.activeCell = null; setPageIndicator('03 / 05'); }

function startTimer() {
  stopTimer(); state.seconds = 30; updateTimer();
  state.timer = setInterval(() => {
    state.seconds -= 1;
    updateTimer();
    if (state.seconds <= 0) {
      stopTimer();
      if ($('#answerBox').hidden) showAnswer();
      showToast('Время вышло — ответ открыт.');
    }
  }, 1000);
}
function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }
function updateTimer() { $('#timerLabel').textContent = state.seconds; $('#timerPill').classList.toggle('warning', state.seconds <= 10); }

function isRoundComplete(round) {
  const offset = round * 30;
  return Array.from({ length: 30 }, (_, index) => state.used.has(offset + index)).every(Boolean);
}

function continueAfterRound() {
  if (state.round < roundData.length - 1) {
    state.round += 1;
    renderBoard();
    updateRoundUI();
    showPage('game');
    showToast(`Раунд ${state.round + 1} начался`);
  } else {
    showResults();
  }
}

function awardPoints() {
  const teamIndex = Number($('#awardTeam').value);
  const amount = Number($('#scoreInput').value) || 0;
  if (!state.activeCell) return;
  state.teams[teamIndex].score += amount;
  state.used.add(Number(state.activeCell.dataset.global));
  const awardedTeam = state.teams[teamIndex].name;
  const sign = amount >= 0 ? '+' : '';
  const completedRound = isRoundComplete(state.round);
  closeModal();
  renderScoreboard();
  if (completedRound) {
    continueAfterRound();
  } else {
    renderBoard();
    showPage('game');
    showToast(`${awardedTeam}: ${sign}${amount.toLocaleString('ru-RU')} баллов`);
  }
}

function showAnswer() { $('#answerBox').hidden = !$('#answerBox').hidden; $('#showAnswer').textContent = $('#answerBox').hidden ? 'Показать ответ' : 'Скрыть ответ'; }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600); }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char])); }

$('#teamCount').addEventListener('input', makeTeamFields);
$('#decreaseTeams').addEventListener('click', () => { $('#teamCount').value = Math.max(2, Number($('#teamCount').value) - 1); makeTeamFields(); });
$('#increaseTeams').addEventListener('click', () => { $('#teamCount').value = Math.min(4, Number($('#teamCount').value) + 1); makeTeamFields(); });
$('#startGame').addEventListener('click', startGame);
$('#lobbyStartRound').addEventListener('click', beginRound);
$('#closeModal').addEventListener('click', closeModal);
$('#showAnswer').addEventListener('click', showAnswer);
$('#awardPoints').addEventListener('click', awardPoints);
$('#resultsNewGame').addEventListener('click', () => { stopTimer(); closeModal(); showPage('setup'); makeTeamFields(); });
$('#restartGame').addEventListener('click', () => { stopTimer(); showPage('setup'); makeTeamFields(); });
document.querySelectorAll('.round-tab').forEach(tab => tab.addEventListener('click', () => { state.round = Number(tab.dataset.round); renderBoard(); updateRoundUI(); }));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && $('#questionModal').classList.contains('open')) closeModal(); });
makeTeamFields();
