console.log("Sum module executed");
var x = 10;

function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

module.exports = { x, calculateSum }; // CommonJS Export
