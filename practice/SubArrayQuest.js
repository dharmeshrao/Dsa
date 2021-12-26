function findit(array, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let res = [];
    for (let j = i; j < n; j++) {
      res.push(array[j]);
      if (res.length > 1) {
        if ((res[0] + res[res.length - 1]) % 2 == 0) count++;
      }
    }
  }
  console.log(count);
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
    5
    1 2 3 4 5`);
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
