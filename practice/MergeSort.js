const merge = (arr1, arr2) => {
  let res = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) res.push(arr1[i++]);
    else res.push(arr2[j++]);
  }
  while (i < arr1.length) res.push(arr1[i++]);
  while (j < arr2.length) res.push(arr2[j++]);
  return res;
};

const findit = (array, n) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = findit(array.slice(0, mid));
  let right = findit(array.slice(mid));
  return merge(left, right);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  console.log(findit(array, n).join(" "));
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
      3 5 0 9 8`);
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
