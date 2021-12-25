function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (i == 0) {
        str += "* ";
      }
      if (i == n - 1) str += "* ";
      if (i > 0 && i < n - 1) {
        if (j == 0) str += "*";
        if (j == n - 1) str += " *";
        if (j > 0 && j < n - 1) {
          str += "  ";
        }
      }
    }
    console.log(str);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5`);
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
