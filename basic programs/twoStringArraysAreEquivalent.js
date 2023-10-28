// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

var arrayStringsAreEqual = function (word1, word2) {
  let w1 = "";
  let w2 = "";
  word1.forEach((ele) => {
    w1 = w1 + ele;
  });
  word2.forEach((ele) => {
    w2 = w2 + ele;
  });
  if (w1 == w2) {
    return true;
  } else {
    return false;
  }
};
