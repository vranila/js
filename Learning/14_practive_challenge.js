/* 
-------- PRACTICE CHALLENGE ----------
Make a file array_practice.js and try these:
Create an array of 5 city names.
Add a new city to the end and start.
Remove the first city.
Print the array length.

Use a for...of loop to print each city’s name in uppercase. 
first try your self, then read the code below

*/

let cities = ["Mumbai", "Pune", "Kochi", "Kannur", "Delhi", "Calicut"]

// Add city at the end
cities.push("Jaypur")

// Add city at the beggining
cities.unshift("Trivandrum")

// Remove first city
cities.shift()

// Length
console.log(cities.length)


// Print city name with for loop
for (let city of cities){
    console.log(city)
}

