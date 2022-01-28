const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number);
   let array = input[1].trim().split(" ").map(Number);
   let count = 0,res = 0;
   for(let i = 0; i < n; i++){
       if(count > 1)break;
       if(array[i] > k){
        count++  
       }
       else res++;
   }
   console.log(res);
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`7 6
    4 3 7 6 7 2 2
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
  
  