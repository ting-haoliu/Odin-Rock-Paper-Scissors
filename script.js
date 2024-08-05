function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt("Enter your choice (Rock, Paper, Scissors):").toLowerCase(); //case-insensitive
    } while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors");

    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You Win!");
        humanScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("You Lose!");
        computerScore++;
    } else {
        console.log(`This round is a tie. Both of you chose ${humanChoice}`); //equal
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Game Over! Your score: ${humanScore} - Computer score: ${computerScore}`);
}

playGame();