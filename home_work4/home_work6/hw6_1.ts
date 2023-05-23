interface person {
    name?: string,
    age?: number
};

const ch1: person = {
    name: 'Vlad',
    age: 28
}
console.log(ch1);
delete ch1.name;
delete ch1.age;
console.log(ch1);
