function findit(array, n) {
  let stack = [],
    res = [];
  for (let i = n - 1; i >= 0; i--) {
    if (stack.length == 0) res.push(-1);
    else if (stack.length > 0 && stack[stack.length - 1] < array[i])
      res.push(stack[stack.length - 1]);
    else if (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
        stack.pop();
      }
      if (stack.length == 0) res.push(-1);
      else res.push(stack[stack.length - 1]);
    }
    stack.push(array[i]);
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (res[i] != -1) sum += res[i];
  }
  console.log(sum);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
