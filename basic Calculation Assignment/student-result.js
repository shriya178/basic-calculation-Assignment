"use strict";
let sub1 = 32;
let sub2 = 31;
let sub3 = 35;
let sub4 = 45;
let sub5 = 25;
let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;
let grade;
let result;
if (percentage >= 90) {
    grade = 'A+';
}
else if (percentage >= 80) {
    grade = 'A';
}
else if (percentage >= 70) {
    grade = 'B';
}
else if (percentage >= 50) {
    grade = 'C';
}
else {
    grade = 'F';
}
if (percentage >= 35) {
    result = 'Pass';
}
else {
    result = 'Fail';
}
console.log('Total Marks = ' + total);
console.log('Percentage = ' + percentage + '%');
console.log('Grade = ' + grade);
console.log('Result = ' + result);
