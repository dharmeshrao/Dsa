function findit(arr,res){
    if (arr.length === 0) {
        console.log(res.join(' '));
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          console.log(curr);
          let next = curr.splice(i, 1);
          findit(curr.slice(), res.concat(next))
       }
     }
   }
function runProgram(input) {
   input = input.trim().split('\n')
   let str = input[1].trim().split(' ')
   let res = []
   findit(str,res)
  }
  if (process.env.USERNAME === "adam") {
    runProgram(`3
    1 2 3`);
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
  
  