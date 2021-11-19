function findit(a, k, array) {
  let i = 0,
    j = a - 1;
  while (i < j) {
    if (array[i] + array[j] == k) return i + " " + j;
    if (array[i] + array[j] < k) i++;
    if (array[i] + array[j] > k) j--;
  }
  return -1 + " " + -1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let [a, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    console.log(findit(a, k, array));
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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
