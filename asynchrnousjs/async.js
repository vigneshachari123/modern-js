// const getTodos = (resourse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.status === 404) {
//         reject(`something went wrong while fetching the data`);
//       }
//     });

//     request.open(`GET`, resourse);
//     request.send();
//   });
// };

// getTodos("data/data.json")
//   .then((data) => {
//     console.log(data);
//     return getTodos("todos.json");
//   }) // promise chaining
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // getTodos("data/data.json", (err, data) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(data);
// //   }
// //   getTodos("todos.json", (err, data) => {
// //     console.log(data);
// //   });
// // });

// //promises

// // getsomething = () => {
// //   return new Promise((resolve, reject) => {
// //     //get data
// //     resolve(`data fetched from api`);
// //     // reject(`somthing went wrong while fetching the data`);
// //   });
// // };

// // getsomething()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

//fetching the data

// fetch("todos.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("todos.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));

const getdata = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const loadposts = await response.json();
  return new Promise((resolve, reject) => {
    if (response.status == 200) {
      resolve(loadposts);
    } else {
      reject(`something went wrong while getting data`);
    }
  });
};

getdata()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// const getdata = async () => {

//   return new Promise((resolve, reject) => {

//     fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data=> resolve(data))

//   });

// };
