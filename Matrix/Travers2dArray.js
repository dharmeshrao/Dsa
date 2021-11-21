function runProgram(input) {
  input = input.trim().split("\n");
  let [r, c] = input[0].trim().split(" ").map(Number);
  let mat = [],
    res = "";
  for (let i = 1; i <= r; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  for (let i = c - 1; i >= 0; i--) {
    for (let j = 0; j < r; j++) {
      res += mat[j][i] + " ";
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "adam") {
  runProgram(`4 3
  1 8 9
  2 7 10
  3 6 11
  4 5 12`);
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
