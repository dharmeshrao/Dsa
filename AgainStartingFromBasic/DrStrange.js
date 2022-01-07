const findPosiblity = (n, res, current) => {
  if (n > 0) console.log(res.join(" "));
  for (let i = current; i <= n; i++) {
    res.push(i);
    findPosiblity(n, res, i + 1);
    res.pop();
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0];
  findPosiblity(n, [], 1);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3`);
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
