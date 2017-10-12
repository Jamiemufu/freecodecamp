
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //first make new array = sorted array
var sortArr = arr.sort(function(a, b){ //sort array by function for number values
    return a - b; // subtract b from a to sort ascending
  });
  //find lowest index num should be inserted
  for (var i = 0; i <= sortArr.length; i++) //loop through arr
    {
      if (num <= sortArr[i]) //if num is less or equal element i of arr
        {
          return i;
        }
    }
  //if number is greater than last element of sorted array
  if (num > sortArr[sortArr.length - 1])
    {
      return sortArr.length;
    }
}

getIndexToIns([40, 60], 50);
