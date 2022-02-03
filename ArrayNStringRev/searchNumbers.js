const runProgram = (input)=> {
  input = input.trim().split('\n')
  let n = +input[0],array = input[1].trim().split(' ').map(Number).sort((a, b)=> a - b);
  let obj = {}
  for(let i = 0;i< n; i++)!obj[array[i]] ? obj[array[i]] = i : obj[array[i]] = i;
   console.log(obj);
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
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
  
  