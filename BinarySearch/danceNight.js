function findit(m, n, boy, girl) {
  boy.sort((a, b) => a - b);
  girl.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < boy.length; i++) {
    if (girl[i] < boy[i]) count++;
  }
  count == m ? console.log("YES") : console.log("NO");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [m, n] = input[line++].trim().split(" ").map(Number);
    let boy = input[line++].trim().split(" ").map(Number);
    let girl = input[line++].trim().split(" ").map(Number);
    findit(m, n, boy, girl);
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`1
  8 10
  124 142 130 179 117 36 191 43
  89 107 41 143 65 49 47 6 91 130`);
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
