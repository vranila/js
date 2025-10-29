/**
 * @fileoverview Demonstrates conditional logic in JavaScript using if...else statements.
 * 
 * This example evaluates a numeric `score` and logs a message based on its value:
 *  - "Excellent...." if the score is greater than 90.
 *  - "Passed....!" if the score is between 60 and 90 (inclusive).
 *  - "Try again....!" if the score is below 60.
 * 
 * You can modify the `score` variable to test different outcomes.
 */



// Change the value in score and try

let score = 85;

if (score > 90) {
    console.log("Excellent....");
} else if (score >= 60) {
    console.log("Passed....!");
} else {
    console.log("Try again....!");
}