let objj = {
  name: "Dharmesh",
  age: 23,
  person: { a: "dharmesh", b: "Ahir" },
};
let obj = {};
for (key in objj) {
  if (typeof objj[key] !== "object") {
    if (obj[key] == undefined) obj[key] = objj[key];
  } else {
      let x = objj[key]
    for(ket in x){
        if(obj[ket] == undefined)obj[ket] = obj[x[ket]]
    }
  }
}
console.log(obj);
