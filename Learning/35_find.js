/* 
===============================================================
UNDERSTANDING .find() — BEGINNER FRIENDLY EXPLANATION
===============================================================

.find() searches through an array and returns the **FIRST**
value that matches a condition.

IMPORTANT:
- If a match is found → returns the value
- If no match → returns undefined
- It stops as soon as it finds the first match

This is different from:
  ✔ filter() → returns ALL matching values (array)
  ✔ find()   → returns ONLY the FIRST match (single value)

🔹 Syntax breakdown:
---------------------------------

let result = array.find((value, index, array) => {
    return true or false;
});

- If TRUE → find() stops and returns that value
- If FALSE → continues to next element

===============================================================
*/


// -------------------------------------------------------------
// 🟦 1️⃣ Example: Find the first even number
// -------------------------------------------------------------

let numbers = [3, 7, 5, 10, 12, 6];

let firstEven = numbers.find(num => num % 2 === 0);

console.log("First even number:", firstEven);
// Output: 10
// (Even though 12 and 6 are also even, find() stops at 10)



// -------------------------------------------------------------
// 🟩 2️⃣ Example: Find number greater than 50
// -------------------------------------------------------------

let values = [10, 25, 35, 75, 100];

let greaterThan50 = values.find(n => n > 50);

console.log("First number > 50:", greaterThan50);
// Output: 75
// (find() returns the FIRST match, not all matches)



// -------------------------------------------------------------
// 🟨 3️⃣ Example: When NO value matches
// -------------------------------------------------------------

let smallNums = [1, 3, 5, 7];

let result = smallNums.find(n => n > 100);

console.log("Result:", result);
// Output: undefined
// Because no number is > 100



// -------------------------------------------------------------
// 🟧 4️⃣ Searching through OBJECTS
// VERY IMPORTANT for real-world data
// -------------------------------------------------------------

let students = [
  { name: "Arun", age: 20 },
  { name: "Anila", age: 17 },
  { name: "Akhil", age: 22 },
  { name: "Vishnu", age: 15 }
];

// Find FIRST student who is an adult
let firstAdult = students.find(s => s.age >= 18);

console.log("First adult student:", firstAdult);

/*
Output:
{ name: "Arun", age: 20 }
*/



// -------------------------------------------------------------
// 🟥 5️⃣ Find a specific student by name
// -------------------------------------------------------------

let findAnila = students.find(s => s.name === "Anila");

console.log("Found student:", findAnila);
/*
Output:
{ name: "Anila", age: 17 }
*/



/*
===============================================================
SUMMARY
===============================================================

Use .find() when:
  ✔ You want ONLY the FIRST matching value
  ✔ Searching a list of objects
  ✔ Getting one user, product, or order
  ✔ Getting one ID or name from an array

.filter() returns MANY results (array)
.find() returns ONE result (value or object)

Next:
  - .some()  (Does ANY item match?)
  - .every() (Do ALL items match?)
  - .reduce() (Combine array into one value)

===============================================================
*/
