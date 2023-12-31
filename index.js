console.log("rock paper scissors");

const words = ["rock", "paper", "scissors"]
function getComputerChoice() {
    let computerChoice = getRandomNumber();
    return words[computerChoice];
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        console.log("its is tie");
        return 0;
    } else if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("user wins");
            return 1;
        } else {
            console.log("computer wins");
            return 2;
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("user wins");
            return 1;
        } else {
            console.log("computer wins");
            return 2;
        }
    } else if(userChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("computer wins");
            return 2;
        } else {
            console.log("user wins");
            return 1;
        }
    }
}

function getUserChoice() {
    let choice = prompt("Enter your choice:");
    return choice.toLowerCase();
}


function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let roundScore = playRound(getUserChoice(), getComputerChoice());
        if(roundScore === 1) {
            userScore++;
        } else if(roundScore === 2){
            computerScore++;
        }
    }

    if(userScore === computerScore) {
        console.log("its a tie");
    } else if(userScore > computerScore) {
        console.log("user wins the game");
    } else if(computerScore > userScore){
        console.log("computer wins the game");
    }
}

game();
