const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5, 45]
const numbersS = numbers.some((value) => {
    if (value % 3 == 0 && value % 5 == 0) {
        return value
    }
})
console.log(numbersS)