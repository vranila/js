/* 
-------------------------------------------------------------
CHALLENGE 2 — LOOPING THROUGH AN OBJECT
Create an object `student` with keys:
  name, age, marks (array), and city.

1️⃣ Print each key and value using a `for...in` loop.
2️⃣ Use `Object.keys()` and `Object.values()` to print them as arrays.
-------------------------------------------------------------
*/

let student = {
  name: "Alice",
  age: 20,
  marks: [85, 90, 78],
  city: "London"
};

// Loop through keys and values
for (let key in student) {
  console.log(key, ":", student[key]);
}

// Using built-in methods
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

// -------------------------------------------------------------
