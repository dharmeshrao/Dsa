function findit(array, k, i, j) {
  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);
    if (array[mid] == k) return true;
    if (array[mid] < k) i = mid + 1;
    if (array[mid] > k) j = mid - 1;
  }
  return false;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let line = 2;
  let array = input[1].trim().split(" ").map(Number);
  array.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    let i = 0,
      j = array.length - 1;
    let cases = +input[line++];
    findit(array, cases, i, j) ? console.log("YES") : console.log("NO");
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
