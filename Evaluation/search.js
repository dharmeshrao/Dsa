let arr = [];

function findit(ak, array, count) {
  let [m, n] = ak;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= m && array[i] <= n) count++;
  }
  arr.push(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let count = 0;
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 3; i < input.length; i++) {
    findit(input[i].trim().split(" ").map(Number), array, count);
  }
  console.log(arr.join(" "));
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
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
