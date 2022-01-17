const findit = (n, k, current, res, obj) => {
  if (res.length === k) {
    if (!obj[res]) obj[res.join(" ")] = 1;
  }
  for (let i = current; i <= n; i++) {
    res.push(i);
    findit(n, k, i + 1, res, obj);
    res.pop();
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let obj = {};
  findit(n, k, 1, [], obj);
  let x = Object.keys(obj).sort((a, b) => a - b);
  for (let i = 0; i < x.length; i++) console.log(x[i]);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`4 2`);
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
