const findit = (array,l,r)=>{
  if( l < r ){
    let pivot = partition(array,l,r)
    findit(array,l,pivot-1)
    findit(array,pivot+1,r)
  }
}

const partition = (arra,l,r)=>{
  let i = l,j = r, pivot = arra[l]
  while( i < j){
    while( arra[i] <= pivot)i++;
    while(arra[j] > pivot)j--;
    if(i < j){
      [arra[i],arra[j]] = [arra[j],arra[i]]
    }
  }
  [arra[j],arra[l]] = [arra[l],arra[j]]
  return j;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  let l = 0,
    r = array.length - 1;
  findit(array, l, r);
  // console.log(partition(array,l,r));
  console.log(array.join(" "));
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
