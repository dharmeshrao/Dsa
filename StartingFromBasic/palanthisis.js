function findit(arr) {
  let stack = [];
  for (let x of arr) {
    if (x == "[" || x == "{" || x == "(") stack.push(x);
    else {
      if (stack.length == 0) return false;
      let a = stack.pop();
      if (
        (x == "]" && a != "[") ||
        (x == ")" && a != "(") ||
        (x == "}" && a != "{")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let arr = input[line++].trim();
    findit(arr) ? console.log("balanced") : console.log("not balanced");
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`3
    {([])}
    ()
    ([]
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
