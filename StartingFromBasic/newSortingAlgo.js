function findit(array, n, k) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] % k > array[j + 1] % k) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n, k);
  console.log(array.join(" "));
}
if (process.env.USERNAME === "adam") {
  runProgram(`5 6
    12 18 17 65 46`);
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
