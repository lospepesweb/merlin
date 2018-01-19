<?php

class MensajesController {

	public function mandarMensajesController(){
		
		if(isset($_POST['nombre'])){
			
			if(preg_match('/^[a-zA-Z\s]+$/',$_POST['nombre']) && 
			   preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/',$_POST['email']) &&
			   preg_match('/^[a-zA-Z0-9\s\.,]+$/',$_POST['mensaje'])){

				//enviar correo electrónico
				//------------------------------------

				$correoDestino = 'luchopenafiel@gmail.com';
				$asunto = 'Mensaje desde la web';
				$mensaje = 'Nombre: '.$_POST['nombre']."\n"."\n".
						   'E-Mail: '.$_POST['email']."\n"."\n".
						   'Mensaje: '.$_POST['mensaje']."\n";
				$cabecera = 'FROM: web@merlinestudio.com' . "\r\n"; 
				$cabecera .= "Mime-Version: 1.0\n";	
				$cabecera .= "Content-Type: text/plain\n";
				$cabecera .= 'CC: andpetronio@gmail.com';


				// if(isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["comentario"]) ){
			

				// 	$header = "From: CUENTA_DE_TU_DOMINIO@TU_DOMINIO.COM\nReply-To:".$_POST["email"]."\n";
				// 	$header .= "Mime-Version: 1.0\n";
				// 	$header .= "Content-Type: text/plain";
			
				// 	if(mail($to, $subject, $contenido ,$header)){
				// 		echo "Mail Enviado.";
				// 	}
			
				// }



				$envio = mail($correoDestino, $asunto, $mensaje, $cabecera);

				if($envio){

					echo '<div class="alert alert-success alerta" style="margin-top:20px">Gracias por tu consulta. Pronto nos pondremos en contacto.</div>';
				
				} else {

					echo '<div class="alert alert-danger alerta" style="margin-top:20px">¡No se pudo enviar el mensaje, no se permiten caracteres especiales!</div>';
					
				}

				
				
	
			}

		}

	}

}