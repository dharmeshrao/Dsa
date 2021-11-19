//Enter code here
function findit(array, k) {
    let i = 0,
      j = array.length - 1;
    while (i <= j) {
      let mid = Math.floor(i + (j - i) / 2);
      if (array[mid] == k) return 1;
      if (array[mid] < k) i = mid + 1;
      if (array[mid] > k) j = mid - 1;
    }
    return -1;
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let array = input[1].trim().split(" ").map(Number);
    console.log(findit(array, k));
  }
  if (process.env.USERNAME === "adam") {
    runProgram(`5 8
      2 -2 0 3 4`);
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
  