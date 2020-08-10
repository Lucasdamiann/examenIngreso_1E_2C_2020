/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let producto;
  let marca;
  let precio;
  let pesoEnKg;
  let tipo;
  let respuesta="si";
  let acumuladorPesoTotal=0;
  let marcaDelMasCaroLiquidos;
  let banderaMarcaMasCaro=0;
  let masCaroLiquidos;
  let marcaDelMasBaratoSolidos;
  let banderaMasBaratoSolido=0;
  let masBaratoSolido;

  while(respuesta=="si")
{
  producto=prompt("Ingrese producto");
  marca=prompt("Ingrese marca");
  while(!isNaN(marca))
  {
    marca=prompt("Ingrese marca correcta");
  }
  precio=parseInt(prompt("Ingrese precio"));
  while(precio<0 || isNaN(precio))
  {
    precio=parseInt(prompt("Ingrese precio correcto"));
  }
  pesoEnKg=parseInt(prompt("Ingrese peso en Kg"));
  while(peso<0 || isNaN(peso))
  {
    pesoEnKg=parseInt(prompt("Ingrese peso correcto"));
  }
  tipo=prompt("Ingrese tipo");
  while(tipo!="solido" && tipo!="liquido")
  {
    tipo=prompt("Ingrese tipo correcto");
  }
  acumuladorPesoTotal+=peso;
  if(tipo=="liquido")
  {
    if(banderaMarcaMasCaro==0 || masCaroLiquidos<precio)
    {
      masCaroLiquidos=precio;
      marcaDelMasCaroLiquidos=marca;
      banderaMarcaMasCaro=1,
    }
  }
  if(tipo=="solido")
  {
    if(banderaMasBaratoSolido ==0 || masBaratoSolido>precio)
    {
      masBaratoSolido=precio;
      marcaDelMasBaratoSolidos=marca;
      banderaMasBaratoSolido=1;
    }
  }




  respuesta=prompt("Continuar? si/no");

}//fin while
document.write("El peso total de la compra es "+acumuladorPesoTotal+"<br>");
document.write("La marca del mas caro de los liquidos es "+marcaDelMasCaroLiquidos+"<br>");
document.write("La marca del mas barato de los solidos es "+marcaDelMasBaratoSolidos+"<br>");

}
