function findit(array, l, h) {
  if (l < h) {
    let perv = partition(array, l, h);
    findit(array, l, perv - 1);
    findit(array, perv + 1, h);
  }
}

function partition(array, l, h) {
  let perv = array[l];
  let i = l,
    j = h;
  while (i < j) {
    while (array[i] <= perv) i++;
    while (array[j] > perv) j--;
    if (i < j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[l], array[j]] = [array[j], array[l]];
  return j;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  let l = 0,
    h = array.length - 1;
  findit(array, l, h);
  console.log(array.join(" "));
}
if (process.env.USERNAME === "adam") {
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
