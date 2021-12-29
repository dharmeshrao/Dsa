const findit = (array,k,n)=>{
    if(n == 0)return 1;
    if(n < 0)return 0;
    return findit(array,k,n-1) + findit(array,k - array[n-1],n-1)
}



function runProgram(input) {
   input = input.trim().split('\n')
   let [k,n] = input[0].trim().split(' ').map(Number)
   let array = input[1].trim().split(" ").map(Number)
   console.log(findit(array,k,n));
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`4 3
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
  
  