function findit(array, k, res, curr, flag) {
  if (res.length > 0) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
      sum += res[i];
    }
    if (sum == k) flag.push(0);
  }
  for (let i = curr; i < array.length; i++) {
    res.push(array[i]);
    findit(array, k, res, i + 1, flag);
    res.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  let k = +input[2];
  let flag = [];
  findit(array, k, [], 0, flag);
  flag.length > 0 ? console.log("yes") : console.log("no");
}
if (process.env.USERNAME === "adam") {
  runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
