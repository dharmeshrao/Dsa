const findit = (array, n) => {
  let res1 = [],
    res2 = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j <= n; j++) {
      count++;
      if (array[j] < array[i]) {
        res1.push([count, j]);
        break;
      }
      if (j === n) {
        res1.push([-1, -1]);
        break;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i - 1; j >= -1; j--) {
      count++;
      if (array[j] < array[i]) {
        res2.push([count, j]);
        break;
      }
      if (j === -1) {
        res2.push([-1, -1]);
      }
    }
  }
  console.log(res1);
  for (let i = 0; i < res1.length; i++) {
    if (res1[i][0] === -1) res1[i] = res2[i];
    if (res2[i][0] === -1) res2[i] = res1[i];
    if (res1[i][0] < res2[i][0]) res2[i] = res1[i];
  }
  let final = [];
  for (let i = 0; i < n; i++) {
    if (res2[i][0] != -1) final.push(array[res2[i][1]]);
    else final.push(-1);
  }
  //   console.log(res1);
//   console.log(final.join(" "));
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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
