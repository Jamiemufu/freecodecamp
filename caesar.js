function rot13(str) { // LBH QVQ VG!
  // Create new empty array
  var newWord = [];
  // create for loop for length of str
  for (i = 0; i < str.length; i++) {
    // put charcode at i in to it's own variable
    var newLet = str.charCodeAt(i);
    // if charcode is between A-Za-z
    if (newLet >= 65 && newLet <= 90) {
      // take away 13 from the charcode
      newLet -= 13;
      // if charcode is now below A-Z (in the numbers)
      if (newLet < 65) {
        // add 26 to get to A-Z equivalent
        newLet += 26;
      }
    }
    // push the new charcode, converted to the actual character, in to an array
    newWord.push(String.fromCharCode(newLet));
  }
  // join the array back together and return the answer
  return newWord.join('');
}