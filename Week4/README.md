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
	Si contador>6 Entonces
		total = acum *0.15
	SiNo
		total = acum *0.10
		
	Fin Si
	tot2 = acum/venta
	Imprimir  "El promedio de las ventas es: ", tot2
	Imprimir "El descuento es de: ", total
FinAlgoritmo
```
#### CON 10% DE DESCUENTO 

![1](https://user-images.githubusercontent.com/78062925/207214241-4436482a-dc21-4bd9-867d-94cddea94cd3.png)


#### CON 15% DE DESCUENTO
![2](https://user-images.githubusercontent.com/78062925/207214243-7003e9c3-f8ea-4973-98dc-bd6358fad335.png)



