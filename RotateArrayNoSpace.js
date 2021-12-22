let array = [1,2,3,4,5,0,0]
let k = 15;
if(k > array.length)k = k % array.length
let x = array.length - k;
for(let i = x;i< array.length; i++){
    let temp = array[x-i]
    array[x-i] = array[i]
    array[i] = temp
}
console.log(array);