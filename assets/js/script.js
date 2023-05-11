// Add eventListener for content being loaded
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})
/**
 * The main game loop, called when script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // create two random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} aborting!`;
    }

}

/**
 * Checks answer against calculateCorrectAnswer() result
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert("Good job! That's the correct answer!");
        incrementScore();
    } else {
        alert(`Unlucky! You guessed ${userAnswer} and the correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the numbers and operatorfrom the DOM and calculates whether the input 
 * answer is correct
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`;
    }
    
}

/**
 * Adds one point for each correct answer
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Adds a point to the incorrect score for each incorrect answer
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}