let basicSalary: number = 30000;

let hra: number = (basicSalary * 20) / 100;
let da: number = (basicSalary * 10) / 100;
let pf: number = (basicSalary * 8) / 100;

let grossSalary: number = basicSalary + hra + da;
let netSalary: number = grossSalary - pf;

console.log('Basic Salary = ₹' + basicSalary);
console.log('HRA = ₹' + hra);
console.log('DA = ₹' + da);
console.log('PF = ₹' + pf);
console.log('Gross Salary = ₹' + grossSalary);
console.log('Net Salary = ₹' + netSalary);
