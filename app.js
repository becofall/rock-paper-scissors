//console.log("hello world");

let choices = document.getElementById('choices');
let roundResults = document.getElementById('round-results');
let score = document.getElementById('score');
let gameResults = document.getElementById('game-results');
let playerWinCounter = 0;
let computerWinCounter = 0;
choices.textContent = '';
roundResults.textContent = 'Welcome to Rock Paper Scissors!';
score.textContent = 'Current Score: Player--0 Computer--0';
        
function disableButton() {
    button.forEach((button) => {
        button.disabled = true;
    });
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = computerPlay();


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    //console.log(button.id);
    
    let playerChoice = button.id;
    let computerChoice = computerPlay();
    console.log(computerChoice);
    console.log(playRound(playerChoice, computerChoice));
    
    if (playerWinCounter===5) {
        gameResults.textContent = "You won 5 rounds and win the game! Reload to play again.";
        disableButton();
    }
    if (computerWinCounter===5) {
        gameResults.textContent = "The computer won 5 rounds. You lose the game! Reload to play again.";
        disableButton();
    }
  });        
});

//Determine winner of round   
function playRound(playerSelection, computerSelection) {
    if(playerWinCounter===5 || computerWinCounter===5) {
        return null;
    } else if (playerSelection === computerSelection) {
        roundResults.textContent = "It's a tie!";
        //return "It's a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
            roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            
            computerWinCounter++;
            //return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        roundResults.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWinCounter++;
        //return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    score.textContent = `Current Score: Player--${playerWinCounter}     Computer--${computerWinCounter}`;
}