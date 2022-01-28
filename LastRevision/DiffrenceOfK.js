const findDifference = (array,n,k)=>{
    let i = 0,j = 0;
    while(j < n){
        if((array[j] - array[i]) === k)return "Yes";
        if((array[j] - array[i]) > k)i++;
        else j++;
    }
    return "No"
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let [n,k] = input[line++].trim().split(" ").map(Number),array = input[line++].trim().split(" ");
       console.log(findDifference(array,n,k));
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
  
  