function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let x = n;
  for (let i = 0; i < n; i++) {
    let str = "";
    x--;
    for (let j = 0; j < n; j++) {
      
        if (i == j) str += "*";
        else str += ' '
        if(j != n-2){
            if(j == x)str += "*"; 
        }
    }
    console.log(str);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`4`);
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
