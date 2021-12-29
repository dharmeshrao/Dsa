const findit = (str1, str2, m, n, dp) => {
  if (m === 0 || n === 0) return 0;
  if (dp[m][n] !== -1) return dp[m][n];
  if (str1[m - 1] === str2[n - 1])
    return 1 + findit(str1, str2, m - 1, n - 1, dp);
  else
    return (dp[m][n] = Math.max(
      findit(str1, str2, m - 1, n, dp),
      findit(str1, str2, m, n - 1, dp)
    ));
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let str1 = input[line++].trim();
    let str2 = input[line++].trim();
    let dp = Array(10001).fill(-1);
    for (let i = 0; i < dp.length; i++) {
      dp[i] = Array(101).fill(-1);
    }
    let m = str1.length,
      n = str2.length;
    let x = findit(str1, str2, m, n, dp);
    if (x === str1.length) console.log("YES");
    else console.log("NO");
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    abcdef
    adbcef
    aa
    aa`);
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
