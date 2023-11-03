// Example 1:
// Input: s = "string"
// Output: "rtsng"
// Explanation:
// After typing first character, the text on the screen is "s".
// After the second character, the text is "st".
// After the third character, the text is "str".
// Since the fourth character is an 'i', the text gets reversed and becomes "rts".
// After the fifth character, the text is "rtsn".
// After the sixth character, the text is "rtsng".
// Therefore, we return "rtsng".

var finalString = function (s) {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "i") {
      str = str.reverse();
    } else {
      str.push(s[i]);
    }
  }
  return str.join("");
};
