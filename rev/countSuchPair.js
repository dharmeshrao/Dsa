const findit = (array, n, k) => {
  let i = 0,
    j = n - 1,
    count = 0;
  while (i < j) {
    if (array[i] + array[j] === k) count++, i++;
    else if (array[i] + array[j] > k) j--;
    else i++;
  }
  console.log(count);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  findit(array, n, k);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5 9
    3 0 6 2 7`);
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
