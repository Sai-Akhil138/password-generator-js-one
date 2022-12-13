const passwordInput = document.querySelector(".password");
const copyText = document.querySelector(".copy");
const rangeInput = document.querySelector(".range");
const rangeNumber = document.querySelector(".range-number");
const generateBtn = document.querySelector(".generate-btn");

let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRTUVWXYZ1234567890!@#$%^&*(){}:;][<>?~";

const generatePassword = () => {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }
  // console.log(allCharacters[randomNumbers]);
  // console.log(newPassword);
  passwordInput.value = newPassword;
};

rangeInput.addEventListener("input", () => {
  rangeNumber.innerText = rangeInput.value;
  generatePassword();
  // console.log(rangeInput.value);
});

copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
});

generateBtn.addEventListener("click", generatePassword);
