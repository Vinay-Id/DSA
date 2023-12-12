// Example 1:
// Input: s = "?zs"
// Output: "azs"
// Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
// Example 2:
// Input: s = "ubv?w"
// Output: "ubvaw"
// Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".

var modifyString = function (s) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      const prev = i > 0 ? result[i - 1] : "";
      const next = i < s.length - 1 ? s[i + 1] : "";
      for (const char of chars) {
        if (char !== prev && char !== next) {
          result.push(char);
          break;
        }
      }
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");
};
