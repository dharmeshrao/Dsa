function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0]
   let array = input[1].trim().split(' ').map(Number)
   let dp = Array(n).fill(-1)
   console.log(dp);
   dp[n] = 1;
   for(let i = n-1;i >= 0;i--){
       for(let j = 1;j<= array[i] && i + j < dp.length;j++){
        dp[i] += dp[i+j]
       }
   }
   console.log(dp);
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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
  
  