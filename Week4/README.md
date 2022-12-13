# LUNES 12 DE DICIEMBRE DE 2022
**Average sales and commission**

### Pseudocódigo

```python
Algoritmo average
	Escribir "Cuantas ventas tuvo?"
	Definir venta Como Entero
	Definir costo Como Real
	venta = 0
	costo = 0
	Leer contador
	Para  contador <- 1 Hasta contador Con Paso 1 Hacer
		Escribir "Venta # " , contador
		Escribir "Ingrese el costo"
		Leer costo2
		acum <- costo+costo2
		costo <-acum
		venta = venta +1
	FinPara
	Imprimir "t", acum
	Imprimir "cont", venta
	Si contador>5 Entonces
		total = acum *0.15
	SiNo
		total = acum *0.10
		
	Fin Si
	tot2 = acum/venta
	Imprimir  "El promedio de las ventas es: ", tot2
	Imprimir "El descuento es de: ", total
FinAlgoritmo
```