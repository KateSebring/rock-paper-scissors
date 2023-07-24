// generates number 0-2
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

// return playerChoice based on prompt entry
// when I revisit this, check for proper entry
function getPlayerChoice() {
    return playerChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();
}

// plays a single round by comparing computer and player choice, then returns winner
function playRound(computerChoice, playerChoice) {
    let winnerOfRound;
    if ((computerChoice === "scissors" && playerChoice === "rock")
    || (computerChoice === "paper" && playerChoice === "scissors")
    || (computerChoice === "rock" && playerChoice === "paper")) {
        winnerOfRound = `You win! ${capitalizeChoice(playerChoice)} beats ${computerChoice}.`;
    } else if ((computerChoice === "rock" && playerChoice === "scissors")
    || (computerChoice === "scissors" && playerChoice === "paper")
    || (computerChoice === "paper" && playerChoice === "rock")) {
        winnerOfRound = `You lose! ${capitalizeChoice(computerChoice)} beats ${playerChoice}.`;
    } else {
        winnerOfRound = "It's a tie! No winner.";
    }
    return winnerOfRound;
}

// plays game 5 times
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