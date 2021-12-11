function findit(limit, n, value, weight) {
  if (n == 0 || limit == 0) return 0;
  if (weight[n - 1] > limit) return findit(limit, n - 1, value, weight);
  else {
    return max(
      value[n - 1] + findit(limit - weight[n - 1], n - 1, value, weight),
      findit(limit, n - 1, value, weight)
    );
  }
}

function max(a, b) {
    return a > b ? a : b;
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
