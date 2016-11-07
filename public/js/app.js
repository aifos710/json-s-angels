$(document).ready(function(){
	
	$("#nombre").focus();
	$("#nombre").keydown(validarNombreAp);
	$("#next3").click(validarDatos);

	function validarNombreAp(evento){
  	 	var ascii = evento.keyCode;
  	 	if (ascii == 8 || ascii == 32 || (ascii >= 65 && ascii <= 90 )|| (ascii >= 97 && ascii <= 122 )) {
  	 		return true;
  	 	}else {
  	 		return false;
  	 	}
  	}

  	function validarDatos(){
        var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var dni = $(".dni").val().length;
		var mail = $(".email").val().length;
        var correo =$(".email").val().trim();
        if (email.test(correo) && (dni >= 2 && dni <= 20)  && (mail >= 5 && mail <= 50)) {
        	$(this).attr("href", "buscador.html");
        } else{
        	$("#next3 ").removeAttr("href");
        	alert("Por favor, llena tus datos")
        }
	}

})