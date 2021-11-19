function runProgram(input) {
  // Write code here
 
 input=input.trim().split("\n");
 let test=+input[0];
 let line=1;
 let front=0;
 let rear=0;
 let queue=[];
 
  let main=[];
  let club1=[];
  let club2=[];
  let club3=[];
  let club4=[];
 
 for(let i=0;i<test;i++){
     let arr=[];
     let [f,n,m]=input[line++].trim().split(" ");
    n=+n;
    m=+m;
    
    
    if(f==="E"){
       
       if(check(main,n)===undefined){
           main.push(n);
          //  console.log(main);
           if(n===1){
               club1.push(m);
           }else if(n===2){
               club2.push(m);
           }else if(n===3){
               club3.push(m);
           }else if(n===4){
               club4.push(m);
           }
           
       }else{
           
            if(n===1){
               club1.push(m);
           }else if(n===2){
               club2.push(m);
           }else if(n===3){
               club3.push(m);
           }else if(n===4){
               club4.push(m);
           }
           
       }
    }else{
        
        if(main[0]===1){
            let ans=main[0]+" "+club1[0];
            console.log(ans);
            club1.shift();
            if(club1.length===0){
              main.shift();   
            }
        }else if(main[0]===2){
            let ans=main[0]+" "+club2[0];
            console.log(ans);
            club2.shift();
            if(club2.length===0){
              main.shift();   
            }
        }else if(main[0]===3){
            let ans=main[0]+" "+club3[0];
            console.log(ans);
            club3.shift();
            if(club3.length===0){
              main.shift();   
            }
        }else if(main[0]===4){
            let ans=main[0]+" "+club4[0];
            console.log(ans);
            club4.shift();
            if(club4.length===0){
              main.shift();   
            }
        }
       
       
    }
    
 }
 
 
}


function check(main,n){
    
    for(let i=main.length-1;i>=0;i--){
        if(n===main[i]){
            return true;
        }
    }
}



if (process.env.USERNAME === "adam") {
  runProgram(``);
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
    process.exit(0) ;
  });
}