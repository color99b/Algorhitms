let n = 710;
let ten, hun, fhun;
fhun = parseInt(n / 500);
n %= 500;
hun = parseInt(n / 100);
n %= 100;
ten = parseInt(n / 10);
console.log(ten, hun, fhun);
