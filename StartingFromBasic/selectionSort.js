function funk(array, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (array[i] > array[j]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  console.log(array.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  funk(array, n);
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
    3 5 0 9 8`);
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
