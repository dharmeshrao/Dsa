const findit = (n) => {
  if (n == 1) return true;
  if (n <= 9) return false;
  // if(n > 9){
  let x = n.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < x.length; i++) sum += x[i] * x[i];
  return findit(sum);
  // console.log(sum);
  // }
  // else findit(n * n)
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    console.log(findit(n));
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    19
    2
    312082396`);
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
