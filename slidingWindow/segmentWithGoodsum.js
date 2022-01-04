const findit = (array, n, k) => {
  let i = 0,
    j = 0,
    sum = 0;
  while (i < n && j < n) {
    if (sum < k) sum += array[i++];
    if (sum === k) return sum;
    if (sum > k) sum -= array[j++];
  }
  return sum;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    let x = findit(array, n, k);
    console.log(x);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    7 20
    2 6 4 3 6 8 9
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
