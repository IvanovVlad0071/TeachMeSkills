// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
//  Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
// Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
// Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
// Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

class Car {
    carName: string;
    engineType: string;
    constructor(carType: string, engineType: string){
this.carName = carType;
this.engineType = engineType; 
    }
}

class SportCar extends Car {
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, engineType: string, CarCost: number, maxSpeed: number){
        super(carName, engineType);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }
    carMethod1(){
        return `This is ${this.carName}. it has ${this.engineType} engine and max sped equal ${this.maxSpeed}. Approximetly cost of the car is ${this.CarCost}`;

    }
}

class LuxuryCar extends Car {
    private CarCost : number;
    private maxSpeed : number;
    constructor(carName:string, engineType: string, CarCost: number, maxSpeed: number){
        super(carName, engineType);
        this.CarCost = CarCost;
        this.maxSpeed = maxSpeed;
    }
    carMethod2(){
        return `This is ${this.carName}. it has ${this.engineType} engine and max sped equal ${this.maxSpeed}. Approximetly cost of the car is ${this.CarCost}`;

    }
}

const showCar1 = new SportCar ("Bugatti", "V-16", 1000000, 400);
console.log(showCar1.carMethod1());

const showCar2 = new LuxuryCar("Rolls-Royce", "v-12", 500000, 345);
console.log(showCar2.carMethod2())