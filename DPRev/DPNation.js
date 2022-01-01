const findit = (str1, str2) => {
  let dp = Array(str1.length + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(str2.length + 1).fill(-1);
  }
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i == 0) dp[i][j] = false;
      if(j == 0)dp[i][j] = true;
    }
  }
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] == str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else {
        dp[i][j] =  dp[i][j - 1] || dp[i - 1][j]
      }
    }
  }
  let x = dp[str1.length][str2.length]
  console.log(dp);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let str1 = input[line++].trim();
    let str2 = input[line++].trim();
    findit(str1, str2);
  }
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
  dhar
  meshdhar
  ax
  xaa`);
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
