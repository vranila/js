/* 
-------------------------------------------------------------
ARRAY PRACTICE – LEVEL 2
Learn how to combine loops, conditions, and array methods.
We'll:
1. Filter numbers above a certain value.
2. Reverse and sort arrays.
3. Merge two arrays.
4. Find min/max values manually.
-------------------------------------------------------------
*/

let numbers = [10, 45, 23, 90, 5, 67, 12];

// 1️⃣ Filter numbers > 30
let greaterThan30 = [];
for (let num of numbers) {
  if (num > 30) {
    greaterThan30.push(num);          // Add number to new array
  }
}
console.log("Numbers > 30:", greaterThan30);

// 2️⃣ Reverse and sort
let reversed = [...numbers].reverse(); // Copy and reverse
console.log("Reversed:", reversed);

// Simple sort (alphabetical / ascending by default)
let sorted = [...numbers].sort();
console.log("Sorted:", sorted);

// 3️⃣ Merge two arrays
let extra = [100, 200, 300];
let merged = numbers.concat(extra);    // Merge arrays
console.log("Merged:", merged);

// 4️⃣ Find max & min manually (without Math.max)
let max = numbers[0];
let min = numbers[0];

for (let n of numbers) {
  if (n > max) max = n;                // Update max
  if (n < min) min = n;                // Update min
}
console.log("Max:", max);
console.log("Min:", min);
