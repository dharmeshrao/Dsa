function findit(str) {
  str = str.split("").sort().join("");
  return str;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let res = [];
  let obj = {};
  for (let i = 1; i < input.length; i++) {
    let str = input[i].trim();
   if(findit(str)){
       if(obj[str] == undefined)obj[str] = 1;
       else obj[str]++;
   }
  }
  console.log(obj);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
