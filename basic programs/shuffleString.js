// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

var restoreString = function (s, indices) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};
