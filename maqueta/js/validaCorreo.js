/*========================================
=            Validar mensajes            =
========================================*/

function validarMensaje(){

	nombre = $('#nombre').val();
	mensaje = $('#mensaje').val();

	if(nombre != ""){

		// var caracteres = nombre.length;
		var expresion = /^[a-zA-Z\s]*$/;

		if(!expresion.test(nombre)){

			$('.alerta').remove();
			$('#fContacto').after('<div class="alert alert-warning alerta" style="margin-top:20px">No se permiten nombres con números ni caracteres especiales.</div>');
			$('#nombre').val('');
			$('#nombre').focus();
			return false;
		
		}


	}  

	if(mensaje != "") {

		var caracteres = mensaje.length;
		var expresion = /^[a-zA-Z0-9\s\.,]*$/;

		if(!expresion.test(mensaje)){

			$('.alerta').remove();
			$('#fContacto').after('<div class="alert alert-warning alerta" style="margin-top:20px">No se permiten mensajes con caracteres especiales.</div>');
			$('#mensaje').val('');
			$('#mensaje').focus();
			return false;
	
		}

	}

	return true;

}

/*=====  End of Validar mensajes  ======*/