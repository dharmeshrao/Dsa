const PrimeCheck = (n)=>{
    let count = 0;
    for(let i = 1; i <= n; i++)if(i % n === 0)count++;
    return count === 2;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [r,c] = input[0].trim().split(" ").map(Number);
   let mat = [],count = 0,index = 0,res = 0;
   for(let i = 1;i< input.length; i++)mat.push(input[i].trim().split(" ").map(Number));
   for(let i = 0;i< (r*c);i++){
       count++;
       if(i % c === 0)count = 1,index++;
       console.log(index,count);
   }
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
  
  