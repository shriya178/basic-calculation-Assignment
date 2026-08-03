"use strict";
let num1 = 10;
let num2 = 20;
let choice = '+'; // +, -, *, /, %
switch (choice) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    case '%':
        console.log(num1 % num2);
        break;
    default:
        console.log('Invalid choice');
}
