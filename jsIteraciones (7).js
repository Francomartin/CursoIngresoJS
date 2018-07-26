function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
{

	acumulador+=parseInt(prompt(" ingrese un numero "));
	
	contador++;
	respuesta=prompt(" ¿quiere continuar? ");



}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN