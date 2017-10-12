function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var cleanArr = [];
 cleanArr = arr.filter(function(arr) {
   if (Boolean(arr))
     {
       return arr;
     }
 });
       
 return cleanArr;
  
}

bouncer([7, "ate", "", false, 9]);