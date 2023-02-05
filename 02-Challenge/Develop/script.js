// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsNum = "0123456789"
var charsSpec = "!@#$%^&*()"
var charsLow = "abcdefghijklmnopqrstuvwxyz"
var charsUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
 //Sets the password length between 8 and 128
  var passwordLength = window.prompt("Enter Password Length ( Between 8 and 128 )");
if (passwordLength < 8 | passwordLength > 128) {
  alert("Password must be between 8 and 128 characters!")
  //Ends if a character that doesnt fit the criteria is chosen
  return;
}

//Asks the user what criteria he wants in his password.
var usecharsSpec = confirm("Do you want special characters in your password?")
var usecharsNum = confirm("Do you want numbers in your password?")
var usecharsLow = confirm("Do you want lowercase characters in your password?")
var usecharsUp = confirm("Do you want uppercase characters in your password?")

//If none are chosen, displays a meessage and ends.
if (!usecharsSpec & !usecharsNum & !usecharsLow & !usecharsUp) {
 alert("You must choose at least one password criteria")
 return;
}

var password = "";
var possibleCharacters = "";
//The criteria that are picked are added to the possible characters.
if (usecharsSpec) {
  possibleCharacters += charsSpec;
}
if (usecharsNum) {
  possibleCharacters += charsNum;
}
if (usecharsLow) {
  possibleCharacters += charsLow;
}
if (usecharsUp) {
  possibleCharacters += charsUp;
}
//Randomize
for (var i = 0; i < passwordLength; i++) {
  password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
}

 passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
