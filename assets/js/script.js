// alert("Hello! I am an alert box!!");

$(function(){



	$('.glyphicon_glyphicon-heart').click(function(e){
		e.preventDefault();
		$(this).toggleClass('glyphicon_glyphicon-heart--red');
	})

	$('.glyphicon_glyphicon-heart').on('click', function(e){

		e.preventDefault();
		e.stopPropagation();
	})




})