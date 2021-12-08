function findit(str, curr, res, obj) {
  if (res.length > 0) {
    if (obj[res] == undefined) obj[res] = 1;
  }
  for (let i = curr; i < str.length; i++) {
    res += str[i];
    findit(str, i + 1, res, obj);
    res = res.substring(0, res.length - 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let res1 = {},
    res2 = {};
  findit(str1, 0, "", res1);
  findit(str2, 0, "", res2);
  let x = Object.keys(res1);
  for (let i = 0; i < x.length; i++) {
    if (res2[x[i]] == undefined) res2[x[i]] = 1;
    else res2[x[i]]++;
  }
  let n = 0;
  for (key in res2) {
    if (res2[key] >= 2) {
      n = Math.max(n, key.length);
    }
  }
  console.log(n);
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
