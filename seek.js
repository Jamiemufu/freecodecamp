
function destroyer(arr) {
  // Remove all the values
var args = []; //var new array for arguments
  //loop through arguments starting at 1, index 0 is the arr
for (var i = 1; i < arguments.length;i++)
  {
    args.push(arguments[i]); //add current argument to args
  }
  return arr.filter(function(value){ //return filtered array
    return args.indexOf(value) === -1; //if value(passed arr) has indexOf args
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
