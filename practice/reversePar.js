function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim().split("");
  let [a, k] = input[2].trim().split(" ").map(Number);
  let i = a,
    j = k;
  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i++, j--;
  }
  console.log(str.join(""));
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
      abcdef
      1 3
      `);
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
