const findit = (array, n) => {
  let count = 0;
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[array[i]] == undefined) obj[array[i]] = 1;
    else obj[array[i]]++, count++;
  }
  console.log(count);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let array = [];
    let n = +input[line++];
    for (let i = 0; i < n; i++) {
      array.push(input[line++].trim().split("").sort().join(""));
    }
    findit(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc
    `);
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
