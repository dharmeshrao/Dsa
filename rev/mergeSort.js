const merge = (array1, array2) => {
  let res = [],i = 0,j = 0;
  while (i < array1.length && j < array2.length) {
      if(array1[i] < array2[j])res.push(array1[i++]);
      else res.push(array2[j++])
  }
  while (i < array1.length) res.push(array1[i++]);
  while (j < array2.length) res.push(array2[j++]);
  return res;
};
const findit = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = findit(array.slice(0, mid));
  let right = findit(array.slice(mid));
  return merge(left, right);
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  console.log(...findit(array));
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`4
  8 4 2 1`);
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
