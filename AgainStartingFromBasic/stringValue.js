const runProgram = (input) => {
  input = input.trim().split("\n");
  let string = input[0].trim().split("");
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt(0) - 96;
  }
  console.log(sum);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`aba`);
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
