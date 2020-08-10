/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidadPersonasViajan;
	let respuesta = "si";
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let sexoTitularMasPasajeros;
	let masPasajeros;
	let banderaMasPasajeros = 0;
	let acumuladorPersonasViajanInvierno = 0;
	let contadorPersonasViajanInvierno = 0;
	let promedioPersonasViajanInvierno;
	let lugarMasElegido;

	while (respuesta == "si") {
		sexoTitular = prompt("Ingrese sexo");
		while (sexoTitular != "F" && sexoTitular != "M") {
			sexoTitular = prompt("Ingrese sexo correcto");
		}
		lugar = prompt("Ingrese lugar");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt("Ingrese lugar correcto");
		}
		temporada = prompt("Ingrese temporada");
		while (temporada != "invierno" && temporada != "primavera" && temporada != "verano" && temporada != "otoño") {
			temporada = prompt("Ingrese temporada correcta");
		}
		cantidadPersonasViajan = parseInt(prompt("Ingrese cantidad de personas"));
		while (cantidadPersonasViajan < 0 || isNaN(cantidadPersonasViajan)) {
			cantidadPersonasViajan = parseInt(prompt("Ingrese cantidad correcta"));
		}
		if (lugar == "bariloche") {
			contadorBariloche++;
		}
		else if (lugar == "cataratas") {
			contadorCataratas++;
		}
		else {
			contadorSalta++;
		}
		if (banderaMasPasajeros == 0 || masPasajeros < cantidadPersonasViajan) {
			masPasajeros = cantidadPersonasViajan;
			sexoTitularMasPasajeros = sexoTitular;
			banderaMasPasajeros = 1;
		}
		if (temporada == "invierno") {
			acumuladorPersonasViajanInvierno += cantidadPersonasViajan;
			contadorPersonasViajanInvierno++;
		}
	respuesta = prompt("Continuar? si/no");
	}//fin while
	if (contadorSalta > contadorBariloche && contadorSalta > contadorCataratas) {
		lugarMasElegido = "Salta"
	}
	else if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarMasElegido = "Bariloche"
	}
	else {
		lugarMasElegido = "Cataratas"
	}


	promedioPersonasViajanInvierno = parseInt(acumuladorPersonasViajanInvierno / contadorPersonasViajanInvierno);

	document.write("El lugar mas elegido es " + lugarMasElegido + "<br>");
	document.write("El sexo del titular que lleva mas pasajeros es " + sexoTitularMasPasajeros + "<br>");
	document.write("El promedio de personas que viajan en invierno es " + promedioPersonasViajanInvierno + "<br>");


}

