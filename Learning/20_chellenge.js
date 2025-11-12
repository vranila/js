/* 
-------------------------------------------------------------
CHALLENGE 2 — COUNT EVEN NUMBERS
Write a function `countEven(arr)` that counts how many numbers
in the array are even.
-------------------------------------------------------------
*/

function countEven(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;                // Increase counter when even
    }
  }
  return count;
}

let nums = [11, 22, 33, 44, 55, 66];
console.log("Even count:", countEven(nums));      // Output: 3

// -------------------------------------------------------------
