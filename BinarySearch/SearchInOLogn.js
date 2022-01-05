const findit = (array, n, k) => {
  let res = -1,
    left = 0,
    right = n - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] == k) return mid;
    if (array[mid] > k) right = mid - 1;
    else left = mid + 1;
  }
  return res;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let k = +input[2];
  console.log(findit(array, n, k));
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    1 2 3 5 6
    4`);
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
