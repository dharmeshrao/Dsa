const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number),count = 0;
   let array = input[1].trim().split(" ").map(Number);
   for(let i = 0;i< n; i++)if(array[i] >= array[k-1])count++;
   k == 0 ? console.log(0) : console.log(count)
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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
  
  