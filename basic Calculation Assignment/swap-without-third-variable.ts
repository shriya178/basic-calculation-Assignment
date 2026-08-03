let num1: number = 10;
let num2: number = 20;

console.log('Before swap');
console.log('First number = ' + num1);
console.log('Second number = ' + num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log('After swap');
console.log('First number = ' + num1);
console.log('Second number = ' + num2);
