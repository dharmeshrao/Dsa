function findLower(array, n, k) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] <= k) low = mid + 1;
    else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  console.log(findLower(array, n, k));
}
if (process.env.USERNAME === "adam") {
  runProgram(`5 2
      1 1 2 2 5`);
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
