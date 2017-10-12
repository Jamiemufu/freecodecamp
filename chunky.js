
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var total = [];
for (var i = 0; i < arr.length; i+=size) //loop array
  {
    total.push(arr.slice(i, i + size)); //push onto total slice *size* times size elements
  }
  return total;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
