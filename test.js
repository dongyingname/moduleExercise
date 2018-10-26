var inp = require("./collect");
var imp = require("./ascende");

//var arr = inp();
//console.log(uIn);
//console.log(inp);
var inp1 = inp.numSet(); //subfunction collect
var imp1 = imp.sorted;//function ascend

console.log(inp1(1));
console.log(inp1(5));
console.log(inp1(3));
console.log(inp1(12));
console.log(inp1(8));
///////////////////////
console.log(imp1(1));
console.log(imp1(3));
console.log(imp1(1));
console.log(imp1(7));
console.log(imp1(2));
console.log(imp1(99));
console.log(imp1(33));




