console.log("Hello World");

var a = 1076898;
var b = 20986;

setTimeout(() => {
  console.log("Call me ASAP!");
}, 0);

setTimeout(() => {
  console.log("setTimeout called after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const res = x * y;
  return res;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
