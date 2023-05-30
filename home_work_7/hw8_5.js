const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]


console.log(numbers1.find((value) => value % 2 === 0));


const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const newarr = numbers.find((value) => {
    if (value % 2 === 0) {
        return value
    }
})
console.log(newarr)