// const array = [10, 25, 5, 20, 34, 30, 2];

// const employee = [
//   { name: "vighnehs", premium: true },
//   {
//     name: "ram",
//     premium: false,
//   },
//   { name: "vighnesh", premium: true },
// ];

// const filter = array.filter((num) => {
//   return num > 10;
// });

// console.log(filter);

// const filteremployee = employee.filter((user) => {
//   return user.premium;
// });

// console.log(filteremployee);

const products = [
  { name: "bat", price: 1500 },
  { name: "pad", price: 500 },
  { name: "ball", price: 100 },
  { name: "stick", price: 150 },
  { name: "hat", price: 15 },
];

// const filteredProducts = products.filter((item) => {
//   return item.price > 50;
// });

// const finaloffer = filteredProducts.map((product) => {
//   return `the ${product.name} is ${product.price / 2} rupees`;
// });

// console.log(finaloffer);

const offeronproducts = products
  .filter((item) => item.price > 50)
  .map(
    (product) => `the product ${product.name} and ${product.price / 2} rupees`
  );
console.log(offeronproducts);
