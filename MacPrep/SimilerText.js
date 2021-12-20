function findit(str1, str2, i,j){
    if(i == 0 || j == 0)return 0;
    if(str1[i-1] == str2[j-1])return 1 + findit(str1, str2,i - 1, j - 1);
    else return Math.max(findit(str1, str2, i,j-1),findit(str1, str2, i-1,j))
}


function runProgram(input) {
   input = input.trim().split("\n");
   let str1 = input[0].trim();
   let str2 = input[1].trim();
   let i = str1.length;
   let j = str2.length;
   console.log(findit(str1, str2, i,j));
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`AEDFHR
    ABCDGH`);
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
  
  