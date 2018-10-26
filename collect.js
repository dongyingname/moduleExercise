 // var sortingFnc = require ('sortingFnc');

//console.log("Your unsorted array is: " + uInput);
var nums = [];
function set(){
  return function(input) {
    nums.push(input);
    return nums;
  };
}

exports.numSet = set;
// exports.get = get;


