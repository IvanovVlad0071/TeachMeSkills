function getSumNumbers(num: number): number {
    let sum = 0;
    let stringNum = num.toString();
    for (let i = 0; i < stringNum.length; i++) {
      sum += +stringNum[i];
    }
    return sum;
  }
  console.log(getSumNumbers(333));