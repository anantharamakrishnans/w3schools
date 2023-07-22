console.log("ES6");

// const nameArray = ["My", "name", "is", "Brandon"];
// console.log(nameArray);
// console.log(...nameArray);

class Car{
    constructor(make,year,color,price){
        this.make = make;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    get cmake(){
        return this.make;
    }
    set cmake(newmake){
        this.make=newmake;
    }
    changeColor(newcolor){
        this.color=newcolor;
    }
}

const carNew1 =new Car('Toyota', 2015,'red',30000);
console.log(carNew1.make);

class Motorcycle extends Car{
    constructor(make,year,color, price, numOfWheels){
        super(make,year,color,price);
        this.numOfWheels=numOfWheels;
    }
    changeWheels(){
        for(let i=0; i<10; i++)
        {
            console.log("Wheels have been changed.");
        }
    }
}

const carNew = new Car('Toyota',2015, 'red',30000);
carNew.changeColor("white");

const myMoto = new Motorcycle('Yamaha', 2020, 'blue', 12000, 2);
myMoto.changeWheels();