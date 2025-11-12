/* 
-------------------------------------------------------------
CHALLENGE 4 — REVERSE ARRAY (without using reverse())
Write a function `reverseArray(arr)` that returns a new array
with elements in reverse order.
-------------------------------------------------------------
*/

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);    // Add items from end to start
  }
  return reversed;
}

let letters = ["A", "B", "C", "D"];
console.log("Reversed array:", reverseArray(letters)); // Output: ["D","C","B","A"]
