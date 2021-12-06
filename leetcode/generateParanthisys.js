let n = 5;
function findit(n){
    let str = ''
    for(let i = 0;i< n;i++){
        str += '('
    }
    for(let i = 0;i< n;i++){
        str += ')'
    }
    return str
}

console.log(findit(5));
