var arreglo = [];

function addStudent(nombreCampo){
	var campo = "";
	do{
		campo = prompt("Ingrese " + nombreCampo);
	}while(campo==="")
	return campo;
}

function Student(id,nombre,points,life){
	this.id = id;
	this.nombre = nombre;
	this.points = points;
	this.life = life;
	this.status = 'Active';
}


function ingreso(){

	var elNombre = addStudent('Ingrese su Nombre y Apellido');
	var losPuntos = addStudent('Ingrese su Porcentaje Técnico');
	var laVida = addStudent('Ingrese sus Habilidades Socio-Emocionales');

	var alumnoAux = new Student(arreglo.length,elNombre,losPuntos,laVida);
	arreglo.push(alumnoAux);

	document.getElementById("impresion-student").innerHTML += "<br><b>Los datos del estudiante son:</b> <br><br>" + elNombre + "<br> Tech Skills: " + losPuntos + "<br> Life Points: " + laVida + "<br>Status: Active<br><br>";

}




function printAll(){
	arreglo.forEach(function(cv){
		document.getElementById("impresion-student").innerHTML += cv.nombre +"<br>" + "Tech Skills :" + cv.points+"<br>" + "Life Skills : "+cv.life+"<br>" + "Status: Active" + "<br><br>";
	});
}








