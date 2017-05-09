function addStudent(nombreCampo){
	var campo = "";
	do{
		campo = prompt("Ingrese " + nombreCampo);
	}while(campo == "")
	return campo;
}

var campos = ["Nombre Estudiante", "Porcentaje Técnico", "Porcentaje Habilidades Socio-Emocionales"];
var respuestas = [];

for (var i = 0; i < campos.length ; i++) {
	respuestas[i] = addStudent(campos[i])
}

campos.forEach(function(el){
	respuestas.push(addStudent(el));
})
//id impresion-student
