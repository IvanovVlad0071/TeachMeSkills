// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
//  К примеру `This car has 3 doors and this is left-hand drive car`

const car1 = {
    doorsNumber: 2,
    wheelType: "left-hand"
}

const car2 = {
    doorsNumber: 4,
    wheelType: "right-hand"
}


function getcar(): string {
    return `This car has ${this.doorsNumber} doors and this is ${this.wheelType} drive car`
}

console.log(getcar.call(car1));

const newGetcar = getcar.bind(car2)
console.log(newGetcar())