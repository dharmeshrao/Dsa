function weighted(array, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (i + 1) * array[i];
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
    weighted(array, n);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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
