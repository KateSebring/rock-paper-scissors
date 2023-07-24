function getComputerChoice() {
    let computerChoice;

    let getNum = Math.floor(Math.random() * 3);
    if (getNum === 0) {
        computerChoice = "rock";
    } else if (getNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice;
    playerChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    let winnerOfRound;
    if ((computerChoice === "rock" && playerChoice === "rock") 
    || (computerChoice === "paper" && playerChoice === "paper") 
    || (computerChoice === "scissors" && playerChoice === "scissors")) {
        winnerOfRound = "It's a tie! No winner.";
    } else if ((computerChoice === "rock" && playerChoice === "scissors")
    || (computerChoice === "scissors" && playerChoice === "paper")
    || (computerChoice === "paper" && playerChoice === "rock")) {
        winnerOfRound = `Computer wins because ${computerChoice} beats ${playerChoice}.`;
    } else {
        winnerOfRound = `Player wins because ${playerChoice} beats ${computerChoice}.`;
    }
    return winnerOfRound;
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
console.log(computerChoice);
console.log(playerChoice);
console.log(playRound(computerChoice, playerChoice));