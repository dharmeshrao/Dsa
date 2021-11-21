function findit(n, arr) {
  let low = 0;
  high = n - 1;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == arr[high]) high--;
    else if (arr[mid] > arr[high]) low = mid + 1;
    else high = mid;
  }
  return high
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  console.log(findit(n, array));
}
if (process.env.USERNAME === "adam") {
  runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
