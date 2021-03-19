let playOptions = ["Rock", "Paper", "Scissors"];

// Select a random play for the Computer
function computerPlay() {
    return playOptions[Math.floor(Math.random()*3)];
}

console.log(computerPlay());