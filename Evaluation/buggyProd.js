function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let res = -1;
  for (let i = 0; i < n; i++) {
    if (array[i] == 1) {
      res = i;
      break;
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    0 0 0 1 1`);
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
