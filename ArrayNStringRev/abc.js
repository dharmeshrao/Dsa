console.log("before");
setTimeout(()=>{
    console.log("eventloop");
},3000)

console.log('after');

