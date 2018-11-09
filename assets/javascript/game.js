var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessCount = 10;
var lettersGuessed = [];

var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");
var guessCountText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");


document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerWord = letters[Math.floor(Math.random() * letters.length)];

        if (userGuess === computerWord){
            winCountText.textContent = winCount + 1;
        } else {
            guessCount--;
            guessCountText.textContent = guessCount - 1;
            // wordsGuessed.push ++;
            lettersGuessed.push (userGuess);
            lettersGuessedText.textContent = lettersGuessed;

        }
}
