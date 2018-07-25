// alert("Hello! I am an alert box!!");

$(function(){

	// INFO FORMULARIO	

	$('#user__name').focus();
	$('form').submit(function (event){
		event.preventDefault();
		var formData = {
			userName: $('#user__name').val(),
			userComentario: $('#comentario__text').val(),
		}

		postCreate(formData);
		function postCreate(formData) {
			var post = $('.new__tweet:first').clone().css("display","block");
			post.find('.name__tweet').text(formData.userName);
			post.find('.comentario__tweet').text(formData.userComentario);
			var file = document.getElementById('imagen__user').files[0];
			var reader = new FileReader();
			reader.onloadend = function (){
				post.find('.imagen-perfil').attr('src,reader.result');
			}
			if (file){
				reader.readAsDataURL(file);
			} else {
				swal('Selecciona una imagen');
				return;
			}
			$('.col-derecha').after(post);
			$('#imagen__perfil').attr('src','' );
		}
	});




	$('#imagen__user').on('change', function(){
		var file =document.getElementById('imagen__user').files[0];
		var reader = new FileReader();
		reader.onloadend = function(){
			$('.imagen-perfil').attr('src',reader.result);
		}
		if (file){
			reader.readAsDataURL(file);
		} else {
			return;
		}
	});	

});	

		// CORAZON LIKE	


// 	$('.new__tweet')on.('click','icon-heart-tweet' function(){
// 		$(this).children('i').css('color','red');
// 		numero = parseInt($(this).text())
// 		numero = children('span').text(numero);
// 	})

// 	});




// 	// BORRAR TEXTO

// 	$('form').on('submit', function (e){
// 		$('form')[0].reset();
// 		$('.comentario__tweet').val('')
// 	});

// 	// BORRAR TWEET

// 	$('body').on('click', '.delete-text__tweet', function(){
// 		swal({
// 			title: "Quieres eliminar tweet?",
// 			text: "estas segur@?"
// 			icon: "warning",
// 			buttons: true,
// 			dangerMode: true,
// 		})
// 		.then((willDelete)=> {
// 			if (willDelete) {
// 				$(this).parent().parent().fadeOut("slow").remove();
// 			swal("Post eliminado",{
// 				icon: "success",
// 			});
// 			}else{
// 				swal("No Eliminar");
// 			}	
// 			}
// 		});
// }):

