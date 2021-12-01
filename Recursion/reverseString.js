
// let s = 'cbbd'
// let max=0;
// let ans;
// for(let i = 0;i< s.length;i++){
//     let res = ''
//     for(let j = i;j< s.length;j++){
//         res += s[j]
//      if(res == res.split('').reverse().join('')){
//          max = Math.max(max,res.length)
//          if(res.length == max)ans = res;
//      }
//     }
// }
// console.log(ans);
// let x = s.substring(0,s.length-2)
// console.log(x);



let num = '52'
function back(num,curr,res,flag){
    if(res.length > 0){
        flag.push(res.join(''))
    }
    for(let i = curr;i< num.length;i++){
        res.push(num[i])
        back(num,i+1,res,flag)
        res.pop()
    }
}
num = num.split('')
let res = [],flag = []
back(num,0,res,flag)
let max = 0
for(let i = 0;i< flag.length;i++){
    let x = +flag[i]
    if(x % 2 != 0){
        max = Math.max(max,x)
    }
    
}

if(max == 0)return ''
else {
    max = max.toString()
    return max
}