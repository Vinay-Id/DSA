// Example 1:
// Input: s = "0"
// Output: true
// Example 2:
// Input: s = "e"
// Output: false
// Example 3:
// Input: s = "."
// Output: false

var isNumber = function (s) {
  return (
    s / 1 == s && s !== "Infinity" && s !== "-Infinity" && s !== "+Infinity"
  );
};
