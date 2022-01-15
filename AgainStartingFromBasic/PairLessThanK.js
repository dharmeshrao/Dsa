const findit = (array, n, k) => {
  let sum = 0,
    i = 0,
    j = n - 1,
    max = -1;
  while (i < j) {
    sum = array[i] + array[j];
    if (sum < k) {
      max = Math.max(max, sum);
      i++;
    } else j--;
  }
  return max;
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let k = +input[line++];
    console.log(findit(array, n, k));
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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
