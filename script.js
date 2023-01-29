var displayBox = document.getElementById("displayBox");
var startQuizButton = document.createElement("button");
startQuizButton.id ="btn";
var questionEl = document.createElement('h2')
var quizChoice = document.getElementById("choiceBox");
var choiceButtonA = document.createElement("button");
var choiceButtonB = document.createElement("button");
var choiceButtonC = document.createElement("button");
var choiceButtonD = document.createElement("button");

choiceButtonA.className = "choicesButton";
choiceButtonB.className = "choicesButton";
choiceButtonC.className = "choicesButton";
choiceButtonD.className = "choicesButton";

var quizQuestion = document.getElementById("questionBox");
var i = 0;

var showDisplayBox = function() {

    var displayBoxTitleEl1 = document.createElement("h1");
    var displayBoxTitleEl2 = document.createElement("h2");
    var displayBoxTitleEl3 = document.createElement("h3");
    var displayBoxTitleEl4 = document.createElement("h3");

    displayBoxTitleEl1.textContent = "Coding Quiz";
    
    displayBoxTitleEl2.textContent = "Challenge";
    
    displayBoxTitleEl3.textContent = "Check out our online Coding quiz to enhance your knowledge of Javascript, HTML nad CSS";
    
	displayBoxTitleEl4.textContent = "";

    startQuizButton.textContent = "START QUIZ";

    displayBox.appendChild(displayBoxTitleEl1);
    displayBox.appendChild(displayBoxTitleEl2);
    displayBox.appendChild(displayBoxTitleEl3);
    displayBox.appendChild(displayBoxTitleEl4);
    displayBox.appendChild(startQuizButton);
};
showDisplayBox();

var questions = [
	{
	question: "What does HTML stands for?",
	choices: ["Hyper Text Markup Leveler", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Trainer Marking Language"],
	correctAnswer: "Hyper Text Markup Language" 
	},
	{
	question: "JavaScript File has an extension of?",
	choices: [".Java", ".Js", ".Javascript", ".xml" ],
	correctAnswer: ".Js" 
	},
	{
	question: "Which of the following statements will show a message as well as ask for user input in a popup?",
	choices: ["alert()", "prompt()", "message()", "confirm()"],
	correctAnswer: "prompt()" 
	},
	{
	question: "Which property is used to change the background color in CSS?",
	choices: ["background-color", "color", "bgcolor", "None of the above"],
	correctAnswer: "background-color" 
	},
	{
	question: "How do we write a comment in Javascript?",
	choices: ["/**/", "//", "#", "$$"],
	correctAnswer: "//" 
	},
	];
function startTimer () {

}


function showQuestion () {
	// if (i >= questions.length -1) {
	// 	showResultBox();
	// } else {
	// 	quizQuestion.innerText= questions[i].question;
    //    showChoices(i);
	// }
for (var i=0; i >= questions.length; i--) {
	quizQuestion.innertext = questions[i].question;
}
}
showQuestion();
function showChoices() {
	console.log(showChoices)
	var anyText = "Parth";
	questionEl.textcontent = questions[i].question;
	//choiceButtonA.textcontent = questions[i].choices[0];
	choiceButtonB.textcontent = questions[i].choices[1];
	choiceButtonC.textcontent = questions[i].choices[2];
	choiceButtonD.textcontent = questions[i].choices[3];
	choiceButtonA.textContent = anyText;

	quizChoice.appendChild(choiceButtonA);
	quizChoice.appendChild(choiceButtonB);
	quizChoice.appendChild(choiceButtonC);
	quizChoice.appendChild(choiceButtonD);
}

function highScoreBox () {

}


function startQuizBox () {
	displayBox.style.visibility = "visible";
	//startTimer();
	showQuestion();
	showChoices();
	//highScoreBox();


}
function hideDisplayBox() {
	displayBox.style.visibility = "hidden";
	displayBox.style.display = "none";
}


	function startQuiz () {
		console.log(" Start Quiz");
		hideDisplayBox();
		startQuizBox();

	}
function showResultBox () {
	startQuizBox.style.visibility = "hidden";
}
	startQuizButton.addEventListener("click", startQuiz);

