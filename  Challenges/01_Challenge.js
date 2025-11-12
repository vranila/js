/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — STUDENT REPORT SYSTEM 🏫

Goal:
Work with multiple student records.
For each student:
  - Calculate total and average.
  - Assign a grade.
  - Identify the top scorer.

Concepts used:
✅ Arrays of Objects
✅ Nested Objects
✅ Loops
✅ Functions with return values
✅ Conditional Logic
-------------------------------------------------------------
*/

// 🧩 1️⃣ Create an array of students 
let students = [
  {
    name: "Arun",
    class: "10A",
    marks: { math: 48, science: 35, english: 60, history: 72, computer: 95 }
  },
  {
    name: "Akhil",
    class: "10A",
    marks: { math: 88, science: 92, english: 81, history: 89, computer: 86 }
  },
  {
    name: "Anila",
    class: "10A",
    marks: { math: 95, science: 97, english: 94, history: 91, computer: 99 }
  },
  {
    name: "Vishnu",
    class: "10A",
    marks: { math: 65, science: 70, english: 68, history: 72, computer: 75 }
  },
  {
    name: "Gayathri",
    class: "10A",
    marks: { math: 80, science: 84, english: 88, history: 76, computer: 90 }
  }
];

// -------------------------------------------------------------
// 🧩 2️⃣ Function to calculate total and average

function calculateReport(marks) {
  let total = 0;
  let count = 0;

  for (let subject in marks) {
    total += marks[subject];
    count++;
  }

  let average = total / count;
  return { total, average };
}

// -------------------------------------------------------------
// 🧩 3️⃣ Function to assign grade based on average

function getGrade(average) {
  if (average >= 90) return "A+";
  else if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else return "F";
}

// -------------------------------------------------------------
// 🧩 4️⃣ Generate report for each student

let topper = null;
let highestAverage = 0;

console.log("🏫 SCHOOL REPORT");
console.log("--------------------------------------------------");

for (let student of students) {
  let report = calculateReport(student.marks);
  let grade = getGrade(report.average);

  console.log(`Name: ${student.name}`);
  console.log(`Class: ${student.class}`);
  console.log(`Total: ${report.total}`);
  console.log(`Average: ${report.average.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
  console.log("--------------------------------------------------");

  // Track topper
  if (report.average > highestAverage) {
    highestAverage = report.average;
    topper = student.name;
  }
}

// -------------------------------------------------------------
// 🧩 5️⃣ Display topper details

console.log(`🏆 Topper of the class: ${topper} (${highestAverage.toFixed(2)}%)`);

/*
✅ Notes:
- `students` is an array of objects.
- Each student has a nested `marks` object.
- Functions make code clean and reusable.
- The loop calculates and prints report for each student.
- Keeps track of the highest average dynamically.
*/
