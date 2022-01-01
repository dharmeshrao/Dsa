const lower = (array, k)=>{
    let low = 0,high = array.length - 1,res = -1;
    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2)
        if(array[mid] == k){
            res = mid;
            high = mid - 1;
        }
        if(array[mid] > k){
            high = mid - 1;
        }
        else {
            res = mid;
            low = mid +1
        }
    }
    return res;
}
const upper = (array, k)=>{
    let low = 0,high = array.length - 1,res = -1;
    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2)
        if(array[mid] == k){
            res = mid;
            low = mid + 1;
        }
        if(array[mid] < k){
            low = mid + 1;
        }
        else {
            res = mid;
            high = mid - 1;
        }
    }
    return res;
}



const findit = (array, a, b)=>{
    let y = upper(array,b)
    let z = lower(array,a)
    // console.log(y,z);
    console.log(array,z,y);
}

const runProgram = (input)=> {
   input = input.trim().split('\n')
   let array = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)
   for(let i = 3; i < input.length; i++){
       let [a,b] = input[i].trim().split(" ").map(Number)
       findit(array,a,b)
   }
   
  }
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
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
  
  