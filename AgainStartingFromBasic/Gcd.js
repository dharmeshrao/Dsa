const findGcd = (a,b)=>{
if(a % b == 0)return b;
// console.log(b % a);
return findGcd(b % a,a)
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let [a,b] = input[line++].trim().split(" ").map(Number)
       console.log(findGcd(a,b));
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    6 9
    2 25`);
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
  
  