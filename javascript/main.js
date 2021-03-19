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
            console.log(`It's a draw! You both chose ${userSelection}.`);
            return [0,0];
        } else if (winningCombinations) {
            console.log(`You win! ${userSelection} beats ${computerSelection}`);
            return [1,0];
        } else {
            console.log(`You lose! ${computerSelection} beats ${userSelection}`);
            return [0,1];
        }
        
    }
    
    
    // Evaluate results after 5 rounds of game
    function game() {
        let score = [0,0];
        for (let i = 0; i < 5; i++) {
            console.log(`ROUND #${i+1}`);
    
            result = playRound(userPlay(), computerPlay());
            // Update current user score
            score[0] += result[0];
            // Update current computer score
            score[1] += result[1];
            console.log(`Your score: ${score[0]} \n Computer score: ${score[1]}`);
        }
        if (score[0] === score[1]) {
            console.log(`Looks like it's a draw overall. You both scored ${score[0]} points`)
        } else if (score[0] > score[1]) {
            console.log(`YOU'RE CHAMPION. You beat the computer ${score[0]}:${score[1]}`)
        } else {
            console.log(`YOU'VE LOST. The computer beat you ${score[1]}:${score[0]}`)
        }
    }
    
    
    // Test game
    game();