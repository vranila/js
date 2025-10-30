/* 
-------------------------------------------------------------
FUNCTIONS IN JAVASCRIPT — INTRODUCTION
A function is a reusable block of code that performs a task.

Why use functions?
- Avoid repeating code.
- Organize logic into meaningful units.
- Make programs easier to debug, test, and maintain.

In JavaScript, there are multiple ways to define a function.
We'll start with the classic `function` declaration.
-------------------------------------------------------------
*/

// 🧩 1️⃣ Function Declaration
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// Calling (executing) the function
greet();  // Output: Hello, welcome to JavaScript!

// -------------------------------------------------------------

// 🧩 2️⃣ Function with Parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Anila");
greetUser("Arun");

// -------------------------------------------------------------

// 🧩 3️⃣ Function with Return Value
function add(a, b) {
  return a + b;  // sends the result back to where the function was called
}

let result = add(10, 20);
console.log("Sum:", result);

// -------------------------------------------------------------

// 🧩 4️⃣ Default Parameters
function multiply(a, b = 2) {
  return a * b;  // if 'b' not provided, it defaults to 2
}

console.log(multiply(5));      // 5 * 2 = 10
console.log(multiply(5, 3));   // 5 * 3 = 15
