const runProgram = (input)=> {
  input = input.trim().split('\n')
  let array = input[1].trim().split(' ').map(Number),ans = [],sum = 0;
  for(let i = 0;i< array.length; i++)ans.push(sum += array[i]);
  for(let i = 3;i< input.length; i++){
      let [l,r] = input[i].trim().split(" ").map(Number);
      if(l == 1)console.log(ans[r-1]);
      else console.log(ans[r-1] - ans[l-1-1])
  }  
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
  
  