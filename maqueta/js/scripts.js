// ------------------------------------------------
// 			      SCRIPTS FRONT-END
// ------------------------------------------------



/*=======================================================
=                      PORTFOLIO                      =
=======================================================*/

btnIdentidad = $("#btn-port-identidad");
btnFoto = $("#btn-port-foto");
btnGrafico = $("#btn-port-grafico");
btnMkt = $("#btn-port-mkt");

// Seteo inicial
$('#portfolio-identidad').css('left', '0%');
$('#portfolio-foto').css('left', '100%');
$('#portfolio-grafico').css('left', '200%');
$('#portfolio-mktdigital').css('left', '300%');

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


/*================  End of PORTFOLIO  =================*/




/*=======================================================
=                       SLIDERS                       =
=======================================================*/

$('.carousel').carousel({
	interval: 1000000
})


/*==================  End of SLIDER  ===================*/



$('#btn-menu-merlin').click(function(){
	
	$('#btn-menu-merlin').addClass('active');
	$('#btn-menu-hdv').removeClass('active');
	$('#btn-menu-qf').removeClass('active');
	$('#btn-menu-portfolio').removeClass('active');
	$('#btn-menu-footer').removeClass('active');

})

$('#btn-menu-hdv').click(function(){
	
	$('#btn-menu-merlin').removeClass('active');
	$('#btn-menu-hdv').addClass('active');
	$('#btn-menu-qf').removeClass('active');
	$('#btn-menu-portfolio').removeClass('active');
	$('#btn-menu-footer').removeClass('active');

})

$('#btn-menu-qf').click(function(){
	
	$('#btn-menu-merlin').removeClass('active');
	$('#btn-menu-hdv').removeClass('active');
	$('#btn-menu-qf').addClass('active');
	$('#btn-menu-portfolio').removeClass('active');
	$('#btn-menu-footer').removeClass('active');

})

$('#btn-menu-portfolio').click(function(){
	
	$('#btn-menu-merlin').removeClass('active');
	$('#btn-menu-hdv').removeClass('active');
	$('#btn-menu-qf').removeClass('active');
	$('#btn-menu-portfolio').addClass('active');
	$('#btn-menu-footer').removeClass('active');

})

$('#btn-menu-footer').click(function(){
	
	$('#btn-menu-merlin').removeClass('active');
	$('#btn-menu-hdv').removeClass('active');
	$('#btn-menu-qf').removeClass('active');
	$('#btn-menu-portfolio').removeClass('active');
	$('#btn-menu-footer').addClass('active');

})



/*=======================================================
=             MARGIN BOOTOM DEL MENU MOVIL              =
=======================================================*/

// VARIABLES
var anchoPantalla = window.innerWidth;
var alturaPantalla = window.innerHeight;
var marginBottom = ((alturaPantalla - 424));
var divRedes = document.getElementById("redes-container");

// FUNCIONES
if (anchoPantalla < 991) {
	divRedes.setAttribute("style","margin-bottom:"+marginBottom+"px !important");
}

/*====  End of MARGIN BOOTOM DEL MENU MOVI  ====*/



$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
})