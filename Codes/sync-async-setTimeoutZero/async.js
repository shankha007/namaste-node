const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1076898;
var b = 20986;

fs.readFileSync("./file.txt", "utf8");

console.log("Synchronous File Read is completed");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data: ", data);
});

function multiplyFn(x, y) {
  const res = x * y;
  return res;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
