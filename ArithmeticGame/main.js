'user strict';

document.addEventListener('DOMContentLoaded', init);

var totalNumber = 0;
var array = [];
var str = "";

function init(event) {
	
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

	// expected value
	document.getElementById('totalNumber').textContent = ' = ' + totalNumber;
}

var button = document.addEventListener('click', btnClicked);

function btnClicked(event) {

	if(event.target.matches('button')) {

		var text = event.target.textContent;

		var compareNum = 0;

		switch(text) 
		{
			case '±':
				if (str.length) {
					str = parseInt(str) > 0 ? "-" + str : str.slice(1);

					// console.log("str: " + str);
				}
				break;
			case '=':

				break;
			case 'Clr':
					str = "";
				break;
	
			default:
					str = str + text;
					// array.push(text);
				break;
		}

		if ( isNaN(text) && text === '=' ) {

			if ( parseInt(totalNumber) === parseInt(str) ) {
				document.getElementById('answer').textContent = " congratulation!!: " + parseInt(str);
			} else {
				document.getElementById('answer').textContent = "Answer is wrong, actuall answer is: " + totalNumber;
			}

			// array.forEach(function(c, i, a) {

			// 	switch(text) 
			// 	{
			// 		case '+':
			// 			compareNum = compareNum + c;
			// 			break;
			// 		case '-':

			// 			break;
			// 		case '*':

			// 			break;
			// 		case '/':

			// 			break;
					
			// 		default:
							
			// 			break;
			// 	}

			// } );

			// if ( parseInt(totalNumber) === parseInt(compareNum) ) {
			// 	document.getElementById('answer').textContent = " congratulation!!: " + parseInt(compareNum);
			// } else {
			// 	document.getElementById('answer').textContent = "Answer is wrong, actuall answer is: " + totalNumber;
			// }
		}

		if ( isNaN(text) && text === 'Clr' ) {
			
			array = [];
			compareNum = 0;
			document.getElementById('answer').textContent = '';
		}
	}
}
