function findit(array) {
  let stack = [];
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (stack.length == 0) res.push(-1);
    else if (stack.length > 0 && stack[stack.length - 1] < array[i]) {
      res.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
        stack.pop();
      }
      if (stack.length == 0) res.push(-1);
      else res.push(stack[stack.length - 1]);
    }
    stack.push(array[i]);
  }
  console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array);
}
if (process.env.USERNAME === "adam") {
  runProgram(`8
    39 27 11 4 24 32 32 1`);
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
