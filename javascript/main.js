let playOptions = ["Rock", "Paper", "Scissors"];


// Select a random play for the Computer
function computerPlay() {
    return playOptions[Math.floor(Math.random()*3)];
}


// Get valid play choice from User
function userPlay() {
    // Prompt user to input option
    let input = "";
    while (!playOptions.includes(input)) {
        input = prompt("What's your play? Type either 'Rock', 'Paper', or 'Scissors': ");
        input = input[0].toUpperCase() + input.substring(1).toLowerCase();
    }
    return input;
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
        return `It's a draw! You both chose ${userSelection}`;
    } else if (winningCombinations) {
        return `You win! ${userSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${userSelection}`;
    }

}

// Test game
console.log(playRound(userPlay(), computerPlay()));