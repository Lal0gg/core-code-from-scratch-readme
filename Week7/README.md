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

# MARTES 11 DE ENERO DE 2023

**Objects**

##### Excercise
```javascript
function animal(obj){
  let name = obj.name;
  let color = obj.color;
  let legs = obj.legs;
  return "This " + color  + " "+name + " has " + legs +" legs.";
  }

let animal1 = {name:"dog",legs:4,color:"white"};
let animal2 = {name:"cock",legs:2,color:"red"};
let animal3 = {name:"rabbit",legs:4,color:"gray"};

animal(animal1);
animal(animal2);
animal(animal3);
```
##### Answer
```javascript
"This white dog has 4 legs."
"This red cock has 2 legs."
"This gray rabbit has 4 legs."
```

##### Screen Verification
![image](Week7\Captura de pantalla 2023-01-11 181738.png)

![image](Week7\Captura de pantalla 2023-01-11 182008.png)


**Return to Sanity**

##### Excercise
```javascript
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}
```
##### Screen Verification
![image](Week7\Captura de pantalla 2023-01-11 183128.png)

**Object syntax debug**
##### Excercise
```javascript
var rooms = {
    first: {
      description: "This is the first room",
      items: {
        chair: "The old chair looks comfortable",
        lamp: "This lamp looks ancient",
      }
      },
      second: {
        description: "This is the second room",
        items: {
          couch: "This couch looks like it would hurt your back",
          table: "On the table there is an unopened bottle of water",
        },
      },
    }
```
##### Screen Verification
```
![image](Week7\Captura de pantalla 2023-01-11 184151.png)
```