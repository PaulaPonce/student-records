var arreglo = [];
// El arreglo queda arriba o en una variable?

function Student(nombre,points,life){
	this.id = id;
	this.nombre = nombre;
	this.points = points;
	this.life = life;
	this.status = 'Active';
}


function printAll(){
	arreglo.forEach(function(cv){
		document.getElementById("impresion-student").innerHTML+=cv.nombre+"<br>"+cv.points+"<br>"+cv.life+"<br>"+cv.status
	})
}
