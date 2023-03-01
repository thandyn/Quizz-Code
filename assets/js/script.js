var startBtn = document.getElementById("start");
var viewScoresBtn = document.getElementById("view-scores");
var playAgainBtn = document.getElementById("play-again");
var homeEl = document.getElementById("home");
var highscoreEl = document.getElementById("highscore");
var scoreInputEl = document.getElementById("score-input");
var quizEl = document.getElementById("quiz");
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question-container");
var questionAskedEl = document.getElementById("question");
var answersBtnEl = document.getElementById("answer-buttons");
var nextBtnel = document.getElementById("next-btn");
var finishBtnel = document.getElementById("finish-btn");
var time = 100;
var timer;
let shuffledQuestions, currentQuestionIndex;

function start() {
  // hides the start
  homeEl.setAttribute("class", "hide");
  // shows the question
  currentQuestionIndex = 0;
  questionEl.removeAttribute("class", "hide");
  shuffledQuestions = quiz.sort(() => Math.random() - 0.5);
  timer = setInterval(countDown, 1000);
  timeEl.textContent = time;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionAskedEl.innerText = question.questionAsked;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersBtnEl.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtnel.classList.add("hide");
  while (answersBtnEl.firstChild) {
    answersBtnEl.removeChild(answersBtnEl.firstChild);
  }
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answersBtnEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtnel.classList.remove("hide");
  } else {
    finishBtnel.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function countDown() {
  time--;
  timeEl.textContent = time;
}

function finish() {
  clearInterval(timer);
  questionEl.setAttribute("class", "hide");
  scoreInputEl.removeAttribute("class", "hide");
  finishBtnel.setAttribute("class", "hide");
  scoreEl = document.getElementById("score");
  scoreEl.textContent = time;
}

function viewScores() {
  // hides the start
  homeEl.setAttribute("class", "hide");
  // shows the high scores
  highscoreEl.removeAttribute("class", "hide");
}

function playAgain() {
  // hides the high school
  highscoreEl.setAttribute("class", "hide");
  // start function to run the game again
  start();
}

startBtn.addEventListener("click", function () {
  start();
});

playAgainBtn.addEventListener("click", function () {
  start();
});

viewScoresBtn.addEventListener("click", function () {
  viewScores();
});

nextBtnel.addEventListener("click", function () {
  currentQuestionIndex++;
  setNextQuestion();
});

finishBtnel.addEventListener("click", function () {
  finish();
});

startBtn.onclick = start;
viewScoresBtn.onclick = viewScores;
playAgainBtn.onclick = playAgain;

var quiz = [
  {
    questionAsked: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "boolean", correct: false },
      { text: "numbers", correct: false },
      { text: "alerts", correct: true },
    ],
  },
  {
    questionAsked:
      "The condition in an if / else statement is enclosed within ____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "square backets", correct: false },
      { text: "parentheses", correct: true },
    ],
  },
  {
    questionAsked: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "boolean", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    questionAsked:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: false },
      { text: "quotes", correct: true },
    ],
  },
  {
    questionAsked:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "Javascript", correct: false },
      { text: "terminal / bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];
