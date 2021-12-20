function findit(array, res, current, n, flag, j, k) {
  if (current == n) {
    let sum = 0;
    for (let i = j; i <= k; i++) {
      sum += array[i];
    }
    if (sum % 2 != 0) flag.push(0);
  }
  for (let i = current; i < n; i++) {
    swap(array, i, current);
    findit(array, res, current + 1, n, flag, j, k);
    swap(array, i, current);
  }
  return flag;
}
function swap(array, i, current) {
  let temp = array[i];
  array[i] = array[current];
  array[current] = temp;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let [i, j] = input[1].trim().split(" ").map(Number);
  let res = [];
  let array = [],
    flag = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  findit(array, res, 0, n, flag, i, j);
  console.log(flag.length);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    0 1`);
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
