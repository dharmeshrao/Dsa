const partition = (array, l, h) => {
  let i = l, j = h, pivot = array[l];
  while (i < j) {
      while (array[i] <= pivot)i++;
      while (array[j] > pivot) j--;
    if (i < j) [array[i], array[j]] = [array[j], array[i]];
  }
  [array[j], array[l]] = [array[l], array[j]];
  return j;
};
const findit = (array, l, h) => {
  if (l < h) {
    let pivot = partition(array, l, h);
    findit(array, l, pivot - 1);
    findit(array, pivot + 1, h);
  }
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  findit(array,0,array.length-1)
  console.log(...array);
};
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
