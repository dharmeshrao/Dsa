const findit = (array,n,k)=>{
    let i = 0,j = 0,count = 0,sum = 0;
    while(j < n){
        sum += array[i] + array[j];
        if(sum % k !== 0){count++,j++;}
        else {
            count--;
            sum -= array[i++]
        }
    }
    console.log(count);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number);
   let array = input[1].trim().split(" ").map(Number);
   findit(array,n,k)
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`4 3
    2 3 4 6`);
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
  
  