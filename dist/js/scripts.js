// ------------------------------------------------
// 			      SCRIPTS FRONT-END
// ------------------------------------------------



/*=======================================================
=            ANIMACIÓN DEL BOTÓN HAMBURGUESA            =
=======================================================*/

btnIdentidad = $("#btn-port-identidad");
btnFoto = $("#btn-port-foto");
btnGrafico = $("#btn-port-grafico");
btnMkt = $("#btn-port-mkt");


btnIdentidad.click(function(){
	$('#portfolio-identidad').css('left', '0%');
	$('#portfolio-foto').css('left', '100%');
	$('#portfolio-grafico').css('left', '200%');
	$('#portfolio-mktdigital').css('left', '300%');
})

btnFoto.click(function(){
	$('#portfolio-identidad').css('left', '-100%');
	$('#portfolio-foto').css('left', '0%');
	$('#portfolio-grafico').css('left', '100%');
	$('#portfolio-mktdigital').css('left', '200%');
})

btnGrafico.click(function(){
	$('#portfolio-identidad').css('left', '-200%');
	$('#portfolio-foto').css('left', '-100%');
	$('#portfolio-grafico').css('left', '0');
	$('#portfolio-mktdigital').css('left', '100%');
})

btnMkt.click(function(){
	$('#portfolio-identidad').css('left', '-300%');
	$('#portfolio-foto').css('left', '-200%');
	$('#portfolio-grafico').css('left', '-100%');
	$('#portfolio-mktdigital').css('left', '0');
})




/*=====  End of ANIMACIÓN DEL BOTÓN HAMBURGUESA  ======*/