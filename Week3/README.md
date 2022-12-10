# LUNES 05 DE DICIEMBRE DE 2022
**Simple calculator📱 #1**

### Pseudocódigo
```python

Algoritmo calculadora
	Definir suma Como Caracter
	Definir resta Como Caracter
	Definir division Como Caracter
	Definir multi Como Caracter
	Definir n1 Como Real
	Definir n2 Como Real
	Definir res Como Real
	Definir op Como Caracter
	Escribir "Ingrese el primer numero"
	Leer n1
	Escribir "Ingrese el segundo numero"
	Leer n2
	Escribir "¿Que opción desea realizar? ( +, * , - , /)"
	Leer op
	Si op == "+" Entonces
		res = n1+n2
		Escribir "El resultado de " , n1 ," + ", n2 ," = ", res
	SiNo 
		Si op == "-" Entonces
			res = n1-n2
			Escribir "El resultado de " , n1 ," - ", n2 ," = ", res
		SiNo
			Si op == "*" Entonces
				res = n1*n2
				Escribir "El resultado de " , n1 ," x ", n2 ," = ", res
			SiNo
				Si op == "/" Entonces
					res = n1/n2
					Escribir "El resultado de " , n1 ," / ", n2 ," = ", res
				SiNo
					Escribir "Ingrese una operación Correcta"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo

```
#### Entradas y Salidas
**➖ RESTA ➖**

![resta](https://user-images.githubusercontent.com/78062925/205770032-059fe5fd-af40-4626-80b6-12f20680bba6.png)

**✖ MULTIPLICACIÓN ✖**

![multi](https://user-images.githubusercontent.com/78062925/205770033-cb6dcbe7-dd33-45a6-8aff-6e843b426561.png)

**➗ DIVISIÓN ➗**

![div](https://user-images.githubusercontent.com/78062925/205770034-509d53b2-8868-4477-a210-80f8c6781707.png)

**➕ SUMA ➕**

![suma](https://user-images.githubusercontent.com/78062925/205770036-3d901097-80c5-4bf4-b531-0e9fc2162dd0.png)


**Simple Number #2**

*Pseudocódigo Corregido*

```python
Algoritmo specialNumber
	Leer n
	Si n == 100 Entonces
		Escribir "This is a special number!"
	SiNo
		Si n < 1000 Y n %10 = 0 Y n<>100 Entonces
			Escribir "This number is almost special"
		SiNo
			Escribir "Just a regular number"
		Fin Si
	Fin Si
FinAlgoritmo

```
#### Entradas y Salidas
**SPECIAL**

![special](https://user-images.githubusercontent.com/78062925/205776044-b4080ed4-9214-4121-acc7-bca065637546.png)

**ALMOST**

![almost](https://user-images.githubusercontent.com/78062925/205776045-7129ce8d-d537-46c4-bb70-c09e566dd87c.png)

**REGULAR**

![regular](https://user-images.githubusercontent.com/78062925/205776046-29996009-3c13-484b-b3f9-f8ef5f722549.png)


# MARTES 06 DE DICIEMBRE DE 2022
**Simple calculator with Switch #1**
### Pseudocódigo
```python

Algoritmo simpleCalcSegun
	Imprimir '======= Simple Calculator ======='
	Imprimir 'Ingrese primer numero'
	Leer n1
	Imprimir 'Ingrese segundo numero'
	Leer n2
	Imprimir 'Ingrese una operación: +,-,*,/'
	Leer op
	Si op == '+' | op == '-' | op == '*' | op == '/' Entonces
		Imprimir 'Procesando: ' + ConvertirATexto(n1) + ' ' + op + ' ' + ConvertirATexto(n2)
		Segun op Hacer
			'+':
				Imprimir 'Resultado: ' + ConvertirATexto(n1 + n2)
			'-':
				Imprimir 'Resultado: ' + ConvertirATexto(n1 - n2)
			'*':
				Imprimir 'Resultado: ' + ConvertirATexto(n1 * n2)
			'/':
				Imprimir 'Resultado: ' + ConvertirATexto(n1 / n2)
		Fin Segun
	SiNo
		Imprimir '⚠️ La operación no es valida'
	FinSi
FinAlgoritmo

```

**INCORRECT**

![a](https://user-images.githubusercontent.com/78062925/206828034-89b49648-3ffe-4fb6-b81a-dbc6cde71609.png)

**Multi Option Program #2**

```python
Algoritmo option
	Imprimir '! ! ! ! ! ! Opcion Multiple ! ! ! ! ! ! '
	Imprimir 'Seleccione una opcion'
	Imprimir '1. Suma de dos numeros'
	Imprimir '2. Imprimir dia de la semana'
	Imprimir '3. Calcular longitud de texto'
	Imprimir 'Ingrese la opcion:'
	Leer opcion
	Segun opcion Hacer
		1:
			Imprimir 'Opcion 1. Suma de dos numeros'
			Imprimir 'Ingrese primer numero'
			Leer num1
			Imprimir 'Ingrese segundo numero'
			Leer num2
			Imprimir 'Resultado: ' + ConvertirATexto(num1 + num2)
		2:
			Imprimir 'Opcion 2. Imprimir dia de la semana'
			Imprimir 'Ingrese el dia de la semana en numeros (1-7)'
			Leer dia
			Segun dia Hacer
				1:
					Imprimir 'Lunes'
				2:
					Imprimir 'Martes'
				3:
					Imprimir 'Miercoles'
				4:
					Imprimir 'Jueves'
				5:
					Imprimir 'Viernes'
				6:
					Imprimir 'Sabado'
				7:
					Imprimir 'Domingo'
				De Otro Modo:
					Imprimir 'Ingrese una entrada correcta!!'
			Fin Segun
		3:
			Imprimir 'Opcion 3.Calcular longitud de texto'
			Imprimir 'Ingrese un texto'
			Leer cadena
			Imprimir 'Resultado: ' + ConvertirATexto(Longitud(cadena))
		De Otro Modo:
			Imprimir 'Opcion incorrecta!'
	Fin Segun
FinAlgoritmo
```

**Suma de dos numeros**

![n1](https://user-images.githubusercontent.com/78062925/206828271-68fd2ff8-7f24-47fd-bd1d-8d8c3b9f35ff.png)


**Imprimir día de la semana**

![n2](https://user-images.githubusercontent.com/78062925/206828277-0ea1aaee-fb01-4647-b85a-7b6d305cce19.png)


**Calcular longitud de texto**

![n3](https://user-images.githubusercontent.com/78062925/206828272-b0b6e841-af34-4de9-b4fd-4adeee3aafb6.png)

# MIÉRCOLES 07 DE DICIEMBRE DE 2022

**Multiplication Tables**


```python
Algoritmo multip
	Imprimir '! ! ! ! TABLA MULTIPLICACION ! ! ! !'
	Imprimir 'Tabla que desee calcular:'
	Leer tabla
	Imprimir '*w* Tabla de ' + ConvertirATexto(tabla) + ' *w*'
	iterador <- 1 
	Mientras iterador <= 10 Hacer
		Imprimir ConvertirATexto(tabla) ' X  ' + ConvertirATexto(iterador) + ' = ' ConvertirATexto(tabla * iterador) 
		iterador <- iterador + 1
	Fin Mientras
FinAlgoritmo
```

**ENTRADA  Y SALIDA**

![multi](https://user-images.githubusercontent.com/78062925/206828585-1c91d9dd-21dc-4374-b9d1-ef840c5ad443.png)

**Simple Calculator with Do While**

```python
Algoritmo calcu
	Imprimir '! ! ! ! ! CALCULADORA SIMPLE ! ! ! ! !'
	Repetir 
		Imprimir 'Ingrese  el primer numero'
		Leer n1
		Imprimir 'Ingrese el segundo numero'
		Leer n2
		Imprimir 'Ingrese una operación: +,-,*,/'
		Leer op
		Si op == '+' | op == '-' | op == '*' | op == '/' Entonces
			Imprimir 'Procesando: ' + ConvertirATexto(n1) + ' ' + op + ' ' + ConvertirATexto(n2)
			Segun op Hacer
				'+':
					Imprimir 'Resultado: ' + ConvertirATexto(n1 + n2)
				'-':
					Imprimir 'Resultado: ' + ConvertirATexto(n1 - n2)
				'*':
					Imprimir 'Resultado: ' + ConvertirATexto(n1 * n2)
				'/':
					Imprimir 'Resultado: ' + ConvertirATexto(n1 / n2)
			Fin Segun
		SiNo
			Imprimir 'Operación no aceptada :S'
		FinSi
		
		Imprimir '¿Deseas continuar con otra operacion ? Si / No'
		Leer continuar
	Hasta Que continuar == 'No' | continuar == 'no'
FinAlgoritmo

```

**ENTRADA  Y SALIDA**

![dowh](https://user-images.githubusercontent.com/78062925/206828872-3e5bc142-e8fe-4c02-ad02-aa5d797f3d13.png)


# JUEVES 08 DE DICIEMBRE DE 2022


**Multiplication Tables with For**


```python
Algoritmo MULTIFOR
	Escribir "Ingrese la tabla: ";
	Leer tabla;
	Para i <- 1 Hasta 10 Hacer
		Escribir tabla," x ", i, " = ", i*tabla;
	FinPara
FinAlgoritmo
```

**ENTRADA  Y SALIDA**


![MULT](https://user-images.githubusercontent.com/78062925/206829221-54e24553-0e1d-4072-982e-29db521a8f80.png)


**Ascending and Descending Numbers**

```python
Algoritmo num
	Imprimir 'Ingrese un numero'
	Leer numero
	Imprimir 'Operaciones:'
	Imprimir '1. Imprimir en orden Ascendente'
	Imprimir '2. Imprimir en orden Descendente'
	Imprimir 'Ingrese operacion'
	Leer opcion
	Segun opcion Hacer
		1:
			Para x <- 0 Hasta numero Con Paso 1 Hacer
				Imprimir ConvertirATexto(x)
			Fin Para
		2:
			Para x <- numero Hasta 0 Con Paso -1 Hacer
				Imprimir ConvertirATexto(x)
			Fin Para
		De Otro Modo:
			Imprimir 'Opcion erronea D:'
	Fin Segun
FinAlgoritmo

```

**ENTRADA  Y SALIDA**

### ASCENDENTE

![ascendente](https://user-images.githubusercontent.com/78062925/206829244-40b367b5-9bc5-4fde-9505-9e052bd674c7.png)

### DESCENDENTE

![descen](https://user-images.githubusercontent.com/78062925/206829245-cfc7e50a-3de3-4611-8976-2ce1dcc46aea.png)



**Greetings**

```python
Algoritmo Greetings
	Definir continuar Como Cadena
	Definir nSalud Como Entero
	nSalud <- 0
	continuar <- 'Si'
	Mientras continuar == 'Si' Hacer
		Imprimir 'Ingrese la hora actual (0-23):'
		Leer hora
		Si hora <= 12 Entonces
			Imprimir 'Buenas dias!'
		SiNo 
			Si hora <= 18 Entonces
				Imprimir 'Buenas tardes!'
			SiNo
				Imprimir 'Buenas noches!'
			Fin Si
		Fin Si
		
		nSalud <- nSalud + 1
		
		Imprimir 'Desea continuar ? Si/No'
		Leer continuar
	Fin Mientras
	
	Imprimir 'Cantidad de Saludos realizados: ' + ConvertirATexto(nSalud)
FinAlgoritmo
```

**ENTRADA Y SALIDA**

![greet](https://user-images.githubusercontent.com/78062925/206829395-e15bacfb-376c-4fe8-a110-cf949d3813c3.png)
