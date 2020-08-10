/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	
	let nombre;
	let peso;
	let sexo;
	let edad;
	let i;
	let contadorMujeres=0;
	let promedioEdadTotal;
	let acumuladorPromedioEdad=0;
	let contadorPromedioEdad=0;
	let banderaPromedioEdad=0;
	let hombreMasPesado;
	let banderaHombreMasPesado=0;
	let mayorPeso;
	
	for(i=0;i<5;i++)
	{
		nombre=prompt("Ingrese nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese nombre correcto");
		}
		peso=parseInt(prompt("Ingrese peso"));
		while(peso<0 || isNaN(peso))
		{
			peso=parseInt(prompt("Ingrese peso correcto"));
		}
		sexo=prompt("Ingrese sexo");
		while(sexo!="F" && sexo!="M")
		{
			sexo=prompt("Ingrese sexo correcto");
		}
		edad=parseInt(prompt("Ingrese edad"));
		while(edad<0 || isNaN(edad))
		{
			edad=parseInt(prompt("Ingrese edad correcta"));
		}
		acumuladorPromedioEdad+=edad;
		contadorPromedioEdad++;

		if(sexo=="F")
		{
			contadorMujeres++;
		}
		if(sexo=="M")
		{
			if(banderaHombreMasPesado==0 || mayorPeso<peso)
			{
				mayorPeso=peso;
				hombreMasPesado=nombre;
				banderaHombreMasPesado=1;
			}
		}




	}//fin del for
	promedioEdadTotal=parseInt(acumuladorPromedioEdad/contadorPromedioEdad);
	
	document.write("La cantidad de mujeres es "+contadorMujeres+"<br>");
	document.write("La edad promedio en total es "+promedioEdadTotal+"<br>");
	document.write("El hombre mas pesado es"+hombreMasPesado+"<br>");
}
