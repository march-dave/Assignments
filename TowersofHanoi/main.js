'use strict';

$(document).ready(init);


function init() {

	$('.shell').click(clickShell);
}

function clickShell(event) {

	var $topBlock = $(this).find('.block').first();

	// console.log("$topBlock ", $topBlock);

	$($topBlock).addClass('selected');

	// console.log("$($topBlock) ", $($topBlock));
	// $($topBlock)
}