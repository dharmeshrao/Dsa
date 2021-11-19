function findit(mat, rc) {
  let top = 0,
    bottom = rc - 1,
    right = rc - 1,
    left = 0;
  let str = "";
  for (let i = bottom; i >= top + 1; i--) {
    str += mat[i][left] + " ";
  }
  for (let i = 0; i < rc; i++) {
    for (let j = 0; j < rc; j++) {
      if (i == j) {
        str += mat[i][j] + " ";
      }
    }
  }
  bottom--;
  for (let i = bottom; i >= top; i--) {
    str += mat[i][right] + " ";
  }
  console.log(str);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let rc = +input[line++];
    let mat = [];
    for (let j = 0; j < rc; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findit(mat, rc);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`1
      3
      1 2 3
      4 5 6
      7 8 9`);
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
