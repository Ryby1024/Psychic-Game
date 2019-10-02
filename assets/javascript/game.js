// Creating a letter bank
let letterPool = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
// Setting variables
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesMade = ""; 
let userGuess = "";


randNum = Math.floor(Math.random() * letterPool.length);
// //Getting the letter to guess
let secretLetter = letterPool[randNum];
console.log(secretLetter)


function startOver(){
    guessesLeft = 10;
    randNum = Math.floor(Math.random() * letterPool.length);
    let secretLetter = letterPool[randNum];
   
}

//Starting the Game

document.onkeyup = function(e) {

    
    
    
    //Getting the users letter guess
    let userGuess = e.key.toLowerCase();

    if(userGuess === secretLetter) {
        wins++
        alert("You Win!!!")
        startOver()
        
        
        
    } if(userGuess !== secretLetter) {
        guessesLeft--
        if(userGuess !== secretLetter){
            document.getElementById("guesses-already").innerHTML = "Your Guesses so far " + userGuess;
            if(guessesLeft === 0){
                losses++
                
                alert("You Lose!!!")
                startOver()
            }
        }
    }

    document.getElementById("wins").innerHTML = "Wins " + wins;
    document.getElementById("losses").innerHTML = "Losses " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses Left " + guessesLeft;


}
