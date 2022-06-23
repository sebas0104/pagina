
function registrar(){
	var nombre=document.forms["contact"].txtnombre.value;
	patron=/^\s*$/;
	if(patron.test(nombre)==true){
		alert("Ingrese el nombre"); return;
	}
	var telefono=document.forms["contact"].txtcel.value;
	patron=/^\d{7,9}$/;
	if(patron.test(telefono)==false){
		alert("cel entre 7 a 9 digitos"); return;
	}
	var Correo=document.forms["contact"].txtemail.value;
	patron=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
	if(patron.test(Correo)==false){
		alert("no ingreso correo"); return;
	}else{
		confirm("Le llegara la informacion a su Correo");
	}

}