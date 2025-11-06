/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — STUDENT REPORT CARD 🧮

Goal:
Create a report card system that:
- Stores student info and marks.
- Calculates total and average marks.
- Decides grade based on average.

Concepts covered:
✅ Objects & Arrays
✅ Loops
✅ Functions & Return Values
✅ Conditionals
-------------------------------------------------------------
*/

// 🧩 1️⃣ Create a student object
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

// -------------------------------------------------------------
// 🧩 2️⃣ Function to calculate total and average

function calculateReport(marks) {
  let total = 0;
  let count = 0;

  for (let subject in marks) {
    total += marks[subject];   // Add each mark
    count++;                   // Count subjects
  }

  let average = total / count;
  return { total, average };   // Return both values as an object
}

// -------------------------------------------------------------
// 🧩 3️⃣ Function to find grade based on average

function getGrade(average) {
  if (average >= 90) return "A+";
  else if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else return "F";
}

// -------------------------------------------------------------
// 🧩 4️⃣ Generate the report card

let report = calculateReport(student.marks);
let grade = getGrade(report.average);

console.log("📘 STUDENT REPORT CARD");
console.log("---------------------------");
console.log("Name:", student.name);
console.log("Class:", student.class);
console.log("Total Marks:", report.total);
console.log("Average:", report.average.toFixed(2));
console.log("Grade:", grade);

// -------------------------------------------------------------
/*
✅ Notes:
- The marks are stored inside an object.
- Loops make it easy to total dynamic subjects.
- Functions return values and keep logic reusable.
- Return { total, average } → returns both results as one object.
*/


