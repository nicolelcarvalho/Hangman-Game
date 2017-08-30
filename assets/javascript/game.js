// Create global variables
var wins = 0;
var correctGuess = 0;
var losses = 0;
var remainingSteps = 10;
var userGuess;
var letters = [];
var lettersGuessed = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var string;
var count = 0;

// Create an array of phrases to be guessed.
var phrase = ["pirate booty", "treasure map"];
// Select a phrase at random from the array and store it in a variable.
var currentPhrase = phrase[Math.floor(Math.random() * phrase.length)];
console.log(currentPhrase);

// Declare function that animates the figures off the plank. 
// This function will be accessed later on in the game. 
// Only gets called when a letter guessed does not match letter in phrase.
var imageOffset = 780;
 	function moveFigures() {
		var step = document.getElementById("remainingSteps");
	     imageOffset += -32
		 document.getElementById("figures").style.left = imageOffset + "px"; 
		  remainingSteps--;
		  step.textContent = remainingSteps;

		// If steps = 0, pirate falls into the water and losses increase by 1.
		// Game starts over: all counters reset except for wins and losses. 
		  if (remainingSteps === 0) {
		  	var userLost = document.getElementById("losses");
			userLost.textContent = losses;
		  	alert("Game over!");
		  	$("#pirate").hide();
		  	losses++;
		  }

	}

// Start of game.
window.onload = function() {
	// Declare a function that determines how many letters are in the phrase. 
	// This number should appear as blank spaces on the user's screen.
	for(var i = 0; i < currentPhrase.length; i++) {

		if (alphabet.includes(currentPhrase[i])) {
			letters[i] = "_";
		} else {
			letters[i] + " ";
		}

	}
	// Blanks should appear as a string.
	string = letters.join(" ");

	console.log(string);

	document.getElementById("letters").textContent = string;
	$("#letters").addClass("blanks");


	// Declare a function that determines what letter was typed or clicked.
	document.onkeyup = function(event) {

      // Determines which key was pressed.
      var usersGuess = event.key; 
      // Change userGuess to lowercase.
      var userGuess = usersGuess.toLowerCase();
      console.log(userGuess);



// Check to see if the key pressed was a letter.
// Do not allow the same key to be pressed twice. 

     if (alphabet.includes(userGuess)) {

      var correct = document.getElementById("correctGuess");
      	// Iterate through the letters in the currentPhrase to see if any 
      	// of the letters match the userGuess.

      	if (currentPhrase.indexOf(userGuess) > - 1) {

	      for (var i = 0; i < currentPhrase.length; i++) {
	        // Compare the value of the letters in the phrase with the value of the userGuess.
	        if (currentPhrase[i] === userGuess) {
	            correctGuess++;
	            correct.textContent = correctGuess;	 
	            letters[i] = userGuess;
	        }

	        // If guess is correct, replace blank letter on screen with userGuess.  
      		document.getElementById("letters").innerHTML = letters.join(" ");

			}
		}

		else {
		    // If the userGuess is not found in the currentPhrase, store the userGuess to the incorrectGuess array. 
			// If an incorrectGuess gets added to the array, figures should move and steps should decrease by 1. 
			if (lettersGuessed.includes(userGuess) === false) {
				lettersGuessed.push(userGuess);
				moveFigures();
			}
				// Append incorrect letters to the screen.
				console.log(lettersGuessed);
				var incorrectGuess = document.getElementById("lettersGuessed");
				incorrectGuess.textContent = lettersGuessed;
      	}

		// Once the word is complete, wins increases by 1.
		// All counters reset except for wins and losses. 


}



	} // end onkeyup event.
} // end window function.



