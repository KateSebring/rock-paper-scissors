let computerChoice;

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

getComputerChoice();

console.log(computerChoice);