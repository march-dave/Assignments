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

		$selectedBlock = "";
		return false;
	}

	var $topBlock = $(this).find('.block').first();

	$($topBlock).addClass('selected');
	$selectedBlock = $($topBlock).detach();
}
