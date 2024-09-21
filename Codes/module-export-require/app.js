// import { calculateSum, x } from "./sum.js";
require("./xyz"); // one module into another
// const { calculateSum, x } = require("./calculate/sum"); // CommonJS import
// const { calculateMultiply } = require("./calculate/multiply");

const { x, calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");

calculateSum(10, 20);
calculateMultiply(10, 16);
console.log(x);
console.log(data);
console.log("Namaste Node");
