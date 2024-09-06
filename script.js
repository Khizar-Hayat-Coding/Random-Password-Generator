const Input = document.getElementById("password");

const length = 7;
const specialCharacters = "!%&*@#?";
const numbers = "1234567890";
const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
const largeAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const allChars = specialCharacters + numbers + smallAlphabets + largeAlphabets;

function GeneratePassword() {
    let password = " ";
    password = password + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password = password + numbers[Math.floor(Math.random() * numbers.length)];
    password = password + smallAlphabets[Math.floor(Math.random() * smallAlphabets.length)];
    password = password + largeAlphabets[Math.floor(Math.random() * largeAlphabets.length)];

    while (length > password.length) {
        password = password + allChars[Math.floor(Math.random() * allChars.length)];
    }
    Input.value = password;
}

function Copy() {
    Input.select();
    document.execCommand("copy");
}