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

**Even or odd**

```python
Algoritmo evenordd
	Repetir
		Escribir "Ingrese un número del 1-50"
		Leer numgg
		Si numgg < 1  | numgg > 50 Entonces
			Imprimir  "Número incorrecto"
		Fin Si
	Mientras Que numgg < 1  | numgg > 50
	pargg = numgg%2=0
	Para x=1 Hasta numgg Con Paso 1 Hacer
		Si x%2=0 & pargg Entonces
			Escribir x
		Fin Si
		SI x % 2 = 1 & ~(pargg) Entonces
			Imprimir x
		FinSi
	Fin Para
FinAlgoritmo
```

#### Entrada y Salida

![n1](https://user-images.githubusercontent.com/78062925/207220349-c24b15de-218a-4d44-858d-e03ec306c6dd.png)

![n2](https://user-images.githubusercontent.com/78062925/207220350-235c9213-953a-4a64-a1a6-44799f7150d6.png)

![n3](https://user-images.githubusercontent.com/78062925/207220351-d347bab0-0083-4952-ab3c-7bd67fce98d8.png)

