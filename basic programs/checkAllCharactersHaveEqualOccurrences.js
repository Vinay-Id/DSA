// Example 1:
// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:
// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

var areOccurrencesEqual = function (s) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 0;
    }
  }
  for (let x in obj) {
    arr.push(obj[x]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
};
