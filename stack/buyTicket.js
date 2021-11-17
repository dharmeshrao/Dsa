function findit(array, stack) {
  if (array[0] == "E") {
    stack.push(array[1]);
    console.log(stack.length);
  }
  if (array[0] == "D") {
    if (stack.length > 0) {
      let x = stack.shift();
      console.log(x + " " + stack.length);
    } else console.log(-1 + " " + stack.length);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let stack = [];
  for (let i = 0; i < n; i++) {
    let array = input[line++].trim().split(" ");
    findit(array, stack);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
