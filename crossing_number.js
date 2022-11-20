/**
 * Obtiene el número de cruces de la semirecta horizontal que
 * parte del punto point con el polígono polygon y devuelve su
 * módulo 2 para saber si el punto se encuentra en el interior
 * del polígono.
 * @return 0 si se encuentra fuera; 1 si se encuentra dentro.
 */
function crossing_number(point, polygon)
{
	/**
	 * Consideremos cualquier punto fuera de un polígono
	 * con menos de 3 vértices.
	 */
	if(polygon.length < 3)
	{
		return 0;
	}

	/**
	 * Inicialización del contador de cortes.
	 */
	let cn = 0;

	/**
	 * Se copia el polígono en una variable local y se le añade
	 * el primer punto al final para cerrarlo.
	 */
	let poly = polygon.slice(0);
	poly.push(poly[0]);

	for(let i=0; i<poly.length-1; i++)
	{
		/**
		 * Se recorre el polígono en busca de los cortes con la semi-
		 * recta que parte horizontalmente del punto en cuestión hacia
		 * la derecha.
		 */
		if((poly[i][1]<=point[1] && poly[i+1][1]>point[1])
			|| (poly[i][1]>point[1] && poly[i+1][1]<=point[1]))
		{
			/**
			 * El lado considerado corta la recta. A continuación se 
			 * calcula la coordenada X del punto de corte.
			 */
			let cx = poly[i][0] + (point[1] - poly[i][1])
				/ (poly[i+1][1] - poly[i][1])
				* (poly[i+1][0] - poly[i][0]);
			if(point[0]<cx)
			{
				/**
				 * El punto se encuentra a la izquierda del punto de
				 * corte.
				 */
				cn++;
			}
		}
	}
	
	/**
	 * Si la semirecta considerada corta al polígono un número par de veces,
	 * el punto se encuentra fuera del polígono. Si lo corta un número impar
	 * de veces, se encuentra dentro.
	 */
	return cn % 2;
}
