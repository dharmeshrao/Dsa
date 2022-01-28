const findMid = (array,low, high)=>{
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if(array[mid] > array[mid + 1])return mid + 1;
        if (array[mid] < array[mid - 1]) return mid;
        if(array[mid] > array[0])low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],array = input[1].trim().split(' ').map(Number);
   let mid = findMid(array,0,n-1);
   if(mid === -1)console.log("NO");
   else{
       let left = findMid(array,0,mid-1);
       let right = findMid(array,mid,n-1);
       left === right ? console.log("YES") : console.log("NO");
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`7
    3 4 7 9 1 2 0`);
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
  
  