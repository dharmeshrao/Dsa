function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0];
   let array = input[1].trim().split(' ').map(Number)
   let res = array[0];
   let count = 0;
   for(let i = 0; i < n; i++){
       let x = res - array[i+1];
       let y = res - array[i+2]
       if(x < y){
     count += Math.abs(res - array[i+1])
     res = array[i+1]
       }
      else{
          count += Math.abs(res - array[i-2])
          res = array[i+2]
          i++
      }
   }console.log(count);
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`4
    10 30 40 20`);
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
  
  