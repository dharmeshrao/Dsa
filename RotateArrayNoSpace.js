let array = [1,2,3,4,5,0,0]
let k = 8;
if(k > array.length)k = k % array.length
let res = [];
for(let i = k; i < array.length; i++){
    res.push(array[i])
}
for(let i = 0;i < k; i++){
    res.push(array[i])
}

console.log(res);