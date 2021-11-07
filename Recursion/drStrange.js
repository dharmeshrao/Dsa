let obj = {};
const findit = (n, res, current) => {
  if (n > 0) {
    if (obj[res] == undefined) obj[res] = 1;
    console.log(res.join(" "));
  }
  for (let i = current; i <= n; i++) {
    res.push(i);
    findit(n, res, i + 1);
    res.pop();
  }
};

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0],
    current = 1,
    res = [];
  findit(n, res, current);
}
if (process.env.USERNAME === "adam") {
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
