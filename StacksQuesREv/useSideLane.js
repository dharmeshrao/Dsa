const findSideLane = (array, n) => {
  let count = 1,
    res = [],
    stack = [];
  for (let i = 0; i < n; i++) {
    if (array[i] === count) {
      res.push(array[i]);
      count++;
    } else stack.push(array[i]);
    while (stack.length > 0 && stack[stack.length - 1] === count) {
      res.push(stack.pop());
      count++;
    }
  }
  return res.length === n;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length - 1; i += 2) {
    let array = input[i].trim().split(" ").map(Number);
    let x = findSideLane(array, array.length);
    x ? console.log("yes") : console.log("no");
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`
  5 
  4 1 5 3 2 
  5 
  3 1 2 5 4 
  5 
  5 3 2 1 4 
  10 
  1 2 10 5 4 3 7 6 8 9 
  10 
  1 2 10 5 4 3 9 8 7 6 
  5 
  3 5 2 4 1 
  5 
  1 2 4 3 5 
  4 
  4 2 3 1 
  0
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
