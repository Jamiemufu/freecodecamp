function steamrollArray(arr) {
  
  return arr.reduce(function(prev, next) {
    return prev.concat(
      Array.isArray(next) ? steamrollArray(next) : next );
  }, []); 
}

steamrollArray([1, [2], [3, [[4]]]]);
