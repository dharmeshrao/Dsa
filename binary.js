let n = 10;
let res = ''
while( n > 0){
  res += n%2;
  n = Math.floor(n/2)
}
console.log(res);