//---------------- PRACTICE YOUR CODE HERE --------------------//


let student = {
    name : "Arun",
    age : 33,
    city : "padiyur"
}


student.age = 22;
student.country = "India";

// for (key in student){
//     console.log(key, ":", student[key])
// }



let person = {
    name : "Bob",
    address : {
        city : "Paris",
        zip: 123573
    },
    age : 44,
    city : "Kannur"
}

// console.log(person.address.city)



// console.log(Object.keys(person))
console.log(Object.entries(person));