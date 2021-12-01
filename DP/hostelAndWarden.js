function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < n; i++) {
    let x = Math.abs(arr1[i] - arr2[i]);
    max = Math.max(max, x);
  }
  console.log(max);
}
if (process.env.USERNAME === "adam") {
  runProgram(`3
    4 -4 2
    4 0 5`);
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
