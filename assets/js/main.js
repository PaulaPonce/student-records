function addStudent(nombreCampo){
	var campo = "";
	do{
		campo = prompt("Ingrese " + nombreCampo);
	}while(campo == "")
	return campo;
}

var campos = ["Nombre Estudiante", "Porcentaje Técnico", "Porcentaje Habilidades Socio-Emocionales"];
var respuestas = [];

campos.forEach(function(el){
	respuestas.push(addStudent(el));
})

document.getElementById("impresion-student").innerHTML += "Los datos del estudiante son: + <br>" + elNombre + "<br> Tech Skills: " + losPuntos + "<br> Life Points: " + laVida + "<br>Status: ";