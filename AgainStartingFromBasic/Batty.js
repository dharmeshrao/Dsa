const findit = (n, k, res, current, flag) => {
  if (res.length == k) flag.push(res.join(" "));
  for (let i = current; i <= n; i++) {
    res.push(i);
    findit(n, k, res, i + 1, flag);
    res.pop();
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number),
    flag = [];
  findit(n, k, [], 1, flag);
  for (let i = 0; i < flag.length; i++) {
    let sum = 0;
    let x = flag[i];
    for (let j = 0; j < x.length; j++) {
      sum += +x[j];
    }
    if (sum === n) console.log(x);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`8 2`);
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
