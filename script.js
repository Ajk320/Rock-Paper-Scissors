function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}


let userScore = 0, computerScore = 0;
function playRound(playerSelection, computerSelection){
    if(computerScore==5){
        return "You lose! Score:"+userScore+"-"+computerScore;
    }
    else if(userScore==5){
        return "You Win! Score:"+userScore+"-"+computerScore;
    }
    else{
    
        if(playerSelection==computerSelection){
            return "It's a tie! Play again. Score:"+userScore+"-"+computerScore;
        }
        else if(playerSelection=="rock" && computerSelection=="scissors"){
            userScore++;
            return "You Win! Rock beats Scissors. Score:"+userScore+"-"+computerScore;
            
        }
        else if(playerSelection=="rock" && computerSelection=="paper"){
            computerScore++;
            return "You Lose! Paper beats Rock. Score:"+userScore+"-"+computerScore;
        }
        else if(playerSelection=="paper" && computerSelection=="rock"){
            userScore++;
            return "You Win! Paper beats Rock. Score:"+userScore+"-"+computerScore;
        }
        else if(playerSelection=="paper" && computerSelection=="scissors"){
            computerScore++;
            return "You Lose! Scissors beat Paper. Score:"+userScore+"-"+computerScore;
        }
        else if(playerSelection=="scissors" && computerSelection=="rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors. Score:"+userScore+"-"+computerScore;
        }
        else if(playerSelection=="scissors" && computerSelection=="paper") {
            userScore++;
            return "You Win! Scissors beat Paper. Score:"+userScore+"-"+computerScore;
        }
    }
}





function checkGameWin() {
    if (userScore === 5 || computerScore === 5) {
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
}

function updateScores() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function playerClicks(choice) {
    if (userScore === 5 || computerScore === 5) {
        // Prevent further rounds if the game has already been won
        resultDiv.textContent = "Game has already been won. Please reset the game.";
    } else {
        playerSelection = choice;
        computerSelection = getComputerChoice();
        resultDiv.textContent = playRound(playerSelection, computerSelection);
        updateScores();
    }
}

const buttons = document.querySelectorAll('.choice-button');

buttons.forEach(button => {
    button.addEventListener('click', () => playerClicks(button.id));
});

const resultDiv = document.getElementById('result');