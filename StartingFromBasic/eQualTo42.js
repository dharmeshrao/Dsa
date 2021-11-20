function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0],
    flag = false;
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    if (array[i] == 42) {
      flag = true;
    }
  }
  flag ? console.log("Yes") : console.log("No");
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
    3 7 0 9 8`);
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
