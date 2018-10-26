var mine = require("./makeArray");
var inp = process.argv.splice(2)[0];
function ascend(input){
//matrix.push(mine(input));
  /*
  1. accpet the input*/

 /* 2. take the input and operate it on addNum
 */
  var newArray = mine(inp);
   /*to generate a new array
  3. sort the new array using the for loop
  4 return the updated new array
*/
  var arr = [];
  var large = Infinity;
  for (var i = 0; i < input.length; i++){
    if (input < large){
      large = input;
      arr.push(large);
    }
  }
  return arr;
}
console.log(ascend(inp));
