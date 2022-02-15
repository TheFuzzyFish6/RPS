let buttons = document.querySelectorAll('.button');
let computerScore = 0;
let playerScore = 0;

const displaypScore = document.createElement('div');
const displaycScore = document.createElement('div');    
const playerChoiceDisplay = document.createElement('div');
const computerChoiceDisplay = document.createElement('div');
const gameGrid = document.getElementById('gameResults');
gameGrid.append(playerChoiceDisplay, computerChoiceDisplay, displaypScore, displaycScore);

const source = document.createElement('source');
    source.setAttribute('src', './animationsRPS/leanLeft.mp4');
    source.setAttribute('type', 'video/mp4');
const video = document.getElementById('backgroundVideo');
    video.append(source)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = Number(button.id);
        console.log(playerChoice);
        playerChoiceDisplay.innerHTML = "The Moron (that's you) Chose: " + convertPlayerChoice(playerChoice);
        if (playerScore < 4) {
        playRound(playerChoice, computerPlay());
        } else if (playerScore > 3) {
        playRound(playerChoice, activateCheatProtical(playerChoice))
        } else if (computerScore === 5) {
            
        }
        displaypScore.innerHTML = "Newb's Score: " + playerScore;
        displaycScore.innerHTML = "Genius's Score: " + computerScore;
        changeBackgroundVideo();
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

function activateCheatProtical (playerChoice) {
    if (playerChoice === 1) {
        computerChoiceDisplay.innerHTML ="The Genius Chose: Paper"
        let a = 0
        return a;
    } else if (playerChoice === 0) {
        computerChoiceDisplay.innerHTML ="The Genius Chose: Scissors"
        let a = 1
        return a;
    } else if (playerChoice === -1) {
        computerChoiceDisplay.innerHTML ="The Genius Chose: Rock"
        let a = -1
        return a;
    }
};

function changeBackgroundVideo () {
    if (computerScore === 5) {
        source.setAttribute('src', './animationsRPS/Cookie.mp4');
        video.load().play();
    } else if (playerScore > 3) {
        source.setAttribute('src', './animationsRPS/Focus.mp4');
        video.load().play();
    } else if (computerScore < playerScore) {
        source.setAttribute('src', './animationsRPS/Losing.mp4');
        video.load().play();
    } else if (computerScore > playerScore) {
        source.setAttribute('src', './animationsRPS/leanRight.mp4');
        video.load().play();
    } else if (computerScore = playerScore) {
        source.setAttribute('src', './animationsRPS/leanLeft.mp4');
        video.load().play();
    }
};
