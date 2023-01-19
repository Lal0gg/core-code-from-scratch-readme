# LUNES 16 DE ENERO DE 2023

**Training JS #7: if..else and ternary operator**

##### Excercise
```javascript
function saleHotdogs(n){
  let tot = 0 ;
  if (n<5){
    tot = n * 100
  }else if(n>= 5  && n < 10){
    tot = n * 95
  }else if(n >=10){
    tot = n * 90
  } 
  return tot
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-16%20192349.png)

**Training JS #8: Conditional statement--switch**

##### Excercise
```javascript
function howManydays(month){
  let days;
  switch (month){
      case 1:
        return days = 31;    
      case 2:
        return days = 28;      
      case 3:
        return days = 31;
      case 4: 
        return days = 30;
      case 5:
        return days = 31;
      case 6:
        return days = 30;
      case 7:
        return days = 31;     
      case 8:
        return days = 31;      
      case 9:
        return days = 30;      
      case 10:
        return days = 31;     
      case 11:
        return days = 30;
      case 12: 
        return days = 31;
  }
```

##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-16%20194842.png)

**Basic Calculator**

##### Excercise
```javascript
function calculate(num1, operation, num2) {
  let tot = 0;
 if(operation == '+'){
   return tot = num1+num2
 }else if(operation == '-'){
   return tot = num1-num2
 }
  else if(operation == '*'){
   return tot = num1*num2
 }
  else if(operation == '/'){
   if(num2 == 0){
     return null
   }else{
     return tot = num1/num2
   }
 }else{
   return null;
 }
}
```

##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-16%20195453.png)


# MARTES 17 DE ENERO DE 2023



**Even or odd**

##### Excercise
```javascript
function evenOrOdd(number) {
  let state;
  if(number %2 ==0 ){
    state = 'Even'
    return state
  }else{
    state = 'Odd'
    return state
  }
}
```



##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-17%20190322.png)


**A wolf in sheep's clothing**

##### Excercise
```javascript
function warnTheSheep(queue) {
  const stateWolf = queue.indexOf("wolf");
  if (stateWolf == queue.length - 1)
    return "Pls go away and stop eating my sheep";
  const stateSheep = queue.length - (stateWolf + 1);
  return (
    "Oi! Sheep number " + stateSheep + "! You are about to be eaten by a wolf!"
  );
}

```

##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-17%20203511.png)

**Decode the morse code**


##### Excercise
```javascript
decodeMorse = function (morseCode) {
  let phrase = [];
  let words = morseCode.trim().split('   ');
  let letters = [];
  for (let i = 0; i < words.length; i++) {
    letters = words[i].split(' ');
    for (let j = 0; j < letters.length; j++) {
      letters[j] = MORSE_CODE[letters[j]];
    }
    phrase.push(letters.join(''));
  }
  return phrase.join(' ').trim();
};
```

##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-17%20203829.png)


# MIERCOLES 18 DE ENERO DE 2023

**Who likes it?**
##### Excercise
```javascript
names = ["Alex", "Jacob", "Mark", "Max"];
function likes(names) {
  let contador = 0;
  for (let i in names) {
    contador++;
  }
  if (contador == 0) {
    return (message = "no one likes this");
  } else if (contador == 1) {
    let niuname;
    for (let x in names) {
      niuname = names[x];
    }
    return niuname + " likes this";
  } else if (contador == 2) {
    let niuname0, niuname1;
    for (let x in names) {
      niuname0 = names[0];
      niuname1 = names[1];
    }
    return niuname0 + " and " + niuname1 + " like this";
  } else if (contador == 3) {
    let niuname00, niuname11, niuname22;
    for (let x in names) {
      niuname00 = names[0];
      niuname11 = names[1];
      niuname22 = names[2];
    }
    return niuname00 + ", " + niuname11 + " and " + niuname22 + " like this";
  } else if (contador > 3) {
    let n;
    n = contador - 2;
    let niuname00, niuname11;
    for (let x in names) {
      niuname00 = names[0];
      niuname11 = names[1];
    }
    return niuname00 + ", " + niuname11 + " and " + n + " others like this";
  }
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-18%20211730.png)

**Bit counting**
##### Excercise
```javascript
var countBits = function(n) {
  let niu;
  niu= n.toString(2);
  let contador=0;
  for(let x in niu){
    if(niu[x]==1){
      contador++;
    }
  }
  return contador
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-18%20213119.png--+)


**Your order, please**

##### Excercise
```javascript
function order(words) {
  let array = words.split(' ');
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week8/Captura%20de%20pantalla%202023-01-18%20214628.png)
