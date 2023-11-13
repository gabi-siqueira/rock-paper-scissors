//Create an array (object) with the game options
let options = ["Rock", "Paper", "Scissors"];
//Randomize them
let random = Math.floor(Math.random() * options.length) //Convert to string
if (random==0) {
    //You can declare the conditions within the if statement
    computerTurn="Rock";
} else if (random==1) {
    computerTurn="Paper"
} else {
    computerTurn="Scissors";
}

function getComputerChoice () {
        return computerTurn;
}

//Level 2: function playRound (string) {
    //let playerSelection = Make it case-insensitive
    //let computerSelection = D
    //return the winner in the format "You Lose! Paper beats Rock"
//}

//Use prompt() to get input from the user



console.log(getComputerChoice());



//Level 3: function game (string) {
//Use playRound to play a 5 round game that keeps score and reports a winner or loser at the end
//Either loop the playRound function or write it 5 times in a row
//}




































//SOLUTION with objects
//let input1 = prompt("Rock, paper, scissors, Go!");
//let input2 = prompt("Rock, paper, scissors, Go!");

//function getComputerChoice (player1,player2) {
    //if (!/^[A-Z].*$/.test(player1) || !/^[A-Z].*$/.test(player2)) {
       // throw new Error('Arguments must start with capital letter.');
      //}
   //const choices = {
    //Rock: "Scissors",
    //Paper: "Rock",
    //Scissors: "Paper"
//    }
//    if (player1===player2) {
//     return "Tie"
//    } else if (choices[player1]===player2) {
//     return "Player 1 won!"
//    } else {
//    return "Player 2 won!"
//    }
// }

//console.log(getComputerChoice(input1,input2));