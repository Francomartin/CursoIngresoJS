function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	
	while(respuesta=="si")
{	
	var numero=parseInt(prompt("ingrse un numero"));

	if(numero<0)
		{
			negativo=numero*negativo;
		}
	     else
			{
				positivo=numero+positivo;
			}		
	
	respuesta=prompt(" ¿quiere continuar? ");






}
		

	
	






document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN