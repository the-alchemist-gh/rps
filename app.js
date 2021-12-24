
let gameOptions = ['Rock','Paper','Scissors'];
let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('user-choice');
let gameResult = document.getElementById('result');
let buttonEvent = document.querySelectorAll('button');
let computerSelect 
let clickedButton
const computerSelection = computerSelect;
const playerSelection = clickedButton;

// computer selection
function computerPlay() {

  computerSelect = gameOptions[ 

      Math.floor( Math.random() * gameOptions.length ) 
  
  ];

  computerChoiceDisplay.innerHTML = computerSelect;

};


// User selection

// function userPlay(){
  buttonEvent.forEach(
    function(){
      this.addEventListener('click',function (e){
        clickedButton = e.target.id;
        userChoiceDisplay.innerHTML = clickedButton;
        computerPlay();
        console.log(e.target.id)
        // console.log(computerSelection);
      })
    }
  )
// }

function playRound(playerSelection,computerSelection){
  if (playerSelection === computerSelection){
    gameResult.innerHTML = 'It\'s a Tie!'
  }
}



