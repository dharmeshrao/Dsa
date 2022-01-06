const findit = (a, k, queue) => {
  if (a === "Push") {
    queue.push(k);
  }
  if (a === "Pop") {
    if (queue.length == 0) console.log("Empty");
    else {
      let x = queue.pop();
      console.log(x);
    }
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1,
    queue = [];
  for (let i = 0; i < cases; i++) {
    let [a, k] = input[line++].trim().split(" ");
    findit(a, k, queue);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    Push 4
    Push 5
    Pop`);
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
