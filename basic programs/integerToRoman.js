// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
var intToRoman = function (num) {
  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i]) {
      result += romanSymbols[i];
      num -= romanValues[i];
    }
  }
  return result;
};
