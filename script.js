// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

// Get DOM elements
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordOutput = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

// Function to generate a random password
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = "";
  if (uppercaseInput.checked) {
    chars += uppercaseChars;
  }
  if (lowercaseInput.checked) {
    chars += lowercaseChars;
  }
  if (numbersInput.checked) {
    chars += numberChars;
  }
  if (symbolsInput.checked) {
    chars += symbolChars;
  }

  if (!chars) return alert("Select at least one character type!");

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  passwordOutput.value = password;
}
// Function to copy password to clipboard
function copyPassword() {
  if (!passwordOutput.value) {
    alert(" There's nothing to copy");
    alert("Plz generate a password first");
  } else {
    navigator.clipboard
      .writeText(passwordOutput.value)
      .then(() => alert("Password copied to clipboard!"))
      .catch((err) => alert("Failed to copy: " + err));
  }
}

// Event Listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
