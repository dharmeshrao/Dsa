function findit(array, n) {
  // let dp = [];
  // for (let i = 0; i <= n; i++) {
  //   dp.push(-1);
  // }
  // let res = 0;
  // for (let i = 0; i < n; i++) {
  //   let max = 0;
  //   for (let j = 0; j < i; j++) {
  //     if (array[j] < array[i]) {
  //       if (dp[j] > max) max = dp[j];
  //     }
  //   }
  //   dp[i] = max + 1;
  //   if (dp[i] > res) res = dp[i];
  // }
  // console.log(res);
  for(let i = 0;i< n;i++){
    let count  = 0;
    for(let j = 0;j< i;j++){
      if(array[j] < array[i])count++
    }
    console.log(count);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`9
  10 22 9 33 21 50 41 60 80`);
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
