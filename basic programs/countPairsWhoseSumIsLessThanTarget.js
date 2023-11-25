var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
};
