const numbers = [7, -4, 32, -90, 54, 32, -21]
const newNumbers = numbers.filter((value) => {
    if (value > 0) {
        return value
    }
})
console.log(newNumbers)


const numbers1 = [7, -4, 32, -90, 54, 32, -21]
const newunumbers1 = numbers.filter(function filternumbers(value) {
    if (value > 0) {
        return value
    }
});
console.log(newunumbers1)