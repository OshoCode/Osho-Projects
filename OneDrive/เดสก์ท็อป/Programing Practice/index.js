let myName = "John"; // String
const age = 25; // Number
let isStudent = true; // Boolean
let colors = ["red", "blue", "green"]; // Array (object)
let person = { name: "John", age: 25 }; // Object

console.log(myName, age, isStudent, colors, person);

let a = 10, b = 5;
console.log(a + b); // Addition → 15
console.log(a - b); // Subtraction → 5
console.log(a * b); // Multiplication → 50
console.log(a / b); // Division → 2
console.log(a % b); // Modulus (remainder) → 0

console.log(a > b); // Comparison → true
console.log(a == "10"); // Loose equality (true)
console.log(a === "10"); // Strict equality (false)

console.log(true && false); // Logical AND → false
console.log(true || false); // Logical OR → true
console.log(!true); // Logical NOT → false

let age2 = 18;

if (age >= 18) {
    console.log("You're an adult!");
} else {
    console.log("You're underage!");
}

// Using else if
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

let students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 78 }
];
students.forEach(student => {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

const _ = require('lodash'); // Import lodash
console.log(_.random(1, 100)); // Generate a random number


