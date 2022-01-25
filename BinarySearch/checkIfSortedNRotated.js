let x = "fog"
function f(){
    console.log(x);
}
x = "g"
function g(){
    let x = "y"
    f()
}
g()

let arr = [1,3]
arr.customProperty = true;
arr.forEach((e)=>console.log(e))