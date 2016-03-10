// Homework jQuery functions to learn
// 		addClass(),  removeClass(), animate(), delay(), slice(), fade(), fadein(), prepend()
// 		Then go back an use jQuery on a past project.


$(document).ready(registerListeners);

function registerListeners() {
	$('button').click(function(event) {
		var theTrick = $(this).attr('todo');
		var thing = $('.thing');
		// console.log(thing);
		if (theTrick != 'undefined') {
			// console.log("call doTheTrick");
			doTheTrick(thing, theTrick);
		}
	})
}

function doTheTrick(thing, theTrick) {
	if (theTrick == 'hide') {
		$('.thing').hide(1000);
	} else if (theTrick === 'show') {
		$('.thing').show(1000);
	} else if (theTrick === 'toggle') {
		$('.thing').toggle(1000); //toggles show & hide for you
	} else if (theTrick === 'html') {
		thing.html('<table border="2"<tr><td>Look. I\'m cell 1<td><td>Look. I\'m cell 2<td></tr></table>'); //same as innerHTML
	} else if (theTrick === 'append') {
		thing.append('<div class="green">I have a friend now</div'); //
	} else if (theTrick === 'css') {
		$('.thing').css({
			'background-color': 'orange',
			/*using JSON format to specify multiple properties*/
			'color': 'red',
			'font-size': '30px'
		});
	} else if (theTrick === 'text') {
		thing.text('Just some new text'); //replaces the text ... won't mess with the html element
	} else if (theTrick === 'each') {
		$('button').each(function() { //like a foreach loop!
			console.log($(this).text());
		});
	} else if (theTrick === 'addclass') {
		thing.addClass('btn-danger');
	} else if (theTrick === 'removeClass') {
		thing.removeClass('btn-danger')
	} else if (theTrick === 'animate') {
		thing.animate({
			opacity: 0.25,
			left: "+=50",
			height: "toggle"
		}, 5000, function() {
			// Animation complete.
		});
	} else if (theTrick === 'delay') {

	} else if (theTrick === 'slice') {

	} else if (theTrick === 'fade') {

	} else if (theTrick === 'fadein') {

	} else if (theTrick === 'prepend') {

	}
}