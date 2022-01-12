const findPead = (array, n) => {
  for (let i = 0; i < n; i++) {
    if (array[i] > array[i + 1]) {
      console.log(i);
      break;
    }
  }
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findPead(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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
