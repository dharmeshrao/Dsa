let num = 1221
let x = num;
let final =0
let rem = 0
while(num>0){
    rem = num%10
num = parseInt(num/ 10)
final= final*10+rem
// console.log(num)
}
console.log(final == x);


let array = [1,2,3,4,5]
//Output : [120, 60, 40, 30, 24]

let sum  = 1;
for(let i = 0;i < array.length;i++){
    sum = sum * array[i]
}
for(let i = 0;i< array.length;i++){
    console.log(sum/array[i]);
}