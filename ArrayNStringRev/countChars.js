function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let count = 0;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      res += str[i] + count;
      count = 0;
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`aaabbbbcc`);
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
