let num = 1221
let x = num;
let final =0
let rem = 0
while(num>0){
    rem = num%10
num = Math.floor(num/ 10)
final= final*10+rem
// console.log(num)
}
console.log(final == x);

