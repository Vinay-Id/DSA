// Example 1:
// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:
// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

var differenceOfSum = function (nums) {
  let elementSum = nums.reduce((acc, elem) => acc + elem);
  let digitSum = nums
    .join("")
    .split("")
    .map((elem) => parseInt(elem))
    .reduce((acc, elem) => acc + elem);
  return elementSum - digitSum;
};

console.log(differenceOfSum([1, 15, 6, 3]));
