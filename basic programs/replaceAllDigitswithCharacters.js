// Example 1:
// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:
// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'

var replaceDigits = function (s) {
  let words = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      str = str + words[words.indexOf(s[i - 1]) + parseInt(s[i])];
    } else {
      str = str + s[i];
    }
  }
  return str;
};
console.log(replaceDigits("a1c1e1"));
