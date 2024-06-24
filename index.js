//Project description: Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

//1.Create a new function named getComputerChoice in a way it will randomly return either Rock, Paper, or Scissors. 

//Place the options into an Array
const computerOptions = ["Rock", "Paper", "Scissors"];
const randomIndex = Math.floor(Math.random() * computerOptions.length);
const randomOption = computerOptions[randomIndex];

//Create the function
function getComputerChoice() {
        return randomOption;
}

//2.Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs - using the prompt method. 

const input = prompt("Let's play Rock, Paper, or Scissors! Please, type your choice:");
const caseInsensitive = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

function getHumanChoice(input) {
return caseInsensitive; 
}

//4.Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
var humanScore = 0;
var computerScore = 0;

function playRound(humanSelection,computerSelection) { 
        let result = "";
        if (humanSelection===computerSelection) {
                result = "It's a tie!"; 
        } else if ((humanSelection==="Rock"&&computerSelection==="Scissors") || (humanSelection==="Paper"&&computerSelection === "Rock") || (humanSelection==="Scissors"&&computerSelection==="Paper")) {
                result = "You won by: " + humanScore + 1;
        } else {
                result = "You lost by: " + computerScore + 1;
        }
        return result;
        }

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection,computerSelection));