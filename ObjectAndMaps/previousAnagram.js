function runProgram(input) {
  input = input.trim().split("\n");
  let array = [];
  for (let i = 1; i < input.length; i++) {
    array.push(input[i].trim());
  }
  array = array.reverse();
  findit(array);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
