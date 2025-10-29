/**
 * @fileoverview Demonstrates the use of the `forEach()` array method in JavaScript.
 * 
 * The `forEach()` method is not a traditional loop keyword, but an array method 
 * that executes a provided function once for each element in the array.
 * 
 * In this example:
 *  - The `colors` array contains a list of color names.
 *  - The `forEach()` method iterates through the array and logs each color to the console.
 * 
 * Syntax:
 *    array.forEach(function(element) {
 *        // code to execute for each element
 *    });
 * 
 * Output:
 *  Red  
 *  Blue  
 *  Green  
 *  Yellow  
 *  Magenta  
 *  Cyan  
 *  Black  
 *  White
 *///////////////////////////////////////////////////////////////////////////////////////////////





// It’s an array method — not a loop keyword — that calls a 
// function once for each element in the array.

let colors = ["Red", "Blue", "Green", "Yellow", "Magenta", "Cyan", "Black", "White"];

colors.forEach(function(color){
    console.log(color);
});


