function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let num = [];
  for (let i = 1; i <= abc.length; i++) {
    num.push(i);
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if (str[i] == abc[j]) sum += num[j];
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "adam") {
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
