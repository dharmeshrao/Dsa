function timeout(a) {
  return new Promise((res, rej) => {
    if (typeof a !== "number") rej("you can't acces this");
    else
      return setTimeout(() => {
        res(a);
      }, 3000);
  });
}

timeout("sfas")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

const curring = (array) => {
  if (array.length <= 0) return 0;
  let a = array.pop();
  return curring(array) + a;
};
console.log(curring([1, 2, 3, 4, 5]));

let a = 10;
let b = a;

let obj = {
  name: "Dharmesh",
};
let obj2 = obj;
Object.freeze(obj);

obj2.lastname = "yadav";
console.log(obj);

let newObj = Object.assign(obj);
newObj.city = "gurugram";
console.log(obj);

let a = 10;
function first() {
  return () => {
    console.log(a);
  };
}

a = 20;
first()();

var a = 10;
let b = 10;
const c = 10;
c = 20;
