// console.log("Hello World");

const myArray = [1, 2, 3, 4, 5];

// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[3]);

const anotherArray = new Array(1, 2, 3, 4, 5, 6);

const yetAnotherArray = []; //empty array
yetAnotherArray[0] = 1;
yetAnotherArray[1] = 2;
yetAnotherArray[2] = 3;

// console.log(yetAnotherArray);
// console.log(yetAnotherArray[0]);
// console.log(yetAnotherArray[3]);


// console.log(myArray.length);

// console.log(myArray.includes(5));

// console.log(anotherArray.indexOf(3));
// console.log(anotherArray.indexOf(7));

// myArray.push(8);
// console.log(myArray);

// let lastElement = yetAnotherArray.pop();
// console.log(lastElement);
// console.log(yetAnotherArray);

// yetAnotherArray.unshift(0);
// console.log(yetAnotherArray);

// let firstElement = anotherArray.shift();
// console.log(firstElement);
// console.log(anotherArray);

// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   document.getElementById("demo").innerHTML = fruits.get("apples");


  // Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("bananas", 100);
// fruits.set("oranges", 200);

// document.getElementById("demo").innerHTML = fruits.get("apples");

// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value + "<br>"
// })
// document.getElementById("demo").innerHTML = text;


// let text = "";
// for (const x of fruits.entries()) {
//   text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// Create an object:
// const person = {
//     firstName: "John",
//     firstName: "Roff",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Display some data from the object:
//   document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old.";

// const person = {};
// person["eyeColor"]="blue";
// person["First Name"]="Anantha";
// person["car"]="Maruti";

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (key in person){
//     console.log(`person ${key} is ${person[key]}`);
// }

// const fruits = ["apple", "banana", "cranberry"];

// // 1. The traditional for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log("1.", fruits[i]);
// }

// // 2. For In syntax
// for (idx in fruits) {
//   console.log("2.", idx);
// }

// // 3. For Of syntax
// for (fruit of fruits) {
//   console.log("3.", fruit);
// }