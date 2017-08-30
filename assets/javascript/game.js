// Create variables for wins, losses and remaining steps on plank.
var wins = 0;
var correctGuess = 0;
var losses = 0;
var remainingSteps = 9;
var userGuess;
var letters = [];
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
	     imageOffset += -3
		 document.getElementById("figures").style.left = imageOffset + "px"; 
	
	}

// Start of game.
window.onload = function() {
	// Declare a function that determines how many letters are in the phrase. 
	// This number should appear as blank spaces on the user's screen.
	for(var i = 0; i < currentPhrase.length; i++) {
		letters[i] = "_";
	}
	// Blanks should appear as a string.
	string = letters.join(" ");
	document.getElementById("letters").innerHTML = string;
	$("#letters").addClass("blanks");


	// Declare a function that determines what letter was typed or clicked.
	document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key; 
      console.log(userGuess);
      
      var correct = document.getElementById("correctGuess");
      var step = document.getElementById("remainingSteps");

      	// Iterate through the letters in the currentPhrase to see if any 
      	// of the letters match the userGuess.
	      for (var i = 0; i < currentPhrase.length; i++) {
	        // Compare the value of the letters in the phrase with the value of the userGuess.
	        if (currentPhrase[i] === userGuess) {
	            correctGuess++;
	            correct.textContent = correctGuess;	 
	            letters[i] = userGuess;
	        } else {
	        	  remainingSteps = remainingSteps - 1;
	      	      step.textContent = remainingSteps;
	      	      moveFigures();
      		}

      		document.getElementById("letters").innerHTML = letters.join(" ");

		}

	}
}



