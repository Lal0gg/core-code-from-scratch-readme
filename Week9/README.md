# LUNES 23 DE ENERO DE 2023

**"this" is a problem**


##### Excercise
```javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/1.png)


**"Thinkful - List and Loop Drills: Lists of lists"**

##### Excercise
```javascript
function processData(data) {
  return data
    .map((sublist) => sublist[0] - sublist[1])
    .reduce((product, result) => product * result, 1);
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/2.png)


**Stop gninnipS My sdroW!**

##### Excercise
```javascript
function spinWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/3.png)


# MARTES 24 DE ENERO DE 2023

**"this" is an other problem**

##### Excercise
```javascript
function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}

NamedOne.prototype = {
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get fullName() {
        return this._fullName;
    },
    set fullName(value) {
        var names = value.split(' ');
        if (names.length === 2) {
            this._firstName = names[0];
            this._lastName = names[1];
            this._fullName = this._firstName + ' ' + this._lastName;
        }
    }
};
```

##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/4.png)



**"Who likes it?"**

##### Excercise
```javascript
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names.join(" and ")} like this`;
  }
  if (names.length === 3) {
    return `${names.slice(0, 2).join(", ")} and ${names[2]} like this`;
  }
  return `${names.slice(0, 2).join(", ")} and ${
    names.length - 2
  } others like this`;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/5.png)


**Convert string to camel case**

##### Excercise
```javascript
function toCamelCase(str) {
  if (str === "") return "";
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/6.png)



# MIÉRCOLES 25 DE ENERO DE 2023

**Easy mathematical callback**

##### Excercise
```javascript
function processArray(arr, callback) {
  // TODO
  return arr.map(callback);
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/7.png)


**Moving Zeros To The End**

##### Excercise
```javascript
function moveZeros(nums) {
  let nonZero = [];
  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(nums[i]);
    } else {
      nonZero.push(nums[i]);
    }
  }
  return nonZero.concat(zeros);
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/8.png)


**Valid Parentheses**

##### Excercise
```javascript
function validParentheses(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/9.png)



# JUEVES 26 DE ENERO DE 2023

**The Hashtag Generator**

##### Excercise
```javascript
function generateHashtag (str) {
  if (str === "") return false;
  let x = str.split(' ').filter((word) => word !== '').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  if( x.length > 139) return false
  if( x === "") return false
  return "#".concat(x);
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/10.png)


**String incrementer**

##### Excercise
```javascript
function incrementString(str) {
  let num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(str[i]))) {
      break;
    }
    num = str[i] + num;
  }
  if (num === "") {
    return str + "1";
  }
  let newNum = (parseInt(num) + 1).toString();
  while (newNum.length < num.length) {
    newNum = "0" + newNum;
  }
  return str.slice(0, str.length - num.length) + newNum;
}
```
##### Screen Verification
![image](https://github.com/Lal0gg/core-code-from-scratch-readme/blob/main/Week9/11.png)