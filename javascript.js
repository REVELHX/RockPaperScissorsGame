let playerScore = 0
let computerScore = 0
let GameStatus = "false"
let Winner = ""
const JogadorScore = document.getElementById('PlayerScore')
const ComputadorScore = document.getElementById('ComputerScore')
const WinnerIs = document.getElementById('winner')


function computerPlay() {
    var play = ["paper","rock","scissors"]
    Random = play[Math.floor(Math.random() * play.length)];
         return (Random);
     }  
 
   function playRound(playerSelection, computerSelection) {
 
         if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            Winner = 'Computer'
                   
         }
         else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
            computerScore++
            Winner = 'Computer'
             
         }
         else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
            computerScore++
            Winner = 'Computer'
             
         }
         else if (playerSelection === 'paper' && computerSelection === 'rock') { 
             playerScore++
             Winner = 'You'

         }
         else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
             playerScore++
             Winner = 'You'

         }
         else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
             playerScore++
             Winner = 'You'

         }
         else if (playerSelection === computerSelection ) { 
            Winner = 'Draw'
             return 'Draw';
         }

        updateStuff()
        
     }

     function GameFinished() {
        return playerScore === 5 || computerScore === 5
      }
 
     function updateStuff() {
        console.log(playerScore)
        JogadorScore.textContent = `${playerScore}`
        ComputadorScore.textContent = `${computerScore}`
        WinnerIs.textContent = `Winner: ${Winner}`

        
     }
     
   function UpdateChoices(playerSelection,computerSelection) {
       switch (playerSelection) {
       case 'rock':
        document.getElementById("human").style.backgroundImage = "url(https://i.imgur.com/0JUWouj.png)";
        break 
        case 'paper':
        document.getElementById("human").style.backgroundImage = "url(https://i.imgur.com/R5Pku5k.png)";   
        break
        case 'scissors':
        document.getElementById("human").style.backgroundImage = "url(https://i.imgur.com/SziTHP3.png)";
        break
     }
       switch (computerSelection) {
        case 'rock':
        document.getElementById("computer").style.backgroundImage = "url(https://i.imgur.com/0JUWouj.png)";
        break 
        case 'paper':
        document.getElementById("computer").style.backgroundImage = "url(https://i.imgur.com/R5Pku5k.png)";   
        break
        case 'scissors':
        document.getElementById("computer").style.backgroundImage = "url(https://i.imgur.com/SziTHP3.png)";
        break
       }
    }
      /** variaveis & buttões **/
     var RockButton = document.getElementById("rock");
     var ScissorsButton = document.getElementById("scissors");
     var PaperButton = document.getElementById("paper");
     

     RockButton.addEventListener('click', () => handleClick('rock'))
     ScissorsButton.addEventListener('click', () => handleClick('scissors'))
     PaperButton.addEventListener('click', () => handleClick('paper'))

     function handleClick(playerSelection) {
        if (GameFinished())  {
            playerScore = 0
            computerScore = 0
            StartTheGame("false")
        }

        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection)
        UpdateChoices(playerSelection,computerSelection)
        updateStuff()
     }


     var StartGame = document.getElementById('start-playing');

     StartGame.addEventListener('click', () => StartTheGame("true"))

     function StartTheGame(GameStatus) {
         if (GameStatus === "true") {
            $('#game-finished').hide();
        } else {
                $('#game-finished').show(); 
            } 
     }
    
     
     
     