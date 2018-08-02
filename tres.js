function mostrar()
{

	var precio;
	var descuento;
	var preciofinal;
	var final:


		precio=prompt(" ingrese su precio ");
		descuento=prompt(" ingrese el descuento ");

			preciofinal=precio*descuento/100;
			final=precio-preciofinal;

			final=document.getElementById('elPrecioFinal').value;

}
