let n = 10;
for(let i = 0;i< n; i++){
    let str = ''
    for(let j = 0; j < n; j++){
        if(i != n - 1){
            if(j== 0)str += "*";
        }
        if(i == n-1){
            str += '* '
        }
    }
    console.log(str);
}