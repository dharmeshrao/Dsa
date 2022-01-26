const findUnique = (array, n) => {
  let res = array[0];
  for (let i = 1; i < array.length; i++) {
    res = res ^ array[i];
  }
  console.log(res);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++],
      array = input[line++].trim().split(" ").map(Number);
    findUnique(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
