// Example 1:
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:
// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

var prefixCount = function (words, pref) {
  let cnt = 0;
  for (let word of words) {
    if (word.startsWith(pref)) {
      cnt++;
    }
  }
  return cnt;
};


