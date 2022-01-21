const arr = [11, [22, 33, [4, [5, 6, 7, [7]]]], [44, 55], [66, 77], 88, 99];
let res = [];
function yess(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) yess(arr[i]);
    else res.push(arr[i]);
  }
}
yess(arr);
console.log(res);
