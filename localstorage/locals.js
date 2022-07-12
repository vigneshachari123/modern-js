//storing the data in local storage

localStorage.setItem("name", "vighnesh");
localStorage.setItem("age", 24);

//getting the data from loacal storage
const item = localStorage.getItem("name");

localStorage.name = "changed";
const a = localStorage.getItem("name");
console.log(a);

// delete the single data from local storage
// localStorage.removeItem('name')
// clear all the data from localstorage
// localStorage.clear();

const todos = [{ name: "vighesh" }, { name: "ram" }];

localStorage.setItem("todos", JSON.stringify(todos));

const gettodos = localStorage.getItem("todos");
console.log(gettodos);
