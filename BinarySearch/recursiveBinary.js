//Enter code here
function findit(array, k, low, high) {
  let mid = Math.floor(low + (high - low) / 2);
  if (array[mid] == k) return mid;
  if (array[mid] < k) return findit(array, k, mid + 1, high);
  if (array[mid] > k) return findit(array, k, low, mid - 1);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let [low, high] = [0, n - 1];
  console.log(findit(array, k, low, high));
}
if (process.env.USERNAME === "adam") {
  runProgram(`5 0
      2 -2 0 3 4`);
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
