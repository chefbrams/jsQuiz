
var timeLeft = 60;
var timer = document.getElementById("timeStamp");
// timer 
function gameTimer() {

    var i = 0;

    var timer = document.getElementById("timeStamp");

    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("GAME OVER!!!!");
            // questionEnder();
        }

        else if (i === availableQuestions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)

    return (score)
}

gameTimer()




const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
var score = 0;
let questionCounter = 0;
var availableQuestions = [];
// js questions
var questions = [
    {
        question: "A boolean represents a what?",
        choice1: "data-type",
        choice2: "string",
        choice3: "number",
        choice4: "variable",
        answer: 1
    },
    {
        question: "JS is one of the fundemental languages of the what?",
        choice1: "computer",
        choice2: "TV",
        choice3: "Web",
        choice4: "Iphone",
        answer: 3
    },
    {
        question: "JavaScript is wrapped in what HTML element?",
        choice1: "<jscript>",
        choice2: "<scriptj>",
        choice3: "<javascript>",
        choice4: "<script>",
        answer: 4
    },
    {
        question: "What method adds a new item to the end of an array? ",
        choice1: "pop()",
        choice2: "toString()",
        choice3: "push()",
        choice4: "splice()",
        answer: 3
    },
    {
        question: "a functions name is followed by what in JavaScript?",
        choice1: "()",
        choice2: "{}",
        choice3: "[]",
        choice4: ";",
        answer: 1
    }


];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
// array iteration  
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();


};
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = "Question" + questionCounter + "/" + MAX_QUESTIONS;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// correct and incorrect payouts 

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        if (classToApply === "incorrect") {
            timeLeft -= 10;

        }
        // // if (selectedAnswer != currentQuestion.answer) {
        // // secondsLeft - 10;
        // // }


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();



