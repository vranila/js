/**
 * @fileoverview Demonstrates the use of the ternary (conditional) operator in JavaScript.
 * 
 * This example checks whether a person is an adult or a minor based on their age.
 * 
 * Syntax:
 *    condition ? expressionIfTrue : expressionIfFalse
 * 
 * In this case:
 *  - If `age` is greater than or equal to 18, `message` is set to "Adult".
 *  - Otherwise, `message` is set to "Minor".
 * 
 * The result is then logged to the console.
 */




// Ternary operator

let age = 20
let message = age >= 18 ? "Adult" : "Minor"

console.log(message)