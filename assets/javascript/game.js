// Creating a letter bank
let letterPool = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
// Setting variables
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let lettersGuessed = []; 
let userGuess = [];


randNum = Math.floor(Math.random() * letterPool.length);
// //Getting the letter to guess
let secretLetter = letterPool[randNum];
console.log(secretLetter)


function startOver(){
        
        randNum = Math.floor(Math.random() * letterPool.length);
        secretLetter = letterPool[randNum];
        console.log(secretLetter)
        lettersGuessed = [];
        guessesLeft = 10;
}

//Starting the Game

document.onkeyup = function(e) {

    
    
    
    //Getting the users letter guess
    let userGuess = e.key.toLowerCase();
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed)
        document.getElementById("guesses-already").textContent = "Your Guesses so far: " + lettersGuessed;
    console.log(userGuess)
    if(userGuess === secretLetter) {
        wins++;
        
        alert("You Win!!!");
        lettersGuessed = [];
        startOver();
        
        
        
        
    } else if(userGuess !== secretLetter) {
        guessesLeft--
        
            if(guessesLeft === 0){
                losses++;
                
                alert("You Lose!!! The letter was " + secretLetter);
                lettersGuessed = [];
                startOver();
            }
        
    }

        

    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;


}
