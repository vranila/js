/* 
-------------------------------------------------------------
CHALLENGE: UNDERSTAND for...in VS for...of
1️⃣ Create an array of 3 colors.
2️⃣ Loop using for...in → print "Index X has color Y"
3️⃣ Loop using for...of → print "Color: Y"
4️⃣ Create an object person with name, age.
5️⃣ Loop using for...in → print key and value.
-------------------------------------------------------------
*/

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ----- firts try yourself then go down to verify ------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 🧩 1️⃣ Example with an ARRAY
let colors = ["red", "blue", "green"];

// for...in → gives INDEXES
for (let index in colors) {
  console.log("Index", index, ":", colors[index]);
}

// for...of → gives VALUES
for (let color of colors) {
  console.log("Color:", color);
}

// -------------------------------------------------------------

// 🧩 2️⃣ Example with an OBJECT
let person = {
  name: "Arun",
  age: 33,
  place: "Kannur"
};

// for...in → works with OBJECTS (loops through keys)
for (let key in person) {
  console.log(key, ":", person[key]);
}

// ⚠️ Note: for...of does NOT work directly on objects
// (objects are not iterable like arrays)