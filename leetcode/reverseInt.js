let n = 300001;
let res = ''

while(0 < n){
res += n % 10;
n = Math.floor(n/10)
}

let x = -123;
x = Math.abs(x)

console.log(res,x);