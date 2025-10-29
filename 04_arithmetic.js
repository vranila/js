/**
 * @fileoverview Demonstrates the use of arithmetic and comparison operators in JavaScript.
 * 
 * Sections included:
 * 
 * 1. **Arithmetic Operators**
 *    - Shows basic mathematical operations (`+`, `-`, `*`, `/`, `%`, `**`).
 *    - Illustrates how arithmetic operators work with numeric operands.
 * 
 * 2. **Comparison Operators**
 *    - Demonstrates both loose (`==`, `!=`) and strict (`===`, `!==`) equality comparisons.
 *    - Explains type coercion behavior in JavaScript comparisons.
 * 
 * 3. **Try It Yourself Section**
 *    - Encourages testing with different variable types (number vs string) 
 *      to understand equality and concatenation behavior.
 */
//////////////////////////////////////////////////////////////////////////////////////////////


// ARITHMETIC OPERATORS

let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10
console.log(a ** b); // 100000000000000000000




// COMPARISON OPERATORS
console.log(5 == "5"); // true (loose equality, type coercion)
console.log(5 === "5"); // false (strict equality, no type coercion)
console.log(5 != "5"); // false (loose inequality, type coercion)
console.log(5 !== "5"); // true (strict inequality, no type coercion)





// TRY THESE YOURSELF
let x = 5;
let y = "5";

console.log(x == y);
console.log(x === y);
console.log(x + y);




