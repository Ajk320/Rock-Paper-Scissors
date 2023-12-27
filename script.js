function getComputerChoice(){
    const myArray = ['rock', 'paper', 'scissors'];
    const randomElement = myArray[Math.floor(Math.random()*myArray.length)];
    return randomElement;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        playRound(playerSelection, computerSelection);
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        return "You Lose! Scissors beat Paper"
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection=="scissors" && computerSelection=="paper") {
        return "You Win! Scissors beat Paper"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

