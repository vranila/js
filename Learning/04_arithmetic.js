/**
 * @fileoverview Demonstrates the use of arithmetic, comparison, and logical operators in JavaScript.
 *
 * Sections included:
 *
 * 1. **Arithmetic Operators**
 *    - Shows basic mathematical operations (`+`, `-`, `*`, `/`, `%`, `**`).
 *
 * 2. **Comparison Operators**
 *    - Demonstrates both loose (`==`, `!=`) and strict (`===`, `!==`) equality comparisons.
 *
 * 3. **Logical Operators**
 *    - Demonstrates logical AND (`&&`), OR (`||`), and NOT (`!`).
 *    - Shows short-circuit behavior and truthy/falsy values.
 *
 * 4. **Try It Yourself Section**
 *    - Encourages testing with different variable types and values.
 */
//////////////////////////////////////////////////////////////////////////////////////////////


// ARITHMETIC OPERATORS

let a = 10;
let b = 20;

console.log(a + b);  // 30
console.log(a - b);  // -10
console.log(a * b);  // 200
console.log(a / b);  // 0.5
console.log(a % b);  // 10
console.log(a ** b); // 100000000000000000000



// COMPARISON OPERATORS

console.log(5 == "5");   // true  (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, no type coercion)
console.log(5 != "5");   // false (loose inequality, type coercion)
console.log(5 !== "5");  // true  (strict inequality, no type coercion)



// LOGICAL OPERATORS

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission); // false (AND: both must be true)
console.log(isLoggedIn || hasPermission); // true  (OR: at least one true)
console.log(!isLoggedIn);                 // false (NOT: flips boolean)

// Short-circuit examples
console.log(false && "This will NOT run"); // false (stops early)
console.log(true || "This will NOT run");  // true  (stops early)

// Using logical operators with truthy/falsy values
console.log(0 || 10);        // 10 (0 is falsy, so returns 10)
console.log("hi" && 123);    // 123 ("hi" is truthy, so returns last value)
console.log("" || "default"); // "default" (empty string is falsy)



// TRY THESE YOURSELF

let x = 5;
let y = "5";

console.log(x == y);   // true
console.log(x === y);  // false
console.log(x + y);    // "55" (number + string => string concatenation)

// Try changing these values:
let p = "";
let q = "Hello";

console.log(p && q);  // ""  (p is falsy => returns p)
console.log(p || q);  // "Hello" (p is falsy => returns q)
console.log(!p);      // true ("" is falsy, so NOT makes it true)
