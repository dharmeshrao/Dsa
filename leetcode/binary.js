

 const BtoNum = (res)=>{
  res = res.split("").reverse().map(Number);
  let sum = 0;
  for(let i = 0;i< res.length; i++){
    sum += (res[i] * Math.pow(2,i))
  }
  return sum;
}
const NumToB = (n)=>{
let res = ''
while( n > 0){
  res += n%2;
  n = Math.floor(n/2)
}
console.log(res);
// return res.split("").reverse().join("")
}

var addBinary = function(a, b) {
let x = BtoNum(a),y = BtoNum(b);
    NumToB(x + y)
};
addBinary("11","1")