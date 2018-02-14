// User input
var userGuess;
// Creates an array that lists out all of the options
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines what key is pressed and stored to userGuess
    var userGuess = event.key;
    // Computer randomly chooses a choice from array and stores it to computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessesSoFar.push(userGuess);
    //console.log(guessesSoFar);

    // userGuess matches computerGuess increment wins and reset guessesLeft and guessesSoFar
    if (userGuess === computerGuess) {
        wins++;
        // resets guessesLeft to 9
        guessesLeft = 9;
        // clears guessesSoFar
        guessesSoFar.length = 0;
        //console.log("win" + wins)
    }
    // guessesLeft = 0 increment losses and reset guessesLeft and guessesSoFar
    else if (guessesLeft === 0) {
        losses++
        // resets guessesLeft to 9
        guessesLeft = 9;
        // clears guessesSoFar
        guessesSoFar.length = 0;
        //console.log("loss" + losses)
    }
    // userGuess doesn't match computerGuess decrease guessesLeft by 1
    else if (userGuess !== computerGuess) {
        guessesLeft--;
        //console.log("Guesses left" + guessesLeft)
    }

    // Finds the element ID and fills in new HTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("left").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = guessesSoFar;

}    
