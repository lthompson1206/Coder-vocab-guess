
var game = ["KEVIN", "MICHEAL", "OLIVIER"];
var userChoiceText = document.getElementById("userchoice-text");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var answer = game[choice];
var myLength = answer.length;
var userGuess = event.key;
var msg = userGuess;
document.onkeyup = function(event) {


if ((userGuess === "OLIVIER") || (userGuess === "MICHEAL") || (userGuess === "KEVIN")) {

    if ((userGuess === "OLIVIER") && (computerGuess === "KEVIN")) {
      wins++;
    }

    if ((userGuess === "OLIVIER") && (computerGuess === "MICHEAL")) {
      losses++;
    }

    if ((userGuess === "KEVIN") && (computerGuess === "OLIVIER")) {
      losses++;
    }

    if ((userGuess === "KEVIN") && (computerGuess === "MICHEAL")) {
      wins++;
    }

    if ((userGuess === "MICHEAL") && (computerGuess === "OLIVIER")) {
      wins++;
    }

    if ((userGuess === "MICHEAL") && (computerGuess === "KEVIN")) {
      losses++;
    }

    
    if (userGuess === computerGuess) {
      ties++;
    }

    
    //directionsText.textContent = "";

    //userChoiceText.textContent = "You chose: " + userGuess;
        //computerChoiceText.textContent = "The computer chose: " + computerGuess;
       // winsText.textContent = "wins: " + wins;
        //lossesText.textContent = "losses: " + losses;
        //tiesText.textContent = "ties: " + ties;

 
        function myFunction() {
              alert(answer);
        }






//Guess what letter I'm thinking of

//Wins: (# of times the user has guessed the letter correctly)

//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//Guesses Left: (# of guesses left. This will update)

//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).




//var wordsGuessed = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];//






