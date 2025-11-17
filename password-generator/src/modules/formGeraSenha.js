import './geradores'
import generatePassword from './geradores';

const password = document.querySelector('.password');
const passwordLength = document.querySelector('.password-length');
const uppercase = document.querySelector('.uppercase')
const lowercase = document.querySelector('.lowercase')
const symbols = document.querySelector('.symbols')
const numbers = document.querySelector('.numbers')
const button = document.querySelector('.generate-password')

button.addEventListener('click', async () => {
  password.innerHTML = await passwordGenerated();
});

async function passwordGenerated() {
  const password = await generatePassword(
    passwordLength.value,
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked
  );
  return password || "Select at least one option"
}