const findBoat = (array, n, k) => {
  array.sort((a, b) => a - b);
  let i = 0,
    j = n - 1,
    count = 0;
  while (i <= j) {
    count++;
    if (array[i] + array[j] <= k) i++;
    j--;
  }
  console.log(count);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    findBoat(array, n, k);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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
