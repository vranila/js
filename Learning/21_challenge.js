/* 
-------------------------------------------------------------
CHALLENGE 3 — FIND MAXIMUM VALUE
Write a function `findMax(arr)` that returns the largest number.
Do not use Math.max().
-------------------------------------------------------------
*/

function findMax(arr) {
  let max = arr[0];           // Assume first element is max
  for (let num of arr) {
    if (num > max) {
      max = num;              // Update if bigger number found
    }
  }
  return max;
}

let data = [5, 17, 99, 23, 45];
console.log("Maximum value:", findMax(data));     // Output: 99

// -------------------------------------------------------------
