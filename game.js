//Homework 3 *note, I worked on this with my tutor, we did the PsuedoCode together that is seen here.

//Begin setting up the variables here

// Psychic Game Psuedocode

// Global Variables

var wins = 0;
var losses = 0 ;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = "";
var userGuess = "";
var letters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

console.log(letters[0])

    // Functions
var randomLetter = function( ) {
        
    var letter = letters[Math.floor(Math.random() *letters.length)];

    return letter
}

var userGuess = function( ){

    var userGuess = letters[Math.floor(Math.random() *letters.length)];

}

('#letter').html('letter')


    // Function to choose Random Letter use Math.Random max 26
    // i = Math.Random
    // randomLetter= letters[i];



// conditional compare userGuess / randomLetter
// match, no match guesses left > 0, no match guesses left <= 0

// if(match){ 
    // increase wins++ game restarts}
// elseif( no match && guesses left > 0 ) {
// lose get another chance
// Display guessed letter

    if

    if

// }
// else{
// lose game restarts
// increase losses ++
// }

    else

    else

// Click/Input Functions
// Get input from user: what key was pressed