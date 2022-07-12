//in javascript method is a function which is A property of an object.

const employee = {
  name: "vighensh",
  age: 23,
  Location: "kumta",
  friends: [
    { name: "murali", id: 1 },
    { name: "maruti", id: 2 },
  ],
  details: function () {
    console.log(
      `hello everyone my name  ${this.name} and i am ${this.age}  yr old`
    );
  },
  logfreinds() {
    console.log(`list of freinds`);
    this.friends.forEach((friend) => {
      console.log(friend.name, friend.id);
    });
  },
};

employee.logfreinds();

let area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));

const random = Math.random();
console.log(Math.round(random * 100));

const objectone = { name: "vighnesh", id: 1 };
const objecttwo = objectone;
console.log(objectone, objecttwo);

objectone.name = "new";
console.log(objectone, objecttwo);
