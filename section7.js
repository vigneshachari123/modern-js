// const form = document.querySelector("form");
// const input = document.querySelector("#username");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(form.username.value);
// });

// //testing regular wxpewsssion

// const username = "vignesh";
// const pattern = /^[a-z]{6,}$/;

// //method 1
// const result = pattern.test(username);
// //method2
// const result2 = username.search(pattern);
// console.log(result2);

// const form = document.querySelector("form");
// const useralert = document.querySelector(".useralert");

// form.addEventListener("submit", (e) => {
//   const patternInput = /^[a-zA-Z]{6,12}$/;
//   const username = form.username.value;
//   e.preventDefault();
//   if (patternInput.test(username)) {
//     useralert.textContent = " valid  ";
//   } else {
//     useralert.textContent = " not a valid ";
//   }
// });

const form = document.querySelector("form");
//console.log(form);
const userAlert = document.querySelector(".useralert");
const pattern = /^[a-zA-Z]{6,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputtext = form.username.value;
  //validations

  if (pattern.test(inputtext)) {
    userAlert.textContent = "valid user ";
    //alert("valid user");
  } else {
    userAlert.textContent = "not a valid  name should not contai any numbers";
  }
});

form.username.addEventListener("keyup", (e) => {
  if (pattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
