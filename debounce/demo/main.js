import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
let data = document.getElementById("thisisinput");
let newData;
data.oninput = () => {
  debounce(yes, 1000)(data.value);
};
function debounce(fn, time) {
  if (newData) clearTimeout(newData);
  return (...args) => {
    newData = setTimeout(() => {
      fn(...args);
    }, time);
  };
}
function yes(text, a, b) {
  a++;
  console.log(text, b);
  return;
}
