// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
//  И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

const test1 = {
    name: "Alex",
}

const test2={
name: "John"
}

function testF(): void {
   console.log(`My name is ${this.name}`);
}

testF.call(test1);
testF.call(test2);
