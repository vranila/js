/* 
=============================================================
CHALLENGE 5 — INVENTORY STOCK UPDATE
Maintain a simple inventory object. Given a list of operations,
apply them and print the final inventory.

Rules:
  - "add" increases stock
  - "sell" decreases stock (but not below 0)
  - If product not present, add it on "add"

Data:
  let inventory = { apple: 10, banana: 5 };
  let ops = [
    { type: "add",  item: "apple",  qty: 5 },
    { type: "sell", item: "banana", qty: 2 },
    { type: "sell", item: "banana", qty: 10 },
    { type: "add",  item: "orange", qty: 7 }
  ];

Print:
  - Final inventory object
=============================================================
*/

let inventory = { apple: 10, banana: 5 };
let ops = [
  { type: "add",  item: "apple",  qty: 5 },
  { type: "sell", item: "banana", qty: 2 },
  { type: "sell", item: "banana", qty: 10 },
  { type: "add",  item: "orange", qty: 7 }
];

// ---------- WRITE YOUR CODE BELOW ----------


// Hints:
// - Use for...of over ops
// - Clamp sell to not go below 0
// - Add key if missing on add



























// --------------- SAMPLE EXPECTED OUTPUT ---------------
/*
{ apple: 15, banana: 0, orange: 7 }
*/
// =====================================================
