let n = 5;
for(let i = 0;i< n; i++){
    let str = ''
 for(let j = 0; j < n; j++){
     if(i != n - 1){
         if(j == 0)str += "*";
         if(j == n - 2)str += "*";
         else str += "  ";
     }
     if(i == n - 1){
         str += '* '
     }
 }
 console.log(str);
}