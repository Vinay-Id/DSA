// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"
var reverseWords = function (s) {
  let str = s.split(" ").map((elem) => elem.split("").reverse().join(""));
  return str.join(" ");
};
