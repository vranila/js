/* 
-------------------------------------------------------------
CHALLENGE 1 — SUM OF ARRAY
Write a function `sumArray(arr)` that returns the total of all
numbers in an array.

Steps:
1️⃣ Create a variable to hold the total.
2️⃣ Loop through each number using `for...of`.
3️⃣ Add each number to the total.
4️⃣ Return the result.
-------------------------------------------------------------
*/

function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;             // Add each number to total
  }
  return total;
}

let numbers = [10, 20, 30, 40, 50];
console.log("Sum of array:", sumArray(numbers));  // Output: 150

// -------------------------------------------------------------
