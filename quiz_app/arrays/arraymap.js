// const price = [1, 2, 35, 52, 20, 1, 22, 3];

// const products = [
//   { name: "shirt", price: 1000 },
//   { name: "towel", price: 30 },
//   { name: "pant", price: 3000 },
//   { name: "cap", price: 250 },
// ];

// const sale = products.map((item) => {
//   if (item.price > 500) {
//     //  editing the original value
//     //     item.price = item.price / 2;
//     //     return item;
//     return { name: item.name, price: item.price / 2 };
//   } else {
//     return item;
//   }
// });

// console.log(sale, products);

const score = [12, 32, 44, 50, 2, 3, 1, 4];

const scr = score.reduce((acc, curr) => {
  if (curr > 10) {
    acc++;
  }
  return acc;
}, 0);

console.log(scr);

const players = [
  { name: "msd", score: 53 },
  { name: "vk", score: 43 },
  { name: "raina", score: 22 },
  { name: "msd", score: 53 },
  { name: "msd", score: 53 },
  { name: "vk", score: 43 },
  { name: "raina", score: 22 },
  { name: "msd", score: 53 },
];

const msdscore = players.reduce((acc, curr) => {
  if (curr.name === "msd") {
    acc += curr.score;
  }
  return acc;
}, 0);

//find method

const numbers = [1, 2, 3, 4, 10, 12, 45];

const num = numbers.find((number) => {
  return number >= 10;
});

console.log(num);

// sort method

const playersC = [
  { name: "msd", score: 13 },
  { name: "vk", score: 50 },
  { name: "raina", score: 22 },
  { name: "msd", score: 53 },
];
//-1 dont sort
const answer = playersC.sort((a, b) => {
  const result = a.score - b.score;
  return result;
});
console.log(answer);

const scores = [10, 3, 11, 44, 2, 50, 75, 2];

scores.sort((a, b) => {
  return a - b;
});

console.log(scores);
