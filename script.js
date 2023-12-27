function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "It's a tie!Play again";
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        return "You Lose! Scissors beat Paper";
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection=="scissors" && computerSelection=="paper") {
        return "You Win! Scissors beat Paper";
    }
}




function game(){
    let userScore=0, computerScore=0;
    for( let i = 0; i < 5; i++){
        const playerSelection = (prompt("Enter your choice:")).toLowerCase();
        if(!['rock', 'paper', 'scissors'].includes(playerSelection)){
            console.log("invalid choice. Please enter rock , paper or scissors .")
            i--;
            continue;
        }
        const computerSelection = getComputerChoice();
        const outcome = playRound(playerSelection, computerSelection);
        console.log(outcome);
        if(outcome.includes("Win")){
            userScore++;
        }
        else if(outcome.includes("Lose")){
            computerScore++;
        }
    }
    if(userScore>computerScore){
        console.log("You Won! Your score: "+userScore+" Computer's score: "+computerScore);
    }
    else if(computerScore>userScore){
        console.log("You Lost! Your score: "+userScore+" Computer's score: "+computerScore);
    }
    else{
        console.log("It's a Draw! Your score: "+userScore+" Computer's score: "+computerScore);
    }
}

game();
