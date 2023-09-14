// generates number 0-2

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let results = document.querySelector('.results');
let currentScores = document.querySelector('.currentScores');
let showWinner = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

function generateNum() {
    return getNum = Math.floor(Math.random() * 3);
}

// capitalizes word
function capitalizeChoice(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// gets computer choice based on number returned from generateNum()
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

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

function gameOver() {
    let winner = playerScore === 5 ? "Player wins!" : "Computer wins!";
    results.textContent = "";
    showWinner.textContent = winner;
}

// plays a single round by comparing computer and player choice, then returns winner
function playRound(computerChoice, playerChoice) {
    let winnerOfRound;

    if ((computerChoice === "scissors" && playerChoice === "rock")
    || (computerChoice === "paper" && playerChoice === "scissors")
    || (computerChoice === "rock" && playerChoice === "paper")) {
        winnerOfRound = `You win! ${capitalizeChoice(playerChoice)} beats ${computerChoice}.`;
        playerScore += 1;
    } else if ((computerChoice === "rock" && playerChoice === "scissors")
    || (computerChoice === "scissors" && playerChoice === "paper")
    || (computerChoice === "paper" && playerChoice === "rock")) {
        winnerOfRound = `You lose! ${capitalizeChoice(computerChoice)} beats ${playerChoice}.`;
        computerScore += 1;
    } else {
        winnerOfRound = "It's a tie! No winner.";
    }

    currentScores.textContent = `Player has ${playerScore} points. Computer has ${computerScore} points.`

    if (isGameOver()) {
        document.querySelector('.rock').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.scissors').disabled = true;
        gameOver();
    } else {
        return winnerOfRound;
    }
    
    
}

rock.addEventListener('click', () => {
    results.textContent =  playRound(getComputerChoice(), 'rock');
});

paper.addEventListener('click', () => {
    results.textContent = playRound(getComputerChoice(), 'paper');
});

scissors.addEventListener('click', () => {
    results.textContent = playRound(getComputerChoice(), 'scissors');
});

// game();