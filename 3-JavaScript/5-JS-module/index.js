console.log("JS Module");


const person = require('./person');
// const person = require('./person').personObj;

console.log(person);
console.log(person.greet(person.personObj.name));