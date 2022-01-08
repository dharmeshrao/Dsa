const findMax = (array, n) => {
  let count = 1;
  let a = [],
    b = [];
  for (let i = 0; i < array.length; i++) {
   if(count % 2 != 0){
       console.log("no");
       if((i+1) % 6 == 0){
        if(array[i] == 1){
            a += array[i];
            count+=2
        }
        if(array[i] == 3){a += array[i];count+=2}
        if(array[i] != 1 && array[i] != 3){a += array[i]; count ++}
       }
       else{
        if(array[i] == 1){a += array[i];count++}
        if(array[i] == 3){a += array[i];count++}
        if(array[i] != 1 && array[i] != 3){a += array[i];}
       }
    //    console.log(a);
    //    1 2 0 0 1 1 6 6 4 1 6 1
   }
   if(count % 2 == 0){
    console.log("no");
    if((i+1) % 6 == 0){
     if(array[i] == 1){
         a += array[i];
         count+=2
     }
     if(array[i] == 3){a += array[i];count+=2}
     if(array[i] != 1 && array[i] != 3){a += array[i]; count ++}
    }
    else{
     if(array[i] == 1){a += array[i];count++}
     if(array[i] == 3){a += array[i];count++}
     if(array[i] != 1 && array[i] != 3){a += array[i];}
    }
 //    console.log(a);
 //    1 2 0 0 1 1 6 6 4 1 6 1
}
  }
//   console.log(a, b);
  //   a > b ? console.log("AB de Villiers") : b > a ? console.log("Virat") : console.log("Tie")
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findMax(array, n);
  }
};
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`1
    2
    1 2 0 0 1 1 6 6 4 1 6 1`);
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
