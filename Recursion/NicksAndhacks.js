const findit = (n, x) => {
  if (n == x) return true;
  if (n < x) return false;
  return findit(n, x * 10) || findit(n, x * 20);
};
function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let x = 1;
  for (let i = 1; i <= cases; i++) {
    let n = +input[i];
    console.log(findit(n, x) ? "Yes" : "No");
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
    1
    2
    10
    25
    200`);
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
