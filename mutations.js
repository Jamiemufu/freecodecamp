function mutation(arr) {
var test = arr[0].toLowerCase();
var target = arr[1].toLowerCase();
  
  for (var i = 0; i < target.length; i++) //length of second string
    {
      if (test.indexOf(target[i]) === -1)
      return false;
  }
  return true;
  
}

mutation(["hello", "hey"]);