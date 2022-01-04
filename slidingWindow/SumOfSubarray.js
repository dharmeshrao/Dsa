const findit = (l, r, array) => {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += array[i];
  }
  console.log(sum);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 3; i < input.length; i++) {
    let [l, r] = input[i].trim().split(" ").map(Number);
    findit(l - 1, r - 1, array);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
