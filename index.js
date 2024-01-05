console.log("rock paper scissors");

const words = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;

const optionButtons = document.querySelectorAll(".option");
console.log(optionButtons);
const winnerSpecifier = document.querySelector(".winner-specifier");
const roundDescription = document.querySelector(".round-description");

optionButtons.forEach((optionButton) => {
    optionButton.addEventListener("click", (event) => {
        const userChoice = optionButton.classList[1];
        game(userChoice);

        if(userScore === 5) {
            console.log("user wins the game");
        } else if(computerScore === 5) {
            console.log("computer wins the game");
        }
    });
});

function getComputerChoice() {
    let computerChoice = getRandomNumber();
    return words[computerChoice];
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function lostText(userChoice, computerChoice) {
    return `${userChoice} is beaten by ${computerChoice}`;
}

function winText(userChoice, computerChoice) {
    return `${userChoice} beats ${computerChoice}`;
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`${userChoice} ties with ${userChoice}`);
        roundDescription.innerText = `${userChoice} ties with ${userChoice}`;
        return 0;
    } else if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("You won!");
            return 1;
        } else {
            console.log("You lost!");
            return 2;
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You won!");
            return 1;
        } else {
            console.log("You lost!");
            return 2;
        }
    } else if(userChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You lost!");
            return 2;
        } else {
            console.log("You won!");
            return 1;
        }
    }
}

function game(userChoice) {
    let roundScore = playRound(userChoice, getComputerChoice());
    if(roundScore === 1) {
        userScore++;
    } else if(roundScore === 2){
        computerScore++;
    }
}

