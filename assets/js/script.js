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
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var score = document.querySelector(".score");
var answerOne = document.querySelector(".guess0");
var answerTwo = document.querySelector(".guess1");
var answerThree = document.querySelector(".guess2");
var answerFour = document.querySelector(".guess3");
var progress = document.querySelector(".progress");

var questions = [];
var answers1 = [];
var answers2 = [];
var answers3 = [];
var answers4 = [];
var isTrue
var isFlase
var gameOverWin
var gameOverLose

var nameInitials
var saveScore //will be time remaining
var previousScore
