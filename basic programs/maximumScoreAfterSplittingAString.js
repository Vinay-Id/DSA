// Example 1:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
// Example 2:
// Input: s = "1111"
// Output: 3

var maxScore = function (s) {
  let maxScore = 0;
  let zerosOnLeft = 0;
  let onesOnRight = s.split("1").length - 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zerosOnLeft++;
    } else {
      onesOnRight--;
    }
    maxScore = Math.max(maxScore, zerosOnLeft + onesOnRight);
  }
  return maxScore;
};
