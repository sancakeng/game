const questions = [
    { text: "Türkiye'nin başkenti Ankara'dır.", answer: true },
    { text: "5 + 7 = 13", answer: false },
    { text: "Güneş bir yıldızdır.", answer: true },
    { text: "Dünya düzdür.", answer: false },
    { text: "15 - 8 = 7", answer: true },
    { text: "Balıklar nefes almak için ciğerlerini kullanır.", answer: false },
    { text: "20 + 25 = 45", answer: true },
    { text: "Türkiye Cumhuriyeti 1923 yılında kurulmuştur.", answer: true },
    { text: "Ay, Dünya'nın tek doğal uydusudur.", answer: true },
    { text: "100 - 45 = 65", answer: false },
    { text: "Örümceklerin 6 bacağı vardır.", answer: false },
    { text: "Karıncalar uyumazlar.", answer: true },
    { text: "9 x 3 = 27", answer: true },
    { text: "Fransa'nın başkenti Roma'dır.", answer: false },
    { text: "Su 100 derecede kaynar.", answer: true },
    { text: "Bir yıl 365 gündür.", answer: true },
    { text: "8 + 8 + 8 = 24", answer: true },
    { text: "En büyük memeli hayvan fildir.", answer: false },
    { text: "Domates bir meyvedir.", answer: true },
    { text: "12 / 4 = 4", answer: false },
    // 100 Yeni Matematik Sorusu
    { text: "12 + 15 = 27", answer: true },
    { text: "45 - 18 = 23", answer: false },
    { text: "7 x 8 = 56", answer: true },
    { text: "81 / 9 = 8", answer: false },
    { text: "120 + 30 = 150", answer: true },
    { text: "6 x 7 = 42", answer: true },
    { text: "100 / 4 = 20", answer: false },
    { text: "13 + 13 + 13 = 39", answer: true },
    { text: "50 - 25 = 25", answer: true },
    { text: "9 x 9 = 81", answer: true },
    { text: "14 / 2 = 6", answer: false },
    { text: "25 + 25 = 50", answer: true },
    { text: "60 - 45 = 15", answer: true },
    { text: "4 x 12 = 48", answer: true },
    { text: "100 / 5 = 25", answer: false },
    { text: "7 + 8 + 9 = 24", answer: true },
    { text: "30 - 12 = 18", answer: true },
    { text: "8 x 4 = 32", answer: true },
    { text: "36 / 6 = 7", answer: false },
    { text: "15 + 15 + 15 = 45", answer: true },
    { text: "22 + 33 = 55", answer: true },
    { text: "90 - 40 = 50", answer: true },
    { text: "5 x 11 = 55", answer: true },
    { text: "48 / 8 = 6", answer: true },
    { text: "10 + 20 + 30 = 60", answer: true },
    { text: "100 - 1 = 98", answer: false },
    { text: "3 x 15 = 45", answer: true },
    { text: "64 / 8 = 8", answer: true },
    { text: "17 + 5 = 21", answer: false },
    { text: "40 - 15 = 25", answer: true },
    { text: "9 x 6 = 54", answer: true },
    { text: "21 / 3 = 7", answer: true },
    { text: "12 + 12 = 24", answer: true },
    { text: "55 - 11 = 44", answer: true },
    { text: "7 x 7 = 49", answer: true },
    { text: "40 / 5 = 8", answer: true },
    { text: "19 + 2 = 21", answer: true },
    { text: "80 - 20 = 60", answer: true },
    { text: "4 x 9 = 36", answer: true },
    { text: "100 / 10 = 10", answer: true },
    { text: "5 + 5 + 5 + 5 = 20", answer: true },
    { text: "30 - 5 = 25", answer: true },
    { text: "6 x 3 = 18", answer: true },
    { text: "18 / 2 = 9", answer: true },
    { text: "11 + 11 = 21", answer: false },
    { text: "70 - 35 = 35", answer: true },
    { text: "8 x 5 = 40", answer: true },
    { text: "24 / 4 = 6", answer: true },
    { text: "14 + 14 = 28", answer: true },
    { text: "50 - 10 = 40", answer: true },
    { text: "2 x 25 = 50", answer: true },
    { text: "45 / 9 = 5", answer: true },
    { text: "16 + 4 = 20", answer: true },
    { text: "90 - 10 = 80", answer: true },
    { text: "3 x 8 = 24", answer: true },
    { text: "32 / 8 = 5", answer: false },
    { text: "13 + 7 = 20", answer: true },
    { text: "60 - 30 = 30", answer: true },
    { text: "7 x 3 = 21", answer: true },
    { text: "50 / 5 = 10", answer: true },
    { text: "25 + 5 = 30", answer: true },
    { text: "100 - 50 = 50", answer: true },
    { text: "9 x 4 = 36", answer: true },
    { text: "12 / 3 = 4", answer: true },
    { text: "18 + 12 = 30", answer: true },
    { text: "44 - 22 = 22", answer: true },
    { text: "6 x 8 = 48", answer: true },
    { text: "15 / 5 = 3", answer: true },
    { text: "30 + 30 = 60", answer: true },
    { text: "80 - 40 = 40", answer: true },
    { text: "5 x 5 = 24", answer: false },
    { text: "20 / 4 = 5", answer: true },
    { text: "10 + 10 + 10 = 30", answer: true },
    { text: "50 - 20 = 30", answer: true },
    { text: "4 x 4 = 16", answer: true },
    { text: "27 / 3 = 9", answer: true },
    { text: "15 + 5 = 20", answer: true },
    { text: "100 - 25 = 75", answer: true },
    { text: "8 x 2 = 16", answer: true },
    { text: "30 / 6 = 5", answer: true },
    { text: "20 + 20 = 40", answer: true },
    { text: "60 - 15 = 45", answer: true },
    { text: "7 x 4 = 28", answer: true },
    { text: "16 / 2 = 8", answer: true },
    { text: "12 + 8 = 20", answer: true },
    { text: "90 - 45 = 45", answer: true },
    { text: "3 x 9 = 27", answer: true },
    { text: "40 / 10 = 4", answer: true },
    { text: "14 + 6 = 20", answer: true },
    { text: "50 - 5 = 45", answer: true },
    { text: "6 x 6 = 36", answer: true },
    { text: "18 / 3 = 6", answer: true },
    { text: "11 + 9 = 20", answer: true },
    { text: "100 - 10 = 90", answer: true },
    { text: "8 x 3 = 24", answer: true },
    { text: "21 / 7 = 3", answer: true },
    { text: "17 + 3 = 20", answer: true },
    { text: "70 - 10 = 60", answer: true },
    { text: "4 x 5 = 20", answer: true },
    { text: "24 / 6 = 4", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let shuffledQuestions = [];
let messageIndex = 0;
let colorIndex = 1; // Start from the second color for the first milestone

const messages = ["helal sana", "kralsın", "aslanım benim", "yürü koçum", "vay vay vay"];
const colors = ["#1a1a2e", "#e94560", "#4ecca3", "#ffb400", "#9b59b6", "#3498db"];

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const scoreDisplay = document.getElementById('score-display');
const heartsDisplay = document.getElementById('hearts-display');
const finalScoreDisplay = document.getElementById('final-score');
const gameBox = document.getElementById('game-box');
const milestoneMsg = document.getElementById('milestone-msg');

const startBtn = document.getElementById('start-btn');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', startGame);
trueBtn.addEventListener('click', () => handleAnswer(true));
falseBtn.addEventListener('click', () => handleAnswer(false));
restartBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    lives = 3;
    currentQuestionIndex = 0;
    messageIndex = 0;
    colorIndex = 1;
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    document.body.style.backgroundColor = colors[0];
    updateStats();
    showScreen('game');
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }
    
    questionText.innerText = shuffledQuestions[currentQuestionIndex].text;
}

function handleAnswer(userAnswer) {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
    
    if (userAnswer === correctAnswer) {
        score += 25;
        feedbackEffect('correct');
        
        if (score > 0 && score % 200 === 0) {
            showMilestone();
        }
    } else {
        lives--;
        feedbackEffect('wrong');
    }
    
    updateStats();
    
    if (lives <= 0) {
        endGame();
    } else {
        currentQuestionIndex++;
        showNextQuestion();
    }
}

function showMilestone() {
    const msg = messages[messageIndex];
    milestoneMsg.innerText = msg;
    milestoneMsg.classList.remove('hidden');
    
    // Arka plan rengini sırayla değiştir
    const nextColor = colors[colorIndex];
    document.body.style.backgroundColor = nextColor;

    // İndeksleri güncelle
    messageIndex = (messageIndex + 1) % messages.length;
    colorIndex = (colorIndex + 1) % colors.length;
    
    // Animasyon bittikten sonra gizle
    setTimeout(() => {
        milestoneMsg.classList.add('hidden');
    }, 1500);
}

function updateStats() {
    scoreDisplay.innerText = `PUAN: ${score}`;
    heartsDisplay.innerText = '❤'.repeat(lives);
}

function feedbackEffect(type) {
    if (type === 'correct') {
        gameBox.classList.add('flash-correct');
        setTimeout(() => gameBox.classList.remove('flash-correct'), 500);
    } else {
        gameBox.classList.add('shake');
        setTimeout(() => gameBox.classList.remove('shake'), 300);
    }
}

function showScreen(screen) {
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    
    if (screen === 'start') startScreen.classList.remove('hidden');
    if (screen === 'game') gameScreen.classList.remove('hidden');
    if (screen === 'result') resultScreen.classList.remove('hidden');
}

function endGame() {
    finalScoreDisplay.innerText = `PUAN: ${score}`;
    showScreen('result');
}

