/* 
=============================================================
UNDERSTANDING .map() — BEGINNER FRIENDLY EXPLANATION
=============================================================

.map() is one of the MOST IMPORTANT array methods in JavaScript.

🔹 What does map() do?
---------------------------------
It takes an existing array → applies a function to EACH element →
and returns a NEW array with the transformed values.

🔹 Key points:
---------------------------------
- map() does NOT modify the original array
- map() ALWAYS returns a new array
- map() requires a function (usually arrow function)

🔹 Syntax breakdown:
---------------------------------

let newArray = oldArray.map((value, index, array) => {
     value → current item
     index → position of item (0,1,2...)
     array → the entire original array
    return something;  // this goes into newArray
});

Example:
If return value = value * 2  
then newArray will have double of each element.

=============================================================
*/


// -------------------------------------------------------------
// 🟦 1️⃣ Normal loop (manual transformation)
// HOW YOU DO IT WITHOUT map()
// -------------------------------------------------------------

let numbers = [1, 2, 3, 4];

let doubled1 = [];  // Initialize for new values

for (let n of numbers) {
  doubled1.push(n * 2);
}

console.log("Manual doubled:", doubled1);
// Output: [2, 4, 6, 8]


// -------------------------------------------------------------
// 🟩 2️⃣ Now do the SAME THING using .map()
// BEST way in modern JavaScript
// -------------------------------------------------------------

let doubled2 = numbers.map(n => {
  return n * 2;
});

// Shorter form:
// let doubled2 = numbers.map(n => n * 2);

console.log("Map doubled:", doubled2);
// Output: [2, 4, 6, 8]


// -------------------------------------------------------------
// 🟨 3️⃣ Original array is NOT changed
// -------------------------------------------------------------
console.log("Original numbers:", numbers);
// Output: [1, 2, 3, 4]


// -------------------------------------------------------------
// 🟧 4️⃣ Example: map() with index & array
// This shows how map() gives 3 arguments:
//   value → element value
//   index → element index
//   array → full array
//   This code is showing how the map() function works internally — 
//   especially how value, index, and the original array are passed to the callback.
// -------------------------------------------------------------

let details = numbers.map((value, index, array) => {
  return `Value: ${value}, Index: ${index}, Original Array Length: ${array.length}`;
});

console.log("Details:", details);
/*
Output:
[
  "Value: 1, Index: 0, Original Array Length: 4",
  "Value: 2, Index: 1, Original Array Length: 4",
  "Value: 3, Index: 2, Original Array Length: 4",
  "Value: 4, Index: 3, Original Array Length: 4"
]
*/


// -------------------------------------------------------------
// 🟥 5️⃣ Map with Objects
// VERY IMPORTANT for real-world JavaScript & React
// -------------------------------------------------------------

let students = [
  { name: "Arun", age: 20 },
  { name: "Anila", age: 21 },
  { name: "Akhil", age: 22 }
];

// Extract only names into a NEW array
let names = students.map(student => student.name);
console.log("Names:", names);
// Output: ["Arun", "Anila", "Akhil"]


// Create a NEW transformed object for each student
let updated = students.map(student => {
  return {
    name: student.name,
    age: student.age,
    isAdult: student.age >= 18  // Add new property
  };
});

console.log("Updated Students:", updated);

/*
Output:
[
  { name: 'Arun', age: 20, isAdult: true },
  { name: 'Anila', age: 21, isAdult: true },
  { name: 'Akhil', age: 22, isAdult: true }
]
*/


/* 
=============================================================
SUMMARY (Very Important)
=============================================================

.map() is used when you want to:
  ✔ Transform each element
  ✔ Create a new array
  ✔ Keep original array unchanged

Do NOT use map() when:
  ✘ You only want to loop
  ✘ You’re not returning anything (use forEach instead)

Next Step:
Learn:
  - .filter() → pick some values
  - .reduce() → combine array into one value
  - .find()   → get one matching item
  - .some() & .every() → boolean tests

=============================================================
*/
