const findit = (array, k, current, res, flag) => {
  if (res.length > 0) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
      sum += res[i];
    }
    if (sum == k) flag.push(sum);
  }
  for (let i = current; i < array.length; i++) {
    res.push(array[i]);
    findit(array, k, i + 1, res, flag);
    res.pop();
  }
};

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number),
    k = +input[2],
    current = 0,
    res = [],
    flag = [];
  findit(array, k, current, res, flag);
  console.log(flag.length > 0 ? "Yes" : "No");
}
if (process.env.USERNAME === "adam") {
  runProgram(`9
    1 2 3
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
