/* 
=============================================================
UNDERSTANDING .reduce() — BEGINNER FRIENDLY EXPLANATION
=============================================================

.reduce() takes all values of an array and **reduces** them
into a SINGLE value.

Examples:
- Sum of numbers
- Max / Min value
- Count items
- Create an object
- Combine strings
- Group data

-------------------------------------------------------------
🔹 Syntax breakdown:

let result = array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);

Parameters:
  accumulator → the running total / result so far
  currentValue → current element in the loop
  index → (optional) index of current element
  array → (optional) entire array
  initialValue → starting value of accumulator

=============================================================
*/


// -------------------------------------------------------------
// 🟦 1️⃣ SUM OF NUMBERS
// -------------------------------------------------------------

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log("Sum:", sum);
// Output: 100



// -------------------------------------------------------------
// 🟩 2️⃣ PRODUCT OF NUMBERS
// -------------------------------------------------------------

let vals = [2, 3, 4];

let product = vals.reduce((acc, v) => acc * v, 1);

console.log("Product:", product);
// Output: 24



// -------------------------------------------------------------
// 🟨 3️⃣ FIND MAX USING reduce()
// -------------------------------------------------------------

let scores = [12, 55, 8, 99, 43];

let max = scores.reduce((acc, value) => {
  return value > acc ? value : acc;
}, scores[0]);

console.log("Max:", max);
// Output: 99



// -------------------------------------------------------------
// 🟧 4️⃣ COUNT OCCURRENCES (SUPER USEFUL)
// -------------------------------------------------------------

let letters = ["a", "b", "a", "c", "b", "a"];

let count = letters.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;  
  return acc;
}, {});

console.log("Letter counts:", count);

/*
Output:
{ a: 3, b: 2, c: 1 }
*/



// -------------------------------------------------------------
// 🟥 5️⃣ SUM OF OBJECT VALUES
// -------------------------------------------------------------

let cart = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1200 },
  { name: "Keyboard", price: 2500 }
];

let total = cart.reduce((acc, item) => acc + item.price, 0);

console.log("Total cart value:", total);
// Output: 83700



// -------------------------------------------------------------
// 🟪 6️⃣ GROUPING ITEMS BY CATEGORY
// -------------------------------------------------------------

let products = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Mango", type: "fruit" },
  { name: "Broccoli", type: "vegetable" }
];

let grouped = products.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item.name);
  return acc;
}, {});

console.log("Grouped products:", grouped);

/*
Output:
{
  fruit: ["Apple", "Mango"],
  vegetable: ["Carrot", "Broccoli"]
}
*/



/* 
=============================================================
SUMMARY — WHEN TO USE .reduce()
=============================================================

Use reduce when you need to produce ONE final value from an array.

✔ Sum all values  
✔ Multiply values  
✔ Find max/min  
✔ Count occurrences  
✔ Build a new object  
✔ Group items  
✔ Flatten lists  
✔ Merge arrays  

Very powerful in real applications:
- Shopping carts
- Statistics
- API responses
- Form data processing
- React state calculations

=============================================================
*/
