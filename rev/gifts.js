const findGift = (array,n)=>{
    let map = new Map(),max = 0,right = 0,left = 0;
    while(right < n){
        if(!map.has(array[right])){map.set(array[right++],1);max = Math.max(max,map.size);}
        else map.delete(array[left++]);}console.log(max);}
const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findGift(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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
