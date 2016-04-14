'use strict';


document.addEventListener('DOMContentLoaded', init);


function init() {

	var numButtons = document.getElemetsByClassName('num');

	for(var i=0; i<numButtons.length; i++) {
		numButtons[i].addEventListener('click', numClicked);		
	}

	document.getElementById('equal').addEventListener('click', equalClicked);
}

function displayResut(isCorrect, correctVal) {
	var messageDiv = document.getElementById('message');

	var message;
	if(isCorrect) {
		message = "You're right";
	}
	else {
		message = `You're wrong! 


		The correct answer is` + correctVal;;
	}

	messageDiv.textContent  = message;

	setTimeout(function() {

		messageDiv.textContent  = "What's the answer?";
		newProblem();	
	}, 2000);


}

function equalClicked() {

	var firstVal = parseInt(firstSpan.textContent);
	var secondVal = parseInt(secondSpan.textContent);
	var answer = firstVal * secondVal; 
	var resultVal = parseInt(returnSpan.textContent);

	var isCorrect = answer === resultVal;
	displayResult(isCorrect);

}


function numClicked(event) {
	console.log(event.target.textContent);

	var num = event.target.textContent;

	var oldVal = oldVal + num;
	var newVal = oldVal + newVal;
	returnSpan.textContent = newVal;

	newProblem();
}


function newProblem() {
	var firstSpan = document.getElementById('first');
	var secodSpan = document.getElementById('second');

	firstSpan.textContent = randomInt();
	secondSpan.textContent = randomInt();
}


function randomInt() {
	var num = Math.floor(Math.random() * 21);
}




