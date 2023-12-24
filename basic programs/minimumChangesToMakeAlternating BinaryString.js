// Example 1:
// Input: s = "0100"
// Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.
// Example 2:
// Input: s = "10"
// Output: 0
// Explanation: s is already alternating.

var minOperations = function (s) {
  const n = s.length;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] !== "0") {
      count1++;
    }

    if (s[i] !== "1") {
      count2++;
    }
    [count1, count2] = [count2, count1];
  }
  return Math.min(count1, count2);
};
