export default function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  const password = [];
  let pool = "";

  const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!'@#$%^&*()_-+=[]{}:;`/?,<.>"
  };

  function getRandomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
  }

  if (uppercase) {
    pool += characterSets.uppercase;
    password.push(getRandomChar(characterSets.uppercase));
  }
  if (lowercase) {
    pool += characterSets.lowercase;
    password.push(getRandomChar(characterSets.lowercase));
  }
  if (numbers) {
    pool += characterSets.numbers;
    password.push(getRandomChar(characterSets.numbers));
  }
  if (symbols) {
    pool += characterSets.symbols;
    password.push(getRandomChar(characterSets.symbols));
  }

  if (!pool) return "Select at least one option";

  length = Number(length);
  if (isNaN(length) || length <= 0) {
    return "Invalid length";
  }

  if (length < password.length) {
    return `Length must be at least ${password.length} for selected options`;
  }

  for (let i = password.length; i < length; i++) {
    password.push(getRandomChar(pool));
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}
