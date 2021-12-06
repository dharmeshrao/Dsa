function findit(array, n) {
  array.sort((a, b) => a - b);
  let mid = Math.floor(array.length / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] < array[mid]) sum += -1;
    if (array[i] >= array[mid]) sum += array[mid];
  }

  console.log(sum);
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
  runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5`);
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
