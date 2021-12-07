function findit(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) count++;
  }
  console.log(array.length - count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`10
  15 15 3 10 12 12 13 5 5 7`);
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
