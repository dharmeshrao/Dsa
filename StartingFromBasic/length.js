// var lengthOfLastWord = function(s) {
//     s = s.trim()
//     let res = 0;
//     for(let i = s.length-1;i >= 0;i--){
//         if(s[i] == ' ' || ''){
//             res = i+1
//         }
//     }
// console.log(res)
// };

// lengthOfLastWord('abc agcdadf  sdf')


let array = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function(digits) {
    return String(BigInt(digits.join("")) + 1n).split("").map(Number);
};

console.log(plusOne(array));