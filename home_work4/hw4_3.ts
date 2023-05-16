let str1: string = 'hello Belarus';
let st: number = 13;
if (st >= str1.length) {
    console.log('Вы вышли за границу строки');
}else {
    console.log(str1.charAt(st))
}