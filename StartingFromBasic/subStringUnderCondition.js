function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let ans = "";
      for (let k = i; k <= j; k++) {
        ans += str[k];
      }
      if (ans[0] == ans[ans.length - 1]) count++;
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "adam") {
  runProgram(`abcab`);
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
