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
    if ((computerChoice === "scissors" && playerChoice === "rock")
    || (computerChoice === "paper" && playerChoice === "scissors")
    || (computerChoice === "rock" && playerChoice === "paper")) {
        winnerOfRound = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if ((computerChoice === "rock" && playerChoice === "scissors")
    || (computerChoice === "scissors" && playerChoice === "paper")
    || (computerChoice === "paper" && playerChoice === "rock")) {
        winnerOfRound = `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else {
        winnerOfRound = "It's a tie! No winner.";
    }
    return winnerOfRound;
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
console.log(playRound(computerChoice, playerChoice));