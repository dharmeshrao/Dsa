let s = "hello";
s = s.split("");
let res = [],
  ind = [];
for (let i = 0; i < s.length; i++) {
  if (
    s[i] == "a" ||
    s[i] == "e" ||
    s[i] == "i" ||
    s[i] == "o" ||
    s[i] == "u" ||
    s[i] == "A" ||
    s[i] == "E" ||
    s[i] == "I" ||
    s[i] == "O" ||
    s[i] == "U"
  ) {
    res.push(s[i]), ind.push(i);
  }
}
ind.reverse();
for (let i = 0; i < ind.length; i++) {
    s[ind[i]] = res[i]
}

console.log(s);
