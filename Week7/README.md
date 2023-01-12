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

# MARTES 10 DE ENERO DE 2023

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
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/3c1df6d5fabacd26d813ee25221f87fb298ac233/Week7/Captura%20de%20pantalla%202023-01-11%20181738.png)

![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/3c1df6d5fabacd26d813ee25221f87fb298ac233/Week7/Captura%20de%20pantalla%202023-01-11%20182008.png)


**Return to Sanity**

##### Excercise
```javascript
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/3c1df6d5fabacd26d813ee25221f87fb298ac233/Week7/Captura%20de%20pantalla%202023-01-11%20183128.png)

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

![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/3c1df6d5fabacd26d813ee25221f87fb298ac233/Week7/Captura%20de%20pantalla%202023-01-11%20184121.png)


# MIERCOLES 11 DE ENERO DE 2023

**Count strings in objects**

##### Excercise
```javascript
function strCount(obj) {
  let cont = 0;
  for (let x in obj){
    if(typeof obj[x] == 'string'){
    cont++;
    }else if(typeof obj[x] == 'object') {
      cont += strCount(obj[x])

    }
  }
  return cont;
}
```
##### Input
```javascript
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
});
```
##### Output
```javascript
3
```

##### Screen Verification

![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week7/Captura%20de%20pantalla%202023-01-11%20202614.png)


**Extending JavaScript Objects: Get First & Last Array Element**

##### Excercise
```javascript
Array.prototype.first = function(){
  if(this.length == 0){
    return undefined;
  }else{
    const copy = [...this];
    return copy[0];
  }
};


Array.prototype.last = function(){
  if(this.length == 0){
    return undefined;
  }else{
    const copy = [...this];
    return copy[copy.length-1];
  }
};
```
##### Screen Verification

![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week7/Captura%20de%20pantalla%202023-01-11%20214410.png)



**Object Oriented Piracy**

##### Excercise
```javascript
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20;
  };
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week7/Captura%20de%20pantalla%202023-01-11%20215617.png)