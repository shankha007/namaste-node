// Synchronous Code
var a = 1078698;
var b = 20986;

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);

// Asynchronous Code
https.get("https://api.fbi.com", (res) => {
  console.log("Secret Data: " + res.secret);
});

fs.readFile("./gossip.txt", "utf8", (data) => {
  console.log("File data", data);
});

setTimeout(() => {
  console.log("Wait here for 5 seconds");
}, 5000);
