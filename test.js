let colors = ["red", "blue", "green"];
for (let color in colors){
    console.log(color, ":", colors[color]);
}

for (let color of colors){
    console.log(color);
}



let person = {name : "arun",
    age : 33,
    place : "kannur"
}

for (let key in  person) {
    console.log(key, ":", person[key]);
}