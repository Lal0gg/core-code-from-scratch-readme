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
