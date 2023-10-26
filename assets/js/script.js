// GIVEN I am taking a code quiz
// WHEN I click the start button

// user clicks start button
// listen event for click of start button

// THEN a timer starts and I am presented with a question

//timer starts at 60s
// timed event displayed start at 60s
//first question displayed
// add question text to HTML
// add answer options to HTML

// WHEN I answer a question

// user clicks on correct answer
// answer colour changes to green

// THEN I am presented with another question

// next question is disaplyed in HTML

// WHEN I answer a question incorrectly

// user selects incorrect answer
// answer stays as red

// THEN time is subtracted from the clock
// check if answer is incorrect 
// -5 s on clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// user input for initials
// save score and initials to local server

var countdownTimer = document.querySelector(".countdown-number");
var countdownMessage = document.querySelector(".countdown-text");
var startButton = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var score = document.querySelector(".score");
var choiceOne = document.querySelector("#guess0");
var choiceTwo = document.querySelector("#guess1");
var choiceThree = document.querySelector("#guess2");
var choiceFour = document.querySelector("#guess3");
var nameInitials = document.querySelector(".initial");
var score = document.querySelector(".score");

var listOfQuestions = [
    "In JavaScript how do you declare a variable?",
    "What is an array?",
    "Which comparitve operator equates to values AND data not being equal?",
    "What are the two parts to an object property?"];
var answer1 = ["var =", "var:", "var -", "var()"];
var correctAnswer = "var =";
var answer2 = ["A way to campare values", "A list of data", "Inline styling", "An aqautic creature"];
var answer3 = ["!==", "!", "¡!", "=!="];
var answer4 = ["data:input", "name:code", "key:value", "content:expression"];

var isTrue;
var isFlase;
var gameOverWin;
var gameOverLose;

var countdownTimer = 0;

var nameInitials = "";
var score = 0;
var previousScore;

localStorage.setItem("player", JSON.stringify(name));
localStorage.setItem("Score", JSON.stringify(score));

function displayQuestion1(){
    questionEl.textContent = listOfQuestions[0];
    choiceOne.textContent = answer1[0];
    choiceTwo.textContent = answer1[1];
    choiceThree.textContent = answer1[2];
    choiceFour.textContent = answer1[3];
}

function displayQuestion2(){
    questionEl.textContent = listOfQuestions[1];
    choiceOne.textContent = answer2[0];
    choiceTwo.textContent = answer2[1];
    choiceThree.textContent = answer2[2];
    choiceFour.textContent = answer2[3];
}
function displayQuestion3(){
    questionEl.textContent = listOfQuestions[2];
    choiceOne.textContent = answer2[0];
    choiceTwo.textContent = answer3[1];
    choiceThree.textContent = answer3[2];
    choiceFour.textContent = answer3[3];
}
function displayQuestion4(){
    questionEl.textContent = listOfQuestions[3];
    choiceOne.textContent = answer4[0];
    choiceTwo.textContent = answer4[1];
    choiceThree.textContent = answer4[2];
    choiceFour.textContent = answer4[3];
}

startButton.addEventListener("click", function(){
    startButton.disabled = true;
    countdownTimer = 60;
    var timer = setInterval(function(){
    countdownTimer--;
    countdownMessage.textContent = countdownTimer + " seconds to go!";


    if(countdownTimer === 0){
        clearInterval(timer);
        countdownMessage.textContent = "Time's up!";
        startButton.disabled = false;
        nameInitials = prompt("Please enter your initals:");
    }

    },1000);

});

startButton.addEventListener("click", displayQuestion1);

console.log(nameInitials);