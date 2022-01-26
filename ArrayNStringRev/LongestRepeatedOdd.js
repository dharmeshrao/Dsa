const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],array = input[1].trim().split(' ').map(Number);
   let max = 0,count = 0;
   for(let i = 0;i< array.length; i++){
       if(array[i] % 2 !== 0)count++;
       else{
           max = Math.max(max,count)
           count = 0;
       }
   }
   count > max ? console.log(count) : console.log(max)
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`14
    1 1 1 1 2 2 2 2 2 1 1 1 1 1`);
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
  
  