function findit(array, n) {
  let res = Array(n).fill(Infinity);
  let res2 = Array(n).fill(Infinity);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[i]) {
        res[i] = j;
        break;
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (array[j] < array[i]) {
        res2[i] = j;
        break;
      }
    }
  }
  let final = Array(n).fill(-1);
  for (let i = 0; i < final.length; i++) {
    if (res[i] == Infinity) final[i] = res2[i];
    else if (res2[i] == Infinity) final[i] = res[i];
    if (res2[i] == Infinity && res[i] == Infinity) final[i] = -1;
  }
  for (let i = 0; i < final.length; i++) {
    let a = Math.abs(i - res2[i]);
    let b = Math.abs(i - res[i]);
    if (final[i] == -1) {
      if (a < b) {
        final[i] = res2[i];
      } else {
        final[i] = res[i];
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (final[i] == Infinity) res[i] = -1;
    else {
      res[i] = array[final[i]];
    }
  }
  console.log(res);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
  }
}
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
