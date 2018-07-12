function mostrar()
{
//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;

	if(edad>17)
	{
	alert(" es mayor de edad ");
	}
	if(edad<18 && edad>12)
	{
	alert(" adolecente ");
	} 
	if(edad<12)
	{
	alert(" niño ");
	}





}//FIN DE LA FUNCIÓN