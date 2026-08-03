let num1: number = 10;
let num2: number = 20;
let choice: string = '+'; // +, -, *, /, %

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
