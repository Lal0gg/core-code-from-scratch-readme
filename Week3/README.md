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


**Simple Number #1**
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
