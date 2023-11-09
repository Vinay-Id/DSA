// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var runningSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      nums[i] = nums[0];
    } else {
      nums[i] = nums[i - 1] + nums[i];
    }
  }
  return nums;
};
