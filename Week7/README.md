# LUNES 09 DE ENERO DE 2023

**String: substr()**

```javascript
function firstWord(x) {
  let n1= x.indexOf(' ');
  return x.substr(0, n1);
}
```

**String: replace()**
```javascript
function normalize(input){
let normal = input;
let nuevo = normal.replace('-','/');
let nuevo1 = nuevo .replace('-','/');
return nuevo1;
}
normalize('20-05-2017')
```
**Increment**

##### Excercise
```javascript
let x = 3;
x++;
x = x * 2;
x--;
```
##### Answer
```javascript
x = 7
```

**Fahrenheit**

##### Excercise
```javascript
function toFahrenheit(a){
b = (a * 1.8) +32;
return b
}
```

##### Answer
```javascript
toFahrenheit(0)
32
```

**Boolean**
##### Excercise
```javascript
function nand(a,b){
let and = a && b
return !and
}
```

##### Answer
```javascript
nand(true,true)
false
```


##### Answer
```javascript
nand(false, true)
true
```


##### Answer
```javascript
nand(true, false)
true
```


##### Answer
```javascript
nand(false,false)
true
```