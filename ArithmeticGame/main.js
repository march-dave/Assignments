'user strict';

document.addEventListener('DOMContentLoaded', init);

var totalNumber = 0;

function init(event) {
	var firstNumber = document.getElementById('firstNumber').textContent = Math.floor((Math.random() * 9) + 1);
	var secondNumber = document.getElementById('secondNumber').textContent = Math.floor((Math.random() * 9) + 1);

	totalNumber = firstNumber + secondNumber;
	var total = firstNumber + secondNumber;

	document.getElementById('totalNumber').textContent = total;
}

var button = document.addEventListener('click', btnClicked);

function btnClicked(event) {
	console.log('Button Clicked:',  'Button Clicked');

	console.log("event.innerText: " + event.target.innerText);

	// get that number element
	var numberElemement = document.getElementById('number');
	console.log("numberElemement: " + numberElemement);
	// figure out what number is inside
	var numString = numberElemement.textContent;
	var num = parseInt(numString);
	num++;

	// set the next to the new number
	numberElemement.textContent = num;
}
