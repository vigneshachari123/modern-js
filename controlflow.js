let names = ["vighnes", "dinesh", "muruli", "rams"];

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
}

// using while loop
let i = 0;

while (i < names.length) {
  // console.log(names[i]);
  i++;
}

//using do while loop
let j = -1;
do {
  //  console.log(`value of j ${j}`);
  j++;
} while (j < 5);

// let password = "vigneshcjndjcc";
// console.log(password.length);
// if (password.length >= 12) {
//   console.log(`password is confirmed`);
// } else if (password.length > 10) {
//   console.log(`password might strong `);
// } else {
//   console.log(`password is not strong enough`);
// }

let user = false;
if (!user) {
  // console.log(`if condition execute only when the condition is true new !user value is true now
  // `);
}

// let scores = [12, 45, 88, 0, 100, 23, 3];

// for (let i = 0; i < scores.length; i++) {
//   console.log(`your score is ${scores[i]}`);
//   if (scores[i] === 100) {
//     console.log(`congratulation you have reached max score `);
//     break;
//   }
// }

//switch statements

let score = 12;

switch (score) {
  case 2:
    console.log(`low score `);
    break;
  case 10:
    console.log(`winner`);
    break;
  default:
    console.log(`enter a valid score`);
}

//hoisting in js
greet();

function greet() {
  console.log(`welcome guest`);
}

//function expression Hoinsting will not work for function expression

const welcome = (name) => {
  console.log(`welcome man${name}`);
};
welcome("vignesh");

// function return

const bill = (products, tax) => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
