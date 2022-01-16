const runProgram = (input) => {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      for (let j = 0; j < +str[i]; j++) res += str[i - 1];
    }
  }
  console.log(res);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`a3b2`);
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
