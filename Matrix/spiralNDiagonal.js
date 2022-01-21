const findMat =(array,n)=>{
let mat = [],res = [],finalMatrix = [],sum = 0,static = 0;
for(let i = 0;i< array.length; i++){
    res.push(array[i])
    if(res.length === n){
        mat.push(res.join(" "))
        res.length = 0;
    }
}
for(let i = 0;i< mat.length;i++)finalMatrix.push(mat[i].trim().split(" ").map(Number));
for(let i = 0;i< finalMatrix.length;i++)sum += finalMatrix[i][i];
for(let i = finalMatrix.length-1;i >= 0;i--){sum += finalMatrix[static][i];static++ }
if(n % 2 === 1){
    sum -= array[Math.floor(array.length/2)]
}

console.log(finalMatrix);
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
  
  