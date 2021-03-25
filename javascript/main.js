let results = [0, 0];

const playOptionButtons = document.querySelectorAll(".selection-btn");

// Initiate input channel for user choice
playOptionButtons.forEach(playOptionButton => {
    playOptionButton.addEventListener('click', handleUserChoice);
});


// Play round with user choice
function handleUserChoice(e) {
    let userChoice = e.target.dataset.option;
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
        console.log(`It's a draw! You both chose ${userSelection}.`);
        updateResults([0,0]);
    } else if (winningCombinations) {
        console.log(`You win! ${userSelection} beats ${computerSelection}`);
        updateResults([1,0]);
    } else {
        console.log(`You lose! ${computerSelection} beats ${userSelection}`);
        updateResults([0,1]);
    }
        
}


// Update overall game results
function updateResults(scoresArr) {
    // Update current user score
    results[0] += scoresArr[0];
    // Update current computer score
    results[1] += scoresArr[1];
    console.log(`Your score: ${results[0]} \n Computer score: ${results[1]}`);
    
    if (results[0] >= 5 || results[1] >= 5) endGame();
}


// Tally overall results if anyone has won the game
function endGame() {
    if (results[0] === results[1]) {
        console.log(`Looks like it's a draw overall. You both scored ${results[0]} points`)
    } else if (results[0] > results[1]) {
        console.log(`YOU'RE CHAMPION. You beat the computer ${results[0]}:${results[1]}`)
    } else {
        console.log(`YOU'VE LOST. The computer beat you ${results[1]}:${results[0]}`)
    }
    results = [0,0];
}
