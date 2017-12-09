// ------------------------------------------------
// 			   SCRIPTS FRONT-END
// ------------------------------------------------



/*=======================================================
=            ANIMACIÓN DEL BOTÓN HAMBURGUESA            =
=======================================================*/

$('#nav-icon').click(function(){

	$(this).toggleClass('open');

	if($('.navClose-link').children().hasClass("open")){
		$('.navClose-link').children().removeClass("open");
	}

})

$('.navClose-link').click(function(e){
	
	var id = e.target.id;

	$('.navClose-link').children().removeClass("open");
	
	if(!$('#'+id).parent().hasClass('show')){
		$('#'+id).children().addClass('open');
	} else {
		$('#'+id).children().removeClass('open');
	}

})

/*=====  End of ANIMACIÓN DEL BOTÓN HAMBURGUESA  ======*/