function findit(array, n, k) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    count++;
    sum += array[i];
    if (sum > k) {
      return count - 1;
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  array.sort((a, b) => a - b);
  console.log(findit(array, n, k));
}
if (process.env.USERNAME === "adam") {
  runProgram(`4 10
    5 4 2 4`);
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
