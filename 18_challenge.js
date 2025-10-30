/* 
-------------------------------------------------------------
FUNCTION PRACTICE — BASIC FUNCTIONS
Goal:
1️⃣ Define and call functions.
2️⃣ Learn how to return values and use conditions inside functions.

Tasks:
1. Write a function `square(num)` that returns the square of a number.
2. Write a function `isEven(num)` that prints “Even” or “Odd”.
3. Call both functions for a few test numbers.
-------------------------------------------------------------
*/

// 🧩 1️⃣ Function to return square of a number
function square(num) {
  return num * num;              // Multiply the number by itself
}

// Example usage
let number = 5;
let sq = square(number);
console.log("Square of", number, "is", sq);  // Output: Square of 5 is 25

// -------------------------------------------------------------

// 🧩 2️⃣ Function to check if a number is even or odd
function isEven(num) {
  // If remainder when divided by 2 is 0, it's even
  if (num % 2 === 0) {
    console.log(num, "is Even");
  } else {
    console.log(num, "is Odd");
  }
}

// Example calls
isEven(6);     // Output: 6 is Even
isEven(7);     // Output: 7 is Odd

// -------------------------------------------------------------

/* 
✅ Notes:
- `return` sends a value back to where the function was called.
- `console.log()` just prints a message — it doesn’t return a value.
- Function names should describe the task clearly (verbs like get, check, print).
*/
