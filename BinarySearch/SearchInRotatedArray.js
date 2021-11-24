function find(array, k) {
  let low = 0,
    high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] > array[mid + 1]) return mid + 1;
    else if (array[mid] < array[mid - 1]) return mid;
    else if (array[mid] >= array[low]) low = mid + 1;
    else if (array[mid] < array[high]) high = mid - 1;
  }
  return -1;
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
  let x = find(array, k);
  let a = findit(array, k, x, n - 1);
  let b = findit(array, k, 0, x);
  if (array[x] <= k && k <= array[n - 1]) console.log(a);
  else console.log(b);
}
if (process.env.USERNAME === "adam") {
  runProgram(`6 6
    3 4 7 9 1 2`);
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
