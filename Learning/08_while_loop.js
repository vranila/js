/**
 * @fileoverview Demonstrates the use of a `while` loop in JavaScript.
 * 
 * This example initializes a counter variable `n` at 0 and 
 * uses a `while` loop to print its value until it reaches 10.
 * 
 * Key concepts:
 *  - The loop continues running as long as the condition `(n < 11)` is true.
 *  - The counter `n` is incremented in each iteration to avoid an infinite loop.
 * 
 * Output:
 *  N is: 0  
 *  N is: 1  
 *  ...  
 *  N is: 10
 */



let n = 0;

while (n < 11) {
    console.log("N is: ", n)
    n++;
}