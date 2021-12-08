let obj = {};
function findit(n) {
  if (obj[n]) {
    return obj[n];
  }
  if (n == 0) return 0;
  if (n == 1) return 1;
  let s1 = findit(Math.floor(n / 2));
  let s2 = findit(Math.floor(n / 3));
  let s3 = findit(Math.floor(n / 4));
  obj[Math.floor(n / 2)] = s1;
  obj[Math.floor(n / 3)] = s2;
  obj[Math.floor(n / 4)] = s3;
  return Math.max(n, s1 + s2 + s3);
}
function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    let n = +input[i];
    console.log(findit(n));
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`317
  381
  910
  4176025
  3349949
  684407731
  861466906
  815968858
  682390379
  548900521
  `);
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
