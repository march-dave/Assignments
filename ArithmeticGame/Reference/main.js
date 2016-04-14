'user strict';

document.addEventListener('DOMContentLoaded', init);

function init(event) {
	console.log('event:', event);
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
