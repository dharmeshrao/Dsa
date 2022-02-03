const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],array = input[1].trim().split(" ").map(Number);
   let set = new Set([...array]),value = [],min = [],max = [];
   set.forEach((e)=>value.push(e));
   value.sort((a, b) => a-b);
   if(value.length < 3){
       console.log("Not Possible");
       console.log("Not Possible");
   }
   else{
    for(let i = 0;i< 3; i++)min.push(value[i]);
    for(let i = value.length- 3;i < value.length;i++)max.push(value[i])
   console.log(...min);
   console.log(...max); 
   }
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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
  
  