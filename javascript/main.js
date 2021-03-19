let playOptions = ["rock", "paper", "scissors"];

// Select a random play for the Computer
function computerPlay() {
    return playOptions[Math.floor(Math.random()*3)];
}

console.log(computerPlay());

// Get valid play choice from User
function userPlay() {
    // Prompt user to input option
    let input = "";
    while (!playOptions.includes(input)) {
        input = (prompt("What's your play? Type either 'Rock', 'Paper', or 'Scissors': ")).toLowerCase();
    }
    return input;
}

console.log(userPlay());