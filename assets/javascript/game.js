// Create variables for wins, losses and remaining steps on plank.
var wins = 0;
var correctGuess = 0;
var losses = 0;
var remainingSteps = 10;
var userGuess;
var letters = [];
var incorrrectGuess = [];
var string;
var count = 0;

// Create an array of phrases to be guessed.
var phrase = ["pirate booty", "treasure map"];
// Select a phrase at random from the array and store it in a variable.
var currentPhrase = phrase[Math.floor(Math.random() * phrase.length)];
console.log(currentPhrase);


// Declare function that animates the figures off the plank.
// Only gets called when a letter guessed does not match letter in phrase.

var imageOffset = 780;
 	function moveFigures() {
		var step = document.getElementById("remainingSteps");
	     imageOffset += -32
		 document.getElementById("figures").style.left = imageOffset + "px"; 
		  remainingSteps--;
		  step.textContent = remainingSteps;

		  if (remainingSteps === 0) {
		  	alert("Game over!");
		  	$("#pirate").hide();
		  }

	}

// Start of game.
window.onload = function() {
	// Declare a function that determines how many letters are in the phrase. 
	// This number should appear as blank spaces on the user's screen.
	for(var i = 0; i < currentPhrase.length; i++) {
		letters[i] = "_";
		if(/\s/.test(currentPhrase)){
			letters[i] != "_";
		}

	}
	// Blanks should appear as a string.
	string = letters.join(" ");
	document.getElementById("letters").innerHTML = string;
	$("#letters").addClass("blanks");


	// Declare a function that determines what letter was typed or clicked.
	document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key; 

      
      // Check to see if the key pressed was a letter.


      console.log("first", remainingSteps);


      var correct = document.getElementById("correctGuess");
      	// Iterate through the letters in the currentPhrase to see if any 
      	// of the letters match the userGuess.

      	if (currentPhrase.indexOf(userGuess) > - 1) {
      		correctGuess++;
	        correct.textContent = correctGuess;	 

	      for (var i = 0; i < currentPhrase.length; i++) {
	        // Compare the value of the letters in the phrase with the value of the userGuess.
	        if (currentPhrase[i] === userGuess) {
	            correctGuess++;
	            correct.textContent = correctGuess;	 
	            letters[i] = userGuess;
	        }

	        //If guess is correct, replace blank letter on screen with userGuess.  
      		document.getElementById("letters").innerHTML = letters.join(" ");

		}
	}

		        else {
	        	console.log(userGuess);
	        	//If the userGuess is not found in the currentPhrase, store the userGuess to the incorrectGuess array. 
	      	      incorrectGuess.push(userGuess);
				// Append incorrect letters to the screen.
				 
	      		//If an incorrectGuess gets added to the array, figures should move and steps should decrease by 1. 
	        	console.log("second", remainingSteps);
	      	    moveFigures();
      		}

		// Once the word is complete, wins increases by 1.
		// All counters reset except for wins and losses. 




		// If steps = 0, pirate falls into the water and losses increase by 1.
		// All counters reset except for wins and losses. 

	}
}



