Object1 = { name: null, surname: 'Петров', age: 26 }
let Name1
let surname
let age

if (Object1.name != null) {
    Name1 = Object1.name
}
else
    Name1 = 'Аноним'
if (Object1.surname != null) {
    surname = Object1.surname
}
else
    surname = 'Анонимович'
if (Object1.age != null) {
    age = Object1.age
}
else
    age = '? лет'

console.log(Name1)
console.log(surname)
console.log(age)



