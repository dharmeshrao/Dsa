const findit = (array, n, k) => {
  let i = 0,
    j = 0;
  let sum = 0;
  while (i < n && j < n) {
    if (sum < k) {
      sum += array[i++];
    }
    if (sum === k) return true;
    if (sum > k) sum -= array[j++];
  }
  return false;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    let x = findit(array, n, k);
    x ? console.log("Yes") : console.log("No");
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`10
  7 14
  3 5 4 2 2 1 1
  8 14
  1 7 4 3 2 1 5 6
  2 1
  3 1
  7 1
  1 1 1 1 1 1 1
  2 1
  1 1
  10 2
  2 6 3 3 4 1 1 5 2 4
  3 6
  9 6 4
  7 6
  3 9 6 1 7 8 10
  1 6
  3
  1 1
  3`);
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
