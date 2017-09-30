// Create global variables
var wins = 1;
var losses = 1;
var remainingSteps = 10;

var userGuess;
var letters = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var string;

// Create an array of phrases to be guessed.
var phrase = ["SHIPWRECK", "CANNONBALL", "PEGLEG", "CAPTAIN", "CROSSBONES", "CARRIBEAN", "BLACKBEARD", "SWORD", "MATEY", "PARROT", "SCURVY", "AHOY"];
// Create an array of incorrect letters guessed to be able to write them to the screen.
var lettersGuessed = [];
var incorrectGuess = document.getElementById("lettersGuessed");




// Start of game.
window.onload = function startGame() {

// Always start the game with a blank array of letters. 
letters = [];
correctGuessedLetters = [];
// Select a phrase at random from the array and store it in a variable.
var currentPhrase = phrase[Math.floor(Math.random() * phrase.length)];
	// Declare a function that determines how many letters are in the phrase. 
	// This number should appear as blank spaces on the user's screen.
	for(var i = 0; i < currentPhrase.length; i++) {
		if (alphabet.includes(currentPhrase[i])) {
			letters[i] = "_";
			console.log(currentPhrase);
		} 
	}

	// Blanks should form a string and be separated.
	string = letters.join(" ");
	document.getElementById("letters").textContent = string;

	// Begin figures (pirate and captain) at a certain position on the screen
	var imageOffset = 760;
	// Declare function that animates the figures off the plank. 
	// This function will be accessed later on in the game. 
	// Only gets called when a letter guessed does not match letter in phrase.
 	function moveFigures() {
		var step = document.getElementById("remainingSteps");
	     imageOffset += -36
		 document.getElementById("figures").style.left = imageOffset + "px"; 
		  remainingSteps--;
		  step.textContent = remainingSteps;

		// If steps = 0, pirate reaches end of plank and losses increase by 1.
		// Game starts over: all counters reset except for wins and losses. 
		  if (remainingSteps === 0) {
		  	var userLost = document.getElementById("losses");
			userLost.textContent = losses;
		  	++losses;
		    alert("You lost!");
		  	remainingSteps = 10;
			lettersGuessed = [];
		  	startGame();
		  }
	}

	moveFigures();


	// Declare a function that determines what letter was typed.
	document.onkeyup = function(event) {

      // Determines which key was pressed.
      var usersGuess = event.key; 
      // Change userGuess to lowercase.
      var userGuess = usersGuess.toUpperCase();
      console.log(userGuess);

	// Check to see if the key pressed was a letter.
	// Do not allow the same key to be pressed twice. 
     if (alphabet.includes(userGuess)) {

      	// Iterate through the letters in the currentPhrase to see if any 
      	// of the letters match the userGuess.
      	if (currentPhrase.indexOf(userGuess) > - 1) {

	      for (var i = 0; i < currentPhrase.length; i++) {
	        // Compare the value of the letters in the phrase with the value of the userGuess.
	        // If guess is correct...  
	        if (currentPhrase[i] === userGuess) {
	            letters[i] = userGuess;
	        }
	        // Replace blank letter on screen with userGuess.  
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
				incorrectGuess.textContent = lettersGuessed;
      	}

      } // Ends if statement from line 78.
      
		// Once the word is complete, wins increases by 1.
		// All counters reset except for wins and losses. 
      	if(letters.indexOf("_") === -1) {
      		alert("You win!");
      		var userWins = document.getElementById("wins");
			userWins.textContent = wins;
      		wins++;
			remainingSteps = 10;
			lettersGuessed = [];
			incorrectGuess.textContent = lettersGuessed;
		    startGame();
      	}


	} // end onkeyup event.
} // end window function.





