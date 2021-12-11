function max(a, b) {
  return a > b ? a : b;
}
function matrix(limit, n) {
  var dp = new Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(limit + 1);
  }
  for (let i = 0; i < n + 1; i++)
    for (let j = 0; j < limit + 1; j++) dp[i][j] = -1;
  return dp;
}
function findit(limit, n, value, weight, dp) {
  if (n == 0 || limit == 0) return 0;
  if (dp[n][limit] != -1) return dp[n][limit];
  if (weight[n - 1] > limit)
    return (dp[n][limit] = findit(limit, n - 1, value, weight, dp));
  else {
    return (dp[n][limit] = max(
      value[n - 1] + findit(limit - weight[n - 1], n - 1, value, weight, dp),
      findit(limit, n - 1, value, weight, dp)
    ));
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let limit = +input[0];
  let n = +input[1];
  let value = input[2].trim().split(" ").map(Number);
  let weight = input[3].trim().split(" ").map(Number);
  let dp = matrix(limit, n);
  let x = findit(limit, n, value, weight, dp);
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
