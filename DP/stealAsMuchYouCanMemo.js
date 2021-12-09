function max(a, b) {
  return a > b ? a : b;
}

// Returns the value of maximum profit
function knapSackRec(W, wt, val, n, dp) {
  // Base condition
  if (n == 0 || W == 0) return 0;

  if (dp[n][W] != -1) return dp[n][W];

  if (wt[n - 1] > W)
    // Store the value of function call
    // stack in table before return
    return (dp[n][W] = knapSackRec(W, wt, val, n - 1, dp));
  // Return value of table after storing
  else
    return (dp[n][W] = max(
      val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp),
      knapSackRec(W, wt, val, n - 1, dp)
    ));
}

function knapSack(W, wt, val, N) {
  // Declare the table dynamically
  var dp = new Array(N + 1);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(W + 1);
  }

  // Loop to initially filled the
  // table with -1
  for (var i = 0; i < N + 1; i++) for (var j = 0; j < W + 1; j++) dp[i][j] = -1;

  return knapSackRec(W, wt, val, N, dp);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let limit = +input[0];
  let n = +input[1];
  let value = input[2].trim().split(" ").map(Number);
  let weight = input[3].trim().split(" ").map(Number);
  console.log(knapSack(limit, weight, value, n));
  //  console.log(limit,n,value,weight);
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
