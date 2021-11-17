function findit(array, stack, queue) {
  if (array[0] == 1) queue.push(array[1]);
  if (array[0] == 2) stack.push(array[1]);
  if (array[0] == 3) queue.length > 0 ? console.log(queue[0]) : console.log(-1);
  if (array[0] == 4)
    stack.length > 0 ? console.log(stack[stack.length - 1]) : console.log(-1);
  if (array[0] == 5) {
    if (queue.length > 0) {
      let x = queue.shift();
      stack.push(x);
    } else console.log(-1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let stack = [],
    queue = [];
  for (let i = 0; i < n; i++) {
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, stack, queue);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
