const findSort = (array,n)=>{
  for (let i = 0; i < n; i++) {
      let flag = true;
      for(let j = 0;j< n- i - 1; j++){
          if(array[j] > array[j+1]){[array[j+1], array[j]] = [array[j], array[j+1]],flag = true}
      }
      if(!flag)break
  }
  console.log(...array);
}
const runProgram = (input) => {
    input = input.trim().split("\n");
    let array = input[1].trim().split(" ").map(Number);
    findSort(array,array.length)
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
  