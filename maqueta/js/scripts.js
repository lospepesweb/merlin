btnIdentidad=$("#btn-port-identidad");btnFoto=$("#btn-port-foto");btnGrafico=$("#btn-port-grafico");btnMkt=$("#btn-port-mkt");$("#portfolio-identidad").css("left","0%");$("#portfolio-foto").css("left","100%");$("#portfolio-grafico").css("left","200%");$("#portfolio-mktdigital").css("left","300%");btnIdentidad.click(function(){$("#portfolio-identidad").css("left","0%");$("#portfolio-foto").css("left","100%");$("#portfolio-grafico").css("left","200%");$("#portfolio-mktdigital").css("left","300%")});
btnFoto.click(function(){$("#portfolio-identidad").css("left","-100%");$("#portfolio-foto").css("left","0%");$("#portfolio-grafico").css("left","100%");$("#portfolio-mktdigital").css("left","200%")});btnGrafico.click(function(){$("#portfolio-identidad").css("left","-200%");$("#portfolio-foto").css("left","-100%");$("#portfolio-grafico").css("left","0");$("#portfolio-mktdigital").css("left","100%")});
btnMkt.click(function(){$("#portfolio-identidad").css("left","-300%");$("#portfolio-foto").css("left","-200%");$("#portfolio-grafico").css("left","-100%");$("#portfolio-mktdigital").css("left","0")});$(".carousel").carousel({interval:1E6});$("#btn-menu-merlin").click(function(){$("#btn-menu-merlin").addClass("active");$("#btn-menu-hdv").removeClass("active");$("#btn-menu-qf").removeClass("active");$("#btn-menu-portfolio").removeClass("active");$("#btn-menu-footer").removeClass("active")});
$("#btn-menu-hdv").click(function(){$("#btn-menu-merlin").removeClass("active");$("#btn-menu-hdv").addClass("active");$("#btn-menu-qf").removeClass("active");$("#btn-menu-portfolio").removeClass("active");$("#btn-menu-footer").removeClass("active")});$("#btn-menu-qf").click(function(){$("#btn-menu-merlin").removeClass("active");$("#btn-menu-hdv").removeClass("active");$("#btn-menu-qf").addClass("active");$("#btn-menu-portfolio").removeClass("active");$("#btn-menu-footer").removeClass("active")});
$("#btn-menu-portfolio").click(function(){$("#btn-menu-merlin").removeClass("active");$("#btn-menu-hdv").removeClass("active");$("#btn-menu-qf").removeClass("active");$("#btn-menu-portfolio").addClass("active");$("#btn-menu-footer").removeClass("active")});$("#btn-menu-footer").click(function(){$("#btn-menu-merlin").removeClass("active");$("#btn-menu-hdv").removeClass("active");$("#btn-menu-qf").removeClass("active");$("#btn-menu-portfolio").removeClass("active");$("#btn-menu-footer").addClass("active")});
var anchoPantalla=window.innerWidth,alturaPantalla=window.innerHeight,marginBottom=alturaPantalla-424,divRedes=document.getElementById("redes-container");991>anchoPantalla&&divRedes.setAttribute("style","margin-bottom:"+marginBottom+"px !important");$("#menu-toggle").click(function(){$(this).toggleClass("open")});