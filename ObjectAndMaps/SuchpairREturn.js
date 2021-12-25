function findit(array, n, k) {
  let i = 0,
    j = n - 1;
  while (i < j) {
    if (array[i] + array[j] == k) return 1;
    if (array[i] + array[j] < k) i++;
    if (array[i] + array[j] > k) j--;
  }
  return -1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    console.log(findit(array, n, k));
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    5 2
    3 4 0 2 7`);
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
