function findit(s) {
  let stack = [];
  for (let p of s) {
    if (p == "{" || p == "[" || p == "(") stack.push(p);
    else {
      if (stack.length == 0) return false;
      let x = stack.pop();
      if (
        (x == "{" && p != "}") ||
        (x == "(" && p != ")") ||
        (x == "[" && p != "]")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let arr = input[line++].trim().split("");
    findit(arr) ? console.log("balanced") : console.log("not balanced");
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`3
  (
  {
  }
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
