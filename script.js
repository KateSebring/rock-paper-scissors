let computerChoice;
let playerChoice;

function getComputerChoice() {
    let getNum = Math.floor(Math.random() * 3);
    if (getNum === 0) {
        computerChoice = "Rock";
    } else if (getNum === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {

}

getPlayerChoice()
getComputerChoice();

console.log(computerChoice);
console.log(playerChoice);