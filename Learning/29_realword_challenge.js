/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — SHOPPING CART SYSTEM 🛒

Goal:
Simulate a small shopping cart using arrays & objects.

Concepts covered:
- Arrays inside objects
- Loops (for...of)
- Conditionals
- Calculations (sum, discount, total)
-------------------------------------------------------------
*/

// 🧩 1️⃣ Create a cart with multiple products
let cart = [
  { name: "Laptop", price: 80000, quantity: 1 },
  { name: "Mouse", price: 1200, quantity: 2 },
  { name: "Keyboard", price: 2500, quantity: 1 },
  { name: "Headphones", price: 3000, quantity: 3 }
];

// 🧩 2️⃣ Display each item and subtotal
console.log("🛍️ Shopping Cart Items:");
for (let item of cart) {
  let subtotal = item.price * item.quantity;
  console.log(`- ${item.name} (x${item.quantity}) → ₹${subtotal}`);
}

// -------------------------------------------------------------

// 🧩 3️⃣ Calculate total cart value
let total = 0;
for (let item of cart) {
  total += item.price * item.quantity;   // Add each subtotal
}
console.log("\nTotal before discount: ₹" + total);

// -------------------------------------------------------------

// 🧩 4️⃣ Apply discount if total > 5000
let discount = 0;
if (total > 5000) {
  discount = total * 0.1;                // 10% discount
}

let finalTotal = total - discount;
console.log("Discount: ₹" + discount);
console.log("Final amount to pay: ₹" + finalTotal.toFixed(2));

// -------------------------------------------------------------

/* 
✅ Notes:
- Each product is represented as an object.
- The cart is an array of objects.
- Loops help calculate subtotal & total.
- Conditionals apply business rules (like discount).
*/
