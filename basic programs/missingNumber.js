// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

const missingNumber = function (nums) {
  let total = 0;
  for (let i = 0; i <= nums.length; i++) {
    total += i;
  }
  let x = nums.reduce((acc, elem) => acc + elem);
  return total - x;
};
console.log(missingNumber([3, 0, 1]));
