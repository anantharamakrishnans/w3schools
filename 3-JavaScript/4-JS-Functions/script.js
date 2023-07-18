// console.log("JS-Functions");

const myArray = [];
// console.dir(myArray);

const arr0 = [10];
function combineArray(arr1, arr2, arr0){
    // console.count(arr0);
    return [...arr1, ...arr2];
}

const arr1=[2,4,6,8];
const arr2=[1,3,5,7];

const newArr = combineArray(arr1,arr2);
// console.log(newArr);
// console.log(combineArray(arr1,arr2));


const car={
    type: "Toyota",
    year: 2015,
    color: "blue",
    isEngineRunning: false,
    turnOnEngine: function(bool){
        if(this.isEngineRunning){
            // console.log("Engine is running.");
        }
        else{
            // console.log("Engine is not running");
        }
    }
}

car.turnOnEngine(true);

// console.log(multiple(1,2));
// console.log(multipleNums1(1,2));
// console.log(multiplyNums2(1,2));
function multiple(a,b){
    return a*b;
}

const multipleNums1 = (a,b) => {
    return a*b;
}

const multiplyNums2 = (a,b) => a*b;
// console.log(multiple(1,2));
// console.log(multipleNums1(1,2));
// console.log(multiplyNums2(1,2));





function sum(a,b){
    const num = 5;
    // console.log(num);
    return a+b;
}
// console.log(num);
sum(0,0);


