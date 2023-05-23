const result = (function factorial(n: number): number {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
      fac *= i;
    }
    return fac;
  })(5);
  
  console.log(result);