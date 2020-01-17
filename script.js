var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var numericCharacters = ["1234567890"];
var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];


document.getElementById("generate").addEventListener("click", function () {
    function generatePassword() {
        var retVal = "";
        passwordCharacterSet = "";
        var passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
        if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a number between 8 and 128!");
        return generatePassword();
        }
        var passwordSpecialCharacters = confirm("Would you like to include Special Characters?");
        if (passwordSpecialCharacters) {
            passwordCharacterSet = passwordCharacterSet + specialCharacters
        }
        var passwordNumericCharacters = confirm("Would you like to include Numeric Characters?");
        if (passwordNumericCharacters) {
            passwordCharacterSet = passwordCharacterSet + numericCharacters
        }
        var passwordUppercaseCharacters = confirm("Would you like to include Uppercase Characters?");
        if (passwordUppercaseCharacters) {
            passwordCharacterSet = passwordCharacterSet + uppercaseCharacters
        }
        var passwordLowercaseCharacters = confirm("Would you like to include Lowercase Characters?");
        if (passwordLowercaseCharacters) {
            passwordCharacterSet = passwordCharacterSet + lowercaseCharacters
        }
        if (!passwordSpecialCharacters && !passwordNumericCharacters && !passwordUppercaseCharacters && !passwordLowercaseCharacters) {
        alert("Please choose a character set!")
        return generatePassword();
    }

// add an if statement checking if charcterset includes undefined if so return to function
        console.log(passwordLength);
        console.log(passwordSpecialCharacters);
        console.log(passwordNumericCharacters);
        console.log(passwordUppercaseCharacters);
        console.log(passwordLowercaseCharacters);
        console.log(passwordCharacterSet);

        for (var i = 0; i < passwordLength; ++i) {
            retVal += (passwordCharacterSet.charAt(Math.floor(Math.random() * passwordCharacterSet.length)));
        }
        return retVal;
    }
    passwordCharacterSet = "";
    var retVal = generatePassword();
    console.log(retVal);
    document.getElementById("passwordResult").innerHTML = retVal;
})
function copyText() {
    var copyText = document.getElementById("passwordResult");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
document.getElementById("copyText").addEventListener("click", function () {
    copyText();
})
