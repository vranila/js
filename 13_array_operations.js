/**
 * -------------------------------------------------------------
 * Description:
 *   Demonstrates basic and common array operations in JavaScript.
 *   Includes examples of adding, removing, and accessing elements.
 *   Also shows how to slice, splice, and find values inside arrays.
 *
 * Concepts Covered:
 *   - push()    → Add element(s) to the end of an array
 *   - unshift() → Add element(s) to the beginning
 *   - pop()     → Remove the last element
 *   - shift()   → Remove the first element
 *   - slice()   → Extract a shallow copy of part of an array
 *   - splice()  → Modify array by adding/removing elements
 *   - indexOf() / lastIndexOf() / includes() → Search operations
 *   - length property → Find total number of items
 * -------------------------------------------------------------
 */

// Initial array
let fruits = ["apple", "banana"];
console.log("Initial:", fruits);

// Add elements
fruits.push("cherry");      // Add to end
fruits.unshift("mango");    // Add at the last
console.log("After adding:", fruits);

// Remove elements
fruits.pop();     // removes last
fruits.shift();   // removes first
console.log("After removing:", fruits);

// Slice (copy part)
let nums = [1, 2, 3, 4, 5];
let part = nums.slice(1, 4); // [2, 3, 4]
console.log("Slice example:", part);

// Splice (remove and insert)
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow"); // remove 1 element at index 1, insert "yellow"
console.log("Splice example:", colors);

// Search examples
let items = [10, 20, 30, 20];
console.log("indexOf(20):", items.indexOf(20));
console.log("lastIndexOf(20):", items.lastIndexOf(20));
console.log("includes(30):", items.includes(30));
console.log("Array length:", items.length);
