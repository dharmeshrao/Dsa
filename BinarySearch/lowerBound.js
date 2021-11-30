function findit(array, i, j, k) {
  let res = -1;
  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);
    if (array[mid] == k) {
      res = mid;
      j = mid - 1;
    }
    if (array[mid] > k) j = mid - 1;
    else i = mid + 1;
  }
  return res;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let i = 0,
    j = array.length - 1;
  console.log(findit(array, i, j, k));
}
if (process.env.USERNAME === "adam") {
  runProgram(`10 4
  0 2 4 4 5 5 7 7 9 10`);
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
