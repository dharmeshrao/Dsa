function findit(array, n, k) {
  let res = array[0];
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (array[i] != array[0]) count++;
  }
  if (count >= 1) console.log(k + 1 - count);
  else console.log(k + 1);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n, k);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    5 3
    2 2 2 2 1`);
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
