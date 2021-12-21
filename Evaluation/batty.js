function findit(array,n,k){

}


function runProgram(input) {
   input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number)
   let array = input[1].trim().split(" ").map(Number).sort((a, b) => a-b)
console.log(findit(array,n,k));
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`3 11
    1 5 7`);
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
  
  