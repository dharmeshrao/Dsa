const runProgram = (input) => {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let num = "1234567890";
  let final = "";
  for (let i = 0; i < str.length; i++) {
    let res = 0;
    for (let j = 0; j < num.length; j++) {
      if (str[i] == num[j]) {
        let x = +str[i];
        for (let k = 0; k < x; k++) {
          final += str[i - 1];
        }
        break;
      }
    }
  }
  console.log(final);
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`a3b2`);
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
