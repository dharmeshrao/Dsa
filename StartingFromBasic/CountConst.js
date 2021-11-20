function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let vowel = "aeiouAEIOU",
    count = 0;
  for (let i = 0; i < vowel.length; i++) {
    for (let j = i; j < str.length; j++) if (vowel[i] == str[j]) count++;
  }
  console.log(str.length - count);
}
if (process.env.USERNAME === "adam") {
  runProgram(`masaischool`);
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
