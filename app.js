
let gameOptions = ['Rock','Paper','Scissors'];
let getName = prompt('Kindly Enter your Name');
let playerName = document.getElementById('player-name');
let playersName = document.getElementById('players-name');

let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('user-choice');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let gameResult = document.getElementById('result');
let buttonEvent = document.querySelectorAll('button');
let computerSelect 
let clickedButton
let computerSelection
let playerSelection

let playerScore = 0;
let compScore = 0;

userScore.innerHTML = playerScore;
computerScore.innerHTML = compScore;
playerName.innerHTML = getName;
playersName.innerHTML = getName;

// computer selection
function computerPlay() {

  computerSelect = gameOptions[ 

      Math.floor( Math.random() * gameOptions.length ) 
  
  ];

  computerChoiceDisplay.innerHTML = computerSelect;
  computerSelection = computerSelect;
  
  // console.log(computerSelection);


};


// User selection
for ( var i=0; i < buttonEvent.length; i++){
  buttonEvent[i].addEventListener('click', handleClick);
}

function handleClick (e){
        clickedButton = e.target.id;
        userChoiceDisplay.innerHTML = clickedButton;
        playerSelection = clickedButton;
        computerPlay();
        playRound(playerSelection,computerSelection);
        

  };
// }

function playRound(playerSelection,computerSelection){
  if (playerSelection === computerSelection){
    gameResult.innerHTML = 'It\'s a Tie!';
  }
  
  if(
      (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
      (playerSelection === 'Scissors' && computerSelection === 'Paper') || 
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ){
    gameResult.innerHTML = getName + ' Wins!';
    playerScore++;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
  }

  if(
    (playerSelection === 'Rock' && computerSelection === 'Paper') || 
    (playerSelection === 'Scissors' && computerSelection === 'Rock') || 
    (playerSelection === 'Paper' && computerSelection === 'Scissors')
  ){
    gameResult.innerHTML ='Computer Wins!';
    compScore++;
    userScore.innerHTML = playerScore;
    computerScore.innerHTML = compScore;
  }
  
  if(playerScore === 5){

    gameResult.innerHTML = getName + ' Wins 5 points!';

  } else if( compScore === 5 ){
    gameResult.innerHTML ='Computer Wins 5 Points!';

  }
  
}






