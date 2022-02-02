const SearchInMatrix = (mat,n)=>{
    let c1 = 0,c3 = 0;
    let c2 = mat[Math.floor(n/2)].reduce((acc,curr)=>acc += curr)
    for(let i = 0;i< Math.floor(n/2); i++)c1 += mat[i][0];
    for(let i = Math.floor(n / 2) +1 ;i < n; i++)c3 += mat[i][n-1];
    console.log(3*c1 + c2 + 2*c3);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],mat = [];
   for(let i = 1;i< input.length; i++)mat.push(input[i].trim().split(" ").map(Number));
   SearchInMatrix(mat,n)
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25`);
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
  
  