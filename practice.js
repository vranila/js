// Practice here.

let student = {
  name: "Arun",
  class: "10th Grade",
  marks: {
    math: 78,
    science: 85,
    english: 90,
    history: 72,
    computer: 95
  }
};



function calculateReport(marks) {
    let total = 0;
    let count = 0;
    for (let subject in marks){
        total += marks[subject];
        count ++;
    }

    let average = total / count;
    return {total, average };
}

function getGrade(average){
  if (average >= 90) return "A+";
  else if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else return "F";
}



let report =  calculateReport(student.marks);
let grade = getGrade(report.average);

console.log("📘 STUDENT REPORT CARD");
console.log("---------------------------");
console.log("Name:", student.name);
console.log("Class:", student.class);
console.log("Total Marks:", report.total);
console.log("Average:", report.average.toFixed(2));
console.log("Grade:", grade);