function findit(ash, gary, n) {
  ash.sort((a, b) => a - b);
  gary.sort((a, b) => a - b);
  let a = 0,
    b = 0;
  for (let i = 0; i < n; i++) {
    if (ash[i] > gary[i]) a++;
    if (gary[i] > ash[i]) b++;
  }
  a > b ? console.log("a") : console.log("b");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let ash = input[line++].trim().split(" ").map(Number);
    let gary = input[line++].trim().split(" ").map(Number);
    findit(ash, gary, n);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    3
    12 3 4
    5 4 1
    2
    1 5
    1 4`);
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
