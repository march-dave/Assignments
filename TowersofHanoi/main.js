'use strict';

$(document).ready(init);


function init() {
	$('.shell').click(clickShell);
}

var $selectedBlock = "";
function clickShell(event) {

	if ($selectedBlock.length) { 
		console.log("selected > 0");

		var $selectedShell = $(this).find('.towerBase');
		$($selectedShell).prepend($selectedBlock);

		// $($topBlock).removeClass('selected');

		// var $selectedShell = $('#middle');
		// $("#middle").prepend($selectedBlock);
		// $($selectedShell).prepend($selectedShell);

		$selectedBlock = "";
		return false;
	}

	var $topBlock = $(this).find('.block').first();

	// console.log("$topBlock ", $topBlock);

	$($topBlock).addClass('selected');

	// console.log("$($topBlock) ", $($topBlock));
	// $($topBlock)

	// var $selectedBlock = $($topBlock).detach();
	$selectedBlock = $($topBlock).detach();
	
	// console.log($selectedBlock);

	// var $selectedShell = $(this).find('.shell');
	// $($selectedShell).prepend($selectedBlock);
	
	// $($topBlock).removeClass('selected');

	// var $selectedShell = $('#middle');
	// $("#middle").prepend($selectedBlock);
	// $($selectedShell).prepend($selectedShell);



	// $( ".inner" ).prepend( "<p>Test</p>" );
}
