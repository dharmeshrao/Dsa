const findDetective = (mat,r,c)=>{
 let top = 0,left = 0,right = mat[0].length - 1,down = mat.length-1;
 let res = "",count = 0;
 while(count < r * c && down >= 0 && left <= right){
      for(let i = top;i<= down;i++)res += mat[i][left] + " ";left++;count++;
      for(let i = left;i<= right; i++)res += mat[down][i] + " ";down--;count++;
 }
 console.log(res);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let [r,c] = input[line++].trim().split(" ").map(Number),mat = [];
       for(let j = 0;j< r; j++)mat.push(input[line++].trim().split(" ").map(Number));
       findDetective(mat,r,c)
     }
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    3 5
    1 2 3 1 2
    4 5 6 2 1
    7 8 9 4 5
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  