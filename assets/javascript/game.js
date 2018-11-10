var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winCount = 0;
var lossCount = 0;
var guessCount = 10;
var lettersGuessed = [];


var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");
var guessCountText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");

var computerLetter = randomLetter ();



    function randomLetter (){
        var randomLetterGenerator = letters[Math.floor(Math.random() * letters.length)];
    
        return randomLetterGenerator;  
    };


document.onkeyup = function (event) {

    var userGuessLower = event.key;
    var userGuess = userGuessLower.toLowerCase();
    console.log ("LETTER ARRAY: "+letters);
    console.log ("USER GUESS :" +userGuess);
    console.log ("LETTERS GUESSED :" +lettersGuessed);
    console.log ("ComputerLetter: "+computerLetter);

    // && lettersGuessed.indexOf(userGuess) <= 0
    if (letters.indexOf(userGuess) < 0){
        
        return;
    } else if (userGuess === computerLetter){
            winCount++;
            winCountText.textContent = winCount ++;
            lettersGuessed = [];
            lettersGuessedText.textContent = lettersGuessed;
            guessCount = 10;
            guessCountText.textContent = guessCount;
            randomLetter ();
            computerLetter = randomLetter ()
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
        lettersGuessed = [];
        lettersGuessedText.textContent = lettersGuessed;
        randomLetter ();
        computerLetter = randomLetter ();

    }

}


