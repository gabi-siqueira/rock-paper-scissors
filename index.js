//Project description: Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

//Scores
var humanScore = 0;
var computerScore = 0;

function playRound() { 
       do {
        //Prompt
        var input = prompt("Let's play Rock, Paper, or Scissors! Please, type your choice:");
        var caseInsensitive = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        //Computer options
        const computerOptions = ["Rock", "Paper", "Scissors"];
        var randomIndex = Math.floor(Math.random() * computerOptions.length);
        var randomOption = computerOptions[randomIndex];
        let result = "";
        if (caseInsensitive===randomOption) {
                result = "It's a tie! Player II chose "+randomOption;
        } else if ((caseInsensitive==="Rock"&&randomOption==="Scissors") || (caseInsensitive==="Paper"&&randomOption==="Rock") || (caseInsensitive==="Scissors"&&randomOption==="Paper")) {
                result = "You won! Player II chose "+randomOption;
                humanScore++;
        } else {
                result = "You lost! Player II chose "+randomOption;
                computerScore++;
               } 
        alert(result);
        alert("You have "+humanScore+" points, and Player II has "+computerScore+" points")
       } while (humanScore<5 && computerScore<5);
       if (humanScore===5) {
        alert("Congratulations! You won the game!"); 
       } else if (computerScore===5) {
        alert("You lost the game. Try again!");
}
}

playRound();

// console.log(caseInsensitive);
// console.log(randomOption);
// console.log(humanScore);
// console.log(computerScore);
