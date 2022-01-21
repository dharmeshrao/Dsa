const findMat =(array,n)=>{
  let sum = 0;
  for(let i = 0; i < array.length; i+=(n-1)){
    sum += array[i]
  }
  console.log(sum);
}


const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number)
       findMat(array,n)
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`1
    4
    1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10`);
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
  
  