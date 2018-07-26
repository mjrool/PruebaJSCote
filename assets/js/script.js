// alert("Hello! I am an alert box!!");

$(function () {

   // INFO FORMULARIO   
    
    $('#user__name').focus();
    $('form').submit(function (event) {
        event.preventDefault();
        var formData = {
            userName: $('#user__name').val(),
            userEscrito: $('.comentario__text').val(),
        }
        postCreate(formData);
        function postCreate(formData) {
            var post = $('.col-derecha:first').clone().css("display","block");
            post.find('.name__tweet').text(formData.userName);
            post.find('.comentario__tweet').text(formData.userEscrito);
            var file = document.getElementById('imagen__user').files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                post.find('.photo__tweet').attr('src', reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            } else {
                swal('Te falta la imagen :(');
                return;
            }
            $('.row').after(post);
            $('.imagen-perfil').attr('src', '');
        }

    })

    $('#imagen__user').on('change', function(){
        var file = document.getElementById('imagen__user').files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                $('.imagen-perfil').attr('src', reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            } else {
                return;
            }
           
    })
   
// REINICIAR FORMULARIO

    $('form').on('submit', function (event) {
        $('form')[0].reset();
        $('.comentario__tweet').val('')
    });


    // BORRAR TWEET

$('body').on('click','.delete__tweet', function(){
        swal({
            title: "Quieres eliminar tweet?",
            text: "estas segur@?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                $(this).parent().fadeOut("slow").remove();
              swal("Post eliminado", {
                icon: "success",
              });
            } else {
              swal("No Eliminar");
            }
          });


        });

    // CORAZON LIKE

    $('body').on('click', '.icon-heart-tweet', function () {
        $(this).children('i').css('color', 'red');
        numero = parseInt($(this).text())
        numero = numero + 1;
        $(this).children('span').text(numero);
    })

});
