function findit(arr1, arr2, n) {
  let count = 0,
    i = 1,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      count++, i++;
    } else {
      j++, count--;
    }
    console.log(count);
    if (count == n) return true;
  }
  return false;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array1 = input[1].trim().split(" ").map(Number);
  let array2 = input[2].trim().split(" ").map(Number);
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  let x = findit(array1, array2, n);
  x ? console.log("Not Possible") : console.log("Possible");
}
if (process.env.USERNAME === "adam") {
  runProgram(`5
  2 4 6 5 6 10 8
  3 7 7 7 7 11 9
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
