function titleCase(str) {
  str = str.split(' '); //split string into array

  for (i = 0; i < str.length; i++) { //loop array
    str[i] = str[i].toLowerCase().split(''); //convert to lowrcase
    str[i][0] = str[i][0].toUpperCase(); //convert to uppercase
    str[i] = str[i].join('');
  }

  return str.join(' '); //join back as array
}

titleCase("I'm a Little tea pot");