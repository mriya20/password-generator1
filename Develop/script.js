// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }


  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {



  console.log(userInput)

  //while (true)

  var userInput = window.prompt("How long do you want your password to be?")

  //User exited the prompt
  if (userInput === null) {
    return
  }

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
  }


  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []


  if (userWantsNumbers === true) {
    optionsCart.push(numberList)

  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)

  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    Math.random()
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  console.log(generatedPassword)

  return generatedPassword
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }


}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





