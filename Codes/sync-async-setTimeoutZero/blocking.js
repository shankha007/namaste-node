const crypto = require("crypto");

console.log("Hello World");

var a = 1076898;
var b = 20986;

// Password Base Key Derivative Function 2
// Synchronous
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("First Key is generated");
});

// Asynchornous
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const res = x * y;
  return res;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
