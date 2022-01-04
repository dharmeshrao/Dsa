const findit = (array1,array2, n) => {
    for(let i = 0;i< n; i++){
    
    }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array1 = input[line++].trim().split(" ").map(Number);
    let array2 = input[line++].trim().split(" ").map(Number);
    console.log(findit(array1,array2, n));
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
