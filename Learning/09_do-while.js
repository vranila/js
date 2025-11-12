/**
 * @fileoverview Demonstrates the use of a `do...while` loop in JavaScript.
 * 
 * This example initializes a variable `x` with the value 10 and uses a `do...while` loop.
 * 
 * Key points:
 *  - The `do...while` loop executes its body **at least once**, 
 *    even if the condition is false.
 *  - After executing the block, it checks the condition `(x < 5)`.
 *  - Since the condition is false initially (`10 < 5` is false), 
 *    the loop runs only once.
 * 
 * Output:
 *  10
 */





let x = 10;
do {
  console.log(x);
  x++;
} while (x < 5);
