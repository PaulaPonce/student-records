
function addStudent(nombreCampo){
	var campo = "";
	do{
		campo = prompt("Ingrese " + nombreCampo);
	}while(campo==="")
	return campo;
}

var elNombre = addStudent('Ingrese su Nombre y Apellido');
var losPuntos = addStudent('Ingrese su Porcentaje Técnico');
var laVida = addStudent('Ingrese sus Habilidades Socio-Emocionales');

	