let buttons = document.querySelectorAll('.button');
let computerScore = 0;
let playerScore = 0;

const displaypScore = document.createElement('div');
const displaycScore = document.createElement('div');    
const playerChoiceDisplay = document.createElement('div');
const computerChoiceDisplay = document.createElement('div');
const gameGrid = document.getElementById('gameResults');
gameGrid.append(playerChoiceDisplay, computerChoiceDisplay, displaypScore, displaycScore);

const textBox = document.querySelector('#textBox');
    textBox.innerHTML = '<span>Heh, you think you can beat me?.... in a best of 5?... You have made a foolish mistake.... Allow me to show you the errors of your ways you fucking newb.</span>';

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
        updateTextBox();
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

function updateTextBox () {
    if (computerScore === 5) {
        textBox.innerHTML = '<span>GG EZ FKN NEWB... GET GUD LUL...</span>';
    } else if (playerScore > 3) {
        textBox.innerHTML = '<span>THERE IS NO WAY YOU WILL EVER BEAT ME...GOD GAMER KATANA MODE ACTIVATED...</span>';
    } else if (computerScore < playerScore) {
        textBox.innerHTML = '<span>Enjoy your luck while it lasts... Your Defeat by my hands is still assured...</span>';
    } else if (computerScore > playerScore) {
        textBox.innerHTML = '<span>Why dont you practice some more and come back later you filthy NEWB...</span>';
    } else if (computerScore = playerScore) {    
        textBox.innerHTML = '<span>Tied... HEH... not for long...</span>';
    }
};

function endGameProtocol () {
    
}
