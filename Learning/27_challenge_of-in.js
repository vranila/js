/* 
-------------------------------------------------------------
FOR...IN vs FOR...OF IN JAVASCRIPT
They look similar, but they do different things.

👉 for...in  → loops over the *keys / indexes*
👉 for...of  → loops over the *values*
-------------------------------------------------------------
*/

// 🧩 1️⃣ Example with an array
let fruits = ["apple", "banana", "cherry"];

console.log("Using for...in:");
for (let index in fruits) {
  console.log(index, "→", fruits[index]);   // index + value
}

console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit);                       // direct value
}

// -------------------------------------------------------------

// 🧩 2️⃣ Example with an object
let person = { name: "Alice", age: 25, city: "London" };

console.log("Using for...in with object:");
for (let key in person) {
  console.log(key, ":", person[key]);       // works perfectly
}

// ⚠️ Using for...of on object will cause an error
// for (let value of person) {
//   console.log(value);  // ❌ TypeError: person is not iterable
// }

// -------------------------------------------------------------

// 🧩 3️⃣ Example with a string
let word = "Hi";

console.log("for...in → indexes:");
for (let i in word) {
  console.log(i);     // 0, 1
}

console.log("for...of → values:");
for (let char of word) {
  console.log(char);  // H, i
}

// -------------------------------------------------------------

/* 
✅ Summary
| Structure | Works On | Loops Over | Example |
|------------|-----------|-------------|----------|
| for...in  | objects, arrays | keys / indexes | for (let key in obj) |
| for...of  | arrays, strings | values | for (let value of arr) |

💡 Rule of thumb:
- Use **for...in** → when dealing with *object keys*
- Use **for...of** → when dealing with *array or string values*
*/
