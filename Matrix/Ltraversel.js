function traverseLshape(mat, r, c) {
  let res = "",
    j = 0;
  while (j < c) {
    for (var i = 0; i <= r - j - 1; i++) res += mat[i][j] + " ";
    for (var k = j + 1; k < c; k++) res += mat[r - 1 - j][k] + " ";
    j++;
  }
  console.log(res);
}

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [r, c] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < r; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    traverseLshape(mat, r, c);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
