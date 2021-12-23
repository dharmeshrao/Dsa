function runProgram(input) {
  input = input.trim().split("\n");
  let [n, r, c] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let res = [];
  for (let i = 0; i < n; i++) {
    let mat = [];
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
    }
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`2 2 2
    1 2 3 4 5 6 7 8`);
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
