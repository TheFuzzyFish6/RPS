let buttons = document.querySelectorAll('.button');
let computerScore = 0;
let playerScore = 0;

const displaypScore = document.createElement('div');
const displaycScore = document.createElement('div');    
const playerChoiceDisplay = document.createElement('div');
const computerChoiceDisplay = document.createElement('div');
const gameGrid = document.getElementById('gameResults');
gameGrid.append(playerChoiceDisplay, computerChoiceDisplay, displaypScore, displaycScore);


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = Number(button.id);
        playerChoiceDisplay.innerHTML = "The Moron (that's you) Chose: " + convertPlayerChoice(playerChoice);
        playRound(playerChoice, computerPlay());
        displaypScore.innerHTML = "Newb's Score: " + playerScore;
        displaycScore.innerHTML = "Genius's Score: " + computerScore; 
        
        if (playerScore > 3) {
            playRound(playerChoice, activateCheatProtical())
        }
    });    
});

function convertPlayerChoice(playerChoice) {
    if (playerChoice === 1) {
        return "Rock";
    } else if (playerChoice === 0) {
        return "Papper";
    } else if (playerChoice === -1) {
        return "Scissors"
    }
};

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let result = arr[Math.floor(Math.random() * arr.length)];
    computerChoiceDisplay.innerHTML ="The Genius Chose: " + result;
    switch (result) {
        case "Rock":
            a = -1;
           break;
       case "Paper":
            a = 0;
           break;
       case "Scissors":
            a = 1;
           break;
    }
    return a;
};

function playRound(playerChoice, computerChoice) {
    let numericalResult = playerChoice + computerChoice;
    console.log(computerChoice)
    if (numericalResult === 0) {
         computerScore = computerScore + 0;
         playerScore = playerScore + 0;
    } else if (numericalResult === 1 || numericalResult === -2) {
         computerScore = computerScore + 1;
         playerScore = playerScore + 0;
    } else if (numericalResult === -1 || numericalResult === 2) {
         computerScore = computerScore + 0;
         playerScore = playerScore + 1;        
    }
    
    return {playerScore, computerScore};
};

function gameResult(playerScore, computerScore) {
    if (computerScore>playerScore) {
        return "YOU SUCK AND LOSE! The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore<playerScore) {
        return "Congrats... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore==playerScore) {
        return "Tied... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
}};

