function rot13(str) {
  let res = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i]);
    if (index >= 0 && index < 13) {
      res += alphabet[index + 13];
    } else if (index < 0) {
      res += str[i];
    } else if (index >= 12) {
      res += alphabet[index + 13 - 26];
    }
  }
  return res;
}

rot13("SERR PBQR PNZC");
