
const findit = (arr1,arr2)=>{
    if(arr1[0] > arr2[0])return "False";
     if(arr1[0] >= arr2[0] && arr1[1] > arr2[1])return "False";
     if(arr1[0] >= arr2[0] && arr1[1] >= arr2[1] && arr1[2] > arr2[2])return "False";
   return "True";
}

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let arr1 = input[line++].trim().split(".").map(Number);
    let arr2 = input[line++].trim().split(".").map(Number);
    console.log(findit(arr1, arr2));
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`6
  7.55.94
  36.30.0
  89.98.56
  73.8.48
  73.81.99
  33.55.50
  5.68.14
  86.23.96
  43.86.16
  43.37.2
  85.10.23
  44.46.19`);
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
