function generateNum() {
    return getNum = Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerChoice = generateNum();
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
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

function game() {
    let computerChoice;
    let playerChoice;
    
    for (i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }
}

game();