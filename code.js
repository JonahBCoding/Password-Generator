var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "*", "+", "?"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = '';
var confirmSpecChar;
var confirmAlphaLower;
var confirmAlphaUpper;
var confirmNumericChar;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

    var confirmLength = (prompt("How many characters would you like your password to contain"));

    while (confirmLength < 8 || confirmLength > 128) {
        alert("Password must be between 8 - 128 characters in length. Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain"));
    } 
}

alert('Your password will contain ' + confirmLength + ' characters');

var confirmSpecChar = confirm("Click OK to include Symbols in your password. Click cancel to skip");
var confirmAlphaLower = confirm("Click OK to include lowercase letters in your password. Click cancel to skip");
var confirmAlphaUpper = confirm("Click OK to include uppercase letters in your password. Click cancelto skip");
var confirmNumericChar = confirm("Click OK to include Numbers in your password. Click Cancel to skip");

while(confirmSpecChar === false && confirmAlphaLower === false && confirmAlphaUpper === false && confirmNumericChar === false) {

  alert("You must choose at least one character type");

  var confirmSpecChar = confirm("Click OK to include Symbols in your password. Click cancel to skip");
  var confirmAlphaLower = confirm("Click OK to include lowercase letters in your password. Click cancel to skip");
  var confirmAlphaUpper = confirm("Click OK to include uppercase letters in your password. Click cancelto skip");
  var confirmNumericChar = confirm("Click OK to include Numbers in your password. Click Cancel to skip");

}

var passwordCharacters = [];

if (confirmSpecChar) {
  passwordCharacters = passwordCharacters.concat(specialChar);
}

if (confirmAlphaLower) {
  passwordCharacters = passwordCharacters.concat(alphaLower);
}

if (confirmAlphaUpper) {
  passwordCharacters = passwordCharacters.concat(alphaUpper);
}

if (confirmNumericChar) {
  passwordCharacters = passwordCharacters.concat(numChar);
}

return passwordCharacters