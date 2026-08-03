let firstnumber: number = 10;
let secondnumber: number = 20;

console.log('Before swap');
console.log('First number = ' + firstnumber);
console.log('Second number = ' + secondnumber);

let temp = firstnumber;
firstnumber = secondnumber;
secondnumber = temp;

console.log('After swap');
console.log('First number = ' + firstnumber);
console.log('Second number = ' + secondnumber);
