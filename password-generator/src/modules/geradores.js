const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = '!"@#$%^&*()_-+=[]{}:;`/?,<.>';
const generateSymbols = () => symbols[rand(0, symbols.length)]

export default function generatePassword(qntd, uppercase, lowercase, numbers, symbols) {
  const password = [];

  qntd = Number(qntd)

  console.log(qntd)

  for (let i = 0; i < qntd; i++) {
    uppercase && password.push(generateUpperCase());
    lowercase && password.push(generateLowerCase());
    numbers && password.push(generateNumbers());
    symbols && password.push(generateSymbols());
  }

  return password.join('').slice(0, qntd);
}