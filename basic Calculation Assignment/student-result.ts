let sub1: number = 32;
let sub2: number = 31;
let sub3: number = 35;
let sub4: number = 45;
let sub5: number = 25;

let total: number = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage: number = total / 5;

let grade: string;
let result: string;

if (percentage >= 90) {
  grade = 'A+';
} else if (percentage >= 80) {
  grade = 'A';
} else if (percentage >= 70) {
  grade = 'B';
} else if (percentage >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

if (percentage >= 35) {
  result = 'Pass';
} else {
  result = 'Fail';
}

console.log('Total Marks = ' + total);
console.log('Percentage = ' + percentage + '%');
console.log('Grade = ' + grade);
console.log('Result = ' + result);
