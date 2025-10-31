/* 
-------------------------------------------------------------
OBJECTS IN JAVASCRIPT — LIKE PYTHON DICTIONARIES 🧩

An Object in JS stores data as key–value pairs.
It’s similar to Python’s dictionary, but syntax differs a bit.

Python Example:
    student = {"name": "Alice", "age": 21}

JavaScript Equivalent:
    let student = { name: "Alice", age: 21 };
-------------------------------------------------------------
*/

// 🧩 1️⃣ Creating an object
let student = {
  name: "Alice",
  age: 21,
  city: "London"
};

console.log(student);          // Print the whole object
console.log(student.name);     // Access property with dot
console.log(student["city"]);  // Access with brackets (string key)

// -------------------------------------------------------------

// 🧩 2️⃣ Adding or updating values
student.age = 22;              // update existing
student.country = "UK";        // add new key
console.log(student);

// -------------------------------------------------------------

// 🧩 3️⃣ Removing properties
delete student.city;
console.log(student);

// -------------------------------------------------------------

// 🧩 4️⃣ Looping through object keys
for (let key in student) {
  console.log(key, ":", student[key]);
}
// Output:
// name : Alice
// age : 22
// country : UK

// -------------------------------------------------------------

// 🧩 5️⃣ Nested objects
let person = {
  name: "Arun",
  address: {
    city: "Kannur",
    zip: 75001
  }
};

console.log(person.address.city);   // Access nested value
// Try to get ZIP next :)

// -------------------------------------------------------------

// 🧩 6️⃣ Checking if key exists
console.log("age" in student);      // true
console.log("city" in student);     // false

// -------------------------------------------------------------

// 🧩 7️⃣ Getting keys and values as arrays
console.log(Object.keys(student));   // ["name", "age", "country"]
console.log(Object.values(student)); // ["Alice", 22, "UK"]
console.log(Object.entries(student)); // [["name","Alice"],["age",22],["country","UK"]]
