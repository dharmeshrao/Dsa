function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array1 = input[1].trim().split(" ").map(Number);
  let array2 = input[2].trim().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] > array1[i + 1]) {
      count++;
    }
  }
  if (n == count) {
    console.log("Not Possible");
  } else console.log("Possible");
}
if (process.env.USERNAME === "adam") {
  runProgram(`1
  1 3 5
  2 6 8`);
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
