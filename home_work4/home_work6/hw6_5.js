let salaries = {
    dima: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let sum = 0;
let count = 0;
for(const name in salaries ){
    count++;
    sum +=salaries[name];
}
console.log(sum/count);