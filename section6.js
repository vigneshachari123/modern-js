// const para = document.querySelector("div.error");
// const select = document.querySelector("body > h1");

// // const paras = document.querySelectorAll("p");
// // paras.forEach((item) => {
// //   console.log(item);
// // });

// // const selectbyId = document.getElementById("one");
// // console.log(selectbyId);

// // const paras = document.querySelectorAll("p");
// // console.log(paras);
// // paras.forEach((item) => {
// //   item.innerText += "new text";
// // });

// const persons = document.querySelector(".names");
// //console.log(persons);
// let names = ["vig", "tom", "jam", "ram", "dam"];

// // names.forEach((person) => {
// //   persons.innerHTML += `<p>${person}</p>`;
// // });

// // const secdiv = document.querySelector(".error");

// // console.log(secdiv.getAttribute("class"));

// // secdiv.setAttribute("class", "success");

// // secdiv.setAttribute("style", "color:red");

// const header = document.querySelector(".main");

// // header.setAttribute("style", "margin:50px");

// // header.setAttribute("style", "color:red");

// //alternate method

// //header.style.margin = "50px";
// //header.style.color = "red";

// // const paras = document.querySelectorAll("p");

// // paras.forEach((p) => {
// //   if (p.innerText.includes("error")) {
// //     p.classList.add("error");
// //   } else {
// //     p.classList.add("success");
// //   }
// // });

// // const article = document.querySelector("article");

// // Array.from(article.children).forEach((e) => {
// //   e.classList.add("succeess");
// // });

// //click event

// const lists = document.querySelectorAll("li");
// const ul = document.querySelector("ul");
// lists.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// // adding the data todo to the list

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "new todo added";
//   ul.append(li);
// });

const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", (e) => {
  const li = document.createElement("li");
  li.textContent = " new todo";
  // ul.append(li);
  ul.prepend(li);
});

ul.addEventListener("click", (e) => {
  console.log(`y clicked ${e}`);
  e.target.remove();
});
