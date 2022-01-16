const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0];
  let x = n;
  let res = "";
  while (0 < x) {
    res += x % 10;
    x = Math.floor(x / 10);
  }

  +res == n ? console.log("yes") : console.log("no");
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1221`);
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
