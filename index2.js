function generateKey(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    let key = Math.floor(Math.random() * characters.length);
    str += characters.substring(key, key + 1);
  }
  return str;
}
console.log(generateKey(16));
