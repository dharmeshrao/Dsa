const merge = (l1, l2) => {
  console.log(l1,l2);
  let res = []
  let a = l1.length, b = l2.length;
  let i = 0,j = 0;
  while(i < a && j < b){
      if(l1[i] < l2[j]){
          res.push(l1[i])
          i++
      }
      else{
          res.push(l2[j])
          j++
      }
  }
      while(i < l1.length){
          res.push(l1[i])
          i++
      }
      while(j < l2.length){
          res.push(l2[j])
          j++
  }
  return res
};
const findit = (array) => {
  if(array.length <= 1)return array;
  let mid = Math.floor(array.length/2)
  let left = findit(array.slice(0,mid))
  let right = findit(array.slice(mid))
 return merge(left,right)
};

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  console.log(findit(array).join(" "));
  console.log(array.slice(0,2));
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
  3 5 0 9 8`);
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
