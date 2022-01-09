const findGift = (array) => {
  const map = new Map();
  let left = 0;
  let right = 0;
  let maxSize = 0;
  while (right < array.length) {
    if (!map.has(array[right])) {
      map.set(array[right], 1);
      maxSize = Math.max(maxSize, map.size);
      right++;
    } else {
      map.delete(array[left++]);
    }
  }
  console.log(maxSize);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findGift(array);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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
