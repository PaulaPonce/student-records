function printAll(){
	arreglo.forEach(function(cv){
		document.getElementById("impresion-student").innerHTML+=cv.nombre+"<br>"+cv.points+"<br>"+cv.life+"<br>"+cv.status
	})
}