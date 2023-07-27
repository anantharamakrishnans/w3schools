//index.js
import personName, {pet, greet} from "./name.js";
// var _ = require('lodash');
// import _ from "lodash";
import _ from 'lodash';

//All non-default exports needs to be destructured from the file.

console.log(personName);
console.log(pet.name, pet.breed);
greet("Monika");




export const nums = _.range(1, 9);
console.log(nums);