const findRotation = (array, n, k) => {
  let a = 0, b = 0, res = array[0];
  for (let i = 0; i < n; i++) {
    a = (a + k) % n;
    let x = array[a];
    array[a] = res;
    if (b == a) {
      b++;
      a++;
      x = array[a];
    }
    res = x;
  }
  return array;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    console.log(...findRotation(array, n, k));
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
