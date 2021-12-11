function max(a, b) {
  return a > b ? a : b;
}
function findit(limit, n, value, weight) {
  let i, w;
  let dp = new Array(n + 1);
  for (i = 0; i <= n; i++) {
    dp[i] = new Array(limit + 1);
    for (w = 0; w <= limit; w++) {
      if (i == 0 || w == 0) dp[i][w] = 0;
      else if (weight[i - 1] <= w)
        dp[i][w] = max(
          value[i - 1] + dp[i - 1][w - weight[i - 1]],
          dp[i - 1][w]
        );
      else dp[i][w] = dp[i - 1][w];
    }
  }
  return dp[n][limit];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let limit = +input[0];
  let n = +input[1];
  let value = input[2].trim().split(" ").map(Number);
  let weight = input[3].trim().split(" ").map(Number);
  let x = findit(limit, n, value, weight);
  console.log(x);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`50 
      3
      60 100 120 
      10 20 30`);
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
