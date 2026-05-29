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

console.log(a); // Scopes can be nested

console.log(b); // Each nested inner scope can access variables in the outer scope

}

console.log(a);

console.log(b); // ReferenceError

```

1. Variable hoisting

Variable declarations are hoisted to the beginning of the current scope

``javascript

function foo(){

console.log("text:" + text);

var text='hello world';

}
```

``javascript

var i = 5;

function bar() {

console.log(i);

if (true) {

var i = 6;

}

}

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

console.log("function b:" + b); // ReferenceError

console.log("function c:" + c); // ReferenceError

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
typeof '5' = ?

typeof a=>a = ?

typeof typeof 5 = ?

typeof [1,2,3] = ?

typeof {a:5} = ?

typeof undefined = ?

```

### Simple Data Types

#### Undefined

Only one value, i.e., undefined

```javascript
let sss;

console.log(typeof sss); //Undefined

console.log(typeof nonExist); //Undefined
```

#### Null has only one value, null, which represents an empty object pointer.

```javascript
let aNull = null;

console.log(typeof aNull); //'Object'
```

> What is the difference between Null and Undefined?

#### Boolean

Boolean values: true and false

```javascript
let jsAwesome = true;

let jsSucks = false;
```

##### _Boolean(expression)_ Checks if a value is true

```javascript
Boolean("false");

Boolean(-5);

Boolean("");

Boolean((a) => a);
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

> Try it yourself

```javascript

null.toString() = ?

String(null) = ?

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

"23" > "3"; // ?
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
const book = {author: {name:'Davi
```
