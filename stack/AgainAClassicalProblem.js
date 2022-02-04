const BalanceParanthisis = (str)=>{
    let stack = [];
    for(let x of str){
        if(x == "[" || x == "{" || x == "(") stack.push(x)
        else{
            if(stack.length == 0)return false;
            let y = stack.pop();
            if(y === "{" && x !== "}" || y === "[" && x !== "]" || y === "(" && x !== ")")return false;
        }
    }return stack.length === 0;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   for(let i = 1;i< input.length; i++){
       let str = input[i].trim()
       BalanceParanthisis(str) ? console.log("Balanced") : console.log("Not Balanced")
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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
  
  