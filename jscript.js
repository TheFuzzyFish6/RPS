function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
}

console.log(computerPlay());

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

const computerChoice = computerPlay()
const playerChoice = playerPlay()

console.log(computerChoice + " " + playerChoice)


function playRound(playerChoice, computerChoice) {

}
