let x = 4;
const findit = (n)=>{
    if(n < 0) return 0;
    if(n == 0) return 1;
    return findit(n-1) + findit(n-2) + findit(n-3)
}

console.log(findit(x));