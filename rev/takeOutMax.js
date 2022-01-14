const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let nums = input[1].trim().split(" ").map(Number);
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let max = sum;
  for (let i = k; i < n; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }
  console.log(max);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
