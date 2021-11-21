function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0]
   let array = input[1].trim().split(' ').map(Number)
   let count = 0;
   for(let i = 1;i < n-1;i++){
    if(array[i-1] < array[i] && array[i+1] < array[i])count++
   }
   if(array[0] > array[1])count++
   if(array[n-1] > array[n-2])count++
   console.log(count);
  }
  if (process.env.USERNAME === "adam") {
    runProgram(`2
    4 5`);
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
  
  