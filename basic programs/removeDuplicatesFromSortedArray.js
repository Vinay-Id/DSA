// var removeDuplicates = function (nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (temp.includes(nums[i]) !== true) {
//       temp.push(nums[i]);
//     }
//   }
//   return temp;
// return [...new Set(nums)]
// };

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
