var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessCount = 10;
var lettersGuessed = [];

var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");
var guessCountText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");

// var computerLetter = "";
var computerLetter = randomLetter ();

function randomLetter (){
    var randomLetterGenerator = letters[Math.floor(Math.random() * letters.length)];
    // console.log ("Inside of randomLetter function it generates : " + randomLetterGenerator);
    return randomLetterGenerator;
    // return computerLetter;
};

// randomLetter ();

// console.log ("Result of computerLetter: " + computerLetter);



document.onkeyup = function (event) {
    var userGuessLower = event.key;
    var userGuess = userGuessLower.toLowerCase();
    
    console.log("The computer letter is: " + computerLetter);
    // console.log (userGuess);
    // && userGuess === letters[indexOf] 
    
        if (userGuess === computerLetter) {
            winCount++;
            winCountText.textContent = winCount ++;
            lettersGuessed = [""];
            lettersGuessedText.textContent = lettersGuessed;
            guessCount = 10;
            guessCountText.textContent = guessCount; 
            computerLetter = randomLetter ();
            // console.log ("computer main process:" + computerLetter)

        } else {
            guessCountText.textContent = guessCount - 1;
            guessCount--;
            lettersGuessed.push (userGuess);
            lettersGuessedText.textContent = lettersGuessed;

        } 
        
         if (guessCount === 0) {
            lossCount++ ;
            lossCountText.textContent = lossCount;
            guessCount = 10;
            guessCountText.textContent = guessCount;
            lettersGuessed = [""];
            lettersGuessedText.textContent = lettersGuessed;
            computerLetter = randomLetter ();

        }

}


