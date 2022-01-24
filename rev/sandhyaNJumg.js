const JumpingSandhya = (n)=>{
    if(n === 0)return 1;
    if(n < 0)return 0;
    return JumpingSandhya(n-1) + JumpingSandhya(n-2) + JumpingSandhya(n-3)
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0]
   console.log(JumpingSandhya(n));
   
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
  
  