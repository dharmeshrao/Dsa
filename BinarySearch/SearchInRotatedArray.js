function findMin(array, n) {
  let low = 0,
    high = n - 1;
  if (array[0] < array[n - 1]) return array[0];
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] > array[mid + 1]) return mid + 1;
    if (array[mid] < array[mid - 1]) return mid;
    if (array[mid] < array[0]) high = mid - 1;
    if (array[mid] >= array[0]) low = mid + 1;
  }
}
function findit(array, k, low, high) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) return mid;
    if (array[mid] > k) high = mid - 1;
    if (array[mid] < k) low = mid + 1;
  }
  return -1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let min = findMin(array, n);
  if (k >= array[min] && k <= array[n - 1]) {
    console.log(findit(array, k, min, n - 1));
  } else console.log(findit(array, k, 0, min));
}
if (process.env.USERNAME === "adam") {
  runProgram(`5 1
  3 4 5 1 2`);
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
