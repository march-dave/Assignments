'user strict';

document.addEventListener('DOMContentLoaded', init);
// document.addEventListener('keypress', btnClicked);

var totalNumber = 0;
var array = [];
var calCulatorString = "";

function init(event) {
	calculateValueSetup();
	// keyBoardInput();
}

// function keyBoardInput() {
// 	document.addEventListener('keypress', btnClicked);
// }

function calculateValueSetup() {
	var firstNumber = document.getElementById('firstNumber').textContent = Math.ceil(Math.random() * 9);
	var secondNumber = document.getElementById('secondNumber').textContent = Math.ceil(Math.random() * 9);

	var operatorArray = ["+", "-", "*", "/"];
	var operator;

	operator = operatorArray[Math.floor((Math.random() * operatorArray.length))]
	document.getElementById('sign').textContent = operator;

	switch(operator)
	{
		case '+':
				totalNumber = firstNumber + secondNumber;
			break;
		case '-':
				totalNumber = firstNumber - secondNumber;
			break;
		case '*':
				totalNumber = firstNumber * secondNumber;
			break;
		case '/':
				totalNumber = Math.round(firstNumber / secondNumber);
			break;
		default:
			break;
	}

	document.getElementById('totalNumber').textContent = ' = ' + totalNumber;

	// var d = new Date();
	// document.getElementById('clockdiv').textContent = d.getSeconds();
	// var timeOutID = setTimeout(function () { init() }, 10000 );
	// clearTimeout(timeOutID);
}


// var button = document.addEventListener('click', btnClicked);
// var buttonK = document.addEventListener('keypress', btnClicked);
document.addEventListener('click', btnClicked);
document.addEventListener('keypress', btnClicked);

function btnClicked(event) {

	// if(event.target.matches('buttonM') || event.target.matches('buttonK')) {
	if(event.target.matches('button') ) {

		var text = event.target.textContent;

		var compareNum = 0;

		switch(text) 
		{
			case '±':
				if (calCulatorString.length) {
					calCulatorString = parseInt(calCulatorString) > 0 ? "-" + calCulatorString : calCulatorString.slice(1);
				}
				break;
			case '=':

				break;
			case 'clr':
					calCulatorString = "";
					document.getElementById('skipAnswerValue').textContent = '';

				break;
			case 'Skip':
				init();

				document.getElementById('skipAnswer').style.display = "";
				document.getElementById('skipAnswerValue').textContent = totalNumber;
				break;
	
			default:
					calCulatorString = calCulatorString + text;
				break;
		}

		if ( isNaN(text) && text === '=' ) {

			if ( parseInt(totalNumber) === parseInt(calCulatorString) ) {
				document.getElementById('answer').textContent = " congratulation!!: " + parseInt(calCulatorString);
			} else {
				document.getElementById('answer').textContent = "Answer is wrong, actuall answer is: " + totalNumber;
			}
		}

		if ( isNaN(text) && text === 'clr' ) {
			
			array = [];
			compareNum = 0;
			document.getElementById('answer').textContent = '';
		}
	}
}
