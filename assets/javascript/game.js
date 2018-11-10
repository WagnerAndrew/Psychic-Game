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
        
        if (letters.indexOf(userGuess) < 0){
        } else

        {  if (userGuess === computerLetter){
                winCount++;
                winCountText.textContent = winCount ++;
                lettersGuessed = [];
                lettersGuessedText.textContent = lettersGuessed;
                guessCount = 10;
                guessCountText.textContent = guessCount;
                randomLetter ();
                computerLetter = randomLetter ()
                
            } else {
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
                   else {
                    
                     if (lettersGuessed.indexOf(userGuess)=== -1)
                     {
                       guessCount--;
                       guessCountText.textContent = guessCount;
                       lettersGuessed.push (userGuess);
                       lettersGuessedText.textContent = lettersGuessed;
                     }
                     else { 
                       alert("You already guessed that letter!");
                     }
                   }
            }
        }

    }