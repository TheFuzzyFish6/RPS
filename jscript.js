function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let result = arr[Math.floor(Math.random() * arr.length)];
    switch (result) {
        case "Rock":
            b = -1;
           break;
       case "Paper":
            b = 0;
           break;
       case "Scissors":
            b = 1;
           break;
    }
    return b;
}

function playerPlay() {
    let a;
    let playerPrompt = prompt("Rock, Paper, or Scissors?").toLowerCase().split(' ');       
    
    for (let i = 0; i < playerPrompt.length; i++) {

      if(playerPrompt){
        playerPrompt[i] = playerPrompt[i].charAt(0).toUpperCase() + playerPrompt[i].substring(1);
    
    }
}

    switch (playerPrompt.join(' ')) {
        case "Rock":
             a = 1;
            break;
        case "Paper":
             a = 0;
            break;
        case "Scissors":
             a = -1;
            break;
        default:
             a = "Hey Dumbass, I said Rock, Paper, Scissors? Can you Read? I don't think you are smart enough for this children's game...";    
    }
    return a;
}

const computerChoice = computerPlay();
const playerChoice = playerPlay();
console.log ( computerChoice + " " + playerChoice)

function playRound(playerChoice, computerChoice) {
    let numericalResult = playerChoice + computerChoice;
    let computerScore = 0;
    let playerScore = 0;
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
}

console.log(playRound(playerChoice, computerChoice));

let { playerScore, computerScore } = playRound(playerChoice, computerChoice);

console.log(playerScore);
console.log(computerScore);

function gameResult(playerScore, computerScore) {
    if (computerScore>playerScore) {
        return "YOU SUCK AND LOSE! The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore<playerScore) {
        return "Congrats... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
    } else if (computerScore==playerScore) {
        return "Tied... NO ONE CARES. The Current Score is Computer: " + computerScore + " Player: " + playerScore;
}}

console.log(gameResult(playerScore, computerScore));