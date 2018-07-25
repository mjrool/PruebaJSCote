// alert("Hello! I am an alert box!!");

$(function(){


	$('#user__name').focus();
	$('form').submit(function (event){
		event.preventDefault();
		var formData = {
			userName: $('#user__name').val(),
			userComentario: $('#comentario__text').val(),
		}

		postCreate(formData);
		function postCreate(formData) {
			var post = $('.col-derecha:first').clone().css("display","block");
			post.find('.name__tweet').text(formData.userName);
			post.find('.comentario__tweet').text(formData.userComentario);
			var file = document.getElementById('imagen__user').files[0];
			var reader = new FileReader();
			reader.onloadend = function (){
				post.find('.photo__tweet').attr('src,reader.result');
			}
			if (file){
				reader.readAsDataURL(file);
			} else {
				swal('Selecciona una imagen');
				return;
			}
			$('.row').after(post);
			$('.').attr('src','' );
		}
	})	

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