let mat = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];


let count = 0;
let size = mat.length * mat.length;
let top = 0,bottom = mat.length-1,left = 0,right = mat[0].length-1,res = [];
while(count < size){
for(let i = left; i <= right; i++){
    res.push(mat[top][i])
}top++;
count++;
for(let i = top; i <= bottom; i++){
    res.push(mat[i][right])
}right--;
count++;
for(let i = right-1;i >= left; i--){
    res.push(mat[bottom][i])
}bottom--;
count++;
for(let i = bottom-1;i >= top; i--){
    res.push(mat[i][left])
}left++;
count++;
}
console.log(count);
console.log(res);






appropriate 
questions]
 [Ability to 
use hints]
 [Attempt to 
solve]
[Problem 
Solving]
[HTML and 
CSS]
[Advanced 
Javascript]
[Basics of 
Front End 
Development]
How would 
you rate the 
students 
communicatio
n skills?
How would 
you rate the 
student's 
attitude and 
mindset? What should the student focus on? What went well?
How would 
you rate the 
candidate's 
overall Job 
readiness 
based on this 
interview?
Dharmesh 1 2 4 2 2 2 1 NA NA NA 2 3
1. Dharmesh should focus on basic programming 
construct and asking clarification focus at the 
begining of the interview, thought process should 
be to share brute force solution and later on 
optimize the solution.
2. Try this approach:
==> do try to solve basic questions as many as 
possible, for now try with some 30 days of coding 
challenge.
==> do focus on searching/sorting based 
question, if you are good in these two topics, it 
re-affirm you are good into basic of programming 
and alogrithms.
==> Try mock interviews frequently