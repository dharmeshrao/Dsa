function findit(arr, i, j, res) {
  if (i > j) return res;
  let mid = Math.floor((i + j) / 2);
  res =
    res +
    arr[mid] +
    findit(arr, i, mid - 1, res) +
    findit(arr, mid + 1, j, res);
  return res;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let k = 0;
    let res = "";
    let n = +input[line++];
    let arr = input[line++].trim();
    let x = findit(arr, k, n - 1, res);
    console.log(x);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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
