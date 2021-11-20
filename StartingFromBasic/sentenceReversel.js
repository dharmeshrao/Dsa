function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim().split(" ");
  console.log(str.reverse().join(" "));
}
if (process.env.USERNAME === "adam") {
  runProgram(`A Transformation in education`);
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
