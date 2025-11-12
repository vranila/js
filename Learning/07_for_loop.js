/**
 * Demonstrates basic JavaScript for loop usage.
 * 
 * This file includes two examples:
 * 1. A simple `for` loop that counts from 0 to 4 and logs each value.
 * 2. An iteration over an array of color names using a `for...of` loop.
 * 
 * These examples illustrate how to:
 * - Use traditional `for` loops for numerical iteration.
 * - Use `for...of` loops for iterating through iterable objects like arrays.
 */

// Simple for loop

for (let i = 0; i < 5; i++) {
    console.log("Count: ", i);
}




// Iterate array of items

let colors = ["red", "blue", "green", "white", "black"];
for (let color of colors) {
    console.log(color);
}