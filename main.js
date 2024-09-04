const words = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let userInput = prompt("'rock', 'paper', or 'scissors'? ").toLowerCase();
    if (words.includes(userInput)) {
        return userInput;
    } else {
        alert("Invalid input! Please enter 'rock', 'paper', or 'scissors'.");
        return getHumanChoice();
    }
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return words[randomNum];
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(""); 
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("The game is a tie!");
    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}

playGame();
