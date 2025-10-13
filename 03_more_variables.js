// Primitive Variables in JavaScript

let name = "Alice"; // string
let age = 25;       // number
let isHappy = true; // boolean
let nothing = null; // null
let notDefined;    // undefined
let big = 9007199254740991n; // bigint
let sym = Symbol("id"); // symbol

console.log(name);      // "Alice"
console.log(age);       // 25
console.log(isHappy);   // true
console.log(nothing);   // null
console.log(notDefined); // undefined
console.log(big);       // 9007199254740991n
console.log(sym);       // Symbol(id)


// Object types
let person = {name: "Alice", age: 25}; // object
let numbers = [1, 2, 3];                // array
let today = new Date();                 // date

console.log(person);  // {name: "Alice", age: 25}
console.log(numbers); // [1, 2, 3]
console.log(today);   // current date and time

// Type checking
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isHappy);   // "boolean"
console.log(typeof nothing);   // "object" (this is a known quirk in JavaScript)
console.log(typeof notDefined); // "undefined"
console.log(typeof big);       // "bigint"
console.log(typeof sym);       // "symbol"
console.log(typeof person);    // "object"
console.log(typeof numbers);   // "object"
console.log(typeof today);     // "object"

// Note: Use 'let' and 'const' for variable declarations in modern JavaScript.
// 'var' is function-scoped and can lead to unexpected behaviors.   

// Example of variable reassignment
let score = 100;
console.log(score); // 100

score = 150; // valid reassignment
console.log(score); // 150

const pi = 3.14;
// pi = 3.14159; // invalid, will throw an error if uncommented
console.log(pi); // 3.14        

