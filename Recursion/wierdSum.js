function findit(array, max, current, res, flag) {
  if (res.length > 0) {
    let x = 0;
    for (let i = 0; i < res.length; i++) {
      x += res[i];
    }
    if (x == max) {
      flag.push(0);
    }
  }
  for (let i = current; i < array.length; i++) {
    res.push(array[i]);
    findit(array, max, i + 1, res, flag);
    res.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let current = 0,
      res = [];
    let flag = [];
    let x = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    array.sort((a, b) => a - b);
    let max = array.pop();
    findit(array, max, current, res, flag);
    if(flag.length > 0) {console.log("Yes")}
    else{console.log("No")}
  }
}
if (process.env.USERNAME === "adam") {
  runProgram(`10
  5
  1 6 5 8 2
  4
  4 2 5 1
  3
  0 6 4
  10
  4 11 24 14 60 27 52 44 42 32
  3
  25 8 19
  14
  339 849 499 158 31 664 281 462 751 712 227 412 563 115
  14
  8 125 112 76 98 86 29 21 183 139 173 155 51 61
  7
  239 39 404 595 681 183 467
  20
  671 500 999 226 157 717 282 102 311 587 799 449 935 54 834 858 543 634 372 19
  20
  848 752 319 282 964 740 942 238 519 22 466 865 115 76 183 424 674 381 587 623
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

//   def getAns(arr, X, i, sum):
//     if i==arr.length:
//             return sum==X
//     return getAns(arr, X, i+1, sum+arr[i]) or getAns(arr, X, i+1, sum)
// def findSum(array):
//     sort(array)
//     largestElement = array[array.length-1] # last element is largest after sorting
//     array = array[:-1] # removing last element
//     return getAns(array, largestElement, 0, 0)
