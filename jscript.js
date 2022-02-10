let buttons = document.querySelectorAll('.button');
let computerScore = 0;
let playerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = Number(button.id);
        console.log(playerChoice);
        playRound(playerChoice, computerPlay());        
    });    
});

console.log(gameResult(playerScore, computerScore));

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let result = arr[Math.floor(Math.random() * arr.length)];
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
    console.log(playerScore, computerScore, gameResult(playerScore, computerScore))
    return {playerScore, computerScore};
};

function gameResult(playerScore, computerScore) {
    if (computerScore>playerScore) {
        return "YOU SUCK AND LOSE! The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore<playerScore) {
        return "Congrats... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore==playerScore) {
        return "Tied... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
}}