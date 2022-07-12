let score = "100";
//string to number conversion
const num = Number(score);

console.log(num);

//storing the number into a string
let number2 = String(10);

const a = parseInt("2000");
console.log(a);

//section 4

let numbers = ["one", "two", "three", "four"];
const logNumbers = (number, index) => {
  console.log(index, number);
};
numbers.forEach(logNumbers);
