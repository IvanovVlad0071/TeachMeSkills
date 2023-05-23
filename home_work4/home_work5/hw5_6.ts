function fooboo(bool: boolean, f1: Function, f2: Function): void {
    if (bool) {
      f1();
    } else {
      f2();
    }
  }
  
  function foo(): void {
    console.log("Function foo");
  }
  
  function boo(): void {
    console.log("Function boo");
  }
  
  fooboo(true, foo, boo);