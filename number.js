let number = 10;
console.log((number += 2));
console.log((number += 2));
console.log((number -= 1));

// array concepts

let array = ["one", "two", "threee"];
//array join
array.join(",,,"); //one,,,two,,,threee

//concating
let array2 = ["three", "four", "five"];
array.concat(array2); //[ 'one', 'two', 'threee', 'three', 'four', 'five' ]

//push the value
array2.push("push");
array2; //[ 'three', 'four', 'five', 'push' ]

const include = array2.includes("push");
include; //return true
console.log("a" > "A"); // true alphabate a > A
