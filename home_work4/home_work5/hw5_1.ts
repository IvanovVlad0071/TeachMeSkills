function getsum (x:number): number {
let res = 0;
for(let i =0;  i<=x; i++) {
res+= i
}
return res
}
console.log(getsum(100))