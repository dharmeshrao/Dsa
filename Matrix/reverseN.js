const findit = (mat, n) => {
  let res = "";
  let x = n;
  for (let i = 0; i < n - 1; i++) res += mat[i][0] + " ";
  for (let i = 0; i < n; i++) x--, (res += mat[x][i] + " ");
  for (let i = 1; i < n; i++) res += mat[i][n - 1] + " ";
  console.log(res);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findit(mat, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
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
