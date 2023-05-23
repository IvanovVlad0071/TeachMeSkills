function getSum1(n1:number, n2:number):number {
    if (n1 === n2) {
      return n1;
    } else if (n1 < n2) {
      let sum = 0;
      for (let i = n1; i <= n2; i++) {
        sum += i;
      }
      return sum;
    } else {
      let sum = 0;
      for (let i = n1; i >= n2; i--) {
        sum += i;
      }
      return sum;
    }
  }
  
  console.log(getSum1(45, 12));