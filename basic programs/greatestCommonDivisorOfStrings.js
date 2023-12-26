// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  return str1.substring(0, gcd(str1.length, str2.length));
};
