function getComputerChoice(){
    const myArray = ['rock', 'paper', 'scissors'];
    const randomElement = myArray[Math.floor(Math.random()*myArray.length)];
    console.log(randomElement);
}