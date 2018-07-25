// alert("Hello! I am an alert box!!");

$(function(){

// CORAZON LIKE	

	$('.new-tweet').on('click', '.icon-heart-tweet', function(e){
		$(this).toggleClass('icon-heart-tweet--red');
		e.preventDefault();
		e.stopPropagation();
	});

	// INFO FORMULARIO	

	$('form').submit(function (e){
		event.preventDefault();
		var formData = {
			userName: $('#user__name').val(),
			userEscrito: $('.comentario__text').val()

		};
	});

	// NUEVO TWEET

	$(function(){
		
	})

	
	

});