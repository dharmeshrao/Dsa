
const findit = (n, arr1, arr2) => {
let res = []
    for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
        if(i < j){
            arr1[j] = arr1[i] + arr1[j]
            if(arr1[j] === arr2[i]){
                res.push(arr2[j])
                break
            }
        }
    }
  }
  console.log(res);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    findit(n, arr1, arr2);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    3
    1 -1 0
    1 1 -2
    3
    0 1 1
    0 2 2
    2
    1 0
    1 41
    2
    -1 0
    -1 -41
    5
    0 1 -1 1 -1
    1 1 -1 1 -1`);
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
