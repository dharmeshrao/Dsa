const detectPalindrome = (str,n)=>{
    let obj = {},count = 0;
    for(let i = 0; i < n; i++)!obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]]++;
    for(key in obj)if(obj[key] % 2 != 0)count++;
    return count <= 1
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++],str = input[line++].trim()
       detectPalindrome(str,n) ? console.log("Yes") : console.log("No");
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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
  
  