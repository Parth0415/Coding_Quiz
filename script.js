//getting element by id from document
var displayBox = document.getElementById("displayBox");
var quizBoxEl = document.getElementById("quizBox");
//creating a element button in javascript
var startQuizButton = document.createElement("button");
startQuizButton.id = "btn";
//var questionEl = document.createElement('h2');
var viewHighScoresEl = document.getElementById("highScoreBox");
// var viewHighScoresP = document.createElement("p");
viewHighScoresEl.textContent = "View High Scores";
//  viewHighScoresEl.appendChild(viewHighScoresP);
var timerAndScores = document.getElementById("timerAndScores");
var runTimerEl = document.getElementById("runTimer");
var quizChoice = document.getElementById("choiceBox");
var choiceButtonA = document.createElement("button");
var choiceButtonB = document.createElement("button");
var choiceButtonC = document.createElement("button");
var choiceButtonD = document.createElement("button");

choiceButtonA.className = "choicesButton";
choiceButtonB.className = "choicesButton";
choiceButtonC.className = "choicesButton";
choiceButtonD.className = "choicesButton";

var answerLine = document.createElement("div");
answerLine.id = "answerLine";
var confirmation = "";
var confirmEl = document.createElement("h3");
confirmEl.id = "answerConfirmation";

let resultBox = document.getElementById("resultBox");
let resultMessage = document.createElement("div");
resultMessage.id = "resultMessage";
let resultScoreMessage = document.createElement("div");
resultScoreMessage.id = "resultScoreMessage";
let resultInitialsMessage = document.createElement("div");
let resultInitialTextField = document.createElement("input");
let resultSubmitButton = document.createElement("button");
resultSubmitButton.id = "submitButton";
let resultCovering = document.createElement("div");
resultCovering.id = "resultCovering";

let endOfQuizBox = document.getElementById("endOfQuiz");
let endHighScoreMessage = document.createElement("div");
endHighScoreMessage.id = "endHighScoreMessage";
let endScoresHistory = document.createElement("div");
endScoresHistory.id = "endScoresHistory";
let goBackButton = document.createElement("button");
goBackButton.className = "endScreenButton";
let clearHighScoreButton = document.createElement("button");
clearHighScoreButton.className = "endScreenButton";

var quizQuestion = document.getElementById("questionBox");
//var i = 0;
var start = 60;
var counter = 0;
var score = 0;
// Function which displays front page of quiz
var showDisplayBox = function () {
  var displayBoxTitleEl1 = document.createElement("h1");
  var displayBoxTitleEl2 = document.createElement("h2");
  var displayBoxTitleEl3 = document.createElement("h3");
  var displayBoxTitleEl5 = document.createElement("h3");
  var displayBoxTitleEl4 = document.createElement("h3");

  displayBoxTitleEl1.textContent = "Coding Quiz";

  displayBoxTitleEl2.textContent = "Challenge";

  displayBoxTitleEl3.textContent =
    "Checkout our online Coding quiz to enhance your knowledge of Javascript, HTML nad CSS.";

  displayBoxTitleEl4.textContent = ""; 

  displayBoxTitleEl5.textContent = " Please keep in mind that everytime you choose incorrect answer than the time will decrease by 5 seconds!!"

  startQuizButton.textContent = "START QUIZ";
// appending content from javascript to html document
  displayBox.appendChild(displayBoxTitleEl1);
  displayBox.appendChild(displayBoxTitleEl2);
  displayBox.appendChild(displayBoxTitleEl3);
  displayBox.appendChild(displayBoxTitleEl4);
  displayBox.appendChild(displayBoxTitleEl5);
  displayBox.appendChild(startQuizButton);
};
showDisplayBox();

var questions = [
  {
    question: "What does HTML stands for?",
    choices: [
      "Hyper Text Markup Leveler",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Trainer Marking Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "JavaScript File has an extension of?",
    choices: [".Java", ".Js", ".Javascript", ".xml"],
    correctAnswer: ".Js",
  },
  {
    question:
      "Which of the following statements will show a message as well as ask for user input in a popup?",
    choices: ["alert()", "prompt()", "message()", "confirm()"],
    correctAnswer: "prompt()",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    choices: ["background-color", "color", "bgcolor", "None of the above"],
    correctAnswer: "background-color",
  },
  {
    question: "How do we write a comment in Javascript?",
    choices: ["/**/", "//", "#", "$$"],
    correctAnswer: "//",
  },
];
var theTimer;
//function to start timer for quiz
function startTimer() {
  function doThis() {
    var end = 0;
    start--;
    runTimerEl.textContent = "Time Left:" + start.toString();
    if (start <= end) {
      window.clearInterval(theTimer);

      showResultBox();
    }
  }
  theTimer = window.setInterval(doThis, 1000);
  console.log("startTime");
}
//function event to check wether the answer which is selected by user is correct or wrong
function checkAnswer(event) {
  var choiceClick = event.target.textContent;
  //console.log(buttonClicked);
  if (choiceClick === questions[counter].correctAnswer) {
    console.log(
      "inside if statement ",
      questions[counter].correctAnswer,
      " ",
      counter
    );
    score++;
    confirmation = "Correct!";
    // function to decrease time by 5 seconds if user select wrong answer
  } else {
    start = start - 5;
    confirmation = "Wrong!";
  }
  confirmEl.textContent = confirmation;
  quizBoxEl.appendChild(answerLine);
  quizBoxEl.appendChild(confirmEl);
  counter++;

  if (start <= 0 || counter > questions.length - 1) {
    console.log("checking condition");
    confirmEl.textContent = confirmation;
    // answerLine.className = "line";

    showResultBox();
  } else {
    showQuestion();
  }
}
//function which will display the questions
function showQuestion() {
  console.log("gdfg");
  // if (i >= questions.length -1) {
  // 	showResultBox();
  // } else {
  // 	quizQuestion.innerText= questions[i].question;
  //    showChoices(i);
  // }
  {
    quizQuestion.textContent = questions[counter].question;
    showChoices();
    // 	console.log("print all" + questions[i] + "!");
    // }
  }
}
// function which will show choices for question
function showChoices() {
  //for (var i=0; i < questions[i].choices.length; i++) {

  choiceButtonA.textContent = questions[counter].choices[0];
  choiceButtonB.textContent = questions[counter].choices[1];
  choiceButtonC.textContent = questions[counter].choices[2];
  choiceButtonD.textContent = questions[counter].choices[3];
  //}

  quizChoice.appendChild(choiceButtonA);
  quizChoice.appendChild(choiceButtonB);
  quizChoice.appendChild(choiceButtonC);
  quizChoice.appendChild(choiceButtonD);
}
// function which will help to change questions
function nextQuestion() {
  //counter++

  if (counter >= questions.length) {
    //when end of quiz
  }
  startQuizBox();
}

function highScoreBox() {}

function stopTimer() {}

function somthing() {}
// function to start quiz which will show question and options
function startQuizBox() {
  displayBox.style.visibility = "visible";

  showQuestion();
  showChoices();

  //highScoreBox();
}
// function which will hide display box and show start quiz box
function hideDisplayBox() {
  displayBox.style.visibility = "hidden";
  displayBox.style.display = "none";
}
// function to start quiz and will start all the functions in it
function startQuiz() {
  console.log(" Start Quiz");
  hideDisplayBox();
  startQuizBox();
  startTimer();
}
// function to show result box 
function showResultBox() {
  console.log("inside result box function");
  //startQuizBox.style.display = "none";
  window.clearInterval(theTimer);
  quizBoxEl.style.display = "none";

  resultMessage.textContent = "All Done!";
  resultScoreMessage.textContent = "Your final score is: " + start.toString();
  resultInitialsMessage.textContent = "Enter Initials: ";
  resultSubmitButton.textContent = "Submit";

  resultBox.appendChild(resultMessage);
  resultBox.appendChild(resultScoreMessage);
  resultCovering.appendChild(resultInitialsMessage);
  resultCovering.appendChild(resultInitialTextField);
  resultCovering.appendChild(resultSubmitButton);
  resultBox.appendChild(resultCovering);
}
// function to end quiz
function endOfQuiz() {
  resultBox.style.visibility = "hidden";
  resultBox.style.display = "none";

  localStorage.setItem(resultInitialTextField.value, start.toString());

  endHighScoreMessage.textContent = "High Scores";
  goBackButton.textContent = "Go Back";
  clearHighScoreButton.textContent = "Clear High Score";

  endOfQuizBox.appendChild(endHighScoreMessage);
// function to store value in local storage
  for (var i = 0; i < localStorage.length; i++) {
    var newPTag = document.createElement("p");
    newPTag.textContent = `${i + 1}. ${localStorage.key(
      i
    )}: ${localStorage.getItem(localStorage.key(i))}`;
    console.log(localStorage.key(i));

    endScoresHistory.appendChild(newPTag);
  }

  endOfQuizBox.appendChild(endScoresHistory);
  endOfQuizBox.appendChild(goBackButton);
  endOfQuizBox.appendChild(clearHighScoreButton);
}
// function which will help to delete data from local storage
function clearHighScorefunction(){
  //endScoresHistory.textContent="";
  localStorage.clear();

}
// function to restart the quiz
var goBackToDisplayBox = function () {
  location.reload();
};
// adding event listener to buttons so that they will function
quizChoice.addEventListener("click", checkAnswer);

choiceButtonA.addEventListener("click", nextQuestion);

choiceButtonB.addEventListener("click", nextQuestion);

choiceButtonC.addEventListener("click", nextQuestion);

choiceButtonD.addEventListener("click", nextQuestion);

resultSubmitButton.addEventListener("click", endOfQuiz);

goBackButton.addEventListener("click", goBackToDisplayBox);

startQuizButton.addEventListener("click", startQuiz);

clearHighScoreButton.addEventListener("click", clearHighScorefunction);
