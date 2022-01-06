const findit = (k, a, b, queue) => {
  if (k === "E") {
    queue.push([a, b]);
    queue.sort((a, b) => a[0] - b[0]);
  }
  if (k === "D") {
    let x = queue.shift();
    console.log(x.join(" "));
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1,
    queue = [];
  for (let i = 0; i < cases; i++) {
    let [k, a, b] = input[line++].trim().split(" ");
    findit(k, a, b, queue);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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
