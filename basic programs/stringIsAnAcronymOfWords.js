// Example 1:
// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:
// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.

var isAcronym = function (words, s) {
  if (words.length !== s.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false;
    }
  }
  return true;
};
