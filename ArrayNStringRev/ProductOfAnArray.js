const ProductOfAnArray = (array,n)=>{
    let prod = 1,res = [];
    for(let i = 0;i< n; i++)prod *= array[i];
    for(let i = 0;i < n; i++)res.push(prod/ array[i]);
    console.log(...res);
}
const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);
       ProductOfAnArray(array,n)
   }
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
  
  