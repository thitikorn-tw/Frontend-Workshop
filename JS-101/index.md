# JS 101

> ## Table of Contents

> - ### Variable Declaration

> - Declaring Variables Using `var`

> - Declaring Variables Using `let`

> - Declaring Variables Using `const`

> - Comparison of Three Declaration Methods

> - ### Data Types

> - Type Overview

> - Simple Data Types

> - Complex Data Types

> - Common Operators

> - Type Summary

> - ### Advanced Objects

> - Objects

> - Arrays

> - Functions

> - ### JS Collection Operations

> - ### JS Modules

> - ### DOM

> - ### DevTools

## Variable Declaration

### 1. Declaring Variables Using `var`

1. Usage

```javascript
var a,
  b,
  c = 1;

var a;
var b;
var c = 1;
```

1. Scope

Scope of variables declared with `var`: Function-level/Global

``javascript

var name = 'Neo';

function foo () {

var age = 12;

console.log(name); // Scopes can be nested

console.log(age); // Each nested inner scope can access variables in the outer scope

}

console.log(name);

console.log(age); // ReferenceError

```

1. Variable hoisting

Variable declarations are hoisted to the beginning of the current scope

``javascript

function foo(){

console.log("text:" + text);

var text='hello world';

}

ans: text: undefined

```

``javascript

var i = 5;

function bar() {

console.log(i);

if (true) {

var i = 6;

}

}

ans: undefined

````

### 2. Declaring block-level variables using `let`

1. Usage is similar to var

1. Scope

- Variables declared with `let` have the following scope: block-level/global

- In JavaScript, a set of statements enclosed in curly braces `{}` is called a block.

```javascript

let a = 1;

function foo() {

let b = 2;

if(true){

let c = 3

console.log("block c:" + c);

}

console.log("function b:" + b);

console.log("function c:" + c);

}

// console.log("global:" + a);

// console.log("global:" + b); // ReferenceError

// console.log("global:" + c); // ReferenceError

````

### 3. Declaring Constants Using `const`

1. Must be initialized during declaration

2. Value cannot be changed after initialization

### 4. Differences and Similarities Between Three Declaration Methods

| Keyword | Initialization | Hoisting | Scope | Whether Redeclaration is Allowed |

| ---------- | ----- | ------ | -------- | ------------- |

| var | -- | Y | Function-level/Global | Y |

| let | -- | N | Block-level/Global | N |

| const | Y | N | Block-level/Global | N |

## JavaScript Data Types

### Type Overview

1. Five simple types: Undefined, Null, Boolean, Number, and String

2. Complex data type: Object

3. Data types are dynamically bound

4. The typeof keyword

> Try it yourself

```javascript
typeof '5' === 'string'

typeof a=>a === 'function'

typeof typeof 5 === 'string'

typeof [1,2,3] === 'object'

typeof {a:5} === 'object'

typeof undefined === 'undefined'

```

### Simple Data Types

#### Undefined

Only one value, i.e., undefined

```javascript
let sss;

console.log(typeof sss); // 'undefined'

console.log(typeof nonExist); // 'undefined'
```

#### Null has only one value, null, which represents an empty object pointer.

```javascript
let aNull = null;

console.log(typeof aNull); //'object'
```

> What is the difference between Null and Undefined?

typeof Null is 'object'
typeof Undefined is 'undefined'

#### Boolean

Boolean values: true and false

```javascript
let jsAwesome = true;

let jsSucks = false;
```

##### _Boolean(expression)_ Checks if a value is true

```javascript
Boolean("false"); // true

Boolean(-5); // true

Boolean(""); // false

Boolean((a) => a); // true
```

##### Be careful of implicit type conversion

```javascript

const isJsAwesome = ‘sss’;

if(isJsAwesome) {

console.log('Awesome');

}
```

#### Number Represents all numbers, including integers and floating-point numbers

```javascript
let intNumber = 5;

let floatNumber = 5.5;

let octalNumber = 0o6;

let hexNumber = 0xa;
```

```javascript
// Be careful with floating-point calculations

0.1 + 0.2 === 0.3; // 'false'
```

##### Numerical Range Constants

Number.MIN_VALUE, Number.MAX_VALUE, Infinity, -Infinity, NaN

> Try using the typeof keyword to check the type of these constants

typeof Number.MIN_VALUE // 'number'
typeof Number.MAX_VALUE // 'number'
typeof Infinity // 'number'
typeof -Infinity // 'number'
typeof NaN // 'number'

##### Numerical Transformation Functions

Number(anything), parseInt(str, base), parseFloat(str)

```javascript
Number("5"); // 5

Number("5.5"); // 5.5

Number(true); // 1

parseInt("100", 2); // 4
```

#### String

String

```javascript
let aString = "This is a string.";
```

##### Type Conversion

```javascript
aNumber.toString(5); //'5'

String(1234); // '1234'
```

> What is the difference between String() and toString()?

toString() use by access from String.toString only
String use by cast any types

> Try it yourself

```javascript

null.toString() = TypeError

String(null) = 'null'

```

##### Template String

```javascript
//String concatenation

let person = {
  name: "Neo",

  age: 17,
};

console.log("Name:" + person.name + "Age:" + person.age);
```

```javascript
//ES6 Template String

let person = {
  name: "Neo",

  age: 17,
};

console.log(`Name: ${person.name} Age: ${person.age}`);
```

### Complex Data Types

#### Object

Object - All objects in Javascript

```javascript
let cardA = new Object();

cardA.name = "Tom";

let cardB = { name: "Tom" };
```

### Common Operators

1. Unary Operators: ++, --, +, -

```javascript
let a = 5;

a++; // a = 6

let b = "5";

b++; // b = 6+
```

2. Boolean Operators: &&, ||, !

3. Addition, Subtraction, Multiplication, and Division: +, -, \*, /

4. Relational Operators: >, <

```javascript
23 > 3; // true

"23" > "3"; // false
```

5. Equality Operators: ==, ===, Object.is()

```javascript
null == undefined; //true
NaN == NaN; //false
false == 0; //true
true == 1; //true
true == 2; //false
"5" == 5; //true
Object.is(5, 5); //true
```

### Type Summary

1. JavaScript has five numeric types and one reference type.

2. Types are dynamic, so in addition to using the `typeof` keyword in debug mode, it's important to give variables names that match their type.

3. Implicit type conversions may occur when different types are evaluated using operators. Some conversions are very tricky and should be avoided as much as possible.

4. Never use `==`

## Advanced Objects

JavaScript is a prototype-based language, not a class-based one. Prototypes are mutable.

### Object declaration

```javascript
const person = { name: "David" };
const name = "David";
const personB = { name }; // Equivalent with personB = {name: name}
const People = (name, gender) => {
  this.name = name;
  this.gender = gender;
  this.displayName = () => console.log(this.name);
}; // constructor
const aPerson = new People("David", "male");
aPerson.name; // 'David'
```

### The value of the object

```javascript
const person = { name: "David", gender: "male" };
const name = person.name;
// Alternate: name = person['name'], we always prefer the previous version
// ES6 version const {name, gender} = person;
```

> Try it yourself

```javascript
const book = { author: { name: "David", gender: "male" } };

// Please use ES6 format to retrieve the values ​​of name and gender in one line of code
const {
  author: { name, gender },
} = book;
```

### Objects are a reference type

> Try it yourself

```javascript
let aaaa = 4;

let bbbb = aaaa;

aaaa = 5;

bbbb = 4;

let objectA = { name: "Alice" };

let objectB = objectA;

objectB.name = "Tom";

objectA.name = "Tom";
```

### Object destructuring assignment

Destructuring assignment syntax is a JavaScript expression that allows values ​​from arrays or properties of objects to be extracted into different variables.

```javascript

let a, b;

{a, b} = {b: 1, a: 2};

console.log(a); // 2

console.log(b); // 1

```

### Array

Arrays are very important objects.

```javascript
const aArray = [1, 2, 3, 4];

aArray[1]; // 2
```

> Try it yourself

```javascript
let aArray = [1, 2, 3, 4];

typeof aArray; // 'object'
```

#### Some commonly used properties of Array

length,
Modify elements: push(), pop(), sort(), reverse(), concat()

Element iteration: every(), filter(), map(), some()

Detect array: Array.isArray()

> Try it yourself

```javascript
// Provide an array a = [1,4,5,2,6], take out the odd numbers in the array to generate a new array [1,5], then multiply each element of the array by 2, finally get [2,10]

// You will need to use the filter() and map() functions

let arrayInput = [1, 4, 5, 2, 6];

// Add your code

// take out the odd numbers
// generate a new array
const oddNumbers = arrayInput.filter((number) => number % 2 !== 0);

// multiply each element of the array by 2
const actualResult = oddNumbers.map((number) => number * 2);

let expectedResult; //Should be [2,10]

const isPassed =
  JSON.stringify(actualResult) === JSON.stringify(expectedResult);

console.log("Test Result:", isPassed); // should be true
```

#### Destructuring Assignment of Arrays

```javascript
let a, b;

[a, b] = [1, 2];

console.log(a); // 1

console.log(b); // 2
```

## Functions

In JavaScript, a function is an object, making it a first-class citizen in the JavaScript world.

```javascript
((a) => a) instanceof Object; // true
```

### Creating a Function

```javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
} // Function declaration

const hello2 = function (name) {
  console.log(`Hello, ${name}!`);
}; // Function expression

const hello3 = (name) => console.log(`Hello, ${name}!`);

const hello4 = new Function("name", 'console.log("Hello)');
```

> Create a function using arrow functions that accept three arguments and print the sum of the squares of those three arguments: e.g., (1,2,3)=>1+4+9=14

```javascript
let arrayFunction = "Put your code here";

let arrayFunction = (num1, num2, num3) =>
  num1 * num1 + num2 * num2 + num3 * num3;

arrayFunction(2, 3, 4); // Expected Result: 29
```

### Advanced Functions

1. Functions that take functions as arguments.

2. Functions that return a value.

#### Functions that return a function

```javascript
// This is a higher-order function
const makeHelloPlayer = (name) => {
  const text = `Hello, ${name}`;

  return () => console.log(text);
};
```

#### Functions that return a value

```javascript
const aArray = [1, 2, 3, 4];

const double = (aArray) => aArray.map((x) => x * 2 + 3); // Multiply the values ​​of all elements in array by 2 and then add 3

const input = [1, 2, 3, 4];

const trible = (aArray) => aArray.map((x) => x * 3 + 1);

const multiplyBy = (number) => (aArray) => aArray.map((x) => x * number + 1);

const multiplyBy6 = multiplyBy(6);

multiplyBy6(aArray); // [4,7,10,13]
```

> Try it yourself

```javascript
// Define a symbol (*): a(*)b= a+a*b

const customMultiply = (a, b) => a + a * b;

// Define a symbol (+): a(+)b= 2*a+b

const customAdd = (a, b) => 2 * a + b;

// Declare a higher-order function that accepts (*) and (+) computation functions to compute a(*)b(+)b

const createMultiplyAndAdd = (a, b) => (funcMultiply, funcAdd) => {
  const step1 = funcMultiply(a, b);

  return funcAdd(step1, b);
};

const inputNumbers = createMultiplyAndAdd(2, 3);

const finalResult = inputNumbers(customMultiply, customAdd); // 2(*)3(+)3 = 8(+)3 = 19
```

#### Rest Parameter

> Used as `...`, the rest parameter syntax allows us to represent an array of indefinite numbers of arguments.

> Restoration parameters can be destructured.

```javascript
function foo(a, b, ...rest) {
  return rest;
}

foo(1, 2, 3, 4, 5); // [3, 4, 5]`
```

#### Rest Parameter and Arguments

- rest: Contains only arguments that do not have corresponding formal parameters; an array instance.

- arguments: Contains all arguments passed to the function; an array-like object.

#### Spread Operator

> The spread operator is also `...`, which converts an array into a comma-separated sequence of arguments.

```javascript
function foo(a, ...rest) {
  console.log(rest); // [2, 3]
}
const b = [1, 2, 3];

foo(...b); // [2, 3]
```

#### Closures

##### 1. Scope

- Lexical Scope: Function scope is determined **at function definition** (static scope)

- Dynamic Scope: Function scope is determined **at function execution**

```javascript
let value = 1;

function foo() {
  console.log(value);
}

function bar() {
  let value = 2;

  foo();
}

bar(); // 1
```

##### 2. Global Scope and Scope Chain

- Global Scope

All JS runtime environments must implicitly create a global scope object.

> The JS runtime environment assigns a variable a value according to the following algorithm:

> 1. Find the current scope

> 2. If not found, search the outer scope directly.

> 3. If found, proceed to step 6.

> 4. If not found, repeat steps 2 and 3 until the global scope is reached.

> 5. If not found in the global scope, create it in the global scope (non-strict mode).

> 6. Assign a value.

Note: When a variable is assigned a value directly without using `var` or `let`, it is defined as a global variable (non-strict mode).

- Scope Chain

- Scopes can be nested.

- Each nested inner scope can access variables in the outer scope.

- From the innermost to the outermost scope, a scope chain is formed.

##### 3. Closures

> A closure is a combination of a function and the lexical environment in which it is declared.

> A closure is a function that has access to variables in the scope of another function.

```javascript
function init() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  displayName();
}
init();
```

Note: Creating closures within loops

```javascript
function foo() {
  for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}
```

```javascript
function foo() {
  for (let i = 0; i < 5; ++i) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}
```

## JS Collection Operations

> https://github.com/YaoDanping-TW/js-collection

## Recommended Reading

- 《JavaScript: The Good Parts》

- <a href="http://es6.ruanyifeng.com/">ECMAScript 6 Introduction--Ruan Yifeng</a>

- <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScriptt">MDN official Javascript tutorial</a>
- <a href="devdocs.io">DevDocs</a>
- <a href="https://lodash.com/">Lodash</a>
- <a href="https://github.com/Chalarangelo/30-seconds-of-code">Learn Javascript with small code snippet</a>

```

```
