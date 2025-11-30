/* 
-------------------------------------------------------------
FUNCTION EXPRESSIONS & ARROW FUNCTIONS
-------------------------------------------------------------
So far, we used “function declarations” like this:
    function greet() {
      console.log("Hello!");
    }

But in JS, functions are *first-class citizens* — they can be:
- stored in variables,
- passed as arguments,
- returned from other functions.

Let's explore both function expressions and arrow functions.
-------------------------------------------------------------
*/

// 🧩 1️⃣ Function Expression
// Function is assigned to a variable
const greet = function () {
  console.log("Hello from a function expression!");
};

greet(); // Output: Hello from a function expression

// -------------------------------------------------------------

// 🧩 2️⃣ Function Expression with parameters
const add = function (a, b) {
  return a + b;
};

console.log("Sum:", add(5, 10)); // Output: Sum: 15

// -------------------------------------------------------------

// 🧩 3️⃣ Arrow Function (modern & compact)
const multiply = (a, b) => {
  return a * b;
};

console.log("Product:", multiply(4, 3)); // Output: Product: 12

// -------------------------------------------------------------

// 🧩 4️⃣ Arrow Function — implicit return (when one line)
const square = (n) => n * n;

console.log("Square:", square(6)); // Output: Square: 36

// -------------------------------------------------------------

// 🧩 5️⃣ Arrow Function — with no parameters
const greetUser = () => console.log("Hi, user!");
greetUser();

// -------------------------------------------------------------

// 🧩 6️⃣ Arrow Function — single parameter (can skip parentheses)
const double = n => n * 2;
console.log("Double:", double(7));

// -------------------------------------------------------------

/* 
✅ Summary
|    Type   |    Syntax  |   Example  |
|-----------|------------|------------|
| Function Declaration | function add(a,b) {...} | Hoisted |
| Function Expression | const add = function(a,b) {...} | Not hoisted |
| Arrow Function | const add = (a,b) => a+b | Short, modern |

💡 Hoisting:
- Declarations are loaded before execution.
- Expressions & arrow functions are NOT hoisted.
*/

// -------------------------------------------------------------
