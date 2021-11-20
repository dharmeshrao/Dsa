function runProgram(input) {
  input = input.trim();
  let a = input.trim();
  let b = a.split("").reverse().join("");
  b == a ? console.log("Yes") : console.log("No");
}
if (process.env.USERNAME === "adam") {
  runProgram(`1221`);
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
