// class User {
//   constructor(username, id) {
//     (this.username = username), (this.id = id), (this.score = 0);
//   }

//   login() {
//     console.log(`${this.username} is just logged in`);
//     return this;
//   }
//   inScrore() {
//     this.score += 4;
//     console.log(`${this.score} is marias score `);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, id, email) {
//     super(username, id);
//     this.email = email;
//   }
//   deleteUser(data) {
//     const filtered = users.filter((u) => {
//       return u.username !== data.username;
//     });
//     console.log(filtered);
//   }
// }

// const user1 = new User("vighnesh", 1);
// const user2 = new User("ram", 2);
// const user3 = new Admin("sham", 3);
// const users = [user1, user2, user3];

// user3.deleteUser(user2);

// constructor function

// function User(username, password) {
//   (this.username = username), (this.password = password);
// }
// User.prototype.Login = () => {
//   console.log(`prototype methods `);
// };
// const userOne = new User("vighnesh", 1234);
// console.log(userOne);
// userOne.Login();

//spread operator

const double = (...num) => {
  console.log(num);
};

double(1, 2, 3, 4, 4);

const arr = [1, 2, 3, 4];
const num1 = [...arr, 5, 6, 7];
console.log(num1);

const names = ["vighnesh", "rajesh", "rajesh", "ram"];
const set = new Set(names);

// console.log(set);
// const newNames = [...set];
// console.log(newNames);

console.log([...new Set(names)]);

const symbOne = Symbol("one");
const symbTwo = Symbol("one");

console.log(symbOne === symbTwo);
