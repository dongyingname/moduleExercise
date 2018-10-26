var mine = require("./collect");
function ascend(input){
//matrix.push(mine(input));
  /*
  1. accpet the input*/
 /* 2. take the input and operate it on addNum
 */
  var func = mine.numSet();
 /* console.log(func);*/
  var newArray = func(input);

  newArray = newArray.sort(function(a, b){
    return a - b;
  });
  //console.log(newArray);
   /*to generate a new array
  3. sort the new array using the for loop
  4 return the updated new array
*/
  /*var arr = [];
  var large = Infinity;
  for (var i = 1; i < newArray.length; i++){
    // arr[i] = Number(arr[i]);
    //console.log(input[i]);
    if (input[i] < large){
      large = input[i];
      arr.push(large);
    }
  }*/

  return newArray;
}
exports.sorted = ascend;

