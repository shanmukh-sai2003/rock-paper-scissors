console.log("rock paper scissors");

const words = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;

const optionButtons = document.querySelectorAll(".option");
console.log(optionButtons);
const winnerSpecifier = document.querySelector(".winner-specifier");
const roundDescription = document.querySelector(".round-description");
const userScoreCard = document.getElementById("user-score");
const computerScoreCard = document.getElementById("computer-score");
const userChoiceImg = document.querySelector(".user-choice");
const computerChoiceImg = document.querySelector(".computer-choice");

const gameDeclartion = document.querySelector(".game-declartion");
const gameMessage = document.querySelector(".game-message");
const playAgainButton = document.querySelector(".play-again-btn");

optionButtons.forEach((optionButton) => {
    optionButton.addEventListener("click", (event) => {
        const userChoice = optionButton.classList[1];
        game(userChoice);

        userScoreCard.innerText = userScore;
        computerScoreCard.innerText = computerScore;

        if(userScore === 5 || computerScore === 5) {
            gameDeclartion.style.visibility = "visible";
            if(userScore === 5) {
                gameMessage.innerText = "You won";
            } else {
                gameMessage.innerText = "You lost";
            }
        } 
    });
});

playAgainButton.addEventListener("click", () => {
    location.reload();
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
    userChoiceImg.src = `./images/${userChoice}.png`;
    computerChoiceImg.src = `./images/${computerChoice}.png`;

    if(userChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`${userChoice} ties with ${userChoice}`);
        roundDescription.innerText = `${userChoice} ties with ${userChoice}`;
        winnerSpecifier.innerText = `It's a tie!`;
        return 0;
    } else if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("You won!");
            winnerSpecifier.innerText = "You won!";
            roundDescription.innerText = winText(userChoice, computerChoice);
            return 1;
        } else {
            console.log("You lost!");
            winnerSpecifier.innerText = "You lost!";
            roundDescription.innerText = lostText(userChoice, computerChoice);
            return 2;
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You won!");
            winnerSpecifier.innerText = "You won!";
            roundDescription.innerText = winText(userChoice, computerChoice);
            return 1;
        } else {
            console.log("You lost!");
            winnerSpecifier.innerText = "You lost!";
            roundDescription.innerText = lostText(userChoice, computerChoice);
            return 2;
        }
    } else if(userChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You lost!");
            winnerSpecifier.innerText = "You lost!";
            roundDescription.innerText = lostText(userChoice, computerChoice);
            return 2;
        } else {
            console.log("You won!");
            winnerSpecifier.innerText = "You won!";
            roundDescription.innerText = winText(userChoice, computerChoice);
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