function max(a, b) {
  return a > b ? a : b;
}

// Returns the maximum value that can
// be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {
  // Base Case
  if (n == 0 || W == 0) return 0;

  // If weight of the nth item is
  // more than Knapsack capacity W,
  // then this item cannot be
  // included in the optimal solution
  if (wt[n - 1] > W) return knapSack(W, wt, val, n - 1);
  // Return the maximum of two cases:
  // (1) nth item included
  // (2) not included
  else
    return max(
      val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
      knapSack(W, wt, val, n - 1)
    );
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
