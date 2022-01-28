const Rotatematrixrix = (matrix,N)=>{
    for(let i = N-1; i >= 0; i--){
        let res = "";
        for(let j = N-1; j >= 0; j--){
         res += matrix[i][j] + " ";
        }
        console.log(res);
    }
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++],matrix = [];
       for(let j = 0;j < n; j++)matrix.push(input[line++].trim().split(" ").map(Number));
       Rotatematrixrix(matrix,n)
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`);
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
  
  