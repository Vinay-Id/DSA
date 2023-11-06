var moveZeroes = function (nums) {
  let arr = [];
  let zero = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zero.push(0);
    } else {
      arr.push(nums[i]);
    }
  }
  console.log([...arr, ...zero]);
};
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
