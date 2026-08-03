let num1: number = 25;
let num2: number = 10;
let num3: number = 18;

if (num1 < num2) {
  if (num1 < num3) {
    console.log('First number is smallest');
  } else {
    console.log('Third number is smallest');
  }
} else {
  if (num2 < num3) {
    console.log('Second number is smallest');
  } else {
    console.log('Third number is smallest');
  }
}
