var arreglo = [];
// El arreglo queda arriba o en una variable?

function Student(nombre,points,life){
	this.id = id;
	this.nombre = nombre;
	this.points = points;
	this.life = life;
	this.status = 'Active';
}

function ingreso(){
	var alumnoAux = new Student(arreglo.length,elNombre,losPuntos,laVida);
	arreglo.push(alumnoAux);
}




function printAll(){
	arreglo.forEach(function(cv){
		document.getElementById("impresion-student").innerHTML+= cv.nombre+"<br>"+ "Tech Skills :" + cv.points+"<br>"+ "Life Skills : "+cv.life+"<br>"+ "Status: " +cv.status;
	})


