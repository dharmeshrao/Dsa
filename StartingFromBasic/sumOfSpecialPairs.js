function prime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) count++;
  }
  return count == 2;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let count = 0;
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (prime(j - i) && i < j) {
        let x = array[j] - array[i];
        if (x < 0) {
          count -= x;
        } else count += x;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "adam") {
  runProgram(`8
  5 12 32 11 4 56 5 0`);
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
