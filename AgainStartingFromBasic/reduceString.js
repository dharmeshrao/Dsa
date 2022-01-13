const runProgram = (input)=> {
  input = input.trim().split('\n')
  let str = input[0].trim(),res = "";
  for(let i = 0;i< str.length; i++)str[i] !== str[i+1] ? res += str[i] : i++;
  console.log(res.length == 0 ? "Empty String" : res)
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`aaabccddd`);
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
  
  