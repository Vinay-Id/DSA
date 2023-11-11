// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


var reverseWords = function(s) {
    let words = s.split(' ');
    words = words.filter(word => word !== '');
    words.reverse();
    return words.join(' ');
};


console.log(reverseWords("a good   example"));
