console.log("ES6");

// const nameArray = ["My", "name", "is", "Brandon"];
// console.log(nameArray);
// console.log(...nameArray);

// class Car{
//     constructor(make,year,color,price){
//         this.make = make;
//         this.year = year;
//         this.color = color;
//         this.price = price;
//     }
//     get cmake(){
//         return this.make;
//     }
//     set cmake(newmake){
//         this.make=newmake;
//     }
//     changeColor(newcolor){
//         this.color=newcolor;
//     }
// }

// const carNew1 =new Car('Toyota', 2015,'red',30000);
// console.log(carNew1.make);

// class Motorcycle extends Car{
//     constructor(make,year,color, price, numOfWheels){
//         super(make,year,color,price);
//         this.numOfWheels=numOfWheels;
//     }
//     changeWheels(){
//         for(let i=0; i<10; i++)
//         {
//             console.log("Wheels have been changed.");
//         }
//     }
// }

// const carNew = new Car('Toyota',2015, 'red',30000);
// carNew.changeColor("white");

// const myMoto = new Motorcycle('Yamaha', 2020, 'blue', 12000, 2);
// myMoto.changeWheels();



// const arrValue = [1, 2, 3];

// // destructuring assignment in arrays
// const [a, b, c] = arrValue;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3


// let person = {
//     name: "Brandon",
//     age: 29,
//     gender: "Male",
//    };
   
//    // destructuring assignment
//    let { name, age, gender } = person;
   
//    console.log(name); // Brandon
//    console.log(age); // 29
//    console.log(gender); // Male


// const printSomethingArrow = (msg) => {
//     console.log(msg);
//     return true;
// }
// printSomethingArrow("Hello from arrow function");
// function printSomething(msg){
//     console.log(msg);
//     return true;
// }
// printSomething("print something");


// const print = msg => {
//     console.log(msg);
// }
// print("a message");

// const produce = () => 
//  `producing
// aa`
// ;
// console.log(produce());


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((val) => {
//   console.log(val*2);
// });

// for (num of numbers) {
//     console.log(num);
//    }

// const sampleArr1 = [45, 4, 9, 16, 25];
// const sampleArr2 = sampleArr1.map((value) => {
//     return value * 3;
// });

// console.log(sampleArr2);

// const sampleArr3 = sampleArr1.filter((value) => {
//     return value > 10;
// })
// console.log(sampleArr3);