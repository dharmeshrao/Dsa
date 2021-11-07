function findit(array, l, r) {
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    findit(array, l, mid);
    findit(array, mid + 1, r);
    merge(array, l, r, mid);
  }
}

function merge(array, l, r, mid) {
  let res = [],
    i = l,
    j = mid,
    k = l;
  while (i <= mid && j <= r) {
    if (array[i] < array[j]) {
      (res[k] = array[i]), i++;
    } else {
      (res[k] = array[j]), j++;
    }
    k++;
  }
  if (i > mid) {
    while (j <= r) {
      res[k] = array[j++];
    }
  } else {
    while (i <= mid) {
      res[k++] = array[i++];
    }
  }
  for (let k = l; k <= r; k++) {
    array[k] = res[k];
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let [l, r] = [0, array.length - 1];
  let x = findit(array, l, r);
  console.log(x);
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
