function palindrome(str) {
  const regEx = /\W|_/g;
  str = str.replace(regEx, "").toLowerCase();
  let test = [...str].reverse().join("");
  return test === str;
}

palindrome("eye");
