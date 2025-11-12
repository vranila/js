/* 
-------------------------------------------------------------
SPREAD OPERATOR (...) IN JAVASCRIPT
The spread operator expands (spreads) elements of an array
or object into individual values.
-------------------------------------------------------------
*/

// Example 1️⃣: Copying arrays
let numbers = [1, 2, 3];
let copy = [...numbers];      // creates a new independent copy
copy.push(4);

console.log("Original:", numbers);  // [1, 2, 3]
console.log("Copy:", copy);         // [1, 2, 3, 4]

// Without spread, if you used let copy = numbers;
// both variables would point to the SAME array.
// Note this difference clearly or learn more about it if any doubt

// -------------------------------------------------------------

// Example 2️⃣: Merging arrays
let a = [10, 20];
let b = [30, 40];
let merged = [...a, ...b];    // merge into one array
console.log("Merged:", merged);  // [10, 20, 30, 40]

// -------------------------------------------------------------

// Example 4️⃣: Copying or merging objects
let user = { name: "Alice", age: 25 };
let updated = { ...user, city: "London" };
console.log("Updated object:", updated);
/*
{
  name: "Alice",
  age: 25,
  city: "London"
}
*/

// -------------------------------------------------------------

// Example 5️⃣: Using with arrays to modify safely
let nums = [10, 20, 30];
let reversed = [...nums].reverse();  // spread first, then reverse safely
console.log("Original:", nums);      // stays unchanged
console.log("Reversed copy:", reversed);

// -------------------------------------------------------------

// Example 3️⃣: Passing elements to functions
function add(x, y, z) {
  return x + y + z;
}

let values = [5, 10, 15];
console.log("Sum:", add(...values)); // same as add(5,10,15)

// -------------------------------------------------------------


