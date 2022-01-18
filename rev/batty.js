const findit = (n, k, current, res,final) => {
  if (res.length === k) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) sum += res[i];
    if (sum === n) final.push(res.join(" "))
  }
  for (let i = current; i <= 9; i++) {
    res.push(i);
    findit(n, k, i + 1, res,final);
    res.pop();
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number),final = [];
  findit(n, k, 1, [],final);
  final.length === 0 ? console.log(-1) :
  final.map((e)=>console.log(e))
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`8 2`);
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
