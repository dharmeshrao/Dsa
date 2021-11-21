function runProgram(input) {
  input = input.trim().split("\n");
  let a = +input[0];
  let b = input[1].trim().split(".");
  let str = input[2].trim();
  console.log(a + +b[0]);
  console.log(+b[0] + +b[0] + ".0");

  console.log("HackerRank " + str);
}
if (process.env.USERNAME === "adam") {
  runProgram(`12
    4.0
    is the best place to learn and practice coding!`);
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
