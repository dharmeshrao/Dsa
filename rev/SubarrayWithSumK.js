const findit = (array, n, k) => {
  let i = 0, j = 0, sum = 0;
  while (j < n) {
    if (sum === k) return true;
    if (sum < k) sum += array[i++];
    else sum -= array[j++];
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
  runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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
