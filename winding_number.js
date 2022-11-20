/**
 * Obtiene el producto vectorial
 *     (p1-p0) * (p2-p0)
 * Si es &lt;0, entonces el recorrido
 *     p1 -> p2 gira en sentido horario alrededor de p0
 * Si es &gt;0, entonces el recorrido
 *     p1 -> p2 gira en sentido antihorario alrededor de p0
 */
function momentum(p0, p1, p2)
{
	return (p1[0] - p0[0]) * (p2[1] - p0[1])
		- (p2[0] - p0[0]) * (p1[1] - p0[1]);
}

/**
 * Obtiene el índice (número de vueltas alrededor) del polígono
 * polygon respecto al punto point para saber si el punto se
 * encuentra en el interior del polígono.
 * @return 0 si se encuentra fuera; 1 si se encuentra dentro.
 */
function winding_number(point, polygon)
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
	 * Inicialización del índice.
	 */
	let wn = 0;

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
		if(poly[i][1]<=point[1])
		{
			/**
			 * El vértice actual se encuentra por debajo del punto.
			 */
			if(poly[i+1][1]>point[1]
				&& momentum(point,poly[i],poly[i+1])>0)
			{
				/**
				 * El próximo vértice se encuentra por encima. Para que
				 * el punto se encuentre a la izquierda del segmento que
				 * une los vértices, el movimiento del vértice i al i+1
				 * debe tener sentido antihorario. En este caso se suma 1
				 * al índice.
				 */
				wn++;
			}
		}
		else
		{
			/**
			 * El vértice actual se encuentra por encima del punto.
			 */
			if(poly[i+1][1]<=point[1]
				&& momentum(point,poly[i],poly[i+1])<0)
			{
				/*
				 * El próximo vértice se encuentra por debajo. Para que
				 * el punto se encuentre a la izquierda del segmento que
				 * une los vértices, el movimiento del vértice i al i+1
				 * debe tener sentido horario. En este caso se resta 1 al
				 * índice.
				 */
				wn--;
			}
		}
	}

	/**
	 * Si el índice es 0 el punto se encuentra fuera del polígono. Si no,
	 * se encuentra dentro.
	 */
	return wn;
}
