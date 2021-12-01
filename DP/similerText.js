function findit(str, res, arr1, curr) {
  if (res.length > 0) arr1.push(res);
  for (let i = curr; i < str.length; i++) {
    res += str[i];
    findit(str, res, arr1, i + 1);
    res = res.substring(0, res.length - 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let arr1 = [];
  let arr2 = [];
  findit(str1, "", arr1, 0);
  findit(str2, "", arr2, 0);
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) res.push(arr1[i]);
    }
  }
  let max = 0;
  for (let i = 0; i < res.length; i++) {
    max = Math.max(max, res[i].length);
  }
  console.log(max);
}
if (process.env.USERNAME === "adam") {
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
