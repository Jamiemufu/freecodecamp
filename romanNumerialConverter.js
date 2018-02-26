function convertToRoman(num) {
  var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var numeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var converted = "";
  
  for (var i = 0; i < number.length; i++)
    {
      while (number[i] <= num) {
        converted += numeral[i];
        num-=number[i];
      }
    }
  return converted;
}

convertToRoman(36);
