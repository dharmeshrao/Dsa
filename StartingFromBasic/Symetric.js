function check(mat) {
  let i = 0,
    j = mat.length - 1;
  while (i < j) {
    if (mat[i] != mat[j]) return false;
    else i++, j--;
  }
  return true;
}
function findit(n, mat) {
  let newArray = [];
  for (let i = 0; i < mat[0].length; i++) {
    let str = "";
    for (let j = 0; j < mat.length; j++) {
      str += mat[j][i];
    }
    newArray.push(str);
  }
  if (check(mat) && check(newArray)) console.log("YES");
  else console.log("NO");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let mat = [];
    for (let i = 0; i < n; i++) {
      mat.push(input[line++].trim());
    }
    findit(n, mat);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    5
    00100
    01010
    10001
    01010
    01110`);
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
