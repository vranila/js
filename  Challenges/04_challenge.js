/* 
=============================================================
CHALLENGE 2 — SHOPPING CART TOTAL WITH DISCOUNTS
Given a cart (array of items), calculate:
  - Subtotal for each item (price * quantity)
  - Cart total
  - If quantity of an item > 2, apply 5% item-level discount
  - If total > 5000, apply additional 10% cart-level discount

Data:
  let cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1200, quantity: 3 },
    { name: "Headphones", price: 3000, quantity: 2 }
  ];

Print:
  - Each line: "<name> x<qty> → ₹<subtotal after item discount>"
  - "Total before cart discount: ₹<amount>"
  - "Cart discount: ₹<amount>"
  - "Final total: ₹<amount>"
=============================================================
*/

let cart = [
  { name: "Laptop", price: 80000, quantity: 1 },
  { name: "Mouse", price: 1200, quantity: 3 },
  { name: "Headphones", price: 3000, quantity: 2 }
];

// ---------- WRITE YOUR CODE BELOW ----------


// Hints:
// - Use a loop over cart
// - Apply 5% off when quantity > 2 (per item)
// - Track total, then apply 10% off if total > 5000































// --------------- SAMPLE EXPECTED OUTPUT ---------------
/*
Laptop (x1) → ₹80000
Mouse (x3) → ₹3420
Headphones (x2) → ₹6000
Total before cart discount: ₹89420
Cart discount: ₹8942
Final total: ₹80478
*/
// =====================================================
