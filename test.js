let numbers = [10, 45, 23, 90, 5, 67, 12];
let extra = [100, 200, 300];

let merged = numbers.concat(extra)


let max = merged[0];
let min = merged[0];

for (let n of merged) {
    if (n < min) min = n;
    if (n > max) max = n;
}


console.log("Test")