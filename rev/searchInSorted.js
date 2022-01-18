const findit = (array, n, k) => {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] > array[mid + 1]) return mid + 1;
    if (array[mid] < array[mid - 1]) return mid;
    if (array[mid] > array[0]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
const finder = (array, low, high, k) => {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) return mid;
    else if (array[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let mid = findit(array, n, k);
  if (k >= array[0]) {
    console.log(finder(array, 0, mid - 1, k));
  } else console.log(finder(array, mid, n - 1, k));
};
if (process.env.USERNAME === "Dharmesh") {
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
