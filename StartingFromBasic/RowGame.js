function findit(mat, r, c) {
  let obj = {};
  for (let i = 0; i < c; i++) {
    let x = {};
    for (let j = 0; j < r; j++) {
      if (x[mat[i][j]] == undefined) x[mat[i][j]] = 1;
    }
    let key = Object.keys(x);
    for (let k = 0; k < key.length; k++) {
      if (obj[key[k]] == undefined) obj[key[k]] = 1;
      else obj[key[k]]++;
    }
  }
  let count = 0;
  for (key in obj) {
    if (obj[key] == r) count++;
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [r, c] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let i = 0; i < r; i++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findit(mat, r, c);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
