var x = 10;      // old style, avoid using this
let y = 20;      // modern, changeable
const z = 30;    // constant, can’t be reassigned


console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

y = 25;          // valid
// z = 35;      // invalid, will throw an error
