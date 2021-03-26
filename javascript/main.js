let results = [0, 0];

const playOptionButtons = document.querySelectorAll(".selection-btn");

// Initiate input channel for user choice
playOptionButtons.forEach(playOptionButton => {
    playOptionButton.addEventListener('click', handleUserChoice);
});


// Play round with user choice
function handleUserChoice(e) {
    let userChoice = e.target.dataset.option;
    // Deselect any previously selected option
    playOptionButtons.forEach(playOptionButton => playOptionButton.classList.remove("selected"));
    
    // Add effect to selected option
    e.target.classList.add("selected");
    playRound(userChoice, computerPlay());
}


// Select a random play for the Computer
function computerPlay() {
    let playOptions = ["Rock", "Paper", "Scissors"];
    return playOptions[Math.floor(Math.random()*3)];
}


// Evaluate result of single round of game
function playRound(userSelection, computerSelection) {
    // Results can be either of following
    // "You win! <user choice> beats <computer choice>"
    // "You lose! <computer choice> beats <user choice>"
    // "It's a draw! You both chose <user choice>"
    let winningCombinations = (
        (userSelection === "Rock" && computerSelection === "Scissors")
        || (userSelection === "Paper" && computerSelection === "Rock")
        || (userSelection === "Scissors" && computerSelection === "Paper")
    )
    if (userSelection === computerSelection) {
        displayText(`It's a draw! You both chose ${userSelection}.`, "commentry");
        updateResults([0,0]);
    } else if (winningCombinations) {
        displayText(`You win! ${userSelection} beats ${computerSelection}`, "commentry");
        updateResults([1,0]);
    } else {
        displayText(`You lose! ${computerSelection} beats ${userSelection}`, "commentry");
        updateResults([0,1]);
    }
}


// Update overall game results
function updateResults(scoresArr) {
    // Update current user score
    results[0] += scoresArr[0];
    displayText(results[0], "user-score");
    // Update current computer score
    results[1] += scoresArr[1];
    displayText(results[1], "computer-score");
    
    if (results[0] >= 5 || results[1] >= 5) endGame();
}


// Tally overall results if anyone has won the game
function endGame() {
    if (results[0] === results[1]) {
        displayText(`Looks like it's a draw overall. You both scored ${results[0]} points`, "commentry")
    } else if (results[0] > results[1]) {
        displayText(`YOU'RE CHAMPION. You beat the computer ${results[0]}:${results[1]}`, "commentry")
    } else {
        displayText(`YOU'VE LOST. The computer beat you ${results[1]}:${results[0]}`, "commentry")
    }
    results = [0,0];
}

// Display text
function displayText(string, elementID) {
    let placement = document.getElementById(elementID);
    placement.innerText = string;
    if (elementID === "commentry") placement.classList.add("typed");
}

// Remove animation once complete
const commentry = document.getElementById("commentry");
commentry.addEventListener('animationend', (e) => {
    removeTransition(e, "typed");
});

function removeTransition(e, transitionName) {
    e.target.classList.remove(transitionName);
}