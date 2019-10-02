// Creating a letter bank
let letterPool = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
// Setting variables
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesMade;
let secretLetter;
let userGuess;
//Starting the Game
document.onkeyup = function(e) {

    randNum = Math.floor(Math.random() * letterPool.length);
    
    //Getting the letter to guess
    let secretLetter = letterPool[randNum];
    
    //Getting the users letter guess
    let userGuess = e.key.toLowerCase();

    


}