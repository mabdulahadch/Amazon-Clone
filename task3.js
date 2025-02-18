function studentMarksGreaterThan80(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 80) {
      result.push(students[i].name);
    }
  }
  return result;
}

function studentAgeGreaterThan21(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].age > 21) {
      result.push(students[i]);
    }
  }
  return result;
}

const students = [
  { name: "Ali", age: 22, marks: 85 },
  { name: "Ayesha", age: 20, marks: 92 },
  { name: "Bilal", age: 23, marks: 78 },
  { name: "Ibrahim", age: 22, marks: 76 },
  { name: "Usama", age: 21, marks: 80 },
];

// 1
console.log("---------------1----------------");
console.log(
  "Sorted Studnets = ",
  students.sort(function (a, b) {
    return a.marks - b.marks;
  })
);

// 2
console.log("---------------2----------------");
console.log(
  "Students marks greater than 80 = ",
  studentMarksGreaterThan80(students)
);

// // 3
console.log("---------------3----------------");
console.log(
  "Students Age greater than 21 = ",
  studentAgeGreaterThan21(students)
);
