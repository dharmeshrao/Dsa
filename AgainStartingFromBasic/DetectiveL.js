const findMat = (mat, r, c) => {
  let total = r * c,
    count = 0;
  let left = 0,
    bottom = mat.length - 1;
  let res = "";
  while (count < total) {
    for (let i = 0; i < bottom && bottom > mat[0].length; i++) {
      res += mat[i][left] + " ";
      //   console.log(i, bottom);
    }
    count++, left++;
    for (let i = left - 1; i < mat[0].length && bottom >= 0; i++) {
      res += mat[bottom][i] + " ";
      // console.log(i,bottom);
    }
    count++, bottom--;
  }
  console.log(res);
};

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
    findMat(mat, r, c);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    2 3
    1 2 3 4 4 4 4 4 
    4 5 6 4 4 4 4 4`);
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
