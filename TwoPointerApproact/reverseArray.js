function findit(array){
    let i = 0,j = array.length-1;
    while(i < j){
        if(i < j){
            [array[i],array[j]] = [array[j],array[i]]
            i++,j--
        }
    }
    console.log(array);
}


function runProgram(input) {
   input = input.trim().split('\n')
    let [n,k] = input[0].trim().split(' ').map(Number)
    let array = input[1].trim().split(' ').map(Number)
    findit(array)
   }
   if (process.env.USERNAME === "adam") {
     runProgram(`5 3
     3 0 2 9 7`);
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