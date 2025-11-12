/* 
-------------------------------------------------------------
CHALLENGE 1 — BASIC OBJECT ACCESS
Create an object `car` with properties:
  brand, model, year, and color.

1️⃣ Print each property.
2️⃣ Change the color.
3️⃣ Add a new property `fuelType`.
-------------------------------------------------------------
*/

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};

// Print all properties
console.log("Brand:", car.brand);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Color:", car.color);

// Update and add new properties
car.color = "Black";          // change color
car.fuelType = "Petrol";      // add new property

console.log("Updated Car:", car);

// -------------------------------------------------------------
