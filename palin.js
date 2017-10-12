
function palindrome(str) {
  // Good luck!
  var letters = str.replace(/[\W_]/g,"");
  var newString = "";
  letters = letters.toLowerCase();
  for (var i = letters.length - 1; i >= 0; i--)
    {
      newString += letters[i];
    }
  if (newString === letters)
    {
      return true;
    }
  else {
    return false;
  }
}



palindrome("eye");
