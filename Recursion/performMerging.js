// array_1 = [1, 5, 7, 9];

// array_2 = [2, 4, 6, 8];

// n = length of the array i.e., 4

// p1 = 0; // pointer 1 for traversing array_1

// p2 = 0; // pointer 2 for traversing array_2

// while(none of the pointers reach end of the array){

//     if(array_1[p1] <= array_2[p2]){

//         push array_1[p1] to the resultant array;

//         increment p1;

//     }else{

//         push array_2[p2] to the resultant array;

//         increment p2;

//     }

//     while(p1 does not reach end){

//         push array_1[p1] to the resultant array;

//         increment p1;

//     }
function findit(arr1, arr2, res, n) {
  let i = 0;
  j = 0;
  while (i < n && j < n) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    res.push(arr1[i]);
    i++;
  }
  while (j < n) {
    res.push(arr2[j]);
    j++;
  }
  console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let res = [];
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  findit(arr1, arr2, res, n);
}
if (process.env.USERNAME === "adam") {
  runProgram(`4
  1 5 7 9
  2 4 6 8`);
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
