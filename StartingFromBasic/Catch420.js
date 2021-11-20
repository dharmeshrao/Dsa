function runProgram(input) {
   input = input.trim().split('\n')
   let n = input[0].trim().split('').map(Number)
   let flag = false;
   for(let i = 0;i< n.length;i++){
       for(let j = i;j < n.length;j++){
        let str = ''
        for(let k = i;k <= j;k++){
            str += n[k]
        }if(str == '420')flag = true
    }
   }flag ? console.log('cought') : console.log('not');
  }
  if (process.env.USERNAME === "adam") {
    runProgram(`97420`);
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
  
  