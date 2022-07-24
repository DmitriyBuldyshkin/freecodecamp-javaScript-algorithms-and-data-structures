function convertToRoman(num) {
  const romNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  const arabNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = [];
  while (num > 0) {
    for (let i = 0; i < arabNum.length; i++) {
      while (num >= arabNum[i]) {
        res.push(romNum[i]);
        num -= arabNum[i];
      }
    }
  }
  return res.join("");
}

convertToRoman(36);
