
var compChoices = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m",
				"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

var updateGuessesLeft = function() {
	document.querySelector("#guessLeft").innerHTML = "Guess left: " + guessesLeft;
};

var updateLetterToGuess = function() {
	this.letterToGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};

var updateGuessesSoFar = function () {
	document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};

var reset = function() {
	totalGuesses = 9;
	guessesLeft= 9;
	guessedLetters = [];

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessesSoFar();

		if(guessesLeft > 0){
			if (userGuess==letterToGuess){
				wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				alert("WOAH! You are psychic!")
				reset();
			}
		}else if(guessesLeft == 0){
			losses++;
			document.querySelector("#losses").innerHTML = "Losses: " + losses;
			alert("Yeah....you arent even a little psychcic.");
			reset();
		}
};
















