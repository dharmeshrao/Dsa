const findit = (n) => {
  if (n == 0 || n == 1) return 0;
  return Math.log(n) + findit(n - 1);
};
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let x = findit(n);
  x = x.toFixed(4);
  console.log(x);
}
if (process.env.USERNAME === "adam") {
  runProgram(`3`);
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
