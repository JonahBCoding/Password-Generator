// Assignment code here

// Various Arrays

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Prompt to confirm password length
function generatePassword() {

  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside parameters
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8-128 characters. Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  alert(' Your password will contain ' + confirmLength + ' characters ');

  // Determine parameters of password
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  //loop if answered outside parameters

  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  }

  var passwordCharacters = []

  if (confirmSpecialCharacter === true) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  } else if (confirmSpecialCharacter === false) {
    passwordCharacters = passwordCharacters
  }
  if (confirmNumericCharacter === true) {
    passwordCharacters = passwordCharacters.concat(number)
  } else if (confirmNumericCharacter === false) {
    passwordCharacters = passwordCharacters
  }

  if (confirmLowerCase === true) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  } else if (confirmLowerCase === false) {
    passwordCharacters = passwordCharacters
  }

  if (confirmUpperCase === true) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  } else if (confirmUpperCase === false) {
    passwordCharacters = passwordCharacters 
  }

  

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
